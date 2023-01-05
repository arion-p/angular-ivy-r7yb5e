import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

import { NgTestTmplDirective } from '../ng-test-tmpl.directive';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @Input() item: any;

  @ContentChild(NgTestTmplDirective, { read: TemplateRef })
  template: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
