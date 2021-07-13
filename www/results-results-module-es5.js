(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["results-results-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/results/results.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/results/results.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeResultsResultsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Resultados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!firstLoad\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n      <ion-refresher-content\n      refreshingText=\"Cargando...\"\n      ></ion-refresher-content>\n    </ion-refresher>\n  \n    \n  \n    <ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-segment scrollable [(ngModel)]=\"tabSelected\" (ionChange)=\"selectDate($event)\" >\n              <ion-segment-button *ngFor=\"let tab of tabs;let i=index\" value=\"{{i}}\" id=\"sgm_r_{{i}}\" >\n                {{formatDate(tab.date)}}\n              </ion-segment-button>\n            </ion-segment>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-list-header *ngIf=\"list.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n\n      <app-result-item\n        *ngFor=\"let game of list\"\n        [game] = \"game\"\n        routerLink=\"/results/profile/{{game.id}}\" \n        routerDirection=\"forward\"\n      ></app-result-item>\n      \n        \n\n      </ion-list>\n  \n\n  </div>\n\n\n\n  <div *ngIf=\"firstLoad\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-card *ngFor=\"let i of listSkeleton\">\n      <div class=\"ion-padding custom-skeleton\">\n        <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100% ; height: 30px;margin-top: 15px;\"></ion-skeleton-text>\n      </div>\n    </ion-card>\n  </div>\n\n  \n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/results/results-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/home/results/results-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: ResultsPageRoutingModule */

    /***/
    function srcAppPagesHomeResultsResultsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultsPageRoutingModule", function () {
        return ResultsPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _results_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./results.page */
      "./src/app/pages/home/results/results.page.ts");

      var routes = [{
        path: '',
        component: _results_page__WEBPACK_IMPORTED_MODULE_3__["ResultsPage"]
      }];

      var ResultsPageRoutingModule = function ResultsPageRoutingModule() {
        _classCallCheck(this, ResultsPageRoutingModule);
      };

      ResultsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResultsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/results/results.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/home/results/results.module.ts ***!
      \******************************************************/

    /*! exports provided: ResultsPageModule */

    /***/
    function srcAppPagesHomeResultsResultsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultsPageModule", function () {
        return ResultsPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _results_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./results-routing.module */
      "./src/app/pages/home/results/results-routing.module.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _results_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./results.page */
      "./src/app/pages/home/results/results.page.ts");

      var ResultsPageModule = function ResultsPageModule() {
        _classCallCheck(this, ResultsPageModule);
      };

      ResultsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _results_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultsPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
        declarations: [_results_page__WEBPACK_IMPORTED_MODULE_7__["ResultsPage"]]
      })], ResultsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/results/results.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/home/results/results.page.ts ***!
      \****************************************************/

    /*! exports provided: ResultsPage */

    /***/
    function srcAppPagesHomeResultsResultsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultsPage", function () {
        return ResultsPage;
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


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");

      var ResultsPage = /*#__PURE__*/function () {
        function ResultsPage(request, util, dialogService) {
          _classCallCheck(this, ResultsPage);

          this.request = request;
          this.util = util;
          this.dialogService = dialogService;
          this.list = [];
          this.tabs = [];
          this.listSkeleton = new Array(3);
          this.firstLoad = true;
          this.modelGame = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', request);
        }

        _createClass(ResultsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      /*this.modelGame.api_function('results').subscribe(data => {
                        if(data['status'] = 'success'){
                          this.list = data['data'];
                          if(event)
                            event.target.complete();
                        }
                      })
                      */
                      //await this.delay(5000);
                      this.modelGame.api_function('pageHomeResults').subscribe(function (response) {
                        if (response['status'] == 'success') {
                          _this.tabs = response['data']['dates'];

                          _this.selectLast();
                        }

                        if (event) event.target.complete();
                        console.log(response);
                        _this.firstLoad = false;
                      }, function (error) {
                        if (event) event.target.complete();
                        console.error(error);
                        _this.firstLoad = false;
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "selectLast",
          value: function selectLast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var tab;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.tabs.length > 0)) {
                        _context2.next = 7;
                        break;
                      }

                      tab = this.tabs.slice(-1)[0];
                      this.list = tab['results'];
                      this.tabSelected = this.tabs.length - 1;
                      _context2.next = 6;
                      return this.delay(1500);

                    case 6:
                      this.focusSegment(); //this.selectDate(tab['date']);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "selectDate",
          value: function selectDate(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var index, tab;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      index = parseInt(event.detail.value);
                      tab = this.tabs[index];

                      if (!tab['results']) {
                        _context3.next = 6;
                        break;
                      }

                      this.list = tab['results'];
                      this.focusSegment();
                      return _context3.abrupt("return");

                    case 6:
                      _context3.next = 8;
                      return this.dialogService.loadingProgres();

                    case 8:
                      this.modelGame.api_function('resultsByDate', {
                        'date': tab['date']
                      }).subscribe(function (response) {
                        if (response['status'] == 'success') {
                          _this2.tabs[index]['results'] = response['data'];
                          _this2.list = _this2.tabs[index]['results'];

                          _this2.focusSegment();
                        }

                        _this2.dialogService.dimissLoaging();

                        console.log(response);
                      }, function (error) {
                        console.error(error);

                        _this2.dialogService.dimissLoaging();
                      });

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "focusSegment",
          value: function focusSegment() {
            var segmentId = 'sgm_r_' + this.tabSelected;
            console.log('select segment : ', segmentId);
            document.getElementById(segmentId).scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center'
            });
          }
        }, {
          key: "delay",
          value: function delay(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          }
        }, {
          key: "formatDate",
          value: function formatDate(val) {
            return this.util.setFormatMoment(val, 'DD MMMM YYYY');
          }
        }]);

        return ResultsPage;
      }();

      ResultsPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }];
      };

      ResultsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-results',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./results.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/results/results.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./results.page.scss */
        "./src/app/pages/home/results/results.page.scss"))["default"]]
      })], ResultsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=results-results-module-es5.js.map