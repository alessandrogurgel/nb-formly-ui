import { NgModule } from '@angular/core';
import { NebularFormlyComponent } from './nebular-formly.component';
import { NbFormlyCheckboxComponent } from './components/nb-formly-checkbox/nb-formly-checkbox.component';



@NgModule({
  declarations: [NebularFormlyComponent, NbFormlyCheckboxComponent],
  imports: [
  ],
  exports: [NebularFormlyComponent]
})
export class NebularFormlyModule { }
