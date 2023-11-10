import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ActivationEnd,
  Event,
  EventType,
  Router,
  RouterModule,
} from '@angular/router';
import { Observable, Subject, filter, map, takeUntil } from 'rxjs';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';

@Component({
  selector: 'ui-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, NavBarItemComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnDestroy {
  @Input() rootName?: string;
  public routes$: Observable<ActivatedRouteSnapshot[]>;
  @ContentChildren(NavBarItemComponent) Items?: QueryList<NavBarItemComponent>;
  @Output() routeSelected = new EventEmitter<string>();

  private destroy$ = new Subject<void>();

  constructor(private router: Router) {
    this.routes$ = router.events.pipe(
      takeUntil(this.destroy$),
      filter(this.isActivationEnd),
      // activation is recursive, hence snapshot withould children emits first
      filter((event) => !event.snapshot.children.length),
      map((event) =>
        // the root is empty url
        event.snapshot.pathFromRoot.filter(
          (item, index) => !index || item.url.length
        )
      )
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  public navigate(route: ActivatedRouteSnapshot) {
    if (route.url.length) {
      this.router.navigate(route.url);
    } else {
      this.router.navigateByUrl('/');
    }
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
