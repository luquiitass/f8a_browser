(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["publications-publications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/publications/publications.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/publications/publications.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>publications</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n  <div *ngIf=\"!firstLoad\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n    <ion-button expand=\"block\" fill=\"outline\" (click)=\"openModal()\">Nueva Publicacion</ion-button>\n  \n    <ion-list>\n        \n      <ion-list-header *ngIf=\"publications.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n  \n      <ion-item *ngFor=\"let item of publications;let i = index\">\n        <ion-card style=\"width: 100%;\" >\n          <ion-card-content>\n            <ion-button class=\"menu-right\"fill=\"clear\" (click)=\"openMenuPublication(item)\" *ngIf=\"authUser.user.id == item.user_id\">\n              <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n            </ion-button>\n\n            <div class=\"publication-user\">\n              <ion-thumbnail slot=\"start\">\n                <ion-img\n                  (click)=\"showPhotoUser(item.user.photo)\"\n                  class=\"user-image\"\n                  [src]=\"item.user.photo ? item.user.photo.urlCompleteThumb : pathImages.images.profile_user  \"\n                  style=\"border-radius:50%; background-position:center center; background-size:cover; width:40px; height:40px;\">\n              </ion-img>\n              </ion-thumbnail>\n    \n              <div class=\"user\">\n                <div class=\"name\">\n                  {{item.user.last_name}} {{item.user.first_name}}\n                </div>\n                <div class=\"date\">\n                  {{util.getFormarHumans(item.created_at)}}\n                </div>\n              </div>\n            </div>\n    \n            <div class=\"publication-text\">\n              <ion-text color=\"dark\">\n                {{item.text}}\n              </ion-text>\n            </div>\n    \n            <div class=\"publication-image ion-text-center\" *ngIf=\"item.image_id\">\n              <img [src]=\"item.image.urlComplete\">\n            </div>\n    \n            <ion-grid>\n              <ion-row >\n                <ion-col class=\"ion-text-left\"  (click)=\"showPublication(item , 'likes',i)\">\n                  <ion-text  color=\"dark\" >\n                    <ion-icon name=\"heart-outline\" color=\"danger\"></ion-icon>\n                    {{item.likes_count}}\n                  </ion-text>\n                </ion-col>\n                <ion-col class=\"ion-text-right\" (click)=\"showPublication(item , 'comments')\">\n                  <ion-text >\n                    <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n                    {{item.comments_count}}\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          \n            <div class=\"separator\"></div>\n    \n            <div>\n              <ion-buttons expand=\"full\" >\n                <ion-button expand=\"full\" style=\"width: 50%;\" [color]=\"item.liked ? 'danger' : 'primary'\" (click)=\"like(item)\" [disabled]=\"item.processLike ? true : false\">\n                  <ion-icon  name=\"heart-outline\" *ngIf=\"!item.processLike\" ></ion-icon>\n                  <ion-spinner name=\"lines\" *ngIf=\"item.processLike\" ></ion-spinner>\n                </ion-button>\n                <ion-button expand=\"full\"  style=\"width: 50%;\" color=\"primary\" (click)=\"showPublication(item , 'comments')\">\n                  <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </div>\n    \n          </ion-card-content>\n        </ion-card>\n      </ion-item>\n   \n   \n    \n    </ion-list>\n  </div>\n\n\n  <div *ngIf=\"firstLoad\">\n    <ion-card *ngFor=\"let item of listSkeleton\" >\n      <ion-card-content>\n        <div class=\"publication-user\">\n          <ion-avatar slot=\"start\">\n            <ion-skeleton-text  animated ></ion-skeleton-text>\n          </ion-avatar>\n\n          <div class=\"user\">\n            <div class=\"name\">\n              <ion-skeleton-text  animated style=\"width: 150px; height: 20px;;\"></ion-skeleton-text>\n            </div>\n            <div class=\"date\">\n              <ion-skeleton-text  animated style=\"width: 70px;\"></ion-skeleton-text>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"publication-text\">\n          <ion-text color=\"dark\">\n            <ion-skeleton-text  animated style=\"width: 100%; height: 20px;\"></ion-skeleton-text>\n            <ion-skeleton-text  animated style=\"width: 90%; height: 20px;\"></ion-skeleton-text>\n\n          </ion-text>\n        </div>\n\n        <div class=\"publication-image ion-text-center\">\n          <ion-thumbnail  style=\"height: 200px; width: 100%;\">\n            <ion-skeleton-text  animated style=\"width: 100%; height: 100%;\"></ion-skeleton-text>\n          </ion-thumbnail>\n        </div>\n\n        <ion-grid>\n          <ion-row >\n            <ion-col class=\"ion-text-left\" >\n              <ion-text  color=\"dark\" >\n                <ion-icon name=\"heart-outline\"></ion-icon>\n\n              </ion-text>\n            </ion-col>\n            <ion-col class=\"ion-text-right\" >\n                <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      \n        <div class=\"separator\"></div>\n\n        <div>\n          <ion-buttons expand=\"full\" >\n            <ion-button expand=\"full\" style=\"width: 50%;\" >\n              <ion-icon  name=\"heart-outline\"></ion-icon>\n            </ion-button>\n            <ion-button expand=\"full\"  style=\"width: 50%;\" >\n              <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/publications/publications-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/home/publications/publications-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: PublicationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsPageRoutingModule", function() { return PublicationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publications.page */ "./src/app/pages/home/publications/publications.page.ts");




const routes = [
    {
        path: '',
        component: _publications_page__WEBPACK_IMPORTED_MODULE_3__["PublicationsPage"]
    }
];
let PublicationsPageRoutingModule = class PublicationsPageRoutingModule {
};
PublicationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PublicationsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/publications/publications.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/publications/publications.module.ts ***!
  \****************************************************************/
/*! exports provided: PublicationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsPageModule", function() { return PublicationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _publications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publications-routing.module */ "./src/app/pages/home/publications/publications-routing.module.ts");
/* harmony import */ var _publications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publications.page */ "./src/app/pages/home/publications/publications.page.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");








let PublicationsPageModule = class PublicationsPageModule {
};
PublicationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _publications_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicationsPageRoutingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxIonicImageViewerModule"]
        ],
        declarations: [_publications_page__WEBPACK_IMPORTED_MODULE_6__["PublicationsPage"]]
    })
], PublicationsPageModule);



/***/ }),

/***/ "./src/app/pages/home/publications/publications.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/publications/publications.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".publication-user {\n  display: flex;\n}\n.publication-user .user {\n  display: block;\n}\n.publication-user .user .name {\n  margin-top: 5px;\n  font-size: medium;\n}\n.publication-user .user .date {\n  margin-left: 5px;\n  font-size: xx-small;\n}\n.publication-text {\n  margin: 3px;\n  margin-left: 15px;\n  font-size: medium;\n}\n.publication-image {\n  align-self: auto;\n}\n.separator {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-bottom: solid 1px rgba(63, 62, 62, 0.671);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9wdWJsaWNhdGlvbnMvcHVibGljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDWjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUFaO0FBTUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUhKO0FBTUE7RUFDSSxnQkFBQTtBQUhKO0FBTUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcHVibGljYXRpb25zL3B1YmxpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVibGljYXRpb24tdXNlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLnVzZXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIC5uYW1le1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5kYXRle1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLnB1YmxpY2F0aW9uLXRleHR7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5wdWJsaWNhdGlvbi1pbWFnZXtcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xufVxuXG4uc2VwYXJhdG9ye1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSg2MywgNjIsIDYyLCAwLjY3MSk7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/publications/publications.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/publications/publications.page.ts ***!
  \**************************************************************/
/*! exports provided: PublicationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsPage", function() { return PublicationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _publications_form_publication_form_publication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../publications/form-publication/form-publication.page */ "./src/app/pages/publications/form-publication/form-publication.page.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/transfer-data.service */ "./src/app/services/transfer-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publications_publication_publication_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../publications/publication/publication.page */ "./src/app/pages/publications/publication/publication.page.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/paths-images.service */ "./src/app/services/paths-images.service.ts");















let PublicationsPage = class PublicationsPage {
    constructor(modalController, utilArray, request, util, authUser, navCtrl, transferData, router, dialog, pathImages) {
        this.modalController = modalController;
        this.utilArray = utilArray;
        this.request = request;
        this.util = util;
        this.authUser = authUser;
        this.navCtrl = navCtrl;
        this.transferData = transferData;
        this.router = router;
        this.dialog = dialog;
        this.pathImages = pathImages;
        this.publications = [];
        this.firstLoad = true;
        this.listSkeleton = new Array(8);
        this.processLike = false;
        this.publcationModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Publication', request);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = yield this.authUser.getUser();
            this.init();
        });
    }
    init($event = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //await this.util.delay(5000);
            this.publcationModel.api_function('list', {}).subscribe(response => {
                console.log(response);
                if (response['status'] == 'success')
                    this.publications = response['data'];
                if ($event) {
                    $event.target.complete();
                }
                this.firstLoad = false;
            }, error => {
                console.log(error);
                if ($event) {
                    $event.target.complete();
                }
                this.firstLoad = false;
            });
        });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _publications_form_publication_form_publication_page__WEBPACK_IMPORTED_MODULE_3__["FormPublicationPage"],
                componentProps: {
                //date : this.tabs && this.tabs[this.tabSelected] ? this.tabs[this.tabSelected].date : ''
                }
            });
            modal.onDidDismiss().then(data => {
                console.log('crate puvlivsa');
                const publication = data.data['publication'];
                this.utilArray.listAddFirst(this.publications, publication);
            });
            return yield modal.present();
        });
    }
    showPhotoUser(photo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('show photo ', photo);
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerModalComponent"],
                componentProps: {
                    src: photo ? photo.urlComplete : 'assets/images/profile.jpg',
                    scheme: 'dark'
                },
                cssClass: 'ion-img-viewer',
                keyboardClose: true,
                showBackdrop: true,
            });
            return yield modal.present();
        });
    }
    like(publication) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            publication.processLike = true;
            if (publication.liked) {
                this.publcationModel.api_functionModel(publication.id, 'removeLike', { user_id: this.user.id }).subscribe(response => {
                    if (response['status'] == 'success') {
                        publication.liked = !publication.liked;
                        publication.likes_count -= 1;
                        //this.utilArray.listUpdate(this.publications , publication.id , publication)
                    }
                    publication.processLike = false;
                }, error => {
                    console.error(error);
                    publication.processLike = false;
                });
            }
            else {
                this.publcationModel.api_functionModel(publication.id, 'addLike', { user_id: this.user.id }).subscribe(response => {
                    if (response['status'] == 'success') {
                        publication.liked = !publication.liked;
                        publication.likes_count += 1;
                        //this.utilArray.listUpdate(this.publications , publication.id , publication)
                    }
                    publication.processLike = false;
                }, error => {
                    console.error(error);
                    publication.processLike = false;
                });
            }
        });
    }
    showPublication(publication, segment = 'comments', index = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _publications_publication_publication_page__WEBPACK_IMPORTED_MODULE_12__["PublicationPage"],
                componentProps: {
                    id: publication.id,
                    segment: segment
                }
            });
            modal.onDidDismiss().then(data => {
                console.log('update publication');
                const publication = data.data['publication'];
                this.utilArray.listUpdate(this.publications, publication.id, publication);
            });
            return yield modal.present();
        });
    }
    openMenuPublication(publication) {
        this.dialog.actionSheetEditDelete(() => {
            this.editPublication(publication);
        }, () => {
            this.dialog.presentAlertConfirm('Alerta', '¿Seguro de eliminar esta aplicación?', () => {
                this.publcationModel.api_delete(publication.id).subscribe(response => {
                    if (response['status'] = 'success') {
                        this.utilArray.listDelete(this.publications, publication.id);
                        this.dialog.showToast('Publicacion Eliminada', null, 'success');
                    }
                });
            });
        });
    }
    editPublication(publication) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _publications_form_publication_form_publication_page__WEBPACK_IMPORTED_MODULE_3__["FormPublicationPage"],
                componentProps: {
                    id: publication.id
                }
            });
            modal.onDidDismiss().then(data => {
                console.log('update publicacion');
                if (data.data && data.data['publication']) {
                    const publication = data.data['publication'];
                    this.utilArray.listUpdate(this.publications, publication.id, publication);
                }
            });
            return yield modal.present();
        });
    }
};
PublicationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_4__["UtilArrayService"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_9__["AuthUserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_10__["TransferDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"] },
    { type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_14__["PathsImagesService"] }
];
PublicationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/publications/publications.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publications.page.scss */ "./src/app/pages/home/publications/publications.page.scss")).default]
    })
], PublicationsPage);



/***/ })

}]);
//# sourceMappingURL=publications-publications-module-es2015.js.map