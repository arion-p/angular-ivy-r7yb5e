import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './parent/parent.component';
import { NgTestTmplDirective } from './ng-test-tmpl.directive';
import { TestTemplateComponent } from './test-template/test-template.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    NgTestTmplDirective,
    TestTemplateComponent,
  ],
  bootstrap: [AppComponent],
  exports: [NgTestTmplDirective],
})
export class AppModule {}
