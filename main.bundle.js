webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-root/app-root.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app-root/app-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppRootComponent = (function () {
    function AppRootComponent() {
    }
    AppRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app-root/app-root.component.html")
        })
    ], AppRootComponent);
    return AppRootComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_root_app_root_component__ = __webpack_require__("./src/app/app-root/app-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_shared_components__ = __webpack_require__("./src/app/shared/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_shared_services__ = __webpack_require__("./src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_core_routes__ = __webpack_require__("./src/app/core/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_shared_directives_detail_row_directive__ = __webpack_require__("./src/app/shared/directives/detail-row.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Angular Material







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_app_root_app_root_component__["a" /* AppRootComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_shared_components__["a" /* PersonEditFormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_shared_directives_detail_row_directive__["a" /* CdkDetailRowDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_core_routes__["a" /* appRoutes */]),
                // Angular Material
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatIconModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__app_shared_services__["a" /* PersonService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_app_root_app_root_component__["a" /* AppRootComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");

var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__app_home_home_component__["a" /* HomeComponent */] },
    // Wildcard route
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Home</h1>\r\n\r\n<!--<app-person-edit-form [(person)]=\"selectedItem\"></app-person-edit-form>-->\r\n\r\n<!-- Working Expandable rows -->\r\n<!-- https://stackblitz.com/edit/angular-material2-issue-qatslc -->\r\n\r\n<button mat-raised-button color=\"accent\" (click)=\"addItem()\">Add</button>\r\n\r\n<mat-table #table [dataSource]=\"sortedItems\" matSort (matSortChange)=\"sortData($event)\">\r\n\r\n  <ng-container matColumnDef=\"fullName\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header=\"Name\">Name</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let item\">\r\n      <span class=\"open-icon\"><i class=\"fa fa-chevron-down\"></i> </span>\r\n      <span class=\"close-icon\"><i class=\"fa fa-chevron-up\"></i> </span>\r\n     {{item.FirstName}} {{ item.LastName }}\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n\r\n  <ng-container matColumnDef=\"address\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header=\"Address\">Address</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let item\">\r\n      {{item.Address1}}{{ item.Address2 ? ' ' + item.Address2: '' }}, {{item.City}} {{item.State}} {{item.ZipCode}}\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"phoneNumber\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header=\"PhoneNumber\">Phone</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let item\">\r\n      {{item.PhoneNumber}}\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"emailAddress\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header=\"EmailAddress\">Email</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let item\">\r\n      {{item.EmailAddress}}\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n           matRipple\r\n           class=\"element-row\"\r\n           [cdkDetailRow]=\"row\"\r\n           [cdkDetailRowTpl]=\"expandedTemplate\"\r\n           [cdkSortEvent]=\"sortEvent\"\r\n           tabindex=\"0\"></mat-row>\r\n</mat-table>\r\n\r\n<!-- Detail Template -->\r\n<ng-template #expandedTemplate let-item>\r\n  <div class=\"mat-row expanded-row\" [@detailExpand] style=\"overflow: hidden;\">\r\n    <app-person-edit-form [person]=\"item\"></app-person-edit-form>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shared_services__ = __webpack_require__("./src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(personService) {
        this.personService = personService;
        this.people = [];
        this.sortEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.displayedColumns = ['fullName', 'address', 'phoneNumber', 'emailAddress'];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.people = this.personService.getPeople();
        this.sortedItems = this.people.slice();
    };
    HomeComponent.prototype.addItem = function () {
        this.showEditForm = true;
        this.selectedItem = {
            FirstName: '',
            LastName: '',
            DateOfBirth: null,
            Address1: '',
            Address2: '',
            City: '',
            State: '',
            ZipCode: '',
            PhoneNumber: '',
            EmailAddress: '',
        };
    };
    HomeComponent.prototype.sortData = function (sort) {
        var _this = this;
        this.sortEvent.emit(true);
        var data = this.people.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedItems = data;
            return;
        }
        this.sortedItems = data.sort(function (a, b) {
            var isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'Name': return _this.compare(a.FirstName, b.FirstName, isAsc);
                case 'Address': return _this.compare(a.Address1, b.Address1, isAsc);
                case 'PhoneNumber': return _this.compare(a.PhoneNumber, b.PhoneNumber, isAsc);
                case 'EmailAddress': return _this.compare(a.EmailAddress, b.EmailAddress, isAsc);
                default: return 0;
            }
        });
    };
    HomeComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* trigger */])('detailExpand', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ height: '*', visibility: 'visible' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* transition */])('void <=> *', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_shared_services__["a" /* PersonService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_edit_form_person_edit_form_component__ = __webpack_require__("./src/app/shared/components/person-edit-form/person-edit-form.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__person_edit_form_person_edit_form_component__["a"]; });



/***/ }),

/***/ "./src/app/shared/components/person-edit-form/person-edit-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"First Name\" name=\"firstName\" required [(ngModel)]=\"person.FirstName\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Last Name\" name=\"lastName\" required [(ngModel)]=\"person.LastName\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" type=\"email\" name=\"emailAddress\" required [(ngModel)]=\"person.EmailAddress\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Phone Number\" type=\"tel\" name=\"phoneNumber\" required [(ngModel)]=\"person.PhoneNumber\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Date of Birth\" name=\"dateOfBirth\" required [(ngModel)]=\"person.DateOfBirth\" [matDatepicker]=\"dateOfBirthDatePicker\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"dateOfBirthDatePicker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #dateOfBirthDatePicker></mat-datepicker>\r\n  </mat-form-field>\r\n\r\n\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Address 1\" name=\"address1\" required [(ngModel)]=\"person.Address1\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Address 2\" name=\"address2\" [(ngModel)]=\"person.Address2\">\r\n  </mat-form-field>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"City\" name=\"city\" required [(ngModel)]=\"person.City\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"State\" #state name=\"state\" required maxlength=\"2\" [(ngModel)]=\"person.State\">\r\n        <mat-hint align=\"end\">{{state.value.length}} / 2</mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Zip Code\" type=\"tel\" #zipCode name=\"zipCode\" required maxlength=\"5\" [(ngModel)]=\"person.ZipCode\">\r\n        <mat-hint align=\"end\">{{zipCode.value.length}} / 5</mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"text-right pt-3\">\r\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/shared/components/person-edit-form/person-edit-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonEditFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonEditFormComponent = (function () {
    function PersonEditFormComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], PersonEditFormComponent.prototype, "person", void 0);
    PersonEditFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-person-edit-form',
            template: __webpack_require__("./src/app/shared/components/person-edit-form/person-edit-form.component.html")
        })
    ], PersonEditFormComponent);
    return PersonEditFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/detail-row.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdkDetailRowDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CdkDetailRowDirective = (function () {
    function CdkDetailRowDirective(vcRef) {
        this.vcRef = vcRef;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    Object.defineProperty(CdkDetailRowDirective.prototype, "expended", {
        get: function () {
            return this.opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDetailRowDirective.prototype, "cdkDetailRow", {
        set: function (value) {
            if (value !== this.row) {
                this.row = __WEBPACK_IMPORTED_MODULE_0_lodash__["clone"](value);
                this.cachedRow = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDetailRowDirective.prototype, "template", {
        set: function (value) {
            if (value !== this.tRef) {
                this.tRef = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    CdkDetailRowDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.cdkSortEvent) {
            this.cdkSortEvent.takeUntil(this.ngUnsubscribe).subscribe(function () {
                if (_this.opened) {
                    _this.toggle();
                }
            });
        }
    };
    CdkDetailRowDirective.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    CdkDetailRowDirective.prototype.onClick = function () {
        this.toggle();
    };
    CdkDetailRowDirective.prototype.onKeyPress = function (event) {
        var keyCode = event.keyCode;
        // Allow:  Escape, Enter
        if ([27, 13].indexOf(keyCode) !== -1) {
            this.toggle();
        }
    };
    CdkDetailRowDirective.prototype.toggle = function () {
        if (this.opened) {
            this.vcRef.clear();
            this.row = __WEBPACK_IMPORTED_MODULE_0_lodash__["clone"](this.cachedRow);
        }
        else {
            this.render();
        }
        this.opened = this.vcRef.length > 0;
    };
    CdkDetailRowDirective.prototype.render = function () {
        this.vcRef.clear();
        if (this.tRef && this.row) {
            this.vcRef.createEmbeddedView(this.tRef, { $implicit: this.row });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('cdkSortEvent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */])
    ], CdkDetailRowDirective.prototype, "cdkSortEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* HostBinding */])('class.expanded'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], CdkDetailRowDirective.prototype, "expended", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CdkDetailRowDirective.prototype, "cdkDetailRow", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('cdkDetailRowTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* TemplateRef */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* TemplateRef */]])
    ], CdkDetailRowDirective.prototype, "template", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CdkDetailRowDirective.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* HostListener */])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CdkDetailRowDirective.prototype, "onKeyPress", null);
    CdkDetailRowDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */])({
            selector: '[cdkDetailRow]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */]])
    ], CdkDetailRowDirective);
    return CdkDetailRowDirective;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_service__ = __webpack_require__("./src/app/shared/services/person.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__person_service__["a"]; });



/***/ }),

/***/ "./src/app/shared/services/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonService = (function () {
    function PersonService() {
        this.firstNames = ['David', 'John', 'Charley', 'Michael', 'Rosalie', 'Daniel', 'Natalie', 'Thomas', 'Therese', 'Maria', 'Sarah'];
        this.lastNames = ['Bezemek', 'Politis', 'Franzmeier', 'Stodola', 'Kay', 'VanLinn', 'Carini', 'Mallet', 'Bowholtz', 'Meyers', 'Whittet'];
    }
    PersonService.prototype.getPeople = function () {
        var totalPeople = this.getRandomNumber(15, 25);
        var people = [];
        for (var i = 0; i < totalPeople; i++) {
            var firstName = this.firstNames[this.getRandomNumber(0, this.firstNames.length - 1)];
            var lastName = this.lastNames[this.getRandomNumber(0, this.lastNames.length - 1)];
            var person = {
                FirstName: firstName,
                LastName: lastName,
                DateOfBirth: this.getRandomDay(),
                Address1: this.getRandomNumber(1000, 4000) + ' Center St.',
                Address2: '',
                City: 'Minneapolis',
                State: 'MN',
                ZipCode: '' + this.getRandomNumber(55100, 55200),
                PhoneNumber: '651-' + this.getRandomNumber(300, 900) + '-' + this.getRandomNumber(1000, 9000),
                EmailAddress: firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@gmail.com'
            };
            people.push(person);
        }
        return people;
    };
    PersonService.prototype.getRandomNumber = function (min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    };
    PersonService.prototype.getRandomDay = function () {
        var day = new Date();
        day.setFullYear(this.getRandomNumber(1950, 1995), this.getRandomNumber(1, 11), this.getRandomNumber(1, 28));
        return day;
    };
    PersonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map