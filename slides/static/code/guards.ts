import { inject } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivateChildFn,
	CanActivateFn,
	CanDeactivateFn,
	CanMatchFn,
	ResolveFn,
	Route,
	RouterStateSnapshot,
	UrlSegment
} from '@angular/router';

// check the url
export const canMatchId: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
	return isGuid(segments[0].parameters['id']);
};

// check access to route
export const canActivateModule: CanActivateFn = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	return inject(AuthService).hasAccess(route.data['module']);
};

// check leaving a route
export const canDeactivateEditor: CanDeactivateFn<EditComponent> = (
	component: EditComponent,
	currentRoute: ActivatedRouteSnapshot,
	currentState: RouterStateSnapshot,
	nextState: RouterStateSnapshot
) => {
	if (!isLeavingEdit(nextState)) {
		return true;
	}

	return !component.isDirty;
};

// check childroutes
export const canActivateChild: CanActivateChildFn = (
	childRoute: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	return inject(AuthService).hasAccess(childRoute.data['module']);
};

// load data
export const resolveData: ResolveFn = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	return inject(EntityService).get(route.paramMap.get('id'));
};
