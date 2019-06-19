(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-toolbar class=\"padding-2\">\n        <app-heading large bold slot=\"start\">Asia</app-heading>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"openScanner()\" color=\"dark\">\n                <ion-icon slot=\"icon-only\" name=\"qr-scanner\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <app-country-filter class=\"bottom-margin-3\" [countries]=\"countries\"></app-country-filter>\n\n    <app-card-carousel [locations]=\"locations\"></app-card-carousel>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\napp-card-carousel {\n  height: 81%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naW5vLmJlcm5hcmRpL3pvcm9zdGFuZy5naXRodWIuaW8vem9yb3N0YW5nLmdpdGh1Yi5pby9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5hcHAtY2FyZC1jYXJvdXNlbCB7XG4gICAgaGVpZ2h0OiA4MSU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.countries = ['Dubai', 'China', 'Korea', 'India', 'France'];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.loadLocations();
    };
    HomePageComponent.prototype.openScanner = function () {
        console.log('Open QR Code Scanner');
    };
    HomePageComponent.prototype.loadLocations = function () {
        this.locations = [
            {
                id: 'uuid-1',
                name: 'Maldives',
                distance: '862 KM',
                coverPhotoUrl: 'https://preppywallpapers.com/wp-content/uploads/2018/10/24-iPhone-XR-Wallpaper-Collection-by-Preppy-Wallpapers.jpg',
                rating: 3,
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit magnam error repellat omnis culpa, molestias sapiente nam corporis saepe a veritatis, nulla modi illo amet eaque labore iusto hic.',
                relatedImages: [
                    'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                    'https://wallpaperplay.com/walls/full/6/f/2/324093.jpg',
                    'https://s29581.pcdn.co/wp-content/uploads/2018/04/Plan-a-Trip-to-Maldives-feature2.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27714/Beach-Blue-Nature-Sea-Holiday-Water-Sky-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27947/Bright-Summer-Cool-Beach-Wave-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                ]
            },
            {
                id: 'uuid-2',
                name: 'Borocay',
                distance: '862 KM',
                coverPhotoUrl: 'https://r1.ilikewallpaper.net/iPhone-8s-7s-6s-wallpapers/download/73030/Nerja--Spain-iPhone-8s-7s-6s-wallpaper-ilikewallpaper_com.jpg',
                rating: 2,
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit magnam error repellat omnis culpa, molestias sapiente nam corporis saepe a veritatis, nulla modi illo amet eaque labore iusto hic.',
                relatedImages: [
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/37009/The-beach-ocean-vacation-house-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34957/Beach-Mountain-Sea-Nature-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34362/Nature-Pure-Crystal-Ocean-Wave-Splash-Beach-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27714/Beach-Blue-Nature-Sea-Holiday-Water-Sky-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27947/Bright-Summer-Cool-Beach-Wave-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                ]
            },
            {
                id: 'uuid-3',
                name: 'Spain',
                distance: '862 KM',
                coverPhotoUrl: 'https://preppywallpapers.com/wp-content/uploads/2018/10/24-iPhone-XR-Wallpaper-Collection-by-Preppy-Wallpapers.jpg',
                rating: 5,
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit magnam error repellat omnis culpa, molestias sapiente nam corporis saepe a veritatis, nulla modi illo amet eaque labore iusto hic.',
                relatedImages: [
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/37009/The-beach-ocean-vacation-house-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34957/Beach-Mountain-Sea-Nature-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34362/Nature-Pure-Crystal-Ocean-Wave-Splash-Beach-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27714/Beach-Blue-Nature-Sea-Holiday-Water-Sky-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27947/Bright-Summer-Cool-Beach-Wave-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                ]
            },
            {
                id: 'uuid-4',
                name: 'Dubai',
                distance: '862 KM',
                coverPhotoUrl: 'https://www.backgroundscool.com/wp-content/uploads/2019/04/Dubai-Cloud-City-Landscapes-547x1024.jpg',
                rating: 1,
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit magnam error repellat omnis culpa, molestias sapiente nam corporis saepe a veritatis, nulla modi illo amet eaque labore iusto hic.',
                relatedImages: [
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/37009/The-beach-ocean-vacation-house-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34957/Beach-Mountain-Sea-Nature-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34362/Nature-Pure-Crystal-Ocean-Wave-Splash-Beach-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27714/Beach-Blue-Nature-Sea-Holiday-Water-Sky-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27947/Bright-Summer-Cool-Beach-Wave-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                ]
            },
            {
                id: 'uuid-5',
                name: 'Paris',
                distance: '862 KM',
                coverPhotoUrl: 'http://papers.co/wallpaper/papers.co-na17-sky-blue-eiffel-tower-nature-paris-city-flare-41-iphone-wallpaper.jpg',
                rating: 4,
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit magnam error repellat omnis culpa, molestias sapiente nam corporis saepe a veritatis, nulla modi illo amet eaque labore iusto hic.',
                relatedImages: [
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/37009/The-beach-ocean-vacation-house-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34957/Beach-Mountain-Sea-Nature-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34362/Nature-Pure-Crystal-Ocean-Wave-Splash-Beach-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27714/Beach-Blue-Nature-Sea-Holiday-Water-Sky-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27947/Bright-Summer-Cool-Beach-Wave-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                ]
            }
        ];
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] }])
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map