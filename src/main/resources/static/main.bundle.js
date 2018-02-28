webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studycatalog_studycatalog_component__ = __webpack_require__("../../../../../src/app/studycatalog/studycatalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studycatalog_add_studycatalog_add_component__ = __webpack_require__("../../../../../src/app/studycatalog-add/studycatalog-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/studycatalog', pathMatch: 'full' },
    { path: 'studycatalog', component: __WEBPACK_IMPORTED_MODULE_2__studycatalog_studycatalog_component__["a" /* StudycatalogComponent */] },
    { path: 'studycatalog/add', component: __WEBPACK_IMPORTED_MODULE_3__studycatalog_add_studycatalog_add_component__["a" /* StudycatalogAddComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <div class=\"navbar-brand\">\n        <img src=\"/assets/img/HONEUR_logo.png\" width=\"200\"/> {{title}}\n      </div>\n    </div>\n    <ul class=\"nav navbar-nav mr-xl-auto\" routerLinkActive=\"active\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/studycatalog\">Home</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/studycatalog/add\">Add Study</a></li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<p> </p>\n\n<!-- Footer -->\n<footer class=\"py-5\">\n  <div class=\"container\">\n    <p class=\"text-center\">Copyright &copy; HONEUR 2018</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authorization_service__ = __webpack_require__("../../../../../src/app/authorization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authorizationService) {
        this.authorizationService = authorizationService;
        this.title = 'Studycatalog';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authorizationService.getUser().subscribe(function (user) {
            this.user = new user;
            this.authorizationService.user.emit(user);
        }.bind(this));
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authorization_service__["a" /* AuthorizationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studycatalog_studycatalog_component__ = __webpack_require__("../../../../../src/app/studycatalog/studycatalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__studycatalog_add_studycatalog_add_component__ = __webpack_require__("../../../../../src/app/studycatalog-add/studycatalog-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__study_service__ = __webpack_require__("../../../../../src/app/study.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authorization_service__ = __webpack_require__("../../../../../src/app/authorization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__studycatalog_studycatalog_component__["a" /* StudycatalogComponent */],
                __WEBPACK_IMPORTED_MODULE_4__studycatalog_add_studycatalog_add_component__["a" /* StudycatalogAddComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__study_service__["a" /* StudyService */],
                __WEBPACK_IMPORTED_MODULE_9__authorization_service__["a" /* AuthorizationService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authorization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(http) {
        this.http = http;
        this.user = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AuthorizationService.prototype.getUser = function () {
        return this.http.get('http://localhost:9996/api/user');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AuthorizationService.prototype, "user", void 0);
    AuthorizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthorizationService);
    return AuthorizationService;
}());



/***/ }),

/***/ "../../../../../src/app/study.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var StudyService = /** @class */ (function () {
    function StudyService(http) {
        this.http = http;
    }
    StudyService.prototype.getUsers = function () {
        return this.http.get('http://localhost:9996/api/users');
    };
    StudyService.prototype.getUser = function () {
        return this.http.get('http://localhost:9996/api/user');
    };
    StudyService.prototype.getStudies = function () {
        return this.http.get('http://localhost:9996/api/study');
    };
    StudyService.prototype.saveStudy = function (study) {
        return this.http.post('http://localhost:9996/api/study', study, httpOptions);
    };
    StudyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], StudyService);
    return StudyService;
}());



/***/ }),

/***/ "../../../../../src/app/studycatalog-add/studycatalog-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form #studyForm=\"ngForm\" (ngSubmit)=\"save()\">\n    <div class=\"form-group row\">\n      <label class=\"col-md-2 col-form-label\">Name</label>\n      <div class=\"col-md-10\">\n        <input [(ngModel)]=\"study.name\" name=\"name\" type=\"text\" required #name=\"ngModel\"/>\n        <span [hidden]=\"name.valid || !submitted\" class=\"error\">\n        Name is required\n      </span>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2 col-form-label\">Reference</label>\n      <div class=\"col-md-10\">\n        <input [(ngModel)]=\"study.reference\" name=\"reference\" type=\"text\" required #reference=\"ngModel\"/>\n        <span [hidden]=\"reference.valid || !submitted\" class=\"error\">\n        A reference is required\n      </span>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2 col-form-label\">Description</label>\n      <div class=\"col-md-10\">\n        <input [(ngModel)]=\"study.description\" name=\"description\" type=\"text\" required #description=\"ngModel\"/>\n        <span [hidden]=\"description.valid || !submitted\" class=\"error\">\n        A description is required\n      </span>\n      </div>\n    </div>\n    <div class=\"form-group row\" *ngIf=\"study.initiator\">\n      <label class=\"col-md-2 col-form-label\">Initiator</label>\n      <div class=\"form-group col-md-10 row\">\n        <label class=\"col-md-2 col-form-label\">Name</label>\n\n        <div class=\"col-md-10\">\n          <input [(ngModel)]=\"study.initiator.name\" name=\"initiatorName\" type=\"text\" required #initiatorName=\"ngModel\" />\n        </div>\n      </div>\n      <div *ngFor=\"let ud of study.initiator.userDetails\" class=\"form-group offset-2 col-md-10 row\">\n        <label class=\"col-md-2 col-form-label\">{{ud.key}}</label>\n\n        <div class=\"col-md-10\">\n          <input [(ngModel)]=\"ud.value\" name=\"{{ud.value}}\" type=\"text\" required />\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2 col-form-label\">Collaborators</label>\n\n      <div *ngFor=\"let u of users\">\n        <label class=\"col-md-2 col-form-label\">\n          <input class=\"form-check-input\" type=\"checkbox\" (change)=\"updateCheckedCollaborators(u, $event)\" name=\"collaborators\">{{u.name}}\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2 col-form-label\">Acknowledgements</label>\n\n      <div class=\"col-md-10\">\n        <input [(ngModel)]=\"study.acknowledgements\" name=\"acknowledgements\" type=\"text\" required #acknowledgements=\"ngModel\" />\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      <button class=\"btn\" (click)=\"cancel()\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/studycatalog-add/studycatalog-add.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\n  border-color: red;\n}\n.error {\n  padding: 12px;\n  background-color: rgba(255, 0, 0, 0.2);\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/studycatalog-add/studycatalog-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudycatalogAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__study_service__ = __webpack_require__("../../../../../src/app/study.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudycatalogAddComponent = /** @class */ (function () {
    function StudycatalogAddComponent(studyService, router) {
        this.studyService = studyService;
        this.router = router;
        this.study = { name: '', description: '', acknowledgements: '', reference: '' };
        this.users = [];
        this.submitted = false;
    }
    StudycatalogAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studyService.getUser().subscribe(function (user) { return _this.study.initiator = user; });
        this.study.collaborators = [];
        this.studyService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    StudycatalogAddComponent.prototype.save = function () {
        var _this = this;
        this.submitted = true;
        if (!this.studyForm.invalid) {
            this.studyService.saveStudy(this.study).subscribe(function (response) {
                return _this.router.navigateByUrl('/');
            });
        }
    };
    StudycatalogAddComponent.prototype.updateCheckedCollaborators = function (user, event) {
        if (event.target.checked) {
            this.study.collaborators.push(user);
        }
    };
    StudycatalogAddComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('studyForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */])
    ], StudycatalogAddComponent.prototype, "studyForm", void 0);
    StudycatalogAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-studycatalog-add',
            template: __webpack_require__("../../../../../src/app/studycatalog-add/studycatalog-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/studycatalog-add/studycatalog-add.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__study_service__["a" /* StudyService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], StudycatalogAddComponent);
    return StudycatalogAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/studycatalog/studycatalog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!--<div class=\"col-md-2\">-->\n      <!--<div class=\"col-md-12 menu\">-->\n        <!--<div class=\"menutitle\">Facet Search</div>-->\n        <!--<div *ngFor=\"let element of elements\">-->\n          <!--<label>{{element.title}}</label>-->\n          <!--<div *ngFor=\"let sub of element.subElements\">-->\n            <!--<input type=\"checkbox\" [(ngModel)]=\"sub.checked\" (ngModelChange)=\"facetedSearch(element, sub)\"/>&nbsp;<span>{{sub.value}}</span>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n\n    <ul class=\"col-md-5 offset-md-3 studies\">\n      <p>Number of datasources: {{studies.length}}</p>\n      <div *ngFor=\"let s of studies\">\n        <li>{{s.name}}</li>\n        <span>{{s.description}}</span>\n      </div>\n    </ul>\n    <!--<div class=\"col-md-4 form-group search-bar\">-->\n      <!--<input class=\"rounded\" [(ngModel)]=\"searchTerm\" type=\"text\"/>-->\n      <!--<i *ngIf=\"searchTerm && searchTerm !== ''\" class=\"fa fa-times\" (click)=\"delete()\"></i>-->\n      <!--<button class=\"btn btn-primary\" (click)=\"search()\"><i class=\"fa fa-search\"></i></button>-->\n      <!--<button class=\"btn\" routerLink=\"/datacatalog/add\" *ngIf=\"user.isAdmin()\">Add datasource</button>-->\n    <!--</div>-->\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/studycatalog/studycatalog.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  border: 2px solid #007bff;\n  border-radius: 25px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.menu label {\n  font-size: larger;\n}\n.menu li {\n  list-style: none;\n}\n.menu .menutitle {\n  color: #007bff;\n  display: inline-block;\n  background: white none repeat scroll 0 0;\n  float: left;\n  margin-top: -30px;\n  margin-left: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.studies {\n  list-style: none;\n}\n.studies > div {\n  border: 2px solid #007bff;\n  border-radius: 25px;\n  padding: 15px;\n  margin-bottom: 10px;\n}\n.studies > div li {\n  border-bottom: 1px dashed grey;\n  font-size: larger;\n}\n.studies .location {\n  display: inline-block;\n}\n.studies .location:not(:first-child) {\n  margin-left: 5px;\n}\n.search-bar .fa-times {\n  margin-left: -25px;\n  margin-right: 8px;\n}\n.row {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.row:first-child {\n  margin: 35px 15px 15px 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/studycatalog/studycatalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudycatalogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__study_service__ = __webpack_require__("../../../../../src/app/study.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudycatalogComponent = /** @class */ (function () {
    function StudycatalogComponent(studyService) {
        this.studyService = studyService;
        this.studies = [];
        this.users = [];
    }
    StudycatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studyService.getStudies().subscribe(function (studies) { return _this.studies = studies; });
    };
    StudycatalogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-studycatalog',
            template: __webpack_require__("../../../../../src/app/studycatalog/studycatalog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/studycatalog/studycatalog.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__study_service__["a" /* StudyService */]])
    ], StudycatalogComponent);
    return StudycatalogComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map