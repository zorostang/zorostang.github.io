(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./src/app/pages/tabs/tabs.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/tabs/tabs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"home\">\n            <ion-icon name=\"home\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"tab2\">\n            <ion-icon name=\"logo-ionic\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"tab3\">\n            <ion-icon name=\"briefcase\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"profile\">\n            <ion-icon name=\"person\"></ion-icon>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/tabs/tabs.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block !important; }\n\nion-tab-bar {\n  --color-selected: var(--ion-color-dark);\n  --border:none;\n  height: 80px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.05);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naW5vLmJlcm5hcmRpL3pvcm9zdGFuZy5naXRodWIuaW8vem9yb3N0YW5nLmdpdGh1Yi5pby9zcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLHVDQUFpQjtFQUNqQixhQUFTO0VBQ1QsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xufVxuXG5pb24tdGFiLWJhciB7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC0tYm9yZGVyOm5vbmU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/tabs.component.ts ***!
  \**********************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/pages/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/pages/tabs/tabs.component.scss")]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/pages/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.component */ "./src/app/pages/tabs/tabs.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_3__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.router.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/tabs.router.module.ts ***!
  \**************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.component */ "./src/app/pages/tabs/tabs.component.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab2/tab2.module#Tab2PageModule'
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab3/tab3.module#Tab3PageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module.js.map