import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
	  <div class="ad-banner">
		  <h3>Advertisements</h3>
		  <ng-template directive-ad-host></ng-template>
	  </div>
  `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex: number = -1;
  @ViewChild(AdDirective) _ViewChild_AdDirective: AdDirective;
  interval: any;

  constructor(private _CNSTR_componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this._CNSTR_componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this._ViewChild_AdDirective._CNSTR_viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
