import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { NavigationService } from '../../application-model/services/navigation.service';
import { LoaderLayoutComponent } from '../general/layouts/loader-layout/loader-layout.component';
import { AbstractOnDestroyComponent } from '../general/miscellaneous/abstract-on-destroy-component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends AbstractOnDestroyComponent implements OnInit {
  @ViewChild(LoaderLayoutComponent) loaderLayoutComponent: LoaderLayoutComponent;

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService) {
    super();
  }

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroyed$)).subscribe((event: Event) => {
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

  changeOfRoutes(): void {
    this.navigationService.headerTitle = this.getDeepestHeaderTitle(this.route.snapshot.root);
  }

  private getDeepestHeaderTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title = routeSnapshot.data?.headerTitle;
    if (routeSnapshot.firstChild) {
      title = this.getDeepestHeaderTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }
}
