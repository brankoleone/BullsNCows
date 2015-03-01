/**
 * Created by br.simeonov on 02/03/2015.
 */
console.log('defineModule.js loaded');

define(['require', 'angular'], function (requirejs, angular) {
    'use strict';

    var GLOBAL_NG_DEPS = ['ui.router'];

    function defineModule(name, ngDeps, rjsDeps, moduleFn) {
        if (typeof rjsDeps === 'function') {
            moduleFn = rjsDeps;
            rjsDeps  = [];
        }
        ngDeps = GLOBAL_NG_DEPS.concat(ngDeps);

        //order is important
        var allDepPaths = [].concat(rjsDeps).concat(ngDeps);

        define(allDepPaths, function () {
            var args = Array.prototype.slice.call(arguments, 0);
            var ngModule = angular.module(name, ngDeps);
            var base = name.split('/').slice(0, -1);

            ngModule.toUrl = function (relative) {
                return requirejs.toUrl(base.concat(relative).join('/'));
            };

            moduleFn.apply(null, [ngModule].concat(args));
        });
    }

    return defineModule;
});