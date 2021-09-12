import { NgModule } from '@angular/core';
import { NbFormlyCheckboxModule } from './components/nb-formly-checkbox/nb-formly-checkbox.module';
import { NbFormlyInputModule } from './components/nb-formly-input/nb-formly-input.module';
import { NbFormlySelectModule } from './components/nb-formly-select/nb-formly-select.module';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [],
  imports: [
    NbFormlyCheckboxModule,
    NbFormlyInputModule,
    NbFormlySelectModule,
    PipesModule
  ],
  exports: []
})
export class NebularFormlyModule { }
