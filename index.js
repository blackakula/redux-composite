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
	
	var _Middleware = __webpack_require__(/*! ./Composite/Middleware */ 9);
	
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
	
	var Defaults = exports.Defaults = { Reducer: _Reducer2.default, Middleware: _Middleware2.default, Equality: _Equality2.default, Subscribe: _Subscribe2.default, Redux: _Redux2.default, Memoize: _Memoize2.default };
	var Composite = exports.Composite = function Composite(parameters) {
	  return new _Composite2.default(parameters);
	};
	exports.default = { Composite: Composite, Structure: _Structure2.default, Defaults: Defaults, Wrappers: _Composite.Wrappers };

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
	exports.Wrappers = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _WalkComposite = __webpack_require__(/*! ./Helper/WalkComposite */ 4);
	
	var _WalkComposite2 = _interopRequireDefault(_WalkComposite);
	
	var _Reducer = __webpack_require__(/*! ./Composite/Reducer */ 6);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _Middleware = __webpack_require__(/*! ./Composite/Middleware */ 9);
	
	var _Middleware2 = _interopRequireDefault(_Middleware);
	
	var _Equality = __webpack_require__(/*! ./Composite/Equality */ 11);
	
	var _Equality2 = _interopRequireDefault(_Equality);
	
	var _Subscribe = __webpack_require__(/*! ./Composite/Subscribe */ 12);
	
	var _Subscribe2 = _interopRequireDefault(_Subscribe);
	
	var _Redux = __webpack_require__(/*! ./Composite/Redux */ 13);
	
	var _Redux2 = _interopRequireDefault(_Redux);
	
	var _Memoize = __webpack_require__(/*! ./Composite/Memoize */ 14);
	
	var _Memoize2 = _interopRequireDefault(_Memoize);
	
	var _Redux3 = __webpack_require__(/*! ./Redux */ 15);
	
	var _Redux4 = _interopRequireDefault(_Redux3);
	
	var _Memoize3 = __webpack_require__(/*! ./Memoize */ 16);
	
	var _Memoize4 = _interopRequireDefault(_Memoize3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaultEquality = function defaultEquality(prev, next) {
	    return prev === next;
	};
	
	var defaultMiddleware = function defaultMiddleware() {
	    return function (next) {
	        return function (action) {
	            return next(action);
	        };
	    };
	};
	
	var applyMiddleware = function applyMiddleware(middlewares) {
	    if (middlewares.length === 0) {
	        return defaultMiddleware;
	    } else if (middlewares.length === 1) {
	        return middlewares[0];
	    }
	    return function (_ref) {
	        var dispatch = _ref.dispatch,
	            getState = _ref.getState;
	
	        var chain = middlewares.map(function (middleware) {
	            return middleware({ dispatch: dispatch, getState: getState });
	        }).reverse();
	        return function (next) {
	            return chain.reduce(function (resultMiddleware, middleware) {
	                return middleware(resultMiddleware);
	            }, next);
	        };
	    };
	};
	
	var Wrappers = exports.Wrappers = {
	    Subscribe: function Subscribe(originalSubscribe, equality) {
	        return function (dispatch, getState) {
	            var subscribe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
	            return function (listeners) {
	                if (listeners === undefined) {
	                    return function () {};
	                }
	                var initializedSubscribe = originalSubscribe(dispatch, getState)(listeners);
	                var state = getState();
	                var listener = function listener() {
	                    var next = getState();
	                    if (!(equality === undefined ? defaultEquality : equality)(state, next)) {
	                        state = next;
	                        initializedSubscribe();
	                    }
	                };
	                return typeof subscribe === 'function' ? subscribe(listener) : listener;
	            };
	        };
	    },
	    Memoize: function Memoize(originalMemoize, equality) {
	        return function (getState) {
	            var resolvedMemoize = originalMemoize(getState);
	            return _extends({}, resolvedMemoize, {
	                memoize: function memoize(callback) {
	                    var state = undefined,
	                        result = undefined;
	                    return function () {
	                        var next = getState();
	                        if (!(equality === undefined ? defaultEquality : equality)(state, next)) {
	                            state = next;
	                            result = resolvedMemoize.memoize(callback).apply(undefined, arguments);
	                        }
	                        return result;
	                    };
	                }
	            });
	        };
	    }
	};
	
	var Composite = function Composite(data) {
	    var _this = this;
	
	    _classCallCheck(this, Composite);
	
	    var structure = data.structure,
	        reducer = data.reducer,
	        middleware = data.middleware,
	        equality = data.equality,
	        subscribe = data.subscribe,
	        redux = data.redux,
	        memoize = data.memoize;
	
	
	    if (structure === undefined && typeof reducer !== 'function') {
	        throw {
	            message: "Not valid parameters: should be either structure or reducer"
	        };
	    }
	
	    var compositeStructure = structure === undefined ? undefined : (0, _WalkComposite2.default)({}, true)(function (leaf) {
	        return typeof leaf === 'function' ? new Composite({ reducer: leaf }) : leaf;
	    })(structure);
	
	    var injection = function injection(parameter, withStructure, withoutStructure, wrapper) {
	        if (typeof parameter === 'function') {
	            return structure === undefined ? parameter : parameter(compositeStructure);
	        }
	        var beforeWrapper = structure === undefined ? withoutStructure : withStructure(compositeStructure);
	        return wrapper === undefined ? beforeWrapper : wrapper(beforeWrapper);
	    };
	
	    this.reducer = injection(reducer, _Reducer2.default);
	    this.middleware = injection(structure === undefined && (typeof middleware === 'undefined' ? 'undefined' : _typeof(middleware)) === 'object' && Array.isArray(middleware) ? applyMiddleware(middleware.filter(function (oneMiddleware) {
	        return typeof oneMiddleware === 'function';
	    })) : middleware, _Middleware2.default, defaultMiddleware);
	    this.equality = injection(equality, _Equality2.default, defaultEquality);
	    this.subscribe = injection(subscribe, _Subscribe2.default, function (dispatch, getState) {
	        return function (listener) {
	            return function () {
	                return listener({ dispatch: dispatch, getState: getState });
	            };
	        };
	    }, function (equality) {
	        return function (originalSubscriber) {
	            return Wrappers.Subscribe(originalSubscriber, equality);
	        };
	    }(this.equality));
	
	    this.redux = injection(redux, _Redux2.default, function (dispatch, getState, subscribe) {
	        return {
	            redux: { dispatch: dispatch, getState: getState, subscribe: subscribe }
	        };
	    });
	
	    this.memoize = injection(memoize, _Memoize2.default, function (getState) {
	        return { memoize: function memoize(callback) {
	                return callback;
	            } };
	    }, function (equality) {
	        return function (originalMemoize) {
	            return Wrappers.Memoize(originalMemoize, equality);
	        };
	    }(this.equality));
	
	    this.init = function (reduxStore) {
	        return function (composite) {
	            composite.memoize = (0, _Memoize4.default)(composite.memoize, reduxStore.getState);
	
	            var _InitRedux = (0, _Redux4.default)(composite)(reduxStore),
	                store = _InitRedux.store,
	                structure = _InitRedux.structure;
	
	            delete composite.redux;
	            composite.store = structure;
	            composite.getState = store.getState;
	            composite.dispatch = store.dispatch;
	            composite.subscribe = store.subscribe;
	            return composite;
	        }(_this);
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
	
	var _DefaultMutationMethod = __webpack_require__(/*! ../Helper/DefaultMutationMethod */ 8);
	
	var _DefaultMutationMethod2 = _interopRequireDefault(_DefaultMutationMethod);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Reducer = function Reducer(compositeStructure) {
	    return function (state, action) {
	        return (0, _WalkComposite2.default)({
	            mutationMethod: function mutationMethod(key) {
	                return function (composite, state, action) {
	                    return [(0, _DefaultMutationMethod2.default)(key)(composite), (0, _DefaultMutationMethod2.default)(key)(state), (0, _ReduxAction.ActionMutateMethod)(action, key)];
	                };
	            }
	        })(function (composite, state, action) {
	            return state === undefined || action !== undefined ? composite.reducer(state, action) : state;
	        })(compositeStructure, state, (0, _ReduxAction.ReduxAction)(action));
	    };
	};
	exports.default = Reducer;

/***/ }),
/* 7 */
/*!***********************************!*\
  !*** ./src/Helper/ReduxAction.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ActionMutateMethod = exports.MutateMethod = exports.InitAction = exports.ReduxAction = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _DefaultMutationMethod = __webpack_require__(/*! ./DefaultMutationMethod */ 8);
	
	var _DefaultMutationMethod2 = _interopRequireDefault(_DefaultMutationMethod);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	var ActionMutateMethod = function ActionMutateMethod(action, key) {
	    return (typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object' && typeof action.type === 'string' && action.type.indexOf('@@') === 0 ? action : (0, _DefaultMutationMethod2.default)(key)(action);
	};
	
	exports.ReduxAction = ReduxAction;
	exports.InitAction = InitAction;
	exports.MutateMethod = MutateMethod;
	exports.ActionMutateMethod = ActionMutateMethod;
	exports.default = ReduxAction;

/***/ }),
/* 8 */
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
/* 9 */
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
	
	var _DefaultMutationMethod = __webpack_require__(/*! ../Helper/DefaultMutationMethod */ 8);
	
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
	                return action === undefined ? next(action) : (0, _WalkComposite2.default)()(function (composite, next, action) {
	                    return action === undefined ? undefined : next(action);
	                })(compositeStructure, initNextMiddleware, (0, _ReduxAction.ReduxAction)(action));
	            };
	        };
	    };
	};
	
	exports.default = Middleware;

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
	
	var _DefaultMutationMethod = __webpack_require__(/*! ../Helper/DefaultMutationMethod */ 8);
	
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
	
	var _DefaultMutationMethod = __webpack_require__(/*! ../Helper/DefaultMutationMethod */ 8);
	
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
	
	var _DefaultMutationMethod = __webpack_require__(/*! ../Helper/DefaultMutationMethod */ 8);
	
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Redux = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _walkComposite = __webpack_require__(/*! walk-composite */ 5);
	
	var useStructure = function useStructure(node) {
	    return _typeof(node.redux) === 'object' && node.structure !== undefined;
	};
	
	var WalkRedux = function WalkRedux(originalStore) {
	    var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return (0, _walkComposite.Walk)(_extends({
	        leafCondition: function leafCondition(node) {
	            return node.redux !== undefined && (node.structure === undefined || originalStore !== node);
	        },
	        keysMethod: function keysMethod(node) {
	            return _walkComposite.Defaults.KeysMethod(useStructure(node) ? node.structure : node);
	        },
	        mutationMethod: function mutationMethod(key) {
	            return function (node) {
	                return [(useStructure(node) ? node.structure : node)[key]];
	            };
	        },
	        walkMethod: function walkMethod(parameters) {
	            return WalkRedux(originalStore, parameters);
	        }
	    }, parameters));
	};
	
	var ReduxByRedux = function ReduxByRedux(redux) {
	    return {
	        structure: WalkRedux(redux)(function (leaf) {
	            return useStructure(leaf) ? ReduxByRedux(leaf) : leaf.redux;
	        })(redux),
	        store: redux.redux
	    };
	};
	
	var Redux = exports.Redux = function Redux(composite) {
	    return function (_ref) {
	        var dispatch = _ref.dispatch,
	            getState = _ref.getState,
	            subscribe = _ref.subscribe;
	        return ReduxByRedux(composite.redux(dispatch, getState, composite.subscribe(dispatch, getState, subscribe)));
	    };
	};
	
	exports.default = Redux;

/***/ }),
/* 16 */
/*!************************!*\
  !*** ./src/Memoize.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Memoize = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _walkComposite = __webpack_require__(/*! walk-composite */ 5);
	
	var useStructure = function useStructure(memoize) {
	    return typeof memoize.memoize === 'function' && memoize.structure !== undefined;
	};
	
	var MemoizeWalk = function MemoizeWalk(originalMemoize) {
	    var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return (0, _walkComposite.Walk)(_extends({
	        leafCondition: function leafCondition(memoize) {
	            return typeof memoize.memoize === 'function' && (memoize.structure === undefined || memoize !== originalMemoize);
	        },
	        keysMethod: function keysMethod(memoize) {
	            return _walkComposite.Defaults.KeysMethod(useStructure(memoize) ? memoize.structure : memoize);
	        },
	        mutationMethod: function mutationMethod(key) {
	            return function (memoize, memoizeStructure, getState) {
	                return [(useStructure(memoize) ? memoize.structure : memoize)[key], function (structure) {
	                    return structure !== undefined && structure[key] !== undefined ? structure[key] : undefined;
	                }(useStructure(memoize) ? memoizeStructure.structure : memoizeStructure), function () {
	                    return getState()[key];
	                }];
	            };
	        },
	        walkMethod: function walkMethod(parameters) {
	            return MemoizeWalk(originalMemoize, parameters);
	        }
	    }, parameters));
	};
	
	var MemoizeByMemoize = function MemoizeByMemoize(memoize) {
	    return function (getState) {
	        return function (memoizationStructure) {
	            var structure = MemoizeWalk(memoize)(function (memoize, structure, getState) {
	                return structure === undefined ? undefined : function (memoized) {
	                    return memoize.structure === undefined ? memoized : MemoizeByMemoize(memoize)(getState)(structure);
	                }(memoize.memoize(function () {
	                    return structure({
	                        getState: getState,
	                        structure: structure
	                    });
	                }));
	            })(memoize, memoizationStructure, getState);
	            return _extends({
	                structure: structure
	            }, function (memoizationStructure) {
	                return typeof memoizationStructure === 'function' ? {
	                    memoize: memoize.memoize(function () {
	                        return memoizationStructure({ structure: structure, getState: getState });
	                    })
	                } : {};
	            }(typeof memoizationStructure === 'function' ? memoizationStructure : memoizationStructure.memoize));
	        };
	    };
	};
	
	var Memoize = exports.Memoize = function Memoize(memoize, getState) {
	    return MemoizeByMemoize(memoize(getState))(getState);
	};
	
	exports.default = Memoize;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map