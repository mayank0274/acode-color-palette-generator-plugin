/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-tag-js/dist/tag.js":
/*!**********************************************!*\
  !*** ./node_modules/html-tag-js/dist/tag.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n!function (e, t) {\n  \"object\" == ( false ? 0 : _typeof(exports)) && \"object\" == ( false ? 0 : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n}(this, function () {\n  return function () {\n    \"use strict\";\n\n    var e = {\n        d: function d(t, n) {\n          for (var r in n) {\n            e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {\n              enumerable: !0,\n              get: n[r]\n            });\n          }\n        },\n        o: function o(e, t) {\n          return Object.prototype.hasOwnProperty.call(e, t);\n        }\n      },\n      t = {};\n    function n(e, t) {\n      t instanceof Node || (t = r.text(\"\".concat(t))), t instanceof Text && \"clone\" in t && (t = t.clone()), e.append(t);\n    }\n    function r(e) {\n      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return \"string\" == typeof t && (t = {\n        innerHTML: t\n      }), function (e) {\n        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n        var o;\n        if (\"function\" == typeof e) return e(t, r);\n        if (e instanceof Node) o = e;else {\n          if (\"string\" != typeof e) throw new Error(\"Invalid tag, \", _typeof(e));\n          o = document.createElement(e);\n        }\n        return Object.keys(t).forEach(function (e) {\n          var r = t[e];\n          if (void 0 !== r) switch (e) {\n            case \"child\":\n              n(o, r);\n              break;\n            case \"children\":\n              if (!Array.isArray(r)) throw new Error(\"children must be an array of Nodes\");\n              r.flat().forEach(function (e) {\n                n(o, e);\n              });\n              break;\n            case \"attr\":\n              Object.keys(r).forEach(function (e) {\n                o.setAttribute(e, r[e]);\n              });\n              break;\n            case \"style\":\n            case \"dataset\":\n              Object.keys(r).forEach(function (t) {\n                o[e][t] = r[t];\n              });\n              break;\n            default:\n              o[e] = r;\n          }\n        }), o;\n      }(e, t);\n    }\n    return e.d(t, {\n      default: function _default() {\n        return r;\n      }\n    }), Object.defineProperties(r, {\n      get: {\n        value: function value(e) {\n          return document.querySelector(e);\n        }\n      },\n      getAll: {\n        value: function value(e) {\n          return _toConsumableArray(document.querySelectorAll(e));\n        }\n      },\n      parse: {\n        value: function value(e) {\n          var t = document.createElement(\"div\");\n          return t.innerHTML = e, 1 === t.childElementCount ? t.firstElementChild : _toConsumableArray(t.children);\n        }\n      },\n      text: {\n        value: function value(e) {\n          return document.createTextNode(e);\n        }\n      },\n      use: {\n        value: function value(e) {\n          var t = e,\n            n = !1;\n          var r = document.createTextNode(e),\n            o = [r];\n          return Object.defineProperty(r, \"value\", {\n            set: function set(e) {\n              t = e, o.forEach(function (t) {\n                t.textContent = e;\n              });\n            },\n            get: function get() {\n              return t;\n            }\n          }), Object.defineProperty(r, \"clone\", {\n            value: function value() {\n              if (!n) return n = !0, r;\n              var e = r.cloneNode();\n              return o.push(e), e;\n            }\n          }), r;\n        }\n      }\n    }), t.default;\n  }();\n});\n\n//# sourceURL=webpack://Color_Palette_Generator/./node_modules/html-tag-js/dist/tag.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-tag-js */ \"./node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _plugin_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin.json */ \"./plugin.json\");\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator.return && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar alert = acode.require(\"alert\");\nvar loader = acode.require('loader');\nvar colorpalette = /*#__PURE__*/function () {\n  function colorpalette() {\n    _classCallCheck(this, colorpalette);\n  }\n  _createClass(colorpalette, [{\n    key: \"init\",\n    value: function () {\n      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee($page) {\n        var command;\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                command = {\n                  name: \"Color Palette\",\n                  description: \" Color Palette\",\n                  exec: this.run.bind(this)\n                };\n                editorManager.editor.commands.addCommand(command);\n                $page.id = 'acode-plugin-colorpalette';\n                $page.settitle(\"Colour Palette Generator\");\n                this.$page = $page;\n                this.$main = html_tag_js__WEBPACK_IMPORTED_MODULE_0___default()(\"main\", {\n                  className: \"main\"\n                });\n                this.$page.append(this.$main);\n                this.$main.style.height = \"100%\";\n                this.$main.style.display = \"flex\";\n                this.$main.style.flexDirection = \"column\";\n                // this.$main.style.justifyContent=\"center\"\n                this.$main.style.alignItems = \"center\";\n                // this.$main.style.overflowY = \"scroll\"\n\n                this.$heading = html_tag_js__WEBPACK_IMPORTED_MODULE_0___default()(\"h1\", {\n                  textContent: \"Colour Palette Generator\"\n                });\n                this.$main.append(this.$heading);\n                this.$heading.style.margin = \"8px\";\n                this.$form = html_tag_js__WEBPACK_IMPORTED_MODULE_0___default()(\"form\", {\n                  className: \"form\",\n                  enctype: \"multipart/form-data\"\n                });\n                this.$main.append(this.$form);\n                this.$form.style.justifyContent = \"flexStart\";\n                this.$file = html_tag_js__WEBPACK_IMPORTED_MODULE_0___default()(\"input\", {\n                  type: \"file\",\n                  className: \"file\",\n                  name: \"file\"\n                });\n                this.$file.style.width = \"90%\";\n                this.$file.style.padding = \"8px\";\n                this.$form.append(this.$file);\n                this.$colors = html_tag_js__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n                  className: \"colorBox\",\n                  textContent: \"Nothing to show\"\n                });\n                this.$main.append(this.$colors);\n                this.$colors.style.display = \"flex\";\n                this.$colors.style.flexDirection = \"column\";\n                this.$colors.style.justifyContent = \"center\";\n                this.$colors.style.alignItems = \"center\";\n                this.$colors.style.margin = \"7px\";\n                this.$colors.style.fontSize = \"25px\";\n                this.$colors.style.height = \"75%\";\n                this.$colors.style.overflowY = \"scroll\";\n              case 31:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n      function init(_x) {\n        return _init.apply(this, arguments);\n      }\n      return init;\n    }()\n  }, {\n    key: \"run\",\n    value: function () {\n      var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {\n        var fileData, insert;\n        return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                insert = function _insert(src) {\n                  var colorBox = document.querySelector(\".colorBox\");\n                  var card = document.createElement(\"div\");\n                  card.classList.add(\"card\");\n                  card.style.border = \"1px solid #ffffff\";\n                  card.style.height = \"100px\";\n                  card.style.width = \"100px\";\n                  card.style.textAlign = \"center\";\n                  card.style.marginTop = \"5px\";\n                  var html = \"\\n     <div style=\\\"background:\".concat(src, \";height:100%;width:100%\\\" class=\\\"colorOut\\\">\").concat(src, \"<div>\\n     \");\n                  card.insertAdjacentHTML(\"afterbegin\", html);\n                  colorBox.appendChild(card);\n                };\n                this.$page.show();\n                fileData = document.querySelector(\".file\");\n                fileData.addEventListener(\"change\", function () {\n                  var file = fileData.files;\n                  var data = new FormData();\n                  // alert(file[0])\n                  data.append(\"file\", file[0]);\n                  loader.create(\"loading\", \"Generating Colour\");\n                  fetch('https://image-color-extractor.onrender.com/getColor', {\n                    method: 'POST',\n                    body: data\n                  }).then(function (r) {\n                    return r.json();\n                  }).then(function (data) {\n                    loader.destroy();\n                    var res = document.querySelector(\".colorBox\");\n                    var colorArr = Array.from(data);\n                    res.innerText = \" \";\n                    for (var i = 0; i < colorArr.length; i++) {\n                      // alert(colorArr[i])\n                      insert(colorArr[i]);\n                    }\n                  });\n                });\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n      function run() {\n        return _run.apply(this, arguments);\n      }\n      return run;\n    }()\n  }, {\n    key: \"destroy\",\n    value: function () {\n      var _destroy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {\n        var command;\n        return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                command = {\n                  name: \"Color Palette\",\n                  description: \"Color Palette\",\n                  exec: this.run.bind(this)\n                };\n                editorManager.editor.commands.removeCommand(command);\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n      function destroy() {\n        return _destroy.apply(this, arguments);\n      }\n      return destroy;\n    }()\n  }]);\n  return colorpalette;\n}();\nif (window.acode) {\n  var acodePlugin = new colorpalette();\n  acode.setPluginInit(_plugin_json__WEBPACK_IMPORTED_MODULE_1__.id, function (baseUrl, $page, _ref) {\n    var cacheFileUrl = _ref.cacheFileUrl,\n      cacheFile = _ref.cacheFile;\n    if (!baseUrl.endsWith('/')) {\n      baseUrl += '/';\n    }\n    acodePlugin.baseUrl = baseUrl;\n    acodePlugin.init($page, cacheFile, cacheFileUrl);\n  });\n  acode.setPluginUnmount(_plugin_json__WEBPACK_IMPORTED_MODULE_1__.id, function () {\n    acodePlugin.destroy();\n  });\n}\n\n//# sourceURL=webpack://Color_Palette_Generator/./src/main.js?");

/***/ }),

/***/ "./plugin.json":
/*!*********************!*\
  !*** ./plugin.json ***!
  \*********************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"id\":\"acode.plugin.colorpalette\",\"name\":\"Color Palette Generator\",\"main\":\"dist/main.js\",\"version\":\"1.0.0\",\"readme\":\"readme.md\",\"icon\":\"icon.png\",\"files\":[],\"author\":{\"name\":\"Mayank sharma\",\"email\":\"sharma.mayank0274@gmail.com\",\"github\":\"mayank0274\"}}');\n\n//# sourceURL=webpack://Color_Palette_Generator/./plugin.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;