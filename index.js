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
	
	var _Redux3 = __webpack_require__(/*! ./Redux */ 15);
	
	var _Redux4 = _interopRequireDefault(_Redux3);
	
	var _Memoize3 = __webpack_require__(/*! ./Memoize */ 16);
	
	var _Memoize4 = _interopRequireDefault(_Memoize3);
	
	var _Reduce = __webpack_require__(/*! ./Prettify/Reduce */ 17);
	
	var _Reduce2 = _interopRequireDefault(_Reduce);
	
	var _Expand = __webpack_require__(/*! ./Prettify/Expand */ 18);
	
	var _Expand2 = _interopRequireDefault(_Expand);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Defaults = exports.Defaults = { Reducer: _Reducer2.default, Middleware: _Middleware2.default, Equality: _Equality2.default, Subscribe: _Subscribe2.default, Redux: _Redux2.default, Memoize: _Memoize2.default, Init: { Store: _Redux4.default, Memoize: _Memoize4.default }, Prettify: { Reduce: _Reduce2.default, Expand: _Expand2.default } };
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
	
	var _Reduce = __webpack_require__(/*! ./Prettify/Reduce */ 17);
	
	var _Reduce2 = _interopRequireDefault(_Reduce);
	
	var _Expand = __webpack_require__(/*! ./Prettify/Expand */ 18);
	
	var _Expand2 = _interopRequireDefault(_Expand);
	
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
	        if (typeof leaf === 'function') {
	            return new Composite({ reducer: leaf });
	        }
	        if (leaf instanceof Composite && typeof leaf.uglify === 'function') {
	            leaf.uglify();
	        }
	        return leaf;
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
	
	    var Prettify = function Prettify() {
	        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            reduce = _ref2.reduce,
	            expand = _ref2.expand;
	
	        reduce = typeof reduce === 'function' ? reduce : _Reduce2.default;
	        expand = typeof expand === 'function' ? expand : _Expand2.default;
	        var r = _this.reducer;
	        var m = _this.middleware;
	        _this.reducer = function (state, action) {
	            return r(state, expand(action));
	        };
	        _this.middleware = function (store) {
	            return function (next) {
	                return function (action) {
	                    return m(store)(function (action) {
	                        return next(reduce(action));
	                    })(action);
	                };
	            };
	        };
	        _this.uglify = function () {
	            _this.reducer = r;
	            _this.middleware = m;
	            delete _this.uglify;
	        };
	    };
	
	    var Init = function Init(reduxStore, initRedux, initMemoize) {
	        return function (composite) {
	            var _ref3 = function (store) {
	                return store(composite)(reduxStore);
	            }(initRedux),
	                store = _ref3.store,
	                structure = _ref3.structure;
	
	            composite.memoize = function (memoize) {
	                return memoize(composite.memoize, store);
	            }(initMemoize);
	            delete composite.redux;
	            composite.store = structure;
	            composite.getState = store.getState;
	            composite.dispatch = store.dispatch;
	            composite.subscribe = store.subscribe;
	            return composite;
	        };
	    };
	
	    this.createStore = function () {
	        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            _ref4$createStore = _ref4.createStore,
	            createStore = _ref4$createStore === undefined ? undefined : _ref4$createStore,
	            _ref4$init = _ref4.init,
	            init = _ref4$init === undefined ? {} : _ref4$init,
	            _ref4$prettify = _ref4.prettify,
	            prettify = _ref4$prettify === undefined ? {} : _ref4$prettify;
	
	        return function (reducer, preloadedState, enhancer) {
	            // Prettify
	            if ((typeof prettify === 'undefined' ? 'undefined' : _typeof(prettify)) === 'object') {
	                var reduce = typeof prettify.reduce === 'function' ? prettify.reduce : _Reduce2.default;
	                var expand = typeof prettify.expand === 'function' ? prettify.expand : _Expand2.default;
	                Prettify({ reduce: reduce, expand: expand });
	            }
	
	            // Create Store
	            if (typeof createStore !== 'function') {
	                createStore = __webpack_require__(/*! redux */ 19).createStore;
	            }
	            reducer = typeof reducer === 'function' ? reducer(_this.reducer) : _this.reducer;
	            if (typeof preloadedState === 'function' && enhancer === undefined) {
	                enhancer = preloadedState;
	                preloadedState = undefined;
	            }
	            enhancer = typeof enhancer === 'function' ? enhancer(_this.middleware) : __webpack_require__(/*! redux */ 19).applyMiddleware(_this.middleware);
	            var Store = createStore(reducer, preloadedState, enhancer);
	
	            // Init
	            var initRedux = typeof init.store === 'function' ? init.store : _Redux4.default;
	            var initMemoize = typeof init.memoize === 'function' ? init.memoize : _Memoize4.default;
	            Init(Store, initRedux, initMemoize)(_this);
	            return Store;
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
	
	var ReduxAction = function ReduxAction(action) {
	    return (typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object' && action.type === 'COMPOSITE' ? action.composite : action;
	};
	var InitAction = function InitAction(callback) {
	    return function (action) {
	        return callback({ type: 'COMPOSITE', composite: action });
	    };
	};
	var MutateMethod = function MutateMethod(callback, key, structure) {
	    return function (action) {
	        var arg = Array.isArray(structure) ? [] : {};
	        arg[key] = action;
	        return callback(arg);
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
	                        return [(0, _DefaultMutationMethod2.default)(key)(composite), (0, _ReduxAction.MutateMethod)(next, key, composite), (0, _DefaultMutationMethod2.default)(key)(middleware)];
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
	
	                return [(0, _DefaultMutationMethod2.default)(key)(composite), (0, _ReduxAction.MutateMethod)(dispatch, key, composite), function () {
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
	
	var Redux = function Redux(compositeStructure) {
	    return function (dispatch, getState, subscribe) {
	        var redux = { dispatch: dispatch, getState: getState, subscribe: subscribe };
	        var structure = (0, _WalkComposite2.default)({
	            mutationMethod: function mutationMethod(key) {
	                return function (composite, dispatch, getState, subscribe) {
	                    return [(0, _DefaultMutationMethod2.default)(key)(composite), (0, _ReduxAction.MutateMethod)(dispatch, key, composite), function () {
	                        return getState()[key];
	                    }, function (listeners) {
	                        var arg = Array.isArray(composite) ? [] : {};
	                        arg[key] = listeners;
	                        return subscribe(arg);
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
	
	var _ReduxAction = __webpack_require__(/*! ./Helper/ReduxAction */ 7);
	
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
	            return function (memoize, memoizeStructure, dispatch, getState, subscribe) {
	                var structure = useStructure(memoize) ? memoize.structure : memoize;
	                return [structure[key], function (structure) {
	                    return structure !== undefined && structure[key] !== undefined ? structure[key] : undefined;
	                }(useStructure(memoize) ? memoizeStructure.structure : memoizeStructure), (0, _ReduxAction.MutateMethod)(dispatch, key, structure), function () {
	                    return getState()[key];
	                }, function (listeners) {
	                    var arg = Array.isArray(structure) ? [] : {};
	                    arg[key] = listeners;
	                    return subscribe(arg);
	                }];
	            };
	        },
	        reducerMethod: {
	            add: _walkComposite.Defaults.ReducerMethod.add,
	            init: function init(memoize) {
	                return _walkComposite.Defaults.ReducerMethod.init(useStructure(memoize) ? memoize.structure : memoize);
	            }
	        },
	        walkMethod: function walkMethod(parameters) {
	            return MemoizeWalk(originalMemoize, parameters);
	        }
	    }, parameters));
	};
	
	var MemoizeByMemoize = function MemoizeByMemoize(memoize) {
	    return function (_ref) {
	        var dispatch = _ref.dispatch,
	            getState = _ref.getState,
	            subscribe = _ref.subscribe;
	
	        return function (memoizationStructure) {
	            var structure = MemoizeWalk(memoize)(function (memoize, structure, dispatch, getState, subscribe) {
	                return structure === undefined ? undefined : function (memoized) {
	                    return memoize.structure === undefined ? memoized : MemoizeByMemoize(memoize)({ dispatch: dispatch, getState: getState, subscribe: subscribe })(structure);
	                }(memoize.memoize(function () {
	                    return structure({
	                        dispatch: dispatch,
	                        getState: getState,
	                        structure: structure,
	                        subscribe: subscribe
	                    });
	                }));
	            })(memoize, memoizationStructure, dispatch, getState, subscribe);
	            return _extends({
	                structure: structure
	            }, function (memoizationStructure) {
	                return typeof memoizationStructure === 'function' ? {
	                    memoize: memoize.memoize(function () {
	                        return memoizationStructure({ structure: structure, dispatch: dispatch, getState: getState, subscribe: subscribe });
	                    })
	                } : {};
	            }(typeof memoizationStructure === 'function' ? memoizationStructure : memoizationStructure.memoize));
	        };
	    };
	};
	
	var Memoize = exports.Memoize = function Memoize(memoize, store) {
	    return MemoizeByMemoize(memoize(store.getState))(store);
	};
	
	exports.default = Memoize;

/***/ }),
/* 17 */
/*!********************************!*\
  !*** ./src/Prettify/Reduce.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Reduce = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _walkComposite = __webpack_require__(/*! walk-composite */ 5);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Reduce = function Reduce(action) {
	    var actions = [];
	    var payload = undefined;
	    if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) !== 'object' || action === null || action.type !== 'COMPOSITE' || _typeof(action.composite) !== 'object') {
	        return action;
	    }
	    (0, _walkComposite.Walk)({
	        keysMethod: function keysMethod(action, path) {
	            var type = action.type,
	                rest = _objectWithoutProperties(action, ['type']);
	
	            if (type !== undefined && (type !== 'COMPOSITE' || _typeof(rest.composite) !== 'object')) {
	                actions.push(type + '\\' + path);
	                if (Object.keys(rest).length !== 0) {
	                    if (payload === undefined) {
	                        payload = {};
	                    }
	                    payload[path] = rest;
	                }
	            }
	            return _walkComposite.Defaults.KeysMethod(rest);
	        },
	        mutationMethod: function mutationMethod(key) {
	            return function (action, path) {
	                return [_walkComposite.Defaults.MutationMethod(key)(action)[0], action.type === 'COMPOSITE' && _typeof(action.composite) === 'object' && key === 'composite' ? path : function (key) {
	                    return path === '' ? key : path + '\\' + key;
	                }(Array.isArray(action) ? '[' + key + ']' : '{' + key + '}')];
	            };
	        }
	    })(function () {})(action.composite, '');
	    return { type: actions.join('\n'), payload: payload };
	};
	
	exports.Reduce = Reduce;
	exports.default = Reduce;

/***/ }),
/* 18 */
/*!********************************!*\
  !*** ./src/Prettify/Expand.js ***!
  \********************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }
	
	var Expand = exports.Expand = function Expand(action) {
	    if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) !== 'object' || action === null || typeof action.type !== 'string') {
	        return action;
	    }
	    try {
	        var compositeChecked = undefined,
	            composite = undefined;
	        var actions = action.type.split('\n').map(function (a) {
	            var _a$split = a.split('\\'),
	                _a$split2 = _toArray(_a$split),
	                type = _a$split2[0],
	                path = _a$split2.slice(1);
	
	            if (type === undefined) {
	                throw {
	                    message: 'action.type is undefined - use format "ACTION_TYPE\\{key1}\\[key2]\\{key3}"',
	                    type: type
	                };
	            }
	            if (path.length === 0) {
	                throw {
	                    message: 'path for composite is not defined - use format "ACTION_TYPE\\{key1}\\[key2]\\{key3}"',
	                    type: a
	                };
	            }
	            var result = _extends({
	                type: type
	            }, function (p) {
	                return _typeof(action.payload) === 'object' && action.payload !== null && _typeof(action.payload[p]) === 'object' && action.payload[p] !== null ? action.payload[p] : {};
	            }(path.join('\\')));
	            var lastChecked = true;
	            path.reverse().map(function (item) {
	                var checked = /^\{.*\}$/.test(item) ? true : /^\[.*\]$/.test(item) ? false : undefined;
	                if (checked === undefined) {
	                    throw {
	                        message: 'path item is not in the right format: should be either {key} or [key]',
	                        item: item
	                    };
	                }
	                lastChecked = checked;
	                checked = checked ? {} : [];
	                checked[item.substr(1, item.length - 2)] = result;
	                result = checked;
	            });
	            if (compositeChecked === undefined) {
	                compositeChecked = lastChecked;
	                composite = compositeChecked ? {} : [];
	            } else if (compositeChecked !== lastChecked) {
	                throw {
	                    message: 'inconsistency in action paths: [] !== {}'
	                };
	            }
	            composite = compositeChecked ? _extends({}, composite, result) : [].concat(_toConsumableArray(composite), _toConsumableArray(result));
	        });
	        return { type: 'COMPOSITE', composite: composite };
	    } catch (e) {
	        // console.warn('Action could not be expanded', e, action);
	        return action;
	    }
	};
	
	exports.default = Expand;

/***/ }),
/* 19 */
/*!******************************!*\
  !*** ./~/redux/lib/index.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 21);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(/*! ./combineReducers */ 36);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(/*! ./bindActionCreators */ 38);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(/*! ./applyMiddleware */ 39);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(/*! ./compose */ 40);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 37);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 20)))

/***/ }),
/* 20 */
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
/* 21 */
/*!************************************!*\
  !*** ./~/redux/lib/createStore.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 22);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(/*! symbol-observable */ 32);
	
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
/* 22 */
/*!***********************************!*\
  !*** ./~/lodash/isPlainObject.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 23),
	    getPrototype = __webpack_require__(/*! ./_getPrototype */ 29),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 31);
	
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
/* 23 */
/*!*********************************!*\
  !*** ./~/lodash/_baseGetTag.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 24),
	    getRawTag = __webpack_require__(/*! ./_getRawTag */ 27),
	    objectToString = __webpack_require__(/*! ./_objectToString */ 28);
	
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
/* 24 */
/*!*****************************!*\
  !*** ./~/lodash/_Symbol.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 25);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 25 */
/*!***************************!*\
  !*** ./~/lodash/_root.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 26);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 26 */
/*!*********************************!*\
  !*** ./~/lodash/_freeGlobal.js ***!
  \*********************************/
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 27 */
/*!********************************!*\
  !*** ./~/lodash/_getRawTag.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 24);
	
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
/* 28 */
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
/* 29 */
/*!***********************************!*\
  !*** ./~/lodash/_getPrototype.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(/*! ./_overArg */ 30);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ }),
/* 30 */
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
/* 31 */
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
/* 32 */
/*!**************************************!*\
  !*** ./~/symbol-observable/index.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/index */ 33);


/***/ }),
/* 33 */
/*!******************************************!*\
  !*** ./~/symbol-observable/lib/index.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(/*! ./ponyfill */ 35);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(/*! ./../../webpack/buildin/module.js */ 34)(module)))

/***/ }),
/* 34 */
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
/* 35 */
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
/* 36 */
/*!****************************************!*\
  !*** ./~/redux/lib/combineReducers.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 21);
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 22);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 37);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 20)))

/***/ }),
/* 37 */
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
/* 38 */
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
/* 39 */
/*!****************************************!*\
  !*** ./~/redux/lib/applyMiddleware.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(/*! ./compose */ 40);
	
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
/* 40 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map