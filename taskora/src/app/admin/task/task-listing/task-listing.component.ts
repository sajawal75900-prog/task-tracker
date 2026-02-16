import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-task-listing',
  templateUrl: './task-listing.component.html',
  styleUrl: './task-listing.component.scss'
})
export class TaskListingComponent {

  constructor(private dialog: MatDialog) {}
openCreateTaskDialog(): void {
  this.dialog.open(TaskDetailComponent, {
    width: '650px',
    disableClose: true,
    data: {

    },
  })
  .afterClosed()
  .subscribe(task => {
    if (task) {
      // this.taskService.create(task);
    }
  });
}

}
