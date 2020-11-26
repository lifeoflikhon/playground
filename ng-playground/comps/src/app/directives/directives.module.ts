import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimesDirective} from './times.directive';


@NgModule({
  declarations: [TimesDirective],
  exports: [
    TimesDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule {
}
