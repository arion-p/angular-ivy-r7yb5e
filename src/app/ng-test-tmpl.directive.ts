import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ng-test-tmpl]',
})
export class NgTestTmplDirective {
  constructor(public template: TemplateRef<any>) {}
}
