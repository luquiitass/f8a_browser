(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-game-admin-game-admin-game-module~pages-game-game-game-module~pages-game-result-result~2beb2a8f"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 20px;;\">\n\n  <div *ngIf=\"withTitle\">\n    <ion-card-title class=\"ion-text-center title\">Comentarios</ion-card-title>\n    <div class=\"separator\"></div>\n  </div>\n\n  <div> \n\n    <ion-list lines=\"none\" style=\"margin: 0px;padding: 0px;\">\n      <ion-item *ngIf=\"listComments.length < 1\">\n        <ion-note style=\"font-size: large; margin: 15px;\">Se el primero en comentar!!!</ion-note>\n      </ion-item>\n      <ion-item  *ngFor=\"let item of listComments\" class=\"team-list\">\n        <div class=\"comment-item\" *ngIf=\"!item.edit\">\n          <ion-button class=\"menu-right\"fill=\"clear\" (click)=\"openMenuComment(item)\" *ngIf=\"authUser.user.id == item.user_id\">\n            <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n          </ion-button>\n\n          <ion-thumbnail slot=\"start\" class=\"comment-image\">\n            <ion-img\n              (click)=\"openViewer(item)\"\n              class=\"comment-image\" \n              [src]=\"getPhoto(item)\"\n              style=\"border-radius:50%; background-position:center center; background-size:cover; width:40px; height:40px;\">\n            </ion-img>\n          </ion-thumbnail>\n\n          <div class=\"comment-data\">\n            <div class=\"comment-user\">\n              <ion-text color=\"dark\">\n                <a [routerLink]=\"'/users/' + item.user.id +'/profile'\" style=\"text-decoration: blink;\" >\n                  {{item.user.last_name }} {{item.user.first_name }}\n                </a>\n              </ion-text>\n            </div>\n            <div class=\"comment-body first-uppercase\">\n              <ion-text color=\"light\">\n                {{item.body}}\n              </ion-text>\n            </div>\n            <div class=\"comment-date\" >\n              <ion-text color=\"light\">\n                {{ formatDate(item.created_at)}}\n              </ion-text>\n            </div>\n          </div>\n\n        </div>\n\n        <div *ngIf=\"item.edit\" class=\"comment-edit\" >\n\n          <ion-text>Editar comentario</ion-text>\n\n          <ion-textarea  class=\"form-control editor-text first-uppercase\" [(ngModel)]=\"commentEdit.body\" name=\"body\"  placeholder=\"Añade un comentario...\" ></ion-textarea>\n          <div class=\"content-right comment-edit-bts\">\n            <ion-button slot=\"end\" (click)=\"editComment()\" [disabled]=\"updatingComment\">\n              <ion-spinner name=\"lines\" *ngIf=\"updatingComment\" ></ion-spinner>\n              Actualizar\n            </ion-button>\n            <ion-button slot=\"end\" color=\"light\" (click)=\"cancelEdit(item)\"[disabled]=\"updatingComment\" >Cancelar</ion-button>\n          </div>\n        </div>\n\n       \n        \n\n       \n      </ion-item>\n    </ion-list>\n\n    <div class=\"content-new\">\n        <form (ngSubmit)=\"send()\" >\n\n          <div class=\"content-comment\">\n            <div class=\"content-comment-text\">\n              <ion-textarea  class=\"editor-text first-uppercase\" [(ngModel)]=\"comment.body\" name=\"body\"  placeholder=\"Escreibe un comentario...\" ></ion-textarea>\n            </div>\n            <div class=\"content-comment-btn ion-align-self-end\">\n                <ion-fab-button  class=\"edditor-send\" size=\"small\" color=\"primary\" type=\"submit\" (click)=\"send()\"  [disabled]=\"sending\">\n                  <ion-icon name=\"send-sharp\" *ngIf=\"!sending\"></ion-icon>\n                  <ion-spinner name=\"lines\" *ngIf=\"sending\" ></ion-spinner>\n\n                </ion-fab-button>\n            </div>\n          </div>\n\n        \n      </form>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event-list/event-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event-list/event-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"(events.length && team_l && team_v) || isAdmin\" >\n  <ion-card-header class=\"bg-l1\">\n    <ion-card-title>Sucesos</ion-card-title>\n  </ion-card-header>\n    <ion-list >\n\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngIf=\"team_l\"  class=\"ion-text-start col-l\">\n            <ion-text color=\"light\">\n              {{team_l.name}}\n            </ion-text>\n          </ion-col>\n          <ion-col *ngIf=\"team_v\"  class=\"ion-text-end col-v\">\n            <ion-text color=\"light\">\n              {{team_v.name}}\n            </ion-text>          \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class=\"separator\"></div>\n\n      <ion-list-header *ngIf=\"events.length == 0\"  color=\"light\">\n        <ion-label>Sin Sucesos</ion-label>\n      </ion-list-header> \n\n   \n      <ion-item *ngFor=\"let item of events ; let i = index\"  class=\"bg-l0\">\n          \n        <ion-label class=\"{{item.team.id == team_v.id ? 'item-v' : ''}} {{item.team.id == team_l.id ? 'item-l' : ''}}\" >\n          <h3 [ngClass]=\"{'ion-text-end' : item.team.id == team_v.id}\">\n            <img *ngIf=\"item.type_event.icon\" src=\"assets/images/{{item.type_event.icon}}\"  width=\"40px\">\n            {{item.time}}´ \n            <b>{{item.type_event.name}}  </b>\n            <a [routerLink]=\"'/player/profile/' + item.player.id\" routerDirection=\"forward\" >\n              {{item.player.name}}\n            </a>\n          </h3>\n        </ion-label>\n\n        <ion-buttons slot=\"start\" *ngIf=\"canEdit && team_admin.id == item.team.id\">\n          <ion-button (click)=\"confirmDelete(item,i)\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n      \n    </ion-list>\n\n    <ion-button *ngIf=\"canEdit\"  fill=\"outline\" expand=\"block\" (click)=\"addEvent()\">\n      Nuevo Suceso\n    </ion-button>\n\n    <div class=\"ion-text-center\" *ngIf=\"team_admin\">\n      <ion-chip class=\"chip-admin\" color=\"secondary\" *ngIf=\"isAdmin\">\n        <ion-label class=\"msj-is-admin\">\n          Eres el administrador de <b>{{team_admin.name}} </b>, puedes administrar lo sucesos de tu equipo al activar la edición.\n        </ion-label>\n        <ion-toggle [(ngModel)]=\"canEdit\"></ion-toggle>\n  \n      </ion-chip>\n    </div>\n\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/list/list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/list/list.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  list works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/game/game.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/game/game.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n    <div class=\"ion-padding custom-skeleton\">\n      <div class=\"game\" >\n        <div class=\"team-list contenedor\">\n          <div class=\"team\">\n            <ion-text >\n              <h3 class=\"text-name\">{{game.team_l.name}}</h3>\n            </ion-text>\n            <ion-avatar slot=\"start\">\n              <ion-img \n              [src]=\"game.team_l.shield ? game.team_l.shield.urlComplete : 'assets/images/shield_team.png'\"\n              ></ion-img>\n            </ion-avatar>\n          </div>\n\n          <div class=\"vs ion-align-items-center\">\n            <div>\n              <ion-text color=\"ligth\">Vs</ion-text>\n            </div>\n          </div>\n\n          <div class=\"team\">\n            <ion-text >\n              <h3 class=\"text-name\">{{game.team_v.name}}</h3>\n            </ion-text>\n            <ion-avatar slot=\"start\">\n              <ion-img \n              [src]=\"game.team_v.shield ? game.team_v.shield.urlComplete : 'assets/images/shield_team.png'\"\n              ></ion-img>\n            </ion-avatar>\n          </div>\n        </div>\n      </div>\n      <div class=\"date ion-text-center\"  style=\"width: 100%\">\n        <ion-text color=\"dark\"  class=\"io-float-left\">\n          <ion-icon name=\"timer-outline\" color=\"primary\"></ion-icon>      \n          {{withDate ? util.setFormatMoment(game.date,'ddd DD MMM') : ''}}   {{ util.formatHours( game.time )  }}\n        </ion-text>\n\n        <ion-text class=\"ion-float-right\" *ngIf=\"game.comments_count >= 0 \">\n          <ion-icon name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>      \n          {{game.comments_count}}\n        </ion-text>\n      </div>\n    </div>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/notification/notification.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/notification/notification.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item *ngIf=\"notification  && notification.type == 'like'\">\n     <ion-avatar slot=\"start\" >\n      <ion-img \n        [src]=\"notification.autor.photo ? notification.autor.photo.urlCompleteThumb : pathImages.images.profile_user \">\n      </ion-img>\n    </ion-avatar>\n    <ion-label >\n      <h3><b>{{notification.autor.completeName}}</b> ha indicado que le gusta tu publicacion.</h3>\n      <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n    </ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"notification  && notification.type == 'comment_publication'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor.photo ? notification.autor.photo.urlCompleteThumb : pathImages.images.profile_user\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3><b>{{notification.autor.completeName}}</b> ha comentado tu publicacion.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'admin_team'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor.shield ? notification.autor.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3><b>{{authUser.user.completeName}}</b> Fuiste asignado como administrador del equipo <b>{{notification.autor.name}}</b>.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'create_player'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor.shield ? notification.autor.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3><b>{{notification.autor.name}}</b> Te ha registrado como jugador de su equipo. Puedes ingresar a tu perfil de jugador y modificar algunos datos.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'team_request_to_player'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor.shield ? notification.autor.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3>El equipo <b>{{notification.autor.name}}</b> te ha enviado un solicitud para que formes parte de su plantilla de jugadores.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"notification && notification.type == 'player_accept_request_of_team'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\" utilPhoto.getPhotoPlayer(notification.autor)\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3><b>{{notification.autor.name}}</b> aceptó la solicitud y ya es parte de la plantilla de <b>{{notification.object.team.name}}</b>.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'player_reject_request_of_team'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\" utilPhoto.getPhotoPlayer(notification.autor)\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3><b>{{notification.autor.name}}</b> rechazo la solicitud,no desea formar parte de  <b>{{notification.object.team.name}}</b>.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"notification && notification.type == 'player_change_team'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\" utilPhoto.getPhotoPlayer(notification.object)\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3>El jugador <b>{{notification.object.name}}</b> ha dejado su equipo para formar parte de <b>{{notification.autor.name}}</b>.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/publication/publication.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/publication/publication.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card style=\"width: 100%;\"  *ngIf=\"publication\">\n  <ion-card-content>\n    <ion-button class=\"menu-right\"fill=\"clear\" (click)=\"openMenuPublication(publication)\" *ngIf=\"authUser.user.id == publication.user_id\">\n      <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n    </ion-button>\n\n    <div class=\"publication-user\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img\n          (click)=\"showPhotoUser(publication.user.photo)\"\n          class=\"user-image\"\n          [src]=\" utilPhoto.getPhotoUser(publication.user) \"\n          style=\"border-radius:50%; background-position:center center; background-size:cover; width:40px; height:40px;\">\n      </ion-img>\n      </ion-thumbnail>\n\n      <div class=\"user\">\n        <div class=\"name\">\n          {{publication.user.last_name}} {{publication.user.first_name}}\n        </div>\n        <div class=\"date\">\n          {{util.getFormarHumans(publication.created_at)}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"publication-text\">\n      <ion-text color=\"dark\">\n        {{publication.text}}\n      </ion-text>\n    </div>\n\n    <div class=\"publication-image ion-text-center\" *ngIf=\"publication.image_id\">\n      <img [src]=\"publication.image.urlComplete\">\n    </div>\n\n    <ion-grid>\n      <ion-row >\n        <ion-col class=\"ion-text-left\"  (click)=\"showPublication(publication , 'likes')\">\n          <ion-text  color=\"dark\" >\n            <ion-icon name=\"heart-outline\" color=\"danger\"></ion-icon>\n            {{publication.likes_count}}\n          </ion-text>\n        </ion-col>\n        <ion-col class=\"ion-text-right\" (click)=\"showPublication(publication , 'comments')\">\n          <ion-text >\n            <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n            {{publication.comments_count}}\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <div class=\"separator\"></div>\n\n    <div>\n      <ion-buttons expand=\"full\" >\n        <ion-button expand=\"full\" style=\"width: 50%;\" [color]=\"publication.liked ? 'danger' : 'primary'\" (click)=\"like(publication)\" [disabled]=\"publication.processLike ? true : false\">\n          <ion-icon  name=\"heart-outline\" *ngIf=\"!publication.processLike\" ></ion-icon>\n          <ion-spinner name=\"lines\" *ngIf=\"publication.processLike\" ></ion-spinner>\n        </ion-button>\n        <ion-button expand=\"full\"  style=\"width: 50%;\" color=\"primary\" (click)=\"showPublication(publication , 'comments')\">\n          <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/result-item/result-item.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/result-item/result-item.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"false\" class=\"item1\">\n  <div class=\"game\">\n    <div class=\"team-list contenedor\">\n      <div class=\"team\" >\n        <ion-avatar class=\"avatar\">\n          <ion-img \n          [src]=\"game.team_l.shield ? game.team_l.shield.urlComplete : 'assets/images/shield_team.png'\"\n          ></ion-img>\n        </ion-avatar>\n        <ion-text class=\"name-team\" color=\"dark\">{{game.team_l.name}}</ion-text>\n        <ion-text  class=\"goals-team\" color=\"dark\" >{{game.l_goals}}</ion-text>\n      </div>\n\n\n      <div class=\"team\">\n        <ion-avatar class=\"avatar\">\n          <ion-img \n          [src]=\"game.team_v.shield ? game.team_v.shield.urlComplete : 'assets/images/shield_team.png'\"\n          ></ion-img>\n        </ion-avatar>\n        <ion-text class=\"name-team\" color=\"dark\">{{game.team_v.name}}</ion-text>\n        <ion-text  class=\"goals-team\" color=\"dark\" >{{game.v_goals}}</ion-text>\n      </div>\n    </div>\n  </div>\n  <div class=\"comment\">\n    <ion-icon name=\"chatbox-outline\"></ion-icon>\n  </div> \n</ion-card>\n\n<ion-card class=\"item2\">\n  <div class=\"ion-padding custom-skeleton\">\n    <div class=\"game\" >\n      <div class=\"team-list contenedor\">\n        <div class=\"team\">\n          <ion-text >\n            <h3 class=\"text-name\">{{game.team_l.name}}</h3>\n          </ion-text>\n          <ion-avatar slot=\"start\">\n            <ion-img \n            [src]=\"game.team_l.shield ? game.team_l.shield.urlComplete : 'assets/images/shield_team.png'\"\n            ></ion-img>\n          </ion-avatar>\n        </div>\n\n        <div class=\"goals ion-align-self-center \">\n          <ion-grid style=\"width: 100%;\">\n            <ion-row>\n              <ion-col size=\"5\">\n                {{game.l_goals}}\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                <ion-text>-</ion-text>\n              </ion-col>\n              <ion-col size=\"5\">\n                {{game.v_goals}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <div class=\"team\">\n          <ion-text >\n            <h3 class=\"text-name\">{{game.team_v.name}}</h3>\n          </ion-text>\n          <ion-avatar slot=\"start\">\n            <ion-img \n            [src]=\"game.team_v.shield ? game.team_v.shield.urlComplete : 'assets/images/shield_team.png'\"\n            ></ion-img>\n          </ion-avatar>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/likes/likes.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/likes/likes.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-content>\n\n    <ion-list>\n\n      <ion-list-header *ngIf=\"likes.length == 0\">\n        <ion-label>\n          No posee me gustas\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item *ngFor=\" let user of likes \" >\n        \n        <ion-thumbnail slot=\"start\" class=\"comment-image\">\n          <ion-img\n            class=\"comment-image\" \n            [src]=\"user.photo ? user.photo.urlCompleteThumb : pathImages.images.profile_user\"\n            style=\"border-radius:50%; background-position:center center; background-size:cover;\">\n          </ion-img>\n        </ion-thumbnail>\n        \n        <ion-label>\n            \n            {{user.last_name}} {{user.first_name}}\n          </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-user/menu-user.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-user/menu-user.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-card *ngIf=\"authUser.user\">\n  <ion-card-content>\n    <ion-thumbnail slot=\"center\" class=\"content-image center\">\n      <ion-img\n        class=\"image center\" \n        [src]=\"authUser.user.photo ? authUser.user.photo.urlComplete : pathImages.images.profile_user\"\n        style=\"border-radius:50%; background-position:center center; background-size:cover; \">\n      </ion-img>\n    </ion-thumbnail>\n  </ion-card-content>\n  <ion-card-header>\n    <ion-card-title class=\"ion-text-center\">\n      {{authUser.user.last_name}} {{authUser.user.first_name}}\n    </ion-card-title>\n    <ion-card-subtitle class=\"ion-text-center\">\n      {{authUser.user.email}}\n    </ion-card-subtitle>\n  </ion-card-header>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notFount/not-fount/not-fount.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notFount/not-fount/not-fount.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-content>\n    No se ha encontrado el registro, es probable que haya sido eliminado.\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notificatio-selected/notificatio-selected.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notificatio-selected/notificatio-selected.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <ion-card> -->\n  <div class=\"separator\"></div>\n\n  <ion-grid style=\"padding: 20px;\">\n    <ion-row>\n      <ion-col size=\"10\">\n        <div *ngIf=\"isFavorite()\">\n          <div>Notificaciones activas !!!</div>\n          <div>Recibiras Notificaciones de las diferentes noticias de este equipo.</div>\n        </div>\n        <div *ngIf=\"!isFavorite()\">\n          <div>Activa las <b>Notificaciones</b> para recibir todas las noticias de este equipo.</div>\n        </div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button (click)=\"toggleFavorite()\">\n          <ion-icon [name]=\"getNameIcon()\" [ngClass]=\"{'favorite' : isFavorite()}\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"separator\"></div>\n\n<!-- </ion-card> -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player-list/player-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player-list/player-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div *ngIf=\"!firstLoading\">\n\n    <ion-grid *ngIf=\"!errorLoading\">\n      <div *ngIf=\"items.length < 1\">\n        No ha encontrado Jugadores\n      </div>\n  \n      <ion-row>\n        <ion-col sizeXs=\"4\" sizeMd=\"3\" *ngFor=\"let item of items; let i = index\">\n          <div class=\"player-list\" (click)=\"selectItem(item)\">\n            <img class=\"player-list-photo\" [src]=\"getPhoto(item)\" alt=\"Foto\" >\n            <ion-text color=\"dark\">\n              <h4 class=\"player-list-name\">{{item.name}}</h4>\n            </ion-text>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <div *ngIf=\"errorLoading\" (clcik)=\"load($event)\">\n      Volver a Intentar\n    </div>\n\n  </div>\n\n  <div *ngIf=\"firstLoading\">\n    <ion-row>\n      <ion-col size=\"4\" *ngFor=\"let item of listSkeleton\">\n        <div class=\"player-list\">\n          <ion-skeleton-text class=\"player-list-photo\" animated style=\"height: 100px;\"></ion-skeleton-text>\n          <h4 class=\"player-list-name\">\n            <ion-skeleton-text animated style=\"width: 80%; height: 20px;\"></ion-skeleton-text>\n          </h4>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n  \n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/redes/red-list/red-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/redes/red-list/red-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"(list && list.length > 0)  || isAdmin\">\n  <ion-card-header>\n    \n    <ion-item>\n      <ion-card-title>\n        Redes Sociales\n      </ion-card-title>\n      <ion-button *ngIf=\"isAdmin\" slot=\"end\" (click)=\"openModal()\">\n        <ion-icon name=\"add-outline\"></ion-icon>      \n      </ion-button>\n    </ion-item>\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-refresher *ngIf=\"withRefresh\" slot=\"fixed\" (ionRefresh)=\"load($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n   \n  \n      <ion-list-header *ngIf=\"list && list.length == 0\"  color=\"tertiary\">\n        <ion-label>No posee Redes Sociales</ion-label>\n      </ion-list-header>\n\n        <ion-grid>\n          <ion-row *ngFor=\"let red of list\" >\n            <ion-col size=\"1\">\n              <ion-icon class=\"icon-red {{getColorIcon(red)}}\" [name]=\"getIcon(red)\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"8\" >\n              <h4 class=\"name\" (click)=\"select(red)\">{{red.url}}</h4>\n              <p>{{red.name}}</p>\n            </ion-col>\n            <ion-col size=\"1\" *ngIf=\"isAdmin\">\n              <ion-button size=\"small\" (click)=\"showEdit(red)\">\n                <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"1\" *ngIf=\"isAdmin\">\n              <ion-button size=\"small\" (click)=\"confirmDelete(red)\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n     \n        <!-- <ion-item *ngFor=\"let red of list\" >\n            \n          <ion-label>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-icon class=\"icon-red\" [name]=\"getIcon(red)\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"9\">\n                  <h3 class=\"name\">{{red.name}}</h3>\n                  <p class=\"url\">{{red.url}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            \n          </ion-label>\n  \n          <ion-buttons *ngIf=\"isAdmin\" slot=\"end\">\n            \n            <ion-button (click)=\"showEdit(red)\">\n              <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"confirmDelete(red)\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n  \n        </ion-item> -->\n\n  \n  </ion-card-content>\n\n</ion-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-searchbar\n  [showCancelButton]=\"showCancelButton()\"\n  (keyup)=\"onInput($event)\"\n  (ionCancel)=\"onCancel($event)\">\n</ion-searchbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Evento</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"eventModel.errorsForm.clear()\" *ngIf=\"dataEvent\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Tipo de Evento</ion-label>\n      <ion-select [(ngModel)]=\"event.type_event_id\" name=\"type_event_id\">\n        <ion-select-option [value]=\"type_event.id\" *ngFor=\"let type_event of dataEvent.types_events\">{{ type_event.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('type_event_id') }}</div>\n    </ion-item>\n    \n    <ion-item *ngIf=\"!team_admin || twoTeam\">\n      <ion-label position=\"floating\">Equipo</ion-label>\n      <ion-select [(ngModel)]=\"event.team_id\" name=\"team_id\">\n        <ion-select-option [value]=\"team.id\" *ngFor=\"let team of dataEvent.teams\">{{ team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('team_id') }}</div>\n    </ion-item>\n \n\n    <ion-item>\n      <ion-label position=\"floating\">Jugador</ion-label> \n       <ion-select [(ngModel)]=\"event.player_id\" name=\"player_id\">\n        <ion-select-option [value]=\"player.id\" *ngFor=\"let player of getPlayers()\">{{ player.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('player_id') }}</div>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\" >Tiempo</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"event.time\" name=\"time\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('time') }}</div> \n\n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/publication/publication.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/publication/publication.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\" *ngIf=\"isModal\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n\n      <ion-button color=\"dark\" (click)=\"navCtrl.back()\" *ngIf=\"!isModal\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n\n\n    </ion-buttons>\n    <ion-title>Publicación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngIf=\"publication\" >\n    <ion-card-content>\n      <div class=\"publication-user\">\n        <ion-thumbnail slot=\"start\">\n          <ion-img\n            class=\"user-image\"\n            [src]=\"publication.user.photo ? publication.user.photo.urlCompleteThumb : pathImages.images.profile_user \"\n            style=\"border-radius:50%; background-position:center center; background-size:cover; width:40px; height:40px;\">\n        </ion-img>\n        </ion-thumbnail>\n\n        <div class=\"user\">\n          <div class=\"name\">\n            {{publication.user.last_name}} {{publication.user.first_name}}\n          </div>\n          <div class=\"date\">\n            {{util.getFormarHumans(publication.created_at)}}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"publication-text\">\n        <ion-text color=\"dark\">\n          {{publication.text}}\n        </ion-text>\n      </div>\n\n      <div class=\"publication-image ion-text-center\" *ngIf=\"publication.image_id\">\n        <img [src]=\"publication.image.urlComplete\">\n      </div>\n\n      <!-- <ion-grid>\n        <ion-row >\n          <ion-col class=\"ion-text-left\">\n            <ion-text  color=\"dark\">\n              <ion-icon name=\"heart-outline\" color=\"danger\"></ion-icon>\n              {{publication.likes.length}}\n            </ion-text>\n          </ion-col>\n          <ion-col class=\"ion-text-right\">\n            <ion-text>\n              <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n              {{publication.comments.length}}\n            </ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n    \n      <div class=\"separator\"></div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-segment *ngIf=\"publication\" (ionChange)=\"segmentChanged($event)\" color=\"secondary\" [value]=\"segment\">\n    \n    <ion-segment-button value=\"likes\" layout=\"icon-start\" class=\"sgm-likes\">\n      <ion-icon name=\"heart-outline\" ></ion-icon>\n      {{publication.likes.length}}\n    </ion-segment-button>\n\n    <ion-segment-button value=\"comments\" layout=\"icon-start\" class=\"sgm-comments\">\n      \n        <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n        {{publication.comments.length}}\n    </ion-segment-button>\n  </ion-segment>\n\n  <app-likes\n    *ngIf=\"publication && segment == 'likes'\"\n    [likes] = \"publication.likes\"\n  >\n  </app-likes>\n\n  <app-comments\n    *ngIf=\"publication && segment == 'comments'\"\n    [comments] = \"publication.comments\"\n    [idRelation]=\"id\"\n    [nameRelationModel]=\"'Publication'\"\n    [withTitle] = \"false\"\n    (onUpdateComments)=\"updateComments($event,publication)\"\n  ></app-comments>\n\n  <app-not-fount *ngIf=\"notFound\"></app-not-fount>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Red Social</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"redModel.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\">Red</ion-label>\n      <ion-select [(ngModel)]=\"red.name\" name=\"position_id\">\n        <ion-select-option [value]=\"red\" *ngFor=\"let red of redes\">{{ red }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ redModel.errorsForm.get('position_id') }}</div>\n\n    </ion-item>\n  \n\n    <ion-item>\n      <ion-label position=\"floating\" >Url</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"red.url\" name=\"url\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ redModel.errorsForm.get('url') }}</div>\n\n\n    \n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/comments/comments.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/comments/comments.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comment-item {\n  width: 100%;\n  display: flex;\n}\n\n.comment-image {\n  font-size: large;\n}\n\n.comment-data {\n  width: 100%;\n}\n\n.comment-user {\n  font-size: large;\n  margin-top: 10px;\n  font-weight: bold;\n}\n\n.comment-body {\n  font-size: medium;\n  font-style: italic;\n  margin-left: 5px;\n  color: darkslategrey;\n  white-space: pre-wrap;\n}\n\n.comment-date {\n  font-size: x-small;\n  text-align: right;\n  color: darkslategrey;\n}\n\n.editor-text {\n  box-shadow: 2px 2px 5px #999;\n  padding: 2px;\n  border-radius: 15px;\n  /*background: white;]*/\n}\n\n.editor-send {\n  margin-left: -5px;\n}\n\n.content-comment {\n  margin: 10px;\n  display: flex;\n}\n\n.content-comment-text {\n  width: 90%;\n}\n\n.content-comment-btn {\n  width: 10%;\n}\n\n.comment-image {\n  margin-top: 3px;\n  margin-right: 5px;\n}\n\n.comment-edit {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  padding: 5px;\n}\n\n.comment-edit-bts {\n  margin-top: 10px;\n}\n\n.title {\n  background: var(--background-l1);\n  color: white;\n  padding-top: 10px;\n  padding-bottom: 5px;\n  font-size: x-large;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.content-new {\n  background: var(--background-l1);\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  padding-top: 5px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDRCxhQUFBO0FBQ0g7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFLQTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFNQTtFQUNJLGlCQUFBO0FBSEo7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0FBSko7O0FBT0E7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBSko7O0FBT0E7RUFDSSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtaXRlbXtcbiAgICB3aWR0aDogMTAwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb21tZW50LWltYWdle1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5jb21tZW50LWRhdGF7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21tZW50LXVzZXJ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tbWVudC1ib2R5e1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLmNvbW1lbnQtZGF0ZXtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG59XG5cbi5lZGl0b3J7XG59XG5cbi5lZGl0b3ItdGV4dHtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjOTk5O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC8qYmFja2dyb3VuZDogd2hpdGU7XSovXG59XG5cblxuLmVkaXRvci1zZW5ke1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuXG59XG5cbi5jb250ZW50LWNvbW1lbnR7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250ZW50LWNvbW1lbnQtdGV4dHtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uY29udGVudC1jb21tZW50LWJ0bntcbiAgICB3aWR0aDogMTAlO1xufVxuXG4uY29tbWVudC1pbWFnZXtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jb21tZW50LWVkaXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmNvbW1lbnQtZWRpdC1idHN7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRpdGxle1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbDEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGVudC1uZXd7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1sMSk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/comments/comments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");











let CommentsComponent = class CommentsComponent {
    constructor(authService, request, util, modalController, dialog, utilArray, authUser) {
        this.authService = authService;
        this.request = request;
        this.util = util;
        this.modalController = modalController;
        this.dialog = dialog;
        this.utilArray = utilArray;
        this.authUser = authUser;
        this.comments = [];
        this.withTitle = true;
        this.onUpdateComments = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listComments = [];
        this.sending = false;
        this.updatingComment = false;
        this.commentModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Comment', request);
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.comment = {
            idRelation: this.idRelation,
            nameRelationModel: this.nameRelationModel,
            body: this.commentText,
        };
        this.resetComment();
        this.loadCooments();
    }
    loadCooments($event = null) {
        this.listComments = this.comments;
        if (this.comments && this.comments.length > 0) {
            //this.listComments = this.comments
            return;
        }
        this.relationModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"](this.nameRelationModel, this.request);
        this.relationModel.api_loadAttribute(this.idRelation, 'comments').subscribe(response => {
            if (response['status'] == 'success') {
                this.listComments = response[this.nameRelationModel]['comments'];
            }
            if ($event)
                $event.target.complete();
        }, error => {
            if ($event)
                $event.target.complete();
        });
    }
    resetComment() {
        this.comment.body = '';
    }
    send() {
        console.log('send');
        if (this.comment.body) {
            //this.comment.body = this.commentText;
            this.comment.body = this.comment.body.trim();
            this.sending = true;
            this.commentModel.api_function('add', this.comment).subscribe(response => {
                if (response['status'] == 'success') {
                    var data = response['data'];
                    this.listComments.push(data);
                    if (this.onUpdateComments)
                        this.onUpdateComments.emit(this.listComments);
                    this.resetComment();
                }
                this.sending = false;
            }, error => {
                this.sending = false;
            });
        }
    }
    formatDate(val) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(val).locale('es').fromNow();
    }
    getPhoto(comment) {
        return comment.user.photo ? comment.user.photo.urlCompleteThumb : 'assets/images/profile.jpg';
    }
    openViewer(comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["ViewerModalComponent"],
                componentProps: {
                    src: comment.user.photo ? comment.user.photo.urlComplete : 'assets/images/profile.jpg',
                    scheme: 'dark'
                },
                cssClass: 'ion-img-viewer',
                keyboardClose: true,
                showBackdrop: true,
            });
            return yield modal.present();
        });
    }
    ngOnChanges(changes) {
        //console.log('changes')
        if (changes['comments']) {
            this.loadCooments();
        }
    }
    openMenuComment(comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialog.actionSheetEditDelete(() => {
                comment.edit = true;
                this.commentEdit = Object.assign({}, comment);
            }, () => {
                this.confirmDelete(comment);
            });
        });
    }
    confirmDelete(comment) {
        this.dialog.presentAlertConfirm('Confirmar', '¿Estas seguro de eliminar este comentario?', e => {
            this.delete(comment);
        });
    }
    delete(comment) {
        this.commentModel.api_delete(comment.id).subscribe(data => {
            console.log(data);
            if (data['status'] == 'success') {
                this.dialog.showToast('Comentario eliminado.', null, 'success');
                this.utilArray.listDelete(this.listComments, comment.id);
                //this.teamService.listDelete(team.id);
            }
        });
    }
    cancelEdit(comment) {
        comment.edit = false;
        this.commentEdit = {
            body: ''
        };
    }
    editComment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('edit comment api');
            this.updatingComment = true;
            //await this.util.delay(5000);
            this.commentEdit['body'] = this.commentEdit['body'].trim();
            this.commentModel.api_update(this.commentEdit).subscribe(response => {
                if (response['status'] == 'success') {
                    this.commentEdit['edit'] = false;
                    this.utilArray.listUpdate(this.listComments, this.commentEdit['id'], this.commentEdit);
                }
                this.updatingComment = false;
            }, error => {
                console.log(error);
                this.updatingComment = false;
            });
        });
    }
};
CommentsComponent.ctorParameters = () => [
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_10__["UtilArrayService"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"] }
];
CommentsComponent.propDecorators = {
    nameRelationModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nameRelationModel',] }],
    idRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['idRelation',] }],
    comments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['comments',] }],
    withTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['withTitle',] }],
    onUpdateComments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
CommentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comments.component.scss */ "./src/app/components/comments/comments.component.scss")).default]
    })
], CommentsComponent);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _event_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event/list/list.component */ "./src/app/components/event/list/list.component.ts");
/* harmony import */ var _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event-list/event-list.component */ "./src/app/components/event/event-list/event-list.component.ts");
/* harmony import */ var _player_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/player-list/player-list.component */ "./src/app/components/player/player-list/player-list.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/components/comments/comments.component.ts");
/* harmony import */ var _notifications_notificatio_selected_notificatio_selected_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications/notificatio-selected/notificatio-selected.component */ "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.ts");
/* harmony import */ var _redes_red_list_red_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redes/red-list/red-list.component */ "./src/app/components/redes/red-list/red-list.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var _likes_likes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./likes/likes.component */ "./src/app/components/likes/likes.component.ts");
/* harmony import */ var _menu_user_menu_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu-user/menu-user.component */ "./src/app/components/menu-user/menu-user.component.ts");
/* harmony import */ var _items_list_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./items-list/notification/notification.component */ "./src/app/components/items-list/notification/notification.component.ts");
/* harmony import */ var _items_list_game_game_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./items-list/game/game.component */ "./src/app/components/items-list/game/game.component.ts");
/* harmony import */ var _items_list_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./items-list/result-item/result-item.component */ "./src/app/components/items-list/result-item/result-item.component.ts");
/* harmony import */ var _items_list_publication_publication_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./items-list/publication/publication.component */ "./src/app/components/items-list/publication/publication.component.ts");
/* harmony import */ var _notFount_not_fount_not_fount_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./notFount/not-fount/not-fount.component */ "./src/app/components/notFount/not-fount/not-fount.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_12__["NgxIonicImageViewerModule"]
        ],
        declarations: [
            _event_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
            _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_5__["EventListComponent"],
            _player_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_6__["PlayerListComponent"],
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"],
            _notifications_notificatio_selected_notificatio_selected_component__WEBPACK_IMPORTED_MODULE_8__["NotificatioSelectedComponent"],
            _redes_red_list_red_list_component__WEBPACK_IMPORTED_MODULE_9__["RedListComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
            _likes_likes_component__WEBPACK_IMPORTED_MODULE_13__["LikesComponent"],
            _menu_user_menu_user_component__WEBPACK_IMPORTED_MODULE_14__["MenuUserComponent"],
            _items_list_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"],
            _items_list_game_game_component__WEBPACK_IMPORTED_MODULE_16__["GameComponent"],
            _items_list_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_17__["ResultItemComponent"],
            _items_list_publication_publication_component__WEBPACK_IMPORTED_MODULE_18__["PublicationComponent"],
            _notFount_not_fount_not_fount_component__WEBPACK_IMPORTED_MODULE_19__["NotFountComponent"]
        ],
        exports: [
            _event_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
            _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_5__["EventListComponent"],
            _player_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_6__["PlayerListComponent"],
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"],
            _notifications_notificatio_selected_notificatio_selected_component__WEBPACK_IMPORTED_MODULE_8__["NotificatioSelectedComponent"],
            _redes_red_list_red_list_component__WEBPACK_IMPORTED_MODULE_9__["RedListComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
            _likes_likes_component__WEBPACK_IMPORTED_MODULE_13__["LikesComponent"],
            _menu_user_menu_user_component__WEBPACK_IMPORTED_MODULE_14__["MenuUserComponent"],
            _items_list_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"],
            _items_list_game_game_component__WEBPACK_IMPORTED_MODULE_16__["GameComponent"],
            _items_list_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_17__["ResultItemComponent"],
            _items_list_publication_publication_component__WEBPACK_IMPORTED_MODULE_18__["PublicationComponent"],
            _notFount_not_fount_not_fount_component__WEBPACK_IMPORTED_MODULE_19__["NotFountComponent"]
        ],
        entryComponents: [],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/event/event-list/event-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/event/event-list/event-list.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  font-size: large;\n  color: #000000b3;\n  padding: 7px;\n}\n\n.col-v {\n  border-top-right-radius: 5px;\n  border-right: 4px solid var(--color-v);\n}\n\n.col-l {\n  border-top-left-radius: 5px;\n  border-left: 4px solid var(--color-l);\n}\n\n.item-l {\n  border-left: 4px solid var(--color-l);\n  padding-left: 5px;\n}\n\n.item-v {\n  border-right: 4px solid var(--color-v);\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC1saXN0L2V2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksNEJBQUE7RUFDQSxzQ0FBQTtBQUFKOztBQUdBO0VBQ0ksMkJBQUE7RUFDQSxxQ0FBQTtBQUFKOztBQUdBO0VBQ0kscUNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC1saXN0L2V2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb2x7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBjb2xvcjogIzAwMDAwMGIzO1xuICAgIHBhZGRpbmc6IDdweDtcbn1cblxuLmNvbC12e1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tY29sb3Itdik7XG59XG5cbi5jb2wtbHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1sKTtcbn1cblxuLml0ZW0tbHtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWwpO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuXG59XG5cbi5pdGVtLXZ7XG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tY29sb3Itdik7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/event/event-list/event-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/event/event-list/event-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_pages_event_event_form_event_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/event/event-form/event-form.page */ "./src/app/pages/event/event-form/event-form.page.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");








let EventListComponent = class EventListComponent {
    //isAdmin = false;
    constructor(requestService, dialog, modalController, authUser) {
        this.requestService = requestService;
        this.dialog = dialog;
        this.modalController = modalController;
        this.authUser = authUser;
        this.events = [];
        this.team_admin = null;
        this.canEdit = false;
        this.twoTeam = false;
        this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Game', requestService);
        this.eventModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Event', requestService);
        console.log(this.game_id);
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.gameModel.api_functionModel(this.game_id, 'dataEvent').subscribe(response => {
            if (response['status'] == 'success') {
                this.events = response['data']['events'];
                this.team_l = response['data']['team_l'];
                this.team_v = response['data']['team_v'];
                this.verificationAdmin();
            }
            console.log(this.events);
        });
    }
    verificationAdmin() {
        console.log('verificationAdmin');
        if (this.authUser.isAdminTeam(this.team_l.id) || this.authUser.isAdminTeam(this.team_v.id)) {
            this.isAdmin = true;
            if (this.authUser.isAdminTeam(this.team_l.id))
                this.team_admin = this.team_l;
            if (this.authUser.isAdminTeam(this.team_v.id))
                this.team_admin = this.team_v;
            if (this.authUser.isAdminTeam(this.team_l.id) && this.authUser.isAdminTeam(this.team_v.id)) {
                this.twoTeam = true;
            }
        }
        else {
            this.team_admin = null;
        }
        //if(this.authUser.isAdminTeam(this.team_l.id) && this.authUser.isAdminTeam(this.team_v.id) )
    }
    confirmDelete(event, index) {
        this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar este Suceso', e => {
            this.delete(event, index);
        });
    }
    delete(event, index) {
        this.eventModel.api_delete(event.id).subscribe(data => {
            console.log(data);
            if (data['status'] == 'success') {
                this.dialog.showToast('Suceso Eliminado', null, 'success');
                this.events.splice(index, 1);
            }
        });
    }
    addEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_event_event_form_event_form_page__WEBPACK_IMPORTED_MODULE_6__["EventFormPage"],
                componentProps: {
                    game_id: this.game_id,
                    team_admin: this.team_admin,
                    twoTeam: this.twoTeam
                }
            });
            modal.onDidDismiss().then(data => {
                if (data.data && data.data['event']) {
                    let e = data.data['event'];
                    this.events.push(e);
                }
            });
            return yield modal.present();
        });
    }
};
EventListComponent.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__["AuthUserService"] }
];
EventListComponent.propDecorators = {
    game_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['game_id',] }],
    isAdmin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['isAdmin',] }]
};
EventListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event-list/event-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event-list.component.scss */ "./src/app/components/event/event-list/event-list.component.scss")).default]
    })
], EventListComponent);



/***/ }),

/***/ "./src/app/components/event/list/list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/event/list/list.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/event/list/list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/event/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() { }
    ngOnInit() { }
};
ListComponent.ctorParameters = () => [];
ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/list/list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.component.scss */ "./src/app/components/event/list/list.component.scss")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/components/items-list/game/game.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/items-list/game/game.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".team-list {\n  display: block;\n}\n\n.vs {\n  width: 6%;\n  min-height: 100px;\n  min-width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.game {\n  width: 100%;\n  /*background-image: url('/assets/images/img_fondo_part.png');*/\n  background-repeat: no-repeat;\n  background-size: 100%;\n  padding: 10px;\n}\n\n.team {\n  display: flex;\n  align-items: center;\n  width: 47%;\n  flex-flow: column-reverse;\n}\n\n.team-name {\n  margin-left: 5px;\n  margin-right: 5px;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.img-team {\n  border-radius: 50%;\n  background-position: center center;\n  width: 30px;\n  height: 30px;\n}\n\n.contenedor {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  text-align: -webkit-center;\n  padding: 10px;\n  background: #0e0e0e6e;\n  border-radius: 20px;\n  color: white;\n}\n\n.date {\n  text-align: center;\n}\n\n.text-name {\n  margin-top: 15px;\n  font-size: large !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSw4REFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFtLWxpc3R7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udnN7XG4gICAgd2lkdGg6IDYlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIG1pbi13aWR0aDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2FtZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW1nX2ZvbmRvX3BhcnQucG5nJyk7Ki9cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udGVhbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQ3JTtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xuXG5cbn1cblxuLnRlYW0tbmFtZXtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4OztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbn1cblxuLmltZy10ZWFte1xuICAgIGJvcmRlci1yYWRpdXM6NTAlOyBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7IFxuICAgIHdpZHRoOjMwcHg7IFxuICAgIGhlaWdodDozMHB4O1xufVxuXG4uY29udGVuZWRvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwZTBlMGU2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhdGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1uYW1le1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xuXG59Il19 */");

/***/ }),

/***/ "./src/app/components/items-list/game/game.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/items-list/game/game.component.ts ***!
  \**************************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");



let GameComponent = class GameComponent {
    constructor(util) {
        this.util = util;
        this.withDate = false;
    }
    ngOnInit() { }
};
GameComponent.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
];
GameComponent.propDecorators = {
    game: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['game',] }],
    withDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['withDate',] }]
};
GameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/game/game.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./game.component.scss */ "./src/app/components/items-list/game/game.component.scss")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/components/items-list/notification/notification.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/items-list/notification/notification.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-active {\n  --ion-background-color: #e9ebee !important;\n}\n\n.date {\n  font-size: x-small;\n}\n\nh3 {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2l0ZW1zLWxpc3Qvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1hY3RpdmV7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2U5ZWJlZSAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbmgze1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/items-list/notification/notification.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/items-list/notification/notification.component.ts ***!
  \******************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/paths-images.service */ "./src/app/services/paths-images.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util-photo.service */ "./src/app/services/util-photo.service.ts");






let NotificationComponent = class NotificationComponent {
    constructor(util, pathImages, authUser, utilPhoto) {
        this.util = util;
        this.pathImages = pathImages;
        this.authUser = authUser;
        this.utilPhoto = utilPhoto;
        this.content = {};
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        //let content : string = changes['notification']['currentValue']['content'];
        //this.content = JSON.parse( content );
    }
};
NotificationComponent.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_3__["PathsImagesService"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"] },
    { type: src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_5__["UtilPhotoService"] }
];
NotificationComponent.propDecorators = {
    notification: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['notification',] }]
};
NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/notification/notification.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/items-list/notification/notification.component.scss")).default]
    })
], NotificationComponent);



/***/ }),

/***/ "./src/app/components/items-list/publication/publication.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/items-list/publication/publication.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".publication-user {\n  display: flex;\n}\n.publication-user .user {\n  display: block;\n}\n.publication-user .user .name {\n  margin-top: 5px;\n  font-size: medium;\n}\n.publication-user .user .date {\n  margin-left: 5px;\n  font-size: xx-small;\n}\n.publication-text {\n  margin: 3px;\n  margin-left: 15px;\n  font-size: medium;\n}\n.publication-image {\n  align-self: auto;\n}\n.separator {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-bottom: solid 1px rgba(63, 62, 62, 0.671);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNaO0FBRVE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFNQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSEo7QUFNQTtFQUNJLGdCQUFBO0FBSEo7QUFNQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB1YmxpY2F0aW9uLXVzZXJ7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC51c2Vye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAubmFtZXtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtOztcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuZGF0ZXtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbi5wdWJsaWNhdGlvbi10ZXh0e1xuICAgIG1hcmdpbjogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4ucHVibGljYXRpb24taW1hZ2V7XG4gICAgYWxpZ24tc2VsZjogYXV0bztcbn1cblxuLnNlcGFyYXRvcntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoNjMsIDYyLCA2MiwgMC42NzEpO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/items-list/publication/publication.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/items-list/publication/publication.component.ts ***!
  \****************************************************************************/
/*! exports provided: PublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationComponent", function() { return PublicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_pages_publications_publication_publication_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/publications/publication/publication.page */ "./src/app/pages/publications/publication/publication.page.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_pages_publications_form_publication_form_publication_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/publications/form-publication/form-publication.page */ "./src/app/pages/publications/form-publication/form-publication.page.ts");
/* harmony import */ var src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/util-photo.service */ "./src/app/services/util-photo.service.ts");













let PublicationComponent = class PublicationComponent {
    constructor(authUser, util, modalController, request, utilArray, dialog, utilPhoto) {
        this.authUser = authUser;
        this.util = util;
        this.modalController = modalController;
        this.request = request;
        this.utilArray = utilArray;
        this.dialog = dialog;
        this.utilPhoto = utilPhoto;
        this.publcationModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Publication', request);
        this.user = authUser.user;
    }
    ngOnInit() { }
    showPhotoUser(photo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('show photo ', photo);
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_4__["ViewerModalComponent"],
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
                component: src_app_pages_publications_publication_publication_page__WEBPACK_IMPORTED_MODULE_8__["PublicationPage"],
                componentProps: {
                    id: publication.id,
                    segment: segment
                }
            });
            modal.onDidDismiss().then(data => {
                console.log('update publication');
                const publication = data.data['publication'];
                this.utilArray.listUpdate(this.user.publications, publication.id, publication);
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
                        this.utilArray.listDelete(this.user.publications, publication.id);
                        this.dialog.showToast('Publicacion Eliminada', null, 'success');
                    }
                });
            });
        });
    }
    editPublication(publication) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_publications_form_publication_form_publication_page__WEBPACK_IMPORTED_MODULE_11__["FormPublicationPage"],
                componentProps: {
                    id: publication.id
                }
            });
            modal.onDidDismiss().then(data => {
                console.log('update publicacion');
                if (data.data && data.data['publication']) {
                    const publication = data.data['publication'];
                    this.utilArray.listUpdate(this.user.publications, publication.id, publication);
                }
            });
            return yield modal.present();
        });
    }
};
PublicationComponent.ctorParameters = () => [
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__["UtilArrayService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"] },
    { type: src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_12__["UtilPhotoService"] }
];
PublicationComponent.propDecorators = {
    publication: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['publication',] }]
};
PublicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publication.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/publication/publication.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publication.component.scss */ "./src/app/components/items-list/publication/publication.component.scss")).default]
    })
], PublicationComponent);



/***/ }),

/***/ "./src/app/components/items-list/result-item/result-item.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/items-list/result-item/result-item.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item1 .game {\n  /*color: #FFF;*/\n  width: 100%;\n  padding: 3px;\n  padding: 10px;\n  border-radius: 5px;\n  /*box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px white, 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);*/\n  font-size: large;\n}\n.item1 .team {\n  position: relative;\n  /*background-image: url(../../../../assets/images/img_fondo_res4.png);*/\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 10px;\n  width: 100%;\n  padding-top: 15px;\n}\n.item1 .avatar {\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n}\n.item1 .name-team {\n  padding-left: 15px;\n  display: inline-block;\n  width: 50%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.item1 .goals-team {\n  display: inline-block;\n  width: 30%;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-right: 20px;\n}\n.item1 .comment {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: none;\n}\n.item2 .team-list {\n  display: block;\n}\n.item2 .goals {\n  width: 30%;\n  min-height: 60px;\n  min-width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background-size: cover;\n  background-repeat: round;\n}\n.item2 ion-row {\n  background: #c7402f;\n  border-bottom-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 3px;\n  font-size: large;\n}\n.item2 .game {\n  width: 100%;\n  /*background-image: url('/assets/images/img_fondo_part.png');*/\n  background-repeat: no-repeat;\n  background-size: 100%;\n  padding: 10px;\n}\n.item2 .team {\n  display: flex;\n  align-items: center;\n  width: 35%;\n  flex-flow: column-reverse;\n}\n.item2 .team-name {\n  margin-left: 5px;\n  margin-right: 5px;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.item2 .img-team {\n  border-radius: 50%;\n  background-position: center center;\n  width: 30px;\n  height: 30px;\n}\n.item2 .contenedor {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  text-align: -webkit-center;\n  padding: 10px;\n  background: #0e0e0e6e;\n  border-radius: 20px;\n  color: white;\n}\n.item2 .date {\n  text-align: center;\n}\n.item2 .text-name {\n  margin-top: 15px;\n  font-size: large !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L3Jlc3VsdC1pdGVtL3Jlc3VsdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0dBQUE7RUFDQSxnQkFBQTtBQURSO0FBSUk7RUFDSSxrQkFBQTtFQUNBLHVFQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUtJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUpSO0FBUUk7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTlI7QUFTSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBUFI7QUFjSTtFQUNJLGNBQUE7QUFYUjtBQWFJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFYUjtBQWNJO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBWlI7QUFlSTtFQUNJLFdBQUE7RUFDQSw4REFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBYlI7QUFnQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFkUjtBQW1CSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBakJSO0FBcUJJO0VBQ0ksa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbkJSO0FBc0JJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFwQlI7QUF1Qkk7RUFDSSxrQkFBQTtBQXJCUjtBQXdCSTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7QUF0QlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2l0ZW1zLWxpc3QvcmVzdWx0LWl0ZW0vcmVzdWx0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbTF7XG5cbiAgICAuZ2FtZXtcbiAgICAgICAgLypjb2xvcjogI0ZGRjsqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC8qYm94LXNoYWRvdzogaW5zZXQgMCAtM2VtIDNlbSByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMCAwIDJweCB3aGl0ZSwgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTsqL1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIH1cblxuICAgIC50ZWFte1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nX2ZvbmRvX3JlczQucG5nKTsqL1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgfVxuXG4gICAgLmF2YXRhcntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgIH1cblxuICAgIC5uYW1lLXRlYW17XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIH1cblxuICAgIC5nb2Fscy10ZWFte1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAuY29tbWVudHtcbiAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wIDoxMHB4O1xuICAgICAgICByaWdodCA6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG5cbi5pdGVtMntcblxuICAgIC50ZWFtLWxpc3R7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuZ29hbHN7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xuICAgIH1cblxuICAgIGlvbi1yb3d7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjNzQwMmY7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgfVxuICAgIFxuICAgIC5nYW1le1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ltZ19mb25kb19wYXJ0LnBuZycpOyovXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLnRlYW17XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XG4gICAgXG4gICAgXG4gICAgfVxuICAgIFxuICAgIC50ZWFtLW5hbWV7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4OztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFxuICAgIH1cbiAgICBcbiAgICAuaW1nLXRlYW17XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlOyBcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyOyBcbiAgICAgICAgd2lkdGg6MzBweDsgXG4gICAgICAgIGhlaWdodDozMHB4O1xuICAgIH1cbiAgICBcbiAgICAuY29udGVuZWRvciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMGUwZTBlNmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgLmRhdGV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLnRleHQtbmFtZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xuICAgIFxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/items-list/result-item/result-item.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/items-list/result-item/result-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: ResultItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultItemComponent", function() { return ResultItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ResultItemComponent = class ResultItemComponent {
    constructor() { }
    ngOnInit() { }
};
ResultItemComponent.ctorParameters = () => [];
ResultItemComponent.propDecorators = {
    game: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['game',] }]
};
ResultItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./result-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/result-item/result-item.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./result-item.component.scss */ "./src/app/components/items-list/result-item/result-item.component.scss")).default]
    })
], ResultItemComponent);



/***/ }),

/***/ "./src/app/components/likes/likes.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/likes/likes.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlrZXMvbGlrZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/likes/likes.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/likes/likes.component.ts ***!
  \*****************************************************/
/*! exports provided: LikesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesComponent", function() { return LikesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/paths-images.service */ "./src/app/services/paths-images.service.ts");



let LikesComponent = class LikesComponent {
    constructor(pathImages) {
        this.pathImages = pathImages;
        this.likes = [];
    }
    ngOnInit() { }
    init() {
    }
};
LikesComponent.ctorParameters = () => [
    { type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_2__["PathsImagesService"] }
];
LikesComponent.propDecorators = {
    likes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['likes',] }]
};
LikesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-likes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./likes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/likes/likes.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./likes.component.scss */ "./src/app/components/likes/likes.component.scss")).default]
    })
], LikesComponent);



/***/ }),

/***/ "./src/app/components/menu-user/menu-user.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/menu-user/menu-user.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  margin: auto;\n}\n\n.content-image {\n  width: 100px;\n  height: 90px;\n}\n\n.image {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXVzZXIvbWVudS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUtdXNlci9tZW51LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbnRlbnQtaW1hZ2V7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogOTBweDtcbn1cblxuLmltYWdle1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/menu-user/menu-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/menu-user/menu-user.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuUserComponent", function() { return MenuUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/paths-images.service */ "./src/app/services/paths-images.service.ts");




let MenuUserComponent = class MenuUserComponent {
    constructor(authUser, pathImages) {
        this.authUser = authUser;
        this.pathImages = pathImages;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //await this.authUser.getUser();
            console.log('user auth', this.authUser.user);
        });
    }
};
MenuUserComponent.ctorParameters = () => [
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"] },
    { type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_3__["PathsImagesService"] }
];
MenuUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-user/menu-user.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu-user.component.scss */ "./src/app/components/menu-user/menu-user.component.scss")).default]
    })
], MenuUserComponent);



/***/ }),

/***/ "./src/app/components/notFount/not-fount/not-fount.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/notFount/not-fount/not-fount.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90Rm91bnQvbm90LWZvdW50L25vdC1mb3VudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/notFount/not-fount/not-fount.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/notFount/not-fount/not-fount.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotFountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFountComponent", function() { return NotFountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NotFountComponent = class NotFountComponent {
    constructor() { }
    ngOnInit() { }
};
NotFountComponent.ctorParameters = () => [];
NotFountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-fount',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./not-fount.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notFount/not-fount/not-fount.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./not-fount.component.scss */ "./src/app/components/notFount/not-fount/not-fount.component.scss")).default]
    })
], NotFountComponent);



/***/ }),

/***/ "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/notifications/notificatio-selected/notificatio-selected.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favorite {\n  /*color: darkturquoise;*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvLXNlbGVjdGVkL25vdGlmaWNhdGlvLXNlbGVjdGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpby1zZWxlY3RlZC9ub3RpZmljYXRpby1zZWxlY3RlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXZvcml0ZXtcbiAgICAvKmNvbG9yOiBkYXJrdHVycXVvaXNlOyovXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/notifications/notificatio-selected/notificatio-selected.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: NotificatioSelectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificatioSelectedComponent", function() { return NotificatioSelectedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");




let NotificatioSelectedComponent = class NotificatioSelectedComponent {
    constructor(requesService) {
        this.requesService = requesService;
        this.favoriteModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Favorite', requesService);
    }
    ngOnInit() { }
    toggleFavorite() {
        if (this.object) {
            if (this.isFavorite()) {
                this.favoriteModel.api_delete(this.object.favorite.id).subscribe(response => {
                    this.object.favorite = null;
                    console.log(response);
                }, error => {
                    console.error(error);
                });
            }
            else {
                let parms = {
                    table_id: this.table_id,
                    table_name: this.table_name
                };
                this.favoriteModel.api_function('addFavorite', parms).subscribe(response => {
                    if (response['status'] == 'success') {
                        this.object.favorite = response['data'];
                    }
                }, error => {
                    console.error(error);
                });
            }
        }
    }
    isFavorite() {
        return this.object && this.object.favorite ? true : false;
    }
    getNameIcon() {
        return this.isFavorite() ? 'notifications-off-outline' : 'notifications-outline';
    }
};
NotificatioSelectedComponent.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] }
];
NotificatioSelectedComponent.propDecorators = {
    object: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['object',] }],
    table_name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['table_name',] }],
    table_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['table_id',] }]
};
NotificatioSelectedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notificatio-selected',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notificatio-selected.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notificatio-selected/notificatio-selected.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notificatio-selected.component.scss */ "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.scss")).default]
    })
], NotificatioSelectedComponent);



/***/ }),

/***/ "./src/app/components/player/player-list/player-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/player/player-list/player-list.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".player-list {\n  margin: 5px;\n}\n\n.player-list-photo {\n  width: 100%;\n  vertical-align: middle;\n  border-radius: 5px;\n}\n\n.player-list-name {\n  /*color: black;*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLWxpc3QvcGxheWVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFHQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyL3BsYXllci1saXN0L3BsYXllci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXllci1saXN0e1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4ucGxheWVyLWxpc3QtcGhvdG97XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wbGF5ZXItbGlzdC1uYW1le1xuICAgIC8qY29sb3I6IGJsYWNrOyovXG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/player/player-list/player-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/player/player-list/player-list.component.ts ***!
  \************************************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");



let PlayerListComponent = class PlayerListComponent {
    constructor(photoViewer) {
        var _a;
        this.photoViewer = photoViewer;
        this.loading = false;
        this.eventLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eventSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listSkeleton = new Array(5);
        this.items = (_a = this.items) !== null && _a !== void 0 ? _a : [];
    }
    ngOnInit() {
        //this.items = 
        console.log('items comp', this.items);
    }
    load(event) {
        console.log('emit comp');
        if (this.eventLoad)
            this.eventLoad.emit(event);
    }
    selectItem(item) {
        if (this.eventSelect)
            this.eventSelect.emit(item);
    }
    //Otras funciones 
    getPhoto(item) {
        return item['photo'] ? this.getPhotoServer(item['photo']) : 'assets/images/jugador.png';
    }
    getPhotoOr(item) {
        return item['photo'] ? item['photo'].urlComplete : 'assets/images/jugador.png';
    }
    getPhotoServer(photo) {
        return photo['thumb'] ? photo['urlCompleteThumb'] : photo['urlCompleteThumb'];
    }
    showPhoto(image) {
        this.photoViewer.show(image.urlComplete);
    }
    ngOnChanges(changes) {
        console.log('changes');
    }
};
PlayerListComponent.ctorParameters = () => [
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"] }
];
PlayerListComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['items',] }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['loading',] }],
    errorLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['errorLoad',] }],
    firstLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['firstLoading',] }],
    eventLoad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    eventSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
PlayerListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player-list/player-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player-list.component.scss */ "./src/app/components/player/player-list/player-list.component.scss")).default]
    })
], PlayerListComponent);



/***/ }),

/***/ "./src/app/components/redes/red-list/red-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/redes/red-list/red-list.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-red {\n  font-size: 30px;\n}\n\n.name {\n  font-size: large;\n  margin-left: 10px;\n}\n\n.url {\n  font-size: small;\n  color: 0;\n}\n\n.facebook-color {\n  color: #4267B2;\n}\n\n.instagram-color {\n  color: #c51d34;\n}\n\n.twitter-color {\n  color: #1DA1F2;\n}\n\n.whatsapp-color {\n  color: #00bb2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWRlcy9yZWQtbGlzdC9yZWQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWRlcy9yZWQtbGlzdC9yZWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXJlZHtcbiAgICBmb250LXNpemU6IDMwcHg7IC8vUHJlZmVycmVkIHNpemUgaGVyZVxufVxuXG4ubmFtZXtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udXJse1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6IGJsdWUoJGNvbG9yOiAjMDAwMDAwKTtcbn1cblxuLmZhY2Vib29rLWNvbG9ye1xuICAgIGNvbG9yOiAjNDI2N0IyO1xufVxuXG4uaW5zdGFncmFtLWNvbG9ye1xuICAgIGNvbG9yOiAjYzUxZDM0O1xufVxuXG4udHdpdHRlci1jb2xvcntcbiAgICBjb2xvcjogIzFEQTFGMjtcbn1cblxuLndoYXRzYXBwLWNvbG9ye1xuICAgIGNvbG9yOiAjMDBiYjJkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/redes/red-list/red-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/redes/red-list/red-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: RedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedListComponent", function() { return RedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_pages_redes_redes_form_redes_form_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/redes/redes-form/redes-form.page */ "./src/app/pages/redes/redes-form/redes-form.page.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");









//import { InAppBrowser } from '@ionic-native/in-app-browser';

let RedListComponent = class RedListComponent {
    constructor(request, dialog, modalController, util, utilArray, nacCtrl, 
    //private platform: Platform,
    inAppBrowser) {
        this.request = request;
        this.dialog = dialog;
        this.modalController = modalController;
        this.util = util;
        this.utilArray = utilArray;
        this.nacCtrl = nacCtrl;
        this.inAppBrowser = inAppBrowser;
        this.isAdmin = false;
        this.withRefresh = false;
        this.redModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Red', request);
    }
    ngOnInit() {
        this.load();
        //this.isAdmin = true;
    }
    load(event = null) {
        this.redModel.api_function('pageTeam', { nameModel: this.nameModel, idModel: this.idModel }).subscribe(response => {
            this.list = response['data'];
            console.log(response);
            if (event)
                event.target.complete();
        }, error => {
            console.error(error);
            if (event)
                event.target.complete();
        });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_redes_redes_form_redes_form_page__WEBPACK_IMPORTED_MODULE_7__["RedesFormPage"],
                componentProps: {
                    nameModel: this.nameModel,
                    idModel: this.idModel
                }
            });
            modal.onDidDismiss().then(data => {
                const red = data.data['red'];
                this.utilArray.listAddLast(this.list, red);
                //this.redModel.listAddLast(red);
            });
            return yield modal.present();
        });
    }
    showEdit(red) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_redes_redes_form_redes_form_page__WEBPACK_IMPORTED_MODULE_7__["RedesFormPage"],
                componentProps: { id: red.id }
            });
            modal.onDidDismiss().then(data => {
                const red = data.data['red'];
                this.utilArray.listUpdate(this.list, red.id, red);
            });
            return yield modal.present();
        });
    }
    confirmDelete(red) {
        this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar esta Red Social', e => {
            this.delete(red);
        });
    }
    delete(red) {
        this.redModel.api_delete(red.id).subscribe(data => {
            console.log(data);
            if (data['status'] == 'success') {
                this.dialog.showToast('Game Eliminado', null, 'success');
                this.utilArray.listDelete(this.list, red.id);
            }
        });
    }
    getIcon(red) {
        switch (red.name) {
            case 'Facebook':
                return 'logo-facebook';
            case 'Instagram':
                return 'logo-instagram';
            case 'WhatsApp':
                return 'logo-whatsapp';
            case 'Twitter':
                return 'logo-twitter';
        }
    }
    getColorIcon(red) {
        switch (red.name) {
            case 'Facebook':
                return 'facebook-color';
            case 'Instagram':
                return 'instagram-color';
            case 'WhatsApp':
                return 'whatsapp-color';
            case 'Twitter':
                return 'twitter-color';
        }
    }
    openRed(red) {
        if (red && red.url) {
            let baseUrl = '';
            switch (red.name) {
                case 'Facebook':
                    baseUrl = 'https://www.facebook.com/';
                    break;
                case 'Instagram':
                    baseUrl = 'https://www.instagram.com/';
                    break;
                case 'WhatsApp':
                    return 'whatsapp-color';
                case 'Twitter':
                    baseUrl = 'https://twitter.com/';
                    break;
            }
            /*      const browser = this.iab.create(baseUrl + red.url);
            
                  browser.show()
              */
        }
    }
    select(red) {
        this.openAppUrl(red.name, red.url);
    }
    openAppUrl(app, name, id) {
        switch (app) {
            case 'Facebook':
                this.openUrl('https://www.facebook.com/' + name);
                break;
            /*
              this.launchApp(
                  'fb://', 'com.facebook.katana',
                  'fb://profile/' + id,
                  'fb://page/' + id,
                  'https://www.facebook.com/' + name);
                break;*/
            case 'Instagram':
                this.openUrl('https://www.instagram.com/' + name);
                break;
            /*
                this.launchApp(
                  'instagram://',
                  'com.instagram.android',
                  'instagram://user?username=' + name,
                  'instagram://user?username=' + name,
                  'https://www.instagram.com/' + name);
                break;*/
            case 'Twitter':
                this.openUrl('https://twitter.com/' + name);
            /*
                this.launchApp(
                  'twitter://', 'com.twitter.android',
                  'twitter://user?screen_name=' + name,
                  'twitter://user?screen_name=' + name,
                  'https://twitter.com/' + name);
                break;
                */
            case 'WhatsApp':
                this.openUrl('https://api.whatsapp.com/send?phone=+549' + name);
            default:
                break;
        }
    }
    /*
    private launchApp(iosApp: string, androidApp: string, appUrlIOS: string, appUrlAndroid: string, webUrl: string) {
        let app: string;
        let appUrl: string;
        // check if the platform is ios or android, else open the web url
        if (this.platform.is('ios')) {
          app = iosApp;
          appUrl = appUrlIOS;
        } else if (this.platform.is('android')) {
          app = androidApp;
          appUrl = appUrlAndroid;
        } else {
          const browser: InAppBrowserObject = this.inAppBrowser.create(webUrl, '_system');
          return;
        }
        this.appAvailability.check(app).then(
            () => {
                // success callback, the app exists and we can open it
                const browser: InAppBrowserObject = this.inAppBrowser.create(appUrl, '_system');
            },
            () => {
                // error callback, the app does not exist, open regular web url instead
                const browser: InAppBrowserObject = this.inAppBrowser.create(webUrl, '_system');
            }
        );
    }
    */
    openUrl(url) {
        const browser = this.inAppBrowser.create(url, '_self');
    }
};
RedListComponent.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__["UtilArrayService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] }
];
RedListComponent.propDecorators = {
    nameModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nameModel',] }],
    idModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['idModel',] }],
    isAdmin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['isAdmin',] }],
    withRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['withRefresh',] }]
};
RedListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-red-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./red-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/redes/red-list/red-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./red-list.component.scss */ "./src/app/components/redes/red-list/red-list.component.scss")).default]
    })
], RedListComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() { }
    ngOnInit() { }
    onCancel(event) { }
    onInput(event) { }
    showCancelButton() { }
};
SearchComponent.ctorParameters = () => [];
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/pages/event/event-form/event-form.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/event/event-form/event-form.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50L2V2ZW50LWZvcm0vZXZlbnQtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/event/event-form/event-form.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/event/event-form/event-form.page.ts ***!
  \***********************************************************/
/*! exports provided: EventFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormPage", function() { return EventFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");






let EventFormPage = class EventFormPage {
    constructor(navParams, requestService, dialogService, viewCtrl) {
        this.navParams = navParams;
        this.requestService = requestService;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.twoTeam = false;
        this.myDateFilter = (d) => {
            const day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day == 6;
        };
        this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', requestService);
        this.eventModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Event', requestService);
        this.game_id = navParams.get('game_id');
        this.twoTeam = navParams.get('twoTeam');
        this.id = navParams.get('id');
        this.team_admin = navParams.get('team_admin');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.init();
            this.loadEvent();
        });
    }
    loadEvent() {
        if (this.id) {
        }
        else {
            this.event = {
                game_id: this.game_id,
                type_event_id: '',
                player_id: '',
                team_id: this.team_admin ? this.team_admin.id : '',
                time: ''
            };
        }
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.eventModel.api_function('dataEventCreate', { game_id: this.game_id }).subscribe(data => {
                if (data['status'] == 'success') {
                    this.dataEvent = data['data'];
                    this.types_events = this.dataEvent['types_events'];
                }
                console.log('ty', this.types_events);
                console.log(this.dataEvent);
            });
        });
    }
    getPlayers() {
        let id = this.event.team_id;
        if (this.team_admin)
            id = this.event.team_id;
        if (id) {
            let team = this.dataEvent.teams.find(t => t.id === id);
            if (team)
                return team.players;
        }
        return [];
    }
    submit() {
        if (this.event.id) {
            this.eventModel.api_update(this.event).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    console.log(data);
                    this.dismiss(data['Event']);
                }
            });
        }
        else {
            this.eventModel.api_create(this.event).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Event']);
                }
            });
        }
    }
    dismiss(event) {
        this.viewCtrl.dismiss({
            event: event,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
    print() {
        console.log(this.event);
    }
};
EventFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
EventFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event-form.page.scss */ "./src/app/pages/event/event-form/event-form.page.scss")).default]
    })
], EventFormPage);



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

/***/ "./src/app/pages/publications/publication/publication.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/publications/publication/publication.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".publication-user {\n  display: flex;\n}\n.publication-user .user {\n  display: block;\n}\n.publication-user .user .name {\n  margin-top: 5px;\n  font-size: medium;\n}\n.publication-user .user .date {\n  margin-left: 5px;\n  font-size: xx-small;\n}\n.publication-text {\n  margin: 10px;\n  margin-left: 15px;\n  font-size: medium;\n}\n.publication-image {\n  align-self: auto;\n}\n.separator {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-bottom: solid 1px rgba(63, 62, 62, 0.671);\n}\n.sgm-likes {\n  --ion-color-base: #e73636 !important;\n}\n.sgm-comments {\n  --ion-color-base: #277ecf !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljYXRpb25zL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDWjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUFaO0FBTUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUhKO0FBTUE7RUFDSSxnQkFBQTtBQUhKO0FBTUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUFISjtBQU1BO0VBQ0ksb0NBQUE7QUFISjtBQU1BO0VBQ0ksb0NBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVibGljYXRpb24tdXNlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLnVzZXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIC5uYW1le1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5kYXRle1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLnB1YmxpY2F0aW9uLXRleHR7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4ucHVibGljYXRpb24taW1hZ2V7XG4gICAgYWxpZ24tc2VsZjogYXV0bztcbn1cblxuLnNlcGFyYXRvcntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoNjMsIDYyLCA2MiwgMC42NzEpO1xufVxuXG4uc2dtLWxpa2Vze1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNlNzM2MzYgIWltcG9ydGFudDtcbn1cblxuLnNnbS1jb21tZW50c3tcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMjc3ZWNmICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/publications/publication/publication.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/publications/publication/publication.page.ts ***!
  \********************************************************************/
/*! exports provided: PublicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationPage", function() { return PublicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/transfer-data.service */ "./src/app/services/transfer-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");
/* harmony import */ var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/paths-images.service */ "./src/app/services/paths-images.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");












let PublicationPage = class PublicationPage {
    constructor(request, navParams, util, utilArray, viewCtrl, transferData, route, navCtrl, authUser, pathImages, dialogService, platform) {
        this.request = request;
        this.navParams = navParams;
        this.util = util;
        this.utilArray = utilArray;
        this.viewCtrl = viewCtrl;
        this.transferData = transferData;
        this.route = route;
        this.navCtrl = navCtrl;
        this.authUser = authUser;
        this.pathImages = pathImages;
        this.dialogService = dialogService;
        this.platform = platform;
        this.segment = 'comments';
        this.isModal = true;
        this.firstLoading = true;
        this.notFound = false;
        this.publicationModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Publication', request);
        this.id = this.navParams.get('id');
        this.segment = this.navParams.get('segment');
        this.platform.backButton.subscribeWithPriority(100, () => {
            alert('close');
            this.close();
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //if(await this.navParams.get('id')){
            //await this.util.delay(500)
            if (!this.id) {
                this.isModal = false;
                this.id = this.route.snapshot.paramMap.get('id');
                this.segment = this.route.snapshot.paramMap.get('segment') == 'likes' ? 'likes' : 'comments';
            }
            this.init();
        });
    }
    init($event = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.firstLoading) {
                yield this.dialogService.loadingProgres();
                this.firstLoading = false;
            }
            this.publicationModel.api_functionModel(this.id, 'pageShow').subscribe(response => {
                console.log(response);
                this.publication = response['data'];
                if ($event)
                    $event.target.complete();
                this.dialogService.dimissLoaging();
            }, error => {
                if (this.util.notFoundItemApi(error)) {
                    this.notFound = true;
                }
                //this.notFound = true;
                console.log(error);
                if ($event)
                    $event.target.complete();
                this.dialogService.dimissLoaging();
            });
        });
    }
    close() {
        this.publication.comments_count = this.publication.comments.length;
        this.publication.likes_count = this.publication.likes.length;
        this.viewCtrl.dismiss({
            publication: this.publication,
        });
    }
    segmentChanged($event) {
        console.log('Segment changed', $event);
        this.segment = $event.detail.value;
    }
    updateComments($event, publication) {
        publication.comments = $event;
    }
};
PublicationPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__["UtilArrayService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_6__["TransferDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"] },
    { type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_10__["PathsImagesService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
PublicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publication.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/publication/publication.page.html")).default,
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publication.page.scss */ "./src/app/pages/publications/publication/publication.page.scss")).default]
    })
], PublicationPage);



/***/ }),

/***/ "./src/app/pages/redes/redes-form/redes-form.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/redes/redes-form/redes-form.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZGVzL3JlZGVzLWZvcm0vcmVkZXMtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/redes/redes-form/redes-form.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/redes/redes-form/redes-form.page.ts ***!
  \***********************************************************/
/*! exports provided: RedesFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedesFormPage", function() { return RedesFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");






let RedesFormPage = class RedesFormPage {
    constructor(request, dialogService, viewCtrl, navParams) {
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.redes = ['Facebook', 'Instagram', 'WhatsApp', 'Twitter'];
        this.redModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Red', request);
        this.id = navParams.get('id');
        this.idModel = navParams.get('idModel');
        this.nameModel = navParams.get('nameModel');
    }
    ngOnInit() {
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.red = {
                name: '',
                url: '',
                name_model: this.nameModel,
                model_id: this.idModel
            };
            if (this.id) {
                yield this.dialogService.loadingProgres(null);
                this.redModel.api_find(this.id).subscribe(response => {
                    this.red = response['Red'];
                    this.dialogService.dimissLoaging();
                });
            }
        });
    }
    submit() {
        this.saveRed();
    }
    dismiss(red) {
        this.viewCtrl.dismiss({
            red: red,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
    saveRed() {
        if (this.red.id) {
            this.redModel.api_update(this.red).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Red']);
                }
            });
        }
        else {
            this.redModel.api_create(this.red).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Red']);
                }
            });
        }
    }
};
RedesFormPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
RedesFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redes-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./redes-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./redes-form.page.scss */ "./src/app/pages/redes/redes-form/redes-form.page.scss")).default]
    })
], RedesFormPage);



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
//# sourceMappingURL=default~pages-game-admin-game-admin-game-module~pages-game-game-game-module~pages-game-result-result~2beb2a8f-es2015.js.map