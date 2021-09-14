import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbFormlyWrapperPanelComponent } from './nb-formly-wrapper-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NbInputModule } from '@nebular/theme';



@NgModule({
  declarations: [NbFormlyWrapperPanelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    NbInputModule
  ]
})
export class NbFormlyWrapperPanelModule { }
