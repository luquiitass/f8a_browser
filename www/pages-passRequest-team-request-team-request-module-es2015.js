(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-passRequest-team-request-team-request-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/passRequest/team-request/team-request.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/passRequest/team-request/team-request.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Solicitud de pase</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"player && team\">\n    <ion-card-content>\n      <ion-text>\n        <h3>\n          ¿Deseas incluir a <b>{{player.name}}</b> a la plantilla de jugadores de <b>{{team.name}}</b>?\n        </h3>\n        <br>\n        <h3>\n          Una vez que <b>{{player.name}}</b> acepte la solicitud , podras registrar los sucesos del mismo en los partido \n        </h3>\n      </ion-text>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-button expand=\"block\" fill=\"outline\" (click)=\"send()\">Enviar</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/passRequest/team-request/team-request-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/passRequest/team-request/team-request-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TeamRequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRequestPageRoutingModule", function() { return TeamRequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-request.page */ "./src/app/pages/passRequest/team-request/team-request.page.ts");




const routes = [
    {
        path: '',
        component: _team_request_page__WEBPACK_IMPORTED_MODULE_3__["TeamRequestPage"]
    }
];
let TeamRequestPageRoutingModule = class TeamRequestPageRoutingModule {
};
TeamRequestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeamRequestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/passRequest/team-request/team-request.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/passRequest/team-request/team-request.module.ts ***!
  \***********************************************************************/
/*! exports provided: TeamRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRequestPageModule", function() { return TeamRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _team_request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-request-routing.module */ "./src/app/pages/passRequest/team-request/team-request-routing.module.ts");
/* harmony import */ var _team_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-request.page */ "./src/app/pages/passRequest/team-request/team-request.page.ts");







let TeamRequestPageModule = class TeamRequestPageModule {
};
TeamRequestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _team_request_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamRequestPageRoutingModule"]
        ],
        declarations: [_team_request_page__WEBPACK_IMPORTED_MODULE_6__["TeamRequestPage"]]
    })
], TeamRequestPageModule);



/***/ }),

/***/ "./src/app/pages/passRequest/team-request/team-request.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/passRequest/team-request/team-request.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bhc3NSZXF1ZXN0L3RlYW0tcmVxdWVzdC90ZWFtLXJlcXVlc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/passRequest/team-request/team-request.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/passRequest/team-request/team-request.page.ts ***!
  \*********************************************************************/
/*! exports provided: TeamRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRequestPage", function() { return TeamRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let TeamRequestPage = class TeamRequestPage {
    constructor(route, router, navController, request, utilDialog) {
        this.route = route;
        this.router = router;
        this.navController = navController;
        this.request = request;
        this.utilDialog = utilDialog;
        this.sending = false;
        this.tryCount = 1;
        this.passRequestModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('PassRequest', request);
        this.team_id = this.route.snapshot.paramMap.get('team_id');
        this.player_id = this.route.snapshot.paramMap.get('player_id');
    }
    ngOnInit() {
        this.init();
    }
    init(event = null) {
        this.passRequestModel.api_function('passTeamPage', { team_id: this.team_id, player_id: this.player_id }).subscribe(response => {
            if (response['status'] == 'success') {
                this.team = response['data']['team'];
                this.player = response['data']['player'];
            }
            console.log(response);
            if (event)
                event.target.complete();
        }, error => {
            console.error(error);
            if (event)
                event.target.complete();
        });
    }
    send() {
        this.sending = true;
        let parms = {
            team_id: this.team.id,
            player_id: this.player.id,
            status: 'Pendiente',
            try: this.tryCount
        };
        this.passRequestModel.api_create(parms).subscribe(response => {
            if (response['status'] == 'success') {
                this.utilDialog.showToast('Solicitud Enviada', null, 'info', 777);
                this.navController.back();
            }
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
};
TeamRequestPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
];
TeamRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-request',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./team-request.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/passRequest/team-request/team-request.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./team-request.page.scss */ "./src/app/pages/passRequest/team-request/team-request.page.scss")).default]
    })
], TeamRequestPage);



/***/ })

}]);
//# sourceMappingURL=pages-passRequest-team-request-team-request-module-es2015.js.map