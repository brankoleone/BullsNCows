/**
 * Created by br.simeonov on 01/03/2015.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'lib/',
    //except, if the module ID starts with "app",
    //load it from the ../assets/js/ directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        jquery: 'jquery/dist/jquery',
        angular: 'angular/angular',
        'angular-ui-router': 'angular-ui-router/release/angular-ui-router',
        bootstrap: 'bootstrap/dist/js/bootstrap',
        domReady: 'domReady/domReady',
        defineModule: '../assets/js/defineModule'
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: [
                'jquery'
            ]
        },
        bootstrap: {
            deps: [
                'jquery'
            ]
        },
        'angular-ui-router': {
            exports: 'angular',
            deps: [
                'angular'
            ]
        }
    },
    map: {
        '*': {
            'ui.router': 'angular-ui-router'
        }
    }
});