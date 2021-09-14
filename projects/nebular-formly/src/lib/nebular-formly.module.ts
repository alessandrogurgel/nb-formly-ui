import { NgModule } from '@angular/core';
import { NbFormlyCheckboxModule } from './components/nb-formly-checkbox/nb-formly-checkbox.module';
import { NbFormlyInputModule } from './components/nb-formly-input/nb-formly-input.module';
import { NbFormlySelectModule } from './components/nb-formly-select/nb-formly-select.module';
import { PipesModule } from './pipes/pipes.module';
import { NbFormlyDatepickerModule } from './components/nb-formly-datepicker/nb-formly-datepicker.module';



@NgModule({
  declarations: [],
  imports: [
    NbFormlyCheckboxModule,
    NbFormlyInputModule,
    NbFormlySelectModule,
    NbFormlyDatepickerModule,
    PipesModule
  ],
  exports: []
})
export class NebularFormlyModule { }
