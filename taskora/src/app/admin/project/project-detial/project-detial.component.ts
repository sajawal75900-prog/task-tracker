import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-detial',
  templateUrl: './project-detial.component.html',
  styleUrl: './project-detial.component.scss'
})
export class ProjectDetialComponent {
constructor(
    public dialogRef: MatDialogRef<ProjectDetialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close() {
    this.dialogRef.close();
  }

  createProject() {
    // build project payload
    const project = {
      name: '',
      description: '',
      status: 'Active',
      priority: 'Medium',
    };

    this.dialogRef.close(project);
  }
}
