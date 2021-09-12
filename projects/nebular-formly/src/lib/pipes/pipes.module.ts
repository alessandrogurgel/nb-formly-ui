import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByPipe } from './sort-by.pipe';



@NgModule({
  declarations: [SortByPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SortByPipe
  ]
})
export class PipesModule { }
