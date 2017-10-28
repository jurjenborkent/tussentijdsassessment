webpackJsonp([3],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvenementDetailPageModule", function() { return EvenementDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evenement_detail__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EvenementDetailPageModule = (function () {
    function EvenementDetailPageModule() {
    }
    return EvenementDetailPageModule;
}());
EvenementDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__evenement_detail__["a" /* EvenementDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__evenement_detail__["a" /* EvenementDetailPage */]),
        ],
    })
], EvenementDetailPageModule);

//# sourceMappingURL=evenement-detail.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvenementDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_evenementen_evenementen_service__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EvenementDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EvenementDetailPage = (function () {
    function EvenementDetailPage(navCtrl, navParams, evenementen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evenementen = evenementen;
    }
    EvenementDetailPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
    };
    EvenementDetailPage.prototype.evenementVerwijderen = function (item) {
        var _this = this;
        this.evenementen.evenementVerwijderen(this.navParams.get('item')).then(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    return EvenementDetailPage;
}());
EvenementDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-evenement-detail',template:/*ion-inline-start:"/Users/Jurjen/Projecten/ionic/odetteApp/src/pages/evenement-detail/evenement-detail.html"*/'<!--\n  Generated template for the EvenementDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary" style="text-align: center">\n    <ion-title>{{item?.titel}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <img src="assets/imgs/evenement.jpg"/>\n        <ion-card-content>\n          <ion-card-title>\n              {{ item.titel }}\n            </ion-card-title>\n          <p>\n              {{ item.locatie }}  \n            \n          </p>\n          <p>\n              {{ item.beschrijving }}\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n      <button ion-button block clear color="danger" (click)="evenementVerwijderen(evenement)">Evenement verwijderen</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Jurjen/Projecten/ionic/odetteApp/src/pages/evenement-detail/evenement-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_evenementen_evenementen_service__["a" /* EvenementenService */]])
], EvenementDetailPage);

//# sourceMappingURL=evenement-detail.js.map

/***/ })

});
//# sourceMappingURL=3.js.map