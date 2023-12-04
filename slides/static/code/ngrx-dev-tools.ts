bootstrapApplication(AppComponent, {
	providers: [
		provideStoreDevtools({
			maxAge: 25,
			logOnly: !IsDevMode(),
			autoPause: true,
			trace: true,
			traceLimit: 10
		})
	]
});
