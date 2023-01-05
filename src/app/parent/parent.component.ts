import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

import { NgTestTmplDirective } from '../ng-test-tmpl.directive';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ParentComponent implements OnInit {
  @Input() item: any;

  private _template: TemplateRef<any>;

  @ContentChild(NgTestTmplDirective, { read: TemplateRef })
  //@ContentChild(TemplateRef, { read: TemplateRef })
  set template(value: TemplateRef<any>) {
    console.log(value?.createEmbeddedView?.name);
    this._template = value;
  }
  get template(): TemplateRef<any> {
    return this._template;
  }

  constructor() {}

  ngOnInit() {}
}
