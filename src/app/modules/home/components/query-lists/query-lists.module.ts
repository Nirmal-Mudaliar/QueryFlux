import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryListsComponent } from './query-lists.component';



@NgModule({
  declarations: [
    QueryListsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QueryListsComponent,
  ]
})
export class QueryListsModule { }
