import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from "@angular/material/icon";
import { ProjectDetialComponent } from '../project-detial/project-detial.component';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrl: './project-listing.component.scss',
})
export class ProjectListingComponent {
constructor(private dialog: MatDialog) {}

  openCreateProjectDialog() {
    const dialogRef = this.dialog.open(ProjectDetialComponent, {
      width: '700px',
      disableClose: true,
      data: null // you can pass data if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // refresh projects list or call API
        console.log('Project created:', result);
      }
    });
  }
}
