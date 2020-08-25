function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: "projects",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | projects-projects-module */
        "projects-projects-module").then(__webpack_require__.bind(null,
        /*! ./projects/projects.module */
        "./src/app/projects/projects.module.ts")).then(function (m) {
          return m.ProjectsModule;
        });
      }
    }, {
      path: "**",
      redirectTo: "/"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["backToTop"];

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = "jakub-wisniowski";

        this.scrollToTop = function () {
          var button = _this.backToTop.nativeElement;
          button.classList.add("active");
          var c = document.documentElement.scrollTop || document.body.scrollTop;

          if (c > 0) {
            window.requestAnimationFrame(_this.scrollToTop);
            window.scrollTo(0, c - 30);
          } else {
            button.classList.remove("active");
            button.blur();
          }
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.backToTop = _t.first);
        }
      },
      decls: 6,
      vars: 0,
      consts: [[1, "footer"], ["id", "backToTop", "tabindex", "1", 3, "click"], ["backToTop", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All rights reserved. Jakub Wi\u015Bniowski 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() {
            return ctx.scrollToTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  clear: both;\n  font-size: 80%;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  margin-top: 40px;\n  margin-bottom: 0;\n  padding-bottom: 10px;\n}\n#backToTop[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 50px;\n  height: 50px;\n  background: url('paper-plane.png');\n  background-size: contain !important;\n  border: none;\n  outline: none;\n  z-index: 10;\n}\n#backToTop[_ngcontent-%COMP%]:hover, #backToTop[_ngcontent-%COMP%]:focus {\n  background: url('paper-plane-hover.png');\n}\n#backToTop.active[_ngcontent-%COMP%] {\n  -webkit-animation: fly 2s linear both;\n          animation: fly 2s linear both;\n  transform: translate3d(0, 0, 0);\n  background: url('paper-plane-flying.png');\n}\n@-webkit-keyframes fly {\n  10%, 50% {\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%, 40% {\n    transform: translate3d(-20px, 0, 0);\n  }\n  30% {\n    transform: translate3d(-30px, 0, 0);\n  }\n  60% {\n    transform: translate3d(0, 0, 0);\n  }\n  70%, 90% {\n    transform: translate3d(10px, 0, 0);\n  }\n  80% {\n    transform: translate3d(20px, 0, 0);\n  }\n}\n@keyframes fly {\n  10%, 50% {\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%, 40% {\n    transform: translate3d(-20px, 0, 0);\n  }\n  30% {\n    transform: translate3d(-30px, 0, 0);\n  }\n  60% {\n    transform: translate3d(0, 0, 0);\n  }\n  70%, 90% {\n    transform: translate3d(10px, 0, 0);\n  }\n  80% {\n    transform: translate3d(20px, 0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNIRjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0hKO0FET0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNKRjtBRE9BOztFQUVFLHdDQUFBO0FDSkY7QURPQTtFQUNFLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLHlDQUFBO0FDSkY7QURPQTtFQUNFO0lBRUUsbUNBQUE7RUNMRjtFRFFBO0lBRUUsbUNBQUE7RUNQRjtFRFVBO0lBQ0UsbUNBQUE7RUNSRjtFRFdBO0lBQ0UsK0JBQUE7RUNURjtFRFlBO0lBRUUsa0NBQUE7RUNYRjtFRGNBO0lBQ0Usa0NBQUE7RUNaRjtBQUNGO0FEZEE7RUFDRTtJQUVFLG1DQUFBO0VDTEY7RURRQTtJQUVFLG1DQUFBO0VDUEY7RURVQTtJQUNFLG1DQUFBO0VDUkY7RURXQTtJQUNFLCtCQUFBO0VDVEY7RURZQTtJQUVFLGtDQUFBO0VDWEY7RURjQTtJQUNFLGtDQUFBO0VDWkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9jb2xvcnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuXG4uZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNsZWFyOiBib3RoO1xuICBmb250LXNpemU6IDgwJTtcblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxufVxuXG4jYmFja1RvVG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJGltZ19wcmVmaXgrXCJpY29ucy9wYXBlci1wbGFuZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4jYmFja1RvVG9wOmhvdmVyLFxuI2JhY2tUb1RvcDpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHVybCgkaW1nX3ByZWZpeCtcImljb25zL3BhcGVyLXBsYW5lLWhvdmVyLnBuZ1wiKTtcbn1cblxuI2JhY2tUb1RvcC5hY3RpdmUge1xuICBhbmltYXRpb246IGZseSAycyBsaW5lYXIgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2dyb3VuZDogdXJsKCRpbWdfcHJlZml4K1wiaWNvbnMvcGFwZXItcGxhbmUtZmx5aW5nLnBuZ1wiKTtcbn1cblxuQGtleWZyYW1lcyBmbHkge1xuICAxMCUsXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gIH1cblxuICAyMCUsXG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjBweCwgMCwgMCk7XG4gIH1cblxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwcHgsIDAsIDApO1xuICB9XG5cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgNzAlLFxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjBweCwgMCwgMCk7XG4gIH1cbn1cbiIsIi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuLmZvb3RlciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4jYmFja1RvVG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGFwZXItcGxhbmUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxMDtcbn1cblxuI2JhY2tUb1RvcDpob3ZlcixcbiNiYWNrVG9Ub3A6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGFwZXItcGxhbmUtaG92ZXIucG5nXCIpO1xufVxuXG4jYmFja1RvVG9wLmFjdGl2ZSB7XG4gIGFuaW1hdGlvbjogZmx5IDJzIGxpbmVhciBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGFwZXItcGxhbmUtZmx5aW5nLnBuZ1wiKTtcbn1cblxuQGtleWZyYW1lcyBmbHkge1xuICAxMCUsIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gIH1cbiAgMjAlLCA0MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzBweCwgMCwgMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDcwJSwgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        backToTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["backToTop"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _shared_click_outside_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/click-outside.directive */
    "./src/app/shared/click-outside.directive.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"].forRoot(), _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_11__["ScullyLibModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _shared_click_outside_directive__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_11__["ScullyLibModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _shared_click_outside_directive__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"].forRoot(), _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_11__["ScullyLibModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_click_outside_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/click-outside.directive */
    "./src/app/shared/click-outside.directive.ts");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_185_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_189_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function HomeComponent_div_189_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Incorrect email address.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function HomeComponent_div_189_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_189_ng_container_1_Template, 2, 0, "ng-container", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_189_ng_container_2_Template, 2, 0, "ng-container", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.email);
      }
    }

    function HomeComponent_div_193_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Messages is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["projects/home-library"];
    };

    var _c1 = function _c1() {
      return ["projects/planets"];
    };

    var _c2 = function _c2() {
      return ["projects/AKN-web-app"];
    };

    var _c3 = function _c3() {
      return ["projects/AKN-mobile-app"];
    };

    var _c4 = function _c4() {
      return ["projects/RPN-calc"];
    };

    var _c5 = function _c5() {
      return ["projects/lego-app"];
    };

    var _c6 = function _c6() {
      return ["projects/mr-dumpling"];
    };

    var _c7 = function _c7() {
      return ["projects/climate-camp"];
    };

    var _c8 = function _c8(a0) {
      return {
        visible: a0
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(http, fb) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.fb = fb;
        this.isCollapsed = true;
        this.formSubmitted = false;
        this.form = this.fb.group({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
          message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          this.http.post("https://formspree.io/jakub.m.wisniowski@gmail.com", {
            name: this.form.controls.name.value,
            email: this.form.controls.email.value,
            message: "this.form.controls.message.value"
          }).subscribe(function (_) {
            _this2.formSubmitted = true;
            setTimeout(function () {
              _this2.formSubmitted = false;
            }, 3000);
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 198,
      vars: 27,
      consts: [[1, "content-wrapper"], [1, "page-header"], [1, "container", 3, "clickOutside"], ["type", "button", "aria-controls", "navigation", 1, "hamburger-menu", 3, "click"], ["width", "50", "src", "assets/images/icons/hamburger.png"], ["id", "navigation", 1, "navigation-small", 3, "collapse", "isAnimated"], ["href", "#about", 1, "navigation-link-small", 3, "click"], ["href", "#projects", 1, "navigation-link-small", 3, "click"], ["href", "#contact", 1, "navigation-link-small", 3, "click"], [1, "navigation"], ["href", "#about", 1, "navigation-link", "border-link"], ["href", "#projects", 1, "navigation-link", "border-link"], ["href", "#contact", 1, "navigation-link", "border-link"], [1, "banner"], [1, "banner_bg_opacity"], [1, "my_name"], [1, "my_places_center"], [1, "my_places"], ["href", "https://github.com/jakub-wisniowski", "data-tool-tip", "Github profile", "target", "-blank", 1, "shortcut_img"], ["src", "assets/images/icons/github.png", "alt", "Github profile"], ["href", "https://www.linkedin.com/in/jakub-m-wisniowski/", "data-tool-tip", "LinkedIn profile", "target", "-blank", 1, "shortcut_img"], ["src", "assets/images/icons/linkedin.png", "alt", "LinkedIn profile"], ["id", "about"], [1, "section-header"], ["id", "bio_wrap", 1, "container"], [1, "bio"], ["src", "assets/images/profile.jpeg", "alt", "Profile picture", 1, "profile_picture"], [1, "bio_text"], ["id", "projects"], [1, "container", "projects_container"], [1, "flex-wrapper"], [3, "routerLink"], [1, "project_image"], ["src", "assets/images/home-library/home-library-icon.png", "alt", "Home library project"], [1, "project_text"], [1, "card_title"], [1, "card_body"], ["src", "assets/images/planets/list-view.png", "alt", "Planets project"], ["src", "assets/images/AKN-web-app/modify-account.png", "alt", "AKN web project"], ["src", "assets/images/AKN-mobile-app/login-icon.png", "alt", "AKN mobile project"], [1, "tight", "vertical", 3, "routerLink"], ["src", "assets/images/RPN-calc/basic.png", "alt", "RPN project"], ["src", "assets/images/lego-app/project-view.png", "alt", "LEGO project"], ["src", "assets/images/mr-dumpling/menu.png", "alt", "Thesis project"], ["src", "assets/images/climate-camp/menu.png", "alt", "Climate camp project"], ["id", "contact"], [1, "contact_opacity"], [1, "container"], [1, "row"], [1, "instruction"], ["href", "mailto:jakub.m.wisniowski@gmail.com", "data-tool-tip", "open in your email client", 1, "border-link"], ["id", "contact-form", 1, "col", "col-12", 3, "formGroup", "ngSubmit"], ["for", "name"], ["id", "name", "name", "name", "placeholder", "Name", "type", "text", "formControlName", "name", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "email"], ["id", "email", "name", "email", "placeholder", "Email", "type", "email", "formControlName", "email", 1, "form-control"], ["for", "message"], ["id", "message", "name", "message", "placeholder", "Message", "rows", "5", "formControlName", "message", 1, "form-control"], ["id", "send-button", "type", "submit", 1, "btn", "btn-default", "pull-right", 3, "disabled"], ["id", "thank-you-message", 3, "ngClass"], [1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function HomeComponent_Template_div_clickOutside_2_listener() {
            return ctx.isCollapsed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_3_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_8_listener() {
            return ctx.isCollapsed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ABOUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_11_listener() {
            return ctx.isCollapsed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PROJECTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_14_listener() {
            return ctx.isCollapsed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CONTACT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ABOUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "PROJECTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CONTACT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "JAKUB WI\u015ANIOWSKI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "JUNIOR FRONT-END DEVELOPER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "About me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " I am a Junior Frontend Developer. I graduated from Computer Science at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Poznan University of\xA0Technology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " in February 2019. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " I'm looking for junior level frontend or\xA0fullstack positions. Right now, I'm working mainly in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Angular2+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Flutter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ". In my everyday work I use both Dart and Typescript. I write and maintain unit and e2e tests. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " As a Computer Science Bachelor, I have a basic understanding of\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Kotlin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " and\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "C#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Foreign languages are my passion, I've been studying ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "English");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " at Adam Mickiewicz University, I also speak ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "French");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, ". I translate texts for activist purposes in my spare time. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Home library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Angular\xA0SailsJS\xA0MongoDB ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Planets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Angular\xA0CSS3\xA0Bootstrap ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "AKN webapp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Angular\xA0SailsJS\xA0MongoDB ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "AKN mobile app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Ionic2\xA0HTML5\xA0CSS3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "RPN calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Kotlin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "SQLite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Lego app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Kotlin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "SQLite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Mr Dumpling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Unity\xA0C#\xA0Google\xA0Play ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Climate Camp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Flutter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Dart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Firebase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "section", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Contact me via the form below or send an email to the following address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "jakub.m.wisniowski@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "form", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_181_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](185, HomeComponent_div_185_Template, 2, 0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](189, HomeComponent_div_189_Template, 3, 2, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Your message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "textarea", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](193, HomeComponent_div_193_Template, 2, 0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Send ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Thanks for contacting me! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isCollapsed)("isAnimated", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.name.touched && ctx.f.name.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.email.touched && ctx.f.email.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.message.touched && ctx.f.message.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c8, ctx.formSubmitted));
        }
      },
      directives: [_shared_click_outside_directive__WEBPACK_IMPORTED_MODULE_3__["ClickOutsideDirective"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      styles: [".border-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n.border-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -6px;\n  left: 0;\n  right: 0;\n  height: 2em;\n  transition: transform ease-out 250ms;\n  border-top: 1px solid #474507;\n  border-bottom: 1px solid #474507;\n  transform: scale(0, 1);\n}\n.border-link[_ngcontent-%COMP%]:hover::before, .border-link[_ngcontent-%COMP%]:focus::before {\n  transform: scale(1, 1);\n}\n.border-link[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: black;\n  text-decoration: none;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  opacity: 0.8;\n  background: #00abca;\n  z-index: 1;\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  cursor: pointer;\n  background-size: cover;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  top: 80px;\n  right: 30px;\n  background-color: #f9f9f9;\n  min-width: 250px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  opacity: 0.99;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 0;\n  background: #00abca;\n  border: 2px solid black;\n  border-bottom: 1px solid black;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 15px 5px;\n  font-size: 120%;\n  border-bottom: 1px solid black;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #00abca;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 30px 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  border-top: 2px solid #474507 !important;\n  border-bottom: 2px solid #474507 !important;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n@media only screen and (max-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.section-header[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  text-transform: uppercase;\n  display: inline-block;\n  white-space: nowrap;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n  height: 100px;\n  line-height: 100px;\n}\n.section-header[_ngcontent-%COMP%]::after, .section-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  display: block;\n  width: 100%;\n  top: 0;\n}\n.section-header[_ngcontent-%COMP%]::before {\n  z-index: -2;\n  background-color: white;\n}\n.section-header[_ngcontent-%COMP%]::after {\n  z-index: -1;\n  background-color: #00abca;\n}\nsection[_ngcontent-%COMP%] {\n  clear: both;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.banner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n.banner[_ngcontent-%COMP%]   .banner_bg_opacity[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  background-image: url('banner.png');\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n}\n.banner[_ngcontent-%COMP%]   .my_name[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin: 0;\n  padding: 50vh 50px;\n  bottom: 140px;\n}\n.banner[_ngcontent-%COMP%]   .my_places[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  text-align: center;\n  margin: 0 auto;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.banner[_ngcontent-%COMP%]   .shortcut_img[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  padding: 8px;\n  height: 62px;\n  width: 62px;\n}\n.banner[_ngcontent-%COMP%]   .shortcut_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.banner[_ngcontent-%COMP%]   .shortcut_img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n@media only screen and (max-width: 1300px) {\n  .banner[_ngcontent-%COMP%]   .shortcut_img[_ngcontent-%COMP%] {\n    transform: scale(0.9);\n  }\n  .banner[_ngcontent-%COMP%]   .shortcut_img[_ngcontent-%COMP%]:hover {\n    transform: scale(1);\n  }\n}\n@media only screen and (max-width: 1100px) {\n  .banner[_ngcontent-%COMP%]   .shortcut_img[_ngcontent-%COMP%] {\n    transform: scale(0.85);\n  }\n  .banner[_ngcontent-%COMP%]   .shortcut_img[_ngcontent-%COMP%]:hover {\n    transform: scale(0.95);\n  }\n}\n@media only screen and (max-width: 700px) {\n  .banner[_ngcontent-%COMP%]   .shortcut_img[_ngcontent-%COMP%] {\n    transform: scale(0.75);\n  }\n  .banner[_ngcontent-%COMP%]   .shortcut_img[_ngcontent-%COMP%]:hover {\n    transform: scale(0.85);\n  }\n}\n@media only screen and (max-width: 480px) {\n  .banner[_ngcontent-%COMP%]   .shortcut_img[_ngcontent-%COMP%] {\n    transform: scale(0.65);\n  }\n  .banner[_ngcontent-%COMP%]   .shortcut_img[_ngcontent-%COMP%]:hover {\n    transform: scale(0.75);\n  }\n}\n.banner[_ngcontent-%COMP%]   .my_places_center[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  bottom: 60px;\n}\n@media only screen and (max-width: 1300px) {\n  .banner[_ngcontent-%COMP%]   .my_places_center[_ngcontent-%COMP%] {\n    bottom: 75px;\n  }\n}\n@media only screen and (max-width: 1100px) {\n  .banner[_ngcontent-%COMP%]   .my_places_center[_ngcontent-%COMP%] {\n    bottom: 75px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .banner[_ngcontent-%COMP%]   .my_places_center[_ngcontent-%COMP%] {\n    bottom: 50px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .banner[_ngcontent-%COMP%]   .my_places_center[_ngcontent-%COMP%] {\n    bottom: 45px;\n  }\n}\n#bio_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 50px 0;\n}\n#bio_wrap[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  width: 40%;\n}\n#bio_wrap[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]    + .bio[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 60%;\n}\n#bio_wrap[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]    + .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.profile_picture[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  margin-right: 1em;\n  border: 7px solid #00abca;\n}\n.instruction[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 50px;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n  flex-direction: row;\n}\n@media only screen and (max-width: 1200px) {\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.projects_container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  padding: 50px 0;\n}\n@media only screen and (max-width: 750px) {\n  .projects_container[_ngcontent-%COMP%] {\n    flex-flow: column wrap;\n  }\n}\n.projects_container[_ngcontent-%COMP%]   .flex-wrapper[_ngcontent-%COMP%] {\n  min-width: 50%;\n}\n.projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  background: #00abca;\n  max-width: 300px;\n  cursor: pointer;\n  margin: 20px auto;\n}\n.projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .project_text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  opacity: 0;\n  color: white;\n  transform: translate(-50%, -50%);\n  transition: opacity ease-out 250ms;\n}\n.projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card_title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0;\n}\n.projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card_body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .project_text[_ngcontent-%COMP%], .projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus   .project_text[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .project_image[_ngcontent-%COMP%], .projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus   .project_image[_ngcontent-%COMP%] {\n  opacity: 0.1;\n}\n.projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after, .projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 1.25em;\n  bottom: 1.25em;\n  left: 1.25em;\n  right: 1.25em;\n  transition: transform ease-out 250ms;\n}\n.projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n  transform: scale(0, 1);\n}\n.projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  transform: scale(1, 0);\n}\n.projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after, .projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus::after {\n  transform: scale(1.05, 1);\n}\n.projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before, .projects_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus::before {\n  transform: scale(1, 1.05);\n}\n.projects_container[_ngcontent-%COMP%]   .project_image[_ngcontent-%COMP%] {\n  display: block;\n  border: 5px solid #00abca;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.projects_container[_ngcontent-%COMP%]   .project_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.projects_container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n#contact[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 700px;\n  margin: 0;\n  padding: 0;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 0 10%;\n  margin-top: 2%;\n  opacity: 0.9;\n  display: flex;\n  flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n#contact[_ngcontent-%COMP%]   .contact_opacity[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  background-image: url('keyboard.jpg');\n  width: 100%;\n  height: 100%;\n  top: 70px;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  z-index: -1;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  color: red;\n  text-align: left;\n  padding: 0 0 10px 0;\n  font-weight: bold;\n}\n#thank-you-message[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 5px;\n  margin: 20px 20%;\n  font-weight: 600;\n  border: 2px solid #00abca;\n  padding: 10px;\n  background: white;\n  opacity: 0;\n  transition: opacity 300ms cubic-bezier(0.6, -0.28, 0.735, 0.045);\n}\n#thank-you-message.visible[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n@media screen and (max-width: 650px) {\n  .bio[_ngcontent-%COMP%] {\n    clear: both;\n    width: 100% !important;\n    text-align: center !important;\n    padding: 5%;\n    font-size: 25px;\n  }\n\n  .bio_text[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n\n  form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n    font-size: 20px;\n  }\n\n  form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n    font-size: 20px;\n  }\n\n  form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n    font-size: 20px;\n  }\n\n  form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2JvcmRlci1saW5rLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbnRlbnQtd3JhcHBlci5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fcGFnZS1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fc2VjdGlvbi1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX3NlY3Rpb24uc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUNESjtBREVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FDQU47QURHSTtFQUVFLHNCQUFBO0FDRk47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QTtBTnlJSjtBTXJJQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLHNCQUFBO0lBQ0EsNkJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFTndJRjs7RU10SUE7SUFDRSxjQUFBO0VOeUlGOztFTXRJRTtJQUNFLGVBQUE7RU55SUo7O0VNMUlFO0lBQ0UsZUFBQTtFTnlJSjs7RU0xSUU7SUFDRSxlQUFBO0VOeUlKOztFTTFJRTtJQUNFLGVBQUE7RU55SUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vY29sb3JzJztcblxuLmJvcmRlci1saW5rIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC02cHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLW91dCAyNTBtcztcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG4gICAgfVxuICBcbiAgICAmOmhvdmVyOjpiZWZvcmUsXG4gICAgJjpmb2N1czo6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgfVxuICBcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9IiwiLmJvcmRlci1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJvcmRlci1saW5rOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMmVtO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMjUwbXM7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDc0NTA3O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ3NDUwNztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbn1cbi5ib3JkZXItbGluazpob3Zlcjo6YmVmb3JlLCAuYm9yZGVyLWxpbms6Zm9jdXM6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG59XG4uYm9yZGVyLWxpbms6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMC44O1xuICBiYWNrZ3JvdW5kOiAjMDBhYmNhO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wYWdlLWhlYWRlciAuaGFtYnVyZ2VyLW1lbnUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcbiAgLnBhZ2UtaGVhZGVyIC5oYW1idXJnZXItbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDAuOTk7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDBhYmNhO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpIHtcbiAgcGFkZGluZzogMTVweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwYWJjYTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiBsaSBhOjpiZWZvcmUge1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzQ3NDUwNyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ3NDUwNyAhaW1wb3J0YW50O1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uIGxpIGE6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbn1cbi5zZWN0aW9uLWhlYWRlcjo6YWZ0ZXIsIC5zZWN0aW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xufVxuLnNlY3Rpb24taGVhZGVyOjpiZWZvcmUge1xuICB6LWluZGV4OiAtMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc2VjdGlvbi1oZWFkZXI6OmFmdGVyIHtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFiY2E7XG59XG5cbnNlY3Rpb24ge1xuICBjbGVhcjogYm90aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuc2VjdGlvbiAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuc2VjdGlvbiBoMyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5iYW5uZXIgLmJhbm5lcl9iZ19vcGFjaXR5IHtcbiAgb3BhY2l0eTogMC4zO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9iYW5uZXIucG5nXCIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5iYW5uZXIgLm15X25hbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1MHZoIDUwcHg7XG4gIGJvdHRvbTogMTQwcHg7XG59XG4uYmFubmVyIC5teV9wbGFjZXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmJhbm5lciAuc2hvcnRjdXRfaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDhweDtcbiAgaGVpZ2h0OiA2MnB4O1xuICB3aWR0aDogNjJweDtcbn1cbi5iYW5uZXIgLnNob3J0Y3V0X2ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmJhbm5lciAuc2hvcnRjdXRfaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLmJhbm5lciAuc2hvcnRjdXRfaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbiAgLmJhbm5lciAuc2hvcnRjdXRfaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuYmFubmVyIC5zaG9ydGN1dF9pbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIH1cbiAgLmJhbm5lciAuc2hvcnRjdXRfaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5iYW5uZXIgLnNob3J0Y3V0X2ltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgfVxuICAuYmFubmVyIC5zaG9ydGN1dF9pbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmJhbm5lciAuc2hvcnRjdXRfaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpO1xuICB9XG4gIC5iYW5uZXIgLnNob3J0Y3V0X2ltZzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgfVxufVxuLmJhbm5lciAubXlfcGxhY2VzX2NlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm90dG9tOiA2MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLmJhbm5lciAubXlfcGxhY2VzX2NlbnRlciB7XG4gICAgYm90dG9tOiA3NXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuYmFubmVyIC5teV9wbGFjZXNfY2VudGVyIHtcbiAgICBib3R0b206IDc1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmJhbm5lciAubXlfcGxhY2VzX2NlbnRlciB7XG4gICAgYm90dG9tOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5iYW5uZXIgLm15X3BsYWNlc19jZW50ZXIge1xuICAgIGJvdHRvbTogNDVweDtcbiAgfVxufVxuXG4jYmlvX3dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cbiNiaW9fd3JhcCAuYmlvIHtcbiAgd2lkdGg6IDQwJTtcbn1cbiNiaW9fd3JhcCAuYmlvICsgLmJpbyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA2MCU7XG59XG4jYmlvX3dyYXAgLmJpbyArIC5iaW8gcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5wcm9maWxlX3BpY3R1cmUge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGJvcmRlcjogN3B4IHNvbGlkICMwMGFiY2E7XG59XG5cbi5pbnN0cnVjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLnByb2plY3RzX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5wcm9qZWN0c19jb250YWluZXIge1xuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gIH1cbn1cbi5wcm9qZWN0c19jb250YWluZXIgLmZsZXgtd3JhcHBlciB7XG4gIG1pbi13aWR0aDogNTAlO1xufVxuLnByb2plY3RzX2NvbnRhaW5lciBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzAwYWJjYTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cbi5wcm9qZWN0c19jb250YWluZXIgYSAucHJvamVjdF90ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2Utb3V0IDI1MG1zO1xufVxuLnByb2plY3RzX2NvbnRhaW5lciBhIC5jYXJkX3RpdGxlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnByb2plY3RzX2NvbnRhaW5lciBhIC5jYXJkX2JvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvamVjdHNfY29udGFpbmVyIGE6aG92ZXIgLnByb2plY3RfdGV4dCwgLnByb2plY3RzX2NvbnRhaW5lciBhOmZvY3VzIC5wcm9qZWN0X3RleHQge1xuICBvcGFjaXR5OiAxO1xufVxuLnByb2plY3RzX2NvbnRhaW5lciBhOmhvdmVyIC5wcm9qZWN0X2ltYWdlLCAucHJvamVjdHNfY29udGFpbmVyIGE6Zm9jdXMgLnByb2plY3RfaW1hZ2Uge1xuICBvcGFjaXR5OiAwLjE7XG59XG4ucHJvamVjdHNfY29udGFpbmVyIGE6OmFmdGVyLCAucHJvamVjdHNfY29udGFpbmVyIGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjI1ZW07XG4gIGJvdHRvbTogMS4yNWVtO1xuICBsZWZ0OiAxLjI1ZW07XG4gIHJpZ2h0OiAxLjI1ZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLW91dCAyNTBtcztcbn1cbi5wcm9qZWN0c19jb250YWluZXIgYTo6YWZ0ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbn1cbi5wcm9qZWN0c19jb250YWluZXIgYTo6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG59XG4ucHJvamVjdHNfY29udGFpbmVyIGE6aG92ZXI6OmFmdGVyLCAucHJvamVjdHNfY29udGFpbmVyIGE6Zm9jdXM6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxKTtcbn1cbi5wcm9qZWN0c19jb250YWluZXIgYTpob3Zlcjo6YmVmb3JlLCAucHJvamVjdHNfY29udGFpbmVyIGE6Zm9jdXM6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMS4wNSk7XG59XG4ucHJvamVjdHNfY29udGFpbmVyIC5wcm9qZWN0X2ltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMGFiY2E7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvamVjdHNfY29udGFpbmVyIC5wcm9qZWN0X2ltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5wcm9qZWN0c19jb250YWluZXIgLnZlcnRpY2FsIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuI2NvbnRhY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4jY29udGFjdCBmb3JtIHtcbiAgcGFkZGluZzogMCAxMCU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBvcGFjaXR5OiAwLjk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jY29udGFjdCBmb3JtIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG59XG4jY29udGFjdCBmb3JtIC5mb3JtLWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuI2NvbnRhY3QgLmNvbnRhY3Rfb3BhY2l0eSB7XG4gIG9wYWNpdHk6IDAuMztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQva2V5Ym9hcmQuanBnXCIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDcwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdGhhbmsteW91LW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAyMHB4IDIwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwYWJjYTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNiwgLTAuMjgsIDAuNzM1LCAwLjA0NSk7XG59XG4jdGhhbmsteW91LW1lc3NhZ2UudmlzaWJsZSB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLmJpbyB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICAuYmlvX3RleHQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG5cbiAgZm9ybSA6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn0iLCIuY29udGVudC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuXG4ucGFnZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDMwcHg7XG4gICAgICByaWdodDogMzBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmF2aWdhdGlvbi1zbWFsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDgwcHg7XG4gICAgICByaWdodDogMzBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBvcGFjaXR5OiAwLjk5O1xuICBcbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIFxuICAgICAgICBsaSB7XG4gICAgICAgICAgcGFkZGluZzogMTVweCA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMjAlO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmF2aWdhdGlvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMzAlO1xuICBcbiAgICAgICAgYSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRsaWdodC1ncmV5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWdyZXkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH0iLCIkYmx1ZTogIzAwYWJjYTtcbiRsaWdodC1ncmV5OiByZ2IoNzEsIDY5LCA3KTtcbiR5ZWxsb3c6ICNmOWY4NzE7XG4iLCIuc2VjdGlvbi1oZWFkZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICBcbiAgICAmOjphZnRlcixcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICBcbiAgICAmOjpiZWZvcmUge1xuICAgICAgei1pbmRleDogLTI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIFxuICAgICY6OmFmdGVyIHtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgfVxuICB9Iiwic2VjdGlvbiB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvc3R5bGVzXCI7XG5cbi5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgLmJhbm5lcl9iZ19vcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWdfcHJlZml4ICsgXCJiYWNrZ3JvdW5kL2Jhbm5lci5wbmdcIik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAubXlfbmFtZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNTB2aCA1MHB4O1xuICAgIGJvdHRvbTogMTQwcHg7XG4gIH1cblxuICAubXlfcGxhY2VzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuXG4gIC5zaG9ydGN1dF9pbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGhlaWdodDogNjJweDtcbiAgICB3aWR0aDogNjJweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY1KTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5teV9wbGFjZXNfY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvdHRvbTogNjBweDtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgICBib3R0b206IDc1cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAgIGJvdHRvbTogNzVweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICBib3R0b206IDUwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgYm90dG9tOiA0NXB4O1xuICAgIH1cbiAgfVxufVxuXG4jYmlvX3dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHggMDtcblxuICAuYmlvIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG5cbiAgLmJpbyArIC5iaW8ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDYwJTtcblxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gIH1cbn1cblxuLnByb2ZpbGVfcGljdHVyZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgYm9yZGVyOiA3cHggc29saWQgJGJsdWU7XG59XG5cbi5pbnN0cnVjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi5wcm9qZWN0c19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogNTBweCAwO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICB9XG5cbiAgLmZsZXgtd3JhcHBlciB7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gIH1cblxuICBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG5cbiAgICAucHJvamVjdF90ZXh0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLW91dCAyNTBtcztcbiAgICB9XG5cbiAgICAuY2FyZF90aXRsZSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5jYXJkX2JvZHkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICY6aG92ZXIgLnByb2plY3RfdGV4dCxcbiAgICAmOmZvY3VzIC5wcm9qZWN0X3RleHQge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIC5wcm9qZWN0X2ltYWdlLFxuICAgICY6Zm9jdXMgLnByb2plY3RfaW1hZ2Uge1xuICAgICAgb3BhY2l0eTogMC4xO1xuICAgIH1cblxuICAgICY6OmFmdGVyLFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxLjI1ZW07XG4gICAgICBib3R0b206IDEuMjVlbTtcbiAgICAgIGxlZnQ6IDEuMjVlbTtcbiAgICAgIHJpZ2h0OiAxLjI1ZW07XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMjUwbXM7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgICB9XG5cbiAgICAmOmhvdmVyOjphZnRlcixcbiAgICAmOmZvY3VzOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEpO1xuICAgIH1cblxuICAgICY6aG92ZXI6OmJlZm9yZSxcbiAgICAmOmZvY3VzOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjA1KTtcbiAgICB9XG4gIH1cblxuICAucHJvamVjdF9pbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiA1cHggc29saWQgJGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAudmVydGljYWwge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbn1cblxuI2NvbnRhY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvcm0ge1xuICAgIHBhZGRpbmc6IDAgMTAlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBsYWJlbCB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBtYXJnaW46IC0xcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgfVxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cblxuICAuY29udGFjdF9vcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWdfcHJlZml4ICsgXCJiYWNrZ3JvdW5kL2tleWJvYXJkLmpwZ1wiKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiA3MHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdGhhbmsteW91LW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAyMHB4IDIwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAycHggc29saWQgJGJsdWU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjYsIC0wLjI4LCAwLjczNSwgMC4wNDUpO1xuXG4gICYudmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5iaW8ge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNSU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG4gIC5iaW9fdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgZm9ybSB7XG4gICAgOjpwbGFjZWhvbGRlciB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-home",
          templateUrl: "./home.component.html",
          styleUrls: ["./home.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/click-outside.directive.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/click-outside.directive.ts ***!
    \***************************************************/

  /*! exports provided: ClickOutsideDirective */

  /***/
  function srcAppSharedClickOutsideDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function () {
      return ClickOutsideDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClickOutsideDirective =
    /*#__PURE__*/
    function () {
      function ClickOutsideDirective(_elementRef) {
        _classCallCheck(this, ClickOutsideDirective);

        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ClickOutsideDirective, [{
        key: "onClick",
        value: function onClick(targetElement) {
          var clickedInside = this._elementRef.nativeElement.contains(targetElement);

          if (!clickedInside) {
            this.clickOutside.emit(true);
          }
        }
      }]);

      return ClickOutsideDirective;
    }();

    ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
      return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClickOutsideDirective,
      selectors: [["", "clickOutside", ""]],
      hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      outputs: {
        clickOutside: "clickOutside"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[clickOutside]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        clickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event.target']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/rooter/Projects/Portfolio/old-jakub-wisniowski.github.io/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map