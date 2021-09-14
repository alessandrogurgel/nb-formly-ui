import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'lib-nb-formly-datepicker',
  templateUrl: './nb-formly-datepicker.component.html',
  styleUrls: ['./nb-formly-datepicker.component.scss']
})
export class NbFormlyDatepickerComponent extends FieldType implements OnInit {

  fieldName : string = null;
  constructor() { 
    super();
  }
  ngOnInit(): void {
    this.fieldName = (this.field.templateOptions && this.field.templateOptions.label || this.field.key).toString();
  }

}
