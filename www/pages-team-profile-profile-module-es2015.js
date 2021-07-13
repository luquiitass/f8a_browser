(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/profile/profile.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/profile/profile.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Equipo </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <!-- <ion-buttons slot=\"secondary\" *ngIf=\"canEdit\">\n      <ion-button (click)=\"showEdit()\">\n        <ion-icon name=\"create\"></ion-icon>      \n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"team\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <div>\n    <ion-chip class=\"chip-admin ion-text-center\" color=\"secondary\" *ngIf=\"isAdmin\">\n      <ion-text class=\"msj-is-admin\">\n        Eres el administrador de este perfil, puede activar la edicion aquí.\n      </ion-text>\n      <ion-toggle [(ngModel)]=\"canEdit\"></ion-toggle>\n\n    </ion-chip>\n  </div>\n\n  <div class=\"shield-content\">\n    <div>\n      <img class=\"cover\" [src]=\"getCover()\" alt=\"Portada\">\n    </div>\n\n    <div class=\"shield-team bg-l2\">\n      <ion-avatar>\n        <img class=\"shield\" [src]=\"getShield()\" alt=\"Escudo\">\n      </ion-avatar>\n      <span class=\"name-team\">{{team.name}}</span>\n    </div>\n\n    <div *ngIf=\"canEdit\">\n      <ion-button expand=\"block\" fill=\"outline\" (click)=\"showEdit()\">\n        <ion-icon name=\"create\"></ion-icon>      \n        Editar</ion-button>\n    </div>\n  </div>\n\n \n  \n  <app-notificatio-selected\n    *ngIf=\"false\"\n    [object]=\"team\"\n    [table_name]=\"'Team'\"\n    [table_id] = \"id\"\n  ></app-notificatio-selected>\n\n<ion-card *ngIf=\"playersList.length || canEdit\">\n  <ion-card-header>\n    <ion-item>\n      <ion-card-title>\n        Jugadores\n      </ion-card-title>\n      <ion-button *ngIf=\"canEdit\" slot=\"end\" [routerLink]=\"'/team/' +id +'/players'\" routerDirection=\"forward\" >\n        <ion-icon name=\"create\"></ion-icon>      \n      </ion-button>\n    </ion-item>\n  </ion-card-header>\n\n  <ion-card-content>\n    \n    <app-player-list \n      [items] = \"playersList\"\n      (eventLoad)=\"loadPlayers($event)\"\n      (eventSelect)=\"playerSelect($event)\" \n      [loading] = \"playersLoading\"\n      [errorLoad]=\"playersErrorLoad\"\n    ></app-player-list>\n  </ion-card-content>\n\n</ion-card>\n\n  <app-red-list\n    [nameModel] = \"'Team'\"\n    [idModel] = \"id\"\n    [isAdmin] = \"canEdit\"\n    ></app-red-list>\n\n<app-comments\n  [comments] = \"team.comments\"\n  [idRelation]=\"id\"\n  [nameRelationModel]=\"'Team'\"\n\n></app-comments>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/team/profile/profile-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/team/profile/profile-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/team/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/team/profile/profile.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/team/profile/profile.module.ts ***!
  \******************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/team/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/team/profile/profile.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/team/profile/profile.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/team/profile/profile.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cover {\n  width: 100%;\n}\n\n.shield-team {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  padding-left: 30px;\n}\n\n.shield {\n  width: 50px;\n  height: 50px;\n}\n\n.name-team {\n  display: inline;\n  margin-left: 10px;\n  font-size: x-large;\n  /*vertical-align: middle;*/\n}\n\n.shield-content {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhbS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3ZlcntcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNoaWVsZC10ZWFte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uc2hpZWxke1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLm5hbWUtdGVhbXtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIC8qdmVydGljYWwtYWxpZ246IG1pZGRsZTsqL1xufVxuXG4uc2hpZWxkLWNvbnRlbnR7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/team/profile/profile.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/team/profile/profile.page.ts ***!
  \****************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _util_list_redirect_list_redirect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/list-redirect/list-redirect.page */ "./src/app/pages/util/list-redirect/list-redirect.page.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _form_form_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/form.page */ "./src/app/pages/team/form/form.page.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");










let ProfilePage = class ProfilePage {
    constructor(route, requesService, modalController, navCtrl, authUser, utilArray) {
        this.route = route;
        this.requesService = requesService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.authUser = authUser;
        this.utilArray = utilArray;
        this.id = '0';
        this.team = null;
        this.isAdmin = false;
        this.canEdit = false;
        this.playersList = [];
        this.playersLoading = true;
        this.playersErrorLoad = false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.teamModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Team', requesService);
    }
    ngOnInit() {
        this.init();
    }
    init($events = null) {
        /*
        this.teamModel.api_find(this.id).subscribe(data => {
          if(data['status'] == 'success')
            this.team = data['Team'];
        })*/
        this.playersLoading = true;
        this.teamModel.api_functionModel(this.id, 'pageProfile').subscribe(response => {
            console.log(response);
            if (response['status'] == 'success') {
                this.team = response['data'];
                this.playersList = this.team.players;
            }
            this.playersLoading = false;
            this.loadPermissions();
            if ($events)
                $events.target.complete();
        }, error => {
            this.playersLoading = false;
            this.playersErrorLoad = false;
            console.error(error);
            if ($events)
                $events.target.complete();
        });
        //this.loadPlayers()
    }
    loadPermissions() {
        this.isAdmin = this.authUser.isAdminTeam(this.id);
    }
    getCover() {
        return this.team.cover_page ? this.team.cover_page.urlComplete : 'assets/images/cover.jpg';
    }
    getShield() {
        return this.team.shield ? this.team.shield.urlComplete : 'assets/images/shield_team.png';
    }
    showMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let list = [
                {
                    name: 'Editar Equipo',
                    route: ''
                },
                {
                    name: 'Admi. Jugadores',
                    route: `team/${this.id}/players`
                },
                {
                    name: 'Admi. Partidos',
                    rote: ''
                }
            ];
            const modal = yield this.modalController.create({
                component: _util_list_redirect_list_redirect_page__WEBPACK_IMPORTED_MODULE_6__["ListRedirectPage"],
                componentProps: {
                    title: 'Administrar',
                    list: list
                }
            });
            modal.onDidDismiss().then(data => {
                console.log(data);
            });
            return yield modal.present();
        });
    }
    setLog(num) {
        console.log('set log in page profile, num : ', num);
    }
    loadPlayers(event) {
        this.playersLoading = true;
        this.teamModel.api_loadAttribute(this.id, 'players').subscribe(response => {
            if (response['status'] == 'success') {
                this.playersList = response['Team']['players'];
            }
            this.playersLoading = false;
        }, error => {
            this.playersLoading = false;
            this.playersErrorLoad = true;
        });
    }
    playerSelect(player) {
        console.log('goTo', player);
        this.navCtrl.navigateForward(`player/profile/${player.id}`);
    }
    showEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_form_page__WEBPACK_IMPORTED_MODULE_8__["FormPage"],
                componentProps: {
                    id: this.id,
                    adminTeam: true
                }
            });
            modal.onDidDismiss().then(data => {
                console.log('return edit');
                const team = data.data['team'];
                this.utilArray.updateAttribustesObject(this.team, team, ['name', 'shield_id', 'cover_page_id', 'shield', 'cover_page']);
            });
            return yield modal.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__["AuthUserService"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__["UtilArrayService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/team/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-team-profile-profile-module-es2015.js.map