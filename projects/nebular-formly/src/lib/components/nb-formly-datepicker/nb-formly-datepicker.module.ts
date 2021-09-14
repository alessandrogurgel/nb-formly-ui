import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbFormlyDatepickerComponent } from './nb-formly-datepicker.component';
import { NbDatepickerModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({
  declarations: [NbFormlyDatepickerComponent],
  imports: [
    CommonModule,
    NbDatepickerModule,
    NbInputModule,
    ReactiveFormsModule,
    FormlyModule,
  ]
})
export class NbFormlyDatepickerModule { }
