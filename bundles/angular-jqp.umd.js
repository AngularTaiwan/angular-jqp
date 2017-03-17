(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.jqp = global.ng.jqp || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var JQUERY_PLUGIN_DIRECTIVES = [];
exports.JqueryPluginModule = (function () {
    function JqueryPluginModule() {
    }
    return JqueryPluginModule;
}());
exports.JqueryPluginModule = __decorate([
    _angular_core.NgModule({
        declarations: [JQUERY_PLUGIN_DIRECTIVES],
        exports: [JQUERY_PLUGIN_DIRECTIVES]
    })
], exports.JqueryPluginModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-jqp.umd.js.map
