import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectDetialComponent } from './project-detial/project-detial.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { AngularMaterialModule } from '../../cores/module/angular-material/angular-material.module';
import { SharedModule } from '../../cores/shared/shared.module';


@NgModule({
  declarations: [ProjectListingComponent,ProjectDetialComponent,ProjectCardComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class ProjectModule { }
