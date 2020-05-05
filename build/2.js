webpackJsonp([2],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Class LoginPageModule
 */
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(139);
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
 * Class LoginPage
 */
var LoginPage = /** @class */ (function () {
    /**
     * constructor LoginPage
     * @param user User
     * @param navParams NavParams
     * @param navCtrl NavController
     * @param formBuilder FormBuilder
     * @param toastCtrl ToastController
     * @param loadingCtrl LoadingController
     * @param translateService TranslateService
     */
    function LoginPage(user, navParams, navCtrl, formBuilder, toastCtrl, loadingCtrl, translateService) {
        var _this = this;
        this.user = user;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.translateService.get([
            'LOADING',
            'LOGIN.ERROR'
        ]).subscribe(function (value) {
            _this.loginLoadingString = value['LOADING'];
            _this.loginErrorString = value['LOGIN.ERROR'];
        });
    }
    /**
     * Method ionViewDidEnter
     */
    LoginPage.prototype.ionViewDidEnter = function () {
        this.isLoggedIn();
    };
    /**
     * Method ionViewWillLoad
     */
    LoginPage.prototype.ionViewWillLoad = function () {
        this.login_form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])],
        });
    };
    /**
     * Method doLogin
     */
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.showLoader(this.loginLoadingString);
        var grant_type = "password";
        var client_id = "099153c2625149bc8ecb3e85e03f0022";
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]()
            .append('grant_type', grant_type)
            .append('client_id', client_id)
            .append('username', this.login_form.value.username)
            .append('password', this.login_form.value.password);
        this.user.login(body).subscribe(function (result) {
            _this.loading.dismiss();
            console.log(result);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["b" /* MainPage */]);
        }, function (error) {
            _this.loading.dismiss();
            console.log(error);
            _this.showToast(_this.loginErrorString);
        });
    };
    /**
     * Method hideShowPassword
     */
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    /**
     * Function showLoader
     * @param message string
     */
    LoginPage.prototype.showLoader = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message,
        });
        this.loading.present();
    };
    /**
     * Function showToast
     * @param message string
     */
    LoginPage.prototype.showToast = function (message) {
        this.toast = this.toastCtrl.create({
            message: message,
            duration: 6000,
            position: 'top',
        });
        this.toast.present();
    };
    /**
     * Method isLoggedIn
     */
    LoginPage.prototype.isLoggedIn = function () {
        var _this = this;
        this.showLoader(this.loginLoadingString);
        this.user.getToken().then(function (response) {
            if (response) {
                _this.loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["b" /* MainPage */]);
            }
            else {
                _this.loading.dismiss();
            }
        }, function (error) {
            console.log(error);
            _this.loading.dismiss();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\hermeco-movil\src\pages\login\login.html"*/'<ion-content>\n\n  <form [formGroup]="login_form" (ngSubmit)="doLogin()">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col></ion-col>\n\n\n\n        <ion-col col-10>\n\n          <img src="assets/imgs/logo.png" alt="">\n\n          <p>{{ \'LOGIN.DESCRIPTION\' | translate }}</p>\n\n        </ion-col>\n\n\n\n        <ion-col></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-card>\n\n      <ion-card-header>\n\n        <ion-title>{{ \'LOGIN.TITLE\' | translate }}</ion-title>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content>\n\n        <ion-list no-lines>\n\n          <ion-item>\n\n            <ion-label floating>{{ \'LOGIN.FORM.EMAIL\' | translate }}</ion-label>\n\n            <ion-input type="email" formControlName="username"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item *ngIf="!login_form.controls.username.valid && (login_form.controls.username.dirty)">\n\n            <p *ngIf="login_form.get(\'username\').hasError(\'required\')">{{ \'LOGIN.FORM.ERROR.EMAIL.REQUIRED\' | translate }}</p>\n\n            <p *ngIf="login_form.get(\'username\').hasError(\'pattern\')">{{ \'LOGIN.FORM.ERROR.EMAIL.INVALID\' | translate }}</p>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>{{ \'LOGIN.FORM.PASSWORD\' | translate }}</ion-label>\n\n            <ion-input [type]="passwordType" clearOnEdit="false" formControlName="password"></ion-input>\n\n            <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\'></ion-icon>\n\n          </ion-item>\n\n\n\n          <ion-item *ngIf="!login_form.controls.password.valid && (login_form.controls.password.dirty)">\n\n            <p *ngIf="login_form.get(\'password\').hasError(\'required\')">{{ \'LOGIN.FORM.ERROR.PASSWORD.REQUIRED\' | translate }}</p>\n\n            <p *ngIf="login_form.get(\'password\').hasError(\'minlength\')">{{ \'LOGIN.FORM.ERROR.PASSWORD.INVALID\' | translate }}</p>\n\n          </ion-item>\n\n\n\n          <div padding>\n\n            <button [disabled]="!login_form.valid" ion-button color="quaternary" block full>{{ \'LOGIN.FORM.BUTTON\' | translate }}</button>\n\n          </div>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\hermeco-movil\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers__["c" /* User */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=2.js.map