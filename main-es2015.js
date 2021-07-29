(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!login\">\n  <app-header></app-header>\n</div>\n<div class=\"container-fluid\" >\n  <router-outlet></router-outlet>\n</div>\n\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div *ngIf=\"(!hideData && timeOut)\">\n    <div class=\"title\" style=\"text-align: center; margin: 20px;\">\n      <h4>{{discussionData.title}}</h4>\n    </div>\n    <div style=\"text-align: center;\">\n      <!-- <img class=\"imageClass\" src=\"{{discussionData.imageUrl}}\" alt=\"image\"> -->\n      <img style=\"max-width: 300px; max-height: 150px;\" class=\"imageClass\" src=\"/assets/dummy.webp\" alt=\"image\">\n    </div>\n    <div> \n      <button class=\"btn btn-transparent\" (click)=\"loadPrevious()\">LoadPrevious</button>\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Message</th>\n            <th scope=\"col\">timeStamp</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let message of messages | keyvalue\">\n          <tr>\n            <th scope=\"row\">{{message.value.name}}</th>\n            <td>{{message.value.message}}</td>\n            <td>{{message.value.timestamp}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <form [formGroup]=\"chatForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"formGroup\">  \n        <textarea type=\"text\" name=\"message\" class=\"form-control\" formControlName=\"message\"></textarea>\n        <p *ngIf=\"chatForm.controls.message.errors  && chatForm.controls.message.dirty\"> Message is required</p>\n      </div>\n      <br>\n      <button class=\"btn btn-primary\" [disabled]=\"chatForm.controls.message.errors\" type=\"submit\">submit</button>\n    </form>\n  </div>\n  <div *ngIf=\"hideData\" style=\"text-align: center;\">\n    <img class=\"imageClass\" src=\"/assets/loader2.gif\" alt=\"image\">\n  </div>\n  <div *ngIf=\"!timeOut\" style=\"text-align: center;\">\n    <img class=\"imageClass\" src=\"/assets/tenor3.gif\" alt=\"image\">\n    <br>\n    <a href=\"/\">Idle Time Out. Refresh</a>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-bottom navbar-dark bg-dark\" >\n    <div style=\"text-align: center; width: 100%;\"><span style=\"color: white;\">Hello from footer</span></div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a> \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <!-- <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n        </li> -->\n      </ul> \n      <p style=\"color: beige;\">\n        {{userName}}\n      </p>\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" *ngIf=\"!userName\" (click)=\"login()\">\n        Login\n      </button>\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" *ngIf=\"userName\" (click)=\"logout()\">\n        Logout\n      </button>\n    </div>\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"d-flex justify-content-center align-item-center\">\n        <div>\n            <h2>Discuss App</h2>\n            <h6>Login TO Continue</h6>\n            <button class=\"btn btn-outline-success my-2 my-sm-0\"  (click)=\"login()\">\n                Login with google \n            </button>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center; width: 100%; margin-top: 100px;\"> <h1>Page Not Found</h1></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>sidebar works!</p>\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");









const routes = [
    { path: 'header', component: _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"] },
    { path: 'sidebar', component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"] },
    { path: 'content', component: _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"] },
    { path: 'content/:id', component: _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'content/1001' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/firebase.service */ "./src/app/shared/firebase.service.ts");






let AppComponent = class AppComponent {
    constructor(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.title = 'discussUI';
        this.login = true;
    }
    ngOnInit() {
        const firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].config;
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["initializeApp"](firebaseConfig);
        const myThis = this;
        // this.firebaseService.userData = '';
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                myThis.firebaseService.userData.next(user);
                myThis.login = false;
                myThis.router.navigate(['']);
            }
            else {
                myThis.firebaseService.userData.next(null);
                myThis.login = true;
                myThis.router.navigate(['/login']);
                console.log('user logged out');
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-valid[required]  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }\n  .imageClass {\n      max-width: 80%;\n      max-height: 50vh;\n      text-align: center;\n  }\n  .container {\n      margin-bottom: 60px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEIsRUFBRSxVQUFVO0VBQzVDO0VBQ0E7SUFDRSw4QkFBOEIsRUFBRSxRQUFRO0VBQzFDO0VBRUE7TUFDSSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGtCQUFrQjtFQUN0QjtFQUNBO01BQ0ksbUJBQW1CO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctdmFsaWRbcmVxdWlyZWRdICB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xuICB9XG4gIC5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXG4gIH1cblxuICAuaW1hZ2VDbGFzcyB7XG4gICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDUwdmg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/firebase.service */ "./src/app/shared/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let ContentComponent = class ContentComponent {
    // eslint-disable-next-line no-useless-constructor
    constructor(firebaseService, route, fb) {
        this.firebaseService = firebaseService;
        this.route = route;
        this.fb = fb;
        this.hideData = true;
        this.timeOut = true;
        this.discussionData = {
            title: 'discussionTitle',
            imageUrl: '../assets/dummy.webp'
        };
        this.disableUser = () => {
            this.timeOut = false;
            this.unHookListner.off();
            this.unsubscriber.unsubscribe();
        };
    }
    ngOnInit() {
        this.chatForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.id = this.route.snapshot.paramMap.get('id');
        this.getDiscussionDetails(this.id);
        this.firebaseService.userData.subscribe(data => {
            if (data) {
                this.userName = data.displayName;
            }
            else {
                this.userName = null;
            }
        });
    }
    loadPrevious() {
        this.firebaseService.getOldMessages(this.id, this.messages[Object.keys(this.messages)[0]].timestamp).then(val => {
            this.messages = Object.assign(Object.assign({}, val), this.messages);
        });
    }
    onSubmit() {
        this.writeMessages(this.id, this.chatForm.value);
        this.chatForm.setValue(Object.assign(Object.assign({}, this.chatForm.value), { message: '' }));
    }
    writeMessages(id, data) {
        this.name = this.userName;
        this.firebaseService.writeMessages(id, Object.assign(Object.assign({}, data), { name: this.name }));
    }
    getMessages(id) {
        this.unHookListner = this.firebaseService.startGetttingMessages(id);
        this.firebaseService.listenToMessages.subscribe(data => (this.messages = Object.assign(Object.assign({}, this.messages), data)));
    }
    getDiscussionDetails(id) {
        this.firebaseService.getDiscussionDetails(id).then(data => {
            if (data) {
                (this.discussionData = data), this.getMessages(this.id), (this.hideData = false);
            }
        });
    }
};
ContentComponent.ctorParameters = () => [
    { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: __importDefault(__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    ngOnInit() { }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/firebase.service */ "./src/app/shared/firebase.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    ngOnInit() {
        this.firebaseService.userData.subscribe(data => {
            if (data) {
                this.userName = data.displayName;
            }
            else {
                this.userName = null;
            }
        });
    }
    login() {
        this.firebaseService.login();
    }
    logout() {
        this.firebaseService.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/firebase.service */ "./src/app/shared/firebase.service.ts");



let LoginComponent = class LoginComponent {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    ngOnInit() { }
    login() {
        console.log('clicked login');
        this.firebaseService.login();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    ngOnInit() { }
};
PageNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __importDefault(__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/shared/firebase.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/firebase.service.ts ***!
  \********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let FirebaseService = class FirebaseService {
    // eslint-disable-next-line no-useless-constructor
    constructor(router) {
        this.router = router;
        this.listenToMessages = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](1);
        this.provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.startGetttingMessages = id => {
            const refGetMessage = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"]()
                .ref(`messages/${id}`)
                .limitToLast(1)
                .orderByChild('timestamp');
            refGetMessage.on('value', snapshot => {
                this.listenToMessages.next(snapshot.val());
            });
            return refGetMessage;
        };
        this.getOldMessages = (id, timestamp) => {
            return firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"]()
                .ref(`messages/${id}`)
                .limitToLast(5)
                .endAt(timestamp)
                .orderByChild('timestamp')
                .once('value')
                .then(snapshot => {
                if (snapshot.val()) {
                    return snapshot.val();
                }
            });
        };
    }
    ngOnInit() {
        this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        this.userData.subscribe(data => {
            if (data) {
                this.userName = data.displayName;
            }
            else {
                this.userName = null;
            }
        });
    }
    login() {
        console.log('login called');
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPopup(this.provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential['accessToken'];
            // The signed-in user info.
            var user = result.user;
            console.log(user, 'userObj');
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(error, 'error object');
            // ...
        });
    }
    logout() {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut().then(function () {
            // Sign-out successful.
            console.log('Sign-out successful.');
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        });
    }
    writeMessages(id, data) {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"]()
            .ref(`messages/${id}`)
            .push(Object.assign(Object.assign({}, data), { timestamp: firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP }));
    }
    getDiscussionDetails(id) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"]()
            .ref(`discussions/${id}`)
            .once('value')
            .then(snapshot => {
            if (snapshot.val()) {
                return snapshot.val();
            }
            this.router.navigate(['/stopChangingURL']);
        });
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirebaseService);

// useful Stuff
//   FirebaseDatabase.getInstance().getReference()
// .child("Conversation").child(conversationID)
// .limitToLast(100)
// .orderByChild("timestamp")
// .startAt(dateToStart)    // pass timestamp from when you want to start filtering
// .endAt(dateToEnd); // pass timestamp till when you want to apply filtering


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    ngOnInit() { }
};
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
    config: {
        apiKey: 'AIzaSyBm6PuVivP0paGo6aY-0nJRRKvm905AYFE',
        authDomain: 'discussapp-cab58.firebaseapp.com',
        databaseURL: 'https://discussapp-cab58.firebaseio.com',
        projectId: 'discussapp-cab58',
        storageBucket: 'discussapp-cab58.appspot.com',
        messagingSenderId: '623343408618',
        appId: '1:623343408618:web:80c188e5f0f8a3e5e9ce93',
        measurementId: 'G-EMX4K8QZS1'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/DiscussUI/DiscussUI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map