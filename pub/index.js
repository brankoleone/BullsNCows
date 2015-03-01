

require(['config'], function () {
    'use strict';

    // Start the main app logic.
    requirejs(['angular', 'defineModule', 'bootstrap'], function   (angular, defineModule) {
        window.defineModule = defineModule;

        require(['domReady!', 'app/app'], function (dom, app) {

            console.log('the DOM is ready!');

            //angular.bootstrap(document.body, [./app/app]);
            angular.bootstrap(document.body, app);

            var $rootScope = angular.element(document.querySelectorAll('ui-view, [ui-view]')[0]).injector().get('$rootScope');

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                console.log('STATE: changing to ' + toState.name + ' ...');
            });

            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                console.log('STATE: ERROR');
                throw error;
            });

            $rootScope.$on('$stateChangeSuccess', function (event, toState) {
                console.log('STATE: ... changed to '+toState.name, toState);
            });

            $rootScope.$on('$viewContentLoaded',function(event){
                // console.log('$viewContentLoaded - fired after dom rendered',event);
            });

            $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
                console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
                console.log(unfoundState, fromState, fromParams);
            });
        });
    });
});