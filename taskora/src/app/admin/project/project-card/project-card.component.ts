import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectDetail } from '../../../cores/models/project-detail.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
 @Input() project!: ProjectDetail;

  @Output() edit = new EventEmitter<ProjectDetail>();
  @Output() goToTasks = new EventEmitter<number>();

  onEdit() {
    this.edit.emit(this.project); // emit full project
  }

  onGoToTasks() {
    this.goToTasks.emit(this.project.indexId);
  }
}
