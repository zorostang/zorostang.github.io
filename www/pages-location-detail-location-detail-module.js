(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-location-detail-location-detail-module"],{

/***/ "./src/app/pages/location-detail/location-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/location-detail/location-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-image\"\n    [class.deactivate]=\"deactivated\"\n    [class.active]=\"activated\"></div>\n\n<ion-toolbar class=\"padding-2\">\n    <ion-buttons slot=\"start\">\n        <ion-button (click)=\"closeDetail()\">\n            <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n        <ion-button>\n            <ion-icon name=\"more\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-toolbar>\n\n<div class=\"page-container\" *ngIf=\"location && activated\">\n    <div></div>\n    <div class=\"column\" (click)=\"viewTourDetail()\">\n        <app-heading class=\"title\" large bold>{{ location.name }}</app-heading>\n        <div class=\"stats height-margin-2\">\n            <div class=\"stat\">\n                <app-text>\n                    <ion-icon name=\"time\"></ion-icon> {{ location.distance }}\n                </app-text>\n            </div>\n            <div class=\"stat\">\n                <app-text>\n                    <ion-icon name=\"flag\"></ion-icon> {{ location.distance }}\n                </app-text>\n            </div>\n        </div>\n\n        <app-text class=\"description\" *ngIf=\"location.description\">{{ location.description }}</app-text>\n    </div>\n\n    <app-image-carousel *ngIf=\"location.relatedImages && location.relatedImages.length > 0\"\n        class=\"image-carousel bottom-margin-2\"\n        (selectImage)=\"onSelectImage($event)\"\n        [images]=\"location.relatedImages\"></app-image-carousel>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/location-detail/location-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/location-detail/location-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --background-image: ''; }\n\n.bg-image {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: 0% 0%;\n  background-image: var(--background-image);\n  position: absolute;\n  transition: background-size .3s ease, opacity .3s ease;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0; }\n\n.bg-image.active {\n    background-size: 100% 100%;\n    opacity: 1; }\n\n.bg-image.deactivate {\n    background-size: 0% 0%;\n    opacity: 0; }\n\nion-toolbar {\n  --background: transparent;\n  --ion-toolbar-color: var(--ion-color-light); }\n\n.page-container {\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: space-between;\n  color: var(--ion-color-light); }\n\n.page-container .title,\n  .page-container .description,\n  .page-container .image-carousel,\n  .page-container .stats {\n    opacity: 0; }\n\n.page-container .title, .page-container .stats {\n    -webkit-animation: 1s slidein-right forwards;\n            animation: 1s slidein-right forwards; }\n\n.page-container .description {\n    -webkit-animation: 1s description-slide forwards;\n            animation: 1s description-slide forwards;\n    -webkit-animation-delay: .3s;\n            animation-delay: .3s; }\n\n.page-container .image-carousel {\n    -webkit-animation: 1s images-slide forwards;\n            animation: 1s images-slide forwards;\n    -webkit-animation-delay: .4s;\n            animation-delay: .4s; }\n\n.page-container .stats {\n    display: flex;\n    flex-direction: row; }\n\n.page-container .stats .stat app-text {\n      text-transform: uppercase;\n      display: flex;\n      align-items: center; }\n\n.page-container .stats .stat app-text ion-icon {\n        margin-right: 5px; }\n\n.page-container .stats .stat:not(:last-child) {\n      margin-right: 20px; }\n\n.column {\n  display: flex;\n  flex-direction: column;\n  padding: 20px; }\n\n@-webkit-keyframes slidein-right {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes slidein-right {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; } }\n\n@-webkit-keyframes description-slide {\n  0% {\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes description-slide {\n  0% {\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; } }\n\n@-webkit-keyframes images-slide {\n  0% {\n    -webkit-transform: translateX(30%);\n            transform: translateX(30%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes images-slide {\n  0% {\n    -webkit-transform: translateX(30%);\n            transform: translateX(30%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naW5vLmJlcm5hcmRpL3pvcm9zdGFuZy5naXRodWIuaW8vem9yb3N0YW5nLmdpdGh1Yi5pby9zcmMvYXBwL3BhZ2VzL2xvY2F0aW9uLWRldGFpbC9sb2NhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLHNEQUFzRDtFQUN0RCxNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQVhkO0lBY1EsMEJBQTBCO0lBQzFCLFVBQVUsRUFBQTs7QUFmbEI7SUFrQlEsc0JBQXNCO0lBQ3RCLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSx5QkFBYTtFQUNiLDJDQUFvQixFQUFBOztBQUd4QjtFQUNJLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLDZCQUE2QixFQUFBOztBQVBqQzs7OztJQVlRLFVBQVUsRUFBQTs7QUFabEI7SUFlUSw0Q0FBb0M7WUFBcEMsb0NBQW9DLEVBQUE7O0FBZjVDO0lBa0JRLGdEQUF3QztZQUF4Qyx3Q0FBd0M7SUFDeEMsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBOztBQW5CNUI7SUFzQlEsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyw0QkFBb0I7WUFBcEIsb0JBQW9CLEVBQUE7O0FBdkI1QjtJQTBCUSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7O0FBM0IzQjtNQThCZ0IseUJBQXlCO01BQ3pCLGFBQWE7TUFDYixtQkFBbUIsRUFBQTs7QUFoQ25DO1FBa0NvQixpQkFBaUIsRUFBQTs7QUFsQ3JDO01BdUNZLGtCQUFrQixFQUFBOztBQUs5QjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixVQUFVLEVBQUE7RUFHZDtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsVUFBVSxFQUFBLEVBQUE7O0FBUmxCO0VBQ0k7SUFDSSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVUsRUFBQTtFQUdkO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBO0VBR2Q7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLFVBQVUsRUFBQSxFQUFBOztBQVJsQjtFQUNJO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVLEVBQUE7RUFHZDtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsVUFBVSxFQUFBLEVBQUE7O0FBSWxCO0VBQ0k7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLFVBQVUsRUFBQTtFQUdkO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixVQUFVLEVBQUEsRUFBQTs7QUFSbEI7RUFDSTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBO0VBR2Q7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLFVBQVUsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9jYXRpb24tZGV0YWlsL2xvY2F0aW9uLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAtLWJhY2tncm91bmQtaW1hZ2U6ICcnO1xufVxuXG4uYmctaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAlIDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgLjNzIGVhc2UsIG9wYWNpdHkgLjNzIGVhc2U7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAmLmRlYWN0aXZhdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDAlIDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pb24tdG9vbGJhci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAudGl0bGUsXG4gICAgLmRlc2NyaXB0aW9uLFxuICAgIC5pbWFnZS1jYXJvdXNlbCxcbiAgICAuc3RhdHMge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAudGl0bGUsIC5zdGF0cyB7XG4gICAgICAgIGFuaW1hdGlvbjogMXMgc2xpZGVpbi1yaWdodCBmb3J3YXJkcztcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgYW5pbWF0aW9uOiAxcyBkZXNjcmlwdGlvbi1zbGlkZSBmb3J3YXJkcztcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAuM3M7XG4gICAgfVxuICAgIC5pbWFnZS1jYXJvdXNlbCB7XG4gICAgICAgIGFuaW1hdGlvbjogMXMgaW1hZ2VzLXNsaWRlIGZvcndhcmRzO1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC40cztcbiAgICB9XG4gICAgLnN0YXRzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLnN0YXQge1xuICAgICAgICAgICAgYXBwLXRleHQge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zdGF0Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZWluLXJpZ2h0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBkZXNjcmlwdGlvbi1zbGlkZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBpbWFnZXMtc2xpZGUge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/location-detail/location-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/location-detail/location-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: LocationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDetailComponent", function() { return LocationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var LocationDetailComponent = /** @class */ (function () {
    function LocationDetailComponent(element, router, route, routerOutlet, navCtrl) {
        this.element = element;
        this.router = router;
        this.route = route;
        this.routerOutlet = routerOutlet;
        this.navCtrl = navCtrl;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.activated = false;
        this.deactivated = false;
    }
    LocationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return window.history.state; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (state) {
            if (state.location) {
                _this.location = state.location;
                _this.setBackgroundImage();
            }
            else {
                _this.router.navigate(['/tabs/home']);
            }
        }))
            .subscribe();
    };
    LocationDetailComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.activated = true;
        });
    };
    LocationDetailComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
    };
    LocationDetailComponent.prototype.closeDetail = function () {
        var _this = this;
        this.activated = false;
        this.deactivated = true;
        setTimeout(function () {
            if (_this.routerOutlet && _this.routerOutlet.canGoBack()) {
                _this.routerOutlet.pop();
            }
            else {
                _this.navCtrl.navigateBack('/tabs/home');
            }
        }, 300);
    };
    LocationDetailComponent.prototype.viewTourDetail = function () {
        this.router.navigate(['/location', this.location.id, 'tour'], {
            state: { location: this.location }
        });
    };
    LocationDetailComponent.prototype.onSelectImage = function (image) {
        this.setBackgroundImage(image);
    };
    Object.defineProperty(LocationDetailComponent.prototype, "hostEl", {
        get: function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    LocationDetailComponent.prototype.setBackgroundImage = function (url) {
        if (url === void 0) { url = this.location.coverPhotoUrl; }
        this.hostEl.style.setProperty('--background-image', "url(" + url + ")");
    };
    LocationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-detail',
            template: __webpack_require__(/*! ./location-detail.component.html */ "./src/app/pages/location-detail/location-detail.component.html"),
            styles: [__webpack_require__(/*! ./location-detail.component.scss */ "./src/app/pages/location-detail/location-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], LocationDetailComponent);
    return LocationDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/location-detail/location-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/location-detail/location-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: LocationDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDetailPageModule", function() { return LocationDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _location_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location-detail.component */ "./src/app/pages/location-detail/location-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LocationDetailPageModule = /** @class */ (function () {
    function LocationDetailPageModule() {
    }
    LocationDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _location_detail_component__WEBPACK_IMPORTED_MODULE_3__["LocationDetailComponent"]
                    }
                ])
            ],
            declarations: [
                _location_detail_component__WEBPACK_IMPORTED_MODULE_3__["LocationDetailComponent"]
            ],
        })
    ], LocationDetailPageModule);
    return LocationDetailPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-location-detail-location-detail-module.js.map