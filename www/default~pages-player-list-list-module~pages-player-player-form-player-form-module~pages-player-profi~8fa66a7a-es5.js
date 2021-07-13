(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-player-list-list-module~pages-player-player-form-player-form-module~pages-player-profi~8fa66a7a"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-form/player-form.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-form/player-form.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPlayerPlayerFormPlayerFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Jugador</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"servicePlayer.errorsForm.clear()\" >\n\n\n    <ion-item *ngIf=\"canEditUser\">\n      <ion-label position=\"floating\" >Usuario</ion-label>\n      <ion-input type=\"text\" [value]=\"userSelect\" name=\"email\" (click)=\"selectUser()\"></ion-input>\n      <ion-input type=\"hidden\" [(ngModel)]=\"player.user_id\" name=\"user_id\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('user_id') }}</div>\n\n    <div>\n      <ion-img  [src]=\"photoModel.photo.getPath()\" ></ion-img>\n      <div class=\"ion-text-center\">\n        <ion-button   size=\"small\" color=\"tertiary\" (click)=\"photoModel.addOneNewToGallery()\">{{photoModel.isLoadPthoto() ? 'Modificar' : 'Seleccionar Imagen' }}</ion-button>\n      </div>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.name\" name=\"name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('name') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Fecha de nacimiento</ion-label>\n      <ion-datetime [(ngModel)]=\"player.birth_date\" name=\"birth_date\"    displayFormat=\"YYYY-MM-DD\" ></ion-datetime>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('birth_date') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Apodo</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.nick\" name=\"nick\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('nick') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Numero</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.number\" name=\"number\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('number') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Altura</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.height\" name=\"height\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('height') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Peso</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.weight\" name=\"weight\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('weight') }}</div>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Posicion</ion-label>\n      <ion-select [(ngModel)]=\"player.position_id\" name=\"position_id\">\n        <ion-select-option [value]=\"pos.id\" *ngFor=\"let pos of servicePosition.list\">{{ pos.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('position_id') }}</div>\n    </ion-item>\n\n    <div class=\"ion-text-center ion-margin-top\" >\n      <ion-text color=\"danger\" *ngIf=\"!(isAutor || canEditUser )\" >\n        Este Jugador ya tiene asignado un administrador, solo él puede modificar los datos.\n      </ion-text>   \n    </div>\n   \n    <ion-button type=\"submit\"  expand=\"block\" [disabled]=\" !(isAutor || canEditUser ) \" class=\"ion-margin\">\n      Guardar\n    </ion-button>\n   \n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/player/player-form/player-form.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/pages/player/player-form/player-form.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPlayerPlayerFormPlayerFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9wbGF5ZXItZm9ybS9wbGF5ZXItZm9ybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/player/player-form/player-form.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/player/player-form/player-form.page.ts ***!
      \**************************************************************/

    /*! exports provided: PlayerFormPage */

    /***/
    function srcAppPagesPlayerPlayerFormPlayerFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayerFormPage", function () {
        return PlayerFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/models/modelImage */
      "./src/app/api/models/modelImage.ts");
      /* harmony import */


      var _search_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../search/search.page */
      "./src/app/pages/search/search.page.ts");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var PlayerFormPage = /*#__PURE__*/function () {
        function PlayerFormPage(request, dialogService, viewCtrl, navParams, modalController, authUser, alertController, router) {
          _classCallCheck(this, PlayerFormPage);

          this.request = request;
          this.dialogService = dialogService;
          this.viewCtrl = viewCtrl;
          this.modalController = modalController;
          this.authUser = authUser;
          this.alertController = alertController;
          this.router = router;
          this.isUser = false;
          this.canEditUser = true;
          this.servicePosition = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__["Model"]('Position', request);
          this.servicePlayer = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__["Model"]('Player', request);
          console.log('ver');
          this.id = navParams.get('id');
          this.team_id = navParams.get('team_id');
          this.isUser = navParams.get('isUser');
          this.photoModel = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__["ModelImage"](request, viewCtrl);
          this.photoModel.setAspectRatioCrop('1 / 1');
          this.photoModel.init('images/players/profile/', true, 'assets/images/jugador.png');
        }

        _createClass(PlayerFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initObject();
            this.servicePosition.api_all();
          }
        }, {
          key: "initObject",
          value: function initObject() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.player = {
                        'name': '',
                        'nick': '',
                        'birth_date': '',
                        'number': 1,
                        'height': 0.0,
                        'weight': 0.0,
                        'position_id': '',
                        'team_id': this.team_id,
                        'photo_id': ''
                      };

                      if (!this.id) {
                        _context.next = 5;
                        break;
                      }

                      _context.next = 4;
                      return this.dialogService.loadingProgres(null);

                    case 4:
                      this.servicePlayer.api_find(this.id).subscribe(function (data) {
                        if (data['status'] == 'success') {
                          _this.player = data['Player'];
                          if (_this.player.photo) _this.photoModel.setImage(_this.player.photo);
                          _this.canEditUser = _this.player && !_this.player.user_id;

                          _this.dialogService.dimissLoaging();
                        }
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.photoModel.isLoadPthoto()) {
                        _context2.next = 3;
                        break;
                      }

                      this.savePhoto();
                      return _context2.abrupt("return");

                    case 3:
                      this.savePlayer();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss(player) {
            this.viewCtrl.dismiss({
              player: player
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }, {
          key: "savePhoto",
          value: function savePhoto() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.dialogService.loadingProgres('Subiendo foto...');
                      _context3.next = 3;
                      return this.photoModel.uploadImage().subscribe(function (data) {
                        if (data['status'] == 'success') {
                          var image = data['Image'];
                          _this2.player.photo_id = image.id;

                          _this2.savePlayer();

                          _this2.dialogService.dimissLoaging();
                        }
                      }, function (error) {
                        _this2.dialogService.showToast('Error al subir Portada', 'Error', 'danger'); //this.submit();

                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "savePlayer",
          value: function savePlayer() {
            var _this3 = this;

            if (this.player.id) {
              this.dialogService.loadingProgres('Procesando, espere..');
              this.servicePlayer.api_update(this.player).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this3.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this3.dismiss(data['Player']);

                  _this3.dialogService.dimissLoaging();
                }
              });
            } else {
              this.dialogService.loadingProgres('Procesando, espere..');
              this.servicePlayer.api_create(this.player).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this3.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this3.dismiss(data['Player']);

                  _this3.dialogService.dimissLoaging();
                }
              });
            }
          }
        }, {
          key: "selectUser",
          value: function selectUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      //e.preventDefault();
                      console.log('Add admins');
                      _context4.next = 3;
                      return this.modalController.create({
                        component: _search_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"],
                        componentProps: {
                          cancellable: false,
                          model: 'User',
                          "function": 'searchUser',
                          multiple: false
                        }
                      });

                    case 3:
                      modal = _context4.sent;
                      modal.onDidDismiss().then(function (data) {
                        var user = data.data ? data.data['item'] : null;

                        if (user) {
                          if (!user.player) {
                            _this4.player.user_id = user.id;
                            _this4.player.email = user.text;
                          } else {
                            _this4.userWithPlayer(user);
                          }
                        }
                      });
                      _context4.next = 7;
                      return modal.present();

                    case 7:
                      return _context4.abrupt("return", _context4.sent);

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "userWithPlayer",
          value: function userWithPlayer(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Atención',
                        message: "<b>".concat(user.text, "</b> ya tiene asociado un jugador. Puedes enviarle una solicitud para que se incorpore a este equipo."),
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Solicitar',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            _this5.router.navigateByUrl("team-request/".concat(_this5.team_id, "/").concat(user.player.id));

                            _this5.close();
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "isAutor",
          get: function get() {
            return this.player && this.authUser.user.id == this.player.user_id;
          }
        }, {
          key: "isAdminGeneral",
          get: function get() {
            return this.authUser.isAdmin;
          }
        }, {
          key: "userSelect",
          get: function get() {
            return this.player.user_id ? this.player.user ? this.player.user.email : this.player.email : '';
          }
        }]);

        return PlayerFormPage;
      }();

      PlayerFormPage.ctorParameters = function () {
        return [{
          type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      };

      PlayerFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./player-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-form/player-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./player-form.page.scss */
        "./src/app/pages/player/player-form/player-form.page.scss"))["default"]]
      })], PlayerFormPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-player-list-list-module~pages-player-player-form-player-form-module~pages-player-profi~8fa66a7a-es5.js.map