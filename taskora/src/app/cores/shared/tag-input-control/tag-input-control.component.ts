import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-tag-input-control',
  templateUrl: './tag-input-control.component.html',
  styleUrl: './tag-input-control.component.scss'
})
export class TagInputControlComponent {
 @Input() options: any[] = [];
  @Input() displayKey: string = 'name';
  @Input() placeholder: string = 'Select';

  @Output() selectionChange = new EventEmitter<any[]>();

  inputCtrl = new UntypedFormControl('');
  selectedItems: any[] = [];
  filteredOptions!: Observable<any[]>;

 ngOnInit() {
  this.filteredOptions = this.inputCtrl.valueChanges.pipe(
    startWith(''), // 🔑 important
    map(value => this.filterOptions(value))
  );
}

filterOptions(value: string | null): any[] {
  const filterValue = (value || '').toLowerCase();

  return this.options.filter(
    option =>
      option[this.displayKey]
        .toLowerCase()
        .includes(filterValue) &&
      !this.selectedItems.includes(option)
  );
}


  formatChipLabel(item: any): string {
  const name = item[this.displayKey] || '';
  const shortName =
    name.length > 6 ? name.substring(0, 6) + '..' : name;

  return `${item.indexId} | ${shortName}`;
}

  selectOption(option: any) {
    this.selectedItems.push(option);
    this.inputCtrl.setValue('');
    this.selectionChange.emit(this.selectedItems);
  }

  removeItem(item: any) {
    this.selectedItems = this.selectedItems.filter(i => i !== item);
    this.selectionChange.emit(this.selectedItems);
  }
}
