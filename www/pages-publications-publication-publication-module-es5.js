(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-publications-publication-publication-module"], {
    /***/
    "./src/app/pages/publications/publication/publication-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/publications/publication/publication-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: PublicationPageRoutingModule */

    /***/
    function srcAppPagesPublicationsPublicationPublicationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicationPageRoutingModule", function () {
        return PublicationPageRoutingModule;
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


      var _publication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./publication.page */
      "./src/app/pages/publications/publication/publication.page.ts");

      var routes = [{
        path: '',
        component: _publication_page__WEBPACK_IMPORTED_MODULE_3__["PublicationPage"]
      }];

      var PublicationPageRoutingModule = function PublicationPageRoutingModule() {
        _classCallCheck(this, PublicationPageRoutingModule);
      };

      PublicationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PublicationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/publications/publication/publication.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/publications/publication/publication.module.ts ***!
      \**********************************************************************/

    /*! exports provided: PublicationPageModule */

    /***/
    function srcAppPagesPublicationsPublicationPublicationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicationPageModule", function () {
        return PublicationPageModule;
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


      var _publication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./publication-routing.module */
      "./src/app/pages/publications/publication/publication-routing.module.ts");
      /* harmony import */


      var _publication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./publication.page */
      "./src/app/pages/publications/publication/publication.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/components.module */
      "./src/app/components/components.module.ts");

      var PublicationPageModule = function PublicationPageModule() {
        _classCallCheck(this, PublicationPageModule);
      };

      PublicationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _publication_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicationPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_publication_page__WEBPACK_IMPORTED_MODULE_6__["PublicationPage"]]
      })], PublicationPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-publications-publication-publication-module-es5.js.map