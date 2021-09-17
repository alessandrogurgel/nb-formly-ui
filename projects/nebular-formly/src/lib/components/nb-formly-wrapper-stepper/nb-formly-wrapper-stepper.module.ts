import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbFormlyWrapperStepperComponent } from './nb-formly-wrapper-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NbButtonModule, NbStepperModule } from '@nebular/theme';




@NgModule({
  declarations: [NbFormlyWrapperStepperComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    NbButtonModule,
    NbStepperModule,
  ]
})
export class NbFormlyWrapperStepperModule { }
