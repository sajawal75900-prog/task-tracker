import { Component, signal, Signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from "@angular/material/icon";
import { ProjectDetialComponent } from '../project-detial/project-detial.component';
import { ProjectOfflineDbService } from '../../../cores/offline-db/project-offline-db.service';
import { ProjectDetail } from '../../../cores/models/project-detail.model';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrl: './project-listing.component.scss',
})
export class ProjectListingComponent {
  projects = signal<ProjectDetail[]>([]);
constructor(private dialog: MatDialog, private projectService: ProjectOfflineDbService) {}

ngOnInit() {
    this.getProjects();
  }

  openCreateProjectDialog() {
    const dialogRef = this.dialog.open(ProjectDetialComponent, {
      width: '700px',
      disableClose: true,
      data: null // you can pass data if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // refresh projects list or call API
        this.getProjects();
      }
    });
  }

  getProjects() {
    this.projectService.getAllProjects().then(projects => {
      console.log('Projects:', projects);
      this.projects.set(projects);
    });
    // Logic to fetch and display projects
  }
}
