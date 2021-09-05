import { NgModule } from '@angular/core';
import { NebularFormlyComponent } from './nebular-formly.component';
import { NbFormlyCheckboxModule } from './components/nb-formly-checkbox/nb-formly-checkbox.module';



@NgModule({
  declarations: [NebularFormlyComponent],
  imports: [
    NbFormlyCheckboxModule
  ],
  exports: [NebularFormlyComponent]
})
export class NebularFormlyModule { }
