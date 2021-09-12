import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbFormlySelectComponent } from './nb-formly-select.component';
import { PipesModule } from '../../pipes/pipes.module';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { NbSelectModule } from '@nebular/theme';


@NgModule({
  declarations: [NbFormlySelectComponent],
  imports: [
    CommonModule,
    PipesModule,
    FormlySelectModule,
    NbSelectModule,
  ]
})
export class NbFormlySelectModule { }
