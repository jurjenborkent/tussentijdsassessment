webpackJsonp([2],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvenementToevoegenPageModule", function() { return EvenementToevoegenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evenement_toevoegen__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EvenementToevoegenPageModule = (function () {
    function EvenementToevoegenPageModule() {
    }
    return EvenementToevoegenPageModule;
}());
EvenementToevoegenPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__evenement_toevoegen__["a" /* EvenementToevoegenPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__evenement_toevoegen__["a" /* EvenementToevoegenPage */]),
        ],
    })
], EvenementToevoegenPageModule);

//# sourceMappingURL=evenement-toevoegen.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvenementToevoegenPage; });
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
 * Generated class for the EvenementToevoegenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EvenementToevoegenPage = (function () {
    function EvenementToevoegenPage(navCtrl, navParams, evenementen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evenementen = evenementen;
        this.evenement = {
            titel: '',
            beschrijving: '',
            locatie: '',
        };
    }
    EvenementToevoegenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EvenementToevoegenPage');
    };
    EvenementToevoegenPage.prototype.evenementToevoegen = function (item) {
        var _this = this;
        this.evenementen.evenementToevoegen(item).then(function (ref) {
            _this.navCtrl.setRoot('HomePage', { key: ref.key });
        });
    };
    return EvenementToevoegenPage;
}());
EvenementToevoegenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-evenement-toevoegen',template:/*ion-inline-start:"/Users/Jurjen/Projecten/ionic/odetteApp/src/pages/evenement-toevoegen/evenement-toevoegen.html"*/'<!--\n  Generated template for the EvenementToevoegenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Evenement Toevoegen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item> \n    <ion-input [(ngModel)]="evenement.titel" type="text" placeholder="Titel"></ion-input>\n  </ion-item>\n\n  <ion-item> \n      <ion-input [(ngModel)]="evenement.beschrijving" type="text" placeholder="Beschrijving"></ion-input>\n  </ion-item>\n\n  <ion-item> \n      <ion-input [(ngModel)]="evenement.locatie" type="text" placeholder="Locatie"></ion-input>\n  </ion-item>\n\n  <button ion-button block clear (click)="evenementToevoegen(evenement)">Evenement toevoegen</button>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/Jurjen/Projecten/ionic/odetteApp/src/pages/evenement-toevoegen/evenement-toevoegen.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_evenementen_evenementen_service__["a" /* EvenementenService */]])
], EvenementToevoegenPage);

//# sourceMappingURL=evenement-toevoegen.js.map

/***/ })

});
//# sourceMappingURL=2.js.map