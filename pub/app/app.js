
console.log('app.js loaded');


defineModule('app/app', [],
	function (bullsncows) {
		'use strict';

		bullsncows.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$breadcrumbProvider',
			function ($stateProvider, $urlRouterProvider, $locationProvider, $breadcrumbProvider) {

				// no hash urls
				$locationProvider.html5Mode(true);

				// route all unkown urls to root
				$urlRouterProvider.otherwise('/');

				$breadcrumbProvider.includeAbstract = false;

				//only purely static pages routes are defined here. The rest are in the respectful angular app:
				$stateProvider
					.state('root', {
						abstract: true,
						templateUrl: bullsncows.toUrl('app.html'),
						controller: ['currentUser', '$breadcrumb', 'theme', '$state', '$stateParams', 'Alert',
							function (currentUser, $breadcrumb, theme, $state, $stateParams, Alert) {
								this.toUrl        = bullsncows.toUrl;
								this.currentUser  = currentUser;
								this.theme        = theme;
								this.$state       = $state;
								this.$stateParams = $stateParams;
								this.Alert        = Alert;

								this.$breadcrumb = $breadcrumb;
							}
						],
						controllerAs: 'App'
					})
					.state('app', {
						abstract: true,
						parent: 'root',
						views: {
							topbar: {
								templateUrl: bullsncows.toUrl('topbar.html')
							},
							navbar: {
								templateUrl: bullsncows.toUrl('navbar.html')
							},
							content: {
								templateUrl: bullsncows.toUrl('content.html')
							},
							footer: {
								templateUrl: bullsncows.toUrl('footer.html')
							}
						}
					});
			}
		]);

		return bullsncows;
    });