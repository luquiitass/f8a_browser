(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-publications-form-publication-form-publication-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Nueva Publicación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"servicePublication.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-avatar>\n        <ion-img [src]=\"authUser.user.photo ? authUser.user.photo.urlCompleteThumb : pathImages.images.profile_user \" ></ion-img>\n      </ion-avatar>\n      <label class=\"name-user\">{{authUser.user.completeName}}</label>\n    </ion-item>\n\n    <div class=\"separador\"></div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Escribe aqui...</ion-label>\n      <ion-textarea  class=\"editor-text\" [(ngModel)]=\"publication.text\" name=\"text\"  ></ion-textarea>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePublication.errorsForm.get('text') }}</div>\n\n    <!-- <ion-item *ngIf=\"false\">\n      <ion-label position=\"floating\">Mencionar Equipo</ion-label>\n      <ion-select [(ngModel)]=\"publication.l_team\" name=\"l_team\">\n        <ion-select-option [value]=\"l_team.id\" *ngFor=\"let l_team of teams\">{{ l_team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePublication.errorsForm.get('l_team') }}</div>\n    </ion-item> -->\n\n    <ion-item *ngIf=\"photoModel.isLoadPthoto() || photoModel.hasImage()\">\n      <ion-img  [src]=\"photoModel.photo.getPath()\" ></ion-img>\n    </ion-item>\n    <br>\n    <ion-button expand=\"block\"  fill=\"outline\"  (click)=\"photoModel.addOneNewToGallery()\" >\n      <ion-icon  name=\"image\" slot=\"start\"></ion-icon>\n      Foto\n    </ion-button> \n\n    <ion-button type=\"submit\"  expand=\"block\" [disabled]=\"posting\">\n      <ion-spinner name=\"lines\" *ngIf=\"posting\" ></ion-spinner>\n      Publicar\n    </ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/publications/form-publication/form-publication-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/publications/form-publication/form-publication-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: FormPublicationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPublicationPageRoutingModule", function() { return FormPublicationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_publication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-publication.page */ "./src/app/pages/publications/form-publication/form-publication.page.ts");




const routes = [
    {
        path: '',
        component: _form_publication_page__WEBPACK_IMPORTED_MODULE_3__["FormPublicationPage"]
    }
];
let FormPublicationPageRoutingModule = class FormPublicationPageRoutingModule {
};
FormPublicationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormPublicationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/publications/form-publication/form-publication.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/publications/form-publication/form-publication.module.ts ***!
  \********************************************************************************/
/*! exports provided: FormPublicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPublicationPageModule", function() { return FormPublicationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_publication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-publication-routing.module */ "./src/app/pages/publications/form-publication/form-publication-routing.module.ts");
/* harmony import */ var _form_publication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-publication.page */ "./src/app/pages/publications/form-publication/form-publication.page.ts");







let FormPublicationPageModule = class FormPublicationPageModule {
};
FormPublicationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_publication_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormPublicationPageRoutingModule"]
        ],
        declarations: [_form_publication_page__WEBPACK_IMPORTED_MODULE_6__["FormPublicationPage"]]
    })
], FormPublicationPageModule);



/***/ }),

/***/ "./src/app/pages/publications/form-publication/form-publication.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/publications/form-publication/form-publication.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".name-user {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljYXRpb25zL2Zvcm0tcHVibGljYXRpb24vZm9ybS1wdWJsaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHVibGljYXRpb25zL2Zvcm0tcHVibGljYXRpb24vZm9ybS1wdWJsaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZS11c2Vye1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/publications/form-publication/form-publication.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/publications/form-publication/form-publication.page.ts ***!
  \******************************************************************************/
/*! exports provided: FormPublicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPublicationPage", function() { return FormPublicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/models/modelImage */ "./src/app/api/models/modelImage.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/paths-images.service */ "./src/app/services/paths-images.service.ts");










let FormPublicationPage = class FormPublicationPage {
    constructor(request, dialogService, viewCtrl, photoService, navParams, authUser, pathImages) {
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.photoService = photoService;
        this.authUser = authUser;
        this.pathImages = pathImages;
        this.posting = false;
        this.myDateFilter = (d) => {
            const day = d.getDay();
            return day == 6;
        };
        this.photoModel = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_7__["ModelImage"](request, viewCtrl);
        this.photoModel.init('images/publications/', false);
        this.photoModel.setAspectRatioCrop('none');
        this.servicePublication = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Publication', request);
        //this.serviceTeam.setModel('Team');
        this.id = navParams.get('id');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = this.authUser.user; //await this.authUser.getUser();
            this.initObject();
        });
    }
    initObject() {
        this.publication = {
            text: '',
            user_id: this.user.id
        };
        if (this.id) {
            this.servicePublication.api_find(this.id).subscribe(data => {
                if (data['status'] == 'success') {
                    this.publication = data['Publication'];
                    if (this.publication.image) {
                        this.photoModel.setImage(this.publication.image);
                    }
                }
            });
        }
    }
    submit() {
        if (this.photoModel.isLoadPthoto()) {
            this.publication.image = this.photoModel.image;
        }
        this.posting = true;
        if (this.publication.id) {
            this.servicePublication.api_update(this.publication).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    console.log(data);
                    this.dismiss(data['Publication']);
                }
                this.posting = false;
            }, error => {
                this.posting = false;
            });
        }
        else {
            this.servicePublication.api_create(this.publication).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Publication']);
                }
                this.posting = false;
            }, error => {
                this.posting = false;
            });
        }
    }
    dismiss(publication) {
        this.viewCtrl.dismiss({
            publication: publication,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
    print() {
        console.log(this.publication);
    }
};
FormPublicationPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"] },
    { type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_9__["PathsImagesService"] }
];
FormPublicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-publication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-publication.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-publication.page.scss */ "./src/app/pages/publications/form-publication/form-publication.page.scss")).default]
    })
], FormPublicationPage);



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

/***/ "./src/app/services/photo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService, Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/request.service */ "./src/app/api/request.service.ts");





const { Camera, Filesystem, Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let PhotoService = class PhotoService {
    constructor(request) {
        this.photos = [];
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        this.serviceImage = new _api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Image', request);
    }
    init(url, thumb = true, pathDefault = 'assets/images/pngwing.png') {
        this.url = url !== null && url !== void 0 ? url : '/images/';
        this.thumb = thumb !== null && thumb !== void 0 ? thumb : false;
        this.path = pathDefault;
        this.photo = new Photo(pathDefault);
    }
    setImage(image) {
        this.image = image;
        this.photo.image = image;
    }
    addNewToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield Camera.getPhoto({
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                quality: 100
            });
            const base64Data = yield this.readAsBase64(capturedPhoto);
            this.photos.unshift(new Photo(null, capturedPhoto.webPath, base64Data, this.url, this.thumb));
        });
    }
    addOneNewToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield Camera.getPhoto({
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                quality: 100
            });
            const base64Data = yield this.readAsBase64(capturedPhoto);
            this.photo = new Photo(capturedPhoto.webPath, base64Data, base64Data, this.url, this.thumb, this.image);
        });
    }
    isLoadPthoto() {
        return this.photo.data ? true : false;
    }
    readAsBase64(cameraPhoto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Fetch the photo, read as a blob, then convert to base64 format
            const response = yield fetch(cameraPhoto.webPath);
            const blob = yield response.blob();
            return yield this.convertBlobToBase64(blob);
        });
    }
    uploadImage() {
        if (this.isLoadPthoto()) {
            if (this.photo.id) {
                return this.serviceImage.api_update(this.photo);
            }
            else {
                return this.serviceImage.api_create(this.photo);
            }
        }
    }
};
PhotoService.ctorParameters = () => [
    { type: _api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] }
];
PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhotoService);

class Photo {
    constructor(filepath = "assets/images/pngwing.png", webviewPath = null, data = '', url = '', thumb = false, image = null) {
        this.id = image ? image.id : '';
        this.webviewPath = webviewPath;
        this.filepath = filepath;
        this.data = data;
        this.url = url;
        this.thumb = thumb;
        this.image = image;
    }
    getPath() {
        if (this.webviewPath) {
            return this.webviewPath;
        }
        else if (this.image && this.image['urlComplete']) {
            return this.image['urlComplete'];
        }
        else {
            return this.filepath;
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-publications-form-publication-form-publication-module-es2015.js.map