(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-list-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/list/list.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/list/list.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNotificationListListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"admin_home\"></ion-back-button>    \n    </ion-buttons>\n    <ion-title>Notificaciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list>\n\n    <ion-list-header *ngIf=\"notifications.length == 0\"  color=\"light\">\n      <ion-label>No posee notificaciones</ion-label>\n    </ion-list-header>\n \n\n    <ion-item *ngFor=\"let not of notifications\"  (click)=\"visibleNot(not)\" [class]=\"{'no-active' : not.isShow}\">\n      <app-notification\n        style=\"width: 100%;\"\n        [notification] = \"not\"\n      ></app-notification>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/notification/list/list-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/notification/list/list-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: ListPageRoutingModule */

    /***/
    function srcAppPagesNotificationListListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function () {
        return ListPageRoutingModule;
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


      var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list.page */
      "./src/app/pages/notification/list/list.page.ts");

      var routes = [{
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
      }];

      var ListPageRoutingModule = function ListPageRoutingModule() {
        _classCallCheck(this, ListPageRoutingModule);
      };

      ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/notification/list/list.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/notification/list/list.module.ts ***!
      \********************************************************/

    /*! exports provided: ListPageModule */

    /***/
    function srcAppPagesNotificationListListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPageModule", function () {
        return ListPageModule;
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


      var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-routing.module */
      "./src/app/pages/notification/list/list-routing.module.ts");
      /* harmony import */


      var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list.page */
      "./src/app/pages/notification/list/list.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/components.module */
      "./src/app/components/components.module.ts");

      var ListPageModule = function ListPageModule() {
        _classCallCheck(this, ListPageModule);
      };

      ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
      })], ListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/notification/list/list.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/pages/notification/list/list.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNotificationListListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-active {\n  --ion-background-color: #e9ebee !important;\n}\n\n.date {\n  font-size: x-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWFjdGl2ZXtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZTllYmVlICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRle1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/notification/list/list.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/notification/list/list.page.ts ***!
      \******************************************************/

    /*! exports provided: ListPage */

    /***/
    function srcAppPagesNotificationListListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPage", function () {
        return ListPage;
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


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util-array.service */
      "./src/app/services/util-array.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ListPage = /*#__PURE__*/function () {
        function ListPage(request, userAuth, utilArray, navCtrl) {
          _classCallCheck(this, ListPage);

          this.request = request;
          this.userAuth = userAuth;
          this.utilArray = utilArray;
          this.navCtrl = navCtrl;
          this.notifications = [];
          this.notificationModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Notification', request);
          this.userModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('User', request);
        }

        _createClass(ListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;

            var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.userModel.api_functionModel(this.userAuth.user.id, 'resetNotifications').subscribe(function () {
              console.log('restart count  notifications');
              _this.userAuth.user.counts_not = 0;

              _this.userAuth.saveUser();
            });
            this.notifications = this.userAuth.user.notifications ? this.userAuth.user.notifications : [];
            this.userModel.api_functionModel(this.userAuth.user.id, 'pageNotifications', {}).subscribe(function (response) {
              console.log(response);
              _this.notifications = response['data'];
              if ($event) $event.target.complete();
            }, function (error) {
              console.log(error);
              if ($event) $event.target.complete();
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {}
        }, {
          key: "visibleNot",
          value: function visibleNot(not) {
            var _this2 = this;

            if (not.id) this.notificationModel.api_functionModel(not.id, 'viewed').subscribe(function (response) {
              var notification = response['data'];

              _this2.utilArray.listUpdate(_this2.notifications, notification.id, notification);
            });
            this.navCtrl.navigateForward(not.route);
          }
        }]);

        return ListPage;
      }();

      ListPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
        }, {
          type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_5__["UtilArrayService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }];
      };

      ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/list/list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./list.page.scss */
        "./src/app/pages/notification/list/list.page.scss"))["default"]]
      })], ListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-notification-list-list-module-es5.js.map