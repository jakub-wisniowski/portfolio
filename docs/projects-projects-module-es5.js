function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"], {
  /***/
  "./src/app/projects/project/project.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/projects/project/project.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppProjectsProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/components/gallery/gallery.component */
    "./src/app/shared/components/gallery/gallery.component.ts");
    /* harmony import */


    var _shared_components_github_button_github_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/github-button/github-button.component */
    "./src/app/shared/components/github-button/github-button.component.ts");

    function ProjectComponent_p_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 16);
      }

      if (rf & 2) {
        var desc_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", desc_r13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function ProjectComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var technology_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", technology_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r14.name);
      }
    }

    function ProjectComponent_app_github_button_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-github-button", 22);
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("repo", ctx_r11.project.repo);
      }
    }

    function ProjectComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.project.website.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r12.project.website.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.project.website.linkText, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/"];
    };

    var ProjectComponent = function ProjectComponent(activatedRoute) {
      _classCallCheck(this, ProjectComponent);

      this.activatedRoute = activatedRoute;
      this.project = this.activatedRoute.snapshot.data.projectResolver.project;
    };

    ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
      return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectComponent,
      selectors: [["app-project"]],
      decls: 28,
      vars: 9,
      consts: [[1, "subpage-wrapper", "fs-26"], [1, "header-wrapper", "position-relative"], [1, "section-header"], [1, "go-back", 3, "routerLink"], [1, "intro"], [1, "description", "w-100"], [1, "font-weight-bold"], ["class", "text-justify", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "technologies"], [1, "row", "justify-content-space-between", "align-items-center"], ["class", "col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "experience", "w-100"], [1, "text-justify"], [3, "slides"], [3, "repo", 4, "ngIf"], ["class", "row justify-content-center align-items-center", 4, "ngIf"], [1, "text-justify", 3, "innerHTML"], [1, "col-md-6", "col-sm-12"], [1, "row"], [1, "text-right", "col-6"], ["aria-hidden", "true", 1, "icon", 3, "src"], [1, "lh-52"], [3, "repo"], [1, "row", "justify-content-center", "align-items-center"], [1, "icon", 3, "src"], ["target", "-blank", 1, "border-link", 3, "href"]],
      template: function ProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectComponent_p_9_Template, 1, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectComponent_div_15_Template, 6, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-gallery", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProjectComponent_app_github_button_25_Template, 1, 1, "app-github-button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProjectComponent_div_26_Template, 4, 3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.technologies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.experience, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.project.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.repo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.project.repo);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_github_button_github_button_component__WEBPACK_IMPORTED_MODULE_4__["GithubButtonComponent"]],
      styles: [".border-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n.border-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n  transition: transform ease-out 250ms;\n  border-top: 2px solid #474507;\n  border-bottom: 2px solid #474507;\n  transform: scale(0, 1);\n}\n.border-link[_ngcontent-%COMP%]:hover::before, .border-link[_ngcontent-%COMP%]:focus::before {\n  transform: scale(1, 1);\n}\n.border-link[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: black;\n  text-decoration: none;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  min-height: 100vh;\n}\n.fs-16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.lh-16[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n.fs-17[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.lh-17[_ngcontent-%COMP%] {\n  line-height: 17px;\n}\n.fs-18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.lh-18[_ngcontent-%COMP%] {\n  line-height: 18px;\n}\n.fs-19[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.lh-19[_ngcontent-%COMP%] {\n  line-height: 19px;\n}\n.fs-20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.lh-20[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n.fs-21[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.lh-21[_ngcontent-%COMP%] {\n  line-height: 21px;\n}\n.fs-22[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.lh-22[_ngcontent-%COMP%] {\n  line-height: 22px;\n}\n.fs-23[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.lh-23[_ngcontent-%COMP%] {\n  line-height: 23px;\n}\n.fs-24[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.lh-24[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n.fs-25[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.lh-25[_ngcontent-%COMP%] {\n  line-height: 25px;\n}\n.fs-26[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.lh-26[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n.fs-27[_ngcontent-%COMP%] {\n  font-size: 27px;\n}\n.lh-27[_ngcontent-%COMP%] {\n  line-height: 27px;\n}\n.fs-28[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.lh-28[_ngcontent-%COMP%] {\n  line-height: 28px;\n}\n.fs-29[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n.lh-29[_ngcontent-%COMP%] {\n  line-height: 29px;\n}\n.fs-30[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.lh-30[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.fs-31[_ngcontent-%COMP%] {\n  font-size: 31px;\n}\n.lh-31[_ngcontent-%COMP%] {\n  line-height: 31px;\n}\n.fs-32[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.lh-32[_ngcontent-%COMP%] {\n  line-height: 32px;\n}\n.fs-33[_ngcontent-%COMP%] {\n  font-size: 33px;\n}\n.lh-33[_ngcontent-%COMP%] {\n  line-height: 33px;\n}\n.fs-34[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.lh-34[_ngcontent-%COMP%] {\n  line-height: 34px;\n}\n.fs-35[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n.lh-35[_ngcontent-%COMP%] {\n  line-height: 35px;\n}\n.fs-36[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.lh-36[_ngcontent-%COMP%] {\n  line-height: 36px;\n}\n.fs-37[_ngcontent-%COMP%] {\n  font-size: 37px;\n}\n.lh-37[_ngcontent-%COMP%] {\n  line-height: 37px;\n}\n.fs-38[_ngcontent-%COMP%] {\n  font-size: 38px;\n}\n.lh-38[_ngcontent-%COMP%] {\n  line-height: 38px;\n}\n.fs-39[_ngcontent-%COMP%] {\n  font-size: 39px;\n}\n.lh-39[_ngcontent-%COMP%] {\n  line-height: 39px;\n}\n.fs-40[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.lh-40[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n.fs-41[_ngcontent-%COMP%] {\n  font-size: 41px;\n}\n.lh-41[_ngcontent-%COMP%] {\n  line-height: 41px;\n}\n.fs-42[_ngcontent-%COMP%] {\n  font-size: 42px;\n}\n.lh-42[_ngcontent-%COMP%] {\n  line-height: 42px;\n}\n.fs-43[_ngcontent-%COMP%] {\n  font-size: 43px;\n}\n.lh-43[_ngcontent-%COMP%] {\n  line-height: 43px;\n}\n.fs-44[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n.lh-44[_ngcontent-%COMP%] {\n  line-height: 44px;\n}\n.fs-45[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n.lh-45[_ngcontent-%COMP%] {\n  line-height: 45px;\n}\n.fs-46[_ngcontent-%COMP%] {\n  font-size: 46px;\n}\n.lh-46[_ngcontent-%COMP%] {\n  line-height: 46px;\n}\n.fs-47[_ngcontent-%COMP%] {\n  font-size: 47px;\n}\n.lh-47[_ngcontent-%COMP%] {\n  line-height: 47px;\n}\n.fs-48[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.lh-48[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n.fs-49[_ngcontent-%COMP%] {\n  font-size: 49px;\n}\n.lh-49[_ngcontent-%COMP%] {\n  line-height: 49px;\n}\n.fs-50[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.lh-50[_ngcontent-%COMP%] {\n  line-height: 50px;\n}\n.fs-51[_ngcontent-%COMP%] {\n  font-size: 51px;\n}\n.lh-51[_ngcontent-%COMP%] {\n  line-height: 51px;\n}\n.fs-52[_ngcontent-%COMP%] {\n  font-size: 52px;\n}\n.lh-52[_ngcontent-%COMP%] {\n  line-height: 52px;\n}\n.fs-53[_ngcontent-%COMP%] {\n  font-size: 53px;\n}\n.lh-53[_ngcontent-%COMP%] {\n  line-height: 53px;\n}\n.fs-54[_ngcontent-%COMP%] {\n  font-size: 54px;\n}\n.lh-54[_ngcontent-%COMP%] {\n  line-height: 54px;\n}\n.fs-55[_ngcontent-%COMP%] {\n  font-size: 55px;\n}\n.lh-55[_ngcontent-%COMP%] {\n  line-height: 55px;\n}\n.fs-56[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n.lh-56[_ngcontent-%COMP%] {\n  line-height: 56px;\n}\n.fs-57[_ngcontent-%COMP%] {\n  font-size: 57px;\n}\n.lh-57[_ngcontent-%COMP%] {\n  line-height: 57px;\n}\n.fs-58[_ngcontent-%COMP%] {\n  font-size: 58px;\n}\n.lh-58[_ngcontent-%COMP%] {\n  line-height: 58px;\n}\n.fs-59[_ngcontent-%COMP%] {\n  font-size: 59px;\n}\n.lh-59[_ngcontent-%COMP%] {\n  line-height: 59px;\n}\n.fs-60[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n.lh-60[_ngcontent-%COMP%] {\n  line-height: 60px;\n}\n.fs-61[_ngcontent-%COMP%] {\n  font-size: 61px;\n}\n.lh-61[_ngcontent-%COMP%] {\n  line-height: 61px;\n}\n.fs-62[_ngcontent-%COMP%] {\n  font-size: 62px;\n}\n.lh-62[_ngcontent-%COMP%] {\n  line-height: 62px;\n}\n.fs-63[_ngcontent-%COMP%] {\n  font-size: 63px;\n}\n.lh-63[_ngcontent-%COMP%] {\n  line-height: 63px;\n}\n.fs-64[_ngcontent-%COMP%] {\n  font-size: 64px;\n}\n.lh-64[_ngcontent-%COMP%] {\n  line-height: 64px;\n}\n.fs-65[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n.lh-65[_ngcontent-%COMP%] {\n  line-height: 65px;\n}\n.fs-66[_ngcontent-%COMP%] {\n  font-size: 66px;\n}\n.lh-66[_ngcontent-%COMP%] {\n  line-height: 66px;\n}\n.fs-67[_ngcontent-%COMP%] {\n  font-size: 67px;\n}\n.lh-67[_ngcontent-%COMP%] {\n  line-height: 67px;\n}\n.fs-68[_ngcontent-%COMP%] {\n  font-size: 68px;\n}\n.lh-68[_ngcontent-%COMP%] {\n  line-height: 68px;\n}\n.fs-69[_ngcontent-%COMP%] {\n  font-size: 69px;\n}\n.lh-69[_ngcontent-%COMP%] {\n  line-height: 69px;\n}\n.fs-70[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n.lh-70[_ngcontent-%COMP%] {\n  line-height: 70px;\n}\n.fs-71[_ngcontent-%COMP%] {\n  font-size: 71px;\n}\n.lh-71[_ngcontent-%COMP%] {\n  line-height: 71px;\n}\n.fs-72[_ngcontent-%COMP%] {\n  font-size: 72px;\n}\n.lh-72[_ngcontent-%COMP%] {\n  line-height: 72px;\n}\n.fs-73[_ngcontent-%COMP%] {\n  font-size: 73px;\n}\n.lh-73[_ngcontent-%COMP%] {\n  line-height: 73px;\n}\n.fs-74[_ngcontent-%COMP%] {\n  font-size: 74px;\n}\n.lh-74[_ngcontent-%COMP%] {\n  line-height: 74px;\n}\n.fs-75[_ngcontent-%COMP%] {\n  font-size: 75px;\n}\n.lh-75[_ngcontent-%COMP%] {\n  line-height: 75px;\n}\n.fs-76[_ngcontent-%COMP%] {\n  font-size: 76px;\n}\n.lh-76[_ngcontent-%COMP%] {\n  line-height: 76px;\n}\n.fs-77[_ngcontent-%COMP%] {\n  font-size: 77px;\n}\n.lh-77[_ngcontent-%COMP%] {\n  line-height: 77px;\n}\n.fs-78[_ngcontent-%COMP%] {\n  font-size: 78px;\n}\n.lh-78[_ngcontent-%COMP%] {\n  line-height: 78px;\n}\n.fs-79[_ngcontent-%COMP%] {\n  font-size: 79px;\n}\n.lh-79[_ngcontent-%COMP%] {\n  line-height: 79px;\n}\n.fs-80[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n.lh-80[_ngcontent-%COMP%] {\n  line-height: 80px;\n}\n.fs-81[_ngcontent-%COMP%] {\n  font-size: 81px;\n}\n.lh-81[_ngcontent-%COMP%] {\n  line-height: 81px;\n}\n.fs-82[_ngcontent-%COMP%] {\n  font-size: 82px;\n}\n.lh-82[_ngcontent-%COMP%] {\n  line-height: 82px;\n}\n.fs-83[_ngcontent-%COMP%] {\n  font-size: 83px;\n}\n.lh-83[_ngcontent-%COMP%] {\n  line-height: 83px;\n}\n.fs-84[_ngcontent-%COMP%] {\n  font-size: 84px;\n}\n.lh-84[_ngcontent-%COMP%] {\n  line-height: 84px;\n}\n.fs-85[_ngcontent-%COMP%] {\n  font-size: 85px;\n}\n.lh-85[_ngcontent-%COMP%] {\n  line-height: 85px;\n}\n.fs-86[_ngcontent-%COMP%] {\n  font-size: 86px;\n}\n.lh-86[_ngcontent-%COMP%] {\n  line-height: 86px;\n}\n.fs-87[_ngcontent-%COMP%] {\n  font-size: 87px;\n}\n.lh-87[_ngcontent-%COMP%] {\n  line-height: 87px;\n}\n.fs-88[_ngcontent-%COMP%] {\n  font-size: 88px;\n}\n.lh-88[_ngcontent-%COMP%] {\n  line-height: 88px;\n}\n.fs-89[_ngcontent-%COMP%] {\n  font-size: 89px;\n}\n.lh-89[_ngcontent-%COMP%] {\n  line-height: 89px;\n}\n.fs-90[_ngcontent-%COMP%] {\n  font-size: 90px;\n}\n.lh-90[_ngcontent-%COMP%] {\n  line-height: 90px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  opacity: 0.8;\n  background: #00abca;\n  z-index: 1;\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  background-size: cover;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: #00abca;\n  height: 100vh;\n  width: 250px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  opacity: 0.99;\n  transition: right 0.5s ease-in;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small.collapsed[_ngcontent-%COMP%] {\n  right: -250px;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 60px 0 0 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f9f871;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #00abca;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  padding: 15px 5px;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 30px 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n@media only screen and (max-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.section-header[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  text-transform: uppercase;\n  display: inline-block;\n  white-space: nowrap;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n  height: 100px;\n  line-height: 100px;\n  font-size: 34px;\n  font-weight: bold;\n}\n.section-header[_ngcontent-%COMP%]::after, .section-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  display: block;\n  width: 100%;\n  top: 0;\n}\n.section-header[_ngcontent-%COMP%]::before {\n  z-index: -2;\n  background-color: white;\n}\n.section-header[_ngcontent-%COMP%]::after {\n  z-index: -1;\n  background-color: #00abca;\n}\nsection[_ngcontent-%COMP%] {\n  clear: both;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.subpage-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  min-height: 90vh;\n}\n.subpage-wrapper[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 40px;\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-left: 2px solid white;\n  border-top: 2px solid white;\n  transform: rotate(-45deg) translateY(-50%);\n}\n.subpage-wrapper[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]:hover, .subpage-wrapper[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]:focus {\n  border-left: 2px solid black;\n  border-top: 2px solid black;\n  transform: rotate(-45deg) translateY(-50%);\n}\n.intro[_ngcontent-%COMP%] {\n  padding: 50px 10% 0 10%;\n}\n.intro[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2JvcmRlci1saW5rLnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbnRlbnQtd3JhcHBlci5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9faGVscGVycy5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fcGFnZS1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fc2VjdGlvbi1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX3NlY3Rpb24uc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUNESjtBREVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FDQU47QURHSTtFQUVFLHNCQUFBO0FDRk47QURLSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNITjtBQ3RCQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUR5QkY7QUUzQkk7RUFDSSxlQUFBO0FGOEJSO0FFM0JJO0VBQ0ksaUJBQUE7QUY4QlI7QUVuQ0k7RUFDSSxlQUFBO0FGc0NSO0FFbkNJO0VBQ0ksaUJBQUE7QUZzQ1I7QUUzQ0k7RUFDSSxlQUFBO0FGOENSO0FFM0NJO0VBQ0ksaUJBQUE7QUY4Q1I7QUVuREk7RUFDSSxlQUFBO0FGc0RSO0FFbkRJO0VBQ0ksaUJBQUE7QUZzRFI7QUUzREk7RUFDSSxlQUFBO0FGOERSO0FFM0RJO0VBQ0ksaUJBQUE7QUY4RFI7QUVuRUk7RUFDSSxlQUFBO0FGc0VSO0FFbkVJO0VBQ0ksaUJBQUE7QUZzRVI7QUUzRUk7RUFDSSxlQUFBO0FGOEVSO0FFM0VJO0VBQ0ksaUJBQUE7QUY4RVI7QUVuRkk7RUFDSSxlQUFBO0FGc0ZSO0FFbkZJO0VBQ0ksaUJBQUE7QUZzRlI7QUUzRkk7RUFDSSxlQUFBO0FGOEZSO0FFM0ZJO0VBQ0ksaUJBQUE7QUY4RlI7QUVuR0k7RUFDSSxlQUFBO0FGc0dSO0FFbkdJO0VBQ0ksaUJBQUE7QUZzR1I7QUUzR0k7RUFDSSxlQUFBO0FGOEdSO0FFM0dJO0VBQ0ksaUJBQUE7QUY4R1I7QUVuSEk7RUFDSSxlQUFBO0FGc0hSO0FFbkhJO0VBQ0ksaUJBQUE7QUZzSFI7QUUzSEk7RUFDSSxlQUFBO0FGOEhSO0FFM0hJO0VBQ0ksaUJBQUE7QUY4SFI7QUVuSUk7RUFDSSxlQUFBO0FGc0lSO0FFbklJO0VBQ0ksaUJBQUE7QUZzSVI7QUUzSUk7RUFDSSxlQUFBO0FGOElSO0FFM0lJO0VBQ0ksaUJBQUE7QUY4SVI7QUVuSkk7RUFDSSxlQUFBO0FGc0pSO0FFbkpJO0VBQ0ksaUJBQUE7QUZzSlI7QUUzSkk7RUFDSSxlQUFBO0FGOEpSO0FFM0pJO0VBQ0ksaUJBQUE7QUY4SlI7QUVuS0k7RUFDSSxlQUFBO0FGc0tSO0FFbktJO0VBQ0ksaUJBQUE7QUZzS1I7QUUzS0k7RUFDSSxlQUFBO0FGOEtSO0FFM0tJO0VBQ0ksaUJBQUE7QUY4S1I7QUVuTEk7RUFDSSxlQUFBO0FGc0xSO0FFbkxJO0VBQ0ksaUJBQUE7QUZzTFI7QUUzTEk7RUFDSSxlQUFBO0FGOExSO0FFM0xJO0VBQ0ksaUJBQUE7QUY4TFI7QUVuTUk7RUFDSSxlQUFBO0FGc01SO0FFbk1JO0VBQ0ksaUJBQUE7QUZzTVI7QUUzTUk7RUFDSSxlQUFBO0FGOE1SO0FFM01JO0VBQ0ksaUJBQUE7QUY4TVI7QUVuTkk7RUFDSSxlQUFBO0FGc05SO0FFbk5JO0VBQ0ksaUJBQUE7QUZzTlI7QUUzTkk7RUFDSSxlQUFBO0FGOE5SO0FFM05JO0VBQ0ksaUJBQUE7QUY4TlI7QUVuT0k7RUFDSSxlQUFBO0FGc09SO0FFbk9JO0VBQ0ksaUJBQUE7QUZzT1I7QUUzT0k7RUFDSSxlQUFBO0FGOE9SO0FFM09JO0VBQ0ksaUJBQUE7QUY4T1I7QUVuUEk7RUFDSSxlQUFBO0FGc1BSO0FFblBJO0VBQ0ksaUJBQUE7QUZzUFI7QUUzUEk7RUFDSSxlQUFBO0FGOFBSO0FFM1BJO0VBQ0ksaUJBQUE7QUY4UFI7QUVuUUk7RUFDSSxlQUFBO0FGc1FSO0FFblFJO0VBQ0ksaUJBQUE7QUZzUVI7QUUzUUk7RUFDSSxlQUFBO0FGOFFSO0FFM1FJO0VBQ0ksaUJBQUE7QUY4UVI7QUVuUkk7RUFDSSxlQUFBO0FGc1JSO0FFblJJO0VBQ0ksaUJBQUE7QUZzUlI7QUUzUkk7RUFDSSxlQUFBO0FGOFJSO0FFM1JJO0VBQ0ksaUJBQUE7QUY4UlI7QUVuU0k7RUFDSSxlQUFBO0FGc1NSO0FFblNJO0VBQ0ksaUJBQUE7QUZzU1I7QUUzU0k7RUFDSSxlQUFBO0FGOFNSO0FFM1NJO0VBQ0ksaUJBQUE7QUY4U1I7QUVuVEk7RUFDSSxlQUFBO0FGc1RSO0FFblRJO0VBQ0ksaUJBQUE7QUZzVFI7QUUzVEk7RUFDSSxlQUFBO0FGOFRSO0FFM1RJO0VBQ0ksaUJBQUE7QUY4VFI7QUVuVUk7RUFDSSxlQUFBO0FGc1VSO0FFblVJO0VBQ0ksaUJBQUE7QUZzVVI7QUUzVUk7RUFDSSxlQUFBO0FGOFVSO0FFM1VJO0VBQ0ksaUJBQUE7QUY4VVI7QUVuVkk7RUFDSSxlQUFBO0FGc1ZSO0FFblZJO0VBQ0ksaUJBQUE7QUZzVlI7QUUzVkk7RUFDSSxlQUFBO0FGOFZSO0FFM1ZJO0VBQ0ksaUJBQUE7QUY4VlI7QUVuV0k7RUFDSSxlQUFBO0FGc1dSO0FFbldJO0VBQ0ksaUJBQUE7QUZzV1I7QUUzV0k7RUFDSSxlQUFBO0FGOFdSO0FFM1dJO0VBQ0ksaUJBQUE7QUY4V1I7QUVuWEk7RUFDSSxlQUFBO0FGc1hSO0FFblhJO0VBQ0ksaUJBQUE7QUZzWFI7QUUzWEk7RUFDSSxlQUFBO0FGOFhSO0FFM1hJO0VBQ0ksaUJBQUE7QUY4WFI7QUVuWUk7RUFDSSxlQUFBO0FGc1lSO0FFbllJO0VBQ0ksaUJBQUE7QUZzWVI7QUUzWUk7RUFDSSxlQUFBO0FGOFlSO0FFM1lJO0VBQ0ksaUJBQUE7QUY4WVI7QUVuWkk7RUFDSSxlQUFBO0FGc1pSO0FFblpJO0VBQ0ksaUJBQUE7QUZzWlI7QUUzWkk7RUFDSSxlQUFBO0FGOFpSO0FFM1pJO0VBQ0ksaUJBQUE7QUY4WlI7QUVuYUk7RUFDSSxlQUFBO0FGc2FSO0FFbmFJO0VBQ0ksaUJBQUE7QUZzYVI7QUUzYUk7RUFDSSxlQUFBO0FGOGFSO0FFM2FJO0VBQ0ksaUJBQUE7QUY4YVI7QUVuYkk7RUFDSSxlQUFBO0FGc2JSO0FFbmJJO0VBQ0ksaUJBQUE7QUZzYlI7QUUzYkk7RUFDSSxlQUFBO0FGOGJSO0FFM2JJO0VBQ0ksaUJBQUE7QUY4YlI7QUVuY0k7RUFDSSxlQUFBO0FGc2NSO0FFbmNJO0VBQ0ksaUJBQUE7QUZzY1I7QUUzY0k7RUFDSSxlQUFBO0FGOGNSO0FFM2NJO0VBQ0ksaUJBQUE7QUY4Y1I7QUVuZEk7RUFDSSxlQUFBO0FGc2RSO0FFbmRJO0VBQ0ksaUJBQUE7QUZzZFI7QUUzZEk7RUFDSSxlQUFBO0FGOGRSO0FFM2RJO0VBQ0ksaUJBQUE7QUY4ZFI7QUVuZUk7RUFDSSxlQUFBO0FGc2VSO0FFbmVJO0VBQ0ksaUJBQUE7QUZzZVI7QUUzZUk7RUFDSSxlQUFBO0FGOGVSO0FFM2VJO0VBQ0ksaUJBQUE7QUY4ZVI7QUVuZkk7RUFDSSxlQUFBO0FGc2ZSO0FFbmZJO0VBQ0ksaUJBQUE7QUZzZlI7QUUzZkk7RUFDSSxlQUFBO0FGOGZSO0FFM2ZJO0VBQ0ksaUJBQUE7QUY4ZlI7QUVuZ0JJO0VBQ0ksZUFBQTtBRnNnQlI7QUVuZ0JJO0VBQ0ksaUJBQUE7QUZzZ0JSO0FFM2dCSTtFQUNJLGVBQUE7QUY4Z0JSO0FFM2dCSTtFQUNJLGlCQUFBO0FGOGdCUjtBRW5oQkk7RUFDSSxlQUFBO0FGc2hCUjtBRW5oQkk7RUFDSSxpQkFBQTtBRnNoQlI7QUUzaEJJO0VBQ0ksZUFBQTtBRjhoQlI7QUUzaEJJO0VBQ0ksaUJBQUE7QUY4aEJSO0FFbmlCSTtFQUNJLGVBQUE7QUZzaUJSO0FFbmlCSTtFQUNJLGlCQUFBO0FGc2lCUjtBRTNpQkk7RUFDSSxlQUFBO0FGOGlCUjtBRTNpQkk7RUFDSSxpQkFBQTtBRjhpQlI7QUVuakJJO0VBQ0ksZUFBQTtBRnNqQlI7QUVuakJJO0VBQ0ksaUJBQUE7QUZzakJSO0FFM2pCSTtFQUNJLGVBQUE7QUY4akJSO0FFM2pCSTtFQUNJLGlCQUFBO0FGOGpCUjtBRW5rQkk7RUFDSSxlQUFBO0FGc2tCUjtBRW5rQkk7RUFDSSxpQkFBQTtBRnNrQlI7QUUza0JJO0VBQ0ksZUFBQTtBRjhrQlI7QUUza0JJO0VBQ0ksaUJBQUE7QUY4a0JSO0FFbmxCSTtFQUNJLGVBQUE7QUZzbEJSO0FFbmxCSTtFQUNJLGlCQUFBO0FGc2xCUjtBRTNsQkk7RUFDSSxlQUFBO0FGOGxCUjtBRTNsQkk7RUFDSSxpQkFBQTtBRjhsQlI7QUVubUJJO0VBQ0ksZUFBQTtBRnNtQlI7QUVubUJJO0VBQ0ksaUJBQUE7QUZzbUJSO0FFM21CSTtFQUNJLGVBQUE7QUY4bUJSO0FFM21CSTtFQUNJLGlCQUFBO0FGOG1CUjtBR2xuQkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxtQkNQRztFRFFILFVBQUE7RUFDQSxXQUFBO0FIcW5CSjtBR25uQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBSHFuQk47QUdwbkJNO0VBUkY7SUFTSSxhQUFBO0VIdW5CTjtBQUNGO0FHcG5CSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQzlCQztFRCtCRCxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBSHNuQk47QUdwbkJNO0VBQ0UsYUFBQTtBSHNuQlI7QUdubkJNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FIcW5CUjtBR25uQlE7RUFDRSxlQUFBO0FIcW5CVjtBR25uQlU7RUFDRSxtQkNqREg7QUpzcUJUO0FHcG5CWTtFQUNFLGNDckRQO0FKMnFCUDtBR2xuQlU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FIb25CWjtBRy9tQk07RUF6Q0Y7SUEwQ0ksYUFBQTtFSGtuQk47QUFDRjtBRy9tQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FIaW5CTjtBRy9tQk07RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUhpbkJSO0FHL21CUTtFQUNFLGtCQUFBO0FIaW5CVjtBR2huQlU7RUFDRSxZQUFBO0FIa25CWjtBRzdtQk07RUFsQkY7SUFtQkksYUFBQTtFSGduQk47QUFDRjtBSzFzQkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FMNnNCSjtBSzNzQkk7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FMNHNCTjtBS3pzQkk7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUwyc0JOO0FLeHNCSTtFQUNFLFdBQUE7RUFDQSx5QkQvQkM7QUp5dUJQO0FNenVCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBTjR1Qko7QU0xdUJJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QU40dUJOO0FNMXVCSTtFQUNFLGVBQUE7QU40dUJOO0FPbnZCQTtFQUNDLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QVBzdkJEO0FPcHZCQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMENBQUE7QVBzdkJGO0FPcHZCRTtFQUNDLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQ0FBQTtBUHN2Qkg7QU9qdkJBO0VBQ0MsdUJBQUE7QVBvdkJEO0FPbHZCRTtFQUNDLGNBQUE7QVBvdkJIO0FPL3VCQTtFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7QVBrdkJEIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9jb2xvcnMnO1xuXG4uYm9yZGVyLWxpbmsge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTEwcHg7XG4gICAgICBib3R0b206IC0xMHB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDI1MG1zO1xuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRsaWdodC1ncmV5O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ncmV5O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbiAgICB9XG4gIFxuICAgICY6aG92ZXI6OmJlZm9yZSxcbiAgICAmOmZvY3VzOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICB9XG4gIFxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH0iLCIuYm9yZGVyLWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm9yZGVyLWxpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgYm90dG9tOiAtMTBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLW91dCAyNTBtcztcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM0NzQ1MDc7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDc0NTA3O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xufVxuLmJvcmRlci1saW5rOmhvdmVyOjpiZWZvcmUsIC5ib3JkZXItbGluazpmb2N1czo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbn1cbi5ib3JkZXItbGluazpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uZnMtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5saC0xNiB7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uZnMtMTcge1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5saC0xNyB7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuXG4uZnMtMTgge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5saC0xOCB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uZnMtMTkge1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5saC0xOSB7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4uZnMtMjAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5saC0yMCB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZnMtMjEge1xuICBmb250LXNpemU6IDIxcHg7XG59XG5cbi5saC0yMSB7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuXG4uZnMtMjIge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5saC0yMiB7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uZnMtMjMge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5saC0yMyB7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuXG4uZnMtMjQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5saC0yNCB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uZnMtMjUge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5saC0yNSB7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uZnMtMjYge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5saC0yNiB7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4uZnMtMjcge1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbi5saC0yNyB7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuXG4uZnMtMjgge1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5saC0yOCB7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4uZnMtMjkge1xuICBmb250LXNpemU6IDI5cHg7XG59XG5cbi5saC0yOSB7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uZnMtMzAge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5saC0zMCB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uZnMtMzEge1xuICBmb250LXNpemU6IDMxcHg7XG59XG5cbi5saC0zMSB7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xufVxuXG4uZnMtMzIge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5saC0zMiB7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4uZnMtMzMge1xuICBmb250LXNpemU6IDMzcHg7XG59XG5cbi5saC0zMyB7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xufVxuXG4uZnMtMzQge1xuICBmb250LXNpemU6IDM0cHg7XG59XG5cbi5saC0zNCB7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xufVxuXG4uZnMtMzUge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5saC0zNSB7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuXG4uZnMtMzYge1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbi5saC0zNiB7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuXG4uZnMtMzcge1xuICBmb250LXNpemU6IDM3cHg7XG59XG5cbi5saC0zNyB7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xufVxuXG4uZnMtMzgge1xuICBmb250LXNpemU6IDM4cHg7XG59XG5cbi5saC0zOCB7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuXG4uZnMtMzkge1xuICBmb250LXNpemU6IDM5cHg7XG59XG5cbi5saC0zOSB7XG4gIGxpbmUtaGVpZ2h0OiAzOXB4O1xufVxuXG4uZnMtNDAge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5saC00MCB7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4uZnMtNDEge1xuICBmb250LXNpemU6IDQxcHg7XG59XG5cbi5saC00MSB7XG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xufVxuXG4uZnMtNDIge1xuICBmb250LXNpemU6IDQycHg7XG59XG5cbi5saC00MiB7XG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xufVxuXG4uZnMtNDMge1xuICBmb250LXNpemU6IDQzcHg7XG59XG5cbi5saC00MyB7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xufVxuXG4uZnMtNDQge1xuICBmb250LXNpemU6IDQ0cHg7XG59XG5cbi5saC00NCB7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuXG4uZnMtNDUge1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cbi5saC00NSB7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xufVxuXG4uZnMtNDYge1xuICBmb250LXNpemU6IDQ2cHg7XG59XG5cbi5saC00NiB7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xufVxuXG4uZnMtNDcge1xuICBmb250LXNpemU6IDQ3cHg7XG59XG5cbi5saC00NyB7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xufVxuXG4uZnMtNDgge1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5cbi5saC00OCB7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xufVxuXG4uZnMtNDkge1xuICBmb250LXNpemU6IDQ5cHg7XG59XG5cbi5saC00OSB7XG4gIGxpbmUtaGVpZ2h0OiA0OXB4O1xufVxuXG4uZnMtNTAge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5saC01MCB7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuXG4uZnMtNTEge1xuICBmb250LXNpemU6IDUxcHg7XG59XG5cbi5saC01MSB7XG4gIGxpbmUtaGVpZ2h0OiA1MXB4O1xufVxuXG4uZnMtNTIge1xuICBmb250LXNpemU6IDUycHg7XG59XG5cbi5saC01MiB7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xufVxuXG4uZnMtNTMge1xuICBmb250LXNpemU6IDUzcHg7XG59XG5cbi5saC01MyB7XG4gIGxpbmUtaGVpZ2h0OiA1M3B4O1xufVxuXG4uZnMtNTQge1xuICBmb250LXNpemU6IDU0cHg7XG59XG5cbi5saC01NCB7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xufVxuXG4uZnMtNTUge1xuICBmb250LXNpemU6IDU1cHg7XG59XG5cbi5saC01NSB7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xufVxuXG4uZnMtNTYge1xuICBmb250LXNpemU6IDU2cHg7XG59XG5cbi5saC01NiB7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xufVxuXG4uZnMtNTcge1xuICBmb250LXNpemU6IDU3cHg7XG59XG5cbi5saC01NyB7XG4gIGxpbmUtaGVpZ2h0OiA1N3B4O1xufVxuXG4uZnMtNTgge1xuICBmb250LXNpemU6IDU4cHg7XG59XG5cbi5saC01OCB7XG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xufVxuXG4uZnMtNTkge1xuICBmb250LXNpemU6IDU5cHg7XG59XG5cbi5saC01OSB7XG4gIGxpbmUtaGVpZ2h0OiA1OXB4O1xufVxuXG4uZnMtNjAge1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cbi5saC02MCB7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xufVxuXG4uZnMtNjEge1xuICBmb250LXNpemU6IDYxcHg7XG59XG5cbi5saC02MSB7XG4gIGxpbmUtaGVpZ2h0OiA2MXB4O1xufVxuXG4uZnMtNjIge1xuICBmb250LXNpemU6IDYycHg7XG59XG5cbi5saC02MiB7XG4gIGxpbmUtaGVpZ2h0OiA2MnB4O1xufVxuXG4uZnMtNjMge1xuICBmb250LXNpemU6IDYzcHg7XG59XG5cbi5saC02MyB7XG4gIGxpbmUtaGVpZ2h0OiA2M3B4O1xufVxuXG4uZnMtNjQge1xuICBmb250LXNpemU6IDY0cHg7XG59XG5cbi5saC02NCB7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xufVxuXG4uZnMtNjUge1xuICBmb250LXNpemU6IDY1cHg7XG59XG5cbi5saC02NSB7XG4gIGxpbmUtaGVpZ2h0OiA2NXB4O1xufVxuXG4uZnMtNjYge1xuICBmb250LXNpemU6IDY2cHg7XG59XG5cbi5saC02NiB7XG4gIGxpbmUtaGVpZ2h0OiA2NnB4O1xufVxuXG4uZnMtNjcge1xuICBmb250LXNpemU6IDY3cHg7XG59XG5cbi5saC02NyB7XG4gIGxpbmUtaGVpZ2h0OiA2N3B4O1xufVxuXG4uZnMtNjgge1xuICBmb250LXNpemU6IDY4cHg7XG59XG5cbi5saC02OCB7XG4gIGxpbmUtaGVpZ2h0OiA2OHB4O1xufVxuXG4uZnMtNjkge1xuICBmb250LXNpemU6IDY5cHg7XG59XG5cbi5saC02OSB7XG4gIGxpbmUtaGVpZ2h0OiA2OXB4O1xufVxuXG4uZnMtNzAge1xuICBmb250LXNpemU6IDcwcHg7XG59XG5cbi5saC03MCB7XG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xufVxuXG4uZnMtNzEge1xuICBmb250LXNpemU6IDcxcHg7XG59XG5cbi5saC03MSB7XG4gIGxpbmUtaGVpZ2h0OiA3MXB4O1xufVxuXG4uZnMtNzIge1xuICBmb250LXNpemU6IDcycHg7XG59XG5cbi5saC03MiB7XG4gIGxpbmUtaGVpZ2h0OiA3MnB4O1xufVxuXG4uZnMtNzMge1xuICBmb250LXNpemU6IDczcHg7XG59XG5cbi5saC03MyB7XG4gIGxpbmUtaGVpZ2h0OiA3M3B4O1xufVxuXG4uZnMtNzQge1xuICBmb250LXNpemU6IDc0cHg7XG59XG5cbi5saC03NCB7XG4gIGxpbmUtaGVpZ2h0OiA3NHB4O1xufVxuXG4uZnMtNzUge1xuICBmb250LXNpemU6IDc1cHg7XG59XG5cbi5saC03NSB7XG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xufVxuXG4uZnMtNzYge1xuICBmb250LXNpemU6IDc2cHg7XG59XG5cbi5saC03NiB7XG4gIGxpbmUtaGVpZ2h0OiA3NnB4O1xufVxuXG4uZnMtNzcge1xuICBmb250LXNpemU6IDc3cHg7XG59XG5cbi5saC03NyB7XG4gIGxpbmUtaGVpZ2h0OiA3N3B4O1xufVxuXG4uZnMtNzgge1xuICBmb250LXNpemU6IDc4cHg7XG59XG5cbi5saC03OCB7XG4gIGxpbmUtaGVpZ2h0OiA3OHB4O1xufVxuXG4uZnMtNzkge1xuICBmb250LXNpemU6IDc5cHg7XG59XG5cbi5saC03OSB7XG4gIGxpbmUtaGVpZ2h0OiA3OXB4O1xufVxuXG4uZnMtODAge1xuICBmb250LXNpemU6IDgwcHg7XG59XG5cbi5saC04MCB7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xufVxuXG4uZnMtODEge1xuICBmb250LXNpemU6IDgxcHg7XG59XG5cbi5saC04MSB7XG4gIGxpbmUtaGVpZ2h0OiA4MXB4O1xufVxuXG4uZnMtODIge1xuICBmb250LXNpemU6IDgycHg7XG59XG5cbi5saC04MiB7XG4gIGxpbmUtaGVpZ2h0OiA4MnB4O1xufVxuXG4uZnMtODMge1xuICBmb250LXNpemU6IDgzcHg7XG59XG5cbi5saC04MyB7XG4gIGxpbmUtaGVpZ2h0OiA4M3B4O1xufVxuXG4uZnMtODQge1xuICBmb250LXNpemU6IDg0cHg7XG59XG5cbi5saC04NCB7XG4gIGxpbmUtaGVpZ2h0OiA4NHB4O1xufVxuXG4uZnMtODUge1xuICBmb250LXNpemU6IDg1cHg7XG59XG5cbi5saC04NSB7XG4gIGxpbmUtaGVpZ2h0OiA4NXB4O1xufVxuXG4uZnMtODYge1xuICBmb250LXNpemU6IDg2cHg7XG59XG5cbi5saC04NiB7XG4gIGxpbmUtaGVpZ2h0OiA4NnB4O1xufVxuXG4uZnMtODcge1xuICBmb250LXNpemU6IDg3cHg7XG59XG5cbi5saC04NyB7XG4gIGxpbmUtaGVpZ2h0OiA4N3B4O1xufVxuXG4uZnMtODgge1xuICBmb250LXNpemU6IDg4cHg7XG59XG5cbi5saC04OCB7XG4gIGxpbmUtaGVpZ2h0OiA4OHB4O1xufVxuXG4uZnMtODkge1xuICBmb250LXNpemU6IDg5cHg7XG59XG5cbi5saC04OSB7XG4gIGxpbmUtaGVpZ2h0OiA4OXB4O1xufVxuXG4uZnMtOTAge1xuICBmb250LXNpemU6IDkwcHg7XG59XG5cbi5saC05MCB7XG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwLjg7XG4gIGJhY2tncm91bmQ6ICMwMGFiY2E7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBhZ2UtaGVhZGVyIC5oYW1idXJnZXItbWVudSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLmhhbWJ1cmdlci1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmNhO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMjUwcHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDAuOTk7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNXMgZWFzZS1pbjtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbC5jb2xsYXBzZWQge1xuICByaWdodDogLTI1MHB4O1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogNjBweCAwIDAgMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB1bCBsaSB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmOWY4NzE7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwgbGk6aG92ZXIgYSB7XG4gIGNvbG9yOiAjMDBhYmNhO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcbiAgLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzAlO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uIGxpIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkgYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24taGVhZGVyOjphZnRlciwgLnNlY3Rpb24taGVhZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG59XG4uc2VjdGlvbi1oZWFkZXI6OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zZWN0aW9uLWhlYWRlcjo6YWZ0ZXIge1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWJjYTtcbn1cblxuc2VjdGlvbiB7XG4gIGNsZWFyOiBib3RoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zZWN0aW9uIC5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5zZWN0aW9uIGgzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uc3VicGFnZS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG59XG4uc3VicGFnZS13cmFwcGVyIC5nby1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuLnN1YnBhZ2Utd3JhcHBlciAuZ28tYmFjazpob3ZlciwgLnN1YnBhZ2Utd3JhcHBlciAuZ28tYmFjazpmb2N1cyB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uaW50cm8ge1xuICBwYWRkaW5nOiA1MHB4IDEwJSAwIDEwJTtcbn1cbi5pbnRybyAudGVjaG5vbG9naWVzIC5yb3cge1xuICBwYWRkaW5nOiA2cHggMDtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufSIsIi5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59IiwiQGZvciAkaSBmcm9tIDE2IHRocm91Z2ggOTAge1xuICAgIC5mcy0jeyRpfSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGkgKiAxcHg7XG4gICAgfVxuXG4gICAgLmxoLSN7JGl9IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRpICogMXB4O1xuICAgIH1cbn0iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcblxuLnBhZ2UtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgXG4gICAgLmhhbWJ1cmdlci1tZW51IHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLm5hdmlnYXRpb24tc21hbGwge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIG9wYWNpdHk6IDAuOTk7XG4gICAgICB0cmFuc2l0aW9uOiByaWdodCAuNXMgZWFzZS1pbjtcblxuICAgICAgJi5jb2xsYXBzZWQge1xuICAgICAgICByaWdodDogLTI1MHB4O1xuICAgICAgfVxuICBcbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogNjBweCAwIDAgMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEyMCU7XG4gIFxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHllbGxvdztcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLm5hdmlnYXRpb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgXG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgXG4gICAgICAgIGEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9IiwiJGJsdWU6ICMwMGFiY2E7XG4kbGlnaHQtZ3JleTogcmdiKDcxLCA2OSwgNyk7XG4keWVsbG93OiAjZjlmODcxO1xuIiwiLnNlY3Rpb24taGVhZGVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIFxuICAgICY6OmFmdGVyLFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIFxuICAgICY6OmJlZm9yZSB7XG4gICAgICB6LWluZGV4OiAtMjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgei1pbmRleDogLTE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICB9XG4gIH0iLCJzZWN0aW9uIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIC5jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgfSIsIkBpbXBvcnQgJ35zcmMvc3R5bGVzL3N0eWxlcyc7XG5cbi5zdWJwYWdlLXdyYXBwZXIge1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMDtcblx0bWluLWhlaWdodDogOTB2aDtcblxuXHQuZ28tYmFjayB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogNTAlO1xuXHRcdGxlZnQ6IDQwcHg7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDIwcHg7XG5cdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XG5cdFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgtNTAlKTtcblxuXHRcdCY6aG92ZXIsICY6Zm9jdXMge1xuXHRcdFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcblx0XHRcdGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgtNTAlKTtcblx0XHR9XG5cdH1cbn1cblxuLmludHJvIHtcblx0cGFkZGluZzogNTBweCAxMCUgMCAxMCU7XG5cdC50ZWNobm9sb2dpZXMge1xuXHRcdC5yb3cge1xuXHRcdFx0cGFkZGluZzogNnB4IDA7XG5cdFx0fVxuXHR9XG59XG5cbmhyIHtcblx0bWFyZ2luLXRvcDogM3JlbTtcblx0bWFyZ2luLWJvdHRvbTogM3JlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project',
          templateUrl: './project.component.html',
          styleUrls: ['./project.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/projects/projects-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProjectsRoutingModule */

  /***/
  function srcAppProjectsProjectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function () {
      return ProjectsRoutingModule;
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


    var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./project/project.component */
    "./src/app/projects/project/project.component.ts");
    /* harmony import */


    var _resolvers_project_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resolvers/project.resolver */
    "./src/app/projects/resolvers/project.resolver.ts");

    var routes = [{
      path: "**",
      component: _project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"],
      resolve: {
        projectResolver: _resolvers_project_resolver__WEBPACK_IMPORTED_MODULE_3__["ProjectResolver"]
      }
    }];

    var ProjectsRoutingModule = function ProjectsRoutingModule() {
      _classCallCheck(this, ProjectsRoutingModule);
    };

    ProjectsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProjectsRoutingModule
    });
    ProjectsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProjectsRoutingModule_Factory(t) {
        return new (t || ProjectsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.data.ts":
  /*!*******************************************!*\
    !*** ./src/app/projects/projects.data.ts ***!
    \*******************************************/

  /*! exports provided: projectsData */

  /***/
  function srcAppProjectsProjectsDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projectsData", function () {
      return projectsData;
    });

    var projectsData = {
      "AKN-mobile-app": {
        title: "AKN mobile app",
        description: ["AKN mobile app is designed for students' use. It allows students to\n        learn words assigned to their group by teachers via the\n        <a [routerLink]=\"['/projects/AKN-web-app']\">AKN web app</a>. Student can either choose\n        lessons by selecting them from a list view or by providing the start and\n        end date.", "Student can revise or learn words. In revise mode they see all words\n        from a given lesson while in learn mode only words not learnt yet are\n        displayed. If a word has an additional comment, it can be displayed by\n        clicking the \"show hint\" button. Student can also see their progress\n        made in a given lesson."],
        technologies: [{
          image: "assets/images/icons/angular.png",
          name: "Angular"
        }, {
          image: "assets/images/icons/ionic.png",
          name: "Ionic"
        }, {
          image: "assets/images/icons/html5.png",
          name: "HTML5"
        }, {
          image: "assets/images/icons/css3.png",
          name: "CSS3"
        }],
        experience: "I've learnt how to create cross-platform apps with Ionic and how to use\n    Ionic-specific components such as datepicker. I worked with Cordova and\n    learnt HTML, CSS and Angular.",
        images: [{
          src: "assets/images/AKN-mobile-app/login.png",
          alt: "login"
        }, {
          src: "assets/images/AKN-mobile-app/menu-lesson.png",
          alt: "lesson menu"
        }, {
          src: "assets/images/AKN-mobile-app/choose-scope.png",
          alt: "choose scope"
        }, {
          src: "assets/images/AKN-mobile-app/choose-scope-2.png",
          alt: "choose scope"
        }, {
          src: "assets/images/AKN-mobile-app/revision-learning.png",
          alt: "choose revision or learning mode"
        }, {
          src: "assets/images/AKN-mobile-app/correct.png",
          alt: "correct response"
        }, {
          src: "assets/images/AKN-mobile-app/wrong.png",
          alt: "incorrect response"
        }, {
          src: "assets/images/AKN-mobile-app/show-hint.png",
          alt: "show hint"
        }, {
          src: "assets/images/AKN-mobile-app/progress.png",
          alt: "progress view"
        }],
        repo: "http://www.github.com/jakub-wisniowski/mobile-app"
      },
      "AKN-web-app": {
        title: "AKN web app",
        description: ["The AKN web app allows admin to create groups and assign teachers and students to them. Admins can create new accounts and\n    change users' credentials. They can also remove users from groups. Teachers can create new lesson, assign it to\n    a group and set exact time and date.", "In the lesson view, teacher can add new words, edit them and remove them. Words can be added manually or automatically upon\n      providing the app with a csv file. Teacher can also see student's progress in two modes: from last 3 lessons or\n      from a specific lesson."],
        technologies: [{
          image: "assets/images/icons/angular.png",
          name: "Angular"
        }, {
          image: "assets/images/icons/bootstrap.png",
          name: "Bootstrap"
        }, {
          image: "assets/images/icons/html5.png",
          name: "HTML5"
        }, {
          image: "assets/images/icons/css3.png",
          name: "CSS3"
        }, {
          image: "assets/images/icons/sails.png",
          name: "Sails"
        }, {
          image: "assets/images/icons/mongodb.jpg",
          name: "MongoDB"
        }, {
          image: "assets/images/icons/aws.png",
          name: "AWS"
        }],
        experience: "This project was my first encounter with web development. I've learnt the basics of HTML, CSS, Angular2, JavaScript and mongoDB.\n    I've been developing this project through all its phases, from the talks with the client until the deployment.\n    I've learnt how to authenticate users, allow them to upload files and how to design the web application to be user-friendly.\n    Last but not least, I added a speech synthesis feature using Polly provided by Amazon Web Services.\n",
        images: [{
          src: "assets/images/AKN-web-app/add-new-lessons.png",
          alt: "add new lessons"
        }, {
          src: "assets/images/AKN-web-app/AKN-app-preview.png",
          alt: "AKN app preview"
        }, {
          src: "assets/images/AKN-web-app/modify-account.png",
          alt: "modify account"
        }],
        repo: "http://www.github.com/jakub-wisniowski/web-app-1337"
      },
      "climate-camp": {
        title: "Climate camp mobile app",
        description: [" <div>\n    Application was designed for the attendees of Climate Camp 2019. It has four basic functionalities:\n<div>\n    <ul>\n        <li>register for the camp</li>\n        <li>see event's program</li>\n        <li>display program's details</li>\n        <li>check the necessary things to pack for the camp</li>\n    </ul>\n</div>"],
        technologies: [{
          image: "assets/images/icons/flutter.png",
          name: "Flutter"
        }, {
          image: "assets/images/icons/dart.png",
          name: "Dart"
        }, {
          image: "assets/images/icons/firebase.png",
          name: "Firebase"
        }],
        experience: "This was my first project in Flutter, I have learnt how to create views, use shared preferences and open external links.\n    I have created my very first Firebase project in order to store information about camp's agenda and the list of crucial things to take to the camp.\n",
        images: [{
          src: "assets/images/climate-camp/menu.png",
          alt: "main menu"
        }, {
          src: "assets/images/climate-camp/items-list.png",
          alt: "list of crucial items to pack"
        }, {
          src: "assets/images/climate-camp/programme.png",
          alt: "programme overview"
        }, {
          src: "assets/images/climate-camp/details.png",
          alt: "programme details"
        }],
        repo: "http://www.github.com/jakub-wisniowski/Climate-Camp-App"
      },
      "climate-camp-website": {
        title: "Climate Camp website",
        description: ["The Climate Camp website is designed to gather all important information\n    about the collective and it's actions. It has been released in July 2020\n    and is currently being enhanced by nice-to-have features. We are also\n    working on improving the performance. It has been built by a team of\n    three - UX designer, DevOps specialist and me - a Frontend Developer.", "The website replaced the old Wordpress version - it is now possible to\n    add content via a simple markdown editor set up by the DevOps\n    specialist. My task was to come up with a suitable frontend\n    architechture that would allow scully parse data from the editor and\n    display them in the menu."],
        technologies: [{
          image: "assets/images/icons/angular.png",
          name: "Angular"
        }, {
          image: "assets/images/icons/bootstrap.png",
          name: "Bootstrap"
        }, {
          image: "assets/images/icons/scully.png",
          name: "Scully"
        }, {
          image: "assets/images/icons/transloco.png",
          name: "Transloco"
        }],
        experience: "I implemented the internationalisation using transloco package. I've\n    been trying to optimize the loading speed by using static site generator\n    - scully.io. Angular Animations have been used in the project to animate\n    route changes. Right now I'm working on images optimization to make sure\n    they don't slow down the website too much.",
        images: [{
          src: "assets/images/climate-camp-website/climate-camp-website-01.png",
          alt: "main page"
        }, {
          src: "assets/images/climate-camp-website/climate-camp-website-02.png",
          alt: "subpage"
        }],
        website: {
          icon: "assets/images/icons/climate-camp-logo.png",
          linkText: "See website",
          href: "http://www.obozdlaklimatu.org"
        }
      },
      "home-library": {
        title: "Home library",
        description: ["This app allows users to create their private library, which can be\n    shared with other people. The owner can add others to their library, if\n    the invited person does not have an account, an invitation email is\n    sent. Users can add books to their libraries either by filling out a\n    form or by providing a link to Google Books.", "Books can be rented to other users or to people outside the system.\nEvery user can add comments to books in their libraries and mark books\nas currently read. The system uses this information to calculate\nstatistics: books read per month and pages per day."],
        technologies: [{
          image: "assets/images/icons/angular.png",
          name: "Angular"
        }, {
          image: "assets/images/icons/bootstrap.png",
          name: "Bootstrap"
        }, {
          image: "assets/images/icons/html5.png",
          name: "HTML5"
        }, {
          image: "assets/images/icons/css3.png",
          name: "CSS3"
        }, {
          image: "assets/images/icons/sails.png",
          name: "Sails"
        }, {
          image: "assets/images/icons/mongodb.jpg",
          name: "MongoDB"
        }],
        experience: "I've learnt how to generate registration links for users and how to\n    write web scrapers in order to obtain information about books from\n    Google Books.",
        images: [{
          src: "assets/images/home-library/add-new-book.png",
          alt: "add new book"
        }, {
          src: "assets/images/home-library/home-library.png",
          alt: "home library"
        }, {
          src: "assets/images/home-library/home-library-displayed.png",
          alt: "home library displayed"
        }],
        repo: "http://www.github.com/jakub-wisniowski/home-library"
      },
      "lego-app": {
        title: "Lego app",
        description: ["This app is designed for LEGO fans. User can enter the id of project\n        they're working on and the app will download an XML file containing all\n        the bricks needed in this project. Afterwards, the app will try to\n        download images for all the bricks from three different sources.\n     ", "User can use the application to check if they have all of the bricks. In\n     the project view user can increment or decrement the number of bricks.\n     If user has all of the bricks from a given type, the row turns green.\n     User can export their data to XML file at any time in order to buy\n     missing bricks online."],
        technologies: [{
          image: "assets/images/icons/android.png",
          name: "Android"
        }, {
          image: "assets/images/icons/kotlin.png",
          name: "Kotlin"
        }, {
          image: "assets/images/icons/sqlite.png",
          name: "SQLite"
        }],
        experience: "I've used http requests in order to obtain XML files and then had to\n    parse XML to data and data to XML. I've learnt how to create a list view\n    with a row containing more than one element. I used SQLite to store the\n    data and all the images were stored in the device memory. I've also\n    learnt how to save files to SD card.",
        images: [{
          src: "assets/images/lego-app/project-view.png",
          alt: "project view"
        }, {
          src: "assets/images/lego-app/set-url.png",
          alt: "set url view"
        }, {
          src: "assets/images/lego-app/parts.png",
          alt: "parts view"
        }, {
          src: "assets/images/lego-app/parts-edited.png",
          alt: "parts view after editing"
        }, {
          src: "assets/images/lego-app/set-url.png",
          alt: "set url view"
        }, {
          src: "assets/images/lego-app/set-url.png",
          alt: "set url view"
        }, {
          src: "assets/images/lego-app/set-url.png",
          alt: "set url view"
        }],
        repo: "http://www.github.com/jakub-wisniowski/android-lego-app"
      },
      "mr-dumpling": {
        title: "Mr Dumpling",
        description: ["Mr Dumpling is an educational game addressed to children between 5 and\n        10 years of age. It's composed of three educational mini games and one\n        arcade mini game. While playing, user gains points which can be\n        exchanged for accessories. User can dress up the main character - Mr\n        Dumpling or change his colour.", "Each mini game is available in three difficulty levels and in five\n        categories. In the first game - quiz, user has to select a correct\n        english word describing the image. Depending on the difficulty level,\n        options are displayed either as caption or as an audio recording. The\n        second game - memory required the user to connect images with\n        appropriate words. In the last game - baskets - user has to divide words\n        into two categories by swiping left or right."],
        technologies: [{
          image: "assets/images/icons/unity.png",
          name: "Unity"
        }, {
          image: "assets/images/icons/c-sharp.png",
          name: "C#"
        }, {
          image: "assets/images/icons/google-play-services.png",
          name: "Google Play Services"
        }],
        experience: "This game was created as my thesis in a three-person group. We drew all\n    the illustrations and recorded the audios in order to make the game more\n    appealing to children. Mr Dumpling was written using C# and the Unity\n    engine. It uses Player Preferences to store user's progress and score.\n    Game has been integrated with Google Play Services, so that players can\n    compete with their friends and gain achievements. Game is available in\n    Google Play Store.",
        website: {
          icon: "assets/images/icons/google-play-services.png",
          linkText: "Download application",
          href: "https://play.google.com/store/apps/details?id=com.mrdumpling.game"
        }
      },
      planets: {
        title: "PLanets",
        description: ["This app visualises assets from the Star Wars API. Allows users to sort\n    assets by attributes when clicking table's header. The webpage uses\n    pagination and allows users to modify characters' data. User can also\n    add a new character via a form with validation set for every field.\n "],
        technologies: [{
          image: "assets/images/icons/angular.png",
          name: "Angular"
        }, {
          image: "assets/images/icons/bootstrap.png",
          name: "Bootstrap"
        }, {
          image: "assets/images/icons/html5.png",
          name: "HTML5"
        }, {
          image: "assets/images/icons/css3.png",
          name: "CSS3"
        }, {
          image: "assets/images/icons/jasmine.png",
          name: "Jasmine"
        }],
        experience: "I've learnt the basics of Bootstrap and had a chance to use pagination\n    for the first time. I used reactive Angular forms to validate user's\n    input more efficiently. Last but not least I've learnt to write unit\n    tests for Angular applications using mock components and mock services.",
        images: [{
          src: "assets/images/planets/list-view.png",
          alt: "list view"
        }, {
          src: "assets/images/planets/search.png",
          alt: "search view"
        }, {
          src: "assets/images/planets/sorted.png",
          alt: "column sorted after clicking the header"
        }, {
          src: "assets/images/planets/edit.png",
          alt: "edit row view"
        }, {
          src: "assets/images/planets/add-character.png",
          alt: "add character view"
        }, {
          src: "assets/images/planets/validation.png",
          alt: "validation"
        }, {
          src: "assets/images/planets/error.png",
          alt: "error view"
        }],
        repo: "http://www.github.com/jakub-wisniowski/angular2-tests"
      },
      "RPN-calc": {
        title: "RPN calculator",
        description: ["Android calculator using the Reversed Polish Notation. Performs basic\n      arithmetic operations and allows user to undo an operation or clean the\n      stack. In settings user can set number of decimal places they want to\n      see. The app saves all the information when device is rotated, so the\n      user does not have to re-enter their calculations if their device tilts."],
        technologies: [{
          image: "assets/images/icons/android.png",
          name: "Android"
        }, {
          image: "assets/images/icons/kotlin.png",
          name: "Kotlin"
        }, {
          image: "assets/images/icons/sqlite.png",
          name: "SQLite"
        }],
        experience: "I've understood the lifecycle of a mobile application and used this\n    knowledge to prevent user's data from dissapearing when they change\n    screen's orientation. I've also learnt how to create the menu and how to\n    design buttons and other UI components.",
        images: [{
          src: "assets/images/RPN-calc/basic.png",
          alt: "basic view"
        }, {
          src: "assets/images/RPN-calc/two-numbers.png",
          alt: "two numbers view"
        }, {
          src: "assets/images/RPN-calc/sum1.png",
          alt: "sum view"
        }, {
          src: "assets/images/RPN-calc/horizontal.png",
          alt: "horizontal view"
        }, {
          src: "assets/images/RPN-calc/horizontal_minus.png",
          alt: "minus view"
        }, {
          src: "assets/images/RPN-calc/horizontal_sum.png",
          alt: "horizontal sum view"
        }, {
          src: "assets/images/RPN-calc/number_precision.png",
          alt: "settings view"
        }, {
          src: "assets/images/RPN-calc/after_precision.png",
          alt: "view after changing settings"
        }],
        repo: "http://www.github.com/jakub-wisniowski/RPN-calculator"
      }
    };
    /***/
  },

  /***/
  "./src/app/projects/projects.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/projects/projects.module.ts ***!
    \*********************************************/

  /*! exports provided: ProjectsModule */

  /***/
  function srcAppProjectsProjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsModule", function () {
      return ProjectsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./projects-routing.module */
    "./src/app/projects/projects-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./project/project.component */
    "./src/app/projects/project/project.component.ts");
    /* harmony import */


    var _resolvers_project_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resolvers/project.resolver */
    "./src/app/projects/resolvers/project.resolver.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProjectsModule = function ProjectsModule() {
      _classCallCheck(this, ProjectsModule);
    };

    ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProjectsModule
    });
    ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProjectsModule_Factory(t) {
        return new (t || ProjectsModule)();
      },
      providers: [_resolvers_project_resolver__WEBPACK_IMPORTED_MODULE_5__["ProjectResolver"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, {
        declarations: [_project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"]],
          providers: [_resolvers_project_resolver__WEBPACK_IMPORTED_MODULE_5__["ProjectResolver"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/resolvers/project.resolver.ts":
  /*!********************************************************!*\
    !*** ./src/app/projects/resolvers/project.resolver.ts ***!
    \********************************************************/

  /*! exports provided: ProjectResolver */

  /***/
  function srcAppProjectsResolversProjectResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectResolver", function () {
      return ProjectResolver;
    });
    /* harmony import */


    var _projects_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../projects.data */
    "./src/app/projects/projects.data.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProjectResolver =
    /*#__PURE__*/
    function () {
      function ProjectResolver() {
        _classCallCheck(this, ProjectResolver);
      }

      _createClass(ProjectResolver, [{
        key: "resolve",
        value: function resolve(route) {
          return {
            project: _projects_data__WEBPACK_IMPORTED_MODULE_0__["projectsData"][route.url[0].path]
          };
        }
      }]);

      return ProjectResolver;
    }();

    ProjectResolver.ɵfac = function ProjectResolver_Factory(t) {
      return new (t || ProjectResolver)();
    };

    ProjectResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProjectResolver,
      factory: ProjectResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=projects-projects-module-es5.js.map