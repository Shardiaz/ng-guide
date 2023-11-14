import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ActivationEnd,
  Event,
  EventType,
  Router,
  RouterModule,
} from '@angular/router';
import { Observable, Subject, filter, map, takeUntil } from 'rxjs';

type RouteData = {
  route: ActivatedRouteSnapshot;
  resolvedPath: string[];
};

@Component({
  selector: 'ui-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnDestroy {
  public routes$: Observable<RouteData[]>;
  private destroy$ = new Subject<void>();

  constructor(router: Router) {
    this.routes$ = router.events.pipe(
      takeUntil(this.destroy$),
      filter(this.isActivationEnd),
      // activation is recursive, hence snapshot withould children emits first
      filter((event) => !event.snapshot.children.length),
      map((event) =>
        // the root is empty url
        event.snapshot.pathFromRoot
          .filter((item) => !!item.routeConfig?.title)
          .map((route) => ({
            route,
            resolvedPath: this.resolvePath(route.pathFromRoot),
          }))
      )
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private isActivationEnd(event: Event): event is ActivationEnd {
    switch (event.type) {
      case EventType.ActivationEnd:
        return true;
      default:
        return false;
    }
  }

  private resolvePath(pathFromRoot: ActivatedRouteSnapshot[]): string[] {
    return pathFromRoot
      .filter((route) => !!route.url.length)
      .reduce((result, route) => {
        result.push(...route.url.map((u) => u.path));
        return result;
      }, new Array<string>());
  }
}
