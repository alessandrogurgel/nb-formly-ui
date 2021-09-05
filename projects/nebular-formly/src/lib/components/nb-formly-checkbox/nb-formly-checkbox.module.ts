import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { NbFormlyCheckboxComponent } from './nb-formly-checkbox.component';

@NgModule({
  declarations: [ NbFormlyCheckboxComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    NbInputModule,
    NbCheckboxModule
  ]
})
export class NbFormlyCheckboxModule { }
