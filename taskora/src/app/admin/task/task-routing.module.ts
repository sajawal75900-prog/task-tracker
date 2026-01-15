import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListingComponent } from './task-listing/task-listing.component';

const routes: Routes = [
  { path: '', component: TaskListingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
