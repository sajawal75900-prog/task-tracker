import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutlineButtonComponent } from './outline-button/outline-button.component';
import { TagInputControlComponent } from './tag-input-control/tag-input-control.component';
import { AngularMaterialModule } from "../module/angular-material/angular-material.module";



@NgModule({
  declarations: [OutlineButtonComponent,TagInputControlComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
],
  exports: [
    OutlineButtonComponent,
    TagInputControlComponent
  ]
})
export class SharedModule { }
