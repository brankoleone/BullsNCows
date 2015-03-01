
console.log('app.js loaded');

/*
defineModule('app/app', [
		'angularMoment',
		'ncy-angular-breadcrumb',
		'app/translate/translate',
		'app/services/api.service',
		'app/main/main',
		'app/account/account',
		'app/services/currentUser',
		'app/company/company',
		'app/account/signin/signin',
		'app/account/signup/signup',
		'app/account/forgotPassword/forgotPassword',
		'app/account/resetPassword/resetPassword',
		'app/directives/stickyFooter',
		'app/pages/pages',
		'app/services/alert',
		'app/pages/contacts'
	],
	function (auxionize) {
		'use strict';

		auxionize.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$breadcrumbProvider',
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
						templateUrl: auxionize.toUrl('app.html'),
						controller: ['currentUser', '$breadcrumb', 'theme', '$state', '$stateParams', 'Alert',
							function (currentUser, $breadcrumb, theme, $state, $stateParams, Alert) {
								this.toUrl        = auxionize.toUrl;
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
								templateUrl: auxionize.toUrl('topbar.html')
							},
							navbar: {
								templateUrl: auxionize.toUrl('navbar.html')
							},
							content: {
								templateUrl: auxionize.toUrl('content.html'),
							},
							footer: {
								templateUrl: auxionize.toUrl('footer.html')
							}
						}
					});
			}
		]);

		return auxionize;
	});
*/