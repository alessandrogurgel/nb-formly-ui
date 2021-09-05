import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nb-formly-checkbox',
  templateUrl: './nb-formly-checkbox.component.html',
  styleUrls: ['./nb-formly-checkbox.component.scss']
})
export class NbFormlyCheckboxComponent extends FieldType  implements OnInit {

  fieldName: string = null;
  constructor() {
    super();
   }

  ngOnInit(): void {
    this.fieldName = (this.field.templateOptions && this.field.templateOptions.label || this.field.key).toString();
  }

}
