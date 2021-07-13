(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-passRequest-team-request-to-player-team-request-to-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/passRequest/team-request-to-player/team-request-to-player.page.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/passRequest/team-request-to-player/team-request-to-player.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Solicitud</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"passRequest\">\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\" >\n      <ion-col size=\"5\">\n        <ion-avatar class=\"ion-float-right\" >\n          <ion-img  [src]=\"utilPhoto.getPhotoPlayer(passRequest.player)\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n\n      <ion-col size=\"1\"  class=\"ion-align-self-center ion-text-center\" >\n        <ion-icon name=\"arrow-forward-outline\"  ></ion-icon>\n      </ion-col>\n\n      <ion-col size=\"5\"> \n        <ion-avatar >\n          <ion-img  [src]=\"passRequest.team.shield ? passRequest.team.shield.urlCompleteThumb : pathImages.images.escudo\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    \n  </ion-grid>\n\n  <ion-card >\n    <ion-card-header>\n      <ion-card-title><b>{{passRequest.team.name}}</b> te ha enviado una solicitud para que formes parte de su plantilla de jugadores.</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-text>\n        <h3>Te recordamos que si aceptas esta solicitud automaticamente formaras parte de el equipo <b>{{passRequest.team.name}}</b>, solamente sera posible registrar los sucesos<b> (Goles, Amarillas,Rojas,etc..)</b> en los partidos de <b>{{passRequest.team.name}}</b>.</h3>\n      </ion-text>\n\n      \n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid *ngIf=\"passRequest.status == 'Pendiente'\">\n    <ion-row>\n      <ion-col class=\"ion-text-right\">\n        <ion-button color=\"success\" (click)=\"accept()\">Aceptar</ion-button>\n      </ion-col>\n      <ion-col class=\"ion-text-left\">\n        <ion-button color=\"danger\" (click)=\"reject()\">Rechazar</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div  class=\"ion-text-center\">\n\n    <ion-chip color=\"success\" *ngIf=\"passRequest.status == 'Aceptado'\">\n      <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n      <ion-label>Has {{passRequest.status}} la solicitud</ion-label>\n    </ion-chip>\n\n    <ion-chip color=\"danger\" *ngIf=\"passRequest.status == 'Rechazado'\">\n      <ion-icon name=\"close-circle-outline\"></ion-icon>\n      <ion-label>Has {{passRequest.status}} la solicitud</ion-label>\n    </ion-chip>\n  </div>\n\n\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/passRequest/team-request-to-player/team-request-to-player-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/passRequest/team-request-to-player/team-request-to-player-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: TeamRequestToPlayerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRequestToPlayerPageRoutingModule", function() { return TeamRequestToPlayerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_request_to_player_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-request-to-player.page */ "./src/app/pages/passRequest/team-request-to-player/team-request-to-player.page.ts");




const routes = [
    {
        path: '',
        component: _team_request_to_player_page__WEBPACK_IMPORTED_MODULE_3__["TeamRequestToPlayerPage"]
    }
];
let TeamRequestToPlayerPageRoutingModule = class TeamRequestToPlayerPageRoutingModule {
};
TeamRequestToPlayerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeamRequestToPlayerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/passRequest/team-request-to-player/team-request-to-player.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/passRequest/team-request-to-player/team-request-to-player.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TeamRequestToPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRequestToPlayerPageModule", function() { return TeamRequestToPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _team_request_to_player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-request-to-player-routing.module */ "./src/app/pages/passRequest/team-request-to-player/team-request-to-player-routing.module.ts");
/* harmony import */ var _team_request_to_player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-request-to-player.page */ "./src/app/pages/passRequest/team-request-to-player/team-request-to-player.page.ts");







let TeamRequestToPlayerPageModule = class TeamRequestToPlayerPageModule {
};
TeamRequestToPlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _team_request_to_player_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamRequestToPlayerPageRoutingModule"]
        ],
        declarations: [_team_request_to_player_page__WEBPACK_IMPORTED_MODULE_6__["TeamRequestToPlayerPage"]]
    })
], TeamRequestToPlayerPageModule);



/***/ }),

/***/ "./src/app/pages/passRequest/team-request-to-player/team-request-to-player.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/passRequest/team-request-to-player/team-request-to-player.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bhc3NSZXF1ZXN0L3RlYW0tcmVxdWVzdC10by1wbGF5ZXIvdGVhbS1yZXF1ZXN0LXRvLXBsYXllci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/passRequest/team-request-to-player/team-request-to-player.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/passRequest/team-request-to-player/team-request-to-player.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: TeamRequestToPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRequestToPlayerPage", function() { return TeamRequestToPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/paths-images.service */ "./src/app/services/paths-images.service.ts");
/* harmony import */ var src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util-photo.service */ "./src/app/services/util-photo.service.ts");







let TeamRequestToPlayerPage = class TeamRequestToPlayerPage {
    constructor(request, router, pathImages, utilPhoto) {
        this.request = request;
        this.router = router;
        this.pathImages = pathImages;
        this.utilPhoto = utilPhoto;
        this.passRequestModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('PassRequest', request);
        this.id = this.router.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.init();
    }
    init($event = null) {
        this.passRequestModel.api_functionModel(this.id, 'pageTeamRequestToPlayer').subscribe(response => {
            console.log(response);
            if (response['status'] == 'success')
                this.passRequest = response['data'];
            if ($event)
                $event.target.complete();
        }, error => {
            console.log(error);
            if ($event)
                $event.target.complete();
        });
    }
    accept() {
        this.passRequestModel.api_functionModel(this.id, 'accept').subscribe(response => {
            if (response['status'] == 'success')
                this.passRequest = response['data'];
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    reject() {
        this.passRequestModel.api_functionModel(this.id, 'reject').subscribe(response => {
            if (response['status'] == 'success')
                this.passRequest = response['data'];
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
};
TeamRequestToPlayerPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_5__["PathsImagesService"] },
    { type: src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_6__["UtilPhotoService"] }
];
TeamRequestToPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-request-to-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./team-request-to-player.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/passRequest/team-request-to-player/team-request-to-player.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./team-request-to-player.page.scss */ "./src/app/pages/passRequest/team-request-to-player/team-request-to-player.page.scss")).default]
    })
], TeamRequestToPlayerPage);



/***/ }),

/***/ "./src/app/services/paths-images.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/paths-images.service.ts ***!
  \**************************************************/
/*! exports provided: PathsImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathsImagesService", function() { return PathsImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PathsImagesService = class PathsImagesService {
    constructor() {
        this.images = {
            'profile_user': '/assets/images/profile.jpg',
            'escudo': '/assets/images/escudo.png',
            'team': '/assets/images/shield_team.png',
            'player': '/assets/images/jugador.png'
        };
    }
};
PathsImagesService.ctorParameters = () => [];
PathsImagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PathsImagesService);



/***/ }),

/***/ "./src/app/services/util-photo.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/util-photo.service.ts ***!
  \************************************************/
/*! exports provided: UtilPhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilPhotoService", function() { return UtilPhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _paths_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths-images.service */ "./src/app/services/paths-images.service.ts");



let UtilPhotoService = class UtilPhotoService {
    constructor(pathImages) {
        this.pathImages = pathImages;
    }
    getPhotoPlayer(player, thumb = false) {
        return player && player.photo ? thumb ? player.photo.urlCompleteThumb : player.photo.urlComplete : this.pathImages.images.player;
    }
    getPhotoUser(user, thumb = false) {
        return user && user.photo ? (thumb ? user.photo.urlCompleteThumb : user.photo.urlComplete) : this.pathImages.images.profile_user;
    }
};
UtilPhotoService.ctorParameters = () => [
    { type: _paths_images_service__WEBPACK_IMPORTED_MODULE_2__["PathsImagesService"] }
];
UtilPhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilPhotoService);



/***/ })

}]);
//# sourceMappingURL=pages-passRequest-team-request-to-player-team-request-to-player-module-es2015.js.map