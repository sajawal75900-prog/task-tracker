import { Component, signal, Signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetialComponent } from '../project-detial/project-detial.component';
import { ProjectOfflineDbService } from '../../../cores/offline-db/project-offline-db.service';
import { ProjectDetail } from '../../../cores/models/project-detail.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrl: './project-listing.component.scss',
})
export class ProjectListingComponent {
  projects = signal<ProjectDetail[]>([]);
constructor(private dialog: MatDialog, private projectService: ProjectOfflineDbService,
  private router: Router
) {}

ngOnInit() {
    this.getProjects();
  }

  openCreateProjectDialog(project?: ProjectDetail) {
    const dialogRef = this.dialog.open(ProjectDetialComponent, {
      width: '700px',
      disableClose: true,
      data: project // you can pass data if needed
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

   onGoToTasks(projectId: number) {
  this.router.navigate(['/tasks', projectId]);
}

}
