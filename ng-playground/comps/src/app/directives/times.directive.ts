import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainerReference: ViewContainerRef,
    private templateReference: TemplateRef<any>
  ) {
  }

  @Input('appTimes') set render(times: number) {
    this.viewContainerReference.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainerReference.createEmbeddedView(this.templateReference, {});
    }
  }

}
