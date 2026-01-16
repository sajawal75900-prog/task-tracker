import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProjectDetail } from '../../../cores/models/project-detail.model';
import { ProjectService } from '../../../service/project.service';

@Component({
  selector: 'app-project-detial',
  templateUrl: './project-detial.component.html',
  styleUrl: './project-detial.component.scss'
})
export class ProjectDetialComponent implements OnInit {
 projectDetail!: UntypedFormGroup;
  formTitle: string | undefined;
  tableFloor = ['Ground', 'First', 'Second'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: ProjectDetail, private dialogRef: MatDialogRef<ProjectDetialComponent>
, private projectService: ProjectService,
     private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.projectDetail = this.fb.group({
      indexId: [this.data && this.data.indexId],
      projectUlId: [this.data && this.data.projectUlId],
      name: [this.data && this.data.name, Validators.required],
      description: [this.data && this.data.description],
      status: [this.data?.status || 'Active'],
      priority: [this.data?.priority || 'Medium']
    })
    this.formTitle = this.projectDetail.get('id')?.value ? 'Edit Table' : 'Register Table';
  }

  async onSubmit(): Promise<void> {
    if (this.projectDetail.valid) {
      const formData = this.projectDetail.value;
      await this.projectService.saveData(formData); // Now async!
      const message = formData.indexId ? 'Project updated successfully!' : 'Project created successfully!';
      this.dialogRef.close();
    } else {
    }
  }

  close(){
    this.dialogRef.close();
  }
}
