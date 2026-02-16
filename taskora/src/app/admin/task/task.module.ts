import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { AngularMaterialModule } from '../../cores/module/angular-material/angular-material.module';
import { SharedModule } from '../../cores/shared/shared.module';
import { TaskListingComponent } from './task-listing/task-listing.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


@NgModule({
  declarations: [TaskListingComponent,TaskDetailComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class TaskModule { }
