Install the code generator for angular.
Checkout the [cli api](https://angular.dev/cli).

```bash
npm install @angular/cli -g
```

create a new workspace

```bash
ng new ng-17-workshop --prefix score
```

create your first component

```bash
ng generate component shell
```

create your first interactive component

```bash
ng generate component navigation
```

create routes

```bash
ng g component home
ng g component faq
ng g component settings
```

create a library for domain unspecifc components
, update tsconfig import with @score/ui

```bash
ng g library ui --prefix=ui
```

create components and export them

```bash
ng g component card --project=ui
ng g component nav-bar --project=ui
ng g component theme-switch --project=ui
```

build the lib to use

```bash
ng build ui --watch
```

create a library for api access.
export models services and interceptors

```bash
ng g library api
```

create a self contained part of the application.
Export child routes

```bash
ng g library collections --prefix=col
ng g component overview --project=collections
ng g component edit --project=collections
```
