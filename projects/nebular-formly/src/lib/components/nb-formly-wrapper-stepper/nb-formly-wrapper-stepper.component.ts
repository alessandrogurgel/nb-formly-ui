import { Component, OnInit } from '@angular/core';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'lib-nb-formly-wrapper-stepper',
  templateUrl: './nb-formly-wrapper-stepper.component.html',
  styleUrls: ['./nb-formly-wrapper-stepper.component.scss']
})
export class NbFormlyWrapperStepperComponent extends FieldWrapper implements OnInit {

  fieldName : string = null;
  constructor() { super(); }

  ngOnInit(): void {
    this.fieldName = (this.field.templateOptions && this.field.templateOptions.label || this.field.key || "").toString();
  }

  isValid(field: FormlyFieldConfig) {
    if (field && field.key) {
      return field.formControl.valid;
    }
    if (field && field.fieldGroup) {
      return field.fieldGroup.every(f => this.isValid(f));
    } 
   return false; 
  }

}
