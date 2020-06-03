import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { LoaderLayoutComponent } from '../general/layouts/loader-layout/loader-layout.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild(LoaderLayoutComponent)
  loaderLayoutComponent: LoaderLayoutComponent;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          if (this.loaderLayoutComponent) {
            this.loaderLayoutComponent.setIsLoading(true);
          }
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          if (this.loaderLayoutComponent) {
            this.loaderLayoutComponent.setIsLoading(false);
          }
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  ngOnDestroy(): void {}

  ngOnInit(): void {}
}
