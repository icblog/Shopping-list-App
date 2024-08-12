(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CoWorkerSignIn.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CoWorkerSignIn.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Layout */ "./resources/js/shared/Layout.vue");
/* harmony import */ var _shared_HandleMsg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/HandleMsg */ "./resources/js/shared/HandleMsg.vue");
/* harmony import */ var _shared_LoadingIndicator_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/LoadingIndicator.vue */ "./resources/js/shared/LoadingIndicator.vue");
/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/util */ "./resources/js/helper/util.js");
/* harmony import */ var _shared_AppButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/AppButton */ "./resources/js/shared/AppButton.vue");
/* harmony import */ var _shared_OptionElement_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/OptionElement.vue */ "./resources/js/shared/OptionElement.vue");
/* harmony import */ var _shared_coWorkerSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/coWorkerSearch */ "./resources/js/shared/coWorkerSearch.vue");
/* harmony import */ var _shared_AppLink_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/AppLink.vue */ "./resources/js/shared/AppLink.vue");
/* harmony import */ var _shared_AppCheckBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/AppCheckBox */ "./resources/js/shared/AppCheckBox.vue");
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api/axios */ "./resources/js/api/axios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CoWorkerSignIn',
  props: {
    errors: Object,
    respondsMsg: String,
    reasonResult: {
      type: Object,
      "default": []
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var processing = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var coworkerSignInData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      signInForm: {
        first_name: "",
        last_name: "",
        phone: "",
        badge: "",
        company: "IC",
        reason: "Work",
        visiting: "",
        code1000: true,
        myhouse: "",
        action: "co-worker",
        host_details_arr: [],
        date_now: (0,_helper_util__WEBPACK_IMPORTED_MODULE_5__.returnCurrentDate)(),
        time_now: (0,_helper_util__WEBPACK_IMPORTED_MODULE_5__.returnCurrentTime)()
      },
      signInFormError: {
        badge_err: "",
        reason_err: "",
        code1000_err: "",
        host_err: ""
      },
      selected_coworker: "",
      isReasonOptionDivOpened: false,
      isCompanyOptionDivOpened: false
    });
    var updateCheckBox = function updateCheckBox(check_box_value) {
      if (check_box_value) {
        if (coworkerSignInData.signInFormError.code1000_err != "") {
          coworkerSignInData.signInFormError.code1000_err = "";
        }
      }
      coworkerSignInData.signInForm.code1000 = check_box_value;
    };
    var updateSelectedCoworker = function updateSelectedCoworker(selectedCoworker) {
      coworkerSignInData.selected_coworker = (0,_helper_util__WEBPACK_IMPORTED_MODULE_5__.returnCoWorkerFullName)(selectedCoworker.fname, selectedCoworker.lname);
      coworkerSignInData.signInForm.first_name = selectedCoworker.fname;
      coworkerSignInData.signInForm.last_name = selectedCoworker.lname;
      coworkerSignInData.signInForm.phone = selectedCoworker.phone;
      fetchLeaders(selectedCoworker.depart_or_comp_id);
    };
    var updateSelectedHost = function updateSelectedHost(selectedCoworker) {
      coworkerSignInData.signInForm.visiting = (0,_helper_util__WEBPACK_IMPORTED_MODULE_5__.returnCoWorkerFullName)(selectedCoworker.fname, selectedCoworker.lname);
      coworkerSignInData.signInForm.host_details_arr = [selectedCoworker];
    };
    var changeCoworker = function changeCoworker() {
      coworkerSignInData.selected_coworker = "";
      coworkerSignInData.signInForm.host_details_arr = [];
      coworkerSignInData.signInForm.reason = "Work";
    };
    var changeHost = function changeHost() {
      coworkerSignInData.signInForm.visiting = "";
      coworkerSignInData.signInForm.host_details_arr = [];
    };
    var toggleOptionWrapperDiv = function toggleOptionWrapperDiv(inputName) {
      if (inputName == "reason") {
        coworkerSignInData.isCompanyOptionDivOpened = false;
        coworkerSignInData.isReasonOptionDivOpened = !coworkerSignInData.isReasonOptionDivOpened;
      }
    };
    var hideOptionSelectDiv = function hideOptionSelectDiv() {
      if (coworkerSignInData.isReasonOptionDivOpened) {
        coworkerSignInData.isReasonOptionDivOpened = false;
      }
    };
    var removeFormInputError = function removeFormInputError(inputName) {
      switch (inputName) {
        case "host":
          coworkerSignInData.signInFormError.host_err = "";
          break;
        case "badge":
          coworkerSignInData.signInFormError.badge_err = "";
          break;
        case "reason":
          coworkerSignInData.signInFormError.reason_err = "";
          hideOptionSelectDiv();
          break;
        default:
          break;
      }
    };
    var handleQuickReason = function handleQuickReason(reasonText) {
      coworkerSignInData.signInForm.reason = reasonText;
      coworkerSignInData.signInFormError.reason_err = "";
      hideOptionSelectDiv();
    };
    var assignServerErrors = function assignServerErrors(errObj) {
      if (errObj.host !== undefined) {
        coworkerSignInData.signInFormError.host_err = errObj.host;
      }
      if (errObj.badge !== undefined) {
        coworkerSignInData.signInFormError.badge_err = errObj.badge;
      }
      if (errObj.reason !== undefined) {
        coworkerSignInData.signInFormError.reason_err = errObj.reason;
      }
      if ((errObj === null || errObj === void 0 ? void 0 : errObj.code1000) !== undefined) {
        coworkerSignInData.signInFormError.code1000_err = errObj.code1000;
      }
    };
    var handleIvSigninForm = function handleIvSigninForm() {
      //Validate the form
      var abort = false;
      if (coworkerSignInData.signInForm.visiting == "") {
        abort = true;
        coworkerSignInData.signInFormError.host_err = "Search and select your host please thank you";
      }
      if (coworkerSignInData.signInForm.badge == "") {
        abort = true;
        coworkerSignInData.signInFormError.badge_err = "Enter Badge id";
      }
      if (coworkerSignInData.signInForm.reason == "") {
        abort = true;
        coworkerSignInData.signInFormError.reason_err = "Reason is required";
      }
      if (coworkerSignInData.signInForm.code1000 == "") {
        abort = true;
        coworkerSignInData.signInFormError.code1000_err = "Tick this box to confirm you've recieved site induction and understand code 5K";
      }

      //Submit form if no validation errors

      if (!abort) {
        _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.post("/handle-visitor-signin", coworkerSignInData.signInForm, {
          onStart: function onStart() {
            (0,_helper_util__WEBPACK_IMPORTED_MODULE_5__.scrollToTopOfPage)();
            setTimeout(function () {
              processing.value = true;
            }, 300);
          },
          onSuccess: function onSuccess() {
            if (props.respondsMsg == "code200") {
              setTimeout(function () {
                _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.visit("/");
              }, 1600);
            }
          },
          onFinish: function onFinish() {
            processing.value = false;
          },
          onError: function onError(errors) {
            assignServerErrors(errors);
          }
        });
      } // end if abort
    };

    var fetchLeaders = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(depart_comp_id) {
        var _res$data, res, _res$data2, _res$data3, _res$data4, _res$data5;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _api_axios__WEBPACK_IMPORTED_MODULE_11__["default"].post("/fetch-leaders", {
                depart_comp_id: depart_comp_id
              });
            case 3:
              res = _context.sent;
              if ((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.error) != "") {
                //console.log(res.data.error);
              } else {
                //console.log(res?.data?.leaders_result);
                if ((res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.leaders_result.length) > 0) {
                  coworkerSignInData.signInForm.visiting = (0,_helper_util__WEBPACK_IMPORTED_MODULE_5__.returnCoWorkerFullName)(res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.leaders_result[0].fname, res === null || res === void 0 ? void 0 : (_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.leaders_result[0].lname);
                  coworkerSignInData.signInForm.host_details_arr = res === null || res === void 0 ? void 0 : (_res$data5 = res.data) === null || _res$data5 === void 0 ? void 0 : _res$data5.leaders_result;
                }
              }
              _context.next = 9;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      return function fetchLeaders(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var __returned__ = {
      processing: processing,
      props: props,
      coworkerSignInData: coworkerSignInData,
      updateCheckBox: updateCheckBox,
      updateSelectedCoworker: updateSelectedCoworker,
      updateSelectedHost: updateSelectedHost,
      changeCoworker: changeCoworker,
      changeHost: changeHost,
      toggleOptionWrapperDiv: toggleOptionWrapperDiv,
      hideOptionSelectDiv: hideOptionSelectDiv,
      removeFormInputError: removeFormInputError,
      handleQuickReason: handleQuickReason,
      assignServerErrors: assignServerErrors,
      handleIvSigninForm: handleIvSigninForm,
      fetchLeaders: fetchLeaders,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      router: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router,
      Layout: _shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],
      HandleMsg: _shared_HandleMsg__WEBPACK_IMPORTED_MODULE_3__["default"],
      LoadingIndicator: _shared_LoadingIndicator_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      scrollToTopOfPage: _helper_util__WEBPACK_IMPORTED_MODULE_5__.scrollToTopOfPage,
      returnSystemErrorMsg: _helper_util__WEBPACK_IMPORTED_MODULE_5__.returnSystemErrorMsg,
      returnCoWorkerFullName: _helper_util__WEBPACK_IMPORTED_MODULE_5__.returnCoWorkerFullName,
      returnCurrentTime: _helper_util__WEBPACK_IMPORTED_MODULE_5__.returnCurrentTime,
      returnCurrentDate: _helper_util__WEBPACK_IMPORTED_MODULE_5__.returnCurrentDate,
      AppButton: _shared_AppButton__WEBPACK_IMPORTED_MODULE_6__["default"],
      OptionElement: _shared_OptionElement_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
      coWorkerSearch: _shared_coWorkerSearch__WEBPACK_IMPORTED_MODULE_8__["default"],
      AppLink: _shared_AppLink_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
      AppCheckBox: _shared_AppCheckBox__WEBPACK_IMPORTED_MODULE_10__["default"],
      axios: _api_axios__WEBPACK_IMPORTED_MODULE_11__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Error.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Error.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _shared_Logo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Logo.vue */ "./resources/js/shared/Logo.vue");
/* harmony import */ var _shared_AppLink_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/AppLink.vue */ "./resources/js/shared/AppLink.vue");



var appName = appDataObj.appName;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Error',
  props: {
    status: Number
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden"
      }[props.status];
    });
    var description = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page."
      }[props.status];
    });
    var __returned__ = {
      appName: appName,
      props: props,
      title: title,
      description: description,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      Logo: _shared_Logo_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      AppLink: _shared_AppLink_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ExtVisitorSignIn.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ExtVisitorSignIn.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Layout */ "./resources/js/shared/Layout.vue");
/* harmony import */ var _shared_HandleMsg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/HandleMsg */ "./resources/js/shared/HandleMsg.vue");
/* harmony import */ var _shared_LoadingIndicator_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/LoadingIndicator.vue */ "./resources/js/shared/LoadingIndicator.vue");
/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/util */ "./resources/js/helper/util.js");
/* harmony import */ var _shared_AppButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/AppButton */ "./resources/js/shared/AppButton.vue");
/* harmony import */ var _shared_OptionElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/OptionElement */ "./resources/js/shared/OptionElement.vue");
/* harmony import */ var _shared_coWorkerSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/coWorkerSearch */ "./resources/js/shared/coWorkerSearch.vue");
/* harmony import */ var _shared_AppLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/AppLink */ "./resources/js/shared/AppLink.vue");
/* harmony import */ var _shared_AppCheckBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/AppCheckBox */ "./resources/js/shared/AppCheckBox.vue");
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api/axios */ "./resources/js/api/axios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }













/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ExtVisitorSignIn',
  props: {
    errors: Object,
    respondsMsg: String,
    companyResult: {
      type: Object,
      "default": []
    },
    reasonResult: {
      type: Object,
      "default": []
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var processing = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false),
      firstInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null),
      badge_id = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var signInData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      signInForm: {
        first_name: "",
        last_name: "",
        phone: "",
        badge: badge_id,
        company: "",
        reason: "",
        visiting: "",
        code1000: false,
        myhouse: "",
        action: "ext",
        host_details_arr: [],
        date_now: (0,_helper_util__WEBPACK_IMPORTED_MODULE_6__.returnCurrentDate)(),
        time_now: (0,_helper_util__WEBPACK_IMPORTED_MODULE_6__.returnCurrentTime)()
      },
      signInFormError: {
        first_name_err: "",
        last_name_err: "",
        phone_err: "",
        badge_err: "",
        reason_err: "",
        host_err: "",
        code1000_err: ""
      },
      isReasonOptionDivOpened: false,
      isCompanyOptionDivOpened: false,
      badge_id_err: "",
      checking_badge: false,
      checking_badge_complete: false
    });
    var updateCheckBox = function updateCheckBox(check_box_value) {
      if (check_box_value) {
        if (signInData.signInFormError.code1000_err != "") {
          signInData.signInFormError.code1000_err = "";
        }
      }
      signInData.signInForm.code1000 = check_box_value;
    };
    var changeBadge = function changeBadge() {
      signInData.signInForm.code1000 = false;
      signInData.checking_badge_complete = false;
      signInData.signInForm.host_details_arr = [];
      signInData.signInForm.first_name = "";
      signInData.signInForm.last_name = "";
      signInData.signInForm.phone = "";
      signInData.signInForm.reason = "";
      signInData.signInForm.company = "";
      signInData.signInForm.visiting = "";
    };
    var updateUserSelected = function updateUserSelected(coWorker) {
      signInData.signInForm.visiting = (0,_helper_util__WEBPACK_IMPORTED_MODULE_6__.returnCoWorkerFullName)(coWorker.fname, coWorker.lname);
      signInData.signInForm.host_details_arr = [coWorker];
    };
    var changeVisitor = function changeVisitor() {
      signInData.signInForm.visiting = "";
    };
    var toggleOptionWrapperDiv = function toggleOptionWrapperDiv(inputName) {
      if (inputName == "reason") {
        signInData.isCompanyOptionDivOpened = false;
        signInData.isReasonOptionDivOpened = !signInData.isReasonOptionDivOpened;
      }
      if (inputName == "company") {
        signInData.isReasonOptionDivOpened = false;
        signInData.isCompanyOptionDivOpened = !signInData.isCompanyOptionDivOpened;
      }
    };
    var hideOptionSelectDiv = function hideOptionSelectDiv() {
      if (signInData.isReasonOptionDivOpened) {
        signInData.isReasonOptionDivOpened = false;
      }
      if (signInData.isCompanyOptionDivOpened) {
        signInData.isCompanyOptionDivOpened = false;
      }
    };
    var removeFormInputError = function removeFormInputError(inputName) {
      switch (inputName) {
        case "fname":
          signInData.signInFormError.first_name_err = "";
          break;
        case "lname":
          signInData.signInFormError.last_name_err = "";
          break;
        case "phone":
          signInData.signInFormError.phone_err = "";
          break;
        case "host":
          signInData.signInFormError.host_err = "";
          break;
        case "badge":
          signInData.signInFormError.badge_err = "";
          break;
        case "reason":
          signInData.signInFormError.reason_err = "";
          hideOptionSelectDiv();
          break;
        case "company":
          hideOptionSelectDiv();
          break;
        default:
          break;
      }
    };
    var handleQuickCompany = function handleQuickCompany(companyText) {
      signInData.signInForm.company = companyText;
      hideOptionSelectDiv();
    };
    var handleQuickReason = function handleQuickReason(reasonText) {
      signInData.signInForm.reason = reasonText;
      signInData.signInFormError.reason_err = "";
      hideOptionSelectDiv();
    };
    var assignServerErrors = function assignServerErrors(errObj) {
      if ((errObj === null || errObj === void 0 ? void 0 : errObj.first_name) !== undefined) {
        signInData.signInFormError.first_name_err = errObj === null || errObj === void 0 ? void 0 : errObj.first_name;
      }
      if (errObj.last_name !== undefined) {
        signInData.signInFormError.last_name_err = errObj.last_name;
      }
      if (errObj.phone !== undefined) {
        signInData.signInFormError.phone_err = errObj.phone;
      }
      if (errObj.badge !== undefined) {
        signInData.signInFormError.badge_err = errObj.badge;
      }
      if (errObj.reason !== undefined) {
        signInData.signInFormError.reason_err = errObj.reason;
      }
      if (errObj.host !== undefined) {
        signInData.signInFormError.host_err = errObj.host;
      }
      if ((errObj === null || errObj === void 0 ? void 0 : errObj.code1000) !== undefined) {
        signInData.signInFormError.code1000_err = errObj.code1000;
      }
    };
    var handleIvSigninForm = function handleIvSigninForm() {
      //Validate the form
      var abort = false;
      if (signInData.signInForm.first_name == "") {
        abort = true;
        signInData.signInFormError.first_name_err = "First name is required";
      }
      if (signInData.signInForm.last_name == "") {
        abort = true;
        signInData.signInFormError.last_name_err = "Last name is required";
      }
      if (signInData.signInForm.phone == "") {
        abort = true;
        signInData.signInFormError.phone_err = "Phone number is required";
      }
      if (!(0,_helper_util__WEBPACK_IMPORTED_MODULE_6__.validMobileNumber)(signInData.signInForm.phone)) {
        abort = true;
        signInData.signInFormError.phone_err = "Phone number is invalid";
      }
      if (signInData.signInForm.visiting == "") {
        abort = true;
        signInData.signInFormError.host_err = "Please search and select your host. the person you're to see thank you.";
      }
      if (signInData.signInForm.badge == "") {
        abort = true;
        signInData.signInFormError.badge_err = "Enter Badge letter or name";
      }
      if (signInData.signInForm.reason == "") {
        abort = true;
        signInData.signInFormError.reason_err = "Reason is required";
      }
      if (signInData.signInForm.reason == "Work") {
        if (!signInData.signInForm.code1000) {
          abort = true;
          signInData.signInFormError.code1000_err = "Tick this box to confirm you've recieved site induction and understand code 5K";
        }
      } // end if work

      //Submit form if no validation errors

      if (!abort) {
        _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.router.post("/handle-visitor-signin", signInData.signInForm, {
          onStart: function onStart() {
            (0,_helper_util__WEBPACK_IMPORTED_MODULE_6__.scrollToTopOfPage)();
            setTimeout(function () {
              processing.value = true;
            }, 300);
          },
          onSuccess: function onSuccess() {
            if (props.respondsMsg == "code200") {
              setTimeout(function () {
                _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.router.visit("/");
              }, 1600);
            }
          },
          onFinish: function onFinish() {
            processing.value = false;
          },
          onError: function onError(errors) {
            assignServerErrors(errors);
          }
        });
      } // end if abort
    };

    var fetchRegualarContractorOrVisitor = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(badge_id) {
        var _res$data, res, _res$data2, _res$data3;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(badge_id != "")) {
                _context.next = 17;
                break;
              }
              signInData.checking_badge = true;
              if (signInData.checking_badge_complete) {
                signInData.checking_badge_complete = false;
              }
              _context.prev = 3;
              _context.next = 6;
              return _api_axios__WEBPACK_IMPORTED_MODULE_12__["default"].post("/fetch-regular-contractor-visitor", {
                badge_id: badge_id
              });
            case 6:
              res = _context.sent;
              if ((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.error) != "") {
                signInData.badge_id_err = res.data.error;
              } else {
                // console.log(res?.data);
                assignVisitorContractorDetails(res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.visitor_contractor_data, res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.visitor_contractor_leader_data);
              }
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              signInData.badge_id_err = (0,_helper_util__WEBPACK_IMPORTED_MODULE_6__.returnSystemErrorMsg)();
              //console.log(err);
            case 13:
              _context.prev = 13;
              signInData.checking_badge = false;
              signInData.checking_badge_complete = true;
              return _context.finish(13);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 10, 13, 17]]);
      }));
      return function fetchRegualarContractorOrVisitor(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var assignVisitorContractorDetails = function assignVisitorContractorDetails(visitor_contractor_data, host_details_arr) {
      // console.log(visitor_contractor_data);
      if (visitor_contractor_data != null) {
        signInData.signInForm.first_name = visitor_contractor_data.fname;
        signInData.signInForm.last_name = visitor_contractor_data.lname;
        signInData.signInForm.phone = visitor_contractor_data.phone;
        signInData.signInForm.reason = "Work";
        signInData.signInForm.company = visitor_contractor_data.depart_or_comp_name;
        signInData.signInForm.code1000 = true;
      }
      if (host_details_arr.length > 0) {
        signInData.signInForm.visiting = (0,_helper_util__WEBPACK_IMPORTED_MODULE_6__.returnCoWorkerFullName)(host_details_arr[0].fname, host_details_arr[0].lname);
        signInData.signInForm.host_details_arr = host_details_arr;
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (firstInput.value != null) {
        (0,_helper_util__WEBPACK_IMPORTED_MODULE_6__.focusOnFirstInput)(firstInput);
      }
    });

    //Watch the search input value for changes.
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(badge_id, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(function (value) {
      fetchRegualarContractorOrVisitor(value);
    }, 700));
    var __returned__ = {
      processing: processing,
      firstInput: firstInput,
      badge_id: badge_id,
      props: props,
      signInData: signInData,
      updateCheckBox: updateCheckBox,
      changeBadge: changeBadge,
      updateUserSelected: updateUserSelected,
      changeVisitor: changeVisitor,
      toggleOptionWrapperDiv: toggleOptionWrapperDiv,
      hideOptionSelectDiv: hideOptionSelectDiv,
      removeFormInputError: removeFormInputError,
      handleQuickCompany: handleQuickCompany,
      handleQuickReason: handleQuickReason,
      assignServerErrors: assignServerErrors,
      handleIvSigninForm: handleIvSigninForm,
      fetchRegualarContractorOrVisitor: fetchRegualarContractorOrVisitor,
      assignVisitorContractorDetails: assignVisitorContractorDetails,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      debounce: lodash__WEBPACK_IMPORTED_MODULE_1__.debounce,
      router: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.router,
      Layout: _shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"],
      HandleMsg: _shared_HandleMsg__WEBPACK_IMPORTED_MODULE_4__["default"],
      LoadingIndicator: _shared_LoadingIndicator_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
      focusOnFirstInput: _helper_util__WEBPACK_IMPORTED_MODULE_6__.focusOnFirstInput,
      scrollToTopOfPage: _helper_util__WEBPACK_IMPORTED_MODULE_6__.scrollToTopOfPage,
      returnSystemErrorMsg: _helper_util__WEBPACK_IMPORTED_MODULE_6__.returnSystemErrorMsg,
      validMobileNumber: _helper_util__WEBPACK_IMPORTED_MODULE_6__.validMobileNumber,
      returnCoWorkerFullName: _helper_util__WEBPACK_IMPORTED_MODULE_6__.returnCoWorkerFullName,
      returnCurrentTime: _helper_util__WEBPACK_IMPORTED_MODULE_6__.returnCurrentTime,
      returnCurrentDate: _helper_util__WEBPACK_IMPORTED_MODULE_6__.returnCurrentDate,
      AppButton: _shared_AppButton__WEBPACK_IMPORTED_MODULE_7__["default"],
      OptionElement: _shared_OptionElement__WEBPACK_IMPORTED_MODULE_8__["default"],
      coWorkerSearch: _shared_coWorkerSearch__WEBPACK_IMPORTED_MODULE_9__["default"],
      AppLink: _shared_AppLink__WEBPACK_IMPORTED_MODULE_10__["default"],
      AppCheckBox: _shared_AppCheckBox__WEBPACK_IMPORTED_MODULE_11__["default"],
      axios: _api_axios__WEBPACK_IMPORTED_MODULE_12__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/GoingOffSite.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/GoingOffSite.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/axios */ "./resources/js/api/axios.js");
/* harmony import */ var _shared_AppButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/AppButton */ "./resources/js/shared/AppButton.vue");
/* harmony import */ var _shared_coWorkerSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/coWorkerSearch */ "./resources/js/shared/coWorkerSearch.vue");
/* harmony import */ var _shared_HandleMsg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/HandleMsg */ "./resources/js/shared/HandleMsg.vue");
/* harmony import */ var _shared_AppLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/AppLink */ "./resources/js/shared/AppLink.vue");
/* harmony import */ var _shared_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/LoadingIndicator */ "./resources/js/shared/LoadingIndicator.vue");
/* harmony import */ var _shared_OptionElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/OptionElement */ "./resources/js/shared/OptionElement.vue");
/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helper/util */ "./resources/js/helper/util.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'GoingOffSite',
  props: {
    errors: {
      type: Object,
      "default": []
    },
    company_result: {
      type: Object,
      "default": []
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var going_off_site_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      is_processing: false,
      is_company_option_div_opened: false,
      responds_code: "",
      signed_out_id: 0,
      form_data: {
        myhouse: "",
        fname: "",
        lname: "",
        depart_comp: "",
        yes_no_action: ""
      },
      form_errors: {
        fname_err: "",
        lname_err: "",
        depart_comp_err: ""
      }
    });
    var showSubmitBtn = function showSubmitBtn() {
      var is_all_field_empty = false;
      if (going_off_site_data.form_data.fname == "" || going_off_site_data.form_data.lname == "" || going_off_site_data.form_data.depart_comp == "") {
        is_all_field_empty = true;
      }
      return is_all_field_empty;
    };
    var handleQuickCompany = function handleQuickCompany(name) {
      going_off_site_data.form_data.depart_comp = name;
      going_off_site_data.is_company_option_div_opened = false;
    };
    var toggleOptionWrapperDiv = function toggleOptionWrapperDiv(inputName) {
      if (inputName == "company") {
        going_off_site_data.is_company_option_div_opened = !going_off_site_data.is_company_option_div_opened;
      }
    };
    var removeFormInputError = function removeFormInputError(input_name) {};
    var handleYesNoBtn = function handleYesNoBtn(clicked_action) {
      going_off_site_data.form_data.yes_no_action = clicked_action;
    };
    var updateUserSelected = function updateUserSelected(selectedCoworker) {
      going_off_site_data.form_data.fname = selectedCoworker.fname;
      going_off_site_data.form_data.lname = selectedCoworker.lname;
      going_off_site_data.form_data.depart_comp = selectedCoworker.department_name;
    };
    var changeCoworker = function changeCoworker() {
      going_off_site_data.form_data.fname = "";
      going_off_site_data.form_data.lname = "";
      going_off_site_data.form_data.depart_comp = "";
    };
    var handleGoingOffSiteForm = function handleGoingOffSiteForm() {
      going_off_site_data.is_processing = true;
      (0,_helper_util__WEBPACK_IMPORTED_MODULE_9__.scrollToTopOfPage)();
      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _res$data, _res$data2, _res$data4, res, _res$data3;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _api_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/handle-temp-out", going_off_site_data.form_data);
            case 3:
              res = _context.sent;
              going_off_site_data.responds_code = res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.responds_code;
              if ((res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.signed_out_id) > 0) {
                going_off_site_data.signed_out_id = res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.signed_out_id;
              }

              //success
              if ((res === null || res === void 0 ? void 0 : (_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.responds_code) == "code0") {
                setTimeout(function () {
                  _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.visit("/");
                }, 1600);
              }
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              //console.log(err);
              going_off_site_data.responds_code = "code1";
            case 12:
              _context.prev = 12;
              going_off_site_data.is_processing = false;
              return _context.finish(12);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9, 12, 15]]);
      })), 200);
    };
    var __returned__ = {
      props: props,
      going_off_site_data: going_off_site_data,
      showSubmitBtn: showSubmitBtn,
      handleQuickCompany: handleQuickCompany,
      toggleOptionWrapperDiv: toggleOptionWrapperDiv,
      removeFormInputError: removeFormInputError,
      handleYesNoBtn: handleYesNoBtn,
      updateUserSelected: updateUserSelected,
      changeCoworker: changeCoworker,
      handleGoingOffSiteForm: handleGoingOffSiteForm,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      router: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router,
      axios: _api_axios__WEBPACK_IMPORTED_MODULE_2__["default"],
      AppButton: _shared_AppButton__WEBPACK_IMPORTED_MODULE_3__["default"],
      coWorkerSearch: _shared_coWorkerSearch__WEBPACK_IMPORTED_MODULE_4__["default"],
      HandleMsg: _shared_HandleMsg__WEBPACK_IMPORTED_MODULE_5__["default"],
      AppLink: _shared_AppLink__WEBPACK_IMPORTED_MODULE_6__["default"],
      LoadingIndicator: _shared_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__["default"],
      OptionElement: _shared_OptionElement__WEBPACK_IMPORTED_MODULE_8__["default"],
      scrollToTopOfPage: _helper_util__WEBPACK_IMPORTED_MODULE_9__.scrollToTopOfPage,
      returnSystemErrorMsg: _helper_util__WEBPACK_IMPORTED_MODULE_9__.returnSystemErrorMsg,
      returnCoWorkerFullName: _helper_util__WEBPACK_IMPORTED_MODULE_9__.returnCoWorkerFullName
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _shared_AppButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/AppButton */ "./resources/js/shared/AppButton.vue");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Layout */ "./resources/js/shared/Layout.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Home',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var initiateSignInOutOption = function initiateSignInOutOption() {
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router.visit("/sign-in-out-option");
    };
    var initiateTempInOut = function initiateTempInOut() {
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router.visit("/temp-in-out");
    };
    var __returned__ = {
      initiateSignInOutOption: initiateSignInOutOption,
      initiateTempInOut: initiateTempInOut,
      router: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router,
      AppButton: _shared_AppButton__WEBPACK_IMPORTED_MODULE_1__["default"],
      Layout: _shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/OffSiteBackIn.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/OffSiteBackIn.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/axios */ "./resources/js/api/axios.js");
/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/util */ "./resources/js/helper/util.js");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Layout */ "./resources/js/shared/Layout.vue");
/* harmony import */ var _shared_AppButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/AppButton */ "./resources/js/shared/AppButton.vue");
/* harmony import */ var _shared_LoadingIndicator_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/LoadingIndicator.vue */ "./resources/js/shared/LoadingIndicator.vue");
/* harmony import */ var _shared_HandleMsg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/HandleMsg */ "./resources/js/shared/HandleMsg.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'OffSiteBackIn',
  props: {
    signed_out_id: Number
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var processing = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false),
      searchvalue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""),
      firstInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var sign_in_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      form_data: {
        searched_word_value: ""
      },
      action_data: {
        temp_log_id: props.signed_out_id,
        current_date_time: (0,_helper_util__WEBPACK_IMPORTED_MODULE_4__.toSqlDatetime)(new Date())
      },
      responds_code: "",
      is_search_complete: false,
      is_searching: false,
      custom_err: "",
      temp_sign_out_res: [],
      already_signed_out: props.signed_out_id > 0 ? true : false
    });
    var handleTempOffsite = function handleTempOffsite() {
      processing.value = true;
      (0,_helper_util__WEBPACK_IMPORTED_MODULE_4__.scrollToTopOfPage)();
      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _res$data, res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _api_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/handle-temp-offsite-sign-in", sign_in_data.action_data);
            case 3:
              res = _context.sent;
              sign_in_data.responds_code = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.responds_code;
              if (sign_in_data.responds_code == "code0") {
                setTimeout(function () {
                  if (sign_in_data.already_signed_out) {
                    _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.visit("/temp-in-out");
                  } else {
                    _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.visit("/");
                  }
                }, 1600);
              }
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              sign_in_data.responds_code = "code1";
            case 11:
              _context.prev = 11;
              processing.value = false;
              return _context.finish(11);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8, 11, 14]]);
      })), 400);
    };
    var handleSignBackInBtnClick = function handleSignBackInBtnClick(temp_log_id) {
      sign_in_data.action_data.temp_log_id = temp_log_id;

      //Call above function
      handleTempOffsite();
    };
    var returnCanNotFindVistorErrorMsg = function returnCanNotFindVistorErrorMsg() {
      return "Sorry we can not find you, please see a member of the security team thank you.";
    };
    var handleSearchForm = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(searched_word_value) {
        var _res$data2, res, _res$data3;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(searched_word_value != "")) {
                _context2.next = 20;
                break;
              }
              sign_in_data.form_data.searched_word_value = searched_word_value;
              sign_in_data.is_searching = true;
              if (sign_in_data.is_search_complete) {
                sign_in_data.is_search_complete = false;
              }
              _context2.prev = 4;
              _context2.next = 7;
              return _api_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/find-temp-offsite-signed-out", sign_in_data.form_data);
            case 7:
              res = _context2.sent;
              if ((res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.error) != "") {
                sign_in_data.custom_err = res.data.error;
              } else {
                sign_in_data.temp_sign_out_res = res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.temp_sign_out_res;
              }
              _context2.next = 14;
              break;
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](4);
              sign_in_data.custom_err = (0,_helper_util__WEBPACK_IMPORTED_MODULE_4__.returnSystemErrorMsg)();
              //console.log(err);
            case 14:
              _context2.prev = 14;
              sign_in_data.is_searching = false;
              sign_in_data.is_search_complete = true;
              return _context2.finish(14);
            case 18:
              _context2.next = 21;
              break;
            case 20:
              if (sign_in_data.temp_sign_out_res.length > 0) {
                sign_in_data.temp_sign_out_res = [];
                sign_in_data.is_search_complete = false;
              }
            case 21:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[4, 11, 14, 18]]);
      }));
      return function handleSearchForm(_x) {
        return _ref3.apply(this, arguments);
      };
    }();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,_helper_util__WEBPACK_IMPORTED_MODULE_4__.focusOnFirstInput)(firstInput);
      if (sign_in_data.already_signed_out) {
        handleTempOffsite();
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(searchvalue, (0,lodash__WEBPACK_IMPORTED_MODULE_2__.debounce)(function (value) {
      handleSearchForm(value);
    }, 700));
    var __returned__ = {
      processing: processing,
      searchvalue: searchvalue,
      firstInput: firstInput,
      props: props,
      sign_in_data: sign_in_data,
      handleTempOffsite: handleTempOffsite,
      handleSignBackInBtnClick: handleSignBackInBtnClick,
      returnCanNotFindVistorErrorMsg: returnCanNotFindVistorErrorMsg,
      handleSearchForm: handleSearchForm,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      router: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router,
      debounce: lodash__WEBPACK_IMPORTED_MODULE_2__.debounce,
      axios: _api_axios__WEBPACK_IMPORTED_MODULE_3__["default"],
      focusOnFirstInput: _helper_util__WEBPACK_IMPORTED_MODULE_4__.focusOnFirstInput,
      returnSystemErrorMsg: _helper_util__WEBPACK_IMPORTED_MODULE_4__.returnSystemErrorMsg,
      toSqlDatetime: _helper_util__WEBPACK_IMPORTED_MODULE_4__.toSqlDatetime,
      scrollToTopOfPage: _helper_util__WEBPACK_IMPORTED_MODULE_4__.scrollToTopOfPage,
      Layout: _shared_Layout__WEBPACK_IMPORTED_MODULE_5__["default"],
      AppButton: _shared_AppButton__WEBPACK_IMPORTED_MODULE_6__["default"],
      LoadingIndicator: _shared_LoadingIndicator_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
      HandleMsg: _shared_HandleMsg__WEBPACK_IMPORTED_MODULE_8__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Layout */ "./resources/js/shared/Layout.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ServiceOfficeSignIn',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      Layout: _shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOption.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOption.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _shared_AppButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/AppButton */ "./resources/js/shared/AppButton.vue");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Layout */ "./resources/js/shared/Layout.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SignInOption',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var initiateExtVisitorSiginIn = function initiateExtVisitorSiginIn() {
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router.visit("/external-visitor-signin");
    };
    var initiateCoWokerSignIn = function initiateCoWokerSignIn() {
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router.visit("/co-worker-signin");
    };

    // const initiateSupportOffice = () => {
    //   router.visit("/service-office-signin");
    // };

    var __returned__ = {
      initiateExtVisitorSiginIn: initiateExtVisitorSiginIn,
      initiateCoWokerSignIn: initiateCoWokerSignIn,
      router: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router,
      AppButton: _shared_AppButton__WEBPACK_IMPORTED_MODULE_1__["default"],
      Layout: _shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOut.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOut.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _shared_AppButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/AppButton */ "./resources/js/shared/AppButton.vue");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Layout */ "./resources/js/shared/Layout.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SignInOut',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var initiateSignInOption = function initiateSignInOption() {
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router.visit("/sign-in-option");
    };
    var initiateSignOut = function initiateSignOut() {
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router.visit("/signout");
    };
    var __returned__ = {
      initiateSignInOption: initiateSignInOption,
      initiateSignOut: initiateSignOut,
      router: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router,
      AppButton: _shared_AppButton__WEBPACK_IMPORTED_MODULE_1__["default"],
      Layout: _shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignOut.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignOut.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/axios */ "./resources/js/api/axios.js");
/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/util */ "./resources/js/helper/util.js");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Layout */ "./resources/js/shared/Layout.vue");
/* harmony import */ var _shared_AppButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/AppButton */ "./resources/js/shared/AppButton.vue");
/* harmony import */ var _shared_LoadingIndicator_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/LoadingIndicator.vue */ "./resources/js/shared/LoadingIndicator.vue");
/* harmony import */ var _shared_HandleMsg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/HandleMsg */ "./resources/js/shared/HandleMsg.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SignOut',
  props: {
    respondsMsg: String,
    visitorAlreadySignedIn: Boolean
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var processing = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false),
      searchvalue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""),
      firstInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var signOutData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      signOutForm: {
        signoutoption: "badge",
        searchedWordValue: ""
      },
      actionData: {
        action: "alreadysignedIn",
        currentDataTime: (0,_helper_util__WEBPACK_IMPORTED_MODULE_4__.toSqlDatetime)(new Date()),
        signInVistor: [],
        date_now: (0,_helper_util__WEBPACK_IMPORTED_MODULE_4__.returnCurrentDate)(),
        time_now: (0,_helper_util__WEBPACK_IMPORTED_MODULE_4__.returnCurrentTime)()
      },
      label: "Enter badge id",
      isSearchComplete: false,
      isSearching: false,
      customErr: "",
      visitorsSigninData: [],
      visitorAlreadySignedIn: props.visitorAlreadySignedIn
    });
    var handleVisitorAlreadySignedIn = function handleVisitorAlreadySignedIn() {
      if (signOutData.visitorAlreadySignedIn) {
        processing.value = true;
        setTimeout(function () {
          _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.post("/handle-signout", signOutData.actionData, {
            onSuccess: function onSuccess() {
              if (props.respondsMsg == "code200") {
                setTimeout(function () {
                  _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.visit("/");
                }, 1600);
              }
            },
            onFinish: function onFinish() {
              processing.value = false;
            },
            onError: function onError(errors) {
              assignServerErrors(errors);
            }
          });
        }, 500);
      }
    };
    var handleSignOutVistorBtnClick = function handleSignOutVistorBtnClick(visitor) {
      signOutData.actionData.action = "endSignedIn";
      signOutData.actionData.signInVistor = visitor;
      signOutData.visitorAlreadySignedIn = true;
      //Call above function
      handleVisitorAlreadySignedIn();
    };
    var returnCanNotFindVistorErrorMsg = function returnCanNotFindVistorErrorMsg() {
      var nameOrBadge = "badge id";
      if (signOutData.label.indexOf("badge") > 0) {
        nameOrBadge = "first or last name";
      }
      return "Sorry we can not find you, please click on change option and try using your <strong>" + nameOrBadge + "</strong> or see a member of the security team thank you.";
    };
    var changeSignOutOption = function changeSignOutOption() {
      //This will hide after search error div if any
      if (signOutData.isSearchComplete) {
        signOutData.isSearchComplete = false;
        searchvalue.value = "";
      }
      //Change the label
      if (signOutData.signOutForm.signoutoption == "name") {
        signOutData.label = "Enter badge id";
        signOutData.signOutForm.signoutoption = "badge";
      } else if (signOutData.signOutForm.signoutoption == "badge") {
        signOutData.label = "Enter your first or last name";
        signOutData.signOutForm.signoutoption = "name";
      }
    };
    var handleFindVisitorform = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchedWordValue) {
        var _res$data, res, _res$data2;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(searchedWordValue != "")) {
                _context.next = 20;
                break;
              }
              signOutData.signOutForm.searchedWordValue = searchedWordValue;
              signOutData.isSearching = true;
              if (signOutData.isSearchComplete) {
                signOutData.isSearchComplete = false;
              }
              _context.prev = 4;
              _context.next = 7;
              return _api_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/find-visitor-signedin", signOutData.signOutForm);
            case 7:
              res = _context.sent;
              if ((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.error) != "") {
                signOutData.customErr = res.data.error;
              } else {
                signOutData.visitorsSigninData = res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.visitorsSigninData;
              }
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](4);
              signOutData.customErr = (0,_helper_util__WEBPACK_IMPORTED_MODULE_4__.returnSystemErrorMsg)();
              //console.log(err);
            case 14:
              _context.prev = 14;
              signOutData.isSearching = false;
              signOutData.isSearchComplete = true;
              return _context.finish(14);
            case 18:
              _context.next = 21;
              break;
            case 20:
              if (signOutData.visitorsSigninData.length > 0) {
                signOutData.visitorsSigninData = [];
                signOutData.isSearchComplete = false;
              }
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[4, 11, 14, 18]]);
      }));
      return function handleFindVisitorform(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      handleVisitorAlreadySignedIn();
      (0,_helper_util__WEBPACK_IMPORTED_MODULE_4__.focusOnFirstInput)(firstInput);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(searchvalue, (0,lodash__WEBPACK_IMPORTED_MODULE_2__.debounce)(function (value) {
      handleFindVisitorform(value);
    }, 700));
    var __returned__ = {
      processing: processing,
      searchvalue: searchvalue,
      firstInput: firstInput,
      props: props,
      signOutData: signOutData,
      handleVisitorAlreadySignedIn: handleVisitorAlreadySignedIn,
      handleSignOutVistorBtnClick: handleSignOutVistorBtnClick,
      returnCanNotFindVistorErrorMsg: returnCanNotFindVistorErrorMsg,
      changeSignOutOption: changeSignOutOption,
      handleFindVisitorform: handleFindVisitorform,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      router: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router,
      debounce: lodash__WEBPACK_IMPORTED_MODULE_2__.debounce,
      axios: _api_axios__WEBPACK_IMPORTED_MODULE_3__["default"],
      focusOnFirstInput: _helper_util__WEBPACK_IMPORTED_MODULE_4__.focusOnFirstInput,
      returnSystemErrorMsg: _helper_util__WEBPACK_IMPORTED_MODULE_4__.returnSystemErrorMsg,
      toSqlDatetime: _helper_util__WEBPACK_IMPORTED_MODULE_4__.toSqlDatetime,
      returnCurrentTime: _helper_util__WEBPACK_IMPORTED_MODULE_4__.returnCurrentTime,
      returnCurrentDate: _helper_util__WEBPACK_IMPORTED_MODULE_4__.returnCurrentDate,
      Layout: _shared_Layout__WEBPACK_IMPORTED_MODULE_5__["default"],
      AppButton: _shared_AppButton__WEBPACK_IMPORTED_MODULE_6__["default"],
      LoadingIndicator: _shared_LoadingIndicator_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
      HandleMsg: _shared_HandleMsg__WEBPACK_IMPORTED_MODULE_8__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/TempInOutOption.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/TempInOutOption.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _shared_AppButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/AppButton */ "./resources/js/shared/AppButton.vue");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Layout */ "./resources/js/shared/Layout.vue");
/* harmony import */ var _GoingOffSite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GoingOffSite */ "./resources/js/pages/GoingOffSite.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TempInOutOption',
  props: {
    companyResult: {
      type: Object,
      "default": []
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var temp_option_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      btn_action: ""
    });
    var handleOptionBtnClicked = function handleOptionBtnClicked(btn_action) {
      if (btn_action == "coming_back_in") {
        _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.visit("/temp-offsite-backin/".concat(0));
      } else {
        temp_option_data.btn_action = btn_action;
      }
    };
    var __returned__ = {
      props: props,
      temp_option_data: temp_option_data,
      handleOptionBtnClicked: handleOptionBtnClicked,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      router: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router,
      AppButton: _shared_AppButton__WEBPACK_IMPORTED_MODULE_2__["default"],
      Layout: _shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"],
      GoingOffSite: _GoingOffSite__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppButton.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppButton.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppButton',
  props: {
    noBtnStyle: {
      type: Boolean,
      "default": false
    },
    btnStyle: {
      type: String,
      "default": "default"
    },
    btnType: {
      type: String,
      "default": "button"
    },
    btnTitle: {
      type: String,
      "default": ""
    },
    btnFunc: {
      type: Function,
      "default": null
    },
    fullBtn: {
      type: Boolean,
      "default": false
    },
    hideBtn: {
      type: Boolean,
      "default": false
    },
    customClass: {
      type: String,
      "default": ""
    },
    customClassObj: {
      type: Object,
      "default": null
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var appBtnData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      defaultClassName: "no-border-radius btn shadow-none " + props.customClass
    });
    var __returned__ = {
      props: props,
      appBtnData: appBtnData,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppCheckBox.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppCheckBox.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppCheckBox',
  props: {
    checkbox_text_class: {
      type: String,
      "default": ""
    },
    checkbox_error: {
      type: String,
      "default": ""
    },
    default_checked: {
      type: Boolean,
      "default": false
    }
  },
  emits: ["updateCheckBox"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
      emit = _ref.emit;
    expose();
    var props = __props;
    var custom_checkbox_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      checkbox_checked: false
    });
    var toggleCheckBox = function toggleCheckBox() {
      custom_checkbox_data.checkbox_checked = !custom_checkbox_data.checkbox_checked;
      //update parent componet
      emit("updateCheckBox", custom_checkbox_data.checkbox_checked);
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return props.default_checked;
    }, function (new_value, pre_value) {
      if (new_value) {
        custom_checkbox_data.checkbox_checked = true;
      } else {
        custom_checkbox_data.checkbox_checked = false;
      }
    });
    var __returned__ = {
      emit: emit,
      props: props,
      custom_checkbox_data: custom_checkbox_data,
      toggleCheckBox: toggleCheckBox,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppLink.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppLink.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppLink',
  props: {
    linkType: {
      type: String,
      "default": "int"
    },
    className: {
      type: String,
      "default": ""
    },
    linkUrl: {
      type: String,
      "default": "",
      requred: true
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var __returned__ = {
      props: props,
      Link: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.Link
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Footer.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Footer.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Footer',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var copyRightData = "".concat(new Date().getFullYear(), " icblog.com/iv");
    var __returned__ = {
      copyRightData: copyRightData
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/HandleMsg.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/HandleMsg.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HandleMsg',
  props: {
    infotype: {
      type: String,
      requred: true
    },
    msg: {
      type: String,
      requred: true
    },
    customClass: {
      type: String,
      "default": ""
    },
    showHeading: {
      type: Boolean,
      "default": true
    },
    customHeading: {
      type: String,
      "default": ""
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var classValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("no-border-radius alert"),
      msgHeading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    if (props.infotype == "success") {
      classValue.value = "".concat(classValue.value, " alert-success text-success");
      msgHeading.value = props.customHeading == "" ? "Success!" : props.customHeading;
    }
    if (props.infotype == "error") {
      classValue.value = "".concat(classValue.value, " alert-danger text-danger");
      msgHeading.value = props.customHeading == "" ? "Error!" : props.customHeading;
    }
    if (props.infotype == "info") {
      classValue.value = "".concat(classValue.value, " alert-secondary");
      msgHeading.value = props.customHeading == "" ? "Info!" : props.customHeading;
    }
    var __returned__ = {
      classValue: classValue,
      msgHeading: msgHeading,
      props: props,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Header.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Header.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _AppLink_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLink.vue */ "./resources/js/shared/AppLink.vue");
/* harmony import */ var _Logo_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo.vue */ "./resources/js/shared/Logo.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Header',
  props: {
    backUrl: {
      type: String,
      "default": ""
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var currentTimeStampData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      currentDate: "",
      currentTime: ""
    });
    var currentDateTime = function currentDateTime() {
      var current = new Date();
      currentTimeStampData.currentDate = current.toDateString();
      currentTimeStampData.currentTime = current.toLocaleTimeString("en-GB").slice(0, 5);
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      setTimeout(function () {
        currentDateTime();
      }, 50);
      setInterval(function () {
        currentDateTime();
      }, 1000);
    });
    var __returned__ = {
      currentTimeStampData: currentTimeStampData,
      currentDateTime: currentDateTime,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      AppLink: _AppLink_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      Logo: _Logo_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Layout.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Layout.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./resources/js/shared/Header.vue");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./resources/js/shared/Footer.vue");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");




//appDataObj.appName variable comes from views/app.blade.php
var appName = "iv";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Layout',
  props: {
    pageTitle: {
      type: String,
      "default": ""
    },
    backUrl: {
      type: String,
      "default": ""
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      appName: appName,
      Header: _Header__WEBPACK_IMPORTED_MODULE_0__["default"],
      Footer: _Footer__WEBPACK_IMPORTED_MODULE_1__["default"],
      Head: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.Head
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LoadingIndicator.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LoadingIndicator.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LoadingIndicator',
  props: {
    position: {
      type: String,
      "default": null
    },
    dot: {
      type: Boolean,
      "default": false
    },
    loaderSize: {
      type: String,
      "default": "large"
    },
    centerLoader: {
      type: Boolean,
      "default": true
    },
    loaderPSizeClassName: {
      type: String,
      "default": ""
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var classNameValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""),
      loaderSize = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (props.loaderSize == "large") {
        loaderSize.value = "fa-3x";
      }
      if (props.loaderSize == "med") {
        loaderSize.value = "fa-2x";
      }
      if (props.loaderSize == "small") {
        loaderSize.value = "fa-1x";
      }
      if (props.centerLoader) {
        classNameValue.value = "loader";
      }
      if (props.position !== null && props.position === "full-page") {
        classNameValue.value = "".concat(classNameValue.value, " full-page-loader");
      }
      if (props.dot) {
        classNameValue.value = "".concat(classNameValue.value, " loader-dot");
      }
    });
    var __returned__ = {
      classNameValue: classNameValue,
      loaderSize: loaderSize,
      props: props,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LocalSearch.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LocalSearch.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/util */ "./resources/js/helper/util.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LocalSearch',
  props: {
    oldResultObj: {
      type: Object,
      "default": {}
    },
    whatToCheck: {
      type: String,
      "default": "name"
    },
    inputPlaceHolderValue: {
      type: String,
      "default": "Search ...."
    },
    inputClass: {
      type: String,
      "default": ""
    }
  },
  emits: ["updateResultObj"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
      emit = _ref.emit;
    expose();
    var props = __props;
    var filterText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var clearFilterInput = function clearFilterInput() {
      filterText.value = "";
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(filterText, function (newValue) {
      var newArrObj = [];
      if (newValue == "") {
        newArrObj = props.oldResultObj;
        //console.log(newArrObj);
      } else {
        newArrObj = (0,_helper_util__WEBPACK_IMPORTED_MODULE_1__.returnFilteredText)(newValue, props.oldResultObj, props.whatToCheck);
      }
      emit("updateResultObj", {
        arrObj: newArrObj,
        newValue: newValue
      });
    });
    var __returned__ = {
      filterText: filterText,
      props: props,
      emit: emit,
      clearFilterInput: clearFilterInput,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      returnFilteredText: _helper_util__WEBPACK_IMPORTED_MODULE_1__.returnFilteredText
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Logo.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Logo.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppLink_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLink.vue */ "./resources/js/shared/AppLink.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Logo',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      AppLink: _AppLink_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/OptionElement.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/OptionElement.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _LocalSearch_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalSearch.vue */ "./resources/js/shared/LocalSearch.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'OptionElement',
  props: {
    resultObj: {
      type: Object,
      "default": {}
    },
    optionSelected: {
      type: String,
      "default": ""
    },
    placeHolderText: {
      type: String,
      "default": "Search ...."
    }
  },
  emits: ["updateSelectedOptionInput"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
      emit = _ref.emit;
    expose();
    var props = __props;
    var optionElementData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      filteredResultObject: props.resultObj
    });
    var updateResultObj = function updateResultObj(resultObj) {
      optionElementData.filteredResultObject = resultObj.arrObj;
    };
    var handleSelectedOptionClicked = function handleSelectedOptionClicked(optionClciked) {
      if (optionClciked != props.optionSelected) {
        emit("updateSelectedOptionInput", optionClciked);
      }
    };
    var __returned__ = {
      emit: emit,
      props: props,
      optionElementData: optionElementData,
      updateResultObj: updateResultObj,
      handleSelectedOptionClicked: handleSelectedOptionClicked,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      LocalSearch: _LocalSearch_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/coWorkerSearch.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/coWorkerSearch.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/util */ "./resources/js/helper/util.js");
/* harmony import */ var _LoadingIndicator_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingIndicator.vue */ "./resources/js/shared/LoadingIndicator.vue");
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/axios */ "./resources/js/api/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'coWorkerSearch',
  props: {
    inputFocusFunc: {
      type: Function,
      "default": null
    },
    focusOnSearchInput: {
      type: Boolean,
      "default": false
    },
    isSearchOn: {
      type: Boolean,
      "default": false
    },
    makeResultAlink: {
      type: Boolean,
      "default": true
    },
    input_error: {
      type: Boolean,
      "default": false
    },
    resultFoundTextSingular: {
      type: String,
      "default": "result"
    },
    resultFoundTextplural: {
      type: String,
      "default": "results"
    },
    linkUrl: {
      type: String,
      "default": ""
    },
    placeholderText: {
      type: String,
      "default": "Search ...."
    },
    user_type: {
      type: String,
      "default": "all"
    },
    noResultText: {
      type: String,
      "default": "Sorry no result found, please try again thank you."
    }
  },
  emits: ["updateSelected"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
      emit = _ref.emit;
    expose();
    var props = __props;
    var searchedWord = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""),
      searchInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var handleResultClicked = function handleResultClicked(optionClciked) {
      if (props.makeResultAlink) {} else {
        //emit click result to parent
        emit("updateSelected", optionClciked);
      }
    };
    var searchData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      isSearching: false,
      isSearchComplete: false,
      customErr: "",
      coWorkerResData: []
    });
    var handleSearchForm = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchedWordValue) {
        var _res$data, res, _res$data2;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(searchedWordValue != "")) {
                _context.next = 17;
                break;
              }
              searchData.isSearching = true;
              if (searchData.isSearchComplete) {
                searchData.isSearchComplete = false;
              }
              _context.prev = 3;
              _context.next = 6;
              return _api_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/search-coworker", {
                searchedword: searchedWordValue,
                user_type: props.user_type
              });
            case 6:
              res = _context.sent;
              if ((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.error) != "") {
                searchData.customErr = res.data.error;
              } else {
                searchData.coWorkerResData = res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.coWorkerResData;
              }
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              searchData.customErr = (0,_helper_util__WEBPACK_IMPORTED_MODULE_1__.returnSystemErrorMsg)();
              //console.log(err);
            case 13:
              _context.prev = 13;
              searchData.isSearching = false;
              searchData.isSearchComplete = true;
              return _context.finish(13);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 10, 13, 17]]);
      }));
      return function handleSearchForm(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (props.focusOnSearchInput) {
        (0,_helper_util__WEBPACK_IMPORTED_MODULE_1__.focusOnFirstInput)(searchInput);
      }
    });

    //Watch the search input value for changes.
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(searchedWord, (0,lodash__WEBPACK_IMPORTED_MODULE_4__.debounce)(function (value) {
      handleSearchForm(value);
    }, 400));
    var __returned__ = {
      searchedWord: searchedWord,
      searchInput: searchInput,
      emit: emit,
      props: props,
      handleResultClicked: handleResultClicked,
      searchData: searchData,
      handleSearchForm: handleSearchForm,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      focusOnFirstInput: _helper_util__WEBPACK_IMPORTED_MODULE_1__.focusOnFirstInput,
      returnSystemErrorMsg: _helper_util__WEBPACK_IMPORTED_MODULE_1__.returnSystemErrorMsg,
      returnCoWorkerFullName: _helper_util__WEBPACK_IMPORTED_MODULE_1__.returnCoWorkerFullName,
      LoadingIndicator: _LoadingIndicator_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      axios: _api_axios__WEBPACK_IMPORTED_MODULE_3__["default"],
      debounce: lodash__WEBPACK_IMPORTED_MODULE_4__.debounce
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CoWorkerSignIn.vue?vue&type=template&id=7da0af35":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CoWorkerSignIn.vue?vue&type=template&id=7da0af35 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-10 mx-auto"
};
var _hoisted_4 = {
  "class": "form-wrapper"
};
var _hoisted_5 = {
  key: 0
};
var _hoisted_6 = {
  key: 1
};
var _hoisted_7 = {
  "class": "text-center"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sign out");
var _hoisted_9 = {
  key: 2
};
var _hoisted_10 = {
  key: 3
};
var _hoisted_11 = {
  key: 0
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "text-center mb-3"
}, "IC co-workers only", -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center small mb-3"
}, " Please note, all fields marked with a * are required ", -1 /* HOISTED */);
var _hoisted_14 = ["onSubmit"];
var _hoisted_15 = {
  "class": "row"
};
var _hoisted_16 = {
  "class": "col-md-10 mx-auto"
};
var _hoisted_17 = {
  key: 0,
  "class": "pb-5"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Your first or last name *", -1 /* HOISTED */);
var _hoisted_19 = {
  key: 1
};
var _hoisted_20 = {
  "class": "bolded"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your name: ");
var _hoisted_22 = {
  "class": "selected-visitor-p ml-1"
};
var _hoisted_23 = {
  "class": "pr-3"
};
var _hoisted_24 = {
  "class": "form-group"
};
var _hoisted_25 = {
  "class": "form-label",
  "for": "visiting"
};
var _hoisted_26 = {
  "class": "optional"
};
var _hoisted_27 = {
  key: 0,
  "class": "text-danger small"
};
var _hoisted_28 = {
  key: 1,
  "class": "selected-visitor-p"
};
var _hoisted_29 = {
  "class": "ml-2 pr-3"
};
var _hoisted_30 = {
  key: 2
};
var _hoisted_31 = {
  "class": "form-group"
};
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "reason"
}, "Reason *", -1 /* HOISTED */);
var _hoisted_33 = {
  key: 0,
  "class": "text-danger small"
};
var _hoisted_34 = {
  "class": "input-group"
};
var _hoisted_35 = {
  "class": "input-group-append"
};
var _hoisted_36 = {
  key: 1,
  "class": "quick-outer-wrapper"
};
var _hoisted_37 = {
  key: 0
};
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "small"
}, "Quick reason", -1 /* HOISTED */);
var _hoisted_39 = {
  "class": "quick-wrapper pb-2"
};
var _hoisted_40 = ["onClick"];
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "badge"
}, "Badge id* ", -1 /* HOISTED */);
var _hoisted_42 = {
  key: 0,
  "class": "text-danger small"
};
var _hoisted_43 = {
  "class": "input-group"
};
var _hoisted_44 = {
  "class": "input-group-append"
};
var _hoisted_45 = {
  "class": "pt-3 text-center"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Submit");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Layout"], {
    pageTitle: "co-worker-signin",
    backUrl: "/sign-in-option"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$setup.processing && $props.respondsMsg == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingIndicator"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.processing && $props.respondsMsg == 'code000' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        showHeading: false,
        infotype: "error",
        customClass: "form-responds-msg",
        msg: "You have already signed in, please sign out first before signing back in thank you!"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppLink"], {
        className: "primary-btn",
        linkUrl: "/signout"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_8];
        }),
        _: 1 /* STABLE */
      })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.processing && $props.respondsMsg == 'code200' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        showHeading: false,
        infotype: "success",
        msg: "Sign in successful thank you!",
        customClass: "form-responds-msg"
      })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.processing && $props.respondsMsg == '' || $props.respondsMsg == 'code100' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_10, [!$setup.processing && $props.respondsMsg == 'code100' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        infotype: "error",
        customHeading: 'Error ' + $props.respondsMsg,
        msg: $setup.returnSystemErrorMsg(),
        customClass: "form-responds-msg"
      }, null, 8 /* PROPS */, ["customHeading", "msg"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_12, _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.handleIvSigninForm, ["prevent"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [$setup.coworkerSignInData.selected_coworker == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["coWorkerSearch"], {
        makeResultAlink: false,
        focusOnSearchInput: true,
        resultFoundTextSingular: "person",
        resultFoundTextplural: "people",
        user_type: "coworker",
        placeholderText: "Let's find you...",
        noResultText: "Sorry we could'nt find you, this sign page is for only IC co-workers only",
        onUpdateSelected: $setup.updateSelectedCoworker
      })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.coworkerSignInData.selected_coworker), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "change-visitor-btn",
        onClick: $setup.changeCoworker
      }, " Change ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.coworkerSignInData.signInForm.visiting == "" ? "Host *" : "Your host:"), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_26, " (Who are you here to see?)", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.coworkerSignInData.signInForm.visiting == '']]), $setup.coworkerSignInData.signInFormError.host_err != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.coworkerSignInData.signInFormError.host_err), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.coworkerSignInData.signInForm.visiting != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.coworkerSignInData.signInForm.visiting), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "change-visitor-btn",
        onClick: $setup.changeHost
      }, " Change ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["coWorkerSearch"], {
        makeResultAlink: false,
        resultFoundTextSingular: "person",
        resultFoundTextplural: "people",
        user_type: "coworker",
        input_error: $setup.coworkerSignInData.signInFormError.host_err != '' ? true : false,
        noResultText: "Sorry no one found, try again or you can leave this field empty thank you.",
        onUpdateSelected: $setup.updateSelectedHost,
        inputFocusFunc: function inputFocusFunc() {
          return $setup.removeFormInputError('host');
        }
      }, null, 8 /* PROPS */, ["input_error", "inputFocusFunc"])]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, $setup.coworkerSignInData.signInFormError.reason_err != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.coworkerSignInData.signInFormError.reason_err), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.coworkerSignInData.signInForm.reason = $event;
        }),
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'form-control': true,
          'input-error': $setup.coworkerSignInData.signInFormError.reason_err != '' ? true : false
        }),
        id: "reason",
        name: "reason",
        maxlength: "255",
        autocomplete: "off",
        onKeypress: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
        onFocus: _cache[2] || (_cache[2] = function () {
          return $setup.removeFormInputError('reason');
        })
      }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.coworkerSignInData.signInForm.reason]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnType: "button",
        customClass: "option-toggle-btn",
        btnFunc: function btnFunc() {
          return $setup.toggleOptionWrapperDiv('reason');
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.coworkerSignInData.isReasonOptionDivOpened ? 'fas fa-arrow-up' : 'fas fa-arrow-down')
          }, null, 2 /* CLASS */)];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])])]), $props.reasonResult.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, [$setup.coworkerSignInData.isReasonOptionDivOpened ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["OptionElement"], {
        resultObj: $props.reasonResult,
        optionSelected: $setup.coworkerSignInData.signInForm.reason,
        placeHolderText: "Search for reason",
        onUpdateSelectedOptionInput: $setup.handleQuickReason
      }, null, 8 /* PROPS */, ["resultObj", "optionSelected"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.reasonResult, function (reason, reasonIndex) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: reasonIndex
        }, [reason.quick_reason == 'yes' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'quick-btn': true,
            'quick-btn-disabled': $setup.coworkerSignInData.signInForm.reason == reason.name
          }),
          onClick: function onClick() {
            return $setup.handleQuickReason(reason.name);
          }
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(reason.name), 11 /* TEXT, CLASS, PROPS */, _hoisted_40)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
      }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_41, $setup.coworkerSignInData.signInFormError.badge_err != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.coworkerSignInData.signInFormError.badge_err), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.coworkerSignInData.signInForm.badge = $event;
        }),
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'form-control ext-badgeid-input': true,
          'input-error': $setup.coworkerSignInData.signInFormError.badge_err != '' ? true : false
        }),
        id: "badge",
        name: "badge",
        maxlength: "8",
        autocomplete: "off",
        onKeypress: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
        onFocus: _cache[5] || (_cache[5] = function () {
          return $setup.removeFormInputError('badge');
        })
      }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.coworkerSignInData.signInForm.badge]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'badge-img ext-badge-img': true,
          'input-error': $setup.coworkerSignInData.signInFormError.badge_err != '' ? true : false
        }),
        src: "/imgs/badge.jpg",
        alt: "badge"
      }, null, 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div input-group ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $setup.coworkerSignInData.signInForm.myhouse = $event;
        }),
        type: "text",
        maxlength: "2",
        name: "myhouse",
        "class": "not_in_my_house",
        onKeypress: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"]))
      }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.coworkerSignInData.signInForm.myhouse]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"text-center col-md-12 pt-4\">\r\n                        <AppCheckBox\r\n                          :default_checked=\"coworkerSignInData.signInForm.code1000\"\r\n                          :checkbox_error=\"\r\n                            coworkerSignInData.signInFormError.code1000_err\r\n                          \"\r\n                          @updateCheckBox=\"updateCheckBox\"\r\n                        >\r\n                          I have received <strong>site induction</strong>, read and\r\n                          understood <strong>code 5K</strong> evacuation process*\r\n                        </AppCheckBox>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnType: "submit",
        btnStyle: "primary",
        customClass: "iv-submit-btn"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_46];
        }),
        _: 1 /* STABLE */
      })])]))])])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_14)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Error.vue?vue&type=template&id=94ed5362":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Error.vue?vue&type=template&id=94ed5362 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container pb-5"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-10 mx-auto"
};
var _hoisted_4 = {
  "class": "pt-2 pb-5"
};
var _hoisted_5 = {
  "class": "pl-4 pt-5"
};
var _hoisted_6 = {
  "class": "form-wrapper"
};
var _hoisted_7 = {
  "class": "pt-4"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Go to home page");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "\r\n    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.appName + " | " + $setup.title) + "\r\n  ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Logo"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppLink"], {
    linkUrl: "/",
    className: "primary-btn"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1 /* STABLE */
  })])])])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ExtVisitorSignIn.vue?vue&type=template&id=84358190":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ExtVisitorSignIn.vue?vue&type=template&id=84358190 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-12"
};
var _hoisted_4 = {
  "class": "form-wrapper"
};
var _hoisted_5 = {
  key: 0
};
var _hoisted_6 = {
  key: 1
};
var _hoisted_7 = {
  "class": "text-center"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sign out");
var _hoisted_9 = {
  key: 2
};
var _hoisted_10 = {
  key: 3
};
var _hoisted_11 = {
  key: 0
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "text-center mb-2"
}, "External visitors/contractors only", -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center small mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "optional"
}, " (Please note, all fields marked with a * are required)")], -1 /* HOISTED */);
var _hoisted_14 = ["onSubmit"];
var _hoisted_15 = {
  "class": "mb-5"
};
var _hoisted_16 = {
  "class": "row"
};
var _hoisted_17 = {
  "class": "col-md-7 mx-auto mb-3 mt-3"
};
var _hoisted_18 = {
  key: 0
};
var _hoisted_19 = {
  key: 1,
  "class": "input-group"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group-prepend"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label mr-2",
  "for": "badge"
}, "Badge id* ")], -1 /* HOISTED */);
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group-append"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "badge-img ext-badge-img",
  src: "/imgs/badge.jpg",
  alt: "badge"
})], -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "row"
};
var _hoisted_23 = {
  "class": "col-md-12 pb-3"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label pr-2"
}, "Your badge id is:", -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "selected-visitor-p"
};
var _hoisted_26 = {
  "class": "col-md-6"
};
var _hoisted_27 = {
  "class": "form-group"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "fname"
}, "First name *", -1 /* HOISTED */);
var _hoisted_29 = {
  key: 0,
  "class": "text-danger small"
};
var _hoisted_30 = {
  "class": "form-group"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "phone"
}, "Phone *", -1 /* HOISTED */);
var _hoisted_32 = {
  key: 0,
  "class": "text-danger small"
};
var _hoisted_33 = {
  "class": "form-group"
};
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "reason"
}, "Reason *", -1 /* HOISTED */);
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "optional"
}, " (Why you're here today?)", -1 /* HOISTED */);
var _hoisted_36 = {
  key: 0,
  "class": "text-danger small"
};
var _hoisted_37 = {
  "class": "input-group"
};
var _hoisted_38 = {
  "class": "input-group-append"
};
var _hoisted_39 = {
  key: 1,
  "class": "quick-outer-wrapper"
};
var _hoisted_40 = {
  key: 0
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "small"
}, "Quick reason", -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "quick-wrapper pb-2"
};
var _hoisted_43 = ["onClick"];
var _hoisted_44 = {
  "class": "col-md-6"
};
var _hoisted_45 = {
  "class": "form-group"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "lname"
}, "Last name *", -1 /* HOISTED */);
var _hoisted_47 = {
  key: 0,
  "class": "text-danger small"
};
var _hoisted_48 = {
  "class": "form-group"
};
var _hoisted_49 = {
  "class": "form-label",
  "for": "visiting"
};
var _hoisted_50 = {
  "class": "optional"
};
var _hoisted_51 = {
  key: 0,
  "class": "text-danger small"
};
var _hoisted_52 = {
  key: 1,
  "class": "selected-visitor-p"
};
var _hoisted_53 = {
  "class": "pr-3"
};
var _hoisted_54 = {
  key: 2
};
var _hoisted_55 = {
  "class": "form-group"
};
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "company"
}, "Company", -1 /* HOISTED */);
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "optional"
}, " (Optional)", -1 /* HOISTED */);
var _hoisted_58 = {
  "class": "input-group"
};
var _hoisted_59 = {
  "class": "input-group-append"
};
var _hoisted_60 = {
  key: 0,
  "class": "quick-outer-wrapper"
};
var _hoisted_61 = {
  key: 0
};
var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "small"
}, "Quick company", -1 /* HOISTED */);
var _hoisted_63 = {
  "class": "quick-wrapper pb-2"
};
var _hoisted_64 = ["onClick"];
var _hoisted_65 = {
  "class": "text-center col-md-12 pt-3"
};
var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" I have received ");
var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "site induction", -1 /* HOISTED */);
var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", read and understood ");
var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "code 5K", -1 /* HOISTED */);
var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" evacuation process* ");
var _hoisted_71 = {
  "class": "pt-3 col-md-6 mx-auto"
};
var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sign in");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Layout"], {
    pageTitle: "ext-visitor-signin",
    backUrl: "/sign-in-option"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" loading spinner when sending the form "), $setup.processing && $props.respondsMsg == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingIndicator"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Error from processing the form "), !$setup.processing && $props.respondsMsg == 'code000' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        showHeading: false,
        infotype: "error",
        customClass: "form-responds-msg",
        msg: "You have already signed in, please sign out first before signing back in thank you!"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppLink"], {
        className: "primary-btn",
        linkUrl: "/signout"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_8];
        }),
        _: 1 /* STABLE */
      })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Success from processing the form "), !$setup.processing && $props.respondsMsg == 'code200' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        showHeading: false,
        infotype: "success",
        msg: "Sign in successful thank you!",
        customClass: "form-responds-msg"
      })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.processing && $props.respondsMsg == '' || $props.respondsMsg == 'code100' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" System error from processing the form "), !$setup.processing && $props.respondsMsg == 'code100' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        infotype: "error",
        customHeading: 'Error ' + $props.respondsMsg,
        msg: $setup.returnSystemErrorMsg(),
        customClass: "form-responds-msg"
      }, null, 8 /* PROPS */, ["customHeading", "msg"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_12, _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.handleIvSigninForm, ["prevent"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Check if visitor/contractor is regular and populate the form "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [$setup.signInData.badge_id_err != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        infotype: "error",
        customHeading: 'Badge error_01 ',
        msg: $setup.signInData.badge_id_err,
        customClass: "form-responds-msg"
      }, null, 8 /* PROPS */, ["msg"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        ref: "firstInput",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.badge_id = $event;
        }),
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'form-control ext-badgeid-input': true,
          'input-error': $setup.signInData.signInFormError.badge_err != '' ? true : false
        }),
        id: "badge",
        name: "badge",
        maxlength: "8",
        autocomplete: "off",
        onKeypress: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
        onFocus: _cache[2] || (_cache[2] = function () {
          return $setup.removeFormInputError('badge');
        })
      }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.badge_id]]), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div input-group ")])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingIndicator"], {
        loaderSize: "small",
        loaderPSizeClassName: "invisible"
      })], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.signInData.checking_badge]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div col-md-7 mx-auto ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div row ")])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.signInData.checking_badge_complete]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Show rest of form "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.signInData.signInForm.badge) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "ml-2 change-visitor-btn",
        onClick: $setup.changeBadge
      }, " Change ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div col-md-12 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, $setup.signInData.signInFormError.first_name_err != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.signInData.signInFormError.first_name_err), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.signInData.signInForm.first_name = $event;
        }),
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'form-control': true,
          'input-error': $setup.signInData.signInFormError.first_name_err != '' ? true : false
        }),
        id: "fname",
        name: "first_name",
        maxlength: "255",
        autocomplete: "off",
        onKeypress: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
        onFocus: _cache[5] || (_cache[5] = function () {
          return $setup.removeFormInputError('fname');
        })
      }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signInData.signInForm.first_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div form-group "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, $setup.signInData.signInFormError.phone_err != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.signInData.signInFormError.phone_err), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $setup.signInData.signInForm.phone = $event;
        }),
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'form-control': true,
          'input-error': $setup.signInData.signInFormError.phone_err != '' ? true : false
        }),
        id: "phone",
        name: "phone",
        maxlength: "11",
        autocomplete: "off",
        onKeypress: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
        onFocus: _cache[8] || (_cache[8] = function () {
          return $setup.removeFormInputError('phone');
        })
      }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signInData.signInForm.phone]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div form-group "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, _hoisted_35, $setup.signInData.signInFormError.reason_err != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.signInData.signInFormError.reason_err), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return $setup.signInData.signInForm.reason = $event;
        }),
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'form-control': true,
          'input-error': $setup.signInData.signInFormError.reason_err != '' ? true : false
        }),
        id: "reason",
        name: "reason",
        maxlength: "255",
        autocomplete: "off",
        onKeypress: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
        onFocus: _cache[11] || (_cache[11] = function () {
          return $setup.removeFormInputError('reason');
        })
      }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signInData.signInForm.reason]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnType: "button",
        customClass: "option-toggle-btn",
        btnFunc: function btnFunc() {
          return $setup.toggleOptionWrapperDiv('reason');
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.signInData.isReasonOptionDivOpened ? 'fas fa-arrow-up' : 'fas fa-arrow-down')
          }, null, 2 /* CLASS */)];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])])]), $props.reasonResult.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_39, [$setup.signInData.isReasonOptionDivOpened ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["OptionElement"], {
        resultObj: $props.reasonResult,
        optionSelected: $setup.signInData.signInForm.reason,
        placeHolderText: "Search for reason",
        onUpdateSelectedOptionInput: $setup.handleQuickReason
      }, null, 8 /* PROPS */, ["resultObj", "optionSelected"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.reasonResult, function (reason, reasonIndex) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: reasonIndex
        }, [reason.quick_reason == 'yes' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'quick-btn': true,
            'quick-btn-disabled': $setup.signInData.signInForm.reason == reason.name
          }),
          onClick: function onClick() {
            return $setup.handleQuickReason(reason.name);
          }
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(reason.name), 11 /* TEXT, CLASS, PROPS */, _hoisted_43)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
      }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div form-group ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div col-md-6 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, $setup.signInData.signInFormError.last_name_err != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.signInData.signInFormError.last_name_err), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
          return $setup.signInData.signInForm.last_name = $event;
        }),
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'form-control': true,
          'input-error': $setup.signInData.signInFormError.last_name_err != '' ? true : false
        }),
        id: "lname",
        name: "last_name",
        maxlength: "255",
        autocomplete: "off",
        onKeypress: _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
        onFocus: _cache[14] || (_cache[14] = function () {
          return $setup.removeFormInputError('lname');
        })
      }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signInData.signInForm.last_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div form-group "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.signInData.signInForm.visiting == "" ? "Host * " : "Your host: "), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_50, " (Who are you here to see?)", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.signInData.signInForm.visiting == '']]), $setup.signInData.signInFormError.host_err != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.signInData.signInFormError.host_err), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.signInData.signInForm.visiting != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.signInData.signInForm.visiting), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "change-visitor-btn",
        onClick: $setup.changeVisitor
      }, " Change ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["coWorkerSearch"], {
        makeResultAlink: false,
        resultFoundTextSingular: "person",
        resultFoundTextplural: "people",
        noResultText: "Sorry no one found, try again or you can leave this field empty thank you.",
        onUpdateSelected: $setup.updateUserSelected,
        inputFocusFunc: function inputFocusFunc() {
          return $setup.removeFormInputError('host');
        }
      }, null, 8 /* PROPS */, ["inputFocusFunc"])]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div form group "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
          return $setup.signInData.signInForm.company = $event;
        }),
        type: "text",
        "class": "form-control",
        id: "company",
        name: "company",
        maxlength: "255",
        autocomplete: "off",
        onKeypress: _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
        onFocus: _cache[17] || (_cache[17] = function () {
          return $setup.removeFormInputError('company');
        })
      }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signInData.signInForm.company]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnType: "button",
        customClass: "option-toggle-btn",
        btnFunc: function btnFunc() {
          return $setup.toggleOptionWrapperDiv('company');
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.signInData.isCompanyOptionDivOpened ? 'fas fa-arrow-up' : 'fas fa-arrow-down')
          }, null, 2 /* CLASS */)];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])])]), $props.companyResult.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_60, [$setup.signInData.isCompanyOptionDivOpened ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["OptionElement"], {
        resultObj: $props.companyResult,
        optionSelected: $setup.signInData.signInForm.company,
        onUpdateSelectedOptionInput: $setup.handleQuickCompany,
        placeHolderText: "Search for company"
      }, null, 8 /* PROPS */, ["resultObj", "optionSelected"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.companyResult, function (company, companyIndex) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: companyIndex
        }, [company.is_quick == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'quick-btn': true,
            'quick-btn-disabled': $setup.signInData.signInForm.company == company.name
          }),
          onClick: function onClick() {
            return $setup.handleQuickCompany(company.name);
          }
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(company.name), 11 /* TEXT, CLASS, PROPS */, _hoisted_64)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
      }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div form group ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div col-md-6 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Bot detection "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
          return $setup.signInData.signInForm.myhouse = $event;
        }),
        type: "text",
        maxlength: "2",
        name: "myhouse",
        "class": "not_in_my_house",
        onKeypress: _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"]))
      }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signInData.signInForm.myhouse]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppCheckBox"], {
        default_checked: $setup.signInData.signInForm.code1000,
        checkbox_error: $setup.signInData.signInFormError.code1000_err,
        onUpdateCheckBox: $setup.updateCheckBox
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_66, _hoisted_67, _hoisted_68, _hoisted_69, _hoisted_70];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["default_checked", "checkbox_error"])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.signInData.signInForm.reason == 'Work']])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div col-md-12 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnType: "submit",
        btnStyle: "primary",
        customClass: "iv-submit-btn"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_72];
        }),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div row ")], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.signInData.checking_badge_complete]])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_14)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div form wrapper ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div col-md-12 ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div row ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div container ")])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/GoingOffSite.vue?vue&type=template&id=5099c605":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/GoingOffSite.vue?vue&type=template&id=5099c605 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row mb-5"
};
var _hoisted_3 = {
  "class": "col-md-8 mx-auto mb-4"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "text-center"
}, "Going off site", -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "text-center"
};
var _hoisted_6 = {
  "class": "text-center"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = {
  "class": "col-md-8 mx-auto"
};
var _hoisted_9 = {
  "class": "form-wrapper"
};
var _hoisted_10 = {
  "class": "text-center pt-5"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "bolded"
}, "Are you IC Co-worker?", -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "text-center pt-4"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" No ");
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Yes ");
var _hoisted_15 = {
  "class": "text-center"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sign in");
var _hoisted_17 = {
  "class": "small mb-3 mt-3"
};
var _hoisted_18 = ["onSubmit"];
var _hoisted_19 = {
  key: 0
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Last name *", -1 /* HOISTED */);
var _hoisted_21 = {
  key: 1
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "bolded mt-3"
}, "Your name:", -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "selected-visitor-p"
};
var _hoisted_24 = {
  "class": "pr-3"
};
var _hoisted_25 = {
  "class": "row"
};
var _hoisted_26 = {
  "class": "col-md-6"
};
var _hoisted_27 = {
  "class": "form-group"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "fname"
}, "First name *", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "col-md-6"
};
var _hoisted_30 = {
  "class": "form-group"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "lname"
}, "Last name *", -1 /* HOISTED */);
var _hoisted_32 = {
  "class": "col-md-12"
};
var _hoisted_33 = {
  "class": "form-group"
};
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "company"
}, "Company *", -1 /* HOISTED */);
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "small"
}, " Select, pick or type your company if it's not listed. ", -1 /* HOISTED */);
var _hoisted_36 = {
  "class": "input-group"
};
var _hoisted_37 = {
  "class": "input-group-append"
};
var _hoisted_38 = {
  key: 0,
  "class": "quick-outer-wrapper"
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "small"
}, "Quick company", -1 /* HOISTED */);
var _hoisted_40 = {
  "class": "quick-wrapper pb-2"
};
var _hoisted_41 = ["onClick"];
var _hoisted_42 = {
  "class": "pt-4 text-center"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Submit");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, " IC co-workers only ", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.going_off_site_data.form_data.yes_no_action == 'Yes']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, " External visitors/contractors only ", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.going_off_site_data.form_data.yes_no_action == 'No']])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
    btnFunc: function btnFunc() {
      return $setup.handleYesNoBtn('No');
    },
    customClass: "btn-warning mr-3 bolded pt-3 pb-3 pl-5 pr-5"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_13];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["btnFunc"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
    btnFunc: function btnFunc() {
      return $setup.handleYesNoBtn('Yes');
    },
    customClass: "btn-primary ml-3 bolded pt-3 pb-3 pl-5 pr-5"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["btnFunc"])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.going_off_site_data.form_data.yes_no_action == '']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" if processing form "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingIndicator"])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.going_off_site_data.is_processing && $setup.going_off_site_data.responds_code == '']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" if success "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
    showHeading: false,
    infotype: "success",
    msg: "Signed out successful thank you!",
    customClass: "form-responds-msg"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.going_off_site_data.is_processing && $setup.going_off_site_data.responds_code == 'code0']])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" if error "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
    infotype: "error",
    customHeading: 'Error ' + $setup.going_off_site_data.responds_code,
    msg: $setup.returnSystemErrorMsg(),
    customClass: "form-responds-msg"
  }, null, 8 /* PROPS */, ["customHeading", "msg"])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.going_off_site_data.is_processing && $setup.going_off_site_data.responds_code == 'code1']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" if signed out for the day and not siged back in yet "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
    infotype: "error",
    customHeading: 'Error ' + $setup.going_off_site_data.responds_code,
    msg: "You didn't sign back in the last you went out, please sign back in first before signing out again thank you!",
    customClass: "form-responds-msg"
  }, null, 8 /* PROPS */, ["customHeading"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppLink"], {
    className: "primary-btn",
    linkUrl: "/temp-offsite-backin/".concat($setup.going_off_site_data.signed_out_id)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_16];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["linkUrl"])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.going_off_site_data.is_processing && $setup.going_off_site_data.responds_code == 'code2']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" show form "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_17, " Please note, all fields marked with a * are required ", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.going_off_site_data.form_data.yes_no_action == 'Yes' || $setup.going_off_site_data.form_data.yes_no_action == 'No']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.handleGoingOffSiteForm, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [$setup.going_off_site_data.form_data.fname == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["coWorkerSearch"], {
    makeResultAlink: false,
    focusOnSearchInput: true,
    resultFoundTextSingular: "person",
    resultFoundTextplural: "people",
    placeholderText: "Let's find you...",
    noResultText: "Sorry we could'nt find you, this sign page is for only ZYX co-workers only",
    onUpdateSelected: $setup.updateUserSelected
  })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.returnCoWorkerFullName($setup.going_off_site_data.form_data.fname, $setup.going_off_site_data.form_data.lname)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "change-visitor-btn",
    onClick: $setup.changeCoworker
  }, " Change ")])]))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.going_off_site_data.form_data.yes_no_action == 'Yes']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "text-danger small"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.going_off_site_data.form_errors.fname_err), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.going_off_site_data.form_errors.fname_err != '']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.going_off_site_data.form_data.fname = $event;
    }),
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'form-control': true,
      'input-error': $setup.going_off_site_data.form_errors.fname_err != '' ? true : false
    }),
    maxlength: "255",
    autocomplete: "off",
    onKeypress: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
    onFocus: _cache[2] || (_cache[2] = function () {
      return $setup.removeFormInputError('fname');
    })
  }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.going_off_site_data.form_data.fname]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end col-md-6 ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "text-danger small"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.going_off_site_data.form_errors.lname_err), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.going_off_site_data.form_errors.lname_err != '']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.going_off_site_data.form_data.lname = $event;
    }),
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'form-control': true,
      'input-error': $setup.going_off_site_data.form_errors.lname_err != '' ? true : false
    }),
    maxlength: "255",
    autocomplete: "off",
    onKeypress: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
    onFocus: _cache[5] || (_cache[5] = function () {
      return $setup.removeFormInputError('lname');
    })
  }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.going_off_site_data.form_data.lname]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end col-md-6 ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "text-danger small"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.going_off_site_data.form_errors.depart_comp_err), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.going_off_site_data.form_errors.depart_comp_err != '']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.going_off_site_data.form_data.depart_comp = $event;
    }),
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'form-control': true,
      'input-error': $setup.going_off_site_data.form_errors.depart_comp_err != '' ? true : false
    }),
    maxlength: "255",
    autocomplete: "off",
    onKeypress: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
    onFocus: _cache[8] || (_cache[8] = function () {
      return $setup.removeFormInputError('company');
    })
  }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.going_off_site_data.form_data.depart_comp]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
    btnType: "button",
    customClass: "option-toggle-btn",
    btnFunc: function btnFunc() {
      return $setup.toggleOptionWrapperDiv('company');
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.going_off_site_data.is_company_option_div_opened ? 'fas fa-arrow-up' : 'fas fa-arrow-down')
      }, null, 2 /* CLASS */)];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["btnFunc"])])]), $props.company_result.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["OptionElement"], {
    resultObj: $props.company_result,
    optionSelected: $setup.going_off_site_data.form_data.depart_comp,
    onUpdateSelectedOptionInput: $setup.handleQuickCompany,
    placeHolderText: "Search for company"
  }, null, 8 /* PROPS */, ["resultObj", "optionSelected"])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.going_off_site_data.is_company_option_div_opened]]), _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.company_result, function (company, company_index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: company_index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'quick-btn': true,
        'quick-btn-disabled': $setup.going_off_site_data.form_data.depart_comp == company.name
      }),
      onClick: function onClick() {
        return $setup.handleQuickCompany(company.name);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(company.name), 11 /* TEXT, CLASS, PROPS */, _hoisted_41), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, company.is_quick == 1]])]);
  }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end col-md-12 ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end row")])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.going_off_site_data.form_data.yes_no_action == 'No']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.going_off_site_data.form_data.myhouse = $event;
    }),
    type: "text",
    maxlength: "2",
    name: "myhouse",
    "class": "not_in_my_house",
    onKeypress: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"]))
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.going_off_site_data.form_data.myhouse]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
    btnType: "submit",
    customClass: "btn-primary",
    fullBtn: true
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_43];
    }),
    _: 1 /* STABLE */
  })])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.showSubmitBtn()]])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_18)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.going_off_site_data.is_processing && $setup.going_off_site_data.responds_code == '']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end form wrapper ")])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-10 mx-auto"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col text-right"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" I'm Signing");
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" in/out ");
var _hoisted_9 = {
  "class": "col"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Temporarily");
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Off Site ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Layout"], {
    pageTitle: "home"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnFunc: function btnFunc() {
          return $setup.initiateSignInOutOption();
        },
        btnStyle: "primary2",
        customClass: "sign-in-out-btn mr-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_6, _hoisted_7, _hoisted_8];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnFunc: function btnFunc() {
          return $setup.initiateTempInOut();
        },
        btnStyle: "warn",
        customClass: "sign-in-out-btn ml-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_10, _hoisted_11, _hoisted_12];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])])])])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/OffSiteBackIn.vue?vue&type=template&id=284d5da9":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/OffSiteBackIn.vue?vue&type=template&id=284d5da9 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-10 mx-auto"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-md-12"
};
var _hoisted_6 = {
  key: 0
};
var _hoisted_7 = {
  key: 1
};
var _hoisted_8 = {
  "class": "form-wrapper"
};
var _hoisted_9 = {
  key: 2
};
var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = {
  "class": "row"
};
var _hoisted_12 = {
  "class": "col-md-10 mx-auto"
};
var _hoisted_13 = {
  "class": "form-wrapper"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "text-center mb-3"
}, "Temp Offsite backin", -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center small mb-3"
}, " Please note, all fields marked with a * are required ", -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "form-group"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "lname"
}, "Last name *", -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "find-visitor-signin-result-div"
};
var _hoisted_19 = {
  key: 0
};
var _hoisted_20 = {
  key: 1
};
var _hoisted_21 = {
  "class": "col"
};
var _hoisted_22 = {
  "class": "col"
};
var _hoisted_23 = {
  "class": "col text-right"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back in ");
var _hoisted_25 = {
  "class": "mt-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Layout"], {
    pageTitle: "signout",
    backUrl: "/temp-in-out"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [$setup.processing && $setup.sign_in_data.responds_code == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingIndicator"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.processing && $setup.sign_in_data.responds_code == 'code0' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        showHeading: false,
        infotype: "success",
        msg: "Sign in successful thank you!",
        customClass: "form-responds-msg"
      })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.processing && $setup.sign_in_data.responds_code == 'code1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        infotype: "error",
        customHeading: 'Error ' + $setup.sign_in_data.responds_code,
        msg: $setup.returnSystemErrorMsg(),
        customClass: "form-responds-msg"
      }, null, 8 /* PROPS */, ["customHeading", "msg"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), !$setup.processing && $setup.sign_in_data.responds_code == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        ref: "firstInput",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.searchvalue = $event;
        }),
        type: "text",
        "class": "form-control",
        placeholder: "Let's find you...",
        maxlength: "255",
        autocomplete: "off",
        onKeypress: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"]))
      }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchvalue]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [$setup.sign_in_data.is_searching ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingIndicator"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_20, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.sign_in_data.temp_sign_out_res, function (temp_off_site, temp_off_site_index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          "class": "row",
          key: temp_off_site_index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(temp_off_site.fname), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(temp_off_site.lname), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
          customClass: "btn-primary",
          btnFunc: function btnFunc() {
            return $setup.handleSignBackInBtnClick(temp_off_site.id);
          }
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [_hoisted_24];
          }),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["btnFunc"])])]))], 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.sign_in_data.temp_sign_out_res.length > 0]]);
      }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        infotype: "error",
        customHeading: 'Error code1',
        msg: $setup.returnCanNotFindVistorErrorMsg(),
        customClass: "form-responds-msg"
      }, null, 8 /* PROPS */, ["msg"])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.sign_in_data.is_search_complete && $setup.sign_in_data.temp_sign_out_res.length <= 0]])]))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=template&id=62d4457a":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=template&id=62d4457a ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center bolded"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Service office sign in page coming soon!")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Layout"], {
    pageTitle: "service-office-signin",
    backUrl: "/sign-in-option"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOption.vue?vue&type=template&id=5980ed60":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOption.vue?vue&type=template&id=5980ed60 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-10 mx-auto"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col text-right"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" I'm IC co-worker ");
var _hoisted_7 = {
  "class": "col"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" I'm visitor/contractor ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Layout"], {
    pageTitle: "home",
    backUrl: "/sign-in-out-option"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnFunc: function btnFunc() {
          return $setup.initiateCoWokerSignIn();
        },
        btnStyle: "success",
        customClass: "sign-in-out-btn mr-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_6];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnFunc: function btnFunc() {
          return $setup.initiateExtVisitorSiginIn();
        },
        btnStyle: "primary2",
        customClass: "sign-in-out-btn ml-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_8];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])])])])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOut.vue?vue&type=template&id=20427ef3":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOut.vue?vue&type=template&id=20427ef3 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-10 mx-auto"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col text-right"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sign In ");
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-arrow-down"
}, null, -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "col"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sign Out ");
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-arrow-up"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Layout"], {
    pageTitle: "home",
    backUrl: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnFunc: function btnFunc() {
          return $setup.initiateSignInOption();
        },
        btnStyle: "success",
        customClass: "sign-in-out-btn mr-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_6, _hoisted_7];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnFunc: function btnFunc() {
          return $setup.initiateSignOut();
        },
        btnStyle: "danger",
        customClass: "sign-in-out-btn ml-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_9, _hoisted_10];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])])])])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignOut.vue?vue&type=template&id=7d19ac58":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignOut.vue?vue&type=template&id=7d19ac58 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-10 mx-auto"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-md-12"
};
var _hoisted_6 = {
  key: 0
};
var _hoisted_7 = {
  key: 1
};
var _hoisted_8 = {
  "class": "form-wrapper"
};
var _hoisted_9 = {
  key: 2
};
var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = {
  "class": "row"
};
var _hoisted_12 = {
  "class": "col-md-10 mx-auto"
};
var _hoisted_13 = {
  "class": "form-wrapper"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "text-center mb-3"
}, "Sign out", -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center small mb-3"
}, " Please note, all fields marked with a * are required ", -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "form-group"
};
var _hoisted_17 = {
  "class": "row"
};
var _hoisted_18 = {
  "class": "col"
};
var _hoisted_19 = {
  "class": "form-label",
  "for": "signoutoption"
};
var _hoisted_20 = {
  "class": "badge-img",
  src: "/imgs/badge.jpg",
  alt: "badge"
};
var _hoisted_21 = {
  "class": "col pb-2"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Change option ");
var _hoisted_23 = {
  "class": "find-visitor-signin-result-div"
};
var _hoisted_24 = {
  key: 0
};
var _hoisted_25 = {
  key: 1
};
var _hoisted_26 = {
  "class": "col"
};
var _hoisted_27 = {
  "class": "col"
};
var _hoisted_28 = {
  "class": "col text-right"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sign Out ");
var _hoisted_30 = {
  "class": "mt-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Layout"], {
    pageTitle: "signout",
    backUrl: "/sign-in-out-option"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [$setup.processing && $props.respondsMsg == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingIndicator"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.processing && $props.respondsMsg == 'code200' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        showHeading: false,
        infotype: "success",
        msg: "Sign out successful thank you!",
        customClass: "form-responds-msg"
      })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.processing && $props.respondsMsg == 'code100' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        infotype: "error",
        customHeading: 'Error ' + $props.respondsMsg,
        msg: $setup.returnSystemErrorMsg(),
        customClass: "form-responds-msg"
      }, null, 8 /* PROPS */, ["customHeading", "msg"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), !$setup.processing && $props.respondsMsg == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.signOutData.label) + "* ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", _hoisted_20, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.signOutData.label == 'Enter badge id']])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnFunc: function btnFunc() {
          return $setup.changeSignOutOption($setup.signOutData.signOutForm.signoutoption);
        },
        customClass: "primary-btn"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_22];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        ref: "firstInput",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.searchvalue = $event;
        }),
        type: "text",
        "class": "form-control",
        id: "signoutoption",
        name: "signoutoption",
        maxlength: "255",
        autocomplete: "off",
        onKeypress: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"]))
      }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchvalue]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [$setup.signOutData.isSearching ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingIndicator"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_25, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.signOutData.visitorsSigninData, function (visitor, vistorIndex) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          "class": "row",
          key: vistorIndex
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(visitor.fname), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(visitor.lname), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
          customClass: "primary-btn",
          btnFunc: function btnFunc() {
            return $setup.handleSignOutVistorBtnClick(visitor);
          }
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [_hoisted_29];
          }),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["btnFunc"])])]))], 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.signOutData.visitorsSigninData.length > 0]]);
      }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HandleMsg"], {
        infotype: "error",
        customHeading: 'Error code001',
        msg: $setup.returnCanNotFindVistorErrorMsg(),
        customClass: "form-responds-msg"
      }, null, 8 /* PROPS */, ["msg"])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.signOutData.isSearchComplete && $setup.signOutData.visitorsSigninData.length <= 0]])]))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/TempInOutOption.vue?vue&type=template&id=f7c90c5e":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/TempInOutOption.vue?vue&type=template&id=f7c90c5e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-10 mx-auto"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center pb-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Off site option")], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col text-right"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Going off site ");
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-arrow-up"
}, null, -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "col"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Coming back in ");
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-arrow-down"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Layout"], {
    pageTitle: "tempinout-option",
    backUrl: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnFunc: function btnFunc() {
          return $setup.handleOptionBtnClicked('going_off_site');
        },
        btnStyle: "danger",
        customClass: "sign-in-out-btn mr-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_7, _hoisted_8, _hoisted_9];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppButton"], {
        btnFunc: function btnFunc() {
          return $setup.handleOptionBtnClicked('coming_back_in');
        },
        btnStyle: "success",
        customClass: "sign-in-out-btn ml-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_11, _hoisted_12, _hoisted_13];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["btnFunc"])])])])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.temp_option_data.btn_action == '']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["GoingOffSite"], {
        company_result: $props.companyResult
      }, null, 8 /* PROPS */, ["company_result"])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.temp_option_data.btn_action == 'going_off_site']])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppButton.vue?vue&type=template&id=ddfd4132":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppButton.vue?vue&type=template&id=ddfd4132 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var _hoisted_1 = ["title", "type"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    title: $props.btnTitle,
    type: $props.btnType,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_defineProperty({
      'hide-on-all-screen': $props.hideBtn,
      'btn-full': $props.fullBtn,
      'btn-muted': $props.btnStyle === 'muted',
      'primary-btn': $props.btnStyle === 'primary',
      'btn-primary': $props.btnStyle === 'primary2',
      'btn-danger': $props.btnStyle === 'danger',
      'btn-default': $props.btnStyle === 'default',
      'btn-secondary': $props.btnStyle === 'secondary',
      'btn-success': $props.btnStyle === 'success',
      'btn-warning': $props.btnStyle === 'warn'
    }, $setup.appBtnData.defaultClassName, true)),
    onClick: _cache[0] || (_cache[0] = function () {
      return $props.btnFunc && $props.btnFunc.apply($props, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 10 /* CLASS, PROPS */, _hoisted_1), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$props.noBtnStyle]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.customClassObj != null ? $props.customClassObj : $props.customClass),
    onClick: _cache[1] || (_cache[1] = function () {
      return $props.btnFunc && $props.btnFunc.apply($props, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.noBtnStyle]])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppCheckBox.vue?vue&type=template&id=5d330818":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppCheckBox.vue?vue&type=template&id=5d330818 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var _hoisted_1 = {
  "class": "custom-checkbox-wrapper"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-1 text-right p-0 b1"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-check"
}, null, -1 /* HOISTED */);
var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = {
  "class": "col-11 p-0 b2 text-left"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'custom-checkbox': true,
      checkbox_checked: $setup.custom_checkbox_data.checkbox_checked
    }),
    onClick: $setup.toggleCheckBox
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'custom-checkbox-check-icon': !$setup.custom_checkbox_data.checkbox_checked,
      'custom-checkbox-check-icon-checked': $setup.custom_checkbox_data.checkbox_checked
    })
  }, _hoisted_5, 2 /* CLASS */)], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_defineProperty({
      'custom-checkbox-text p-0': true
    }, $setup.custom_checkbox_data.checkbox_text_class, true))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div row "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "checkbox_error text-left small text-danger"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.checkbox_error), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.checkbox_error != '']])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end div custom-checkbox-wrapper ")], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppLink.vue?vue&type=template&id=b9b57122":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppLink.vue?vue&type=template&id=b9b57122 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.className),
    href: $props.linkUrl,
    target: "_blank"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 10 /* CLASS, PROPS */, _hoisted_1), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.linkType === 'ext']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Link"], {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.className),
    href: $props.linkUrl
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class", "href"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.linkType === 'int']])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Footer.vue?vue&type=template&id=7d044ad2":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Footer.vue?vue&type=template&id=7d044ad2 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  className: "footer-wrapper"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-copyright",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "container"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-10 mx-auto"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center"
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.copyRightData))])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/HandleMsg.vue?vue&type=template&id=d42ca826":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/HandleMsg.vue?vue&type=template&id=d42ca826 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_2 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.classValue + ' ' + $props.customClass),
    "aria-live": "assertive"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.msgHeading), 1 /* TEXT */), _hoisted_1], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.showHeading]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    innerHTML: $setup.props.msg
  }, null, 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ props.msg }} ")], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Header.vue?vue&type=template&id=3a9f82ee":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Header.vue?vue&type=template&id=3a9f82ee ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-12 header-wrapper mb-5"
};
var _hoisted_4 = {
  "class": "text-center"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col"
};
var _hoisted_8 = {
  "class": "date-time text-center"
};
var _hoisted_9 = {
  "class": "col"
};
var _hoisted_10 = {
  "class": "date-time text-center"
};
var _hoisted_11 = {
  key: 0,
  "class": "col iv-go-back-btn-wrapper"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-arrow-left"
}, null, -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Go back ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Logo"]), _hoisted_5]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_8, " Date: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentTimeStampData.currentDate), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_10, " Time: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentTimeStampData.currentTime), 1 /* TEXT */)]), $props.backUrl != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppLink"], {
    linkUrl: $props.backUrl,
    className: "iv-go-back-btn primary-btn"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12, _hoisted_13];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["linkUrl"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Layout.vue?vue&type=template&id=fda27eb4":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Layout.vue?vue&type=template&id=fda27eb4 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content-wrapper"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Head"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "\r\n      " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.appName + " | " + $props.pageTitle) + "\r\n    ", 1 /* TEXT */)];
    }),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Header"], {
    backUrl: $props.backUrl
  }, null, 8 /* PROPS */, ["backUrl"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Footer"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LoadingIndicator.vue?vue&type=template&id=52032c2f":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LoadingIndicator.vue?vue&type=template&id=52032c2f ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-spinner fa-spin"
}, null, -1 /* HOISTED */);
var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$props.dot ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.classNameValue)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.loaderSize)
  }, "..........", 2 /* CLASS */)], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$props.dot ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.classNameValue)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.loaderSize)
  }, _hoisted_2, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.loaderPSizeClassName)
  }, "Please wait...", 2 /* CLASS */)], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LocalSearch.vue?vue&type=template&id=37e24ca7":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LocalSearch.vue?vue&type=template&id=37e24ca7 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var _hoisted_1 = {
  "class": "input-group local-search-wrapper"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "local-search-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-search"
})], -1 /* HOISTED */);
var _hoisted_3 = ["placeholder"];
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times"
}, null, -1 /* HOISTED */);
var _hoisted_5 = [_hoisted_4];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _normalizeClass2;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)((_normalizeClass2 = {}, _defineProperty(_normalizeClass2, $props.inputClass, true), _defineProperty(_normalizeClass2, 'form-control', true), _defineProperty(_normalizeClass2, 'local-search-input', true), _normalizeClass2)),
    placeholder: $props.inputPlaceHolderValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.filterText = $event;
    })
  }, null, 10 /* CLASS, PROPS */, _hoisted_3), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.filterText]]), $setup.filterText.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    "class": "local-search-icon-times",
    onClick: $setup.clearFilterInput
  }, _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Logo.vue?vue&type=template&id=56000ba7":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Logo.vue?vue&type=template&id=56000ba7 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "logo-wrapper"
};
var _hoisted_2 = {
  "class": "iv-logo"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Ic visitor");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppLink"], {
    linkUrl: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1 /* STABLE */
  })])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/OptionElement.vue?vue&type=template&id=7602077b":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/OptionElement.vue?vue&type=template&id=7602077b ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "option-element-wrapper"
};
var _hoisted_2 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LocalSearch"], {
    oldResultObj: $props.resultObj,
    whatToCheck: "name",
    inputPlaceHolderValue: $props.placeHolderText,
    inputClass: "custom-search-input",
    onUpdateResultObj: $setup.updateResultObj
  }, null, 8 /* PROPS */, ["oldResultObj", "inputPlaceHolderValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [$setup.optionElementData.filteredResultObject.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.optionElementData.filteredResultObject, function (option, optionIndex) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: optionIndex,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(option.name == $props.optionSelected ? 'option-selected' : ''),
      onClick: function onClick() {
        return $setup.handleSelectedOptionClicked(option.name);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 11 /* TEXT, CLASS, PROPS */, _hoisted_2);
  }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/coWorkerSearch.vue?vue&type=template&id=7b0f3eae":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/coWorkerSearch.vue?vue&type=template&id=7b0f3eae ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "coworker-search-wrapper"
};
var _hoisted_2 = ["placeholder"];
var _hoisted_3 = {
  "class": "co-worker-search-result"
};
var _hoisted_4 = {
  className: "text-center number-result-found-p"
};
var _hoisted_5 = ["onClick"];
var _hoisted_6 = {
  "class": "blog-search-result"
};
var _hoisted_7 = {
  className: "text-center pt-3"
};
var _hoisted_8 = {
  "class": "text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    ref: "searchInput",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.searchedWord = $event;
    }),
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'form-control': true,
      'input-error': $props.input_error != '' ? true : false
    }),
    placeholder: $props.placeholderText,
    maxlength: "255",
    autocomplete: "off",
    onFocus: _cache[1] || (_cache[1] = function () {
      return $props.inputFocusFunc && $props.inputFocusFunc.apply($props, arguments);
    }),
    onKeypress: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"]))
  }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_2), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchedWord]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingIndicator"], {
    loaderSize: "small"
  })], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.searchData.isSearching]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.searchData.coWorkerResData.length > 1 ? "(" + $setup.searchData.coWorkerResData.length + ") " + $props.resultFoundTextplural : "(" + $setup.searchData.coWorkerResData.length + ") " + $props.resultFoundTextSingular) + " found ", 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.searchData.coWorkerResData, function (coWorker, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
      "class": "result-entry-p",
      onClick: function onClick() {
        return $setup.handleResultClicked(coWorker);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.returnCoWorkerFullName(coWorker.fname, coWorker.lname)), 9 /* TEXT, PROPS */, _hoisted_5)]);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.searchData.isSearchComplete && !$setup.searchData.isSearching && $setup.searchData.coWorkerResData.length > 0]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.noResultText), 1 /* TEXT */)])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.searchData.isSearchComplete && !$setup.searchData.isSearching && $setup.searchData.coWorkerResData.length <= 0 && $setup.searchedWord != '']])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.searchedWord != '']])]);
}

/***/ }),

/***/ "./resources/js/api/axios.js":
/*!***********************************!*\
  !*** ./resources/js/api/axios.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


//laravelEnvironment variable is from laravel views/home.blade.php

var baseApiUrl = 'http://127.0.0.1:8000';
if (appDataObj.appEnv === "remote") {
  baseApiUrl = 'https://iv.icblog.uk';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: baseApiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
}));

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");



//Using dynamic import for production

// createInertiaApp({
//     resolve: async (name) => (await import(`./pages/${name}.vue`)),
//     setup({ el, App, props, plugin }) {
//         createApp({ render: () => h(App, props) })
//             .use(plugin)
//             .mount(el);
//     },

// });

(0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.createInertiaApp)({
  resolve: function resolve(name) {
    return __webpack_require__("./resources/js/pages sync recursive ^\\.\\/.*\\.vue$")("./".concat(name, ".vue"));
  },
  setup: function setup(_ref) {
    var el = _ref.el,
      App = _ref.App,
      props = _ref.props,
      plugin = _ref.plugin;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(App, props);
      }
    }).use(plugin).mount(el);
  }
});

/***/ }),

/***/ "./resources/js/helper/util.js":
/*!*************************************!*\
  !*** ./resources/js/helper/util.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "checkIfAvalueIncludesInArrOrObj": () => (/* binding */ checkIfAvalueIncludesInArrOrObj),
/* harmony export */   "focusOnFirstInput": () => (/* binding */ focusOnFirstInput),
/* harmony export */   "generateRandom": () => (/* binding */ generateRandom),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "limitString": () => (/* binding */ limitString),
/* harmony export */   "moveCursorToTextEnd": () => (/* binding */ moveCursorToTextEnd),
/* harmony export */   "removeItemFromArrOrObjByValue": () => (/* binding */ removeItemFromArrOrObjByValue),
/* harmony export */   "removeItemFromArrayByIndex": () => (/* binding */ removeItemFromArrayByIndex),
/* harmony export */   "removeItemFromArrayByValue": () => (/* binding */ removeItemFromArrayByValue),
/* harmony export */   "replaceChar": () => (/* binding */ replaceChar),
/* harmony export */   "returnCoWorkerFullName": () => (/* binding */ returnCoWorkerFullName),
/* harmony export */   "returnCurrentDate": () => (/* binding */ returnCurrentDate),
/* harmony export */   "returnCurrentTime": () => (/* binding */ returnCurrentTime),
/* harmony export */   "returnFilteredText": () => (/* binding */ returnFilteredText),
/* harmony export */   "returnFormattedDate": () => (/* binding */ returnFormattedDate),
/* harmony export */   "returnMatchedFromArrOrObjByValue": () => (/* binding */ returnMatchedFromArrOrObjByValue),
/* harmony export */   "returnResumeLink": () => (/* binding */ returnResumeLink),
/* harmony export */   "returnSystemErrorMsg": () => (/* binding */ returnSystemErrorMsg),
/* harmony export */   "scrollToElement": () => (/* binding */ scrollToElement),
/* harmony export */   "scrollToTopOfPage": () => (/* binding */ scrollToTopOfPage),
/* harmony export */   "toSqlDatetime": () => (/* binding */ toSqlDatetime),
/* harmony export */   "validMobileNumber": () => (/* binding */ validMobileNumber)
/* harmony export */ });
var isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
};
var isArray = function isArray(what) {
  return Object.prototype.toString.call(what) === "[object Array]";
};
var returnSystemErrorMsg = function returnSystemErrorMsg() {
  return "Sorry system error, your request can not be processed please see a member of the security team thank you!";
};
var replaceChar = function replaceChar(str, whatTosearch, replaceWith) {
  return str.replace(whatTosearch, replaceWith);
};
function limitString(limitBy, str) {
  if (str.length > limitBy) {
    return str.slice(0, limitBy) + "...";
  } else {
    return str;
  }
}
function scrollToElement(elementRef) {
  elementRef.value.scrollIntoView({
    behavior: "smooth"
  });
}
function scrollToTopOfPage() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}
function removeItemFromArrayByIndex(itemIndex, itemArray) {
  if (itemIndex >= 0) {
    itemArray.splice(itemIndex, 1);
    return itemArray;
  }
}
function checkIfAvalueIncludesInArrOrObj(itemValue, arrOrObj) {
  var itemValueKeyName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var isArrOrObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "obj";
  var outCome = false;
  if (isArrOrObj == "arr") {
    if (arrOrObj.some(function (e) {
      return e === itemValue;
    })) {
      outCome = true;
    }
  } else {
    if (arrOrObj.some(function (e) {
      return e[itemValueKeyName] === itemValue;
    })) {
      outCome = true;
    }
  }
  return outCome;
}
function removeItemFromArrOrObjByValue(itemValue, arrOrObj) {
  var itemValueKeyName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var isArrOrObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "obj";
  var filteredArray = [];
  if (isArrOrObj == "arr") {
    filteredArray = arrOrObj.filter(function (e) {
      return e !== itemValue;
    });
  } else {
    filteredArray = arrOrObj.filter(function (e) {
      return e[itemValueKeyName] !== itemValue;
    });
  }
  return filteredArray;
}
function removeItemFromArrayByValue(itemValue, itemArray) {
  var filteredArray = itemArray.filter(function (e) {
    return e !== itemValue;
  });
  return filteredArray;
}
function returnFormattedDate(dateParam) {
  return new Date(dateParam).toLocaleDateString();
}
function toSqlDatetime(inputDate) {
  // input looks like this { new Date()};
  var date = new Date(inputDate);
  var dateWithOffest = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return dateWithOffest.toISOString().slice(0, 19).replace("T", " ");
}
function focusOnFirstInput(firstInput) {
  firstInput.value.focus();
}
function generateRandom() {
  return Math.random().toString().replace("0.", "");
}
function returnResumeLink() {
  return appDataObj.resumeLink;
}
function returnFilteredText(text, listObj, filterBy) {
  if (!text.length) return listObj;
  return listObj.filter(function (list) {
    return list[filterBy].toLowerCase().includes(text.toLowerCase());
  });
}
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}
function returnMatchedFromArrOrObjByValue(itemValue, arrOrObj) {
  var itemValueKeyName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var isArrOrObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "obj";
  var filteredArray = [];
  if (isArrOrObj == "arr") {
    filteredArray = arrOrObj.filter(function (e) {
      return e == itemValue;
    });
  } else {
    filteredArray = arrOrObj.filter(function (e) {
      return e[itemValueKeyName] == itemValue;
    });
  }
  return filteredArray;
}
function moveCursorToTextEnd(input, inputValue) {
  var textEnd = inputValue.length;
  setTimeout(function () {
    return input.setSelectionRange(textEnd, textEnd);
  });
}
function validMobileNumber(number) {
  var regex = /^(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}$/,
    result = regex.test(number);
  return result;
}
function returnCoWorkerFullName(fname, lname) {
  return fname + " " + lname;
}
;
function returnCurrentDate() {
  var to_string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var current_date = new Date();
  if (to_string) {
    return current_date.toDateString();
  } else {
    return current_date;
  }
}
function returnCurrentTime() {
  var current_date = returnCurrentDate(false);
  return current_date.toLocaleTimeString("en-GB").slice(0, 5);
}

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/pages/CoWorkerSignIn.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/CoWorkerSignIn.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CoWorkerSignIn_vue_vue_type_template_id_7da0af35__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoWorkerSignIn.vue?vue&type=template&id=7da0af35 */ "./resources/js/pages/CoWorkerSignIn.vue?vue&type=template&id=7da0af35");
/* harmony import */ var _CoWorkerSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoWorkerSignIn.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/CoWorkerSignIn.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CoWorkerSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CoWorkerSignIn_vue_vue_type_template_id_7da0af35__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/CoWorkerSignIn.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Error.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Error.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Error_vue_vue_type_template_id_94ed5362__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=94ed5362 */ "./resources/js/pages/Error.vue?vue&type=template&id=94ed5362");
/* harmony import */ var _Error_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/Error.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Error_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Error_vue_vue_type_template_id_94ed5362__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Error.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/ExtVisitorSignIn.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/ExtVisitorSignIn.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExtVisitorSignIn_vue_vue_type_template_id_84358190__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtVisitorSignIn.vue?vue&type=template&id=84358190 */ "./resources/js/pages/ExtVisitorSignIn.vue?vue&type=template&id=84358190");
/* harmony import */ var _ExtVisitorSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtVisitorSignIn.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/ExtVisitorSignIn.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ExtVisitorSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ExtVisitorSignIn_vue_vue_type_template_id_84358190__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/ExtVisitorSignIn.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/GoingOffSite.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/GoingOffSite.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GoingOffSite_vue_vue_type_template_id_5099c605__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoingOffSite.vue?vue&type=template&id=5099c605 */ "./resources/js/pages/GoingOffSite.vue?vue&type=template&id=5099c605");
/* harmony import */ var _GoingOffSite_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoingOffSite.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/GoingOffSite.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_GoingOffSite_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GoingOffSite_vue_vue_type_template_id_5099c605__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/GoingOffSite.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_b3c5cf30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b3c5cf30 */ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30");
/* harmony import */ var _Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/Home.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_b3c5cf30__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/OffSiteBackIn.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/OffSiteBackIn.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OffSiteBackIn_vue_vue_type_template_id_284d5da9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OffSiteBackIn.vue?vue&type=template&id=284d5da9 */ "./resources/js/pages/OffSiteBackIn.vue?vue&type=template&id=284d5da9");
/* harmony import */ var _OffSiteBackIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OffSiteBackIn.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/OffSiteBackIn.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_OffSiteBackIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_OffSiteBackIn_vue_vue_type_template_id_284d5da9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/OffSiteBackIn.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/ServiceOfficeSignIn.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/ServiceOfficeSignIn.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServiceOfficeSignIn_vue_vue_type_template_id_62d4457a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceOfficeSignIn.vue?vue&type=template&id=62d4457a */ "./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=template&id=62d4457a");
/* harmony import */ var _ServiceOfficeSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceOfficeSignIn.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ServiceOfficeSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ServiceOfficeSignIn_vue_vue_type_template_id_62d4457a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/ServiceOfficeSignIn.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/SignInOption.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/SignInOption.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignInOption_vue_vue_type_template_id_5980ed60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignInOption.vue?vue&type=template&id=5980ed60 */ "./resources/js/pages/SignInOption.vue?vue&type=template&id=5980ed60");
/* harmony import */ var _SignInOption_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInOption.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/SignInOption.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SignInOption_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SignInOption_vue_vue_type_template_id_5980ed60__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/SignInOption.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/SignInOut.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/SignInOut.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignInOut_vue_vue_type_template_id_20427ef3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignInOut.vue?vue&type=template&id=20427ef3 */ "./resources/js/pages/SignInOut.vue?vue&type=template&id=20427ef3");
/* harmony import */ var _SignInOut_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInOut.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/SignInOut.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SignInOut_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SignInOut_vue_vue_type_template_id_20427ef3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/SignInOut.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/SignOut.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/SignOut.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignOut_vue_vue_type_template_id_7d19ac58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignOut.vue?vue&type=template&id=7d19ac58 */ "./resources/js/pages/SignOut.vue?vue&type=template&id=7d19ac58");
/* harmony import */ var _SignOut_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignOut.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/SignOut.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SignOut_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SignOut_vue_vue_type_template_id_7d19ac58__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/SignOut.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/TempInOutOption.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/TempInOutOption.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TempInOutOption_vue_vue_type_template_id_f7c90c5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TempInOutOption.vue?vue&type=template&id=f7c90c5e */ "./resources/js/pages/TempInOutOption.vue?vue&type=template&id=f7c90c5e");
/* harmony import */ var _TempInOutOption_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TempInOutOption.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/TempInOutOption.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TempInOutOption_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TempInOutOption_vue_vue_type_template_id_f7c90c5e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/TempInOutOption.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/AppButton.vue":
/*!*******************************************!*\
  !*** ./resources/js/shared/AppButton.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppButton_vue_vue_type_template_id_ddfd4132__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppButton.vue?vue&type=template&id=ddfd4132 */ "./resources/js/shared/AppButton.vue?vue&type=template&id=ddfd4132");
/* harmony import */ var _AppButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppButton.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/AppButton.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppButton_vue_vue_type_template_id_ddfd4132__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/AppButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/AppCheckBox.vue":
/*!*********************************************!*\
  !*** ./resources/js/shared/AppCheckBox.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppCheckBox_vue_vue_type_template_id_5d330818__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCheckBox.vue?vue&type=template&id=5d330818 */ "./resources/js/shared/AppCheckBox.vue?vue&type=template&id=5d330818");
/* harmony import */ var _AppCheckBox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCheckBox.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/AppCheckBox.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppCheckBox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppCheckBox_vue_vue_type_template_id_5d330818__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/AppCheckBox.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/AppLink.vue":
/*!*****************************************!*\
  !*** ./resources/js/shared/AppLink.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppLink_vue_vue_type_template_id_b9b57122__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLink.vue?vue&type=template&id=b9b57122 */ "./resources/js/shared/AppLink.vue?vue&type=template&id=b9b57122");
/* harmony import */ var _AppLink_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLink.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/AppLink.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppLink_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppLink_vue_vue_type_template_id_b9b57122__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/AppLink.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/Footer.vue":
/*!****************************************!*\
  !*** ./resources/js/shared/Footer.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_7d044ad2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=7d044ad2 */ "./resources/js/shared/Footer.vue?vue&type=template&id=7d044ad2");
/* harmony import */ var _Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/Footer.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Footer_vue_vue_type_template_id_7d044ad2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/Footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/HandleMsg.vue":
/*!*******************************************!*\
  !*** ./resources/js/shared/HandleMsg.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HandleMsg_vue_vue_type_template_id_d42ca826__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HandleMsg.vue?vue&type=template&id=d42ca826 */ "./resources/js/shared/HandleMsg.vue?vue&type=template&id=d42ca826");
/* harmony import */ var _HandleMsg_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HandleMsg.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/HandleMsg.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HandleMsg_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HandleMsg_vue_vue_type_template_id_d42ca826__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/HandleMsg.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/Header.vue":
/*!****************************************!*\
  !*** ./resources/js/shared/Header.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_3a9f82ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=3a9f82ee */ "./resources/js/shared/Header.vue?vue&type=template&id=3a9f82ee");
/* harmony import */ var _Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/Header.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_3a9f82ee__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/shared/Layout.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_fda27eb4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=fda27eb4 */ "./resources/js/shared/Layout.vue?vue&type=template&id=fda27eb4");
/* harmony import */ var _Layout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/Layout.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Layout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Layout_vue_vue_type_template_id_fda27eb4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/Layout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/LoadingIndicator.vue":
/*!**************************************************!*\
  !*** ./resources/js/shared/LoadingIndicator.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingIndicator_vue_vue_type_template_id_52032c2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingIndicator.vue?vue&type=template&id=52032c2f */ "./resources/js/shared/LoadingIndicator.vue?vue&type=template&id=52032c2f");
/* harmony import */ var _LoadingIndicator_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingIndicator.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/LoadingIndicator.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LoadingIndicator_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoadingIndicator_vue_vue_type_template_id_52032c2f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/LoadingIndicator.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/LocalSearch.vue":
/*!*********************************************!*\
  !*** ./resources/js/shared/LocalSearch.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LocalSearch_vue_vue_type_template_id_37e24ca7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalSearch.vue?vue&type=template&id=37e24ca7 */ "./resources/js/shared/LocalSearch.vue?vue&type=template&id=37e24ca7");
/* harmony import */ var _LocalSearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalSearch.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/LocalSearch.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LocalSearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LocalSearch_vue_vue_type_template_id_37e24ca7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/LocalSearch.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/Logo.vue":
/*!**************************************!*\
  !*** ./resources/js/shared/Logo.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logo_vue_vue_type_template_id_56000ba7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=56000ba7 */ "./resources/js/shared/Logo.vue?vue&type=template&id=56000ba7");
/* harmony import */ var _Logo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/Logo.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Logo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Logo_vue_vue_type_template_id_56000ba7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/Logo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/OptionElement.vue":
/*!***********************************************!*\
  !*** ./resources/js/shared/OptionElement.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OptionElement_vue_vue_type_template_id_7602077b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionElement.vue?vue&type=template&id=7602077b */ "./resources/js/shared/OptionElement.vue?vue&type=template&id=7602077b");
/* harmony import */ var _OptionElement_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionElement.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/OptionElement.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_OptionElement_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_OptionElement_vue_vue_type_template_id_7602077b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/OptionElement.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/shared/coWorkerSearch.vue":
/*!************************************************!*\
  !*** ./resources/js/shared/coWorkerSearch.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coWorkerSearch_vue_vue_type_template_id_7b0f3eae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coWorkerSearch.vue?vue&type=template&id=7b0f3eae */ "./resources/js/shared/coWorkerSearch.vue?vue&type=template&id=7b0f3eae");
/* harmony import */ var _coWorkerSearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coWorkerSearch.vue?vue&type=script&setup=true&lang=js */ "./resources/js/shared/coWorkerSearch.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Icblog_Desktop_WebDev_Inertia_ivisitor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_coWorkerSearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_coWorkerSearch_vue_vue_type_template_id_7b0f3eae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/coWorkerSearch.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/CoWorkerSignIn.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/CoWorkerSignIn.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CoWorkerSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CoWorkerSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CoWorkerSignIn.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CoWorkerSignIn.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Error.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Error.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Error.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Error.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/ExtVisitorSignIn.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/ExtVisitorSignIn.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ExtVisitorSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ExtVisitorSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ExtVisitorSignIn.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ExtVisitorSignIn.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/GoingOffSite.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/GoingOffSite.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoingOffSite_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoingOffSite_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GoingOffSite.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/GoingOffSite.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/OffSiteBackIn.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/OffSiteBackIn.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OffSiteBackIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OffSiteBackIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OffSiteBackIn.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/OffSiteBackIn.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServiceOfficeSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServiceOfficeSignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ServiceOfficeSignIn.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/SignInOption.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/SignInOption.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInOption_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInOption_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInOption.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOption.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/SignInOut.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/SignInOut.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInOut_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInOut_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInOut.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOut.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/SignOut.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/SignOut.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignOut_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignOut_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignOut.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignOut.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/TempInOutOption.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/TempInOutOption.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TempInOutOption_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TempInOutOption_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TempInOutOption.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/TempInOutOption.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/AppButton.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/shared/AppButton.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppButton.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppButton.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/AppCheckBox.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/shared/AppCheckBox.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppCheckBox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppCheckBox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppCheckBox.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppCheckBox.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/AppLink.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/shared/AppLink.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLink_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLink_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLink.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppLink.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/Footer.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/shared/Footer.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Footer.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/HandleMsg.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/shared/HandleMsg.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HandleMsg_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HandleMsg_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HandleMsg.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/HandleMsg.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/Header.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/shared/Header.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Header.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/Layout.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/shared/Layout.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Layout.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/LoadingIndicator.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/shared/LoadingIndicator.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingIndicator_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingIndicator_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingIndicator.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LoadingIndicator.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/LocalSearch.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/shared/LocalSearch.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocalSearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocalSearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LocalSearch.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LocalSearch.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/Logo.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/shared/Logo.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Logo.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Logo.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/OptionElement.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/shared/OptionElement.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OptionElement_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OptionElement_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OptionElement.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/OptionElement.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/shared/coWorkerSearch.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/shared/coWorkerSearch.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_coWorkerSearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_coWorkerSearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./coWorkerSearch.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/coWorkerSearch.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/CoWorkerSignIn.vue?vue&type=template&id=7da0af35":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/CoWorkerSignIn.vue?vue&type=template&id=7da0af35 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CoWorkerSignIn_vue_vue_type_template_id_7da0af35__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CoWorkerSignIn_vue_vue_type_template_id_7da0af35__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CoWorkerSignIn.vue?vue&type=template&id=7da0af35 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CoWorkerSignIn.vue?vue&type=template&id=7da0af35");


/***/ }),

/***/ "./resources/js/pages/Error.vue?vue&type=template&id=94ed5362":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Error.vue?vue&type=template&id=94ed5362 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_template_id_94ed5362__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_template_id_94ed5362__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Error.vue?vue&type=template&id=94ed5362 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Error.vue?vue&type=template&id=94ed5362");


/***/ }),

/***/ "./resources/js/pages/ExtVisitorSignIn.vue?vue&type=template&id=84358190":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/ExtVisitorSignIn.vue?vue&type=template&id=84358190 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ExtVisitorSignIn_vue_vue_type_template_id_84358190__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ExtVisitorSignIn_vue_vue_type_template_id_84358190__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ExtVisitorSignIn.vue?vue&type=template&id=84358190 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ExtVisitorSignIn.vue?vue&type=template&id=84358190");


/***/ }),

/***/ "./resources/js/pages/GoingOffSite.vue?vue&type=template&id=5099c605":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/GoingOffSite.vue?vue&type=template&id=5099c605 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoingOffSite_vue_vue_type_template_id_5099c605__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoingOffSite_vue_vue_type_template_id_5099c605__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GoingOffSite.vue?vue&type=template&id=5099c605 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/GoingOffSite.vue?vue&type=template&id=5099c605");


/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_b3c5cf30__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_b3c5cf30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=b3c5cf30 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30");


/***/ }),

/***/ "./resources/js/pages/OffSiteBackIn.vue?vue&type=template&id=284d5da9":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/OffSiteBackIn.vue?vue&type=template&id=284d5da9 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OffSiteBackIn_vue_vue_type_template_id_284d5da9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OffSiteBackIn_vue_vue_type_template_id_284d5da9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OffSiteBackIn.vue?vue&type=template&id=284d5da9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/OffSiteBackIn.vue?vue&type=template&id=284d5da9");


/***/ }),

/***/ "./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=template&id=62d4457a":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=template&id=62d4457a ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServiceOfficeSignIn_vue_vue_type_template_id_62d4457a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServiceOfficeSignIn_vue_vue_type_template_id_62d4457a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ServiceOfficeSignIn.vue?vue&type=template&id=62d4457a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ServiceOfficeSignIn.vue?vue&type=template&id=62d4457a");


/***/ }),

/***/ "./resources/js/pages/SignInOption.vue?vue&type=template&id=5980ed60":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/SignInOption.vue?vue&type=template&id=5980ed60 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInOption_vue_vue_type_template_id_5980ed60__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInOption_vue_vue_type_template_id_5980ed60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInOption.vue?vue&type=template&id=5980ed60 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOption.vue?vue&type=template&id=5980ed60");


/***/ }),

/***/ "./resources/js/pages/SignInOut.vue?vue&type=template&id=20427ef3":
/*!************************************************************************!*\
  !*** ./resources/js/pages/SignInOut.vue?vue&type=template&id=20427ef3 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInOut_vue_vue_type_template_id_20427ef3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInOut_vue_vue_type_template_id_20427ef3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInOut.vue?vue&type=template&id=20427ef3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignInOut.vue?vue&type=template&id=20427ef3");


/***/ }),

/***/ "./resources/js/pages/SignOut.vue?vue&type=template&id=7d19ac58":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/SignOut.vue?vue&type=template&id=7d19ac58 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignOut_vue_vue_type_template_id_7d19ac58__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignOut_vue_vue_type_template_id_7d19ac58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignOut.vue?vue&type=template&id=7d19ac58 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SignOut.vue?vue&type=template&id=7d19ac58");


/***/ }),

/***/ "./resources/js/pages/TempInOutOption.vue?vue&type=template&id=f7c90c5e":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/TempInOutOption.vue?vue&type=template&id=f7c90c5e ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TempInOutOption_vue_vue_type_template_id_f7c90c5e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TempInOutOption_vue_vue_type_template_id_f7c90c5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TempInOutOption.vue?vue&type=template&id=f7c90c5e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/TempInOutOption.vue?vue&type=template&id=f7c90c5e");


/***/ }),

/***/ "./resources/js/shared/AppButton.vue?vue&type=template&id=ddfd4132":
/*!*************************************************************************!*\
  !*** ./resources/js/shared/AppButton.vue?vue&type=template&id=ddfd4132 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppButton_vue_vue_type_template_id_ddfd4132__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppButton_vue_vue_type_template_id_ddfd4132__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppButton.vue?vue&type=template&id=ddfd4132 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppButton.vue?vue&type=template&id=ddfd4132");


/***/ }),

/***/ "./resources/js/shared/AppCheckBox.vue?vue&type=template&id=5d330818":
/*!***************************************************************************!*\
  !*** ./resources/js/shared/AppCheckBox.vue?vue&type=template&id=5d330818 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppCheckBox_vue_vue_type_template_id_5d330818__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppCheckBox_vue_vue_type_template_id_5d330818__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppCheckBox.vue?vue&type=template&id=5d330818 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppCheckBox.vue?vue&type=template&id=5d330818");


/***/ }),

/***/ "./resources/js/shared/AppLink.vue?vue&type=template&id=b9b57122":
/*!***********************************************************************!*\
  !*** ./resources/js/shared/AppLink.vue?vue&type=template&id=b9b57122 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLink_vue_vue_type_template_id_b9b57122__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLink_vue_vue_type_template_id_b9b57122__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLink.vue?vue&type=template&id=b9b57122 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/AppLink.vue?vue&type=template&id=b9b57122");


/***/ }),

/***/ "./resources/js/shared/Footer.vue?vue&type=template&id=7d044ad2":
/*!**********************************************************************!*\
  !*** ./resources/js/shared/Footer.vue?vue&type=template&id=7d044ad2 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_7d044ad2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_7d044ad2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=7d044ad2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Footer.vue?vue&type=template&id=7d044ad2");


/***/ }),

/***/ "./resources/js/shared/HandleMsg.vue?vue&type=template&id=d42ca826":
/*!*************************************************************************!*\
  !*** ./resources/js/shared/HandleMsg.vue?vue&type=template&id=d42ca826 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HandleMsg_vue_vue_type_template_id_d42ca826__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HandleMsg_vue_vue_type_template_id_d42ca826__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HandleMsg.vue?vue&type=template&id=d42ca826 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/HandleMsg.vue?vue&type=template&id=d42ca826");


/***/ }),

/***/ "./resources/js/shared/Header.vue?vue&type=template&id=3a9f82ee":
/*!**********************************************************************!*\
  !*** ./resources/js/shared/Header.vue?vue&type=template&id=3a9f82ee ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_3a9f82ee__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_3a9f82ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=3a9f82ee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Header.vue?vue&type=template&id=3a9f82ee");


/***/ }),

/***/ "./resources/js/shared/Layout.vue?vue&type=template&id=fda27eb4":
/*!**********************************************************************!*\
  !*** ./resources/js/shared/Layout.vue?vue&type=template&id=fda27eb4 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_fda27eb4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_fda27eb4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=template&id=fda27eb4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Layout.vue?vue&type=template&id=fda27eb4");


/***/ }),

/***/ "./resources/js/shared/LoadingIndicator.vue?vue&type=template&id=52032c2f":
/*!********************************************************************************!*\
  !*** ./resources/js/shared/LoadingIndicator.vue?vue&type=template&id=52032c2f ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingIndicator_vue_vue_type_template_id_52032c2f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingIndicator_vue_vue_type_template_id_52032c2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingIndicator.vue?vue&type=template&id=52032c2f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LoadingIndicator.vue?vue&type=template&id=52032c2f");


/***/ }),

/***/ "./resources/js/shared/LocalSearch.vue?vue&type=template&id=37e24ca7":
/*!***************************************************************************!*\
  !*** ./resources/js/shared/LocalSearch.vue?vue&type=template&id=37e24ca7 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocalSearch_vue_vue_type_template_id_37e24ca7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocalSearch_vue_vue_type_template_id_37e24ca7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LocalSearch.vue?vue&type=template&id=37e24ca7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/LocalSearch.vue?vue&type=template&id=37e24ca7");


/***/ }),

/***/ "./resources/js/shared/Logo.vue?vue&type=template&id=56000ba7":
/*!********************************************************************!*\
  !*** ./resources/js/shared/Logo.vue?vue&type=template&id=56000ba7 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo_vue_vue_type_template_id_56000ba7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo_vue_vue_type_template_id_56000ba7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Logo.vue?vue&type=template&id=56000ba7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/Logo.vue?vue&type=template&id=56000ba7");


/***/ }),

/***/ "./resources/js/shared/OptionElement.vue?vue&type=template&id=7602077b":
/*!*****************************************************************************!*\
  !*** ./resources/js/shared/OptionElement.vue?vue&type=template&id=7602077b ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OptionElement_vue_vue_type_template_id_7602077b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OptionElement_vue_vue_type_template_id_7602077b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OptionElement.vue?vue&type=template&id=7602077b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/OptionElement.vue?vue&type=template&id=7602077b");


/***/ }),

/***/ "./resources/js/shared/coWorkerSearch.vue?vue&type=template&id=7b0f3eae":
/*!******************************************************************************!*\
  !*** ./resources/js/shared/coWorkerSearch.vue?vue&type=template&id=7b0f3eae ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_coWorkerSearch_vue_vue_type_template_id_7b0f3eae__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_coWorkerSearch_vue_vue_type_template_id_7b0f3eae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./coWorkerSearch.vue?vue&type=template&id=7b0f3eae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/coWorkerSearch.vue?vue&type=template&id=7b0f3eae");


/***/ }),

/***/ "./resources/js/pages sync recursive ^\\.\\/.*\\.vue$":
/*!************************************************!*\
  !*** ./resources/js/pages/ sync ^\.\/.*\.vue$ ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./CoWorkerSignIn.vue": "./resources/js/pages/CoWorkerSignIn.vue",
	"./Error.vue": "./resources/js/pages/Error.vue",
	"./ExtVisitorSignIn.vue": "./resources/js/pages/ExtVisitorSignIn.vue",
	"./GoingOffSite.vue": "./resources/js/pages/GoingOffSite.vue",
	"./Home.vue": "./resources/js/pages/Home.vue",
	"./OffSiteBackIn.vue": "./resources/js/pages/OffSiteBackIn.vue",
	"./ServiceOfficeSignIn.vue": "./resources/js/pages/ServiceOfficeSignIn.vue",
	"./SignInOption.vue": "./resources/js/pages/SignInOption.vue",
	"./SignInOut.vue": "./resources/js/pages/SignInOut.vue",
	"./SignOut.vue": "./resources/js/pages/SignOut.vue",
	"./TempInOutOption.vue": "./resources/js/pages/TempInOutOption.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/pages sync recursive ^\\.\\/.*\\.vue$";

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/scss/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);