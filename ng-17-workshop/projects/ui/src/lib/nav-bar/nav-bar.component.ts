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

@Component({
  selector: 'ui-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnDestroy {
  public routes$: Observable<ActivatedRouteSnapshot[]>;
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {
    this.routes$ = router.events.pipe(
      takeUntil(this.destroy$),
      filter(this.isActivationEnd),
      // activation is recursive, hence snapshot withould children emits first
      filter((event) => !event.snapshot.children.length),
      map((event) =>
        // the root is empty url
        event.snapshot.pathFromRoot.filter((item) => !!item.routeConfig?.title)
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
}
