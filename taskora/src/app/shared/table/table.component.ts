import { formatDate } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CustomAction } from '../custom-action';
import { PaginatedFilter } from '../paginated-filter';
import { TableColumn } from '../table-column';
import { TableFilter } from '../table-filter.enum';
import { ColumnType } from '../column-type.enum';
import { TransactionStatusColor } from '../transaction-status';
import { FilterType } from '../filter-type.enum';
import * as moment from 'moment';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  // BPRole = BPRole;
  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  searchControl = new FormControl();
  // Form groups for each row, with each control for an editable column
  rowFormGroups = new Map<any, FormGroup>();
  @Input() skipActiveConfirmation = false;
  @Input() searchString: string;
  @Input() rowCustomActions: CustomAction[];
  @Input() tableCustomActions: CustomAction[];
  @Input() totalCount: number;
  @Input() pageSize: number;
  @Input() currentPageIndex = 0;
  @Output() onPageChanged = new EventEmitter<PaginatedFilter>();

  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  @Input() title: string;
  @Input() subtitle: string;
  @Input() addNewButtonText: string;

  @Input() isSortable = false;
  @Input() columns: TableColumn[];
  @Input() filters: TableFilter[] = [];
  @Input() minDate: string = new Date().toDateString();
  @Input() maxDate: string = new Date().toDateString();

  @Input() showPrint = false;
  @Input() showSyncStatus = null;
  @Input() syncModule = null;
  @Input() sectionLoaderKey = '';

  @Input() set data(data: any[]) {
    this.setTableDataSource(data);
  }
  @Input() noDataText = '';

  @Output() onFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onAdvanceFilter: EventEmitter<TableFilter[]> = new EventEmitter<
    TableFilter[]
  >();
  @Output() onReload: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSort: EventEmitter<Sort> = new EventEmitter<Sort>();
  @Output() onRowCustomAction = new EventEmitter<any>();
  @Output() onCustomAction = new EventEmitter<any>();
  @Output() onCreateForm = new EventEmitter<any>();
  @Output() onEditForm = new EventEmitter<any>();
  @Output() onView = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDeleteLocal = new EventEmitter<{ id?: number; ulId?: string; indexId?: number }>();
  @Output() onSelection: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCellEdit = new EventEmitter<{ row: any; column: string; value: any }>();

  ColumnType = ColumnType;
  TransactionStatusColor = TransactionStatusColor;
  FilterType = FilterType;

  // Actions = Actions;
  timer: any;

  constructor(public dialog: MatDialog) {
    const today = new Date();
    // Set maxDate as today
    this.maxDate = formatDate(today, 'yyyy-MM-dd', 'en-US');
    // Calculate one year before today for minDate
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 2);
    this.minDate = formatDate(oneYearAgo, 'yyyy-MM-dd', 'en-US');
  }

  gold: EventEmitter<{ data: CustomAction }>[];

  ngOnInit(): void {
    const columnNames = this.columns.map(
      (tableColumn: TableColumn) => tableColumn.name
    );
    this.displayedColumns = columnNames;
    this.registerEvents();
    if (this.searchString) {
      this.searchControl.setValue(this.searchString)
    }
  }

  registerEvents() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.currentPageIndex = 0;
        this.onFilter.emit(value);
      });
  }

  ngAfterViewInit(): void {
    this.tableDataSource.sort = this.matSort;
  }

  setTableDataSource(data: any) {
    if (data) {
      this.tableDataSource = new MatTableDataSource<any>(data);
      this.createFormGroups();
    } else {
      this.tableDataSource.data = [];
      this.rowFormGroups.clear();
    }
  }

  private createFormGroups() {
    this.tableDataSource?.data?.forEach(row => {
      const formGroup = new FormGroup({});
      this.columns?.forEach(column => {
        if (column.isEditable) {
          formGroup.addControl(column.dataKey, new FormControl(row[column.dataKey]));
          formGroup.controls[column.dataKey].valueChanges
            .pipe(debounceTime(500), distinctUntilChanged())
            .subscribe(value => {
              this.onCellEdit.emit({ row, column: column.dataKey, value });
            });
        }
      });
      this.rowFormGroups.set(row, formGroup);
    });
  }

  handleRowCustomAction($event: any, actionTitle: string) {
    const customActionPayload = new CustomActionPayload(actionTitle, $event);
    this.onRowCustomAction.emit(customActionPayload);
  }

  handleCustomAction($event: any) {
    this.onCustomAction.emit($event);
  }

  openCreateForm() {
    this.onCreateForm.emit();
  }

  openEditForm($event?) {
    this.onEditForm.emit($event);
  }
  openViewForm($event?) {
    this.onView.emit($event);
  }

  actionAllowed($event: any, action: string) {
    if ($event?.permissions?.length > 0) {
      return $event.permissions.indexOf(action) > -1 ? true : false;
    }
    return true;
  }

  handleReload() {
    this.searchControl.setValue('');
    this.onReload.emit();
  }

  handleAdvanceFilter(tableFilter: TableFilter, value?: number | null): void {
    if (value !== undefined) {
      tableFilter.filterValue = value;
    }
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (tableFilter.filterType === FilterType.Number &&
        tableFilter.filterValue > tableFilter.maxLimit) {
        tableFilter.filterValue = tableFilter.maxLimit;
      }
      if (tableFilter.filterType === FilterType.Date) {
        const m = moment(tableFilter.filterValue); // works for Date, Moment, string
        if (m.isValid()) {
          // Build API-safe UTC ISO based on key
          if (tableFilter.filterKey === 'fromDate') {
            const iso = m.clone().startOf('day').toISOString(); // 00:00:00.000Z
            tableFilter.filterValue = iso;
          } else if (tableFilter.filterKey === 'toDate') {
            const iso = m.clone().endOf('day').toISOString();   // 23:59:59.999Z
            tableFilter.filterValue = iso;
          } else {
            // Fallback: keep the picked date as ISO (UTC) without forcing start/end
            tableFilter.filterValue = m.toISOString();
          }
        } else if (!tableFilter.filterValue) {
          // optional: default to today if no value
          // tableFilter.filterValue = moment().startOf('day').toISOString();
        }
      }
      this.onAdvanceFilter.emit(this.filters);
    }, 500);
  }

  handleSort(sortParams: Sort) {
    sortParams.active = this.columns.find(
      (column) => column.name === sortParams.active
    ).dataKey;
    if (sortParams.direction == '') {
      sortParams.direction = 'asc';
    }
    this.onSort.emit(sortParams);
  }

  openDeleteConfirmationDialog($event) {
    // const dialogRef = this.dialog.open(DeleteDialogComponent, {
    //   data: 'Are you confirm to delete?',
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.onDelete.emit($event);
    //     this.onDeleteLocal.emit($event);
    //   }
    // });
  }

  onToggleChange(event: any, row: any, column: TableColumn) {
    event.source.checked = !event.source.checked;
    const formGroup = this.rowFormGroups.get(row);
    if (!formGroup || !formGroup.controls[column.dataKey]) return;
    const currentValue = formGroup.controls[column.dataKey].value;
    const newValue = !currentValue;
    if (this.skipActiveConfirmation) {
      formGroup.controls[column.dataKey].setValue(newValue, { emitEvent: false });
      this.onCellEdit.emit({ row, column: column.dataKey, value: newValue });
      return;
    }
    const action = newValue ? 'activate' : 'deactivate';
    // const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    //   data: { title: 'Confirmation', message: `Are you sure you want to ${action} this product?` },
    // });
    // dialogRef.afterClosed().subscribe(confirmed => {
    //   if (confirmed) {
    //     formGroup.controls[column.dataKey].setValue(newValue, { emitEvent: false });
    //     this.onCellEdit.emit({ row, column: column.dataKey, value: newValue });
    //   }
    //   else {
    //     event.source.checked = currentValue;
    //   }
    // }
  // );
  }

  onPageChange(pageEvent: PageEvent) {
    const event: PaginatedFilter = {
      pageNumber: pageEvent.pageIndex + 1,
      pageSize: pageEvent.pageSize ?? 10,
    };
    this.onPageChanged.emit(event);
  }

  isAllSelected() {
    const numSelected = this.tableDataSource.data.filter(
      (item) => item.selected
    ).length;
    const numRows = this.tableDataSource.data.length;
    return numRows > 0 && numSelected === numRows;
  }

  masterToggle() {
    const allSelected = this.isAllSelected();
    this.tableDataSource.data.forEach((element) => {
      element.selected = !allSelected;
    });
    this.emitSelectionChange();
  }

  toggleRowSelection(element: any) {
    element.selected = !element.selected;
    this.emitSelectionChange();
  }
  // Method to determine if the checkbox should be in the indeterminate state
  isIndeterminate(): boolean {
    const selectedRows = this.tableDataSource.data?.filter(
      (item) => item.selected
    )?.length;
    const totalRows = this.tableDataSource.data?.length;
    return selectedRows > 0 && selectedRows < totalRows;
  }

  getShadeColor(hex: string) {
    // return getShadeColor(hex);
  }

  emitSelectionChange() {
    this.onSelection.emit();
  }
}
