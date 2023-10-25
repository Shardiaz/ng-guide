import {
  Component,
  ContentChildren,
  EventEmitter,
  OnDestroy,
  Output,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';
import {
  ActivationEnd,
  EventType,
  Router,
  Event,
  RouterModule,
  Data,
} from '@angular/router';
import { Observable, Subject, filter, map, takeUntil } from 'rxjs';

interface RouteData {
  name: string;
}

@Component({
  selector: 'ui-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, NavBarItemComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnDestroy {
  public routes$: Observable<RouteData[]>;
  @ContentChildren(NavBarItemComponent) Items?: QueryList<NavBarItemComponent>;
  @Output() routeSelected = new EventEmitter<string>();

  private destroy$ = new Subject<void>();

  constructor(router: Router) {
    this.routes$ = router.events.pipe(
      takeUntil(this.destroy$),
      filter<Event, ActivationEnd>(this.isActivationEnd),
      map(this.mapEventToRoutes)
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

  private mapEventToRoutes(event: ActivationEnd) {
    const isRouteData = (data: Data | undefined): data is RouteData => {
      return !!data?.['name'];
    };

    return event.snapshot.pathFromRoot
      .map((route) => route.routeConfig?.data)
      .filter(isRouteData);
  }
}
