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
        var desc_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", desc_r14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
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
        var technology_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", technology_r15.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r15.name);
      }
    }

    function ProjectComponent_app_github_button_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-github-button", 22);
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("repo", ctx_r12.project.repo);
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
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.project.website.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r13.project.website.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.project.website.linkText, " ");
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
      styles: [".border-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n.border-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n  transition: transform ease-out 250ms;\n  border-top: 2px solid #474507;\n  border-bottom: 2px solid #474507;\n  transform: scale(0, 1);\n}\n.border-link[_ngcontent-%COMP%]:hover::before, .border-link[_ngcontent-%COMP%]:focus::before {\n  transform: scale(1, 1);\n}\n.border-link[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: black;\n  text-decoration: none;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  min-height: 100vh;\n}\n.fs-16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.lh-16[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n.fs-17[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.lh-17[_ngcontent-%COMP%] {\n  line-height: 17px;\n}\n.fs-18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.lh-18[_ngcontent-%COMP%] {\n  line-height: 18px;\n}\n.fs-19[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.lh-19[_ngcontent-%COMP%] {\n  line-height: 19px;\n}\n.fs-20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.lh-20[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n.fs-21[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.lh-21[_ngcontent-%COMP%] {\n  line-height: 21px;\n}\n.fs-22[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.lh-22[_ngcontent-%COMP%] {\n  line-height: 22px;\n}\n.fs-23[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.lh-23[_ngcontent-%COMP%] {\n  line-height: 23px;\n}\n.fs-24[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.lh-24[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n.fs-25[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.lh-25[_ngcontent-%COMP%] {\n  line-height: 25px;\n}\n.fs-26[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.lh-26[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n.fs-27[_ngcontent-%COMP%] {\n  font-size: 27px;\n}\n.lh-27[_ngcontent-%COMP%] {\n  line-height: 27px;\n}\n.fs-28[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.lh-28[_ngcontent-%COMP%] {\n  line-height: 28px;\n}\n.fs-29[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n.lh-29[_ngcontent-%COMP%] {\n  line-height: 29px;\n}\n.fs-30[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.lh-30[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.fs-31[_ngcontent-%COMP%] {\n  font-size: 31px;\n}\n.lh-31[_ngcontent-%COMP%] {\n  line-height: 31px;\n}\n.fs-32[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.lh-32[_ngcontent-%COMP%] {\n  line-height: 32px;\n}\n.fs-33[_ngcontent-%COMP%] {\n  font-size: 33px;\n}\n.lh-33[_ngcontent-%COMP%] {\n  line-height: 33px;\n}\n.fs-34[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.lh-34[_ngcontent-%COMP%] {\n  line-height: 34px;\n}\n.fs-35[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n.lh-35[_ngcontent-%COMP%] {\n  line-height: 35px;\n}\n.fs-36[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.lh-36[_ngcontent-%COMP%] {\n  line-height: 36px;\n}\n.fs-37[_ngcontent-%COMP%] {\n  font-size: 37px;\n}\n.lh-37[_ngcontent-%COMP%] {\n  line-height: 37px;\n}\n.fs-38[_ngcontent-%COMP%] {\n  font-size: 38px;\n}\n.lh-38[_ngcontent-%COMP%] {\n  line-height: 38px;\n}\n.fs-39[_ngcontent-%COMP%] {\n  font-size: 39px;\n}\n.lh-39[_ngcontent-%COMP%] {\n  line-height: 39px;\n}\n.fs-40[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.lh-40[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n.fs-41[_ngcontent-%COMP%] {\n  font-size: 41px;\n}\n.lh-41[_ngcontent-%COMP%] {\n  line-height: 41px;\n}\n.fs-42[_ngcontent-%COMP%] {\n  font-size: 42px;\n}\n.lh-42[_ngcontent-%COMP%] {\n  line-height: 42px;\n}\n.fs-43[_ngcontent-%COMP%] {\n  font-size: 43px;\n}\n.lh-43[_ngcontent-%COMP%] {\n  line-height: 43px;\n}\n.fs-44[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n.lh-44[_ngcontent-%COMP%] {\n  line-height: 44px;\n}\n.fs-45[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n.lh-45[_ngcontent-%COMP%] {\n  line-height: 45px;\n}\n.fs-46[_ngcontent-%COMP%] {\n  font-size: 46px;\n}\n.lh-46[_ngcontent-%COMP%] {\n  line-height: 46px;\n}\n.fs-47[_ngcontent-%COMP%] {\n  font-size: 47px;\n}\n.lh-47[_ngcontent-%COMP%] {\n  line-height: 47px;\n}\n.fs-48[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.lh-48[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n.fs-49[_ngcontent-%COMP%] {\n  font-size: 49px;\n}\n.lh-49[_ngcontent-%COMP%] {\n  line-height: 49px;\n}\n.fs-50[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.lh-50[_ngcontent-%COMP%] {\n  line-height: 50px;\n}\n.fs-51[_ngcontent-%COMP%] {\n  font-size: 51px;\n}\n.lh-51[_ngcontent-%COMP%] {\n  line-height: 51px;\n}\n.fs-52[_ngcontent-%COMP%] {\n  font-size: 52px;\n}\n.lh-52[_ngcontent-%COMP%] {\n  line-height: 52px;\n}\n.fs-53[_ngcontent-%COMP%] {\n  font-size: 53px;\n}\n.lh-53[_ngcontent-%COMP%] {\n  line-height: 53px;\n}\n.fs-54[_ngcontent-%COMP%] {\n  font-size: 54px;\n}\n.lh-54[_ngcontent-%COMP%] {\n  line-height: 54px;\n}\n.fs-55[_ngcontent-%COMP%] {\n  font-size: 55px;\n}\n.lh-55[_ngcontent-%COMP%] {\n  line-height: 55px;\n}\n.fs-56[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n.lh-56[_ngcontent-%COMP%] {\n  line-height: 56px;\n}\n.fs-57[_ngcontent-%COMP%] {\n  font-size: 57px;\n}\n.lh-57[_ngcontent-%COMP%] {\n  line-height: 57px;\n}\n.fs-58[_ngcontent-%COMP%] {\n  font-size: 58px;\n}\n.lh-58[_ngcontent-%COMP%] {\n  line-height: 58px;\n}\n.fs-59[_ngcontent-%COMP%] {\n  font-size: 59px;\n}\n.lh-59[_ngcontent-%COMP%] {\n  line-height: 59px;\n}\n.fs-60[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n.lh-60[_ngcontent-%COMP%] {\n  line-height: 60px;\n}\n.fs-61[_ngcontent-%COMP%] {\n  font-size: 61px;\n}\n.lh-61[_ngcontent-%COMP%] {\n  line-height: 61px;\n}\n.fs-62[_ngcontent-%COMP%] {\n  font-size: 62px;\n}\n.lh-62[_ngcontent-%COMP%] {\n  line-height: 62px;\n}\n.fs-63[_ngcontent-%COMP%] {\n  font-size: 63px;\n}\n.lh-63[_ngcontent-%COMP%] {\n  line-height: 63px;\n}\n.fs-64[_ngcontent-%COMP%] {\n  font-size: 64px;\n}\n.lh-64[_ngcontent-%COMP%] {\n  line-height: 64px;\n}\n.fs-65[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n.lh-65[_ngcontent-%COMP%] {\n  line-height: 65px;\n}\n.fs-66[_ngcontent-%COMP%] {\n  font-size: 66px;\n}\n.lh-66[_ngcontent-%COMP%] {\n  line-height: 66px;\n}\n.fs-67[_ngcontent-%COMP%] {\n  font-size: 67px;\n}\n.lh-67[_ngcontent-%COMP%] {\n  line-height: 67px;\n}\n.fs-68[_ngcontent-%COMP%] {\n  font-size: 68px;\n}\n.lh-68[_ngcontent-%COMP%] {\n  line-height: 68px;\n}\n.fs-69[_ngcontent-%COMP%] {\n  font-size: 69px;\n}\n.lh-69[_ngcontent-%COMP%] {\n  line-height: 69px;\n}\n.fs-70[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n.lh-70[_ngcontent-%COMP%] {\n  line-height: 70px;\n}\n.fs-71[_ngcontent-%COMP%] {\n  font-size: 71px;\n}\n.lh-71[_ngcontent-%COMP%] {\n  line-height: 71px;\n}\n.fs-72[_ngcontent-%COMP%] {\n  font-size: 72px;\n}\n.lh-72[_ngcontent-%COMP%] {\n  line-height: 72px;\n}\n.fs-73[_ngcontent-%COMP%] {\n  font-size: 73px;\n}\n.lh-73[_ngcontent-%COMP%] {\n  line-height: 73px;\n}\n.fs-74[_ngcontent-%COMP%] {\n  font-size: 74px;\n}\n.lh-74[_ngcontent-%COMP%] {\n  line-height: 74px;\n}\n.fs-75[_ngcontent-%COMP%] {\n  font-size: 75px;\n}\n.lh-75[_ngcontent-%COMP%] {\n  line-height: 75px;\n}\n.fs-76[_ngcontent-%COMP%] {\n  font-size: 76px;\n}\n.lh-76[_ngcontent-%COMP%] {\n  line-height: 76px;\n}\n.fs-77[_ngcontent-%COMP%] {\n  font-size: 77px;\n}\n.lh-77[_ngcontent-%COMP%] {\n  line-height: 77px;\n}\n.fs-78[_ngcontent-%COMP%] {\n  font-size: 78px;\n}\n.lh-78[_ngcontent-%COMP%] {\n  line-height: 78px;\n}\n.fs-79[_ngcontent-%COMP%] {\n  font-size: 79px;\n}\n.lh-79[_ngcontent-%COMP%] {\n  line-height: 79px;\n}\n.fs-80[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n.lh-80[_ngcontent-%COMP%] {\n  line-height: 80px;\n}\n.fs-81[_ngcontent-%COMP%] {\n  font-size: 81px;\n}\n.lh-81[_ngcontent-%COMP%] {\n  line-height: 81px;\n}\n.fs-82[_ngcontent-%COMP%] {\n  font-size: 82px;\n}\n.lh-82[_ngcontent-%COMP%] {\n  line-height: 82px;\n}\n.fs-83[_ngcontent-%COMP%] {\n  font-size: 83px;\n}\n.lh-83[_ngcontent-%COMP%] {\n  line-height: 83px;\n}\n.fs-84[_ngcontent-%COMP%] {\n  font-size: 84px;\n}\n.lh-84[_ngcontent-%COMP%] {\n  line-height: 84px;\n}\n.fs-85[_ngcontent-%COMP%] {\n  font-size: 85px;\n}\n.lh-85[_ngcontent-%COMP%] {\n  line-height: 85px;\n}\n.fs-86[_ngcontent-%COMP%] {\n  font-size: 86px;\n}\n.lh-86[_ngcontent-%COMP%] {\n  line-height: 86px;\n}\n.fs-87[_ngcontent-%COMP%] {\n  font-size: 87px;\n}\n.lh-87[_ngcontent-%COMP%] {\n  line-height: 87px;\n}\n.fs-88[_ngcontent-%COMP%] {\n  font-size: 88px;\n}\n.lh-88[_ngcontent-%COMP%] {\n  line-height: 88px;\n}\n.fs-89[_ngcontent-%COMP%] {\n  font-size: 89px;\n}\n.lh-89[_ngcontent-%COMP%] {\n  line-height: 89px;\n}\n.fs-90[_ngcontent-%COMP%] {\n  font-size: 90px;\n}\n.lh-90[_ngcontent-%COMP%] {\n  line-height: 90px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  opacity: 0.8;\n  background: #00abca;\n  z-index: 1;\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  background-size: cover;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: #00abca;\n  height: 100vh;\n  width: 250px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  opacity: 0.99;\n  transition: right 0.5s ease-in;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small.collapsed[_ngcontent-%COMP%] {\n  right: -250px;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 60px 0 0 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f9f871;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #00abca;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  padding: 15px 5px;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 30px 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n@media only screen and (max-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.section-header[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  text-transform: uppercase;\n  display: inline-block;\n  white-space: nowrap;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n  height: 100px;\n  line-height: 100px;\n  font-size: 34px;\n  font-weight: bold;\n}\n.section-header[_ngcontent-%COMP%]::after, .section-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  display: block;\n  width: 100%;\n  top: 0;\n}\n.section-header[_ngcontent-%COMP%]::before {\n  z-index: -2;\n  background-color: white;\n}\n.section-header[_ngcontent-%COMP%]::after {\n  z-index: -1;\n  background-color: #00abca;\n}\nsection[_ngcontent-%COMP%] {\n  clear: both;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.subpage-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  min-height: 90vh;\n}\n.subpage-wrapper[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 40px;\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-left: 2px solid white;\n  border-top: 2px solid white;\n  transform: rotate(-45deg) translateY(-50%);\n}\n.subpage-wrapper[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]:hover, .subpage-wrapper[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]:focus {\n  border-left: 2px solid black;\n  border-top: 2px solid black;\n  transform: rotate(-45deg) translateY(-50%);\n}\n.intro[_ngcontent-%COMP%] {\n  padding: 50px 10% 0 10%;\n}\n.intro[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\n.technologies[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transform-origin: 50%;\n  -webkit-animation: shaking 500ms ease-in-out forwards;\n          animation: shaking 500ms ease-in-out forwards;\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n@-webkit-keyframes shaking {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(10deg);\n  }\n  50% {\n    transform: rotate(-5deg);\n  }\n  90% {\n    transform: rotate(10deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@keyframes shaking {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(10deg);\n  }\n  50% {\n    transform: rotate(-5deg);\n  }\n  90% {\n    transform: rotate(10deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2JvcmRlci1saW5rLnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbnRlbnQtd3JhcHBlci5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9faGVscGVycy5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fcGFnZS1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fc2VjdGlvbi1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX3NlY3Rpb24uc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUNESjtBREVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FDQU47QURHSTtFQUVFLHNCQUFBO0FDRk47QURLSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNITjtBQ3RCQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUR5QkY7QUUzQkk7RUFDSSxlQUFBO0FGOEJSO0FFM0JJO0VBQ0ksaUJBQUE7QUY4QlI7QUVuQ0k7RUFDSSxlQUFBO0FGc0NSO0FFbkNJO0VBQ0ksaUJBQUE7QUZzQ1I7QUUzQ0k7RUFDSSxlQUFBO0FGOENSO0FFM0NJO0VBQ0ksaUJBQUE7QUY4Q1I7QUVuREk7RUFDSSxlQUFBO0FGc0RSO0FFbkRJO0VBQ0ksaUJBQUE7QUZzRFI7QUUzREk7RUFDSSxlQUFBO0FGOERSO0FFM0RJO0VBQ0ksaUJBQUE7QUY4RFI7QUVuRUk7RUFDSSxlQUFBO0FGc0VSO0FFbkVJO0VBQ0ksaUJBQUE7QUZzRVI7QUUzRUk7RUFDSSxlQUFBO0FGOEVSO0FFM0VJO0VBQ0ksaUJBQUE7QUY4RVI7QUVuRkk7RUFDSSxlQUFBO0FGc0ZSO0FFbkZJO0VBQ0ksaUJBQUE7QUZzRlI7QUUzRkk7RUFDSSxlQUFBO0FGOEZSO0FFM0ZJO0VBQ0ksaUJBQUE7QUY4RlI7QUVuR0k7RUFDSSxlQUFBO0FGc0dSO0FFbkdJO0VBQ0ksaUJBQUE7QUZzR1I7QUUzR0k7RUFDSSxlQUFBO0FGOEdSO0FFM0dJO0VBQ0ksaUJBQUE7QUY4R1I7QUVuSEk7RUFDSSxlQUFBO0FGc0hSO0FFbkhJO0VBQ0ksaUJBQUE7QUZzSFI7QUUzSEk7RUFDSSxlQUFBO0FGOEhSO0FFM0hJO0VBQ0ksaUJBQUE7QUY4SFI7QUVuSUk7RUFDSSxlQUFBO0FGc0lSO0FFbklJO0VBQ0ksaUJBQUE7QUZzSVI7QUUzSUk7RUFDSSxlQUFBO0FGOElSO0FFM0lJO0VBQ0ksaUJBQUE7QUY4SVI7QUVuSkk7RUFDSSxlQUFBO0FGc0pSO0FFbkpJO0VBQ0ksaUJBQUE7QUZzSlI7QUUzSkk7RUFDSSxlQUFBO0FGOEpSO0FFM0pJO0VBQ0ksaUJBQUE7QUY4SlI7QUVuS0k7RUFDSSxlQUFBO0FGc0tSO0FFbktJO0VBQ0ksaUJBQUE7QUZzS1I7QUUzS0k7RUFDSSxlQUFBO0FGOEtSO0FFM0tJO0VBQ0ksaUJBQUE7QUY4S1I7QUVuTEk7RUFDSSxlQUFBO0FGc0xSO0FFbkxJO0VBQ0ksaUJBQUE7QUZzTFI7QUUzTEk7RUFDSSxlQUFBO0FGOExSO0FFM0xJO0VBQ0ksaUJBQUE7QUY4TFI7QUVuTUk7RUFDSSxlQUFBO0FGc01SO0FFbk1JO0VBQ0ksaUJBQUE7QUZzTVI7QUUzTUk7RUFDSSxlQUFBO0FGOE1SO0FFM01JO0VBQ0ksaUJBQUE7QUY4TVI7QUVuTkk7RUFDSSxlQUFBO0FGc05SO0FFbk5JO0VBQ0ksaUJBQUE7QUZzTlI7QUUzTkk7RUFDSSxlQUFBO0FGOE5SO0FFM05JO0VBQ0ksaUJBQUE7QUY4TlI7QUVuT0k7RUFDSSxlQUFBO0FGc09SO0FFbk9JO0VBQ0ksaUJBQUE7QUZzT1I7QUUzT0k7RUFDSSxlQUFBO0FGOE9SO0FFM09JO0VBQ0ksaUJBQUE7QUY4T1I7QUVuUEk7RUFDSSxlQUFBO0FGc1BSO0FFblBJO0VBQ0ksaUJBQUE7QUZzUFI7QUUzUEk7RUFDSSxlQUFBO0FGOFBSO0FFM1BJO0VBQ0ksaUJBQUE7QUY4UFI7QUVuUUk7RUFDSSxlQUFBO0FGc1FSO0FFblFJO0VBQ0ksaUJBQUE7QUZzUVI7QUUzUUk7RUFDSSxlQUFBO0FGOFFSO0FFM1FJO0VBQ0ksaUJBQUE7QUY4UVI7QUVuUkk7RUFDSSxlQUFBO0FGc1JSO0FFblJJO0VBQ0ksaUJBQUE7QUZzUlI7QUUzUkk7RUFDSSxlQUFBO0FGOFJSO0FFM1JJO0VBQ0ksaUJBQUE7QUY4UlI7QUVuU0k7RUFDSSxlQUFBO0FGc1NSO0FFblNJO0VBQ0ksaUJBQUE7QUZzU1I7QUUzU0k7RUFDSSxlQUFBO0FGOFNSO0FFM1NJO0VBQ0ksaUJBQUE7QUY4U1I7QUVuVEk7RUFDSSxlQUFBO0FGc1RSO0FFblRJO0VBQ0ksaUJBQUE7QUZzVFI7QUUzVEk7RUFDSSxlQUFBO0FGOFRSO0FFM1RJO0VBQ0ksaUJBQUE7QUY4VFI7QUVuVUk7RUFDSSxlQUFBO0FGc1VSO0FFblVJO0VBQ0ksaUJBQUE7QUZzVVI7QUUzVUk7RUFDSSxlQUFBO0FGOFVSO0FFM1VJO0VBQ0ksaUJBQUE7QUY4VVI7QUVuVkk7RUFDSSxlQUFBO0FGc1ZSO0FFblZJO0VBQ0ksaUJBQUE7QUZzVlI7QUUzVkk7RUFDSSxlQUFBO0FGOFZSO0FFM1ZJO0VBQ0ksaUJBQUE7QUY4VlI7QUVuV0k7RUFDSSxlQUFBO0FGc1dSO0FFbldJO0VBQ0ksaUJBQUE7QUZzV1I7QUUzV0k7RUFDSSxlQUFBO0FGOFdSO0FFM1dJO0VBQ0ksaUJBQUE7QUY4V1I7QUVuWEk7RUFDSSxlQUFBO0FGc1hSO0FFblhJO0VBQ0ksaUJBQUE7QUZzWFI7QUUzWEk7RUFDSSxlQUFBO0FGOFhSO0FFM1hJO0VBQ0ksaUJBQUE7QUY4WFI7QUVuWUk7RUFDSSxlQUFBO0FGc1lSO0FFbllJO0VBQ0ksaUJBQUE7QUZzWVI7QUUzWUk7RUFDSSxlQUFBO0FGOFlSO0FFM1lJO0VBQ0ksaUJBQUE7QUY4WVI7QUVuWkk7RUFDSSxlQUFBO0FGc1pSO0FFblpJO0VBQ0ksaUJBQUE7QUZzWlI7QUUzWkk7RUFDSSxlQUFBO0FGOFpSO0FFM1pJO0VBQ0ksaUJBQUE7QUY4WlI7QUVuYUk7RUFDSSxlQUFBO0FGc2FSO0FFbmFJO0VBQ0ksaUJBQUE7QUZzYVI7QUUzYUk7RUFDSSxlQUFBO0FGOGFSO0FFM2FJO0VBQ0ksaUJBQUE7QUY4YVI7QUVuYkk7RUFDSSxlQUFBO0FGc2JSO0FFbmJJO0VBQ0ksaUJBQUE7QUZzYlI7QUUzYkk7RUFDSSxlQUFBO0FGOGJSO0FFM2JJO0VBQ0ksaUJBQUE7QUY4YlI7QUVuY0k7RUFDSSxlQUFBO0FGc2NSO0FFbmNJO0VBQ0ksaUJBQUE7QUZzY1I7QUUzY0k7RUFDSSxlQUFBO0FGOGNSO0FFM2NJO0VBQ0ksaUJBQUE7QUY4Y1I7QUVuZEk7RUFDSSxlQUFBO0FGc2RSO0FFbmRJO0VBQ0ksaUJBQUE7QUZzZFI7QUUzZEk7RUFDSSxlQUFBO0FGOGRSO0FFM2RJO0VBQ0ksaUJBQUE7QUY4ZFI7QUVuZUk7RUFDSSxlQUFBO0FGc2VSO0FFbmVJO0VBQ0ksaUJBQUE7QUZzZVI7QUUzZUk7RUFDSSxlQUFBO0FGOGVSO0FFM2VJO0VBQ0ksaUJBQUE7QUY4ZVI7QUVuZkk7RUFDSSxlQUFBO0FGc2ZSO0FFbmZJO0VBQ0ksaUJBQUE7QUZzZlI7QUUzZkk7RUFDSSxlQUFBO0FGOGZSO0FFM2ZJO0VBQ0ksaUJBQUE7QUY4ZlI7QUVuZ0JJO0VBQ0ksZUFBQTtBRnNnQlI7QUVuZ0JJO0VBQ0ksaUJBQUE7QUZzZ0JSO0FFM2dCSTtFQUNJLGVBQUE7QUY4Z0JSO0FFM2dCSTtFQUNJLGlCQUFBO0FGOGdCUjtBRW5oQkk7RUFDSSxlQUFBO0FGc2hCUjtBRW5oQkk7RUFDSSxpQkFBQTtBRnNoQlI7QUUzaEJJO0VBQ0ksZUFBQTtBRjhoQlI7QUUzaEJJO0VBQ0ksaUJBQUE7QUY4aEJSO0FFbmlCSTtFQUNJLGVBQUE7QUZzaUJSO0FFbmlCSTtFQUNJLGlCQUFBO0FGc2lCUjtBRTNpQkk7RUFDSSxlQUFBO0FGOGlCUjtBRTNpQkk7RUFDSSxpQkFBQTtBRjhpQlI7QUVuakJJO0VBQ0ksZUFBQTtBRnNqQlI7QUVuakJJO0VBQ0ksaUJBQUE7QUZzakJSO0FFM2pCSTtFQUNJLGVBQUE7QUY4akJSO0FFM2pCSTtFQUNJLGlCQUFBO0FGOGpCUjtBRW5rQkk7RUFDSSxlQUFBO0FGc2tCUjtBRW5rQkk7RUFDSSxpQkFBQTtBRnNrQlI7QUUza0JJO0VBQ0ksZUFBQTtBRjhrQlI7QUUza0JJO0VBQ0ksaUJBQUE7QUY4a0JSO0FFbmxCSTtFQUNJLGVBQUE7QUZzbEJSO0FFbmxCSTtFQUNJLGlCQUFBO0FGc2xCUjtBRTNsQkk7RUFDSSxlQUFBO0FGOGxCUjtBRTNsQkk7RUFDSSxpQkFBQTtBRjhsQlI7QUVubUJJO0VBQ0ksZUFBQTtBRnNtQlI7QUVubUJJO0VBQ0ksaUJBQUE7QUZzbUJSO0FFM21CSTtFQUNJLGVBQUE7QUY4bUJSO0FFM21CSTtFQUNJLGlCQUFBO0FGOG1CUjtBR2xuQkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxtQkNQRztFRFFILFVBQUE7RUFDQSxXQUFBO0FIcW5CSjtBR25uQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBSHFuQk47QUdwbkJNO0VBUkY7SUFTSSxhQUFBO0VIdW5CTjtBQUNGO0FHcG5CSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQzlCQztFRCtCRCxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBSHNuQk47QUdwbkJNO0VBQ0UsYUFBQTtBSHNuQlI7QUdubkJNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FIcW5CUjtBR25uQlE7RUFDRSxlQUFBO0FIcW5CVjtBR25uQlU7RUFDRSxtQkNqREg7QUpzcUJUO0FHcG5CWTtFQUNFLGNDckRQO0FKMnFCUDtBR2xuQlU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FIb25CWjtBRy9tQk07RUF6Q0Y7SUEwQ0ksYUFBQTtFSGtuQk47QUFDRjtBRy9tQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FIaW5CTjtBRy9tQk07RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUhpbkJSO0FHL21CUTtFQUNFLGtCQUFBO0FIaW5CVjtBR2huQlU7RUFDRSxZQUFBO0FIa25CWjtBRzdtQk07RUFsQkY7SUFtQkksYUFBQTtFSGduQk47QUFDRjtBSzFzQkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FMNnNCSjtBSzNzQkk7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FMNHNCTjtBS3pzQkk7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUwyc0JOO0FLeHNCSTtFQUNFLFdBQUE7RUFDQSx5QkQvQkM7QUp5dUJQO0FNenVCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBTjR1Qko7QU0xdUJJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QU40dUJOO0FNMXVCSTtFQUNFLGVBQUE7QU40dUJOO0FPbnZCQTtFQUNDLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QVBzdkJEO0FPcHZCQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMENBQUE7QVBzdkJGO0FPcHZCRTtFQUNDLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQ0FBQTtBUHN2Qkg7QU9qdkJBO0VBQ0MsdUJBQUE7QVBvdkJEO0FPbHZCRTtFQUNDLGNBQUE7QVBvdkJIO0FPL3VCQTtFQUNDLHFCQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtBUGt2QkQ7QU85dUJBO0VBQ0MsZ0JBQUE7RUFDQSxtQkFBQTtBUGl2QkQ7QU85dUJBO0VBQ0M7SUFBSSx1QkFBQTtFUGt2Qkg7RU9qdkJEO0lBQUssd0JBQUE7RVBvdkJKO0VPbnZCRDtJQUFLLHdCQUFBO0VQc3ZCSjtFT3J2QkQ7SUFBSyx3QkFBQTtFUHd2Qko7RU92dkJEO0lBQU0sb0JBQUE7RVAwdkJMO0FBQ0Y7QU9od0JBO0VBQ0M7SUFBSSx1QkFBQTtFUGt2Qkg7RU9qdkJEO0lBQUssd0JBQUE7RVBvdkJKO0VPbnZCRDtJQUFLLHdCQUFBO0VQc3ZCSjtFT3J2QkQ7SUFBSyx3QkFBQTtFUHd2Qko7RU92dkJEO0lBQU0sb0JBQUE7RVAwdkJMO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2NvbG9ycyc7XG5cbi5ib3JkZXItbGluayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTBweDtcbiAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMjUwbXM7XG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAgIH1cbiAgXG4gICAgJjpob3Zlcjo6YmVmb3JlLFxuICAgICY6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIH1cbiAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfSIsIi5ib3JkZXItbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3JkZXItbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBib3R0b206IC0xMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDI1MG1zO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzQ3NDUwNztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NzQ1MDc7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG59XG4uYm9yZGVyLWxpbms6aG92ZXI6OmJlZm9yZSwgLmJvcmRlci1saW5rOmZvY3VzOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xufVxuLmJvcmRlci1saW5rOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5mcy0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxoLTE2IHtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5mcy0xNyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmxoLTE3IHtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG5cbi5mcy0xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxoLTE4IHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5mcy0xOSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmxoLTE5IHtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5mcy0yMCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxoLTIwIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5mcy0yMSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLmxoLTIxIHtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5mcy0yMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmxoLTIyIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5mcy0yMyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmxoLTIzIHtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG5cbi5mcy0yNCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmxoLTI0IHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5mcy0yNSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmxoLTI1IHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5mcy0yNiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmxoLTI2IHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5mcy0yNyB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmxoLTI3IHtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5mcy0yOCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLmxoLTI4IHtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5mcy0yOSB7XG4gIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuLmxoLTI5IHtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5mcy0zMCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxoLTMwIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5mcy0zMSB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbn1cblxuLmxoLTMxIHtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG59XG5cbi5mcy0zMiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmxoLTMyIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5mcy0zMyB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbn1cblxuLmxoLTMzIHtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG59XG5cbi5mcy0zNCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cblxuLmxoLTM0IHtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG59XG5cbi5mcy0zNSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmxoLTM1IHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5mcy0zNiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmxoLTM2IHtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG5cbi5mcy0zNyB7XG4gIGZvbnQtc2l6ZTogMzdweDtcbn1cblxuLmxoLTM3IHtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG59XG5cbi5mcy0zOCB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuLmxoLTM4IHtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG59XG5cbi5mcy0zOSB7XG4gIGZvbnQtc2l6ZTogMzlweDtcbn1cblxuLmxoLTM5IHtcbiAgbGluZS1oZWlnaHQ6IDM5cHg7XG59XG5cbi5mcy00MCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmxoLTQwIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5mcy00MSB7XG4gIGZvbnQtc2l6ZTogNDFweDtcbn1cblxuLmxoLTQxIHtcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XG59XG5cbi5mcy00MiB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbn1cblxuLmxoLTQyIHtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG59XG5cbi5mcy00MyB7XG4gIGZvbnQtc2l6ZTogNDNweDtcbn1cblxuLmxoLTQzIHtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG59XG5cbi5mcy00NCB7XG4gIGZvbnQtc2l6ZTogNDRweDtcbn1cblxuLmxoLTQ0IHtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG5cbi5mcy00NSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmxoLTQ1IHtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi5mcy00NiB7XG4gIGZvbnQtc2l6ZTogNDZweDtcbn1cblxuLmxoLTQ2IHtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbi5mcy00NyB7XG4gIGZvbnQtc2l6ZTogNDdweDtcbn1cblxuLmxoLTQ3IHtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG59XG5cbi5mcy00OCB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLmxoLTQ4IHtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5mcy00OSB7XG4gIGZvbnQtc2l6ZTogNDlweDtcbn1cblxuLmxoLTQ5IHtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG59XG5cbi5mcy01MCB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmxoLTUwIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5mcy01MSB7XG4gIGZvbnQtc2l6ZTogNTFweDtcbn1cblxuLmxoLTUxIHtcbiAgbGluZS1oZWlnaHQ6IDUxcHg7XG59XG5cbi5mcy01MiB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbn1cblxuLmxoLTUyIHtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG59XG5cbi5mcy01MyB7XG4gIGZvbnQtc2l6ZTogNTNweDtcbn1cblxuLmxoLTUzIHtcbiAgbGluZS1oZWlnaHQ6IDUzcHg7XG59XG5cbi5mcy01NCB7XG4gIGZvbnQtc2l6ZTogNTRweDtcbn1cblxuLmxoLTU0IHtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG59XG5cbi5mcy01NSB7XG4gIGZvbnQtc2l6ZTogNTVweDtcbn1cblxuLmxoLTU1IHtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG59XG5cbi5mcy01NiB7XG4gIGZvbnQtc2l6ZTogNTZweDtcbn1cblxuLmxoLTU2IHtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG59XG5cbi5mcy01NyB7XG4gIGZvbnQtc2l6ZTogNTdweDtcbn1cblxuLmxoLTU3IHtcbiAgbGluZS1oZWlnaHQ6IDU3cHg7XG59XG5cbi5mcy01OCB7XG4gIGZvbnQtc2l6ZTogNThweDtcbn1cblxuLmxoLTU4IHtcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XG59XG5cbi5mcy01OSB7XG4gIGZvbnQtc2l6ZTogNTlweDtcbn1cblxuLmxoLTU5IHtcbiAgbGluZS1oZWlnaHQ6IDU5cHg7XG59XG5cbi5mcy02MCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmxoLTYwIHtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5cbi5mcy02MSB7XG4gIGZvbnQtc2l6ZTogNjFweDtcbn1cblxuLmxoLTYxIHtcbiAgbGluZS1oZWlnaHQ6IDYxcHg7XG59XG5cbi5mcy02MiB7XG4gIGZvbnQtc2l6ZTogNjJweDtcbn1cblxuLmxoLTYyIHtcbiAgbGluZS1oZWlnaHQ6IDYycHg7XG59XG5cbi5mcy02MyB7XG4gIGZvbnQtc2l6ZTogNjNweDtcbn1cblxuLmxoLTYzIHtcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XG59XG5cbi5mcy02NCB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLmxoLTY0IHtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG59XG5cbi5mcy02NSB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbn1cblxuLmxoLTY1IHtcbiAgbGluZS1oZWlnaHQ6IDY1cHg7XG59XG5cbi5mcy02NiB7XG4gIGZvbnQtc2l6ZTogNjZweDtcbn1cblxuLmxoLTY2IHtcbiAgbGluZS1oZWlnaHQ6IDY2cHg7XG59XG5cbi5mcy02NyB7XG4gIGZvbnQtc2l6ZTogNjdweDtcbn1cblxuLmxoLTY3IHtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG59XG5cbi5mcy02OCB7XG4gIGZvbnQtc2l6ZTogNjhweDtcbn1cblxuLmxoLTY4IHtcbiAgbGluZS1oZWlnaHQ6IDY4cHg7XG59XG5cbi5mcy02OSB7XG4gIGZvbnQtc2l6ZTogNjlweDtcbn1cblxuLmxoLTY5IHtcbiAgbGluZS1oZWlnaHQ6IDY5cHg7XG59XG5cbi5mcy03MCB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cblxuLmxoLTcwIHtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG59XG5cbi5mcy03MSB7XG4gIGZvbnQtc2l6ZTogNzFweDtcbn1cblxuLmxoLTcxIHtcbiAgbGluZS1oZWlnaHQ6IDcxcHg7XG59XG5cbi5mcy03MiB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbn1cblxuLmxoLTcyIHtcbiAgbGluZS1oZWlnaHQ6IDcycHg7XG59XG5cbi5mcy03MyB7XG4gIGZvbnQtc2l6ZTogNzNweDtcbn1cblxuLmxoLTczIHtcbiAgbGluZS1oZWlnaHQ6IDczcHg7XG59XG5cbi5mcy03NCB7XG4gIGZvbnQtc2l6ZTogNzRweDtcbn1cblxuLmxoLTc0IHtcbiAgbGluZS1oZWlnaHQ6IDc0cHg7XG59XG5cbi5mcy03NSB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbn1cblxuLmxoLTc1IHtcbiAgbGluZS1oZWlnaHQ6IDc1cHg7XG59XG5cbi5mcy03NiB7XG4gIGZvbnQtc2l6ZTogNzZweDtcbn1cblxuLmxoLTc2IHtcbiAgbGluZS1oZWlnaHQ6IDc2cHg7XG59XG5cbi5mcy03NyB7XG4gIGZvbnQtc2l6ZTogNzdweDtcbn1cblxuLmxoLTc3IHtcbiAgbGluZS1oZWlnaHQ6IDc3cHg7XG59XG5cbi5mcy03OCB7XG4gIGZvbnQtc2l6ZTogNzhweDtcbn1cblxuLmxoLTc4IHtcbiAgbGluZS1oZWlnaHQ6IDc4cHg7XG59XG5cbi5mcy03OSB7XG4gIGZvbnQtc2l6ZTogNzlweDtcbn1cblxuLmxoLTc5IHtcbiAgbGluZS1oZWlnaHQ6IDc5cHg7XG59XG5cbi5mcy04MCB7XG4gIGZvbnQtc2l6ZTogODBweDtcbn1cblxuLmxoLTgwIHtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG59XG5cbi5mcy04MSB7XG4gIGZvbnQtc2l6ZTogODFweDtcbn1cblxuLmxoLTgxIHtcbiAgbGluZS1oZWlnaHQ6IDgxcHg7XG59XG5cbi5mcy04MiB7XG4gIGZvbnQtc2l6ZTogODJweDtcbn1cblxuLmxoLTgyIHtcbiAgbGluZS1oZWlnaHQ6IDgycHg7XG59XG5cbi5mcy04MyB7XG4gIGZvbnQtc2l6ZTogODNweDtcbn1cblxuLmxoLTgzIHtcbiAgbGluZS1oZWlnaHQ6IDgzcHg7XG59XG5cbi5mcy04NCB7XG4gIGZvbnQtc2l6ZTogODRweDtcbn1cblxuLmxoLTg0IHtcbiAgbGluZS1oZWlnaHQ6IDg0cHg7XG59XG5cbi5mcy04NSB7XG4gIGZvbnQtc2l6ZTogODVweDtcbn1cblxuLmxoLTg1IHtcbiAgbGluZS1oZWlnaHQ6IDg1cHg7XG59XG5cbi5mcy04NiB7XG4gIGZvbnQtc2l6ZTogODZweDtcbn1cblxuLmxoLTg2IHtcbiAgbGluZS1oZWlnaHQ6IDg2cHg7XG59XG5cbi5mcy04NyB7XG4gIGZvbnQtc2l6ZTogODdweDtcbn1cblxuLmxoLTg3IHtcbiAgbGluZS1oZWlnaHQ6IDg3cHg7XG59XG5cbi5mcy04OCB7XG4gIGZvbnQtc2l6ZTogODhweDtcbn1cblxuLmxoLTg4IHtcbiAgbGluZS1oZWlnaHQ6IDg4cHg7XG59XG5cbi5mcy04OSB7XG4gIGZvbnQtc2l6ZTogODlweDtcbn1cblxuLmxoLTg5IHtcbiAgbGluZS1oZWlnaHQ6IDg5cHg7XG59XG5cbi5mcy05MCB7XG4gIGZvbnQtc2l6ZTogOTBweDtcbn1cblxuLmxoLTkwIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgYmFja2dyb3VuZDogIzAwYWJjYTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGFnZS1oZWFkZXIgLmhhbWJ1cmdlci1tZW51IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gIC5wYWdlLWhlYWRlciAuaGFtYnVyZ2VyLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFiY2E7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMC45OTtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC41cyBlYXNlLWluO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsLmNvbGxhcHNlZCB7XG4gIHJpZ2h0OiAtMjUwcHg7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpIHtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y5Zjg3MTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB1bCBsaTpob3ZlciBhIHtcbiAgY29sb3I6ICMwMGFiY2E7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1oZWFkZXI6OmFmdGVyLCAuc2VjdGlvbi1oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbn1cbi5zZWN0aW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgei1pbmRleDogLTI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNlY3Rpb24taGVhZGVyOjphZnRlciB7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmNhO1xufVxuXG5zZWN0aW9uIHtcbiAgY2xlYXI6IGJvdGg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24gLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbnNlY3Rpb24gaDMge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5zdWJwYWdlLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogOTB2aDtcbn1cbi5zdWJwYWdlLXdyYXBwZXIgLmdvLWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA0MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uc3VicGFnZS13cmFwcGVyIC5nby1iYWNrOmhvdmVyLCAuc3VicGFnZS13cmFwcGVyIC5nby1iYWNrOmZvY3VzIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5pbnRybyB7XG4gIHBhZGRpbmc6IDUwcHggMTAlIDAgMTAlO1xufVxuLmludHJvIC50ZWNobm9sb2dpZXMgLnJvdyB7XG4gIHBhZGRpbmc6IDZweCAwO1xufVxuXG4udGVjaG5vbG9naWVzIC5pY29uIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xuICBhbmltYXRpb246IHNoYWtpbmcgNTAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuQGtleWZyYW1lcyBzaGFraW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG59IiwiLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iLCJAZm9yICRpIGZyb20gMTYgdGhyb3VnaCA5MCB7XG4gICAgLmZzLSN7JGl9IHtcbiAgICAgICAgZm9udC1zaXplOiAkaSAqIDFweDtcbiAgICB9XG5cbiAgICAubGgtI3skaX0ge1xuICAgICAgICBsaW5lLWhlaWdodDogJGkgKiAxcHg7XG4gICAgfVxufSIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuXG4ucGFnZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmF2aWdhdGlvbi1zbWFsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgb3BhY2l0eTogMC45OTtcbiAgICAgIHRyYW5zaXRpb246IHJpZ2h0IC41cyBlYXNlLWluO1xuXG4gICAgICAmLmNvbGxhcHNlZCB7XG4gICAgICAgIHJpZ2h0OiAtMjUwcHg7XG4gICAgICB9XG4gIFxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBcbiAgICAgICAgbGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkeWVsbG93O1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmF2aWdhdGlvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMzAlO1xuICBcbiAgICAgICAgYSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH0iLCIkYmx1ZTogIzAwYWJjYTtcbiRsaWdodC1ncmV5OiByZ2IoNzEsIDY5LCA3KTtcbiR5ZWxsb3c6ICNmOWY4NzE7XG4iLCIuc2VjdGlvbi1oZWFkZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgXG4gICAgJjo6YWZ0ZXIsXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHotaW5kZXg6IC0yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICBcbiAgICAmOjphZnRlciB7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgIH1cbiAgfSIsInNlY3Rpb24ge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9IiwiQGltcG9ydCAnfnNyYy9zdHlsZXMvc3R5bGVzJztcblxuLnN1YnBhZ2Utd3JhcHBlciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAwO1xuXHRtaW4taGVpZ2h0OiA5MHZoO1xuXG5cdC5nby1iYWNrIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiA1MCU7XG5cdFx0bGVmdDogNDBweDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogMjBweDtcblx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcblx0XHRib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKC01MCUpO1xuXG5cdFx0Jjpob3ZlciwgJjpmb2N1cyB7XG5cdFx0XHRib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xuXHRcdFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKC01MCUpO1xuXHRcdH1cblx0fVxufVxuXG4uaW50cm8ge1xuXHRwYWRkaW5nOiA1MHB4IDEwJSAwIDEwJTtcblx0LnRlY2hub2xvZ2llcyB7XG5cdFx0LnJvdyB7XG5cdFx0XHRwYWRkaW5nOiA2cHggMDtcblx0XHR9XG5cdH1cbn1cblxuLnRlY2hub2xvZ2llcyAuaWNvbiB7XG5cdHRyYW5zZm9ybS1vcmlnaW46IDUwJTtcblx0YW5pbWF0aW9uOiBzaGFraW5nIDUwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuXHQvLyBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAyO1xufVxuXG5ociB7XG5cdG1hcmdpbi10b3A6IDNyZW07XG5cdG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbkBrZXlmcmFtZXMgc2hha2luZyB7XG5cdDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cblx0MTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyl9XG5cdDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpfVxuXHQ5MCUge3RyYW5zZm9ybTogcm90YXRlKDEwZGVnKX1cblx0MTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMCl9XG59Il19 */"]
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