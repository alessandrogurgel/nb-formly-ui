import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'lib-nb-formly-wrapper-panel',
  templateUrl: './nb-formly-wrapper-panel.component.html',
  styleUrls: ['./nb-formly-wrapper-panel.component.scss']
})
export class NbFormlyWrapperPanelComponent extends FieldWrapper  implements OnInit {

  fieldName : string = null;
  constructor() { super(); }

  ngOnInit(): void {
    this.fieldName = (this.field.templateOptions && this.field.templateOptions.label || this.field.key || "").toString();
  }

}
