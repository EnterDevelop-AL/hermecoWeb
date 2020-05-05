webpackJsonp([1],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__summary__ = __webpack_require__(580);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Class SummaryPageModule
 */
var SummaryPageModule = /** @class */ (function () {
    function SummaryPageModule() {
    }
    SummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__summary__["a" /* SummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__summary__["a" /* SummaryPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], SummaryPageModule);
    return SummaryPageModule;
}());

//# sourceMappingURL=summary.module.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(139);
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
 * Class SummaryPage
 */
var SummaryPage = /** @class */ (function () {
    function SummaryPage(navParams, viewCtrl, translateService, nomination) {
        var _this = this;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.translateService = translateService;
        this.nomination = nomination;
        this.payment_type = this.navParams.get('payment_type');
        this.campaign = this.navParams.get('campaign');
        this.today = this.navParams.get('today');
        this.document_type = this.navParams.get('document_type');
        this.document = this.navParams.get('document');
        this.zone = this.navParams.get('zone');
        this.first_name = this.navParams.get('first_name');
        this.last_name = this.navParams.get('last_name');
        this.business_name = this.navParams.get('business_name');
        this.business_rank = this.navParams.get('business_rank');
        this.referrer_name = this.navParams.get('referrer_name');
        this.referrer_rank = this.navParams.get('referrer_rank');
        this.data = this.navParams.get('data');
        this.send = this.navParams.get('send');
        this.translateService.get([
            'STEP.QUESTION.CREDIT',
            'STEP.QUESTION.PREPAID',
            'STEP.QUESTION.DELIVERY',
            'STEP.QUESTION.CAMPAIGN_DEFAULT',
            'STEP.QUESTION.DOCUMENT',
            'STEP.QUESTION.FOREIGN',
            'STEP.QUESTION.FORM.GENRE.MALE',
            'STEP.QUESTION.FORM.GENRE.FEMALE',
            'STEP.QUESTION.FORM.LIVING_PLACE.OWN',
            'STEP.QUESTION.FORM.LIVING_PLACE.LEASED',
            'STEP.QUESTION.NEW',
            'STEP.QUESTION.RE_ENTRY'
        ]).subscribe(function (value) {
            _this.creditString = value['STEP.QUESTION.CREDIT'];
            _this.prepaidString = value['STEP.QUESTION.PREPAID'];
            _this.deliveryString = value['STEP.QUESTION.DELIVERY'];
            _this.campaignString = value['STEP.QUESTION.CAMPAIGN_DEFAULT'];
            _this.nationalString = value['STEP.QUESTION.DOCUMENT'];
            _this.foreignString = value['STEP.QUESTION.FOREIGN'];
            _this.maleString = value['STEP.QUESTION.FORM.GENRE.MALE'];
            _this.femaleString = value['STEP.QUESTION.FORM.GENRE.FEMALE'];
            _this.ownString = value['STEP.QUESTION.FORM.LIVING_PLACE.OWN'];
            _this.leasedString = value['STEP.QUESTION.FORM.LIVING_PLACE.LEASED'];
            _this.newString = value['STEP.QUESTION.NEW'];
            _this.reentryString = value['STEP.QUESTION.RE_ENTRY'];
        });
    }
    SummaryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.status = this.data.status == "1" ? this.reentryString : this.newString;
        this.payment_type = this.data.payment_type == "1" ? this.creditString : this.data.payment_type == "2" ? this.prepaidString : this.deliveryString;
        this.campaign = this.data.campaign ? this.data.campaign : this.campaignString;
        this.today = this.data.today;
        this.document_type = this.data.document_type == "1" ? this.nationalString : this.foreignString;
        this.document = this.data.document;
        this.zone = this.data.zone;
        this.first_name = this.data.first_name ? this.data.first_name : this.data.form.value.first_name;
        this.last_name = this.data.last_name ? this.data.last_name : this.data.form.value.last_name;
        this.genre = this.data.form.value.genre == "1" ? this.maleString : this.femaleString;
        this.birthdate = this.data.form.value.birthdate;
        this.email = this.data.form.value.email;
        this.direction_one = this.data.form.value.direction_one;
        this.direction_two = this.data.form.value.direction_two;
        this.direction_three = this.data.form.value.direction_three;
        this.direction_four = this.data.form.value.direction_four;
        this.direction_five = this.data.form.value.direction_five;
        this.neighborhood = this.data.form.value.neighborhood;
        this.cell_phone = this.data.form.value.cell_phone;
        this.nomination.department(this.data.form.value.department).subscribe(function (response) {
            if (response) {
                _this.department = response.Name;
                _this.phone = _this.data.form.value.phone ? '(' + response.Code + ') ' + _this.data.form.value.phone : '';
                _this.lessor_phone = _this.data.form.value.lessor_phone ? '(' + response.Code + ') ' + _this.data.form.value.lessor_phone : '';
            }
        }, function (error) {
            console.log(error);
        });
        this.nomination.city(this.data.form.value.city).subscribe(function (response) {
            if (response) {
                _this.city = response.Name;
            }
        }, function (error) {
            console.log(error);
        });
        this.living_place = this.data.form.value.living_place == "1" ? this.ownString : this.leasedString;
        this.lessor_name = this.data.form.value.lessor_name;
        this.lessor_cell_phone = this.data.form.value.lessor_cell_phone;
        this.catalogs = this.data.form.value.catalogs;
        this.referral = this.data.form.value.referral ? this.data.form.value.referral : '';
        this.nomination.department(this.data.form.value.department_fam).subscribe(function (response) {
            if (response) {
                _this.department_fam = response.Name ? response.Name : '';
                _this.phone_fam = _this.data.form.value.phone_fam ? '(' + response.Code + ') ' + _this.data.form.value.phone_fam : '';
            }
        }, function (error) {
            console.log(error);
        });
        this.nomination.city(this.data.form.value.city_fam).subscribe(function (response) {
            if (response) {
                _this.city_fam = response.Name ? response.Name : '';
            }
        }, function (error) {
            console.log(error);
        });
        this.business_document_type = this.data.form.value.business_document_type == "1" ? this.nationalString : this.foreignString;
        this.business_document = this.data.form.value.business_document;
        this.business_name = this.data.business_name;
        this.business_rank = this.data.business_rank;
        this.referrer_document_type = this.data.form.value.referrer_document_type == "1" ? this.nationalString : this.foreignString;
        this.referrer_document = this.data.form.value.referrer_document;
        this.referrer_name = this.data.referrer_name;
        this.referrer_rank = this.data.referrer_rank;
    };
    /**
     * Method dismiss
     */
    SummaryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Method doSend
     */
    SummaryPage.prototype.doSend = function () {
        this.viewCtrl.dismiss();
        this.send();
    };
    SummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"C:\xampp\htdocs\hermeco-movil\src\pages\summary\summary.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>\n\n      {{ \'CONFIRM\'| translate }}\n\n    </ion-title>\n\n\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">{{ \'CANCEL\'| translate }}</span>\n\n\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.STATUS\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ status }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.TYPE_REQUEST\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ payment_type }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.CAMPAIGN\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ campaign }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.TODAY\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ today }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.TYPE_DOC\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ document_type }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.DOCUMENT\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ document }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.ZONE\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ zone }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.FIRST_NAME\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ first_name }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.LAST_NAME\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ last_name }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.GENRE.LABEL\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ genre }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.BIRTHDATE.LABEL\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ birthdate }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.EMAIL\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ email }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.DIRECTION\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ direction_one }} {{ direction_two }} # {{ direction_three }} - {{ direction_four }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.DIRECTION_OPTIONAL\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ direction_five }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.NEIGHBORHOOD\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ neighborhood }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="phone">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.PHONE\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ phone }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.CELLPHONE\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ cell_phone }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.DEPARTMENT\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ department }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.CITY\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ city }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.LIVING_PLACE.LABEL\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ living_place }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="lessor_name">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.LESSOR.NAME\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ lessor_name }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="lessor_phone">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.LESSOR.PHONE\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ lessor_phone }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="lessor_cell_phone">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.LESSOR.CELL\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ lessor_cell_phone }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="catalogs">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.SELLER\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ catalogs }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="referral">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.REFERRAL.NAME\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ referral }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="department_fam">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.REFERRAL.DEPARTMENT\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ department_fam }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="city_fam">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.REFERRAL.CITY\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ city_fam }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="phone_fam">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.REFERRAL.PHONE\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ phone_fam }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="business_document_type">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.SPONSOR.TYPE_DOC.LABEL\' | translate }}</ion-label>\n\n    \n\n          <ion-input value="{{ business_document_type }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="business_document">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.SPONSOR.DOCUMENT\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ business_document }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="business_name">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.SPONSOR.NAME\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ business_name }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="business_rank">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.SPONSOR.RANK\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ business_rank }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="referrer_document_type">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.REFERS.TYPE_DOC.LABEL\' | translate }}</ion-label>\n\n  \n\n          <ion-input value="{{ referrer_document_type }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="referrer_document">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.REFERS.DOCUMENT\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ referrer_document }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="referrer_name">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.REFERS.NAME\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ referrer_name }}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="referrer_rank">\n\n          <ion-label>{{ \'STEP.QUESTION.FORM.REFERS.RANK\' | translate }}</ion-label>\n\n\n\n          <ion-input value="{{ referrer_rank }}" disabled></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <button (click)="doSend()" ion-button block color="quaternary">{{ \'AGREE\' | translate }}</button>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\hermeco-movil\src\pages\summary\summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Nomination */]])
    ], SummaryPage);
    return SummaryPage;
}());

//# sourceMappingURL=summary.js.map

/***/ })

});
//# sourceMappingURL=1.js.map