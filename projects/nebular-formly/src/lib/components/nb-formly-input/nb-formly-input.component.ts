import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'lib-nb-formly-input',
  templateUrl: './nb-formly-input.component.html',
  styleUrls: ['./nb-formly-input.component.scss']
})
export class NbFormlyInputComponent  extends FieldType implements OnInit {

  fieldName : string = null;
  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.fieldName = (this.field.templateOptions && this.field.templateOptions.label || this.field.key).toString();
  }

}
