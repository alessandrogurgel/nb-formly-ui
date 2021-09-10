import { NgModule } from '@angular/core';
import { NbFormlyCheckboxModule } from './components/nb-formly-checkbox/nb-formly-checkbox.module';
import { NbFormlyInputModule } from './components/nb-formly-input/nb-formly-input.module';
import { NebularFormlyComponent } from './nebular-formly.component';



@NgModule({
  declarations: [NebularFormlyComponent],
  imports: [
    NbFormlyCheckboxModule,
    NbFormlyInputModule
  ],
  exports: []
})
export class NebularFormlyModule { }
