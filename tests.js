module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/tests.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Reducer = __webpack_require__(/*! ./Test/Reducer */ 16);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _Middleware = __webpack_require__(/*! ./Test/Middleware */ 50);
	
	var _Middleware2 = _interopRequireDefault(_Middleware);
	
	var _Equality = __webpack_require__(/*! ./Test/Equality */ 72);
	
	var _Equality2 = _interopRequireDefault(_Equality);
	
	var _Subscribe = __webpack_require__(/*! ./Test/Subscribe */ 73);
	
	var _Subscribe2 = _interopRequireDefault(_Subscribe);
	
	var _Redux = __webpack_require__(/*! ./Test/Redux */ 74);
	
	var _Redux2 = _interopRequireDefault(_Redux);
	
	var _Memoize = __webpack_require__(/*! ./Test/Memoize */ 75);
	
	var _Memoize2 = _interopRequireDefault(_Memoize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tests = function tests() {
	    (0, _Reducer2.default)();
	    (0, _Middleware2.default)();
	    (0, _Equality2.default)();
	    (0, _Subscribe2.default)();
	    (0, _Redux2.default)();
	    (0, _Memoize2.default)();
	};
	tests();

/***/ }),
/* 1 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Composite = exports.Defaults = undefined;
	
	var _Structure = __webpack_require__(/*! ./Structure */ 2);
	
	Object.keys(_Structure).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Structure[key];
	    }
	  });
	});
	
	var _Redux = __webpack_require__(/*! ./Redux */ 15);
	
	Object.keys(_Redux).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Redux[key];
	    }
	  });
	});
	
	var _Composite = __webpack_require__(/*! ./Composite */ 3);
	
	var _Composite2 = _interopRequireDefault(_Composite);
	
	var _Structure2 = _interopRequireDefault(_Structure);
	
	var _Redux2 = _interopRequireDefault(_Redux);
	
	var _Reducer = __webpack_require__(/*! ./Composite/Reducer */ 6);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _Middleware = __webpack_require__(/*! ./Composite/Middleware */ 8);
	
	var _Middleware2 = _interopRequireDefault(_Middleware);
	
	var _Equality = __webpack_require__(/*! ./Composite/Equality */ 11);
	
	var _Equality2 = _interopRequireDefault(_Equality);
	
	var _Subscribe = __webpack_require__(/*! ./Composite/Subscribe */ 12);
	
	var _Subscribe2 = _interopRequireDefault(_Subscribe);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Defaults = exports.Defaults = { Reducer: _Reducer2.default, Middleware: _Middleware2.default, Equality: _Equality2.default, Subscribe: _Subscribe2.default };
	var Composite = exports.Composite = function Composite(parameters) {
	  return new _Composite2.default(parameters);
	};
	exports.default = { Composite: Composite, Structure: _Structure2.default, Redux: _Redux2.default, Defaults: Defaults };

/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./src/Structure.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Structure = undefined;
	
	var _Composite = __webpack_require__(/*! ./Composite */ 3);
	
	var _Composite2 = _interopRequireDefault(_Composite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Structure = exports.Structure = function Structure(structure) {
	  return new _Composite2.default({ structure: structure });
	};
	exports.default = Structure;

/***/ }),
/* 3 */
/*!**************************!*\
  !*** ./src/Composite.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _WalkComposite = __webpack_require__(/*! ./Helper/WalkComposite */ 4);
	
	var _WalkComposite2 = _interopRequireDefault(_WalkComposite);
	
	var _Reducer = __webpack_require__(/*! ./Composite/Reducer */ 6);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _Middleware = __webpack_require__(/*! ./Composite/Middleware */ 8);
	
	var _Middleware2 = _interopRequireDefault(_Middleware);
	
	var _Equality = __webpack_require__(/*! ./Composite/Equality */ 11);
	
	var _Equality2 = _interopRequireDefault(_Equality);
	
	var _Subscribe = __webpack_require__(/*! ./Composite/Subscribe */ 12);
	
	var _Subscribe2 = _interopRequireDefault(_Subscribe);
	
	var _Redux = __webpack_require__(/*! ./Composite/Redux */ 13);
	
	var _Redux2 = _interopRequireDefault(_Redux);
	
	var _Memoize = __webpack_require__(/*! ./Composite/Memoize */ 14);
	
	var _Memoize2 = _interopRequireDefault(_Memoize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Composite = function Composite(data) {
	    _classCallCheck(this, Composite);
	
	    var structure = data.structure,
	        reducer = data.reducer,
	        middleware = data.middleware,
	        equality = data.equality,
	        subscribe = data.subscribe,
	        redux = data.redux,
	        memoize = data.memoize,
	        custom = data.custom;
	
	    var thisMiddleware = undefined,
	        thisSubscribe = undefined,
	        thisMemoize = undefined;
	    if (structure === undefined) {
	        if (typeof reducer !== 'function') {
	            throw {
	                message: "Not valid parameters: should be either structure or reducer"
	            };
	        }
	        this.reducer = reducer;
	        thisMiddleware = typeof middleware === 'function' ? middleware : function () {
	            return function (next) {
	                return function (action) {
	                    return next(action);
	                };
	            };
	        };
	        this.equality = typeof equality === 'function' ? equality : function (prev, next) {
	            return prev === next;
	        };
	        thisSubscribe = typeof subscribe === 'function' ? subscribe : function (dispatch, getState) {
	            return function (listener) {
	                return function () {
	                    return listener({ dispatch: dispatch, getState: getState });
	                };
	            };
	        };
	        this.redux = typeof redux === 'function' ? redux : function (dispatch, getState, subscribe) {
	            return {
	                redux: { dispatch: dispatch, getState: getState, subscribe: subscribe }
	            };
	        };
	        thisMemoize = typeof memoize === 'function' ? memoize : function (getState) {
	            return { memoize: function memoize(callback) {
	                    return callback;
	                } };
	        };
	    } else {
	        var compositeStructure = (0, _WalkComposite2.default)({}, true)(function (leaf) {
	            return typeof leaf === 'function' ? new Composite({ reducer: leaf }) : leaf;
	        })(structure);
	        this.reducer = custom === undefined || typeof custom.reducer !== 'function' ? (0, _Reducer2.default)(compositeStructure) : custom.reducer(compositeStructure);
	        thisMiddleware = custom === undefined || typeof custom.middleware !== 'function' ? (0, _Middleware2.default)(compositeStructure) : custom.middleware(compositeStructure);
	        this.equality = custom === undefined || typeof custom.equality !== 'function' ? (0, _Equality2.default)(compositeStructure) : custom.equality(compositeStructure);
	        thisSubscribe = custom === undefined || typeof custom.subscribe !== 'function' ? (0, _Subscribe2.default)(compositeStructure) : custom.subscribe(compositeStructure);
	        this.redux = custom === undefined || typeof custom.redux !== 'function' ? (0, _Redux2.default)(compositeStructure) : custom.redux(compositeStructure);
	        thisMemoize = custom === undefined || typeof custom.memoize !== 'function' ? (0, _Memoize2.default)(compositeStructure) : custom.memoize(compositeStructure);
	    }
	
	    // Middleware wrapper
	    this.middleware = function (_ref) {
	        var dispatch = _ref.dispatch,
	            getState = _ref.getState;
	        return function (next) {
	            return function (action) {
	                return action === undefined ? next(action) : thisMiddleware({ dispatch: dispatch, getState: getState })(next)(action);
	            };
	        };
	    };
	
	    var thisEquality = this.equality;
	    // Memoize wrapper
	    this.memoize = function (getState) {
	        var resolvedMemoize = thisMemoize(getState);
	        return _extends({}, resolvedMemoize, {
	            memoize: function memoize(callback) {
	                if (callback === undefined) {
	                    return function () {};
	                }
	                var state = getState(),
	                    result = undefined;
	                return function () {
	                    var next = getState();
	                    if (result === undefined || !thisEquality(state, next)) {
	                        state = next;
	                        result = resolvedMemoize.memoize(callback).apply(undefined, arguments);
	                    }
	                    return result;
	                };
	            }
	        });
	    };
	
	    // Subscribe wrapper
	    this.subscribe = function (dispatch, getState) {
	        var subscribe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
	        return function (listeners) {
	            if (listeners === undefined) {
	                return function () {};
	            }
	            var initializedSubscribe = thisSubscribe(dispatch, getState)(listeners);
	            var state = getState();
	            var listener = function listener() {
	                var next = getState();
	                if (!thisEquality(state, next)) {
	                    state = next;
	                    initializedSubscribe();
	                }
	            };
	            return typeof subscribe === 'function' ? subscribe(listener) : listener;
	        };
	    };
	};
	
	exports.default = Composite;

/***/ }),
/* 4 */
/*!*************************************!*\
  !*** ./src/Helper/WalkComposite.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _walkComposite = __webpack_require__(/*! walk-composite */ 5);
	
	var _Composite = __webpack_require__(/*! ../Composite */ 3);
	
	var _Composite2 = _interopRequireDefault(_Composite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var WalkComposite = function WalkComposite() {
	    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var allowFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    return (0, _walkComposite.Walk)(_extends({
	        leafCondition: function leafCondition(data) {
	            var isLeaf = _walkComposite.Defaults.LeafCondition(data);
	            if (!(data instanceof _Composite2.default) && isLeaf && (!allowFunction || typeof data !== 'function')) {
	                throw {
	                    message: "Structure leafs could be only instance of Composite or reducer function"
	                };
	            }
	            return isLeaf || data instanceof _Composite2.default;
	        },
	        walkMethod: function walkMethod(parameters) {
	            return WalkComposite(parameters, allowFunction);
	        }
	    }, parameters));
	};
	
	exports.default = WalkComposite;

/***/ }),
/* 5 */
/*!***********************************!*\
  !*** ./~/walk-composite/index.js ***!
  \***********************************/
/***/ (function(module, exports) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/*!*******************!*\
	  !*** multi index ***!
	  \*******************/
	/***/ (function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(/*! ./src/index.js */1);
	
	
	/***/ }),
	/* 1 */
	/*!**********************!*\
	  !*** ./src/index.js ***!
	  \**********************/
	/***/ (function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.Examples = exports.Defaults = undefined;
		
		var _Composite = __webpack_require__(/*! ./Composite */ 2);
		
		Object.keys(_Composite).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function get() {
		      return _Composite[key];
		    }
		  });
		});
		
		var _Walk = __webpack_require__(/*! ./Walk */ 4);
		
		Object.keys(_Walk).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function get() {
		      return _Walk[key];
		    }
		  });
		});
		
		var _KeysMethod = __webpack_require__(/*! ./Default/KeysMethod */ 7);
		
		var _KeysMethod2 = _interopRequireDefault(_KeysMethod);
		
		var _LeafCondition = __webpack_require__(/*! ./Default/LeafCondition */ 5);
		
		var _LeafCondition2 = _interopRequireDefault(_LeafCondition);
		
		var _MutationMethod = __webpack_require__(/*! ./Default/MutationMethod */ 6);
		
		var _MutationMethod2 = _interopRequireDefault(_MutationMethod);
		
		var _ReducerMethod = __webpack_require__(/*! ./Default/ReducerMethod */ 8);
		
		var _ReducerMethod2 = _interopRequireDefault(_ReducerMethod);
		
		var _WalkFunction = __webpack_require__(/*! ./Example/WalkFunction */ 9);
		
		var _WalkFunction2 = _interopRequireDefault(_WalkFunction);
		
		var _Composite2 = _interopRequireDefault(_Composite);
		
		var _Walk2 = _interopRequireDefault(_Walk);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Defaults = exports.Defaults = { KeysMethod: _KeysMethod2.default, LeafCondition: _LeafCondition2.default, MutationMethod: _MutationMethod2.default, ReducerMethod: _ReducerMethod2.default };
		var Examples = exports.Examples = { WalkFunction: _WalkFunction2.default };
		exports.default = { Walk: _Walk2.default, Composite: _Composite2.default, Defaults: Defaults, Examples: Examples };
	
	/***/ }),
	/* 2 */
	/*!**************************!*\
	  !*** ./src/Composite.js ***!
	  \**************************/
	/***/ (function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.Composite = undefined;
		
		var _InitDefault = __webpack_require__(/*! ./InitDefault */ 3);
		
		var _InitDefault2 = _interopRequireDefault(_InitDefault);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		var Composite = exports.Composite = function Composite(parameters) {
		    var defaults = (0, _InitDefault2.default)(parameters);
		    var reducerMethod = defaults.reducerMethod();
		    return function (leafCallback) {
		        return function () {
		            for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
		                data[_key] = arguments[_key];
		            }
		
		            return defaults.keysMethod().apply(undefined, data).reduce(function (result, key) {
		                var value = defaults.walkMethod()(parameters)(leafCallback).apply(undefined, _toConsumableArray(defaults.mutationMethod()(key).apply(undefined, data)));
		                return reducerMethod.add(result, key, value);
		            }, reducerMethod.init.apply(reducerMethod, data));
		        };
		    };
		};
		
		exports.default = Composite;
	
	/***/ }),
	/* 3 */
	/*!****************************!*\
	  !*** ./src/InitDefault.js ***!
	  \****************************/
	/***/ (function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		var _Walk = __webpack_require__(/*! ./Walk */ 4);
		
		var _Walk2 = _interopRequireDefault(_Walk);
		
		var _Composite = __webpack_require__(/*! ./Composite */ 2);
		
		var _Composite2 = _interopRequireDefault(_Composite);
		
		var _LeafCondition = __webpack_require__(/*! ./Default/LeafCondition */ 5);
		
		var _LeafCondition2 = _interopRequireDefault(_LeafCondition);
		
		var _MutationMethod = __webpack_require__(/*! ./Default/MutationMethod */ 6);
		
		var _MutationMethod2 = _interopRequireDefault(_MutationMethod);
		
		var _KeysMethod = __webpack_require__(/*! ./Default/KeysMethod */ 7);
		
		var _KeysMethod2 = _interopRequireDefault(_KeysMethod);
		
		var _ReducerMethod = __webpack_require__(/*! ./Default/ReducerMethod */ 8);
		
		var _ReducerMethod2 = _interopRequireDefault(_ReducerMethod);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var InitDefault = function InitDefault(_ref) {
		    var _leafCondition = _ref.leafCondition,
		        _mutationMethod = _ref.mutationMethod,
		        _walkMethod = _ref.walkMethod,
		        _compositeMethod = _ref.compositeMethod,
		        _keysMethod = _ref.keysMethod,
		        _reducerMethod = _ref.reducerMethod;
		    return {
		        walkMethod: function walkMethod() {
		            return typeof _walkMethod === 'function' ? _walkMethod : _Walk2.default;
		        },
		        compositeMethod: function compositeMethod() {
		            return typeof _compositeMethod === 'function' ? _compositeMethod : _Composite2.default;
		        },
		        leafCondition: function leafCondition() {
		            return typeof _leafCondition === 'function' ? _leafCondition : _LeafCondition2.default;
		        },
		        mutationMethod: function mutationMethod() {
		            return typeof _mutationMethod === 'function' ? _mutationMethod : _MutationMethod2.default;
		        },
		        keysMethod: function keysMethod() {
		            return typeof _keysMethod === 'function' ? _keysMethod : _KeysMethod2.default;
		        },
		        reducerMethod: function reducerMethod() {
		            return (typeof _reducerMethod === 'undefined' ? 'undefined' : _typeof(_reducerMethod)) === 'object' && typeof _reducerMethod.add === 'function' && typeof _reducerMethod.init === 'function' ? _reducerMethod : _ReducerMethod2.default;
		        }
		    };
		};
		
		exports.default = InitDefault;
	
	/***/ }),
	/* 4 */
	/*!*********************!*\
	  !*** ./src/Walk.js ***!
	  \*********************/
	/***/ (function(module, exports, __webpack_require__) {
	
		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.Walk = undefined;
		
		var _InitDefault = __webpack_require__(/*! ./InitDefault */ 3);
		
		var _InitDefault2 = _interopRequireDefault(_InitDefault);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Walk = exports.Walk = function Walk(parameters) {
		    var defaults = (0, _InitDefault2.default)(parameters);
		    return function (leafCallback) {
		        return function () {
		            return defaults.leafCondition().apply(undefined, arguments) ? leafCallback.apply(undefined, arguments) : defaults.compositeMethod()(parameters)(leafCallback).apply(undefined, arguments);
		        };
		    };
		};
		exports.default = Walk;
	
	/***/ }),
	/* 5 */
	/*!**************************************!*\
	  !*** ./src/Default/LeafCondition.js ***!
	  \**************************************/
	/***/ (function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		var LeafCondition = function LeafCondition(data) {
		  return data === null || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object';
		};
		exports.default = LeafCondition;
	
	/***/ }),
	/* 6 */
	/*!***************************************!*\
	  !*** ./src/Default/MutationMethod.js ***!
	  \***************************************/
	/***/ (function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		var _LeafCondition = __webpack_require__(/*! ./LeafCondition */ 5);
		
		var _LeafCondition2 = _interopRequireDefault(_LeafCondition);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var MutationMethod = function MutationMethod(key) {
		    return function () {
		        for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
		            data[_key] = arguments[_key];
		        }
		
		        return data.map(function (argument) {
		            return _LeafCondition2.default.apply(undefined, data) || (typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) !== 'object' || !argument.hasOwnProperty(key) ? undefined : argument[key];
		        });
		    };
		};
		
		exports.default = MutationMethod;
	
	/***/ }),
	/* 7 */
	/*!***********************************!*\
	  !*** ./src/Default/KeysMethod.js ***!
	  \***********************************/
	/***/ (function(module, exports) {
	
		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var KeysMethod = function KeysMethod(data) {
		  return Object.keys(data);
		};
		exports.default = KeysMethod;
	
	/***/ }),
	/* 8 */
	/*!**************************************!*\
	  !*** ./src/Default/ReducerMethod.js ***!
	  \**************************************/
	/***/ (function(module, exports) {
	
		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		var ReducerMethod = {
		    add: function add(result, key, value) {
		        return Array.isArray(result) ? [].concat(_toConsumableArray(result), [value]) : _extends({}, result, _defineProperty({}, key, value));
		    },
		    init: function init(data) {
		        return Array.isArray(data) ? [] : {};
		    }
		};
		
		exports.default = ReducerMethod;
	
	/***/ }),
	/* 9 */
	/*!*************************************!*\
	  !*** ./src/Example/WalkFunction.js ***!
	  \*************************************/
	/***/ (function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _index = __webpack_require__(/*! ../index */ 1);
		
		var WalkFunction = function WalkFunction() {
		    var indices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0];
		    var parameters = arguments[1];
		    return (0, _index.Walk)(_extends({
		        walkMethod: function walkMethod(parameters) {
		            return WalkFunction(indices, parameters);
		        },
		        leafCondition: function leafCondition() {
		            for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
		                data[_key] = arguments[_key];
		            }
		
		            if (!_index.Defaults.LeafCondition.apply(_index.Defaults, data)) {
		                return false;
		            }
		            data.map(function (argument, i) {
		                if (argument !== undefined && indices.indexOf(i) !== -1 && typeof argument !== 'function') {
		                    throw {
		                        message: "Leaf data could be only function",
		                        data: argument,
		                        index: i
		                    };
		                }
		            });
		            return true;
		        }
		    }, parameters));
		};
		exports.default = WalkFunction;
	
	/***/ })
	/******/ ]);
	//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
/*!**********************************!*\
  !*** ./src/Composite/Reducer.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _WalkComposite = __webpack_require__(/*! ../Helper/WalkComposite */ 4);
	
	var _WalkComposite2 = _interopRequireDefault(_WalkComposite);
	
	var _ReduxAction = __webpack_require__(/*! ../Helper/ReduxAction */ 7);
	
	var _ReduxAction2 = _interopRequireDefault(_ReduxAction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Reducer = function Reducer(compositeStructure) {
	    return function (state, action) {
	        return (0, _WalkComposite2.default)()(function (composite, state, action) {
	            return state === undefined || action !== undefined ? composite.reducer(state, action) : state;
	        })(compositeStructure, state, (0, _ReduxAction2.default)(action));
	    };
	};
	exports.default = Reducer;

/***/ }),
/* 7 */
/*!***********************************!*\
  !*** ./src/Helper/ReduxAction.js ***!
  \***********************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var ReduxAction = function ReduxAction(action) {
	  return (typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object' && action.type === 'COMPOSITE' ? action.composite : action;
	};
	var InitAction = function InitAction(callback) {
	  return function (action) {
	    return callback({ type: 'COMPOSITE', composite: action });
	  };
	};
	var MutateMethod = function MutateMethod(callback, key) {
	  return function (action) {
	    return callback(_defineProperty({}, key, action));
	  };
	};
	
	exports.ReduxAction = ReduxAction;
	exports.InitAction = InitAction;
	exports.MutateMethod = MutateMethod;
	exports.default = ReduxAction;

/***/ }),
/* 8 */
/*!*************************************!*\
  !*** ./src/Composite/Middleware.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _WalkComposite = __webpack_require__(/*! ../Helper/WalkComposite */ 4);
	
	var _WalkComposite2 = _interopRequireDefault(_WalkComposite);
	
	var _ReduxAction = __webpack_require__(/*! ../Helper/ReduxAction */ 7);
	
	var _DefaultMutationMethod = __webpack_require__(/*! ../Helper/DefaultMutationMethod */ 9);
	
	var _DefaultMutationMethod2 = _interopRequireDefault(_DefaultMutationMethod);
	
	var _InitWalk = __webpack_require__(/*! ../Helper/InitWalk */ 10);
	
	var _InitWalk2 = _interopRequireDefault(_InitWalk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Middleware = function Middleware(compositeStructure) {
	    return function (_ref) {
	        var dispatch = _ref.dispatch,
	            getState = _ref.getState;
	
	        var initMiddleware = (0, _InitWalk2.default)()(function (composite, dispatch, getState) {
	            return composite.middleware({ getState: getState, dispatch: dispatch });
	        })(compositeStructure, dispatch, getState);
	        return function (next) {
	            var initNextMiddleware = (0, _WalkComposite2.default)({
	                mutationMethod: function mutationMethod(key) {
	                    return function (composite, next, middleware) {
	                        return [(0, _DefaultMutationMethod2.default)(key)(composite), (0, _ReduxAction.MutateMethod)(next, key), (0, _DefaultMutationMethod2.default)(key)(middleware)];
	                    };
	                }
	            })(function (composite, next, middleware) {
	                return middleware(next);
	            })(compositeStructure, (0, _ReduxAction.InitAction)(next), initMiddleware);
	            return function (action) {
	                return (0, _WalkComposite2.default)()(function (composite, next, action) {
	                    return action === undefined ? undefined : next(action);
	                })(compositeStructure, initNextMiddleware, (0, _ReduxAction.ReduxAction)(action));
	            };
	        };
	    };
	};
	
	exports.default = Middleware;

/***/ }),
/* 9 */
/*!*********************************************!*\
  !*** ./src/Helper/DefaultMutationMethod.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _walkComposite = __webpack_require__(/*! walk-composite */ 5);
	
	var DefaultMutationMethod = function DefaultMutationMethod(key) {
	  return function (data) {
	    return _walkComposite.Defaults.MutationMethod(key)(data)[0];
	  };
	};
	exports.default = DefaultMutationMethod;

/***/ }),
/* 10 */
/*!********************************!*\
  !*** ./src/Helper/InitWalk.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _WalkComposite = __webpack_require__(/*! ../Helper/WalkComposite */ 4);
	
	var _WalkComposite2 = _interopRequireDefault(_WalkComposite);
	
	var _ReduxAction = __webpack_require__(/*! ../Helper/ReduxAction */ 7);
	
	var _DefaultMutationMethod = __webpack_require__(/*! ../Helper/DefaultMutationMethod */ 9);
	
	var _DefaultMutationMethod2 = _interopRequireDefault(_DefaultMutationMethod);
	
	var _walkComposite = __webpack_require__(/*! walk-composite */ 5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var InitWalk = function InitWalk() {
	    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return (0, _WalkComposite2.default)(_extends({
	        mutationMethod: function mutationMethod(key) {
	            return function (composite, dispatch, getState) {
	                for (var _len = arguments.length, other = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	                    other[_key - 3] = arguments[_key];
	                }
	
	                return [(0, _DefaultMutationMethod2.default)(key)(composite), (0, _ReduxAction.MutateMethod)(dispatch, key), function () {
	                    return getState()[key];
	                }].concat(_toConsumableArray(_walkComposite.Defaults.MutationMethod(key).apply(undefined, other)));
	            };
	        },
	        walkMethod: InitWalk
	    }, parameters));
	};
	
	exports.default = InitWalk;

/***/ }),
/* 11 */
/*!***********************************!*\
  !*** ./src/Composite/Equality.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _WalkComposite = __webpack_require__(/*! ../Helper/WalkComposite */ 4);
	
	var _WalkComposite2 = _interopRequireDefault(_WalkComposite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Equality = function Equality(compositeStructure) {
	    return function (prev, next) {
	        if (prev === next) {
	            return true;
	        }
	        var result = true;
	        (0, _WalkComposite2.default)()(function (composite, prev, next) {
	            var equal = composite.equality(prev, next);
	            result = result && equal;
	            return equal;
	        })(compositeStructure, prev, next);
	        return result;
	    };
	};
	exports.default = Equality;

/***/ }),
/* 12 */
/*!************************************!*\
  !*** ./src/Composite/Subscribe.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _InitWalk = __webpack_require__(/*! ../Helper/InitWalk */ 10);
	
	var _InitWalk2 = _interopRequireDefault(_InitWalk);
	
	var _WalkComposite = __webpack_require__(/*! ../Helper/WalkComposite */ 4);
	
	var _WalkComposite2 = _interopRequireDefault(_WalkComposite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Subscribe = function Subscribe(compositeStructure) {
	    return function (dispatch, getState) {
	        return function (listeners) {
	            var initSubscribe = (0, _InitWalk2.default)()(function (composite, dispatch, getState, listener) {
	                return composite.subscribe(dispatch, getState)(listener);
	            })(compositeStructure, dispatch, getState, listeners);
	            return function () {
	                return (0, _WalkComposite2.default)()(function (composite, subscribe) {
	                    return subscribe();
	                })(compositeStructure, initSubscribe);
	            };
	        };
	    };
	};
	
	exports.default = Subscribe;

/***/ }),
/* 13 */
/*!********************************!*\
  !*** ./src/Composite/Redux.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _WalkComposite = __webpack_require__(/*! ../Helper/WalkComposite */ 4);
	
	var _WalkComposite2 = _interopRequireDefault(_WalkComposite);
	
	var _ReduxAction = __webpack_require__(/*! ../Helper/ReduxAction */ 7);
	
	var _DefaultMutationMethod = __webpack_require__(/*! ../Helper/DefaultMutationMethod */ 9);
	
	var _DefaultMutationMethod2 = _interopRequireDefault(_DefaultMutationMethod);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Redux = function Redux(compositeStructure) {
	    return function (dispatch, getState, subscribe) {
	        var redux = { dispatch: dispatch, getState: getState, subscribe: subscribe };
	        var structure = (0, _WalkComposite2.default)({
	            mutationMethod: function mutationMethod(key) {
	                return function (composite, dispatch, getState, subscribe) {
	                    return [(0, _DefaultMutationMethod2.default)(key)(composite), (0, _ReduxAction.MutateMethod)(dispatch, key), function () {
	                        return getState()[key];
	                    }, function (listeners) {
	                        return subscribe(_defineProperty({}, key, listeners));
	                    }];
	                };
	            }
	        })(function (composite, dispatch, getState, subscribe) {
	            return composite.redux(dispatch, getState, subscribe);
	        })(compositeStructure, dispatch, getState, subscribe);
	        return {
	            redux: redux,
	            structure: structure
	        };
	    };
	};
	
	exports.default = Redux;

/***/ }),
/* 14 */
/*!**********************************!*\
  !*** ./src/Composite/Memoize.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _WalkComposite = __webpack_require__(/*! ../Helper/WalkComposite */ 4);
	
	var _WalkComposite2 = _interopRequireDefault(_WalkComposite);
	
	var _DefaultMutationMethod = __webpack_require__(/*! ../Helper/DefaultMutationMethod */ 9);
	
	var _DefaultMutationMethod2 = _interopRequireDefault(_DefaultMutationMethod);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Memoize = function Memoize(compositeStructure) {
	    return function (getState) {
	        var memoize = function memoize(callback) {
	            return callback;
	        };
	        var structure = (0, _WalkComposite2.default)({
	            mutationMethod: function mutationMethod(key) {
	                return function (composite, getState) {
	                    return [(0, _DefaultMutationMethod2.default)(key)(composite), function () {
	                        return getState()[key];
	                    }];
	                };
	            }
	        })(function (composite, getState) {
	            return composite.memoize(getState);
	        })(compositeStructure, getState);
	        return {
	            memoize: memoize,
	            structure: structure
	        };
	    };
	};
	
	exports.default = Memoize;

/***/ }),
/* 15 */
/*!**********************!*\
  !*** ./src/Redux.js ***!
  \**********************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Redux = exports.Redux = function Redux(composite) {
	    return function (_ref) {
	        var dispatch = _ref.dispatch,
	            getState = _ref.getState,
	            subscribe = _ref.subscribe;
	        return composite.redux(dispatch, getState, composite.subscribe(dispatch, getState, subscribe)).structure;
	    };
	};
	
	exports.default = Redux;

/***/ }),
/* 16 */
/*!*****************************!*\
  !*** ./src/Test/Reducer.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.calculator = exports.increment = exports.toggle = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _index = __webpack_require__(/*! ../index */ 1);
	
	var _expect = __webpack_require__(/*! expect */ 17);
	
	var _expect2 = _interopRequireDefault(_expect);
	
	var _deepFreeze = __webpack_require__(/*! deep-freeze */ 49);
	
	var _deepFreeze2 = _interopRequireDefault(_deepFreeze);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var toggle = function toggle(state, action) {
	    return state === undefined ? false : action.type === 'TOGGLE' ? !state : state;
	};
	var increment = function increment(state, action) {
	    return state === undefined ? 0 : action.type === 'INCREMENT' ? state + 1 : state;
	};
	var calculator = function calculator(state, action) {
	    if (state === undefined) {
	        return 0;
	    }
	    switch (action.type) {
	        case 'INCREMENT':
	            return state + action.value;
	        case 'DECREMENT':
	            return state - action.value;
	        default:
	            return state;
	    }
	};
	
	var checkBoth = function checkBoth(reducer) {
	    return function (expected, state, action) {
	        if (state !== undefined) {
	            (0, _deepFreeze2.default)(state);
	        }
	        (0, _expect2.default)(reducer(state, action)).toEqual(expected);
	        if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object') {
	            (0, _expect2.default)(reducer(state, { type: 'COMPOSITE', composite: action })).toEqual(expected);
	        }
	    };
	};
	
	var test = function test() {
	    var composite = (0, _index.Structure)({ toggle: toggle, calc: [increment, calculator] });
	    var checker = checkBoth(composite.reducer);
	    // Init state
	    checker({ toggle: false, calc: [0, 0] });
	    // Run all at the same time
	    checker({ toggle: false, calc: [2, 0] }, { toggle: true, calc: [1, 2] }, {
	        toggle: { type: 'TOGGLE' },
	        calc: [{ type: 'INCREMENT' }, { type: 'DECREMENT', value: 2 }]
	    });
	    // Run only one
	    checker({ toggle: false, calc: [2, 2] }, { toggle: false, calc: [1, 2] }, {
	        toggle: { type: 'unknown' },
	        calc: [{ type: 'INCREMENT' }]
	    });
	
	    var complex = (0, _index.Structure)({ increment: increment, reducer: composite });
	    checker = checkBoth(complex.reducer);
	    // Init state
	    checker({ increment: 0, reducer: { toggle: false, calc: [0, 0] } });
	    // Run all at the same time
	    checker({ increment: 3, reducer: { toggle: false, calc: [2, 0] } }, { increment: 2, reducer: { toggle: true, calc: [1, 2] } }, {
	        increment: { type: 'INCREMENT' },
	        reducer: {
	            toggle: { type: 'TOGGLE' },
	            calc: [{ type: 'INCREMENT' }, { type: 'DECREMENT', value: 2 }]
	        }
	    });
	    // Run only one
	    checker({ increment: 1, reducer: { toggle: false, calc: [2, 2] } }, { increment: 1, reducer: { toggle: false, calc: [1, 2] } }, {
	        increment: undefined,
	        reducer: {
	            toggle: { type: 'unknown' },
	            calc: [{ type: 'INCREMENT' }]
	        }
	    });
	};
	exports.toggle = toggle;
	exports.increment = increment;
	exports.calculator = calculator;
	exports.default = test;

/***/ }),
/* 17 */
/*!*******************************!*\
  !*** ./~/expect/lib/index.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Expectation = __webpack_require__(/*! ./Expectation */ 18);
	
	var _Expectation2 = _interopRequireDefault(_Expectation);
	
	var _SpyUtils = __webpack_require__(/*! ./SpyUtils */ 30);
	
	var _assert = __webpack_require__(/*! ./assert */ 28);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _extend = __webpack_require__(/*! ./extend */ 48);
	
	var _extend2 = _interopRequireDefault(_extend);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function expect(actual) {
	  return new _Expectation2.default(actual);
	}
	
	expect.createSpy = _SpyUtils.createSpy;
	expect.spyOn = _SpyUtils.spyOn;
	expect.isSpy = _SpyUtils.isSpy;
	expect.restoreSpies = _SpyUtils.restoreSpies;
	expect.assert = _assert2.default;
	expect.extend = _extend2.default;
	
	module.exports = expect;

/***/ }),
/* 18 */
/*!*************************************!*\
  !*** ./~/expect/lib/Expectation.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _has = __webpack_require__(/*! has */ 19);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _tmatch = __webpack_require__(/*! tmatch */ 22);
	
	var _tmatch2 = _interopRequireDefault(_tmatch);
	
	var _assert = __webpack_require__(/*! ./assert */ 28);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _SpyUtils = __webpack_require__(/*! ./SpyUtils */ 30);
	
	var _TestUtils = __webpack_require__(/*! ./TestUtils */ 35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * An Expectation is a wrapper around an assertion that allows it to be written
	 * in a more natural style, without the need to remember the order of arguments.
	 * This helps prevent you from making mistakes when writing tests.
	 */
	
	var Expectation = function () {
	  function Expectation(actual) {
	    _classCallCheck(this, Expectation);
	
	    this.actual = actual;
	
	    if ((0, _TestUtils.isFunction)(actual)) {
	      this.context = null;
	      this.args = [];
	    }
	  }
	
	  _createClass(Expectation, [{
	    key: 'toExist',
	    value: function toExist(message) {
	      (0, _assert2.default)(this.actual, message || 'Expected %s to exist', this.actual);
	
	      return this;
	    }
	  }, {
	    key: 'toNotExist',
	    value: function toNotExist(message) {
	      (0, _assert2.default)(!this.actual, message || 'Expected %s to not exist', this.actual);
	
	      return this;
	    }
	  }, {
	    key: 'toBe',
	    value: function toBe(value, message) {
	      (0, _assert2.default)(this.actual === value, message || 'Expected %s to be %s', this.actual, value);
	
	      return this;
	    }
	  }, {
	    key: 'toNotBe',
	    value: function toNotBe(value, message) {
	      (0, _assert2.default)(this.actual !== value, message || 'Expected %s to not be %s', this.actual, value);
	
	      return this;
	    }
	  }, {
	    key: 'toEqual',
	    value: function toEqual(value, message) {
	      try {
	        (0, _assert2.default)((0, _TestUtils.isEqual)(this.actual, value), message || 'Expected %s to equal %s', this.actual, value);
	      } catch (error) {
	        // These attributes are consumed by Mocha to produce a diff output.
	        error.actual = this.actual;
	        error.expected = value;
	        error.showDiff = true;
	        throw error;
	      }
	
	      return this;
	    }
	  }, {
	    key: 'toNotEqual',
	    value: function toNotEqual(value, message) {
	      (0, _assert2.default)(!(0, _TestUtils.isEqual)(this.actual, value), message || 'Expected %s to not equal %s', this.actual, value);
	
	      return this;
	    }
	  }, {
	    key: 'toThrow',
	    value: function toThrow(value, message) {
	      (0, _assert2.default)((0, _TestUtils.isFunction)(this.actual), 'The "actual" argument in expect(actual).toThrow() must be a function, %s was given', this.actual);
	
	      (0, _assert2.default)((0, _TestUtils.functionThrows)(this.actual, this.context, this.args, value), message || 'Expected %s to throw %s', this.actual, value || 'an error');
	
	      return this;
	    }
	  }, {
	    key: 'toNotThrow',
	    value: function toNotThrow(value, message) {
	      (0, _assert2.default)((0, _TestUtils.isFunction)(this.actual), 'The "actual" argument in expect(actual).toNotThrow() must be a function, %s was given', this.actual);
	
	      (0, _assert2.default)(!(0, _TestUtils.functionThrows)(this.actual, this.context, this.args, value), message || 'Expected %s to not throw %s', this.actual, value || 'an error');
	
	      return this;
	    }
	  }, {
	    key: 'toBeA',
	    value: function toBeA(value, message) {
	      (0, _assert2.default)((0, _TestUtils.isFunction)(value) || typeof value === 'string', 'The "value" argument in toBeA(value) must be a function or a string');
	
	      (0, _assert2.default)((0, _TestUtils.isA)(this.actual, value), message || 'Expected %s to be a %s', this.actual, value);
	
	      return this;
	    }
	  }, {
	    key: 'toNotBeA',
	    value: function toNotBeA(value, message) {
	      (0, _assert2.default)((0, _TestUtils.isFunction)(value) || typeof value === 'string', 'The "value" argument in toNotBeA(value) must be a function or a string');
	
	      (0, _assert2.default)(!(0, _TestUtils.isA)(this.actual, value), message || 'Expected %s to not be a %s', this.actual, value);
	
	      return this;
	    }
	  }, {
	    key: 'toMatch',
	    value: function toMatch(pattern, message) {
	      (0, _assert2.default)((0, _tmatch2.default)(this.actual, pattern), message || 'Expected %s to match %s', this.actual, pattern);
	
	      return this;
	    }
	  }, {
	    key: 'toNotMatch',
	    value: function toNotMatch(pattern, message) {
	      (0, _assert2.default)(!(0, _tmatch2.default)(this.actual, pattern), message || 'Expected %s to not match %s', this.actual, pattern);
	
	      return this;
	    }
	  }, {
	    key: 'toBeLessThan',
	    value: function toBeLessThan(value, message) {
	      (0, _assert2.default)(typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeLessThan() must be a number');
	
	      (0, _assert2.default)(typeof value === 'number', 'The "value" argument in toBeLessThan(value) must be a number');
	
	      (0, _assert2.default)(this.actual < value, message || 'Expected %s to be less than %s', this.actual, value);
	
	      return this;
	    }
	  }, {
	    key: 'toBeLessThanOrEqualTo',
	    value: function toBeLessThanOrEqualTo(value, message) {
	      (0, _assert2.default)(typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeLessThanOrEqualTo() must be a number');
	
	      (0, _assert2.default)(typeof value === 'number', 'The "value" argument in toBeLessThanOrEqualTo(value) must be a number');
	
	      (0, _assert2.default)(this.actual <= value, message || 'Expected %s to be less than or equal to %s', this.actual, value);
	
	      return this;
	    }
	  }, {
	    key: 'toBeGreaterThan',
	    value: function toBeGreaterThan(value, message) {
	      (0, _assert2.default)(typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeGreaterThan() must be a number');
	
	      (0, _assert2.default)(typeof value === 'number', 'The "value" argument in toBeGreaterThan(value) must be a number');
	
	      (0, _assert2.default)(this.actual > value, message || 'Expected %s to be greater than %s', this.actual, value);
	
	      return this;
	    }
	  }, {
	    key: 'toBeGreaterThanOrEqualTo',
	    value: function toBeGreaterThanOrEqualTo(value, message) {
	      (0, _assert2.default)(typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeGreaterThanOrEqualTo() must be a number');
	
	      (0, _assert2.default)(typeof value === 'number', 'The "value" argument in toBeGreaterThanOrEqualTo(value) must be a number');
	
	      (0, _assert2.default)(this.actual >= value, message || 'Expected %s to be greater than or equal to %s', this.actual, value);
	
	      return this;
	    }
	  }, {
	    key: 'toInclude',
	    value: function toInclude(value, compareValues, message) {
	      if (typeof compareValues === 'string') {
	        message = compareValues;
	        compareValues = null;
	      }
	
	      if (compareValues == null) compareValues = _TestUtils.isEqual;
	
	      var contains = false;
	
	      if ((0, _TestUtils.isArray)(this.actual)) {
	        contains = (0, _TestUtils.arrayContains)(this.actual, value, compareValues);
	      } else if ((0, _TestUtils.isObject)(this.actual)) {
	        contains = (0, _TestUtils.objectContains)(this.actual, value, compareValues);
	      } else if (typeof this.actual === 'string') {
	        contains = (0, _TestUtils.stringContains)(this.actual, value);
	      } else {
	        (0, _assert2.default)(false, 'The "actual" argument in expect(actual).toInclude() must be an array, object, or a string');
	      }
	
	      (0, _assert2.default)(contains, message || 'Expected %s to include %s', this.actual, value);
	
	      return this;
	    }
	  }, {
	    key: 'toExclude',
	    value: function toExclude(value, compareValues, message) {
	      if (typeof compareValues === 'string') {
	        message = compareValues;
	        compareValues = null;
	      }
	
	      if (compareValues == null) compareValues = _TestUtils.isEqual;
	
	      var contains = false;
	
	      if ((0, _TestUtils.isArray)(this.actual)) {
	        contains = (0, _TestUtils.arrayContains)(this.actual, value, compareValues);
	      } else if ((0, _TestUtils.isObject)(this.actual)) {
	        contains = (0, _TestUtils.objectContains)(this.actual, value, compareValues);
	      } else if (typeof this.actual === 'string') {
	        contains = (0, _TestUtils.stringContains)(this.actual, value);
	      } else {
	        (0, _assert2.default)(false, 'The "actual" argument in expect(actual).toExclude() must be an array, object, or a string');
	      }
	
	      (0, _assert2.default)(!contains, message || 'Expected %s to exclude %s', this.actual, value);
	
	      return this;
	    }
	  }, {
	    key: 'toIncludeKeys',
	    value: function toIncludeKeys(keys, comparator, message) {
	      var _this = this;
	
	      if (typeof comparator === 'string') {
	        message = comparator;
	        comparator = null;
	      }
	
	      if (comparator == null) comparator = _has2.default;
	
	      (0, _assert2.default)(_typeof(this.actual) === 'object', 'The "actual" argument in expect(actual).toIncludeKeys() must be an object, not %s', this.actual);
	
	      (0, _assert2.default)((0, _TestUtils.isArray)(keys), 'The "keys" argument in expect(actual).toIncludeKeys(keys) must be an array, not %s', keys);
	
	      var contains = keys.every(function (key) {
	        return comparator(_this.actual, key);
	      });
	
	      (0, _assert2.default)(contains, message || 'Expected %s to include key(s) %s', this.actual, keys.join(', '));
	
	      return this;
	    }
	  }, {
	    key: 'toIncludeKey',
	    value: function toIncludeKey(key) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      return this.toIncludeKeys.apply(this, [[key]].concat(args));
	    }
	  }, {
	    key: 'toExcludeKeys',
	    value: function toExcludeKeys(keys, comparator, message) {
	      var _this2 = this;
	
	      if (typeof comparator === 'string') {
	        message = comparator;
	        comparator = null;
	      }
	
	      if (comparator == null) comparator = _has2.default;
	
	      (0, _assert2.default)(_typeof(this.actual) === 'object', 'The "actual" argument in expect(actual).toExcludeKeys() must be an object, not %s', this.actual);
	
	      (0, _assert2.default)((0, _TestUtils.isArray)(keys), 'The "keys" argument in expect(actual).toIncludeKeys(keys) must be an array, not %s', keys);
	
	      var contains = keys.every(function (key) {
	        return comparator(_this2.actual, key);
	      });
	
	      (0, _assert2.default)(!contains, message || 'Expected %s to exclude key(s) %s', this.actual, keys.join(', '));
	
	      return this;
	    }
	  }, {
	    key: 'toExcludeKey',
	    value: function toExcludeKey(key) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }
	
	      return this.toExcludeKeys.apply(this, [[key]].concat(args));
	    }
	  }, {
	    key: 'toHaveBeenCalled',
	    value: function toHaveBeenCalled(message) {
	      var spy = this.actual;
	
	      (0, _assert2.default)((0, _SpyUtils.isSpy)(spy), 'The "actual" argument in expect(actual).toHaveBeenCalled() must be a spy');
	
	      (0, _assert2.default)(spy.calls.length > 0, message || 'spy was not called');
	
	      return this;
	    }
	  }, {
	    key: 'toHaveBeenCalledWith',
	    value: function toHaveBeenCalledWith() {
	      for (var _len3 = arguments.length, expectedArgs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        expectedArgs[_key3] = arguments[_key3];
	      }
	
	      var spy = this.actual;
	
	      (0, _assert2.default)((0, _SpyUtils.isSpy)(spy), 'The "actual" argument in expect(actual).toHaveBeenCalledWith() must be a spy');
	
	      (0, _assert2.default)(spy.calls.some(function (call) {
	        return (0, _TestUtils.isEqual)(call.arguments, expectedArgs);
	      }), 'spy was never called with %s', expectedArgs);
	
	      return this;
	    }
	  }, {
	    key: 'toNotHaveBeenCalled',
	    value: function toNotHaveBeenCalled(message) {
	      var spy = this.actual;
	
	      (0, _assert2.default)((0, _SpyUtils.isSpy)(spy), 'The "actual" argument in expect(actual).toNotHaveBeenCalled() must be a spy');
	
	      (0, _assert2.default)(spy.calls.length === 0, message || 'spy was not supposed to be called');
	
	      return this;
	    }
	  }]);
	
	  return Expectation;
	}();
	
	var deprecate = function deprecate(fn, message) {
	  var alreadyWarned = false;
	
	  return function () {
	    if (!alreadyWarned) {
	      alreadyWarned = true;
	      console.warn(message);
	    }
	
	    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	      args[_key4] = arguments[_key4];
	    }
	
	    return fn.apply(this, args);
	  };
	};
	
	Expectation.prototype.withContext = deprecate(function (context) {
	  (0, _assert2.default)((0, _TestUtils.isFunction)(this.actual), 'The "actual" argument in expect(actual).withContext() must be a function');
	
	  this.context = context;
	
	  return this;
	}, '\nwithContext is deprecated; use a closure instead.\n\n  expect(fn).withContext(context).toThrow()\n\nbecomes\n\n  expect(() => fn.call(context)).toThrow()\n');
	
	Expectation.prototype.withArgs = deprecate(function () {
	  var _args;
	
	  (0, _assert2.default)((0, _TestUtils.isFunction)(this.actual), 'The "actual" argument in expect(actual).withArgs() must be a function');
	
	  if (arguments.length) this.args = (_args = this.args).concat.apply(_args, arguments);
	
	  return this;
	}, '\nwithArgs is deprecated; use a closure instead.\n\n  expect(fn).withArgs(a, b, c).toThrow()\n\nbecomes\n\n  expect(() => fn(a, b, c)).toThrow()\n');
	
	var aliases = {
	  toBeAn: 'toBeA',
	  toNotBeAn: 'toNotBeA',
	  toBeTruthy: 'toExist',
	  toBeFalsy: 'toNotExist',
	  toBeFewerThan: 'toBeLessThan',
	  toBeMoreThan: 'toBeGreaterThan',
	  toContain: 'toInclude',
	  toNotContain: 'toExclude',
	  toNotInclude: 'toExclude',
	  toContainKeys: 'toIncludeKeys',
	  toNotContainKeys: 'toExcludeKeys',
	  toNotIncludeKeys: 'toExcludeKeys',
	  toContainKey: 'toIncludeKey',
	  toNotContainKey: 'toExcludeKey',
	  toNotIncludeKey: 'toExcludeKey'
	};
	
	for (var alias in aliases) {
	  if (aliases.hasOwnProperty(alias)) Expectation.prototype[alias] = Expectation.prototype[aliases[alias]];
	}exports.default = Expectation;

/***/ }),
/* 19 */
/*!****************************!*\
  !*** ./~/has/src/index.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(/*! function-bind */ 20);
	
	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 20 */
/*!**********************************!*\
  !*** ./~/function-bind/index.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var implementation = __webpack_require__(/*! ./implementation */ 21);
	
	module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 21 */
/*!*******************************************!*\
  !*** ./~/function-bind/implementation.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	'use strict';
	
	/* eslint no-invalid-this: 1 */
	
	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';
	
	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);
	
	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };
	
	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }
	
	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
	
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	
	    return bound;
	};


/***/ }),
/* 22 */
/*!***************************!*\
  !*** ./~/tmatch/index.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, Buffer) {'use strict'
	
	function isArguments (obj) {
	  return Object.prototype.toString.call(obj) === '[object Arguments]'
	}
	
	module.exports = match
	
	function match (obj, pattern) {
	  return match_(obj, pattern, [], [])
	}
	
	/* istanbul ignore next */
	var log = (/\btmatch\b/.test(process.env.NODE_DEBUG || '')) ?
	  console.error : function () {}
	
	function match_ (obj, pattern, ca, cb) {
	  log('TMATCH', typeof obj, pattern)
	  if (obj == pattern) {
	    log('TMATCH same object or simple value, or problem')
	    // if one is object, and the other isn't, then this is bogus
	    if (obj === null || pattern === null) {
	      return true
	
	    } else if (typeof obj === 'object' && typeof pattern === 'object') {
	      return true
	
	    } else if (typeof obj === 'object' && typeof pattern !== 'object') {
	      return false
	
	    } else if (typeof obj !== 'object' && typeof pattern === 'object') {
	      return false
	
	    } else {
	      return true
	    }
	
	  } else if (obj === null || pattern === null) {
	    log('TMATCH null test, already failed ==')
	    return false
	
	  } else if (typeof obj === 'string' && pattern instanceof RegExp) {
	    log('TMATCH string~=regexp test')
	    return pattern.test(obj)
	
	  } else if (typeof obj === 'string' && typeof pattern === 'string' && pattern) {
	    log('TMATCH string~=string test')
	    return obj.indexOf(pattern) !== -1
	
	  } else if (obj instanceof Date && pattern instanceof Date) {
	    log('TMATCH date test')
	    return obj.getTime() === pattern.getTime()
	
	  } else if (obj instanceof Date && typeof pattern === 'string') {
	    log('TMATCH date~=string test')
	    return obj.getTime() === new Date(pattern).getTime()
	
	  } else if (isArguments(obj) || isArguments(pattern)) {
	    log('TMATCH arguments test')
	    var slice = Array.prototype.slice
	    return match_(slice.call(obj), slice.call(pattern), ca, cb)
	
	  } else if (pattern === Buffer) {
	    log('TMATCH Buffer ctor')
	    return Buffer.isBuffer(obj)
	
	  } else if (pattern === Function) {
	    log('TMATCH Function ctor')
	    return typeof obj === 'function'
	
	  } else if (pattern === Number) {
	    log('TMATCH Number ctor (finite, not NaN)')
	    return typeof obj === 'number' && obj === obj && isFinite(obj)
	
	  } else if (pattern !== pattern) {
	    log('TMATCH NaN')
	    return obj !== obj
	
	  } else if (pattern === String) {
	    log('TMATCH String ctor')
	    return typeof obj === 'string'
	
	  } else if (pattern === Boolean) {
	    log('TMATCH Boolean ctor')
	    return typeof obj === 'boolean'
	
	  } else if (pattern === Array) {
	    log('TMATCH Array ctor', pattern, Array.isArray(obj))
	    return Array.isArray(obj)
	
	  } else if (typeof pattern === 'function' && typeof obj === 'object') {
	    log('TMATCH object~=function')
	    return obj instanceof pattern
	
	  } else if (typeof obj !== 'object' || typeof pattern !== 'object') {
	    log('TMATCH obj is not object, pattern is not object, false')
	    return false
	
	  } else if (obj instanceof RegExp && pattern instanceof RegExp) {
	    log('TMATCH regexp~=regexp test')
	    return obj.source === pattern.source &&
	      obj.global === pattern.global &&
	      obj.multiline === pattern.multiline &&
	      obj.lastIndex === pattern.lastIndex &&
	      obj.ignoreCase === pattern.ignoreCase
	
	  } else if (Buffer.isBuffer(obj) && Buffer.isBuffer(pattern)) {
	    log('TMATCH buffer test')
	    if (obj.equals) {
	      return obj.equals(pattern)
	    } else {
	      if (obj.length !== pattern.length) return false
	
	      for (var j = 0; j < obj.length; j++) if (obj[j] != pattern[j]) return false
	
	      return true
	    }
	
	  } else {
	    // both are objects.  interesting case!
	    log('TMATCH object~=object test')
	    var kobj = Object.keys(obj)
	    var kpat = Object.keys(pattern)
	    log('  TMATCH patternkeys=%j objkeys=%j', kpat, kobj)
	
	    // don't bother with stack acrobatics if there's nothing there
	    if (kobj.length === 0 && kpat.length === 0) return true
	
	    // if we've seen this exact pattern and object already, then
	    // it means that pattern and obj have matching cyclicalness
	    // however, non-cyclical patterns can match cyclical objects
	    log('  TMATCH check seen objects...')
	    var cal = ca.length
	    while (cal--) if (ca[cal] === obj && cb[cal] === pattern) return true
	    ca.push(obj); cb.push(pattern)
	    log('  TMATCH not seen previously')
	
	    var key
	    for (var l = kpat.length - 1; l >= 0; l--) {
	      key = kpat[l]
	      log('  TMATCH test obj[%j]', key, obj[key], pattern[key])
	      if (!match_(obj[key], pattern[key], ca, cb)) return false
	    }
	
	    ca.pop()
	    cb.pop()
	
	    log('  TMATCH object pass')
	    return true
	  }
	
	  /* istanbul ignore next */
	  throw new Error('impossible to reach this point')
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../process/browser.js */ 23), __webpack_require__(/*! ./../buffer/index.js */ 24).Buffer))

/***/ }),
/* 23 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 24 */
/*!***************************!*\
  !*** ./~/buffer/index.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(/*! base64-js */ 25)
	var ieee754 = __webpack_require__(/*! ieee754 */ 26)
	var isArray = __webpack_require__(/*! isarray */ 27)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 25 */
/*!******************************!*\
  !*** ./~/base64-js/index.js ***!
  \******************************/
/***/ (function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	
	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return (b64.length * 3 / 4) - placeHoldersCount(b64)
	}
	
	function toByteArray (b64) {
	  var i, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)
	
	  arr = new Arr((len * 3 / 4) - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0; i < l; i += 4) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ }),
/* 26 */
/*!****************************!*\
  !*** ./~/ieee754/index.js ***!
  \****************************/
/***/ (function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ }),
/* 27 */
/*!****************************!*\
  !*** ./~/isarray/index.js ***!
  \****************************/
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 28 */
/*!********************************!*\
  !*** ./~/expect/lib/assert.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _objectInspect = __webpack_require__(/*! object-inspect */ 29);
	
	var _objectInspect2 = _interopRequireDefault(_objectInspect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var formatString = function formatString(string, args) {
	  var index = 0;
	  return string.replace(/%s/g, function () {
	    return (0, _objectInspect2.default)(args[index++]);
	  });
	};
	
	var assert = function assert(condition, createMessage) {
	  for (var _len = arguments.length, extraArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    extraArgs[_key - 2] = arguments[_key];
	  }
	
	  if (condition) return;
	
	  var message = typeof createMessage === 'string' ? formatString(createMessage, extraArgs) : createMessage(extraArgs);
	
	  throw new Error(message);
	};
	
	exports.default = assert;

/***/ }),
/* 29 */
/*!***********************************!*\
  !*** ./~/object-inspect/index.js ***!
  \***********************************/
/***/ (function(module, exports) {

	var hasMap = typeof Map === 'function' && Map.prototype;
	var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
	var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
	var mapForEach = hasMap && Map.prototype.forEach;
	var hasSet = typeof Set === 'function' && Set.prototype;
	var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
	var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
	var setForEach = hasSet && Set.prototype.forEach;
	var booleanValueOf = Boolean.prototype.valueOf;
	var objectToString = Object.prototype.toString;
	
	module.exports = function inspect_ (obj, opts, depth, seen) {
	    if (typeof obj === 'undefined') {
	        return 'undefined';
	    }
	    if (obj === null) {
	        return 'null';
	    }
	    if (typeof obj === 'boolean') {
	        return obj ? 'true' : 'false';
	    }
	    if (typeof obj === 'string') {
	        return inspectString(obj);
	    }
	    if (typeof obj === 'number') {
	      if (obj === 0) {
	        return Infinity / obj > 0 ? '0' : '-0';
	      }
	      return String(obj);
	    }
	
	    if (!opts) opts = {};
	
	    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
	    if (typeof depth === 'undefined') depth = 0;
	    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
	        return '[Object]';
	    }
	
	    if (typeof seen === 'undefined') seen = [];
	    else if (indexOf(seen, obj) >= 0) {
	        return '[Circular]';
	    }
	
	    function inspect (value, from) {
	        if (from) {
	            seen = seen.slice();
	            seen.push(from);
	        }
	        return inspect_(value, opts, depth + 1, seen);
	    }
	
	    if (typeof obj === 'function') {
	        var name = nameOf(obj);
	        return '[Function' + (name ? ': ' + name : '') + ']';
	    }
	    if (isSymbol(obj)) {
	        var symString = Symbol.prototype.toString.call(obj);
	        return typeof obj === 'object' ? markBoxed(symString) : symString;
	    }
	    if (isElement(obj)) {
	        var s = '<' + String(obj.nodeName).toLowerCase();
	        var attrs = obj.attributes || [];
	        for (var i = 0; i < attrs.length; i++) {
	            s += ' ' + attrs[i].name + '="' + quote(attrs[i].value) + '"';
	        }
	        s += '>';
	        if (obj.childNodes && obj.childNodes.length) s += '...';
	        s += '</' + String(obj.nodeName).toLowerCase() + '>';
	        return s;
	    }
	    if (isArray(obj)) {
	        if (obj.length === 0) return '[]';
	        return '[ ' + arrObjKeys(obj, inspect).join(', ') + ' ]';
	    }
	    if (isError(obj)) {
	        var parts = arrObjKeys(obj, inspect);
	        if (parts.length === 0) return '[' + String(obj) + ']';
	        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
	    }
	    if (typeof obj === 'object' && typeof obj.inspect === 'function') {
	        return obj.inspect();
	    }
	    if (isMap(obj)) {
	        var parts = [];
	        mapForEach.call(obj, function (value, key) {
	            parts.push(inspect(key, obj) + ' => ' + inspect(value, obj));
	        });
	        return collectionOf('Map', mapSize.call(obj), parts);
	    }
	    if (isSet(obj)) {
	        var parts = [];
	        setForEach.call(obj, function (value ) {
	            parts.push(inspect(value, obj));
	        });
	        return collectionOf('Set', setSize.call(obj), parts);
	    }
	    if (isNumber(obj)) {
	        return markBoxed(Number(obj));
	    }
	    if (isBoolean(obj)) {
	        return markBoxed(booleanValueOf.call(obj));
	    }
	    if (isString(obj)) {
	        return markBoxed(inspect(String(obj)));
	    }
	    if (!isDate(obj) && !isRegExp(obj)) {
	        var xs = arrObjKeys(obj, inspect);
	        if (xs.length === 0) return '{}';
	        return '{ ' + xs.join(', ') + ' }';
	    }
	    return String(obj);
	};
	
	function quote (s) {
	    return String(s).replace(/"/g, '&quot;');
	}
	
	function isArray (obj) { return toStr(obj) === '[object Array]' }
	function isDate (obj) { return toStr(obj) === '[object Date]' }
	function isRegExp (obj) { return toStr(obj) === '[object RegExp]' }
	function isError (obj) { return toStr(obj) === '[object Error]' }
	function isSymbol (obj) { return toStr(obj) === '[object Symbol]' }
	function isString (obj) { return toStr(obj) === '[object String]' }
	function isNumber (obj) { return toStr(obj) === '[object Number]' }
	function isBoolean (obj) { return toStr(obj) === '[object Boolean]' }
	
	var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
	function has (obj, key) {
	    return hasOwn.call(obj, key);
	}
	
	function toStr (obj) {
	    return objectToString.call(obj);
	}
	
	function nameOf (f) {
	    if (f.name) return f.name;
	    var m = String(f).match(/^function\s*([\w$]+)/);
	    if (m) return m[1];
	}
	
	function indexOf (xs, x) {
	    if (xs.indexOf) return xs.indexOf(x);
	    for (var i = 0, l = xs.length; i < l; i++) {
	        if (xs[i] === x) return i;
	    }
	    return -1;
	}
	
	function isMap (x) {
	    if (!mapSize) {
	        return false;
	    }
	    try {
	        mapSize.call(x);
	        try {
	            setSize.call(x);
	        } catch (s) {
	            return true;
	        }
	        return x instanceof Map; // core-js workaround, pre-v2.5.0
	    } catch (e) {}
	    return false;
	}
	
	function isSet (x) {
	    if (!setSize) {
	        return false;
	    }
	    try {
	        setSize.call(x);
	        try {
	            mapSize.call(x);
	        } catch (m) {
	            return true;
	        }
	        return x instanceof Set; // core-js workaround, pre-v2.5.0
	    } catch (e) {}
	    return false;
	}
	
	function isElement (x) {
	    if (!x || typeof x !== 'object') return false;
	    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
	        return true;
	    }
	    return typeof x.nodeName === 'string'
	        && typeof x.getAttribute === 'function'
	    ;
	}
	
	function inspectString (str) {
	    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
	    return "'" + s + "'";
	}
	
	function lowbyte (c) {
	    var n = c.charCodeAt(0);
	    var x = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[n];
	    if (x) return '\\' + x;
	    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
	}
	
	function markBoxed (str) {
	    return 'Object(' + str + ')';
	}
	
	function collectionOf (type, size, entries) {
	    return type + ' (' + size + ') {' + entries.join(', ') + '}';
	}
	
	function arrObjKeys (obj, inspect) {
	    var isArr = isArray(obj);
	    var xs = [];
	    if (isArr) {
	        xs.length = obj.length;
	        for (var i = 0; i < obj.length; i++) {
	            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
	        }
	    }
	    for (var key in obj) {
	        if (!has(obj, key)) continue;
	        if (isArr && String(Number(key)) === key && key < obj.length) continue;
	        if (/[^\w$]/.test(key)) {
	            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
	        } else {
	            xs.push(key + ': ' + inspect(obj[key], obj));
	        }
	    }
	    return xs;
	}


/***/ }),
/* 30 */
/*!**********************************!*\
  !*** ./~/expect/lib/SpyUtils.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.spyOn = exports.createSpy = exports.restoreSpies = exports.isSpy = undefined;
	
	var _defineProperties = __webpack_require__(/*! define-properties */ 31);
	
	var _assert = __webpack_require__(/*! ./assert */ 28);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _TestUtils = __webpack_require__(/*! ./TestUtils */ 35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*eslint-disable prefer-rest-params, no-underscore-dangle*/
	
	
	var noop = function noop() {};
	
	var supportsConfigurableFnLength = _defineProperties.supportsDescriptors && Object.getOwnPropertyDescriptor(function () {}, 'length').configurable;
	
	var isSpy = exports.isSpy = function isSpy(object) {
	  return object && object.__isSpy === true;
	};
	
	var spies = [];
	
	var restoreSpies = exports.restoreSpies = function restoreSpies() {
	  for (var i = spies.length - 1; i >= 0; i--) {
	    spies[i].restore();
	  }spies = [];
	};
	
	var createSpy = exports.createSpy = function createSpy(fn) {
	  var restore = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];
	
	  if (fn == null) fn = noop;
	
	  (0, _assert2.default)((0, _TestUtils.isFunction)(fn), 'createSpy needs a function');
	
	  var targetFn = void 0,
	      thrownValue = void 0,
	      returnValue = void 0,
	      spy = void 0;
	
	  function spyLogic() {
	    spy.calls.push({
	      context: this,
	      arguments: Array.prototype.slice.call(arguments, 0)
	    });
	
	    if (targetFn) return targetFn.apply(this, arguments);
	
	    if (thrownValue) throw thrownValue;
	
	    return returnValue;
	  }
	
	  if (supportsConfigurableFnLength) {
	    spy = Object.defineProperty(spyLogic, 'length', { value: fn.length, writable: false, enumerable: false, configurable: true });
	  } else {
	    spy = new Function('spy', 'return function(' + // eslint-disable-line no-new-func
	    [].concat(_toConsumableArray(Array(fn.length))).map(function (_, i) {
	      return '_' + i;
	    }).join(',') + ') {\n      return spy.apply(this, arguments)\n    }')(spyLogic);
	  }
	
	  spy.calls = [];
	
	  spy.andCall = function (otherFn) {
	    targetFn = otherFn;
	    return spy;
	  };
	
	  spy.andCallThrough = function () {
	    return spy.andCall(fn);
	  };
	
	  spy.andThrow = function (value) {
	    thrownValue = value;
	    return spy;
	  };
	
	  spy.andReturn = function (value) {
	    returnValue = value;
	    return spy;
	  };
	
	  spy.getLastCall = function () {
	    return spy.calls[spy.calls.length - 1];
	  };
	
	  spy.reset = function () {
	    spy.calls = [];
	  };
	
	  spy.restore = spy.destroy = restore;
	
	  spy.__isSpy = true;
	
	  spies.push(spy);
	
	  return spy;
	};
	
	var spyOn = exports.spyOn = function spyOn(object, methodName) {
	  var original = object[methodName];
	
	  if (!isSpy(original)) {
	    (0, _assert2.default)((0, _TestUtils.isFunction)(original), 'Cannot spyOn the %s property; it is not a function', methodName);
	
	    object[methodName] = createSpy(original, function () {
	      object[methodName] = original;
	    });
	  }
	
	  return object[methodName];
	};

/***/ }),
/* 31 */
/*!**************************************!*\
  !*** ./~/define-properties/index.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var keys = __webpack_require__(/*! object-keys */ 32);
	var foreach = __webpack_require__(/*! foreach */ 34);
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	var toStr = Object.prototype.toString;
	
	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};
	
	var arePropertyDescriptorsSupported = function () {
		var obj = {};
		try {
			Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
	        /* eslint-disable no-unused-vars, no-restricted-syntax */
	        for (var _ in obj) { return false; }
	        /* eslint-enable no-unused-vars, no-restricted-syntax */
			return obj.x === obj;
		} catch (e) { /* this is IE 8. */
			return false;
		}
	};
	var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();
	
	var defineProperty = function (object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			Object.defineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value;
		}
	};
	
	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = props.concat(Object.getOwnPropertySymbols(map));
		}
		foreach(props, function (name) {
			defineProperty(object, name, map[name], predicates[name]);
		});
	};
	
	defineProperties.supportsDescriptors = !!supportsDescriptors;
	
	module.exports = defineProperties;


/***/ }),
/* 32 */
/*!********************************!*\
  !*** ./~/object-keys/index.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(/*! ./isArguments */ 33);
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};
	
	var keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];
	
		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}
	
		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}
	
		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}
	
		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	
			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
	
	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				return (Object.keys(arguments) || '').length === 2;
			}(1, 2));
			if (!keysWorksWithArguments) {
				var originalKeys = Object.keys;
				Object.keys = function keys(object) {
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					} else {
						return originalKeys(object);
					}
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};
	
	module.exports = keysShim;


/***/ }),
/* 33 */
/*!**************************************!*\
  !*** ./~/object-keys/isArguments.js ***!
  \**************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ }),
/* 34 */
/*!****************************!*\
  !*** ./~/foreach/index.js ***!
  \****************************/
/***/ (function(module, exports) {

	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;
	
	module.exports = function forEach (obj, fn, ctx) {
	    if (toString.call(fn) !== '[object Function]') {
	        throw new TypeError('iterator must be a function');
	    }
	    var l = obj.length;
	    if (l === +l) {
	        for (var i = 0; i < l; i++) {
	            fn.call(ctx, obj[i], i, obj);
	        }
	    } else {
	        for (var k in obj) {
	            if (hasOwn.call(obj, k)) {
	                fn.call(ctx, obj[k], k, obj);
	            }
	        }
	    }
	};
	


/***/ }),
/* 35 */
/*!***********************************!*\
  !*** ./~/expect/lib/TestUtils.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.stringContains = exports.objectContains = exports.arrayContains = exports.functionThrows = exports.isA = exports.isObject = exports.isArray = exports.isFunction = exports.isEqual = exports.whyNotEqual = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _isRegex = __webpack_require__(/*! is-regex */ 36);
	
	var _isRegex2 = _interopRequireDefault(_isRegex);
	
	var _why = __webpack_require__(/*! is-equal/why */ 37);
	
	var _why2 = _interopRequireDefault(_why);
	
	var _objectKeys = __webpack_require__(/*! object-keys */ 32);
	
	var _objectKeys2 = _interopRequireDefault(_objectKeys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Returns the reason why the given arguments are not *conceptually*
	 * equal, if any; the empty string otherwise.
	 */
	var whyNotEqual = exports.whyNotEqual = function whyNotEqual(a, b) {
	  return a == b ? '' : (0, _why2.default)(a, b);
	};
	
	/**
	 * Returns true if the given arguments are *conceptually* equal.
	 */
	var isEqual = exports.isEqual = function isEqual(a, b) {
	  return whyNotEqual(a, b) === '';
	};
	
	/**
	 * Returns true if the given object is a function.
	 */
	var isFunction = exports.isFunction = function isFunction(object) {
	  return typeof object === 'function';
	};
	
	/**
	 * Returns true if the given object is an array.
	 */
	var isArray = exports.isArray = function isArray(object) {
	  return Array.isArray(object);
	};
	
	/**
	 * Returns true if the given object is an object.
	 */
	var isObject = exports.isObject = function isObject(object) {
	  return object && !isArray(object) && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object';
	};
	
	/**
	 * Returns true if the given object is an instanceof value
	 * or its typeof is the given value.
	 */
	var isA = exports.isA = function isA(object, value) {
	  if (isFunction(value)) return object instanceof value;
	
	  if (value === 'array') return Array.isArray(object);
	
	  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === value;
	};
	
	/**
	 * Returns true if the given function throws the given value
	 * when invoked. The value may be:
	 *
	 * - undefined, to merely assert there was a throw
	 * - a constructor function, for comparing using instanceof
	 * - a regular expression, to compare with the error message
	 * - a string, to find in the error message
	 */
	var functionThrows = exports.functionThrows = function functionThrows(fn, context, args, value) {
	  try {
	    fn.apply(context, args);
	  } catch (error) {
	    if (value == null) return true;
	
	    if (isFunction(value) && error instanceof value) return true;
	
	    var message = error.message || error;
	
	    if (typeof message === 'string') {
	      if ((0, _isRegex2.default)(value) && value.test(error.message)) return true;
	
	      if (typeof value === 'string' && message.indexOf(value) !== -1) return true;
	    }
	  }
	
	  return false;
	};
	
	/**
	 * Returns true if the given array contains the value, false
	 * otherwise. The compareValues function must return false to
	 * indicate a non-match.
	 */
	var arrayContains = exports.arrayContains = function arrayContains(array, value, compareValues) {
	  return array.some(function (item) {
	    return compareValues(item, value) !== false;
	  });
	};
	
	var ownEnumerableKeys = function ownEnumerableKeys(object) {
	  if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' && typeof Reflect.ownKeys === 'function') {
	    return Reflect.ownKeys(object).filter(function (key) {
	      return Object.getOwnPropertyDescriptor(object, key).enumerable;
	    });
	  }
	
	  if (typeof Object.getOwnPropertySymbols === 'function') {
	    return Object.getOwnPropertySymbols(object).filter(function (key) {
	      return Object.getOwnPropertyDescriptor(object, key).enumerable;
	    }).concat((0, _objectKeys2.default)(object));
	  }
	
	  return (0, _objectKeys2.default)(object);
	};
	
	/**
	 * Returns true if the given object contains the value, false
	 * otherwise. The compareValues function must return false to
	 * indicate a non-match.
	 */
	var objectContains = exports.objectContains = function objectContains(object, value, compareValues) {
	  return ownEnumerableKeys(value).every(function (k) {
	    if (isObject(object[k]) && isObject(value[k])) return objectContains(object[k], value[k], compareValues);
	
	    return compareValues(object[k], value[k]);
	  });
	};
	
	/**
	 * Returns true if the given string contains the value, false otherwise.
	 */
	var stringContains = exports.stringContains = function stringContains(string, value) {
	  return string.indexOf(value) !== -1;
	};

/***/ }),
/* 36 */
/*!*****************************!*\
  !*** ./~/is-regex/index.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(/*! has */ 19);
	var regexExec = RegExp.prototype.exec;
	var gOPD = Object.getOwnPropertyDescriptor;
	
	var tryRegexExecCall = function tryRegexExec(value) {
		try {
			var lastIndex = value.lastIndex;
			value.lastIndex = 0;
	
			regexExec.call(value);
			return true;
		} catch (e) {
			return false;
		} finally {
			value.lastIndex = lastIndex;
		}
	};
	var toStr = Object.prototype.toString;
	var regexClass = '[object RegExp]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}
		if (!hasToStringTag) {
			return toStr.call(value) === regexClass;
		}
	
		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}
	
		return tryRegexExecCall(value);
	};


/***/ }),
/* 37 */
/*!***************************!*\
  !*** ./~/is-equal/why.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ObjectPrototype = Object.prototype;
	var toStr = ObjectPrototype.toString;
	var booleanValue = Boolean.prototype.valueOf;
	var has = __webpack_require__(/*! has */ 19);
	var isArrowFunction = __webpack_require__(/*! is-arrow-function */ 38);
	var isBoolean = __webpack_require__(/*! is-boolean-object */ 40);
	var isDate = __webpack_require__(/*! is-date-object */ 41);
	var isGenerator = __webpack_require__(/*! is-generator-function */ 42);
	var isNumber = __webpack_require__(/*! is-number-object */ 43);
	var isRegex = __webpack_require__(/*! is-regex */ 36);
	var isString = __webpack_require__(/*! is-string */ 44);
	var isSymbol = __webpack_require__(/*! is-symbol */ 45);
	var isCallable = __webpack_require__(/*! is-callable */ 39);
	
	var isProto = Object.prototype.isPrototypeOf;
	
	var namedFoo = function foo() {};
	var functionsHaveNames = namedFoo.name === 'foo';
	
	var symbolValue = typeof Symbol === 'function' ? Symbol.prototype.valueOf : null;
	var symbolIterator = __webpack_require__(/*! ./getSymbolIterator */ 46)();
	
	var collectionsForEach = __webpack_require__(/*! ./getCollectionsForEach */ 47)();
	
	var getPrototypeOf = Object.getPrototypeOf;
	if (!getPrototypeOf) {
		/* eslint-disable no-proto */
		if (typeof 'test'.__proto__ === 'object') {
			getPrototypeOf = function (obj) {
				return obj.__proto__;
			};
		} else {
			getPrototypeOf = function (obj) {
				var constructor = obj.constructor,
					oldConstructor;
				if (has(obj, 'constructor')) {
					oldConstructor = constructor;
					if (!(delete obj.constructor)) { // reset constructor
						return null; // can't delete obj.constructor, return null
					}
					constructor = obj.constructor; // get real constructor
					obj.constructor = oldConstructor; // restore constructor
				}
				return constructor ? constructor.prototype : ObjectPrototype; // needed for IE
			};
		}
		/* eslint-enable no-proto */
	}
	
	var isArray = Array.isArray || function (value) {
		return toStr.call(value) === '[object Array]';
	};
	
	var normalizeFnWhitespace = function normalizeWhitespace(fnStr) {
		// this is needed in IE 9, at least, which has inconsistencies here.
		return fnStr.replace(/^function ?\(/, 'function (').replace('){', ') {');
	};
	
	var tryMapSetEntries = function tryCollectionEntries(collection) {
		var foundEntries = [];
		try {
			collectionsForEach.Map.call(collection, function (key, value) {
				foundEntries.push([key, value]);
			});
		} catch (notMap) {
			try {
				collectionsForEach.Set.call(collection, function (value) {
					foundEntries.push([value]);
				});
			} catch (notSet) {
				return false;
			}
		}
		return foundEntries;
	};
	
	module.exports = function whyNotEqual(value, other) {
		if (value === other) { return ''; }
		if (value == null || other == null) {
			return value === other ? '' : String(value) + ' !== ' + String(other);
		}
	
		var valToStr = toStr.call(value);
		var otherToStr = toStr.call(other);
		if (valToStr !== otherToStr) {
			return 'toStringTag is not the same: ' + valToStr + ' !== ' + otherToStr;
		}
	
		var valIsBool = isBoolean(value);
		var otherIsBool = isBoolean(other);
		if (valIsBool || otherIsBool) {
			if (!valIsBool) { return 'first argument is not a boolean; second argument is'; }
			if (!otherIsBool) { return 'second argument is not a boolean; first argument is'; }
			var valBoolVal = booleanValue.call(value);
			var otherBoolVal = booleanValue.call(other);
			if (valBoolVal === otherBoolVal) { return ''; }
			return 'primitive value of boolean arguments do not match: ' + valBoolVal + ' !== ' + otherBoolVal;
		}
	
		var valIsNumber = isNumber(value);
		var otherIsNumber = isNumber(value);
		if (valIsNumber || otherIsNumber) {
			if (!valIsNumber) { return 'first argument is not a number; second argument is'; }
			if (!otherIsNumber) { return 'second argument is not a number; first argument is'; }
			var valNum = Number(value);
			var otherNum = Number(other);
			if (valNum === otherNum) { return ''; }
			var valIsNaN = isNaN(value);
			var otherIsNaN = isNaN(other);
			if (valIsNaN && !otherIsNaN) {
				return 'first argument is NaN; second is not';
			} else if (!valIsNaN && otherIsNaN) {
				return 'second argument is NaN; first is not';
			} else if (valIsNaN && otherIsNaN) {
				return '';
			}
			return 'numbers are different: ' + value + ' !== ' + other;
		}
	
		var valIsString = isString(value);
		var otherIsString = isString(other);
		if (valIsString || otherIsString) {
			if (!valIsString) { return 'second argument is string; first is not'; }
			if (!otherIsString) { return 'first argument is string; second is not'; }
			var stringVal = String(value);
			var otherVal = String(other);
			if (stringVal === otherVal) { return ''; }
			return 'string values are different: "' + stringVal + '" !== "' + otherVal + '"';
		}
	
		var valIsDate = isDate(value);
		var otherIsDate = isDate(other);
		if (valIsDate || otherIsDate) {
			if (!valIsDate) { return 'second argument is Date, first is not'; }
			if (!otherIsDate) { return 'first argument is Date, second is not'; }
			var valTime = +value;
			var otherTime = +other;
			if (valTime === otherTime) { return ''; }
			return 'Dates have different time values: ' + valTime + ' !== ' + otherTime;
		}
	
		var valIsRegex = isRegex(value);
		var otherIsRegex = isRegex(other);
		if (valIsRegex || otherIsRegex) {
			if (!valIsRegex) { return 'second argument is RegExp, first is not'; }
			if (!otherIsRegex) { return 'first argument is RegExp, second is not'; }
			var regexStringVal = String(value);
			var regexStringOther = String(other);
			if (regexStringVal === regexStringOther) { return ''; }
			return 'regular expressions differ: ' + regexStringVal + ' !== ' + regexStringOther;
		}
	
		var valIsArray = isArray(value);
		var otherIsArray = isArray(other);
		if (valIsArray || otherIsArray) {
			if (!valIsArray) { return 'second argument is an Array, first is not'; }
			if (!otherIsArray) { return 'first argument is an Array, second is not'; }
			if (value.length !== other.length) {
				return 'arrays have different length: ' + value.length + ' !== ' + other.length;
			}
	
			var index = value.length - 1;
			var equal = '';
			var valHasIndex, otherHasIndex;
			while (equal === '' && index >= 0) {
				valHasIndex = has(value, index);
				otherHasIndex = has(other, index);
				if (!valHasIndex && otherHasIndex) { return 'second argument has index ' + index + '; first does not'; }
				if (valHasIndex && !otherHasIndex) { return 'first argument has index ' + index + '; second does not'; }
				equal = whyNotEqual(value[index], other[index]);
				index -= 1;
			}
			return equal;
		}
	
		var valueIsSym = isSymbol(value);
		var otherIsSym = isSymbol(other);
		if (valueIsSym !== otherIsSym) {
			if (valueIsSym) { return 'first argument is Symbol; second is not'; }
			return 'second argument is Symbol; first is not';
		}
		if (valueIsSym && otherIsSym) {
			return symbolValue.call(value) === symbolValue.call(other) ? '' : 'first Symbol value !== second Symbol value';
		}
	
		var valueIsGen = isGenerator(value);
		var otherIsGen = isGenerator(other);
		if (valueIsGen !== otherIsGen) {
			if (valueIsGen) { return 'first argument is a Generator; second is not'; }
			return 'second argument is a Generator; first is not';
		}
	
		var valueIsArrow = isArrowFunction(value);
		var otherIsArrow = isArrowFunction(other);
		if (valueIsArrow !== otherIsArrow) {
			if (valueIsArrow) { return 'first argument is an Arrow function; second is not'; }
			return 'second argument is an Arrow function; first is not';
		}
	
		if (isCallable(value) || isCallable(other)) {
			if (functionsHaveNames && whyNotEqual(value.name, other.name) !== '') {
				return 'Function names differ: "' + value.name + '" !== "' + other.name + '"';
			}
			if (whyNotEqual(value.length, other.length) !== '') {
				return 'Function lengths differ: ' + value.length + ' !== ' + other.length;
			}
	
			var valueStr = normalizeFnWhitespace(String(value));
			var otherStr = normalizeFnWhitespace(String(other));
			if (whyNotEqual(valueStr, otherStr) === '') { return ''; }
	
			if (!valueIsGen && !valueIsArrow) {
				return whyNotEqual(valueStr.replace(/\)\s*\{/, '){'), otherStr.replace(/\)\s*\{/, '){')) === '' ? '' : 'Function string representations differ';
			}
			return whyNotEqual(valueStr, otherStr) === '' ? '' : 'Function string representations differ';
		}
	
		if (typeof value === 'object' || typeof other === 'object') {
			if (typeof value !== typeof other) { return 'arguments have a different typeof: ' + typeof value + ' !== ' + typeof other; }
			if (isProto.call(value, other)) { return 'first argument is the [[Prototype]] of the second'; }
			if (isProto.call(other, value)) { return 'second argument is the [[Prototype]] of the first'; }
			if (getPrototypeOf(value) !== getPrototypeOf(other)) { return 'arguments have a different [[Prototype]]'; }
	
			if (symbolIterator) {
				var valueIteratorFn = value[symbolIterator];
				var valueIsIterable = isCallable(valueIteratorFn);
				var otherIteratorFn = other[symbolIterator];
				var otherIsIterable = isCallable(otherIteratorFn);
				if (valueIsIterable !== otherIsIterable) {
					if (valueIsIterable) { return 'first argument is iterable; second is not'; }
					return 'second argument is iterable; first is not';
				}
				if (valueIsIterable && otherIsIterable) {
					var valueIterator = valueIteratorFn.call(value);
					var otherIterator = otherIteratorFn.call(other);
					var valueNext, otherNext, nextWhy;
					do {
						valueNext = valueIterator.next();
						otherNext = otherIterator.next();
						if (!valueNext.done && !otherNext.done) {
							nextWhy = whyNotEqual(valueNext, otherNext);
							if (nextWhy !== '') {
								return 'iteration results are not equal: ' + nextWhy;
							}
						}
					} while (!valueNext.done && !otherNext.done);
					if (valueNext.done && !otherNext.done) { return 'first argument finished iterating before second'; }
					if (!valueNext.done && otherNext.done) { return 'second argument finished iterating before first'; }
					return '';
				}
			} else if (collectionsForEach.Map || collectionsForEach.Set) {
				var valueEntries = tryMapSetEntries(value);
				var otherEntries = tryMapSetEntries(other);
				var valueEntriesIsArray = isArray(valueEntries);
				var otherEntriesIsArray = isArray(otherEntries);
				if (valueEntriesIsArray && !otherEntriesIsArray) { return 'first argument has Collection entries, second does not'; }
				if (!valueEntriesIsArray && otherEntriesIsArray) { return 'second argument has Collection entries, first does not'; }
				if (valueEntriesIsArray && otherEntriesIsArray) {
					var entriesWhy = whyNotEqual(valueEntries, otherEntries);
					return entriesWhy === '' ? '' : 'Collection entries differ: ' + entriesWhy;
				}
			}
	
			var key, valueKeyIsRecursive, otherKeyIsRecursive, keyWhy;
			for (key in value) {
				if (has(value, key)) {
					if (!has(other, key)) { return 'first argument has key "' + key + '"; second does not'; }
					valueKeyIsRecursive = !!value[key] && value[key][key] === value;
					otherKeyIsRecursive = !!other[key] && other[key][key] === other;
					if (valueKeyIsRecursive !== otherKeyIsRecursive) {
						if (valueKeyIsRecursive) { return 'first argument has a circular reference at key "' + key + '"; second does not'; }
						return 'second argument has a circular reference at key "' + key + '"; first does not';
					}
					if (!valueKeyIsRecursive && !otherKeyIsRecursive) {
						keyWhy = whyNotEqual(value[key], other[key]);
						if (keyWhy !== '') {
							return 'value at key "' + key + '" differs: ' + keyWhy;
						}
					}
				}
			}
			for (key in other) {
				if (has(other, key) && !has(value, key)) {
					return 'second argument has key "' + key + '"; first does not';
				}
			}
			return '';
		}
	
		return false;
	};


/***/ }),
/* 38 */
/*!**************************************!*\
  !*** ./~/is-arrow-function/index.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isCallable = __webpack_require__(/*! is-callable */ 39);
	var fnToStr = Function.prototype.toString;
	var isNonArrowFnRegex = /^\s*function/;
	var isArrowFnWithParensRegex = /^\([^\)]*\) *=>/;
	var isArrowFnWithoutParensRegex = /^[^=]*=>/;
	
	module.exports = function isArrowFunction(fn) {
		if (!isCallable(fn)) { return false; }
		var fnStr = fnToStr.call(fn);
		return fnStr.length > 0 &&
			!isNonArrowFnRegex.test(fnStr) &&
			(isArrowFnWithParensRegex.test(fnStr) || isArrowFnWithoutParensRegex.test(fnStr));
	};


/***/ }),
/* 39 */
/*!********************************!*\
  !*** ./~/is-callable/index.js ***!
  \********************************/
/***/ (function(module, exports) {

	'use strict';
	
	var fnToStr = Function.prototype.toString;
	
	var constructorRegex = /^\s*class /;
	var isES6ClassFn = function isES6ClassFn(value) {
		try {
			var fnStr = fnToStr.call(value);
			var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
			var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
			var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
			return constructorRegex.test(spaceStripped);
		} catch (e) {
			return false; // not a function
		}
	};
	
	var tryFunctionObject = function tryFunctionObject(value) {
		try {
			if (isES6ClassFn(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),
/* 40 */
/*!**************************************!*\
  !*** ./~/is-boolean-object/index.js ***!
  \**************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var boolToStr = Boolean.prototype.toString;
	
	var tryBooleanObject = function tryBooleanObject(value) {
		try {
			boolToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var boolClass = '[object Boolean]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isBoolean(value) {
		if (typeof value === 'boolean') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryBooleanObject(value) : toStr.call(value) === boolClass;
	};


/***/ }),
/* 41 */
/*!***********************************!*\
  !*** ./~/is-date-object/index.js ***!
  \***********************************/
/***/ (function(module, exports) {

	'use strict';
	
	var getDay = Date.prototype.getDay;
	var tryDateObject = function tryDateObject(value) {
		try {
			getDay.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	
	var toStr = Object.prototype.toString;
	var dateClass = '[object Date]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isDateObject(value) {
		if (typeof value !== 'object' || value === null) { return false; }
		return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
	};


/***/ }),
/* 42 */
/*!******************************************!*\
  !*** ./~/is-generator-function/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var fnToStr = Function.prototype.toString;
	var isFnRegex = /^\s*(?:function)?\*/;
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	var getProto = Object.getPrototypeOf;
	var getGeneratorFunc = function () { // eslint-disable-line consistent-return
		if (!hasToStringTag) {
			return false;
		}
		try {
			return Function('return function*() {}')();
		} catch (e) {
		}
	};
	var generatorFunc = getGeneratorFunc();
	var GeneratorFunction = generatorFunc ? getProto(generatorFunc) : {};
	
	module.exports = function isGeneratorFunction(fn) {
		if (typeof fn !== 'function') {
			return false;
		}
		if (isFnRegex.test(fnToStr.call(fn))) {
			return true;
		}
		if (!hasToStringTag) {
			var str = toStr.call(fn);
			return str === '[object GeneratorFunction]';
		}
		return getProto(fn) === GeneratorFunction;
	};


/***/ }),
/* 43 */
/*!*************************************!*\
  !*** ./~/is-number-object/index.js ***!
  \*************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var numToStr = Number.prototype.toString;
	var tryNumberObject = function tryNumberObject(value) {
		try {
			numToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var numClass = '[object Number]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isNumberObject(value) {
		if (typeof value === 'number') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
	};


/***/ }),
/* 44 */
/*!******************************!*\
  !*** ./~/is-string/index.js ***!
  \******************************/
/***/ (function(module, exports) {

	'use strict';
	
	var strValue = String.prototype.valueOf;
	var tryStringObject = function tryStringObject(value) {
		try {
			strValue.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var strClass = '[object String]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isString(value) {
		if (typeof value === 'string') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
	};


/***/ }),
/* 45 */
/*!******************************!*\
  !*** ./~/is-symbol/index.js ***!
  \******************************/
/***/ (function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	if (hasSymbols) {
		var symToStr = Symbol.prototype.toString;
		var symStringRegex = /^Symbol\(.*\)$/;
		var isSymbolObject = function isSymbolObject(value) {
			if (typeof value.valueOf() !== 'symbol') { return false; }
			return symStringRegex.test(symToStr.call(value));
		};
		module.exports = function isSymbol(value) {
			if (typeof value === 'symbol') { return true; }
			if (toStr.call(value) !== '[object Symbol]') { return false; }
			try {
				return isSymbolObject(value);
			} catch (e) {
				return false;
			}
		};
	} else {
		module.exports = function isSymbol(value) {
			// this environment does not support Symbols.
			return false;
		};
	}


/***/ }),
/* 46 */
/*!*****************************************!*\
  !*** ./~/is-equal/getSymbolIterator.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isSymbol = __webpack_require__(/*! is-symbol */ 45);
	
	module.exports = function getSymbolIterator() {
		var symbolIterator = typeof Symbol === 'function' && isSymbol(Symbol.iterator) ? Symbol.iterator : null;
	
		if (typeof Object.getOwnPropertyNames === 'function' && typeof Map === 'function' && typeof Map.prototype.entries === 'function') {
			Object.getOwnPropertyNames(Map.prototype).forEach(function (name) {
				if (name !== 'entries' && name !== 'size' && Map.prototype[name] === Map.prototype.entries) {
					symbolIterator = name;
				}
			});
		}
	
		return symbolIterator;
	};


/***/ }),
/* 47 */
/*!*********************************************!*\
  !*** ./~/is-equal/getCollectionsForEach.js ***!
  \*********************************************/
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function () {
		var mapForEach = (function () {
			if (typeof Map !== 'function') { return null; }
			try {
				Map.prototype.forEach.call({}, function () {});
			} catch (e) {
				return Map.prototype.forEach;
			}
			return null;
		}());
	
		var setForEach = (function () {
			if (typeof Set !== 'function') { return null; }
			try {
				Set.prototype.forEach.call({}, function () {});
			} catch (e) {
				return Set.prototype.forEach;
			}
			return null;
		}());
	
		return { Map: mapForEach, Set: setForEach };
	};


/***/ }),
/* 48 */
/*!********************************!*\
  !*** ./~/expect/lib/extend.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Expectation = __webpack_require__(/*! ./Expectation */ 18);
	
	var _Expectation2 = _interopRequireDefault(_Expectation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Extensions = [];
	
	function extend(extension) {
	  if (Extensions.indexOf(extension) === -1) {
	    Extensions.push(extension);
	
	    for (var p in extension) {
	      if (extension.hasOwnProperty(p)) _Expectation2.default.prototype[p] = extension[p];
	    }
	  }
	}
	
	exports.default = extend;

/***/ }),
/* 49 */
/*!********************************!*\
  !*** ./~/deep-freeze/index.js ***!
  \********************************/
/***/ (function(module, exports) {

	module.exports = function deepFreeze (o) {
	  Object.freeze(o);
	
	  Object.getOwnPropertyNames(o).forEach(function (prop) {
	    if (o.hasOwnProperty(prop)
	    && o[prop] !== null
	    && (typeof o[prop] === "object" || typeof o[prop] === "function")
	    && !Object.isFrozen(o[prop])) {
	      deepFreeze(o[prop]);
	    }
	  });
	  
	  return o;
	};


/***/ }),
/* 50 */
/*!********************************!*\
  !*** ./src/Test/Middleware.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _index = __webpack_require__(/*! ../index */ 1);
	
	var _expect = __webpack_require__(/*! expect */ 17);
	
	var _expect2 = _interopRequireDefault(_expect);
	
	var _redux = __webpack_require__(/*! redux */ 51);
	
	var _Reducer = __webpack_require__(/*! ./Reducer */ 16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var middlewareCalcCallback = function middlewareCalcCallback(_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	        return function (action) {
	            (0, _expect2.default)(['INCREMENT', 'DECREMENT']).toContain(action.type);
	            var result = next(action);
	            if (action.type === 'INCREMENT') {
	                var state = getState();
	                result = dispatch({ type: 'DECREMENT', value: 5 });
	                (0, _expect2.default)(getState()).toEqual(state - 5);
	            }
	            return result;
	        };
	    };
	};
	var middlewareIncrementCallback = function middlewareIncrementCallback(_ref2) {
	    var dispatch = _ref2.dispatch,
	        getState = _ref2.getState;
	    return function (next) {
	        return function (action) {
	            var previousState = getState();
	            var result = next(action);
	            if (previousState % 2 === 0 || getState() === previousState) {
	                return result;
	            }
	
	            setTimeout(function () {
	                var previousState = getState();
	                dispatch({ type: 'INCREMENT' });
	                (0, _expect2.default)(getState()).toEqual(previousState + 1);
	            }, 0);
	            return result;
	        };
	    };
	};
	var anotherMiddlewareIncrementCallback = function anotherMiddlewareIncrementCallback(_ref3) {
	    var dispatch = _ref3.dispatch,
	        getState = _ref3.getState;
	    return function (next) {
	        return function (action) {
	            var result = next(action);
	            if (getState() % 4 === 1) {
	                result = [].concat(_toConsumableArray(new Array(3))).map(function () {
	                    return dispatch({ type: 'INCREMENT' });
	                })[2];
	            }
	            return result;
	        };
	    };
	};
	
	var test = function test() {
	    var composite = (0, _index.Structure)({ toggle: _Reducer.toggle, calc: [(0, _index.Composite)({ reducer: _Reducer.increment, middleware: middlewareIncrementCallback }), (0, _index.Composite)({ reducer: _Reducer.calculator, middleware: middlewareCalcCallback })] });
	    var store = (0, _redux.createStore)(composite.reducer, { toggle: false, calc: [1, 2] }, (0, _redux.applyMiddleware)(composite.middleware));
	
	    store.dispatch({ type: 'COMPOSITE', composite: { calc: [undefined, { type: 'INCREMENT', value: 2 }] } });
	    // added 2, decreased by 5
	    (0, _expect2.default)(store.getState()).toEqual({ toggle: false, calc: [1, -1] });
	
	    store.dispatch({ type: 'COMPOSITE', composite: { calc: [{ type: 'INCREMENT' }] } });
	    (0, _expect2.default)(store.getState()).toEqual({ toggle: false, calc: [2, -1] });
	    store.dispatch({ type: 'COMPOSITE', composite: { calc: [{ type: 'INCREMENT' }] } });
	    var FIXED_STATE = { toggle: false, calc: [3, -1] };
	    (0, _expect2.default)(store.getState()).toEqual(FIXED_STATE);
	    // after timeout increment will be changed to 4
	
	    var complex = (0, _index.Structure)({
	        increment: (0, _index.Composite)({ reducer: _Reducer.increment, middleware: middlewareIncrementCallback }),
	        reducer: composite
	    });
	    var complexStore = (0, _redux.createStore)(complex.reducer, { increment: 1, reducer: store.getState() }, (0, _redux.applyMiddleware)(complex.middleware));
	    (0, _expect2.default)(complexStore.getState().reducer).toEqual(FIXED_STATE);
	    // dispatch multiple actions on children !
	    complexStore.dispatch({
	        type: 'COMPOSITE',
	        composite: {
	            increment: { type: 'INCREMENT' },
	            reducer: {
	                toggle: { type: 'TOGGLE' },
	                calc: [{ type: 'INCREMENT' }, { type: 'INCREMENT', value: 10 }]
	            }
	        }
	    });
	    (0, _expect2.default)(complexStore.getState()).toEqual({
	        increment: 2,
	        reducer: {
	            toggle: true,
	            calc: [4, 4]
	        }
	    });
	    // but value in store stays 3 !
	    (0, _expect2.default)(store.getState()).toEqual(FIXED_STATE);
	
	    var anotherComplex = (0, _index.Structure)({
	        increment: (0, _index.Composite)({ reducer: _Reducer.increment, middleware: anotherMiddlewareIncrementCallback }),
	        reducer: (0, _index.Structure)({
	            toggle: _Reducer.toggle,
	            calc: [(0, _index.Composite)({ reducer: _Reducer.increment, middleware: anotherMiddlewareIncrementCallback }), _Reducer.calculator]
	        })
	    });
	    var anotherComplexStore = (0, _redux.createStore)(anotherComplex.reducer, { increment: 1, reducer: { toggle: false, calc: [0, 1] } }, (0, _redux.applyMiddleware)(anotherComplex.middleware));
	    anotherComplexStore.dispatch({ type: 'COMPOSITE', composite: {
	            increment: { type: 'INCREMENT' },
	            reducer: {
	                toggle: { type: 'TOGGLE' },
	                calc: [{ type: 'INCREMENT' }, { type: 'INCREMENT', value: 4 }]
	            }
	        } });
	    (0, _expect2.default)(anotherComplexStore.getState()).toEqual({
	        increment: 2,
	        reducer: {
	            toggle: true,
	            calc: [4, 5]
	        }
	    });
	};
	exports.default = test;

/***/ }),
/* 51 */
/*!******************************!*\
  !*** ./~/redux/lib/index.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 52);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(/*! ./combineReducers */ 67);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(/*! ./bindActionCreators */ 69);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(/*! ./applyMiddleware */ 70);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(/*! ./compose */ 71);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 68);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 23)))

/***/ }),
/* 52 */
/*!************************************!*\
  !*** ./~/redux/lib/createStore.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 53);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(/*! symbol-observable */ 63);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	
	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),
/* 53 */
/*!***********************************!*\
  !*** ./~/lodash/isPlainObject.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 54),
	    getPrototype = __webpack_require__(/*! ./_getPrototype */ 60),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 62);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ }),
/* 54 */
/*!*********************************!*\
  !*** ./~/lodash/_baseGetTag.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 55),
	    getRawTag = __webpack_require__(/*! ./_getRawTag */ 58),
	    objectToString = __webpack_require__(/*! ./_objectToString */ 59);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 55 */
/*!*****************************!*\
  !*** ./~/lodash/_Symbol.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 56);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 56 */
/*!***************************!*\
  !*** ./~/lodash/_root.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 57);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 57 */
/*!*********************************!*\
  !*** ./~/lodash/_freeGlobal.js ***!
  \*********************************/
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 58 */
/*!********************************!*\
  !*** ./~/lodash/_getRawTag.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 55);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),
/* 59 */
/*!*************************************!*\
  !*** ./~/lodash/_objectToString.js ***!
  \*************************************/
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),
/* 60 */
/*!***********************************!*\
  !*** ./~/lodash/_getPrototype.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(/*! ./_overArg */ 61);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ }),
/* 61 */
/*!******************************!*\
  !*** ./~/lodash/_overArg.js ***!
  \******************************/
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),
/* 62 */
/*!**********************************!*\
  !*** ./~/lodash/isObjectLike.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 63 */
/*!**************************************!*\
  !*** ./~/symbol-observable/index.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/index */ 64);


/***/ }),
/* 64 */
/*!******************************************!*\
  !*** ./~/symbol-observable/lib/index.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(/*! ./ponyfill */ 66);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(/*! ./../../webpack/buildin/module.js */ 65)(module)))

/***/ }),
/* 65 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 66 */
/*!*********************************************!*\
  !*** ./~/symbol-observable/lib/ponyfill.js ***!
  \*********************************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ }),
/* 67 */
/*!****************************************!*\
  !*** ./~/redux/lib/combineReducers.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 52);
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 53);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 68);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var unexpectedKeyCache = void 0;
	  if (process.env.NODE_ENV !== 'production') {
	    unexpectedKeyCache = {};
	  }
	
	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 23)))

/***/ }),
/* 68 */
/*!**************************************!*\
  !*** ./~/redux/lib/utils/warning.js ***!
  \**************************************/
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 69 */
/*!*******************************************!*\
  !*** ./~/redux/lib/bindActionCreators.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ }),
/* 70 */
/*!****************************************!*\
  !*** ./~/redux/lib/applyMiddleware.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(/*! ./compose */ 71);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ }),
/* 71 */
/*!********************************!*\
  !*** ./~/redux/lib/compose.js ***!
  \********************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ }),
/* 72 */
/*!******************************!*\
  !*** ./src/Test/Equality.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _index = __webpack_require__(/*! ../index */ 1);
	
	var _Reducer = __webpack_require__(/*! ./Reducer */ 16);
	
	var _expect = __webpack_require__(/*! expect */ 17);
	
	var _expect2 = _interopRequireDefault(_expect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var test = function test() {
	    var simple = (0, _index.Structure)({
	        toggle: _Reducer.toggle,
	        calc: [_Reducer.increment, (0, _index.Composite)({
	            reducer: _Reducer.calculator,
	            equality: function equality(prev, next) {
	                return Math.abs(next - prev) < 3;
	            }
	        })]
	    });
	    (0, _expect2.default)(simple.equality({ toggle: true, calc: [0, 1] }, // prev
	    { toggle: true, calc: [0, 1] // next
	    })).toEqual(true);
	    (0, _expect2.default)(simple.equality({ toggle: true, calc: [0, 1] }, // prev
	    { toggle: true, calc: [1, 1] // next
	    })).toEqual(false);
	    (0, _expect2.default)(simple.equality({ toggle: true, calc: [0, 1] }, // prev
	    { toggle: true, calc: [0, -1] // next
	    })).toEqual(true);
	    (0, _expect2.default)(simple.equality({ toggle: true, calc: [0, 1] }, // prev
	    { toggle: true, calc: [0, 4] // next
	    })).toEqual(false);
	
	    var complex = (0, _index.Structure)({
	        increment: (0, _index.Composite)({
	            reducer: _Reducer.increment,
	            equality: function equality(prev, next) {
	                return Math.abs(next - prev) > 3;
	            }
	        }),
	        reducer: simple
	    });
	    (0, _expect2.default)(complex.equality({ increment: 1, reducer: { toggle: true, calc: [0, 1] } }, // prev
	    { increment: 1, reducer: { toggle: true, calc: [0, 1] } // next
	    })).toEqual(false);
	    (0, _expect2.default)(complex.equality({ increment: 1, reducer: { toggle: true, calc: [0, 1] } }, // prev
	    { increment: 5, reducer: { toggle: true, calc: [0, 3] } // next
	    })).toEqual(true);
	    (0, _expect2.default)(complex.equality({ increment: 1, reducer: { toggle: true, calc: [0, 1] } }, // prev
	    { increment: 4, reducer: { toggle: true, calc: [0, 3] } // next
	    })).toEqual(false);
	};
	exports.default = test;

/***/ }),
/* 73 */
/*!*******************************!*\
  !*** ./src/Test/Subscribe.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _index = __webpack_require__(/*! ../index */ 1);
	
	var _Reducer = __webpack_require__(/*! ./Reducer */ 16);
	
	var _redux = __webpack_require__(/*! redux */ 51);
	
	var _expect = __webpack_require__(/*! expect */ 17);
	
	var _expect2 = _interopRequireDefault(_expect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var incrementMiddleware = function incrementMiddleware(_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	        return function (action) {
	            var result = next(action);
	            if (getState() % 4 === 1) {
	                result = dispatch({ type: 'INCREMENT' });
	            }
	            return result;
	        };
	    };
	};
	
	var test = function test() {
	    var composite = (0, _index.Structure)({
	        toggle: _Reducer.toggle,
	        calc: [(0, _index.Composite)({ reducer: _Reducer.increment, middleware: incrementMiddleware }), _Reducer.calculator]
	    });
	    var store = (0, _redux.createStore)(composite.reducer, { toggle: false, calc: [0, 1] }, (0, _redux.applyMiddleware)(composite.middleware));
	    var calcTriggers = [0, 0];
	    var incrementSum = 0;
	    composite.subscribe(store.dispatch, store.getState, store.subscribe)({
	        calc: [function (_ref2) {
	            var getState = _ref2.getState;
	
	            calcTriggers[0] += 1;
	            incrementSum += getState();
	        }, function () {
	            return calcTriggers[1] += 1;
	        }]
	    });
	    (0, _expect2.default)(calcTriggers).toEqual([0, 0]);
	    store.dispatch({ type: 'COMPOSITE', composite: {
	            toggle: { type: 'TOGGLE' }
	        } });
	    (0, _expect2.default)(calcTriggers).toEqual([0, 0]); // not triggered
	    store.dispatch({ type: 'COMPOSITE', composite: {
	            calc: [{ type: 'INCREMENT' }, { type: 'INCREMENT', value: 3 }]
	        } });
	    (0, _expect2.default)(calcTriggers).toEqual([2, 1]); // second increment is triggered from middleware
	    (0, _expect2.default)(incrementSum).toEqual(3);
	
	    var complex = (0, _index.Structure)({
	        increment: _Reducer.increment,
	        reducer: composite
	    });
	    var complexStore = (0, _redux.createStore)(complex.reducer, { increment: 2, reducer: { toggle: false, calc: [0, 1] } }, (0, _redux.applyMiddleware)(complex.middleware));
	    complex.subscribe(complexStore.dispatch, complexStore.getState, complexStore.subscribe)({
	        increment: function increment(_ref3) {
	            var getState = _ref3.getState;
	
	            calcTriggers[0] += 1;
	            incrementSum += getState();
	        },
	        reducer: { calc: [undefined, function () {
	                return calcTriggers[1] += 1;
	            }] }
	    });
	    complexStore.dispatch({ type: 'COMPOSITE', composite: {
	            increment: { type: 'INCREMENT' },
	            reducer: {
	                toggle: { type: 'TOGGLE' },
	                calc: [{ type: 'INCREMENT' }, { type: 'INCREMENT', value: 3 }]
	            }
	        } });
	    (0, _expect2.default)(complexStore.getState()).toEqual({ increment: 3, reducer: { toggle: true, calc: [2, 4] } });
	    (0, _expect2.default)(incrementSum).toEqual(6);
	    (0, _expect2.default)(calcTriggers).toEqual([3, 2]);
	};
	exports.default = test;

/***/ }),
/* 74 */
/*!***************************!*\
  !*** ./src/Test/Redux.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _index = __webpack_require__(/*! ../index */ 1);
	
	var _expect = __webpack_require__(/*! expect */ 17);
	
	var _expect2 = _interopRequireDefault(_expect);
	
	var _redux = __webpack_require__(/*! redux */ 51);
	
	var _Reducer = __webpack_require__(/*! ./Reducer */ 16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var test = function test() {
	    var composite = (0, _index.Structure)({
	        toggle: _Reducer.toggle,
	        calc: [_Reducer.increment, _Reducer.calculator]
	    });
	    var store = (0, _redux.createStore)(composite.reducer, { toggle: false, calc: [0, 1] }, (0, _redux.applyMiddleware)(composite.middleware));
	
	    var structure = (0, _index.Redux)(composite)(store);
	
	    // check getState
	    (0, _expect2.default)(structure.toggle.redux.getState()).toEqual(false);
	    (0, _expect2.default)(structure.calc[0].redux.getState()).toEqual(0);
	    (0, _expect2.default)(structure.calc[1].redux.getState()).toEqual(1);
	
	    // check dispatch
	    structure.toggle.redux.dispatch({ type: 'TOGGLE' });
	    (0, _expect2.default)(store.getState()).toEqual({ toggle: true, calc: [0, 1] });
	    structure.calc[0].redux.dispatch({ type: 'INCREMENT' });
	    (0, _expect2.default)(store.getState()).toEqual({ toggle: true, calc: [1, 1] });
	    structure.calc[1].redux.dispatch({ type: 'DECREMENT', value: 3 });
	    (0, _expect2.default)(store.getState()).toEqual({ toggle: true, calc: [1, -2] });
	
	    // check subscribe
	    var toggled = 0;
	    var sum = [0, 0];
	    structure.toggle.redux.subscribe(function () {
	        return ++toggled;
	    });
	    structure.calc[0].redux.subscribe(function () {
	        return sum[0] += structure.calc[0].redux.getState();
	    });
	    structure.calc[1].redux.subscribe(function () {
	        return sum[1] += structure.calc[1].redux.getState();
	    });
	    // remember the last state: {toggle: true, calc: [1, -2]}
	    store.dispatch({ type: 'COMPOSITE', composite: {
	            toggle: { type: 'TOGGLE' },
	            calc: [{ type: 'INCREMENT' }, { type: 'INCREMENT', value: 5 }]
	        } });
	    (0, _expect2.default)(store.getState()).toEqual({ toggle: false, calc: [2, 3] });
	    (0, _expect2.default)(toggled).toEqual(1);
	    (0, _expect2.default)(sum).toEqual([2, 3]);
	    store.dispatch({ type: 'COMPOSITE', composite: {
	            toggle: { type: 'TOGGLE' },
	            calc: [{ type: 'INCREMENT' }, { type: 'INCREMENT', value: 4 }]
	        } });
	    (0, _expect2.default)(store.getState()).toEqual({ toggle: true, calc: [3, 7] });
	    (0, _expect2.default)(toggled).toEqual(2);
	    (0, _expect2.default)(sum).toEqual([5, 10]);
	
	    var complex = (0, _index.Structure)({
	        increment: _Reducer.increment,
	        reducer: composite
	    });
	    var complexStore = (0, _redux.createStore)(complex.reducer, { increment: 2, reducer: { toggle: false, calc: [0, 1] } }, (0, _redux.applyMiddleware)(complex.middleware));
	    structure = (0, _index.Redux)(complex)(complexStore);
	
	    // check getState
	    (0, _expect2.default)(structure.increment.redux.getState()).toEqual(2);
	    (0, _expect2.default)(structure.reducer.structure.toggle.redux.getState()).toEqual(false);
	    (0, _expect2.default)(structure.reducer.structure.calc[0].redux.getState()).toEqual(0);
	    (0, _expect2.default)(structure.reducer.structure.calc[1].redux.getState()).toEqual(1);
	
	    // check dispatch
	    structure.increment.redux.dispatch({ type: 'INCREMENT' });
	    (0, _expect2.default)(complexStore.getState()).toEqual({ increment: 3, reducer: { toggle: false, calc: [0, 1] } });
	    structure.reducer.structure.toggle.redux.dispatch({ type: 'TOGGLE' });
	    (0, _expect2.default)(complexStore.getState()).toEqual({ increment: 3, reducer: { toggle: true, calc: [0, 1] } });
	    structure.reducer.structure.calc[0].redux.dispatch({ type: 'INCREMENT' });
	    (0, _expect2.default)(complexStore.getState()).toEqual({ increment: 3, reducer: { toggle: true, calc: [1, 1] } });
	    structure.reducer.structure.calc[1].redux.dispatch({ type: 'DECREMENT', value: 3 });
	    (0, _expect2.default)(complexStore.getState()).toEqual({ increment: 3, reducer: { toggle: true, calc: [1, -2] } });
	
	    // check subscribe
	    var squares = 0;
	    structure.increment.redux.subscribe(function () {
	        return squares += structure.increment.redux.getState() * structure.increment.redux.getState();
	    });
	    structure.reducer.structure.toggle.redux.subscribe(function () {
	        return ++toggled;
	    });
	    structure.reducer.structure.calc[0].redux.subscribe(function () {
	        return sum[0] += structure.reducer.structure.calc[0].redux.getState();
	    });
	    structure.reducer.structure.calc[1].redux.subscribe(function () {
	        return sum[1] += structure.reducer.structure.calc[1].redux.getState();
	    });
	    // remember the last state: {increment: 3, reducer: {toggle: true, calc: [1, -2]}}
	    complexStore.dispatch({ type: 'COMPOSITE', composite: {
	            increment: { type: 'INCREMENT' },
	            reducer: {
	                toggle: { type: 'TOGGLE' },
	                calc: [{ type: 'INCREMENT' }, { type: 'INCREMENT', value: 5 }]
	            }
	        } });
	    (0, _expect2.default)(complexStore.getState()).toEqual({ increment: 4, reducer: { toggle: false, calc: [2, 3] } });
	    (0, _expect2.default)(squares).toEqual(16);
	    (0, _expect2.default)(toggled).toEqual(3);
	    (0, _expect2.default)(sum).toEqual([7, 13]);
	
	    complexStore.dispatch({ type: 'COMPOSITE', composite: {
	            increment: { type: 'INCREMENT' },
	            reducer: {
	                toggle: { type: 'TOGGLE' },
	                calc: [{ type: 'INCREMENT' }, { type: 'INCREMENT', value: 4 }]
	            }
	        } });
	    (0, _expect2.default)(complexStore.getState()).toEqual({ increment: 5, reducer: { toggle: true, calc: [3, 7] } });
	    (0, _expect2.default)(squares).toEqual(41);
	    (0, _expect2.default)(toggled).toEqual(4);
	    (0, _expect2.default)(sum).toEqual([10, 20]);
	};
	exports.default = test;

/***/ }),
/* 75 */
/*!*****************************!*\
  !*** ./src/Test/Memoize.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _index = __webpack_require__(/*! ../index */ 1);
	
	var _expect = __webpack_require__(/*! expect */ 17);
	
	var _expect2 = _interopRequireDefault(_expect);
	
	var _Reducer = __webpack_require__(/*! ./Reducer */ 16);
	
	var _redux = __webpack_require__(/*! redux */ 51);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var test = function test() {
	    var composite = (0, _index.Structure)({
	        toggle: _Reducer.toggle,
	        calc: [_Reducer.increment, _Reducer.calculator]
	    });
	    var store = (0, _redux.createStore)(composite.reducer, { toggle: false, calc: [0, 1] }, (0, _redux.applyMiddleware)(composite.middleware));
	
	    var someFunction = function someFunction(a, b) {
	        return a + b;
	    };
	    (0, _expect2.default)(someFunction(2, 3)).toEqual(5);
	    var memoize = composite.memoize(store.getState);
	    var memoizeFunction = memoize.memoize(someFunction);
	    var memoizeFunctionsStructure = {
	        toggle: memoize.structure.toggle.memoize(someFunction),
	        calc: [memoize.structure.calc[0].memoize(someFunction)]
	    };
	    (0, _expect2.default)(memoizeFunction(3, 4)).toEqual(7);
	    // memoized
	    (0, _expect2.default)(memoizeFunction(4, 5)).toEqual(7);
	    (0, _expect2.default)(memoizeFunctionsStructure.toggle(5, 6)).toEqual(11);
	    // memoized
	    (0, _expect2.default)(memoizeFunctionsStructure.toggle(6, 7)).toEqual(11);
	    (0, _expect2.default)(memoizeFunctionsStructure.calc[0](7, 8)).toEqual(15);
	    // memoized
	    (0, _expect2.default)(memoizeFunctionsStructure.calc[0](8, 9)).toEqual(15);
	
	    // change state
	    store.dispatch({ type: 'COMPOSITE', composite: {
	            calc: [{ type: 'INCREMENT' }]
	        } });
	    // re-newed
	    (0, _expect2.default)(memoizeFunctionsStructure.calc[0](9, 10)).toEqual(19);
	    // re-newed
	    (0, _expect2.default)(memoizeFunction(10, 11)).toEqual(21);
	    // not updated!
	    (0, _expect2.default)(memoizeFunctionsStructure.toggle(11, 12)).toEqual(11);
	};
	
	exports.default = test;

/***/ })
/******/ ]);
//# sourceMappingURL=tests.js.map