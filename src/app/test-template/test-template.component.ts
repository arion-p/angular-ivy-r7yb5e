import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { NgTestTmplDirective } from '../ng-test-tmpl.directive';

@Component({
  selector: 'app-test-template',
  templateUrl: './test-template.component.html',
  styleUrls: ['./test-template.component.css'],
  providers: [
    {
      provide: NgTestTmplDirective,
      useFactory: (self: TestTemplateComponent) => self.ngTestTmpl,
      deps: [forwardRef(() => TestTemplateComponent)],
    },
  ],
})
export class TestTemplateComponent implements OnInit {
  @ViewChild(NgTestTmplDirective) ngTestTmpl: NgTestTmplDirective;

  constructor() {}

  ngOnInit() {}
}
