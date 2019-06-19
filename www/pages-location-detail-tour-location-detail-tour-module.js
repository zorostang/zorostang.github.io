(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-location-detail-tour-location-detail-tour-module"],{

/***/ "./src/app/pages/location-detail-tour/location-detail-tour.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/location-detail-tour/location-detail-tour.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-image\" [class.active]=\"activated\"></div>\n\n<ion-toolbar class=\"padding-2\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" defaultHref=\"/tabs/home\"></ion-back-button>\n    </ion-buttons>\n</ion-toolbar>\n\n<div class=\"sheet\" *ngIf=\"location && activated\">\n    <ion-button class=\"map-btn\">\n        <ion-icon slot=\"icon-only\" mode=\"md\" name=\"navigate\"></ion-icon>\n    </ion-button>\n    <div class=\"content width-padding-2\">\n        <app-heading class=\"bottom-margin-1\" large>{{ location.name }}</app-heading>\n        <app-text bold>{{ location.description }}</app-text>\n    </div>\n    <div class=\"inner-sheet\">\n\n        <ion-button color=\"primary\" expand=\"block\">Commence The Tour</ion-button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/location-detail-tour/location-detail-tour.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/location-detail-tour/location-detail-tour.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --background-image: ''; }\n\n.bg-image {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-image: var(--background-image);\n  position: absolute;\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease, -webkit-transform .3s ease;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.bg-image.active {\n    -webkit-transform: translateY(-30%);\n            transform: translateY(-30%); }\n\nion-toolbar {\n  --background: transparent;\n  --ion-toolbar-color: var(--ion-color-light); }\n\n.sheet {\n  background: white;\n  border-radius: 30px;\n  width: 100%;\n  height: 80%;\n  -webkit-transform: translateY(30%);\n          transform: translateY(30%);\n  padding: 20px 0 0 0;\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n\n.sheet .map-btn {\n    position: absolute;\n    top: -20px;\n    right: 40px;\n    height: 48px;\n    width: 48px;\n    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);\n    font-size: 13px;\n    --border-radius: 9999px;\n    --background: var(--ion-color-light);\n    --background-activated: var(--ion-color-light);\n    --background-focused: var(--ion-color-light);\n    --color: var(--ion-color-success-shade);\n    --color-activated: var(--ion-color-success-shade);\n    --color-focused: var(--ion-color-success-shade);\n    border-radius: var(--border-radius); }\n\n.sheet .map-btn ion-icon {\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n\n.sheet app-text {\n    color: #C3C5CD;\n    line-height: 1.75; }\n\n.sheet .content {\n    display: flex;\n    flex-direction: column;\n    height: 55%; }\n\n.sheet .inner-sheet {\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n    background-color: var(--ion-color-light);\n    padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naW5vLmJlcm5hcmRpL3pvcm9zdGFuZy5naXRodWIuaW8vem9yb3N0YW5nLmdpdGh1Yi5pby9zcmMvYXBwL3BhZ2VzL2xvY2F0aW9uLWRldGFpbC10b3VyL2xvY2F0aW9uLWRldGFpbC10b3VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixzQ0FBOEI7RUFBOUIsOEJBQThCO0VBQTlCLDBEQUE4QjtFQUM5QixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBVmhCO0lBWVEsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBOztBQUluQztFQUNJLHlCQUFhO0VBQ2IsMkNBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBVDFCO0lBV1Esa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLHVCQUFnQjtJQUNoQixvQ0FBYTtJQUNiLDhDQUF1QjtJQUN2Qiw0Q0FBcUI7SUFDckIsdUNBQVE7SUFDUixpREFBa0I7SUFDbEIsK0NBQWdCO0lBQ2hCLG1DQUFtQyxFQUFBOztBQXpCM0M7TUEyQlksZ0NBQXdCO2NBQXhCLHdCQUF3QixFQUFBOztBQTNCcEM7SUErQlEsY0FBYztJQUNkLGlCQUFpQixFQUFBOztBQWhDekI7SUFtQ1EsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXLEVBQUE7O0FBckNuQjtJQXdDUSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHdDQUF3QztJQUN4QyxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2NhdGlvbi1kZXRhaWwtdG91ci9sb2NhdGlvbi1kZXRhaWwtdG91ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAtLWJhY2tncm91bmQtaW1hZ2U6ICcnO1xufVxuXG4uYmctaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAlKTtcbiAgICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLXRvb2xiYXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5zaGVldCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAlKTtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLm1hcC1idG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG4gICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG4gICAgICAgIC0tY29sb3ItZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFwcC10ZXh0IHtcbiAgICAgICAgY29sb3I6ICNDM0M1Q0Q7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogNTUlO1xuICAgIH1cbiAgICAuaW5uZXItc2hlZXQge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/location-detail-tour/location-detail-tour.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/location-detail-tour/location-detail-tour.component.ts ***!
  \******************************************************************************/
/*! exports provided: LocationDetailTourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDetailTourComponent", function() { return LocationDetailTourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var LocationDetailTourComponent = /** @class */ (function () {
    function LocationDetailTourComponent(element, router, route) {
        this.element = element;
        this.router = router;
        this.route = route;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.activated = false;
    }
    LocationDetailTourComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return window.history.state; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (state) {
            if (state.location) {
                _this.location = state.location;
                _this.setBackgroundImage();
                setTimeout(function () {
                    _this.activated = true;
                });
            }
            else {
                _this.router.navigate(['/tabs/home']);
            }
        }))
            .subscribe();
    };
    LocationDetailTourComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
    };
    Object.defineProperty(LocationDetailTourComponent.prototype, "hostEl", {
        get: function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    LocationDetailTourComponent.prototype.setBackgroundImage = function () {
        this.hostEl.style.setProperty('--background-image', "url(" + this.location.coverPhotoUrl + ")");
    };
    LocationDetailTourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-detail-tour',
            template: __webpack_require__(/*! ./location-detail-tour.component.html */ "./src/app/pages/location-detail-tour/location-detail-tour.component.html"),
            styles: [__webpack_require__(/*! ./location-detail-tour.component.scss */ "./src/app/pages/location-detail-tour/location-detail-tour.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LocationDetailTourComponent);
    return LocationDetailTourComponent;
}());



/***/ }),

/***/ "./src/app/pages/location-detail-tour/location-detail-tour.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/location-detail-tour/location-detail-tour.module.ts ***!
  \***************************************************************************/
/*! exports provided: LocationDetailTourPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDetailTourPageModule", function() { return LocationDetailTourPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _location_detail_tour_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location-detail-tour.component */ "./src/app/pages/location-detail-tour/location-detail-tour.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LocationDetailTourPageModule = /** @class */ (function () {
    function LocationDetailTourPageModule() {
    }
    LocationDetailTourPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _location_detail_tour_component__WEBPACK_IMPORTED_MODULE_3__["LocationDetailTourComponent"]
                    }
                ])
            ],
            declarations: [
                _location_detail_tour_component__WEBPACK_IMPORTED_MODULE_3__["LocationDetailTourComponent"]
            ],
        })
    ], LocationDetailTourPageModule);
    return LocationDetailTourPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-location-detail-tour-location-detail-tour-module.js.map