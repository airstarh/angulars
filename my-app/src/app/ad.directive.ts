import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[directive-ad-host]',
})
export class AdDirective {
  constructor(public _CNSTR_viewContainerRef: ViewContainerRef) {

    console.log("_CNSTR_viewContainerRef ++++++++++");
    console.log(_CNSTR_viewContainerRef);

  }
}

