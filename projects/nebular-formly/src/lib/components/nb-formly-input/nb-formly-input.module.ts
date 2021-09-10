import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NbInputModule } from '@nebular/theme';
import { NbFormlyInputComponent } from './nb-formly-input.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [NbFormlyInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    NbInputModule,
    NgxMaskModule
  ]
})
export class NbFormlyInputModule { }
