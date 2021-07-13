(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-my-profile-my-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/my-profile/my-profile.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/my-profile/my-profile.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> {{ user ? user.last_name +' '+user.first_name : 'My Perfil'}}</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"showEdit()\">\n        <ion-icon name=\"create\"></ion-icon>      \n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngIf=\"user\">\n    <ion-card-content>\n\n      <ion-img-viewer \n        title=\"Foto de Perfil\" \n        [text]=\"user.last_name +' '+ user.first_name\"\n        scheme=\"dark\" \n        [src]=\"getPhoto()\">\n      </ion-img-viewer>\n\n    </ion-card-content>\n    <ion-card-header>\n      <ion-card-title>\n        {{user.last_name}} {{user.first_name}}\n      </ion-card-title>\n\n      <ion-card-subtitle>{{user.email}}</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n\n  <ion-card *ngIf=\"user && user.teams\">\n    <ion-card-header>\n      <ion-card-title>Mis Equipos</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let team of user.teams\" routerLink=\"/team/profile/{{team.id}}\" routerDirection=\"forward\">\n            {{team.name}}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"user && user.player\">\n    <ion-card-header>\n      <ion-card-title>Mi perfil de Jugador</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item routerLink=\"/player/profile/{{user.player.id}}\" routerDirection=\"forward\">\n            {{user.player.name}}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/user/my-profile/my-profile-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/user/my-profile/my-profile-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: MyProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function() { return MyProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile.page */ "./src/app/pages/user/my-profile/my-profile.page.ts");




const routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }
];
let MyProfilePageRoutingModule = class MyProfilePageRoutingModule {
};
MyProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user/my-profile/my-profile.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/user/my-profile/my-profile.module.ts ***!
  \************************************************************/
/*! exports provided: MyProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-profile-routing.module */ "./src/app/pages/user/my-profile/my-profile-routing.module.ts");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile.page */ "./src/app/pages/user/my-profile/my-profile.page.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");








let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfilePageRoutingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxIonicImageViewerModule"]
        ],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_6__["MyProfilePage"]]
    })
], MyProfilePageModule);



/***/ }),

/***/ "./src/app/pages/user/my-profile/my-profile.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/user/my-profile/my-profile.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/user/my-profile/my-profile.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/user/my-profile/my-profile.page.ts ***!
  \**********************************************************/
/*! exports provided: MyProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePage", function() { return MyProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_form_user_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-form/user-form.page */ "./src/app/pages/user/user-form/user-form.page.ts");
/* harmony import */ var src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/transfer-data.service */ "./src/app/services/transfer-data.service.ts");








let MyProfilePage = class MyProfilePage {
    constructor(authUser, requestService, modalController, transferData) {
        this.authUser = authUser;
        this.requestService = requestService;
        this.modalController = modalController;
        this.transferData = transferData;
        this.userModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('User', requestService);
        transferData.setData('test', { id: 'id_lucas_data' });
        console.log('set data transfer in My Profile', { id: 'id_lucas_data' });
    }
    ngOnInit() {
        this.init();
    }
    init(event = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = this.authUser.user; //await this.authUser.getUser();
            console.log('authUser user', this.user);
            if (this.user) {
                this.userModel.api_functionModel(this.user.id, 'pageMyProfile').subscribe(respose => {
                    console.log('init myProfile', respose);
                    if (respose['status'] == 'success') {
                        this.user = respose['data'];
                        //this.authUser.updateUser(this.user);
                    }
                    if (event)
                        event.target.complete();
                }, error => {
                    console.error(error);
                    if (event)
                        event.target.complete();
                });
            }
        });
    }
    getPhoto() {
        return (this.user && this.user.photo) ? this.user.photo.urlComplete : 'assets/images/profile.jpg';
    }
    showEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _user_form_user_form_page__WEBPACK_IMPORTED_MODULE_6__["UserFormPage"],
                componentProps: { id: this.user.id }
            });
            modal.onDidDismiss().then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(data);
                if (data.data && data.data['user']) {
                    let item = data.data['user'];
                    this.user.first_name = item.first_name;
                    this.user.last_name = item.last_name;
                    this.user.photo = item.photo;
                    this.user.email = item.email;
                    yield this.authUser.setUser(this.user);
                }
            }));
            return yield modal.present();
        });
    }
};
MyProfilePage.ctorParameters = () => [
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_7__["TransferDataService"] }
];
MyProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/my-profile/my-profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-profile.page.scss */ "./src/app/pages/user/my-profile/my-profile.page.scss")).default]
    })
], MyProfilePage);



/***/ }),

/***/ "./src/app/services/transfer-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/transfer-data.service.ts ***!
  \***************************************************/
/*! exports provided: TransferDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferDataService", function() { return TransferDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TransferDataService = class TransferDataService {
    constructor() {
        this.data = {};
        this.callbaks = {};
    }
    setData(key, value) {
        this.data[key] = value;
    }
    getData(key) {
        if (this.data.hasOwnProperty(key))
            return this.data[key];
        return null;
    }
    clear(key = null) {
        if (this.data.hasOwnProperty(key)) {
            delete this.data[key];
            return;
        }
        this.data = {};
    }
    /**
     * Añade la funcion que se ejecutara al ejecutar setDataPage
     * @param page Key de la pagina que deebra obtener los dato
     * @param callbak funcion que recibe un parametro
     */
    onSettDataPage(page, callbak) {
        this.callbaks[page] = callbak;
    }
    /**
     * Ejecuta la funcion que recibe el parametro ingresado en esta funcion
     * @param page pagina actual
     * @param parms parametros
     */
    setDataPage(page, parms) {
        if (this.callbaks.hasOwnProperty(page))
            this.callbaks[page](parms);
    }
};
TransferDataService.ctorParameters = () => [];
TransferDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TransferDataService);



/***/ })

}]);
//# sourceMappingURL=pages-user-my-profile-my-profile-module-es2015.js.map