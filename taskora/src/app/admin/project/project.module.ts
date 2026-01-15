import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectDetialComponent } from './project-detial/project-detial.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ProjectListingComponent,ProjectDetialComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class ProjectModule { }
