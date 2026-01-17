import { Component, Inject } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TaskPriority } from '../../../cores/enums/task-priority.enum';
import { TaskType } from '../../../cores/enums/task-type.enum';
import { TaskColumn } from '../../../cores/models/task-column.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../../cores/models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
taskForm: UntypedFormGroup;

  priorityOptions = Object.values(TaskPriority);
  typeOptions = Object.values(TaskType);

  filteredColumns: TaskColumn[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaskDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {
    this.taskForm = this.createForm();
    this.handleProjectChange();
  }

  usersList = [
  { index: 1, name: 'Ali' },
  { id: 2, name: 'Ahmed' },
  { id: 3, name: 'Sara' },
];

onAssignedUsersChange(selected: string[]) {
  console.log('Selected tags:', selected);
}

  private createForm(): UntypedFormGroup {
    return this.fb.group({
      projectUlId: [null, Validators.required],
      projectIndexId: [null, Validators.required],

      title: ['', Validators.required],
      description: [''],

      columnId: [null, Validators.required],

      priority: [TaskPriority.MEDIUM],
      type: [TaskType.TASK],

      startDate: [null],
      dueDate: [null],
    });
  }

  private handleProjectChange(): void {
    this.taskForm.get('projectUlId')!.valueChanges.subscribe(
      // (projectUlId: string) => {
      //   const project = this.data.projects.find(
      //     p => p.ulId === projectUlId
      //   );

      //   if (!project) return;

      //   // set index id
      //   this.taskForm.patchValue({
      //     projectIndexId: project.indexId,
      //     columnId: null,
      //   });

      //   // filter columns for selected project
      //   this.filteredColumns = this.data.columns.filter(
      //     c => c.projectUlId === projectUlId
      //   );
      // }
    );
  }

  submit(): void {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const task: Task = {
      id: crypto.randomUUID(),

      projectUlId: this.taskForm.value.projectUlId,
      projectIndexId: this.taskForm.value.projectIndexId,

      title: this.taskForm.value.title,
      description: this.taskForm.value.description,

      // columnId: this.taskForm.value.columnId,
      priority: this.taskForm.value.priority,
      type: this.taskForm.value.type,

      createdBy: this.data.createdBy,
      createdAt: new Date(),
      projectId: '',
      status: undefined
    };

    this.dialogRef.close(task);
  }

  close(): void {
    this.dialogRef.close();
  }
}
