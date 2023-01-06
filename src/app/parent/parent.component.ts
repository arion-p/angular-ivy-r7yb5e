import {
  Component,
  ContentChild,
  Directive,
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

  private _directive: NgTestTmplDirective;

  @ContentChild(NgTestTmplDirective)
  set directive(value: NgTestTmplDirective) {
    console.log(value);
    this._directive = value;
  }
  get directive(): NgTestTmplDirective {
    return this._directive;
  }

  //@ContentChild(NgTestTmplDirective)
  @ContentChild(NgTestTmplDirective, { read: TemplateRef })
  //@ContentChild(TemplateRef, { read: TemplateRef })
  template: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
