(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <link\n    href=\"https://fonts.googleapis.com/css?family=Josefin+Sans\"\n    rel=\"stylesheet\"\n  />\n\n  <ion-toolbar>\n    <ion-title> </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <!-- MICROFONE -->\n    <ion-icon\n      *ngIf=\"estado == 0\"\n      (click)=\"temPermissao()\"\n      class=\"microfone\"\n      md=\"md-microphone\"\n    ></ion-icon>\n\n    <!-- OUVINDO -->\n    <div class=\"centralizarIcone\" *ngIf=\"estado == 1\">\n      <div class=\"lds-css ng-scope\">\n        <div style=\"width:100%;height:100%\" class=\"lds-ripple\">\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>\n\n    <!-- respodendo -->\n\n    <div class=\"centralizarIcone\" (click)=\"estado = 0\" *ngIf=\"estado == 2\">\n      <div class=\"lds-css ng-scope\">\n        <div style=\"width:100%;height:100%\" class=\"lds-facebook\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n        <ion-card-content>\n          {{ fala }}\n        </ion-card-content>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-content {\n  display: flex;\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 30px;\n  text-transform: capitalize; }\n\n.microfone {\n  font-size: 300px;\n  color: #5699d2;\n  height: 100%;\n  align-content: center;\n  justify-content: center; }\n\n.wrapper {\n  display: flex;\n  height: 100%;\n  align-content: center;\n  justify-content: center; }\n\n.centralizarIcone {\n  display: flex; }\n\n@keyframes lds-ripple {\n  0% {\n    top: 94px;\n    left: 94px;\n    width: 0;\n    height: 0;\n    opacity: 1; }\n  100% {\n    top: 17px;\n    left: 17px;\n    width: 154px;\n    height: 154px;\n    opacity: 0; } }\n\n@-webkit-keyframes lds-ripple {\n  0% {\n    top: 94px;\n    left: 94px;\n    width: 0;\n    height: 0;\n    opacity: 1; }\n  100% {\n    top: 17px;\n    left: 17px;\n    width: 154px;\n    height: 154px;\n    opacity: 0; } }\n\n.lds-ripple {\n  position: relative; }\n\n.lds-css {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n\n.lds-ripple div {\n  box-sizing: content-box;\n  position: absolute;\n  border-width: 6px;\n  border-style: solid;\n  opacity: 1;\n  border-radius: 50%;\n  -webkit-animation: lds-ripple 2.3s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  animation: lds-ripple 2.3s cubic-bezier(0, 0.2, 0.8, 1) infinite; }\n\n.lds-ripple div:nth-child(1) {\n  border-color: #1d3f72; }\n\n.lds-ripple div:nth-child(2) {\n  border-color: #5699d2;\n  -webkit-animation-delay: -1.15s;\n  animation-delay: -1.15s; }\n\n.lds-ripple {\n  width: 200px !important;\n  height: 200px !important;\n  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n  transform: translate(-100px, -100px) scale(1) translate(100px, 100px); }\n\n@keyframes lds-facebook_1 {\n  0% {\n    top: 36px;\n    height: 128px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n@-webkit-keyframes lds-facebook_1 {\n  0% {\n    top: 36px;\n    height: 128px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n@keyframes lds-facebook_2 {\n  0% {\n    top: 41.99999999999999px;\n    height: 116.00000000000001px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n@-webkit-keyframes lds-facebook_2 {\n  0% {\n    top: 41.99999999999999px;\n    height: 116.00000000000001px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n@keyframes lds-facebook_3 {\n  0% {\n    top: 48px;\n    height: 104px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n@-webkit-keyframes lds-facebook_3 {\n  0% {\n    top: 48px;\n    height: 104px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n.lds-facebook {\n  position: relative; }\n\n.lds-facebook div {\n  position: absolute;\n  width: 30px; }\n\n.lds-facebook div:nth-child(1) {\n  left: 35px;\n  background: #93dbe9;\n  -webkit-animation: lds-facebook_1 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  animation: lds-facebook_1 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  -webkit-animation-delay: -0.24s;\n  animation-delay: -0.24s; }\n\n.lds-facebook div:nth-child(2) {\n  left: 85px;\n  background: #689cc5;\n  -webkit-animation: lds-facebook_2 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  animation: lds-facebook_2 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  -webkit-animation-delay: -0.12s;\n  animation-delay: -0.12s; }\n\n.lds-facebook div:nth-child(3) {\n  left: 135px;\n  background: #5e6fa3;\n  -webkit-animation: lds-facebook_3 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  animation: lds-facebook_3 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite; }\n\n.lds-facebook {\n  width: 200px !important;\n  height: 200px !important;\n  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n  transform: translate(-100px, -100px) scale(1) translate(100px, 100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJuYW5kYW51bmVzL0Rlc2t0b3AvY2hhdGJvdC1hc3Npc3RhbnQvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsMEJBQTBCLEVBQUE7O0FBSTVCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVLEVBQUE7RUFFWjtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVLEVBQUEsRUFBQTs7QUFHZDtFQUNFO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVUsRUFBQTtFQUVaO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVUsRUFBQSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsd0VBQXdFO0VBQ3hFLGdFQUFnRSxFQUFBOztBQUVsRTtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qiw2RUFBNkU7RUFDN0UscUVBQXFFLEVBQUE7O0FBSXZFO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsYUFBYSxFQUFBO0VBRWY7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBO0VBRWQ7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBLEVBQUE7O0FBR2hCO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsYUFBYSxFQUFBO0VBRWY7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBO0VBRWQ7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBLEVBQUE7O0FBR2hCO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsNEJBQTRCLEVBQUE7RUFFOUI7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBO0VBRWQ7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBLEVBQUE7O0FBR2hCO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsNEJBQTRCLEVBQUE7RUFFOUI7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBO0VBRWQ7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBLEVBQUE7O0FBR2hCO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsYUFBYSxFQUFBO0VBRWY7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBO0VBRWQ7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBLEVBQUE7O0FBR2hCO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsYUFBYSxFQUFBO0VBRWY7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBO0VBRWQ7SUFDRSxTQUFTO0lBQ1QsWUFBWSxFQUFBLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsNEVBQTRFO0VBQzVFLG9FQUFvRTtFQUNwRSwrQkFBK0I7RUFDL0IsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw0RUFBNEU7RUFDNUUsb0VBQW9FO0VBQ3BFLCtCQUErQjtFQUMvQix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDRFQUE0RTtFQUM1RSxvRUFBb0UsRUFBQTs7QUFFdEU7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDZFQUE2RTtFQUM3RSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG59XHJcblxyXG4ubWljcm9mb25lIHtcclxuICAgIGZvbnQtc2l6ZTogMzAwcHg7XHJcbiAgICBjb2xvcjogIzU2OTlkMjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ud3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRyYWxpemFySWNvbmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRvcDogOTRweDtcclxuICAgICAgbGVmdDogOTRweDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0b3A6IDE3cHg7XHJcbiAgICAgIGxlZnQ6IDE3cHg7XHJcbiAgICAgIHdpZHRoOiAxNTRweDtcclxuICAgICAgaGVpZ2h0OiAxNTRweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xyXG4gICAgMCUge1xyXG4gICAgICB0b3A6IDk0cHg7XHJcbiAgICAgIGxlZnQ6IDk0cHg7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdG9wOiAxN3B4O1xyXG4gICAgICBsZWZ0OiAxN3B4O1xyXG4gICAgICB3aWR0aDogMTU0cHg7XHJcbiAgICAgIGhlaWdodDogMTU0cHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sZHMtcmlwcGxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmxkcy1jc3N7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAubGRzLXJpcHBsZSBkaXYge1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDZweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxkcy1yaXBwbGUgMi4zcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDIuM3MgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZDNmNzI7XHJcbiAgfVxyXG4gIC5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTY5OWQyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjE1cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMTVzO1xyXG4gIH1cclxuICAubGRzLXJpcHBsZSB7XHJcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMHB4LCAtMTAwcHgpIHNjYWxlKDEpIHRyYW5zbGF0ZSgxMDBweCwgMTAwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMHB4LCAtMTAwcHgpIHNjYWxlKDEpIHRyYW5zbGF0ZSgxMDBweCwgMTAwcHgpO1xyXG4gIH1cclxuXHJcbi8vICAgRkFMQU5ET1xyXG4gIEBrZXlmcmFtZXMgbGRzLWZhY2Vib29rXzEge1xyXG4gICAgMCUge1xyXG4gICAgICB0b3A6IDM2cHg7XHJcbiAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxkcy1mYWNlYm9va18xIHtcclxuICAgIDAlIHtcclxuICAgICAgdG9wOiAzNnB4O1xyXG4gICAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRzLWZhY2Vib29rXzIge1xyXG4gICAgMCUge1xyXG4gICAgICB0b3A6IDQxLjk5OTk5OTk5OTk5OTk5cHg7XHJcbiAgICAgIGhlaWdodDogMTE2LjAwMDAwMDAwMDAwMDAxcHg7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxkcy1mYWNlYm9va18yIHtcclxuICAgIDAlIHtcclxuICAgICAgdG9wOiA0MS45OTk5OTk5OTk5OTk5OXB4O1xyXG4gICAgICBoZWlnaHQ6IDExNi4wMDAwMDAwMDAwMDAwMXB4O1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRzLWZhY2Vib29rXzMge1xyXG4gICAgMCUge1xyXG4gICAgICB0b3A6IDQ4cHg7XHJcbiAgICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxkcy1mYWNlYm9va18zIHtcclxuICAgIDAlIHtcclxuICAgICAgdG9wOiA0OHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sZHMtZmFjZWJvb2sge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAubGRzLWZhY2Vib29rIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcbiAgLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGxlZnQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTNkYmU5O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxkcy1mYWNlYm9va18xIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogbGRzLWZhY2Vib29rXzEgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjI0cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjRzO1xyXG4gIH1cclxuICAubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgbGVmdDogODVweDtcclxuICAgIGJhY2tncm91bmQ6ICM2ODljYzU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbGRzLWZhY2Vib29rXzIgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtZmFjZWJvb2tfMiAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMnM7XHJcbiAgfVxyXG4gIC5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICBsZWZ0OiAxMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICM1ZTZmYTM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbGRzLWZhY2Vib29rXzMgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtZmFjZWJvb2tfMyAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5sZHMtZmFjZWJvb2sge1xyXG4gICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgLTEwMHB4KSBzY2FsZSgxKSB0cmFuc2xhdGUoMTAwcHgsIDEwMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgLTEwMHB4KSBzY2FsZSgxKSB0cmFuc2xhdGUoMTAwcHgsIDEwMHB4KTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _watson_provider_watson_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../watson-provider/watson.service */ "./src/app/watson-provider/watson.service.ts");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");





var HomePage = /** @class */ (function () {
    function HomePage(tts, watsonService, stt, zone) {
        this.tts = tts;
        this.watsonService = watsonService;
        this.stt = stt;
        this.zone = zone;
        this.estadoMic = true;
        this.estadoOuvindo = false;
        this.estadoRespondendo = false;
        this.fala = "";
        this.estado = 0;
    }
    HomePage.prototype.ngOnInit = function () {
        this.funcaoInput("");
    };
    //CHECA SE TEM PERMISSAO
    HomePage.prototype.temPermissao = function () {
        var _this = this;
        //  console.log('entrou')
        this.trocarEstadoMic();
        this.stt.hasPermission().then(function (hasPermission) {
            if (!hasPermission) {
                _this.stt.requestPermission();
            }
            else {
                _this.comecarOuvir();
            }
        });
    };
    //COMECA A OUVIR A FALA
    HomePage.prototype.comecarOuvir = function () {
        var _this = this;
        this.estado = 1;
        this.trocarEstadoOuvindo();
        var options = {
            language: 'por-BRA',
            showPopup: false
        };
        this.stt.startListening(options)
            .subscribe(function (matches) { return _this.funcaoInput(matches[0]); }, function (onerror) { return console.log('error:', onerror); });
    };
    //WATSON 
    //WATSON ARMAZENA A FALA
    HomePage.prototype.funcaoInput = function (text) {
        var _this = this;
        this.fala = text;
        var body = {
            apikey: "YbXjEu6o9YbKLsfSxQmOOxapIxl77rFGVZ8WRk_nIGVF",
            workspace_id: "01dd598c-3e3b-4be9-8214-d0012c9c6259",
            url: "https://gateway.watsonplatform.net/assistant/api",
            input: text,
        };
        this.change();
        this.watsonService.postWatson(body).then(function (res) {
            console.log(res);
            _this.funcaoOutput(res.output.text[0]);
        });
    };
    //WATSON FALA
    HomePage.prototype.funcaoOutput = function (texto) {
        this.trocarEstadoRespondendo();
        this.tts.speak({
            text: texto,
            locale: "por-BRA",
            rate: 1.0
        });
    };
    //PARA DE OUVIR (IOS)
    // paraDeOuvir(){
    //   this.stt.stopListening()
    //   this.trocarEstadoRespondendo()
    // }
    HomePage.prototype.trocarEstadoMic = function () {
        this.estadoMic ? this.estadoMic = false : this.estadoMic = true;
    };
    HomePage.prototype.trocarEstadoOuvindo = function () {
        if (this.estadoMic == false) {
            this.estadoOuvindo = true;
        }
        else {
            this.estadoOuvindo = false;
        }
    };
    HomePage.prototype.trocarEstadoRespondendo = function () {
        if (this.estadoOuvindo == true) {
            this.estadoRespondendo = true;
            this.estadoOuvindo = false;
            this.estadoMic = false;
        }
        this.trocarEstadoMic();
    };
    HomePage.prototype.change = function () {
        var _this = this;
        //ATUALIZA A VIEW (TERCEIRA)
        this.zone.run(function () {
            _this.estado = 2;
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            providers: [_ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__["TextToSpeech"], _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__["SpeechRecognition"]],
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__["TextToSpeech"], _watson_provider_watson_service__WEBPACK_IMPORTED_MODULE_3__["WatsonService"], _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__["SpeechRecognition"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map