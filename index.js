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
	
	var _Composite = __webpack_require__(/*! ./Composite */ 3);
	
	var _Composite2 = _interopRequireDefault(_Composite);
	
	var _Structure2 = _interopRequireDefault(_Structure);
	
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
	exports.default = { Composite: Composite, Structure: _Structure2.default, Defaults: Defaults };

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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Composite = function Composite(data) {
	    _classCallCheck(this, Composite);
	
	    var structure = data.structure,
	        reducer = data.reducer,
	        middleware = data.middleware,
	        equality = data.equality,
	        subscribe = data.subscribe,
	        custom = data.custom;
	
	    var thisMiddleware = undefined,
	        thisSubscribe = undefined;
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
	        this.equality = this.equality = typeof equality === 'function' ? equality : function (prev, next) {
	            return prev === next;
	        };
	        thisSubscribe = typeof subscribe === 'function' ? subscribe : function (dispatch, getState) {
	            return function (listener) {
	                return function () {
	                    return listener({ dispatch: dispatch, getState: getState });
	                };
	            };
	        };
	    } else {
	        var compositeStructure = (0, _WalkComposite2.default)({}, true)(function (leaf) {
	            return typeof leaf === 'function' ? new Composite({ reducer: leaf }) : leaf;
	        })(structure);
	        this.reducer = custom === undefined || typeof custom.reducer !== 'function' ? (0, _Reducer2.default)(compositeStructure) : custom.reducer(compositeStructure);
	        thisMiddleware = custom === undefined || typeof custom.middleware !== 'function' ? (0, _Middleware2.default)(compositeStructure) : custom.middleware(compositeStructure);
	        this.equality = custom === undefined || typeof custom.equality !== 'function' ? (0, _Equality2.default)(compositeStructure) : custom.equality(compositeStructure);
	        thisSubscribe = custom === undefined || typeof custom.subscribe !== 'function' ? (0, _Subscribe2.default)(compositeStructure) : custom.subscribe(compositeStructure);
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
	
	    // Subscribe wrapper
	    var thisEquality = this.equality;
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
	                    initializedSubscribe();
	                }
	                state = next;
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
	                    return next(action);
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

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map