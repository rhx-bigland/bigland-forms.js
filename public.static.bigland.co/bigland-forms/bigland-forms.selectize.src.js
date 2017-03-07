var BiglandForms =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(1);

	var _collections = __webpack_require__(5);

	var _collections2 = _interopRequireDefault(_collections);

	var _fillOptions = __webpack_require__(18);

	var _specialFields = __webpack_require__(169);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var boundHelpers = Object.keys(_collections2.default).reduce(function (map, key) {
	  map[key] = _fillOptions.replaceSelectOptions.bind(null, _collections2.default[key].collection);
	  return map;
	}, {});

	var replaceAll = function replaceAll() {
	  boundHelpers.cities({ query: '.bl-cities' });
	  boundHelpers.countries({ query: '.bl-countries' });
	  boundHelpers.disabilities({ query: '.bl-disabilities' });
	  boundHelpers.company_industries({ query: '.bl-company_industries' });
	  boundHelpers.education_level({ query: '.bl-education_level' });
	  boundHelpers.employment_type({ query: '.bl-employment_type' });
	  boundHelpers.gender({ query: '.bl-gender' });
	  boundHelpers.instituitions({ query: '.bl-instituitions' });
	  boundHelpers.job_functions({ query: '.bl-job_functions' });
	  boundHelpers.language_proficiencies({ query: '.bl-language_proficiencies' });
	  boundHelpers.marital_status({ query: '.bl-marital_status' });
	  boundHelpers.states({ query: '.bl-states' });
	  boundHelpers.raw({ query: '.bl-school_name' });
	  boundHelpers.raw({ query: '.bl-courses' });
	  (0, _specialFields.decoratePriceField)({ query: '.bl-price' });
	};

	var publicPackage = {
	  collections: _collections2.default,
	  replaceAll: replaceAll,
	  replaceSelectOptions: _fillOptions.replaceSelectOptions,
	  select: boundHelpers
	};

	exports.default = publicPackage;


	document.addEventListener("DOMContentLoaded", function (event) {
	  replaceAll();
	});

	("development") === 'development' && (console.log('BiglandForms'), console.log(publicPackage));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	module.exports = __webpack_require__(2).polyfill();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.0.5
	 */

	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.ES6Promise = factory();
	})(undefined, function () {
	  'use strict';

	  function objectOrFunction(x) {
	    return typeof x === 'function' || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null;
	  }

	  function isFunction(x) {
	    return typeof x === 'function';
	  }

	  var _isArray = undefined;
	  if (!Array.isArray) {
	    _isArray = function _isArray(x) {
	      return Object.prototype.toString.call(x) === '[object Array]';
	    };
	  } else {
	    _isArray = Array.isArray;
	  }

	  var isArray = _isArray;

	  var len = 0;
	  var vertxNext = undefined;
	  var customSchedulerFn = undefined;

	  var asap = function asap(callback, arg) {
	    queue[len] = callback;
	    queue[len + 1] = arg;
	    len += 2;
	    if (len === 2) {
	      if (customSchedulerFn) {
	        customSchedulerFn(flush);
	      } else {
	        scheduleFlush();
	      }
	    }
	  };

	  function setScheduler(scheduleFn) {
	    customSchedulerFn = scheduleFn;
	  }

	  function setAsap(asapFn) {
	    asap = asapFn;
	  }

	  var browserWindow = typeof window !== 'undefined' ? window : undefined;
	  var browserGlobal = browserWindow || {};
	  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	  var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	  function useNextTick() {
	    return function () {
	      return process.nextTick(flush);
	    };
	  }

	  function useVertxTimer() {
	    if (typeof vertxNext !== 'undefined') {
	      return function () {
	        vertxNext(flush);
	      };
	    }

	    return useSetTimeout();
	  }

	  function useMutationObserver() {
	    var iterations = 0;
	    var observer = new BrowserMutationObserver(flush);
	    var node = document.createTextNode('');
	    observer.observe(node, { characterData: true });

	    return function () {
	      node.data = iterations = ++iterations % 2;
	    };
	  }

	  function useMessageChannel() {
	    var channel = new MessageChannel();
	    channel.port1.onmessage = flush;
	    return function () {
	      return channel.port2.postMessage(0);
	    };
	  }

	  function useSetTimeout() {
	    var globalSetTimeout = setTimeout;
	    return function () {
	      return globalSetTimeout(flush, 1);
	    };
	  }

	  var queue = new Array(1000);
	  function flush() {
	    for (var i = 0; i < len; i += 2) {
	      var callback = queue[i];
	      var arg = queue[i + 1];

	      callback(arg);

	      queue[i] = undefined;
	      queue[i + 1] = undefined;
	    }

	    len = 0;
	  }

	  function attemptVertx() {
	    try {
	      var r = require;
	      var vertx = __webpack_require__(4);
	      vertxNext = vertx.runOnLoop || vertx.runOnContext;
	      return useVertxTimer();
	    } catch (e) {
	      return useSetTimeout();
	    }
	  }

	  var scheduleFlush = undefined;

	  if (isNode) {
	    scheduleFlush = useNextTick();
	  } else if (BrowserMutationObserver) {
	    scheduleFlush = useMutationObserver();
	  } else if (isWorker) {
	    scheduleFlush = useMessageChannel();
	  } else if (browserWindow === undefined && "function" === 'function') {
	    scheduleFlush = attemptVertx();
	  } else {
	    scheduleFlush = useSetTimeout();
	  }

	  function then(onFulfillment, onRejection) {
	    var _arguments = arguments;

	    var parent = this;

	    var child = new this.constructor(noop);

	    if (child[PROMISE_ID] === undefined) {
	      makePromise(child);
	    }

	    var _state = parent._state;

	    if (_state) {
	      (function () {
	        var callback = _arguments[_state - 1];
	        asap(function () {
	          return invokeCallback(_state, child, callback, parent._result);
	        });
	      })();
	    } else {
	      subscribe(parent, child, onFulfillment, onRejection);
	    }

	    return child;
	  }

	  function resolve(object) {
	    var Constructor = this;

	    if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Constructor) {
	      return object;
	    }

	    var promise = new Constructor(noop);
	    _resolve(promise, object);
	    return promise;
	  }

	  var PROMISE_ID = Math.random().toString(36).substring(16);

	  function noop() {}

	  var PENDING = void 0;
	  var FULFILLED = 1;
	  var REJECTED = 2;

	  var GET_THEN_ERROR = new ErrorObject();

	  function selfFulfillment() {
	    return new TypeError("You cannot resolve a promise with itself");
	  }

	  function cannotReturnOwn() {
	    return new TypeError('A promises callback cannot return that same promise.');
	  }

	  function getThen(promise) {
	    try {
	      return promise.then;
	    } catch (error) {
	      GET_THEN_ERROR.error = error;
	      return GET_THEN_ERROR;
	    }
	  }

	  function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	    try {
	      then.call(value, fulfillmentHandler, rejectionHandler);
	    } catch (e) {
	      return e;
	    }
	  }

	  function handleForeignThenable(promise, thenable, then) {
	    asap(function (promise) {
	      var sealed = false;
	      var error = tryThen(then, thenable, function (value) {
	        if (sealed) {
	          return;
	        }
	        sealed = true;
	        if (thenable !== value) {
	          _resolve(promise, value);
	        } else {
	          fulfill(promise, value);
	        }
	      }, function (reason) {
	        if (sealed) {
	          return;
	        }
	        sealed = true;

	        _reject(promise, reason);
	      }, 'Settle: ' + (promise._label || ' unknown promise'));

	      if (!sealed && error) {
	        sealed = true;
	        _reject(promise, error);
	      }
	    }, promise);
	  }

	  function handleOwnThenable(promise, thenable) {
	    if (thenable._state === FULFILLED) {
	      fulfill(promise, thenable._result);
	    } else if (thenable._state === REJECTED) {
	      _reject(promise, thenable._result);
	    } else {
	      subscribe(thenable, undefined, function (value) {
	        return _resolve(promise, value);
	      }, function (reason) {
	        return _reject(promise, reason);
	      });
	    }
	  }

	  function handleMaybeThenable(promise, maybeThenable, then$$) {
	    if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	      handleOwnThenable(promise, maybeThenable);
	    } else {
	      if (then$$ === GET_THEN_ERROR) {
	        _reject(promise, GET_THEN_ERROR.error);
	      } else if (then$$ === undefined) {
	        fulfill(promise, maybeThenable);
	      } else if (isFunction(then$$)) {
	        handleForeignThenable(promise, maybeThenable, then$$);
	      } else {
	        fulfill(promise, maybeThenable);
	      }
	    }
	  }

	  function _resolve(promise, value) {
	    if (promise === value) {
	      _reject(promise, selfFulfillment());
	    } else if (objectOrFunction(value)) {
	      handleMaybeThenable(promise, value, getThen(value));
	    } else {
	      fulfill(promise, value);
	    }
	  }

	  function publishRejection(promise) {
	    if (promise._onerror) {
	      promise._onerror(promise._result);
	    }

	    publish(promise);
	  }

	  function fulfill(promise, value) {
	    if (promise._state !== PENDING) {
	      return;
	    }

	    promise._result = value;
	    promise._state = FULFILLED;

	    if (promise._subscribers.length !== 0) {
	      asap(publish, promise);
	    }
	  }

	  function _reject(promise, reason) {
	    if (promise._state !== PENDING) {
	      return;
	    }
	    promise._state = REJECTED;
	    promise._result = reason;

	    asap(publishRejection, promise);
	  }

	  function subscribe(parent, child, onFulfillment, onRejection) {
	    var _subscribers = parent._subscribers;
	    var length = _subscribers.length;

	    parent._onerror = null;

	    _subscribers[length] = child;
	    _subscribers[length + FULFILLED] = onFulfillment;
	    _subscribers[length + REJECTED] = onRejection;

	    if (length === 0 && parent._state) {
	      asap(publish, parent);
	    }
	  }

	  function publish(promise) {
	    var subscribers = promise._subscribers;
	    var settled = promise._state;

	    if (subscribers.length === 0) {
	      return;
	    }

	    var child = undefined,
	        callback = undefined,
	        detail = promise._result;

	    for (var i = 0; i < subscribers.length; i += 3) {
	      child = subscribers[i];
	      callback = subscribers[i + settled];

	      if (child) {
	        invokeCallback(settled, child, callback, detail);
	      } else {
	        callback(detail);
	      }
	    }

	    promise._subscribers.length = 0;
	  }

	  function ErrorObject() {
	    this.error = null;
	  }

	  var TRY_CATCH_ERROR = new ErrorObject();

	  function tryCatch(callback, detail) {
	    try {
	      return callback(detail);
	    } catch (e) {
	      TRY_CATCH_ERROR.error = e;
	      return TRY_CATCH_ERROR;
	    }
	  }

	  function invokeCallback(settled, promise, callback, detail) {
	    var hasCallback = isFunction(callback),
	        value = undefined,
	        error = undefined,
	        succeeded = undefined,
	        failed = undefined;

	    if (hasCallback) {
	      value = tryCatch(callback, detail);

	      if (value === TRY_CATCH_ERROR) {
	        failed = true;
	        error = value.error;
	        value = null;
	      } else {
	        succeeded = true;
	      }

	      if (promise === value) {
	        _reject(promise, cannotReturnOwn());
	        return;
	      }
	    } else {
	      value = detail;
	      succeeded = true;
	    }

	    if (promise._state !== PENDING) {} else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	  }

	  function initializePromise(promise, resolver) {
	    try {
	      resolver(function resolvePromise(value) {
	        _resolve(promise, value);
	      }, function rejectPromise(reason) {
	        _reject(promise, reason);
	      });
	    } catch (e) {
	      _reject(promise, e);
	    }
	  }

	  var id = 0;
	  function nextId() {
	    return id++;
	  }

	  function makePromise(promise) {
	    promise[PROMISE_ID] = id++;
	    promise._state = undefined;
	    promise._result = undefined;
	    promise._subscribers = [];
	  }

	  function Enumerator(Constructor, input) {
	    this._instanceConstructor = Constructor;
	    this.promise = new Constructor(noop);

	    if (!this.promise[PROMISE_ID]) {
	      makePromise(this.promise);
	    }

	    if (isArray(input)) {
	      this._input = input;
	      this.length = input.length;
	      this._remaining = input.length;

	      this._result = new Array(this.length);

	      if (this.length === 0) {
	        fulfill(this.promise, this._result);
	      } else {
	        this.length = this.length || 0;
	        this._enumerate();
	        if (this._remaining === 0) {
	          fulfill(this.promise, this._result);
	        }
	      }
	    } else {
	      _reject(this.promise, validationError());
	    }
	  }

	  function validationError() {
	    return new Error('Array Methods must be provided an Array');
	  };

	  Enumerator.prototype._enumerate = function () {
	    var length = this.length;
	    var _input = this._input;

	    for (var i = 0; this._state === PENDING && i < length; i++) {
	      this._eachEntry(_input[i], i);
	    }
	  };

	  Enumerator.prototype._eachEntry = function (entry, i) {
	    var c = this._instanceConstructor;
	    var resolve$$ = c.resolve;

	    if (resolve$$ === resolve) {
	      var _then = getThen(entry);

	      if (_then === then && entry._state !== PENDING) {
	        this._settledAt(entry._state, i, entry._result);
	      } else if (typeof _then !== 'function') {
	        this._remaining--;
	        this._result[i] = entry;
	      } else if (c === Promise) {
	        var promise = new c(noop);
	        handleMaybeThenable(promise, entry, _then);
	        this._willSettleAt(promise, i);
	      } else {
	        this._willSettleAt(new c(function (resolve$$) {
	          return resolve$$(entry);
	        }), i);
	      }
	    } else {
	      this._willSettleAt(resolve$$(entry), i);
	    }
	  };

	  Enumerator.prototype._settledAt = function (state, i, value) {
	    var promise = this.promise;

	    if (promise._state === PENDING) {
	      this._remaining--;

	      if (state === REJECTED) {
	        _reject(promise, value);
	      } else {
	        this._result[i] = value;
	      }
	    }

	    if (this._remaining === 0) {
	      fulfill(promise, this._result);
	    }
	  };

	  Enumerator.prototype._willSettleAt = function (promise, i) {
	    var enumerator = this;

	    subscribe(promise, undefined, function (value) {
	      return enumerator._settledAt(FULFILLED, i, value);
	    }, function (reason) {
	      return enumerator._settledAt(REJECTED, i, reason);
	    });
	  };

	  function all(entries) {
	    return new Enumerator(this, entries).promise;
	  }

	  function race(entries) {
	    var Constructor = this;

	    if (!isArray(entries)) {
	      return new Constructor(function (_, reject) {
	        return reject(new TypeError('You must pass an array to race.'));
	      });
	    } else {
	      return new Constructor(function (resolve, reject) {
	        var length = entries.length;
	        for (var i = 0; i < length; i++) {
	          Constructor.resolve(entries[i]).then(resolve, reject);
	        }
	      });
	    }
	  }

	  function reject(reason) {
	    var Constructor = this;
	    var promise = new Constructor(noop);
	    _reject(promise, reason);
	    return promise;
	  }

	  function needsResolver() {
	    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	  }

	  function needsNew() {
	    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	  }

	  function Promise(resolver) {
	    this[PROMISE_ID] = nextId();
	    this._result = this._state = undefined;
	    this._subscribers = [];

	    if (noop !== resolver) {
	      typeof resolver !== 'function' && needsResolver();
	      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	    }
	  }

	  Promise.all = all;
	  Promise.race = race;
	  Promise.resolve = resolve;
	  Promise.reject = reject;
	  Promise._setScheduler = setScheduler;
	  Promise._setAsap = setAsap;
	  Promise._asap = asap;

	  Promise.prototype = {
	    constructor: Promise,

	    then: then,

	    'catch': function _catch(onRejection) {
	      return this.then(null, onRejection);
	    }
	  };

	  function polyfill() {
	    var local = undefined;

	    if (typeof global !== 'undefined') {
	      local = global;
	    } else if (typeof self !== 'undefined') {
	      local = self;
	    } else {
	      try {
	        local = Function('return this')();
	      } catch (e) {
	        throw new Error('polyfill failed because global object is unavailable in this environment');
	      }
	    }

	    var P = local.Promise;

	    if (P) {
	      var promiseToString = null;
	      try {
	        promiseToString = Object.prototype.toString.call(P.resolve());
	      } catch (e) {}

	      if (promiseToString === '[object Promise]' && !P.cast) {
	        return;
	      }
	    }

	    local.Promise = Promise;
	  }

	  Promise.polyfill = polyfill;
	  Promise.Promise = Promise;

	  return Promise;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var process = module.exports = {};

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
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
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        return setTimeout(fun, 0);
	    }

	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        return clearTimeout(marker);
	    }

	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
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
	    while (len) {
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
	process.version = '';
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _raw = __webpack_require__(6);

	var raw = _interopRequireWildcard(_raw);

	var _job_function = __webpack_require__(7);

	var job_functions = _interopRequireWildcard(_job_function);

	var _instituition = __webpack_require__(8);

	var instituitions = _interopRequireWildcard(_instituition);

	var _language = __webpack_require__(9);

	var languages = _interopRequireWildcard(_language);

	var _language_proficiency = __webpack_require__(10);

	var language_proficiencies = _interopRequireWildcard(_language_proficiency);

	var _industry = __webpack_require__(11);

	var company_industries = _interopRequireWildcard(_industry);

	var _states = __webpack_require__(12);

	var states = _interopRequireWildcard(_states);

	var _cities = __webpack_require__(13);

	var cities = _interopRequireWildcard(_cities);

	var _countries = __webpack_require__(14);

	var countries = _interopRequireWildcard(_countries);

	var _disabilities = __webpack_require__(15);

	var disabilities = _interopRequireWildcard(_disabilities);

	var _employment_type = __webpack_require__(16);

	var _user = __webpack_require__(17);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = {
	  raw: raw,
	  states: states,
	  cities: cities,
	  countries: countries,
	  disabilities: disabilities,
	  employment_type: _employment_type.employment_type,
	  employment_type_legal: _employment_type.employment_type_legal,
	  marital_status: _user.marital_status,
	  gender: _user.gender,
	  education_level: _user.education_level,
	  seniority_level: _user.seniority_level,
	  document_types: _user.document_types,
	  instituitions: instituitions,
	  job_functions: job_functions,
	  language_proficiencies: language_proficiencies,
	  languages: languages,
	  company_industries: company_industries
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var raw = {};
	var raw_collection = Object.keys(raw).map(function (key) {
	    return raw[key];
	});

	exports.map = raw;
	exports.collection = raw_collection;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var job_function = {
	  "acct": { code: "acct", label: "Contabilidade" },
	  "admn": { code: "admn", label: "Administrativo" },
	  "cre": { code: "cre", label: "Arte e Design" },
	  "bd": { code: "bd", label: "Desenvolvimento Comercial" },
	  "css": { code: "css", label: "Serviços Sociais e Comunitários" },
	  "cnsl": { code: "cnsl", label: "Consultorias" },
	  "edu": { code: "edu", label: "Educação" },
	  "eng": { code: "eng", label: "Engenharia" },
	  "ent": { code: "ent", label: "Empreendedorismo" },
	  "finc": { code: "finc", label: "Financeiro" },
	  "med": { code: "med", label: "Saúde" },
	  "hr": { code: "hr", label: "Recusos Humanos" },
	  "it": { code: "it", label: "Tecnologia da Informação" },
	  "lgl": { code: "lgl", label: "Jurídico" },
	  "mktg": { code: "mktg", label: "Marketing" },
	  "pr": { code: "pr", label: "Mídia e Comunicação" },
	  "mps": { code: "mps", label: "Serviços de Proteção e Militares" },
	  "ops": { code: "ops", label: "Operações" },
	  "prod": { code: "prod", label: "Gestão de Produtos" },
	  "ppm": { code: "ppm", label: "Gestão de Projetos" },
	  "buy": { code: "buy", label: "Compras" },
	  "qa": { code: "qa", label: "Controle de Qualidade" },
	  "re": { code: "re", label: "Imobiliário" },
	  "acad": { code: "acad", label: "Pesquisa" },
	  "sale": { code: "sale", label: "Vendas" },
	  "supp": { code: "supp", label: "Suporte" }
	};

	var job_function_collection = Object.keys(job_function).map(function (key) {
	  return job_function[key];
	});

	exports.map = job_function;
	exports.collection = job_function_collection;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var instituitions = {
	  "2565": { code: "2565", label: "ABEU - CENTRO UNIVERSITÁRIO (UNIABEU)", sigla: "UNIABEU", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "21095": { code: "21095", label: "Academia Militar das Agulhas Negras (AMAN)", sigla: "AMAN", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "3756": { code: "3756", label: "ALFA - Faculdade de Almenara", sigla: "ALFAAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "18692": { code: "18692", label: "ALFA - Faculdade de Guanhães (ALFA - Gunhães)", sigla: "ALFA - Gunhães", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1410": { code: "1410", label: "ÁREA1 - FACULDADE DE CIÊNCIA E TECNOLOGIA (ÁREA1)", sigla: "ÁREA1", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1636": { code: "1636", label: "CASTELLI ESCOLA SUPERIOR DE HOTELARIA (CASTELLI ESH)", sigla: "CASTELLI ESH", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "4053": { code: "4053", label: "CENTRO DE EDUCAÇÃO SUPERIOR BARNABITA (CESB)", sigla: "CESB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1138": { code: "1138", label: "CENTRO DE EDUCAÇÃO SUPERIOR DE BLUMENAU (CESBLU)", sigla: "CESBLU", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "31": { code: "31", label: "CENTRO DE EDUCAÇÃO TÉCNICA DA UTRAMIG (UTRAMIG)", sigla: "UTRAMIG", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "3182": { code: "3182", label: "CENTRO DE ENSINO SUPERIOR ARCANJO MIKAEL DE ARAPIRACA (CESAMA)", sigla: "CESAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "73": { code: "73", label: "CENTRO DE ENSINO SUPERIOR DE ARCOVERDE (CESA)", sigla: "CESA", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "754": { code: "754", label: "CENTRO DE ENSINO SUPERIOR DE CATALÃO (CESUC)", sigla: "CESUC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3488": { code: "3488", label: "Centro de Ensino Superior de Conselheiro Lafaiete (CES-CL)", sigla: "CES-CL", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2771": { code: "2771", label: "CENTRO DE ENSINO SUPERIOR DE ILHÉUS (CESUPI)", sigla: "CESUPI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "755": { code: "755", label: "CENTRO DE ENSINO SUPERIOR DE JATAÍ (CESUT)", sigla: "CESUT", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "337": { code: "337", label: "CENTRO DE ENSINO SUPERIOR DE JUIZ DE FORA (CES/JF)", sigla: "CES/JF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4166": { code: "4166", label: "CENTRO DE ENSINO SUPERIOR DE UBERABA (CESUBE)", sigla: "CESUBE", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "490": { code: "490", label: "CENTRO DE ENSINO SUPERIOR DE VALENÇA (CESVA)", sigla: "CESVA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1159": { code: "1159", label: "CENTRO DE ENSINO SUPERIOR DE VITÓRIA (CESV)", sigla: "CESV", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "861": { code: "861", label: "CENTRO DE ENSINO SUPERIOR DO AMAPÁ (CEAP)", sigla: "CEAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "749": { code: "749", label: "CENTRO DE ENSINO SUPERIOR DO VALE DO PARNAÍBA (CESVALE)", sigla: "CESVALE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "674": { code: "674", label: "CENTRO DE ENSINO SUPERIOR DO VALE SÃO FRANCISCO (CESVASF)", sigla: "CESVASF", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "18034": { code: "18034", label: "Centro de Ensino Superior Riograndese (CESURG)", sigla: "CESURG", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15508": { code: "15508", label: "Centro de Ensino Unificado do Piauí (CEUPI)", sigla: "CEUPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1977": { code: "1977", label: "CENTRO DE ESTUDOS SUPERIORES APRENDIZ (CESA)", sigla: "CESA", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "593": { code: "593", label: "CENTRO FEDERAL DE EDUCAÇÃO TECNOLÓGICA CELSO SUCKOW DA FONSECA (CEFET/RJ)", sigla: "CEFET/RJ", category: "Centro Federal de Educação Tecnológica", oa: "Pública", ci: "3", igc: "3" },
	  "594": { code: "594", label: "CENTRO FEDERAL DE EDUCAÇÃO TECNOLÓGICA DE MINAS GERAIS (CEFET/MG)", sigla: "CEFET/MG", category: "Centro Federal de Educação Tecnológica", oa: "Pública", ci: "4", igc: "4" },
	  "1230": { code: "1230", label: "CENTRO REGIONAL UNIVERSITÁRIO DE ESPÍRITO SANTO DO PINHAL (UNIPINHAL)", sigla: "UNIPINHAL", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "3972": { code: "3972", label: "CENTRO SUPERIOR DE ENSINO E PESQUISA DE MACHADO (CESEP)", sigla: "CESEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "17014": { code: "17014", label: "CENTRO SUPERIOR DE ESTUDOS JURÍDICOS CARLOS DRUMMOND DE ANDRADE (CSEJCDA)", sigla: "CSEJCDA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "810": { code: "810", label: "CENTRO TÉCNICO-EDUCACIONAL SUPERIOR DO OESTE PARANAENSE (CTESOP)", sigla: "CTESOP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18064": { code: "18064", label: "CENTRO TECNOLÓGICO POSITIVO (CTPositivo)", sigla: "CTPositivo", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "645": { code: "645", label: "Centro Universitário - Católica de Santa Catarina em Jaraguá do Sul (Católica em Jaraguá )", sigla: "Católica em Jaraguá ", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "17138": { code: "17138", label: "Centro Universitário - Católica de Santa Catarina em Joinville (Católica em Joinvile)", sigla: "Católica em Joinvile", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "SC" },
	  "1365": { code: "1365", label: "CENTRO UNIVERSITÁRIO ADVENTISTA DE SÃO PAULO (UNASP)", sigla: "UNASP", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "213": { code: "213", label: "CENTRO UNIVERSITÁRIO ÁLVARES PENTEADO (FECAP)", sigla: "FECAP", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "1225": { code: "1225", label: "CENTRO UNIVERSITÁRIO AMPARENSE (UNIFIA)", sigla: "UNIFIA", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1045": { code: "1045", label: "CENTRO UNIVERSITÁRIO ANHANGÜERA (UNIFIAN)", sigla: "UNIFIAN", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "926": { code: "926", label: "CENTRO UNIVERSITÁRIO ANHANGUERA DE CAMPO GRANDE", sigla: "ANHANGUERACG", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "515": { code: "515", label: "CENTRO UNIVERSITÁRIO ANHANGUERA DE NITERÓI (UNIAN)", sigla: "UNIAN", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "242": { code: "242", label: "CENTRO UNIVERSITÁRIO ANHANGUERA DE SANTO ANDRÉ", sigla: "ANHANGUERASTD", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "376": { code: "376", label: "CENTRO UNIVERSITÁRIO ANHANGUERA DE SÃO PAULO", sigla: "ANHANGUERASP", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1841": { code: "1841", label: "CENTRO UNIVERSITÁRIO ANTÔNIO EUFRÁSIO DE TOLEDO DE PRESIDENTE PRUDENTE - TOLEDO PRUDENTE (TOLEDO PRUDENTE)", sigla: "TOLEDO PRUDENTE", category: "Centro Universitário", oa: "Privada", ci: "5", igc: "4" },
	  "1336": { code: "1336", label: "CENTRO UNIVERSITÁRIO ASSIS GURGACZ (FAG)", sigla: "FAG", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "161": { code: "161", label: "CENTRO UNIVERSITÁRIO ASSUNÇÃO (UNIFAI)", sigla: "UNIFAI", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "277": { code: "277", label: "CENTRO UNIVERSITÁRIO AUGUSTO MOTTA (UNISUAM)", sigla: "UNISUAM", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "3602": { code: "3602", label: "CENTRO UNIVERSITÁRIO AUTÔNOMO DO BRASIL", sigla: "CUAUTONOMO", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "138": { code: "138", label: "CENTRO UNIVERSITÁRIO BARÃO DE MAUÁ (CBM)", sigla: "CBM", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "4163": { code: "4163", label: "CENTRO UNIVERSITÁRIO BARRIGA VERDE (UNIBAVE)", sigla: "UNIBAVE", category: "Centro Universitário", oa: "Privada", ci: "-", igc: "3" },
	  "19551": { code: "19551", label: "CENTRO UNIVERSITÁRIO BARRIGA VERDE / UNIBAVE Cocal do Sul (UNIBAVE)", sigla: "UNIBAVE", category: "Centro Universitário", oa: "Privada", ci: "-", igc: "-" },
	  "162": { code: "162", label: "CENTRO UNIVERSITÁRIO BELAS ARTES DE SÃO PAULO (FEBASP)", sigla: "FEBASP", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1232": { code: "1232", label: "CENTRO UNIVERSITÁRIO CAMPOS DE ANDRADE (UNIANDRADE)", sigla: "UNIANDRADE", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1233": { code: "1233", label: "CENTRO UNIVERSITÁRIO CÂNDIDO RONDON (UNIRONDON)", sigla: "UNIRONDON", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "254": { code: "254", label: "CENTRO UNIVERSITÁRIO CAPITAL (UNICAPITAL)", sigla: "UNICAPITAL", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "802": { code: "802", label: "CENTRO UNIVERSITÁRIO CARIOCA (UNICARIOCA)", sigla: "UNICARIOCA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "2135": { code: "2135", label: "CENTRO UNIVERSITÁRIO CATÓLICA DE QUIXADÁ", sigla: "CUCQUIXADA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "4522": { code: "4522", label: "CENTRO UNIVERSITÁRIO CATÓLICO SALESIANO AUXILIUM (UNISALESIANO)", sigla: "UNISALESIANO", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "522": { code: "522", label: "CENTRO UNIVERSITÁRIO CELSO LISBOA (UCL)", sigla: "UCL", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "707": { code: "707", label: "CENTRO UNIVERSITÁRIO CENTRAL PAULISTA (UNICEP)", sigla: "UNICEP", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "621": { code: "621", label: "CENTRO UNIVERSITÁRIO CESMAC (CESMAC)", sigla: "CESMAC", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1895": { code: "1895", label: "CENTRO UNIVERSITÁRIO CHRISTUS (UNICHRISTUS)", sigla: "UNICHRISTUS", category: "Centro Universitário", oa: "Privada", ci: "5", igc: "4" },
	  "135": { code: "135", label: "CENTRO UNIVERSITÁRIO CLARETIANO (CEUCLAR)", sigla: "CEUCLAR", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1419": { code: "1419", label: "CENTRO UNIVERSITÁRIO CURITIBA (UNICURITIBA)", sigla: "UNICURITIBA", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1563": { code: "1563", label: "CENTRO UNIVERSITÁRIO DA FACULDADE DE SAÚDE, CIÊNCIAS HUMANAS E TECNOLÓGICAS DO PIAUÍ (NOVAFAPI)", sigla: "NOVAFAPI", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "3641": { code: "3641", label: "CENTRO UNIVERSITÁRIO DA FUNDAÇÃO EDUCACIONAL DE BARRETOS (UNIFEB)", sigla: "UNIFEB", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "3875": { code: "3875", label: "CENTRO UNIVERSITÁRIO DA FUNDAÇÃO EDUCACIONAL GUAXUPÉ (UNIFEG)", sigla: "UNIFEG", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1878": { code: "1878", label: "CENTRO UNIVERSITÁRIO DA FUNDAÇÃO EDUCACIONAL INACIANA PE SABÓIA DE MEDEIROS (FEI)", sigla: "FEI", category: "Centro Universitário", oa: "Privada", ci: "-", igc: "4" },
	  "673": { code: "673", label: "CENTRO UNIVERSITÁRIO DA GRANDE DOURADOS (UNIGRAN)", sigla: "UNIGRAN", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "1427": { code: "1427", label: "CENTRO UNIVERSITÁRIO DA SERRA GAÚCHA (FSG)", sigla: "FSG", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "217": { code: "217", label: "CENTRO UNIVERSITÁRIO DAS FACULDADES ASSOCIADAS DE ENSINO - FAE (UNIFAE)", sigla: "UNIFAE", category: "Centro Universitário", oa: "Pública", ci: "-", igc: "3" },
	  "374": { code: "374", label: "CENTRO UNIVERSITÁRIO DAS FACULDADES METROPOLITANAS UNIDAS (FMU)", sigla: "FMU", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1292": { code: "1292", label: "Centro Universitário de Adamantina (FAI)", sigla: "FAI", category: "Centro Universitário", oa: "Pública", ci: "-", igc: "3" },
	  "384": { code: "384", label: "CENTRO UNIVERSITÁRIO DE ANÁPOLIS (UNIEVANGÉLICA)", sigla: "UNIEVANGÉLICA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "125": { code: "125", label: "CENTRO UNIVERSITÁRIO DE ARARAS - (UNAR)", sigla: "UNAR", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "514": { code: "514", label: "CENTRO UNIVERSITÁRIO DE BARRA MANSA (UBM)", sigla: "UBM", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "997": { code: "997", label: "Centro Universitário de Bauru", sigla: "CUBAURU", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "349": { code: "349", label: "CENTRO UNIVERSITÁRIO DE BELO HORIZONTE (UNI-BH)", sigla: "UNI-BH", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "402": { code: "402", label: "CENTRO UNIVERSITÁRIO DE BRASÍLIA (UNICEUB)", sigla: "UNICEUB", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "87": { code: "87", label: "CENTRO UNIVERSITÁRIO DE BRUSQUE (UNIFEBE)", sigla: "UNIFEBE", category: "Centro Universitário", oa: "Privada", ci: "-", igc: "3" },
	  "3966": { code: "3966", label: "CENTRO UNIVERSITÁRIO DE CARATINGA (UNEC)", sigla: "UNEC", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "826": { code: "826", label: "CENTRO UNIVERSITÁRIO DE DESENVOLVIMENTO DO CENTRO-OESTE (UNIDESC)", sigla: "UNIDESC", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "668": { code: "668", label: "CENTRO UNIVERSITÁRIO DE ENSINO SUPERIOR DO AMAZONAS (CIESA)", sigla: "CIESA", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "3983": { code: "3983", label: "CENTRO UNIVERSITÁRIO DE FORMIGA (UNIFORMG)", sigla: "UNIFORMG", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "386": { code: "386", label: "CENTRO UNIVERSITÁRIO DE GOIÁS (UNI-ANHANGÜERA)", sigla: "UNI-ANHANGÜERA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1869": { code: "1869", label: "CENTRO UNIVERSITÁRIO DE ITAJUBÁ (FEPI)", sigla: "FEPI", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1224": { code: "1224", label: "CENTRO UNIVERSITÁRIO DE JALES (UNIJALES)", sigla: "UNIJALES", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "352": { code: "352", label: "CENTRO UNIVERSITÁRIO DE JOÃO PESSOA (UNIPÊ)", sigla: "UNIPÊ", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "3372": { code: "3372", label: "CENTRO UNIVERSITÁRIO DE LAVRAS (UNILAVRAS)", sigla: "UNILAVRAS", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1846": { code: "1846", label: "CENTRO UNIVERSITÁRIO DE LINS (UNILINS)", sigla: "UNILINS", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "535": { code: "535", label: "CENTRO UNIVERSITÁRIO DE MANDAGUARI - UNIMAN (FAFIMAN)", sigla: "FAFIMAN", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "1196": { code: "1196", label: "CENTRO UNIVERSITÁRIO DE MARINGÁ - UNICESUMAR (UNICESUMAR)", sigla: "UNICESUMAR", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "4396": { code: "4396", label: "CENTRO UNIVERSITÁRIO DE MINEIROS (UNIFIMES)", sigla: "UNIFIMES", category: "Centro Universitário", oa: "Pública", ci: "-", igc: "3" },
	  "3371": { code: "3371", label: "CENTRO UNIVERSITÁRIO DE PATOS DE MINAS (UNIPAM)", sigla: "UNIPAM", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "146": { code: "146", label: "CENTRO UNIVERSITÁRIO DE RIO PRETO (UNIRP)", sigla: "UNIRP", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "4962": { code: "4962", label: "CENTRO UNIVERSITÁRIO DE SETE LAGOAS (UNIFEMM)", sigla: "UNIFEMM", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "649": { code: "649", label: "CENTRO UNIVERSITÁRIO DE UNIÃO DA VITÓRIA (UNIUV)", sigla: "UNIUV", category: "Centro Universitário", oa: "Pública", ci: "-", igc: "3" },
	  "794": { code: "794", label: "CENTRO UNIVERSITÁRIO DE VÁRZEA GRANDE (UNIVAG)", sigla: "UNIVAG", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "489": { code: "489", label: "CENTRO UNIVERSITÁRIO DE VOLTA REDONDA (UNIFOA)", sigla: "UNIFOA", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "4" },
	  "222": { code: "222", label: "CENTRO UNIVERSITÁRIO DE VOTUPORANGA (UNIFEV)", sigla: "UNIFEV", category: "Centro Universitário", oa: "Privada", ci: "5", igc: "4" },
	  "1396": { code: "1396", label: "Centro Universitário Dinâmica das Cataratas (UDC)", sigla: "UDC", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1450": { code: "1450", label: "CENTRO UNIVERSITÁRIO DO CERRADO-PATROCÍNIO (UNICERP)", sigla: "UNICERP", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "518": { code: "518", label: "CENTRO UNIVERSITÁRIO DO DISTRITO FEDERAL (UDF)", sigla: "UDF", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1559": { code: "1559", label: "CENTRO UNIVERSITÁRIO DO ESPÍRITO SANTO (UNESC)", sigla: "UNESC", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "4" },
	  "792": { code: "792", label: "CENTRO UNIVERSITÁRIO DO ESTADO DO PARÁ (CESUPA)", sigla: "CESUPA", category: "Centro Universitário", oa: "Privada", ci: "5", igc: "3" },
	  "1060": { code: "1060", label: "CENTRO UNIVERSITÁRIO DO INSTITUTO DE EDUCAÇÃO SUPERIOR DE BRASÍLIA - IESB (IESB)", sigla: "IESB", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1445": { code: "1445", label: "CENTRO UNIVERSITÁRIO DO INSTITUTO MAUÁ DE TECNOLOGIA (CEUN-IMT)", sigla: "CEUN-IMT", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "878": { code: "878", label: "CENTRO UNIVERSITÁRIO DO LESTE DE MINAS GERAIS (UNILESTEMG)", sigla: "UNILESTEMG", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1422": { code: "1422", label: "CENTRO UNIVERSITÁRIO DO NORTE (UNINORTE)", sigla: "UNINORTE", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1129": { code: "1129", label: "CENTRO UNIVERSITÁRIO DO NORTE PAULISTA (UNORP)", sigla: "UNORP", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1575": { code: "1575", label: "CENTRO UNIVERSITÁRIO DO PLANALTO DE ARAXÁ (UNIARAXÁ)", sigla: "UNIARAXÁ", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1264": { code: "1264", label: "CENTRO UNIVERSITÁRIO DO RIO GRANDE DO NORTE (UNI-RN)", sigla: "UNI-RN", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "3368": { code: "3368", label: "CENTRO UNIVERSITÁRIO DO SUL DE MINAS (UNIS-MG)", sigla: "UNIS-MG", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "142": { code: "142", label: "CENTRO UNIVERSITÁRIO DO TRIÂNGULO (UNITRI)", sigla: "UNITRI", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1775": { code: "1775", label: "CENTRO UNIVERSITÁRIO DO VALE DO IPOJUCA (UNIFAVIP)", sigla: "UNIFAVIP", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1735": { code: "1735", label: "CENTRO UNIVERSITÁRIO DOUTOR LEÃO SAMPAIO (FLS)", sigla: "FLS", category: "Centro Universitário", oa: "Privada", ci: "5", igc: "4" },
	  "1702": { code: "1702", label: "CENTRO UNIVERSITÁRIO ESTÁCIO DA AMAZÔNIA (ESTÁCIO AMAZÔNIA)", sigla: "ESTÁCIO AMAZÔNIA", category: "Centro Universitário", oa: "Privada", ci: "5", igc: "3" },
	  "1986": { code: "1986", label: "CENTRO UNIVERSITÁRIO ESTÁCIO DA SÁ", sigla: "ESTACIODESA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1509": { code: "1509", label: "Centro Universitário Estácio de Belo Horizonte - Estácio BH (ESTÁCIO BH)", sigla: "ESTÁCIO BH", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1660": { code: "1660", label: "CENTRO UNIVERSITÁRIO ESTÁCIO DE BRASÍLIA - ESTÁCIO BRASÍLIA (ESTÁCIO BRASÍLIA)", sigla: "ESTÁCIO BRASÍLIA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1270": { code: "1270", label: "CENTRO UNIVERSITÁRIO ESTÁCIO DE RIBEIRÃO PRETO (ESTÁCIO RIBEIRÃO PRE)", sigla: "ESTÁCIO RIBEIRÃO PRE", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1510": { code: "1510", label: "CENTRO UNIVERSITÁRIO ESTÁCIO DE SANTA CATARINA - ESTÁCIO SANTA CATARINA", sigla: "ESTACIOSC", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1107": { code: "1107", label: "Centro Universitário Estácio do Ceará (Estácio FIC)", sigla: "Estácio FIC", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "793": { code: "793", label: "Centro Universitário Estácio Radial de São Paulo - Estácio UNIRADIAL (ESTÁCIO UNIRADIAL)", sigla: "ESTÁCIO UNIRADIAL", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "5013": { code: "5013", label: "CENTRO UNIVERSITÁRIO ESTADUAL DA ZONA OESTE (UEZO)", sigla: "UEZO", category: "Centro Universitário", oa: "Pública", ci: "-", igc: "4" },
	  "3529": { code: "3529", label: "CENTRO UNIVERSITÁRIO EURÍPEDES DE MARÍLIA (UNIVEM)", sigla: "UNIVEM", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "4" },
	  "1113": { code: "1113", label: "CENTRO UNIVERSITÁRIO EURO-AMERICANO (UNIEURO)", sigla: "UNIEURO", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "4" },
	  "724": { code: "724", label: "Centro Universitário FACEX (UNIFACEX)", sigla: "UNIFACEX", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "3840": { code: "3840", label: "CENTRO UNIVERSITÁRIO FACVEST (FACVEST)", sigla: "FACVEST", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "4" },
	  "244": { code: "244", label: "CENTRO UNIVERSITÁRIO FIEO (UNIFIEO)", sigla: "UNIFIEO", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "430": { code: "430", label: "CENTRO UNIVERSITÁRIO FILADÉLFIA (UNIFIL)", sigla: "UNIFIL", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "4030": { code: "4030", label: "CENTRO UNIVERSITÁRIO FLUMINENSE (UNIFLU)", sigla: "UNIFLU", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "426": { code: "426", label: "CENTRO UNIVERSITÁRIO FRANCISCANO (UNIFRA)", sigla: "UNIFRA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1836": { code: "1836", label: "CENTRO UNIVERSITÁRIO FUNDAÇÃO DE ENSINO OCTÁVIO BASTOS - FEOB (UNIFEOB)", sigla: "UNIFEOB", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "2183": { code: "2183", label: "CENTRO UNIVERSITÁRIO FUNDAÇÃO SANTO ANDRÉ (CUFSA)", sigla: "CUFSA", category: "Centro Universitário", oa: "Privada", ci: "-", igc: "3" },
	  "1542": { code: "1542", label: "CENTRO UNIVERSITÁRIO GERALDO DI BIASE (UGB)", sigla: "UGB", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "712": { code: "712", label: "CENTRO UNIVERSITÁRIO HERMÍNIO DA SILVEIRA (UNI IBMR)", sigla: "UNI IBMR", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1043": { code: "1043", label: "CENTRO UNIVERSITÁRIO HERMINIO OMETTO (UNIARARAS)", sigla: "UNIARARAS", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "1430": { code: "1430", label: "CENTRO UNIVERSITÁRIO INGÁ", sigla: "CUINGA", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "4" },
	  "1491": { code: "1491", label: "CENTRO UNIVERSITÁRIO INTERNACIONAL (UNINTER)", sigla: "UNINTER", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "206": { code: "206", label: "CENTRO UNIVERSITÁRIO ÍTALO-BRASILEIRO (UNIÍTALO)", sigla: "UNIÍTALO", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1185": { code: "1185", label: "CENTRO UNIVERSITÁRIO JORGE AMADO (UNIJORGE)", sigla: "UNIJORGE", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "641": { code: "641", label: "CENTRO UNIVERSITÁRIO LA SALLE (UNILASALLE)", sigla: "UNILASALLE", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1736": { code: "1736", label: "CENTRO UNIVERSITÁRIO LA SALLE DO RIO DE JANEIRO (UNILASALLE/RJ)", sigla: "UNILASALLE/RJ", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1472": { code: "1472", label: "CENTRO UNIVERSITÁRIO LEONARDO DA VINCI (UNIASSELVI)", sigla: "UNIASSELVI", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "226": { code: "226", label: "CENTRO UNIVERSITÁRIO LUSÍADA (UNILUS)", sigla: "UNILUS", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "450": { code: "450", label: "CENTRO UNIVERSITÁRIO LUTERANO DE JI-PARANÁ (CEULJI/ULBRA)", sigla: "CEULJI/ULBRA", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "452": { code: "452", label: "CENTRO UNIVERSITÁRIO LUTERANO DE MANAUS (CEULM/ULBRA)", sigla: "CEULM/ULBRA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "453": { code: "453", label: "CENTRO UNIVERSITÁRIO LUTERANO DE PALMAS (CEULP)", sigla: "CEULP", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "451": { code: "451", label: "CENTRO UNIVERSITÁRIO LUTERANO DE SANTARÉM (CEULS)", sigla: "CEULS", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "2835": { code: "2835", label: "CENTRO UNIVERSITÁRIO MAURÍCIO DE NASSAU (UNINASSAU)", sigla: "UNINASSAU", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "4010": { code: "4010", label: "CENTRO UNIVERSITÁRIO METODISTA (IPA)", sigla: "IPA", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "610": { code: "610", label: "CENTRO UNIVERSITÁRIO METODISTA BENNETT (BENNETT)", sigla: "BENNETT", category: "Centro Universitário", oa: "Privada", ci: "5", igc: "3" },
	  "216": { code: "216", label: "CENTRO UNIVERSITÁRIO METODISTA IZABELA HENDRIX (CEUNIH)", sigla: "CEUNIH", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "483": { code: "483", label: "CENTRO UNIVERSITÁRIO METROPOLITANO DE SÃO PAULO (UNIMESP)", sigla: "UNIMESP", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "516": { code: "516", label: "CENTRO UNIVERSITÁRIO MOACYR SREDER BASTOS (UNIMSB)", sigla: "UNIMSB", category: "Centro Universitário", oa: "Privada", ci: "-", igc: "3" },
	  "1187": { code: "1187", label: "CENTRO UNIVERSITÁRIO MÓDULO (MÓDULO)", sigla: "MÓDULO", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "502": { code: "502", label: "CENTRO UNIVERSITÁRIO MONTE SERRAT (UNIMONTE)", sigla: "UNIMONTE", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "207": { code: "207", label: "CENTRO UNIVERSITÁRIO MOURA LACERDA (CUML)", sigla: "CUML", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "60": { code: "60", label: "CENTRO UNIVERSITÁRIO MUNICIPAL DE FRANCA (UNI-FACEF)", sigla: "UNI-FACEF", category: "Centro Universitário", oa: "Pública", ci: "-", igc: "3" },
	  "4756": { code: "4756", label: "CENTRO UNIVERSITÁRIO MUNICIPAL DE SÃO JOSÉ (USJ)", sigla: "USJ", category: "Centro Universitário", oa: "Pública", ci: "-", igc: "3" },
	  "343": { code: "343", label: "CENTRO UNIVERSITÁRIO NEWTON PAIVA (NEWTON PAIVA)", sigla: "NEWTON PAIVA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1149": { code: "1149", label: "CENTRO UNIVERSITÁRIO NOSSA SENHORA DO PATROCÍNIO (CEUNSP)", sigla: "CEUNSP", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "4017": { code: "4017", label: "CENTRO UNIVERSITÁRIO PADRE ANCHIETA (UNIANCHIETA)", sigla: "UNIANCHIETA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "80": { code: "80", label: "CENTRO UNIVERSITÁRIO PARA O DESENVOLVIMENTO DO ALTO VALE DO ITAJAÍ (UNIDAVI)", sigla: "UNIDAVI", category: "Centro Universitário", oa: "Privada", ci: "-", igc: "4" },
	  "360": { code: "360", label: "CENTRO UNIVERSITÁRIO PAULISTANO (UNIPAULISTANA)", sigla: "UNIPAULISTANA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "2" },
	  "1446": { code: "1446", label: "CENTRO UNIVERSITÁRIO PLANALTO DO DISTRITO FEDERAL - UNIPLAN (UNIPLAN)", sigla: "UNIPLAN", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1538": { code: "1538", label: "CENTRO UNIVERSITARIO PROJEÇÃO (FAPRO)", sigla: "FAPRO", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "448": { code: "448", label: "CENTRO UNIVERSITÁRIO RITTER DOS REIS (UNIRITTER)", sigla: "UNIRITTER", category: "Centro Universitário", oa: "Privada", ci: "5", igc: "4" },
	  "1032": { code: "1032", label: "CENTRO UNIVERSITÁRIO SALESIANO DE SÃO PAULO (UNISAL)", sigla: "UNISAL", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "456": { code: "456", label: "CENTRO UNIVERSITÁRIO SANT´ANNA (UNISANT'ANNA)", sigla: "UNISANT'ANNA", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "739": { code: "739", label: "CENTRO UNIVERSITÁRIO SÃO CAMILO - ESPÍRITO SANTO (SÃO CAMILO-ES)", sigla: "SÃO CAMILO-ES", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "737": { code: "737", label: "CENTRO UNIVERSITÁRIO SÃO CAMILO (SAO CAMILO)", sigla: "SAO CAMILO", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "5671": { code: "5671", label: "CENTRO UNIVERSITÁRIO SÃO JOSÉ DE ITAPERUNA", sigla: "CUSJDI", category: "Centro Universitário", oa: "Privada", ci: "-", igc: "3" },
	  "1414": { code: "1414", label: "CENTRO UNIVERSITÁRIO SÃO LUCAS (FSL)", sigla: "FSL", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "3985": { code: "3985", label: "CENTRO UNIVERSITÁRIO SENAC (SENACSP)", sigla: "SENACSP", category: "Centro Universitário", oa: "Privada", ci: "5", igc: "3" },
	  "480": { code: "480", label: "CENTRO UNIVERSITÁRIO SERRA DOS ÓRGÃOS (UNIFESO)", sigla: "UNIFESO", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "1351": { code: "1351", label: "CENTRO UNIVERSITÁRIO SOCIESC", sigla: "CUSOCIESC", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "2409": { code: "2409", label: "CENTRO UNIVERSITÁRIO TABOSA DE ALMEIDA (ASCES-UNITA)", sigla: "ASCES-UNITA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "738": { code: "738", label: "CENTRO UNIVERSITÁRIO TERESA D'ÁVILA (FATEA)", sigla: "FATEA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "4530": { code: "4530", label: "CENTRO UNIVERSITÁRIO TIRADENTES (FITS)", sigla: "FITS", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "1418": { code: "1418", label: "CENTRO UNIVERSITÁRIO TOLEDO (UNITOLEDO)", sigla: "UNITOLEDO", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "3" },
	  "344": { code: "344", label: "CENTRO UNIVERSITÁRIO UNA (UNA)", sigla: "UNA", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "2774": { code: "2774", label: "Centro Universitário UNIFAFIBE (FAFIBE)", sigla: "FAFIBE", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "3333": { code: "3333", label: "CENTRO UNIVERSITÁRIO UNIFTEC", sigla: "UNIFTEC", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "750": { code: "750", label: "CENTRO UNIVERSITÁRIO UNIRG (UNIRG)", sigla: "UNIRG", category: "Centro Universitário", oa: "Pública", ci: "-", igc: "2" },
	  "1041": { code: "1041", label: "CENTRO UNIVERSITÁRIO UNIVATES (UNIVATES)", sigla: "UNIVATES", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "4" },
	  "3042": { code: "3042", label: "CHRISTUS FACULDADE DO PIAUÍ (CHRISFAPI)", sigla: "CHRISFAPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18065": { code: "18065", label: "CISNE - FACULDADE DE QUIXADÁ (CFQ)", sigla: "CFQ", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "18067": { code: "18067", label: "CISNE - Faculdade Tecnológica de Quixadá (CFTQ)", sigla: "CFTQ", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1854": { code: "1854", label: "CLARETIANO - FACULDADE - CLARETIANORC (CLARETIANORC)", sigla: "CLARETIANORC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "158": { code: "158", label: "CONSERVATÓRIO BRASILEIRO DE MÚSICA - CENTRO UNIVERSITÁRIO (CBM/CEU)", sigla: "CBM/CEU", category: "Centro Universitário", oa: "Privada", ci: "3", igc: "2" },
	  "281": { code: "281", label: "CONSERVATÓRIO DRAMÁTICO MUSICAL SÃO PAULO (CDMSP)", sigla: "CDMSP", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "534": { code: "534", label: "ESCOLA BAHIANA DE MEDICINA E SAÚDE PÚBLICA (EBMSP)", sigla: "EBMSP", category: "Faculdade", oa: "Privada", ci: "5", igc: "3" },
	  "1851": { code: "1851", label: "ESCOLA BRASILEIRA DE ADMINISTRAÇÃO PÚBLICA E DE EMPRESAS (EBAPE)", sigla: "EBAPE", category: "Faculdade", oa: "Privada", ci: "5", igc: "5" },
	  "2591": { code: "2591", label: "ESCOLA BRASILEIRA DE ECONOMIA E FINANÇAS (EBEF)", sigla: "EBEF", category: "Faculdade", oa: "Privada", ci: "3", igc: "5" },
	  "18035": { code: "18035", label: "Escola Brasileira de Medicina Chinesa (EBRAMEC)", sigla: "EBRAMEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1828": { code: "1828", label: "ESCOLA DA CIDADE - FACULDADE DE ARQUITETURA E URBANISMO (ESCOLA DA CIDADE)", sigla: "ESCOLA DA CIDADE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13758": { code: "13758", label: "ESCOLA DE ADMINISTRAÇÃO DE BRASÍLIA (EAB)", sigla: "EAB", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "151": { code: "151", label: "ESCOLA DE ADMINISTRAÇÃO DE EMPRESAS DE SÃO PAULO (FGV-EAESP)", sigla: "FGV-EAESP", category: "Faculdade", oa: "Privada", ci: "5", igc: "4" },
	  "12247": { code: "12247", label: "ESCOLA DE DIREITO DE BRASÍLIA (EDB)", sigla: "EDB", category: "Faculdade", oa: "Privada", ci: "5", igc: "SC" },
	  "2128": { code: "2128", label: "Escola de Direito de São Paulo - FGV DIREITO SP (FGV DIREITO SP)", sigla: "FGV DIREITO SP", category: "Faculdade", oa: "Privada", ci: "5", igc: "4" },
	  "2126": { code: "2126", label: "ESCOLA DE DIREITO DO RIO DE JANEIRO (DIREITO RIO)", sigla: "DIREITO RIO", category: "Faculdade", oa: "Privada", ci: "5", igc: "4" },
	  "2129": { code: "2129", label: "ESCOLA DE ECONOMIA DE SÃO PAULO (EESP)", sigla: "EESP", category: "Faculdade", oa: "Privada", ci: "5", igc: "5" },
	  "722": { code: "722", label: "ESCOLA DE EDUCAÇÃO FÍSICA DE ASSIS (EEFA)", sigla: "EEFA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "21206": { code: "21206", label: "Escola de Educação Física do Exército (EsEFEx)", sigla: "EsEFEx", category: "Centro Universitário", oa: "Pública", ci: "-", igc: "-" },
	  "194": { code: "194", label: "ESCOLA DE ENFERMAGEM DA FUNDAÇÃO TÉCNICO EDUCACIONAL SOUZA MARQUES (EEFTESM)", sigla: "EEFTESM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "510": { code: "510", label: "ESCOLA DE ENFERMAGEM WENCESLAU BRAZ (EEWB)", sigla: "EEWB", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "399": { code: "399", label: "ESCOLA DE ENGENHARIA DE AGRIMENSURA (EEA)", sigla: "EEA", category: "Faculdade", oa: "Privada", ci: "2", igc: "1" },
	  "67": { code: "67", label: "ESCOLA DE ENGENHARIA DE PIRACICABA (EEP/FUMEP)", sigla: "EEP/FUMEP", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "345": { code: "345", label: "ESCOLA DE ENGENHARIA KENNEDY (EEK)", sigla: "EEK", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1908": { code: "1908", label: "ESCOLA DE ENSINO SUPERIOR FABRA (FABRA)", sigla: "FABRA", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1837": { code: "1837", label: "Escola de Estudos Superiores de Viçosa (ESUV)", sigla: "ESUV", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "890": { code: "890", label: "ESCOLA DE GOVERNO PROFESSOR PAULO NEVES DE CARVALHO (EG)", sigla: "EG", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "13695": { code: "13695", label: "ESCOLA DE MATEMÁTICA APLICADA (EMAp-FGV)", sigla: "EMAp-FGV", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "190": { code: "190", label: "ESCOLA DE MEDICINA SOUZA MARQUES DA FUNDAÇÃO TÉCNICO-EDUCACIONAL SOUZA MARQUES (EMSM)", sigla: "EMSM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "373": { code: "373", label: "ESCOLA DE SOCIOLOGIA E POLÍTICA DE SÃO PAULO (ESP)", sigla: "ESP", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "13845": { code: "13845", label: "Escola DIEESE de Ciências do Trabalho (DIEESE)", sigla: "DIEESE", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4721": { code: "4721", label: "ESCOLA DOMINICANA DE TEOLOGIA", sigla: "EDOMINICANATEO", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "26": { code: "26", label: "ESCOLA NACIONAL DE CIÊNCIAS ESTATÍSTICAS (ENCE)", sigla: "ENCE", category: "Faculdade", oa: "Pública", ci: "4", igc: "4" },
	  "13812": { code: "13812", label: "ESCOLA SUPERIOR ABERTA DO BRASIL (ESAB)", sigla: "ESAB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3607": { code: "3607", label: "ESCOLA SUPERIOR ASSOCIADA DE GOIÂNIA (ESUP)", sigla: "ESUP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1436": { code: "1436", label: "ESCOLA SUPERIOR BATISTA DO AMAZONAS (ESBAM)", sigla: "ESBAM", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2745": { code: "2745", label: "ESCOLA SUPERIOR DA AMAZÔNIA (ESAMAZ)", sigla: "ESAMAZ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2726": { code: "2726", label: "ESCOLA SUPERIOR DE ADMINISTRAÇÃO DE EMPRESAS (INEA)", sigla: "INEA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1723": { code: "1723", label: "ESCOLA SUPERIOR DE ADMINISTRAÇÃO E GESTÃO STRONG", sigla: "ESAGS", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "4943": { code: "4943", label: "ESCOLA SUPERIOR DE ADMINISTRAÇÃO E GESTÃO STRONG DA BAIXADA SANTISTA", sigla: "ESAGSBS", category: "Faculdade", oa: "Privada", ci: "4", igc: "5" },
	  "4210": { code: "4210", label: "ESCOLA SUPERIOR DE ADMINISTRAÇÃO, MARKETING E COMUNICAÇÃO DO MORUMBI", sigla: "ESAMCMORUMBI", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4829": { code: "4829", label: "ESCOLA SUPERIOR DE ARTES CÉLIA HELENA", sigla: "ESACH", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "12625": { code: "12625", label: "ESCOLA SUPERIOR DE AVIAÇÃO CIVIL (ESAC)", sigla: "ESAC", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "501": { code: "501", label: "ESCOLA SUPERIOR DE CIÊNCIAS DA SANTA CASA DE MISERICÓRDIA DE VITÓRIA (EMESCAM)", sigla: "EMESCAM", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3223": { code: "3223", label: "ESCOLA SUPERIOR DE CIÊNCIAS DA SAÚDE (ESCS)", sigla: "ESCS", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "3614": { code: "3614", label: "ESCOLA SUPERIOR DE CIÊNCIAS SOCIAIS (FGV)", sigla: "FGV", category: "Faculdade", oa: "Privada", ci: "4", igc: "5" },
	  "1694": { code: "1694", label: "ESCOLA SUPERIOR DE CRICIÚMA - ESUCRI (ESUCRI)", sigla: "ESUCRI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "608": { code: "608", label: "ESCOLA SUPERIOR DE CRUZEIRO PREFEITO HAMILTON VIEIRA MENDES (ESEFIC)", sigla: "ESEFIC", category: "Faculdade", oa: "Pública", ci: "-", igc: "SC" },
	  "2319": { code: "2319", label: "ESCOLA SUPERIOR DE EDUCAÇÃO CORPORATIVA (ESEC)", sigla: "ESEC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "94": { code: "94", label: "ESCOLA SUPERIOR DE EDUCAÇÃO FÍSICA DE JUNDIAÍ (ESEFJ)", sigla: "ESEFJ", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "4104": { code: "4104", label: "ESCOLA SUPERIOR DE ENGENHARIA E GESTÃO DE SÃO PAULO - ESEG (ESEG)", sigla: "ESEG", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1714": { code: "1714", label: "ESCOLA SUPERIOR DE GESTÃO COMERCIAL E MARKETING (ESIC)", sigla: "ESIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1296": { code: "1296", label: "ESCOLA SUPERIOR DE MARKETING (ESM)", sigla: "ESM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "636": { code: "636", label: "ESCOLA SUPERIOR DE PROPAGANDA E MARKETING (ESPM)", sigla: "ESPM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1327": { code: "1327", label: "ESCOLA SUPERIOR DE PROPAGANDA E MARKETING DE PORTO ALEGRE (ESPM - POA)", sigla: "ESPM - POA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "944": { code: "944", label: "ESCOLA SUPERIOR DE PROPAGANDA E MARKETING DO RIO DE JANEIRO (ESPM)", sigla: "ESPM", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "408": { code: "408", label: "ESCOLA SUPERIOR DE RELAÇÕES PÚBLICAS (ESURP)", sigla: "ESURP", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "4858": { code: "4858", label: "ESCOLA SUPERIOR DE SAÚDE DE ARCOVERDE (ESSA)", sigla: "ESSA", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "741": { code: "741", label: "ESCOLA SUPERIOR DE SECRETARIADO DE PERNAMBUCO (ESUSPE)", sigla: "ESUSPE", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1692": { code: "1692", label: "ESCOLA SUPERIOR DE TECNOLOGIA E EDUCAÇÃO DE PORTO FERREIRA (ESPF)", sigla: "ESPF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1437": { code: "1437", label: "ESCOLA SUPERIOR DE TECNOLOGIA E EDUCAÇÃO DE RIO CLARO (ESRC)", sigla: "ESRC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2287": { code: "2287", label: "ESCOLA SUPERIOR DE TEOLOGIA E ESPIRITUALIDADE FRANCISCANA (ESTEF)", sigla: "ESTEF", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2849": { code: "2849", label: "ESCOLA SUPERIOR DOM HELDER CÂMARA (ESDHC)", sigla: "ESDHC", category: "Faculdade", oa: "Privada", ci: "5", igc: "4" },
	  "989": { code: "989", label: "ESCOLA SUPERIOR EM MEIO AMBIENTE (ESMA)", sigla: "ESMA", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "2350": { code: "2350", label: "ESCOLA SUPERIOR MADRE CELESTE (ESMAC)", sigla: "ESMAC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3710": { code: "3710", label: "ESCOLA SUPERIOR NACIONAL DE SEGUROS (ESNS)", sigla: "ESNS", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "11289": { code: "11289", label: "ESCOLA SUPERIOR NACIONAL DE SEGUROS DE SÃO PAULO (ESNS-SP)", sigla: "ESNS-SP", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "4442": { code: "4442", label: "ESCOLA SUPERIOR PAULISTA DE ADMINISTRAÇÃO - ESPA (ESPA)", sigla: "ESPA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1157": { code: "1157", label: "ESCOLA SUPERIOR SÃO FRANCISCO DE ASSIS (ESFA)", sigla: "ESFA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2122": { code: "2122", label: "Estácio FASE - Faculdade Estácio de Sergipe (Estácio FASE)", sigla: "Estácio FASE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4566": { code: "4566", label: "ESTÁCIO FATERN - FACULDADE ESTÁCIO DO RIO GRANDE DO NORTE (ESTÁCIO FATERN)", sigla: "ESTÁCIO FATERN", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1058": { code: "1058", label: "Estácio FIB - Centro Universitário Estácio da Bahia (Estácio FIB)", sigla: "Estácio FIB", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "12547": { code: "12547", label: "FACITEN - FACULDADE DE CIÊNCIAS E TECNOLOGIAS DE NATAL (FACITEN)", sigla: "FACITEN", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "15518": { code: "15518", label: "Facudade de Morrinhos (FAM)", sigla: "FAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2466": { code: "2466", label: "FACUDADE IEDUCARE - FIED (FIED)", sigla: "FIED", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15833": { code: "15833", label: "FACULDADE 2001", sigla: "2001", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "16948": { code: "16948", label: "Faculdade 28 de Agosto de Ensino e Pesquisa (28 de Agosto)", sigla: "28 de Agosto", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4239": { code: "4239", label: "FACULDADE AÇÃO (FCTVALE)", sigla: "FCTVALE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1401": { code: "1401", label: "FACULDADE ADELMAR ROSADO (FAR)", sigla: "FAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13300": { code: "13300", label: "FACULDADE ADJETIVO CETEP (ADJETIVO-CETEP)", sigla: "ADJETIVO-CETEP", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "4531": { code: "4531", label: "FACULDADE ADVENTISTA DA BAHIA (FADBA)", sigla: "FADBA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5593": { code: "5593", label: "FACULDADE ADVENTISTA DE HORTOLÂNDIA (FAH)", sigla: "FAH", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1613": { code: "1613", label: "FACULDADE ADVENTISTA PARANAENSE (IAP)", sigla: "IAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1072": { code: "1072", label: "FACULDADE AFIRMATIVO (FAFI)", sigla: "FAFI", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "17405": { code: "17405", label: "FACULDADE AFONSO MAFRENSE (FAM)", sigla: "FAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "19357": { code: "19357", label: "Faculdade Afonso Schmidt (FAS)", sigla: "FAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "18735": { code: "18735", label: "Faculdade AGES de Lagarto (Faculdade AGES)", sigla: "Faculdade AGES", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "18616": { code: "18616", label: "FACULDADE ÁGORA - FAG (FAG)", sigla: "FAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1779": { code: "1779", label: "FACULDADE AIEC (AIEC / FAAB)", sigla: "AIEC / FAAB", category: "Faculdade", oa: "Privada", ci: "-", igc: "4" },
	  "908": { code: "908", label: "FACULDADE ALAGOANA DE ADMINISTRAÇÃO (FAA)", sigla: "FAA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1966": { code: "1966", label: "FACULDADE ALBERT EINSTEIN (FALBE)", sigla: "FALBE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1068": { code: "1068", label: "FACULDADE ALDETE MARIA ALVES (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "17394": { code: "17394", label: "Faculdade Alencarina de Sobral (FAL)", sigla: "FAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3428": { code: "3428", label: "FACULDADE ALFA (FA)", sigla: "FA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1463": { code: "1463", label: "FACULDADE ALFACASTELO (FCGB)", sigla: "FCGB", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1573": { code: "1573", label: "FACULDADE ALFREDO NASSER (FAN)", sigla: "FAN", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3939": { code: "3939", label: "FACULDADE ALIANÇA", sigla: "FALIANCA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4197": { code: "4197", label: "FACULDADE ALIANÇA (FACE)", sigla: "FACE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15452": { code: "15452", label: "FACULDADE ÁLIS DE BOM DESPACHO", sigla: "ALISBDESPACO", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2288": { code: "2288", label: "FACULDADE ALMEIDA RODRIGUES (FAR)", sigla: "FAR", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "1290": { code: "1290", label: "Faculdade Álvares de Azevedo (FAATESP)", sigla: "FAATESP", category: "Faculdade", oa: "Privada", ci: "-", igc: "4" },
	  "1493": { code: "1493", label: "FACULDADE ALVES FARIA (ALFA)", sigla: "ALFA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2463": { code: "2463", label: "FACULDADE ALVES FARIA (ALFA)", sigla: "ALFA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1850": { code: "1850", label: "FACULDADE ALVORADA DE TECNOLOGIA E EDUCAÇÃO DE MARINGÁ (FACULDADE ALVORADA)", sigla: "FACULDADE ALVORADA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2045": { code: "2045", label: "FACULDADE AMADEUS (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17749": { code: "17749", label: "Faculdade América (América)", sigla: "América", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3596": { code: "3596", label: "FACULDADE AMÉRICA LATINA", sigla: "FLATAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "16628": { code: "16628", label: "Faculdade ANASPS (FANASPS)", sigla: "FANASPS", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1900": { code: "1900", label: "FACULDADE ANCHIETA DE ENSINO SUPERIOR DO PARANÁ (FAESP)", sigla: "FAESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3148": { code: "3148", label: "FACULDADE ANCHIETA DO RECIFE (FAR)", sigla: "FAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1616": { code: "1616", label: "FACULDADE ANGEL VIANNA (FAV)", sigla: "FAV", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2488": { code: "2488", label: "FACULDADE ANGLICANA DE ERECHIM (FAE)", sigla: "FAE", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3541": { code: "3541", label: "FACULDADE ANGLICANA DE TAPEJARA (FAT)", sigla: "FAT", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4917": { code: "4917", label: "FACULDADE ANGLO", sigla: "FANGLO", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "2077": { code: "2077", label: "FACULDADE ANGLO-AMERICANO (FAA)", sigla: "FAA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "11604": { code: "11604", label: "FACULDADE ANGLO-AMERICANO DE CHAPECÓ (FAACH)", sigla: "FAACH", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4631": { code: "4631", label: "FACULDADE ANGLO-AMERICANO DE JOÃO PESSOA (FAAJP)", sigla: "FAAJP", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "5550": { code: "5550", label: "FACULDADE ANHANGUERA DE ANÁPOLIS (FAAA)", sigla: "FAAA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5451": { code: "5451", label: "FACULDADE ANHANGÜERA DE BAURU", sigla: "ANHANGUERABAUR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1173": { code: "1173", label: "FACULDADE ANHANGUERA DE BRASÍLIA (FAB)", sigla: "FAB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4826": { code: "4826", label: "FACULDADE ANHANGÜERA DE CAMPINAS", sigla: "ANHANGUERACPS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4616": { code: "4616", label: "FACULDADE ANHANGUERA DE CAXIAS DO SUL (FACS)", sigla: "FACS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5290": { code: "5290", label: "FACULDADE ANHANGUERA DE CIÊNCIAS E TECNOLOGIA DE BRASÍLIA", sigla: "ANHANGUERABRASILIA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "5303": { code: "5303", label: "FACULDADE ANHANGÜERA DE DOURADOS (FAD)", sigla: "FAD", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5216": { code: "5216", label: "FACULDADE ANHANGUERA DE EDUCAÇÃO, CIÊNCIAS E TECNOLOGIA DE SOROCABA (FAECTS)", sigla: "FAECTS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3603": { code: "3603", label: "FACULDADE ANHANGUERA DE GUARULHOS", sigla: "ANHANGUERAGUAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3937": { code: "3937", label: "Faculdade Anhanguera de Indaiatuba", sigla: "ANHANGUERAINDAIA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4878": { code: "4878", label: "FACULDADE ANHANGUERA DE ITAPECERICA DA SERRA", sigla: "ANHANGUERAITAPECIRICA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "5555": { code: "5555", label: "FACULDADE ANHANGUERA DE JACAREÍ", sigla: "ANHANGUERAJAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "5668": { code: "5668", label: "FACULDADE ANHANGUERA DE JOINVILLE", sigla: "ANHANGUERAJOIN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1412": { code: "1412", label: "FACULDADE ANHANGUERA DE JUNDIAÍ", sigla: "ANHANGUERAJUN", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3936": { code: "3936", label: "FACULDADE ANHANGUERA DE LIMEIRA", sigla: "ANHANGUERALIMEIRA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2355": { code: "2355", label: "FACULDADE ANHANGUERA DE MATÃO", sigla: "ANHANGUERAMATAO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1710": { code: "1710", label: "FACULDADE ANHANGUERA DE NEGÓCIOS E TECNOLOGIAS DA INFORMAÇÃO (FACNET)", sigla: "FACNET", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1345": { code: "1345", label: "FACULDADE ANHANGUERA DE OSASCO (FIZO)", sigla: "FIZO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1830": { code: "1830", label: "FACULDADE ANHANGUERA DE PASSO FUNDO", sigla: "ANHANGUERAPS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2191": { code: "2191", label: "FACULDADE ANHANGUERA DE PELOTAS", sigla: "ANHANGUERAPT", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "12791": { code: "12791", label: "FACULDADE ANHANGUERA DE PINDAMONHANGABA", sigla: "ANHANGUERAPINDA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4656": { code: "4656", label: "FACULDADE ANHANGÜERA DE PIRACICABA", sigla: "ANHANGUERAPIRA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13620": { code: "13620", label: "FACULDADE ANHANGUERA DE PORTO ALEGRE (FAPA)", sigla: "FAPA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "5288": { code: "5288", label: "FACULDADE ANHANGÜERA DE RIBEIRÃO PRETO", sigla: "ANHANGUERARBT", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "4013": { code: "4013", label: "FACULDADE ANHANGUERA DE RIO CLARO", sigla: "ANHANGUERARIOC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "781": { code: "781", label: "FACULDADE ANHANGUERA DE RONDONÓPOLIS (FAR)", sigla: "FAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4138": { code: "4138", label: "FACULDADE ANHANGUERA DE SANTA BÁRBARA", sigla: "ANHANGUERASTB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1478": { code: "1478", label: "FACULDADE ANHANGUERA DE SÃO BERNARDO (FASBC)", sigla: "FASBC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1784": { code: "1784", label: "Faculdade Anhanguera de São Caetano (Fasc)", sigla: "Fasc", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4652": { code: "4652", label: "FACULDADE ANHANGÜERA DE SÃO JOSÉ", sigla: "ANHANGUERASAOJ", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1456": { code: "1456", label: "FACULDADE ANHANGUERA DE SERTÃOZINHO (FASERT)", sigla: "FASERT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4655": { code: "4655", label: "FACULDADE ANHANGÜERA DE SOROCABA (FSO)", sigla: "FSO", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "11308": { code: "11308", label: "FACULDADE ANHANGUERA DE SUMARÉ (FACSUMARÉ)", sigla: "FACSUMARÉ", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1499": { code: "1499", label: "FACULDADE ANHANGUERA DE TABOÃO DA SERRA (FATS)", sigla: "FATS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1518": { code: "1518", label: "FACULDADE ANHANGUERA DE TAGUATINGA", sigla: "ANHANGUERATAGUATING", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4141": { code: "4141", label: "FACULDADE ANHANGUERA DE TAUBATÉ", sigla: "ANHANGUERATAUBATE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1776": { code: "1776", label: "Faculdade Anhanguera de Tecnologia de Jundiaí (FATJ)", sigla: "FATJ", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3612": { code: "3612", label: "FACULDADE ANHANGUERA DE VALINHOS", sigla: "ANHANGUERAVALINHOS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2756": { code: "2756", label: "FACULDADE ANHANGUERA DE VALPARAÍSO (FAV)", sigla: "FAV", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2194": { code: "2194", label: "FACULDADE ANHANGUERA DO RIO GRANDE", sigla: "ANHANGUERARG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4495": { code: "4495", label: "FACULDADE ANHANGUERA JARAGUÁ DO SUL (FATEJA)", sigla: "FATEJA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1502": { code: "1502", label: "FACULDADE ANHANGUERA PITÁGORAS DE JUNDIAÍ", sigla: "ANHANGUERAJUN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "11750": { code: "11750", label: "FACULDADE ANHANGUERA PITÁGORAS VOTORANTIM (-)", sigla: "ANHANGUERAVOT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1643": { code: "1643", label: "FACULDADE ANÍSIO TEIXEIRA DE FEIRA DE SANTANA (FAT)", sigla: "FAT", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4810": { code: "4810", label: "FACULDADE ANTÔNIO MENEGHETTI (AMF)", sigla: "AMF", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "17291": { code: "17291", label: "FACULDADE ANTONIO PROPICIO AGUIAR FRANCO (FAPAF)", sigla: "FAPAF", category: "Faculdade", oa: "Pública", ci: "1", igc: "-" },
	  "4588": { code: "4588", label: "FACULDADE APOGEU (APOGEU)", sigla: "APOGEU", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2499": { code: "2499", label: "FACULDADE APOIO (FA)", sigla: "FA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1663": { code: "1663", label: "FACULDADE ARAGUAIA (FARA)", sigla: "FARA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "17403": { code: "17403", label: "FACULDADE ARI DE SÁ (FAS)", sigla: "FAS", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "3921": { code: "3921", label: "FACULDADE ARNALDO HORÁCIO FERREIRA (FAAHF)", sigla: "FAAHF", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "832": { code: "832", label: "FACULDADE ARQUIDIOCESANA DE CURVELO (FAC)", sigla: "FAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2475": { code: "2475", label: "FACULDADE ARQUIDIOCESANA DE MARIANA (FAM)", sigla: "FAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1080": { code: "1080", label: "FACULDADE ARTHUR SÁ EARP NETO (FASE)", sigla: "FASE", category: "Faculdade", oa: "Privada", ci: "5", igc: "4" },
	  "2513": { code: "2513", label: "FACULDADE ARTHUR THOMAS (CESA)", sigla: "CESA", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "1670": { code: "1670", label: "FACULDADE ASA DE BRUMADINHO (IECEMB - FAB)", sigla: "IECEMB - FAB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1756": { code: "1756", label: "FACULDADE ASSOCIADA BRASIL (FAB)", sigla: "FAB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1614": { code: "1614", label: "FACULDADE ASTORGA (FAAST)", sigla: "FAAST", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2579": { code: "2579", label: "FACULDADE ATENAS", sigla: "FAATENAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2497": { code: "2497", label: "FACULDADE ATENEU (FATE)", sigla: "FATE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1877": { code: "1877", label: "FACULDADE ATUAL (FAAT)", sigla: "FAAT", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4950": { code: "4950", label: "FACULDADE AUM", sigla: "FAUM", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "1752": { code: "1752", label: "FACULDADE AUTÔNOMA DE DIREITO (FADISP)", sigla: "FADISP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1988": { code: "1988", label: "FACULDADE AVANTIS (AVANTIS)", sigla: "AVANTIS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "797": { code: "797", label: "Faculdade AVEC de Vilhena (AVEC)", sigla: "AVEC", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1890": { code: "1890", label: "FACULDADE ÁVILA (FAC)", sigla: "FAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3847": { code: "3847", label: "FACULDADE BAIANA DE DIREITO E GESTÃO", sigla: "FABDG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2891": { code: "2891", label: "FACULDADE BARÃO DE PIRATININGA (AES)", sigla: "AES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2132": { code: "2132", label: "FACULDADE BARÃO DO RIO BRANCO (FAB)", sigla: "FAB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1366": { code: "1366", label: "FACULDADE BARDDAL (FB-SI)", sigla: "FB-SI", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1686": { code: "1686", label: "FACULDADE BARDDAL DE ARTES APLICADAS (FB-AA)", sigla: "FB-AA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1685": { code: "1685", label: "FACULDADE BARDDAL DE CIÊNCIAS CONTÁBEIS (FB-CC)", sigla: "FB-CC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "2971": { code: "2971", label: "FACULDADE BARRETOS (FB)", sigla: "FB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1302": { code: "1302", label: "FACULDADE BATISTA BRASILEIRA (FBB)", sigla: "FBB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "19284": { code: "19284", label: "FACULDADE BATISTA BRASILEIRA DO RECÔNCAVO (FBBR)", sigla: "FBBR", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1346": { code: "1346", label: "FACULDADE BATISTA DE MINAS GERAIS (FBMG)", sigla: "FBMG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15562": { code: "15562", label: "Faculdade Batista do Cariri (FBC)", sigla: "FBC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4066": { code: "4066", label: "FACULDADE BATISTA DO ESTADO DO RIO DE JANEIRO - FABERJ (FABERJ )", sigla: "FABERJ ", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1429": { code: "1429", label: "FACULDADE BATISTA DO RIO DE JANEIRO (FABAT)", sigla: "FABAT", category: "Faculdade", oa: "Privada", ci: "-", igc: "4" },
	  "4902": { code: "4902", label: "FACULDADE BATISTA PIONEIRA", sigla: "FABATIPIONEIRA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1432": { code: "1432", label: "FACULDADE BERTIOGA (FABE)", sigla: "FABE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "710": { code: "710", label: "FACULDADE BÉTHENCOURT DA SILVA (FABES)", sigla: "FABES", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14090": { code: "14090", label: "FACULDADE BETIM (FABE)", sigla: "FABE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1263": { code: "1263", label: "FACULDADE BEZERRA DE ARAÚJO (FABA)", sigla: "FABA", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "4771": { code: "4771", label: "FACULDADE BI CAMPINAS", sigla: "FABICPS", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4772": { code: "4772", label: "FACULDADE BI SOCIAL QUARESMA", sigla: "FABIQUARESMA", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "15922": { code: "15922", label: "Faculdade Bíblica das Assembléias de Deus", sigla: "FBASSEMBLEIA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1933": { code: "1933", label: "FACULDADE BIRIGUI (FABI)", sigla: "FABI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1255": { code: "1255", label: "FACULDADE BOA VIAGEM (FBV)", sigla: "FBV", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3397": { code: "3397", label: "FACULDADE BOAS NOVAS DE CIÊNCIAS TEOLÓGICAS, SOCIAIS E BIOTECNOLÓGICAS (FBNCTSB)", sigla: "FBNCTSB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1344": { code: "1344", label: "FACULDADE BORGES DE MENDONÇA (FBM)", sigla: "FBM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3877": { code: "3877", label: "FACULDADE BRASIL CENTRAL (FBC)", sigla: "FBC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "12928": { code: "12928", label: "FACULDADE BRASIL CENTRAL (FBCBrasil)", sigla: "FBCBrasil", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "18093": { code: "18093", label: "Faculdade Brasil Inteligente", sigla: "FABRASILI", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2917": { code: "2917", label: "FACULDADE BRASIL NORTE (FABRAN)", sigla: "FABRAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1244": { code: "1244", label: "FACULDADE BRASILEIRA (MULTIVIX VITÓRIA)", sigla: "MULTIVIX VITÓRIA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "3866": { code: "3866", label: "FACULDADE BRASILEIRA DE EDUCAÇÃO E CULTURA (FABEC BRASIL)", sigla: "FABEC BRASIL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15280": { code: "15280", label: "Faculdade Brasileira de Ensino, Pesquisa e Extensão (FABEX)", sigla: "FABEX", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "12601": { code: "12601", label: "FACULDADE BRASILEIRA DE ESTUDOS AVANÇADOS (FABEA)", sigla: "FABEA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1968": { code: "1968", label: "FACULDADE BRASILEIRA DE TECNOLOGIA (FBT)", sigla: "FBT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17896": { code: "17896", label: "FACULDADE BRASILEIRA DE TECNOLOGIA (FBT)", sigla: "FBT", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17200": { code: "17200", label: "Faculdade Brasileira de Tributação (FBT)", sigla: "FBT", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3749": { code: "3749", label: "FACULDADE BRASÍLIA DE SÃO PAULO (FTBSP)", sigla: "FTBSP", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "12416": { code: "12416", label: "FACULDADE BRASILIENSE DE NEGÓCIOS (FBN)", sigla: "FBN", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "11584": { code: "11584", label: "FACULDADE CAL DE ARTES CÊNICAS (Faculdade Cal)", sigla: "Faculdade Cal", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2124": { code: "2124", label: "FACULDADE CALAFIORI (CALAFIORI)", sigla: "CALAFIORI", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "454": { code: "454", label: "FACULDADE CAMAQÜENSE DE CIÊNCIAS CONTÁBEIS E ADMINISTRATIVAS (FACCCA)", sigla: "FACCCA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1160": { code: "1160", label: "FACULDADE CAMBURY (CAMBURY)", sigla: "CAMBURY", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "2266": { code: "2266", label: "FACULDADE CAMBURY DE FORMOSA (CAMBURY)", sigla: "CAMBURY", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2168": { code: "2168", label: "FACULDADE CAMPO GRANDE (FCG)", sigla: "FCG", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1273": { code: "1273", label: "FACULDADE CAMPO LIMPO PAULISTA (FACCAMP)", sigla: "FACCAMP", category: "Faculdade", oa: "Privada", ci: "5", igc: "3" },
	  "5511": { code: "5511", label: "FACULDADE CAMPO REAL (CAMPO REAL)", sigla: "CAMPO REAL", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1048": { code: "1048", label: "FACULDADE CAMPOS ELÍSEOS (FCE)", sigla: "FCE", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "13527": { code: "13527", label: "FACULDADE CANÇÃO NOVA (FCN)", sigla: "FCN", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1246": { code: "1246", label: "FACULDADE CANDIDO MENDES DE VITÓRIA (FCMV)", sigla: "FCMV", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "2330": { code: "2330", label: "Faculdade Cândido Rondon (FCR)", sigla: "FCR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2398": { code: "2398", label: "FACULDADE CÂNDIDO RONDON DE CAMPO VERDE", sigla: "RONDONCV", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "4136": { code: "4136", label: "FACULDADE CÂNDIDO RONDON DE RONDONÓPOLIS (FCRROO)", sigla: "FCRROO", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "17854": { code: "17854", label: "FACULDADE CAPITAL FEDERAL (FECAF)", sigla: "FECAF", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1918": { code: "1918", label: "FACULDADE CAPIVARI (FUCAP)", sigla: "FUCAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1326": { code: "1326", label: "FACULDADE CAPIXABA DA SERRA (MULTIVIX SERRA)", sigla: "MULTIVIX SERRA", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "19208": { code: "19208", label: "FACULDADE CAPIXABA DE CARIACICA (MULTIVIX CARIAC)", sigla: "MULTIVIX CARIAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1359": { code: "1359", label: "FACULDADE CAPIXABA DE NOVA VENÉCIA (MULTIVIX NOVA VENÉCI)", sigla: "MULTIVIX NOVA VENÉCI", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "13538": { code: "13538", label: "FACULDADE CARAGUÁ", sigla: "FACARAGUA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1100": { code: "1100", label: "FACULDADE CARLOS DRUMMOND DE ANDRADE (FCDA)", sigla: "FCDA", category: "Faculdade", oa: "Privada", ci: "5", igc: "3" },
	  "1373": { code: "1373", label: "FACULDADE CASA BRANCA (FACAB)", sigla: "FACAB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1880": { code: "1880", label: "FACULDADE CASA DO ESTUDANTE (FACE)", sigla: "FACE", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "200": { code: "200", label: "FACULDADE CÁSPER LÍBERO (FCL)", sigla: "FCL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1840": { code: "1840", label: "FACULDADE CASTELO BRANCO (FCB)", sigla: "FCB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1394": { code: "1394", label: "FACULDADE CASTRO ALVES (FCA)", sigla: "FCA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "5520": { code: "5520", label: "FACULDADE CATHEDRAL (FACES)", sigla: "FACES", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "939": { code: "939", label: "FACULDADE CATÓLICA DE ANÁPOLIS (CATÓLICA DE ANÁPOLIS)", sigla: "CATÓLICA DE ANÁPOLIS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17875": { code: "17875", label: "Faculdade Católica de Belém (FACBEL)", sigla: "FACBEL", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "16918": { code: "16918", label: "FACULDADE CATÓLICA DE FEIRA DE SANTANA", sigla: "FCATFRS", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2485": { code: "2485", label: "FACULDADE CATÓLICA DE FORTALEZA (FCF)", sigla: "FCF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3522": { code: "3522", label: "FACULDADE CATÓLICA DE POUSO ALEGRE (FACAPA)", sigla: "FACAPA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4594": { code: "4594", label: "FACULDADE CATÓLICA DE RONDONIA (FCR)", sigla: "FCR", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "14288": { code: "14288", label: "FACULDADE CATÓLICA DE SANTA CATARINA (FACASC)", sigla: "FACASC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15521": { code: "15521", label: "FACULDADE CATÓLICA DE SÃO JOSÉ DOS CAMPOS (CATÓLICA-SJC)", sigla: "CATÓLICA-SJC", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1901": { code: "1901", label: "FACULDADE CATÓLICA DE UBERLÂNDIA (FCU)", sigla: "FCU", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4746": { code: "4746", label: "FACULDADE CATÓLICA DO CARIRI", sigla: "FCCARIRI", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2365": { code: "2365", label: "FACULDADE CATÓLICA DO TOCANTINS (FACTO)", sigla: "FACTO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2741": { code: "2741", label: "FACULDADE CATÓLICA DOM ORIONE (FACDO)", sigla: "FACDO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3625": { code: "3625", label: "FACULDADE CATÓLICA NOSSA SENHORA DAS VITÓRIAS (FCNSV)", sigla: "FCNSV", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15859": { code: "15859", label: "Faculdade Católica Paulista (FACAP)", sigla: "FACAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1375": { code: "1375", label: "FACULDADE CATÓLICA RAINHA DA PAZ DE ARAPUTANGA (FCARP)", sigla: "FCARP", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "2723": { code: "2723", label: "FACULDADE CATÓLICA RECIFE (FCR)", sigla: "FCR", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1494": { code: "1494", label: "FACULDADE CATÓLICA SALESIANA DO ESPÍRITO SANTO", sigla: "SALESIANAES", category: "Centro Universitário", oa: "Privada", ci: "5", igc: "4" },
	  "3644": { code: "3644", label: "FACULDADE CATÓLICA SANTA TERESINHA (FCST)", sigla: "FCST", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1789": { code: "1789", label: "FACULDADE CATUAÍ (ICES)", sigla: "ICES", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2461": { code: "2461", label: "FACULDADE CBES (CBES)", sigla: "CBES", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2804": { code: "2804", label: "FACULDADE CCAA (FAC CCAA)", sigla: "FAC CCAA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4784": { code: "4784", label: "FACULDADE CDL", sigla: "FACDL", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2410": { code: "2410", label: "FACULDADE CEARENSE (FAC)", sigla: "FAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1333": { code: "1333", label: "FACULDADE CECAP DO LAGO NORTE (CECAP)", sigla: "CECAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1084": { code: "1084", label: "FACULDADE CENECISTA DE BENTO GONÇALVES (FACEBG)", sigla: "FACEBG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "625": { code: "625", label: "FACULDADE CENECISTA DE CAPIVARI (FACECAP)", sigla: "FACECAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1156": { code: "1156", label: "FACULDADE CENECISTA DE ITABORAÍ (FACNEC)", sigla: "FACNEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1530": { code: "1530", label: "FACULDADE CENECISTA DE JOINVILLE - FACE (FCJ)", sigla: "FCJ", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2084": { code: "2084", label: "FACULDADE CENECISTA DE NOVA PETRÓPOLIS (FACENP)", sigla: "FACENP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "626": { code: "626", label: "FACULDADE CENECISTA DE OSÓRIO (FACOS)", sigla: "FACOS", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "4729": { code: "4729", label: "FACULDADE CENECISTA DE RIO BONITO (FACERB)", sigla: "FACERB", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2334": { code: "2334", label: "FACULDADE CENECISTA DE RIO DAS OSTRAS (FCRO)", sigla: "FCRO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3001": { code: "3001", label: "FACULDADE CENECISTA DE RONDONÓPOLIS (FACER)", sigla: "FACER", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "4005": { code: "4005", label: "FACULDADE CENECISTA DE SENHOR DO BONFIM (FACESB)", sigla: "FACESB", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "1655": { code: "1655", label: "FACULDADE CENECISTA DE SETE LAGOAS (FCSL)", sigla: "FCSL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3000": { code: "3000", label: "FACULDADE CENECISTA DE SINOP (FACENOP)", sigla: "FACENOP", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "627": { code: "627", label: "FACULDADE CENECISTA DE VARGINHA (FACECA)", sigla: "FACECA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1467": { code: "1467", label: "FACULDADE CENECISTA DE VILA VELHA (FACEVV)", sigla: "FACEVV", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1696": { code: "1696", label: "FACULDADE CENTRAL DE CRISTALINA (FACEC)", sigla: "FACEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4567": { code: "4567", label: "FACULDADE CENTRO MATO-GROSSENSE", sigla: "FCMT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "11007": { code: "11007", label: "FACULDADE CENTRO OESTE (FACEOPAR)", sigla: "FACEOPAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1831": { code: "1831", label: "FACULDADE CENTRO PAULISTA (CESI)", sigla: "CESI", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4681": { code: "4681", label: "FACULDADE CENTRO PAULISTANO", sigla: "FCPAULISTANO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4582": { code: "4582", label: "FACULDADE CENTRO SUL DO PARANÁ (FACSPAR)", sigla: "FACSPAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "18167": { code: "18167", label: "Faculdade CEPEP", sigla: "CEPEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3533": { code: "3533", label: "FACULDADE CERES (FACERES)", sigla: "FACERES", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "19327": { code: "19327", label: "Faculdade Cesar Educação (FCE)", sigla: "FCE", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17738": { code: "17738", label: "Faculdade Cesgranrio (FACESGRANRIO)", sigla: "FACESGRANRIO", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "17226": { code: "17226", label: "Faculdade Cesmac do Agreste (CESMAC Agreste)", sigla: "CESMAC Agreste", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17224": { code: "17224", label: "Faculdade Cesmac do Sertão (CESMAC Sertão)", sigla: "CESMAC Sertão", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "14403": { code: "14403", label: "FACULDADE CESUMAR (CESUMAR)", sigla: "CESUMAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "17632": { code: "17632", label: "Faculdade CESUMAR de Londrina (FAC-CESUMAR)", sigla: "FAC-CESUMAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "18149": { code: "18149", label: "FACULDADE CESUMAR DE MARINGÁ (FAC-CESUMAR)", sigla: "FAC-CESUMAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "17420": { code: "17420", label: "FACULDADE CESUMAR DE PONTA GROSSA (FAC-CESUMAR)", sigla: "FAC-CESUMAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1469": { code: "1469", label: "FACULDADE CESUSC", sigla: "CESUSC", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1601": { code: "1601", label: "FACULDADE CIDADE DE COROMANDEL (FCC)", sigla: "FCC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4446": { code: "4446", label: "FACULDADE CIDADE DE GUANHÃES - FACIG (FACIG)", sigla: "FACIG", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "2440": { code: "2440", label: "FACULDADE CIDADE DE JOÃO PINHEIRO (FCJP)", sigla: "FCJP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18526": { code: "18526", label: "Faculdade Cidade de Osasco (FCO)", sigla: "FCO", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2915": { code: "2915", label: "FACULDADE CIDADE DE PATOS DE MINAS (FPM)", sigla: "FPM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2402": { code: "2402", label: "FACULDADE CIDADE DO SALVADOR (FCS)", sigla: "FCS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2039": { code: "2039", label: "FACULDADE CIDADE LUZ (FACILUZ)", sigla: "FACILUZ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3649": { code: "3649", label: "FACULDADE CIDADE VERDE (FCV)", sigla: "FCV", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3716": { code: "3716", label: "FACULDADE CIÊNCIAS DA VIDA (FCV)", sigla: "FCV", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2303": { code: "2303", label: "FACULDADE CIMO (FAC)", sigla: "FAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "16218": { code: "16218", label: "FACULDADE CLARETIANA DE BRASILIA (FCB)", sigla: "FCB", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4938": { code: "4938", label: "FACULDADE CLARETIANA DE TEOLOGIA", sigla: "FCLARETIANATEO", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1417": { code: "1417", label: "FACULDADE CNEC CAMPO LARGO", sigla: "CNECCL", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "631": { code: "631", label: "FACULDADE CNEC FARROUPILHA", sigla: "CNECFARROUPILHA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2184": { code: "2184", label: "FACULDADE CNEC GRAVATAÍ", sigla: "CNECGRAVATAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1928": { code: "1928", label: "FACULDADE CNEC ILHA DO GOVERNADOR", sigla: "CNECILHA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1070": { code: "1070", label: "FACULDADE CNEC UNAÍ", sigla: "CNECUNAI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2903": { code: "2903", label: "FACULDADE CONCÓRDIA (FACC)", sigla: "FACC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18148": { code: "18148", label: "FACULDADE CONHECIMENTO & CIÊNCIA (FCC)", sigla: "FCC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2332": { code: "2332", label: "FACULDADE CORPORATIVA CESPI (FACESPI)", sigla: "FACESPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18077": { code: "18077", label: "Faculdade Cosmopolita", sigla: "FACOSMOPOLITA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1330": { code: "1330", label: "FACULDADE COTEMIG (COTEMIG)", sigla: "COTEMIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "12754": { code: "12754", label: "FACULDADE CRISTÃ DE CURITIBA (FCC)", sigla: "FCC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1903": { code: "1903", label: "FACULDADE CRISTO REI (FACCREI)", sigla: "FACCREI", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4995": { code: "4995", label: "FACULDADE CRUZ AZUL (FACRAZ)", sigla: "FACRAZ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1941": { code: "1941", label: "FACULDADE CUIABÁ (FAUC)", sigla: "FAUC", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "16864": { code: "16864", label: "Faculdade Cultura Inglesa (FCI)", sigla: "FCI", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "3777": { code: "3777", label: "FACULDADE CURITIBANA (FAC)", sigla: "FAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3392": { code: "3392", label: "FACULDADE DA ACADEMIA BRASILEIRA DE EDUCAÇÃO E CULTURA (FABEC)", sigla: "FABEC", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "2341": { code: "2341", label: "FACULDADE DA ALDEIA DE CARAPICUÍBA (FALC)", sigla: "FALC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2056": { code: "2056", label: "FACULDADE DA ALTA PAULISTA (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3029": { code: "3029", label: "FACULDADE DA AMAZÔNIA (FAAM)", sigla: "FAAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2323": { code: "2323", label: "FACULDADE DA AMAZÔNIA (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2343": { code: "2343", label: "FACULDADE DA AMAZÔNIA OCIDENTAL (FAAO)", sigla: "FAAO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2244": { code: "2244", label: "FACULDADE DA CIDADE DE MACEIÓ (FACIMA)", sigla: "FACIMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1581": { code: "1581", label: "FACULDADE DA CIDADE DE SANTA LUZIA (FACSAL)", sigla: "FACSAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1881": { code: "1881", label: "FACULDADE DA ESCADA (FAESC)", sigla: "FAESC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3502": { code: "3502", label: "FACULDADE DA FRONTEIRA - FAF (FAF)", sigla: "FAF", category: "Faculdade", oa: "Pública", ci: "3", igc: "3" },
	  "845": { code: "845", label: "FACULDADE DA FUNDAÇÃO EDUCACIONAL ARAÇATUBA (FAC-FEA)", sigla: "FAC-FEA", category: "Faculdade", oa: "Privada", ci: "-", igc: "4" },
	  "2134": { code: "2134", label: "FACULDADE DA IGREJA MINISTÉRIO FAMA (FAIFA)", sigla: "FAIFA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15445": { code: "15445", label: "FACULDADE DA INDÚSTRIA CURITIBA (FAIND/CTBA)", sigla: "FAIND/CTBA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1400": { code: "1400", label: "FACULDADE DA INDÚSTRIA SÃO JOSÉ DOS PINHAIS (FAIND/SJP)", sigla: "FAIND/SJP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "77": { code: "77", label: "FACULDADE DA REGIÃO DOS LAGOS (FERLAGOS)", sigla: "FERLAGOS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1862": { code: "1862", label: "FACULDADE DA REGIÃO SERRANA (FARESE)", sigla: "FARESE", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "18636": { code: "18636", label: "Faculdade da Região Sisaleira (FARESI)", sigla: "FARESI", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1664": { code: "1664", label: "FACULDADE DA SAÚDE E ECOLOGIA HUMANA (FASEH)", sigla: "FASEH", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17636": { code: "17636", label: "FACULDADE DA SERRA (SERRAVIX)", sigla: "SERRAVIX", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1051": { code: "1051", label: "FACULDADE DA SEUNE (SEUNE)", sigla: "SEUNE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17115": { code: "17115", label: "FACULDADE DA UNIÃO DE ENSINO E PESQUISA INTEGRADA (FUNEPI)", sigla: "FUNEPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3631": { code: "3631", label: "FACULDADE DAMAS DA INSTRUÇÃO CRISTÃ (FADIC)", sigla: "FADIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2465": { code: "2465", label: "FACULDADE DAMÁSIO (FD)", sigla: "FD", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3854": { code: "3854", label: "FACULDADE DAS ÁGUAS EMENDADAS - FAE (FAE)", sigla: "FAE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17688": { code: "17688", label: "FACULDADE DAS AMÉRICAS", sigla: "FAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1294": { code: "1294", label: "FACULDADE DAS AMÉRICAS (FAM)", sigla: "FAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1610": { code: "1610", label: "FACULDADE DAS ATIVIDADES EMPRESARIAIS DE TERESINA (FAETE)", sigla: "FAETE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3228": { code: "3228", label: "FACULDADE DE ADMINISTRAÇÃO (ITPAC)", sigla: "ITPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "492": { code: "492", label: "FACULDADE DE ADMINISTRAÇÃO CIÊNCIAS ECON E CONTÁBEIS DE GUARATINGUETÁ (FACEAG)", sigla: "FACEAG", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "1864": { code: "1864", label: "FACULDADE DE ADMINISTRAÇÃO DA ASSOCIAÇÃO BRASILIENSE DE EDUCAÇÃO (FABE)", sigla: "FABE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3177": { code: "3177", label: "FACULDADE DE ADMINISTRAÇÃO DA FESPSP (FADFESPSP)", sigla: "FADFESPSP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "461": { code: "461", label: "FACULDADE DE ADMINISTRAÇÃO DA FUNDAÇÃO ARMANDO ALVARES PENTEADO (FAE-FAAP)", sigla: "FAE-FAAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "723": { code: "723", label: "FACULDADE DE ADMINISTRAÇÃO DE ASSIS (FAA)", sigla: "FAA", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "1843": { code: "1843", label: "FACULDADE DE ADMINISTRAÇÃO DE CAMPO BELO (FACAMP)", sigla: "FACAMP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1926": { code: "1926", label: "FACULDADE DE ADMINISTRAÇÃO DE CATAGUASES (UNIPACAT)", sigla: "UNIPACAT", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2456": { code: "2456", label: "FACULDADE DE ADMINISTRAÇÃO DE CHAPADÃO DO SUL (FACHASUL)", sigla: "FACHASUL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1438": { code: "1438", label: "FACULDADE DE ADMINISTRAÇÃO DE EMPRESAS (FACAMP)", sigla: "FACAMP", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2364": { code: "2364", label: "FACULDADE DE ADMINISTRAÇÃO DE EMPRESAS DE PARAÍSO DO TOCANTINS (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3507": { code: "3507", label: "FACULDADE DE ADMINISTRAÇÃO DE EMPRESAS IBRAFEM (IBRAFEM)", sigla: "IBRAFEM", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "915": { code: "915", label: "FACULDADE DE ADMINISTRAÇÃO DE FÁTIMA DO SUL (FAFS)", sigla: "FAFS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "651": { code: "651", label: "FACULDADE DE ADMINISTRAÇÃO DE GOVERNADOR VALADARES (FAGV)", sigla: "FAGV", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1254": { code: "1254", label: "FACULDADE DE ADMINISTRAÇÃO DE ITABIRITO (FAI)", sigla: "FAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2477": { code: "2477", label: "FACULDADE DE ADMINISTRAÇÃO DE MARIANA (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1605": { code: "1605", label: "FACULDADE DE ADMINISTRAÇÃO DE NOVA ANDRADINA - FANOVA (FANOVA)", sigla: "FANOVA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1497": { code: "1497", label: "FACULDADE DE ADMINISTRAÇÃO DE SANTA CRUZ DO RIO PARDO (FASC)", sigla: "FASC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "846": { code: "846", label: "FACULDADE DE ADMINISTRAÇÃO DE TERESINA (FAT)", sigla: "FAT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1788": { code: "1788", label: "FACULDADE DE ADMINISTRAÇÃO E ARTES DE LIMEIRA (FAAL)", sigla: "FAAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "923": { code: "923", label: "FACULDADE DE ADMINISTRAÇÃO E CIÊNCIAS CONTÁBEIS DE SÃO ROQUE (FACCSR)", sigla: "FACCSR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13944": { code: "13944", label: "FACULDADE DE ADMINISTRAÇÃO E NEGÓCIOS (FAN)", sigla: "FAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1151": { code: "1151", label: "FACULDADE DE ADMINISTRAÇÃO E NEGÓCIOS DE SERGIPE (FANESE)", sigla: "FANESE", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1201": { code: "1201", label: "FACULDADE DE ADMINISTRAÇÃO MILTON CAMPOS (FAMC)", sigla: "FAMC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1257": { code: "1257", label: "FACULDADE DE ADMINISTRAÇÃO, CIÊNCIAS, EDUCAÇÃO E LETRAS (FACEL)", sigla: "FACEL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4661": { code: "4661", label: "FACULDADE DE AGRONEGÓCIO PARAÍSO DO NORTE (FAPAN)", sigla: "FAPAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1834": { code: "1834", label: "FACULDADE DE AGUDOS (FAAG)", sigla: "FAAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1162": { code: "1162", label: "FACULDADE DE ALTA FLORESTA (FAF)", sigla: "FAF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1204": { code: "1204", label: "FACULDADE DE AMAMBAI (FIAMA)", sigla: "FIAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1310": { code: "1310", label: "FACULDADE DE AMERICANA (FAM)", sigla: "FAM", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2620": { code: "2620", label: "FACULDADE DE AMPÉRE (FAMPER)", sigla: "FAMPER", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "744": { code: "744", label: "FACULDADE DE ANICUNS (FA)", sigla: "FA", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "1325": { code: "1325", label: "FACULDADE DE APUCARANA (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3778": { code: "3778", label: "FACULDADE DE ARACAJU (FACAR)", sigla: "FACAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3209": { code: "3209", label: "FACULDADE DE ARAÇATUBA", sigla: "FAARACATUBA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3436": { code: "3436", label: "Faculdade de Araraquara (FARA)", sigla: "FARA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2505": { code: "2505", label: "FACULDADE DE ARTE E DESIGN (FAD)", sigla: "FAD", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "706": { code: "706", label: "FACULDADE DE ARTES DULCINA DE MORAES (FADM)", sigla: "FADM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "460": { code: "460", label: "FACULDADE DE ARTES PLÁSTICAS DA FUNDAÇÃO ARMANDO ALVARES PENTEADO (FAAP)", sigla: "FAAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1833": { code: "1833", label: "FACULDADE DE ARUJÁ (FAR)", sigla: "FAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2102": { code: "2102", label: "FACULDADE DE AURIFLAMA (FAU)", sigla: "FAU", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4399": { code: "4399", label: "FACULDADE DE BALSAS (UNIBALSAS)", sigla: "UNIBALSAS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3979": { code: "3979", label: "FACULDADE DE BAURU (-)", sigla: "FABAURU", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2859": { code: "2859", label: "FACULDADE DE BELÉM (FABEL)", sigla: "FABEL", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "909": { code: "909", label: "FACULDADE DE BELFORD ROXO (FABEL)", sigla: "FABEL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "372": { code: "372", label: "FACULDADE DE BIBLIOTECONOMIA E CIÊNCIA DA INFORMAÇÃO (FABCI)", sigla: "FABCI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17593": { code: "17593", label: "Faculdade de Botucatu (FDB)", sigla: "FDB", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2282": { code: "2282", label: "FACULDADE DE CAFELÂNDIA (FAC)", sigla: "FAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1395": { code: "1395", label: "FACULDADE DE CALDAS NOVAS (UNICALDAS)", sigla: "UNICALDAS", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "2027": { code: "2027", label: "FACULDADE DE CAMPINA GRANDE (FAC-CG)", sigla: "FAC-CG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1679": { code: "1679", label: "FACULDADE DE CAMPINA GRANDE DO SUL (FACSUL)", sigla: "FACSUL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1727": { code: "1727", label: "FACULDADE DE CARIACICA (FAC DE CARIACICA)", sigla: "FAC DE CARIACICA", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1258": { code: "1258", label: "FACULDADE DE CASCAVEL", sigla: "FACASCAVEL", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4915": { code: "4915", label: "FACULDADE DE CASTANHAL (FCAT)", sigla: "FCAT", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1245": { code: "1245", label: "Faculdade de Castelo - Multivix Castelo (Multivix Castelo)", sigla: "Multivix Castelo", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4113": { code: "4113", label: "FACULDADE DE CERES (FACER)", sigla: "FACER", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1653": { code: "1653", label: "FACULDADE DE CIÊNCIA E EDUCAÇÃO DO CAPARAÓ (FACEC)", sigla: "FACEC", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2117": { code: "2117", label: "FACULDADE DE CIÊNCIA E TECNOLOGIA (FACITEC)", sigla: "FACITEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2423": { code: "2423", label: "FACULDADE DE CIÊNCIA E TECNOLOGIA DE MONTES CLAROS (FACIT)", sigla: "FACIT", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5473": { code: "5473", label: "FACULDADE DE CIÊNCIA, TECNOLOGIA E EDUCAÇÃO (FACITE)", sigla: "FACITE", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2561": { code: "2561", label: "FACULDADE DE CIÊNCIAS ADMINISTRATIVAS (FCA)", sigla: "FCA", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "545": { code: "545", label: "FACULDADE DE CIÊNCIAS ADMINISTRATIVAS E CONTÁBEIS DE ITABIRA (FACCI)", sigla: "FACCI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "900": { code: "900", label: "FACULDADE DE CIÊNCIAS ADMINISTRATIVAS E DE TECNOLOGIA (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1623": { code: "1623", label: "FACULDADE DE CIÊNCIAS AGRÁRIAS DE ANDRADINA (FCAA)", sigla: "FCAA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "704": { code: "704", label: "FACULDADE DE CIÊNCIAS AGRÁRIAS DE ARARIPINA (FACIAGRA)", sigla: "FACIAGRA", category: "Faculdade", oa: "Pública", ci: "-", igc: "1" },
	  "1883": { code: "1883", label: "FACULDADE DE CIÊNCIAS AGRÁRIAS E DA SAÚDE (FAS)", sigla: "FAS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2791": { code: "2791", label: "FACULDADE DE CIÊNCIAS AGRÁRIAS E EXATAS DE PRIMAVERA DO LESTE", sigla: "FDCAEPL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "954": { code: "954", label: "FACULDADE DE CIÊNCIAS AGRO- AMBIENTAIS (FAGRAM)", sigla: "FAGRAM", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "686": { code: "686", label: "FACULDADE DE CIÊNCIAS APLICADAS DE LIMOEIRO (FACAL)", sigla: "FACAL", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "692": { code: "692", label: "FACULDADE DE CIÊNCIAS APLICADAS E SOCIAIS DE PETROLINA (FACAPE)", sigla: "FACAPE", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "11861": { code: "11861", label: "FACULDADE DE CIÊNCIAS APLICADAS E TECNOLÓGICAS DO LITORAL SUL (FACSUL)", sigla: "FACSUL", category: "Faculdade", oa: "Privada", ci: "1", igc: "3" },
	  "3205": { code: "3205", label: "FACULDADE DE CIÊNCIAS BIOLÓGICAS E DA SAÚDE (FACISA)", sigla: "FACISA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1917": { code: "1917", label: "FACULDADE DE CIÊNCIAS BIOMÉDICAS DE CACOAL (FACIMED)", sigla: "FACIMED", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2442": { code: "2442", label: "FACULDADE DE CIÊNCIAS BIOMÉDICAS DO ESPÍRITO SANTO (PIO XII - BIO)", sigla: "PIO XII - BIO", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "152": { code: "152", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS (FACIC)", sigla: "FACIC", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "1525": { code: "1525", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS DE AFONSO CLÁUDIO (ISEAC)", sigla: "ISEAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "2034": { code: "2034", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS DE ARAGUAÍNA (ITPAC)", sigla: "ITPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1212": { code: "1212", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS DE ASSIS (FCCA)", sigla: "FCCA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1824": { code: "1824", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS DE ITABIRITO (FACCI)", sigla: "FACCI", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "467": { code: "467", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS DE ITAPETININGA (FCCI)", sigla: "FCCI", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "917": { code: "917", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS DE NAVIRAI (FACINAV)", sigla: "FACINAV", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1247": { code: "1247", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS DE NOVA ANDRADINA - FACINAN (FACINAN)", sigla: "FACINAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "364": { code: "364", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS DE PONTE NOVA (FACE)", sigla: "FACE", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "1707": { code: "1707", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS DE RECIFE (FACCOR)", sigla: "FACCOR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "650": { code: "650", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS E ADMINISTRATIVAS DE AVARÉ (IESA/FACCAA)", sigla: "IESA/FACCAA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "607": { code: "607", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS E ADMINISTRATIVAS DE CACHOEIRO DO ITAPEMIRIM (FACCACI)", sigla: "FACCACI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "191": { code: "191", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS E DE ADMINISTRAÇÃO DE EMPRESAS (FCCAE)", sigla: "FCCAE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2629": { code: "2629", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS E DE ADMINISTRAÇÃO DO VALE DO JURUENA (AJES)", sigla: "AJES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2435": { code: "2435", label: "FACULDADE DE CIÊNCIAS CONTÁBEIS LUIZ MENDES (LUMEN FACULDADES)", sigla: "LUMEN FACULDADES", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "701": { code: "701", label: "FACULDADE DE CIÊNCIAS DA ADMINISTRAÇÃO DE GARANHUNS (FAGA)", sigla: "FAGA", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "3216": { code: "3216", label: "FACULDADE DE CIÊNCIAS DA BAHIA - FACIBA (FACIBA)", sigla: "FACIBA", category: "Faculdade", oa: "Privada", ci: "2", igc: "-" },
	  "543": { code: "543", label: "FACULDADE DE CIÊNCIAS DA FUNDAÇÃO INSTITUTO TECNOLÓGICO DE OSASCO (FAC-FITO)", sigla: "FAC-FITO", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "3516": { code: "3516", label: "FACULDADE DE CIÊNCIAS DA SAÚDE ARCHIMEDES THEODORO (FAC - SAUDE ARTHE)", sigla: "FAC - SAUDE ARTHE", category: "Faculdade", oa: "Pública", ci: "3", igc: "2" },
	  "14892": { code: "14892", label: "FACULDADE DE CIÊNCIAS DA SAÚDE DE BARRETOS DR. PAULO PRATA (FCSB)", sigla: "FCSB", category: "Faculdade", oa: "Privada", ci: "5", igc: "SC" },
	  "1192": { code: "1192", label: "FACULDADE DE CIÊNCIAS DA SAÚDE DE SÃO PAULO (FACIS)", sigla: "FACIS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17775": { code: "17775", label: "Faculdade de Ciências da Saúde de Serra Talhada (FACISST)", sigla: "FACISST", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "4780": { code: "4780", label: "FACULDADE DE CIÊNCIAS DA SAÚDE DE UNAÍ (FACISA)", sigla: "FACISA", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "17116": { code: "17116", label: "Faculdade de Ciências de Goiana (FCG)", sigla: "FCG", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2530": { code: "2530", label: "FACULDADE DE CIÊNCIAS DE GUARULHOS (FACIG)", sigla: "FACIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1021": { code: "1021", label: "FACULDADE DE CIÊNCIAS DE TIMBAÚBA (FACET)", sigla: "FACET", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1143": { code: "1143", label: "Faculdade de Ciências de Timbaúba (FACET)", sigla: "FACET", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1678": { code: "1678", label: "FACULDADE DE CIÊNCIAS DE WENCESLAU BRAZ (FACIBRA)", sigla: "FACIBRA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14947": { code: "14947", label: "FACULDADE DE CIÊNCIAS DO TOCANTINS (FACIT)", sigla: "FACIT", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "985": { code: "985", label: "FACULDADE DE CIÊNCIAS E EDUCAÇÃO DE RUBIATABA (FACER)", sigla: "FACER", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1596": { code: "1596", label: "FACULDADE DE CIÊNCIAS E EDUCAÇÃO DO ESPÍRITO SANTO (UNIVES)", sigla: "UNIVES", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1580": { code: "1580", label: "FACULDADE DE CIÊNCIAS E EDUCAÇÃO SENA AIRES (FACESA)", sigla: "FACESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "495": { code: "495", label: "FACULDADE DE CIÊNCIAS E LETRAS DE BRAGANÇA PAULISTA (FESB)", sigla: "FESB", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "843": { code: "843", label: "FACULDADE DE CIÊNCIAS E TECNOLOGIA DE BIRIGUI (FATEB)", sigla: "FATEB", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "1712": { code: "1712", label: "FACULDADE DE CIÊNCIAS E TECNOLOGIA DE TERESINA (FACET)", sigla: "FACET", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1019": { code: "1019", label: "FACULDADE DE CIÊNCIAS E TECNOLOGIA DE UNAÍ - FACTU (FACTU)", sigla: "FACTU", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "4964": { code: "4964", label: "FACULDADE DE CIÊNCIAS E TECNOLOGIA DO MARANHÃO (FACEMA)", sigla: "FACEMA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1680": { code: "1680", label: "FACULDADE DE CIÊNCIAS E TECNOLOGIA MATER CHRISTI (MATER CHRISTI)", sigla: "MATER CHRISTI", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "702": { code: "702", label: "FACULDADE DE CIÊNCIAS E TECNOLOGIA PROFESSOR DIRSON MACIEL DE BARROS (FADIMAB)", sigla: "FADIMAB", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "2428": { code: "2428", label: "FACULDADE DE CIÊNCIAS E TECNOLOGIAS DE CAMPOS GERAIS (FACICA)", sigla: "FACICA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1439": { code: "1439", label: "FACULDADE DE CIÊNCIAS ECONÔMICAS (FACAMP)", sigla: "FACAMP", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1617": { code: "1617", label: "FACULDADE DE CIÊNCIAS ECONÔMICAS DA REGIÃO CARBONÍFERA (FACIERC)", sigla: "FACIERC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "139": { code: "139", label: "FACULDADE DE CIÊNCIAS ECONÔMICAS DO TRIÂNGULO MINEIRO (FCETM)", sigla: "FCETM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "898": { code: "898", label: "FACULDADE DE CIÊNCIAS ECONÔMICAS E ADMINISTRATIVAS SANTA RITA DE CÁSSIA (FACEAS)", sigla: "FACEAS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "302": { code: "302", label: "FACULDADE DE CIÊNCIAS ECONÔMICAS, ADMINISTRATIVAS E CONTÁBEIS DE DIVINÓPOLIS (FACED)", sigla: "FACED", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "473": { code: "473", label: "FACULDADE DE CIÊNCIAS ECONÔMICAS, ADMINISTRATIVAS E DA COMPUTAÇÃO DOM BOSCO (FCEACDB)", sigla: "FCEACDB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2753": { code: "2753", label: "Faculdade de Ciências Educacionais de Capim Grosso (FCG)", sigla: "FCG", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3506": { code: "3506", label: "FACULDADE DE CIÊNCIAS EDUCACIONAIS DE SERGIPE (FCES)", sigla: "FCES", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3027": { code: "3027", label: "FACULDADE DE CIÊNCIAS EDUCACIONAIS E SISTEMAS INTEGRADOS (FACESI)", sigla: "FACESI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2067": { code: "2067", label: "FACULDADE DE CIÊNCIAS EMPRESARIAIS (FACEMP)", sigla: "FACEMP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1866": { code: "1866", label: "FACULDADE DE CIÊNCIAS EMPRESARIAIS E ESTUDOS COSTEIROS DE NATAL (FACEN)", sigla: "FACEN", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "15669": { code: "15669", label: "FACULDADE DE CIÊNCIAS EXATAS DE GARANHUNS (FACEG)", sigla: "FACEG", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "1919": { code: "1919", label: "FACULDADE DE CIÊNCIAS EXATAS E TECNOLÓGICAS SANTO AGOSTINHO - FACET (FACET)", sigla: "FACET", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4059": { code: "4059", label: "FACULDADE DE CIÊNCIAS GERENCIAIS", sigla: "FACGER", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1108": { code: "1108", label: "FACULDADE DE CIÊNCIAS GERENCIAIS - COTIA (FCG - COTIA)", sigla: "FCG - COTIA", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "3514": { code: "3514", label: "FACULDADE DE CIÊNCIAS GERENCIAIS ALVES FORTES (FACE - ALFOR)", sigla: "FACE - ALFOR", category: "Faculdade", oa: "Pública", ci: "2", igc: "2" },
	  "4598": { code: "4598", label: "FACULDADE DE CIÊNCIAS GERENCIAIS BARÃO DE JUNDIAÍ (FCG)", sigla: "FCG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2427": { code: "2427", label: "FACULDADE DE CIÊNCIAS GERENCIAIS DA BAHIA (UNICENID)", sigla: "UNICENID", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4220": { code: "4220", label: "FACULDADE DE CIÊNCIAS GERENCIAIS DE BICAS (FCGB)", sigla: "FCGB", category: "Faculdade", oa: "Pública", ci: "2", igc: "2" },
	  "1984": { code: "1984", label: "FACULDADE DE CIÊNCIAS GERENCIAIS DE MANHUAÇU (FACIG)", sigla: "FACIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1867": { code: "1867", label: "FACULDADE DE CIÊNCIAS GERENCIAIS DE SANTOS DUMONT (FACIG)", sigla: "FACIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2763": { code: "2763", label: "FACULDADE DE CIÊNCIAS GERENCIAIS DE SÃO GOTARDO (CESG)", sigla: "CESG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4821": { code: "4821", label: "FACULDADE DE CIÊNCIAS GERENCIAIS E EMPREENDEDORISMO - FACIGE (FACIGE)", sigla: "FACIGE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1860": { code: "1860", label: "FACULDADE DE CIÊNCIAS GERENCIAIS PADRE ARNALDO JANSSEN (FAJANSSEN)", sigla: "FAJANSSEN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1144": { code: "1144", label: "FACULDADE DE CIÊNCIAS HUMANAS (IMENSU)", sigla: "IMENSU", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1628": { code: "1628", label: "FACULDADE DE CIÊNCIAS HUMANAS DE AGUAÍ (FACHA)", sigla: "FACHA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4724": { code: "4724", label: "FACULDADE DE CIÊNCIAS HUMANAS DE CRUZEIRO (FACIC)", sigla: "FACIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "728": { code: "728", label: "FACULDADE DE CIÊNCIAS HUMANAS DE CURVELO (FACIC)", sigla: "FACIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "837": { code: "837", label: "FACULDADE DE CIÊNCIAS HUMANAS DE FORTALEZA (FCHFOR)", sigla: "FCHFOR", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "544": { code: "544", label: "FACULDADE DE CIÊNCIAS HUMANAS DE ITABIRA (FACHI)", sigla: "FACHI", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "144": { code: "144", label: "FACULDADE DE CIÊNCIAS HUMANAS DE OLINDA (FACHO)", sigla: "FACHO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "760": { code: "760", label: "FACULDADE DE CIÊNCIAS HUMANAS DE PERNAMBUCO (FCHPE)", sigla: "FCHPE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "753": { code: "753", label: "FACULDADE DE CIÊNCIAS HUMANAS DO SERTÃO CENTRAL (FACHUSC)", sigla: "FACHUSC", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "1016": { code: "1016", label: "FACULDADE DE CIÊNCIAS HUMANAS DO VALE DO PIRANGA (FAVAP)", sigla: "FAVAP", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "831": { code: "831", label: "FACULDADE DE CIÊNCIAS HUMANAS DO VALE DO RIO GRANDE (FCHVRG)", sigla: "FCHVRG", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2973": { code: "2973", label: "FACULDADE DE CIÊNCIAS HUMANAS E BIOLÓGICAS E DA SAÚDE", sigla: "FCHBDS", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1993": { code: "1993", label: "FACULDADE DE CIÊNCIAS HUMANAS E DA SAÚDE (SESPA)", sigla: "SESPA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3617": { code: "3617", label: "FACULDADE DE CIÊNCIAS HUMANAS E EXATAS DO SERTÃO DO SÃO FRANCISCO (FACESF)", sigla: "FACESF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1640": { code: "1640", label: "FACULDADE DE CIÊNCIAS HUMANAS E SOCIAIS (FACULDADE AGES)", sigla: "FACULDADE AGES", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "1459": { code: "1459", label: "FACULDADE DE CIÊNCIAS HUMANAS E SOCIAIS (FUCAMP)", sigla: "FUCAMP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "720": { code: "720", label: "FACULDADE DE CIÊNCIAS HUMANAS E SOCIAIS APLICADAS DO CABO DE SANTO AGOSTINHO (FACHUCA)", sigla: "FACHUCA", category: "Faculdade", oa: "Pública", ci: "-", igc: "1" },
	  "5664": { code: "5664", label: "FACULDADE DE CIÊNCIAS HUMANAS E SOCIAIS DE ARARIPINA - FACISA (FACISA)", sigla: "FACISA", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "1136": { code: "1136", label: "FACULDADE DE CIÊNCIAS HUMANAS E SOCIAIS DE IGARASSU (FACIG)", sigla: "FACIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15410": { code: "15410", label: "Faculdade de Ciencias Humanas e Sociais de Serra Talhada (FACHUSST)", sigla: "FACHUSST", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "12735": { code: "12735", label: "FACULDADE DE CIÊNCIAS HUMANAS E SOCIAIS DO XINGU E AMAZÔNIA (FACX)", sigla: "FACX", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "18296": { code: "18296", label: "Faculdade de Ciências Humanas e Sociais III (Faculdade AGES)", sigla: "Faculdade AGES", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "410": { code: "410", label: "FACULDADE DE CIÊNCIAS HUMANAS ESUDA (FCHE)", sigla: "FCHE", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "16728": { code: "16728", label: "FACULDADE DE CIÊNCIAS HUMANAS, ECONÔMICAS E DA SAÚDE (FAHESA/ITPAC PALMAS)", sigla: "FAHESA/ITPAC PALMAS", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "4849": { code: "4849", label: "FACULDADE DE CIÊNCIAS HUMANAS, ECONÔMICAS E DA SAÚDE DE ARAGUAÍNA (FAHESA / ITPAC)", sigla: "FAHESA / ITPAC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "17565": { code: "17565", label: "FACULDADE DE CIÊNCIAS HUMANAS,EXATAS E DA SAÚDE DO PIAUÍ (FAHESP)", sigla: "FAHESP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2702": { code: "2702", label: "FACULDADE DE CIÊNCIAS JURÍDICAS DE PARAÍSO DO TOCANTINS (FCJP)", sigla: "FCJP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "5243": { code: "5243", label: "FACULDADE DE CIÊNCIAS JURÍDICAS DE SANTOS DUMONT (FCJSD)", sigla: "FCJSD", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3954": { code: "3954", label: "FACULDADE DE CIÊNCIAS JURÍDICAS E GERENCIAIS DE OLIVEIRA (FACIJUGO)", sigla: "FACIJUGO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2974": { code: "2974", label: "FACULDADE DE CIÊNCIAS JURÍDICAS E SOCIAIS APLICADAS DE PRIMAVERA DO LESTE", sigla: "FCJSAPL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1952": { code: "1952", label: "FACULDADE DE CIÊNCIAS JURÍDICAS E SOCIAIS APLICADAS DO ARAGUAIA (FACULDADES CATHEDRAL)", sigla: "FACULDADES CATHEDRAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1637": { code: "1637", label: "FACULDADE DE CIÊNCIAS JURÍDICAS E SOCIAIS DE MACEIÓ (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1305": { code: "1305", label: "FACULDADE DE CIÊNCIAS JURÍDICAS, GERENCIAIS E EDUCAÇÃO DE SINOP (FIS)", sigla: "FIS", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4899": { code: "4899", label: "FACULDADE DE CIÊNCIAS MÉDICAS DA BAHIA (CIENCIAS MEDICAS)", sigla: "CIENCIAS MEDICAS", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "2082": { code: "2082", label: "FACULDADE DE CIÊNCIAS MÉDICAS DA PARAÍBA (FCM-PB)", sigla: "FCM-PB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "415": { code: "415", label: "FACULDADE DE CIÊNCIAS MÉDICAS DA SANTA CASA SÃO PAULO (FCMSCSP)", sigla: "FCMSCSP", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2362": { code: "2362", label: "FACULDADE DE CIÊNCIAS MÉDICAS DE CAMPINA GRANDE (FCM)", sigla: "FCM", category: "Faculdade", oa: "Privada", ci: "5", igc: "3" },
	  "351": { code: "351", label: "FACULDADE DE CIÊNCIAS MÉDICAS DE MINAS GERAIS (FCMMG)", sigla: "FCMMG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2843": { code: "2843", label: "FACULDADE DE CIÊNCIAS MÉDICAS E DA SAÚDE DE JUIZ DE FORA (FCMS/JF)", sigla: "FCMS/JF", category: "Faculdade", oa: "Privada", ci: "5", igc: "4" },
	  "759": { code: "759", label: "FACULDADE DE CIÊNCIAS MÉDICAS E PARAMÉDICAS FLUMINENSE (SEFLU)", sigla: "SEFLU", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1731": { code: "1731", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS", sigla: "FACSP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1767": { code: "1767", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS", sigla: "FDACSP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1334": { code: "1334", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS - FACISA (FACISA)", sigla: "FACISA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1783": { code: "1783", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS (FACISA - CELER)", sigla: "FACISA - CELER", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1572": { code: "1572", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS (FACISA)", sigla: "FACISA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2233": { code: "2233", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS DE BELO HORIZONTE (FACISABH)", sigla: "FACISABH", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "918": { code: "918", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS DE CASCAVEL (FCSAC)", sigla: "FCSAC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2270": { code: "2270", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS DE EXTREMA (FAEX)", sigla: "FAEX", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5038": { code: "5038", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS DE MARABÁ (FACIMAB)", sigla: "FACIMAB", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "2005": { code: "2005", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS DE SINOP (FACISAS)", sigla: "FACISAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "508": { code: "508", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS DO SUL DE MINAS - FACESM (FACESM)", sigla: "FACESM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "796": { code: "796", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS DO VALE DO SÃO LOURENÇO (EDUVALE)", sigla: "EDUVALE", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4126": { code: "4126", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS E DE TECNOLOGIAS DE AGUA BOA (FACESA)", sigla: "FACESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5305": { code: "5305", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS E HUMANAS DE GARANHUNS (FAHUG)", sigla: "FAHUG", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "1681": { code: "1681", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS IBMEC (FACULDADES IBMEC)", sigla: "FACULDADES IBMEC", category: "Faculdade", oa: "Privada", ci: "5", igc: "4" },
	  "1925": { code: "1925", label: "FACULDADE DE CIÊNCIAS SOCIAIS APLICADAS SANTO AGOSTINHO (FACISA)", sigla: "FACISA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1374": { code: "1374", label: "FACULDADE DE CIÊNCIAS SOCIAIS DE GUARANTÃ DO NORTE (FCSGN)", sigla: "FCSGN", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "4356": { code: "4356", label: "FACULDADE DE CIÊNCIAS SOCIAIS DOS PALMARES (FACIP)", sigla: "FACIP", category: "Faculdade", oa: "Pública", ci: "-", igc: "SC" },
	  "1281": { code: "1281", label: "FACULDADE DE CIÊNCIAS SOCIAIS E AGRÁRIAS DE ITAPEVA (FAIT)", sigla: "FAIT", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1198": { code: "1198", label: "FACULDADE DE CIÊNCIAS SOCIAIS E APLICADAS DO PARANÁ (FACET)", sigla: "FACET", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2794": { code: "2794", label: "FACULDADE DE CIÊNCIAS SOCIAIS E HUMANAS SOBRAL PINTO (FAIESP)", sigla: "FAIESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "838": { code: "838", label: "FACULDADE DE CIÊNCIAS TECNOLÓGICAS DE FORTALEZA (FCTFOR)", sigla: "FCTFOR", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2133": { code: "2133", label: "Faculdade de Ciências, Educação e Teologia do Norte do Brasil (FACETEN)", sigla: "FACETEN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1785": { code: "1785", label: "FACULDADE DE COLIDER (FACIDER)", sigla: "FACIDER", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "3657": { code: "3657", label: "FACULDADE DE COMPUTAÇÃO DE MONTES CLAROS (FACOMP)", sigla: "FACOMP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "465": { code: "465", label: "FACULDADE DE COMPUTAÇÃO E INFORMÁTICA DA FUNDAÇÃO ARMANDO ALVARES PENTEADO (FCI-FAAP)", sigla: "FCI-FAAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "1476": { code: "1476", label: "FACULDADE DE COMUNICAÇÃO E DESIGN OSWALDO CRUZ", sigla: "FCOSWALDOCRUZ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "463": { code: "463", label: "Faculdade de Comunicação e Marketing da Fundação Armando Álvares Penteado (FACOM-FAAP)", sigla: "FACOM-FAAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1328": { code: "1328", label: "FACULDADE DE COMUNICAÇÃO E TURISMO DE OLINDA (FACOTTUR)", sigla: "FACOTTUR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2264": { code: "2264", label: "FACULDADE DE COMUNICAÇÃO PITÁGORAS UNIDADE GUARAPARI (PIT GUARAPARI)", sigla: "PIT GUARAPARI", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2626": { code: "2626", label: "FACULDADE DE COMUNICAÇÃO SOCIAL SANTA EFIGÊNIA (FACULDADE VEREDAS)", sigla: "FACULDADE VEREDAS", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "4889": { code: "4889", label: "FACULDADE DE CONCHAS", sigla: "FACONCHAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "321": { code: "321", label: "FACULDADE DE DESENHO DE TATUÍ (FDT)", sigla: "FDT", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "2950": { code: "2950", label: "Faculdade de Desenvolvimento do Rio Grande do Sul (FADERGS)", sigla: "FADERGS", category: "Faculdade", oa: "Privada", ci: "5", igc: "4" },
	  "3568": { code: "3568", label: "FACULDADE DE DESENVOLVIMENTO E INTEGRAÇÃO REGIONAL (FADIRE)", sigla: "FADIRE", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "2072": { code: "2072", label: "FACULDADE DE DESENVOLVIMENTO SUSTENTÁVEL DE CRUZEIRO DO SUL (IEVAL)", sigla: "IEVAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "268": { code: "268", label: "FACULDADE DE DIREITO DA ALTA PAULISTA (FADAP)", sigla: "FADAP", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "1289": { code: "1289", label: "FACULDADE DE DIREITO DA FUNDAÇÃO ARMANDO ALVARES PENTEADO (FAD-FAAP)", sigla: "FAD-FAAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3523": { code: "3523", label: "FACULDADE DE DIREITO DA FUNDAÇÃO ESCOLA SUPERIOR DO MINISTÉRIO PÚBLICO", sigla: "FDFESMP", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "3815": { code: "3815", label: "FACULDADE DE DIREITO DE ALTA FLORESTA", sigla: "FDAFLORESTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4395": { code: "4395", label: "FACULDADE DE DIREITO DE ARAGUAÍNA (ITPAC)", sigla: "ITPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "606": { code: "606", label: "FACULDADE DE DIREITO DE CACHOEIRO DO ITAPEMIRIM (FDCI)", sigla: "FDCI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "99": { code: "99", label: "FACULDADE DE DIREITO DE CONSELHEIRO LAFAIETE (FDCL)", sigla: "FDCL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13666": { code: "13666", label: "FACULDADE DE DIREITO DE CONTAGEM (FDCON)", sigla: "FDCON", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "59": { code: "59", label: "FACULDADE DE DIREITO DE FRANCA (FDF)", sigla: "FDF", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "5044": { code: "5044", label: "FACULDADE DE DIREITO DE GARANHUNS (FDG)", sigla: "FDG", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "15451": { code: "15451", label: "Faculdade de Direito de Ipatinga (FADIPA)", sigla: "FADIPA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2619": { code: "2619", label: "FACULDADE DE DIREITO DE ITABIRA (FDI)", sigla: "FDI", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "440": { code: "440", label: "FACULDADE DE DIREITO DE ITÚ (FADITU)", sigla: "FADITU", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2297": { code: "2297", label: "FACULDADE DE DIREITO DE SANTA MARIA (FADISMA)", sigla: "FADISMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "58": { code: "58", label: "FACULDADE DE DIREITO DE SÃO BERNARDO DO CAMPO (FDSBC)", sigla: "FDSBC", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "276": { code: "276", label: "FACULDADE DE DIREITO DE SOROCABA (FADI)", sigla: "FADI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1442": { code: "1442", label: "FACULDADE DE DIREITO DE TANGARÁ DA SERRA", sigla: "FDTS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "141": { code: "141", label: "FACULDADE DE DIREITO DE VARGINHA - FADIVA (FADIVA)", sigla: "FADIVA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2558": { code: "2558", label: "FACULDADE DE DIREITO DE VILA VELHA", sigla: "FADVV", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "171": { code: "171", label: "FACULDADE DE DIREITO DO SUL DE MINAS (FDSM)", sigla: "FDSM", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "288": { code: "288", label: "FACULDADE DE DIREITO DO VALE DO RIO DOCE (FADIVALE)", sigla: "FADIVALE", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "809": { code: "809", label: "FACULDADE DE DIREITO E CIÊNCIAS SOCIAIS DO LESTE DE MINAS - FADILESTE (FADILESTE)", sigla: "FADILESTE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1523": { code: "1523", label: "FACULDADE DE DIREITO FRANCISCO BELTRÃO (CESUL)", sigla: "CESUL", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "638": { code: "638", label: "FACULDADE DE DIREITO MILTON CAMPOS (FDMC)", sigla: "FDMC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1923": { code: "1923", label: "FACULDADE DE DIREITO PADRE ARNALDO JANSSEN (FAJANSSEN)", sigla: "FAJANSSEN", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2275": { code: "2275", label: "FACULDADE DE DIREITO SANTO AGOSTINHO (FADISA)", sigla: "FADISA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2511": { code: "2511", label: "FACULDADE DE DIREITO UNIDADE GUARAPARI (FADIG)", sigla: "FADIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "994": { code: "994", label: "Faculdade de Duque de Caxias (FDC)", sigla: "FDC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "464": { code: "464", label: "FACULDADE DE ECONOMIA DA FUNDAÇÃO ARMANDO ALVARES PENTEADO (FEC-FAAP)", sigla: "FEC-FAAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "202": { code: "202", label: "FACULDADE DE ECONOMIA E FINANÇAS DO RIO DE JANEIRO (FEFRJ)", sigla: "FEFRJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1030": { code: "1030", label: "FACULDADE DE ECONOMIA E FINANÇAS IBMEC (FACULDADES IBMEC)", sigla: "FACULDADES IBMEC", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "877": { code: "877", label: "FACULDADE DE ECONOMIA E PROCESSAMENTO DE DADOS DE FOZ DO IGUAÇU (FEPI)", sigla: "FEPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1651": { code: "1651", label: "FACULDADE DE EDUCAÇÃO (ISECUB)", sigla: "ISECUB", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "4836": { code: "4836", label: "FACULDADE DE EDUCAÇÃO ACRIANA EUCLIDES DA CUNHA (INEC)", sigla: "INEC", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "219": { code: "219", label: "FACULDADE DE EDUCAÇÃO CIÊNCIAS E ARTES DOM BOSCO DE MONTE APRAZÍVEL (FAECA DOM BOSCO)", sigla: "FAECA DOM BOSCO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1646": { code: "1646", label: "FACULDADE DE EDUCAÇÃO CIÊNCIAS E LETRAS DE PARAÍSO (FECIPAR)", sigla: "FECIPAR", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "491": { code: "491", label: "FACULDADE DE EDUCAÇÃO CIÊNCIAS E LETRAS DON DOMÊNICO (FECLE)", sigla: "FECLE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1315": { code: "1315", label: "FACULDADE DE EDUCAÇÃO DA SERRA (FASE)", sigla: "FASE", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "721": { code: "721", label: "FACULDADE DE EDUCAÇÃO DE ASSIS (FAEDA)", sigla: "FAEDA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3741": { code: "3741", label: "FACULDADE DE EDUCAÇÃO DE BACABAL - FEBAC (FEBAC)", sigla: "FEBAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1695": { code: "1695", label: "FACULDADE DE EDUCAÇÃO DE BOM DESPACHO (FACEB)", sigla: "FACEB", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1086": { code: "1086", label: "FACULDADE DE EDUCAÇÃO DE COLORADO DO OESTE (FAEC)", sigla: "FAEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1249": { code: "1249", label: "FACULDADE DE EDUCAÇÃO DE COSTA RICA (FECRA)", sigla: "FECRA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "493": { code: "493", label: "FACULDADE DE EDUCAÇÃO DE GUARATINGUETÁ (FACEG)", sigla: "FACEG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "700": { code: "700", label: "FACULDADE DE EDUCAÇÃO DE ITABORAÍ (FEITA)", sigla: "FEITA", category: "Faculdade", oa: "Pública", ci: "-", igc: "SC" },
	  "1699": { code: "1699", label: "FACULDADE DE EDUCAÇÃO DE JARU (UNICENTRO)", sigla: "UNICENTRO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2054": { code: "2054", label: "FACULDADE DE EDUCAÇÃO DE NOVA ANDRADINA (FENA)", sigla: "FENA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1515": { code: "1515", label: "FACULDADE DE EDUCAÇÃO DE PORTO VELHO (UNIRON)", sigla: "UNIRON", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "17674": { code: "17674", label: "Faculdade de Educação de São Mateus", sigla: "FESAOMATEUS", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "785": { code: "785", label: "FACULDADE DE EDUCAÇÃO DE TANGARÁ DA SERRA (FACEDUTS)", sigla: "FACEDUTS", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1792": { code: "1792", label: "FACULDADE DE EDUCAÇÃO DE VITÓRIA (AUFES)", sigla: "AUFES", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "1099": { code: "1099", label: "FACULDADE DE EDUCAÇÃO E CIÊNCIAS GERENCIAIS DE SÃO PAULO (FECG-SP)", sigla: "FECG-SP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "906": { code: "906", label: "FACULDADE DE EDUCAÇÃO E CIÊNCIAS GERENCIAIS DE SUMARÉ (FECGS)", sigla: "FECGS", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "11748": { code: "11748", label: "FACULDADE DE EDUCAÇÃO E CULTURA DE JI-PARANÁ (FAJIPA)", sigla: "FAJIPA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "12758": { code: "12758", label: "FACULDADE DE EDUCAÇÃO E CULTURA DE PORTO VELHO (FAEC-PVH)", sigla: "FAEC-PVH", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "11645": { code: "11645", label: "FACULDADE DE EDUCAÇÃO E CULTURA DE VILHENA (FAEV)", sigla: "FAEV", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "986": { code: "986", label: "FACULDADE DE EDUCAÇÃO E CULTURA MONTESSORI (FAMEC)", sigla: "FAMEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "14163": { code: "14163", label: "Faculdade de Educação e Estudos Sociais de Governador Valadares (FUNEES G. Valadares)", sigla: "FUNEES G. Valadares", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "14157": { code: "14157", label: "Faculdade de Educação e Estudos Sociais de Uberlândia (FUNEES Uberlândia)", sigla: "FUNEES Uberlândia", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "19206": { code: "19206", label: "Faculdade de Educação e Formação (EDUFOR)", sigla: "EDUFOR", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4613": { code: "4613", label: "FACULDADE DE EDUCAÇÃO E MEIO AMBIENTE (FAEMA)", sigla: "FAEMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "16898": { code: "16898", label: "FACULDADE DE EDUCAÇÃO E TECNOLOGIA DA AMAZÔNIA (FAM)", sigla: "FAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2895": { code: "2895", label: "FACULDADE DE EDUCAÇÃO E TECNOLOGIA DA REGIÃO MISSIONEIRA (FETREMIS)", sigla: "FETREMIS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17899": { code: "17899", label: "FACULDADE DE EDUCAÇÃO E TECNOLOGIA DE SÃO CARLOS (FETEC - São Carlos)", sigla: "FETEC - São Carlos", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1295": { code: "1295", label: "FACULDADE DE EDUCAÇÃO E TECNOLOGIA IRACEMA", sigla: "FADETIRACEMA", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "16602": { code: "16602", label: "FACULDADE DE EDUCAÇÃO ELIÂ (FACEEL)", sigla: "FACEEL", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17355": { code: "17355", label: "Faculdade de Educação em Ciências da Saúde (FECS)", sigla: "FECS", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "368": { code: "368", label: "FACULDADE DE EDUCAÇÃO FÍSICA DA ASSOCIAÇÃO CRISTÃ DE MOÇOS DE SOROCABA (FEFISO)", sigla: "FEFISO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4394": { code: "4394", label: "FACULDADE DE EDUCAÇÃO FÍSICA DE ARAGUAÍNA (ITPAC)", sigla: "ITPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "131": { code: "131", label: "FACULDADE DE EDUCAÇÃO FÍSICA DE BARRA BONITA (FAEFI)", sigla: "FAEFI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1550": { code: "1550", label: "FACULDADE DE EDUCAÇÃO FÍSICA DE FOZ DO IGUAÇU (FEPI)", sigla: "FEPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "17352": { code: "17352", label: "Faculdade de Educação Memorial Adelaide Franco (FEMAF)", sigla: "FEMAF", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17608": { code: "17608", label: "Faculdade de Educação Paulistana", sigla: "FEDPAULISTANA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1764": { code: "1764", label: "FACULDADE DE EDUCAÇÃO REGIONAL SERRANA (FUNPAC)", sigla: "FUNPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2554": { code: "2554", label: "FACULDADE DE EDUCAÇÃO SANTA TEREZINHA (FEST)", sigla: "FEST", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1546": { code: "1546", label: "FACULDADE DE EDUCAÇÃO SÃO FRANCISCO (FAESF)", sigla: "FAESF", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "517": { code: "517", label: "FACULDADE DE EDUCAÇÃO SÃO LUÍS (FESL)", sigla: "FESL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18025": { code: "18025", label: "FACULDADE DE EDUCAÇÃO SUPERIOR DE CHAPECÓ (FACESC)", sigla: "FACESC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17025": { code: "17025", label: "Faculdade de Educação Superior de Paragominas (FACESP)", sigla: "FACESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17715": { code: "17715", label: "FACULDADE DE EDUCAÇÃO SUPERIOR DE PERNAMBUCO (FACESP)", sigla: "FACESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17874": { code: "17874", label: "Faculdade de Educação Superior de Tangará da Serra (FAEST)", sigla: "FAEST", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "197": { code: "197", label: "FACULDADE DE EDUCAÇÃO SUPERIOR DO PARANÁ (FESPPR)", sigla: "FESPPR", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "5051": { code: "5051", label: "FACULDADE DE EDUCAÇÃO TECNOLÓGICA DO ESTADO DO RIO DE JANEIRO - FAETERJ (FAETERJ BJ ITABAPOAN)", sigla: "FAETERJ BJ ITABAPOAN", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "5021": { code: "5021", label: "FACULDADE DE EDUCAÇÃO TECNOLÓGICA DO ESTADO DO RIO DE JANEIRO - FAETERJ (FAETERJ ITAPERUNA)", sigla: "FAETERJ ITAPERUNA", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "5017": { code: "5017", label: "FACULDADE DE EDUCAÇÃO TECNOLÓGICA DO ESTADO DO RIO DE JANEIRO - FAETERJ (FAETERJ PETRÓPOLIS)", sigla: "FAETERJ PETRÓPOLIS", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "5016": { code: "5016", label: "FACULDADE DE EDUCAÇÃO TECNOLÓGICA DO ESTADO DO RIO DE JANEIRO - FAETERJ (FAETERJ R DE JANEIRO)", sigla: "FAETERJ R DE JANEIRO", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "5020": { code: "5020", label: "FACULDADE DE EDUCAÇÃO TECNOLÓGICA DO ESTADO DO RIO DE JANEIRO - FAETERJ (FAETERJ S ANT. PÁDUA)", sigla: "FAETERJ S ANT. PÁDUA", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "5052": { code: "5052", label: "FACULDADE DE EDUCAÇÃO TECNOLÓGICA DO ESTADO DO RIO DE JANEIRO - FAETERJ (FAETERJ TRÊS RIOS)", sigla: "FAETERJ TRÊS RIOS", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "19588": { code: "19588", label: "Faculdade de Educação Tecnológica do Estado do Rio de Janeiro (FAETERJ CAXIAS)", sigla: "FAETERJ CAXIAS", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "5053": { code: "5053", label: "FACULDADE DE EDUCAÇÃO TECNOLÓGICA DO ESTADO DO RIO DE JANEIRO (FAETERJ PARACAMBI)", sigla: "FAETERJ PARACAMBI", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "1449": { code: "1449", label: "FACULDADE DE EDUCAÇÃO, ADMINISTRAÇÃO E TECNOLOGIA DE IBAITI (FEATI)", sigla: "FEATI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3225": { code: "3225", label: "FACULDADE DE ENFERMAGEM (ITPAC)", sigla: "ITPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "647": { code: "647", label: "FACULDADE DE ENFERMAGEM LUIZA DE MARILLAC (FELM)", sigla: "FELM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1753": { code: "1753", label: "FACULDADE DE ENFERMAGEM NOVA ESPERANÇA (FACENE)", sigla: "FACENE", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "4431": { code: "4431", label: "FACULDADE DE ENFERMAGEM NOVA ESPERANÇA DE MOSSORÓ - FACENE/RN (FACENE/RN)", sigla: "FACENE/RN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3590": { code: "3590", label: "FACULDADE DE ENFERMAGEM SÃO VICENTE DE PAULA (FESVIP)", sigla: "FESVIP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "462": { code: "462", label: "FACULDADE DE ENGENHARIA DA FUNDAÇÃO ARMANDO ALVARES PENTEADO (FEFAAP)", sigla: "FEFAAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "214": { code: "214", label: "FACULDADE DE ENGENHARIA DE MINAS GERAIS - FEAMIG (FEAMIG)", sigla: "FEAMIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1081": { code: "1081", label: "FACULDADE DE ENGENHARIA DE RESENDE (FER)", sigla: "FER", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "672": { code: "672", label: "FACULDADE DE ENGENHARIA DE SOROCABA (FACENS)", sigla: "FACENS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "255": { code: "255", label: "FACULDADE DE ENGENHARIA E AGRIMENSURA DE PIRASSUNUNGA - FEAP (FEAP)", sigla: "FEAP", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "14951": { code: "14951", label: "FACULDADE DE ENGENHARIA E INOVAÇÃO TÉCNICO PROFISSI (FEITEP)", sigla: "FEITEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "637": { code: "637", label: "FACULDADE DE ENGENHARIA SÃO PAULO (FESP)", sigla: "FESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "193": { code: "193", label: "FACULDADE DE ENGENHARIA SOUZA MARQUES (FESM)", sigla: "FESM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3786": { code: "3786", label: "FACULDADE DE ENSINO DE MINAS GERAIS (FACEMG)", sigla: "FACEMG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1647": { code: "1647", label: "FACULDADE DE ENSINO E CULTURA DO CEARÁ (FAECE)", sigla: "FAECE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4714": { code: "4714", label: "Faculdade de Ensino Regional Alternativa (FERA)", sigla: "FERA", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "3787": { code: "3787", label: "FACULDADE DE ENSINO SUPERIOR DA AMAZÔNIA (FESAM)", sigla: "FESAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2918": { code: "2918", label: "FACULDADE DE ENSINO SUPERIOR DA AMAZÔNIA REUNIDA (FESAR)", sigla: "FESAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2560": { code: "2560", label: "FACULDADE DE ENSINO SUPERIOR DA CIDADE DE FEIRA DE SANTANA (FAESF/UNEF)", sigla: "FAESF/UNEF", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1948": { code: "1948", label: "FACULDADE DE ENSINO SUPERIOR DA PARAÍBA (FESP)", sigla: "FESP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3319": { code: "3319", label: "FACULDADE DE ENSINO SUPERIOR DE CATALÃO (FACULDADE CESUC)", sigla: "FACULDADE CESUC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2413": { code: "2413", label: "FACULDADE DE ENSINO SUPERIOR DE FLORIANO (FAESF)", sigla: "FAESF", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1733": { code: "1733", label: "FACULDADE DE ENSINO SUPERIOR DE MARECHAL CÂNDIDO RONDON (ISEPE RONDON)", sigla: "ISEPE RONDON", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1500": { code: "1500", label: "FACULDADE DE ENSINO SUPERIOR DE SÃO MIGUEL DO IGUAÇU (FAESI)", sigla: "FAESI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2582": { code: "2582", label: "FACULDADE DE ENSINO SUPERIOR DO CENTRO DO PARANÁ (UCP)", sigla: "UCP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4000": { code: "4000", label: "FACULDADE DE ENSINO SUPERIOR DO INTERIOR PAULISTA (FAIP)", sigla: "FAIP", category: "Faculdade", oa: "Privada", ci: "5", igc: "4" },
	  "4201": { code: "4201", label: "FACULDADE DE ENSINO SUPERIOR DO NORDESTE (FAESNE)", sigla: "FAESNE", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1677": { code: "1677", label: "FACULDADE DE ENSINO SUPERIOR DO PIAUÍ (FAESPI)", sigla: "FAESPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "16816": { code: "16816", label: "Faculdade de Ensino Superior do Sul do Pará (FESSULPA)", sigla: "FESSULPA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3393": { code: "3393", label: "FACULDADE DE ENSINO SUPERIOR DOM BOSCO (FACDOMBOSCO)", sigla: "FACDOMBOSCO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1307": { code: "1307", label: "FACULDADE DE ENSINO SUPERIOR E FORMAÇÃO INTEGRAL (FAEF)", sigla: "FAEF", category: "Faculdade", oa: "Privada", ci: "-", igc: "4" },
	  "4605": { code: "4605", label: "FACULDADE DE ENSINO SUPERIOR KM 125", sigla: "KM125", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "3940": { code: "3940", label: "FACULDADE DE ENSINO SUPERIOR SANTA BARBARA (FAESB)", sigla: "FAESB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1139": { code: "1139", label: "FACULDADE DE ESTUDOS ADMINISTRATIVOS DE MINAS GERAIS - FEAD-MG (FEAD - MG)", sigla: "FEAD - MG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2459": { code: "2459", label: "FACULDADE DE ESTUDOS AVANÇADOS DO PARÁ (FEAPA)", sigla: "FEAPA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "874": { code: "874", label: "FACULDADE DE ESTUDOS SOCIAIS APLICADOS DE VIANA (FESAV)", sigla: "FESAV", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "1240": { code: "1240", label: "FACULDADE DE ESTUDOS SOCIAIS DO ESPÍRITO SANTO (PIO XII)", sigla: "PIO XII", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1825": { code: "1825", label: "FACULDADE DE ESTUDOS SUPERIORES DE MINAS GERAIS (FEAD)", sigla: "FEAD", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "18623": { code: "18623", label: "FACULDADE DE ESTUDOS SUPERIORES DO MARANHÃO (FESCEMP)", sigla: "FESCEMP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "3224": { code: "3224", label: "FACULDADE DE FARMÁCIA E BIOQUÍMICA (ITPAC)", sigla: "ITPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "959": { code: "959", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS (FAFIL)", sigla: "FAFIL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "624": { code: "624", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS CARLOS QUEIROZ (FAFIQUE)", sigla: "FAFIQUE", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "78": { code: "78", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS DE ALEGRE (FAFIA)", sigla: "FAFIA", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "159": { code: "159", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS DE CARUARU (FAFICA)", sigla: "FAFICA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "990": { code: "990", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS DE CONGONHAS (FAFIC)", sigla: "FAFIC", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "438": { code: "438", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS DE ITUVERAVA (FFCL)", sigla: "FFCL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "84": { code: "84", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS DE MACAÉ (FAFIMA)", sigla: "FAFIMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "68": { code: "68", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS DE PENÁPOLIS (FAFIPE)", sigla: "FAFIPE", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "74": { code: "74", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS DE SÃO JOSÉ DO RIO PARDO (FFCL)", sigla: "FFCL", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "474": { code: "474", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS DOM BOSCO (FFCLDB)", sigla: "FFCLDB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "615": { code: "615", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS PROFESSORA NAIR FORTES ABU-MERHY (FAFI - PRONAFOR)", sigla: "FAFI - PRONAFOR", category: "Faculdade", oa: "Pública", ci: "3", igc: "SC" },
	  "192": { code: "192", label: "FACULDADE DE FILOSOFIA CIÊNCIAS E LETRAS SOUZA MARQUES (FFCLSM)", sigla: "FFCLSM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "824": { code: "824", label: "FACULDADE DE FILOSOFIA E CIÊNCIAS HUMANAS DE GOIATUBA (FAFICH)", sigla: "FAFICH", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "2389": { code: "2389", label: "FACULDADE DE FILOSOFIA E TEOLOGIA PAULO VI (FFTP)", sigla: "FFTP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "614": { code: "614", label: "FACULDADE DE FILOSOFIA SANTA DOROTÉIA (FFSD)", sigla: "FFSD", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "554": { code: "554", label: "FACULDADE DE FILOSOFIA, CIÊNCIAS E LETRAS DE BOA ESPERANÇA (FAFIBE)", sigla: "FAFIBE", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1076": { code: "1076", label: "FACULDADE DE FILOSOFIA, CIÊNCIAS E LETRAS DE CAJAZEIRAS (FAFIC)", sigla: "FAFIC", category: "Faculdade", oa: "Privada", ci: "5", igc: "3" },
	  "218": { code: "218", label: "FACULDADE DE FILOSOFIA, CIÊNCIAS E LETRAS DE DUQUE DE CAXIAS (FFCLDC)", sigla: "FFCLDC", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "1875": { code: "1875", label: "FACULDADE DE FILOSOFIA, CIÊNCIAS E LETRAS DE IBITINGA (FAIBI)", sigla: "FAIBI", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "468": { code: "468", label: "FACULDADE DE FILOSOFIA, CIÊNCIAS E LETRAS DE ITAPETININGA (FFCLI)", sigla: "FFCLI", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "256": { code: "256", label: "FACULDADE DE FILOSOFIA, CIÊNCIAS E LETRAS DE PIRAJU (FAFIP)", sigla: "FAFIP", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "727": { code: "727", label: "FACULDADE DE FILOSOFIA, CIÊNCIAS E LETRAS DO ALTO SÃO FRANCISCO (FASF)", sigla: "FASF", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1532": { code: "1532", label: "FACULDADE DE FILOSOFIA, CIÊNCIAS E LETRAS NOSSA SENHORA APARECIDA (FNSA)", sigla: "FNSA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "72": { code: "72", label: "FACULDADE DE FORMAÇÃO DE PROFESSORES DA MATA SUL (FAMASUL)", sigla: "FAMASUL", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "1012": { code: "1012", label: "FACULDADE DE FORMAÇÃO DE PROFESSORES DE AFOGADOS DA INGAZEIRA (FAFOPAI)", sigla: "FAFOPAI", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "703": { code: "703", label: "FACULDADE DE FORMAÇÃO DE PROFESSORES DE ARARIPINA (FAFOPA)", sigla: "FAFOPA", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "657": { code: "657", label: "FACULDADE DE FORMAÇÃO DE PROFESSORES DE SERRA TALHADA (FAFOPST)", sigla: "FAFOPST", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "455": { code: "455", label: "FACULDADE DE FORMAÇÃO DE PROFESSORES E ESPECIALISTAS DE EDUCAÇÃO (FAFOPEE)", sigla: "FAFOPEE", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "2240": { code: "2240", label: "FACULDADE DE FORTALEZA (FAFOR)", sigla: "FAFOR", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "15526": { code: "15526", label: "FACULDADE DE GESTAO E NEGOCIOS DE FORTALEZA (FGNF)", sigla: "FGNF", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "14996": { code: "14996", label: "FACULDADE DE GESTAO E NEGOCIOS DE SALVADOR (FGN)", sigla: "FGN", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "3339": { code: "3339", label: "FACULDADE DE GETÚLIO VARGAS (FACULDADE IDEAU)", sigla: "FACULDADE IDEAU", category: "Faculdade", oa: "Privada", ci: "-", igc: "4" },
	  "2023": { code: "2023", label: "FACULDADE DE GUANAMBI", sigla: "GUANAMBI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1724": { code: "1724", label: "FACULDADE DE GUARARAPES (FAG)", sigla: "FAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "886": { code: "886", label: "FACULDADE DE HORTOLÂNDIA (FACH)", sigla: "FACH", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1562": { code: "1562", label: "FACULDADE DE ILHA SOLTEIRA (FAISA)", sigla: "FAISA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1717": { code: "1717", label: "FACULDADE DE IMPERATRIZ (FACIMP)", sigla: "FACIMP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "866": { code: "866", label: "FACULDADE DE INFORMÁTICA DE CUIABÁ (FIC)", sigla: "FIC", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "2779": { code: "2779", label: "FACULDADE DE INFORMÁTICA DE OURO PRETO DO OESTE (FIOURO)", sigla: "FIOURO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1706": { code: "1706", label: "FACULDADE DE INFORMÁTICA DO RECIFE (FACIR)", sigla: "FACIR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "852": { code: "852", label: "FACULDADE DE INFORMÁTICA E ADMINISTRAÇÃO PAULISTA (FIAP)", sigla: "FIAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1324": { code: "1324", label: "FACULDADE DE INFORMÁTICA LEMOS DE CASTRO (FILC)", sigla: "FILC", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "4259": { code: "4259", label: "FACULDADE DE INHUMAS - FAC-MAIS (FACMAIS)", sigla: "FACMAIS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2478": { code: "2478", label: "FACULDADE DE INTEGRAÇÃO DO ENSINO SUPERIOR DO CONE SUL (FISUL)", sigla: "FISUL", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "3881": { code: "3881", label: "FACULDADE DE INTEGRAÇÃO DO SERTÃO (FIS)", sigla: "FIS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2796": { code: "2796", label: "FACULDADE DE IPORÁ (FAI)", sigla: "FAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2079": { code: "2079", label: "FACULDADE DE ITAITUBA (FAI)", sigla: "FAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4028": { code: "4028", label: "FACULDADE DE ITAPECERICA DA SERRA (FIT)", sigla: "FIT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2861": { code: "2861", label: "FACULDADE DE ITAPETININGA (FI)", sigla: "FI", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "1773": { code: "1773", label: "FACULDADE DE ITAPIRANGA (SEI/FAI)", sigla: "SEI/FAI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1279": { code: "1279", label: "FACULDADE DE ITÁPOLIS - FACITA (FACITA)", sigla: "FACITA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1832": { code: "1832", label: "FACULDADE DE JABOTICABAL (FAJAB)", sigla: "FAJAB", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "1490": { code: "1490", label: "FACULDADE DE JAGUARIÚNA (FAJ)", sigla: "FAJ", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "299": { code: "299", label: "FACULDADE DE JANDAIA DO SUL (FAFIJAN)", sigla: "FAFIJAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15173": { code: "15173", label: "Faculdade de Jaraguá", sigla: "FAJARAGUA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1765": { code: "1765", label: "FACULDADE DE JOSÉ BONIFÁCIO (FJB)", sigla: "FJB", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2593": { code: "2593", label: "FACULDADE DE JUAZEIRO DO NORTE (FJN)", sigla: "FJN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3302": { code: "3302", label: "FACULDADE DE JUNQUEIRÓPOLIS (ISEJ)", sigla: "ISEJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1067": { code: "1067", label: "FACULDADE DE JUSSARA (FAJ)", sigla: "FAJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "973": { code: "973", label: "FACULDADE DE LUCÉLIA", sigla: "FALUCELIA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2773": { code: "2773", label: "FACULDADE DE MACAPÁ (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13938": { code: "13938", label: "FACULDADE DE MARÍLIA (FAMAR)", sigla: "FAMAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "12946": { code: "12946", label: "FACULDADE DE MATO GROSSO (FAMAT)", sigla: "FAMAT", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1804": { code: "1804", label: "FACULDADE DE MAUÁ - FAMA (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3226": { code: "3226", label: "FACULDADE DE MEDICINA (ITPAC)", sigla: "ITPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "307": { code: "307", label: "FACULDADE DE MEDICINA DE BARBACENA (FAME)", sigla: "FAME", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "506": { code: "506", label: "FACULDADE DE MEDICINA DE CAMPOS (FMC)", sigla: "FMC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "284": { code: "284", label: "FACULDADE DE MEDICINA DE ITAJUBÁ (FMIT)", sigla: "FMIT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "93": { code: "93", label: "FACULDADE DE MEDICINA DE JUNDIAÍ (FMJ)", sigla: "FMJ", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "431": { code: "431", label: "FACULDADE DE MEDICINA DE MARÍLIA (FAMEMA)", sigla: "FAMEMA", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "16879": { code: "16879", label: "Faculdade de Medicina de Olinda (FMO)", sigla: "FMO", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "475": { code: "475", label: "FACULDADE DE MEDICINA DE PETRÓPOLIS (FMP)", sigla: "FMP", category: "Faculdade", oa: "Privada", ci: "5", igc: "3" },
	  "149": { code: "149", label: "FACULDADE DE MEDICINA DE SÃO JOSÉ DO RIO PRETO (FAMERP)", sigla: "FAMERP", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "224": { code: "224", label: "FACULDADE DE MEDICINA DO ABC (FMABC)", sigla: "FMABC", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1547": { code: "1547", label: "FACULDADE DE MEDICINA ESTÁCIO DE JUAZEIRO DO NORTE (ESTÁCIO FMJ)", sigla: "ESTÁCIO FMJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1995": { code: "1995", label: "FACULDADE DE MEDICINA NOVA ESPERANÇA (FAMENE)", sigla: "FAMENE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1913": { code: "1913", label: "FACULDADE DE MINAS (FAMINAS)", sigla: "FAMINAS", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "3194": { code: "3194", label: "FACULDADE DE MINAS BH (FAMINAS-BH)", sigla: "FAMINAS-BH", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1371": { code: "1371", label: "FACULDADE DE MIRANDÓPOLIS (FAM)", sigla: "FAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1886": { code: "1886", label: "FACULDADE DE MONTE ALTO (FMA)", sigla: "FMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "371": { code: "371", label: "FACULDADE DE MÚSICA CARLOS GOMES (FMCG)", sigla: "FMCG", category: "Faculdade", oa: "Privada", ci: "3", igc: "1" },
	  "530": { code: "530", label: "FACULDADE DE MÚSICA DO ESPÍRITO SANTO (FAMES)", sigla: "FAMES", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "12611": { code: "12611", label: "FACULDADE DE MÚSICA SOUZA LIMA (FMSL)", sigla: "FMSL", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3530": { code: "3530", label: "FACULDADE DE NANUQUE (FANAN)", sigla: "FANAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17091": { code: "17091", label: "Faculdade de Negócios do Recife (FAN-Recife)", sigla: "FAN-Recife", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1940": { code: "1940", label: "FACULDADE DE NOVA SERRANA (FANS)", sigla: "FANS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3238": { code: "3238", label: "FACULDADE DE ODONTOLOGIA (ITPAC)", sigla: "ITPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1592": { code: "1592", label: "FACULDADE DE ODONTOLOGIA DE MANAUS (FOM)", sigla: "FOM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3146": { code: "3146", label: "FACULDADE DE ODONTOLOGIA DO RECIFE (FOR)", sigla: "FOR", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1950": { code: "1950", label: "FACULDADE DE ORLÂNDIA (FAO)", sigla: "FAO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4592": { code: "4592", label: "FACULDADE DE OURO PRETO DO OESTE (UNEOURO)", sigla: "UNEOURO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2148": { code: "2148", label: "FACULDADE DE PALMAS (FAPAL)", sigla: "FAPAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "752": { code: "752", label: "FACULDADE DE PARÁ DE MINAS (FAPAM)", sigla: "FAPAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1519": { code: "1519", label: "FACULDADE DE PATO BRANCO (FADEP)", sigla: "FADEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4740": { code: "4740", label: "FACULDADE DE PATROCINIO (IESP)", sigla: "IESP", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1949": { code: "1949", label: "FACULDADE DE PAULÍNIA (FACP)", sigla: "FACP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1248": { code: "1248", label: "FACULDADE DE PEDAGOGIA (ANAEC)", sigla: "ANAEC", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "1358": { code: "1358", label: "FACULDADE DE PEDAGOGIA DE AFONSO CLÁUDIO (ISEAC)", sigla: "ISEAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2032": { code: "2032", label: "FACULDADE DE PEDAGOGIA E FORMAÇÃO DE NORMALISTAS DE ARAGUAÍNA (ITPAC)", sigla: "ITPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1403": { code: "1403", label: "FACULDADE DE PIMENTA BUENO (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1535": { code: "1535", label: "Faculdade de Pinhais (FAPI)", sigla: "FAPI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1404": { code: "1404", label: "FACULDADE DE PIRACANJUBA (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "779": { code: "779", label: "FACULDADE DE PONTA PORÃ (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13796": { code: "13796", label: "FACULDADE DE PORTO FELIZ", sigla: "FAPORTOF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1722": { code: "1722", label: "FACULDADE DE PORTO VELHO (FIP)", sigla: "FIP", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "1096": { code: "1096", label: "FACULDADE DE PRESIDENTE EPITÁCIO - FAPE (FAPE)", sigla: "FAPE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1711": { code: "1711", label: "FACULDADE DE PRESIDENTE PRUDENTE (FAPEPE)", sigla: "FAPEPE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3513": { code: "3513", label: "FACULDADE DE PRESIDENTE VENCESLAU (FAPREV)", sigla: "FAPREV", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1413": { code: "1413", label: "FACULDADE DE PRIMAVERA (CESPRI)", sigla: "CESPRI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3204": { code: "3204", label: "FACULDADE DE QUATRO MARCOS (FQM)", sigla: "FQM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17670": { code: "17670", label: "Faculdade de Quixeramobim (UniQ)", sigla: "UniQ", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "677": { code: "677", label: "FACULDADE DE REABILITAÇÃO DA ASCE (FRASCE)", sigla: "FRASCE", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "1800": { code: "1800", label: "FACULDADE DE REALEZA (CESREAL)", sigla: "CESREAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1465": { code: "1465", label: "FACULDADE DE RIBEIRÃO PRETO (AFARP)", sigla: "AFARP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2022": { code: "2022", label: "FACULDADE DE ROLIM DE MOURA (FAROL)", sigla: "FAROL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "788": { code: "788", label: "FACULDADE DE RONDÔNIA (FARO)", sigla: "FARO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4090": { code: "4090", label: "FACULDADE DE ROSEIRA (FARO)", sigla: "FARO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1174": { code: "1174", label: "FACULDADE DE SABARÁ (SOECS)", sigla: "SOECS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2174": { code: "2174", label: "FACULDADE DE SANTA CATARINA (FASC)", sigla: "FASC", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "13782": { code: "13782", label: "FACULDADE DE SANTA CRUZ DA BAHIA (FSC)", sigla: "FSC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1921": { code: "1921", label: "FACULDADE DE SÃO BENTO (FSB)", sigla: "FSB", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "231": { code: "231", label: "FACULDADE DE SÃO BERNARDO DO CAMPO - FASB (FASB I)", sigla: "FASB I", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4983": { code: "4983", label: "FACULDADE DE SÃO JOSÉ DOS CAMPOS (BILAC)", sigla: "BILAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "828": { code: "828", label: "FACULDADE DE SÃO LOURENÇO (FASAMA)", sigla: "FASAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "416": { code: "416", label: "FACULDADE DE SÃO PAULO (FASP)", sigla: "FASP", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "3186": { code: "3186", label: "FACULDADE DE SÃO ROQUE (FAEV)", sigla: "FAEV", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1690": { code: "1690", label: "FACULDADE DE SÃO VICENTE (FSV)", sigla: "FSV", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "10613": { code: "10613", label: "FACULDADE DE SAÚDE DE PAULISTA (FASUP)", sigla: "FASUP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3400": { code: "3400", label: "FACULDADE DE SAÚDE DE SÃO PAULO (FASSP)", sigla: "FASSP", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "3117": { code: "3117", label: "FACULDADE DE SAÚDE E DESENVOLVIMENTO HUMANO SANTO AGOSTINHO (FS)", sigla: "FS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3434": { code: "3434", label: "FACULDADE DE SAÚDE IBITURUNA (FASI)", sigla: "FASI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17498": { code: "17498", label: "FACULDADE DE SAÚDE SANTO AGOSTINHO DE VITÓRIA DA CONQUISTA (FASA)", sigla: "FASA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1489": { code: "1489", label: "FACULDADE DE SELVÍRIA (FAS)", sigla: "FAS", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "3227": { code: "3227", label: "FACULDADE DE SISTEMA DE INFORMAÇÃO (ITPAC)", sigla: "ITPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "2366": { code: "2366", label: "FACULDADE DE SISTEMAS DE INFORMAÇÃO DE PARAÍSO DO TOCANTINS (FSIP)", sigla: "FSIP", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "2399": { code: "2399", label: "FACULDADE DE SOROCABA", sigla: "FASOROCABA", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1945": { code: "1945", label: "FACULDADE DE SORRISO (FAIS)", sigla: "FAIS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2935": { code: "2935", label: "FACULDADE DE TALENTOS HUMANOS (FACTHUS)", sigla: "FACTHUS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2009": { code: "2009", label: "FACULDADE DE TAQUARITINGA (FTGA)", sigla: "FTGA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "15236": { code: "15236", label: "FACULDADE DE TECNOLOGIA ALCIDES MAYA (AMTEC)", sigla: "AMTEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4765": { code: "4765", label: "FACULDADE DE TECNOLOGIA ALFA DE UMUARAMA", sigla: "FATUMUARIAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "19252": { code: "19252", label: "Faculdade de Tecnologia Alpha Channel (FATAC)", sigla: "FATAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "11428": { code: "11428", label: "FACULDADE DE TECNOLOGIA ALTO MÉDIO SÃO FRANCISCO (FAC FUNAM)", sigla: "FAC FUNAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1745": { code: "1745", label: "Faculdade de Tecnologia Alvares de Azevedo (FAATESP)", sigla: "FAATESP", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "4357": { code: "4357", label: "FACULDADE DE TECNOLOGIA ÁLVARES DE AZEVEDO (FAATESP)", sigla: "FAATESP", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "4330": { code: "4330", label: "FACULDADE DE TECNOLOGIA AMÉRICA DO SUL", sigla: "AMERICASUL", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "16453": { code: "16453", label: "Faculdade de Tecnologia Apoena (FTA)", sigla: "FTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "4610": { code: "4610", label: "FACULDADE DE TECNOLOGIA ASSESSORITEC", sigla: "ASSESSORITEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "13657": { code: "13657", label: "FACULDADE DE TECNOLOGIA ATENEU", sigla: "FTATENEU", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "10323": { code: "10323", label: "FACULDADE DE TECNOLOGIA BANDEIRANTES (BANDTEC)", sigla: "BANDTEC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "13890": { code: "13890", label: "FACULDADE DE TECNOLOGIA BSG-U (FBSG-U)", sigla: "FBSG-U", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3782": { code: "3782", label: "FACULDADE DE TECNOLOGIA CACHOEIRO DE ITAPEMIRIM (FACI)", sigla: "FACI", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1742": { code: "1742", label: "FACULDADE DE TECNOLOGIA CARLOS DRUMMOND DE ANDRADE (CSET DRUMMOND)", sigla: "CSET DRUMMOND", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4791": { code: "4791", label: "FACULDADE DE TECNOLOGIA CENTEC - CARIRI (CENTEC)", sigla: "CENTEC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4992": { code: "4992", label: "FACULDADE DE TECNOLOGIA CENTEC - SERTÃO CENTRAL (FTC SERTÃO CENTRAL)", sigla: "FTC SERTÃO CENTRAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4209": { code: "4209", label: "FACULDADE DE TECNOLOGIA CÉSAR LATTES", sigla: "FALATTES", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3993": { code: "3993", label: "FACULDADE DE TECNOLOGIA CETEP (CETEP)", sigla: "CETEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "17401": { code: "17401", label: "Faculdade de Tecnologia CNA (FATECNA)", sigla: "FATECNA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17563": { code: "17563", label: "FACULDADE DE TECNOLOGIA COESP (FCOESP)", sigla: "FCOESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3805": { code: "3805", label: "FACULDADE DE TECNOLOGIA DA PARAÍBA (FATECPB)", sigla: "FATECPB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "12523": { code: "12523", label: "FACULDADE DE TECNOLOGIA DA SERRA GAÚCHA - BENTO CONÇALVES (FTSG)", sigla: "FTSG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "11563": { code: "11563", label: "FACULDADE DE TECNOLOGIA DA SERRA GAÚCHA - CAXIAS DO SUL (FTSG)", sigla: "FTSG", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1965": { code: "1965", label: "FACULDADE DE TECNOLOGIA DE ALAGOAS (FAT/AL)", sigla: "FAT/AL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "35": { code: "35", label: "FACULDADE DE TECNOLOGIA DE AMERICANA (FATEC-AM)", sigla: "FATEC-AM", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "13764": { code: "13764", label: "FACULDADE DE TECNOLOGIA DE AMPÉRE (FAMPERTEC)", sigla: "FAMPERTEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15697": { code: "15697", label: "Faculdade de Tecnologia de Araçatuba (FATEC Araçatuba)", sigla: "FATEC Araçatuba", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "19863": { code: "19863", label: "Faculdade de Tecnologia de Assis (FATEC Assis)", sigla: "FATEC Assis", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "13498": { code: "13498", label: "FACULDADE DE TECNOLOGIA DE BARRETOS (FATEB)", sigla: "FATEB", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15757": { code: "15757", label: "Faculdade de Tecnologia de Barueri (Fatec Barueri)", sigla: "Fatec Barueri", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "15689": { code: "15689", label: "Faculdade de Tecnologia de Bauru (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "4020": { code: "4020", label: "FACULDADE DE TECNOLOGIA DE BOTUCATU (FATEC BT)", sigla: "FATEC BT", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "5633": { code: "5633", label: "FACULDADE DE TECNOLOGIA DE BRAGANÇA PAULISTA", sigla: "FATECBRAGP", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "19739": { code: "19739", label: "Faculdade de Tecnologia de Campinas (FATEC CAMPINAS)", sigla: "FATEC CAMPINAS", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "15704": { code: "15704", label: "Faculdade de Tecnologia de Capão Bonito (FATEC-CB)", sigla: "FATEC-CB", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "16395": { code: "16395", label: "Faculdade de Tecnologia de Carapicuiba (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "4036": { code: "4036", label: "FACULDADE DE TECNOLOGIA DE CATALÃO (FATECA)", sigla: "FATECA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "16410": { code: "16410", label: "Faculdade de Tecnologia de Catanduva (FATEC Catanduva)", sigla: "FATEC Catanduva", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "19578": { code: "19578", label: "Faculdade de Tecnologia de Cotia (FATEC COTIA)", sigla: "FATEC COTIA", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "12268": { code: "12268", label: "FACULDADE DE TECNOLOGIA DE CRUZEIRO DO OESTE (FACO)", sigla: "FACO", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4093": { code: "4093", label: "FACULDADE DE TECNOLOGIA DE CURITIBA (FATEC-PR)", sigla: "FATEC-PR", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "18099": { code: "18099", label: "Faculdade de Tecnologia de Diadema Luigi Papaiz (FATEC DIADEMA)", sigla: "FATEC DIADEMA", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "10059": { code: "10059", label: "FACULDADE DE TECNOLOGIA DE ENSINO SUPERIOR - FATEC (CENTES)", sigla: "CENTES", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "4021": { code: "4021", label: "FACULDADE DE TECNOLOGIA DE GARÇA (FATECGA)", sigla: "FATECGA", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "4077": { code: "4077", label: "FACULDADE DE TECNOLOGIA DE GRAVATAÍ (FAQI)", sigla: "FAQI", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1584": { code: "1584", label: "FACULDADE DE TECNOLOGIA DE GUARATINGUETÁ (FATEC GT)", sigla: "FATEC GT", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "15752": { code: "15752", label: "Faculdade de Tecnologia de Guarulhos (FATEC GR)", sigla: "FATEC GR", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "1583": { code: "1583", label: "FACULDADE DE TECNOLOGIA DE INDAIATUBA (FATEC-ID)", sigla: "FATEC-ID", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "15693": { code: "15693", label: "Faculdade de Tecnologia de Itapetininga - Prof.Antônio Belizandro Barbosa Rezende (Fatec - Itapetininga)", sigla: "Fatec - Itapetininga", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "15639": { code: "15639", label: "Faculdade de Tecnologia de Itaquaquecetuba (Fatec Itaqua)", sigla: "Fatec Itaqua", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "17977": { code: "17977", label: "Faculdade de Tecnologia de Itaquera (FATEC ITAQUERA)", sigla: "FATEC ITAQUERA", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "15753": { code: "15753", label: "FACULDADE DE TECNOLOGIA DE JABOTICABAL (FATEC JB)", sigla: "FATEC JB", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "778": { code: "778", label: "FACULDADE DE TECNOLOGIA DE JACAREÍ (ETEP)", sigla: "ETEP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "17952": { code: "17952", label: "Faculdade de Tecnologia de Jacareí (FATEC Jacareí)", sigla: "FATEC Jacareí", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "37": { code: "37", label: "FACULDADE DE TECNOLOGIA DE JAHU (FATEC-JAHU)", sigla: "FATEC-JAHU", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "15769": { code: "15769", label: "Faculdade de Tecnologia de Jales (Fatec Jales)", sigla: "Fatec Jales", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "3989": { code: "3989", label: "FACULDADE DE TECNOLOGIA DE JOÃO PESSOA (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Privada", ci: "2", igc: "-" },
	  "4022": { code: "4022", label: "FACULDADE DE TECNOLOGIA DE JUNDIAÍ (FATEC/JD)", sigla: "FATEC/JD", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "11593": { code: "11593", label: "FACULDADE DE TECNOLOGIA DE MACAPÁ (FTA)", sigla: "FTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4023": { code: "4023", label: "FACULDADE DE TECNOLOGIA DE MAUÁ (FATEC MAUÁ)", sigla: "FATEC MAUÁ", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "3794": { code: "3794", label: "FACULDADE DE TECNOLOGIA DE MINAS GERAIS (FATEMG)", sigla: "FATEMG", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "4024": { code: "4024", label: "FACULDADE DE TECNOLOGIA DE MOCOCA (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "15576": { code: "15576", label: "Faculdade de Tecnologia de Mogi das Cruzes (FATEC-MC)", sigla: "FATEC-MC", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "4693": { code: "4693", label: "FACULDADE DE TECNOLOGIA DE NOVA ANDRADINA", sigla: "FATANDRADINA", category: "Faculdade", oa: "Privada", ci: "-", igc: "1" },
	  "14158": { code: "14158", label: "FACULDADE DE TECNOLOGIA DE NOVO CABRAIS", sigla: "FTCABRAIS", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15709": { code: "15709", label: "Faculdade de Tecnologia de Osasco - Prefeito Hirant Sanazar (Fatec Osasco)", sigla: "Fatec Osasco", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "1874": { code: "1874", label: "FACULDADE DE TECNOLOGIA DE OURINHOS (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "4355": { code: "4355", label: "FACULDADE DE TECNOLOGIA DE PALMAS (FTP)", sigla: "FTP", category: "Faculdade", oa: "Privada", ci: "2", igc: "-" },
	  "15687": { code: "15687", label: "Faculdade de Tecnologia de Pindamonhangaba (FATEC PI)", sigla: "FATEC PI", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "15682": { code: "15682", label: "Faculdade de Tecnologia de Piracicaba (Fatec Piracicaba)", sigla: "Fatec Piracicaba", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "4150": { code: "4150", label: "FACULDADE DE TECNOLOGIA DE PIRACICABA (FATEP)", sigla: "FATEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17953": { code: "17953", label: "Faculdade de Tecnologia de Pompeia - Shunji Nishimura (FATEC Pompeia)", sigla: "FATEC Pompeia", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "4261": { code: "4261", label: "FACULDADE DE TECNOLOGIA DE PORTO ALEGRE (FAQI)", sigla: "FAQI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4926": { code: "4926", label: "FACULDADE DE TECNOLOGIA DE PRAIA GRANDE (FATECPG)", sigla: "FATECPG", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "5627": { code: "5627", label: "FACULDADE DE TECNOLOGIA DE PRESIDENTE PRUDENTE (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "4748": { code: "4748", label: "FACULDADE DE TECNOLOGIA DE SANTA CATARINA (FATESC)", sigla: "FATESC", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "20478": { code: "20478", label: "Faculdade de Tecnologia de Santana de Parnaíba (FATEC-SPB)", sigla: "FATEC-SPB", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "5099": { code: "5099", label: "FACULDADE DE TECNOLOGIA DE SÃO BERNARDO DO CAMPO (FATEC-SB)", sigla: "FATEC-SB", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "15745": { code: "15745", label: "Faculdade de Tecnologia de São Caetano do Sul (FATEC SCS)", sigla: "FATEC SCS", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "19500": { code: "19500", label: "Faculdade de Tecnologia de São Carlos (FATEC São Carlo)", sigla: "FATEC São Carlo", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "4025": { code: "4025", label: "FACULDADE DE TECNOLOGIA DE SÃO JOSÉ DO RIO PRETO (FATECRP)", sigla: "FATECRP", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "15581": { code: "15581", label: "Faculdade de Tecnologia de São José dos Campos - Jessen Vidal (FATECSJCAMPOS)", sigla: "FATECSJCAMPOS", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "5669": { code: "5669", label: "FACULDADE DE TECNOLOGIA DE SÃO JOSÉ DOS CAMPOS (ETEP)", sigla: "ETEP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "34": { code: "34", label: "FACULDADE DE TECNOLOGIA DE SÃO PAULO (FATEC-SP)", sigla: "FATEC-SP", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "18817": { code: "18817", label: "Faculdade de Tecnologia de São Roque (FATEC-SR)", sigla: "FATEC-SR", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "15793": { code: "15793", label: "Faculdade de Tecnologia de São Sebastião (Fatec SS)", sigla: "Fatec SS", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "1713": { code: "1713", label: "FACULDADE DE TECNOLOGIA DE SÃO VICENTE (FATEF)", sigla: "FATEF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15696": { code: "15696", label: "Faculdade de Tecnologia de Sertãozinho (FATEC SERTÃOZINHO)", sigla: "FATEC SERTÃOZINHO", category: "Faculdade", oa: "Pública", ci: "-", igc: "SC" },
	  "33": { code: "33", label: "FACULDADE DE TECNOLOGIA DE SOROCABA (FATEC SO)", sigla: "FATEC SO", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "967": { code: "967", label: "FACULDADE DE TECNOLOGIA DE TAQUARITINGA (FATEC/TQ)", sigla: "FATEC/TQ", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "15803": { code: "15803", label: "FACULDADE DE TECNOLOGIA DE TATUÍ - PROF. WILSON ROBERTO RIBEIRO DE CAMARGO (FATEC TATUÍ)", sigla: "FATEC TATUÍ", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "4873": { code: "4873", label: "FACULDADE DE TECNOLOGIA DE TAUBATÉ (ETEP)", sigla: "ETEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18049": { code: "18049", label: "Faculdade de Tecnologia de Taubaté (FATEC TAUBATÉ)", sigla: "FATEC TAUBATÉ", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "3337": { code: "3337", label: "FACULDADE DE TECNOLOGIA DE TERESINA (FACULDADE CET)", sigla: "FACULDADE CET", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "10058": { code: "10058", label: "FACULDADE DE TECNOLOGIA DE VALENÇA (FACTIVA)", sigla: "FACTIVA", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "3977": { code: "3977", label: "FACULDADE DE TECNOLOGIA DO AMAPÁ (META)", sigla: "META", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "3173": { code: "3173", label: "FACULDADE DE TECNOLOGIA DO COMÉRCIO (FATEC-COMERCIO)", sigla: "FATEC-COMERCIO", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14181": { code: "14181", label: "FACULDADE DE TECNOLOGIA DO COOPERATIVISMO", sigla: "FTCOOP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4065": { code: "4065", label: "FACULDADE DE TECNOLOGIA DO INSTITUTO BANDEIRANTE DE EDUCAÇÃO E CULTURA (IBEC)", sigla: "IBEC", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "14869": { code: "14869", label: "Faculdade de Tecnologia do Ipê (FAIPE)", sigla: "FAIPE", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15746": { code: "15746", label: "Faculdade de Tecnologia do Ipiranga (FATECIPI)", sigla: "FATECIPI", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "11807": { code: "11807", label: "FACULDADE DE TECNOLOGIA DO ISTITUTO EUROPEO DI DESIGN (IED SP)", sigla: "IED SP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2783": { code: "2783", label: "FACULDADE DE TECNOLOGIA DO NORDESTE (FATENE)", sigla: "FATENE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1441": { code: "1441", label: "FACULDADE DE TECNOLOGIA DO PIAUÍ (FATEPI)", sigla: "FATEPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "12136": { code: "12136", label: "FACULDADE DE TECNOLOGIA DO RIO DE JANEIRO (FATERJ)", sigla: "FATERJ", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "17516": { code: "17516", label: "Faculdade de Tecnologia do SENAI Horácio Augusto da Silveira", sigla: "SENAIHORACIO", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "17942": { code: "17942", label: "Faculdade de Tecnologia do Tatuapé (FATEC-TT)", sigla: "FATEC-TT", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "10923": { code: "10923", label: "FACULDADE DE TECNOLOGIA DO TRANSPORTE", sigla: "FTRANSPORTE", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "4496": { code: "4496", label: "FACULDADE DE TECNOLOGIA DO VALE DO IVAÍ (FATEC-IVAI)", sigla: "FATEC-IVAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15695": { code: "15695", label: "Faculdade de Tecnologia Dom Amaury Castanho (Fatec Itu)", sigla: "Fatec Itu", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "17348": { code: "17348", label: "Faculdade de Tecnologia dos Inconfidentes (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15708": { code: "15708", label: "Faculdade de Tecnologia Dr. Thomaz Novelino (FATEC Franca)", sigla: "FATEC Franca", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "1461": { code: "1461", label: "FACULDADE DE TECNOLOGIA E CIÊNCIAS (FTC SALVADOR)", sigla: "FTC SALVADOR", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "12922": { code: "12922", label: "FACULDADE DE TECNOLOGIA E CIÊNCIAS DA BAHIA (FATEC/BA)", sigla: "FATEC/BA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1053": { code: "1053", label: "FACULDADE DE TECNOLOGIA E CIÊNCIAS DE FEIRA DE SANTANA (FTC)", sigla: "FTC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1642": { code: "1642", label: "FACULDADE DE TECNOLOGIA E CIÊNCIAS DE ITABUNA (FTC)", sigla: "FTC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1645": { code: "1645", label: "FACULDADE DE TECNOLOGIA E CIÊNCIAS DE JEQUIÉ (FTC)", sigla: "FTC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1803": { code: "1803", label: "FACULDADE DE TECNOLOGIA E CIÊNCIAS DE PERNAMBUCO (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "1364": { code: "1364", label: "FACULDADE DE TECNOLOGIA E CIÊNCIAS DE VITÓRIA DA CONQUISTA (FTC)", sigla: "FTC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4095": { code: "4095", label: "FACULDADE DE TECNOLOGIA E CIÊNCIAS DO DISTRITO FEDERAL (FATECDF)", sigla: "FATECDF", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "4751": { code: "4751", label: "FACULDADE DE TECNOLOGIA E CIENCIAS DO NORTE DO PARANÁ (FATECIE)", sigla: "FATECIE", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "11902": { code: "11902", label: "FACULDADE DE TECNOLOGIA E DESENVOLVIMENTO DE COMPETÊNCIAS (FDC)", sigla: "FDC", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "1762": { code: "1762", label: "FACULDADE DE TECNOLOGIA E NEGÓCIOS CARLOS DRUMMOND DE ANDRADE (FTNCDA)", sigla: "FTNCDA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17831": { code: "17831", label: "Faculdade de Tecnologia e Negócios de Catalão (FATENC)", sigla: "FATENC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4725": { code: "4725", label: "FACULDADE DE TECNOLOGIA EGÍDIO JOSÉ DA SILVA (FATEGIDIO)", sigla: "FATEGIDIO", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1964": { code: "1964", label: "FACULDADE DE TECNOLOGIA EM HOTELARIA, GASTRONOMIA E TURISMO DE SÃO PAULO (HOTEC)", sigla: "HOTEC", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "14961": { code: "14961", label: "FACULDADE DE TECNOLOGIA EM SAÚDE - IAHCS (FATESA)", sigla: "FATESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "14969": { code: "14969", label: "FACULDADE DE TECNOLOGIA EM SAÚDE (FATESA)", sigla: "FATESA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "13467": { code: "13467", label: "FACULDADE DE TECNOLOGIA EM SAÚDE CIEPH (FACTES)", sigla: "FACTES", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "3294": { code: "3294", label: "FACULDADE DE TECNOLOGIA ENIAC-FAPI (ENIAC)", sigla: "ENIAC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3790": { code: "3790", label: "FACULDADE DE TECNOLOGIA ENSITEC (ENSITEC)", sigla: "ENSITEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4009": { code: "4009", label: "FACULDADE DE TECNOLOGIA ESTÁCIO DE CURITIBA (FATEC ESTÁC CURITIBA)", sigla: "FATEC ESTÁC CURITIBA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15784": { code: "15784", label: "Faculdade de Tecnologia Estudante Rafael Almeida Camarinha - Marilia (Fatec Marilia)", sigla: "Fatec Marilia", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "4823": { code: "4823", label: "FACULDADE DE TECNOLOGIA EVOLUÇÃO (FECET)", sigla: "FECET", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4252": { code: "4252", label: "FACULDADE DE TECNOLOGIA EXPOENTE (FATEC-EXPOENTE)", sigla: "FATEC-EXPOENTE", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "4859": { code: "4859", label: "FACULDADE DE TECNOLOGIA FAESA - UNIDADE GUARAPARI", sigla: "FAESAGUARAPARI", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "12229": { code: "12229", label: "FACULDADE DE TECNOLOGIA FAESA - VILA VELHA (CETFAESA)", sigla: "CETFAESA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2569": { code: "2569", label: "FACULDADE DE TECNOLOGIA FAESA (CET-FAESA)", sigla: "CET-FAESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4064": { code: "4064", label: "FACULDADE DE TECNOLOGIA FAMA (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4590": { code: "4590", label: "FACULDADE DE TECNOLOGIA FATEP (FATEP)", sigla: "FATEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "12723": { code: "12723", label: "FACULDADE DE TECNOLOGIA FINACI (FINACI)", sigla: "FINACI", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "14858": { code: "14858", label: "FACULDADE DE TECNOLOGIA FRANCISCO MORATO (FFRAMO)", sigla: "FFRAMO", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "13452": { code: "13452", label: "FACULDADE DE TECNOLOGIA FUNDAÇÃO UNIVERSITÁRIA DE CARDIOLOGIA", sigla: "FFUCARDIO", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "14095": { code: "14095", label: "FACULDADE DE TECNOLOGIA FUTURO (Fatec Futuro)", sigla: "Fatec Futuro", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "13716": { code: "13716", label: "FACULDADE DE TECNOLOGIA GAP (GAP)", sigla: "GAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4702": { code: "4702", label: "FACULDADE DE TECNOLOGIA GESTÃO & MARKETING (IBGM / FGM)", sigla: "IBGM / FGM", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3807": { code: "3807", label: "FACULDADE DE TECNOLOGIA IAPEC (IAPEC)", sigla: "IAPEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "1" },
	  "13775": { code: "13775", label: "FACULDADE DE TECNOLOGIA IBRATE (FAITEC)", sigla: "FAITEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1944": { code: "1944", label: "FACULDADE DE TECNOLOGIA IBRATEC (IBRATEC)", sigla: "IBRATEC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2625": { code: "2625", label: "FACULDADE DE TECNOLOGIA IBTA - SÃO JOSÉ DOS CAMPOS (IBTA)", sigla: "IBTA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1853": { code: "1853", label: "FACULDADE DE TECNOLOGIA IBTA (IBTA)", sigla: "IBTA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3169": { code: "3169", label: "FACULDADE DE TECNOLOGIA IBTA CAMPINAS (IBTA)", sigla: "IBTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4204": { code: "4204", label: "FACULDADE DE TECNOLOGIA INED - UNIDADE IPATINGA (FATEC IPATINGA)", sigla: "FATEC IPATINGA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "4998": { code: "4998", label: "FACULDADE DE TECNOLOGIA INESUL DO PARANÁ (FIPAR)", sigla: "FIPAR", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "3299": { code: "3299", label: "FACULDADE DE TECNOLOGIA INFORMÁTICA (FATI)", sigla: "FATI", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14326": { code: "14326", label: "FACULDADE DE TECNOLOGIA INSAEOS (INSAEOS)", sigla: "INSAEOS", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "11818": { code: "11818", label: "FACULDADE DE TECNOLOGIA INSPIRAR (Inspirar)", sigla: "Inspirar", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3981": { code: "3981", label: "FACULDADE DE TECNOLOGIA INTEGRAL (CETI)", sigla: "CETI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4037": { code: "4037", label: "FACULDADE DE TECNOLOGIA INTENSIVA (FATECI)", sigla: "FATECI", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "1741": { code: "1741", label: "FACULDADE DE TECNOLOGIA INTERAMÉRICA (INTERAMERICA)", sigla: "INTERAMERICA", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "12923": { code: "12923", label: "FACULDADE DE TECNOLOGIA IPANEMA", sigla: "FATECIPANEMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3692": { code: "3692", label: "FACULDADE DE TECNOLOGIA IPEP DE CAMPINAS (FATEC CAMPINAS)", sigla: "FATEC CAMPINAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3693": { code: "3693", label: "FACULDADE DE TECNOLOGIA IPEP DE SÃO PAULO (FATEC SP)", sigla: "FATEC SP", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "10349": { code: "10349", label: "FACULDADE DE TECNOLOGIA IPPEO (IPPEO)", sigla: "IPPEO", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3306": { code: "3306", label: "FACULDADE DE TECNOLOGIA IPUC (FATIPUC)", sigla: "FATIPUC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13865": { code: "13865", label: "FACULDADE DE TECNOLOGIA ITEPA (FATEPA)", sigla: "FATEPA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "4086": { code: "4086", label: "FACULDADE DE TECNOLOGIA JARDIM (FATEJ)", sigla: "FATEJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "19862": { code: "19862", label: "Faculdade de Tecnologia Jorge Caram Sabbag (FATEC Bebedouro)", sigla: "FATEC Bebedouro", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "12338": { code: "12338", label: "FACULDADE DE TECNOLOGIA LA SALLE - ESTRELA (FACSALLE)", sigla: "FACSALLE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "13106": { code: "13106", label: "FACULDADE DE TECNOLOGIA LOURENÇO FILHO (FATEC FLF)", sigla: "FATEC FLF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3951": { code: "3951", label: "FACULDADE DE TECNOLOGIA LUIZ ADELAR SCHEUER (FATEC- JF)", sigla: "FATEC- JF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4584": { code: "4584", label: "FACULDADE DE TECNOLOGIA MACHADO DE ASSIS (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1748": { code: "1748", label: "FACULDADE DE TECNOLOGIA MÁRIO DE ANDRADE (FTMA)", sigla: "FTMA", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "3278": { code: "3278", label: "FACULDADE DE TECNOLOGIA MARTINUS (FACULDADES MARTINUS)", sigla: "FACULDADES MARTINUS", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "3300": { code: "3300", label: "FACULDADE DE TECNOLOGIA MICHEL (FATEMI)", sigla: "FATEMI", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "3837": { code: "3837", label: "FACULDADE DE TECNOLOGIA MÓDULO PAULISTA (FTMP)", sigla: "FTMP", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "13625": { code: "13625", label: "FACULDADE DE TECNOLOGIA NOVA PALHOÇA (FATENP)", sigla: "FATENP", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1743": { code: "1743", label: "FACULDADE DE TECNOLOGIA OSWALDO CRUZ (FATEC OSWALDO CRUZ)", sigla: "FATEC OSWALDO CRUZ", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5045": { code: "5045", label: "FACULDADE DE TECNOLOGIA PAULISTA", sigla: "FTECPAU", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "4092": { code: "4092", label: "FACULDADE DE TECNOLOGIA PEDRO ROGÉRIO GARCIA (FATTEP)", sigla: "FATTEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3978": { code: "3978", label: "FACULDADE DE TECNOLOGIA PENTÁGONO (FATEP)", sigla: "FATEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4869": { code: "4869", label: "Faculdade de Tecnologia Pitágotas - Unidade Londrina", sigla: "PITAGOTASLON", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "14401": { code: "14401", label: "FACULDADE DE TECNOLOGIA PORTO DAS MONÇÕES (FAMO)", sigla: "FAMO", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "14069": { code: "14069", label: "FACULDADE DE TECNOLOGIA PORTO SUL (FAPS)", sigla: "FAPS", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "15715": { code: "15715", label: "FACULDADE DE TECNOLOGIA PROFESSOR ANTÔNIO SEABRA (FATEC LINS)", sigla: "FATEC LINS", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "4199": { code: "4199", label: "FACULDADE DE TECNOLOGIA ROGACIONISTA (ROGA)", sigla: "ROGA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "36": { code: "36", label: "FACULDADE DE TECNOLOGIA RUBENS LARA (FATEC-BS)", sigla: "FATEC-BS", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "3697": { code: "3697", label: "FACULDADE DE TECNOLOGIA SAINT PASTOUS (FSP)", sigla: "FSP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "12661": { code: "12661", label: "FACULDADE DE TECNOLOGIA SAINT PAUL", sigla: "FTSAINTPAUL", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "15585": { code: "15585", label: "Faculdade de Tecnologia Santo André (FATEC-SA)", sigla: "FATEC-SA", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "3311": { code: "3311", label: "FACULDADE DE TECNOLOGIA SÃO FRANCISCO (FATESF)", sigla: "FATESF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3743": { code: "3743", label: "FACULDADE DE TECNOLOGIA SÃO FRANCISCO (FATESF)", sigla: "FATESF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3991": { code: "3991", label: "FACULDADE DE TECNOLOGIA SÃO MATEUS (FATESM)", sigla: "FATESM", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "19501": { code: "19501", label: "Faculdade de Tecnologia Sebrae (FATEC SEBRAE)", sigla: "FATEC SEBRAE", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "15135": { code: "15135", label: "FACULDADE DE TECNOLOGIA SENAC AMAZONAS", sigla: "SENACAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3948": { code: "3948", label: "FACULDADE DE TECNOLOGIA SENAC BLUMENAU (SENAC)", sigla: "SENAC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5131": { code: "5131", label: "FACULDADE DE TECNOLOGIA SENAC CAÇADOR (SENAC)", sigla: "SENAC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3947": { code: "3947", label: "FACULDADE DE TECNOLOGIA SENAC CHAPECÓ (SENAC)", sigla: "SENAC", category: "Faculdade", oa: "Privada", ci: "5", igc: "3" },
	  "17277": { code: "17277", label: "Faculdade de Tecnologia SENAC Criciúma (Senac Criciúma)", sigla: "Senac Criciúma", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4732": { code: "4732", label: "FACULDADE DE TECNOLOGIA SENAC DF (FAC SENAC DF)", sigla: "FAC SENAC DF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3295": { code: "3295", label: "FACULDADE DE TECNOLOGIA SENAC FLORIANÓPOLIS (SENAC FLORIANÓPOLIS)", sigla: "SENAC FLORIANÓPOLIS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4162": { code: "4162", label: "FACULDADE DE TECNOLOGIA SENAC GOIÁS", sigla: "SENACGO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4294": { code: "4294", label: "FACULDADE DE TECNOLOGIA SENAC JARAGUÁ DO SUL", sigla: "SENACJARAGUAS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "12848": { code: "12848", label: "FACULDADE DE TECNOLOGIA SENAC MINAS - UNIDADE BARBACENA", sigla: "SENACBARBACENA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "12772": { code: "12772", label: "FACULDADE DE TECNOLOGIA SENAC MINAS - UNIDADE BELO HORIZONTE (FTS)", sigla: "FTS", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "18201": { code: "18201", label: "FACULDADE DE TECNOLOGIA SENAC PALHOÇA (SENAC Palhoça)", sigla: "SENAC Palhoça", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4008": { code: "4008", label: "FACULDADE DE TECNOLOGIA SENAC PASSO FUNDO (SENAC PASSO FUNDO)", sigla: "SENAC PASSO FUNDO", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4006": { code: "4006", label: "FACULDADE DE TECNOLOGIA SENAC PELOTAS (FATEC SENAC PELOTAS)", sigla: "FATEC SENAC PELOTAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3332": { code: "3332", label: "FACULDADE DE TECNOLOGIA SENAC RIO (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5133": { code: "5133", label: "FACULDADE DE TECNOLOGIA SENAC SÃO MIGUEL DO OESTE (5133)", sigla: "5133", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3946": { code: "3946", label: "FACULDADE DE TECNOLOGIA SENAC TUBARÃO (SENAC)", sigla: "SENAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4817": { code: "4817", label: "FACULDADE DE TECNOLOGIA SENAI ANCHIETA", sigla: "SENAIANCHIETA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1526": { code: "1526", label: "FACULDADE DE TECNOLOGIA SENAI ANTOINE SKAF (SENAI)", sigla: "SENAI", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4820": { code: "4820", label: "FACULDADE DE TECNOLOGIA SENAI ANTÔNIO ADOLPHO LOBBE", sigla: "SENAIANTLOBBE", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "4421": { code: "4421", label: "FACULDADE DE TECNOLOGIA SENAI BELO HORIZONTE (FATEC SENAI BH)", sigla: "FATEC SENAI BH", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1958": { code: "1958", label: "FACULDADE DE TECNOLOGIA SENAI BLUMENAU (CET BLUMENAU)", sigla: "CET BLUMENAU", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3156": { code: "3156", label: "FACULDADE DE TECNOLOGIA SENAI BRUSQUE (SENAI/SC BRUSQUE)", sigla: "SENAI/SC BRUSQUE", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "4532": { code: "4532", label: "FACULDADE DE TECNOLOGIA SENAI CAMPO GRANDE", sigla: "SENAICG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14782": { code: "14782", label: "FACULDADE DE TECNOLOGIA SENAI CASCAVEL", sigla: "SENAICASC", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4295": { code: "4295", label: "FACULDADE DE TECNOLOGIA SENAI CETIND", sigla: "SENAICETIND", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1763": { code: "1763", label: "FACULDADE DE TECNOLOGIA SENAI CHAPECÓ (SENAI)", sigla: "SENAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "13677": { code: "13677", label: "FACULDADE DE TECNOLOGIA SENAI CIC", sigla: "SENAICIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3962": { code: "3962", label: "FACULDADE DE TECNOLOGIA SENAI CIMATEC (SENAI CIMATEC)", sigla: "SENAI CIMATEC", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2639": { code: "2639", label: "FACULDADE DE TECNOLOGIA SENAI CONCÓRDIA (CET CONCÓRDIA)", sigla: "CET CONCÓRDIA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "14609": { code: "14609", label: "FACULDADE DE TECNOLOGIA SENAI CONDE JOSÉ VICENTE DE AZEVEDO", sigla: "SENAICJVA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "14784": { code: "14784", label: "FACULDADE DE TECNOLOGIA SENAI CURITIBA", sigla: "SENAICWB", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4101": { code: "4101", label: "FACULDADE DE TECNOLOGIA SENAI DE DESENVOLVIMENTO GERENCIAL (FATESG)", sigla: "FATESG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4814": { code: "4814", label: "FACULDADE DE TECNOLOGIA SENAI FELIX GUISARD", sigla: "SENAIGUISAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "3159": { code: "3159", label: "FACULDADE DE TECNOLOGIA SENAI FLORIANÓPOLIS (SENAI -SC - CTAI)", sigla: "SENAI -SC - CTAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "17691": { code: "17691", label: "FACULDADE DE TECNOLOGIA SENAI GASPAR RICARDO JUNIOR", sigla: "SENAIGASPARRJ", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "4149": { code: "4149", label: "FACULDADE DE TECNOLOGIA SENAI ITAJAÍ (FATEC SENAI ITAJAÍ)", sigla: "FATEC SENAI ITAJAÍ", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "4100": { code: "4100", label: "FACULDADE DE TECNOLOGIA SENAI ÍTALO BOLOGNA (FATECIB)", sigla: "FATECIB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3155": { code: "3155", label: "FACULDADE DE TECNOLOGIA SENAI JARAGUÁ DO SUL (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1957": { code: "1957", label: "FACULDADE DE TECNOLOGIA SENAI JOINVILLE (SENAI DE JOINVILLE)", sigla: "SENAI DE JOINVILLE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "14786": { code: "14786", label: "FACULDADE DE TECNOLOGIA SENAI LONDRINA", sigla: "SENAILON", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2750": { code: "2750", label: "FACULDADE DE TECNOLOGIA SENAI LUZERNA (SENAI LUZERNA)", sigla: "SENAI LUZERNA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "4819": { code: "4819", label: "FACULDADE DE TECNOLOGIA SENAI MARIANO FERRAZ", sigla: "SENAIMARIFE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "14785": { code: "14785", label: "FACULDADE DE TECNOLOGIA SENAI MARINGÁ", sigla: "SENAIMARINGA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "10116": { code: "10116", label: "FACULDADE DE TECNOLOGIA SENAI MATO GROSSO (FATEC SENAI MT) (FATEC SENAI MT)", sigla: "FATEC SENAI MT) (FATEC SENAI MT", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4815": { code: "4815", label: "FACULDADE DE TECNOLOGIA SENAI NADIR DIAS DE FIGUEIREDO", sigla: "SENAINADIRF", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "12052": { code: "12052", label: "FACULDADE DE TECNOLOGIA SENAI PAULO DE TARSO (FATEC SENAI PT)", sigla: "FATEC SENAI PT", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "14412": { code: "14412", label: "FACULDADE DE TECNOLOGIA SENAI PERNAMBUCO", sigla: "SENAIPERNA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4107": { code: "4107", label: "FACULDADE DE TECNOLOGIA SENAI PORTO ALEGRE (FATEC SENAI)", sigla: "FATEC SENAI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3154": { code: "3154", label: "FACULDADE DE TECNOLOGIA SENAI RIO DO SUL (SENAI RIO DO SUL)", sigla: "SENAI RIO DO SUL", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "17690": { code: "17690", label: "FACULDADE DE TECNOLOGIA SENAI ROBERTO MANGE", sigla: "SENAIROBMANGE", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "3920": { code: "3920", label: "FACULDADE DE TECNOLOGIA SENAI ROBERTO MANGE (FATEC SENAI RM)", sigla: "FATEC SENAI RM", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "15501": { code: "15501", label: "Faculdade de Tecnologia SENAI Roberto Simonsen", sigla: "SENAISIMOSEN", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "4148": { code: "4148", label: "FACULDADE DE TECNOLOGIA SENAI SÃO JOSÉ (SENAISC)", sigla: "SENAISC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "15502": { code: "15502", label: "Faculdade de Tecnologia SENAI Suiço-Brasileira Paulo Ernesto Tolle", sigla: "SENAITOLLE", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "13674": { code: "13674", label: "FACULDADE DE TECNOLOGIA SENAI TELÊMACO BORBA", sigla: "SENAIBORBA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14783": { code: "14783", label: "FACULDADE DE TECNOLOGIA SENAI TOLEDO", sigla: "SENAITOLED", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4097": { code: "4097", label: "FACULDADE DE TECNOLOGIA TECBRASIL - UNIDADE BENTO GONÇALVES (Ftec Bento Gonçalves)", sigla: "Ftec Bento Gonçalves", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "12784": { code: "12784", label: "FACULDADE DE TECNOLOGIA TECBRASIL - UNIDADE NOVO HAMBURGO (Ftec Novo Hamburgo)", sigla: "Ftec Novo Hamburgo", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "4096": { code: "4096", label: "FACULDADE DE TECNOLOGIA TECBRASIL - UNIDADE PORTO ALEGRE (Ftec Porto Alegre)", sigla: "Ftec Porto Alegre", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4630": { code: "4630", label: "FACULDADE DE TECNOLOGIA TECMED (TECMED)", sigla: "TECMED", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3308": { code: "3308", label: "FACULDADE DE TECNOLOGIA TERMOMECÂNICA (FTT)", sigla: "FTT", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "3691": { code: "3691", label: "FACULDADE DE TECNOLOGIA TUPY DE SÃO BENTO DO SUL (FTT-SBS)", sigla: "FTT-SBS", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "4026": { code: "4026", label: "FACULDADE DE TECNOLOGIA ZONA LESTE (FATEC-ZL)", sigla: "FATEC-ZL", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "13735": { code: "13735", label: "FACULDADE DE TECNOLOGIA, CAPACITAÇÃO E GESTÃO INTEGRAL (FAINTEC)", sigla: "FAINTEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15272": { code: "15272", label: "FACULDADE DE TECNOLOGIA, EDUCAÇÃO SUPERIOR E PROFISSIONAL (FATESP)", sigla: "FATESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "13073": { code: "13073", label: "FACULDADE DE TECNOOLOGIA AEROTD (FATECAEROTD)", sigla: "FATECAEROTD", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15688": { code: "15688", label: "FACULDADE DE TECONOLOGIA DA ZONA SUL (FATEC ZONASUL)", sigla: "FATEC ZONASUL", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "1536": { code: "1536", label: "FACULDADE DE TELÊMACO BORBA (FATEB)", sigla: "FATEB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2578": { code: "2578", label: "FACULDADE DE TEOLOGIA CARDEAL EUGÊNIO SALES (FCS)", sigla: "FCS", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "13014": { code: "13014", label: "FACULDADE DE TEOLOGIA DA ARQUIDIOCESE DE BRASÍLIA (FATEO)", sigla: "FATEO", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "17289": { code: "17289", label: "Faculdade de Teologia de Caratinga Uriel de Almeida Leitão (FACTUAL)", sigla: "FACTUAL", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2104": { code: "2104", label: "FACULDADE DE TEOLOGIA DE HOKEMÃH (FATEH)", sigla: "FATEH", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "5048": { code: "5048", label: "FACULDADE DE TEOLOGIA DE SÃO PAULO DA IGREJA PRESBITERIANA INDEPENDENTE DO BRASIL", sigla: "FTSPIPIBR", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "14194": { code: "14194", label: "FACULDADE DE TEOLOGIA E CIÊNCIAS (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2069": { code: "2069", label: "FACULDADE DE TEOLOGIA E CIÊNCIAS HUMANAS (FATECH)", sigla: "FATECH", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "10071": { code: "10071", label: "FACULDADE DE TEOLOGIA E CIÊNCIAS HUMANAS (ITEPAFACULDADES)", sigla: "ITEPAFACULDADES", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3536": { code: "3536", label: "FACULDADE DE TEOLOGIA EVANGÉLICA EM CURITIBA - FATEV (FATEV)", sigla: "FATEV", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3376": { code: "3376", label: "FACULDADE DE TEOLOGIA INTEGRADA (FATIN)", sigla: "FATIN", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "2846": { code: "2846", label: "FACULDADE DE TEOLOGIA UMBANDISTA (F.T.U.)", sigla: "F.T.U.", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2548": { code: "2548", label: "FACULDADE DE TEOLOGIA, FILOSOFIA E CIÊNCIAS HUMANAS GAMALIEL (FATEFIG)", sigla: "FATEFIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2205": { code: "2205", label: "FACULDADE DE TUPI PAULISTA (-)", sigla: "FTUPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1769": { code: "1769", label: "FACULDADE DE TURISMO DE CARATINGA (FATUR)", sigla: "FATUR", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "5663": { code: "5663", label: "FACULDADE DE VARGEM GRANDE PAULISTA", sigla: "FAVGP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1721": { code: "1721", label: "FACULDADE DE VIÇOSA (FDV)", sigla: "FDV", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1516": { code: "1516", label: "FACULDADE DE VINHEDO (FV)", sigla: "FV", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1652": { code: "1652", label: "FACULDADE DE VITÓRIA (UVV VITÓRIA)", sigla: "UVV VITÓRIA", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1544": { code: "1544", label: "FACULDADE DECISÃO (FADEC)", sigla: "FADEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3878": { code: "3878", label: "FACULDADE DECISION DE NEGÓCIOS (FACULDADE DECISION)", sigla: "FACULDADE DECISION", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1857": { code: "1857", label: "FACULDADE DEHONIANA (DEHONIANA)", sigla: "DEHONIANA", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2927": { code: "2927", label: "FACULDADE DEL REY (FDR)", sigla: "FDR", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3034": { code: "3034", label: "FACULDADE DELTA (FACDELTA)", sigla: "FACDELTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4669": { code: "4669", label: "FACULDADE DELTA (FACULDADE DELTA)", sigla: "FACULDADE DELTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "16894": { code: "16894", label: "FACULDADE DEVRY DE SÃO LUÍS", sigla: "DEVRYSL", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15839": { code: "15839", label: "Faculdade DeVry João Pessoa (DVJP)", sigla: "DVJP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2257": { code: "2257", label: "FACULDADE DIADEMA (FAD)", sigla: "FAD", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "10846": { code: "10846", label: "FACULDADE DINÂMICA (UDC)", sigla: "UDC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2636": { code: "2636", label: "FACULDADE DINÂMICA DO VALE DO PIRANGA (FADIP)", sigla: "FADIP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4847": { code: "4847", label: "FACULDADE DIOCESANA DE MOSSORÓ", sigla: "FDIOCESANAMOS", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "3587": { code: "3587", label: "FACULDADE DIOCESANA SÃO JOSÉ (FADISI)", sigla: "FADISI", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2504": { code: "2504", label: "FACULDADE DIVINÓPOLIS (FACED)", sigla: "FACED", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2146": { code: "2146", label: "FACULDADE DO ACRE (FAC)", sigla: "FAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1638": { code: "1638", label: "FACULDADE DO AMAZONAS (IAES)", sigla: "IAES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2949": { code: "2949", label: "FACULDADE DO BAIXO PARNAÍBA (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "685": { code: "685", label: "FACULDADE DO BELO JARDIM (FBJ)", sigla: "FBJ", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "16759": { code: "16759", label: "Faculdade do Bico do Papagaio (FABIC)", sigla: "FABIC", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "4329": { code: "4329", label: "FACULDADE DO CENTRO EDUCACIONAL MINEIRO - FACEM (FACEM-BH)", sigla: "FACEM-BH", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "17828": { code: "17828", label: "Faculdade do Centro Leste - Cariacica (UCL)", sigla: "UCL", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1409": { code: "1409", label: "FACULDADE DO CENTRO LESTE (UCL)", sigla: "UCL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "243": { code: "243", label: "FACULDADE DO CLUBE NÁUTICO MOGIANO (FCNM)", sigla: "FCNM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2317": { code: "2317", label: "FACULDADE DO DESCOBRIMENTO (FACDESCO)", sigla: "FACDESCO", category: "Faculdade", oa: "Privada", ci: "-", igc: "1" },
	  "18019": { code: "18019", label: "Faculdade do Educador (FEDUC)", sigla: "FEDUC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2245": { code: "2245", label: "FACULDADE DO ESPÍRITO SANTO (FACES)", sigla: "FACES", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1970": { code: "1970", label: "FACULDADE DO ESPÍRITO SANTO (UNES)", sigla: "UNES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2909": { code: "2909", label: "FACULDADE DO ESTADO DO MARANHÃO (FACEM)", sigla: "FACEM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2040": { code: "2040", label: "FACULDADE DO FUTURO (FAF)", sigla: "FAF", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1275": { code: "1275", label: "FACULDADE DO GUARUJÁ (FAGU)", sigla: "FAGU", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1815": { code: "1815", label: "FACULDADE DO INSTITUTO BRASIL (FIBRA)", sigla: "FIBRA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3007": { code: "3007", label: "FACULDADE DO INSTITUTO NACIONAL DE PÓS-GRADUAÇÃO DE CAMPINAS (FAC. INPG - CAMPINAS)", sigla: "FAC. INPG - CAMPINAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3008": { code: "3008", label: "FACULDADE DO INSTITUTO NACIONAL DE PÓS-GRADUAÇÃO DE SÃO JOSÉ DOS CAMPOS (FACULDADE INPG - SJC)", sigla: "FACULDADE INPG - SJC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1622": { code: "1622", label: "FACULDADE DO INTERIOR PAULISTA (FIP)", sigla: "FIP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2624": { code: "2624", label: "FACULDADE DO LITORAL PARANAENSE (FLP)", sigla: "FLP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1898": { code: "1898", label: "FACULDADE DO LITORAL SUL PAULISTA (FALS)", sigla: "FALS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17628": { code: "17628", label: "Faculdade do Maciço do Baturité (FMB)", sigla: "FMB", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2189": { code: "2189", label: "FACULDADE DO MARANHÃO (FACAM-MA)", sigla: "FACAM-MA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5008": { code: "5008", label: "FACULDADE DO MÉDIO PARNAÍBA", sigla: "FMEDIOPARNAIBA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4042": { code: "4042", label: "FACULDADE DO MEIO AMBIENTE E DE TECNOLOGIA DE NEGOCIOS (FAMATEC)", sigla: "FAMATEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "14975": { code: "14975", label: "FACULDADE DO NORDESTE DA BAHIA (FANEB)", sigla: "FANEB", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "682": { code: "682", label: "FACULDADE DO NOROESTE DE MINAS (FINOM)", sigla: "FINOM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1899": { code: "1899", label: "FACULDADE DO NOROESTE PARANAENSE (FANP)", sigla: "FANP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17118": { code: "17118", label: "Faculdade do Norte de Mato Grosso (AJES)", sigla: "AJES", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1453": { code: "1453", label: "FACULDADE DO NORTE DO PARANÁ (FACNORTE)", sigla: "FACNORTE", category: "Faculdade", oa: "Privada", ci: "2", igc: "-" },
	  "4586": { code: "4586", label: "FACULDADE DO NORTE GOIANO (FNG)", sigla: "FNG", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "1856": { code: "1856", label: "FACULDADE DO NORTE NOVO DE APUCARANA (FACNOPAR)", sigla: "FACNOPAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1291": { code: "1291", label: "FACULDADE DO NORTE PIONEIRO (FANORPI)", sigla: "FANORPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13359": { code: "13359", label: "FACULDADE DO PAMPA", sigla: "FPAMPA", category: "Faculdade", oa: "Privada", ci: "5", igc: "3" },
	  "2961": { code: "2961", label: "FACULDADE DO PANTANAL MATOGROSSENSE (FAPAN)", sigla: "FAPAN", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2150": { code: "2150", label: "FACULDADE DO PIAUÍ (FAPI)", sigla: "FAPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4633": { code: "4633", label: "FACULDADE DO PLANALTO", sigla: "FPLANALTO", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "13784": { code: "13784", label: "FACULDADE DO PLANALTO CENTRAL (FAPLAC)", sigla: "FAPLAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "11817": { code: "11817", label: "FACULDADE DO POVO (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "2242": { code: "2242", label: "FACULDADE DO RECIFE (FAREC)", sigla: "FAREC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3431": { code: "3431", label: "FACULDADE DO SERIDÓ (FAS)", sigla: "FAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "2761": { code: "2761", label: "FACULDADE DO SERTÃO (UESSBA)", sigla: "UESSBA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "11951": { code: "11951", label: "FACULDADE DO SERTÃO BAIANO (FASBE)", sigla: "FASBE", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "2532": { code: "2532", label: "FACULDADE DO SUDESTE GOIANO (FASUG)", sigla: "FASUG", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2241": { code: "2241", label: "FACULDADE DO SUDESTE MINEIRO (FACSUM)", sigla: "FACSUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2944": { code: "2944", label: "FACULDADE DO SUL (FACSUL)", sigla: "FACSUL", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1790": { code: "1790", label: "FACULDADE DO SUL DA BAHIA (FASB)", sigla: "FASB", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "2623": { code: "2623", label: "FACULDADE DO TAPAJÓS (FAT)", sigla: "FAT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4910": { code: "4910", label: "FACULDADE DO TRABALHO (FATRA)", sigla: "FATRA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2755": { code: "2755", label: "FACULDADE DO VALE DO ITAJAÍ MIRIM (FAVIM)", sigla: "FAVIM", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1967": { code: "1967", label: "FACULDADE DO VALE DO ITAPECURÚ (FAI)", sigla: "FAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1350": { code: "1350", label: "FACULDADE DO VALE DO JAGUARIBE (FVJ)", sigla: "FVJ", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4289": { code: "4289", label: "FACULDADE DO VALE ELVIRA DAYRELL - FAVED (FAVED)", sigla: "FAVED", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1634": { code: "1634", label: "Faculdade Doctum da Serra (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1243": { code: "1243", label: "Faculdade Doctum de Administração da Serra (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1662": { code: "1662", label: "Faculdade Doctum de Administração e Educação de Vitória (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "5276": { code: "5276", label: "Faculdade Doctum de Carangola (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1887": { code: "1887", label: "Faculdade Doctum de Direito da Serra (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17542": { code: "17542", label: "Faculdade Doctum de Guarapari (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "18208": { code: "18208", label: "Faculdade Doctum de Ipatinga (Doctum)", sigla: "Doctum", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1558": { code: "1558", label: "Faculdade Doctum de João Monlevade (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2220": { code: "2220", label: "Faculdade Doctum de Juiz de Fora (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2096": { code: "2096", label: "Faculdade Doctum de Manhuaçu (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1342": { code: "1342", label: "Faculdade Doctum de Pedagogia da Serra (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2640": { code: "2640", label: "Faculdade Doctum de Saúde da Serra (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1063": { code: "1063", label: "Faculdade Doctum de Vila Velha (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1064": { code: "1064", label: "Faculdade Doctum de Vitória (DOCTUM)", sigla: "DOCTUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1411": { code: "1411", label: "FACULDADE DOIS DE JULHO (F2J)", sigla: "F2J", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2687": { code: "2687", label: "FACULDADE DOM ALBERTO (FDA)", sigla: "FDA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1256": { code: "1256", label: "FACULDADE DOM BOSCO (DOM BOSCO)", sigla: "DOM BOSCO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1487": { code: "1487", label: "FACULDADE DOM BOSCO (FDB)", sigla: "FDB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2831": { code: "2831", label: "FACULDADE DOM BOSCO DE GOIOERÊ (DOM BOSCO GOIOERÊ)", sigla: "DOM BOSCO GOIOERÊ", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "2113": { code: "2113", label: "FACULDADE DOM BOSCO DE PORTO ALEGRE (FDB)", sigla: "FDB", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1801": { code: "1801", label: "FACULDADE DOM BOSCO DE UBIRATÃ (DOM BOSCO UBIRATÃ)", sigla: "DOM BOSCO UBIRATÃ", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "15428": { code: "15428", label: "FACULDADE DOM HEITOR SALES (FAHS)", sigla: "FAHS", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3669": { code: "3669", label: "FACULDADE DOM LUIS DE ORLEANS E BRAGANÇA (FARRP)", sigla: "FARRP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3588": { code: "3588", label: "FACULDADE DOM PEDRO II (FDPII)", sigla: "FDPII", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "4460": { code: "4460", label: "FACULDADE DOM PEDRO II DE TECNOLOGIA (FAB)", sigla: "FAB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13728": { code: "13728", label: "FACULDADE DOS CARAJÁS", sigla: "FACARAJAS", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1609": { code: "1609", label: "FACULDADE DOS CERRADOS PIAUIENSES (FCP)", sigla: "FCP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1805": { code: "1805", label: "FACULDADE DOS GUARARAPES (FG)", sigla: "FG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "14002": { code: "14002", label: "Faculdade dos Guararapes de Recife (FG)", sigla: "FG", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1969": { code: "1969", label: "FACULDADE DOS IMIGRANTES - FAI (FAI)", sigla: "FAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14879": { code: "14879", label: "FACULDADE DOURADO (FD)", sigla: "FD", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "439": { code: "439", label: "FACULDADE DOUTOR FRANCISCO MAEDA (FAFRAM)", sigla: "FAFRAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1503": { code: "1503", label: "FACULDADE DOUTOR LEOCÁDIO JOSÉ CORREIA (FALEC)", sigla: "FALEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "16525": { code: "16525", label: "FACULDADE DUARTE COELHO (FDC)", sigla: "FDC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3411": { code: "3411", label: "FACULDADE EÇA DE QUEIROS (FACEQ)", sigla: "FACEQ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3699": { code: "3699", label: "FACULDADE ECOAR (FAECO)", sigla: "FAECO", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "13749": { code: "13749", label: "FACULDADE EDUCACIONAL ARAUCÁRIA (Facear)", sigla: "Facear", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "1205": { code: "1205", label: "FACULDADE EDUCACIONAL DA LAPA (FAEL)", sigla: "FAEL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1611": { code: "1611", label: "FACULDADE EDUCACIONAL DE ARAPOTI (FATI)", sigla: "FATI", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1879": { code: "1879", label: "FACULDADE EDUCACIONAL DE ARAUCÁRIA (FACEAR)", sigla: "FACEAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1907": { code: "1907", label: "FACULDADE EDUCACIONAL DE COLOMBO (FAEC)", sigla: "FAEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1798": { code: "1798", label: "FACULDADE EDUCACIONAL DE CORNÉLIO PROCÓPIO (FACED)", sigla: "FACED", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1657": { code: "1657", label: "FACULDADE EDUCACIONAL DE DOIS VIZINHOS (FAED)", sigla: "FAED", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "12847": { code: "12847", label: "FACULDADE EDUCACIONAL DE FRANCISCO BELTRÃO (FEFB)", sigla: "FEFB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5079": { code: "5079", label: "FACULDADE EDUCACIONAL DE MATELÂNDIA (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1574": { code: "1574", label: "FACULDADE EDUCACIONAL DE MEDIANEIRA (FACEMED)", sigla: "FACEMED", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1774": { code: "1774", label: "FACULDADE EDUCACIONAL DE PONTA GROSSA (UNIÃO)", sigla: "UNIÃO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1322": { code: "1322", label: "FACULDADE EDUVALE DE AVARÉ (EDUVALE)", sigla: "EDUVALE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14367": { code: "14367", label: "FACULDADE EFICAZ (FACULDADE EFICAZ)", sigla: "FACULDADE EFICAZ", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2500": { code: "2500", label: "FACULDADE EINSTEIN", sigla: "FAEINSTEIN", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "4672": { code: "4672", label: "FACULDADE EMPREENDEDORA AURORA (FACEMP)", sigla: "FACEMP", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "2766": { code: "2766", label: "FACULDADE EMPRESARIAL DE CHAPECÓ (FAEM)", sigla: "FAEM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1585": { code: "1585", label: "FACULDADE ENERGIA DE ADMINISTRAÇÃO E NEGÓCIOS (FEAN)", sigla: "FEAN", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1892": { code: "1892", label: "FACULDADE ENIAC (ENIAC)", sigla: "ENIAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3215": { code: "3215", label: "FACULDADE ENTRE RIOS DO PIAUÍ (FAERPI)", sigla: "FAERPI", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "3171": { code: "3171", label: "FACULDADE EQUIPE (FAE)", sigla: "FAE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1619": { code: "1619", label: "FACULDADE ERNESTO RISCALI (FAER)", sigla: "FAER", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1386": { code: "1386", label: "FACULDADE ESAMC CAMPINAS (ESAMC)", sigla: "ESAMC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2408": { code: "2408", label: "FACULDADE ESAMC SANTOS (ESAMC)", sigla: "ESAMC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4211": { code: "4211", label: "Faculdade ESAMC São Paulo - ESAMC (ESAMC)", sigla: "ESAMC", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "1561": { code: "1561", label: "FACULDADE ESAMC SOROCABA (ESAMC)", sigla: "ESAMC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2010": { code: "2010", label: "FACULDADE ESAMC SOROCABA (ESAMC)", sigla: "ESAMC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1468": { code: "1468", label: "FACULDADE ESAMC UBERLÂNDIA (ESAMC)", sigla: "ESAMC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "16245": { code: "16245", label: "FACULDADE ESCOLA DE NEGÓCIOS EXCELLENCE (FAENE)", sigla: "FAENE", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "905": { code: "905", label: "FACULDADE ESCOLA PAULISTA DE DIREITO (FACEPD)", sigla: "FACEPD", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17882": { code: "17882", label: "FACULDADE ESCOLA POLITÉCNICA DE INOVAÇÃO E CONHECIMENTO APLICADO (ÉPICA)", sigla: "ÉPICA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1697": { code: "1697", label: "FACULDADE ESCRITOR OSMAN DA COSTA LINS (FACOL)", sigla: "FACOL", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "11429": { code: "11429", label: "FACULDADE ESPECIALIZADA NA ÁREA DE SAÚDE DO RIO GRANDE DO SUL (FASURGS)", sigla: "FASURGS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1766": { code: "1766", label: "FACULDADE ESPÍRITO SANTENSE (UNICAPE)", sigla: "UNICAPE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2351": { code: "2351", label: "FACULDADE ESPÍRITO SANTENSE DE CIÊNCIAS JURÍDICAS (PIO XII - DIR)", sigla: "PIO XII - DIR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17876": { code: "17876", label: "FACULDADE ESPÍRITO SANTO (FAES)", sigla: "FAES", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "5000": { code: "5000", label: "FACULDADE ESTAÇÃO (FAEST)", sigla: "FAEST", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "18678": { code: "18678", label: "FACULDADE ESTÁCIO CACHOEIRO DE ITAPEMIRIM (Estácio FECI)", sigla: "Estácio FECI", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1280": { code: "1280", label: "Faculdade Estácio Cotia (Estácio FAAC)", sigla: "Estácio FAAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4094": { code: "4094", label: "Faculdade Estácio da Paraíba (ESTÁCIO PARAÍBA)", sigla: "ESTÁCIO PARAÍBA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1298": { code: "1298", label: "Faculdade Estácio de Alagoas - Estácio FAL (ESTÁCIO FAL)", sigla: "ESTÁCIO FAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1521": { code: "1521", label: "FACULDADE ESTÁCIO DE BELÉM - ESTÁCIO BELÉM (ESTÁCIO BELÉM)", sigla: "ESTÁCIO BELÉM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18010": { code: "18010", label: "Faculdade Estácio de Cuiabá (ESTÁCIO CUIABÁ)", sigla: "ESTÁCIO CUIABÁ", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1817": { code: "1817", label: "Faculdade Estácio de Curitiba (ESTÁCIO CURITIBA)", sigla: "ESTÁCIO CURITIBA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3170": { code: "3170", label: "FACULDADE ESTÁCIO DE FLORIANÓPOLIS - ESTÁCIO FLORIANÓPOLIS", sigla: "ESTACIOFLORIPA", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "18115": { code: "18115", label: "Faculdade Estácio de Goiânia (Estácio Goiânia)", sigla: "Estácio Goiânia", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3838": { code: "3838", label: "FACULDADE ESTÁCIO DE JOÃO PESSOA - ESTÁCIO DE JOÃO PESSOA", sigla: "ESTACIOJP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17744": { code: "17744", label: "Faculdade Estácio de Manaus (Estácio Manaus)", sigla: "Estácio Manaus", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2460": { code: "2460", label: "FACULDADE ESTÁCIO DE NATAL (ESTÁCIO DE NATAL)", sigla: "ESTÁCIO DE NATAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "862": { code: "862", label: "FACULDADE ESTÁCIO DE SÁ DE CAMPO GRANDE (FESCG)", sigla: "FESCG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2501": { code: "2501", label: "FACULDADE ESTÁCIO DE SÁ DE GOIÁS (FESGO)", sigla: "FESGO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1659": { code: "1659", label: "FACULDADE ESTÁCIO DE SÁ DE OURINHOS (FAESO)", sigla: "FAESO", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1496": { code: "1496", label: "FACULDADE ESTÁCIO DE SÁ DE VILA VELHA (FESVV)", sigla: "FESVV", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1486": { code: "1486", label: "FACULDADE ESTÁCIO DE SÁ DE VITÓRIA (FESV)", sigla: "FESV", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3779": { code: "3779", label: "FACULDADE ESTÁCIO DE SANTO ANDRÉ (ESTÁCIO SANTO ANDRÉ)", sigla: "ESTÁCIO SANTO ANDRÉ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1590": { code: "1590", label: "FACULDADE ESTÁCIO DE SÃO LUÍS (ESTÁCIO SÃO LUÍS)", sigla: "ESTÁCIO SÃO LUÍS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18107": { code: "18107", label: "Faculdade Estácio de São Mateus - Estácio SÃO MATEUS", sigla: "ESTACIOSAOMAT", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "916": { code: "916", label: "FACULDADE ESTÁCIO DE TERESINA (ESTÁCIO TERESINA)", sigla: "ESTÁCIO TERESINA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2380": { code: "2380", label: "Faculdade Estácio do Amapá - Estácio Amapá (ESTÁCIO AMAPÁ)", sigla: "ESTÁCIO AMAPÁ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4277": { code: "4277", label: "FACULDADE ESTÁCIO DO AMAZONAS - ESTÁCIO AMAZONAS (ESTÁCIO AMAZONAS)", sigla: "ESTÁCIO AMAZONAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2036": { code: "2036", label: "Faculdade Estácio do Pará - Estácio FAP (ESTÁCIO FAP)", sigla: "ESTÁCIO FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1077": { code: "1077", label: "Faculdade Estácio do Recife - Estácio FIR (Estácio FIR)", sigla: "Estácio FIR", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1175": { code: "1175", label: "FACULDADE ESTÁCIO DO RIO GRANDE DO SUL - ESTÁCIO FARGS (ESTÁCIO FARGS)", sigla: "ESTÁCIO FARGS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1457": { code: "1457", label: "Faculdade Estácio Euro- Panamericana de Humanidades e Tecnologias - Estácio EUROPAN (ESTÁCIO EUROPAN)", sigla: "ESTÁCIO EUROPAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1591": { code: "1591", label: "FACULDADE ESTÁCIO MACAPÁ - ESTÁCIO MACAPÁ (ESTÁCIO MACAPÁ)", sigla: "ESTÁCIO MACAPÁ", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2431": { code: "2431", label: "Faculdade Estácio Montessori de Ibiúna (ESTÁCIO FMI)", sigla: "ESTÁCIO FMI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2163": { code: "2163", label: "FACULDADE EUGÊNIO GOMES", sigla: "FEUGENIOG", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1894": { code: "1894", label: "FACULDADE EUROPÉIA DE ADMINISTRAÇÃO E MARKETING (FEPAM)", sigla: "FEPAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "13484": { code: "13484", label: "FACULDADE EUROPÉIA DE VITÓRIA (FAEV)", sigla: "FAEV", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3663": { code: "3663", label: "FACULDADE EVANGÉLICA (FE)", sigla: "FE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3789": { code: "3789", label: "FACULDADE EVANGÉLICA DE GOIANÉSIA", sigla: "FEGOIANESIA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1937": { code: "1937", label: "FACULDADE EVANGÉLICA DE SALVADOR (FACESA)", sigla: "FACESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2806": { code: "2806", label: "FACULDADE EVANGÉLICA DE SÃO PAULO", sigla: "FAEVANSP", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "11895": { code: "11895", label: "FACULDADE EVANGÉLICA DE TAGUATINGA (FE TAGUATINGA)", sigla: "FE TAGUATINGA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3525": { code: "3525", label: "FACULDADE EVANGÉLICA DE TECNOLOGIA, CIÊNCIAS E BIOTECNOLOGIA DA CGADB (FAECAD)", sigla: "FAECAD", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "2539": { code: "2539", label: "FACULDADE EVANGÉLICA DO MEIO NORTE (FAEME)", sigla: "FAEME", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "353": { code: "353", label: "FACULDADE EVANGÉLICA DO PARANÁ (FEPAR)", sigla: "FEPAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2827": { code: "2827", label: "FACULDADE EVANGÉLICA DO PIAUI (FAEPI)", sigla: "FAEPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "11841": { code: "11841", label: "FACULDADE EVOLUÇÃO ALTO OESTE POTIGUAR (FACEP)", sigla: "FACEP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1425": { code: "1425", label: "FACULDADE EVOLUTIVO (FACE)", sigla: "FACE", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "1537": { code: "1537", label: "FACULDADE EXPONENCIAL (FIE)", sigla: "FIE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "269": { code: "269", label: "FACULDADE FACCAT (FACCAT)", sigla: "FACCAT", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "13856": { code: "13856", label: "FACULDADE FACCENTRO", sigla: "FACCENTRO", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "5124": { code: "5124", label: "FACULDADE FACMIL", sigla: "FACMIL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13486": { code: "13486", label: "FACULDADE FACTUM (Factum)", sigla: "Factum", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "2784": { code: "2784", label: "FACULDADE FAE BLUMENAU", sigla: "FAEBLU", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2206": { code: "2206", label: "FACULDADE FAE SÃO JOSÉ DOS PINHAIS", sigla: "FAESJDP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "3538": { code: "3538", label: "FACULDADE FAE SÉVIGNÉ PORTO ALEGRE (FAE SÉVIGNÉ)", sigla: "FAE SÉVIGNÉ", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "18952": { code: "18952", label: "Faculdade FAMART", sigla: "FAMART", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2131": { code: "2131", label: "FACULDADE FAPAN (FAPAN)", sigla: "FAPAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1819": { code: "1819", label: "FACULDADE FARIAS BRITO (FFB)", sigla: "FFB", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "4901": { code: "4901", label: "FACULDADE FASIPE (FASIPE)", sigla: "FASIPE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18073": { code: "18073", label: "Faculdade Fasipe Cuiabá (FFC)", sigla: "FFC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "18114": { code: "18114", label: "Faculdade Fasipe Mato Grosso (FFMT)", sigla: "FFMT", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1806": { code: "1806", label: "FACULDADE FERNÃO DIAS (FAFE)", sigla: "FAFE", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "1520": { code: "1520", label: "FACULDADE FIA DE ADMINISTRAÇÃO E NEGÓCIOS (FFIA)", sigla: "FFIA", category: "Faculdade", oa: "Privada", ci: "5", igc: "SC" },
	  "2301": { code: "2301", label: "FACULDADE FIDELIS (FF)", sigla: "FF", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2042": { code: "2042", label: "FACULDADE FIGUEIREDO COSTA - FIC", sigla: "FIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3667": { code: "3667", label: "FACULDADE FILADÉLFIA (FAFIL)", sigla: "FAFIL", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "13873": { code: "13873", label: "FACULDADE FINOM DE PATOS DE MINAS (FINOM)", sigla: "FINOM", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "15401": { code: "15401", label: "Faculdade FIPECAFI (FIPECAFI)", sigla: "FIPECAFI", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "1541": { code: "1541", label: "FACULDADE FLAMINGO", sigla: "FAFLAMINGO", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1213": { code: "1213", label: "FACULDADE FLEMING (SEF)", sigla: "SEF", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "5277": { code: "5277", label: "FACULDADE FORTIUM", sigla: "FORTIUM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2165": { code: "2165", label: "FACULDADE FOZ DO IGUAÇU (FAFIG)", sigla: "FAFIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "160": { code: "160", label: "FACULDADE FRASSINETTI DO RECIFE (FAFIRE)", sigla: "FAFIRE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18407": { code: "18407", label: "FACULDADE FRONTEIRA (FECAF)", sigla: "FECAF", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "3793": { code: "3793", label: "FACULDADE FRUTAL (FAF)", sigla: "FAF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2397": { code: "2397", label: "FACULDADE FUCAPE (FUCAPE)", sigla: "FUCAPE", category: "Faculdade", oa: "Privada", ci: "5", igc: "5" },
	  "4597": { code: "4597", label: "FACULDADE FUTURA", sigla: "FFUTURA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17662": { code: "17662", label: "Faculdade Galileu (FG)", sigla: "FG", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1141": { code: "1141", label: "FACULDADE GAMA E SOUZA (FGS)", sigla: "FGS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1221": { code: "1221", label: "FACULDADE GAMMON", sigla: "FAGAMMON", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15980": { code: "15980", label: "Faculdade Gaúcha (FAG)", sigla: "FAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1732": { code: "1732", label: "FACULDADE GENNARI E PEARTREE (FGP)", sigla: "FGP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2308": { code: "2308", label: "FACULDADE GEREMÁRIO DANTAS (SFNSC)", sigla: "SFNSC", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "17326": { code: "17326", label: "FACULDADE GIANNA BERETTA", sigla: "FABERETTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1938": { code: "1938", label: "FACULDADE GLOBAL DE UMUARAMA (FGU)", sigla: "FGU", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "16194": { code: "16194", label: "Faculdade Gran Tietê (FGT)", sigla: "FGT", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2173": { code: "2173", label: "FACULDADE GUAIANÁS (FAG)", sigla: "FAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3797": { code: "3797", label: "FACULDADE GUAIRACÁ (FAG)", sigla: "FAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3363": { code: "3363", label: "FACULDADE GUARAÍ (FAG)", sigla: "FAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "5518": { code: "5518", label: "FACULDADE GUARAPUAVA (FG)", sigla: "FG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5318": { code: "5318", label: "FACULDADE GUILHERME GUIMBALA (FGG)", sigla: "FGG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1639": { code: "1639", label: "FACULDADE HÉLIO ROCHA (FHR)", sigla: "FHR", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4534": { code: "4534", label: "FACULDADE HERRERO (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "14882": { code: "14882", label: "FACULDADE HORIZONTE (FACHORIZONTE)", sigla: "FACHORIZONTE", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1780": { code: "1780", label: "FACULDADE HORIZONTINA (FAHOR)", sigla: "FAHOR", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "18257": { code: "18257", label: "FACULDADE HORUS SÄO MIGUEL (FSJ)", sigla: "FSJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "10418": { code: "10418", label: "FACULDADE HSM", sigla: "HSM", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "3768": { code: "3768", label: "FACULDADE IBGEN - INSTITUTO BRASILEIRO DE GESTÃO DE NEGÓCIOS (IBGEN)", sigla: "IBGEN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3772": { code: "3772", label: "Faculdade IBGEN (IBGEN)", sigla: "IBGEN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1484": { code: "1484", label: "FACULDADE IBMEC (IBMEC)", sigla: "IBMEC", category: "Faculdade", oa: "Privada", ci: "5", igc: "4" },
	  "12803": { code: "12803", label: "FACULDADE IBMEC DISTRITO FEDERAL (IBMEC/DF)", sigla: "IBMEC/DF", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4773": { code: "4773", label: "FACULDADE IBS (IBS)", sigla: "IBS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4068": { code: "4068", label: "FACULDADE ICESP (ICESP)", sigla: "ICESP", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2821": { code: "2821", label: "FACULDADE IDC (IDC)", sigla: "IDC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1423": { code: "1423", label: "FACULDADE IDEAL (FACI)", sigla: "FACI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18450": { code: "18450", label: "FACULDADE IDEAL DE ALTO HORIZONTE (UnIDEAL)", sigla: "UnIDEAL", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "15351": { code: "15351", label: "Faculdade IDEAU (IDEAU)", sigla: "IDEAU", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17382": { code: "17382", label: "Faculdade Ietec (Ietec)", sigla: "Ietec", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "18046": { code: "18046", label: "FACULDADE ILAPEO (ILAPEO)", sigla: "ILAPEO", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "18637": { code: "18637", label: "Faculdade ImesMercosur (ImesMercosur)", sigla: "ImesMercosur", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "5387": { code: "5387", label: "FACULDADE IMPACTA DE TECNOLOGIA (FIT)", sigla: "FIT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1758": { code: "1758", label: "FACULDADE INDEPENDENTE DO NORDESTE (FAINOR)", sigla: "FAINOR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3307": { code: "3307", label: "FACULDADE INED DE RIO CLARO (CBTA)", sigla: "CBTA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3443": { code: "3443", label: "FACULDADE INEDI (CESUCA)", sigla: "CESUCA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2688": { code: "2688", label: "FACULDADE INESP - INSTITUTO NACIONAL DE ENSINO E PESQUISA (INESP)", sigla: "INESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3986": { code: "3986", label: "FACULDADE INSTITUTO SUPERIOR DE EDUCAÇÃO DO PARANÁ - FAINSEP (FAINSEP)", sigla: "FAINSEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4293": { code: "4293", label: "FACULDADE INTEGRAÇÃO TIETE (FIT)", sigla: "FIT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2426": { code: "2426", label: "FACULDADE INTEGRADA BRASIL AMAZONIA - FIBRA (FIBRA)", sigla: "FIBRA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14901": { code: "14901", label: "FACULDADE INTEGRADA CARAJÁS (FIC)", sigla: "FIC", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1658": { code: "1658", label: "FACULDADE INTEGRADA DA GRANDE FORTALEZA (FGF)", sigla: "FGF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4922": { code: "4922", label: "FACULDADE INTEGRADA DAS CATARATAS", sigla: "FAICATARATAS", category: "Faculdade", oa: "Privada", ci: "5", igc: "4" },
	  "17322": { code: "17322", label: "Faculdade Integrada de Araguatins (FAIARA)", sigla: "FAIARA", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "19050": { code: "19050", label: "FACULDADE INTEGRADA DE CARIACICA (MULTIVIX CARIAC)", sigla: "MULTIVIX CARIAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1835": { code: "1835", label: "FACULDADE INTEGRADA DE ENSINO SUPERIOR DE COLINAS (FIESC)", sigla: "FIESC", category: "Faculdade", oa: "Pública", ci: "2", igc: "2" },
	  "18267": { code: "18267", label: "FACULDADE INTEGRADA DE GESTÃO E MEIO AMBIENTE (FACIGMA)", sigla: "FACIGMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "18154": { code: "18154", label: "FACULDADE INTEGRADA DE GUARAPUAVA (INTEGRADA)", sigla: "INTEGRADA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1709": { code: "1709", label: "FACULDADE INTEGRADA DE PERNAMBUCO (FACIPE)", sigla: "FACIPE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18147": { code: "18147", label: "FACULDADE INTEGRADA DE PONTA GROSSA (INTEGRADA)", sigla: "INTEGRADA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2647": { code: "2647", label: "FACULDADE INTEGRADA DE SANTA MARIA (FISMA)", sigla: "FISMA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "19049": { code: "19049", label: "FACULDADE INTEGRADA DE VILA VELHA (MULTIVIX VILA V)", sigla: "MULTIVIX VILA V", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2384": { code: "2384", label: "FACULDADE INTEGRADA DO BRASIL (FAIBRA)", sigla: "FAIBRA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1858": { code: "1858", label: "FACULDADE INTEGRADA EUCLIDES FERNANDES (FAJ)", sigla: "FAJ", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "2279": { code: "2279", label: "FACULDADE INTEGRADA METROPOLITANA DE CAMPINAS (METROCAMP)", sigla: "METROCAMP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1078": { code: "1078", label: "FACULDADE INTEGRADO DE CAMPO MOURÃO (CEI)", sigla: "CEI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1190": { code: "1190", label: "FACULDADE INTEGRAL CANTAREIRA (F.I.C.)", sigla: "F.I.C.", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1734": { code: "1734", label: "FACULDADE INTEGRAL DIFERENCIAL (FACID)", sigla: "FACID", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "803": { code: "803", label: "FACULDADE INTERAÇÃO AMERICANA (FIA)", sigla: "FIA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1728": { code: "1728", label: "FACULDADE INTERAMERICANA DE PORTO VELHO (UNIRON)", sigla: "UNIRON", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "924": { code: "924", label: "FACULDADE INTERLAGOS DE EDUCAÇÃO E CULTURA (FINTEC)", sigla: "FINTEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1577": { code: "1577", label: "FACULDADE INTERMUNICIPAL DO NOROESTE DO PARANÁ (FACINOR)", sigla: "FACINOR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3099": { code: "3099", label: "FACULDADE INTERNACIONAL DA PARAÍBA (FPB)", sigla: "FPB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1667": { code: "1667", label: "FACULDADE INTERNACIONAL DE CIÊNCIAS EMPRESARIAIS (FICE)", sigla: "FICE", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4945": { code: "4945", label: "FACULDADE INTERNACIONAL DO DELTA (INTA)", sigla: "INTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "5105": { code: "5105", label: "FACULDADE INTERNACIONAL SIGNORELLI", sigla: "FISIGNORELLI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1781": { code: "1781", label: "FACULDADE INTESP (INTESP)", sigla: "INTESP", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "18383": { code: "18383", label: "Faculdade IPEL", sigla: "IPEL", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3839": { code: "3839", label: "Faculdade IPEMED de Ciências Médicas (IPEMED)", sigla: "IPEMED", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "15504": { code: "15504", label: "FACULDADE IRECÊ (FAI)", sigla: "FAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17590": { code: "17590", label: "Faculdade ISAE BRASIL (ISAE)", sigla: "ISAE", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "13828": { code: "13828", label: "FACULDADE ISEIB DE BELO HORIZONTE (FIBH)", sigla: "FIBH", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "13663": { code: "13663", label: "FACULDADE ISEIB DE BETIM (FISBE)", sigla: "FISBE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "790": { code: "790", label: "Faculdade Israelita de Ciências da Saúde Albert Einstein (FICSAE)", sigla: "FICSAE", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "3760": { code: "3760", label: "Faculdade Itaboraí", sigla: "FAITABORAI", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "1539": { code: "1539", label: "FACULDADE ÍTALO BRASILEIRA (FIB)", sigla: "FIB", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "1693": { code: "1693", label: "FACULDADE ITANHAÉM (FAITA)", sigla: "FAITA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "13889": { code: "13889", label: "FACULDADE ITAPURANGA", sigla: "FAITUPRANGA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15873": { code: "15873", label: "Faculdade Itaquá (UNEITAQUÁ)", sigla: "UNEITAQUÁ", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2328": { code: "2328", label: "FACULDADE ITEANA DE BOTUCATU (FITB)", sigla: "FITB", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2344": { code: "2344", label: "FACULDADE ITEANA DE IBITINGA (FITI)", sigla: "FITI", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "4969": { code: "4969", label: "FACULDADE ITOP (ITOP)", sigla: "ITOP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1650": { code: "1650", label: "FACULDADE J. SIMÕES ENSINO SUPERIOR (FABAVI)", sigla: "FABAVI", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3518": { code: "3518", label: "FACULDADE JANGADA (FJ)", sigla: "FJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15133": { code: "15133", label: "FACULDADE JARDINS (FAJAR)", sigla: "FAJAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4123": { code: "4123", label: "FACULDADE JATAIENSE (FAJA)", sigla: "FAJA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3803": { code: "3803", label: "FACULDADE JAUENSE", sigla: "FAJAU", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "849": { code: "849", label: "FACULDADE JESUÍTA DE FILOSOFIA E TEOLOGIA (FAJE)", sigla: "FAJE", category: "Faculdade", oa: "Privada", ci: "4", igc: "5" },
	  "3992": { code: "3992", label: "FACULDADE JK - ASA NORTE (-)", sigla: "JKASANORTE", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3980": { code: "3980", label: "FACULDADE JK - BRASÍLIA - UNIDADE PLANO PILOTO (CENACAP)", sigla: "CENACAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2904": { code: "2904", label: "FACULDADE JK - GUARÁ (ESAMC BRASÍLIA)", sigla: "ESAMC BRASÍLIA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4416": { code: "4416", label: "FACULDADE JK - UNIDADE I - GAMA", sigla: "JKGAMA", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "2021": { code: "2021", label: "FACULDADE JK - UNIDADE II - GAMA", sigla: "JKGAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4173": { code: "4173", label: "FACULDADE JK DE TECNOLOGIA (FACJK)", sigla: "FACJK", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1943": { code: "1943", label: "FACULDADE JK SOBRADINHO", sigla: "JKSOBRADINHO", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2444": { code: "2444", label: "FACULDADE JOÃO CALVINO (FJC)", sigla: "FJC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "17490": { code: "17490", label: "FACULDADE JOÃO PAULO II (FAJOP)", sigla: "FAJOP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4118": { code: "4118", label: "FACULDADE JOAQUIM NABUCO - PAULISTA (FJN)", sigla: "FJN", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "17622": { code: "17622", label: "FACULDADE JOAQUIM NABUCO DE FORTALEZA (FJN FORTALEZA)", sigla: "FJN FORTALEZA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "19329": { code: "19329", label: "FACULDADE JOAQUIM NABUCO DE JOÃO PESSOA (FJN JOÃO PESSOA)", sigla: "FJN JOÃO PESSOA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "10588": { code: "10588", label: "FACULDADE JOAQUIM NABUCO DE SÃO LOURENÇO DA MATA", sigla: "JNSLDM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1582": { code: "1582", label: "FACULDADE JOAQUIM NABUCO DO JANGA (FJN JANGA)", sigla: "FJN JANGA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4153": { code: "4153", label: "FACULDADE JOAQUIM NABUCO RECIFE (FJN)", sigla: "FJN", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3427": { code: "3427", label: "FACULDADE JOSÉ AUGUSTO VIEIRA (FJAV)", sigla: "FJAV", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1383": { code: "1383", label: "FACULDADE JOSÉ LACERDA FILHO DE CIÊNCIAS APLICADAS (FAJOLCA)", sigla: "FAJOLCA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3788": { code: "3788", label: "FACULDADE JUIZ DE FORA (FJF)", sigla: "FJF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1665": { code: "1665", label: "FACULDADE KENNEDY (FK)", sigla: "FK", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "4777": { code: "4777", label: "FACULDADE KENNEDY DE BELO HORIZONTE (FKBH)", sigla: "FKBH", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2311": { code: "2311", label: "FACULDADE KENNEDY DE MINAS GERAIS - FKMG (FKMG)", sigla: "FKMG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2098": { code: "2098", label: "FACULDADE KURIOS (FAK)", sigla: "FAK", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "1936": { code: "1936", label: "FACULDADE LA SALLE", sigla: "FALASALLE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2676": { code: "2676", label: "FACULDADE LA SALLE", sigla: "LASALLE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13818": { code: "13818", label: "FACULDADE LA SALLE - CAXIAS (FACSALLE)", sigla: "FACSALLE", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "13897": { code: "13897", label: "FACULDADE LABORO (Laboro)", sigla: "Laboro", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1501": { code: "1501", label: "FACULDADE LATINO AMERICANA DE EDUCAÇÃO (FLATED)", sigla: "FLATED", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "18288": { code: "18288", label: "Faculdade Latino-americana (FLAM)", sigla: "FLAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1946": { code: "1946", label: "FACULDADE LEGALE (FALEG)", sigla: "FALEG", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "16914": { code: "16914", label: "Faculdade Leonardo da Vinci - Santa Catarina", sigla: "DAVINCISC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2486": { code: "2486", label: "FACULDADE LEONARDO DA VINCI (ULBRA)", sigla: "ULBRA", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1821": { code: "1821", label: "FACULDADE LIONS (FAC-LIONS)", sigla: "FAC-LIONS", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1059": { code: "1059", label: "FACULDADE LOURENÇO FILHO (FLF)", sigla: "FLF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3396": { code: "3396", label: "FACULDADE LS (FACELS)", sigla: "FACELS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3862": { code: "3862", label: "FACULDADE LUCIANO FEIJÃO (FLF)", sigla: "FLF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3230": { code: "3230", label: "FACULDADE LUIZ EDUARDO MAGALHÃES (FILEM)", sigla: "FILEM", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1749": { code: "1749", label: "FACULDADE LUSO-BRASILEIRA (FALUB)", sigla: "FALUB", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "15500": { code: "15500", label: "Faculdade Lusocapixaba (FLC)", sigla: "FLC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "18072": { code: "18072", label: "Faculdade Lusófona de São Paulo (FLSP)", sigla: "FLSP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1827": { code: "1827", label: "FACULDADE LUTERANA DE TEOLOGIA (FLT)", sigla: "FLT", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2312": { code: "2312", label: "FACULDADE LUTERANA RUI BARBOSA (FALURB)", sigla: "FALURB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1607": { code: "1607", label: "FACULDADE LUTERANA SÃO MARCOS (FALSM)", sigla: "FALSM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1701": { code: "1701", label: "FACULDADE MACHADO DE ASSIS (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "336": { code: "336", label: "FACULDADE MACHADO SOBRINHO (FMS)", sigla: "FMS", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2221": { code: "2221", label: "FACULDADE MADEIRA MAMORÉ (FAMMA)", sigla: "FAMMA", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "3769": { code: "3769", label: "FACULDADE MADRE TEREZA (FAMAT)", sigla: "FAMAT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3268": { code: "3268", label: "FACULDADE MADRE THAIS (FMT)", sigla: "FMT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1415": { code: "1415", label: "FACULDADE MAGISTER (MAGISTER)", sigla: "MAGISTER", category: "Faculdade", oa: "Privada", ci: "1", igc: "SC" },
	  "1863": { code: "1863", label: "FACULDADE MANTENENSE DOS VALES GERAIS (INTERVALE) (INTERVALE)", sigla: "INTERVALE) (INTERVALE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18497": { code: "18497", label: "Faculdade Maranhense (FAM)", sigla: "FAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3724": { code: "3724", label: "FACULDADE MARANHENSE SÃO JOSÉ DOS COCAIS (FSJ)", sigla: "FSJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "10950": { code: "10950", label: "FACULDADE MARECHAL CÂNDIDO RONDON (FAMAR)", sigla: "FAMAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "18062": { code: "18062", label: "Faculdade Marechal Rondon", sigla: "FRONDON", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1624": { code: "1624", label: "FACULDADE MARECHAL RONDON (FMR)", sigla: "FMR", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2912": { code: "2912", label: "FACULDADE MARIA MILZA - CAMPUS FACTAE (FAMAM-FACTAE)", sigla: "FAMAM-FACTAE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2474": { code: "2474", label: "FACULDADE MARIA MILZA (FAMAM)", sigla: "FAMAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1079": { code: "1079", label: "FACULDADE MARINGÁ (CESPAR)", sigla: "CESPAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "16782": { code: "16782", label: "Faculdade Mário Quintana (FAMAQUI)", sigla: "FAMAQUI", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "3618": { code: "3618", label: "FACULDADE MARIO SCHENBERG (FMS)", sigla: "FMS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1381": { code: "1381", label: "FACULDADE MARTHA FALCÃO (FMF)", sigla: "FMF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15079": { code: "15079", label: "FACULDADE MASTER DE PARAUAPEBAS - FAMAP (FAMAP)", sigla: "FAMAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1337": { code: "1337", label: "FACULDADE MATER DEI (FMD)", sigla: "FMD", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2149": { code: "2149", label: "FACULDADE MATO GROSSO DO SUL (FACSUL)", sigla: "FACSUL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3867": { code: "3867", label: "FACULDADE MAUÁ DE BRASÍLIA (MAUADF)", sigla: "MAUADF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4121": { code: "4121", label: "FACULDADE MAURÍCIO DE NASSAU DE ARACAJU", sigla: "NASSAUARACAJU", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "13982": { code: "13982", label: "FACULDADE MAURÍCIO DE NASSAU DE BELÉM (FMN de Belém)", sigla: "FMN de Belém", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3879": { code: "3879", label: "FACULDADE MAURÍCIO DE NASSAU DE CAMPINA GRANDE (FMN CG)", sigla: "FMN CG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14717": { code: "14717", label: "FACULDADE MAURÍCIO DE NASSAU DE CARUARU (FMN Caruaru)", sigla: "FMN Caruaru", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "17816": { code: "17816", label: "FACULDADE MAURÍCIO DE NASSAU DE FEIRA DE SANTANA (FMN Feira de Santana)", sigla: "FMN Feira de Santana", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "14321": { code: "14321", label: "FACULDADE MAURÍCIO DE NASSAU DE FORTALEZA (FMN Fortaleza)", sigla: "FMN Fortaleza", category: "Faculdade", oa: "Privada", ci: "5", igc: "SC" },
	  "18209": { code: "18209", label: "FACULDADE MAURÍCIO DE NASSAU DE JABOATÃO (FMN CAVALEIRO)", sigla: "FMN CAVALEIRO", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "18075": { code: "18075", label: "FACULDADE MAURÍCIO DE NASSAU DE JABOATÃO DOS GUARARAPES (FMN JABOATÃO)", sigla: "FMN JABOATÃO", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3817": { code: "3817", label: "FACULDADE MAURÍCIO DE NASSAU DE JOÃO PESSOA (FMN JOÃO PESSOA)", sigla: "FMN JOÃO PESSOA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1910": { code: "1910", label: "FACULDADE MAURÍCIO DE NASSAU DE LAURO FREITAS (FABAC)", sigla: "FABAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1504": { code: "1504", label: "FACULDADE MAURÍCIO DE NASSAU DE MACEIÓ", sigla: "FNASSAUMC", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "3" },
	  "12415": { code: "12415", label: "FACULDADE MAURÍCIO DE NASSAU DE MACEIÓ (FMN Mangabeiras)", sigla: "FMN Mangabeiras", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3853": { code: "3853", label: "FACULDADE MAURÍCIO DE NASSAU DE NATAL (FMN NATAL)", sigla: "FMN NATAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18210": { code: "18210", label: "FACULDADE MAURÍCIO DE NASSAU DE OLINDA (FMN OLINDA)", sigla: "FMN OLINDA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "16943": { code: "16943", label: "FACULDADE MAURÍCIO DE NASSAU DE PARNAMIRIM (FMN PARNAMIRIM)", sigla: "FMN PARNAMIRIM", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "18023": { code: "18023", label: "FACULDADE MAURÍCIO DE NASSAU DE PETROLINA (FMN PETROLINA)", sigla: "FMN PETROLINA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1055": { code: "1055", label: "FACULDADE MAURÍCIO DE NASSAU DE SALVADOR (FMN SALVADOR)", sigla: "FMN SALVADOR", category: "Faculdade", oa: "Privada", ci: "5", igc: "3" },
	  "17284": { code: "17284", label: "FACULDADE MAURÍCIO DE NASSAU DE SÃO LUÍS (FMN SÃO LUÍS)", sigla: "FMN SÃO LUÍS", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1318": { code: "1318", label: "FACULDADE MAURÍCIO DE NASSAU DE VITÓRIA DA CONQUISTA (FMN)", sigla: "FMN", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "18211": { code: "18211", label: "FACULDADE MAURÍCIO DE NASSAU DO CABO (FMN CABO)", sigla: "FMN CABO", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4135": { code: "4135", label: "Faculdade Maurício de Nassau Manaus", sigla: "NASSAUMANAUS", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2123": { code: "2123", label: "FACULDADE MAX PLANCK (FMP)", sigla: "FMP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "16934": { code: "16934", label: "Faculdade Melies de Tecnologia (Melies)", sigla: "Melies", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "17400": { code: "17400", label: "Faculdade Menino Deus (FAMED)", sigla: "FAMED", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1873": { code: "1873", label: "FACULDADE MERCÚRIO (FAMERC)", sigla: "FAMERC", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2383": { code: "2383", label: "FACULDADE MERIDIONAL (IMED)", sigla: "IMED", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4731": { code: "4731", label: "FACULDADE MESSIANICA", sigla: "FAMESSIANICA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2613": { code: "2613", label: "Faculdade Meta (FAMETA)", sigla: "FAMETA", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1130": { code: "1130", label: "FACULDADE METODISTA DE CIÊNCIAS HUMANAS E EXATAS (METODISTA)", sigla: "METODISTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1085": { code: "1085", label: "FACULDADE METODISTA DE SANTA MARIA (FAMES)", sigla: "FAMES", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2840": { code: "2840", label: "FACULDADE METODISTA DE TEOLOGIA E CIÊNCIAS HUMANAS DA AMAZÔNIA (FATEO-PVH)", sigla: "FATEO-PVH", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "660": { code: "660", label: "FACULDADE METODISTA DO SUL PAULISTA (FMSP)", sigla: "FMSP", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1253": { code: "1253", label: "FACULDADE METODISTA GRANBERY (FMG)", sigla: "FMG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3933": { code: "3933", label: "FACULDADE MÉTODO DE SÃO PAULO (FAMESP)", sigla: "FAMESP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2058": { code: "2058", label: "FACULDADE METROPOLITANA (UNNESA)", sigla: "UNNESA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4450": { code: "4450", label: "FACULDADE METROPOLITANA DA AMAZÔNIA (FAMAZ)", sigla: "FAMAZ", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1978": { code: "1978", label: "FACULDADE METROPOLITANA DA GRANDE FORTALEZA (FAMETRO)", sigla: "FAMETRO", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1675": { code: "1675", label: "FACULDADE METROPOLITANA DA GRANDE RECIFE (UNESJ)", sigla: "UNESJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "11544": { code: "11544", label: "FACULDADE METROPOLITANA DE ANÁPOLIS (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2175": { code: "2175", label: "FACULDADE METROPOLITANA DE BLUMENAU (FAMEBLU)", sigla: "FAMEBLU", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2879": { code: "2879", label: "FACULDADE METROPOLITANA DE CAIEIRAS (FMC)", sigla: "FMC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1170": { code: "1170", label: "FACULDADE METROPOLITANA DE CAMAÇARI (FAMEC)", sigla: "FAMEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2246": { code: "2246", label: "FACULDADE METROPOLITANA DE CIENCIAS E TECNOLOGIA (FAMEC)", sigla: "FAMEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1777": { code: "1777", label: "FACULDADE METROPOLITANA DE GUARAMIRIM (FAMEG)", sigla: "FAMEG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2147": { code: "2147", label: "FACULDADE METROPOLITANA DE MANAUS (FAMETRO)", sigla: "FAMETRO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4452": { code: "4452", label: "FACULDADE METROPOLITANA DE MARABÁ (METROPOLITANA)", sigla: "METROPOLITANA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1508": { code: "1508", label: "FACULDADE METROPOLITANA DE MARINGÁ", sigla: "METROPOMARINGA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "17666": { code: "17666", label: "Faculdade Metropolitana de Paragominas", sigla: "METROPPARAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17667": { code: "17667", label: "Faculdade Metropolitana de Paraupebas", sigla: "METROPARAUB", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "19465": { code: "19465", label: "Faculdade Metropolitana de Petrolina (FAM)", sigla: "FAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4157": { code: "4157", label: "FACULDADE METROPOLITANA DE RIO DO SUL (FAMESUL)", sigla: "FAMESUL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "16543": { code: "16543", label: "Faculdade Metropolitana do Estado de São Paulo (FAMEESP)", sigla: "FAMEESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4982": { code: "4982", label: "FACULDADE METROPOLITANA DO PLANALTO NORTE (FAMEPLAN)", sigla: "FAMEPLAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "12899": { code: "12899", label: "FACULDADE METROPOLITANA DO VALE DO AÇO (FAMEV)", sigla: "FAMEV", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "12346": { code: "12346", label: "FACULDADE METROPOLITANA SÃO CARLOS (FAMESC)", sigla: "FAMESC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "12430": { code: "12430", label: "FACULDADE METROPOLITANA SÃO CARLOS BJI (FAMESC-BJI)", sigla: "FAMESC-BJI", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1477": { code: "1477", label: "FACULDADE MICHELANGELO (MICHELANGELO)", sigla: "MICHELANGELO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1720": { code: "1720", label: "FACULDADE MINAS GERAIS (FAMIG)", sigla: "FAMIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4198": { code: "4198", label: "FACULDADE MINEIRENSE (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18516": { code: "18516", label: "FACULDADE MIRIENSE", sigla: "MIRIENSE", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3380": { code: "3380", label: "FACULDADE MISSIONEIRA DO PARANÁ (FAMIPAR)", sigla: "FAMIPAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "16849": { code: "16849", label: "Faculdade Modal (Modal)", sigla: "Modal", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2805": { code: "2805", label: "FACULDADE MODELO (FACIMOD)", sigla: "FACIMOD", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "12522": { code: "12522", label: "FACULDADE MOGIANA DO ESTADO DE SÃO PAULO (FAMOESP)", sigla: "FAMOESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2198": { code: "2198", label: "FACULDADE MONTEIRO LOBATO (FATO)", sigla: "FATO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "801": { code: "801", label: "FACULDADE MONTENEGRO (FAM)", sigla: "FAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2336": { code: "2336", label: "FACULDADE MONTES BELOS (FMB)", sigla: "FMB", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "3377": { code: "3377", label: "FACULDADE MONTESSORIANO DE SALVADOR (FAMA)", sigla: "FAMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "363": { code: "363", label: "FACULDADE MOZARTEUM DE SÃO PAULO (FAMOSP)", sigla: "FAMOSP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3896": { code: "3896", label: "FACULDADE MUNDIAL", sigla: "FAMUNDIAL", category: "Faculdade", oa: "Privada", ci: "2", igc: "-" },
	  "5706": { code: "5706", label: "FACULDADE MUNICIPAL DE PALHOÇA (FMP)", sigla: "FMP", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "1876": { code: "1876", label: "FACULDADE MUNICIPAL PROFESSOR FRANCO MONTORO DE MOGI GUAÇU (FMPFM)", sigla: "FMPFM", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "13883": { code: "13883", label: "FACULDADE MURIALDO (FAMUR)", sigla: "FAMUR", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "1443": { code: "1443", label: "FACULDADE NACIONAL (FINAC)", sigla: "FINAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2467": { code: "2467", label: "FACULDADE NACIONAL DO NORTE DO PARANÁ (FANNORTE)", sigla: "FANNORTE", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "3549": { code: "3549", label: "FACULDADE NACIONAL SÊNIOR (FANSÊNIOR)", sigla: "FANSÊNIOR", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "2908": { code: "2908", label: "FACULDADE NATALENSE DE ENSINO E CULTURA (FANEC)", sigla: "FANEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4179": { code: "4179", label: "FACULDADE NAZARENA DO BRASIL (FNB)", sigla: "FNB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17894": { code: "17894", label: "Faculdade NECTAR", sigla: "NECTAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1621": { code: "1621", label: "FACULDADE NETWORK (NWK)", sigla: "NWK", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1718": { code: "1718", label: "FACULDADE NOBRE DE FEIRA DE SANTANA (FAN)", sigla: "FAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1772": { code: "1772", label: "FACULDADE NORDESTE (FANOR)", sigla: "FANOR", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4699": { code: "4699", label: "FACULDADE NOROESTE (FAN)", sigla: "FAN", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "15382": { code: "15382", label: "Faculdade Noroeste do Mato Grosso (AJES)", sigla: "AJES", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "10685": { code: "10685", label: "FACULDADE NORTE CAPIXABA DE SAO MATEUS (MULTIVIX SÃO MATEUS)", sigla: "MULTIVIX SÃO MATEUS", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1797": { code: "1797", label: "FACULDADE NORTE PARANAENSE (UNINORTE)", sigla: "UNINORTE", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "4169": { code: "4169", label: "FACULDADE NOSSA CIDADE (FNC)", sigla: "FNC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1237": { code: "1237", label: "FACULDADE NOSSA SENHORA APARECIDA (FANAP)", sigla: "FANAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2826": { code: "2826", label: "FACULDADE NOSSA SENHORA DE FÁTIMA (FACULDADE FÁTIMA)", sigla: "FACULDADE FÁTIMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4700": { code: "4700", label: "FACULDADE NOVA ROMA (FNR)", sigla: "FNR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3543": { code: "3543", label: "FACULDADE NOVO HAMBURGO (FACULDADE IENH)", sigla: "FACULDADE IENH", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1308": { code: "1308", label: "FACULDADE NOVO MILÊNIO (FNM)", sigla: "FNM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1666": { code: "1666", label: "FACULDADE NOVOS HORIZONTES (NOVOS HORIZONTES)", sigla: "NOVOS HORIZONTES", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "10016": { code: "10016", label: "FACULDADE OBOÉ - FACO (FACO)", sigla: "FACO", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1433": { code: "1433", label: "FACULDADE ORÍGENES LESSA (FACOL)", sigla: "FACOL", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "10251": { code: "10251", label: "FACULDADE ORTODOXA (FACO)", sigla: "FACO", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2361": { code: "2361", label: "FACULDADE PADRÃO (-)", sigla: "FPADRAO", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1239": { code: "1239", label: "FACULDADE PADRÃO (PADRAO)", sigla: "PADRAO", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4371": { code: "4371", label: "FACULDADE PADRE ANCHIETA DE CAJAMAR", sigla: "PANCHIETACAJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "12249": { code: "12249", label: "FACULDADE PADRE ANCHIETA DE VÁRZEA PAULISTA (ANCHIETA)", sigla: "ANCHIETA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3680": { code: "3680", label: "FACULDADE PADRE DOURADO FORTALEZA (FACPED Fortaleza)", sigla: "FACPED Fortaleza", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1759": { code: "1759", label: "FACULDADE PADRE JOÃO BAGOZZI (FACULDADE BAGOZZI)", sigla: "FACULDADE BAGOZZI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1932": { code: "1932", label: "FACULDADE PALOTINA (FAPAS)", sigla: "FAPAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2911": { code: "2911", label: "FACULDADE PAN AMAZÔNICA (FAPAN)", sigla: "FAPAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2356": { code: "2356", label: "FACULDADE PAN AMERICANA (FPA)", sigla: "FPA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4411": { code: "4411", label: "FACULDADE PANAMERICANA DE JI-PARANÁ", sigla: "FAPANJI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2053": { code: "2053", label: "FACULDADE PARA O DESENVOLVIMENTO DE PERNAMBUCO (FADEPE)", sigla: "FADEPE", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "16881": { code: "16881", label: "Faculdade Para o Desenvolvimento do Sudeste Tocantinense (FADES)", sigla: "FADES", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "15383": { code: "15383", label: "FACULDADE PARA O DESENVOLVIMENTO SUSTENTÁVEL DA AMAZÔNIA (FADESA)", sigla: "FADESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "19337": { code: "19337", label: "FACULDADE PARA O DESENVOLVIMENTO SUSTENTÁVEL DO NORDESTE (FADESNE)", sigla: "FADESNE", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "3783": { code: "3783", label: "FACULDADE PARAENSE DE ENSINO (FAPEN)", sigla: "FAPEN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2243": { code: "2243", label: "FACULDADE PARAÍBANA (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "848": { code: "848", label: "FACULDADE PARAIBANA DE PROCESSAMENTO DE DADOS (FPPD)", sigla: "FPPD", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1488": { code: "1488", label: "FACULDADE PARAÍSO (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3388": { code: "3388", label: "FACULDADE PARAÍSO DO CEARÁ (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "14718": { code: "14718", label: "FACULDADE PARANÁ (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "432": { code: "432", label: "FACULDADE PARANAENSE (FACCAR)", sigla: "FACCAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2420": { code: "2420", label: "FACULDADE PARANAENSE (FAPAR)", sigla: "FAPAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2841": { code: "2841", label: "FACULDADE PARANAPANEMA (FP)", sigla: "FP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4538": { code: "4538", label: "FACULDADE PARQUE (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4492": { code: "4492", label: "FACULDADE PASCHOAL DANTAS (FPD)", sigla: "FPD", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "12597": { code: "12597", label: "FACULDADE PASSIONISTA DE EDUCAÇÃO DE CURITIBA (Fapec)", sigla: "Fapec", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "370": { code: "370", label: "FACULDADE PAULISTA DE ARTES (FPA)", sigla: "FPA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2549": { code: "2549", label: "FACULDADE PAULISTA DE EDUCAÇÃO E COMUNICAÇÃO (FAPEC)", sigla: "FAPEC", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "3746": { code: "3746", label: "FACULDADE PAULISTA DE PESQUISA E ENSINO SUPERIOR (FAPPES)", sigla: "FAPPES", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "362": { code: "362", label: "FACULDADE PAULISTA DE SERVIÇO SOCIAL (FAPSS-SP.)", sigla: "FAPSS-SP.", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "361": { code: "361", label: "FACULDADE PAULISTA DE SERVIÇO SOCIAL DE SÃO CAETANO DO SUL (FAPSS-SCS)", sigla: "FAPSS-SCS", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2247": { code: "2247", label: "Faculdade Paulista São José", sigla: "FPSJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18478": { code: "18478", label: "Faculdade Paulo Picanço (FAPP)", sigla: "FAPP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2811": { code: "2811", label: "FACULDADE PAULUS DE TECNOLOGIA E COMUNICAÇÃO (FAPCOM)", sigla: "FAPCOM", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "3690": { code: "3690", label: "FACULDADE PEDRO II (FAPE2)", sigla: "FAPE2", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4218": { code: "4218", label: "FACULDADE PEDRO LEOPOLDO (FPL)", sigla: "FPL", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1387": { code: "1387", label: "FACULDADE PENTÁGONO - FAPEN (FAPEN)", sigla: "FAPEN", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1909": { code: "1909", label: "FACULDADE PEREIRA DE FREITAS (FPF)", sigla: "FPF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3615": { code: "3615", label: "FACULDADE PERNAMBUCANA DE SAÚDE (FPS)", sigla: "FPS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4185": { code: "4185", label: "FACULDADE PERUIBE (FPBE)", sigla: "FPBE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "16502": { code: "16502", label: "FACULDADE PESTALOZZI DE FRANCA (FPF)", sigla: "FPF", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2660": { code: "2660", label: "FACULDADE PHÊNIX DE CIÊNCIAS HUMANAS E SOCIAIS DO BRASIL (PHENIX)", sigla: "PHENIX", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "14715": { code: "14715", label: "FACULDADE PIAGET (FACPIAGET)", sigla: "FACPIAGET", category: "Faculdade", oa: "Privada", ci: "5", igc: "SC" },
	  "1552": { code: "1552", label: "FACULDADE PIAUIENSE (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1683": { code: "1683", label: "FACULDADE PIAUIENSE (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "847": { code: "847", label: "FACULDADE PIAUIENSE DE PROCESSAMENTO DE DADOS (FPPD)", sigla: "FPPD", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2653": { code: "2653", label: "FACULDADE PIEMONTE (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "3495": { code: "3495", label: "FACULDADE PINHALZINHO (HORUS)", sigla: "HORUS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "764": { code: "764", label: "FACULDADE PINHEIRO GUIMARÃES (FAPG)", sigla: "FAPG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "661": { code: "661", label: "FACULDADE PIO DÉCIMO (FPD)", sigla: "FPD", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "19297": { code: "19297", label: "FACULDADE PIO DECIMO DE CANINDE DO SAO FRANCISCO (FAPIDE)", sigla: "FAPIDE", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "891": { code: "891", label: "FACULDADE PITÁGORAS", sigla: "PITAGORAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1818": { code: "1818", label: "FACULDADE PITÁGORAS DE BELO HORIZONTE (FPAS)", sigla: "FPAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4362": { code: "4362", label: "FACULDADE PITÁGORAS DE BETIM (PITÁGORAS-BETIM)", sigla: "PITÁGORAS-BETIM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13684": { code: "13684", label: "FACULDADE PITÁGORAS DE CONTAGEM (PIT Contagem)", sigla: "PIT Contagem", category: "Faculdade", oa: "Privada", ci: "5", igc: "SC" },
	  "3149": { code: "3149", label: "FACULDADE PITÁGORAS DE DIVINÓPOLIS - FPD (FPD)", sigla: "FPD", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4959": { code: "4959", label: "FACULDADE PITÁGORAS DE FEIRA DE SANTANA", sigla: "PITAGORASFEIRA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13133": { code: "13133", label: "FACULDADE PITÁGORAS DE GOIÂNIA (FAG)", sigla: "FAG", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "13743": { code: "13743", label: "FACULDADE PITÁGORAS DE GOVERNADOR VALADARES (PIT GV)", sigla: "PIT GV", category: "Faculdade", oa: "Privada", ci: "5", igc: "SC" },
	  "4867": { code: "4867", label: "FACULDADE PITÁGORAS DE GUARAPARI", sigla: "PITAGORASGUARAPARI", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1847": { code: "1847", label: "FACULDADE PITÁGORAS DE IMPERATRIZ", sigla: "PITAGORASIMP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2271": { code: "2271", label: "FACULDADE PITÁGORAS DE IPATINGA (FPI)", sigla: "FPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18627": { code: "18627", label: "Faculdade Pitágoras de João Pessoa", sigla: "PITAGORASJOAOP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "736": { code: "736", label: "FACULDADE PITÁGORAS DE LINHARES", sigla: "PITAGORASLIN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1632": { code: "1632", label: "FACULDADE PITÁGORAS DE LONDRINA", sigla: "PITAGORASLON", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "18628": { code: "18628", label: "Faculdade Pitágoras de Luis Eduardo Magalhães", sigla: "PITAGORASLEM", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "14429": { code: "14429", label: "FACULDADE PITÁGORAS DE MACEIÓ", sigla: "PITAGORASMAC", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "1668": { code: "1668", label: "FACULDADE PITÁGORAS DE MINAS GERAIS", sigla: "PITAGORASMG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4454": { code: "4454", label: "FACULDADE PITÁGORAS DE NOVA LIMA", sigla: "PITAGORASNOVALIMA", category: "Faculdade", oa: "Privada", ci: "1", igc: "-" },
	  "4863": { code: "4863", label: "FACULDADE PITÁGORAS DE POÇOS DE CALDAS", sigla: "PITAGORASPOCOS", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4865": { code: "4865", label: "FACULDADE PITÁGORAS DE SÃO LUIZ", sigla: "PITAGORASSAOL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4251": { code: "4251", label: "FACULDADE PITÁGORAS DE TECNOLOGIA DE BELO HORIZONTE (PIT-FATEC)", sigla: "PIT-FATEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "11751": { code: "11751", label: "Faculdade Pitágoras de Tecnologia de Betim (PIT Betim)", sigla: "PIT Betim", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "5066": { code: "5066", label: "FACULDADE PITÁGORAS DE TECNOLOGIA DE CONTAGEM", sigla: "PITAGORASCONTG", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2437": { code: "2437", label: "FACULDADE PITÁGORAS DE TEIXEIRA DE FREITAS (PIT TEIXEIRA)", sigla: "PIT TEIXEIRA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1492": { code: "1492", label: "FACULDADE PITÁGORAS DE UBERLÂNDIA (PIT UBERLÂNDIA)", sigla: "PIT UBERLÂNDIA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1452": { code: "1452", label: "FACULDADE PITÁGORAS DO MARANHÃO", sigla: "PITAGORASMARANHAO", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1061": { code: "1061", label: "FACULDADE PLANALTO DE ADMINISTRAÇÃO E CIÊNCIAS ECONÔMICAS (FACPLAN)", sigla: "FACPLAN", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1135": { code: "1135", label: "FACULDADE PLANALTO DE CIÊNCIA DA COMPUTAÇÃO (FACPLAN)", sigla: "FACPLAN", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "19251": { code: "19251", label: "FACULDADE PÓLIS CIVITAS", sigla: "FACIVITAS", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "5046": { code: "5046", label: "FACULDADE POLIS DAS ARTES", sigla: "POLISARTES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4029": { code: "4029", label: "FACULDADE POLITEC (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "3456": { code: "3456", label: "FACULDADE POLITÉCNICA DE CAMPINAS (POLICAMP)", sigla: "POLICAMP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18474": { code: "18474", label: "FACULDADE POLITÉCNICA DE GOIÁS (FPG)", sigla: "FPG", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1598": { code: "1598", label: "FACULDADE POLITÉCNICA DE UBERLÂNDIA (FPU)", sigla: "FPU", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4674": { code: "4674", label: "FACULDADE PORTO DAS ÁGUAS (FAPAG)", sigla: "FAPAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5317": { code: "5317", label: "FACULDADE PORTO-ALEGRENSE (FAPA)", sigla: "FAPA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "14890": { code: "14890", label: "FACULDADE PRAIA GRANDE (FPG)", sigla: "FPG", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "4739": { code: "4739", label: "FACULDADE PRESBITERIANA AUGUSTO GALVÃO (FAPAG)", sigla: "FAPAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "825": { code: "825", label: "FACULDADE PRESBITERIANA GAMMON (FAGAMMON)", sigla: "FAGAMMON", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "19229": { code: "19229", label: "FACULDADE PRESBITERIANA MACKENZIE BRASILIA (FPMB)", sigla: "FPMB", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "195": { code: "195", label: "FACULDADE PRESBITERIANA MACKENZIE RIO", sigla: "MACKENZIERIO", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "5544": { code: "5544", label: "FACULDADE PRESIDENTE ANTÔNIO CARLOS (FAPAC)", sigla: "FAPAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14029": { code: "14029", label: "Faculdade Presidente Antônio Carlos de Aimorés (FUNEC Aimorés)", sigla: "FUNEC Aimorés", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14204": { code: "14204", label: "Faculdade Presidente Antônio Carlos de Arcos (FUNEES Arcos)", sigla: "FUNEES Arcos", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "14101": { code: "14101", label: "Faculdade Presidente Antônio Carlos de Baependi (FUNEES Baependi)", sigla: "FUNEES Baependi", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14147": { code: "14147", label: "Faculdade Presidente Antônio Carlos de Barão de Cocais", sigla: "FACOCAIS", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14149": { code: "14149", label: "Faculdade Presidente Antônio Carlos de Bocaiúva (FUNEES Bocaiúva)", sigla: "FUNEES Bocaiúva", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "14160": { code: "14160", label: "Faculdade Presidente Antônio Carlos de Carmópolis (FUNEES C. de Minas)", sigla: "FUNEES C. de Minas", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "14249": { code: "14249", label: "Faculdade Presidente Antônio Carlos de Congonhas", sigla: "FACCONGONHAS", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "15453": { code: "15453", label: "Faculdade Presidente Antônio Carlos de Conselheiro Lafaiete", sigla: "FACCONSLAFAIATE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14206": { code: "14206", label: "Faculdade Presidente Antônio Carlos de Elói Mendes (FUNEES)", sigla: "FUNEES", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14162": { code: "14162", label: "Faculdade Presidente Antônio Carlos de Governador Valadares (FAU G. Valadares)", sigla: "FAU G. Valadares", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14166": { code: "14166", label: "Faculdade Presidente Antônio Carlos de Itabira (FUNEES Itabira)", sigla: "FUNEES Itabira", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14243": { code: "14243", label: "Faculdade Presidente Antônio Carlos de Itabirito", sigla: "FACITABIRITO", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "14263": { code: "14263", label: "Faculdade Presidente Antônio Carlos de Itajubá", sigla: "FACITAJUBA", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "14169": { code: "14169", label: "Faculdade Presidente Antônio Carlos de Itambacuri (FUNEES Itambacuri)", sigla: "FUNEES Itambacuri", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14132": { code: "14132", label: "Faculdade Presidente Antônio Carlos de Itanhandu (FUNEES Itanhandu)", sigla: "FUNEES Itanhandu", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14209": { code: "14209", label: "Faculdade Presidente Antônio Carlos de Lagoa Santa (FUNEES)", sigla: "FUNEES", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "14133": { code: "14133", label: "Faculdade Presidente Antônio Carlos de Lambari (FUNEES Lambari)", sigla: "FUNEES Lambari", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "15468": { code: "15468", label: "Faculdade Presidente Antônio Carlos de Leopoldina", sigla: "FACLEOPOL", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14148": { code: "14148", label: "Faculdade Presidente Antônio Carlos de Mariana (FUNEC Mariana)", sigla: "FUNEC Mariana", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14150": { code: "14150", label: "Faculdade Presidente Antônio Carlos de Montes Claros (FUNEC Montes Claros)", sigla: "FUNEC Montes Claros", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14151": { code: "14151", label: "Faculdade Presidente Antônio Carlos de Nova Lima (FUNEC Nova Lima)", sigla: "FUNEC Nova Lima", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14171": { code: "14171", label: "Faculdade Presidente Antõnio Carlos de Perdões (FUNEES Perdões)", sigla: "FUNEES Perdões", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "14115": { code: "14115", label: "Faculdade Presidente Antônio Carlos de Ponte Nova (FUNEES Ponte Nova)", sigla: "FUNEES Ponte Nova", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14153": { code: "14153", label: "Faculdade Presidente Antônio Carlos de Porteirinha (FUNEES Porteirinha)", sigla: "FUNEES Porteirinha", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "14173": { code: "14173", label: "Faculdade Presidente Antônio Carlos de Ribeirão das Neves (FUNEES R. das Neves)", sigla: "FUNEES R. das Neves", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14155": { code: "14155", label: "Faculdade Presidente Antônio Carlos de Sabará (FUNEES Sabará)", sigla: "FUNEES Sabará", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14121": { code: "14121", label: "Faculdade Presidente Antônio Carlos de São João Nepomuceno (FUNEES SJN)", sigla: "FUNEES SJN", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "14126": { code: "14126", label: "Faculdade Presidente Antônio Carlos de São Lourenço (FUNEES São Lourenço)", sigla: "FUNEES São Lourenço", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "14222": { code: "14222", label: "Faculdade Presidente Antônio Carlos de Senhora dos Remédios (FUNEES)", sigla: "FUNEES", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "14156": { code: "14156", label: "Faculdade Presidente Antônio Carlos de Teófilo Otoni (FUNEES Teófilo Otoni)", sigla: "FUNEES Teófilo Otoni", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "15357": { code: "15357", label: "Faculdade Presidente Antônio Carlos de Ubá", sigla: "FACUBA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14246": { code: "14246", label: "Faculdade Presidente Antônio Carlos de Uberaba", sigla: "FACUBERABA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14248": { code: "14248", label: "Faculdade Presidente Antônio Carlos de Uberlândia", sigla: "FACUBERLANDIA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14130": { code: "14130", label: "Faculdade Presidente Antônio Carlos de Várzea da Palma (FEES Várzea da Palma)", sigla: "FEES Várzea da Palma", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "14128": { code: "14128", label: "Faculdade Presidente Antônio Carlos de Vazante (FEES Vazante)", sigla: "FEES Vazante", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "15467": { code: "15467", label: "Faculdade Presidente Antônio Carlos de Visconde do Rio Branco", sigla: "FACVRIOBRANCO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13696": { code: "13696", label: "FACULDADE PRESIDENTE JK (FACULDADE JK)", sigla: "FACULDADE JK", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "13417": { code: "13417", label: "FACULDADE PRINCESA DO OESTE (FPO)", sigla: "FPO", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "12189": { code: "12189", label: "FACULDADE PRISMA (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2484": { code: "2484", label: "FACULDADE PROCESSUS (PFD)", sigla: "PFD", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17598": { code: "17598", label: "FACULDADE PROF. WLADEMIR DOS SANTOS (WLASAN)", sigla: "WLASAN", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "17657": { code: "17657", label: "Faculdade Professor Daltro", sigla: "FAPROFDALTRO", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4428": { code: "4428", label: "FACULDADE PROFESSOR MIGUEL ÂNGELO DA SILVA SANTOS (FEMASS)", sigla: "FEMASS", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "17460": { code: "17460", label: "FACULDADE Profissional (FAPRO)", sigla: "FAPRO", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "13752": { code: "13752", label: "FACULDADE PROGRESSO (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "14727": { code: "14727", label: "FACULDADE PROGRESSO (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1507": { code: "1507", label: "FACULDADE PROJEÇÃO DE CEILÂNDIA (FACEB)", sigla: "FACEB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3874": { code: "3874", label: "Faculdade Projeção de Planaltina (FAPRO)", sigla: "FAPRO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1661": { code: "1661", label: "Faculdade Projeção de Sobradinho (FAPRO)", sigla: "FAPRO", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1309": { code: "1309", label: "Faculdade Projeção de Taguatinga Norte - FAPRO (FAPRO)", sigla: "FAPRO", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2964": { code: "2964", label: "FACULDADE PROJEÇÃO DO GUARÁ", sigla: "FPROJGUARA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2450": { code: "2450", label: "FACULDADE PROMOVE DE BELO HORIZONTE (PROMOVE)", sigla: "PROMOVE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2443": { code: "2443", label: "FACULDADE PROMOVE DE JANAÚBA", sigla: "PROMOVEJAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1252": { code: "1252", label: "FACULDADE PROMOVE DE MINAS GERAIS (PROMOVE)", sigla: "PROMOVE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1700": { code: "1700", label: "FACULDADE PROMOVE DE SETE LAGOAS (FSLMG)", sigla: "FSLMG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2145": { code: "2145", label: "FACULDADE PROMOVE DE TECNOLOGIA (FPTEC)", sigla: "FPTEC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "983": { code: "983", label: "FACULDADE PRUDENTE DE MORAES (FPM)", sigla: "FPM", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "3252": { code: "3252", label: "FACULDADE QUIRINÓPOLIS (FAQUI)", sigla: "FAQUI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5228": { code: "5228", label: "FACULDADE RAIMUNDO MARINHO (FRM)", sigla: "FRM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "18874": { code: "18874", label: "FACULDADE RAIMUNDO MARINHO DE PENEDO", sigla: "FARAIPENEDO", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3389": { code: "3389", label: "FACULDADE RAÍZES (SER)", sigla: "SER", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1884": { code: "1884", label: "FACULDADE RANCHARIENSE (FRAN)", sigla: "FRAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2571": { code: "2571", label: "FACULDADE REDENTOR (FACREDENTOR)", sigla: "FACREDENTOR", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "14342": { code: "14342", label: "FACULDADE REDENTOR DE CAMPOS (FACREDENTOR)", sigla: "FACREDENTOR", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "17933": { code: "17933", label: "FACULDADE REDENTOR DE PARAÍBA DO SUL (FACREDENTOR)", sigla: "FACREDENTOR", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "14097": { code: "14097", label: "FACULDADE REFIDIM (Refidim)", sigla: "Refidim", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "922": { code: "922", label: "FACULDADE REGES DE DRACENA (FCGD)", sigla: "FCGD", category: "Faculdade", oa: "Privada", ci: "-", igc: "4" },
	  "1122": { code: "1122", label: "FACULDADE REGES DE OSVALDO CRUZ", sigla: "FAREOSC", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "4596": { code: "4596", label: "FACULDADE REGES DE RIBEIRÃO PRETO", sigla: "REGESRBT", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1956": { code: "1956", label: "FACULDADE REGIONAL BRASILEIRA - MACEIÓ (IBESA)", sigla: "IBESA", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "14297": { code: "14297", label: "FACULDADE REGIONAL BRASILEIRA - PARNAÍBA", sigla: "FRBPARNAIBA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2076": { code: "2076", label: "FACULDADE REGIONAL DA BAHIA (FARB)", sigla: "FARB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1893": { code: "1893", label: "Faculdade Regional da Bahia (FARB/UNIRB)", sigla: "FARB/UNIRB", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3864": { code: "3864", label: "FACULDADE REGIONAL DE ALAGOINHAS (FARAL)", sigla: "FARAL", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2572": { code: "2572", label: "FACULDADE REGIONAL DE FILOSOFIA, CIÊNCIAS E LETRAS DE CANDEIAS (FAC)", sigla: "FAC", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "4747": { code: "4747", label: "FACULDADE REGIONAL DE RIACHÃO DO JACUÍPE (FARJ)", sigla: "FARJ", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "4518": { code: "4518", label: "FACULDADE REGIONAL PALMITOS (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "-", igc: "4" },
	  "1768": { code: "1768", label: "FACULDADE REGIONAL SERRANA (FUNPAC)", sigla: "FUNPAC", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "2845": { code: "2845", label: "FACULDADE REINALDO RAMOS (FARR)", sigla: "FARR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18258": { code: "18258", label: "Faculdade Renil do Brasil (FRB)", sigla: "FRB", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4443": { code: "4443", label: "FACULDADE RIO CLARO", sigla: "FARIOCLARO", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "16781": { code: "16781", label: "Faculdade Rio Sono (riso)", sigla: "riso", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "2536": { code: "2536", label: "FACULDADE RORAIMENSE DE ENSINO SUPERIOR (FARES)", sigla: "FARES", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "396": { code: "396", label: "FACULDADE RUY BARBOSA (FRBA)", sigla: "FRBA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1852": { code: "1852", label: "FACULDADE SABERES (SABERES)", sigla: "SABERES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13832": { code: "13832", label: "FACULDADE SAGRADA FAMÍLIA (FASF)", sigla: "FASF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18266": { code: "18266", label: "FACULDADE SAINT GERMAIN SP (FSGSP)", sigla: "FSGSP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2403": { code: "2403", label: "FACULDADE SALESIANA DE PINDAMONHANGABA (FASP)", sigla: "FASP", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "1155": { code: "1155", label: "FACULDADE SALESIANA DE SANTA TERESA (FSST)", sigla: "FSST", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1454": { code: "1454", label: "FACULDADE SALESIANA DO NORDESTE (FASNE)", sigla: "FASNE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2186": { code: "2186", label: "FACULDADE SALESIANA DOM BOSCO (FSDB)", sigla: "FSDB", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2844": { code: "2844", label: "FACULDADE SALESIANA DOM BOSCO DE PIRACICABA (FSDB)", sigla: "FSDB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1682": { code: "1682", label: "FACULDADE SALESIANA MARIA AUXILIADORA (FSMA)", sigla: "FSMA", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "2160": { code: "2160", label: "FACULDADE SANT'ANA (IESSA)", sigla: "IESSA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1272": { code: "1272", label: "FACULDADE SANT´ANNA DE SALTO (FASAS)", sigla: "FASAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1726": { code: "1726", label: "FACULDADE SANTA AMÉLIA (SECAL)", sigla: "SECAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2656": { code: "2656", label: "FACULDADE SANTA CATARINA (FASC)", sigla: "FASC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "652": { code: "652", label: "FACULDADE SANTA CECÍLIA (FASC)", sigla: "FASC", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "3585": { code: "3585", label: "FACULDADE SANTA CRUZ (FACRUZ)", sigla: "FACRUZ", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4742": { code: "4742", label: "FACULDADE SANTA EMÍLIA", sigla: "FASANTAEMILIA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "339": { code: "339", label: "FACULDADE SANTA EMÍLIA DE RODAT (FASER)", sigla: "FASER", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1597": { code: "1597", label: "FACULDADE SANTA FÉ (CESSF)", sigla: "CESSF", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1384": { code: "1384", label: "FACULDADE SANTA HELENA (FSH)", sigla: "FSH", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1689": { code: "1689", label: "FACULDADE SANTA IZILDINHA (FIESI)", sigla: "FIESI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "910": { code: "910", label: "FACULDADE SANTA LÚCIA (FCACSL)", sigla: "FCACSL", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "434": { code: "434", label: "FACULDADE SANTA MARCELINA (FASM)", sigla: "FASM", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "435": { code: "435", label: "FACULDADE SANTA MARCELINA MURIAÉ - FASM (FASM)", sigla: "FASM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1771": { code: "1771", label: "FACULDADE SANTA MARIA (FSM)", sigla: "FSM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2158": { code: "2158", label: "FACULDADE SANTA MARIA (FSM)", sigla: "FSM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1202": { code: "1202", label: "FACULDADE SANTA RITA (FASAR)", sigla: "FASAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1620": { code: "1620", label: "FACULDADE SANTA RITA (FASAR)", sigla: "FASAR", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "3020": { code: "3020", label: "FACULDADE SANTA RITA DE CÁSSIA (IFASC)", sigla: "IFASC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1115": { code: "1115", label: "FACULDADE SANTA TEREZINHA (CEST)", sigla: "CEST", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1455": { code: "1455", label: "FACULDADE SANTÍSSIMO SACRAMENTO (FSSS)", sigla: "FSSS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5388": { code: "5388", label: "Faculdade Santista - FASAN", sigla: "FASAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1902": { code: "1902", label: "FACULDADE SANTO AGOSTINHO (FACSA)", sigla: "FACSA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1131": { code: "1131", label: "FACULDADE SANTO AGOSTINHO (FSA)", sigla: "FSA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13809": { code: "13809", label: "FACULDADE SANTO AGOSTINHO DE SETE LAGOAS (FASASETE)", sigla: "FASASETE", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "17433": { code: "17433", label: "FACULDADE SANTO AGOSTINHO DE VITÓRIA DA CONQUISTA (FASAVIC)", sigla: "FASAVIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "10929": { code: "10929", label: "FACULDADE SANTO ANDRE (FASA)", sigla: "FASA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "17558": { code: "17558", label: "Faculdade Santo André (FASA)", sigla: "FASA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3285": { code: "3285", label: "FACULDADE SANTO ANTONIO (FSA)", sigla: "FSA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2616": { code: "2616", label: "FACULDADE SANTO ANTÔNIO DE PÁDUA (FASAP)", sigla: "FASAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18667": { code: "18667", label: "FACULDADE SANTO ANTONIO I (FSA - I)", sigla: "FSA - I", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "5023": { code: "5023", label: "FACULDADE SANTO AUGUSTO (FAISA)", sigla: "FAISA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13476": { code: "13476", label: "FACULDADE SÃO BASÍLIO MAGNO (FASBAM)", sigla: "FASBAM", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "3270": { code: "3270", label: "FACULDADE SÃO BENTO DA BAHIA", sigla: "FASBBA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2617": { code: "2617", label: "FACULDADE SÃO BENTO DO RIO DE JANEIRO (FSB/RJ)", sigla: "FSB/RJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3990": { code: "3990", label: "FACULDADE SÃO BERNARDO DE TECNOLOGIA", sigla: "FASBDT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5025": { code: "5025", label: "Faculdade São Braz (FSB)", sigla: "FSB", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "977": { code: "977", label: "FACULDADE SÃO CAMILO", sigla: "FSAOCAMILO", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2885": { code: "2885", label: "FACULDADE SÃO CAMILO (FASC-MG)", sigla: "FASC-MG", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "1904": { code: "1904", label: "FACULDADE SÃO CAMILO (FASC)", sigla: "FASC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "13631": { code: "13631", label: "FACULDADE SÃO FIDELIS (FSF)", sigla: "FSF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4533": { code: "4533", label: "FACULDADE SÃO FRANCISCO DA PARAÍBA (FASP)", sigla: "FASP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2795": { code: "2795", label: "FACULDADE SÃO FRANCISCO DE ASSIS (FASFA)", sigla: "FASFA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2855": { code: "2855", label: "FACULDADE SÃO FRANCISCO DE ASSIS (UNIFIN)", sigla: "UNIFIN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1227": { code: "1227", label: "FACULDADE SÃO FRANCISCO DE BARREIRAS - FASB (FASB)", sigla: "FASB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3365": { code: "3365", label: "FACULDADE SÃO FRANCISCO DE JUAZEIRO (FASJ)", sigla: "FASJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3975": { code: "3975", label: "FACULDADE SÃO FRANCISCO DE PIUMHI (FASPI)", sigla: "FASPI", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "16559": { code: "16559", label: "FACULDADE SÃO FRANCISCO DO CEARÁ (FASC)", sigla: "FASC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1360": { code: "1360", label: "FACULDADE SÃO GABRIEL (FSG)", sigla: "FSG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14927": { code: "14927", label: "FACULDADE SÃO GABRIEL DA PALHA (FASG)", sigla: "FASG", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2537": { code: "2537", label: "FACULDADE SÃO GERALDO (FSG)", sigla: "FSG", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "705": { code: "705", label: "FACULDADE SÃO JOSÉ (FSJ)", sigla: "FSJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "220": { code: "220", label: "FACULDADE SÃO JUDAS TADEU (FSJT)", sigla: "FSJT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2368": { code: "2368", label: "FACULDADE SÃO LEOPOLDO MANDIC", sigla: "FSLMANDIC", category: "Faculdade", oa: "Privada", ci: "5", igc: "5" },
	  "2462": { code: "2462", label: "FACULDADE SÃO LUÍS (FSL)", sigla: "FSL", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1090": { code: "1090", label: "FACULDADE SÃO LUÍS DE FRANÇA (FSLF)", sigla: "FSLF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2137": { code: "2137", label: "FACULDADE SÃO MARCOS (FASAMAR)", sigla: "FASAMAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "13648": { code: "13648", label: "FACULDADE SÃO MARCOS (FASM)", sigla: "FASM", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1676": { code: "1676", label: "FACULDADE SÃO MIGUEL (FACULDADE SÃO MIGUEL)", sigla: "FACULDADE SÃO MIGUEL", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4435": { code: "4435", label: "FACULDADE SÃO PAULO (FACSP)", sigla: "FACSP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2754": { code: "2754", label: "FACULDADE SÃO PAULO (FSP)", sigla: "FSP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2581": { code: "2581", label: "FACULDADE SÃO SALVADOR (FSS)", sigla: "FSS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2814": { code: "2814", label: "FACULDADE SÃO SEBASTIÃO", sigla: "FASSEBASTIAO", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2156": { code: "2156", label: "FACULDADE SÃO TOMÁS DE AQUINO (FACESTA)", sigla: "FACESTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3774": { code: "3774", label: "FACULDADE SÃO TOMAZ DE AQUINO (FSTA)", sigla: "FSTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2642": { code: "2642", label: "FACULDADE SÃO VICENTE (FASVIPA)", sigla: "FASVIPA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2896": { code: "2896", label: "FACULDADE SATC (FASATC)", sigla: "FASATC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "17803": { code: "17803", label: "Faculdade SEB de Negócios (SEB)", sigla: "SEB", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "15433": { code: "15433", label: "FACULDADE SEDAC (SEDAC)", sigla: "SEDAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2703": { code: "2703", label: "FACULDADE SENAC MINAS (FSM)", sigla: "FSM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3996": { code: "3996", label: "FACULDADE SENAC PERNAMBUCO (SENACPE)", sigla: "SENACPE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3804": { code: "3804", label: "FACULDADE SENAC PORTO ALEGRE - FSPOA (SENAC/RS)", sigla: "SENAC/RS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17763": { code: "17763", label: "Faculdade SENAI de João Pessoa", sigla: "SENAIJP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1286": { code: "1286", label: "FACULDADE SENAI DE TECNOLOGIA AMBIENTAL (SENAI)", sigla: "SENAI", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "17631": { code: "17631", label: "FACULDADE SENAI DE TECNOLOGIA DE POÇOS DE CALDAS (FATEC POÇOS)", sigla: "FATEC POÇOS", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "1150": { code: "1150", label: "FACULDADE SENAI DE TECNOLOGIA GRÁFICA (SP SENAI)", sigla: "SP SENAI", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1195": { code: "1195", label: "FACULDADE SENAI DE TECNOLOGIA MECATRÔNICA (SENAI)", sigla: "SENAI", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "16967": { code: "16967", label: "FACULDADE SENAI RIO", sigla: "SENAIRIO", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "991": { code: "991", label: "FACULDADE SENAI-CETIQT (SENAI-CETIQT)", sigla: "SENAI-CETIQT", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "13488": { code: "13488", label: "FACULDADE SEQÜENCIAL", sigla: "SEQUENCIAL", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2248": { code: "2248", label: "FACULDADE SERGIPANA (FASER)", sigla: "FASER", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5362": { code: "5362", label: "FACULDADE SERIGY (FASERGY)", sigla: "FASERGY", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3757": { code: "3757", label: "FACULDADE SERRA DA MESA (FASEM)", sigla: "FASEM", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "2870": { code: "2870", label: "FACULDADE SERRA DO CARMO (FASEC)", sigla: "FASEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4632": { code: "4632", label: "FACULDADE SERRANA", sigla: "FSERRANA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "17731": { code: "17731", label: "FACULDADE SESI-SP DE EDUCAÇÃO (FASESP)", sigla: "FASESP", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "1556": { code: "1556", label: "FACULDADE SETE DE SETEMBRO (FA7)", sigla: "FA7", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2222": { code: "2222", label: "FACULDADE SETE DE SETEMBRO (FASETE)", sigla: "FASETE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "12620": { code: "12620", label: "FACULDADE SETE LAGOAS (FACSETE)", sigla: "FACSETE", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2014": { code: "2014", label: "FACULDADE SETELAGOANA DE CIÊNCIAS GERENCIAIS (FASCIG)", sigla: "FASCIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "13034": { code: "13034", label: "FACULDADE SHALOM DE ENSINO SUPERIOR (FASES)", sigla: "FASES", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1980": { code: "1980", label: "FACULDADE SINERGIA (SINERGIA)", sigla: "SINERGIA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1934": { code: "1934", label: "FACULDADE SINOP (FASIP)", sigla: "FASIP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1641": { code: "1641", label: "FACULDADE SOCIAL DA BAHIA (FSBA)", sigla: "FSBA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3758": { code: "3758", label: "Faculdade SOCIESC", sigla: "SOCIESC", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "3437": { code: "3437", label: "Faculdade SOCIESC de Balneário Camboriú", sigla: "SOCIESCBC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4045": { code: "4045", label: "Faculdade SOCIESC de Curitiba (SOCIESC)", sigla: "SOCIESC", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "5107": { code: "5107", label: "FACULDADE SOGIPA DE EDUCAÇÃO FÍSICA", sigla: "FSOGIPAEFS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2256": { code: "2256", label: "Faculdade Stella Maris - FSM (FSM)", sigla: "FSM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2041": { code: "2041", label: "FACULDADE SUDAMÉRICA (SUDAMÉRICA)", sigla: "SUDAMÉRICA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "11752": { code: "11752", label: "FACULDADE SUDOESTE PAULISTA - TATUÍ - FSP (TATUÍ - FSP)", sigla: "TATUÍ - FSP", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "1317": { code: "1317", label: "FACULDADE SUDOESTE PAULISTA (FSP)", sigla: "FSP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "15777": { code: "15777", label: "FACULDADE SUDOESTE PAULISTA-ITAPETININGA (FSP)", sigla: "FSP", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "1013": { code: "1013", label: "FACULDADE SUDOESTE PAULISTANO (FASUP)", sigla: "FASUP", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "1612": { code: "1612", label: "FACULDADE SUL BRASIL (FASUL)", sigla: "FASUL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2836": { code: "2836", label: "FACULDADE SUL DA AMÉRICA (SULDAMÉRICA)", sigla: "SULDAMÉRICA", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "1564": { code: "1564", label: "FACULDADE SUL FLUMINENSE (FASF)", sigla: "FASF", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1822": { code: "1822", label: "FACULDADE SUL-AMERICANA (FASAM)", sigla: "FASAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1388": { code: "1388", label: "FACULDADE SUMARÉ (ISES)", sigla: "ISES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2280": { code: "2280", label: "FACULDADE SUPERIOR DE RIBAS DO RIO PARDO (FASURP)", sigla: "FASURP", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "18408": { code: "18408", label: "FACULDADE TABOÃO (FECAF)", sigla: "FECAF", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2436": { code: "2436", label: "FACULDADE TÁHIRIH (FT)", sigla: "FT", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2651": { code: "2651", label: "FACULDADE TAMANDARÉ (FAT)", sigla: "FAT", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1323": { code: "1323", label: "FACULDADE TANCREDO NEVES (FTN)", sigla: "FTN", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "4043": { code: "4043", label: "FACULDADE TECNOLOGIA EDUVALE - AVARÉ (FATEC EDUVALE)", sigla: "FATEC EDUVALE", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "14860": { code: "14860", label: "FACULDADE TECNOLÓGICA DENTAL CEEO (ESD-CEEO)", sigla: "ESD-CEEO", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4079": { code: "4079", label: "FACULDADE TECNOLÓGICA INAP (FAT- INAP)", sigla: "FAT- INAP", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "15611": { code: "15611", label: "Faculdade Tecnológica Latino Americana (FATLA)", sigla: "FATLA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17850": { code: "17850", label: "FACULDADE TECNOLÓGICA SANTANNA (FACSANTANNA)", sigla: "FACSANTANNA", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1319": { code: "1319", label: "FACULDADE TECSOMA (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2594": { code: "2594", label: "FACULDADE TEOLÓGICA BATISTA ANA WOLLERMAN (FTBAW)", sigla: "FTBAW", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3573": { code: "3573", label: "FACULDADE TEOLÓGICA BATISTA DE BRASÍLIA (FTBB)", sigla: "FTBB", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3770": { code: "3770", label: "FACULDADE TEOLÓGICA BATISTA DE SÃO PAULO (FTBSP)", sigla: "FTBSP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2237": { code: "2237", label: "FACULDADE TEOLÓGICA BATISTA EQUATORIAL (FATEBE)", sigla: "FATEBE", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "17288": { code: "17288", label: "Faculdade Teológica Betânia (FATEBE)", sigla: "FATEBE", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3051": { code: "3051", label: "FACULDADE TEOLÓGICA DE CIÊNCIAS HUMANAS E SOCIAIS LOGOS (FAETEL)", sigla: "FAETEL", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "14914": { code: "14914", label: "FACULDADE TEOLÓGICA EVANGÉLICA DO RIO DE JANEIRO (FATERJ)", sigla: "FATERJ", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "2573": { code: "2573", label: "FACULDADE TEOLÓGICA SUL AMERICANA (FTSA)", sigla: "FTSA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4367": { code: "4367", label: "FACULDADE TERRA NORDESTE (FATENE)", sigla: "FATENE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "19358": { code: "19358", label: "Faculdade Thiago Ferreira (FAT)", sigla: "FAT", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1972": { code: "1972", label: "FACULDADE TIJUCUSSU (TIJUCUSSU)", sigla: "TIJUCUSSU", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "294": { code: "294", label: "FACULDADE TRÊS DE MAIO (SETREM)", sigla: "SETREM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14165": { code: "14165", label: "FACULDADE TRÊS PONTAS (FATEP)", sigla: "FATEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "507": { code: "507", label: "FACULDADE TRIÂNGULO MINEIRO (FTM)", sigla: "FTM", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1362": { code: "1362", label: "FACULDADE UBAENSE OZANAM COELHO (FAGOC)", sigla: "FAGOC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3430": { code: "3430", label: "Faculdade Uberlandense de Núcleos Integrados de Ensino, Serviço Social e Aprendizagem (FAESSA)", sigla: "FAESSA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2793": { code: "2793", label: "FACULDADE UBS (FACULDADE UBS)", sigla: "FACULDADE UBS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14028": { code: "14028", label: "Faculdade UNA de Betim (UNA)", sigla: "UNA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4766": { code: "4766", label: "FACULDADE UNA DE CONTAGEM (FUNAC)", sigla: "FUNAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18454": { code: "18454", label: "Faculdade Una de Sete Lagoas (Unaset)", sigla: "Unaset", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "10836": { code: "10836", label: "FACULDADE UNIÃO ARARUAMA DE ENSINO S/S Ltda. (FAC-UNILAGOS)", sigla: "FAC-UNILAGOS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2324": { code: "2324", label: "FACULDADE UNIÃO BANDEIRANTE (FUBSJ)", sigla: "FUBSJ", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "2289": { code: "2289", label: "FACULDADE UNIÃO CULTURAL DO ESTADO DE SÃO PAULO (UCESP)", sigla: "UCESP", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "1716": { code: "1716", label: "FACULDADE UNIÃO DAS AMÉRICAS", sigla: "FUNIAMERICA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "12766": { code: "12766", label: "FACULDADE UNIÃO DE CAMPO MOURÃO", sigla: "FAMOURAO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3987": { code: "3987", label: "FACULDADE UNIÃO DE GOYAZES (FUG)", sigla: "FUG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14161": { code: "14161", label: "Faculdade Única de Contagem (FUNIC)", sigla: "FUNIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "15450": { code: "15450", label: "Faculdade Única de Ipatinga (FUNIP)", sigla: "FUNIP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14242": { code: "14242", label: "FACULDADE ÚNICA DE TIMÓTEO (FUNIT)", sigla: "FUNIT", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2770": { code: "2770", label: "FACULDADE UNIDA DE CAMPINAS (FACUNICAMPS)", sigla: "FACUNICAMPS", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "18133": { code: "18133", label: "Faculdade Unida de Campinas Goiânia - FACUNICAMPS GOIÂNIA (FACUNICAMPS)", sigla: "FACUNICAMPS", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1313": { code: "1313", label: "FACULDADE UNIDA DE SUZANO (UNISUZ)", sigla: "UNISUZ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2652": { code: "2652", label: "FACULDADE UNIDA DE VITÓRIA (FACULDADE UNIDA)", sigla: "FACULDADE UNIDA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4429": { code: "4429", label: "FACULDADE UNIGRAN CAPITAL (UNIGRAN CAPITAL)", sigla: "UNIGRAN CAPITAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "17165": { code: "17165", label: "FACULDADE UNILAGOS (UNILAGOS)", sigla: "UNILAGOS", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2037": { code: "2037", label: "FACULDADE UNIME DE CIÊNCIAS EXATAS E TECNOLÓGICAS (FCT)", sigla: "FCT", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1565": { code: "1565", label: "FACULDADE UNIME DE CIÊNCIAS JURÍDICAS (FCJ)", sigla: "FCJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1571": { code: "1571", label: "FACULDADE UNIME DE CIÊNCIAS SOCIAIS (FCS)", sigla: "FCS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1644": { code: "1644", label: "FACULDADE UNIME DE EDUCAÇÃO E COMUNICAÇÃO (FEC)", sigla: "FEC", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "20053": { code: "20053", label: "FACULDADE UNIMED", sigla: "UNIMED", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1399": { code: "1399", label: "FACULDADE UNISSA DE SARANDI", sigla: "UNISSASARANDI", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3876": { code: "3876", label: "Faculdade Unyleya", sigla: "FUNYLEYA", category: "Faculdade", oa: "Privada", ci: "-", igc: "4" },
	  "18253": { code: "18253", label: "FACULDADE VALE DO AÇO (FAVALE)", sigla: "FAVALE", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1514": { code: "1514", label: "FACULDADE VALE DO CRICARÉ (F.V.C.)", sigla: "F.V.C.", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2200": { code: "2200", label: "FACULDADE VALE DO GORUTUBA (FAVAG)", sigla: "FAVAG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3394": { code: "3394", label: "FACULDADE VALE DO IPIRANGA (FAVAPI)", sigla: "FAVAPI", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "2043": { code: "2043", label: "FACULDADE VALE DO SALGADO (FVS)", sigla: "FVS", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "4629": { code: "4629", label: "Faculdade Valorem", sigla: "VALOREM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3826": { code: "3826", label: "FACULDADE VASCO DA GAMA (FVG)", sigla: "FVG", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3039": { code: "3039", label: "FACULDADE VASCONCELLOS & SOUZA", sigla: "FAVASES", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "2538": { code: "2538", label: "FACULDADE VENDA NOVA DO IMIGRANTE (FAVENI)", sigla: "FAVENI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18681": { code: "18681", label: "FACULDADE VERBO EDUCACIONAL (VERBOEDU)", sigla: "VERBOEDU", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "2910": { code: "2910", label: "FACULDADE VERDE NORTE (FAVENORTE)", sigla: "FAVENORTE", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "4846": { code: "4846", label: "FACULDADE VÉRTICE (VÉRTICE)", sigla: "VÉRTICE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18048": { code: "18048", label: "Faculdade Vértix Trirriense (FVT)", sigla: "FVT", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "3509": { code: "3509", label: "FACULDADE VICENTINA - FAVI (FAVI)", sigla: "FAVI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2229": { code: "2229", label: "FACULDADE VICTOR HUGO (FVH)", sigla: "FVH", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "17499": { code: "17499", label: "Faculdade Vidal de Limoeiro (FAVILI)", sigla: "FAVILI", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "11376": { code: "11376", label: "FACULDADE VILLA-LOBOS DO CONE-LESTE PAULISTA (FAV-COLESP)", sigla: "FAV-COLESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2197": { code: "2197", label: "Faculdade Villas Boas (FVB)", sigla: "FVB", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "1363": { code: "1363", label: "FACULDADE VISCONDE DE CAIRÚ (FAVIC)", sigla: "FAVIC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "839": { code: "839", label: "FACULDADE VITORIANA DE CIÊNCIAS CONTÁBEIS (FAVI)", sigla: "FAVI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "840": { code: "840", label: "FACULDADE VITORIANA DE TECNOLOGIA (FAVI)", sigla: "FAVI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1567": { code: "1567", label: "FACULDADE VIZINHANÇA VALE DO IGUAÇU (VIZIVALI)", sigla: "VIZIVALI", category: "Faculdade", oa: "Pública", ci: "3", igc: "2" },
	  "17553": { code: "17553", label: "Faculdade Waldir Filho", sigla: "FAWALDIRF", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1725": { code: "1725", label: "FACULDADE XV DE AGOSTO (FAQ)", sigla: "FAQ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2568": { code: "2568", label: "FACULDADE ZACARIAS DE GÓES (FAZAG)", sigla: "FAZAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2886": { code: "2886", label: "FACULDADE ZUMBI DOS PALMARES (FAZP)", sigla: "FAZP", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "648": { code: "648", label: "FACULDADES ASSOCIADAS DE UBERABA - FAZU (FAZU)", sigla: "FAZU", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5312": { code: "5312", label: "FACULDADES ATIBAIA (FAAT)", sigla: "FAAT", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2141": { code: "2141", label: "FACULDADES BATISTA DO PARANÁ (FABAPAR)", sigla: "FABAPAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "12421": { code: "12421", label: "FACULDADES COC DE SÃO PAULO (FACOCSP)", sigla: "FACOCSP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "170": { code: "170", label: "FACULDADES DA FUNDAÇÃO DE ENSINO DE MOCOCA (FAFEM)", sigla: "FAFEM", category: "Faculdade", oa: "Pública", ci: "3", igc: "3" },
	  "18051": { code: "18051", label: "Faculdades de Ciências e Tecnologia do Nordeste LTDA (FACINE)", sigla: "FACINE", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1420": { code: "1420", label: "FACULDADES DE DRACENA", sigla: "FADRACENA", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "13717": { code: "13717", label: "FACULDADES DO VALE DO ARARANGUA - FVA (FVA)", sigla: "FVA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "270": { code: "270", label: "FACULDADES ESEFAP", sigla: "ESEFAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1382": { code: "1382", label: "Faculdades EST (EST)", sigla: "EST", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "13643": { code: "13643", label: "FACULDADES EVANGÉLICAS INTEGRADAS CANTARES DE SALOMÃO (FEICS)", sigla: "FEICS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3754": { code: "3754", label: "FACULDADES INTEGRADAS ADVENTISTAS DE MINAS GERAIS (FADMINAS)", sigla: "FADMINAS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "681": { code: "681", label: "FACULDADES INTEGRADAS ANGLO-AMERICANO (FIAA)", sigla: "FIAA", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "1087": { code: "1087", label: "FACULDADES INTEGRADAS APARÍCIO CARVALHO (FIMCA)", sigla: "FIMCA", category: "Faculdade", oa: "Privada", ci: "5", igc: "2" },
	  "5369": { code: "5369", label: "FACULDADES INTEGRADAS ASMEC (ASMEC)", sigla: "ASMEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4420": { code: "4420", label: "FACULDADES INTEGRADAS BARROS MELO (FIBAM)", sigla: "FIBAM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5591": { code: "5591", label: "FACULDADES INTEGRADAS CAMÕES (FICA)", sigla: "FICA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4502": { code: "4502", label: "FACULDADES INTEGRADAS CAMPO-GRANDENSES (FIC)", sigla: "FIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "263": { code: "263", label: "FACULDADES INTEGRADAS CAMPOS SALLES (FICS)", sigla: "FICS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "662": { code: "662", label: "FACULDADES INTEGRADAS CORAÇÃO DE JESUS (FAINC)", sigla: "FAINC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3611": { code: "3611", label: "FACULDADES INTEGRADAS DA UNIÃO DE ENSINO SUPERIOR CERTO (UNICERTO)", sigla: "UNICERTO", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "5439": { code: "5439", label: "FACULDADES INTEGRADAS DA UNIÃO EDUCACIONAL DO PLANALTO CENTRAL - FACIPLAC (FACIPLAC)", sigla: "FACIPLAC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "404": { code: "404", label: "FACULDADES INTEGRADAS DA UPIS (UPIS)", sigla: "UPIS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3515": { code: "3515", label: "FACULDADES INTEGRADAS DA VITÓRIA DE SANTO ANTÃO (FAINTVISA)", sigla: "FAINTVISA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "798": { code: "798", label: "FACULDADES INTEGRADAS DE ARACRUZ (FAACZ)", sigla: "FAACZ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1569": { code: "1569", label: "FACULDADES INTEGRADAS DE ARARAQUARA (FIAR)", sigla: "FIAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "833": { code: "833", label: "FACULDADES INTEGRADAS DE ARIQUEMES (FIAR)", sigla: "FIAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1092": { code: "1092", label: "FACULDADES INTEGRADAS DE BAURU (FIB)", sigla: "FIB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "716": { code: "716", label: "FACULDADES INTEGRADAS DE BOTUCATU (UNIFAC)", sigla: "UNIFAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4255": { code: "4255", label: "FACULDADES INTEGRADAS DE CACOAL (UNESC)", sigla: "UNESC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1568": { code: "1568", label: "FACULDADES INTEGRADAS DE CARATINGA (FIC)", sigla: "FIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1606": { code: "1606", label: "FACULDADES INTEGRADAS DE CASSILÂNDIA (FIC)", sigla: "FIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3955": { code: "3955", label: "FACULDADES INTEGRADAS DE CATAGUASES (FIC)", sigla: "FIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3432": { code: "3432", label: "FACULDADES INTEGRADAS DE CIÊNCIAS HUMANAS, SAÚDE E EDUCAÇÃO DE GUARULHOS (FG)", sigla: "FG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "509": { code: "509", label: "FACULDADES INTEGRADAS DE CRUZEIRO (FIC)", sigla: "FIC", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "795": { code: "795", label: "FACULDADES INTEGRADAS DE DIAMANTINO (FID)", sigla: "FID", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1299": { code: "1299", label: "FACULDADES INTEGRADAS DE FERNANDÓPOLIS (FIFE)", sigla: "FIFE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "533": { code: "533", label: "FACULDADES INTEGRADAS DE ITAPETININGA (FII)", sigla: "FII", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4793": { code: "4793", label: "FACULDADES INTEGRADAS DE ITARARÉ (FAFIT-FACIC)", sigla: "FAFIT-FACIC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "667": { code: "667", label: "FACULDADES INTEGRADAS DE JACAREPAGUÁ (FIJ)", sigla: "FIJ", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "1355": { code: "1355", label: "FACULDADES INTEGRADAS DE JAHU (FIJ)", sigla: "FIJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "769": { code: "769", label: "FACULDADES INTEGRADAS DE NAVIRAÍ (FINAV)", sigla: "FINAV", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "265": { code: "265", label: "FACULDADES INTEGRADAS DE OURINHOS (FIO)", sigla: "FIO", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "913": { code: "913", label: "FACULDADES INTEGRADAS DE PARANAÍBA - FIPAR (FIPAR)", sigla: "FIPAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3304": { code: "3304", label: "FACULDADES INTEGRADAS DE PATOS (FIP)", sigla: "FIP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "976": { code: "976", label: "FACULDADES INTEGRADAS DE PONTA PORÃ (FIP)", sigla: "FIP", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1304": { code: "1304", label: "FACULDADES INTEGRADAS DE RIBEIRÃO PIRES (FIRP)", sigla: "FIRP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "899": { code: "899", label: "FACULDADES INTEGRADAS DE RIO VERDE (FIRVE)", sigla: "FIRVE", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1312": { code: "1312", label: "FACULDADES INTEGRADAS DE RONDONÓPOLIS (FAIR)", sigla: "FAIR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1356": { code: "1356", label: "FACULDADES INTEGRADAS DE SANTA FÉ DO SUL (FUNEC)", sigla: "FUNEC", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "1097": { code: "1097", label: "FACULDADES INTEGRADAS DE SÃO PAULO (FISP)", sigla: "FISP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14622": { code: "14622", label: "FACULDADES INTEGRADAS DE SERGIPE (FISE)", sigla: "FISE", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1587": { code: "1587", label: "FACULDADES INTEGRADAS DE TANGARÁ DA SERRA (FITS)", sigla: "FITS", category: "Faculdade", oa: "Privada", ci: "2", igc: "4" },
	  "5285": { code: "5285", label: "FACULDADES INTEGRADAS DE TAQUARA (FACCAT)", sigla: "FACCAT", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1038": { code: "1038", label: "FACULDADES INTEGRADAS DE TRÊS LAGOAS (AEMS)", sigla: "AEMS", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1839": { code: "1839", label: "FACULDADES INTEGRADAS DE VÁRZEA GRANDE (FIAVEC)", sigla: "FIAVEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1142": { code: "1142", label: "FACULDADES INTEGRADAS DE VITÓRIA (FDV)", sigla: "FDV", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2775": { code: "2775", label: "Faculdades Integradas Desembargador Sávio Brandão (FAUSB)", sigla: "FAUSB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2632": { code: "2632", label: "FACULDADES INTEGRADAS DO EXTREMO SUL DA BAHIA (UNESULBAHIA)", sigla: "UNESULBAHIA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "5592": { code: "5592", label: "FACULDADES INTEGRADAS DO NORTE DE MINAS - FUNORTE (FUNORTE)", sigla: "FUNORTE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3643": { code: "3643", label: "Faculdades Integradas do Rio Grande do Norte - FANORTES", sigla: "FANORTES", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "757": { code: "757", label: "FACULDADES INTEGRADAS DO TAPAJÓS (ISES)", sigla: "ISES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1927": { code: "1927", label: "FACULDADES INTEGRADAS DO VALE DO IGUAÇU", sigla: "FAIVALEI", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "3688": { code: "3688", label: "FACULDADES INTEGRADAS DO VALE DO IVAÍ", sigla: "FIIVAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1554": { code: "1554", label: "FACULDADES INTEGRADAS DO VALE DO RIBEIRA (FIVR)", sigla: "FIVR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3753": { code: "3753", label: "FACULDADES INTEGRADAS DOM PEDRO II (DOMPEDRO)", sigla: "DOMPEDRO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3193": { code: "3193", label: "FACULDADES INTEGRADAS DOS CAMPOS GERAIS (CESCAGE)", sigla: "CESCAGE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1444": { code: "1444", label: "FACULDADES INTEGRADAS EINSTEIN DE LIMEIRA (FIEL)", sigla: "FIEL", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1125": { code: "1125", label: "FACULDADES INTEGRADAS ESPÍRITA (FIES)", sigla: "FIES", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "267": { code: "267", label: "FACULDADES INTEGRADAS ESPÍRITO SANTENSES (FAESA I)", sigla: "FAESA I", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "279": { code: "279", label: "FACULDADES INTEGRADAS HÉLIO ALONSO (FACHA)", sigla: "FACHA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3613": { code: "3613", label: "FACULDADES INTEGRADAS IESGO (IESGO)", sigla: "IESGO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1385": { code: "1385", label: "FACULDADES INTEGRADAS IPEP (FIPEP)", sigla: "FIPEP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2451": { code: "2451", label: "FACULDADES INTEGRADAS IPIRANGA (FAINTIPI)", sigla: "FAINTIPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3609": { code: "3609", label: "FACULDADES INTEGRADAS IPITANGA (FACIIP)", sigla: "FACIIP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1842": { code: "1842", label: "FACULDADES INTEGRADAS MACHADO DE ASSIS (FEMA)", sigla: "FEMA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "734": { code: "734", label: "FACULDADES INTEGRADAS MARIA IMACULADA (FIMI)", sigla: "FIMI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "640": { code: "640", label: "FACULDADES INTEGRADAS MARIA THEREZA (FAMATH)", sigla: "FAMATH", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3303": { code: "3303", label: "FACULDADES INTEGRADAS MATO-GROSSENSES DE CIÊNCIAS SOCIAIS E HUMANAS (ICE)", sigla: "ICE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1524": { code: "1524", label: "FACULDADES INTEGRADAS OLGA METTIG (FAMETTIG)", sigla: "FAMETTIG", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "5215": { code: "5215", label: "FACULDADES INTEGRADAS PADRE ALBINO (FIPA)", sigla: "FIPA", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "5217": { code: "5217", label: "FACULDADES INTEGRADAS PAULISTA (FIP)", sigla: "FIP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4256": { code: "4256", label: "FACULDADES INTEGRADAS PITÁGORAS (FIP-MOC)", sigla: "FIP-MOC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3610": { code: "3610", label: "FACULDADES INTEGRADAS PROMOVE DE BRASILIA", sigla: "PROMOVEBRASILIA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1870": { code: "1870", label: "FACULDADES INTEGRADAS REGIONAIS DE AVARÉ (FIRA)", sigla: "FIRA", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "1838": { code: "1838", label: "FACULDADES INTEGRADAS RIO BRANCO (FRB)", sigla: "FRB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13481": { code: "13481", label: "FACULDADES INTEGRADAS RIO BRANCO GRANJA VIANNA (FRB-GV)", sigla: "FRB-GV", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "109": { code: "109", label: "FACULDADES INTEGRADAS RUI BARBOSA (FIRB)", sigla: "FIRB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1872": { code: "1872", label: "FACULDADES INTEGRADAS SANTA CRUZ DE CURITIBA (FARESC)", sigla: "FARESC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5600": { code: "5600", label: "FACULDADES INTEGRADAS SÃO JUDAS TADEU (SJT)", sigla: "SJT", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "1379": { code: "1379", label: "FACULDADES INTEGRADAS SÃO PEDRO (FAESA)", sigla: "FAESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "622": { code: "622", label: "FACULDADES INTEGRADAS SILVA E SOUZA (FAU)", sigla: "FAU", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "278": { code: "278", label: "FACULDADES INTEGRADAS SIMONSEN (FIS)", sigla: "FIS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2575": { code: "2575", label: "FACULDADES INTEGRADAS SOARES DE OLIVEIRA (FISO)", sigla: "FISO", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1844": { code: "1844", label: "FACULDADES INTEGRADAS STELLA MARIS DE ANDRADINA (FISMA)", sigla: "FISMA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1479": { code: "1479", label: "FACULDADES INTEGRADAS TIBIRIÇÁ (FATI)", sigla: "FATI", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1266": { code: "1266", label: "FACULDADES INTEGRADAS URUBUPUNGÁ (FIU)", sigla: "FIU", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4722": { code: "4722", label: "FACULDADES INTEGRADAS VIANNA JÚNIOR (FIVJ)", sigla: "FIVJ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2808": { code: "2808", label: "FACULDADES ITECNE DE CASCAVEL (ITECNE)", sigla: "ITECNE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "12869": { code: "12869", label: "FACULDADES JOÃO PAULO II (FJP)", sigla: "FJP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "940": { code: "940", label: "Faculdades Magsul (FAMAG)", sigla: "FAMAG", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "11586": { code: "11586", label: "FACULDADES NETWORK - CAMPUS SUMARÉ", sigla: "FNETSUMARE", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "5403": { code: "5403", label: "FACULDADES OPET", sigla: "OPET", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "234": { code: "234", label: "FACULDADES OSWALDO CRUZ (FOC)", sigla: "FOC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2787": { code: "2787", label: "FACULDADES PEQUENO PRÍNCIPE (FPP)", sigla: "FPP", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2576": { code: "2576", label: "FACULDADES PITÁGORAS UNIDADE GUARAPARI (FIPAG)", sigla: "FIPAG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18684": { code: "18684", label: "Faculdades Santa Tereza (FST)", sigla: "FST", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "761": { code: "761", label: "FACULDADES SPEI (FACSPEI)", sigla: "FACSPEI", category: "Faculdade", oa: "Privada", ci: "4", igc: "2" },
	  "12749": { code: "12749", label: "FACULDADES UNIDAS DE PESQUISA, CIÊNCIAS E SAÚDE LTDA (FAPEC)", sigla: "FAPEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "5670": { code: "5670", label: "FACULDADES UNIDAS DO VALE DO ARAGUAIA (UNIVAR)", sigla: "UNIVAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13783": { code: "13783", label: "FACULDADES UNIDAS FEIRA DE SANTANA (UNISANTANA)", sigla: "UNISANTANA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "5313": { code: "5313", label: "Faculdades Unificadas de Cataguases (FUC)", sigla: "FUC", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "873": { code: "873", label: "FACULDADES UNIFICADAS DE FOZ DO IGUAÇU (UNIFOZ)", sigla: "UNIFOZ", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5314": { code: "5314", label: "Faculdades Unificadas de Guarapari (FUG)", sigla: "FUG", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5315": { code: "5315", label: "Faculdades Unificadas de Iúna (FUI)", sigla: "FUI", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "5316": { code: "5316", label: "Faculdades Unificadas de Leopoldina (FUL)", sigla: "FUL", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "5370": { code: "5370", label: "Faculdades Unificadas de Teófilo Otoni (FUTO)", sigla: "FUTO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "715": { code: "715", label: "FAE CENTRO UNIVERSITÁRIO (FAE)", sigla: "FAE", category: "Centro Universitário", oa: "Privada", ci: "4", igc: "4" },
	  "166": { code: "166", label: "FAI - CENTRO DE ENSINO SUPERIOR EM GESTÃO, TECNOLOGIA E EDUCAÇÃO", sigla: "FAI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3012": { code: "3012", label: "FAJOPA - FACULDADE JOÃO PAULO II (FAJOPA)", sigla: "FAJOPA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1208": { code: "1208", label: "FAL ESTÁCIO - FACULDADE ESTÁCIO DE NATAL", sigla: "FALESTACIONATAL", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "10009": { code: "10009", label: "FAMAC - FACULDADE DE MACHADINHO DO OESTE (FAMAC)", sigla: "FAMAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2799": { code: "2799", label: "FANEESP - FACULDADE NACIONAL DE EDUCAÇÃO E ENSINO SUPERIOR DO PARANÁ (FANEESP)", sigla: "FANEESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17701": { code: "17701", label: "FAP-FACULDADE DE PINHEIROS (FAP)", sigla: "FAP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "15714": { code: "15714", label: "Fatec Arthur Azevedo - Mogi Mirim (FATECMM)", sigla: "FATECMM", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "15680": { code: "15680", label: "Fatec Cruzeiro - Prof. Waldomiro May", sigla: "FATECCRUZEIRO", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "13878": { code: "13878", label: "FATEC- FACULDADE SENAI DE TECNOLOGIA (FATEC)", sigla: "FATEC", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "4007": { code: "4007", label: "FATECE - FACULDADE DE TECNOLOGIA, CIÊNCIAS E EDUCAÇÃO (FATECE)", sigla: "FATECE", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1845": { code: "1845", label: "FEFISA - FACULDADES INTEGRADAS DE SANTO ANDRÉ (FEFISA)", sigla: "FEFISA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "12748": { code: "12748", label: "FETAC - FACULDADE DE EDUCAÇÃO, TECNOLOGIA E ADMINISTRAÇÃO DE CAARAPÓ (FETAC)", sigla: "FETAC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3232": { code: "3232", label: "FI - FACULDADE IGUAÇU (FI)", sigla: "FI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2556": { code: "2556", label: "FIAM-FAAM - CENTRO UNIVERSITÁRIO (UNIFIAM-FAAM)", sigla: "UNIFIAM-FAAM", category: "Centro Universitário", oa: "Privada", ci: "5", igc: "3" },
	  "405": { code: "405", label: "FOCCA - FACULDADE DE OLINDA (FOCCA)", sigla: "FOCCA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3684": { code: "3684", label: "FUNDAÇÃO DE ENSINO SUPERIOR DE CLEVELÂNDIA (FESC)", sigla: "FESC", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "43": { code: "43", label: "FUNDAÇÃO UNIVERSIDADE DO ESTADO DE SANTA CATARINA (UDESC)", sigla: "UDESC", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "4504": { code: "4504", label: "FUNDAÇÃO UNIVERSIDADE FEDERAL DA GRANDE DOURADOS (UFGD)", sigla: "UFGD", category: "Universidade", oa: "Pública", ci: "3", igc: "4" },
	  "717": { code: "717", label: "FUNDAÇÃO UNIVERSIDADE FEDERAL DE CIÊNCIAS DA SAÚDE DE PORTO ALEGRE (UFCSPA)", sigla: "UFCSPA", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "699": { code: "699", label: "FUNDAÇÃO UNIVERSIDADE FEDERAL DE RONDÔNIA (UNIR)", sigla: "UNIR", category: "Universidade", oa: "Pública", ci: "3", igc: "3" },
	  "4925": { code: "4925", label: "FUNDAÇÃO UNIVERSIDADE FEDERAL DO ABC (UFABC)", sigla: "UFABC", category: "Universidade", oa: "Pública", ci: "4", igc: "5" },
	  "5322": { code: "5322", label: "FUNDAÇÃO UNIVERSIDADE FEDERAL DO PAMPA - UNIPAMPA (UNIPAMPA)", sigla: "UNIPAMPA", category: "Universidade", oa: "Pública", ci: "3", igc: "4" },
	  "3849": { code: "3849", label: "FUNDAÇÃO UNIVERSIDADE FEDERAL DO TOCANTINS (UFT)", sigla: "UFT", category: "Universidade", oa: "Pública", ci: "3", igc: "3" },
	  "3984": { code: "3984", label: "FUNDAÇÃO UNIVERSIDADE FEDERAL DO VALE DO SÃO FRANCISCO (UNIVASF)", sigla: "UNIVASF", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "18165": { code: "18165", label: "Fundação Universidade Virtual do Estado de São Paulo (UNIVESP)", sigla: "UNIVESP", category: "Universidade", oa: "Pública", ci: "-", igc: "-" },
	  "2494": { code: "2494", label: "FUNVIC - FACULDADE DE PINDAMONHANGABA", sigla: "FUNVICPINDA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1464": { code: "1464", label: "HSM Escola Superior de Administração (HSM)", sigla: "HSM", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "1739": { code: "1739", label: "IMP de Ensino Superior - IMP (IMP)", sigla: "IMP", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "1161": { code: "1161", label: "INSPER INSTITUTO DE ENSINO E PESQUISA (INSPER)", sigla: "INSPER", category: "Faculdade", oa: "Privada", ci: "5", igc: "5" },
	  "2348": { code: "2348", label: "INSTITUIÇÃO DE ENSINO SÃO FRANCISCO (IESF)", sigla: "IESF", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "13792": { code: "13792", label: "INSTITUIÇÃO DE ENSINO SUPERIOR DE CACOAL (FANORTE CACOAL)", sigla: "FANORTE CACOAL", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1440": { code: "1440", label: "INSTITUTO APHONSIANO DE ENSINO SUPERIOR (IAESUP)", sigla: "IAESUP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5186": { code: "5186", label: "INSTITUTO ASSIS GURGACZ", sigla: "IASG", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2085": { code: "2085", label: "INSTITUTO BAIANO DE ENSINO SUPERIOR (IBES)", sigla: "IBES", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2171": { code: "2171", label: "INSTITUTO BELO HORIZONTE DE ENSINO SUPERIOR (IBHES)", sigla: "IBHES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1618": { code: "1618", label: "INSTITUTO BLUMENAUENSE DE ENSINO SUPERIOR (IBES)", sigla: "IBES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "13238": { code: "13238", label: "INSTITUTO BRASILEIRO DE EDUCACAO SUPERIOR CONTINUADA (IBEC)", sigla: "IBEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "4108": { code: "4108", label: "INSTITUTO CATÓLICO DE ESTUDOS SUPERIORES DO PIAUÍ (ICESPI)", sigla: "ICESPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1231": { code: "1231", label: "INSTITUTO CENECISTA DE ENSINO SUPERIOR DE SANTO ÂNGELO (CNEC/IESA)", sigla: "CNEC/IESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1506": { code: "1506", label: "INSTITUTO CENECISTA FAYAL DE ENSINO SUPERIOR (IFES)", sigla: "IFES", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "4788": { code: "4788", label: "INSTITUTO CENTRO DE ENSINO TECNOLÓGICO - CARIRI (CENTEC)", sigla: "CENTEC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "4789": { code: "4789", label: "INSTITUTO CENTRO DE ENSINO TECNOLÓGICO - LIMOEIRO DO NORTE (CENTEC)", sigla: "CENTEC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "3830": { code: "3830", label: "INSTITUTO CENTRO DE ENSINO TECNOLÓGICO - SOBRAL (CENTEC)", sigla: "CENTEC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1996": { code: "1996", label: "INSTITUTO CUIABÁ DE ENSINO E CULTURA (ICEC)", sigla: "ICEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1600": { code: "1600", label: "INSTITUTO DE CIÊNCIAS DA SAÚDE (ICS)", sigla: "ICS", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "709": { code: "709", label: "INSTITUTO DE CIÊNCIAS EXATAS (UNEB)", sigla: "UNEB", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "1513": { code: "1513", label: "INSTITUTO DE CIÊNCIAS JURÍDICAS E SOCIAIS PROFESSOR CAMILLO FILHO (ICF)", sigla: "ICF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "708": { code: "708", label: "INSTITUTO DE CIÊNCIAS SOCIAIS APLICADAS (UNEB)", sigla: "UNEB", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1402": { code: "1402", label: "INSTITUTO DE CIÊNCIAS SOCIAIS E HUMANAS (ICSH)", sigla: "ICSH", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "945": { code: "945", label: "INSTITUTO DE CIÊNCIAS SOCIAIS E HUMANAS (INCISOH)", sigla: "INCISOH", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "17672": { code: "17672", label: "INSTITUTO DE DIREITO PÚBLICO DE SÃO PAULO", sigla: "IDPSP", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "3323": { code: "3323", label: "INSTITUTO DE EDUCAÇÃO E ENSINO SUPERIOR DE CAMPINAS (IESCAMP)", sigla: "IESCAMP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1951": { code: "1951", label: "INSTITUTO DE EDUCAÇÃO E ENSINO SUPERIOR DE SAMAMBAIA (IESA)", sigla: "IESA", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "2633": { code: "2633", label: "INSTITUTO DE EDUCAÇÃO E TECNOLOGIAS (INET)", sigla: "INET", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1075": { code: "1075", label: "INSTITUTO DE EDUCAÇÃO SUPERIOR DA PARAÍBA (IESP)", sigla: "IESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1545": { code: "1545", label: "INSTITUTO DE EDUCAÇÃO SUPERIOR DE BOITUVA (FIB)", sigla: "FIB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3823": { code: "3823", label: "INSTITUTO DE EDUCAÇÃO SUPERIOR DE POUSO ALEGRE (FAPA)", sigla: "FAPA", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "2644": { code: "2644", label: "INSTITUTO DE EDUCAÇÃO SUPERIOR DO TAPAJÓS (ISET)", sigla: "ISET", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "3360": { code: "3360", label: "INSTITUTO DE EDUCAÇÃO SUPERIOR PRESIDENTE KENNEDY - CENTRO DE FORMAÇÃO DE PROFISSIONAIS DE EDUCAÇÃO (IFESP)", sigla: "IFESP", category: "Faculdade", oa: "Pública", ci: "-", igc: "SC" },
	  "3930": { code: "3930", label: "INSTITUTO DE EDUCAÇÃO SUPERIOR RAIMUNDO SÁ (IESRSA)", sigla: "IESRSA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1124": { code: "1124", label: "INSTITUTO DE EDUCAÇÃO SUPERIOR UNYAHNA DE BARREIRAS (IESUB)", sigla: "IESUB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1123": { code: "1123", label: "INSTITUTO DE EDUCAÇÃO SUPERIOR UNYAHNA DE SALVADOR (IESUS)", sigla: "IESUS", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2553": { code: "2553", label: "INSTITUTO DE EDUCAÇÃO SUPERIOR UNYAHNA LUIS EDUARDO MAGALHÃES (IESULEM)", sigla: "IESULEM", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1066": { code: "1066", label: "INSTITUTO DE ENSINO E PESQUISA OBJETIVO (IEPO)", sigla: "IEPO", category: "Faculdade", oa: "Privada", ci: "2", igc: "3" },
	  "1576": { code: "1576", label: "INSTITUTO DE ENSINO SUPERIOR BLAURO CARDOSO DE MATTOS (FASERRA)", sigla: "FASERRA", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "1071": { code: "1071", label: "INSTITUTO DE ENSINO SUPERIOR DA FUNLEC (IESF)", sigla: "IESF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2304": { code: "2304", label: "INSTITUTO DE ENSINO SUPERIOR DA FUNLEC DE BONITO (IESF)", sigla: "IESF", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "4167": { code: "4167", label: "INSTITUTO DE ENSINO SUPERIOR DA FUPESP (IESF)", sigla: "IESF", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "1267": { code: "1267", label: "INSTITUTO DE ENSINO SUPERIOR DA GRANDE FLORIANÓPOLIS (IESGF)", sigla: "IESGF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2075": { code: "2075", label: "INSTITUTO DE ENSINO SUPERIOR DE ALAGOAS (IESA)", sigla: "IESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1182": { code: "1182", label: "INSTITUTO DE ENSINO SUPERIOR DE AMERICANA (IESA)", sigla: "IESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1816": { code: "1816", label: "INSTITUTO DE ENSINO SUPERIOR DE BAURU (IESB)", sigla: "IESB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3648": { code: "3648", label: "INSTITUTO DE ENSINO SUPERIOR DE CUIABÁ", sigla: "IESCUIABA", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3882": { code: "3882", label: "INSTITUTO DE ENSINO SUPERIOR DE FORMAÇÃO PROFISSIONAL (IESFORP)", sigla: "IESFORP", category: "Faculdade", oa: "Privada", ci: "2", igc: "-" },
	  "1191": { code: "1191", label: "INSTITUTO DE ENSINO SUPERIOR DE FORTALEZA (IESF)", sigla: "IESF", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2086": { code: "2086", label: "INSTITUTO DE ENSINO SUPERIOR DE FOZ DO IGUAÇU (IESFI)", sigla: "IESFI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1353": { code: "1353", label: "INSTITUTO DE ENSINO SUPERIOR DE GARÇA (IESG)", sigla: "IESG", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1434": { code: "1434", label: "INSTITUTO DE ENSINO SUPERIOR DE ITAPIRA (IESI)", sigla: "IESI", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1939": { code: "1939", label: "INSTITUTO DE ENSINO SUPERIOR DE LONDRINA - INESUL (INESUL)", sigla: "INESUL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3776": { code: "3776", label: "INSTITUTO DE ENSINO SUPERIOR DE MATO GROSSO (IESMT)", sigla: "IESMT", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3542": { code: "3542", label: "INSTITUTO DE ENSINO SUPERIOR DE MINAS GERAIS (IESMIG)", sigla: "IESMIG", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "2566": { code: "2566", label: "INSTITUTO DE ENSINO SUPERIOR DE OLINDA (IESO)", sigla: "IESO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1992": { code: "1992", label: "INSTITUTO DE ENSINO SUPERIOR DE PIEDADE (IESP)", sigla: "IESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1703": { code: "1703", label: "INSTITUTO DE ENSINO SUPERIOR DE RIO VERDE (IESRIVER)", sigla: "IESRIVER", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1540": { code: "1540", label: "INSTITUTO DE ENSINO SUPERIOR DE RONDÔNIA (IESUR)", sigla: "IESUR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1656": { code: "1656", label: "INSTITUTO DE ENSINO SUPERIOR DE TERESINA (IEST)", sigla: "IEST", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1226": { code: "1226", label: "INSTITUTO DE ENSINO SUPERIOR DO ACRE (IESACRE)", sigla: "IESACRE", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1823": { code: "1823", label: "INSTITUTO DE ENSINO SUPERIOR DO AMAPÁ (IESAP)", sigla: "IESAP", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1229": { code: "1229", label: "INSTITUTO DE ENSINO SUPERIOR DO NORDESTE (IESNE)", sigla: "IESNE", category: "Faculdade", oa: "Privada", ci: "-", igc: "1" },
	  "3784": { code: "3784", label: "INSTITUTO DE ENSINO SUPERIOR DO RIO GRANDE DO NORTE (IESRN)", sigla: "IESRN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2724": { code: "2724", label: "INSTITUTO DE ENSINO SUPERIOR DO SUL DO MARANHÃO (IESMA)", sigla: "IESMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1498": { code: "1498", label: "INSTITUTO DE ENSINO SUPERIOR E FORMAÇÃO AVANÇADA DE VITÓRIA (FAVI)", sigla: "FAVI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1931": { code: "1931", label: "INSTITUTO DE ENSINO SUPERIOR FRANCISCANO (IESF)", sigla: "IESF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1049": { code: "1049", label: "INSTITUTO DE ENSINO SUPERIOR FUCAPI (CESF)", sigla: "CESF", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "5394": { code: "5394", label: "INSTITUTO DE ENSINO SUPERIOR INTEGRADO-IESI (FENORD)", sigla: "FENORD", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1314": { code: "1314", label: "INSTITUTO DE ENSINO SUPERIOR JOÃO ALFREDO DE ANDRADE (IJAA)", sigla: "IJAA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1906": { code: "1906", label: "INSTITUTO DE ENSINO SUPERIOR MATERDEI (IES-MATERDEI)", sigla: "IES-MATERDEI", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "3526": { code: "3526", label: "INSTITUTO DE ENSINO SUPERIOR MIGUEL DE CERVANTES (IESMC)", sigla: "IESMC", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "3375": { code: "3375", label: "INSTITUTO DE ENSINO SUPERIOR MÚLTIPLO (IESM)", sigla: "IESM", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1428": { code: "1428", label: "INSTITUTO DE ENSINO SUPERIOR PLANALTO (IESPLAN)", sigla: "IESPLAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1599": { code: "1599", label: "INSTITUTO DE ENSINO SUPERIOR PRESIDENTE TANCREDO DE ALMEIDA NEVES (IPTAN)", sigla: "IPTAN", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3004": { code: "3004", label: "INSTITUTO DE ENSINO SUPERIOR SANTA CECÍLIA (IESC)", sigla: "IESC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "225": { code: "225", label: "INSTITUTO DE ENSINO SUPERIOR SANTO ANDRÉ (IESA)", sigla: "IESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2369": { code: "2369", label: "INSTITUTO DE ENSINO SUPERIOR SANTO ANTÔNIO (INESA)", sigla: "INESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1335": { code: "1335", label: "INSTITUTO DE ENSINO SUPERIOR THATHI (FACULDADE THATHI COC)", sigla: "FACULDADE THATHI COC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "2049": { code: "2049", label: "INSTITUTO DE ESTUDOS SUPERIORES DO MARANHÃO (IESMA)", sigla: "IESMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2120": { code: "2120", label: "INSTITUTO DE FILOSOFIA E DE TEOLOGIA PAULO VI (IFITEPS)", sigla: "IFITEPS", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "4257": { code: "4257", label: "INSTITUTO DE FILOSOFIA E TEOLOGIA DE GOIÁS (IFITEG)", sigla: "IFITEG", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "17587": { code: "17587", label: "Instituto de Formação Profissional Administrativa (IFPA)", sigla: "IFPA", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2447": { code: "2447", label: "INSTITUTO EDUCACIONAL DE CASTRO (INEC)", sigla: "INEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "16901": { code: "16901", label: "INSTITUTO EDUCATIE (EDUCATIE)", sigla: "EDUCATIE", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1672": { code: "1672", label: "INSTITUTO ESPERANÇA DE ENSINO SUPERIOR (IESPES)", sigla: "IESPES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4785": { code: "4785", label: "INSTITUTO FEDERAL DE EDUCAÇÃO CIÊNCIA E TECNOLOGIA DE RONDÔNIA (IFRO)", sigla: "IFRO", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "3" },
	  "14509": { code: "14509", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA BAIANO (IFBAIANO)", sigla: "IFBAIANO", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "3" },
	  "5036": { code: "5036", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA CATARINENSE (IF Catarinense)", sigla: "IF Catarinense", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "3" },
	  "599": { code: "599", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DA BAHIA (IFBA)", sigla: "IFBA", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "3", igc: "3" },
	  "1166": { code: "1166", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DA PARAÍBA (IFPB)", sigla: "IFPB", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "4" },
	  "3160": { code: "3160", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE ALAGOAS (IFAL)", sigla: "IFAL", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "3" },
	  "14408": { code: "14408", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIENCIA E TECNOLOGIA DE BRASILIA (IFB)", sigla: "IFB", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "3", igc: "-" },
	  "1811": { code: "1811", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE GOIÁS (IFG)", sigla: "IFG", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "3", igc: "3" },
	  "3164": { code: "3164", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE MATO GROSSO (IFMT)", sigla: "IFMT", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "3", igc: "3" },
	  "15520": { code: "15520", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE MATO GROSSO DO SUL (IFMS)", sigla: "IFMS", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "3", igc: "4" },
	  "3189": { code: "3189", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE MINAS GERAIS (IFMG)", sigla: "IFMG", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "3", igc: "3" },
	  "1809": { code: "1809", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE PERNAMBUCO (IFPE)", sigla: "IFPE", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "2", igc: "3" },
	  "3184": { code: "3184", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE RORAIMA (IFRR)", sigla: "IFRR", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "3" },
	  "3162": { code: "3162", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE SANTA CATARINA (IFSC)", sigla: "IFSC", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "3" },
	  "1810": { code: "1810", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE SÃO PAULO (IFSP)", sigla: "IFSP", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "3" },
	  "3183": { code: "3183", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE SERGIPE (IFS)", sigla: "IFS", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "3", igc: "4" },
	  "15507": { code: "15507", label: "Instituto Federal de Educação, Ciência e Tecnologia do Acre (IFAC)", sigla: "IFAC", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "2" },
	  "15522": { code: "15522", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO AMAPÁ (IFAP)", sigla: "IFAP", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "3" },
	  "1812": { code: "1812", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO AMAZONAS (IFAM)", sigla: "IFAM", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "3" },
	  "1807": { code: "1807", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO CEARÁ (IFCE)", sigla: "IFCE", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "3", igc: "3" },
	  "1808": { code: "1808", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO ESPÍRITO SANTO (IFES)", sigla: "IFES", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "3" },
	  "600": { code: "600", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO MARANHÃO (IFMA)", sigla: "IFMA", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "3" },
	  "3188": { code: "3188", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO NORTE DE MINAS GERAIS (IFNMG)", sigla: "IFNMG", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "3", igc: "3" },
	  "1813": { code: "1813", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO PARÁ (IFPA)", sigla: "IFPA", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "3", igc: "3" },
	  "14724": { code: "14724", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO PARANÁ (IFPR)", sigla: "IFPR", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "3" },
	  "1820": { code: "1820", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO PIAUÍ (IFPI)", sigla: "IFPI", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "3", igc: "3" },
	  "3163": { code: "3163", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO RIO DE JANEIRO (IFRJ)", sigla: "IFRJ", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "4" },
	  "1082": { code: "1082", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO RIO GRANDE DO NORTE (IFRN)", sigla: "IFRN", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "3" },
	  "601": { code: "601", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO RIO GRANDE DO SUL (IFRS)", sigla: "IFRS", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "4" },
	  "3161": { code: "3161", label: "Instituto Federal de Educação, Ciência e Tecnologia do Sertão Pernambucano (IF Sertão)", sigla: "IF Sertão", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "3" },
	  "3279": { code: "3279", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO SUDESTE DE MINAS GERAIS (IFSEMG)", sigla: "IFSEMG", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "4" },
	  "4358": { code: "4358", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO SUL DE MINAS GERAIS (IF SUL DE MINAS)", sigla: "IF SUL DE MINAS", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "3" },
	  "4786": { code: "4786", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO TOCANTINS (IFTO)", sigla: "IFTO", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "-", igc: "3" },
	  "3165": { code: "3165", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO TRIÂNGULO MINEIRO (IFTM)", sigla: "IFTM", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "4" },
	  "4098": { code: "4098", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA FARROUPILHA (IFFarroupilha)", sigla: "IFFarroupilha", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "4" },
	  "1120": { code: "1120", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA FLUMINENSE (IF Fluminense)", sigla: "IF Fluminense", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "3" },
	  "1303": { code: "1303", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA GOIANO (IF Goiano)", sigla: "IF Goiano", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "4" },
	  "1578": { code: "1578", label: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA SUL-RIO-GRANDENSE (IFSul)", sigla: "IFSul", category: "Instituto Federal de Educação, Ciência e Tecnologia", oa: "Pública", ci: "4", igc: "4" },
	  "3869": { code: "3869", label: "INSTITUTO FLORENCE DE ENSINO SUPERIOR (IFES)", sigla: "IFES", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3998": { code: "3998", label: "INSTITUTO INFNET RIO DE JANEIRO (INFNET)", sigla: "INFNET", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1219": { code: "1219", label: "INSTITUTO ITAPETININGANO DE ENSINO SUPERIOR (IIES)", sigla: "IIES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "10020": { code: "10020", label: "INSTITUTO LOGOS DE EDUCAÇÃO SUPERIOR (ILES)", sigla: "ILES", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1426": { code: "1426", label: "INSTITUTO LUTERANO DE ENSINO SUPERIOR DE ITUMBIARA (ILES)", sigla: "ILES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1738": { code: "1738", label: "INSTITUTO LUTERANO DE ENSINO SUPERIOR DE PORTO VELHO (ULBRA ILES)", sigla: "ULBRA ILES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2469": { code: "2469", label: "INSTITUTO MACAPAENSE DE ENSINO SUPERIOR (IMMES)", sigla: "IMMES", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "1786": { code: "1786", label: "INSTITUTO MACHADENSE DE ENSINO SUPERIOR (IMES)", sigla: "IMES", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "1283": { code: "1283", label: "INSTITUTO MANCHESTER PAULISTA DE ENSINO SUPERIOR (IMAPES)", sigla: "IMAPES", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3785": { code: "3785", label: "INSTITUTO MARANHENSE DE ENSINO E CULTURA (IMEC)", sigla: "IMEC", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "19512": { code: "19512", label: "INSTITUTO MASTER DE ENSINO PRESIDENTE ANTÔNIO CARLOS (IMEPAC)", sigla: "IMEPAC", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1301": { code: "1301", label: "INSTITUTO MATONENSE MUNICIPAL DE ENSINO SUPERIOR (IMMES)", sigla: "IMMES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1669": { code: "1669", label: "INSTITUTO METROPOLITANO DE ENSINO SUPERIOR (IMES)", sigla: "IMES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "633": { code: "633", label: "INSTITUTO MILITAR DE ENGENHARIA (IME)", sigla: "IME", category: "Faculdade", oa: "Pública", ci: "5", igc: "5" },
	  "881": { code: "881", label: "INSTITUTO MUNICIPAL DE ENSINO SUPERIOR DE ASSIS (IMESA)", sigla: "IMESA", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "882": { code: "882", label: "INSTITUTO MUNICIPAL DE ENSINO SUPERIOR DE BEBEDOURO VICTÓRIO CARDASSI (IMESB)", sigla: "IMESB", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "79": { code: "79", label: "INSTITUTO MUNICIPAL DE ENSINO SUPERIOR DE CATANDUVA (IMES CATANDUVA)", sigla: "IMES CATANDUVA", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "745": { code: "745", label: "INSTITUTO MUNICIPAL DE ENSINO SUPERIOR DE SÃO MANUEL (IMESSM)", sigla: "IMESSM", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "4016": { code: "4016", label: "INSTITUTO NACIONAL DE EDUCAÇÃO DE SURDOS (INES)", sigla: "INES", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "11860": { code: "11860", label: "INSTITUTO NACIONAL DE ENSINO SUPERIOR E PÓS-GRADUAÇÃO PADRE GERVÁSIO (INAPÓS)", sigla: "INAPÓS", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "126": { code: "126", label: "INSTITUTO NACIONAL DE TELECOMUNICAÇÕES (INATEL)", sigla: "INATEL", category: "Faculdade", oa: "Privada", ci: "5", igc: "3" },
	  "2514": { code: "2514", label: "INSTITUTO NATALENSE DE EDUCAÇÃO SUPERIOR (INAES)", sigla: "INAES", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "1462": { code: "1462", label: "INSTITUTO PARAIBANO DE ENSINO RENOVADO (INPER)", sigla: "INPER", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2177": { code: "2177", label: "INSTITUTO PAULISTA DE ENSINO (FIPEN)", sigla: "FIPEN", category: "Faculdade", oa: "Privada", ci: "2", igc: "4" },
	  "1708": { code: "1708", label: "INSTITUTO PERNAMBUCANO DE ENSINO SUPERIOR (IPESU)", sigla: "IPESU", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "18490": { code: "18490", label: "Instituto Politécnico Doctum de Guarapari (Doctum)", sigla: "Doctum", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "1674": { code: "1674", label: "INSTITUTO SALESIANO DE FILOSOFIA (INSAF)", sigla: "INSAF", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2470": { code: "2470", label: "INSTITUTO SALVADOR DE ENSINO E CULTURA (ISEC)", sigla: "ISEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2015": { code: "2015", label: "INSTITUTO SANTO TOMÁS DE AQUINO (ISTA)", sigla: "ISTA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "10385": { code: "10385", label: "INSTITUTO SÃO PAULO DE ESTUDOS SUPERIORES (ITESP)", sigla: "ITESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "346": { code: "346", label: "INSTITUTO SUPERIOR DE CIÊNCIAS APLICADAS - ISCA (ISCA)", sigla: "ISCA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2552": { code: "2552", label: "INSTITUTO SUPERIOR DE CIÊNCIAS DA SAÚDE (INCISA)", sigla: "INCISA", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2154": { code: "2154", label: "INSTITUTO SUPERIOR DE CIÊNCIAS HUMANAS E SOCIAIS ANÍSIO TEIXEIRA (ISAT)", sigla: "ISAT", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "16037": { code: "16037", label: "Instituto Superior de Ciencias Policiais (ISCP)", sigla: "ISCP", category: "Faculdade", oa: "Pública", ci: "4", igc: "-" },
	  "3203": { code: "3203", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO ALBERT EINSTEIN (ISALBE)", sigla: "ISALBE", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "3157": { code: "3157", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO ALMEIDA RODRIGUES (ISEAR)", sigla: "ISEAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1865": { code: "1865", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO ALVORADA PLUS (ISEAP)", sigla: "ISEAP", category: "Faculdade", oa: "Privada", ci: "2", igc: "SC" },
	  "3158": { code: "3158", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO ANGLO-AMERICANO (ISEAAFI)", sigla: "ISEAAFI", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "5204": { code: "5204", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO ANTONINO FREIRE - ISEAF (ISEAF)", sigla: "ISEAF", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "2320": { code: "2320", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO ATENEU (ISEAT)", sigla: "ISEAT", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2602": { code: "2602", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO BALÃO VERMELHO (ISEBV)", sigla: "ISEBV", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "2030": { code: "2030", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO CAMPO LIMPO PAULISTA (ISECAMP)", sigla: "ISECAMP", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3963": { code: "3963", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO CARLOS CHAGAS (ISECC)", sigla: "ISECC", category: "Faculdade", oa: "Pública", ci: "3", igc: "2" },
	  "2342": { code: "2342", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO CERES (ISE-CERES)", sigla: "ISE-CERES", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2622": { code: "2622", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DA SERRA (ISES)", sigla: "ISES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "5019": { code: "5019", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DA ZONA OESTE (ISE ZONA OESTE)", sigla: "ISE ZONA OESTE", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "2922": { code: "2922", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE BARRETOS (ISEB)", sigla: "ISEB", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "4221": { code: "4221", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE BICAS (ISEB)", sigla: "ISEB", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "3192": { code: "3192", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE CAJAZEIRAS (ISEC)", sigla: "ISEC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1974": { code: "1974", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE CAXIAS (ISEC)", sigla: "ISEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "2033": { code: "2033", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE FLORESTA (ISEF)", sigla: "ISEF", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3190": { code: "3190", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE GARÇA (ISEG)", sigla: "ISEG", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "4398": { code: "4398", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE GOIANA (I.S.E.G.)", sigla: "I.S.E.G.", category: "Faculdade", oa: "Pública", ci: "-", igc: "SC" },
	  "2202": { code: "2202", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE GUARATUBA (ISEPE Guaratuba)", sigla: "ISEPE Guaratuba", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2529": { code: "2529", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE IGUAPE (ISE IGUAPE)", sigla: "ISE IGUAPE", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "4222": { code: "4222", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE MATIAS BARBOSA (ISEMB)", sigla: "ISEMB", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "3367": { code: "3367", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE OLIVEIRA (ISEOL)", sigla: "ISEOL", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2012": { code: "2012", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE PESQUEIRA (ISEP)", sigla: "ISEP", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "2019": { code: "2019", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE SALGUEIRO (ISES)", sigla: "ISES", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "1868": { code: "1868", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE SANTOS DUMONT (ISESD)", sigla: "ISESD", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1930": { code: "1930", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DE SÃO PAULO (SINGULARIDADES/ISESP)", sigla: "SINGULARIDADES/ISESP", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2273": { code: "2273", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DO ALTO SÃO FRANCISCO (ISEASF)", sigla: "ISEASF", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "2491": { code: "2491", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DO CECAP (ISCECAP)", sigla: "ISCECAP", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "1962": { code: "1962", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DO CENTRO EDUCACIONAL NOSSA SENHORA AUXILIADORA (ISECENSA)", sigla: "ISECENSA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "3682": { code: "3682", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DO MUNICÍPIO DE ITAPERUNA (ISEMI)", sigla: "ISEMI", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "1357": { code: "1357", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DO RIO DE JANEIRO (ISERJ)", sigla: "ISERJ", category: "Faculdade", oa: "Pública", ci: "-", igc: "4" },
	  "5054": { code: "5054", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DO SERTÃO DO PAJEÚ (ISESP)", sigla: "ISESP", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "2521": { code: "2521", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DO SUL DO PIAUÍ (ISESPI)", sigla: "ISESPI", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2630": { code: "2630", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DO VALE DO JURUENA (AJES)", sigla: "AJES", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "3290": { code: "3290", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO DOS INCONFIDENTES (ISEI)", sigla: "ISEI", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "1998": { code: "1998", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO ELVIRA DAYRELL (ISEED)", sigla: "ISEED", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "3176": { code: "3176", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO EQUIPE (ISEE)", sigla: "ISEE", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2942": { code: "2942", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO FRANCISCANO NOSSA SENHORA DE FÁTIMA (FATIMA)", sigla: "FATIMA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3448": { code: "3448", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO IBITURUNA (ISEIB)", sigla: "ISEIB", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3433": { code: "3433", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO INTERLAGOS (ISE INTERLAGOS)", sigla: "ISE INTERLAGOS", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "2192": { code: "2192", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO IVOTI (ISEI)", sigla: "ISEI", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "2528": { code: "2528", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO MÃE DE DEUS (ISEMD)", sigla: "ISEMD", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2772": { code: "2772", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO MANHUMIRIM (FACULDADES DOCTUM)", sigla: "FACULDADES DOCTUM", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "2140": { code: "2140", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO NOSSA SENHORA DE LOURDES (FNSL)", sigla: "FNSL", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "2188": { code: "2188", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO NOSSA SENHORA DE SION (ISE - SION)", sigla: "ISE - SION", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2969": { code: "2969", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO OCIDENTE (OCIDEMNTE)", sigla: "OCIDEMNTE", category: "Faculdade", oa: "Privada", ci: "3", igc: "5" },
	  "1973": { code: "1973", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO ORÍGENES LESSA (ISEOL)", sigla: "ISEOL", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2073": { code: "2073", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO PADRÃO (ISE-PADRAO)", sigla: "ISE-PADRAO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2091": { code: "2091", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO PRÓ-SABER (ISEPS)", sigla: "ISEPS", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "5018": { code: "5018", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO PROFESSOR ALDO MUYLAERT (ISEPAM)", sigla: "ISEPAM", category: "Faculdade", oa: "Pública", ci: "-", igc: "3" },
	  "2531": { code: "2531", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO PROFESSORA LÚCIA DANTAS (ISEL)", sigla: "ISEL", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "4219": { code: "4219", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO PROFESSORA NAIR FORTES ABU-MERHY (ISEFOR)", sigla: "ISEFOR", category: "Faculdade", oa: "Pública", ci: "-", igc: "2" },
	  "2832": { code: "2832", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO PROGRAMUS (ISEPRO)", sigla: "ISEPRO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "2157": { code: "2157", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO SANT´ANA (ISESA)", sigla: "ISESA", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3584": { code: "3584", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO SANTA CRUZ (ISED)", sigla: "ISED", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "3021": { code: "3021", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO SANTA RITA DE CÁSSIA (ISESC)", sigla: "ISESC", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "2508": { code: "2508", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO SANTO AGOSTINHO (ISA)", sigla: "ISA", category: "Faculdade", oa: "Privada", ci: "3", igc: "SC" },
	  "2677": { code: "2677", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO SÃO JUDAS TADEU (ISESJT)", sigla: "ISESJT", category: "Faculdade", oa: "Privada", ci: "2", igc: "2" },
	  "3180": { code: "3180", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO UNIÃO DAS AMÉRICAS (UNIAMÉRICA)", sigla: "UNIAMÉRICA", category: "Faculdade", oa: "Privada", ci: "-", igc: "4" },
	  "2744": { code: "2744", label: "INSTITUTO SUPERIOR DE EDUCAÇÃO VERA CRUZ (ISE VERA CRUZ)", sigla: "ISE VERA CRUZ", category: "Faculdade", oa: "Privada", ci: "3", igc: "1" },
	  "14258": { code: "14258", label: "INSTITUTO SUPERIOR DE ENSINO E PESQUISA DE CAMBUÍ (ISEPEC)", sigla: "ISEPEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2346": { code: "2346", label: "INSTITUTO SUPERIOR DE FILOSOFIA BERTHIER (IFIBE)", sigla: "IFIBE", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "767": { code: "767", label: "INSTITUTO SUPERIOR DE INFORMÁTICA (ISI)", sigla: "ISI", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "17269": { code: "17269", label: "INSTITUTO SUPERIOR DE INOVAÇÃO E TECNOLOGIA (ISITEC)", sigla: "ISITEC", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "5015": { code: "5015", label: "INSTITUTO SUPERIOR DE TECNOLOGIA EM HORTICULTURA (ISTHORTICULTURA)", sigla: "ISTHORTICULTURA", category: "Faculdade", oa: "Pública", ci: "-", igc: "-" },
	  "2111": { code: "2111", label: "INSTITUTO SUPERIOR DE TEOLOGIA APLICADA (INTA)", sigla: "INTA", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "2941": { code: "2941", label: "INSTITUTO SUPERIOR DE TEOLOGIA E PASTORAL DE BONFIM (ISTEPAB)", sigla: "ISTEPAB", category: "Faculdade", oa: "Privada", ci: "-", igc: "-" },
	  "1615": { code: "1615", label: "INSTITUTO SUPERIOR DO LITORAL DO PARANÁ (ISULPAR)", sigla: "ISULPAR", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1014": { code: "1014", label: "INSTITUTO SUPERIOR E CENTRO EDUCACIONAL LUTERANO - BOM JESUS - IELUSC (BOM JESUS/IELUSC)", sigla: "BOM JESUS/IELUSC", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1300": { code: "1300", label: "INSTITUTO TAQUARITINGUENSE DE ENSINO SUPERIOR DR. ARISTIDES DE CARVALHO SCHLOBACH (ITES)", sigla: "ITES", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1276": { code: "1276", label: "INSTITUTO TAUBATÉ DE ENSINO SUPERIOR (I.T.E.S.)", sigla: "I.T.E.S.", category: "Faculdade", oa: "Privada", ci: "3", igc: "4" },
	  "602": { code: "602", label: "INSTITUTO TECNOLÓGICO DE AERONÁUTICA (ITA)", sigla: "ITA", category: "Faculdade", oa: "Pública", ci: "-", igc: "5" },
	  "2736": { code: "2736", label: "INSTITUTO TECNOLÓGICO DE CARATINGA (ITC)", sigla: "ITC", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1961": { code: "1961", label: "INSTITUTO TECNOLÓGICO E DAS CIÊNCIAS SOCIAIS APLICADAS E DA SAÚDE DO CENTRO EDUC. N. SRª AUXILIADORA (ITCSAS/CENSA)", sigla: "ITCSAS/CENSA", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "2468": { code: "2468", label: "INSTITUTO TEOLÓGICO FRANCISCANO (ITF)", sigla: "ITF", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "763": { code: "763", label: "INSTITUTO UNIFICADO DE ENSINO SUPERIOR OBJETIVO (IUESO)", sigla: "IUESO", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "3775": { code: "3775", label: "INSTITUTO UVB.BR (IUVB)", sigla: "IUVB", category: "Faculdade", oa: "Privada", ci: "-", igc: "SC" },
	  "12916": { code: "12916", label: "IPOG - INSTITUTO DE PÓS-GRADUAÇÃO & GRADUAÇÃO (IPOG)", sigla: "IPOG", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "5599": { code: "5599", label: "LIBERTAS - FACULDADES INTEGRADAS (LIBERTAS)", sigla: "LIBERTAS", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "14313": { code: "14313", label: "NOVA FACULDADE (NF)", sigla: "NF", category: "Faculdade", oa: "Privada", ci: "4", igc: "SC" },
	  "13724": { code: "13724", label: "PANAMERICANA FACULDADE DE ARTE E DESIGN", sigla: "FADPAN", category: "Faculdade", oa: "Privada", ci: "5", igc: "-" },
	  "18036": { code: "18036", label: "Passo 1 (PASSO 1)", sigla: "PASSO 1", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "19": { code: "19", label: "PONTIFÍCIA UNIVERSIDADE CATÓLICA DE CAMPINAS (PUC-CAMPINAS)", sigla: "PUC-CAMPINAS", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "527": { code: "527", label: "PONTIFÍCIA UNIVERSIDADE CATÓLICA DE GOIÁS (PUC GOIÁS)", sigla: "PUC GOIÁS", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "338": { code: "338", label: "PONTIFÍCIA UNIVERSIDADE CATÓLICA DE MINAS GERAIS (PUC MINAS)", sigla: "PUC MINAS", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "546": { code: "546", label: "PONTIFÍCIA UNIVERSIDADE CATÓLICA DE SÃO PAULO (PUCSP)", sigla: "PUCSP", category: "Universidade", oa: "Privada", ci: "4", igc: "4" },
	  "10": { code: "10", label: "PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ (PUCPR)", sigla: "PUCPR", category: "Universidade", oa: "Privada", ci: "5", igc: "3" },
	  "528": { code: "528", label: "PONTIFÍCIA UNIVERSIDADE CATÓLICA DO RIO DE JANEIRO (PUC-RIO)", sigla: "PUC-RIO", category: "Universidade", oa: "Privada", ci: "5", igc: "4" },
	  "21": { code: "21", label: "PONTIFÍCIA UNIVERSIDADE CATÓLICA DO RIO GRANDE DO SUL (PUCRS)", sigla: "PUCRS", category: "Universidade", oa: "Privada", ci: "4", igc: "4" },
	  "2180": { code: "2180", label: "RATIO - FACULDADE TEOLÓGICA E FILOSÓFICA (RATIO)", sigla: "RATIO", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "2001": { code: "2001", label: "SEMINÁRIO ADVENTISTA LATINO-AMERICANO DE TEOLOGIA (SALT)", sigla: "SALT", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "3675": { code: "3675", label: "SINAL - FACULDADE DE TEOLOGIA E FILOSOFIA (SINAL)", sigla: "SINAL", category: "Faculdade", oa: "Privada", ci: "-", igc: "2" },
	  "15894": { code: "15894", label: "SOBRESP - Faculdade de Ciências da Saúde (SOBRESP)", sigla: "SOBRESP", category: "Faculdade", oa: "Privada", ci: "3", igc: "-" },
	  "13811": { code: "13811", label: "TREVISAN ESCOLA SUPERIOR DE NEGÓCIOS", sigla: "TREVISAN", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1311": { code: "1311", label: "TREVISAN ESCOLA SUPERIOR DE NEGÓCIOS (TREVISAN)", sigla: "TREVISAN", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "14878": { code: "14878", label: "TREVISAN ESCOLA SUPERIOR DE NEGÓCIOS- (TEN)", sigla: "TEN", category: "Faculdade", oa: "Privada", ci: "4", igc: "-" },
	  "1118": { code: "1118", label: "UNIÃO DAS ESCOLAS DO GRUPO FAIMI DE EDUCAÇÃO (FAIMI)", sigla: "FAIMI", category: "Faculdade", oa: "Privada", ci: "3", igc: "3" },
	  "1046": { code: "1046", label: "UNIÃO DAS FACULDADES DOS GRANDES LAGOS (UNILAGO)", sigla: "UNILAGO", category: "Faculdade", oa: "Privada", ci: "4", igc: "4" },
	  "1034": { code: "1034", label: "UNIÃO DE ESCOLAS SUPERIORES DA FUNESO (UNESF)", sigla: "UNESF", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "2035": { code: "2035", label: "UNIÃO LATINO-AMERICADA DE TECNOLOGIA (ULT)", sigla: "ULT", category: "Faculdade", oa: "Privada", ci: "3", igc: "2" },
	  "1885": { code: "1885", label: "UNIDADE DE ENSINO SUPERIOR DOM BOSCO (UNDB)", sigla: "UNDB", category: "Faculdade", oa: "Privada", ci: "4", igc: "3" },
	  "1750": { code: "1750", label: "UNIDADE DE ENSINO SUPERIOR EXPOENTE (UNIEXP)", sigla: "UNIEXP", category: "Faculdade", oa: "Privada", ci: "-", igc: "3" },
	  "15032": { code: "15032", label: "UNIVERSIDADE ALTO VALE DO RIO DO PEIXE (UNIARP)", sigla: "UNIARP", category: "Universidade", oa: "Privada", ci: "-", igc: "3" },
	  "671": { code: "671", label: "UNIVERSIDADE ANHANGUERA - UNIDERP (UNIDERP)", sigla: "UNIDERP", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "457": { code: "457", label: "UNIVERSIDADE ANHANGUERA DE SÃO PAULO - UNIAN-SP (UNIAN - SP)", sigla: "UNIAN - SP", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "466": { code: "466", label: "UNIVERSIDADE ANHEMBI MORUMBI (UAM)", sigla: "UAM", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "319": { code: "319", label: "UNIVERSIDADE BRASIL", sigla: "UNBRASIL", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "526": { code: "526", label: "UNIVERSIDADE BRAZ CUBAS (UBC)", sigla: "UBC", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "1153": { code: "1153", label: "UNIVERSIDADE CÂNDIDO MENDES (UCAM)", sigla: "UCAM", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "176": { code: "176", label: "UNIVERSIDADE CASTELO BRANCO (UCB)", sigla: "UCB", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "403": { code: "403", label: "UNIVERSIDADE CATÓLICA DE BRASÍLIA (UCB)", sigla: "UCB", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "18": { code: "18", label: "UNIVERSIDADE CATÓLICA DE PELOTAS (UCPEL)", sigla: "UCPEL", category: "Universidade", oa: "Privada", ci: "4", igc: "4" },
	  "11": { code: "11", label: "UNIVERSIDADE CATÓLICA DE PERNAMBUCO (UNICAP)", sigla: "UNICAP", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "15": { code: "15", label: "UNIVERSIDADE CATÓLICA DE PETRÓPOLIS (UCP)", sigla: "UCP", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "227": { code: "227", label: "UNIVERSIDADE CATÓLICA DE SANTOS (UNISANTOS)", sigla: "UNISANTOS", category: "Universidade", oa: "Privada", ci: "3", igc: "4" },
	  "519": { code: "519", label: "UNIVERSIDADE CATÓLICA DO SALVADOR (UCSAL)", sigla: "UCSAL", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "387": { code: "387", label: "UNIVERSIDADE CATÓLICA DOM BOSCO (UCDB)", sigla: "UCDB", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "417": { code: "417", label: "UNIVERSIDADE CIDADE DE SÃO PAULO (UNICID)", sigla: "UNICID", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "3151": { code: "3151", label: "UNIVERSIDADE COMUNITÁRIA DA REGIÃO DE CHAPECÓ (UNOCHAPECÓ)", sigla: "UNOCHAPECÓ", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "221": { code: "221", label: "UNIVERSIDADE CRUZEIRO DO SUL (UNICSUL)", sigla: "UNICSUL", category: "Universidade", oa: "Privada", ci: "5", igc: "3" },
	  "383": { code: "383", label: "UNIVERSIDADE DA AMAZÔNIA (UNAMA)", sigla: "UNAMA", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "15497": { code: "15497", label: "UNIVERSIDADE DA INTEGRAÇÃO INTERNACIONAL DA LUSOFONIA AFRO-BRASILEIRA (UNILAB)", sigla: "UNILAB", category: "Universidade", oa: "Pública", ci: "-", igc: "SC" },
	  "296": { code: "296", label: "UNIVERSIDADE DA REGIÃO DA CAMPANHA (URCAMP)", sigla: "URCAMP", category: "Universidade", oa: "Privada", ci: "-", igc: "3" },
	  "81": { code: "81", label: "UNIVERSIDADE DA REGIÃO DE JOINVILLE (UNIVILLE)", sigla: "UNIVILLE", category: "Universidade", oa: "Privada", ci: "-", igc: "3" },
	  "124": { code: "124", label: "UNIVERSIDADE DE ARARAQUARA (UNIARA)", sigla: "UNIARA", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "2": { code: "2", label: "UNIVERSIDADE DE BRASÍLIA (UNB)", sigla: "UNB", category: "Universidade", oa: "Pública", ci: "-", igc: "5" },
	  "13": { code: "13", label: "UNIVERSIDADE DE CAXIAS DO SUL (UCS)", sigla: "UCS", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "446": { code: "446", label: "UNIVERSIDADE DE CRUZ ALTA (UNICRUZ)", sigla: "UNICRUZ", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "780": { code: "780", label: "UNIVERSIDADE DE CUIABÁ (UNIC / PITÁGORAS)", sigla: "UNIC / PITÁGORAS", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "555": { code: "555", label: "UNIVERSIDADE DE FORTALEZA (UNIFOR)", sigla: "UNIFOR", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "496": { code: "496", label: "UNIVERSIDADE DE FRANCA (UNIFRAN)", sigla: "UNIFRAN", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "1128": { code: "1128", label: "UNIVERSIDADE DE ITAÚNA (UI)", sigla: "UI", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "420": { code: "420", label: "UNIVERSIDADE DE MARÍLIA (UNIMAR)", sigla: "UNIMAR", category: "Universidade", oa: "Privada", ci: "3", igc: "4" },
	  "521": { code: "521", label: "UNIVERSIDADE DE MOGI DAS CRUZES (UMC)", sigla: "UMC", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "20": { code: "20", label: "UNIVERSIDADE DE PASSO FUNDO (UPF)", sigla: "UPF", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "409": { code: "409", label: "UNIVERSIDADE DE PERNAMBUCO (UPE)", sigla: "UPE", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "208": { code: "208", label: "UNIVERSIDADE DE RIBEIRÃO PRETO (UNAERP)", sigla: "UNAERP", category: "Universidade", oa: "Privada", ci: "3", igc: "4" },
	  "3974": { code: "3974", label: "UNIVERSIDADE DE RIO VERDE (FESURV)", sigla: "FESURV", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "295": { code: "295", label: "UNIVERSIDADE DE SANTA CRUZ DO SUL (UNISC)", sigla: "UNISC", category: "Universidade", oa: "Privada", ci: "5", igc: "4" },
	  "375": { code: "375", label: "UNIVERSIDADE DE SANTO AMARO (UNISA)", sigla: "UNISA", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "55": { code: "55", label: "UNIVERSIDADE DE SÃO PAULO (USP)", sigla: "USP", category: "Universidade", oa: "Pública", ci: "-", igc: "-" },
	  "150": { code: "150", label: "UNIVERSIDADE DE SOROCABA (UNISO)", sigla: "UNISO", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "665": { code: "665", label: "UNIVERSIDADE DE TAUBATÉ (UNITAU)", sigla: "UNITAU", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "143": { code: "143", label: "UNIVERSIDADE DE UBERABA (UNIUBE)", sigla: "UNIUBE", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "823": { code: "823", label: "UNIVERSIDADE DO CEUMA - UNICEUMA (UNICEUMA)", sigla: "UNICEUMA", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "441": { code: "441", label: "UNIVERSIDADE DO CONTESTADO (UNC)", sigla: "UNC", category: "Universidade", oa: "Privada", ci: "-", igc: "3" },
	  "40": { code: "40", label: "UNIVERSIDADE DO ESTADO DA BAHIA (UNEB)", sigla: "UNEB", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "719": { code: "719", label: "UNIVERSIDADE DO ESTADO DE MATO GROSSO (UNEMAT)", sigla: "UNEMAT", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "1036": { code: "1036", label: "UNIVERSIDADE DO ESTADO DE MINAS GERAIS (UEMG)", sigla: "UEMG", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "5701": { code: "5701", label: "UNIVERSIDADE DO ESTADO DO AMAPÁ (UEAP)", sigla: "UEAP", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "3172": { code: "3172", label: "UNIVERSIDADE DO ESTADO DO AMAZONAS (UEA)", sigla: "UEA", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "38": { code: "38", label: "UNIVERSIDADE DO ESTADO DO PARÁ (UEPA)", sigla: "UEPA", category: "Universidade", oa: "Pública", ci: "-", igc: "SC" },
	  "547": { code: "547", label: "UNIVERSIDADE DO ESTADO DO RIO DE JANEIRO (UERJ)", sigla: "UERJ", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "71": { code: "71", label: "UNIVERSIDADE DO ESTADO DO RIO GRANDE DO NORTE (UERN)", sigla: "UERN", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "482": { code: "482", label: "UNIVERSIDADE DO EXTREMO SUL CATARINENSE (UNESC)", sigla: "UNESC", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "472": { code: "472", label: "UNIVERSIDADE DO GRANDE RIO PROFESSOR JOSÉ DE SOUZA HERDY (UNIGRANRIO)", sigla: "UNIGRANRIO", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "82": { code: "82", label: "UNIVERSIDADE DO OESTE DE SANTA CATARINA (UNOESC)", sigla: "UNOESC", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "271": { code: "271", label: "UNIVERSIDADE DO OESTE PAULISTA (UNOESTE)", sigla: "UNOESTE", category: "Universidade", oa: "Privada", ci: "3", igc: "4" },
	  "1189": { code: "1189", label: "UNIVERSIDADE DO PLANALTO CATARINENSE (UNIPLAC)", sigla: "UNIPLAC", category: "Universidade", oa: "Privada", ci: "-", igc: "3" },
	  "137": { code: "137", label: "UNIVERSIDADE DO SAGRADO CORAÇÃO (USC)", sigla: "USC", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "494": { code: "494", label: "UNIVERSIDADE DO SUL DE SANTA CATARINA (UNISUL)", sigla: "UNISUL", category: "Universidade", oa: "Privada", ci: "-", igc: "3" },
	  "829": { code: "829", label: "UNIVERSIDADE DO TOCANTINS (UNITINS)", sigla: "UNITINS", category: "Universidade", oa: "Pública", ci: "-", igc: "2" },
	  "83": { code: "83", label: "UNIVERSIDADE DO VALE DO ITAJAÍ (UNIVALI)", sigla: "UNIVALI", category: "Universidade", oa: "Privada", ci: "-", igc: "4" },
	  "275": { code: "275", label: "UNIVERSIDADE DO VALE DO PARAÍBA (UNIVAP)", sigla: "UNIVAP", category: "Universidade", oa: "Privada", ci: "5", igc: "3" },
	  "14": { code: "14", label: "UNIVERSIDADE DO VALE DO RIO DOS SINOS (UNISINOS)", sigla: "UNISINOS", category: "Universidade", oa: "Privada", ci: "4", igc: "4" },
	  "1586": { code: "1586", label: "UNIVERSIDADE DO VALE DO SAPUCAÍ (UNIVÁS)", sigla: "UNIVÁS", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "163": { code: "163", label: "UNIVERSIDADE ESTÁCIO DE SÁ (UNESA)", sigla: "UNESA", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "550": { code: "550", label: "UNIVERSIDADE ESTADUAL DA PARAÍBA (UEPB)", sigla: "UEPB", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "5242": { code: "5242", label: "UNIVERSIDADE ESTADUAL DE ALAGOAS - UNEAL (UNEAL)", sigla: "UNEAL", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "54": { code: "54", label: "UNIVERSIDADE ESTADUAL DE CAMPINAS (UNICAMP)", sigla: "UNICAMP", category: "Universidade", oa: "Pública", ci: "-", igc: "5" },
	  "32": { code: "32", label: "UNIVERSIDADE ESTADUAL DE CIÊNCIAS DA SAÚDE DE ALAGOAS - UNCISAL (UNCISAL)", sigla: "UNCISAL", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "666": { code: "666", label: "UNIVERSIDADE ESTADUAL DE FEIRA DE SANTANA (UEFS)", sigla: "UEFS", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "47": { code: "47", label: "UNIVERSIDADE ESTADUAL DE GOIÁS (UEG)", sigla: "UEG", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "9": { code: "9", label: "UNIVERSIDADE ESTADUAL DE LONDRINA (UEL)", sigla: "UEL", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "57": { code: "57", label: "UNIVERSIDADE ESTADUAL DE MARINGÁ (UEM)", sigla: "UEM", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "1028": { code: "1028", label: "UNIVERSIDADE ESTADUAL DE MATO GROSSO DO SUL (UEMS)", sigla: "UEMS", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "367": { code: "367", label: "UNIVERSIDADE ESTADUAL DE MONTES CLAROS (UNIMONTES)", sigla: "UNIMONTES", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "730": { code: "730", label: "UNIVERSIDADE ESTADUAL DE PONTA GROSSA (UEPG)", sigla: "UEPG", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "5077": { code: "5077", label: "UNIVERSIDADE ESTADUAL DE RORAIMA (UERR)", sigla: "UERR", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "24": { code: "24", label: "UNIVERSIDADE ESTADUAL DE SANTA CRUZ (UESC)", sigla: "UESC", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "29": { code: "29", label: "UNIVERSIDADE ESTADUAL DO CEARÁ (UECE)", sigla: "UECE", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "1126": { code: "1126", label: "UNIVERSIDADE ESTADUAL DO CENTRO OESTE (UNICENTRO)", sigla: "UNICENTRO", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "568": { code: "568", label: "UNIVERSIDADE ESTADUAL DO MARANHÃO (UEMA)", sigla: "UEMA", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "15015": { code: "15015", label: "Universidade Estadual do Norte do Paraná (UENP)", sigla: "UENP", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "1027": { code: "1027", label: "UNIVERSIDADE ESTADUAL DO NORTE FLUMINENSE DARCY RIBEIRO (UENF)", sigla: "UENF", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "609": { code: "609", label: "UNIVERSIDADE ESTADUAL DO OESTE DO PARANÁ (UNIOESTE)", sigla: "UNIOESTE", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "18492": { code: "18492", label: "Universidade Estadual do Paraná (UNESPAR)", sigla: "UNESPAR", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "756": { code: "756", label: "UNIVERSIDADE ESTADUAL DO PIAUÍ (UESPI)", sigla: "UESPI", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "3336": { code: "3336", label: "UNIVERSIDADE ESTADUAL DO RIO GRANDE DO SUL (UERGS)", sigla: "UERGS", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "688": { code: "688", label: "UNIVERSIDADE ESTADUAL DO SUDOESTE DA BAHIA (UESB)", sigla: "UESB", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "95": { code: "95", label: "UNIVERSIDADE ESTADUAL DO VALE DO ACARAÚ (UVA)", sigla: "UVA", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "56": { code: "56", label: "UNIVERSIDADE ESTADUAL PAULISTA JÚLIO DE MESQUITA FILHO (UNESP)", sigla: "UNESP", category: "Universidade", oa: "Pública", ci: "-", igc: "5" },
	  "578": { code: "578", label: "UNIVERSIDADE FEDERAL DA BAHIA (UFBA)", sigla: "UFBA", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "15121": { code: "15121", label: "UNIVERSIDADE FEDERAL DA FRONTEIRA SUL (UFFS)", sigla: "UFFS", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "15001": { code: "15001", label: "UNIVERSIDADE FEDERAL DA INTEGRAÇÃO LATINO-AMERICANA (UNILA)", sigla: "UNILA", category: "Universidade", oa: "Pública", ci: "-", igc: "5" },
	  "579": { code: "579", label: "UNIVERSIDADE FEDERAL DA PARAÍBA (UFPB)", sigla: "UFPB", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "577": { code: "577", label: "UNIVERSIDADE FEDERAL DE ALAGOAS (UFAL)", sigla: "UFAL", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "595": { code: "595", label: "UNIVERSIDADE FEDERAL DE ALFENAS (UNIFAL-MG)", sigla: "UNIFAL-MG", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "2564": { code: "2564", label: "UNIVERSIDADE FEDERAL DE CAMPINA GRANDE (UFCG)", sigla: "UFCG", category: "Universidade", oa: "Pública", ci: "3", igc: "4" },
	  "584": { code: "584", label: "UNIVERSIDADE FEDERAL DE GOIÁS (UFG)", sigla: "UFG", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "598": { code: "598", label: "UNIVERSIDADE FEDERAL DE ITAJUBÁ - UNIFEI (UNIFEI)", sigla: "UNIFEI", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "576": { code: "576", label: "UNIVERSIDADE FEDERAL DE JUIZ DE FORA (UFJF)", sigla: "UFJF", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "592": { code: "592", label: "UNIVERSIDADE FEDERAL DE LAVRAS (UFLA)", sigla: "UFLA", category: "Universidade", oa: "Pública", ci: "5", igc: "5" },
	  "1": { code: "1", label: "UNIVERSIDADE FEDERAL DE MATO GROSSO (UFMT)", sigla: "UFMT", category: "Universidade", oa: "Pública", ci: "3", igc: "4" },
	  "694": { code: "694", label: "UNIVERSIDADE FEDERAL DE MATO GROSSO DO SUL (UFMS)", sigla: "UFMS", category: "Universidade", oa: "Pública", ci: "3", igc: "4" },
	  "575": { code: "575", label: "UNIVERSIDADE FEDERAL DE MINAS GERAIS (UFMG)", sigla: "UFMG", category: "Universidade", oa: "Pública", ci: "4", igc: "5" },
	  "6": { code: "6", label: "UNIVERSIDADE FEDERAL DE OURO PRETO (UFOP)", sigla: "UFOP", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "634": { code: "634", label: "UNIVERSIDADE FEDERAL DE PELOTAS (UFPEL)", sigla: "UFPEL", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "580": { code: "580", label: "UNIVERSIDADE FEDERAL DE PERNAMBUCO (UFPE)", sigla: "UFPE", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "789": { code: "789", label: "UNIVERSIDADE FEDERAL DE RORAIMA (UFRR)", sigla: "UFRR", category: "Universidade", oa: "Pública", ci: "3", igc: "3" },
	  "585": { code: "585", label: "UNIVERSIDADE FEDERAL DE SANTA CATARINA (UFSC)", sigla: "UFSC", category: "Universidade", oa: "Pública", ci: "4", igc: "5" },
	  "582": { code: "582", label: "UNIVERSIDADE FEDERAL DE SANTA MARIA (UFSM)", sigla: "UFSM", category: "Universidade", oa: "Pública", ci: "3", igc: "4" },
	  "7": { code: "7", label: "UNIVERSIDADE FEDERAL DE SÃO CARLOS (UFSCAR)", sigla: "UFSCAR", category: "Universidade", oa: "Pública", ci: "4", igc: "5" },
	  "107": { code: "107", label: "UNIVERSIDADE FEDERAL DE SÃO JOÃO DEL REI (UFSJ)", sigla: "UFSJ", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "591": { code: "591", label: "UNIVERSIDADE FEDERAL DE SÃO PAULO (UNIFESP)", sigla: "UNIFESP", category: "Universidade", oa: "Pública", ci: "-", igc: "5" },
	  "3": { code: "3", label: "UNIVERSIDADE FEDERAL DE SERGIPE (UFS)", sigla: "UFS", category: "Universidade", oa: "Pública", ci: "3", igc: "4" },
	  "17": { code: "17", label: "UNIVERSIDADE FEDERAL DE UBERLÂNDIA (UFU)", sigla: "UFU", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "8": { code: "8", label: "UNIVERSIDADE FEDERAL DE VIÇOSA (UFV)", sigla: "UFV", category: "Universidade", oa: "Pública", ci: "4", igc: "5" },
	  "549": { code: "549", label: "UNIVERSIDADE FEDERAL DO ACRE (UFAC)", sigla: "UFAC", category: "Universidade", oa: "Pública", ci: "4", igc: "3" },
	  "830": { code: "830", label: "UNIVERSIDADE FEDERAL DO AMAPÁ (UNIFAP)", sigla: "UNIFAP", category: "Universidade", oa: "Pública", ci: "2", igc: "3" },
	  "4": { code: "4", label: "UNIVERSIDADE FEDERAL DO AMAZONAS (UFAM)", sigla: "UFAM", category: "Universidade", oa: "Pública", ci: "3", igc: "3" },
	  "18759": { code: "18759", label: "UNIVERSIDADE FEDERAL DO CARIRI (UFCA)", sigla: "UFCA", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "583": { code: "583", label: "UNIVERSIDADE FEDERAL DO CEARÁ (UFC)", sigla: "UFC", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "573": { code: "573", label: "UNIVERSIDADE FEDERAL DO ESPÍRITO SANTO (UFES)", sigla: "UFES", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "693": { code: "693", label: "UNIVERSIDADE FEDERAL DO ESTADO DO RIO DE JANEIRO (UNIRIO)", sigla: "UNIRIO", category: "Universidade", oa: "Pública", ci: "3", igc: "4" },
	  "548": { code: "548", label: "UNIVERSIDADE FEDERAL DO MARANHÃO (UFMA)", sigla: "UFMA", category: "Universidade", oa: "Pública", ci: "4", igc: "3" },
	  "18506": { code: "18506", label: "UNIVERSIDADE FEDERAL DO OESTE DA BAHIA (UFOB)", sigla: "UFOB", category: "Universidade", oa: "Pública", ci: "-", igc: "4" },
	  "15059": { code: "15059", label: "UNIVERSIDADE FEDERAL DO OESTE DO PARÁ (UFOPA)", sigla: "UFOPA", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "569": { code: "569", label: "UNIVERSIDADE FEDERAL DO PARÁ (UFPA)", sigla: "UFPA", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "571": { code: "571", label: "UNIVERSIDADE FEDERAL DO PARANÁ (UFPR)", sigla: "UFPR", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "5": { code: "5", label: "UNIVERSIDADE FEDERAL DO PIAUÍ (UFPI)", sigla: "UFPI", category: "Universidade", oa: "Pública", ci: "3", igc: "3" },
	  "4503": { code: "4503", label: "UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA (UFRB)", sigla: "UFRB", category: "Universidade", oa: "Pública", ci: "4", igc: "3" },
	  "586": { code: "586", label: "UNIVERSIDADE FEDERAL DO RIO DE JANEIRO (UFRJ)", sigla: "UFRJ", category: "Universidade", oa: "Pública", ci: "5", igc: "5" },
	  "12": { code: "12", label: "UNIVERSIDADE FEDERAL DO RIO GRANDE (FURG)", sigla: "FURG", category: "Universidade", oa: "Pública", ci: "3", igc: "4" },
	  "570": { code: "570", label: "UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE (UFRN)", sigla: "UFRN", category: "Universidade", oa: "Pública", ci: "5", igc: "4" },
	  "581": { code: "581", label: "UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL (UFRGS)", sigla: "UFRGS", category: "Universidade", oa: "Pública", ci: "4", igc: "5" },
	  "18812": { code: "18812", label: "UNIVERSIDADE FEDERAL DO SUL DA BAHIA (UFESBA)", sigla: "UFESBA", category: "Universidade", oa: "Pública", ci: "-", igc: "-" },
	  "18440": { code: "18440", label: "UNIVERSIDADE FEDERAL DO SUL E SUDESTE DO PARÁ (UNIFESSPA)", sigla: "UNIFESSPA", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "597": { code: "597", label: "UNIVERSIDADE FEDERAL DO TRIÂNGULO MINEIRO (UFTM)", sigla: "UFTM", category: "Universidade", oa: "Pública", ci: "3", igc: "4" },
	  "596": { code: "596", label: "UNIVERSIDADE FEDERAL DOS VALES DO JEQUITINHONHA E MUCURI (UFVJM)", sigla: "UFVJM", category: "Universidade", oa: "Pública", ci: "3", igc: "4" },
	  "572": { code: "572", label: "UNIVERSIDADE FEDERAL FLUMINENSE (UFF)", sigla: "UFF", category: "Universidade", oa: "Pública", ci: "5", igc: "4" },
	  "590": { code: "590", label: "UNIVERSIDADE FEDERAL RURAL DA AMAZÔNIA (UFRA)", sigla: "UFRA", category: "Universidade", oa: "Pública", ci: "3", igc: "3" },
	  "587": { code: "587", label: "UNIVERSIDADE FEDERAL RURAL DE PERNAMBUCO (UFRPE)", sigla: "UFRPE", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "574": { code: "574", label: "UNIVERSIDADE FEDERAL RURAL DO RIO DE JANEIRO (UFRRJ)", sigla: "UFRRJ", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "589": { code: "589", label: "UNIVERSIDADE FEDERAL RURAL DO SEMI-ÁRIDO (UFERSA)", sigla: "UFERSA", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "23": { code: "23", label: "UNIVERSIDADE FEEVALE (FEEVALE)", sigla: "FEEVALE", category: "Universidade", oa: "Privada", ci: "4", igc: "4" },
	  "1557": { code: "1557", label: "UNIVERSIDADE FUMEC (FUMEC)", sigla: "FUMEC", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "481": { code: "481", label: "UNIVERSIDADE GUARULHOS (UNG)", sigla: "UNG", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "458": { code: "458", label: "UNIVERSIDADE IBIRAPUERA (UNIB)", sigla: "UNIB", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "330": { code: "330", label: "UNIVERSIDADE IGUAÇU (UNIG)", sigla: "UNIG", category: "Universidade", oa: "Privada", ci: "-", igc: "3" },
	  "30": { code: "30", label: "UNIVERSIDADE JOSÉ DO ROSÁRIO VELLANO (UNIFENAS)", sigla: "UNIFENAS", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "449": { code: "449", label: "UNIVERSIDADE LUTERANA DO BRASIL (ULBRA)", sigla: "ULBRA", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "266": { code: "266", label: "UNIVERSIDADE METODISTA DE PIRACICABA (UNIMEP)", sigla: "UNIMEP", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "167": { code: "167", label: "UNIVERSIDADE METODISTA DE SÃO PAULO (UMESP)", sigla: "UMESP", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "953": { code: "953", label: "UNIVERSIDADE METROPOLITANA DE SANTOS (UNIMES)", sigla: "UNIMES", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "605": { code: "605", label: "UNIVERSIDADE MUNICIPAL DE SÃO CAETANO DO SUL (USCS)", sigla: "USCS", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "669": { code: "669", label: "UNIVERSIDADE NILTON LINS (UNINILTONLINS)", sigla: "UNINILTONLINS", category: "Universidade", oa: "Privada", ci: "5", igc: "3" },
	  "316": { code: "316", label: "UNIVERSIDADE NOVE DE JULHO (UNINOVE)", sigla: "UNINOVE", category: "Universidade", oa: "Privada", ci: "4", igc: "4" },
	  "437": { code: "437", label: "UNIVERSIDADE PARANAENSE (UNIPAR)", sigla: "UNIPAR", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "322": { code: "322", label: "UNIVERSIDADE PAULISTA (UNIP)", sigla: "UNIP", category: "Universidade", oa: "Privada", ci: "4", igc: "4" },
	  "298": { code: "298", label: "UNIVERSIDADE PITÁGORAS UNOPAR", sigla: "UNOPAR", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "1042": { code: "1042", label: "UNIVERSIDADE POSITIVO (UP)", sigla: "UP", category: "Universidade", oa: "Privada", ci: "4", igc: "4" },
	  "718": { code: "718", label: "UNIVERSIDADE POTIGUAR (UNP)", sigla: "UNP", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "22": { code: "22", label: "UNIVERSIDADE PRESBITERIANA MACKENZIE (MACKENZIE)", sigla: "MACKENZIE", category: "Universidade", oa: "Privada", ci: "5", igc: "3" },
	  "308": { code: "308", label: "UNIVERSIDADE PRESIDENTE ANTÔNIO CARLOS (UNIPAC)", sigla: "UNIPAC", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "76": { code: "76", label: "UNIVERSIDADE REGIONAL DE BLUMENAU (FURB)", sigla: "FURB", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "746": { code: "746", label: "UNIVERSIDADE REGIONAL DO CARIRI (URCA)", sigla: "URCA", category: "Universidade", oa: "Pública", ci: "-", igc: "3" },
	  "532": { code: "532", label: "UNIVERSIDADE REGIONAL DO NOROESTE DO ESTADO DO RIO GRANDE DO SUL (UNIJUI)", sigla: "UNIJUI", category: "Universidade", oa: "Privada", ci: "4", igc: "4" },
	  "423": { code: "423", label: "UNIVERSIDADE REGIONAL INTEGRADA DO ALTO URUGUAI E DAS MISSÕES (URI)", sigla: "URI", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "663": { code: "663", label: "UNIVERSIDADE SALGADO DE OLIVEIRA (UNIVERSO)", sigla: "UNIVERSO", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "385": { code: "385", label: "UNIVERSIDADE SALVADOR (UNIFACS)", sigla: "UNIFACS", category: "Universidade", oa: "Privada", ci: "5", igc: "3" },
	  "952": { code: "952", label: "UNIVERSIDADE SANTA CECÍLIA (UNISANTA)", sigla: "UNISANTA", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "240": { code: "240", label: "UNIVERSIDADE SANTA ÚRSULA (USU)", sigla: "USU", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "670": { code: "670", label: "UNIVERSIDADE SÃO FRANCISCO (USF)", sigla: "USF", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "203": { code: "203", label: "UNIVERSIDADE SÃO JUDAS TADEU (USJT)", sigla: "USJT", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "140": { code: "140", label: "UNIVERSIDADE SEVERINO SOMBRA (USS)", sigla: "USS", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "588": { code: "588", label: "UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ (UTFPR)", sigla: "UTFPR", category: "Universidade", oa: "Pública", ci: "4", igc: "4" },
	  "398": { code: "398", label: "UNIVERSIDADE TIRADENTES (UNIT)", sigla: "UNIT", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "355": { code: "355", label: "UNIVERSIDADE TUIUTI DO PARANÁ (UTP)", sigla: "UTP", category: "Universidade", oa: "Privada", ci: "4", igc: "3" },
	  "513": { code: "513", label: "UNIVERSIDADE VALE DO RIO DOCE (UNIVALE)", sigla: "UNIVALE", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "27": { code: "27", label: "UNIVERSIDADE VALE DO RIO VERDE (UNINCOR)", sigla: "UNINCOR", category: "Universidade", oa: "Privada", ci: "3", igc: "3" },
	  "165": { code: "165", label: "UNIVERSIDADE VEIGA DE ALMEIDA (UVA)", sigla: "UVA", category: "Universidade", oa: "Privada", ci: "4", igc: "4" },
	  "664": { code: "664", label: "UNIVERSIDADE VILA VELHA (UVV)", sigla: "UVV", category: "Universidade", oa: "Privada", ci: "4", igc: "4" },
	  "3835": { code: "3835", label: "UNIVERSIDADE VIRTUAL DO ESTADO DO MARANHÃO (UNIVIMA)", sigla: "UNIVIMA", category: "Universidade", oa: "Pública", ci: "-", igc: "-" }
	};

	var instituitions_collection = Object.keys(instituitions).map(function (key) {
	  return instituitions[key];
	});

	exports.map = instituitions;
	exports.collection = instituitions_collection;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var languages = {
	  "akk": { code: "akk", label: "Acadiano" },
	  "pus": { code: "pus", label: "Afegão" },
	  "afr": { code: "afr", label: "Africanse" },
	  "aym": { code: "aym", label: "Aimará" },
	  "ain": { code: "ain", label: "Ainu" },
	  "alb": { code: "alb", label: "Albanês" },
	  "deu": { code: "deu", label: "Alemão" },
	  "amh": { code: "amh", label: "Amárico" },
	  "ara": { code: "ara", label: "Árabe" },
	  "hye": { code: "hye", label: "Armênio" },
	  "asm": { code: "asm", label: "Assamês" },
	  "aii": { code: "aii", label: "Assuri" },
	  "ast": { code: "ast", label: "Asturiano" },
	  "aze": { code: "aze", label: "Azeri" },
	  "frs": { code: "frs", label: "Baixo Saxão" },
	  "eus": { code: "eus", label: "Basca" },
	  "baq": { code: "baq", label: "Basque" },
	  "ben": { code: "ben", label: "Bengali" },
	  "ber": { code: "ber", label: "Berbere" },
	  "bel": { code: "bel", label: "Bielorrusso" },
	  "mya": { code: "mya", label: "Birmanês" },
	  "bos": { code: "bos", label: "Bósnio" },
	  "bre": { code: "bre", label: "Bretão" },
	  "bul": { code: "bul", label: "Búlgaro" },
	  "khm": { code: "khm", label: "Cambojano" },
	  "cat": { code: "cat", label: "Catalão" },
	  "kas": { code: "kas", label: "Caxemiriano" },
	  "kaz": { code: "kaz", label: "Cazaque" },
	  "chr": { code: "chr", label: "Cheroqui" },
	  "zho": { code: "zho", label: "Chinês" },
	  "wuu": { code: "wuu", label: "Chinês Shangai" },
	  "yue": { code: "yue", label: "Chinês - Cantonese" },
	  "cmn": { code: "cmn", label: "Chinês - Mandarin" },
	  "nan": { code: "nan", label: "Chinês - Taiwan" },
	  "sin": { code: "sin", label: "Cingalês" },
	  "kok": { code: "kok", label: "Concani" },
	  "gom": { code: "gom", label: "Concani" },
	  "kor": { code: "kor", label: "Coreano" },
	  "cor": { code: "cor", label: "Córnico" },
	  "cos": { code: "cos", label: "Corso" },
	  "hrv": { code: "hrv", label: "Croata" },
	  "kur": { code: "kur", label: "Curdo" },
	  "dak": { code: "dak", label: "Dakota" },
	  "dan": { code: "dan", label: "Dinarmaquês" },
	  "egy": { code: "egy", label: "Egípcio" },
	  "sco": { code: "sco", label: "Escocês" },
	  "gla": { code: "gla", label: "Escocês Gaelico" },
	  "chu": { code: "chu", label: "Eslavo Eclesiástico" },
	  "slk": { code: "slk", label: "Eslovaco" },
	  "slv": { code: "slv", label: "Eslovêno" },
	  "spa": { code: "spa", label: "Espanhol" },
	  "epo": { code: "epo", label: "Esperanto" },
	  "est": { code: "est", label: "Estoniano" },
	  "fao": { code: "fao", label: "Feroês" },
	  "fij": { code: "fij", label: "Fijiano" },
	  "fil": { code: "fil", label: "Filipino" },
	  "fin": { code: "fin", label: "Finlanês" },
	  "fre": { code: "fre", label: "Francês" },
	  "fry": { code: "fry", label: "Frísio" },
	  "fur": { code: "fur", label: "Friulano" },
	  "gle": { code: "gle", label: "Irlandês" },
	  "glg": { code: "glg", label: "Galego" },
	  "wel": { code: "wel", label: "Galês" },
	  "kat": { code: "kat", label: "Georgiano" },
	  "gre": { code: "gre", label: "Grego" },
	  "grc": { code: "grc", label: "Grego Antigo" },
	  "kal": { code: "kal", label: "Groenlandês" },
	  "grn": { code: "grn", label: "Guarani" },
	  "guj": { code: "guj", label: "Gujarati" },
	  "hat": { code: "hat", label: "Haitiano" },
	  "hau": { code: "hau", label: "Hauçá" },
	  "haw": { code: "haw", label: "Havaiano" },
	  "heb": { code: "heb", label: "Hebraico" },
	  "hin": { code: "hin", label: "Hindi" },
	  "hmn": { code: "hmn", label: "Hmong" },
	  "nld": { code: "nld", label: "Holandês" },
	  "hun": { code: "hun", label: "Húngaro" },
	  "yid": { code: "yid", label: "Ídiche" },
	  "ido": { code: "ido", label: "Ido" },
	  "ind": { code: "ind", label: "Indonésio" },
	  "eng": { code: "eng", label: "Inglês" },
	  "inh": { code: "inh", label: "Ingush" },
	  "yor": { code: "yor", label: "Iorubá" },
	  "isl": { code: "isl", label: "Islandês" },
	  "ita": { code: "ita", label: "Italiano" },
	  "jpn": { code: "jpn", label: "Japonês" },
	  "kan": { code: "kan", label: "Kanarês" },
	  "lad": { code: "lad", label: "Ladino" },
	  "lao": { code: "lao", label: "Laociano" },
	  "lat": { code: "lat", label: "Latim" },
	  "lav": { code: "lav", label: "Letão" },
	  "lit": { code: "lit", label: "Lituano" },
	  "ltz": { code: "ltz", label: "Luxemburguês" },
	  "mkd": { code: "mkd", label: "Macedônio" },
	  "mal": { code: "mal", label: "Malaiala" },
	  "msa": { code: "msa", label: "Malaio" },
	  "glv": { code: "glv", label: "Manês" },
	  "mni": { code: "mni", label: "Manipuri" },
	  "mri": { code: "mri", label: "Maori" },
	  "mar": { code: "mar", label: "Marati" },
	  "mon": { code: "mon", label: "Mongol" },
	  "nep": { code: "nep", label: "Nepalês" },
	  "nya": { code: "nya", label: "Nianja" },
	  "nor": { code: "nor", label: "Norueguês" },
	  "nov": { code: "nov", label: "Novial" },
	  "oci": { code: "oci", label: "Occitânico" },
	  "oji": { code: "oji", label: "Ojibua" },
	  "ori": { code: "ori", label: "Oriá" },
	  "und": { code: "und", label: "Outros" },
	  "pan": { code: "pan", label: "Panjabi" },
	  "fas": { code: "fas", label: "Persa" },
	  "pol": { code: "pol", label: "Polonês" },
	  "por": { code: "por", label: "Português" },
	  "ptb": { code: "ptb", label: "Português Brasileiro" },
	  "pra": { code: "pra", label: "Prakrit" },
	  "que": { code: "que", label: "Quíchua" },
	  "kir": { code: "kir", label: "Quirguistanês" },
	  "roh": { code: "roh", label: "Reto Romano" },
	  "rom": { code: "rom", label: "Romani" },
	  "ron": { code: "ron", label: "Romeno" },
	  "rus": { code: "rus", label: "Russo" },
	  "smi": { code: "smi", label: "Sámi" },
	  "smo": { code: "smo", label: "Samoano" },
	  "san": { code: "san", label: "Sânscrito" },
	  "sce": { code: "sce", label: "Santa" },
	  "srp": { code: "srp", label: "Sérvio" },
	  "scn": { code: "scn", label: "Siciliano" },
	  "snd": { code: "snd", label: "Sindi" },
	  "swa": { code: "swa", label: "Suaíli" },
	  "swe": { code: "swe", label: "Sueco" },
	  "tha": { code: "tha", label: "Tailandês" },
	  "tam": { code: "tam", label: "Tâmil" },
	  "cze": { code: "cze", label: "Tcheco" },
	  "tel": { code: "tel", label: "Telugu" },
	  "tib": { code: "tib", label: "Tibetano" },
	  "tpi": { code: "tpi", label: "Tok Pisin" },
	  "ton": { code: "ton", label: "Tonganês" },
	  "tur": { code: "tur", label: "Turco" },
	  "ukr": { code: "ukr", label: "Ucraniano" },
	  "urd": { code: "urd", label: "Urdu" },
	  "uzb": { code: "uzb", label: "Usbeque" },
	  "vie": { code: "vie", label: "Vietinamita" },
	  "xho": { code: "xho", label: "Xosa" },
	  "zul": { code: "zul", label: "Zulu" }
	};

	var languages_collection = Object.keys(languages).map(function (key) {
	  return languages[key];
	});

	exports.map = languages;
	exports.collection = languages_collection;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var languages_proficiency_level = {
	    'EL': { code: 'EL', label: 'Básico' },
	    'LW': { code: 'LW', label: 'Intermediário' },
	    'PW': { code: 'PW', label: 'Técnico' },
	    'FP': { code: 'FP', label: 'Avançado' },
	    'NO': { code: 'NB', label: 'Nativo' }
	};

	var languages_proficiency_level_collection = Object.keys(languages_proficiency_level).map(function (key) {
	    return languages_proficiency_level[key];
	});

	exports.map = languages_proficiency_level;
	exports.collection = languages_proficiency_level_collection;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var company_industry = {
	    47: { code: "47", group: "corp, fin", label: "Contabilidade" },
	    94: { code: "94", group: "man, tech, tran", label: "Linhas aéreas/Aviação" },
	    120: { code: "120", group: "leg, org", label: "Resolução alternativa de litígios" },
	    125: { code: "125", group: "hlth", label: "Medicina alternativa" },
	    127: { code: "127", group: "art, med", label: "Animação" },
	    19: { code: "19", group: "good", label: "Roupas e moda" },
	    50: { code: "50", group: "cons", label: "Arquitetura e planejamento" },
	    111: { code: "111", group: "art, med, rec", label: "Artes e artesanato" },
	    53: { code: "53", group: "man", label: "Indústria automotiva" },
	    52: { code: "52", group: "gov, man", label: "Aviação e aeroespacial" },
	    41: { code: "41", group: "fin", label: "Bancos" },
	    12: { code: "12", group: "gov, hlth, tech", label: "Biotecnologia" },
	    36: { code: "36", group: "med, rec", label: "Mídia de difusão" },
	    49: { code: "49", group: "cons", label: "Materiais de construção" },
	    138: { code: "138", group: "corp, man", label: "Suprimentos e equipamentos comerciais" },
	    129: { code: "129", group: "fin", label: "Mercados de capital" },
	    54: { code: "54", group: "man", label: "Indústria química" },
	    90: { code: "90", group: "org, serv", label: "Organização cívica e social" },
	    51: { code: "51", group: "cons, gov", label: "Engenharia civil" },
	    128: { code: "128", group: "cons, corp, fin", label: "Imóveis comerciais" },
	    118: { code: "118", group: "tech", label: "Segurança de redes e computadores" },
	    109: { code: "109", group: "med, rec", label: "Jogos de computador" },
	    3: { code: "3", group: "tech", label: "Hardware" },
	    5: { code: "5", group: "tech", label: "Redes" },
	    4: { code: "4", group: "tech", label: "Software" },
	    48: { code: "48", group: "cons", label: "Construção" },
	    24: { code: "24", group: "good, man", label: "Manufatura de eletroeletrônicos" },
	    25: { code: "25", group: "good, man", label: "Bens de consumo" },
	    91: { code: "91", group: "org, serv", label: "Atendimento ao consumidor" },
	    18: { code: "18", group: "good", label: "Cosmética" },
	    65: { code: "65", group: "agr", label: "Laticínios" },
	    1: { code: "1", group: "gov, tech", label: "Defesa e espaço" },
	    99: { code: "99", group: "art, med", label: "Design" },
	    69: { code: "69", group: "edu", label: "Gestão educacional" },
	    132: { code: "132", group: "edu, org", label: "Educação à distância\n" },
	    112: { code: "112", group: "good, man", label: "Produtos eletrônicos" },
	    28: { code: "28", group: "med, rec", label: "Entretenimento" },
	    86: { code: "86", group: "org, serv", label: "Serviços ambientais" },
	    110: { code: "110", group: "corp, rec, serv", label: "Serviços para eventos" },
	    76: { code: "76", group: "gov", label: "Gabinete presidencial" },
	    122: { code: "122", group: "corp, serv", label: "Administração de serviços" },
	    63: { code: "63", group: "agr", label: "Agricultura" },
	    43: { code: "43", group: "fin", label: "Serviços financeiros" },
	    38: { code: "38", group: "art, med, rec", label: "Belas-artes" },
	    66: { code: "66", group: "agr", label: "Pesca" },
	    34: { code: "34", group: "rec, serv", label: "Alimentos e bebidas" },
	    23: { code: "23", group: "good, man, serv", label: "Produtos alimentícios" },
	    101: { code: "101", group: "org", label: "Arrecadação de recursos" },
	    26: { code: "26", group: "good, man", label: "Móveis" },
	    29: { code: "29", group: "rec", label: "Jogos de azar" },
	    145: { code: "145", group: "cons, man", label: "Vidro, cerâmica e concreto" },
	    75: { code: "75", group: "gov", label: "Administração governamental" },
	    148: { code: "148", group: "gov", label: "Relações governamentais" },
	    140: { code: "140", group: "art, med", label: "Design gráfico" },
	    124: { code: "124", group: "hlth, rec", label: "Saúde, bem-estar e educação física" },
	    68: { code: "68", group: "edu", label: "Ensino superior" },
	    14: { code: "14", group: "hlth", label: "Atendimento médico e hospitalar" },
	    31: { code: "31", group: "rec, serv, tran", label: "Hotelaria" },
	    137: { code: "137", group: "corp", label: "Recursos humanos" },
	    134: { code: "134", group: "corp, good, tran", label: "Importação e exportação" },
	    88: { code: "88", group: "org, serv", label: "Serviços individuais e familiares" },
	    147: { code: "147", group: "cons, man", label: "Automação industrial" },
	    84: { code: "84", group: "med, serv", label: "Serviços da informação" },
	    96: { code: "96", group: "tech", label: "Tecnologia da informação e serviços" },
	    42: { code: "42", group: "fin", label: "Seguros" },
	    74: { code: "74", group: "gov", label: "Relações internacionais" },
	    141: { code: "141", group: "gov, org, tran", label: "Comércio e desenvolvimento internacional" },
	    6: { code: "6", group: "tech", label: "Internet" },
	    45: { code: "45", group: "fin", label: "Bancos de investimento" },
	    46: { code: "46", group: "fin", label: "Gestão de investimentos" },
	    73: { code: "73", group: "gov, leg", label: "Judiciário" },
	    77: { code: "77", group: "gov, leg", label: "Execução da lei" },
	    9: { code: "9", group: "leg", label: "Prática jurídica" },
	    10: { code: "10", group: "leg", label: "Serviços jurídicos" },
	    72: { code: "72", group: "gov, leg", label: "Atividades parlamentares" },
	    30: { code: "30", group: "rec, serv, tran", label: "Lazer, viagens e turismo" },
	    85: { code: "85", group: "med, rec, serv", label: "Bibliotecas" },
	    116: { code: "116", group: "corp, tran", label: "Logística e cadeia de suprimentos" },
	    143: { code: "143", group: "good", label: "Produtos de luxo e joias" },
	    55: { code: "55", group: "man", label: "Maquinário" },
	    11: { code: "11", group: "corp", label: "Consultoria de gerenciamento" },
	    95: { code: "95", group: "tran", label: "Transporte marítimo" },
	    97: { code: "97", group: "corp", label: "Pesquisa de mercado" },
	    80: { code: "80", group: "corp, med", label: "Marketing e publicidade" },
	    135: { code: "135", group: "cons, gov, man", label: "Engenharia mecânica ou industrial" },
	    126: { code: "126", group: "med, rec", label: "Produção de mídia" },
	    17: { code: "17", group: "hlth", label: "Dispositivos médicos" },
	    13: { code: "13", group: "hlth", label: "Prática médica" },
	    139: { code: "139", group: "hlth", label: "Atendimento médico psiquiátrico" },
	    71: { code: "71", group: "gov", label: "Militar" },
	    56: { code: "56", group: "man", label: "Mineração e metais" },
	    35: { code: "35", group: "art, med, rec", label: "Cinema e filmes" },
	    37: { code: "37", group: "art, med, rec", label: "Museus e instituições" },
	    115: { code: "115", group: "art, rec", label: "Música" },
	    114: { code: "114", group: "gov, man, tech", label: "Nanotecnologia" },
	    81: { code: "81", group: "med, rec", label: "Jornais" },
	    100: { code: "100", group: "org", label: "Gestão de organização sem fins lucrativos" },
	    57: { code: "57", group: "man", label: "Petróleo e energia" },
	    113: { code: "113", group: "med", label: "Mídia online" },
	    123: { code: "123", group: "corp", label: "Terceirização e offshoring" },
	    87: { code: "87", group: "serv, tran", label: "Entrega de encomendas e fretes" },
	    146: { code: "146", group: "good, man", label: "Embalagens e recipientes" },
	    61: { code: "61", group: "man", label: "Papel e produtos florestais" },
	    39: { code: "39", group: "art, med, rec", label: "Artes cênicas" },
	    15: { code: "15", group: "hlth, tech", label: "Indústria farmacêutica" },
	    131: { code: "131", group: "org", label: "Filantropia" },
	    136: { code: "136", group: "art, med, rec", label: "Fotografia" },
	    117: { code: "117", group: "man", label: "Plástico" },
	    107: { code: "107", group: "gov, org", label: "Organização política" },
	    67: { code: "67", group: "edu", label: "Ensino fundamental/médio" },
	    83: { code: "83", group: "med, rec", label: "Impressão" },
	    105: { code: "105", group: "corp", label: "Treinamento e orientação profissional" },
	    102: { code: "102", group: "corp, org", label: "Desenvolvimento de programas" },
	    79: { code: "79", group: "gov", label: "Política pública" },
	    98: { code: "98", group: "corp", label: "Relações públicas e comunicações" },
	    78: { code: "78", group: "gov", label: "Segurança pública" },
	    82: { code: "82", group: "med, rec", label: "Composição e revisão de textos" },
	    62: { code: "62", group: "man", label: "Construção de ferrovia" },
	    64: { code: "64", group: "agr", label: "Administração agrícola" },
	    44: { code: "44", group: "cons, fin, good", label: "Imobiliário" },
	    40: { code: "40", group: "rec, serv", label: "Instalações e serviços de recreação" },
	    89: { code: "89", group: "org, serv", label: "Instituições religiosas" },
	    144: { code: "144", group: "gov, man, org", label: "Recursos renováveis e meio ambiente" },
	    70: { code: "70", group: "edu, gov", label: "Pesquisa" },
	    32: { code: "32", group: "rec, serv", label: "Restaurantes" },
	    27: { code: "27", group: "good, man", label: "Varejo" },
	    121: { code: "121", group: "corp, org, serv", label: "Segurança e investigações" },
	    7: { code: "7", group: "tech", label: "Semicondutores" },
	    58: { code: "58", group: "man", label: "Construção naval" },
	    20: { code: "20", group: "good, rec", label: "Materiais esportivos" },
	    33: { code: "33", group: "rec", label: "Esportes" },
	    104: { code: "104", group: "corp", label: "Recrutamento e seleção" },
	    22: { code: "22", group: "good", label: "Supermercados" },
	    8: { code: "8", group: "gov, tech", label: "Telecomunicações" },
	    60: { code: "60", group: "man", label: "Indústria têxtil" },
	    130: { code: "130", group: "gov, org", label: "Organizações de pesquisa e orientação" },
	    21: { code: "21", group: "good", label: "Tabaco" },
	    108: { code: "108", group: "corp, gov, serv", label: "Tradução e localização" },
	    92: { code: "92", group: "tran", label: "Transporte/Caminhões/Trens" },
	    59: { code: "59", group: "man", label: "Serviços públicos" },
	    106: { code: "106", group: "fin, tech", label: "Capital de risco e participações privadas" },
	    16: { code: "16", group: "hlth", label: "Veterinária" },
	    93: { code: "93", group: "tran", label: "Armazenagem" },
	    133: { code: "133", group: "good", label: "Atacado" },
	    142: { code: "142", group: "good, man, rec", label: "Vinhos e destilados" },
	    119: { code: "119", group: "tech", label: "Rede sem fio" },
	    103: { code: "103", group: "art, med, rec", label: "Editoração" }
	};

	var company_industry_collection = Object.keys(company_industry).map(function (key) {
	    return company_industry[key];
	});

	exports.map = company_industry;
	exports.collection = company_industry_collection;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var states_map = {
	  "AC": { "code": "AC", "label": "Acre" },
	  "AL": { "code": "AL", "label": "Alagoas" },
	  "AP": { "code": "AP", "label": "Amapá" },
	  "AM": { "code": "AM", "label": "Amazonas" },
	  "BA": { "code": "BA", "label": "Bahia" },
	  "CE": { "code": "CE", "label": "Ceará" },
	  "DF": { "code": "DF", "label": "Distrito Federal" },
	  "ES": { "code": "ES", "label": "Espírito Santo" },
	  "GO": { "code": "GO", "label": "Goiás" },
	  "MA": { "code": "MA", "label": "Maranhão" },
	  "MT": { "code": "MT", "label": "Mato Grosso" },
	  "MS": { "code": "MS", "label": "Mato Grosso do Sul" },
	  "MG": { "code": "MG", "label": "Minas Gerais" },
	  "PA": { "code": "PA", "label": "Pará" },
	  "PB": { "code": "PB", "label": "Paraíba" },
	  "PR": { "code": "PR", "label": "Paraná" },
	  "PE": { "code": "PE", "label": "Pernambuco" },
	  "PI": { "code": "PI", "label": "Piauí" },
	  "RJ": { "code": "RJ", "label": "Rio de Janeiro" },
	  "RN": { "code": "RN", "label": "Rio Grande do Norte" },
	  "RS": { "code": "RS", "label": "Rio Grande do Sul" },
	  "RO": { "code": "RO", "label": "Rondônia" },
	  "RR": { "code": "RR", "label": "Roraima" },
	  "SC": { "code": "SC", "label": "Santa Catarina" },
	  "SP": { "code": "SP", "label": "São Paulo" },
	  "SE": { "code": "SE", "label": "Sergipe" },
	  "TO": { "code": "TO", "label": "Tocantins" }
	};

	var states_collection = Object.keys(states_map).map(function (key) {
	  return states_map[key];
	});

	exports.map = states_map;
	exports.collection = states_collection;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var cities_map = {
	  "1": { "code": "1", "label": "ALTA FLORESTA D'OESTE", "state": "RO" },
	  "2": { "code": "2", "label": "ARIQUEMES", "state": "RO" },
	  "3": { "code": "3", "label": "CABIXI", "state": "RO" },
	  "4": { "code": "4", "label": "CACOAL", "state": "RO" },
	  "5": { "code": "5", "label": "CEREJEIRAS", "state": "RO" },
	  "6": { "code": "6", "label": "COLORADO DO OESTE", "state": "RO" },
	  "7": { "code": "7", "label": "CORUMBIARA", "state": "RO" },
	  "8": { "code": "8", "label": "COSTA MARQUES", "state": "RO" },
	  "9": { "code": "9", "label": "ESPIGÃO D'OESTE", "state": "RO" },
	  "10": { "code": "10", "label": "GUAJARÁ-MIRIM", "state": "RO" },
	  "11": { "code": "11", "label": "JARU", "state": "RO" },
	  "12": { "code": "12", "label": "JI-PARANÁ", "state": "RO" },
	  "13": { "code": "13", "label": "MACHADINHO D'OESTE", "state": "RO" },
	  "14": { "code": "14", "label": "NOVA BRASILÂNDIA D'OESTE", "state": "RO" },
	  "15": { "code": "15", "label": "OURO PRETO DO OESTE", "state": "RO" },
	  "16": { "code": "16", "label": "PIMENTA BUENO", "state": "RO" },
	  "17": { "code": "17", "label": "PORTO VELHO", "state": "RO" },
	  "18": { "code": "18", "label": "PRESIDENTE MÉDICI", "state": "RO" },
	  "19": { "code": "19", "label": "RIO CRESPO", "state": "RO" },
	  "20": { "code": "20", "label": "ROLIM DE MOURA", "state": "RO" },
	  "21": { "code": "21", "label": "SANTA LUZIA D'OESTE", "state": "RO" },
	  "22": { "code": "22", "label": "VILHENA", "state": "RO" },
	  "23": { "code": "23", "label": "SÃO MIGUEL DO GUAPORÉ", "state": "RO" },
	  "24": { "code": "24", "label": "NOVA MAMORÉ", "state": "RO" },
	  "25": { "code": "25", "label": "ALVORADA D'OESTE", "state": "RO" },
	  "26": { "code": "26", "label": "ALTO ALEGRE DOS PARECIS", "state": "RO" },
	  "27": { "code": "27", "label": "ALTO PARAÍSO", "state": "RO" },
	  "28": { "code": "28", "label": "BURITIS", "state": "RO" },
	  "29": { "code": "29", "label": "NOVO HORIZONTE DO OESTE", "state": "RO" },
	  "30": { "code": "30", "label": "CACAULÂNDIA", "state": "RO" },
	  "31": { "code": "31", "label": "CAMPO NOVO DE RONDÔNIA", "state": "RO" },
	  "32": { "code": "32", "label": "CANDEIAS DO JAMARI", "state": "RO" },
	  "33": { "code": "33", "label": "CASTANHEIRAS", "state": "RO" },
	  "34": { "code": "34", "label": "CHUPINGUAIA", "state": "RO" },
	  "35": { "code": "35", "label": "CUJUBIM", "state": "RO" },
	  "36": { "code": "36", "label": "GOVERNADOR JORGE TEIXEIRA", "state": "RO" },
	  "37": { "code": "37", "label": "ITAPUÃ DO OESTE", "state": "RO" },
	  "38": { "code": "38", "label": "MINISTRO ANDREAZZA", "state": "RO" },
	  "39": { "code": "39", "label": "MIRANTE DA SERRA", "state": "RO" },
	  "40": { "code": "40", "label": "MONTE NEGRO", "state": "RO" },
	  "41": { "code": "41", "label": "NOVA UNIÃO", "state": "RO" },
	  "42": { "code": "42", "label": "PARECIS", "state": "RO" },
	  "43": { "code": "43", "label": "PIMENTEIRAS DO OESTE", "state": "RO" },
	  "44": { "code": "44", "label": "PRIMAVERA DE RONDÔNIA", "state": "RO" },
	  "45": { "code": "45", "label": "SÃO FELIPE D'OESTE", "state": "RO" },
	  "46": { "code": "46", "label": "SÃO FRANCISCO DO GUAPORÉ", "state": "RO" },
	  "47": { "code": "47", "label": "SERINGUEIRAS", "state": "RO" },
	  "48": { "code": "48", "label": "TEIXEIRÓPOLIS", "state": "RO" },
	  "49": { "code": "49", "label": "THEOBROMA", "state": "RO" },
	  "50": { "code": "50", "label": "URUPÁ", "state": "RO" },
	  "51": { "code": "51", "label": "VALE DO ANARI", "state": "RO" },
	  "52": { "code": "52", "label": "VALE DO PARAÍSO", "state": "RO" },
	  "53": { "code": "53", "label": "ACRELÂNDIA", "state": "AC" },
	  "54": { "code": "54", "label": "ASSIS BRASIL", "state": "AC" },
	  "55": { "code": "55", "label": "BRASILÉIA", "state": "AC" },
	  "56": { "code": "56", "label": "BUJARI", "state": "AC" },
	  "57": { "code": "57", "label": "CAPIXABA", "state": "AC" },
	  "58": { "code": "58", "label": "CRUZEIRO DO SUL", "state": "AC" },
	  "59": { "code": "59", "label": "EPITACIOLÂNDIA", "state": "AC" },
	  "60": { "code": "60", "label": "FEIJÓ", "state": "AC" },
	  "61": { "code": "61", "label": "JORDÃO", "state": "AC" },
	  "62": { "code": "62", "label": "MÂNCIO LIMA", "state": "AC" },
	  "63": { "code": "63", "label": "MANOEL URBANO", "state": "AC" },
	  "64": { "code": "64", "label": "MARECHAL THAUMATURGO", "state": "AC" },
	  "65": { "code": "65", "label": "PLÁCIDO DE CASTRO", "state": "AC" },
	  "66": { "code": "66", "label": "PORTO WALTER", "state": "AC" },
	  "67": { "code": "67", "label": "RIO BRANCO", "state": "AC" },
	  "68": { "code": "68", "label": "RODRIGUES ALVES", "state": "AC" },
	  "69": { "code": "69", "label": "SANTA ROSA DO PURUS", "state": "AC" },
	  "70": { "code": "70", "label": "SENADOR GUIOMARD", "state": "AC" },
	  "71": { "code": "71", "label": "SENA MADUREIRA", "state": "AC" },
	  "72": { "code": "72", "label": "TARAUACÁ", "state": "AC" },
	  "73": { "code": "73", "label": "XAPURI", "state": "AC" },
	  "74": { "code": "74", "label": "PORTO ACRE", "state": "AC" },
	  "75": { "code": "75", "label": "ALVARÃES", "state": "AM" },
	  "76": { "code": "76", "label": "AMATURÁ", "state": "AM" },
	  "77": { "code": "77", "label": "ANAMÃ", "state": "AM" },
	  "78": { "code": "78", "label": "ANORI", "state": "AM" },
	  "79": { "code": "79", "label": "APUÍ", "state": "AM" },
	  "80": { "code": "80", "label": "ATALAIA DO NORTE", "state": "AM" },
	  "81": { "code": "81", "label": "AUTAZES", "state": "AM" },
	  "82": { "code": "82", "label": "BARCELOS", "state": "AM" },
	  "83": { "code": "83", "label": "BARREIRINHA", "state": "AM" },
	  "84": { "code": "84", "label": "BENJAMIN CONSTANT", "state": "AM" },
	  "85": { "code": "85", "label": "BERURI", "state": "AM" },
	  "86": { "code": "86", "label": "BOA VISTA DO RAMOS", "state": "AM" },
	  "87": { "code": "87", "label": "BOCA DO ACRE", "state": "AM" },
	  "88": { "code": "88", "label": "BORBA", "state": "AM" },
	  "89": { "code": "89", "label": "CAAPIRANGA", "state": "AM" },
	  "90": { "code": "90", "label": "CANUTAMA", "state": "AM" },
	  "91": { "code": "91", "label": "CARAUARI", "state": "AM" },
	  "92": { "code": "92", "label": "CAREIRO", "state": "AM" },
	  "93": { "code": "93", "label": "CAREIRO DA VÁRZEA", "state": "AM" },
	  "94": { "code": "94", "label": "COARI", "state": "AM" },
	  "95": { "code": "95", "label": "CODAJÁS", "state": "AM" },
	  "96": { "code": "96", "label": "EIRUNEPÉ", "state": "AM" },
	  "97": { "code": "97", "label": "ENVIRA", "state": "AM" },
	  "98": { "code": "98", "label": "FONTE BOA", "state": "AM" },
	  "99": { "code": "99", "label": "GUAJARÁ", "state": "AM" },
	  "100": { "code": "100", "label": "HUMAITÁ", "state": "AM" },
	  "101": { "code": "101", "label": "IPIXUNA", "state": "AM" },
	  "102": { "code": "102", "label": "IRANDUBA", "state": "AM" },
	  "103": { "code": "103", "label": "ITACOATIARA", "state": "AM" },
	  "104": { "code": "104", "label": "ITAMARATI", "state": "AM" },
	  "105": { "code": "105", "label": "ITAPIRANGA", "state": "AM" },
	  "106": { "code": "106", "label": "JAPURÁ", "state": "AM" },
	  "107": { "code": "107", "label": "JURUÁ", "state": "AM" },
	  "108": { "code": "108", "label": "JUTAÍ", "state": "AM" },
	  "109": { "code": "109", "label": "LÁBREA", "state": "AM" },
	  "110": { "code": "110", "label": "MANACAPURU", "state": "AM" },
	  "111": { "code": "111", "label": "MANAQUIRI", "state": "AM" },
	  "112": { "code": "112", "label": "MANAUS", "state": "AM" },
	  "113": { "code": "113", "label": "MANICORÉ", "state": "AM" },
	  "114": { "code": "114", "label": "MARAÃ", "state": "AM" },
	  "115": { "code": "115", "label": "MAUÉS", "state": "AM" },
	  "116": { "code": "116", "label": "NHAMUNDÁ", "state": "AM" },
	  "117": { "code": "117", "label": "NOVA OLINDA DO NORTE", "state": "AM" },
	  "118": { "code": "118", "label": "NOVO AIRÃO", "state": "AM" },
	  "119": { "code": "119", "label": "NOVO ARIPUANÃ", "state": "AM" },
	  "120": { "code": "120", "label": "PARINTINS", "state": "AM" },
	  "121": { "code": "121", "label": "PAUINI", "state": "AM" },
	  "122": { "code": "122", "label": "PRESIDENTE FIGUEIREDO", "state": "AM" },
	  "123": { "code": "123", "label": "RIO PRETO DA EVA", "state": "AM" },
	  "124": { "code": "124", "label": "SANTA ISABEL DO RIO NEGRO", "state": "AM" },
	  "125": { "code": "125", "label": "SANTO ANTÔNIO DO IÇÁ", "state": "AM" },
	  "126": { "code": "126", "label": "SÃO GABRIEL DA CACHOEIRA", "state": "AM" },
	  "127": { "code": "127", "label": "SÃO PAULO DE OLIVENÇA", "state": "AM" },
	  "128": { "code": "128", "label": "SÃO SEBASTIÃO DO UATUMÃ", "state": "AM" },
	  "129": { "code": "129", "label": "SILVES", "state": "AM" },
	  "130": { "code": "130", "label": "TABATINGA", "state": "AM" },
	  "131": { "code": "131", "label": "TAPAUÁ", "state": "AM" },
	  "132": { "code": "132", "label": "TEFÉ", "state": "AM" },
	  "133": { "code": "133", "label": "TONANTINS", "state": "AM" },
	  "134": { "code": "134", "label": "UARINI", "state": "AM" },
	  "135": { "code": "135", "label": "URUCARÁ", "state": "AM" },
	  "136": { "code": "136", "label": "URUCURITUBA", "state": "AM" },
	  "137": { "code": "137", "label": "AMAJARI", "state": "RR" },
	  "138": { "code": "138", "label": "ALTO ALEGRE", "state": "RR" },
	  "139": { "code": "139", "label": "BOA VISTA", "state": "RR" },
	  "140": { "code": "140", "label": "BONFIM", "state": "RR" },
	  "141": { "code": "141", "label": "CANTÁ", "state": "RR" },
	  "142": { "code": "142", "label": "CARACARAÍ", "state": "RR" },
	  "143": { "code": "143", "label": "CAROEBE", "state": "RR" },
	  "144": { "code": "144", "label": "IRACEMA", "state": "RR" },
	  "145": { "code": "145", "label": "MUCAJAÍ", "state": "RR" },
	  "146": { "code": "146", "label": "NORMANDIA", "state": "RR" },
	  "147": { "code": "147", "label": "PACARAIMA", "state": "RR" },
	  "148": { "code": "148", "label": "RORAINÓPOLIS", "state": "RR" },
	  "149": { "code": "149", "label": "SÃO JOÃO DA BALIZA", "state": "RR" },
	  "150": { "code": "150", "label": "SÃO LUIZ", "state": "RR" },
	  "151": { "code": "151", "label": "UIRAMUTÃ", "state": "RR" },
	  "152": { "code": "152", "label": "ABAETETUBA", "state": "PA" },
	  "153": { "code": "153", "label": "ABEL FIGUEIREDO", "state": "PA" },
	  "154": { "code": "154", "label": "ACARÁ", "state": "PA" },
	  "155": { "code": "155", "label": "AFUÁ", "state": "PA" },
	  "156": { "code": "156", "label": "ÁGUA AZUL DO NORTE", "state": "PA" },
	  "157": { "code": "157", "label": "ALENQUER", "state": "PA" },
	  "158": { "code": "158", "label": "ALMEIRIM", "state": "PA" },
	  "159": { "code": "159", "label": "ALTAMIRA", "state": "PA" },
	  "160": { "code": "160", "label": "ANAJÁS", "state": "PA" },
	  "161": { "code": "161", "label": "ANANINDEUA", "state": "PA" },
	  "162": { "code": "162", "label": "ANAPU", "state": "PA" },
	  "163": { "code": "163", "label": "AUGUSTO CORRÊA", "state": "PA" },
	  "164": { "code": "164", "label": "AURORA DO PARÁ", "state": "PA" },
	  "165": { "code": "165", "label": "AVEIRO", "state": "PA" },
	  "166": { "code": "166", "label": "BAGRE", "state": "PA" },
	  "167": { "code": "167", "label": "BAIÃO", "state": "PA" },
	  "168": { "code": "168", "label": "BANNACH", "state": "PA" },
	  "169": { "code": "169", "label": "BARCARENA", "state": "PA" },
	  "170": { "code": "170", "label": "BELÉM", "state": "PA" },
	  "171": { "code": "171", "label": "BELTERRA", "state": "PA" },
	  "172": { "code": "172", "label": "BENEVIDES", "state": "PA" },
	  "173": { "code": "173", "label": "BOM JESUS DO TOCANTINS", "state": "PA" },
	  "174": { "code": "174", "label": "BONITO", "state": "PA" },
	  "175": { "code": "175", "label": "BRAGANÇA", "state": "PA" },
	  "176": { "code": "176", "label": "BRASIL NOVO", "state": "PA" },
	  "177": { "code": "177", "label": "BREJO GRANDE DO ARAGUAIA", "state": "PA" },
	  "178": { "code": "178", "label": "BREU BRANCO", "state": "PA" },
	  "179": { "code": "179", "label": "BREVES", "state": "PA" },
	  "180": { "code": "180", "label": "BUJARU", "state": "PA" },
	  "181": { "code": "181", "label": "CACHOEIRA DO PIRIÁ", "state": "PA" },
	  "182": { "code": "182", "label": "CACHOEIRA DO ARARI", "state": "PA" },
	  "183": { "code": "183", "label": "CAMETÁ", "state": "PA" },
	  "184": { "code": "184", "label": "CANAÃ DOS CARAJÁS", "state": "PA" },
	  "185": { "code": "185", "label": "CAPANEMA", "state": "PA" },
	  "186": { "code": "186", "label": "CAPITÃO POÇO", "state": "PA" },
	  "187": { "code": "187", "label": "CASTANHAL", "state": "PA" },
	  "188": { "code": "188", "label": "CHAVES", "state": "PA" },
	  "189": { "code": "189", "label": "COLARES", "state": "PA" },
	  "190": { "code": "190", "label": "CONCEIÇÃO DO ARAGUAIA", "state": "PA" },
	  "191": { "code": "191", "label": "CONCÓRDIA DO PARÁ", "state": "PA" },
	  "192": { "code": "192", "label": "CUMARU DO NORTE", "state": "PA" },
	  "193": { "code": "193", "label": "CURIONÓPOLIS", "state": "PA" },
	  "194": { "code": "194", "label": "CURRALINHO", "state": "PA" },
	  "195": { "code": "195", "label": "CURUÁ", "state": "PA" },
	  "196": { "code": "196", "label": "CURUÇÁ", "state": "PA" },
	  "197": { "code": "197", "label": "DOM ELISEU", "state": "PA" },
	  "198": { "code": "198", "label": "ELDORADO DOS CARAJÁS", "state": "PA" },
	  "199": { "code": "199", "label": "FARO", "state": "PA" },
	  "200": { "code": "200", "label": "FLORESTA DO ARAGUAIA", "state": "PA" },
	  "201": { "code": "201", "label": "GARRAFÃO DO NORTE", "state": "PA" },
	  "202": { "code": "202", "label": "GOIANÉSIA DO PARÁ", "state": "PA" },
	  "203": { "code": "203", "label": "GURUPÁ", "state": "PA" },
	  "204": { "code": "204", "label": "IGARAPÉ-AÇU", "state": "PA" },
	  "205": { "code": "205", "label": "IGARAPÉ-MIRI", "state": "PA" },
	  "206": { "code": "206", "label": "INHANGAPI", "state": "PA" },
	  "207": { "code": "207", "label": "IPIXUNA DO PARÁ", "state": "PA" },
	  "208": { "code": "208", "label": "IRITUIA", "state": "PA" },
	  "209": { "code": "209", "label": "ITAITUBA", "state": "PA" },
	  "210": { "code": "210", "label": "ITUPIRANGA", "state": "PA" },
	  "211": { "code": "211", "label": "JACAREACANGA", "state": "PA" },
	  "212": { "code": "212", "label": "JACUNDÁ", "state": "PA" },
	  "213": { "code": "213", "label": "JURUTI", "state": "PA" },
	  "214": { "code": "214", "label": "LIMOEIRO DO AJURU", "state": "PA" },
	  "215": { "code": "215", "label": "MÃE DO RIO", "state": "PA" },
	  "216": { "code": "216", "label": "MAGALHÃES BARATA", "state": "PA" },
	  "217": { "code": "217", "label": "MARABÁ", "state": "PA" },
	  "218": { "code": "218", "label": "MARACANÃ", "state": "PA" },
	  "219": { "code": "219", "label": "MARAPANIM", "state": "PA" },
	  "220": { "code": "220", "label": "MARITUBA", "state": "PA" },
	  "221": { "code": "221", "label": "MEDICILÂNDIA", "state": "PA" },
	  "222": { "code": "222", "label": "MELGAÇO", "state": "PA" },
	  "223": { "code": "223", "label": "MOCAJUBA", "state": "PA" },
	  "224": { "code": "224", "label": "MOJU", "state": "PA" },
	  "225": { "code": "225", "label": "MONTE ALEGRE", "state": "PA" },
	  "226": { "code": "226", "label": "MUANÁ", "state": "PA" },
	  "227": { "code": "227", "label": "NOVA ESPERANÇA DO PIRIÁ", "state": "PA" },
	  "228": { "code": "228", "label": "NOVA IPIXUNA", "state": "PA" },
	  "229": { "code": "229", "label": "NOVA TIMBOTEUA", "state": "PA" },
	  "230": { "code": "230", "label": "NOVO PROGRESSO", "state": "PA" },
	  "231": { "code": "231", "label": "NOVO REPARTIMENTO", "state": "PA" },
	  "232": { "code": "232", "label": "ÓBIDOS", "state": "PA" },
	  "233": { "code": "233", "label": "OEIRAS DO PARÁ", "state": "PA" },
	  "234": { "code": "234", "label": "ORIXIMINÁ", "state": "PA" },
	  "235": { "code": "235", "label": "OURÉM", "state": "PA" },
	  "236": { "code": "236", "label": "OURILÂNDIA DO NORTE", "state": "PA" },
	  "237": { "code": "237", "label": "PACAJÁ", "state": "PA" },
	  "238": { "code": "238", "label": "PALESTINA DO PARÁ", "state": "PA" },
	  "239": { "code": "239", "label": "PARAGOMINAS", "state": "PA" },
	  "240": { "code": "240", "label": "PARAUAPEBAS", "state": "PA" },
	  "241": { "code": "241", "label": "PAU D'ARCO", "state": "PA" },
	  "242": { "code": "242", "label": "PEIXE-BOI", "state": "PA" },
	  "243": { "code": "243", "label": "PIÇARRA", "state": "PA" },
	  "244": { "code": "244", "label": "PLACAS", "state": "PA" },
	  "245": { "code": "245", "label": "PONTA DE PEDRAS", "state": "PA" },
	  "246": { "code": "246", "label": "PORTEL", "state": "PA" },
	  "247": { "code": "247", "label": "PORTO DE MOZ", "state": "PA" },
	  "248": { "code": "248", "label": "PRAINHA", "state": "PA" },
	  "249": { "code": "249", "label": "PRIMAVERA", "state": "PA" },
	  "250": { "code": "250", "label": "QUATIPURU", "state": "PA" },
	  "251": { "code": "251", "label": "REDENÇÃO", "state": "PA" },
	  "252": { "code": "252", "label": "RIO MARIA", "state": "PA" },
	  "253": { "code": "253", "label": "RONDON DO PARÁ", "state": "PA" },
	  "254": { "code": "254", "label": "RURÓPOLIS", "state": "PA" },
	  "255": { "code": "255", "label": "SALINÓPOLIS", "state": "PA" },
	  "256": { "code": "256", "label": "SALVATERRA", "state": "PA" },
	  "257": { "code": "257", "label": "SANTA BÁRBARA DO PARÁ", "state": "PA" },
	  "258": { "code": "258", "label": "SANTA CRUZ DO ARARI", "state": "PA" },
	  "259": { "code": "259", "label": "SANTA ISABEL DO PARÁ", "state": "PA" },
	  "260": { "code": "260", "label": "SANTA LUZIA DO PARÁ", "state": "PA" },
	  "261": { "code": "261", "label": "SANTA MARIA DAS BARREIRAS", "state": "PA" },
	  "262": { "code": "262", "label": "SANTA MARIA DO PARÁ", "state": "PA" },
	  "263": { "code": "263", "label": "SANTANA DO ARAGUAIA", "state": "PA" },
	  "264": { "code": "264", "label": "SANTARÉM", "state": "PA" },
	  "265": { "code": "265", "label": "SANTARÉM NOVO", "state": "PA" },
	  "266": { "code": "266", "label": "SANTO ANTÔNIO DO TAUÁ", "state": "PA" },
	  "267": { "code": "267", "label": "SÃO CAETANO DE ODIVELAS", "state": "PA" },
	  "268": { "code": "268", "label": "SÃO DOMINGOS DO ARAGUAIA", "state": "PA" },
	  "269": { "code": "269", "label": "SÃO DOMINGOS DO CAPIM", "state": "PA" },
	  "270": { "code": "270", "label": "SÃO FÉLIX DO XINGU", "state": "PA" },
	  "271": { "code": "271", "label": "SÃO FRANCISCO DO PARÁ", "state": "PA" },
	  "272": { "code": "272", "label": "SÃO GERALDO DO ARAGUAIA", "state": "PA" },
	  "273": { "code": "273", "label": "SÃO JOÃO DA PONTA", "state": "PA" },
	  "274": { "code": "274", "label": "SÃO JOÃO DE PIRABAS", "state": "PA" },
	  "275": { "code": "275", "label": "SÃO JOÃO DO ARAGUAIA", "state": "PA" },
	  "276": { "code": "276", "label": "SÃO MIGUEL DO GUAMÁ", "state": "PA" },
	  "277": { "code": "277", "label": "SÃO SEBASTIÃO DA BOA VISTA", "state": "PA" },
	  "278": { "code": "278", "label": "SAPUCAIA", "state": "PA" },
	  "279": { "code": "279", "label": "SENADOR JOSÉ PORFÍRIO", "state": "PA" },
	  "280": { "code": "280", "label": "SOURE", "state": "PA" },
	  "281": { "code": "281", "label": "TAILÂNDIA", "state": "PA" },
	  "282": { "code": "282", "label": "TERRA ALTA", "state": "PA" },
	  "283": { "code": "283", "label": "TERRA SANTA", "state": "PA" },
	  "284": { "code": "284", "label": "TOMÉ-AÇU", "state": "PA" },
	  "285": { "code": "285", "label": "TRACUATEUA", "state": "PA" },
	  "286": { "code": "286", "label": "TRAIRÃO", "state": "PA" },
	  "287": { "code": "287", "label": "TUCUMÃ", "state": "PA" },
	  "288": { "code": "288", "label": "TUCURUÍ", "state": "PA" },
	  "289": { "code": "289", "label": "ULIANÓPOLIS", "state": "PA" },
	  "290": { "code": "290", "label": "URUARÁ", "state": "PA" },
	  "291": { "code": "291", "label": "VIGIA", "state": "PA" },
	  "292": { "code": "292", "label": "VISEU", "state": "PA" },
	  "293": { "code": "293", "label": "VITÓRIA DO XINGU", "state": "PA" },
	  "294": { "code": "294", "label": "XINGUARA", "state": "PA" },
	  "295": { "code": "295", "label": "SERRA DO NAVIO", "state": "AP" },
	  "296": { "code": "296", "label": "AMAPÁ", "state": "AP" },
	  "297": { "code": "297", "label": "PEDRA BRANCA DO AMAPARI", "state": "AP" },
	  "298": { "code": "298", "label": "CALÇOENE", "state": "AP" },
	  "299": { "code": "299", "label": "CUTIAS", "state": "AP" },
	  "300": { "code": "300", "label": "FERREIRA GOMES", "state": "AP" },
	  "301": { "code": "301", "label": "ITAUBAL", "state": "AP" },
	  "302": { "code": "302", "label": "LARANJAL DO JARI", "state": "AP" },
	  "303": { "code": "303", "label": "MACAPÁ", "state": "AP" },
	  "304": { "code": "304", "label": "MAZAGÃO", "state": "AP" },
	  "305": { "code": "305", "label": "OIAPOQUE", "state": "AP" },
	  "306": { "code": "306", "label": "PORTO GRANDE", "state": "AP" },
	  "307": { "code": "307", "label": "PRACUÚBA", "state": "AP" },
	  "308": { "code": "308", "label": "SANTANA", "state": "AP" },
	  "309": { "code": "309", "label": "TARTARUGALZINHO", "state": "AP" },
	  "310": { "code": "310", "label": "VITÓRIA DO JARI", "state": "AP" },
	  "311": { "code": "311", "label": "ABREULÂNDIA", "state": "TO" },
	  "312": { "code": "312", "label": "AGUIARNÓPOLIS", "state": "TO" },
	  "313": { "code": "313", "label": "ALIANÇA DO TOCANTINS", "state": "TO" },
	  "314": { "code": "314", "label": "ALMAS", "state": "TO" },
	  "315": { "code": "315", "label": "ALVORADA", "state": "TO" },
	  "316": { "code": "316", "label": "ANANÁS", "state": "TO" },
	  "317": { "code": "317", "label": "ANGICO", "state": "TO" },
	  "318": { "code": "318", "label": "APARECIDA DO RIO NEGRO", "state": "TO" },
	  "319": { "code": "319", "label": "ARAGOMINAS", "state": "TO" },
	  "320": { "code": "320", "label": "ARAGUACEMA", "state": "TO" },
	  "321": { "code": "321", "label": "ARAGUAÇU", "state": "TO" },
	  "322": { "code": "322", "label": "ARAGUAÍNA", "state": "TO" },
	  "323": { "code": "323", "label": "ARAGUANÃ", "state": "TO" },
	  "324": { "code": "324", "label": "ARAGUATINS", "state": "TO" },
	  "325": { "code": "325", "label": "ARAPOEMA", "state": "TO" },
	  "326": { "code": "326", "label": "ARRAIAS", "state": "TO" },
	  "327": { "code": "327", "label": "AUGUSTINÓPOLIS", "state": "TO" },
	  "328": { "code": "328", "label": "AURORA DO TOCANTINS", "state": "TO" },
	  "329": { "code": "329", "label": "AXIXÁ DO TOCANTINS", "state": "TO" },
	  "330": { "code": "330", "label": "BABAÇULÂNDIA", "state": "TO" },
	  "331": { "code": "331", "label": "BANDEIRANTES DO TOCANTINS", "state": "TO" },
	  "332": { "code": "332", "label": "BARRA DO OURO", "state": "TO" },
	  "333": { "code": "333", "label": "BARROLÂNDIA", "state": "TO" },
	  "334": { "code": "334", "label": "BERNARDO SAYÃO", "state": "TO" },
	  "335": { "code": "335", "label": "BOM JESUS DO TOCANTINS", "state": "TO" },
	  "336": { "code": "336", "label": "BRASILÂNDIA DO TOCANTINS", "state": "TO" },
	  "337": { "code": "337", "label": "BREJINHO DE NAZARÉ", "state": "TO" },
	  "338": { "code": "338", "label": "BURITI DO TOCANTINS", "state": "TO" },
	  "339": { "code": "339", "label": "CACHOEIRINHA", "state": "TO" },
	  "340": { "code": "340", "label": "CAMPOS LINDOS", "state": "TO" },
	  "341": { "code": "341", "label": "CARIRI DO TOCANTINS", "state": "TO" },
	  "342": { "code": "342", "label": "CARMOLÂNDIA", "state": "TO" },
	  "343": { "code": "343", "label": "CARRASCO BONITO", "state": "TO" },
	  "344": { "code": "344", "label": "CASEARA", "state": "TO" },
	  "345": { "code": "345", "label": "CENTENÁRIO", "state": "TO" },
	  "346": { "code": "346", "label": "CHAPADA DE AREIA", "state": "TO" },
	  "347": { "code": "347", "label": "CHAPADA DA NATIVIDADE", "state": "TO" },
	  "348": { "code": "348", "label": "COLINAS DO TOCANTINS", "state": "TO" },
	  "349": { "code": "349", "label": "COMBINADO", "state": "TO" },
	  "350": { "code": "350", "label": "CONCEIÇÃO DO TOCANTINS", "state": "TO" },
	  "351": { "code": "351", "label": "COUTO MAGALHÃES", "state": "TO" },
	  "352": { "code": "352", "label": "CRISTALÂNDIA", "state": "TO" },
	  "353": { "code": "353", "label": "CRIXÁS DO TOCANTINS", "state": "TO" },
	  "354": { "code": "354", "label": "DARCINÓPOLIS", "state": "TO" },
	  "355": { "code": "355", "label": "DIANÓPOLIS", "state": "TO" },
	  "356": { "code": "356", "label": "DIVINÓPOLIS DO TOCANTINS", "state": "TO" },
	  "357": { "code": "357", "label": "DOIS IRMÃOS DO TOCANTINS", "state": "TO" },
	  "358": { "code": "358", "label": "DUERÉ", "state": "TO" },
	  "359": { "code": "359", "label": "ESPERANTINA", "state": "TO" },
	  "360": { "code": "360", "label": "FÁTIMA", "state": "TO" },
	  "361": { "code": "361", "label": "FIGUEIRÓPOLIS", "state": "TO" },
	  "362": { "code": "362", "label": "FILADÉLFIA", "state": "TO" },
	  "363": { "code": "363", "label": "FORMOSO DO ARAGUAIA", "state": "TO" },
	  "364": { "code": "364", "label": "FORTALEZA DO TABOCÃO", "state": "TO" },
	  "365": { "code": "365", "label": "GOIANORTE", "state": "TO" },
	  "366": { "code": "366", "label": "GOIATINS", "state": "TO" },
	  "367": { "code": "367", "label": "GUARAÍ", "state": "TO" },
	  "368": { "code": "368", "label": "GURUPI", "state": "TO" },
	  "369": { "code": "369", "label": "IPUEIRAS", "state": "TO" },
	  "370": { "code": "370", "label": "ITACAJÁ", "state": "TO" },
	  "371": { "code": "371", "label": "ITAGUATINS", "state": "TO" },
	  "372": { "code": "372", "label": "ITAPIRATINS", "state": "TO" },
	  "373": { "code": "373", "label": "ITAPORÃ DO TOCANTINS", "state": "TO" },
	  "374": { "code": "374", "label": "JAÚ DO TOCANTINS", "state": "TO" },
	  "375": { "code": "375", "label": "JUARINA", "state": "TO" },
	  "376": { "code": "376", "label": "LAGOA DA CONFUSÃO", "state": "TO" },
	  "377": { "code": "377", "label": "LAGOA DO TOCANTINS", "state": "TO" },
	  "378": { "code": "378", "label": "LAJEADO", "state": "TO" },
	  "379": { "code": "379", "label": "LAVANDEIRA", "state": "TO" },
	  "380": { "code": "380", "label": "LIZARDA", "state": "TO" },
	  "381": { "code": "381", "label": "LUZINÓPOLIS", "state": "TO" },
	  "382": { "code": "382", "label": "MARIANÓPOLIS DO TOCANTINS", "state": "TO" },
	  "383": { "code": "383", "label": "MATEIROS", "state": "TO" },
	  "384": { "code": "384", "label": "MAURILÂNDIA DO TOCANTINS", "state": "TO" },
	  "385": { "code": "385", "label": "MIRACEMA DO TOCANTINS", "state": "TO" },
	  "386": { "code": "386", "label": "MIRANORTE", "state": "TO" },
	  "387": { "code": "387", "label": "MONTE DO CARMO", "state": "TO" },
	  "388": { "code": "388", "label": "MONTE SANTO DO TOCANTINS", "state": "TO" },
	  "389": { "code": "389", "label": "PALMEIRAS DO TOCANTINS", "state": "TO" },
	  "390": { "code": "390", "label": "MURICILÂNDIA", "state": "TO" },
	  "391": { "code": "391", "label": "NATIVIDADE", "state": "TO" },
	  "392": { "code": "392", "label": "NAZARÉ", "state": "TO" },
	  "393": { "code": "393", "label": "NOVA OLINDA", "state": "TO" },
	  "394": { "code": "394", "label": "NOVA ROSALÂNDIA", "state": "TO" },
	  "395": { "code": "395", "label": "NOVO ACORDO", "state": "TO" },
	  "396": { "code": "396", "label": "NOVO ALEGRE", "state": "TO" },
	  "397": { "code": "397", "label": "NOVO JARDIM", "state": "TO" },
	  "398": { "code": "398", "label": "OLIVEIRA DE FÁTIMA", "state": "TO" },
	  "399": { "code": "399", "label": "PALMEIRANTE", "state": "TO" },
	  "400": { "code": "400", "label": "PALMEIRÓPOLIS", "state": "TO" },
	  "401": { "code": "401", "label": "PARAÍSO DO TOCANTINS", "state": "TO" },
	  "402": { "code": "402", "label": "PARANÃ", "state": "TO" },
	  "403": { "code": "403", "label": "PAU D'ARCO", "state": "TO" },
	  "404": { "code": "404", "label": "PEDRO AFONSO", "state": "TO" },
	  "405": { "code": "405", "label": "PEIXE", "state": "TO" },
	  "406": { "code": "406", "label": "PEQUIZEIRO", "state": "TO" },
	  "407": { "code": "407", "label": "COLMÉIA", "state": "TO" },
	  "408": { "code": "408", "label": "PINDORAMA DO TOCANTINS", "state": "TO" },
	  "409": { "code": "409", "label": "PIRAQUÊ", "state": "TO" },
	  "410": { "code": "410", "label": "PIUM", "state": "TO" },
	  "411": { "code": "411", "label": "PONTE ALTA DO BOM JESUS", "state": "TO" },
	  "412": { "code": "412", "label": "PONTE ALTA DO TOCANTINS", "state": "TO" },
	  "413": { "code": "413", "label": "PORTO ALEGRE DO TOCANTINS", "state": "TO" },
	  "414": { "code": "414", "label": "PORTO NACIONAL", "state": "TO" },
	  "415": { "code": "415", "label": "PRAIA NORTE", "state": "TO" },
	  "416": { "code": "416", "label": "PRESIDENTE KENNEDY", "state": "TO" },
	  "417": { "code": "417", "label": "PUGMIL", "state": "TO" },
	  "418": { "code": "418", "label": "RECURSOLÂNDIA", "state": "TO" },
	  "419": { "code": "419", "label": "RIACHINHO", "state": "TO" },
	  "420": { "code": "420", "label": "RIO DA CONCEIÇÃO", "state": "TO" },
	  "421": { "code": "421", "label": "RIO DOS BOIS", "state": "TO" },
	  "422": { "code": "422", "label": "RIO SONO", "state": "TO" },
	  "423": { "code": "423", "label": "SAMPAIO", "state": "TO" },
	  "424": { "code": "424", "label": "SANDOLÂNDIA", "state": "TO" },
	  "425": { "code": "425", "label": "SANTA FÉ DO ARAGUAIA", "state": "TO" },
	  "426": { "code": "426", "label": "SANTA MARIA DO TOCANTINS", "state": "TO" },
	  "427": { "code": "427", "label": "SANTA RITA DO TOCANTINS", "state": "TO" },
	  "428": { "code": "428", "label": "SANTA ROSA DO TOCANTINS", "state": "TO" },
	  "429": { "code": "429", "label": "SANTA TEREZA DO TOCANTINS", "state": "TO" },
	  "430": { "code": "430", "label": "SANTA TEREZINHA DO TOCANTINS", "state": "TO" },
	  "431": { "code": "431", "label": "SÃO BENTO DO TOCANTINS", "state": "TO" },
	  "432": { "code": "432", "label": "SÃO FÉLIX DO TOCANTINS", "state": "TO" },
	  "433": { "code": "433", "label": "SÃO MIGUEL DO TOCANTINS", "state": "TO" },
	  "434": { "code": "434", "label": "SÃO SALVADOR DO TOCANTINS", "state": "TO" },
	  "435": { "code": "435", "label": "SÃO SEBASTIÃO DO TOCANTINS", "state": "TO" },
	  "436": { "code": "436", "label": "SÃO VALÉRIO", "state": "TO" },
	  "437": { "code": "437", "label": "SILVANÓPOLIS", "state": "TO" },
	  "438": { "code": "438", "label": "SÍTIO NOVO DO TOCANTINS", "state": "TO" },
	  "439": { "code": "439", "label": "SUCUPIRA", "state": "TO" },
	  "440": { "code": "440", "label": "TAGUATINGA", "state": "TO" },
	  "441": { "code": "441", "label": "TAIPAS DO TOCANTINS", "state": "TO" },
	  "442": { "code": "442", "label": "TALISMÃ", "state": "TO" },
	  "443": { "code": "443", "label": "PALMAS", "state": "TO" },
	  "444": { "code": "444", "label": "TOCANTÍNIA", "state": "TO" },
	  "445": { "code": "445", "label": "TOCANTINÓPOLIS", "state": "TO" },
	  "446": { "code": "446", "label": "TUPIRAMA", "state": "TO" },
	  "447": { "code": "447", "label": "TUPIRATINS", "state": "TO" },
	  "448": { "code": "448", "label": "WANDERLÂNDIA", "state": "TO" },
	  "449": { "code": "449", "label": "XAMBIOÁ", "state": "TO" },
	  "450": { "code": "450", "label": "AÇAILÂNDIA", "state": "MA" },
	  "451": { "code": "451", "label": "AFONSO CUNHA", "state": "MA" },
	  "452": { "code": "452", "label": "ÁGUA DOCE DO MARANHÃO", "state": "MA" },
	  "453": { "code": "453", "label": "ALCÂNTARA", "state": "MA" },
	  "454": { "code": "454", "label": "ALDEIAS ALTAS", "state": "MA" },
	  "455": { "code": "455", "label": "ALTAMIRA DO MARANHÃO", "state": "MA" },
	  "456": { "code": "456", "label": "ALTO ALEGRE DO MARANHÃO", "state": "MA" },
	  "457": { "code": "457", "label": "ALTO ALEGRE DO PINDARÉ", "state": "MA" },
	  "458": { "code": "458", "label": "ALTO PARNAÍBA", "state": "MA" },
	  "459": { "code": "459", "label": "AMAPÁ DO MARANHÃO", "state": "MA" },
	  "460": { "code": "460", "label": "AMARANTE DO MARANHÃO", "state": "MA" },
	  "461": { "code": "461", "label": "ANAJATUBA", "state": "MA" },
	  "462": { "code": "462", "label": "ANAPURUS", "state": "MA" },
	  "463": { "code": "463", "label": "APICUM-AÇU", "state": "MA" },
	  "464": { "code": "464", "label": "ARAGUANÃ", "state": "MA" },
	  "465": { "code": "465", "label": "ARAIOSES", "state": "MA" },
	  "466": { "code": "466", "label": "ARAME", "state": "MA" },
	  "467": { "code": "467", "label": "ARARI", "state": "MA" },
	  "468": { "code": "468", "label": "AXIXÁ", "state": "MA" },
	  "469": { "code": "469", "label": "BACABAL", "state": "MA" },
	  "470": { "code": "470", "label": "BACABEIRA", "state": "MA" },
	  "471": { "code": "471", "label": "BACURI", "state": "MA" },
	  "472": { "code": "472", "label": "BACURITUBA", "state": "MA" },
	  "473": { "code": "473", "label": "BALSAS", "state": "MA" },
	  "474": { "code": "474", "label": "BARÃO DE GRAJAÚ", "state": "MA" },
	  "475": { "code": "475", "label": "BARRA DO CORDA", "state": "MA" },
	  "476": { "code": "476", "label": "BARREIRINHAS", "state": "MA" },
	  "477": { "code": "477", "label": "BELÁGUA", "state": "MA" },
	  "478": { "code": "478", "label": "BELA VISTA DO MARANHÃO", "state": "MA" },
	  "479": { "code": "479", "label": "BENEDITO LEITE", "state": "MA" },
	  "480": { "code": "480", "label": "BEQUIMÃO", "state": "MA" },
	  "481": { "code": "481", "label": "BERNARDO DO MEARIM", "state": "MA" },
	  "482": { "code": "482", "label": "BOA VISTA DO GURUPI", "state": "MA" },
	  "483": { "code": "483", "label": "BOM JARDIM", "state": "MA" },
	  "484": { "code": "484", "label": "BOM JESUS DAS SELVAS", "state": "MA" },
	  "485": { "code": "485", "label": "BOM LUGAR", "state": "MA" },
	  "486": { "code": "486", "label": "BREJO", "state": "MA" },
	  "487": { "code": "487", "label": "BREJO DE AREIA", "state": "MA" },
	  "488": { "code": "488", "label": "BURITI", "state": "MA" },
	  "489": { "code": "489", "label": "BURITI BRAVO", "state": "MA" },
	  "490": { "code": "490", "label": "BURITICUPU", "state": "MA" },
	  "491": { "code": "491", "label": "BURITIRANA", "state": "MA" },
	  "492": { "code": "492", "label": "CACHOEIRA GRANDE", "state": "MA" },
	  "493": { "code": "493", "label": "CAJAPIÓ", "state": "MA" },
	  "494": { "code": "494", "label": "CAJARI", "state": "MA" },
	  "495": { "code": "495", "label": "CAMPESTRE DO MARANHÃO", "state": "MA" },
	  "496": { "code": "496", "label": "CÂNDIDO MENDES", "state": "MA" },
	  "497": { "code": "497", "label": "CANTANHEDE", "state": "MA" },
	  "498": { "code": "498", "label": "CAPINZAL DO NORTE", "state": "MA" },
	  "499": { "code": "499", "label": "CAROLINA", "state": "MA" },
	  "500": { "code": "500", "label": "CARUTAPERA", "state": "MA" },
	  "501": { "code": "501", "label": "CAXIAS", "state": "MA" },
	  "502": { "code": "502", "label": "CEDRAL", "state": "MA" },
	  "503": { "code": "503", "label": "CENTRAL DO MARANHÃO", "state": "MA" },
	  "504": { "code": "504", "label": "CENTRO DO GUILHERME", "state": "MA" },
	  "505": { "code": "505", "label": "CENTRO NOVO DO MARANHÃO", "state": "MA" },
	  "506": { "code": "506", "label": "CHAPADINHA", "state": "MA" },
	  "507": { "code": "507", "label": "CIDELÂNDIA", "state": "MA" },
	  "508": { "code": "508", "label": "CODÓ", "state": "MA" },
	  "509": { "code": "509", "label": "COELHO NETO", "state": "MA" },
	  "510": { "code": "510", "label": "COLINAS", "state": "MA" },
	  "511": { "code": "511", "label": "CONCEIÇÃO DO LAGO-AÇU", "state": "MA" },
	  "512": { "code": "512", "label": "COROATÁ", "state": "MA" },
	  "513": { "code": "513", "label": "CURURUPU", "state": "MA" },
	  "514": { "code": "514", "label": "DAVINÓPOLIS", "state": "MA" },
	  "515": { "code": "515", "label": "DOM PEDRO", "state": "MA" },
	  "516": { "code": "516", "label": "DUQUE BACELAR", "state": "MA" },
	  "517": { "code": "517", "label": "ESPERANTINÓPOLIS", "state": "MA" },
	  "518": { "code": "518", "label": "ESTREITO", "state": "MA" },
	  "519": { "code": "519", "label": "FEIRA NOVA DO MARANHÃO", "state": "MA" },
	  "520": { "code": "520", "label": "FERNANDO FALCÃO", "state": "MA" },
	  "521": { "code": "521", "label": "FORMOSA DA SERRA NEGRA", "state": "MA" },
	  "522": { "code": "522", "label": "FORTALEZA DOS NOGUEIRAS", "state": "MA" },
	  "523": { "code": "523", "label": "FORTUNA", "state": "MA" },
	  "524": { "code": "524", "label": "GODOFREDO VIANA", "state": "MA" },
	  "525": { "code": "525", "label": "GONÇALVES DIAS", "state": "MA" },
	  "526": { "code": "526", "label": "GOVERNADOR ARCHER", "state": "MA" },
	  "527": { "code": "527", "label": "GOVERNADOR EDISON LOBÃO", "state": "MA" },
	  "528": { "code": "528", "label": "GOVERNADOR EUGÊNIO BARROS", "state": "MA" },
	  "529": { "code": "529", "label": "GOVERNADOR LUIZ ROCHA", "state": "MA" },
	  "530": { "code": "530", "label": "GOVERNADOR NEWTON BELLO", "state": "MA" },
	  "531": { "code": "531", "label": "GOVERNADOR NUNES FREIRE", "state": "MA" },
	  "532": { "code": "532", "label": "GRAÇA ARANHA", "state": "MA" },
	  "533": { "code": "533", "label": "GRAJAÚ", "state": "MA" },
	  "534": { "code": "534", "label": "GUIMARÃES", "state": "MA" },
	  "535": { "code": "535", "label": "HUMBERTO DE CAMPOS", "state": "MA" },
	  "536": { "code": "536", "label": "ICATU", "state": "MA" },
	  "537": { "code": "537", "label": "IGARAPÉ DO MEIO", "state": "MA" },
	  "538": { "code": "538", "label": "IGARAPÉ GRANDE", "state": "MA" },
	  "539": { "code": "539", "label": "IMPERATRIZ", "state": "MA" },
	  "540": { "code": "540", "label": "ITAIPAVA DO GRAJAÚ", "state": "MA" },
	  "541": { "code": "541", "label": "ITAPECURU MIRIM", "state": "MA" },
	  "542": { "code": "542", "label": "ITINGA DO MARANHÃO", "state": "MA" },
	  "543": { "code": "543", "label": "JATOBÁ", "state": "MA" },
	  "544": { "code": "544", "label": "JENIPAPO DOS VIEIRAS", "state": "MA" },
	  "545": { "code": "545", "label": "JOÃO LISBOA", "state": "MA" },
	  "546": { "code": "546", "label": "JOSELÂNDIA", "state": "MA" },
	  "547": { "code": "547", "label": "JUNCO DO MARANHÃO", "state": "MA" },
	  "548": { "code": "548", "label": "LAGO DA PEDRA", "state": "MA" },
	  "549": { "code": "549", "label": "LAGO DO JUNCO", "state": "MA" },
	  "550": { "code": "550", "label": "LAGO VERDE", "state": "MA" },
	  "551": { "code": "551", "label": "LAGOA DO MATO", "state": "MA" },
	  "552": { "code": "552", "label": "LAGO DOS RODRIGUES", "state": "MA" },
	  "553": { "code": "553", "label": "LAGOA GRANDE DO MARANHÃO", "state": "MA" },
	  "554": { "code": "554", "label": "LAJEADO NOVO", "state": "MA" },
	  "555": { "code": "555", "label": "LIMA CAMPOS", "state": "MA" },
	  "556": { "code": "556", "label": "LORETO", "state": "MA" },
	  "557": { "code": "557", "label": "LUÍS DOMINGUES", "state": "MA" },
	  "558": { "code": "558", "label": "MAGALHÃES DE ALMEIDA", "state": "MA" },
	  "559": { "code": "559", "label": "MARACAÇUMÉ", "state": "MA" },
	  "560": { "code": "560", "label": "MARAJÁ DO SENA", "state": "MA" },
	  "561": { "code": "561", "label": "MARANHÃOZINHO", "state": "MA" },
	  "562": { "code": "562", "label": "MATA ROMA", "state": "MA" },
	  "563": { "code": "563", "label": "MATINHA", "state": "MA" },
	  "564": { "code": "564", "label": "MATÕES", "state": "MA" },
	  "565": { "code": "565", "label": "MATÕES DO NORTE", "state": "MA" },
	  "566": { "code": "566", "label": "MILAGRES DO MARANHÃO", "state": "MA" },
	  "567": { "code": "567", "label": "MIRADOR", "state": "MA" },
	  "568": { "code": "568", "label": "MIRANDA DO NORTE", "state": "MA" },
	  "569": { "code": "569", "label": "MIRINZAL", "state": "MA" },
	  "570": { "code": "570", "label": "MONÇÃO", "state": "MA" },
	  "571": { "code": "571", "label": "MONTES ALTOS", "state": "MA" },
	  "572": { "code": "572", "label": "MORROS", "state": "MA" },
	  "573": { "code": "573", "label": "NINA RODRIGUES", "state": "MA" },
	  "574": { "code": "574", "label": "NOVA COLINAS", "state": "MA" },
	  "575": { "code": "575", "label": "NOVA IORQUE", "state": "MA" },
	  "576": { "code": "576", "label": "NOVA OLINDA DO MARANHÃO", "state": "MA" },
	  "577": { "code": "577", "label": "OLHO D'ÁGUA DAS CUNHÃS", "state": "MA" },
	  "578": { "code": "578", "label": "OLINDA NOVA DO MARANHÃO", "state": "MA" },
	  "579": { "code": "579", "label": "PAÇO DO LUMIAR", "state": "MA" },
	  "580": { "code": "580", "label": "PALMEIRÂNDIA", "state": "MA" },
	  "581": { "code": "581", "label": "PARAIBANO", "state": "MA" },
	  "582": { "code": "582", "label": "PARNARAMA", "state": "MA" },
	  "583": { "code": "583", "label": "PASSAGEM FRANCA", "state": "MA" },
	  "584": { "code": "584", "label": "PASTOS BONS", "state": "MA" },
	  "585": { "code": "585", "label": "PAULINO NEVES", "state": "MA" },
	  "586": { "code": "586", "label": "PAULO RAMOS", "state": "MA" },
	  "587": { "code": "587", "label": "PEDREIRAS", "state": "MA" },
	  "588": { "code": "588", "label": "PEDRO DO ROSÁRIO", "state": "MA" },
	  "589": { "code": "589", "label": "PENALVA", "state": "MA" },
	  "590": { "code": "590", "label": "PERI MIRIM", "state": "MA" },
	  "591": { "code": "591", "label": "PERITORÓ", "state": "MA" },
	  "592": { "code": "592", "label": "PINDARÉ-MIRIM", "state": "MA" },
	  "593": { "code": "593", "label": "PINHEIRO", "state": "MA" },
	  "594": { "code": "594", "label": "PIO XII", "state": "MA" },
	  "595": { "code": "595", "label": "PIRAPEMAS", "state": "MA" },
	  "596": { "code": "596", "label": "POÇÃO DE PEDRAS", "state": "MA" },
	  "597": { "code": "597", "label": "PORTO FRANCO", "state": "MA" },
	  "598": { "code": "598", "label": "PORTO RICO DO MARANHÃO", "state": "MA" },
	  "599": { "code": "599", "label": "PRESIDENTE DUTRA", "state": "MA" },
	  "600": { "code": "600", "label": "PRESIDENTE JUSCELINO", "state": "MA" },
	  "601": { "code": "601", "label": "PRESIDENTE MÉDICI", "state": "MA" },
	  "602": { "code": "602", "label": "PRESIDENTE SARNEY", "state": "MA" },
	  "603": { "code": "603", "label": "PRESIDENTE VARGAS", "state": "MA" },
	  "604": { "code": "604", "label": "PRIMEIRA CRUZ", "state": "MA" },
	  "605": { "code": "605", "label": "RAPOSA", "state": "MA" },
	  "606": { "code": "606", "label": "RIACHÃO", "state": "MA" },
	  "607": { "code": "607", "label": "RIBAMAR FIQUENE", "state": "MA" },
	  "608": { "code": "608", "label": "ROSÁRIO", "state": "MA" },
	  "609": { "code": "609", "label": "SAMBAÍBA", "state": "MA" },
	  "610": { "code": "610", "label": "SANTA FILOMENA DO MARANHÃO", "state": "MA" },
	  "611": { "code": "611", "label": "SANTA HELENA", "state": "MA" },
	  "612": { "code": "612", "label": "SANTA INÊS", "state": "MA" },
	  "613": { "code": "613", "label": "SANTA LUZIA", "state": "MA" },
	  "614": { "code": "614", "label": "SANTA LUZIA DO PARUÁ", "state": "MA" },
	  "615": { "code": "615", "label": "SANTA QUITÉRIA DO MARANHÃO", "state": "MA" },
	  "616": { "code": "616", "label": "SANTA RITA", "state": "MA" },
	  "617": { "code": "617", "label": "SANTANA DO MARANHÃO", "state": "MA" },
	  "618": { "code": "618", "label": "SANTO AMARO DO MARANHÃO", "state": "MA" },
	  "619": { "code": "619", "label": "SANTO ANTÔNIO DOS LOPES", "state": "MA" },
	  "620": { "code": "620", "label": "SÃO BENEDITO DO RIO PRETO", "state": "MA" },
	  "621": { "code": "621", "label": "SÃO BENTO", "state": "MA" },
	  "622": { "code": "622", "label": "SÃO BERNARDO", "state": "MA" },
	  "623": { "code": "623", "label": "SÃO DOMINGOS DO AZEITÃO", "state": "MA" },
	  "624": { "code": "624", "label": "SÃO DOMINGOS DO MARANHÃO", "state": "MA" },
	  "625": { "code": "625", "label": "SÃO FÉLIX DE BALSAS", "state": "MA" },
	  "626": { "code": "626", "label": "SÃO FRANCISCO DO BREJÃO", "state": "MA" },
	  "627": { "code": "627", "label": "SÃO FRANCISCO DO MARANHÃO", "state": "MA" },
	  "628": { "code": "628", "label": "SÃO JOÃO BATISTA", "state": "MA" },
	  "629": { "code": "629", "label": "SÃO JOÃO DO CARÚ", "state": "MA" },
	  "630": { "code": "630", "label": "SÃO JOÃO DO PARAÍSO", "state": "MA" },
	  "631": { "code": "631", "label": "SÃO JOÃO DO SOTER", "state": "MA" },
	  "632": { "code": "632", "label": "SÃO JOÃO DOS PATOS", "state": "MA" },
	  "633": { "code": "633", "label": "SÃO JOSÉ DE RIBAMAR", "state": "MA" },
	  "634": { "code": "634", "label": "SÃO JOSÉ DOS BASÍLIOS", "state": "MA" },
	  "635": { "code": "635", "label": "SÃO LUÍS", "state": "MA" },
	  "636": { "code": "636", "label": "SÃO LUÍS GONZAGA DO MARANHÃO", "state": "MA" },
	  "637": { "code": "637", "label": "SÃO MATEUS DO MARANHÃO", "state": "MA" },
	  "638": { "code": "638", "label": "SÃO PEDRO DA ÁGUA BRANCA", "state": "MA" },
	  "639": { "code": "639", "label": "SÃO PEDRO DOS CRENTES", "state": "MA" },
	  "640": { "code": "640", "label": "SÃO RAIMUNDO DAS MANGABEIRAS", "state": "MA" },
	  "641": { "code": "641", "label": "SÃO RAIMUNDO DO DOCA BEZERRA", "state": "MA" },
	  "642": { "code": "642", "label": "SÃO ROBERTO", "state": "MA" },
	  "643": { "code": "643", "label": "SÃO VICENTE FERRER", "state": "MA" },
	  "644": { "code": "644", "label": "SATUBINHA", "state": "MA" },
	  "645": { "code": "645", "label": "SENADOR ALEXANDRE COSTA", "state": "MA" },
	  "646": { "code": "646", "label": "SENADOR LA ROCQUE", "state": "MA" },
	  "647": { "code": "647", "label": "SERRANO DO MARANHÃO", "state": "MA" },
	  "648": { "code": "648", "label": "SÍTIO NOVO", "state": "MA" },
	  "649": { "code": "649", "label": "SUCUPIRA DO NORTE", "state": "MA" },
	  "650": { "code": "650", "label": "SUCUPIRA DO RIACHÃO", "state": "MA" },
	  "651": { "code": "651", "label": "TASSO FRAGOSO", "state": "MA" },
	  "652": { "code": "652", "label": "TIMBIRAS", "state": "MA" },
	  "653": { "code": "653", "label": "TIMON", "state": "MA" },
	  "654": { "code": "654", "label": "TRIZIDELA DO VALE", "state": "MA" },
	  "655": { "code": "655", "label": "TUFILÂNDIA", "state": "MA" },
	  "656": { "code": "656", "label": "TUNTUM", "state": "MA" },
	  "657": { "code": "657", "label": "TURIAÇU", "state": "MA" },
	  "658": { "code": "658", "label": "TURILÂNDIA", "state": "MA" },
	  "659": { "code": "659", "label": "TUTÓIA", "state": "MA" },
	  "660": { "code": "660", "label": "URBANO SANTOS", "state": "MA" },
	  "661": { "code": "661", "label": "VARGEM GRANDE", "state": "MA" },
	  "662": { "code": "662", "label": "VIANA", "state": "MA" },
	  "663": { "code": "663", "label": "VILA NOVA DOS MARTÍRIOS", "state": "MA" },
	  "664": { "code": "664", "label": "VITÓRIA DO MEARIM", "state": "MA" },
	  "665": { "code": "665", "label": "VITORINO FREIRE", "state": "MA" },
	  "666": { "code": "666", "label": "ZÉ DOCA", "state": "MA" },
	  "667": { "code": "667", "label": "ACAUÃ", "state": "PI" },
	  "668": { "code": "668", "label": "AGRICOLÂNDIA", "state": "PI" },
	  "669": { "code": "669", "label": "ÁGUA BRANCA", "state": "PI" },
	  "670": { "code": "670", "label": "ALAGOINHA DO PIAUÍ", "state": "PI" },
	  "671": { "code": "671", "label": "ALEGRETE DO PIAUÍ", "state": "PI" },
	  "672": { "code": "672", "label": "ALTO LONGÁ", "state": "PI" },
	  "673": { "code": "673", "label": "ALTOS", "state": "PI" },
	  "674": { "code": "674", "label": "ALVORADA DO GURGUÉIA", "state": "PI" },
	  "675": { "code": "675", "label": "AMARANTE", "state": "PI" },
	  "676": { "code": "676", "label": "ANGICAL DO PIAUÍ", "state": "PI" },
	  "677": { "code": "677", "label": "ANÍSIO DE ABREU", "state": "PI" },
	  "678": { "code": "678", "label": "ANTÔNIO ALMEIDA", "state": "PI" },
	  "679": { "code": "679", "label": "AROAZES", "state": "PI" },
	  "680": { "code": "680", "label": "AROEIRAS DO ITAIM", "state": "PI" },
	  "681": { "code": "681", "label": "ARRAIAL", "state": "PI" },
	  "682": { "code": "682", "label": "ASSUNÇÃO DO PIAUÍ", "state": "PI" },
	  "683": { "code": "683", "label": "AVELINO LOPES", "state": "PI" },
	  "684": { "code": "684", "label": "BAIXA GRANDE DO RIBEIRO", "state": "PI" },
	  "685": { "code": "685", "label": "BARRA D'ALCÂNTARA", "state": "PI" },
	  "686": { "code": "686", "label": "BARRAS", "state": "PI" },
	  "687": { "code": "687", "label": "BARREIRAS DO PIAUÍ", "state": "PI" },
	  "688": { "code": "688", "label": "BARRO DURO", "state": "PI" },
	  "689": { "code": "689", "label": "BATALHA", "state": "PI" },
	  "690": { "code": "690", "label": "BELA VISTA DO PIAUÍ", "state": "PI" },
	  "691": { "code": "691", "label": "BELÉM DO PIAUÍ", "state": "PI" },
	  "692": { "code": "692", "label": "BENEDITINOS", "state": "PI" },
	  "693": { "code": "693", "label": "BERTOLÍNIA", "state": "PI" },
	  "694": { "code": "694", "label": "BETÂNIA DO PIAUÍ", "state": "PI" },
	  "695": { "code": "695", "label": "BOA HORA", "state": "PI" },
	  "696": { "code": "696", "label": "BOCAINA", "state": "PI" },
	  "697": { "code": "697", "label": "BOM JESUS", "state": "PI" },
	  "698": { "code": "698", "label": "BOM PRINCÍPIO DO PIAUÍ", "state": "PI" },
	  "699": { "code": "699", "label": "BONFIM DO PIAUÍ", "state": "PI" },
	  "700": { "code": "700", "label": "BOQUEIRÃO DO PIAUÍ", "state": "PI" },
	  "701": { "code": "701", "label": "BRASILEIRA", "state": "PI" },
	  "702": { "code": "702", "label": "BREJO DO PIAUÍ", "state": "PI" },
	  "703": { "code": "703", "label": "BURITI DOS LOPES", "state": "PI" },
	  "704": { "code": "704", "label": "BURITI DOS MONTES", "state": "PI" },
	  "705": { "code": "705", "label": "CABECEIRAS DO PIAUÍ", "state": "PI" },
	  "706": { "code": "706", "label": "CAJAZEIRAS DO PIAUÍ", "state": "PI" },
	  "707": { "code": "707", "label": "CAJUEIRO DA PRAIA", "state": "PI" },
	  "708": { "code": "708", "label": "CALDEIRÃO GRANDE DO PIAUÍ", "state": "PI" },
	  "709": { "code": "709", "label": "CAMPINAS DO PIAUÍ", "state": "PI" },
	  "710": { "code": "710", "label": "CAMPO ALEGRE DO FIDALGO", "state": "PI" },
	  "711": { "code": "711", "label": "CAMPO GRANDE DO PIAUÍ", "state": "PI" },
	  "712": { "code": "712", "label": "CAMPO LARGO DO PIAUÍ", "state": "PI" },
	  "713": { "code": "713", "label": "CAMPO MAIOR", "state": "PI" },
	  "714": { "code": "714", "label": "CANAVIEIRA", "state": "PI" },
	  "715": { "code": "715", "label": "CANTO DO BURITI", "state": "PI" },
	  "716": { "code": "716", "label": "CAPITÃO DE CAMPOS", "state": "PI" },
	  "717": { "code": "717", "label": "CAPITÃO GERVÁSIO OLIVEIRA", "state": "PI" },
	  "718": { "code": "718", "label": "CARACOL", "state": "PI" },
	  "719": { "code": "719", "label": "CARAÚBAS DO PIAUÍ", "state": "PI" },
	  "720": { "code": "720", "label": "CARIDADE DO PIAUÍ", "state": "PI" },
	  "721": { "code": "721", "label": "CASTELO DO PIAUÍ", "state": "PI" },
	  "722": { "code": "722", "label": "CAXINGÓ", "state": "PI" },
	  "723": { "code": "723", "label": "COCAL", "state": "PI" },
	  "724": { "code": "724", "label": "COCAL DE TELHA", "state": "PI" },
	  "725": { "code": "725", "label": "COCAL DOS ALVES", "state": "PI" },
	  "726": { "code": "726", "label": "COIVARAS", "state": "PI" },
	  "727": { "code": "727", "label": "COLÔNIA DO GURGUÉIA", "state": "PI" },
	  "728": { "code": "728", "label": "COLÔNIA DO PIAUÍ", "state": "PI" },
	  "729": { "code": "729", "label": "CONCEIÇÃO DO CANINDÉ", "state": "PI" },
	  "730": { "code": "730", "label": "CORONEL JOSÉ DIAS", "state": "PI" },
	  "731": { "code": "731", "label": "CORRENTE", "state": "PI" },
	  "732": { "code": "732", "label": "CRISTALÂNDIA DO PIAUÍ", "state": "PI" },
	  "733": { "code": "733", "label": "CRISTINO CASTRO", "state": "PI" },
	  "734": { "code": "734", "label": "CURIMATÁ", "state": "PI" },
	  "735": { "code": "735", "label": "CURRAIS", "state": "PI" },
	  "736": { "code": "736", "label": "CURRALINHOS", "state": "PI" },
	  "737": { "code": "737", "label": "CURRAL NOVO DO PIAUÍ", "state": "PI" },
	  "738": { "code": "738", "label": "DEMERVAL LOBÃO", "state": "PI" },
	  "739": { "code": "739", "label": "DIRCEU ARCOVERDE", "state": "PI" },
	  "740": { "code": "740", "label": "DOM EXPEDITO LOPES", "state": "PI" },
	  "741": { "code": "741", "label": "DOMINGOS MOURÃO", "state": "PI" },
	  "742": { "code": "742", "label": "DOM INOCÊNCIO", "state": "PI" },
	  "743": { "code": "743", "label": "ELESBÃO VELOSO", "state": "PI" },
	  "744": { "code": "744", "label": "ELISEU MARTINS", "state": "PI" },
	  "745": { "code": "745", "label": "ESPERANTINA", "state": "PI" },
	  "746": { "code": "746", "label": "FARTURA DO PIAUÍ", "state": "PI" },
	  "747": { "code": "747", "label": "FLORES DO PIAUÍ", "state": "PI" },
	  "748": { "code": "748", "label": "FLORESTA DO PIAUÍ", "state": "PI" },
	  "749": { "code": "749", "label": "FLORIANO", "state": "PI" },
	  "750": { "code": "750", "label": "FRANCINÓPOLIS", "state": "PI" },
	  "751": { "code": "751", "label": "FRANCISCO AYRES", "state": "PI" },
	  "752": { "code": "752", "label": "FRANCISCO MACEDO", "state": "PI" },
	  "753": { "code": "753", "label": "FRANCISCO SANTOS", "state": "PI" },
	  "754": { "code": "754", "label": "FRONTEIRAS", "state": "PI" },
	  "755": { "code": "755", "label": "GEMINIANO", "state": "PI" },
	  "756": { "code": "756", "label": "GILBUÉS", "state": "PI" },
	  "757": { "code": "757", "label": "GUADALUPE", "state": "PI" },
	  "758": { "code": "758", "label": "GUARIBAS", "state": "PI" },
	  "759": { "code": "759", "label": "HUGO NAPOLEÃO", "state": "PI" },
	  "760": { "code": "760", "label": "ILHA GRANDE", "state": "PI" },
	  "761": { "code": "761", "label": "INHUMA", "state": "PI" },
	  "762": { "code": "762", "label": "IPIRANGA DO PIAUÍ", "state": "PI" },
	  "763": { "code": "763", "label": "ISAÍAS COELHO", "state": "PI" },
	  "764": { "code": "764", "label": "ITAINÓPOLIS", "state": "PI" },
	  "765": { "code": "765", "label": "ITAUEIRA", "state": "PI" },
	  "766": { "code": "766", "label": "JACOBINA DO PIAUÍ", "state": "PI" },
	  "767": { "code": "767", "label": "JAICÓS", "state": "PI" },
	  "768": { "code": "768", "label": "JARDIM DO MULATO", "state": "PI" },
	  "769": { "code": "769", "label": "JATOBÁ DO PIAUÍ", "state": "PI" },
	  "770": { "code": "770", "label": "JERUMENHA", "state": "PI" },
	  "771": { "code": "771", "label": "JOÃO COSTA", "state": "PI" },
	  "772": { "code": "772", "label": "JOAQUIM PIRES", "state": "PI" },
	  "773": { "code": "773", "label": "JOCA MARQUES", "state": "PI" },
	  "774": { "code": "774", "label": "JOSÉ DE FREITAS", "state": "PI" },
	  "775": { "code": "775", "label": "JUAZEIRO DO PIAUÍ", "state": "PI" },
	  "776": { "code": "776", "label": "JÚLIO BORGES", "state": "PI" },
	  "777": { "code": "777", "label": "JUREMA", "state": "PI" },
	  "778": { "code": "778", "label": "LAGOINHA DO PIAUÍ", "state": "PI" },
	  "779": { "code": "779", "label": "LAGOA ALEGRE", "state": "PI" },
	  "780": { "code": "780", "label": "LAGOA DO BARRO DO PIAUÍ", "state": "PI" },
	  "781": { "code": "781", "label": "LAGOA DE SÃO FRANCISCO", "state": "PI" },
	  "782": { "code": "782", "label": "LAGOA DO PIAUÍ", "state": "PI" },
	  "783": { "code": "783", "label": "LAGOA DO SÍTIO", "state": "PI" },
	  "784": { "code": "784", "label": "LANDRI SALES", "state": "PI" },
	  "785": { "code": "785", "label": "LUÍS CORREIA", "state": "PI" },
	  "786": { "code": "786", "label": "LUZILÂNDIA", "state": "PI" },
	  "787": { "code": "787", "label": "MADEIRO", "state": "PI" },
	  "788": { "code": "788", "label": "MANOEL EMÍDIO", "state": "PI" },
	  "789": { "code": "789", "label": "MARCOLÂNDIA", "state": "PI" },
	  "790": { "code": "790", "label": "MARCOS PARENTE", "state": "PI" },
	  "791": { "code": "791", "label": "MASSAPÊ DO PIAUÍ", "state": "PI" },
	  "792": { "code": "792", "label": "MATIAS OLÍMPIO", "state": "PI" },
	  "793": { "code": "793", "label": "MIGUEL ALVES", "state": "PI" },
	  "794": { "code": "794", "label": "MIGUEL LEÃO", "state": "PI" },
	  "795": { "code": "795", "label": "MILTON BRANDÃO", "state": "PI" },
	  "796": { "code": "796", "label": "MONSENHOR GIL", "state": "PI" },
	  "797": { "code": "797", "label": "MONSENHOR HIPÓLITO", "state": "PI" },
	  "798": { "code": "798", "label": "MONTE ALEGRE DO PIAUÍ", "state": "PI" },
	  "799": { "code": "799", "label": "MORRO CABEÇA NO TEMPO", "state": "PI" },
	  "800": { "code": "800", "label": "MORRO DO CHAPÉU DO PIAUÍ", "state": "PI" },
	  "801": { "code": "801", "label": "MURICI DOS PORTELAS", "state": "PI" },
	  "802": { "code": "802", "label": "NAZARÉ DO PIAUÍ", "state": "PI" },
	  "803": { "code": "803", "label": "NAZÁRIA", "state": "PI" },
	  "804": { "code": "804", "label": "NOSSA SENHORA DE NAZARÉ", "state": "PI" },
	  "805": { "code": "805", "label": "NOSSA SENHORA DOS REMÉDIOS", "state": "PI" },
	  "806": { "code": "806", "label": "NOVO ORIENTE DO PIAUÍ", "state": "PI" },
	  "807": { "code": "807", "label": "NOVO SANTO ANTÔNIO", "state": "PI" },
	  "808": { "code": "808", "label": "OEIRAS", "state": "PI" },
	  "809": { "code": "809", "label": "OLHO D'ÁGUA DO PIAUÍ", "state": "PI" },
	  "810": { "code": "810", "label": "PADRE MARCOS", "state": "PI" },
	  "811": { "code": "811", "label": "PAES LANDIM", "state": "PI" },
	  "812": { "code": "812", "label": "PAJEÚ DO PIAUÍ", "state": "PI" },
	  "813": { "code": "813", "label": "PALMEIRA DO PIAUÍ", "state": "PI" },
	  "814": { "code": "814", "label": "PALMEIRAIS", "state": "PI" },
	  "815": { "code": "815", "label": "PAQUETÁ", "state": "PI" },
	  "816": { "code": "816", "label": "PARNAGUÁ", "state": "PI" },
	  "817": { "code": "817", "label": "PARNAÍBA", "state": "PI" },
	  "818": { "code": "818", "label": "PASSAGEM FRANCA DO PIAUÍ", "state": "PI" },
	  "819": { "code": "819", "label": "PATOS DO PIAUÍ", "state": "PI" },
	  "820": { "code": "820", "label": "PAU D'ARCO DO PIAUÍ", "state": "PI" },
	  "821": { "code": "821", "label": "PAULISTANA", "state": "PI" },
	  "822": { "code": "822", "label": "PAVUSSU", "state": "PI" },
	  "823": { "code": "823", "label": "PEDRO II", "state": "PI" },
	  "824": { "code": "824", "label": "PEDRO LAURENTINO", "state": "PI" },
	  "825": { "code": "825", "label": "NOVA SANTA RITA", "state": "PI" },
	  "826": { "code": "826", "label": "PICOS", "state": "PI" },
	  "827": { "code": "827", "label": "PIMENTEIRAS", "state": "PI" },
	  "828": { "code": "828", "label": "PIO IX", "state": "PI" },
	  "829": { "code": "829", "label": "PIRACURUCA", "state": "PI" },
	  "830": { "code": "830", "label": "PIRIPIRI", "state": "PI" },
	  "831": { "code": "831", "label": "PORTO", "state": "PI" },
	  "832": { "code": "832", "label": "PORTO ALEGRE DO PIAUÍ", "state": "PI" },
	  "833": { "code": "833", "label": "PRATA DO PIAUÍ", "state": "PI" },
	  "834": { "code": "834", "label": "QUEIMADA NOVA", "state": "PI" },
	  "835": { "code": "835", "label": "REDENÇÃO DO GURGUÉIA", "state": "PI" },
	  "836": { "code": "836", "label": "REGENERAÇÃO", "state": "PI" },
	  "837": { "code": "837", "label": "RIACHO FRIO", "state": "PI" },
	  "838": { "code": "838", "label": "RIBEIRA DO PIAUÍ", "state": "PI" },
	  "839": { "code": "839", "label": "RIBEIRO GONÇALVES", "state": "PI" },
	  "840": { "code": "840", "label": "RIO GRANDE DO PIAUÍ", "state": "PI" },
	  "841": { "code": "841", "label": "SANTA CRUZ DO PIAUÍ", "state": "PI" },
	  "842": { "code": "842", "label": "SANTA CRUZ DOS MILAGRES", "state": "PI" },
	  "843": { "code": "843", "label": "SANTA FILOMENA", "state": "PI" },
	  "844": { "code": "844", "label": "SANTA LUZ", "state": "PI" },
	  "845": { "code": "845", "label": "SANTANA DO PIAUÍ", "state": "PI" },
	  "846": { "code": "846", "label": "SANTA ROSA DO PIAUÍ", "state": "PI" },
	  "847": { "code": "847", "label": "SANTO ANTÔNIO DE LISBOA", "state": "PI" },
	  "848": { "code": "848", "label": "SANTO ANTÔNIO DOS MILAGRES", "state": "PI" },
	  "849": { "code": "849", "label": "SANTO INÁCIO DO PIAUÍ", "state": "PI" },
	  "850": { "code": "850", "label": "SÃO BRAZ DO PIAUÍ", "state": "PI" },
	  "851": { "code": "851", "label": "SÃO FÉLIX DO PIAUÍ", "state": "PI" },
	  "852": { "code": "852", "label": "SÃO FRANCISCO DE ASSIS DO PIAUÍ", "state": "PI" },
	  "853": { "code": "853", "label": "SÃO FRANCISCO DO PIAUÍ", "state": "PI" },
	  "854": { "code": "854", "label": "SÃO GONÇALO DO GURGUÉIA", "state": "PI" },
	  "855": { "code": "855", "label": "SÃO GONÇALO DO PIAUÍ", "state": "PI" },
	  "856": { "code": "856", "label": "SÃO JOÃO DA CANABRAVA", "state": "PI" },
	  "857": { "code": "857", "label": "SÃO JOÃO DA FRONTEIRA", "state": "PI" },
	  "858": { "code": "858", "label": "SÃO JOÃO DA SERRA", "state": "PI" },
	  "859": { "code": "859", "label": "SÃO JOÃO DA VARJOTA", "state": "PI" },
	  "860": { "code": "860", "label": "SÃO JOÃO DO ARRAIAL", "state": "PI" },
	  "861": { "code": "861", "label": "SÃO JOÃO DO PIAUÍ", "state": "PI" },
	  "862": { "code": "862", "label": "SÃO JOSÉ DO DIVINO", "state": "PI" },
	  "863": { "code": "863", "label": "SÃO JOSÉ DO PEIXE", "state": "PI" },
	  "864": { "code": "864", "label": "SÃO JOSÉ DO PIAUÍ", "state": "PI" },
	  "865": { "code": "865", "label": "SÃO JULIÃO", "state": "PI" },
	  "866": { "code": "866", "label": "SÃO LOURENÇO DO PIAUÍ", "state": "PI" },
	  "867": { "code": "867", "label": "SÃO LUIS DO PIAUÍ", "state": "PI" },
	  "868": { "code": "868", "label": "SÃO MIGUEL DA BAIXA GRANDE", "state": "PI" },
	  "869": { "code": "869", "label": "SÃO MIGUEL DO FIDALGO", "state": "PI" },
	  "870": { "code": "870", "label": "SÃO MIGUEL DO TAPUIO", "state": "PI" },
	  "871": { "code": "871", "label": "SÃO PEDRO DO PIAUÍ", "state": "PI" },
	  "872": { "code": "872", "label": "SÃO RAIMUNDO NONATO", "state": "PI" },
	  "873": { "code": "873", "label": "SEBASTIÃO BARROS", "state": "PI" },
	  "874": { "code": "874", "label": "SEBASTIÃO LEAL", "state": "PI" },
	  "875": { "code": "875", "label": "SIGEFREDO PACHECO", "state": "PI" },
	  "876": { "code": "876", "label": "SIMÕES", "state": "PI" },
	  "877": { "code": "877", "label": "SIMPLÍCIO MENDES", "state": "PI" },
	  "878": { "code": "878", "label": "SOCORRO DO PIAUÍ", "state": "PI" },
	  "879": { "code": "879", "label": "SUSSUAPARA", "state": "PI" },
	  "880": { "code": "880", "label": "TAMBORIL DO PIAUÍ", "state": "PI" },
	  "881": { "code": "881", "label": "TANQUE DO PIAUÍ", "state": "PI" },
	  "882": { "code": "882", "label": "TERESINA", "state": "PI" },
	  "883": { "code": "883", "label": "UNIÃO", "state": "PI" },
	  "884": { "code": "884", "label": "URUÇUÍ", "state": "PI" },
	  "885": { "code": "885", "label": "VALENÇA DO PIAUÍ", "state": "PI" },
	  "886": { "code": "886", "label": "VÁRZEA BRANCA", "state": "PI" },
	  "887": { "code": "887", "label": "VÁRZEA GRANDE", "state": "PI" },
	  "888": { "code": "888", "label": "VERA MENDES", "state": "PI" },
	  "889": { "code": "889", "label": "VILA NOVA DO PIAUÍ", "state": "PI" },
	  "890": { "code": "890", "label": "WALL FERRAZ", "state": "PI" },
	  "891": { "code": "891", "label": "ABAIARA", "state": "CE" },
	  "892": { "code": "892", "label": "ACARAPE", "state": "CE" },
	  "893": { "code": "893", "label": "ACARAÚ", "state": "CE" },
	  "894": { "code": "894", "label": "ACOPIARA", "state": "CE" },
	  "895": { "code": "895", "label": "AIUABA", "state": "CE" },
	  "896": { "code": "896", "label": "ALCÂNTARAS", "state": "CE" },
	  "897": { "code": "897", "label": "ALTANEIRA", "state": "CE" },
	  "898": { "code": "898", "label": "ALTO SANTO", "state": "CE" },
	  "899": { "code": "899", "label": "AMONTADA", "state": "CE" },
	  "900": { "code": "900", "label": "ANTONINA DO NORTE", "state": "CE" },
	  "901": { "code": "901", "label": "APUIARÉS", "state": "CE" },
	  "902": { "code": "902", "label": "AQUIRAZ", "state": "CE" },
	  "903": { "code": "903", "label": "ARACATI", "state": "CE" },
	  "904": { "code": "904", "label": "ARACOIABA", "state": "CE" },
	  "905": { "code": "905", "label": "ARARENDÁ", "state": "CE" },
	  "906": { "code": "906", "label": "ARARIPE", "state": "CE" },
	  "907": { "code": "907", "label": "ARATUBA", "state": "CE" },
	  "908": { "code": "908", "label": "ARNEIROZ", "state": "CE" },
	  "909": { "code": "909", "label": "ASSARÉ", "state": "CE" },
	  "910": { "code": "910", "label": "AURORA", "state": "CE" },
	  "911": { "code": "911", "label": "BAIXIO", "state": "CE" },
	  "912": { "code": "912", "label": "BANABUIÚ", "state": "CE" },
	  "913": { "code": "913", "label": "BARBALHA", "state": "CE" },
	  "914": { "code": "914", "label": "BARREIRA", "state": "CE" },
	  "915": { "code": "915", "label": "BARRO", "state": "CE" },
	  "916": { "code": "916", "label": "BARROQUINHA", "state": "CE" },
	  "917": { "code": "917", "label": "BATURITÉ", "state": "CE" },
	  "918": { "code": "918", "label": "BEBERIBE", "state": "CE" },
	  "919": { "code": "919", "label": "BELA CRUZ", "state": "CE" },
	  "920": { "code": "920", "label": "BOA VIAGEM", "state": "CE" },
	  "921": { "code": "921", "label": "BREJO SANTO", "state": "CE" },
	  "922": { "code": "922", "label": "CAMOCIM", "state": "CE" },
	  "923": { "code": "923", "label": "CAMPOS SALES", "state": "CE" },
	  "924": { "code": "924", "label": "CANINDÉ", "state": "CE" },
	  "925": { "code": "925", "label": "CAPISTRANO", "state": "CE" },
	  "926": { "code": "926", "label": "CARIDADE", "state": "CE" },
	  "927": { "code": "927", "label": "CARIRÉ", "state": "CE" },
	  "928": { "code": "928", "label": "CARIRIAÇU", "state": "CE" },
	  "929": { "code": "929", "label": "CARIÚS", "state": "CE" },
	  "930": { "code": "930", "label": "CARNAUBAL", "state": "CE" },
	  "931": { "code": "931", "label": "CASCAVEL", "state": "CE" },
	  "932": { "code": "932", "label": "CATARINA", "state": "CE" },
	  "933": { "code": "933", "label": "CATUNDA", "state": "CE" },
	  "934": { "code": "934", "label": "CAUCAIA", "state": "CE" },
	  "935": { "code": "935", "label": "CEDRO", "state": "CE" },
	  "936": { "code": "936", "label": "CHAVAL", "state": "CE" },
	  "937": { "code": "937", "label": "CHORÓ", "state": "CE" },
	  "938": { "code": "938", "label": "CHOROZINHO", "state": "CE" },
	  "939": { "code": "939", "label": "COREAÚ", "state": "CE" },
	  "940": { "code": "940", "label": "CRATEÚS", "state": "CE" },
	  "941": { "code": "941", "label": "CRATO", "state": "CE" },
	  "942": { "code": "942", "label": "CROATÁ", "state": "CE" },
	  "943": { "code": "943", "label": "CRUZ", "state": "CE" },
	  "944": { "code": "944", "label": "DEPUTADO IRAPUAN PINHEIRO", "state": "CE" },
	  "945": { "code": "945", "label": "ERERÊ", "state": "CE" },
	  "946": { "code": "946", "label": "EUSÉBIO", "state": "CE" },
	  "947": { "code": "947", "label": "FARIAS BRITO", "state": "CE" },
	  "948": { "code": "948", "label": "FORQUILHA", "state": "CE" },
	  "949": { "code": "949", "label": "FORTALEZA", "state": "CE" },
	  "950": { "code": "950", "label": "FORTIM", "state": "CE" },
	  "951": { "code": "951", "label": "FRECHEIRINHA", "state": "CE" },
	  "952": { "code": "952", "label": "GENERAL SAMPAIO", "state": "CE" },
	  "953": { "code": "953", "label": "GRAÇA", "state": "CE" },
	  "954": { "code": "954", "label": "GRANJA", "state": "CE" },
	  "955": { "code": "955", "label": "GRANJEIRO", "state": "CE" },
	  "956": { "code": "956", "label": "GROAÍRAS", "state": "CE" },
	  "957": { "code": "957", "label": "GUAIÚBA", "state": "CE" },
	  "958": { "code": "958", "label": "GUARACIABA DO NORTE", "state": "CE" },
	  "959": { "code": "959", "label": "GUARAMIRANGA", "state": "CE" },
	  "960": { "code": "960", "label": "HIDROLÂNDIA", "state": "CE" },
	  "961": { "code": "961", "label": "HORIZONTE", "state": "CE" },
	  "962": { "code": "962", "label": "IBARETAMA", "state": "CE" },
	  "963": { "code": "963", "label": "IBIAPINA", "state": "CE" },
	  "964": { "code": "964", "label": "IBICUITINGA", "state": "CE" },
	  "965": { "code": "965", "label": "ICAPUÍ", "state": "CE" },
	  "966": { "code": "966", "label": "ICÓ", "state": "CE" },
	  "967": { "code": "967", "label": "IGUATU", "state": "CE" },
	  "968": { "code": "968", "label": "INDEPENDÊNCIA", "state": "CE" },
	  "969": { "code": "969", "label": "IPAPORANGA", "state": "CE" },
	  "970": { "code": "970", "label": "IPAUMIRIM", "state": "CE" },
	  "971": { "code": "971", "label": "IPU", "state": "CE" },
	  "972": { "code": "972", "label": "IPUEIRAS", "state": "CE" },
	  "973": { "code": "973", "label": "IRACEMA", "state": "CE" },
	  "974": { "code": "974", "label": "IRAUÇUBA", "state": "CE" },
	  "975": { "code": "975", "label": "ITAIÇABA", "state": "CE" },
	  "976": { "code": "976", "label": "ITAITINGA", "state": "CE" },
	  "977": { "code": "977", "label": "ITAPAGÉ", "state": "CE" },
	  "978": { "code": "978", "label": "ITAPIPOCA", "state": "CE" },
	  "979": { "code": "979", "label": "ITAPIÚNA", "state": "CE" },
	  "980": { "code": "980", "label": "ITAREMA", "state": "CE" },
	  "981": { "code": "981", "label": "ITATIRA", "state": "CE" },
	  "982": { "code": "982", "label": "JAGUARETAMA", "state": "CE" },
	  "983": { "code": "983", "label": "JAGUARIBARA", "state": "CE" },
	  "984": { "code": "984", "label": "JAGUARIBE", "state": "CE" },
	  "985": { "code": "985", "label": "JAGUARUANA", "state": "CE" },
	  "986": { "code": "986", "label": "JARDIM", "state": "CE" },
	  "987": { "code": "987", "label": "JATI", "state": "CE" },
	  "988": { "code": "988", "label": "JIJOCA DE JERICOACOARA", "state": "CE" },
	  "989": { "code": "989", "label": "JUAZEIRO DO NORTE", "state": "CE" },
	  "990": { "code": "990", "label": "JUCÁS", "state": "CE" },
	  "991": { "code": "991", "label": "LAVRAS DA MANGABEIRA", "state": "CE" },
	  "992": { "code": "992", "label": "LIMOEIRO DO NORTE", "state": "CE" },
	  "993": { "code": "993", "label": "MADALENA", "state": "CE" },
	  "994": { "code": "994", "label": "MARACANAÚ", "state": "CE" },
	  "995": { "code": "995", "label": "MARANGUAPE", "state": "CE" },
	  "996": { "code": "996", "label": "MARCO", "state": "CE" },
	  "997": { "code": "997", "label": "MARTINÓPOLE", "state": "CE" },
	  "998": { "code": "998", "label": "MASSAPÊ", "state": "CE" },
	  "999": { "code": "999", "label": "MAURITI", "state": "CE" },
	  "1000": { "code": "1000", "label": "MERUOCA", "state": "CE" },
	  "1001": { "code": "1001", "label": "MILAGRES", "state": "CE" },
	  "1002": { "code": "1002", "label": "MILHÃ", "state": "CE" },
	  "1003": { "code": "1003", "label": "MIRAÍMA", "state": "CE" },
	  "1004": { "code": "1004", "label": "MISSÃO VELHA", "state": "CE" },
	  "1005": { "code": "1005", "label": "MOMBAÇA", "state": "CE" },
	  "1006": { "code": "1006", "label": "MONSENHOR TABOSA", "state": "CE" },
	  "1007": { "code": "1007", "label": "MORADA NOVA", "state": "CE" },
	  "1008": { "code": "1008", "label": "MORAÚJO", "state": "CE" },
	  "1009": { "code": "1009", "label": "MORRINHOS", "state": "CE" },
	  "1010": { "code": "1010", "label": "MUCAMBO", "state": "CE" },
	  "1011": { "code": "1011", "label": "MULUNGU", "state": "CE" },
	  "1012": { "code": "1012", "label": "NOVA OLINDA", "state": "CE" },
	  "1013": { "code": "1013", "label": "NOVA RUSSAS", "state": "CE" },
	  "1014": { "code": "1014", "label": "NOVO ORIENTE", "state": "CE" },
	  "1015": { "code": "1015", "label": "OCARA", "state": "CE" },
	  "1016": { "code": "1016", "label": "ORÓS", "state": "CE" },
	  "1017": { "code": "1017", "label": "PACAJUS", "state": "CE" },
	  "1018": { "code": "1018", "label": "PACATUBA", "state": "CE" },
	  "1019": { "code": "1019", "label": "PACOTI", "state": "CE" },
	  "1020": { "code": "1020", "label": "PACUJÁ", "state": "CE" },
	  "1021": { "code": "1021", "label": "PALHANO", "state": "CE" },
	  "1022": { "code": "1022", "label": "PALMÁCIA", "state": "CE" },
	  "1023": { "code": "1023", "label": "PARACURU", "state": "CE" },
	  "1024": { "code": "1024", "label": "PARAIPABA", "state": "CE" },
	  "1025": { "code": "1025", "label": "PARAMBU", "state": "CE" },
	  "1026": { "code": "1026", "label": "PARAMOTI", "state": "CE" },
	  "1027": { "code": "1027", "label": "PEDRA BRANCA", "state": "CE" },
	  "1028": { "code": "1028", "label": "PENAFORTE", "state": "CE" },
	  "1029": { "code": "1029", "label": "PENTECOSTE", "state": "CE" },
	  "1030": { "code": "1030", "label": "PEREIRO", "state": "CE" },
	  "1031": { "code": "1031", "label": "PINDORETAMA", "state": "CE" },
	  "1032": { "code": "1032", "label": "PIQUET CARNEIRO", "state": "CE" },
	  "1033": { "code": "1033", "label": "PIRES FERREIRA", "state": "CE" },
	  "1034": { "code": "1034", "label": "PORANGA", "state": "CE" },
	  "1035": { "code": "1035", "label": "PORTEIRAS", "state": "CE" },
	  "1036": { "code": "1036", "label": "POTENGI", "state": "CE" },
	  "1037": { "code": "1037", "label": "POTIRETAMA", "state": "CE" },
	  "1038": { "code": "1038", "label": "QUITERIANÓPOLIS", "state": "CE" },
	  "1039": { "code": "1039", "label": "QUIXADÁ", "state": "CE" },
	  "1040": { "code": "1040", "label": "QUIXELÔ", "state": "CE" },
	  "1041": { "code": "1041", "label": "QUIXERAMOBIM", "state": "CE" },
	  "1042": { "code": "1042", "label": "QUIXERÉ", "state": "CE" },
	  "1043": { "code": "1043", "label": "REDENÇÃO", "state": "CE" },
	  "1044": { "code": "1044", "label": "RERIUTABA", "state": "CE" },
	  "1045": { "code": "1045", "label": "RUSSAS", "state": "CE" },
	  "1046": { "code": "1046", "label": "SABOEIRO", "state": "CE" },
	  "1047": { "code": "1047", "label": "SALITRE", "state": "CE" },
	  "1048": { "code": "1048", "label": "SANTANA DO ACARAÚ", "state": "CE" },
	  "1049": { "code": "1049", "label": "SANTANA DO CARIRI", "state": "CE" },
	  "1050": { "code": "1050", "label": "SANTA QUITÉRIA", "state": "CE" },
	  "1051": { "code": "1051", "label": "SÃO BENEDITO", "state": "CE" },
	  "1052": { "code": "1052", "label": "SÃO GONÇALO DO AMARANTE", "state": "CE" },
	  "1053": { "code": "1053", "label": "SÃO JOÃO DO JAGUARIBE", "state": "CE" },
	  "1054": { "code": "1054", "label": "SÃO LUÍS DO CURU", "state": "CE" },
	  "1055": { "code": "1055", "label": "SENADOR POMPEU", "state": "CE" },
	  "1056": { "code": "1056", "label": "SENADOR SÁ", "state": "CE" },
	  "1057": { "code": "1057", "label": "SOBRAL", "state": "CE" },
	  "1058": { "code": "1058", "label": "SOLONÓPOLE", "state": "CE" },
	  "1059": { "code": "1059", "label": "TABULEIRO DO NORTE", "state": "CE" },
	  "1060": { "code": "1060", "label": "TAMBORIL", "state": "CE" },
	  "1061": { "code": "1061", "label": "TARRAFAS", "state": "CE" },
	  "1062": { "code": "1062", "label": "TAUÁ", "state": "CE" },
	  "1063": { "code": "1063", "label": "TEJUÇUOCA", "state": "CE" },
	  "1064": { "code": "1064", "label": "TIANGUÁ", "state": "CE" },
	  "1065": { "code": "1065", "label": "TRAIRI", "state": "CE" },
	  "1066": { "code": "1066", "label": "TURURU", "state": "CE" },
	  "1067": { "code": "1067", "label": "UBAJARA", "state": "CE" },
	  "1068": { "code": "1068", "label": "UMARI", "state": "CE" },
	  "1069": { "code": "1069", "label": "UMIRIM", "state": "CE" },
	  "1070": { "code": "1070", "label": "URUBURETAMA", "state": "CE" },
	  "1071": { "code": "1071", "label": "URUOCA", "state": "CE" },
	  "1072": { "code": "1072", "label": "VARJOTA", "state": "CE" },
	  "1073": { "code": "1073", "label": "VÁRZEA ALEGRE", "state": "CE" },
	  "1074": { "code": "1074", "label": "VIÇOSA DO CEARÁ", "state": "CE" },
	  "1075": { "code": "1075", "label": "ACARI", "state": "RN" },
	  "1076": { "code": "1076", "label": "AÇU", "state": "RN" },
	  "1077": { "code": "1077", "label": "AFONSO BEZERRA", "state": "RN" },
	  "1078": { "code": "1078", "label": "ÁGUA NOVA", "state": "RN" },
	  "1079": { "code": "1079", "label": "ALEXANDRIA", "state": "RN" },
	  "1080": { "code": "1080", "label": "ALMINO AFONSO", "state": "RN" },
	  "1081": { "code": "1081", "label": "ALTO DO RODRIGUES", "state": "RN" },
	  "1082": { "code": "1082", "label": "ANGICOS", "state": "RN" },
	  "1083": { "code": "1083", "label": "ANTÔNIO MARTINS", "state": "RN" },
	  "1084": { "code": "1084", "label": "APODI", "state": "RN" },
	  "1085": { "code": "1085", "label": "AREIA BRANCA", "state": "RN" },
	  "1086": { "code": "1086", "label": "ARÊS", "state": "RN" },
	  "1087": { "code": "1087", "label": "AUGUSTO SEVERO", "state": "RN" },
	  "1088": { "code": "1088", "label": "BAÍA FORMOSA", "state": "RN" },
	  "1089": { "code": "1089", "label": "BARAÚNA", "state": "RN" },
	  "1090": { "code": "1090", "label": "BARCELONA", "state": "RN" },
	  "1091": { "code": "1091", "label": "BENTO FERNANDES", "state": "RN" },
	  "1092": { "code": "1092", "label": "BODÓ", "state": "RN" },
	  "1093": { "code": "1093", "label": "BOM JESUS", "state": "RN" },
	  "1094": { "code": "1094", "label": "BREJINHO", "state": "RN" },
	  "1095": { "code": "1095", "label": "CAIÇARA DO NORTE", "state": "RN" },
	  "1096": { "code": "1096", "label": "CAIÇARA DO RIO DO VENTO", "state": "RN" },
	  "1097": { "code": "1097", "label": "CAICÓ", "state": "RN" },
	  "1098": { "code": "1098", "label": "CAMPO REDONDO", "state": "RN" },
	  "1099": { "code": "1099", "label": "CANGUARETAMA", "state": "RN" },
	  "1100": { "code": "1100", "label": "CARAÚBAS", "state": "RN" },
	  "1101": { "code": "1101", "label": "CARNAÚBA DOS DANTAS", "state": "RN" },
	  "1102": { "code": "1102", "label": "CARNAUBAIS", "state": "RN" },
	  "1103": { "code": "1103", "label": "CEARÁ-MIRIM", "state": "RN" },
	  "1104": { "code": "1104", "label": "CERRO CORÁ", "state": "RN" },
	  "1105": { "code": "1105", "label": "CORONEL EZEQUIEL", "state": "RN" },
	  "1106": { "code": "1106", "label": "CORONEL JOÃO PESSOA", "state": "RN" },
	  "1107": { "code": "1107", "label": "CRUZETA", "state": "RN" },
	  "1108": { "code": "1108", "label": "CURRAIS NOVOS", "state": "RN" },
	  "1109": { "code": "1109", "label": "DOUTOR SEVERIANO", "state": "RN" },
	  "1110": { "code": "1110", "label": "PARNAMIRIM", "state": "RN" },
	  "1111": { "code": "1111", "label": "ENCANTO", "state": "RN" },
	  "1112": { "code": "1112", "label": "EQUADOR", "state": "RN" },
	  "1113": { "code": "1113", "label": "ESPÍRITO SANTO", "state": "RN" },
	  "1114": { "code": "1114", "label": "EXTREMOZ", "state": "RN" },
	  "1115": { "code": "1115", "label": "FELIPE GUERRA", "state": "RN" },
	  "1116": { "code": "1116", "label": "FERNANDO PEDROZA", "state": "RN" },
	  "1117": { "code": "1117", "label": "FLORÂNIA", "state": "RN" },
	  "1118": { "code": "1118", "label": "FRANCISCO DANTAS", "state": "RN" },
	  "1119": { "code": "1119", "label": "FRUTUOSO GOMES", "state": "RN" },
	  "1120": { "code": "1120", "label": "GALINHOS", "state": "RN" },
	  "1121": { "code": "1121", "label": "GOIANINHA", "state": "RN" },
	  "1122": { "code": "1122", "label": "GOVERNADOR DIX-SEPT ROSADO", "state": "RN" },
	  "1123": { "code": "1123", "label": "GROSSOS", "state": "RN" },
	  "1124": { "code": "1124", "label": "GUAMARÉ", "state": "RN" },
	  "1125": { "code": "1125", "label": "IELMO MARINHO", "state": "RN" },
	  "1126": { "code": "1126", "label": "IPANGUAÇU", "state": "RN" },
	  "1127": { "code": "1127", "label": "IPUEIRA", "state": "RN" },
	  "1128": { "code": "1128", "label": "ITAJÁ", "state": "RN" },
	  "1129": { "code": "1129", "label": "ITAÚ", "state": "RN" },
	  "1130": { "code": "1130", "label": "JAÇANÃ", "state": "RN" },
	  "1131": { "code": "1131", "label": "JANDAÍRA", "state": "RN" },
	  "1132": { "code": "1132", "label": "JANDUÍS", "state": "RN" },
	  "1133": { "code": "1133", "label": "JANUÁRIO CICCO", "state": "RN" },
	  "1134": { "code": "1134", "label": "JAPI", "state": "RN" },
	  "1135": { "code": "1135", "label": "JARDIM DE ANGICOS", "state": "RN" },
	  "1136": { "code": "1136", "label": "JARDIM DE PIRANHAS", "state": "RN" },
	  "1137": { "code": "1137", "label": "JARDIM DO SERIDÓ", "state": "RN" },
	  "1138": { "code": "1138", "label": "JOÃO CÂMARA", "state": "RN" },
	  "1139": { "code": "1139", "label": "JOÃO DIAS", "state": "RN" },
	  "1140": { "code": "1140", "label": "JOSÉ DA PENHA", "state": "RN" },
	  "1141": { "code": "1141", "label": "JUCURUTU", "state": "RN" },
	  "1142": { "code": "1142", "label": "JUNDIÁ", "state": "RN" },
	  "1143": { "code": "1143", "label": "LAGOA D'ANTA", "state": "RN" },
	  "1144": { "code": "1144", "label": "LAGOA DE PEDRAS", "state": "RN" },
	  "1145": { "code": "1145", "label": "LAGOA DE VELHOS", "state": "RN" },
	  "1146": { "code": "1146", "label": "LAGOA NOVA", "state": "RN" },
	  "1147": { "code": "1147", "label": "LAGOA SALGADA", "state": "RN" },
	  "1148": { "code": "1148", "label": "LAJES", "state": "RN" },
	  "1149": { "code": "1149", "label": "LAJES PINTADAS", "state": "RN" },
	  "1150": { "code": "1150", "label": "LUCRÉCIA", "state": "RN" },
	  "1151": { "code": "1151", "label": "LUÍS GOMES", "state": "RN" },
	  "1152": { "code": "1152", "label": "MACAÍBA", "state": "RN" },
	  "1153": { "code": "1153", "label": "MACAU", "state": "RN" },
	  "1154": { "code": "1154", "label": "MAJOR SALES", "state": "RN" },
	  "1155": { "code": "1155", "label": "MARCELINO VIEIRA", "state": "RN" },
	  "1156": { "code": "1156", "label": "MARTINS", "state": "RN" },
	  "1157": { "code": "1157", "label": "MAXARANGUAPE", "state": "RN" },
	  "1158": { "code": "1158", "label": "MESSIAS TARGINO", "state": "RN" },
	  "1159": { "code": "1159", "label": "MONTANHAS", "state": "RN" },
	  "1160": { "code": "1160", "label": "MONTE ALEGRE", "state": "RN" },
	  "1161": { "code": "1161", "label": "MONTE DAS GAMELEIRAS", "state": "RN" },
	  "1162": { "code": "1162", "label": "MOSSORÓ", "state": "RN" },
	  "1163": { "code": "1163", "label": "NATAL", "state": "RN" },
	  "1164": { "code": "1164", "label": "NÍSIA FLORESTA", "state": "RN" },
	  "1165": { "code": "1165", "label": "NOVA CRUZ", "state": "RN" },
	  "1166": { "code": "1166", "label": "OLHO-D'ÁGUA DO BORGES", "state": "RN" },
	  "1167": { "code": "1167", "label": "OURO BRANCO", "state": "RN" },
	  "1168": { "code": "1168", "label": "PARANÁ", "state": "RN" },
	  "1169": { "code": "1169", "label": "PARAÚ", "state": "RN" },
	  "1170": { "code": "1170", "label": "PARAZINHO", "state": "RN" },
	  "1171": { "code": "1171", "label": "PARELHAS", "state": "RN" },
	  "1172": { "code": "1172", "label": "RIO DO FOGO", "state": "RN" },
	  "1173": { "code": "1173", "label": "PASSA E FICA", "state": "RN" },
	  "1174": { "code": "1174", "label": "PASSAGEM", "state": "RN" },
	  "1175": { "code": "1175", "label": "PATU", "state": "RN" },
	  "1176": { "code": "1176", "label": "SANTA MARIA", "state": "RN" },
	  "1177": { "code": "1177", "label": "PAU DOS FERROS", "state": "RN" },
	  "1178": { "code": "1178", "label": "PEDRA GRANDE", "state": "RN" },
	  "1179": { "code": "1179", "label": "PEDRA PRETA", "state": "RN" },
	  "1180": { "code": "1180", "label": "PEDRO AVELINO", "state": "RN" },
	  "1181": { "code": "1181", "label": "PEDRO VELHO", "state": "RN" },
	  "1182": { "code": "1182", "label": "PENDÊNCIAS", "state": "RN" },
	  "1183": { "code": "1183", "label": "PILÕES", "state": "RN" },
	  "1184": { "code": "1184", "label": "POÇO BRANCO", "state": "RN" },
	  "1185": { "code": "1185", "label": "PORTALEGRE", "state": "RN" },
	  "1186": { "code": "1186", "label": "PORTO DO MANGUE", "state": "RN" },
	  "1187": { "code": "1187", "label": "PRESIDENTE JUSCELINO", "state": "RN" },
	  "1188": { "code": "1188", "label": "PUREZA", "state": "RN" },
	  "1189": { "code": "1189", "label": "RAFAEL FERNANDES", "state": "RN" },
	  "1190": { "code": "1190", "label": "RAFAEL GODEIRO", "state": "RN" },
	  "1191": { "code": "1191", "label": "RIACHO DA CRUZ", "state": "RN" },
	  "1192": { "code": "1192", "label": "RIACHO DE SANTANA", "state": "RN" },
	  "1193": { "code": "1193", "label": "RIACHUELO", "state": "RN" },
	  "1194": { "code": "1194", "label": "RODOLFO FERNANDES", "state": "RN" },
	  "1195": { "code": "1195", "label": "TIBAU", "state": "RN" },
	  "1196": { "code": "1196", "label": "RUY BARBOSA", "state": "RN" },
	  "1197": { "code": "1197", "label": "SANTA CRUZ", "state": "RN" },
	  "1198": { "code": "1198", "label": "SANTANA DO MATOS", "state": "RN" },
	  "1199": { "code": "1199", "label": "SANTANA DO SERIDÓ", "state": "RN" },
	  "1200": { "code": "1200", "label": "SANTO ANTÔNIO", "state": "RN" },
	  "1201": { "code": "1201", "label": "SÃO BENTO DO NORTE", "state": "RN" },
	  "1202": { "code": "1202", "label": "SÃO BENTO DO TRAIRÍ", "state": "RN" },
	  "1203": { "code": "1203", "label": "SÃO FERNANDO", "state": "RN" },
	  "1204": { "code": "1204", "label": "SÃO FRANCISCO DO OESTE", "state": "RN" },
	  "1205": { "code": "1205", "label": "SÃO GONÇALO DO AMARANTE", "state": "RN" },
	  "1206": { "code": "1206", "label": "SÃO JOÃO DO SABUGI", "state": "RN" },
	  "1207": { "code": "1207", "label": "SÃO JOSÉ DE MIPIBU", "state": "RN" },
	  "1208": { "code": "1208", "label": "SÃO JOSÉ DO CAMPESTRE", "state": "RN" },
	  "1209": { "code": "1209", "label": "SÃO JOSÉ DO SERIDÓ", "state": "RN" },
	  "1210": { "code": "1210", "label": "SÃO MIGUEL", "state": "RN" },
	  "1211": { "code": "1211", "label": "SÃO MIGUEL DO GOSTOSO", "state": "RN" },
	  "1212": { "code": "1212", "label": "SÃO PAULO DO POTENGI", "state": "RN" },
	  "1213": { "code": "1213", "label": "SÃO PEDRO", "state": "RN" },
	  "1214": { "code": "1214", "label": "SÃO RAFAEL", "state": "RN" },
	  "1215": { "code": "1215", "label": "SÃO TOMÉ", "state": "RN" },
	  "1216": { "code": "1216", "label": "SÃO VICENTE", "state": "RN" },
	  "1217": { "code": "1217", "label": "SENADOR ELÓI DE SOUZA", "state": "RN" },
	  "1218": { "code": "1218", "label": "SENADOR GEORGINO AVELINO", "state": "RN" },
	  "1219": { "code": "1219", "label": "SERRA DE SÃO BENTO", "state": "RN" },
	  "1220": { "code": "1220", "label": "SERRA DO MEL", "state": "RN" },
	  "1221": { "code": "1221", "label": "SERRA NEGRA DO NORTE", "state": "RN" },
	  "1222": { "code": "1222", "label": "SERRINHA", "state": "RN" },
	  "1223": { "code": "1223", "label": "SERRINHA DOS PINTOS", "state": "RN" },
	  "1224": { "code": "1224", "label": "SEVERIANO MELO", "state": "RN" },
	  "1225": { "code": "1225", "label": "SÍTIO NOVO", "state": "RN" },
	  "1226": { "code": "1226", "label": "TABOLEIRO GRANDE", "state": "RN" },
	  "1227": { "code": "1227", "label": "TAIPU", "state": "RN" },
	  "1228": { "code": "1228", "label": "TANGARÁ", "state": "RN" },
	  "1229": { "code": "1229", "label": "TENENTE ANANIAS", "state": "RN" },
	  "1230": { "code": "1230", "label": "TENENTE LAURENTINO CRUZ", "state": "RN" },
	  "1231": { "code": "1231", "label": "TIBAU DO SUL", "state": "RN" },
	  "1232": { "code": "1232", "label": "TIMBAÚBA DOS BATISTAS", "state": "RN" },
	  "1233": { "code": "1233", "label": "TOUROS", "state": "RN" },
	  "1234": { "code": "1234", "label": "TRIUNFO POTIGUAR", "state": "RN" },
	  "1235": { "code": "1235", "label": "UMARIZAL", "state": "RN" },
	  "1236": { "code": "1236", "label": "UPANEMA", "state": "RN" },
	  "1237": { "code": "1237", "label": "VÁRZEA", "state": "RN" },
	  "1238": { "code": "1238", "label": "VENHA-VER", "state": "RN" },
	  "1239": { "code": "1239", "label": "VERA CRUZ", "state": "RN" },
	  "1240": { "code": "1240", "label": "VIÇOSA", "state": "RN" },
	  "1241": { "code": "1241", "label": "VILA FLOR", "state": "RN" },
	  "1242": { "code": "1242", "label": "ÁGUA BRANCA", "state": "PB" },
	  "1243": { "code": "1243", "label": "AGUIAR", "state": "PB" },
	  "1244": { "code": "1244", "label": "ALAGOA GRANDE", "state": "PB" },
	  "1245": { "code": "1245", "label": "ALAGOA NOVA", "state": "PB" },
	  "1246": { "code": "1246", "label": "ALAGOINHA", "state": "PB" },
	  "1247": { "code": "1247", "label": "ALCANTIL", "state": "PB" },
	  "1248": { "code": "1248", "label": "ALGODÃO DE JANDAÍRA", "state": "PB" },
	  "1249": { "code": "1249", "label": "ALHANDRA", "state": "PB" },
	  "1250": { "code": "1250", "label": "SÃO JOÃO DO RIO DO PEIXE", "state": "PB" },
	  "1251": { "code": "1251", "label": "AMPARO", "state": "PB" },
	  "1252": { "code": "1252", "label": "APARECIDA", "state": "PB" },
	  "1253": { "code": "1253", "label": "ARAÇAGI", "state": "PB" },
	  "1254": { "code": "1254", "label": "ARARA", "state": "PB" },
	  "1255": { "code": "1255", "label": "ARARUNA", "state": "PB" },
	  "1256": { "code": "1256", "label": "AREIA", "state": "PB" },
	  "1257": { "code": "1257", "label": "AREIA DE BARAÚNAS", "state": "PB" },
	  "1258": { "code": "1258", "label": "AREIAL", "state": "PB" },
	  "1259": { "code": "1259", "label": "AROEIRAS", "state": "PB" },
	  "1260": { "code": "1260", "label": "ASSUNÇÃO", "state": "PB" },
	  "1261": { "code": "1261", "label": "BAÍA DA TRAIÇÃO", "state": "PB" },
	  "1262": { "code": "1262", "label": "BANANEIRAS", "state": "PB" },
	  "1263": { "code": "1263", "label": "BARAÚNA", "state": "PB" },
	  "1264": { "code": "1264", "label": "BARRA DE SANTANA", "state": "PB" },
	  "1265": { "code": "1265", "label": "BARRA DE SANTA ROSA", "state": "PB" },
	  "1266": { "code": "1266", "label": "BARRA DE SÃO MIGUEL", "state": "PB" },
	  "1267": { "code": "1267", "label": "BAYEUX", "state": "PB" },
	  "1268": { "code": "1268", "label": "BELÉM", "state": "PB" },
	  "1269": { "code": "1269", "label": "BELÉM DO BREJO DO CRUZ", "state": "PB" },
	  "1270": { "code": "1270", "label": "BERNARDINO BATISTA", "state": "PB" },
	  "1271": { "code": "1271", "label": "BOA VENTURA", "state": "PB" },
	  "1272": { "code": "1272", "label": "BOA VISTA", "state": "PB" },
	  "1273": { "code": "1273", "label": "BOM JESUS", "state": "PB" },
	  "1274": { "code": "1274", "label": "BOM SUCESSO", "state": "PB" },
	  "1275": { "code": "1275", "label": "BONITO DE SANTA FÉ", "state": "PB" },
	  "1276": { "code": "1276", "label": "BOQUEIRÃO", "state": "PB" },
	  "1277": { "code": "1277", "label": "IGARACY", "state": "PB" },
	  "1278": { "code": "1278", "label": "BORBOREMA", "state": "PB" },
	  "1279": { "code": "1279", "label": "BREJO DO CRUZ", "state": "PB" },
	  "1280": { "code": "1280", "label": "BREJO DOS SANTOS", "state": "PB" },
	  "1281": { "code": "1281", "label": "CAAPORÃ", "state": "PB" },
	  "1282": { "code": "1282", "label": "CABACEIRAS", "state": "PB" },
	  "1283": { "code": "1283", "label": "CABEDELO", "state": "PB" },
	  "1284": { "code": "1284", "label": "CACHOEIRA DOS ÍNDIOS", "state": "PB" },
	  "1285": { "code": "1285", "label": "CACIMBA DE AREIA", "state": "PB" },
	  "1286": { "code": "1286", "label": "CACIMBA DE DENTRO", "state": "PB" },
	  "1287": { "code": "1287", "label": "CACIMBAS", "state": "PB" },
	  "1288": { "code": "1288", "label": "CAIÇARA", "state": "PB" },
	  "1289": { "code": "1289", "label": "CAJAZEIRAS", "state": "PB" },
	  "1290": { "code": "1290", "label": "CAJAZEIRINHAS", "state": "PB" },
	  "1291": { "code": "1291", "label": "CALDAS BRANDÃO", "state": "PB" },
	  "1292": { "code": "1292", "label": "CAMALAÚ", "state": "PB" },
	  "1293": { "code": "1293", "label": "CAMPINA GRANDE", "state": "PB" },
	  "1294": { "code": "1294", "label": "CAPIM", "state": "PB" },
	  "1295": { "code": "1295", "label": "CARAÚBAS", "state": "PB" },
	  "1296": { "code": "1296", "label": "CARRAPATEIRA", "state": "PB" },
	  "1297": { "code": "1297", "label": "CASSERENGUE", "state": "PB" },
	  "1298": { "code": "1298", "label": "CATINGUEIRA", "state": "PB" },
	  "1299": { "code": "1299", "label": "CATOLÉ DO ROCHA", "state": "PB" },
	  "1300": { "code": "1300", "label": "CATURITÉ", "state": "PB" },
	  "1301": { "code": "1301", "label": "CONCEIÇÃO", "state": "PB" },
	  "1302": { "code": "1302", "label": "CONDADO", "state": "PB" },
	  "1303": { "code": "1303", "label": "CONDE", "state": "PB" },
	  "1304": { "code": "1304", "label": "CONGO", "state": "PB" },
	  "1305": { "code": "1305", "label": "COREMAS", "state": "PB" },
	  "1306": { "code": "1306", "label": "COXIXOLA", "state": "PB" },
	  "1307": { "code": "1307", "label": "CRUZ DO ESPÍRITO SANTO", "state": "PB" },
	  "1308": { "code": "1308", "label": "CUBATI", "state": "PB" },
	  "1309": { "code": "1309", "label": "CUITÉ", "state": "PB" },
	  "1310": { "code": "1310", "label": "CUITEGI", "state": "PB" },
	  "1311": { "code": "1311", "label": "CUITÉ DE MAMANGUAPE", "state": "PB" },
	  "1312": { "code": "1312", "label": "CURRAL DE CIMA", "state": "PB" },
	  "1313": { "code": "1313", "label": "CURRAL VELHO", "state": "PB" },
	  "1314": { "code": "1314", "label": "DAMIÃO", "state": "PB" },
	  "1315": { "code": "1315", "label": "DESTERRO", "state": "PB" },
	  "1316": { "code": "1316", "label": "VISTA SERRANA", "state": "PB" },
	  "1317": { "code": "1317", "label": "DIAMANTE", "state": "PB" },
	  "1318": { "code": "1318", "label": "DONA INÊS", "state": "PB" },
	  "1319": { "code": "1319", "label": "DUAS ESTRADAS", "state": "PB" },
	  "1320": { "code": "1320", "label": "EMAS", "state": "PB" },
	  "1321": { "code": "1321", "label": "ESPERANÇA", "state": "PB" },
	  "1322": { "code": "1322", "label": "FAGUNDES", "state": "PB" },
	  "1323": { "code": "1323", "label": "FREI MARTINHO", "state": "PB" },
	  "1324": { "code": "1324", "label": "GADO BRAVO", "state": "PB" },
	  "1325": { "code": "1325", "label": "GUARABIRA", "state": "PB" },
	  "1326": { "code": "1326", "label": "GURINHÉM", "state": "PB" },
	  "1327": { "code": "1327", "label": "GURJÃO", "state": "PB" },
	  "1328": { "code": "1328", "label": "IBIARA", "state": "PB" },
	  "1329": { "code": "1329", "label": "IMACULADA", "state": "PB" },
	  "1330": { "code": "1330", "label": "INGÁ", "state": "PB" },
	  "1331": { "code": "1331", "label": "ITABAIANA", "state": "PB" },
	  "1332": { "code": "1332", "label": "ITAPORANGA", "state": "PB" },
	  "1333": { "code": "1333", "label": "ITAPOROROCA", "state": "PB" },
	  "1334": { "code": "1334", "label": "ITATUBA", "state": "PB" },
	  "1335": { "code": "1335", "label": "JACARAÚ", "state": "PB" },
	  "1336": { "code": "1336", "label": "JERICÓ", "state": "PB" },
	  "1337": { "code": "1337", "label": "JOÃO PESSOA", "state": "PB" },
	  "1338": { "code": "1338", "label": "JUAREZ TÁVORA", "state": "PB" },
	  "1339": { "code": "1339", "label": "JUAZEIRINHO", "state": "PB" },
	  "1340": { "code": "1340", "label": "JUNCO DO SERIDÓ", "state": "PB" },
	  "1341": { "code": "1341", "label": "JURIPIRANGA", "state": "PB" },
	  "1342": { "code": "1342", "label": "JURU", "state": "PB" },
	  "1343": { "code": "1343", "label": "LAGOA", "state": "PB" },
	  "1344": { "code": "1344", "label": "LAGOA DE DENTRO", "state": "PB" },
	  "1345": { "code": "1345", "label": "LAGOA SECA", "state": "PB" },
	  "1346": { "code": "1346", "label": "LASTRO", "state": "PB" },
	  "1347": { "code": "1347", "label": "LIVRAMENTO", "state": "PB" },
	  "1348": { "code": "1348", "label": "LOGRADOURO", "state": "PB" },
	  "1349": { "code": "1349", "label": "LUCENA", "state": "PB" },
	  "1350": { "code": "1350", "label": "MÃE D'ÁGUA", "state": "PB" },
	  "1351": { "code": "1351", "label": "MALTA", "state": "PB" },
	  "1352": { "code": "1352", "label": "MAMANGUAPE", "state": "PB" },
	  "1353": { "code": "1353", "label": "MANAÍRA", "state": "PB" },
	  "1354": { "code": "1354", "label": "MARCAÇÃO", "state": "PB" },
	  "1355": { "code": "1355", "label": "MARI", "state": "PB" },
	  "1356": { "code": "1356", "label": "MARIZÓPOLIS", "state": "PB" },
	  "1357": { "code": "1357", "label": "MASSARANDUBA", "state": "PB" },
	  "1358": { "code": "1358", "label": "MATARACA", "state": "PB" },
	  "1359": { "code": "1359", "label": "MATINHAS", "state": "PB" },
	  "1360": { "code": "1360", "label": "MATO GROSSO", "state": "PB" },
	  "1361": { "code": "1361", "label": "MATURÉIA", "state": "PB" },
	  "1362": { "code": "1362", "label": "MOGEIRO", "state": "PB" },
	  "1363": { "code": "1363", "label": "MONTADAS", "state": "PB" },
	  "1364": { "code": "1364", "label": "MONTE HOREBE", "state": "PB" },
	  "1365": { "code": "1365", "label": "MONTEIRO", "state": "PB" },
	  "1366": { "code": "1366", "label": "MULUNGU", "state": "PB" },
	  "1367": { "code": "1367", "label": "NATUBA", "state": "PB" },
	  "1368": { "code": "1368", "label": "NAZAREZINHO", "state": "PB" },
	  "1369": { "code": "1369", "label": "NOVA FLORESTA", "state": "PB" },
	  "1370": { "code": "1370", "label": "NOVA OLINDA", "state": "PB" },
	  "1371": { "code": "1371", "label": "NOVA PALMEIRA", "state": "PB" },
	  "1372": { "code": "1372", "label": "OLHO D'ÁGUA", "state": "PB" },
	  "1373": { "code": "1373", "label": "OLIVEDOS", "state": "PB" },
	  "1374": { "code": "1374", "label": "OURO VELHO", "state": "PB" },
	  "1375": { "code": "1375", "label": "PARARI", "state": "PB" },
	  "1376": { "code": "1376", "label": "PASSAGEM", "state": "PB" },
	  "1377": { "code": "1377", "label": "PATOS", "state": "PB" },
	  "1378": { "code": "1378", "label": "PAULISTA", "state": "PB" },
	  "1379": { "code": "1379", "label": "PEDRA BRANCA", "state": "PB" },
	  "1380": { "code": "1380", "label": "PEDRA LAVRADA", "state": "PB" },
	  "1381": { "code": "1381", "label": "PEDRAS DE FOGO", "state": "PB" },
	  "1382": { "code": "1382", "label": "PIANCÓ", "state": "PB" },
	  "1383": { "code": "1383", "label": "PICUÍ", "state": "PB" },
	  "1384": { "code": "1384", "label": "PILAR", "state": "PB" },
	  "1385": { "code": "1385", "label": "PILÕES", "state": "PB" },
	  "1386": { "code": "1386", "label": "PILÕEZINHOS", "state": "PB" },
	  "1387": { "code": "1387", "label": "PIRPIRITUBA", "state": "PB" },
	  "1388": { "code": "1388", "label": "PITIMBU", "state": "PB" },
	  "1389": { "code": "1389", "label": "POCINHOS", "state": "PB" },
	  "1390": { "code": "1390", "label": "POÇO DANTAS", "state": "PB" },
	  "1391": { "code": "1391", "label": "POÇO DE JOSÉ DE MOURA", "state": "PB" },
	  "1392": { "code": "1392", "label": "POMBAL", "state": "PB" },
	  "1393": { "code": "1393", "label": "PRATA", "state": "PB" },
	  "1394": { "code": "1394", "label": "PRINCESA ISABEL", "state": "PB" },
	  "1395": { "code": "1395", "label": "PUXINANÃ", "state": "PB" },
	  "1396": { "code": "1396", "label": "QUEIMADAS", "state": "PB" },
	  "1397": { "code": "1397", "label": "QUIXABÁ", "state": "PB" },
	  "1398": { "code": "1398", "label": "REMÍGIO", "state": "PB" },
	  "1399": { "code": "1399", "label": "PEDRO RÉGIS", "state": "PB" },
	  "1400": { "code": "1400", "label": "RIACHÃO", "state": "PB" },
	  "1401": { "code": "1401", "label": "RIACHÃO DO BACAMARTE", "state": "PB" },
	  "1402": { "code": "1402", "label": "RIACHÃO DO POÇO", "state": "PB" },
	  "1403": { "code": "1403", "label": "RIACHO DE SANTO ANTÔNIO", "state": "PB" },
	  "1404": { "code": "1404", "label": "RIACHO DOS CAVALOS", "state": "PB" },
	  "1405": { "code": "1405", "label": "RIO TINTO", "state": "PB" },
	  "1406": { "code": "1406", "label": "SALGADINHO", "state": "PB" },
	  "1407": { "code": "1407", "label": "SALGADO DE SÃO FÉLIX", "state": "PB" },
	  "1408": { "code": "1408", "label": "SANTA CECÍLIA", "state": "PB" },
	  "1409": { "code": "1409", "label": "SANTA CRUZ", "state": "PB" },
	  "1410": { "code": "1410", "label": "SANTA HELENA", "state": "PB" },
	  "1411": { "code": "1411", "label": "SANTA INÊS", "state": "PB" },
	  "1412": { "code": "1412", "label": "SANTA LUZIA", "state": "PB" },
	  "1413": { "code": "1413", "label": "SANTANA DE MANGUEIRA", "state": "PB" },
	  "1414": { "code": "1414", "label": "SANTANA DOS GARROTES", "state": "PB" },
	  "1415": { "code": "1415", "label": "SANTARÉM", "state": "PB" },
	  "1416": { "code": "1416", "label": "SANTA RITA", "state": "PB" },
	  "1417": { "code": "1417", "label": "SANTA TERESINHA", "state": "PB" },
	  "1418": { "code": "1418", "label": "SANTO ANDRÉ", "state": "PB" },
	  "1419": { "code": "1419", "label": "SÃO BENTO", "state": "PB" },
	  "1420": { "code": "1420", "label": "SÃO BENTINHO", "state": "PB" },
	  "1421": { "code": "1421", "label": "SÃO DOMINGOS DO CARIRI", "state": "PB" },
	  "1422": { "code": "1422", "label": "SÃO DOMINGOS", "state": "PB" },
	  "1423": { "code": "1423", "label": "SÃO FRANCISCO", "state": "PB" },
	  "1424": { "code": "1424", "label": "SÃO JOÃO DO CARIRI", "state": "PB" },
	  "1425": { "code": "1425", "label": "SÃO JOÃO DO TIGRE", "state": "PB" },
	  "1426": { "code": "1426", "label": "SÃO JOSÉ DA LAGOA TAPADA", "state": "PB" },
	  "1427": { "code": "1427", "label": "SÃO JOSÉ DE CAIANA", "state": "PB" },
	  "1428": { "code": "1428", "label": "SÃO JOSÉ DE ESPINHARAS", "state": "PB" },
	  "1429": { "code": "1429", "label": "SÃO JOSÉ DOS RAMOS", "state": "PB" },
	  "1430": { "code": "1430", "label": "SÃO JOSÉ DE PIRANHAS", "state": "PB" },
	  "1431": { "code": "1431", "label": "SÃO JOSÉ DE PRINCESA", "state": "PB" },
	  "1432": { "code": "1432", "label": "SÃO JOSÉ DO BONFIM", "state": "PB" },
	  "1433": { "code": "1433", "label": "SÃO JOSÉ DO BREJO DO CRUZ", "state": "PB" },
	  "1434": { "code": "1434", "label": "SÃO JOSÉ DO SABUGI", "state": "PB" },
	  "1435": { "code": "1435", "label": "SÃO JOSÉ DOS CORDEIROS", "state": "PB" },
	  "1436": { "code": "1436", "label": "SÃO MAMEDE", "state": "PB" },
	  "1437": { "code": "1437", "label": "SÃO MIGUEL DE TAIPU", "state": "PB" },
	  "1438": { "code": "1438", "label": "SÃO SEBASTIÃO DE LAGOA DE ROÇA", "state": "PB" },
	  "1439": { "code": "1439", "label": "SÃO SEBASTIÃO DO UMBUZEIRO", "state": "PB" },
	  "1440": { "code": "1440", "label": "SAPÉ", "state": "PB" },
	  "1441": { "code": "1441", "label": "SERIDÓ", "state": "PB" },
	  "1442": { "code": "1442", "label": "SERRA BRANCA", "state": "PB" },
	  "1443": { "code": "1443", "label": "SERRA DA RAIZ", "state": "PB" },
	  "1444": { "code": "1444", "label": "SERRA GRANDE", "state": "PB" },
	  "1445": { "code": "1445", "label": "SERRA REDONDA", "state": "PB" },
	  "1446": { "code": "1446", "label": "SERRARIA", "state": "PB" },
	  "1447": { "code": "1447", "label": "SERTÃOZINHO", "state": "PB" },
	  "1448": { "code": "1448", "label": "SOBRADO", "state": "PB" },
	  "1449": { "code": "1449", "label": "SOLÂNEA", "state": "PB" },
	  "1450": { "code": "1450", "label": "SOLEDADE", "state": "PB" },
	  "1451": { "code": "1451", "label": "SOSSÊGO", "state": "PB" },
	  "1452": { "code": "1452", "label": "SOUSA", "state": "PB" },
	  "1453": { "code": "1453", "label": "SUMÉ", "state": "PB" },
	  "1454": { "code": "1454", "label": "TACIMA", "state": "PB" },
	  "1455": { "code": "1455", "label": "TAPEROÁ", "state": "PB" },
	  "1456": { "code": "1456", "label": "TAVARES", "state": "PB" },
	  "1457": { "code": "1457", "label": "TEIXEIRA", "state": "PB" },
	  "1458": { "code": "1458", "label": "TENÓRIO", "state": "PB" },
	  "1459": { "code": "1459", "label": "TRIUNFO", "state": "PB" },
	  "1460": { "code": "1460", "label": "UIRAÚNA", "state": "PB" },
	  "1461": { "code": "1461", "label": "UMBUZEIRO", "state": "PB" },
	  "1462": { "code": "1462", "label": "VÁRZEA", "state": "PB" },
	  "1463": { "code": "1463", "label": "VIEIRÓPOLIS", "state": "PB" },
	  "1464": { "code": "1464", "label": "ZABELÊ", "state": "PB" },
	  "1465": { "code": "1465", "label": "ABREU E LIMA", "state": "PE" },
	  "1466": { "code": "1466", "label": "AFOGADOS DA INGAZEIRA", "state": "PE" },
	  "1467": { "code": "1467", "label": "AFRÂNIO", "state": "PE" },
	  "1468": { "code": "1468", "label": "AGRESTINA", "state": "PE" },
	  "1469": { "code": "1469", "label": "ÁGUA PRETA", "state": "PE" },
	  "1470": { "code": "1470", "label": "ÁGUAS BELAS", "state": "PE" },
	  "1471": { "code": "1471", "label": "ALAGOINHA", "state": "PE" },
	  "1472": { "code": "1472", "label": "ALIANÇA", "state": "PE" },
	  "1473": { "code": "1473", "label": "ALTINHO", "state": "PE" },
	  "1474": { "code": "1474", "label": "AMARAJI", "state": "PE" },
	  "1475": { "code": "1475", "label": "ANGELIM", "state": "PE" },
	  "1476": { "code": "1476", "label": "ARAÇOIABA", "state": "PE" },
	  "1477": { "code": "1477", "label": "ARARIPINA", "state": "PE" },
	  "1478": { "code": "1478", "label": "ARCOVERDE", "state": "PE" },
	  "1479": { "code": "1479", "label": "BARRA DE GUABIRABA", "state": "PE" },
	  "1480": { "code": "1480", "label": "BARREIROS", "state": "PE" },
	  "1481": { "code": "1481", "label": "BELÉM DE MARIA", "state": "PE" },
	  "1482": { "code": "1482", "label": "BELÉM DO SÃO FRANCISCO", "state": "PE" },
	  "1483": { "code": "1483", "label": "BELO JARDIM", "state": "PE" },
	  "1484": { "code": "1484", "label": "BETÂNIA", "state": "PE" },
	  "1485": { "code": "1485", "label": "BEZERROS", "state": "PE" },
	  "1486": { "code": "1486", "label": "BODOCÓ", "state": "PE" },
	  "1487": { "code": "1487", "label": "BOM CONSELHO", "state": "PE" },
	  "1488": { "code": "1488", "label": "BOM JARDIM", "state": "PE" },
	  "1489": { "code": "1489", "label": "BONITO", "state": "PE" },
	  "1490": { "code": "1490", "label": "BREJÃO", "state": "PE" },
	  "1491": { "code": "1491", "label": "BREJINHO", "state": "PE" },
	  "1492": { "code": "1492", "label": "BREJO DA MADRE DE DEUS", "state": "PE" },
	  "1493": { "code": "1493", "label": "BUENOS AIRES", "state": "PE" },
	  "1494": { "code": "1494", "label": "BUÍQUE", "state": "PE" },
	  "1495": { "code": "1495", "label": "CABO DE SANTO AGOSTINHO", "state": "PE" },
	  "1496": { "code": "1496", "label": "CABROBÓ", "state": "PE" },
	  "1497": { "code": "1497", "label": "CACHOEIRINHA", "state": "PE" },
	  "1498": { "code": "1498", "label": "CAETÉS", "state": "PE" },
	  "1499": { "code": "1499", "label": "CALÇADO", "state": "PE" },
	  "1500": { "code": "1500", "label": "CALUMBI", "state": "PE" },
	  "1501": { "code": "1501", "label": "CAMARAGIBE", "state": "PE" },
	  "1502": { "code": "1502", "label": "CAMOCIM DE SÃO FÉLIX", "state": "PE" },
	  "1503": { "code": "1503", "label": "CAMUTANGA", "state": "PE" },
	  "1504": { "code": "1504", "label": "CANHOTINHO", "state": "PE" },
	  "1505": { "code": "1505", "label": "CAPOEIRAS", "state": "PE" },
	  "1506": { "code": "1506", "label": "CARNAÍBA", "state": "PE" },
	  "1507": { "code": "1507", "label": "CARNAUBEIRA DA PENHA", "state": "PE" },
	  "1508": { "code": "1508", "label": "CARPINA", "state": "PE" },
	  "1509": { "code": "1509", "label": "CARUARU", "state": "PE" },
	  "1510": { "code": "1510", "label": "CASINHAS", "state": "PE" },
	  "1511": { "code": "1511", "label": "CATENDE", "state": "PE" },
	  "1512": { "code": "1512", "label": "CEDRO", "state": "PE" },
	  "1513": { "code": "1513", "label": "CHÃ DE ALEGRIA", "state": "PE" },
	  "1514": { "code": "1514", "label": "CHÃ GRANDE", "state": "PE" },
	  "1515": { "code": "1515", "label": "CONDADO", "state": "PE" },
	  "1516": { "code": "1516", "label": "CORRENTES", "state": "PE" },
	  "1517": { "code": "1517", "label": "CORTÊS", "state": "PE" },
	  "1518": { "code": "1518", "label": "CUMARU", "state": "PE" },
	  "1519": { "code": "1519", "label": "CUPIRA", "state": "PE" },
	  "1520": { "code": "1520", "label": "CUSTÓDIA", "state": "PE" },
	  "1521": { "code": "1521", "label": "DORMENTES", "state": "PE" },
	  "1522": { "code": "1522", "label": "ESCADA", "state": "PE" },
	  "1523": { "code": "1523", "label": "EXU", "state": "PE" },
	  "1524": { "code": "1524", "label": "FEIRA NOVA", "state": "PE" },
	  "1525": { "code": "1525", "label": "FERNANDO DE NORONHA", "state": "PE" },
	  "1526": { "code": "1526", "label": "FERREIROS", "state": "PE" },
	  "1527": { "code": "1527", "label": "FLORES", "state": "PE" },
	  "1528": { "code": "1528", "label": "FLORESTA", "state": "PE" },
	  "1529": { "code": "1529", "label": "FREI MIGUELINHO", "state": "PE" },
	  "1530": { "code": "1530", "label": "GAMELEIRA", "state": "PE" },
	  "1531": { "code": "1531", "label": "GARANHUNS", "state": "PE" },
	  "1532": { "code": "1532", "label": "GLÓRIA DO GOITÁ", "state": "PE" },
	  "1533": { "code": "1533", "label": "GOIANA", "state": "PE" },
	  "1534": { "code": "1534", "label": "GRANITO", "state": "PE" },
	  "1535": { "code": "1535", "label": "GRAVATÁ", "state": "PE" },
	  "1536": { "code": "1536", "label": "IATI", "state": "PE" },
	  "1537": { "code": "1537", "label": "IBIMIRIM", "state": "PE" },
	  "1538": { "code": "1538", "label": "IBIRAJUBA", "state": "PE" },
	  "1539": { "code": "1539", "label": "IGARASSU", "state": "PE" },
	  "1540": { "code": "1540", "label": "IGUARACI", "state": "PE" },
	  "1541": { "code": "1541", "label": "INAJÁ", "state": "PE" },
	  "1542": { "code": "1542", "label": "INGAZEIRA", "state": "PE" },
	  "1543": { "code": "1543", "label": "IPOJUCA", "state": "PE" },
	  "1544": { "code": "1544", "label": "IPUBI", "state": "PE" },
	  "1545": { "code": "1545", "label": "ITACURUBA", "state": "PE" },
	  "1546": { "code": "1546", "label": "ITAÍBA", "state": "PE" },
	  "1547": { "code": "1547", "label": "ILHA DE ITAMARACÁ", "state": "PE" },
	  "1548": { "code": "1548", "label": "ITAMBÉ", "state": "PE" },
	  "1549": { "code": "1549", "label": "ITAPETIM", "state": "PE" },
	  "1550": { "code": "1550", "label": "ITAPISSUMA", "state": "PE" },
	  "1551": { "code": "1551", "label": "ITAQUITINGA", "state": "PE" },
	  "1552": { "code": "1552", "label": "JABOATÃO DOS GUARARAPES", "state": "PE" },
	  "1553": { "code": "1553", "label": "JAQUEIRA", "state": "PE" },
	  "1554": { "code": "1554", "label": "JATAÚBA", "state": "PE" },
	  "1555": { "code": "1555", "label": "JATOBÁ", "state": "PE" },
	  "1556": { "code": "1556", "label": "JOÃO ALFREDO", "state": "PE" },
	  "1557": { "code": "1557", "label": "JOAQUIM NABUCO", "state": "PE" },
	  "1558": { "code": "1558", "label": "JUCATI", "state": "PE" },
	  "1559": { "code": "1559", "label": "JUPI", "state": "PE" },
	  "1560": { "code": "1560", "label": "JUREMA", "state": "PE" },
	  "1561": { "code": "1561", "label": "LAGOA DO CARRO", "state": "PE" },
	  "1562": { "code": "1562", "label": "LAGOA DE ITAENGA", "state": "PE" },
	  "1563": { "code": "1563", "label": "LAGOA DO OURO", "state": "PE" },
	  "1564": { "code": "1564", "label": "LAGOA DOS GATOS", "state": "PE" },
	  "1565": { "code": "1565", "label": "LAGOA GRANDE", "state": "PE" },
	  "1566": { "code": "1566", "label": "LAJEDO", "state": "PE" },
	  "1567": { "code": "1567", "label": "LIMOEIRO", "state": "PE" },
	  "1568": { "code": "1568", "label": "MACAPARANA", "state": "PE" },
	  "1569": { "code": "1569", "label": "MACHADOS", "state": "PE" },
	  "1570": { "code": "1570", "label": "MANARI", "state": "PE" },
	  "1571": { "code": "1571", "label": "MARAIAL", "state": "PE" },
	  "1572": { "code": "1572", "label": "MIRANDIBA", "state": "PE" },
	  "1573": { "code": "1573", "label": "MORENO", "state": "PE" },
	  "1574": { "code": "1574", "label": "NAZARÉ DA MATA", "state": "PE" },
	  "1575": { "code": "1575", "label": "OLINDA", "state": "PE" },
	  "1576": { "code": "1576", "label": "OROBÓ", "state": "PE" },
	  "1577": { "code": "1577", "label": "OROCÓ", "state": "PE" },
	  "1578": { "code": "1578", "label": "OURICURI", "state": "PE" },
	  "1579": { "code": "1579", "label": "PALMARES", "state": "PE" },
	  "1580": { "code": "1580", "label": "PALMEIRINA", "state": "PE" },
	  "1581": { "code": "1581", "label": "PANELAS", "state": "PE" },
	  "1582": { "code": "1582", "label": "PARANATAMA", "state": "PE" },
	  "1583": { "code": "1583", "label": "PARNAMIRIM", "state": "PE" },
	  "1584": { "code": "1584", "label": "PASSIRA", "state": "PE" },
	  "1585": { "code": "1585", "label": "PAUDALHO", "state": "PE" },
	  "1586": { "code": "1586", "label": "PAULISTA", "state": "PE" },
	  "1587": { "code": "1587", "label": "PEDRA", "state": "PE" },
	  "1588": { "code": "1588", "label": "PESQUEIRA", "state": "PE" },
	  "1589": { "code": "1589", "label": "PETROLÂNDIA", "state": "PE" },
	  "1590": { "code": "1590", "label": "PETROLINA", "state": "PE" },
	  "1591": { "code": "1591", "label": "POÇÃO", "state": "PE" },
	  "1592": { "code": "1592", "label": "POMBOS", "state": "PE" },
	  "1593": { "code": "1593", "label": "PRIMAVERA", "state": "PE" },
	  "1594": { "code": "1594", "label": "QUIPAPÁ", "state": "PE" },
	  "1595": { "code": "1595", "label": "QUIXABA", "state": "PE" },
	  "1596": { "code": "1596", "label": "RECIFE", "state": "PE" },
	  "1597": { "code": "1597", "label": "RIACHO DAS ALMAS", "state": "PE" },
	  "1598": { "code": "1598", "label": "RIBEIRÃO", "state": "PE" },
	  "1599": { "code": "1599", "label": "RIO FORMOSO", "state": "PE" },
	  "1600": { "code": "1600", "label": "SAIRÉ", "state": "PE" },
	  "1601": { "code": "1601", "label": "SALGADINHO", "state": "PE" },
	  "1602": { "code": "1602", "label": "SALGUEIRO", "state": "PE" },
	  "1603": { "code": "1603", "label": "SALOÁ", "state": "PE" },
	  "1604": { "code": "1604", "label": "SANHARÓ", "state": "PE" },
	  "1605": { "code": "1605", "label": "SANTA CRUZ", "state": "PE" },
	  "1606": { "code": "1606", "label": "SANTA CRUZ DA BAIXA VERDE", "state": "PE" },
	  "1607": { "code": "1607", "label": "SANTA CRUZ DO CAPIBARIBE", "state": "PE" },
	  "1608": { "code": "1608", "label": "SANTA FILOMENA", "state": "PE" },
	  "1609": { "code": "1609", "label": "SANTA MARIA DA BOA VISTA", "state": "PE" },
	  "1610": { "code": "1610", "label": "SANTA MARIA DO CAMBUCÁ", "state": "PE" },
	  "1611": { "code": "1611", "label": "SANTA TEREZINHA", "state": "PE" },
	  "1612": { "code": "1612", "label": "SÃO BENEDITO DO SUL", "state": "PE" },
	  "1613": { "code": "1613", "label": "SÃO BENTO DO UNA", "state": "PE" },
	  "1614": { "code": "1614", "label": "SÃO CAITANO", "state": "PE" },
	  "1615": { "code": "1615", "label": "SÃO JOÃO", "state": "PE" },
	  "1616": { "code": "1616", "label": "SÃO JOAQUIM DO MONTE", "state": "PE" },
	  "1617": { "code": "1617", "label": "SÃO JOSÉ DA COROA GRANDE", "state": "PE" },
	  "1618": { "code": "1618", "label": "SÃO JOSÉ DO BELMONTE", "state": "PE" },
	  "1619": { "code": "1619", "label": "SÃO JOSÉ DO EGITO", "state": "PE" },
	  "1620": { "code": "1620", "label": "SÃO LOURENÇO DA MATA", "state": "PE" },
	  "1621": { "code": "1621", "label": "SÃO VICENTE FERRER", "state": "PE" },
	  "1622": { "code": "1622", "label": "SERRA TALHADA", "state": "PE" },
	  "1623": { "code": "1623", "label": "SERRITA", "state": "PE" },
	  "1624": { "code": "1624", "label": "SERTÂNIA", "state": "PE" },
	  "1625": { "code": "1625", "label": "SIRINHAÉM", "state": "PE" },
	  "1626": { "code": "1626", "label": "MOREILÂNDIA", "state": "PE" },
	  "1627": { "code": "1627", "label": "SOLIDÃO", "state": "PE" },
	  "1628": { "code": "1628", "label": "SURUBIM", "state": "PE" },
	  "1629": { "code": "1629", "label": "TABIRA", "state": "PE" },
	  "1630": { "code": "1630", "label": "TACAIMBÓ", "state": "PE" },
	  "1631": { "code": "1631", "label": "TACARATU", "state": "PE" },
	  "1632": { "code": "1632", "label": "TAMANDARÉ", "state": "PE" },
	  "1633": { "code": "1633", "label": "TAQUARITINGA DO NORTE", "state": "PE" },
	  "1634": { "code": "1634", "label": "TEREZINHA", "state": "PE" },
	  "1635": { "code": "1635", "label": "TERRA NOVA", "state": "PE" },
	  "1636": { "code": "1636", "label": "TIMBAÚBA", "state": "PE" },
	  "1637": { "code": "1637", "label": "TORITAMA", "state": "PE" },
	  "1638": { "code": "1638", "label": "TRACUNHAÉM", "state": "PE" },
	  "1639": { "code": "1639", "label": "TRINDADE", "state": "PE" },
	  "1640": { "code": "1640", "label": "TRIUNFO", "state": "PE" },
	  "1641": { "code": "1641", "label": "TUPANATINGA", "state": "PE" },
	  "1642": { "code": "1642", "label": "TUPARETAMA", "state": "PE" },
	  "1643": { "code": "1643", "label": "VENTUROSA", "state": "PE" },
	  "1644": { "code": "1644", "label": "VERDEJANTE", "state": "PE" },
	  "1645": { "code": "1645", "label": "VERTENTE DO LÉRIO", "state": "PE" },
	  "1646": { "code": "1646", "label": "VERTENTES", "state": "PE" },
	  "1647": { "code": "1647", "label": "VICÊNCIA", "state": "PE" },
	  "1648": { "code": "1648", "label": "VITÓRIA DE SANTO ANTÃO", "state": "PE" },
	  "1649": { "code": "1649", "label": "XEXÉU", "state": "PE" },
	  "1650": { "code": "1650", "label": "ÁGUA BRANCA", "state": "AL" },
	  "1651": { "code": "1651", "label": "ANADIA", "state": "AL" },
	  "1652": { "code": "1652", "label": "ARAPIRACA", "state": "AL" },
	  "1653": { "code": "1653", "label": "ATALAIA", "state": "AL" },
	  "1654": { "code": "1654", "label": "BARRA DE SANTO ANTÔNIO", "state": "AL" },
	  "1655": { "code": "1655", "label": "BARRA DE SÃO MIGUEL", "state": "AL" },
	  "1656": { "code": "1656", "label": "BATALHA", "state": "AL" },
	  "1657": { "code": "1657", "label": "BELÉM", "state": "AL" },
	  "1658": { "code": "1658", "label": "BELO MONTE", "state": "AL" },
	  "1659": { "code": "1659", "label": "BOCA DA MATA", "state": "AL" },
	  "1660": { "code": "1660", "label": "BRANQUINHA", "state": "AL" },
	  "1661": { "code": "1661", "label": "CACIMBINHAS", "state": "AL" },
	  "1662": { "code": "1662", "label": "CAJUEIRO", "state": "AL" },
	  "1663": { "code": "1663", "label": "CAMPESTRE", "state": "AL" },
	  "1664": { "code": "1664", "label": "CAMPO ALEGRE", "state": "AL" },
	  "1665": { "code": "1665", "label": "CAMPO GRANDE", "state": "AL" },
	  "1666": { "code": "1666", "label": "CANAPI", "state": "AL" },
	  "1667": { "code": "1667", "label": "CAPELA", "state": "AL" },
	  "1668": { "code": "1668", "label": "CARNEIROS", "state": "AL" },
	  "1669": { "code": "1669", "label": "CHÃ PRETA", "state": "AL" },
	  "1670": { "code": "1670", "label": "COITÉ DO NÓIA", "state": "AL" },
	  "1671": { "code": "1671", "label": "COLÔNIA LEOPOLDINA", "state": "AL" },
	  "1672": { "code": "1672", "label": "COQUEIRO SECO", "state": "AL" },
	  "1673": { "code": "1673", "label": "CORURIPE", "state": "AL" },
	  "1674": { "code": "1674", "label": "CRAÍBAS", "state": "AL" },
	  "1675": { "code": "1675", "label": "DELMIRO GOUVEIA", "state": "AL" },
	  "1676": { "code": "1676", "label": "DOIS RIACHOS", "state": "AL" },
	  "1677": { "code": "1677", "label": "ESTRELA DE ALAGOAS", "state": "AL" },
	  "1678": { "code": "1678", "label": "FEIRA GRANDE", "state": "AL" },
	  "1679": { "code": "1679", "label": "FELIZ DESERTO", "state": "AL" },
	  "1680": { "code": "1680", "label": "FLEXEIRAS", "state": "AL" },
	  "1681": { "code": "1681", "label": "GIRAU DO PONCIANO", "state": "AL" },
	  "1682": { "code": "1682", "label": "IBATEGUARA", "state": "AL" },
	  "1683": { "code": "1683", "label": "IGACI", "state": "AL" },
	  "1684": { "code": "1684", "label": "IGREJA NOVA", "state": "AL" },
	  "1685": { "code": "1685", "label": "INHAPI", "state": "AL" },
	  "1686": { "code": "1686", "label": "JACARÉ DOS HOMENS", "state": "AL" },
	  "1687": { "code": "1687", "label": "JACUÍPE", "state": "AL" },
	  "1688": { "code": "1688", "label": "JAPARATINGA", "state": "AL" },
	  "1689": { "code": "1689", "label": "JARAMATAIA", "state": "AL" },
	  "1690": { "code": "1690", "label": "JEQUIÁ DA PRAIA", "state": "AL" },
	  "1691": { "code": "1691", "label": "JOAQUIM GOMES", "state": "AL" },
	  "1692": { "code": "1692", "label": "JUNDIÁ", "state": "AL" },
	  "1693": { "code": "1693", "label": "JUNQUEIRO", "state": "AL" },
	  "1694": { "code": "1694", "label": "LAGOA DA CANOA", "state": "AL" },
	  "1695": { "code": "1695", "label": "LIMOEIRO DE ANADIA", "state": "AL" },
	  "1696": { "code": "1696", "label": "MACEIÓ", "state": "AL" },
	  "1697": { "code": "1697", "label": "MAJOR ISIDORO", "state": "AL" },
	  "1698": { "code": "1698", "label": "MARAGOGI", "state": "AL" },
	  "1699": { "code": "1699", "label": "MARAVILHA", "state": "AL" },
	  "1700": { "code": "1700", "label": "MARECHAL DEODORO", "state": "AL" },
	  "1701": { "code": "1701", "label": "MARIBONDO", "state": "AL" },
	  "1702": { "code": "1702", "label": "MAR VERMELHO", "state": "AL" },
	  "1703": { "code": "1703", "label": "MATA GRANDE", "state": "AL" },
	  "1704": { "code": "1704", "label": "MATRIZ DE CAMARAGIBE", "state": "AL" },
	  "1705": { "code": "1705", "label": "MESSIAS", "state": "AL" },
	  "1706": { "code": "1706", "label": "MINADOR DO NEGRÃO", "state": "AL" },
	  "1707": { "code": "1707", "label": "MONTEIRÓPOLIS", "state": "AL" },
	  "1708": { "code": "1708", "label": "MURICI", "state": "AL" },
	  "1709": { "code": "1709", "label": "NOVO LINO", "state": "AL" },
	  "1710": { "code": "1710", "label": "OLHO D'ÁGUA DAS FLORES", "state": "AL" },
	  "1711": { "code": "1711", "label": "OLHO D'ÁGUA DO CASADO", "state": "AL" },
	  "1712": { "code": "1712", "label": "OLHO D'ÁGUA GRANDE", "state": "AL" },
	  "1713": { "code": "1713", "label": "OLIVENÇA", "state": "AL" },
	  "1714": { "code": "1714", "label": "OURO BRANCO", "state": "AL" },
	  "1715": { "code": "1715", "label": "PALESTINA", "state": "AL" },
	  "1716": { "code": "1716", "label": "PALMEIRA DOS ÍNDIOS", "state": "AL" },
	  "1717": { "code": "1717", "label": "PÃO DE AÇÚCAR", "state": "AL" },
	  "1718": { "code": "1718", "label": "PARICONHA", "state": "AL" },
	  "1719": { "code": "1719", "label": "PARIPUEIRA", "state": "AL" },
	  "1720": { "code": "1720", "label": "PASSO DE CAMARAGIBE", "state": "AL" },
	  "1721": { "code": "1721", "label": "PAULO JACINTO", "state": "AL" },
	  "1722": { "code": "1722", "label": "PENEDO", "state": "AL" },
	  "1723": { "code": "1723", "label": "PIAÇABUÇU", "state": "AL" },
	  "1724": { "code": "1724", "label": "PILAR", "state": "AL" },
	  "1725": { "code": "1725", "label": "PINDOBA", "state": "AL" },
	  "1726": { "code": "1726", "label": "PIRANHAS", "state": "AL" },
	  "1727": { "code": "1727", "label": "POÇO DAS TRINCHEIRAS", "state": "AL" },
	  "1728": { "code": "1728", "label": "PORTO CALVO", "state": "AL" },
	  "1729": { "code": "1729", "label": "PORTO DE PEDRAS", "state": "AL" },
	  "1730": { "code": "1730", "label": "PORTO REAL DO COLÉGIO", "state": "AL" },
	  "1731": { "code": "1731", "label": "QUEBRANGULO", "state": "AL" },
	  "1732": { "code": "1732", "label": "RIO LARGO", "state": "AL" },
	  "1733": { "code": "1733", "label": "ROTEIRO", "state": "AL" },
	  "1734": { "code": "1734", "label": "SANTA LUZIA DO NORTE", "state": "AL" },
	  "1735": { "code": "1735", "label": "SANTANA DO IPANEMA", "state": "AL" },
	  "1736": { "code": "1736", "label": "SANTANA DO MUNDAÚ", "state": "AL" },
	  "1737": { "code": "1737", "label": "SÃO BRÁS", "state": "AL" },
	  "1738": { "code": "1738", "label": "SÃO JOSÉ DA LAJE", "state": "AL" },
	  "1739": { "code": "1739", "label": "SÃO JOSÉ DA TAPERA", "state": "AL" },
	  "1740": { "code": "1740", "label": "SÃO LUÍS DO QUITUNDE", "state": "AL" },
	  "1741": { "code": "1741", "label": "SÃO MIGUEL DOS CAMPOS", "state": "AL" },
	  "1742": { "code": "1742", "label": "SÃO MIGUEL DOS MILAGRES", "state": "AL" },
	  "1743": { "code": "1743", "label": "SÃO SEBASTIÃO", "state": "AL" },
	  "1744": { "code": "1744", "label": "SATUBA", "state": "AL" },
	  "1745": { "code": "1745", "label": "SENADOR RUI PALMEIRA", "state": "AL" },
	  "1746": { "code": "1746", "label": "TANQUE D'ARCA", "state": "AL" },
	  "1747": { "code": "1747", "label": "TAQUARANA", "state": "AL" },
	  "1748": { "code": "1748", "label": "TEOTÔNIO VILELA", "state": "AL" },
	  "1749": { "code": "1749", "label": "TRAIPU", "state": "AL" },
	  "1750": { "code": "1750", "label": "UNIÃO DOS PALMARES", "state": "AL" },
	  "1751": { "code": "1751", "label": "VIÇOSA", "state": "AL" },
	  "1752": { "code": "1752", "label": "AMPARO DE SÃO FRANCISCO", "state": "SE" },
	  "1753": { "code": "1753", "label": "AQUIDABÃ", "state": "SE" },
	  "1754": { "code": "1754", "label": "ARACAJU", "state": "SE" },
	  "1755": { "code": "1755", "label": "ARAUÁ", "state": "SE" },
	  "1756": { "code": "1756", "label": "AREIA BRANCA", "state": "SE" },
	  "1757": { "code": "1757", "label": "BARRA DOS COQUEIROS", "state": "SE" },
	  "1758": { "code": "1758", "label": "BOQUIM", "state": "SE" },
	  "1759": { "code": "1759", "label": "BREJO GRANDE", "state": "SE" },
	  "1760": { "code": "1760", "label": "CAMPO DO BRITO", "state": "SE" },
	  "1761": { "code": "1761", "label": "CANHOBA", "state": "SE" },
	  "1762": { "code": "1762", "label": "CANINDÉ DE SÃO FRANCISCO", "state": "SE" },
	  "1763": { "code": "1763", "label": "CAPELA", "state": "SE" },
	  "1764": { "code": "1764", "label": "CARIRA", "state": "SE" },
	  "1765": { "code": "1765", "label": "CARMÓPOLIS", "state": "SE" },
	  "1766": { "code": "1766", "label": "CEDRO DE SÃO JOÃO", "state": "SE" },
	  "1767": { "code": "1767", "label": "CRISTINÁPOLIS", "state": "SE" },
	  "1768": { "code": "1768", "label": "CUMBE", "state": "SE" },
	  "1769": { "code": "1769", "label": "DIVINA PASTORA", "state": "SE" },
	  "1770": { "code": "1770", "label": "ESTÂNCIA", "state": "SE" },
	  "1771": { "code": "1771", "label": "FEIRA NOVA", "state": "SE" },
	  "1772": { "code": "1772", "label": "FREI PAULO", "state": "SE" },
	  "1773": { "code": "1773", "label": "GARARU", "state": "SE" },
	  "1774": { "code": "1774", "label": "GENERAL MAYNARD", "state": "SE" },
	  "1775": { "code": "1775", "label": "GRACHO CARDOSO", "state": "SE" },
	  "1776": { "code": "1776", "label": "ILHA DAS FLORES", "state": "SE" },
	  "1777": { "code": "1777", "label": "INDIAROBA", "state": "SE" },
	  "1778": { "code": "1778", "label": "ITABAIANA", "state": "SE" },
	  "1779": { "code": "1779", "label": "ITABAIANINHA", "state": "SE" },
	  "1780": { "code": "1780", "label": "ITABI", "state": "SE" },
	  "1781": { "code": "1781", "label": "ITAPORANGA D'AJUDA", "state": "SE" },
	  "1782": { "code": "1782", "label": "JAPARATUBA", "state": "SE" },
	  "1783": { "code": "1783", "label": "JAPOATÃ", "state": "SE" },
	  "1784": { "code": "1784", "label": "LAGARTO", "state": "SE" },
	  "1785": { "code": "1785", "label": "LARANJEIRAS", "state": "SE" },
	  "1786": { "code": "1786", "label": "MACAMBIRA", "state": "SE" },
	  "1787": { "code": "1787", "label": "MALHADA DOS BOIS", "state": "SE" },
	  "1788": { "code": "1788", "label": "MALHADOR", "state": "SE" },
	  "1789": { "code": "1789", "label": "MARUIM", "state": "SE" },
	  "1790": { "code": "1790", "label": "MOITA BONITA", "state": "SE" },
	  "1791": { "code": "1791", "label": "MONTE ALEGRE DE SERGIPE", "state": "SE" },
	  "1792": { "code": "1792", "label": "MURIBECA", "state": "SE" },
	  "1793": { "code": "1793", "label": "NEÓPOLIS", "state": "SE" },
	  "1794": { "code": "1794", "label": "NOSSA SENHORA APARECIDA", "state": "SE" },
	  "1795": { "code": "1795", "label": "NOSSA SENHORA DA GLÓRIA", "state": "SE" },
	  "1796": { "code": "1796", "label": "NOSSA SENHORA DAS DORES", "state": "SE" },
	  "1797": { "code": "1797", "label": "NOSSA SENHORA DE LOURDES", "state": "SE" },
	  "1798": { "code": "1798", "label": "NOSSA SENHORA DO SOCORRO", "state": "SE" },
	  "1799": { "code": "1799", "label": "PACATUBA", "state": "SE" },
	  "1800": { "code": "1800", "label": "PEDRA MOLE", "state": "SE" },
	  "1801": { "code": "1801", "label": "PEDRINHAS", "state": "SE" },
	  "1802": { "code": "1802", "label": "PINHÃO", "state": "SE" },
	  "1803": { "code": "1803", "label": "PIRAMBU", "state": "SE" },
	  "1804": { "code": "1804", "label": "POÇO REDONDO", "state": "SE" },
	  "1805": { "code": "1805", "label": "POÇO VERDE", "state": "SE" },
	  "1806": { "code": "1806", "label": "PORTO DA FOLHA", "state": "SE" },
	  "1807": { "code": "1807", "label": "PROPRIÁ", "state": "SE" },
	  "1808": { "code": "1808", "label": "RIACHÃO DO DANTAS", "state": "SE" },
	  "1809": { "code": "1809", "label": "RIACHUELO", "state": "SE" },
	  "1810": { "code": "1810", "label": "RIBEIRÓPOLIS", "state": "SE" },
	  "1811": { "code": "1811", "label": "ROSÁRIO DO CATETE", "state": "SE" },
	  "1812": { "code": "1812", "label": "SALGADO", "state": "SE" },
	  "1813": { "code": "1813", "label": "SANTA LUZIA DO ITANHY", "state": "SE" },
	  "1814": { "code": "1814", "label": "SANTANA DO SÃO FRANCISCO", "state": "SE" },
	  "1815": { "code": "1815", "label": "SANTA ROSA DE LIMA", "state": "SE" },
	  "1816": { "code": "1816", "label": "SANTO AMARO DAS BROTAS", "state": "SE" },
	  "1817": { "code": "1817", "label": "SÃO CRISTÓVÃO", "state": "SE" },
	  "1818": { "code": "1818", "label": "SÃO DOMINGOS", "state": "SE" },
	  "1819": { "code": "1819", "label": "SÃO FRANCISCO", "state": "SE" },
	  "1820": { "code": "1820", "label": "SÃO MIGUEL DO ALEIXO", "state": "SE" },
	  "1821": { "code": "1821", "label": "SIMÃO DIAS", "state": "SE" },
	  "1822": { "code": "1822", "label": "SIRIRI", "state": "SE" },
	  "1823": { "code": "1823", "label": "TELHA", "state": "SE" },
	  "1824": { "code": "1824", "label": "TOBIAS BARRETO", "state": "SE" },
	  "1825": { "code": "1825", "label": "TOMAR DO GERU", "state": "SE" },
	  "1826": { "code": "1826", "label": "UMBAÚBA", "state": "SE" },
	  "1827": { "code": "1827", "label": "ABAÍRA", "state": "BA" },
	  "1828": { "code": "1828", "label": "ABARÉ", "state": "BA" },
	  "1829": { "code": "1829", "label": "ACAJUTIBA", "state": "BA" },
	  "1830": { "code": "1830", "label": "ADUSTINA", "state": "BA" },
	  "1831": { "code": "1831", "label": "ÁGUA FRIA", "state": "BA" },
	  "1832": { "code": "1832", "label": "ÉRICO CARDOSO", "state": "BA" },
	  "1833": { "code": "1833", "label": "AIQUARA", "state": "BA" },
	  "1834": { "code": "1834", "label": "ALAGOINHAS", "state": "BA" },
	  "1835": { "code": "1835", "label": "ALCOBAÇA", "state": "BA" },
	  "1836": { "code": "1836", "label": "ALMADINA", "state": "BA" },
	  "1837": { "code": "1837", "label": "AMARGOSA", "state": "BA" },
	  "1838": { "code": "1838", "label": "AMÉLIA RODRIGUES", "state": "BA" },
	  "1839": { "code": "1839", "label": "AMÉRICA DOURADA", "state": "BA" },
	  "1840": { "code": "1840", "label": "ANAGÉ", "state": "BA" },
	  "1841": { "code": "1841", "label": "ANDARAÍ", "state": "BA" },
	  "1842": { "code": "1842", "label": "ANDORINHA", "state": "BA" },
	  "1843": { "code": "1843", "label": "ANGICAL", "state": "BA" },
	  "1844": { "code": "1844", "label": "ANGUERA", "state": "BA" },
	  "1845": { "code": "1845", "label": "ANTAS", "state": "BA" },
	  "1846": { "code": "1846", "label": "ANTÔNIO CARDOSO", "state": "BA" },
	  "1847": { "code": "1847", "label": "ANTÔNIO GONÇALVES", "state": "BA" },
	  "1848": { "code": "1848", "label": "APORÁ", "state": "BA" },
	  "1849": { "code": "1849", "label": "APUAREMA", "state": "BA" },
	  "1850": { "code": "1850", "label": "ARACATU", "state": "BA" },
	  "1851": { "code": "1851", "label": "ARAÇAS", "state": "BA" },
	  "1852": { "code": "1852", "label": "ARACI", "state": "BA" },
	  "1853": { "code": "1853", "label": "ARAMARI", "state": "BA" },
	  "1854": { "code": "1854", "label": "ARATACA", "state": "BA" },
	  "1855": { "code": "1855", "label": "ARATUÍPE", "state": "BA" },
	  "1856": { "code": "1856", "label": "AURELINO LEAL", "state": "BA" },
	  "1857": { "code": "1857", "label": "BAIANÓPOLIS", "state": "BA" },
	  "1858": { "code": "1858", "label": "BAIXA GRANDE", "state": "BA" },
	  "1859": { "code": "1859", "label": "BANZAÊ", "state": "BA" },
	  "1860": { "code": "1860", "label": "BARRA", "state": "BA" },
	  "1861": { "code": "1861", "label": "BARRA DA ESTIVA", "state": "BA" },
	  "1862": { "code": "1862", "label": "BARRA DO CHOÇA", "state": "BA" },
	  "1863": { "code": "1863", "label": "BARRA DO MENDES", "state": "BA" },
	  "1864": { "code": "1864", "label": "BARRA DO ROCHA", "state": "BA" },
	  "1865": { "code": "1865", "label": "BARREIRAS", "state": "BA" },
	  "1866": { "code": "1866", "label": "BARRO ALTO", "state": "BA" },
	  "1867": { "code": "1867", "label": "BARROCAS", "state": "BA" },
	  "1868": { "code": "1868", "label": "BARRO PRETO", "state": "BA" },
	  "1869": { "code": "1869", "label": "BELMONTE", "state": "BA" },
	  "1870": { "code": "1870", "label": "BELO CAMPO", "state": "BA" },
	  "1871": { "code": "1871", "label": "BIRITINGA", "state": "BA" },
	  "1872": { "code": "1872", "label": "BOA NOVA", "state": "BA" },
	  "1873": { "code": "1873", "label": "BOA VISTA DO TUPIM", "state": "BA" },
	  "1874": { "code": "1874", "label": "BOM JESUS DA LAPA", "state": "BA" },
	  "1875": { "code": "1875", "label": "BOM JESUS DA SERRA", "state": "BA" },
	  "1876": { "code": "1876", "label": "BONINAL", "state": "BA" },
	  "1877": { "code": "1877", "label": "BONITO", "state": "BA" },
	  "1878": { "code": "1878", "label": "BOQUIRA", "state": "BA" },
	  "1879": { "code": "1879", "label": "BOTUPORÃ", "state": "BA" },
	  "1880": { "code": "1880", "label": "BREJÕES", "state": "BA" },
	  "1881": { "code": "1881", "label": "BREJOLÂNDIA", "state": "BA" },
	  "1882": { "code": "1882", "label": "BROTAS DE MACAÚBAS", "state": "BA" },
	  "1883": { "code": "1883", "label": "BRUMADO", "state": "BA" },
	  "1884": { "code": "1884", "label": "BUERAREMA", "state": "BA" },
	  "1885": { "code": "1885", "label": "BURITIRAMA", "state": "BA" },
	  "1886": { "code": "1886", "label": "CAATIBA", "state": "BA" },
	  "1887": { "code": "1887", "label": "CABACEIRAS DO PARAGUAÇU", "state": "BA" },
	  "1888": { "code": "1888", "label": "CACHOEIRA", "state": "BA" },
	  "1889": { "code": "1889", "label": "CACULÉ", "state": "BA" },
	  "1890": { "code": "1890", "label": "CAÉM", "state": "BA" },
	  "1891": { "code": "1891", "label": "CAETANOS", "state": "BA" },
	  "1892": { "code": "1892", "label": "CAETITÉ", "state": "BA" },
	  "1893": { "code": "1893", "label": "CAFARNAUM", "state": "BA" },
	  "1894": { "code": "1894", "label": "CAIRU", "state": "BA" },
	  "1895": { "code": "1895", "label": "CALDEIRÃO GRANDE", "state": "BA" },
	  "1896": { "code": "1896", "label": "CAMACAN", "state": "BA" },
	  "1897": { "code": "1897", "label": "CAMAÇARI", "state": "BA" },
	  "1898": { "code": "1898", "label": "CAMAMU", "state": "BA" },
	  "1899": { "code": "1899", "label": "CAMPO ALEGRE DE LOURDES", "state": "BA" },
	  "1900": { "code": "1900", "label": "CAMPO FORMOSO", "state": "BA" },
	  "1901": { "code": "1901", "label": "CANÁPOLIS", "state": "BA" },
	  "1902": { "code": "1902", "label": "CANARANA", "state": "BA" },
	  "1903": { "code": "1903", "label": "CANAVIEIRAS", "state": "BA" },
	  "1904": { "code": "1904", "label": "CANDEAL", "state": "BA" },
	  "1905": { "code": "1905", "label": "CANDEIAS", "state": "BA" },
	  "1906": { "code": "1906", "label": "CANDIBA", "state": "BA" },
	  "1907": { "code": "1907", "label": "CÂNDIDO SALES", "state": "BA" },
	  "1908": { "code": "1908", "label": "CANSANÇÃO", "state": "BA" },
	  "1909": { "code": "1909", "label": "CANUDOS", "state": "BA" },
	  "1910": { "code": "1910", "label": "CAPELA DO ALTO ALEGRE", "state": "BA" },
	  "1911": { "code": "1911", "label": "CAPIM GROSSO", "state": "BA" },
	  "1912": { "code": "1912", "label": "CARAÍBAS", "state": "BA" },
	  "1913": { "code": "1913", "label": "CARAVELAS", "state": "BA" },
	  "1914": { "code": "1914", "label": "CARDEAL DA SILVA", "state": "BA" },
	  "1915": { "code": "1915", "label": "CARINHANHA", "state": "BA" },
	  "1916": { "code": "1916", "label": "CASA NOVA", "state": "BA" },
	  "1917": { "code": "1917", "label": "CASTRO ALVES", "state": "BA" },
	  "1918": { "code": "1918", "label": "CATOLÂNDIA", "state": "BA" },
	  "1919": { "code": "1919", "label": "CATU", "state": "BA" },
	  "1920": { "code": "1920", "label": "CATURAMA", "state": "BA" },
	  "1921": { "code": "1921", "label": "CENTRAL", "state": "BA" },
	  "1922": { "code": "1922", "label": "CHORROCHÓ", "state": "BA" },
	  "1923": { "code": "1923", "label": "CÍCERO DANTAS", "state": "BA" },
	  "1924": { "code": "1924", "label": "CIPÓ", "state": "BA" },
	  "1925": { "code": "1925", "label": "COARACI", "state": "BA" },
	  "1926": { "code": "1926", "label": "COCOS", "state": "BA" },
	  "1927": { "code": "1927", "label": "CONCEIÇÃO DA FEIRA", "state": "BA" },
	  "1928": { "code": "1928", "label": "CONCEIÇÃO DO ALMEIDA", "state": "BA" },
	  "1929": { "code": "1929", "label": "CONCEIÇÃO DO COITÉ", "state": "BA" },
	  "1930": { "code": "1930", "label": "CONCEIÇÃO DO JACUÍPE", "state": "BA" },
	  "1931": { "code": "1931", "label": "CONDE", "state": "BA" },
	  "1932": { "code": "1932", "label": "CONDEÚBA", "state": "BA" },
	  "1933": { "code": "1933", "label": "CONTENDAS DO SINCORÁ", "state": "BA" },
	  "1934": { "code": "1934", "label": "CORAÇÃO DE MARIA", "state": "BA" },
	  "1935": { "code": "1935", "label": "CORDEIROS", "state": "BA" },
	  "1936": { "code": "1936", "label": "CORIBE", "state": "BA" },
	  "1937": { "code": "1937", "label": "CORONEL JOÃO SÁ", "state": "BA" },
	  "1938": { "code": "1938", "label": "CORRENTINA", "state": "BA" },
	  "1939": { "code": "1939", "label": "COTEGIPE", "state": "BA" },
	  "1940": { "code": "1940", "label": "CRAVOLÂNDIA", "state": "BA" },
	  "1941": { "code": "1941", "label": "CRISÓPOLIS", "state": "BA" },
	  "1942": { "code": "1942", "label": "CRISTÓPOLIS", "state": "BA" },
	  "1943": { "code": "1943", "label": "CRUZ DAS ALMAS", "state": "BA" },
	  "1944": { "code": "1944", "label": "CURAÇÁ", "state": "BA" },
	  "1945": { "code": "1945", "label": "DÁRIO MEIRA", "state": "BA" },
	  "1946": { "code": "1946", "label": "DIAS D'ÁVILA", "state": "BA" },
	  "1947": { "code": "1947", "label": "DOM BASÍLIO", "state": "BA" },
	  "1948": { "code": "1948", "label": "DOM MACEDO COSTA", "state": "BA" },
	  "1949": { "code": "1949", "label": "ELÍSIO MEDRADO", "state": "BA" },
	  "1950": { "code": "1950", "label": "ENCRUZILHADA", "state": "BA" },
	  "1951": { "code": "1951", "label": "ENTRE RIOS", "state": "BA" },
	  "1952": { "code": "1952", "label": "ESPLANADA", "state": "BA" },
	  "1953": { "code": "1953", "label": "EUCLIDES DA CUNHA", "state": "BA" },
	  "1954": { "code": "1954", "label": "EUNÁPOLIS", "state": "BA" },
	  "1955": { "code": "1955", "label": "FÁTIMA", "state": "BA" },
	  "1956": { "code": "1956", "label": "FEIRA DA MATA", "state": "BA" },
	  "1957": { "code": "1957", "label": "FEIRA DE SANTANA", "state": "BA" },
	  "1958": { "code": "1958", "label": "FILADÉLFIA", "state": "BA" },
	  "1959": { "code": "1959", "label": "FIRMINO ALVES", "state": "BA" },
	  "1960": { "code": "1960", "label": "FLORESTA AZUL", "state": "BA" },
	  "1961": { "code": "1961", "label": "FORMOSA DO RIO PRETO", "state": "BA" },
	  "1962": { "code": "1962", "label": "GANDU", "state": "BA" },
	  "1963": { "code": "1963", "label": "GAVIÃO", "state": "BA" },
	  "1964": { "code": "1964", "label": "GENTIO DO OURO", "state": "BA" },
	  "1965": { "code": "1965", "label": "GLÓRIA", "state": "BA" },
	  "1966": { "code": "1966", "label": "GONGOGI", "state": "BA" },
	  "1967": { "code": "1967", "label": "GOVERNADOR MANGABEIRA", "state": "BA" },
	  "1968": { "code": "1968", "label": "GUAJERU", "state": "BA" },
	  "1969": { "code": "1969", "label": "GUANAMBI", "state": "BA" },
	  "1970": { "code": "1970", "label": "GUARATINGA", "state": "BA" },
	  "1971": { "code": "1971", "label": "HELIÓPOLIS", "state": "BA" },
	  "1972": { "code": "1972", "label": "IAÇU", "state": "BA" },
	  "1973": { "code": "1973", "label": "IBIASSUCÊ", "state": "BA" },
	  "1974": { "code": "1974", "label": "IBICARAÍ", "state": "BA" },
	  "1975": { "code": "1975", "label": "IBICOARA", "state": "BA" },
	  "1976": { "code": "1976", "label": "IBICUÍ", "state": "BA" },
	  "1977": { "code": "1977", "label": "IBIPEBA", "state": "BA" },
	  "1978": { "code": "1978", "label": "IBIPITANGA", "state": "BA" },
	  "1979": { "code": "1979", "label": "IBIQUERA", "state": "BA" },
	  "1980": { "code": "1980", "label": "IBIRAPITANGA", "state": "BA" },
	  "1981": { "code": "1981", "label": "IBIRAPUÃ", "state": "BA" },
	  "1982": { "code": "1982", "label": "IBIRATAIA", "state": "BA" },
	  "1983": { "code": "1983", "label": "IBITIARA", "state": "BA" },
	  "1984": { "code": "1984", "label": "IBITITÁ", "state": "BA" },
	  "1985": { "code": "1985", "label": "IBOTIRAMA", "state": "BA" },
	  "1986": { "code": "1986", "label": "ICHU", "state": "BA" },
	  "1987": { "code": "1987", "label": "IGAPORÃ", "state": "BA" },
	  "1988": { "code": "1988", "label": "IGRAPIÚNA", "state": "BA" },
	  "1989": { "code": "1989", "label": "IGUAÍ", "state": "BA" },
	  "1990": { "code": "1990", "label": "ILHÉUS", "state": "BA" },
	  "1991": { "code": "1991", "label": "INHAMBUPE", "state": "BA" },
	  "1992": { "code": "1992", "label": "IPECAETÁ", "state": "BA" },
	  "1993": { "code": "1993", "label": "IPIAÚ", "state": "BA" },
	  "1994": { "code": "1994", "label": "IPIRÁ", "state": "BA" },
	  "1995": { "code": "1995", "label": "IPUPIARA", "state": "BA" },
	  "1996": { "code": "1996", "label": "IRAJUBA", "state": "BA" },
	  "1997": { "code": "1997", "label": "IRAMAIA", "state": "BA" },
	  "1998": { "code": "1998", "label": "IRAQUARA", "state": "BA" },
	  "1999": { "code": "1999", "label": "IRARÁ", "state": "BA" },
	  "2000": { "code": "2000", "label": "IRECÊ", "state": "BA" },
	  "2001": { "code": "2001", "label": "ITABELA", "state": "BA" },
	  "2002": { "code": "2002", "label": "ITABERABA", "state": "BA" },
	  "2003": { "code": "2003", "label": "ITABUNA", "state": "BA" },
	  "2004": { "code": "2004", "label": "ITACARÉ", "state": "BA" },
	  "2005": { "code": "2005", "label": "ITAETÉ", "state": "BA" },
	  "2006": { "code": "2006", "label": "ITAGI", "state": "BA" },
	  "2007": { "code": "2007", "label": "ITAGIBÁ", "state": "BA" },
	  "2008": { "code": "2008", "label": "ITAGIMIRIM", "state": "BA" },
	  "2009": { "code": "2009", "label": "ITAGUAÇU DA BAHIA", "state": "BA" },
	  "2010": { "code": "2010", "label": "ITAJU DO COLÔNIA", "state": "BA" },
	  "2011": { "code": "2011", "label": "ITAJUÍPE", "state": "BA" },
	  "2012": { "code": "2012", "label": "ITAMARAJU", "state": "BA" },
	  "2013": { "code": "2013", "label": "ITAMARI", "state": "BA" },
	  "2014": { "code": "2014", "label": "ITAMBÉ", "state": "BA" },
	  "2015": { "code": "2015", "label": "ITANAGRA", "state": "BA" },
	  "2016": { "code": "2016", "label": "ITANHÉM", "state": "BA" },
	  "2017": { "code": "2017", "label": "ITAPARICA", "state": "BA" },
	  "2018": { "code": "2018", "label": "ITAPÉ", "state": "BA" },
	  "2019": { "code": "2019", "label": "ITAPEBI", "state": "BA" },
	  "2020": { "code": "2020", "label": "ITAPETINGA", "state": "BA" },
	  "2021": { "code": "2021", "label": "ITAPICURU", "state": "BA" },
	  "2022": { "code": "2022", "label": "ITAPITANGA", "state": "BA" },
	  "2023": { "code": "2023", "label": "ITAQUARA", "state": "BA" },
	  "2024": { "code": "2024", "label": "ITARANTIM", "state": "BA" },
	  "2025": { "code": "2025", "label": "ITATIM", "state": "BA" },
	  "2026": { "code": "2026", "label": "ITIRUÇU", "state": "BA" },
	  "2027": { "code": "2027", "label": "ITIÚBA", "state": "BA" },
	  "2028": { "code": "2028", "label": "ITORORÓ", "state": "BA" },
	  "2029": { "code": "2029", "label": "ITUAÇU", "state": "BA" },
	  "2030": { "code": "2030", "label": "ITUBERÁ", "state": "BA" },
	  "2031": { "code": "2031", "label": "IUIÚ", "state": "BA" },
	  "2032": { "code": "2032", "label": "JABORANDI", "state": "BA" },
	  "2033": { "code": "2033", "label": "JACARACI", "state": "BA" },
	  "2034": { "code": "2034", "label": "JACOBINA", "state": "BA" },
	  "2035": { "code": "2035", "label": "JAGUAQUARA", "state": "BA" },
	  "2036": { "code": "2036", "label": "JAGUARARI", "state": "BA" },
	  "2037": { "code": "2037", "label": "JAGUARIPE", "state": "BA" },
	  "2038": { "code": "2038", "label": "JANDAÍRA", "state": "BA" },
	  "2039": { "code": "2039", "label": "JEQUIÉ", "state": "BA" },
	  "2040": { "code": "2040", "label": "JEREMOABO", "state": "BA" },
	  "2041": { "code": "2041", "label": "JIQUIRIÇÁ", "state": "BA" },
	  "2042": { "code": "2042", "label": "JITAÚNA", "state": "BA" },
	  "2043": { "code": "2043", "label": "JOÃO DOURADO", "state": "BA" },
	  "2044": { "code": "2044", "label": "JUAZEIRO", "state": "BA" },
	  "2045": { "code": "2045", "label": "JUCURUÇU", "state": "BA" },
	  "2046": { "code": "2046", "label": "JUSSARA", "state": "BA" },
	  "2047": { "code": "2047", "label": "JUSSARI", "state": "BA" },
	  "2048": { "code": "2048", "label": "JUSSIAPE", "state": "BA" },
	  "2049": { "code": "2049", "label": "LAFAIETE COUTINHO", "state": "BA" },
	  "2050": { "code": "2050", "label": "LAGOA REAL", "state": "BA" },
	  "2051": { "code": "2051", "label": "LAJE", "state": "BA" },
	  "2052": { "code": "2052", "label": "LAJEDÃO", "state": "BA" },
	  "2053": { "code": "2053", "label": "LAJEDINHO", "state": "BA" },
	  "2054": { "code": "2054", "label": "LAJEDO DO TABOCAL", "state": "BA" },
	  "2055": { "code": "2055", "label": "LAMARÃO", "state": "BA" },
	  "2056": { "code": "2056", "label": "LAPÃO", "state": "BA" },
	  "2057": { "code": "2057", "label": "LAURO DE FREITAS", "state": "BA" },
	  "2058": { "code": "2058", "label": "LENÇÓIS", "state": "BA" },
	  "2059": { "code": "2059", "label": "LICÍNIO DE ALMEIDA", "state": "BA" },
	  "2060": { "code": "2060", "label": "LIVRAMENTO DE NOSSA SENHORA", "state": "BA" },
	  "2061": { "code": "2061", "label": "LUÍS EDUARDO MAGALHÃES", "state": "BA" },
	  "2062": { "code": "2062", "label": "MACAJUBA", "state": "BA" },
	  "2063": { "code": "2063", "label": "MACARANI", "state": "BA" },
	  "2064": { "code": "2064", "label": "MACAÚBAS", "state": "BA" },
	  "2065": { "code": "2065", "label": "MACURURÉ", "state": "BA" },
	  "2066": { "code": "2066", "label": "MADRE DE DEUS", "state": "BA" },
	  "2067": { "code": "2067", "label": "MAETINGA", "state": "BA" },
	  "2068": { "code": "2068", "label": "MAIQUINIQUE", "state": "BA" },
	  "2069": { "code": "2069", "label": "MAIRI", "state": "BA" },
	  "2070": { "code": "2070", "label": "MALHADA", "state": "BA" },
	  "2071": { "code": "2071", "label": "MALHADA DE PEDRAS", "state": "BA" },
	  "2072": { "code": "2072", "label": "MANOEL VITORINO", "state": "BA" },
	  "2073": { "code": "2073", "label": "MANSIDÃO", "state": "BA" },
	  "2074": { "code": "2074", "label": "MARACÁS", "state": "BA" },
	  "2075": { "code": "2075", "label": "MARAGOGIPE", "state": "BA" },
	  "2076": { "code": "2076", "label": "MARAÚ", "state": "BA" },
	  "2077": { "code": "2077", "label": "MARCIONÍLIO SOUZA", "state": "BA" },
	  "2078": { "code": "2078", "label": "MASCOTE", "state": "BA" },
	  "2079": { "code": "2079", "label": "MATA DE SÃO JOÃO", "state": "BA" },
	  "2080": { "code": "2080", "label": "MATINA", "state": "BA" },
	  "2081": { "code": "2081", "label": "MEDEIROS NETO", "state": "BA" },
	  "2082": { "code": "2082", "label": "MIGUEL CALMON", "state": "BA" },
	  "2083": { "code": "2083", "label": "MILAGRES", "state": "BA" },
	  "2084": { "code": "2084", "label": "MIRANGABA", "state": "BA" },
	  "2085": { "code": "2085", "label": "MIRANTE", "state": "BA" },
	  "2086": { "code": "2086", "label": "MONTE SANTO", "state": "BA" },
	  "2087": { "code": "2087", "label": "MORPARÁ", "state": "BA" },
	  "2088": { "code": "2088", "label": "MORRO DO CHAPÉU", "state": "BA" },
	  "2089": { "code": "2089", "label": "MORTUGABA", "state": "BA" },
	  "2090": { "code": "2090", "label": "MUCUGÊ", "state": "BA" },
	  "2091": { "code": "2091", "label": "MUCURI", "state": "BA" },
	  "2092": { "code": "2092", "label": "MULUNGU DO MORRO", "state": "BA" },
	  "2093": { "code": "2093", "label": "MUNDO NOVO", "state": "BA" },
	  "2094": { "code": "2094", "label": "MUNIZ FERREIRA", "state": "BA" },
	  "2095": { "code": "2095", "label": "MUQUÉM DE SÃO FRANCISCO", "state": "BA" },
	  "2096": { "code": "2096", "label": "MURITIBA", "state": "BA" },
	  "2097": { "code": "2097", "label": "MUTUÍPE", "state": "BA" },
	  "2098": { "code": "2098", "label": "NAZARÉ", "state": "BA" },
	  "2099": { "code": "2099", "label": "NILO PEÇANHA", "state": "BA" },
	  "2100": { "code": "2100", "label": "NORDESTINA", "state": "BA" },
	  "2101": { "code": "2101", "label": "NOVA CANAÃ", "state": "BA" },
	  "2102": { "code": "2102", "label": "NOVA FÁTIMA", "state": "BA" },
	  "2103": { "code": "2103", "label": "NOVA IBIÁ", "state": "BA" },
	  "2104": { "code": "2104", "label": "NOVA ITARANA", "state": "BA" },
	  "2105": { "code": "2105", "label": "NOVA REDENÇÃO", "state": "BA" },
	  "2106": { "code": "2106", "label": "NOVA SOURE", "state": "BA" },
	  "2107": { "code": "2107", "label": "NOVA VIÇOSA", "state": "BA" },
	  "2108": { "code": "2108", "label": "NOVO HORIZONTE", "state": "BA" },
	  "2109": { "code": "2109", "label": "NOVO TRIUNFO", "state": "BA" },
	  "2110": { "code": "2110", "label": "OLINDINA", "state": "BA" },
	  "2111": { "code": "2111", "label": "OLIVEIRA DOS BREJINHOS", "state": "BA" },
	  "2112": { "code": "2112", "label": "OURIÇANGAS", "state": "BA" },
	  "2113": { "code": "2113", "label": "OUROLÂNDIA", "state": "BA" },
	  "2114": { "code": "2114", "label": "PALMAS DE MONTE ALTO", "state": "BA" },
	  "2115": { "code": "2115", "label": "PALMEIRAS", "state": "BA" },
	  "2116": { "code": "2116", "label": "PARAMIRIM", "state": "BA" },
	  "2117": { "code": "2117", "label": "PARATINGA", "state": "BA" },
	  "2118": { "code": "2118", "label": "PARIPIRANGA", "state": "BA" },
	  "2119": { "code": "2119", "label": "PAU BRASIL", "state": "BA" },
	  "2120": { "code": "2120", "label": "PAULO AFONSO", "state": "BA" },
	  "2121": { "code": "2121", "label": "PÉ DE SERRA", "state": "BA" },
	  "2122": { "code": "2122", "label": "PEDRÃO", "state": "BA" },
	  "2123": { "code": "2123", "label": "PEDRO ALEXANDRE", "state": "BA" },
	  "2124": { "code": "2124", "label": "PIATÃ", "state": "BA" },
	  "2125": { "code": "2125", "label": "PILÃO ARCADO", "state": "BA" },
	  "2126": { "code": "2126", "label": "PINDAÍ", "state": "BA" },
	  "2127": { "code": "2127", "label": "PINDOBAÇU", "state": "BA" },
	  "2128": { "code": "2128", "label": "PINTADAS", "state": "BA" },
	  "2129": { "code": "2129", "label": "PIRAÍ DO NORTE", "state": "BA" },
	  "2130": { "code": "2130", "label": "PIRIPÁ", "state": "BA" },
	  "2131": { "code": "2131", "label": "PIRITIBA", "state": "BA" },
	  "2132": { "code": "2132", "label": "PLANALTINO", "state": "BA" },
	  "2133": { "code": "2133", "label": "PLANALTO", "state": "BA" },
	  "2134": { "code": "2134", "label": "POÇÕES", "state": "BA" },
	  "2135": { "code": "2135", "label": "POJUCA", "state": "BA" },
	  "2136": { "code": "2136", "label": "PONTO NOVO", "state": "BA" },
	  "2137": { "code": "2137", "label": "PORTO SEGURO", "state": "BA" },
	  "2138": { "code": "2138", "label": "POTIRAGUÁ", "state": "BA" },
	  "2139": { "code": "2139", "label": "PRADO", "state": "BA" },
	  "2140": { "code": "2140", "label": "PRESIDENTE DUTRA", "state": "BA" },
	  "2141": { "code": "2141", "label": "PRESIDENTE JÂNIO QUADROS", "state": "BA" },
	  "2142": { "code": "2142", "label": "PRESIDENTE TANCREDO NEVES", "state": "BA" },
	  "2143": { "code": "2143", "label": "QUEIMADAS", "state": "BA" },
	  "2144": { "code": "2144", "label": "QUIJINGUE", "state": "BA" },
	  "2145": { "code": "2145", "label": "QUIXABEIRA", "state": "BA" },
	  "2146": { "code": "2146", "label": "RAFAEL JAMBEIRO", "state": "BA" },
	  "2147": { "code": "2147", "label": "REMANSO", "state": "BA" },
	  "2148": { "code": "2148", "label": "RETIROLÂNDIA", "state": "BA" },
	  "2149": { "code": "2149", "label": "RIACHÃO DAS NEVES", "state": "BA" },
	  "2150": { "code": "2150", "label": "RIACHÃO DO JACUÍPE", "state": "BA" },
	  "2151": { "code": "2151", "label": "RIACHO DE SANTANA", "state": "BA" },
	  "2152": { "code": "2152", "label": "RIBEIRA DO AMPARO", "state": "BA" },
	  "2153": { "code": "2153", "label": "RIBEIRA DO POMBAL", "state": "BA" },
	  "2154": { "code": "2154", "label": "RIBEIRÃO DO LARGO", "state": "BA" },
	  "2155": { "code": "2155", "label": "RIO DE CONTAS", "state": "BA" },
	  "2156": { "code": "2156", "label": "RIO DO ANTÔNIO", "state": "BA" },
	  "2157": { "code": "2157", "label": "RIO DO PIRES", "state": "BA" },
	  "2158": { "code": "2158", "label": "RIO REAL", "state": "BA" },
	  "2159": { "code": "2159", "label": "RODELAS", "state": "BA" },
	  "2160": { "code": "2160", "label": "RUY BARBOSA", "state": "BA" },
	  "2161": { "code": "2161", "label": "SALINAS DA MARGARIDA", "state": "BA" },
	  "2162": { "code": "2162", "label": "SALVADOR", "state": "BA" },
	  "2163": { "code": "2163", "label": "SANTA BÁRBARA", "state": "BA" },
	  "2164": { "code": "2164", "label": "SANTA BRÍGIDA", "state": "BA" },
	  "2165": { "code": "2165", "label": "SANTA CRUZ CABRÁLIA", "state": "BA" },
	  "2166": { "code": "2166", "label": "SANTA CRUZ DA VITÓRIA", "state": "BA" },
	  "2167": { "code": "2167", "label": "SANTA INÊS", "state": "BA" },
	  "2168": { "code": "2168", "label": "SANTALUZ", "state": "BA" },
	  "2169": { "code": "2169", "label": "SANTA LUZIA", "state": "BA" },
	  "2170": { "code": "2170", "label": "SANTA MARIA DA VITÓRIA", "state": "BA" },
	  "2171": { "code": "2171", "label": "SANTANA", "state": "BA" },
	  "2172": { "code": "2172", "label": "SANTANÓPOLIS", "state": "BA" },
	  "2173": { "code": "2173", "label": "SANTA RITA DE CÁSSIA", "state": "BA" },
	  "2174": { "code": "2174", "label": "SANTA TERESINHA", "state": "BA" },
	  "2175": { "code": "2175", "label": "SANTO AMARO", "state": "BA" },
	  "2176": { "code": "2176", "label": "SANTO ANTÔNIO DE JESUS", "state": "BA" },
	  "2177": { "code": "2177", "label": "SANTO ESTÊVÃO", "state": "BA" },
	  "2178": { "code": "2178", "label": "SÃO DESIDÉRIO", "state": "BA" },
	  "2179": { "code": "2179", "label": "SÃO DOMINGOS", "state": "BA" },
	  "2180": { "code": "2180", "label": "SÃO FÉLIX", "state": "BA" },
	  "2181": { "code": "2181", "label": "SÃO FÉLIX DO CORIBE", "state": "BA" },
	  "2182": { "code": "2182", "label": "SÃO FELIPE", "state": "BA" },
	  "2183": { "code": "2183", "label": "SÃO FRANCISCO DO CONDE", "state": "BA" },
	  "2184": { "code": "2184", "label": "SÃO GABRIEL", "state": "BA" },
	  "2185": { "code": "2185", "label": "SÃO GONÇALO DOS CAMPOS", "state": "BA" },
	  "2186": { "code": "2186", "label": "SÃO JOSÉ DA VITÓRIA", "state": "BA" },
	  "2187": { "code": "2187", "label": "SÃO JOSÉ DO JACUÍPE", "state": "BA" },
	  "2188": { "code": "2188", "label": "SÃO MIGUEL DAS MATAS", "state": "BA" },
	  "2189": { "code": "2189", "label": "SÃO SEBASTIÃO DO PASSÉ", "state": "BA" },
	  "2190": { "code": "2190", "label": "SAPEAÇU", "state": "BA" },
	  "2191": { "code": "2191", "label": "SÁTIRO DIAS", "state": "BA" },
	  "2192": { "code": "2192", "label": "SAUBARA", "state": "BA" },
	  "2193": { "code": "2193", "label": "SAÚDE", "state": "BA" },
	  "2194": { "code": "2194", "label": "SEABRA", "state": "BA" },
	  "2195": { "code": "2195", "label": "SEBASTIÃO LARANJEIRAS", "state": "BA" },
	  "2196": { "code": "2196", "label": "SENHOR DO BONFIM", "state": "BA" },
	  "2197": { "code": "2197", "label": "SERRA DO RAMALHO", "state": "BA" },
	  "2198": { "code": "2198", "label": "SENTO SÉ", "state": "BA" },
	  "2199": { "code": "2199", "label": "SERRA DOURADA", "state": "BA" },
	  "2200": { "code": "2200", "label": "SERRA PRETA", "state": "BA" },
	  "2201": { "code": "2201", "label": "SERRINHA", "state": "BA" },
	  "2202": { "code": "2202", "label": "SERROLÂNDIA", "state": "BA" },
	  "2203": { "code": "2203", "label": "SIMÕES FILHO", "state": "BA" },
	  "2204": { "code": "2204", "label": "SÍTIO DO MATO", "state": "BA" },
	  "2205": { "code": "2205", "label": "SÍTIO DO QUINTO", "state": "BA" },
	  "2206": { "code": "2206", "label": "SOBRADINHO", "state": "BA" },
	  "2207": { "code": "2207", "label": "SOUTO SOARES", "state": "BA" },
	  "2208": { "code": "2208", "label": "TABOCAS DO BREJO VELHO", "state": "BA" },
	  "2209": { "code": "2209", "label": "TANHAÇU", "state": "BA" },
	  "2210": { "code": "2210", "label": "TANQUE NOVO", "state": "BA" },
	  "2211": { "code": "2211", "label": "TANQUINHO", "state": "BA" },
	  "2212": { "code": "2212", "label": "TAPEROÁ", "state": "BA" },
	  "2213": { "code": "2213", "label": "TAPIRAMUTÁ", "state": "BA" },
	  "2214": { "code": "2214", "label": "TEIXEIRA DE FREITAS", "state": "BA" },
	  "2215": { "code": "2215", "label": "TEODORO SAMPAIO", "state": "BA" },
	  "2216": { "code": "2216", "label": "TEOFILÂNDIA", "state": "BA" },
	  "2217": { "code": "2217", "label": "TEOLÂNDIA", "state": "BA" },
	  "2218": { "code": "2218", "label": "TERRA NOVA", "state": "BA" },
	  "2219": { "code": "2219", "label": "TREMEDAL", "state": "BA" },
	  "2220": { "code": "2220", "label": "TUCANO", "state": "BA" },
	  "2221": { "code": "2221", "label": "UAUÁ", "state": "BA" },
	  "2222": { "code": "2222", "label": "UBAÍRA", "state": "BA" },
	  "2223": { "code": "2223", "label": "UBAITABA", "state": "BA" },
	  "2224": { "code": "2224", "label": "UBATÃ", "state": "BA" },
	  "2225": { "code": "2225", "label": "UIBAÍ", "state": "BA" },
	  "2226": { "code": "2226", "label": "UMBURANAS", "state": "BA" },
	  "2227": { "code": "2227", "label": "UNA", "state": "BA" },
	  "2228": { "code": "2228", "label": "URANDI", "state": "BA" },
	  "2229": { "code": "2229", "label": "URUÇUCA", "state": "BA" },
	  "2230": { "code": "2230", "label": "UTINGA", "state": "BA" },
	  "2231": { "code": "2231", "label": "VALENÇA", "state": "BA" },
	  "2232": { "code": "2232", "label": "VALENTE", "state": "BA" },
	  "2233": { "code": "2233", "label": "VÁRZEA DA ROÇA", "state": "BA" },
	  "2234": { "code": "2234", "label": "VÁRZEA DO POÇO", "state": "BA" },
	  "2235": { "code": "2235", "label": "VÁRZEA NOVA", "state": "BA" },
	  "2236": { "code": "2236", "label": "VARZEDO", "state": "BA" },
	  "2237": { "code": "2237", "label": "VERA CRUZ", "state": "BA" },
	  "2238": { "code": "2238", "label": "VEREDA", "state": "BA" },
	  "2239": { "code": "2239", "label": "VITÓRIA DA CONQUISTA", "state": "BA" },
	  "2240": { "code": "2240", "label": "WAGNER", "state": "BA" },
	  "2241": { "code": "2241", "label": "WANDERLEY", "state": "BA" },
	  "2242": { "code": "2242", "label": "WENCESLAU GUIMARÃES", "state": "BA" },
	  "2243": { "code": "2243", "label": "XIQUE-XIQUE", "state": "BA" },
	  "2244": { "code": "2244", "label": "ABADIA DOS DOURADOS", "state": "MG" },
	  "2245": { "code": "2245", "label": "ABAETÉ", "state": "MG" },
	  "2246": { "code": "2246", "label": "ABRE CAMPO", "state": "MG" },
	  "2247": { "code": "2247", "label": "ACAIACA", "state": "MG" },
	  "2248": { "code": "2248", "label": "AÇUCENA", "state": "MG" },
	  "2249": { "code": "2249", "label": "ÁGUA BOA", "state": "MG" },
	  "2250": { "code": "2250", "label": "ÁGUA COMPRIDA", "state": "MG" },
	  "2251": { "code": "2251", "label": "AGUANIL", "state": "MG" },
	  "2252": { "code": "2252", "label": "ÁGUAS FORMOSAS", "state": "MG" },
	  "2253": { "code": "2253", "label": "ÁGUAS VERMELHAS", "state": "MG" },
	  "2254": { "code": "2254", "label": "AIMORÉS", "state": "MG" },
	  "2255": { "code": "2255", "label": "AIURUOCA", "state": "MG" },
	  "2256": { "code": "2256", "label": "ALAGOA", "state": "MG" },
	  "2257": { "code": "2257", "label": "ALBERTINA", "state": "MG" },
	  "2258": { "code": "2258", "label": "ALÉM PARAÍBA", "state": "MG" },
	  "2259": { "code": "2259", "label": "ALFENAS", "state": "MG" },
	  "2260": { "code": "2260", "label": "ALFREDO VASCONCELOS", "state": "MG" },
	  "2261": { "code": "2261", "label": "ALMENARA", "state": "MG" },
	  "2262": { "code": "2262", "label": "ALPERCATA", "state": "MG" },
	  "2263": { "code": "2263", "label": "ALPINÓPOLIS", "state": "MG" },
	  "2264": { "code": "2264", "label": "ALTEROSA", "state": "MG" },
	  "2265": { "code": "2265", "label": "ALTO CAPARAÓ", "state": "MG" },
	  "2266": { "code": "2266", "label": "ALTO RIO DOCE", "state": "MG" },
	  "2267": { "code": "2267", "label": "ALVARENGA", "state": "MG" },
	  "2268": { "code": "2268", "label": "ALVINÓPOLIS", "state": "MG" },
	  "2269": { "code": "2269", "label": "ALVORADA DE MINAS", "state": "MG" },
	  "2270": { "code": "2270", "label": "AMPARO DO SERRA", "state": "MG" },
	  "2271": { "code": "2271", "label": "ANDRADAS", "state": "MG" },
	  "2272": { "code": "2272", "label": "CACHOEIRA DE PAJEÚ", "state": "MG" },
	  "2273": { "code": "2273", "label": "ANDRELÂNDIA", "state": "MG" },
	  "2274": { "code": "2274", "label": "ANGELÂNDIA", "state": "MG" },
	  "2275": { "code": "2275", "label": "ANTÔNIO CARLOS", "state": "MG" },
	  "2276": { "code": "2276", "label": "ANTÔNIO DIAS", "state": "MG" },
	  "2277": { "code": "2277", "label": "ANTÔNIO PRADO DE MINAS", "state": "MG" },
	  "2278": { "code": "2278", "label": "ARAÇAÍ", "state": "MG" },
	  "2279": { "code": "2279", "label": "ARACITABA", "state": "MG" },
	  "2280": { "code": "2280", "label": "ARAÇUAÍ", "state": "MG" },
	  "2281": { "code": "2281", "label": "ARAGUARI", "state": "MG" },
	  "2282": { "code": "2282", "label": "ARANTINA", "state": "MG" },
	  "2283": { "code": "2283", "label": "ARAPONGA", "state": "MG" },
	  "2284": { "code": "2284", "label": "ARAPORÃ", "state": "MG" },
	  "2285": { "code": "2285", "label": "ARAPUÁ", "state": "MG" },
	  "2286": { "code": "2286", "label": "ARAÚJOS", "state": "MG" },
	  "2287": { "code": "2287", "label": "ARAXÁ", "state": "MG" },
	  "2288": { "code": "2288", "label": "ARCEBURGO", "state": "MG" },
	  "2289": { "code": "2289", "label": "ARCOS", "state": "MG" },
	  "2290": { "code": "2290", "label": "AREADO", "state": "MG" },
	  "2291": { "code": "2291", "label": "ARGIRITA", "state": "MG" },
	  "2292": { "code": "2292", "label": "ARICANDUVA", "state": "MG" },
	  "2293": { "code": "2293", "label": "ARINOS", "state": "MG" },
	  "2294": { "code": "2294", "label": "ASTOLFO DUTRA", "state": "MG" },
	  "2295": { "code": "2295", "label": "ATALÉIA", "state": "MG" },
	  "2296": { "code": "2296", "label": "AUGUSTO DE LIMA", "state": "MG" },
	  "2297": { "code": "2297", "label": "BAEPENDI", "state": "MG" },
	  "2298": { "code": "2298", "label": "BALDIM", "state": "MG" },
	  "2299": { "code": "2299", "label": "BAMBUÍ", "state": "MG" },
	  "2300": { "code": "2300", "label": "BANDEIRA", "state": "MG" },
	  "2301": { "code": "2301", "label": "BANDEIRA DO SUL", "state": "MG" },
	  "2302": { "code": "2302", "label": "BARÃO DE COCAIS", "state": "MG" },
	  "2303": { "code": "2303", "label": "BARÃO DE MONTE ALTO", "state": "MG" },
	  "2304": { "code": "2304", "label": "BARBACENA", "state": "MG" },
	  "2305": { "code": "2305", "label": "BARRA LONGA", "state": "MG" },
	  "2306": { "code": "2306", "label": "BARROSO", "state": "MG" },
	  "2307": { "code": "2307", "label": "BELA VISTA DE MINAS", "state": "MG" },
	  "2308": { "code": "2308", "label": "BELMIRO BRAGA", "state": "MG" },
	  "2309": { "code": "2309", "label": "BELO HORIZONTE", "state": "MG" },
	  "2310": { "code": "2310", "label": "BELO ORIENTE", "state": "MG" },
	  "2311": { "code": "2311", "label": "BELO VALE", "state": "MG" },
	  "2312": { "code": "2312", "label": "BERILO", "state": "MG" },
	  "2313": { "code": "2313", "label": "BERTÓPOLIS", "state": "MG" },
	  "2314": { "code": "2314", "label": "BERIZAL", "state": "MG" },
	  "2315": { "code": "2315", "label": "BETIM", "state": "MG" },
	  "2316": { "code": "2316", "label": "BIAS FORTES", "state": "MG" },
	  "2317": { "code": "2317", "label": "BICAS", "state": "MG" },
	  "2318": { "code": "2318", "label": "BIQUINHAS", "state": "MG" },
	  "2319": { "code": "2319", "label": "BOA ESPERANÇA", "state": "MG" },
	  "2320": { "code": "2320", "label": "BOCAINA DE MINAS", "state": "MG" },
	  "2321": { "code": "2321", "label": "BOCAIÚVA", "state": "MG" },
	  "2322": { "code": "2322", "label": "BOM DESPACHO", "state": "MG" },
	  "2323": { "code": "2323", "label": "BOM JARDIM DE MINAS", "state": "MG" },
	  "2324": { "code": "2324", "label": "BOM JESUS DA PENHA", "state": "MG" },
	  "2325": { "code": "2325", "label": "BOM JESUS DO AMPARO", "state": "MG" },
	  "2326": { "code": "2326", "label": "BOM JESUS DO GALHO", "state": "MG" },
	  "2327": { "code": "2327", "label": "BOM REPOUSO", "state": "MG" },
	  "2328": { "code": "2328", "label": "BOM SUCESSO", "state": "MG" },
	  "2329": { "code": "2329", "label": "BONFIM", "state": "MG" },
	  "2330": { "code": "2330", "label": "BONFINÓPOLIS DE MINAS", "state": "MG" },
	  "2331": { "code": "2331", "label": "BONITO DE MINAS", "state": "MG" },
	  "2332": { "code": "2332", "label": "BORDA DA MATA", "state": "MG" },
	  "2333": { "code": "2333", "label": "BOTELHOS", "state": "MG" },
	  "2334": { "code": "2334", "label": "BOTUMIRIM", "state": "MG" },
	  "2335": { "code": "2335", "label": "BRASILÂNDIA DE MINAS", "state": "MG" },
	  "2336": { "code": "2336", "label": "BRASÍLIA DE MINAS", "state": "MG" },
	  "2337": { "code": "2337", "label": "BRÁS PIRES", "state": "MG" },
	  "2338": { "code": "2338", "label": "BRAÚNAS", "state": "MG" },
	  "2339": { "code": "2339", "label": "BRASÓPOLIS", "state": "MG" },
	  "2340": { "code": "2340", "label": "BRUMADINHO", "state": "MG" },
	  "2341": { "code": "2341", "label": "BUENO BRANDÃO", "state": "MG" },
	  "2342": { "code": "2342", "label": "BUENÓPOLIS", "state": "MG" },
	  "2343": { "code": "2343", "label": "BUGRE", "state": "MG" },
	  "2344": { "code": "2344", "label": "BURITIS", "state": "MG" },
	  "2345": { "code": "2345", "label": "BURITIZEIRO", "state": "MG" },
	  "2346": { "code": "2346", "label": "CABECEIRA GRANDE", "state": "MG" },
	  "2347": { "code": "2347", "label": "CABO VERDE", "state": "MG" },
	  "2348": { "code": "2348", "label": "CACHOEIRA DA PRATA", "state": "MG" },
	  "2349": { "code": "2349", "label": "CACHOEIRA DE MINAS", "state": "MG" },
	  "2350": { "code": "2350", "label": "CACHOEIRA DOURADA", "state": "MG" },
	  "2351": { "code": "2351", "label": "CAETANÓPOLIS", "state": "MG" },
	  "2352": { "code": "2352", "label": "CAETÉ", "state": "MG" },
	  "2353": { "code": "2353", "label": "CAIANA", "state": "MG" },
	  "2354": { "code": "2354", "label": "CAJURI", "state": "MG" },
	  "2355": { "code": "2355", "label": "CALDAS", "state": "MG" },
	  "2356": { "code": "2356", "label": "CAMACHO", "state": "MG" },
	  "2357": { "code": "2357", "label": "CAMANDUCAIA", "state": "MG" },
	  "2358": { "code": "2358", "label": "CAMBUÍ", "state": "MG" },
	  "2359": { "code": "2359", "label": "CAMBUQUIRA", "state": "MG" },
	  "2360": { "code": "2360", "label": "CAMPANÁRIO", "state": "MG" },
	  "2361": { "code": "2361", "label": "CAMPANHA", "state": "MG" },
	  "2362": { "code": "2362", "label": "CAMPESTRE", "state": "MG" },
	  "2363": { "code": "2363", "label": "CAMPINA VERDE", "state": "MG" },
	  "2364": { "code": "2364", "label": "CAMPO AZUL", "state": "MG" },
	  "2365": { "code": "2365", "label": "CAMPO BELO", "state": "MG" },
	  "2366": { "code": "2366", "label": "CAMPO DO MEIO", "state": "MG" },
	  "2367": { "code": "2367", "label": "CAMPO FLORIDO", "state": "MG" },
	  "2368": { "code": "2368", "label": "CAMPOS ALTOS", "state": "MG" },
	  "2369": { "code": "2369", "label": "CAMPOS GERAIS", "state": "MG" },
	  "2370": { "code": "2370", "label": "CANAÃ", "state": "MG" },
	  "2371": { "code": "2371", "label": "CANÁPOLIS", "state": "MG" },
	  "2372": { "code": "2372", "label": "CANA VERDE", "state": "MG" },
	  "2373": { "code": "2373", "label": "CANDEIAS", "state": "MG" },
	  "2374": { "code": "2374", "label": "CANTAGALO", "state": "MG" },
	  "2375": { "code": "2375", "label": "CAPARAÓ", "state": "MG" },
	  "2376": { "code": "2376", "label": "CAPELA NOVA", "state": "MG" },
	  "2377": { "code": "2377", "label": "CAPELINHA", "state": "MG" },
	  "2378": { "code": "2378", "label": "CAPETINGA", "state": "MG" },
	  "2379": { "code": "2379", "label": "CAPIM BRANCO", "state": "MG" },
	  "2380": { "code": "2380", "label": "CAPINÓPOLIS", "state": "MG" },
	  "2381": { "code": "2381", "label": "CAPITÃO ANDRADE", "state": "MG" },
	  "2382": { "code": "2382", "label": "CAPITÃO ENÉAS", "state": "MG" },
	  "2383": { "code": "2383", "label": "CAPITÓLIO", "state": "MG" },
	  "2384": { "code": "2384", "label": "CAPUTIRA", "state": "MG" },
	  "2385": { "code": "2385", "label": "CARAÍ", "state": "MG" },
	  "2386": { "code": "2386", "label": "CARANAÍBA", "state": "MG" },
	  "2387": { "code": "2387", "label": "CARANDAÍ", "state": "MG" },
	  "2388": { "code": "2388", "label": "CARANGOLA", "state": "MG" },
	  "2389": { "code": "2389", "label": "CARATINGA", "state": "MG" },
	  "2390": { "code": "2390", "label": "CARBONITA", "state": "MG" },
	  "2391": { "code": "2391", "label": "CAREAÇU", "state": "MG" },
	  "2392": { "code": "2392", "label": "CARLOS CHAGAS", "state": "MG" },
	  "2393": { "code": "2393", "label": "CARMÉSIA", "state": "MG" },
	  "2394": { "code": "2394", "label": "CARMO DA CACHOEIRA", "state": "MG" },
	  "2395": { "code": "2395", "label": "CARMO DA MATA", "state": "MG" },
	  "2396": { "code": "2396", "label": "CARMO DE MINAS", "state": "MG" },
	  "2397": { "code": "2397", "label": "CARMO DO CAJURU", "state": "MG" },
	  "2398": { "code": "2398", "label": "CARMO DO PARANAÍBA", "state": "MG" },
	  "2399": { "code": "2399", "label": "CARMO DO RIO CLARO", "state": "MG" },
	  "2400": { "code": "2400", "label": "CARMÓPOLIS DE MINAS", "state": "MG" },
	  "2401": { "code": "2401", "label": "CARNEIRINHO", "state": "MG" },
	  "2402": { "code": "2402", "label": "CARRANCAS", "state": "MG" },
	  "2403": { "code": "2403", "label": "CARVALHÓPOLIS", "state": "MG" },
	  "2404": { "code": "2404", "label": "CARVALHOS", "state": "MG" },
	  "2405": { "code": "2405", "label": "CASA GRANDE", "state": "MG" },
	  "2406": { "code": "2406", "label": "CASCALHO RICO", "state": "MG" },
	  "2407": { "code": "2407", "label": "CÁSSIA", "state": "MG" },
	  "2408": { "code": "2408", "label": "CONCEIÇÃO DA BARRA DE MINAS", "state": "MG" },
	  "2409": { "code": "2409", "label": "CATAGUASES", "state": "MG" },
	  "2410": { "code": "2410", "label": "CATAS ALTAS", "state": "MG" },
	  "2411": { "code": "2411", "label": "CATAS ALTAS DA NORUEGA", "state": "MG" },
	  "2412": { "code": "2412", "label": "CATUJI", "state": "MG" },
	  "2413": { "code": "2413", "label": "CATUTI", "state": "MG" },
	  "2414": { "code": "2414", "label": "CAXAMBU", "state": "MG" },
	  "2415": { "code": "2415", "label": "CEDRO DO ABAETÉ", "state": "MG" },
	  "2416": { "code": "2416", "label": "CENTRAL DE MINAS", "state": "MG" },
	  "2417": { "code": "2417", "label": "CENTRALINA", "state": "MG" },
	  "2418": { "code": "2418", "label": "CHÁCARA", "state": "MG" },
	  "2419": { "code": "2419", "label": "CHALÉ", "state": "MG" },
	  "2420": { "code": "2420", "label": "CHAPADA DO NORTE", "state": "MG" },
	  "2421": { "code": "2421", "label": "CHAPADA GAÚCHA", "state": "MG" },
	  "2422": { "code": "2422", "label": "CHIADOR", "state": "MG" },
	  "2423": { "code": "2423", "label": "CIPOTÂNEA", "state": "MG" },
	  "2424": { "code": "2424", "label": "CLARAVAL", "state": "MG" },
	  "2425": { "code": "2425", "label": "CLARO DOS POÇÕES", "state": "MG" },
	  "2426": { "code": "2426", "label": "CLÁUDIO", "state": "MG" },
	  "2427": { "code": "2427", "label": "COIMBRA", "state": "MG" },
	  "2428": { "code": "2428", "label": "COLUNA", "state": "MG" },
	  "2429": { "code": "2429", "label": "COMENDADOR GOMES", "state": "MG" },
	  "2430": { "code": "2430", "label": "COMERCINHO", "state": "MG" },
	  "2431": { "code": "2431", "label": "CONCEIÇÃO DA APARECIDA", "state": "MG" },
	  "2432": { "code": "2432", "label": "CONCEIÇÃO DAS PEDRAS", "state": "MG" },
	  "2433": { "code": "2433", "label": "CONCEIÇÃO DAS ALAGOAS", "state": "MG" },
	  "2434": { "code": "2434", "label": "CONCEIÇÃO DE IPANEMA", "state": "MG" },
	  "2435": { "code": "2435", "label": "CONCEIÇÃO DO MATO DENTRO", "state": "MG" },
	  "2436": { "code": "2436", "label": "CONCEIÇÃO DO PARÁ", "state": "MG" },
	  "2437": { "code": "2437", "label": "CONCEIÇÃO DO RIO VERDE", "state": "MG" },
	  "2438": { "code": "2438", "label": "CONCEIÇÃO DOS OUROS", "state": "MG" },
	  "2439": { "code": "2439", "label": "CÔNEGO MARINHO", "state": "MG" },
	  "2440": { "code": "2440", "label": "CONFINS", "state": "MG" },
	  "2441": { "code": "2441", "label": "CONGONHAL", "state": "MG" },
	  "2442": { "code": "2442", "label": "CONGONHAS", "state": "MG" },
	  "2443": { "code": "2443", "label": "CONGONHAS DO NORTE", "state": "MG" },
	  "2444": { "code": "2444", "label": "CONQUISTA", "state": "MG" },
	  "2445": { "code": "2445", "label": "CONSELHEIRO LAFAIETE", "state": "MG" },
	  "2446": { "code": "2446", "label": "CONSELHEIRO PENA", "state": "MG" },
	  "2447": { "code": "2447", "label": "CONSOLAÇÃO", "state": "MG" },
	  "2448": { "code": "2448", "label": "CONTAGEM", "state": "MG" },
	  "2449": { "code": "2449", "label": "COQUEIRAL", "state": "MG" },
	  "2450": { "code": "2450", "label": "CORAÇÃO DE JESUS", "state": "MG" },
	  "2451": { "code": "2451", "label": "CORDISBURGO", "state": "MG" },
	  "2452": { "code": "2452", "label": "CORDISLÂNDIA", "state": "MG" },
	  "2453": { "code": "2453", "label": "CORINTO", "state": "MG" },
	  "2454": { "code": "2454", "label": "COROACI", "state": "MG" },
	  "2455": { "code": "2455", "label": "COROMANDEL", "state": "MG" },
	  "2456": { "code": "2456", "label": "CORONEL FABRICIANO", "state": "MG" },
	  "2457": { "code": "2457", "label": "CORONEL MURTA", "state": "MG" },
	  "2458": { "code": "2458", "label": "CORONEL PACHECO", "state": "MG" },
	  "2459": { "code": "2459", "label": "CORONEL XAVIER CHAVES", "state": "MG" },
	  "2460": { "code": "2460", "label": "CÓRREGO DANTA", "state": "MG" },
	  "2461": { "code": "2461", "label": "CÓRREGO DO BOM JESUS", "state": "MG" },
	  "2462": { "code": "2462", "label": "CÓRREGO FUNDO", "state": "MG" },
	  "2463": { "code": "2463", "label": "CÓRREGO NOVO", "state": "MG" },
	  "2464": { "code": "2464", "label": "COUTO DE MAGALHÃES DE MINAS", "state": "MG" },
	  "2465": { "code": "2465", "label": "CRISÓLITA", "state": "MG" },
	  "2466": { "code": "2466", "label": "CRISTAIS", "state": "MG" },
	  "2467": { "code": "2467", "label": "CRISTÁLIA", "state": "MG" },
	  "2468": { "code": "2468", "label": "CRISTIANO OTONI", "state": "MG" },
	  "2469": { "code": "2469", "label": "CRISTINA", "state": "MG" },
	  "2470": { "code": "2470", "label": "CRUCILÂNDIA", "state": "MG" },
	  "2471": { "code": "2471", "label": "CRUZEIRO DA FORTALEZA", "state": "MG" },
	  "2472": { "code": "2472", "label": "CRUZÍLIA", "state": "MG" },
	  "2473": { "code": "2473", "label": "CUPARAQUE", "state": "MG" },
	  "2474": { "code": "2474", "label": "CURRAL DE DENTRO", "state": "MG" },
	  "2475": { "code": "2475", "label": "CURVELO", "state": "MG" },
	  "2476": { "code": "2476", "label": "DATAS", "state": "MG" },
	  "2477": { "code": "2477", "label": "DELFIM MOREIRA", "state": "MG" },
	  "2478": { "code": "2478", "label": "DELFINÓPOLIS", "state": "MG" },
	  "2479": { "code": "2479", "label": "DELTA", "state": "MG" },
	  "2480": { "code": "2480", "label": "DESCOBERTO", "state": "MG" },
	  "2481": { "code": "2481", "label": "DESTERRO DE ENTRE RIOS", "state": "MG" },
	  "2482": { "code": "2482", "label": "DESTERRO DO MELO", "state": "MG" },
	  "2483": { "code": "2483", "label": "DIAMANTINA", "state": "MG" },
	  "2484": { "code": "2484", "label": "DIOGO DE VASCONCELOS", "state": "MG" },
	  "2485": { "code": "2485", "label": "DIONÍSIO", "state": "MG" },
	  "2486": { "code": "2486", "label": "DIVINÉSIA", "state": "MG" },
	  "2487": { "code": "2487", "label": "DIVINO", "state": "MG" },
	  "2488": { "code": "2488", "label": "DIVINO DAS LARANJEIRAS", "state": "MG" },
	  "2489": { "code": "2489", "label": "DIVINOLÂNDIA DE MINAS", "state": "MG" },
	  "2490": { "code": "2490", "label": "DIVINÓPOLIS", "state": "MG" },
	  "2491": { "code": "2491", "label": "DIVISA ALEGRE", "state": "MG" },
	  "2492": { "code": "2492", "label": "DIVISA NOVA", "state": "MG" },
	  "2493": { "code": "2493", "label": "DIVISÓPOLIS", "state": "MG" },
	  "2494": { "code": "2494", "label": "DOM BOSCO", "state": "MG" },
	  "2495": { "code": "2495", "label": "DOM CAVATI", "state": "MG" },
	  "2496": { "code": "2496", "label": "DOM JOAQUIM", "state": "MG" },
	  "2497": { "code": "2497", "label": "DOM SILVÉRIO", "state": "MG" },
	  "2498": { "code": "2498", "label": "DOM VIÇOSO", "state": "MG" },
	  "2499": { "code": "2499", "label": "DONA EUSÉBIA", "state": "MG" },
	  "2500": { "code": "2500", "label": "DORES DE CAMPOS", "state": "MG" },
	  "2501": { "code": "2501", "label": "DORES DE GUANHÃES", "state": "MG" },
	  "2502": { "code": "2502", "label": "DORES DO INDAIÁ", "state": "MG" },
	  "2503": { "code": "2503", "label": "DORES DO TURVO", "state": "MG" },
	  "2504": { "code": "2504", "label": "DORESÓPOLIS", "state": "MG" },
	  "2505": { "code": "2505", "label": "DOURADOQUARA", "state": "MG" },
	  "2506": { "code": "2506", "label": "DURANDÉ", "state": "MG" },
	  "2507": { "code": "2507", "label": "ELÓI MENDES", "state": "MG" },
	  "2508": { "code": "2508", "label": "ENGENHEIRO CALDAS", "state": "MG" },
	  "2509": { "code": "2509", "label": "ENGENHEIRO NAVARRO", "state": "MG" },
	  "2510": { "code": "2510", "label": "ENTRE FOLHAS", "state": "MG" },
	  "2511": { "code": "2511", "label": "ENTRE RIOS DE MINAS", "state": "MG" },
	  "2512": { "code": "2512", "label": "ERVÁLIA", "state": "MG" },
	  "2513": { "code": "2513", "label": "ESMERALDAS", "state": "MG" },
	  "2514": { "code": "2514", "label": "ESPERA FELIZ", "state": "MG" },
	  "2515": { "code": "2515", "label": "ESPINOSA", "state": "MG" },
	  "2516": { "code": "2516", "label": "ESPÍRITO SANTO DO DOURADO", "state": "MG" },
	  "2517": { "code": "2517", "label": "ESTIVA", "state": "MG" },
	  "2518": { "code": "2518", "label": "ESTRELA DALVA", "state": "MG" },
	  "2519": { "code": "2519", "label": "ESTRELA DO INDAIÁ", "state": "MG" },
	  "2520": { "code": "2520", "label": "ESTRELA DO SUL", "state": "MG" },
	  "2521": { "code": "2521", "label": "EUGENÓPOLIS", "state": "MG" },
	  "2522": { "code": "2522", "label": "EWBANK DA CÂMARA", "state": "MG" },
	  "2523": { "code": "2523", "label": "EXTREMA", "state": "MG" },
	  "2524": { "code": "2524", "label": "FAMA", "state": "MG" },
	  "2525": { "code": "2525", "label": "FARIA LEMOS", "state": "MG" },
	  "2526": { "code": "2526", "label": "FELÍCIO DOS SANTOS", "state": "MG" },
	  "2527": { "code": "2527", "label": "SÃO GONÇALO DO RIO PRETO", "state": "MG" },
	  "2528": { "code": "2528", "label": "FELISBURGO", "state": "MG" },
	  "2529": { "code": "2529", "label": "FELIXLÂNDIA", "state": "MG" },
	  "2530": { "code": "2530", "label": "FERNANDES TOURINHO", "state": "MG" },
	  "2531": { "code": "2531", "label": "FERROS", "state": "MG" },
	  "2532": { "code": "2532", "label": "FERVEDOURO", "state": "MG" },
	  "2533": { "code": "2533", "label": "FLORESTAL", "state": "MG" },
	  "2534": { "code": "2534", "label": "FORMIGA", "state": "MG" },
	  "2535": { "code": "2535", "label": "FORMOSO", "state": "MG" },
	  "2536": { "code": "2536", "label": "FORTALEZA DE MINAS", "state": "MG" },
	  "2537": { "code": "2537", "label": "FORTUNA DE MINAS", "state": "MG" },
	  "2538": { "code": "2538", "label": "FRANCISCO BADARÓ", "state": "MG" },
	  "2539": { "code": "2539", "label": "FRANCISCO DUMONT", "state": "MG" },
	  "2540": { "code": "2540", "label": "FRANCISCO SÁ", "state": "MG" },
	  "2541": { "code": "2541", "label": "FRANCISCÓPOLIS", "state": "MG" },
	  "2542": { "code": "2542", "label": "FREI GASPAR", "state": "MG" },
	  "2543": { "code": "2543", "label": "FREI INOCÊNCIO", "state": "MG" },
	  "2544": { "code": "2544", "label": "FREI LAGONEGRO", "state": "MG" },
	  "2545": { "code": "2545", "label": "FRONTEIRA", "state": "MG" },
	  "2546": { "code": "2546", "label": "FRONTEIRA DOS VALES", "state": "MG" },
	  "2547": { "code": "2547", "label": "FRUTA DE LEITE", "state": "MG" },
	  "2548": { "code": "2548", "label": "FRUTAL", "state": "MG" },
	  "2549": { "code": "2549", "label": "FUNILÂNDIA", "state": "MG" },
	  "2550": { "code": "2550", "label": "GALILÉIA", "state": "MG" },
	  "2551": { "code": "2551", "label": "GAMELEIRAS", "state": "MG" },
	  "2552": { "code": "2552", "label": "GLAUCILÂNDIA", "state": "MG" },
	  "2553": { "code": "2553", "label": "GOIABEIRA", "state": "MG" },
	  "2554": { "code": "2554", "label": "GOIANÁ", "state": "MG" },
	  "2555": { "code": "2555", "label": "GONÇALVES", "state": "MG" },
	  "2556": { "code": "2556", "label": "GONZAGA", "state": "MG" },
	  "2557": { "code": "2557", "label": "GOUVEIA", "state": "MG" },
	  "2558": { "code": "2558", "label": "GOVERNADOR VALADARES", "state": "MG" },
	  "2559": { "code": "2559", "label": "GRÃO MOGOL", "state": "MG" },
	  "2560": { "code": "2560", "label": "GRUPIARA", "state": "MG" },
	  "2561": { "code": "2561", "label": "GUANHÃES", "state": "MG" },
	  "2562": { "code": "2562", "label": "GUAPÉ", "state": "MG" },
	  "2563": { "code": "2563", "label": "GUARACIABA", "state": "MG" },
	  "2564": { "code": "2564", "label": "GUARACIAMA", "state": "MG" },
	  "2565": { "code": "2565", "label": "GUARANÉSIA", "state": "MG" },
	  "2566": { "code": "2566", "label": "GUARANI", "state": "MG" },
	  "2567": { "code": "2567", "label": "GUARARÁ", "state": "MG" },
	  "2568": { "code": "2568", "label": "GUARDA-MOR", "state": "MG" },
	  "2569": { "code": "2569", "label": "GUAXUPÉ", "state": "MG" },
	  "2570": { "code": "2570", "label": "GUIDOVAL", "state": "MG" },
	  "2571": { "code": "2571", "label": "GUIMARÂNIA", "state": "MG" },
	  "2572": { "code": "2572", "label": "GUIRICEMA", "state": "MG" },
	  "2573": { "code": "2573", "label": "GURINHATÃ", "state": "MG" },
	  "2574": { "code": "2574", "label": "HELIODORA", "state": "MG" },
	  "2575": { "code": "2575", "label": "IAPU", "state": "MG" },
	  "2576": { "code": "2576", "label": "IBERTIOGA", "state": "MG" },
	  "2577": { "code": "2577", "label": "IBIÁ", "state": "MG" },
	  "2578": { "code": "2578", "label": "IBIAÍ", "state": "MG" },
	  "2579": { "code": "2579", "label": "IBIRACATU", "state": "MG" },
	  "2580": { "code": "2580", "label": "IBIRACI", "state": "MG" },
	  "2581": { "code": "2581", "label": "IBIRITÉ", "state": "MG" },
	  "2582": { "code": "2582", "label": "IBITIÚRA DE MINAS", "state": "MG" },
	  "2583": { "code": "2583", "label": "IBITURUNA", "state": "MG" },
	  "2584": { "code": "2584", "label": "ICARAÍ DE MINAS", "state": "MG" },
	  "2585": { "code": "2585", "label": "IGARAPÉ", "state": "MG" },
	  "2586": { "code": "2586", "label": "IGARATINGA", "state": "MG" },
	  "2587": { "code": "2587", "label": "IGUATAMA", "state": "MG" },
	  "2588": { "code": "2588", "label": "IJACI", "state": "MG" },
	  "2589": { "code": "2589", "label": "ILICÍNEA", "state": "MG" },
	  "2590": { "code": "2590", "label": "IMBÉ DE MINAS", "state": "MG" },
	  "2591": { "code": "2591", "label": "INCONFIDENTES", "state": "MG" },
	  "2592": { "code": "2592", "label": "INDAIABIRA", "state": "MG" },
	  "2593": { "code": "2593", "label": "INDIANÓPOLIS", "state": "MG" },
	  "2594": { "code": "2594", "label": "INGAÍ", "state": "MG" },
	  "2595": { "code": "2595", "label": "INHAPIM", "state": "MG" },
	  "2596": { "code": "2596", "label": "INHAÚMA", "state": "MG" },
	  "2597": { "code": "2597", "label": "INIMUTABA", "state": "MG" },
	  "2598": { "code": "2598", "label": "IPABA", "state": "MG" },
	  "2599": { "code": "2599", "label": "IPANEMA", "state": "MG" },
	  "2600": { "code": "2600", "label": "IPATINGA", "state": "MG" },
	  "2601": { "code": "2601", "label": "IPIAÇU", "state": "MG" },
	  "2602": { "code": "2602", "label": "IPUIÚNA", "state": "MG" },
	  "2603": { "code": "2603", "label": "IRAÍ DE MINAS", "state": "MG" },
	  "2604": { "code": "2604", "label": "ITABIRA", "state": "MG" },
	  "2605": { "code": "2605", "label": "ITABIRINHA", "state": "MG" },
	  "2606": { "code": "2606", "label": "ITABIRITO", "state": "MG" },
	  "2607": { "code": "2607", "label": "ITACAMBIRA", "state": "MG" },
	  "2608": { "code": "2608", "label": "ITACARAMBI", "state": "MG" },
	  "2609": { "code": "2609", "label": "ITAGUARA", "state": "MG" },
	  "2610": { "code": "2610", "label": "ITAIPÉ", "state": "MG" },
	  "2611": { "code": "2611", "label": "ITAJUBÁ", "state": "MG" },
	  "2612": { "code": "2612", "label": "ITAMARANDIBA", "state": "MG" },
	  "2613": { "code": "2613", "label": "ITAMARATI DE MINAS", "state": "MG" },
	  "2614": { "code": "2614", "label": "ITAMBACURI", "state": "MG" },
	  "2615": { "code": "2615", "label": "ITAMBÉ DO MATO DENTRO", "state": "MG" },
	  "2616": { "code": "2616", "label": "ITAMOGI", "state": "MG" },
	  "2617": { "code": "2617", "label": "ITAMONTE", "state": "MG" },
	  "2618": { "code": "2618", "label": "ITANHANDU", "state": "MG" },
	  "2619": { "code": "2619", "label": "ITANHOMI", "state": "MG" },
	  "2620": { "code": "2620", "label": "ITAOBIM", "state": "MG" },
	  "2621": { "code": "2621", "label": "ITAPAGIPE", "state": "MG" },
	  "2622": { "code": "2622", "label": "ITAPECERICA", "state": "MG" },
	  "2623": { "code": "2623", "label": "ITAPEVA", "state": "MG" },
	  "2624": { "code": "2624", "label": "ITATIAIUÇU", "state": "MG" },
	  "2625": { "code": "2625", "label": "ITAÚ DE MINAS", "state": "MG" },
	  "2626": { "code": "2626", "label": "ITAÚNA", "state": "MG" },
	  "2627": { "code": "2627", "label": "ITAVERAVA", "state": "MG" },
	  "2628": { "code": "2628", "label": "ITINGA", "state": "MG" },
	  "2629": { "code": "2629", "label": "ITUETA", "state": "MG" },
	  "2630": { "code": "2630", "label": "ITUIUTABA", "state": "MG" },
	  "2631": { "code": "2631", "label": "ITUMIRIM", "state": "MG" },
	  "2632": { "code": "2632", "label": "ITURAMA", "state": "MG" },
	  "2633": { "code": "2633", "label": "ITUTINGA", "state": "MG" },
	  "2634": { "code": "2634", "label": "JABOTICATUBAS", "state": "MG" },
	  "2635": { "code": "2635", "label": "JACINTO", "state": "MG" },
	  "2636": { "code": "2636", "label": "JACUÍ", "state": "MG" },
	  "2637": { "code": "2637", "label": "JACUTINGA", "state": "MG" },
	  "2638": { "code": "2638", "label": "JAGUARAÇU", "state": "MG" },
	  "2639": { "code": "2639", "label": "JAÍBA", "state": "MG" },
	  "2640": { "code": "2640", "label": "JAMPRUCA", "state": "MG" },
	  "2641": { "code": "2641", "label": "JANAÚBA", "state": "MG" },
	  "2642": { "code": "2642", "label": "JANUÁRIA", "state": "MG" },
	  "2643": { "code": "2643", "label": "JAPARAÍBA", "state": "MG" },
	  "2644": { "code": "2644", "label": "JAPONVAR", "state": "MG" },
	  "2645": { "code": "2645", "label": "JECEABA", "state": "MG" },
	  "2646": { "code": "2646", "label": "JENIPAPO DE MINAS", "state": "MG" },
	  "2647": { "code": "2647", "label": "JEQUERI", "state": "MG" },
	  "2648": { "code": "2648", "label": "JEQUITAÍ", "state": "MG" },
	  "2649": { "code": "2649", "label": "JEQUITIBÁ", "state": "MG" },
	  "2650": { "code": "2650", "label": "JEQUITINHONHA", "state": "MG" },
	  "2651": { "code": "2651", "label": "JESUÂNIA", "state": "MG" },
	  "2652": { "code": "2652", "label": "JOAÍMA", "state": "MG" },
	  "2653": { "code": "2653", "label": "JOANÉSIA", "state": "MG" },
	  "2654": { "code": "2654", "label": "JOÃO MONLEVADE", "state": "MG" },
	  "2655": { "code": "2655", "label": "JOÃO PINHEIRO", "state": "MG" },
	  "2656": { "code": "2656", "label": "JOAQUIM FELÍCIO", "state": "MG" },
	  "2657": { "code": "2657", "label": "JORDÂNIA", "state": "MG" },
	  "2658": { "code": "2658", "label": "JOSÉ GONÇALVES DE MINAS", "state": "MG" },
	  "2659": { "code": "2659", "label": "JOSÉ RAYDAN", "state": "MG" },
	  "2660": { "code": "2660", "label": "JOSENÓPOLIS", "state": "MG" },
	  "2661": { "code": "2661", "label": "NOVA UNIÃO", "state": "MG" },
	  "2662": { "code": "2662", "label": "JUATUBA", "state": "MG" },
	  "2663": { "code": "2663", "label": "JUIZ DE FORA", "state": "MG" },
	  "2664": { "code": "2664", "label": "JURAMENTO", "state": "MG" },
	  "2665": { "code": "2665", "label": "JURUAIA", "state": "MG" },
	  "2666": { "code": "2666", "label": "JUVENÍLIA", "state": "MG" },
	  "2667": { "code": "2667", "label": "LADAINHA", "state": "MG" },
	  "2668": { "code": "2668", "label": "LAGAMAR", "state": "MG" },
	  "2669": { "code": "2669", "label": "LAGOA DA PRATA", "state": "MG" },
	  "2670": { "code": "2670", "label": "LAGOA DOS PATOS", "state": "MG" },
	  "2671": { "code": "2671", "label": "LAGOA DOURADA", "state": "MG" },
	  "2672": { "code": "2672", "label": "LAGOA FORMOSA", "state": "MG" },
	  "2673": { "code": "2673", "label": "LAGOA GRANDE", "state": "MG" },
	  "2674": { "code": "2674", "label": "LAGOA SANTA", "state": "MG" },
	  "2675": { "code": "2675", "label": "LAJINHA", "state": "MG" },
	  "2676": { "code": "2676", "label": "LAMBARI", "state": "MG" },
	  "2677": { "code": "2677", "label": "LAMIM", "state": "MG" },
	  "2678": { "code": "2678", "label": "LARANJAL", "state": "MG" },
	  "2679": { "code": "2679", "label": "LASSANCE", "state": "MG" },
	  "2680": { "code": "2680", "label": "LAVRAS", "state": "MG" },
	  "2681": { "code": "2681", "label": "LEANDRO FERREIRA", "state": "MG" },
	  "2682": { "code": "2682", "label": "LEME DO PRADO", "state": "MG" },
	  "2683": { "code": "2683", "label": "LEOPOLDINA", "state": "MG" },
	  "2684": { "code": "2684", "label": "LIBERDADE", "state": "MG" },
	  "2685": { "code": "2685", "label": "LIMA DUARTE", "state": "MG" },
	  "2686": { "code": "2686", "label": "LIMEIRA DO OESTE", "state": "MG" },
	  "2687": { "code": "2687", "label": "LONTRA", "state": "MG" },
	  "2688": { "code": "2688", "label": "LUISBURGO", "state": "MG" },
	  "2689": { "code": "2689", "label": "LUISLÂNDIA", "state": "MG" },
	  "2690": { "code": "2690", "label": "LUMINÁRIAS", "state": "MG" },
	  "2691": { "code": "2691", "label": "LUZ", "state": "MG" },
	  "2692": { "code": "2692", "label": "MACHACALIS", "state": "MG" },
	  "2693": { "code": "2693", "label": "MACHADO", "state": "MG" },
	  "2694": { "code": "2694", "label": "MADRE DE DEUS DE MINAS", "state": "MG" },
	  "2695": { "code": "2695", "label": "MALACACHETA", "state": "MG" },
	  "2696": { "code": "2696", "label": "MAMONAS", "state": "MG" },
	  "2697": { "code": "2697", "label": "MANGA", "state": "MG" },
	  "2698": { "code": "2698", "label": "MANHUAÇU", "state": "MG" },
	  "2699": { "code": "2699", "label": "MANHUMIRIM", "state": "MG" },
	  "2700": { "code": "2700", "label": "MANTENA", "state": "MG" },
	  "2701": { "code": "2701", "label": "MARAVILHAS", "state": "MG" },
	  "2702": { "code": "2702", "label": "MAR DE ESPANHA", "state": "MG" },
	  "2703": { "code": "2703", "label": "MARIA DA FÉ", "state": "MG" },
	  "2704": { "code": "2704", "label": "MARIANA", "state": "MG" },
	  "2705": { "code": "2705", "label": "MARILAC", "state": "MG" },
	  "2706": { "code": "2706", "label": "MÁRIO CAMPOS", "state": "MG" },
	  "2707": { "code": "2707", "label": "MARIPÁ DE MINAS", "state": "MG" },
	  "2708": { "code": "2708", "label": "MARLIÉRIA", "state": "MG" },
	  "2709": { "code": "2709", "label": "MARMELÓPOLIS", "state": "MG" },
	  "2710": { "code": "2710", "label": "MARTINHO CAMPOS", "state": "MG" },
	  "2711": { "code": "2711", "label": "MARTINS SOARES", "state": "MG" },
	  "2712": { "code": "2712", "label": "MATA VERDE", "state": "MG" },
	  "2713": { "code": "2713", "label": "MATERLÂNDIA", "state": "MG" },
	  "2714": { "code": "2714", "label": "MATEUS LEME", "state": "MG" },
	  "2715": { "code": "2715", "label": "MATIAS BARBOSA", "state": "MG" },
	  "2716": { "code": "2716", "label": "MATIAS CARDOSO", "state": "MG" },
	  "2717": { "code": "2717", "label": "MATIPÓ", "state": "MG" },
	  "2718": { "code": "2718", "label": "MATO VERDE", "state": "MG" },
	  "2719": { "code": "2719", "label": "MATOZINHOS", "state": "MG" },
	  "2720": { "code": "2720", "label": "MATUTINA", "state": "MG" },
	  "2721": { "code": "2721", "label": "MEDEIROS", "state": "MG" },
	  "2722": { "code": "2722", "label": "MEDINA", "state": "MG" },
	  "2723": { "code": "2723", "label": "MENDES PIMENTEL", "state": "MG" },
	  "2724": { "code": "2724", "label": "MERCÊS", "state": "MG" },
	  "2725": { "code": "2725", "label": "MESQUITA", "state": "MG" },
	  "2726": { "code": "2726", "label": "MINAS NOVAS", "state": "MG" },
	  "2727": { "code": "2727", "label": "MINDURI", "state": "MG" },
	  "2728": { "code": "2728", "label": "MIRABELA", "state": "MG" },
	  "2729": { "code": "2729", "label": "MIRADOURO", "state": "MG" },
	  "2730": { "code": "2730", "label": "MIRAÍ", "state": "MG" },
	  "2731": { "code": "2731", "label": "MIRAVÂNIA", "state": "MG" },
	  "2732": { "code": "2732", "label": "MOEDA", "state": "MG" },
	  "2733": { "code": "2733", "label": "MOEMA", "state": "MG" },
	  "2734": { "code": "2734", "label": "MONJOLOS", "state": "MG" },
	  "2735": { "code": "2735", "label": "MONSENHOR PAULO", "state": "MG" },
	  "2736": { "code": "2736", "label": "MONTALVÂNIA", "state": "MG" },
	  "2737": { "code": "2737", "label": "MONTE ALEGRE DE MINAS", "state": "MG" },
	  "2738": { "code": "2738", "label": "MONTE AZUL", "state": "MG" },
	  "2739": { "code": "2739", "label": "MONTE BELO", "state": "MG" },
	  "2740": { "code": "2740", "label": "MONTE CARMELO", "state": "MG" },
	  "2741": { "code": "2741", "label": "MONTE FORMOSO", "state": "MG" },
	  "2742": { "code": "2742", "label": "MONTE SANTO DE MINAS", "state": "MG" },
	  "2743": { "code": "2743", "label": "MONTES CLAROS", "state": "MG" },
	  "2744": { "code": "2744", "label": "MONTE SIÃO", "state": "MG" },
	  "2745": { "code": "2745", "label": "MONTEZUMA", "state": "MG" },
	  "2746": { "code": "2746", "label": "MORADA NOVA DE MINAS", "state": "MG" },
	  "2747": { "code": "2747", "label": "MORRO DA GARÇA", "state": "MG" },
	  "2748": { "code": "2748", "label": "MORRO DO PILAR", "state": "MG" },
	  "2749": { "code": "2749", "label": "MUNHOZ", "state": "MG" },
	  "2750": { "code": "2750", "label": "MURIAÉ", "state": "MG" },
	  "2751": { "code": "2751", "label": "MUTUM", "state": "MG" },
	  "2752": { "code": "2752", "label": "MUZAMBINHO", "state": "MG" },
	  "2753": { "code": "2753", "label": "NACIP RAYDAN", "state": "MG" },
	  "2754": { "code": "2754", "label": "NANUQUE", "state": "MG" },
	  "2755": { "code": "2755", "label": "NAQUE", "state": "MG" },
	  "2756": { "code": "2756", "label": "NATALÂNDIA", "state": "MG" },
	  "2757": { "code": "2757", "label": "NATÉRCIA", "state": "MG" },
	  "2758": { "code": "2758", "label": "NAZARENO", "state": "MG" },
	  "2759": { "code": "2759", "label": "NEPOMUCENO", "state": "MG" },
	  "2760": { "code": "2760", "label": "NINHEIRA", "state": "MG" },
	  "2761": { "code": "2761", "label": "NOVA BELÉM", "state": "MG" },
	  "2762": { "code": "2762", "label": "NOVA ERA", "state": "MG" },
	  "2763": { "code": "2763", "label": "NOVA LIMA", "state": "MG" },
	  "2764": { "code": "2764", "label": "NOVA MÓDICA", "state": "MG" },
	  "2765": { "code": "2765", "label": "NOVA PONTE", "state": "MG" },
	  "2766": { "code": "2766", "label": "NOVA PORTEIRINHA", "state": "MG" },
	  "2767": { "code": "2767", "label": "NOVA RESENDE", "state": "MG" },
	  "2768": { "code": "2768", "label": "NOVA SERRANA", "state": "MG" },
	  "2769": { "code": "2769", "label": "NOVO CRUZEIRO", "state": "MG" },
	  "2770": { "code": "2770", "label": "NOVO ORIENTE DE MINAS", "state": "MG" },
	  "2771": { "code": "2771", "label": "NOVORIZONTE", "state": "MG" },
	  "2772": { "code": "2772", "label": "OLARIA", "state": "MG" },
	  "2773": { "code": "2773", "label": "OLHOS-D'ÁGUA", "state": "MG" },
	  "2774": { "code": "2774", "label": "OLÍMPIO NORONHA", "state": "MG" },
	  "2775": { "code": "2775", "label": "OLIVEIRA", "state": "MG" },
	  "2776": { "code": "2776", "label": "OLIVEIRA FORTES", "state": "MG" },
	  "2777": { "code": "2777", "label": "ONÇA DE PITANGUI", "state": "MG" },
	  "2778": { "code": "2778", "label": "ORATÓRIOS", "state": "MG" },
	  "2779": { "code": "2779", "label": "ORIZÂNIA", "state": "MG" },
	  "2780": { "code": "2780", "label": "OURO BRANCO", "state": "MG" },
	  "2781": { "code": "2781", "label": "OURO FINO", "state": "MG" },
	  "2782": { "code": "2782", "label": "OURO PRETO", "state": "MG" },
	  "2783": { "code": "2783", "label": "OURO VERDE DE MINAS", "state": "MG" },
	  "2784": { "code": "2784", "label": "PADRE CARVALHO", "state": "MG" },
	  "2785": { "code": "2785", "label": "PADRE PARAÍSO", "state": "MG" },
	  "2786": { "code": "2786", "label": "PAINEIRAS", "state": "MG" },
	  "2787": { "code": "2787", "label": "PAINS", "state": "MG" },
	  "2788": { "code": "2788", "label": "PAI PEDRO", "state": "MG" },
	  "2789": { "code": "2789", "label": "PAIVA", "state": "MG" },
	  "2790": { "code": "2790", "label": "PALMA", "state": "MG" },
	  "2791": { "code": "2791", "label": "PALMÓPOLIS", "state": "MG" },
	  "2792": { "code": "2792", "label": "PAPAGAIOS", "state": "MG" },
	  "2793": { "code": "2793", "label": "PARACATU", "state": "MG" },
	  "2794": { "code": "2794", "label": "PARÁ DE MINAS", "state": "MG" },
	  "2795": { "code": "2795", "label": "PARAGUAÇU", "state": "MG" },
	  "2796": { "code": "2796", "label": "PARAISÓPOLIS", "state": "MG" },
	  "2797": { "code": "2797", "label": "PARAOPEBA", "state": "MG" },
	  "2798": { "code": "2798", "label": "PASSABÉM", "state": "MG" },
	  "2799": { "code": "2799", "label": "PASSA QUATRO", "state": "MG" },
	  "2800": { "code": "2800", "label": "PASSA TEMPO", "state": "MG" },
	  "2801": { "code": "2801", "label": "PASSA-VINTE", "state": "MG" },
	  "2802": { "code": "2802", "label": "PASSOS", "state": "MG" },
	  "2803": { "code": "2803", "label": "PATIS", "state": "MG" },
	  "2804": { "code": "2804", "label": "PATOS DE MINAS", "state": "MG" },
	  "2805": { "code": "2805", "label": "PATROCÍNIO", "state": "MG" },
	  "2806": { "code": "2806", "label": "PATROCÍNIO DO MURIAÉ", "state": "MG" },
	  "2807": { "code": "2807", "label": "PAULA CÂNDIDO", "state": "MG" },
	  "2808": { "code": "2808", "label": "PAULISTAS", "state": "MG" },
	  "2809": { "code": "2809", "label": "PAVÃO", "state": "MG" },
	  "2810": { "code": "2810", "label": "PEÇANHA", "state": "MG" },
	  "2811": { "code": "2811", "label": "PEDRA AZUL", "state": "MG" },
	  "2812": { "code": "2812", "label": "PEDRA BONITA", "state": "MG" },
	  "2813": { "code": "2813", "label": "PEDRA DO ANTA", "state": "MG" },
	  "2814": { "code": "2814", "label": "PEDRA DO INDAIÁ", "state": "MG" },
	  "2815": { "code": "2815", "label": "PEDRA DOURADA", "state": "MG" },
	  "2816": { "code": "2816", "label": "PEDRALVA", "state": "MG" },
	  "2817": { "code": "2817", "label": "PEDRAS DE MARIA DA CRUZ", "state": "MG" },
	  "2818": { "code": "2818", "label": "PEDRINÓPOLIS", "state": "MG" },
	  "2819": { "code": "2819", "label": "PEDRO LEOPOLDO", "state": "MG" },
	  "2820": { "code": "2820", "label": "PEDRO TEIXEIRA", "state": "MG" },
	  "2821": { "code": "2821", "label": "PEQUERI", "state": "MG" },
	  "2822": { "code": "2822", "label": "PEQUI", "state": "MG" },
	  "2823": { "code": "2823", "label": "PERDIGÃO", "state": "MG" },
	  "2824": { "code": "2824", "label": "PERDIZES", "state": "MG" },
	  "2825": { "code": "2825", "label": "PERDÕES", "state": "MG" },
	  "2826": { "code": "2826", "label": "PERIQUITO", "state": "MG" },
	  "2827": { "code": "2827", "label": "PESCADOR", "state": "MG" },
	  "2828": { "code": "2828", "label": "PIAU", "state": "MG" },
	  "2829": { "code": "2829", "label": "PIEDADE DE CARATINGA", "state": "MG" },
	  "2830": { "code": "2830", "label": "PIEDADE DE PONTE NOVA", "state": "MG" },
	  "2831": { "code": "2831", "label": "PIEDADE DO RIO GRANDE", "state": "MG" },
	  "2832": { "code": "2832", "label": "PIEDADE DOS GERAIS", "state": "MG" },
	  "2833": { "code": "2833", "label": "PIMENTA", "state": "MG" },
	  "2834": { "code": "2834", "label": "PINGO-D'ÁGUA", "state": "MG" },
	  "2835": { "code": "2835", "label": "PINTÓPOLIS", "state": "MG" },
	  "2836": { "code": "2836", "label": "PIRACEMA", "state": "MG" },
	  "2837": { "code": "2837", "label": "PIRAJUBA", "state": "MG" },
	  "2838": { "code": "2838", "label": "PIRANGA", "state": "MG" },
	  "2839": { "code": "2839", "label": "PIRANGUÇU", "state": "MG" },
	  "2840": { "code": "2840", "label": "PIRANGUINHO", "state": "MG" },
	  "2841": { "code": "2841", "label": "PIRAPETINGA", "state": "MG" },
	  "2842": { "code": "2842", "label": "PIRAPORA", "state": "MG" },
	  "2843": { "code": "2843", "label": "PIRAÚBA", "state": "MG" },
	  "2844": { "code": "2844", "label": "PITANGUI", "state": "MG" },
	  "2845": { "code": "2845", "label": "PIUMHI", "state": "MG" },
	  "2846": { "code": "2846", "label": "PLANURA", "state": "MG" },
	  "2847": { "code": "2847", "label": "POÇO FUNDO", "state": "MG" },
	  "2848": { "code": "2848", "label": "POÇOS DE CALDAS", "state": "MG" },
	  "2849": { "code": "2849", "label": "POCRANE", "state": "MG" },
	  "2850": { "code": "2850", "label": "POMPÉU", "state": "MG" },
	  "2851": { "code": "2851", "label": "PONTE NOVA", "state": "MG" },
	  "2852": { "code": "2852", "label": "PONTO CHIQUE", "state": "MG" },
	  "2853": { "code": "2853", "label": "PONTO DOS VOLANTES", "state": "MG" },
	  "2854": { "code": "2854", "label": "PORTEIRINHA", "state": "MG" },
	  "2855": { "code": "2855", "label": "PORTO FIRME", "state": "MG" },
	  "2856": { "code": "2856", "label": "POTÉ", "state": "MG" },
	  "2857": { "code": "2857", "label": "POUSO ALEGRE", "state": "MG" },
	  "2858": { "code": "2858", "label": "POUSO ALTO", "state": "MG" },
	  "2859": { "code": "2859", "label": "PRADOS", "state": "MG" },
	  "2860": { "code": "2860", "label": "PRATA", "state": "MG" },
	  "2861": { "code": "2861", "label": "PRATÁPOLIS", "state": "MG" },
	  "2862": { "code": "2862", "label": "PRATINHA", "state": "MG" },
	  "2863": { "code": "2863", "label": "PRESIDENTE BERNARDES", "state": "MG" },
	  "2864": { "code": "2864", "label": "PRESIDENTE JUSCELINO", "state": "MG" },
	  "2865": { "code": "2865", "label": "PRESIDENTE KUBITSCHEK", "state": "MG" },
	  "2866": { "code": "2866", "label": "PRESIDENTE OLEGÁRIO", "state": "MG" },
	  "2867": { "code": "2867", "label": "ALTO JEQUITIBÁ", "state": "MG" },
	  "2868": { "code": "2868", "label": "PRUDENTE DE MORAIS", "state": "MG" },
	  "2869": { "code": "2869", "label": "QUARTEL GERAL", "state": "MG" },
	  "2870": { "code": "2870", "label": "QUELUZITO", "state": "MG" },
	  "2871": { "code": "2871", "label": "RAPOSOS", "state": "MG" },
	  "2872": { "code": "2872", "label": "RAUL SOARES", "state": "MG" },
	  "2873": { "code": "2873", "label": "RECREIO", "state": "MG" },
	  "2874": { "code": "2874", "label": "REDUTO", "state": "MG" },
	  "2875": { "code": "2875", "label": "RESENDE COSTA", "state": "MG" },
	  "2876": { "code": "2876", "label": "RESPLENDOR", "state": "MG" },
	  "2877": { "code": "2877", "label": "RESSAQUINHA", "state": "MG" },
	  "2878": { "code": "2878", "label": "RIACHINHO", "state": "MG" },
	  "2879": { "code": "2879", "label": "RIACHO DOS MACHADOS", "state": "MG" },
	  "2880": { "code": "2880", "label": "RIBEIRÃO DAS NEVES", "state": "MG" },
	  "2881": { "code": "2881", "label": "RIBEIRÃO VERMELHO", "state": "MG" },
	  "2882": { "code": "2882", "label": "RIO ACIMA", "state": "MG" },
	  "2883": { "code": "2883", "label": "RIO CASCA", "state": "MG" },
	  "2884": { "code": "2884", "label": "RIO DOCE", "state": "MG" },
	  "2885": { "code": "2885", "label": "RIO DO PRADO", "state": "MG" },
	  "2886": { "code": "2886", "label": "RIO ESPERA", "state": "MG" },
	  "2887": { "code": "2887", "label": "RIO MANSO", "state": "MG" },
	  "2888": { "code": "2888", "label": "RIO NOVO", "state": "MG" },
	  "2889": { "code": "2889", "label": "RIO PARANAÍBA", "state": "MG" },
	  "2890": { "code": "2890", "label": "RIO PARDO DE MINAS", "state": "MG" },
	  "2891": { "code": "2891", "label": "RIO PIRACICABA", "state": "MG" },
	  "2892": { "code": "2892", "label": "RIO POMBA", "state": "MG" },
	  "2893": { "code": "2893", "label": "RIO PRETO", "state": "MG" },
	  "2894": { "code": "2894", "label": "RIO VERMELHO", "state": "MG" },
	  "2895": { "code": "2895", "label": "RITÁPOLIS", "state": "MG" },
	  "2896": { "code": "2896", "label": "ROCHEDO DE MINAS", "state": "MG" },
	  "2897": { "code": "2897", "label": "RODEIRO", "state": "MG" },
	  "2898": { "code": "2898", "label": "ROMARIA", "state": "MG" },
	  "2899": { "code": "2899", "label": "ROSÁRIO DA LIMEIRA", "state": "MG" },
	  "2900": { "code": "2900", "label": "RUBELITA", "state": "MG" },
	  "2901": { "code": "2901", "label": "RUBIM", "state": "MG" },
	  "2902": { "code": "2902", "label": "SABARÁ", "state": "MG" },
	  "2903": { "code": "2903", "label": "SABINÓPOLIS", "state": "MG" },
	  "2904": { "code": "2904", "label": "SACRAMENTO", "state": "MG" },
	  "2905": { "code": "2905", "label": "SALINAS", "state": "MG" },
	  "2906": { "code": "2906", "label": "SALTO DA DIVISA", "state": "MG" },
	  "2907": { "code": "2907", "label": "SANTA BÁRBARA", "state": "MG" },
	  "2908": { "code": "2908", "label": "SANTA BÁRBARA DO LESTE", "state": "MG" },
	  "2909": { "code": "2909", "label": "SANTA BÁRBARA DO MONTE VERDE", "state": "MG" },
	  "2910": { "code": "2910", "label": "SANTA BÁRBARA DO TUGÚRIO", "state": "MG" },
	  "2911": { "code": "2911", "label": "SANTA CRUZ DE MINAS", "state": "MG" },
	  "2912": { "code": "2912", "label": "SANTA CRUZ DE SALINAS", "state": "MG" },
	  "2913": { "code": "2913", "label": "SANTA CRUZ DO ESCALVADO", "state": "MG" },
	  "2914": { "code": "2914", "label": "SANTA EFIGÊNIA DE MINAS", "state": "MG" },
	  "2915": { "code": "2915", "label": "SANTA FÉ DE MINAS", "state": "MG" },
	  "2916": { "code": "2916", "label": "SANTA HELENA DE MINAS", "state": "MG" },
	  "2917": { "code": "2917", "label": "SANTA JULIANA", "state": "MG" },
	  "2918": { "code": "2918", "label": "SANTA LUZIA", "state": "MG" },
	  "2919": { "code": "2919", "label": "SANTA MARGARIDA", "state": "MG" },
	  "2920": { "code": "2920", "label": "SANTA MARIA DE ITABIRA", "state": "MG" },
	  "2921": { "code": "2921", "label": "SANTA MARIA DO SALTO", "state": "MG" },
	  "2922": { "code": "2922", "label": "SANTA MARIA DO SUAÇUÍ", "state": "MG" },
	  "2923": { "code": "2923", "label": "SANTANA DA VARGEM", "state": "MG" },
	  "2924": { "code": "2924", "label": "SANTANA DE CATAGUASES", "state": "MG" },
	  "2925": { "code": "2925", "label": "SANTANA DE PIRAPAMA", "state": "MG" },
	  "2926": { "code": "2926", "label": "SANTANA DO DESERTO", "state": "MG" },
	  "2927": { "code": "2927", "label": "SANTANA DO GARAMBÉU", "state": "MG" },
	  "2928": { "code": "2928", "label": "SANTANA DO JACARÉ", "state": "MG" },
	  "2929": { "code": "2929", "label": "SANTANA DO MANHUAÇU", "state": "MG" },
	  "2930": { "code": "2930", "label": "SANTANA DO PARAÍSO", "state": "MG" },
	  "2931": { "code": "2931", "label": "SANTANA DO RIACHO", "state": "MG" },
	  "2932": { "code": "2932", "label": "SANTANA DOS MONTES", "state": "MG" },
	  "2933": { "code": "2933", "label": "SANTA RITA DE CALDAS", "state": "MG" },
	  "2934": { "code": "2934", "label": "SANTA RITA DE JACUTINGA", "state": "MG" },
	  "2935": { "code": "2935", "label": "SANTA RITA DE MINAS", "state": "MG" },
	  "2936": { "code": "2936", "label": "SANTA RITA DE IBITIPOCA", "state": "MG" },
	  "2937": { "code": "2937", "label": "SANTA RITA DO ITUETO", "state": "MG" },
	  "2938": { "code": "2938", "label": "SANTA RITA DO SAPUCAÍ", "state": "MG" },
	  "2939": { "code": "2939", "label": "SANTA ROSA DA SERRA", "state": "MG" },
	  "2940": { "code": "2940", "label": "SANTA VITÓRIA", "state": "MG" },
	  "2941": { "code": "2941", "label": "SANTO ANTÔNIO DO AMPARO", "state": "MG" },
	  "2942": { "code": "2942", "label": "SANTO ANTÔNIO DO AVENTUREIRO", "state": "MG" },
	  "2943": { "code": "2943", "label": "SANTO ANTÔNIO DO GRAMA", "state": "MG" },
	  "2944": { "code": "2944", "label": "SANTO ANTÔNIO DO ITAMBÉ", "state": "MG" },
	  "2945": { "code": "2945", "label": "SANTO ANTÔNIO DO JACINTO", "state": "MG" },
	  "2946": { "code": "2946", "label": "SANTO ANTÔNIO DO MONTE", "state": "MG" },
	  "2947": { "code": "2947", "label": "SANTO ANTÔNIO DO RETIRO", "state": "MG" },
	  "2948": { "code": "2948", "label": "SANTO ANTÔNIO DO RIO ABAIXO", "state": "MG" },
	  "2949": { "code": "2949", "label": "SANTO HIPÓLITO", "state": "MG" },
	  "2950": { "code": "2950", "label": "SANTOS DUMONT", "state": "MG" },
	  "2951": { "code": "2951", "label": "SÃO BENTO ABADE", "state": "MG" },
	  "2952": { "code": "2952", "label": "SÃO BRÁS DO SUAÇUÍ", "state": "MG" },
	  "2953": { "code": "2953", "label": "SÃO DOMINGOS DAS DORES", "state": "MG" },
	  "2954": { "code": "2954", "label": "SÃO DOMINGOS DO PRATA", "state": "MG" },
	  "2955": { "code": "2955", "label": "SÃO FÉLIX DE MINAS", "state": "MG" },
	  "2956": { "code": "2956", "label": "SÃO FRANCISCO", "state": "MG" },
	  "2957": { "code": "2957", "label": "SÃO FRANCISCO DE PAULA", "state": "MG" },
	  "2958": { "code": "2958", "label": "SÃO FRANCISCO DE SALES", "state": "MG" },
	  "2959": { "code": "2959", "label": "SÃO FRANCISCO DO GLÓRIA", "state": "MG" },
	  "2960": { "code": "2960", "label": "SÃO GERALDO", "state": "MG" },
	  "2961": { "code": "2961", "label": "SÃO GERALDO DA PIEDADE", "state": "MG" },
	  "2962": { "code": "2962", "label": "SÃO GERALDO DO BAIXIO", "state": "MG" },
	  "2963": { "code": "2963", "label": "SÃO GONÇALO DO ABAETÉ", "state": "MG" },
	  "2964": { "code": "2964", "label": "SÃO GONÇALO DO PARÁ", "state": "MG" },
	  "2965": { "code": "2965", "label": "SÃO GONÇALO DO RIO ABAIXO", "state": "MG" },
	  "2966": { "code": "2966", "label": "SÃO GONÇALO DO SAPUCAÍ", "state": "MG" },
	  "2967": { "code": "2967", "label": "SÃO GOTARDO", "state": "MG" },
	  "2968": { "code": "2968", "label": "SÃO JOÃO BATISTA DO GLÓRIA", "state": "MG" },
	  "2969": { "code": "2969", "label": "SÃO JOÃO DA LAGOA", "state": "MG" },
	  "2970": { "code": "2970", "label": "SÃO JOÃO DA MATA", "state": "MG" },
	  "2971": { "code": "2971", "label": "SÃO JOÃO DA PONTE", "state": "MG" },
	  "2972": { "code": "2972", "label": "SÃO JOÃO DAS MISSÕES", "state": "MG" },
	  "2973": { "code": "2973", "label": "SÃO JOÃO DEL REI", "state": "MG" },
	  "2974": { "code": "2974", "label": "SÃO JOÃO DO MANHUAÇU", "state": "MG" },
	  "2975": { "code": "2975", "label": "SÃO JOÃO DO MANTENINHA", "state": "MG" },
	  "2976": { "code": "2976", "label": "SÃO JOÃO DO ORIENTE", "state": "MG" },
	  "2977": { "code": "2977", "label": "SÃO JOÃO DO PACUÍ", "state": "MG" },
	  "2978": { "code": "2978", "label": "SÃO JOÃO DO PARAÍSO", "state": "MG" },
	  "2979": { "code": "2979", "label": "SÃO JOÃO EVANGELISTA", "state": "MG" },
	  "2980": { "code": "2980", "label": "SÃO JOÃO NEPOMUCENO", "state": "MG" },
	  "2981": { "code": "2981", "label": "SÃO JOAQUIM DE BICAS", "state": "MG" },
	  "2982": { "code": "2982", "label": "SÃO JOSÉ DA BARRA", "state": "MG" },
	  "2983": { "code": "2983", "label": "SÃO JOSÉ DA LAPA", "state": "MG" },
	  "2984": { "code": "2984", "label": "SÃO JOSÉ DA SAFIRA", "state": "MG" },
	  "2985": { "code": "2985", "label": "SÃO JOSÉ DA VARGINHA", "state": "MG" },
	  "2986": { "code": "2986", "label": "SÃO JOSÉ DO ALEGRE", "state": "MG" },
	  "2987": { "code": "2987", "label": "SÃO JOSÉ DO DIVINO", "state": "MG" },
	  "2988": { "code": "2988", "label": "SÃO JOSÉ DO GOIABAL", "state": "MG" },
	  "2989": { "code": "2989", "label": "SÃO JOSÉ DO JACURI", "state": "MG" },
	  "2990": { "code": "2990", "label": "SÃO JOSÉ DO MANTIMENTO", "state": "MG" },
	  "2991": { "code": "2991", "label": "SÃO LOURENÇO", "state": "MG" },
	  "2992": { "code": "2992", "label": "SÃO MIGUEL DO ANTA", "state": "MG" },
	  "2993": { "code": "2993", "label": "SÃO PEDRO DA UNIÃO", "state": "MG" },
	  "2994": { "code": "2994", "label": "SÃO PEDRO DOS FERROS", "state": "MG" },
	  "2995": { "code": "2995", "label": "SÃO PEDRO DO SUAÇUÍ", "state": "MG" },
	  "2996": { "code": "2996", "label": "SÃO ROMÃO", "state": "MG" },
	  "2997": { "code": "2997", "label": "SÃO ROQUE DE MINAS", "state": "MG" },
	  "2998": { "code": "2998", "label": "SÃO SEBASTIÃO DA BELA VISTA", "state": "MG" },
	  "2999": { "code": "2999", "label": "SÃO SEBASTIÃO DA VARGEM ALEGRE", "state": "MG" },
	  "3000": { "code": "3000", "label": "SÃO SEBASTIÃO DO ANTA", "state": "MG" },
	  "3001": { "code": "3001", "label": "SÃO SEBASTIÃO DO MARANHÃO", "state": "MG" },
	  "3002": { "code": "3002", "label": "SÃO SEBASTIÃO DO OESTE", "state": "MG" },
	  "3003": { "code": "3003", "label": "SÃO SEBASTIÃO DO PARAÍSO", "state": "MG" },
	  "3004": { "code": "3004", "label": "SÃO SEBASTIÃO DO RIO PRETO", "state": "MG" },
	  "3005": { "code": "3005", "label": "SÃO SEBASTIÃO DO RIO VERDE", "state": "MG" },
	  "3006": { "code": "3006", "label": "SÃO TIAGO", "state": "MG" },
	  "3007": { "code": "3007", "label": "SÃO TOMÁS DE AQUINO", "state": "MG" },
	  "3008": { "code": "3008", "label": "SÃO THOMÉ DAS LETRAS", "state": "MG" },
	  "3009": { "code": "3009", "label": "SÃO VICENTE DE MINAS", "state": "MG" },
	  "3010": { "code": "3010", "label": "SAPUCAÍ-MIRIM", "state": "MG" },
	  "3011": { "code": "3011", "label": "SARDOÁ", "state": "MG" },
	  "3012": { "code": "3012", "label": "SARZEDO", "state": "MG" },
	  "3013": { "code": "3013", "label": "SETUBINHA", "state": "MG" },
	  "3014": { "code": "3014", "label": "SEM-PEIXE", "state": "MG" },
	  "3015": { "code": "3015", "label": "SENADOR AMARAL", "state": "MG" },
	  "3016": { "code": "3016", "label": "SENADOR CORTES", "state": "MG" },
	  "3017": { "code": "3017", "label": "SENADOR FIRMINO", "state": "MG" },
	  "3018": { "code": "3018", "label": "SENADOR JOSÉ BENTO", "state": "MG" },
	  "3019": { "code": "3019", "label": "SENADOR MODESTINO GONÇALVES", "state": "MG" },
	  "3020": { "code": "3020", "label": "SENHORA DE OLIVEIRA", "state": "MG" },
	  "3021": { "code": "3021", "label": "SENHORA DO PORTO", "state": "MG" },
	  "3022": { "code": "3022", "label": "SENHORA DOS REMÉDIOS", "state": "MG" },
	  "3023": { "code": "3023", "label": "SERICITA", "state": "MG" },
	  "3024": { "code": "3024", "label": "SERITINGA", "state": "MG" },
	  "3025": { "code": "3025", "label": "SERRA AZUL DE MINAS", "state": "MG" },
	  "3026": { "code": "3026", "label": "SERRA DA SAUDADE", "state": "MG" },
	  "3027": { "code": "3027", "label": "SERRA DOS AIMORÉS", "state": "MG" },
	  "3028": { "code": "3028", "label": "SERRA DO SALITRE", "state": "MG" },
	  "3029": { "code": "3029", "label": "SERRANIA", "state": "MG" },
	  "3030": { "code": "3030", "label": "SERRANÓPOLIS DE MINAS", "state": "MG" },
	  "3031": { "code": "3031", "label": "SERRANOS", "state": "MG" },
	  "3032": { "code": "3032", "label": "SERRO", "state": "MG" },
	  "3033": { "code": "3033", "label": "SETE LAGOAS", "state": "MG" },
	  "3034": { "code": "3034", "label": "SILVEIRÂNIA", "state": "MG" },
	  "3035": { "code": "3035", "label": "SILVIANÓPOLIS", "state": "MG" },
	  "3036": { "code": "3036", "label": "SIMÃO PEREIRA", "state": "MG" },
	  "3037": { "code": "3037", "label": "SIMONÉSIA", "state": "MG" },
	  "3038": { "code": "3038", "label": "SOBRÁLIA", "state": "MG" },
	  "3039": { "code": "3039", "label": "SOLEDADE DE MINAS", "state": "MG" },
	  "3040": { "code": "3040", "label": "TABULEIRO", "state": "MG" },
	  "3041": { "code": "3041", "label": "TAIOBEIRAS", "state": "MG" },
	  "3042": { "code": "3042", "label": "TAPARUBA", "state": "MG" },
	  "3043": { "code": "3043", "label": "TAPIRA", "state": "MG" },
	  "3044": { "code": "3044", "label": "TAPIRAÍ", "state": "MG" },
	  "3045": { "code": "3045", "label": "TAQUARAÇU DE MINAS", "state": "MG" },
	  "3046": { "code": "3046", "label": "TARUMIRIM", "state": "MG" },
	  "3047": { "code": "3047", "label": "TEIXEIRAS", "state": "MG" },
	  "3048": { "code": "3048", "label": "TEÓFILO OTONI", "state": "MG" },
	  "3049": { "code": "3049", "label": "TIMÓTEO", "state": "MG" },
	  "3050": { "code": "3050", "label": "TIRADENTES", "state": "MG" },
	  "3051": { "code": "3051", "label": "TIROS", "state": "MG" },
	  "3052": { "code": "3052", "label": "TOCANTINS", "state": "MG" },
	  "3053": { "code": "3053", "label": "TOCOS DO MOJI", "state": "MG" },
	  "3054": { "code": "3054", "label": "TOLEDO", "state": "MG" },
	  "3055": { "code": "3055", "label": "TOMBOS", "state": "MG" },
	  "3056": { "code": "3056", "label": "TRÊS CORAÇÕES", "state": "MG" },
	  "3057": { "code": "3057", "label": "TRÊS MARIAS", "state": "MG" },
	  "3058": { "code": "3058", "label": "TRÊS PONTAS", "state": "MG" },
	  "3059": { "code": "3059", "label": "TUMIRITINGA", "state": "MG" },
	  "3060": { "code": "3060", "label": "TUPACIGUARA", "state": "MG" },
	  "3061": { "code": "3061", "label": "TURMALINA", "state": "MG" },
	  "3062": { "code": "3062", "label": "TURVOLÂNDIA", "state": "MG" },
	  "3063": { "code": "3063", "label": "UBÁ", "state": "MG" },
	  "3064": { "code": "3064", "label": "UBAÍ", "state": "MG" },
	  "3065": { "code": "3065", "label": "UBAPORANGA", "state": "MG" },
	  "3066": { "code": "3066", "label": "UBERABA", "state": "MG" },
	  "3067": { "code": "3067", "label": "UBERLÂNDIA", "state": "MG" },
	  "3068": { "code": "3068", "label": "UMBURATIBA", "state": "MG" },
	  "3069": { "code": "3069", "label": "UNAÍ", "state": "MG" },
	  "3070": { "code": "3070", "label": "UNIÃO DE MINAS", "state": "MG" },
	  "3071": { "code": "3071", "label": "URUANA DE MINAS", "state": "MG" },
	  "3072": { "code": "3072", "label": "URUCÂNIA", "state": "MG" },
	  "3073": { "code": "3073", "label": "URUCUIA", "state": "MG" },
	  "3074": { "code": "3074", "label": "VARGEM ALEGRE", "state": "MG" },
	  "3075": { "code": "3075", "label": "VARGEM BONITA", "state": "MG" },
	  "3076": { "code": "3076", "label": "VARGEM GRANDE DO RIO PARDO", "state": "MG" },
	  "3077": { "code": "3077", "label": "VARGINHA", "state": "MG" },
	  "3078": { "code": "3078", "label": "VARJÃO DE MINAS", "state": "MG" },
	  "3079": { "code": "3079", "label": "VÁRZEA DA PALMA", "state": "MG" },
	  "3080": { "code": "3080", "label": "VARZELÂNDIA", "state": "MG" },
	  "3081": { "code": "3081", "label": "VAZANTE", "state": "MG" },
	  "3082": { "code": "3082", "label": "VERDELÂNDIA", "state": "MG" },
	  "3083": { "code": "3083", "label": "VEREDINHA", "state": "MG" },
	  "3084": { "code": "3084", "label": "VERÍSSIMO", "state": "MG" },
	  "3085": { "code": "3085", "label": "VERMELHO NOVO", "state": "MG" },
	  "3086": { "code": "3086", "label": "VESPASIANO", "state": "MG" },
	  "3087": { "code": "3087", "label": "VIÇOSA", "state": "MG" },
	  "3088": { "code": "3088", "label": "VIEIRAS", "state": "MG" },
	  "3089": { "code": "3089", "label": "MATHIAS LOBATO", "state": "MG" },
	  "3090": { "code": "3090", "label": "VIRGEM DA LAPA", "state": "MG" },
	  "3091": { "code": "3091", "label": "VIRGÍNIA", "state": "MG" },
	  "3092": { "code": "3092", "label": "VIRGINÓPOLIS", "state": "MG" },
	  "3093": { "code": "3093", "label": "VIRGOLÂNDIA", "state": "MG" },
	  "3094": { "code": "3094", "label": "VISCONDE DO RIO BRANCO", "state": "MG" },
	  "3095": { "code": "3095", "label": "VOLTA GRANDE", "state": "MG" },
	  "3096": { "code": "3096", "label": "WENCESLAU BRAZ", "state": "MG" },
	  "3097": { "code": "3097", "label": "AFONSO CLÁUDIO", "state": "ES" },
	  "3098": { "code": "3098", "label": "ÁGUIA BRANCA", "state": "ES" },
	  "3099": { "code": "3099", "label": "ÁGUA DOCE DO NORTE", "state": "ES" },
	  "3100": { "code": "3100", "label": "ALEGRE", "state": "ES" },
	  "3101": { "code": "3101", "label": "ALFREDO CHAVES", "state": "ES" },
	  "3102": { "code": "3102", "label": "ALTO RIO NOVO", "state": "ES" },
	  "3103": { "code": "3103", "label": "ANCHIETA", "state": "ES" },
	  "3104": { "code": "3104", "label": "APIACÁ", "state": "ES" },
	  "3105": { "code": "3105", "label": "ARACRUZ", "state": "ES" },
	  "3106": { "code": "3106", "label": "ATILIO VIVACQUA", "state": "ES" },
	  "3107": { "code": "3107", "label": "BAIXO GUANDU", "state": "ES" },
	  "3108": { "code": "3108", "label": "BARRA DE SÃO FRANCISCO", "state": "ES" },
	  "3109": { "code": "3109", "label": "BOA ESPERANÇA", "state": "ES" },
	  "3110": { "code": "3110", "label": "BOM JESUS DO NORTE", "state": "ES" },
	  "3111": { "code": "3111", "label": "BREJETUBA", "state": "ES" },
	  "3112": { "code": "3112", "label": "CACHOEIRO DE ITAPEMIRIM", "state": "ES" },
	  "3113": { "code": "3113", "label": "CARIACICA", "state": "ES" },
	  "3114": { "code": "3114", "label": "CASTELO", "state": "ES" },
	  "3115": { "code": "3115", "label": "COLATINA", "state": "ES" },
	  "3116": { "code": "3116", "label": "CONCEIÇÃO DA BARRA", "state": "ES" },
	  "3117": { "code": "3117", "label": "CONCEIÇÃO DO CASTELO", "state": "ES" },
	  "3118": { "code": "3118", "label": "DIVINO DE SÃO LOURENÇO", "state": "ES" },
	  "3119": { "code": "3119", "label": "DOMINGOS MARTINS", "state": "ES" },
	  "3120": { "code": "3120", "label": "DORES DO RIO PRETO", "state": "ES" },
	  "3121": { "code": "3121", "label": "ECOPORANGA", "state": "ES" },
	  "3122": { "code": "3122", "label": "FUNDÃO", "state": "ES" },
	  "3123": { "code": "3123", "label": "GOVERNADOR LINDENBERG", "state": "ES" },
	  "3124": { "code": "3124", "label": "GUAÇUÍ", "state": "ES" },
	  "3125": { "code": "3125", "label": "GUARAPARI", "state": "ES" },
	  "3126": { "code": "3126", "label": "IBATIBA", "state": "ES" },
	  "3127": { "code": "3127", "label": "IBIRAÇU", "state": "ES" },
	  "3128": { "code": "3128", "label": "IBITIRAMA", "state": "ES" },
	  "3129": { "code": "3129", "label": "ICONHA", "state": "ES" },
	  "3130": { "code": "3130", "label": "IRUPI", "state": "ES" },
	  "3131": { "code": "3131", "label": "ITAGUAÇU", "state": "ES" },
	  "3132": { "code": "3132", "label": "ITAPEMIRIM", "state": "ES" },
	  "3133": { "code": "3133", "label": "ITARANA", "state": "ES" },
	  "3134": { "code": "3134", "label": "IÚNA", "state": "ES" },
	  "3135": { "code": "3135", "label": "JAGUARÉ", "state": "ES" },
	  "3136": { "code": "3136", "label": "JERÔNIMO MONTEIRO", "state": "ES" },
	  "3137": { "code": "3137", "label": "JOÃO NEIVA", "state": "ES" },
	  "3138": { "code": "3138", "label": "LARANJA DA TERRA", "state": "ES" },
	  "3139": { "code": "3139", "label": "LINHARES", "state": "ES" },
	  "3140": { "code": "3140", "label": "MANTENÓPOLIS", "state": "ES" },
	  "3141": { "code": "3141", "label": "MARATAÍZES", "state": "ES" },
	  "3142": { "code": "3142", "label": "MARECHAL FLORIANO", "state": "ES" },
	  "3143": { "code": "3143", "label": "MARILÂNDIA", "state": "ES" },
	  "3144": { "code": "3144", "label": "MIMOSO DO SUL", "state": "ES" },
	  "3145": { "code": "3145", "label": "MONTANHA", "state": "ES" },
	  "3146": { "code": "3146", "label": "MUCURICI", "state": "ES" },
	  "3147": { "code": "3147", "label": "MUNIZ FREIRE", "state": "ES" },
	  "3148": { "code": "3148", "label": "MUQUI", "state": "ES" },
	  "3149": { "code": "3149", "label": "NOVA VENÉCIA", "state": "ES" },
	  "3150": { "code": "3150", "label": "PANCAS", "state": "ES" },
	  "3151": { "code": "3151", "label": "PEDRO CANÁRIO", "state": "ES" },
	  "3152": { "code": "3152", "label": "PINHEIROS", "state": "ES" },
	  "3153": { "code": "3153", "label": "PIÚMA", "state": "ES" },
	  "3154": { "code": "3154", "label": "PONTO BELO", "state": "ES" },
	  "3155": { "code": "3155", "label": "PRESIDENTE KENNEDY", "state": "ES" },
	  "3156": { "code": "3156", "label": "RIO BANANAL", "state": "ES" },
	  "3157": { "code": "3157", "label": "RIO NOVO DO SUL", "state": "ES" },
	  "3158": { "code": "3158", "label": "SANTA LEOPOLDINA", "state": "ES" },
	  "3159": { "code": "3159", "label": "SANTA MARIA DE JETIBÁ", "state": "ES" },
	  "3160": { "code": "3160", "label": "SANTA TERESA", "state": "ES" },
	  "3161": { "code": "3161", "label": "SÃO DOMINGOS DO NORTE", "state": "ES" },
	  "3162": { "code": "3162", "label": "SÃO GABRIEL DA PALHA", "state": "ES" },
	  "3163": { "code": "3163", "label": "SÃO JOSÉ DO CALÇADO", "state": "ES" },
	  "3164": { "code": "3164", "label": "SÃO MATEUS", "state": "ES" },
	  "3165": { "code": "3165", "label": "SÃO ROQUE DO CANAÃ", "state": "ES" },
	  "3166": { "code": "3166", "label": "SERRA", "state": "ES" },
	  "3167": { "code": "3167", "label": "SOORETAMA", "state": "ES" },
	  "3168": { "code": "3168", "label": "VARGEM ALTA", "state": "ES" },
	  "3169": { "code": "3169", "label": "VENDA NOVA DO IMIGRANTE", "state": "ES" },
	  "3170": { "code": "3170", "label": "VIANA", "state": "ES" },
	  "3171": { "code": "3171", "label": "VILA PAVÃO", "state": "ES" },
	  "3172": { "code": "3172", "label": "VILA VALÉRIO", "state": "ES" },
	  "3173": { "code": "3173", "label": "VILA VELHA", "state": "ES" },
	  "3174": { "code": "3174", "label": "VITÓRIA", "state": "ES" },
	  "3175": { "code": "3175", "label": "ANGRA DOS REIS", "state": "RJ" },
	  "3176": { "code": "3176", "label": "APERIBÉ", "state": "RJ" },
	  "3177": { "code": "3177", "label": "ARARUAMA", "state": "RJ" },
	  "3178": { "code": "3178", "label": "AREAL", "state": "RJ" },
	  "3179": { "code": "3179", "label": "ARMAÇÃO DOS BÚZIOS", "state": "RJ" },
	  "3180": { "code": "3180", "label": "ARRAIAL DO CABO", "state": "RJ" },
	  "3181": { "code": "3181", "label": "BARRA DO PIRAÍ", "state": "RJ" },
	  "3182": { "code": "3182", "label": "BARRA MANSA", "state": "RJ" },
	  "3183": { "code": "3183", "label": "BELFORD ROXO", "state": "RJ" },
	  "3184": { "code": "3184", "label": "BOM JARDIM", "state": "RJ" },
	  "3185": { "code": "3185", "label": "BOM JESUS DO ITABAPOANA", "state": "RJ" },
	  "3186": { "code": "3186", "label": "CABO FRIO", "state": "RJ" },
	  "3187": { "code": "3187", "label": "CACHOEIRAS DE MACACU", "state": "RJ" },
	  "3188": { "code": "3188", "label": "CAMBUCI", "state": "RJ" },
	  "3189": { "code": "3189", "label": "CARAPEBUS", "state": "RJ" },
	  "3190": { "code": "3190", "label": "COMENDADOR LEVY GASPARIAN", "state": "RJ" },
	  "3191": { "code": "3191", "label": "CAMPOS DOS GOYTACAZES", "state": "RJ" },
	  "3192": { "code": "3192", "label": "CANTAGALO", "state": "RJ" },
	  "3193": { "code": "3193", "label": "CARDOSO MOREIRA", "state": "RJ" },
	  "3194": { "code": "3194", "label": "CARMO", "state": "RJ" },
	  "3195": { "code": "3195", "label": "CASIMIRO DE ABREU", "state": "RJ" },
	  "3196": { "code": "3196", "label": "CONCEIÇÃO DE MACABU", "state": "RJ" },
	  "3197": { "code": "3197", "label": "CORDEIRO", "state": "RJ" },
	  "3198": { "code": "3198", "label": "DUAS BARRAS", "state": "RJ" },
	  "3199": { "code": "3199", "label": "DUQUE DE CAXIAS", "state": "RJ" },
	  "3200": { "code": "3200", "label": "ENGENHEIRO PAULO DE FRONTIN", "state": "RJ" },
	  "3201": { "code": "3201", "label": "GUAPIMIRIM", "state": "RJ" },
	  "3202": { "code": "3202", "label": "IGUABA GRANDE", "state": "RJ" },
	  "3203": { "code": "3203", "label": "ITABORAÍ", "state": "RJ" },
	  "3204": { "code": "3204", "label": "ITAGUAÍ", "state": "RJ" },
	  "3205": { "code": "3205", "label": "ITALVA", "state": "RJ" },
	  "3206": { "code": "3206", "label": "ITAOCARA", "state": "RJ" },
	  "3207": { "code": "3207", "label": "ITAPERUNA", "state": "RJ" },
	  "3208": { "code": "3208", "label": "ITATIAIA", "state": "RJ" },
	  "3209": { "code": "3209", "label": "JAPERI", "state": "RJ" },
	  "3210": { "code": "3210", "label": "LAJE DO MURIAÉ", "state": "RJ" },
	  "3211": { "code": "3211", "label": "MACAÉ", "state": "RJ" },
	  "3212": { "code": "3212", "label": "MACUCO", "state": "RJ" },
	  "3213": { "code": "3213", "label": "MAGÉ", "state": "RJ" },
	  "3214": { "code": "3214", "label": "MANGARATIBA", "state": "RJ" },
	  "3215": { "code": "3215", "label": "MARICÁ", "state": "RJ" },
	  "3216": { "code": "3216", "label": "MENDES", "state": "RJ" },
	  "3217": { "code": "3217", "label": "MESQUITA", "state": "RJ" },
	  "3218": { "code": "3218", "label": "MIGUEL PEREIRA", "state": "RJ" },
	  "3219": { "code": "3219", "label": "MIRACEMA", "state": "RJ" },
	  "3220": { "code": "3220", "label": "NATIVIDADE", "state": "RJ" },
	  "3221": { "code": "3221", "label": "NILÓPOLIS", "state": "RJ" },
	  "3222": { "code": "3222", "label": "NITERÓI", "state": "RJ" },
	  "3223": { "code": "3223", "label": "NOVA FRIBURGO", "state": "RJ" },
	  "3224": { "code": "3224", "label": "NOVA IGUAÇU", "state": "RJ" },
	  "3225": { "code": "3225", "label": "PARACAMBI", "state": "RJ" },
	  "3226": { "code": "3226", "label": "PARAÍBA DO SUL", "state": "RJ" },
	  "3227": { "code": "3227", "label": "PARATY", "state": "RJ" },
	  "3228": { "code": "3228", "label": "PATY DO ALFERES", "state": "RJ" },
	  "3229": { "code": "3229", "label": "PETRÓPOLIS", "state": "RJ" },
	  "3230": { "code": "3230", "label": "PINHEIRAL", "state": "RJ" },
	  "3231": { "code": "3231", "label": "PIRAÍ", "state": "RJ" },
	  "3232": { "code": "3232", "label": "PORCIÚNCULA", "state": "RJ" },
	  "3233": { "code": "3233", "label": "PORTO REAL", "state": "RJ" },
	  "3234": { "code": "3234", "label": "QUATIS", "state": "RJ" },
	  "3235": { "code": "3235", "label": "QUEIMADOS", "state": "RJ" },
	  "3236": { "code": "3236", "label": "QUISSAMÃ", "state": "RJ" },
	  "3237": { "code": "3237", "label": "RESENDE", "state": "RJ" },
	  "3238": { "code": "3238", "label": "RIO BONITO", "state": "RJ" },
	  "3239": { "code": "3239", "label": "RIO CLARO", "state": "RJ" },
	  "3240": { "code": "3240", "label": "RIO DAS FLORES", "state": "RJ" },
	  "3241": { "code": "3241", "label": "RIO DAS OSTRAS", "state": "RJ" },
	  "3242": { "code": "3242", "label": "RIO DE JANEIRO", "state": "RJ" },
	  "3243": { "code": "3243", "label": "SANTA MARIA MADALENA", "state": "RJ" },
	  "3244": { "code": "3244", "label": "SANTO ANTÔNIO DE PÁDUA", "state": "RJ" },
	  "3245": { "code": "3245", "label": "SÃO FRANCISCO DE ITABAPOANA", "state": "RJ" },
	  "3246": { "code": "3246", "label": "SÃO FIDÉLIS", "state": "RJ" },
	  "3247": { "code": "3247", "label": "SÃO GONÇALO", "state": "RJ" },
	  "3248": { "code": "3248", "label": "SÃO JOÃO DA BARRA", "state": "RJ" },
	  "3249": { "code": "3249", "label": "SÃO JOÃO DE MERITI", "state": "RJ" },
	  "3250": { "code": "3250", "label": "SÃO JOSÉ DE UBÁ", "state": "RJ" },
	  "3251": { "code": "3251", "label": "SÃO JOSÉ DO VALE DO RIO PRETO", "state": "RJ" },
	  "3252": { "code": "3252", "label": "SÃO PEDRO DA ALDEIA", "state": "RJ" },
	  "3253": { "code": "3253", "label": "SÃO SEBASTIÃO DO ALTO", "state": "RJ" },
	  "3254": { "code": "3254", "label": "SAPUCAIA", "state": "RJ" },
	  "3255": { "code": "3255", "label": "SAQUAREMA", "state": "RJ" },
	  "3256": { "code": "3256", "label": "SEROPÉDICA", "state": "RJ" },
	  "3257": { "code": "3257", "label": "SILVA JARDIM", "state": "RJ" },
	  "3258": { "code": "3258", "label": "SUMIDOURO", "state": "RJ" },
	  "3259": { "code": "3259", "label": "TANGUÁ", "state": "RJ" },
	  "3260": { "code": "3260", "label": "TERESÓPOLIS", "state": "RJ" },
	  "3261": { "code": "3261", "label": "TRAJANO DE MORAES", "state": "RJ" },
	  "3262": { "code": "3262", "label": "TRÊS RIOS", "state": "RJ" },
	  "3263": { "code": "3263", "label": "VALENÇA", "state": "RJ" },
	  "3264": { "code": "3264", "label": "VARRE-SAI", "state": "RJ" },
	  "3265": { "code": "3265", "label": "VASSOURAS", "state": "RJ" },
	  "3266": { "code": "3266", "label": "VOLTA REDONDA", "state": "RJ" },
	  "3267": { "code": "3267", "label": "ADAMANTINA", "state": "SP" },
	  "3268": { "code": "3268", "label": "ADOLFO", "state": "SP" },
	  "3269": { "code": "3269", "label": "AGUAÍ", "state": "SP" },
	  "3270": { "code": "3270", "label": "ÁGUAS DA PRATA", "state": "SP" },
	  "3271": { "code": "3271", "label": "ÁGUAS DE LINDÓIA", "state": "SP" },
	  "3272": { "code": "3272", "label": "ÁGUAS DE SANTA BÁRBARA", "state": "SP" },
	  "3273": { "code": "3273", "label": "ÁGUAS DE SÃO PEDRO", "state": "SP" },
	  "3274": { "code": "3274", "label": "AGUDOS", "state": "SP" },
	  "3275": { "code": "3275", "label": "ALAMBARI", "state": "SP" },
	  "3276": { "code": "3276", "label": "ALFREDO MARCONDES", "state": "SP" },
	  "3277": { "code": "3277", "label": "ALTAIR", "state": "SP" },
	  "3278": { "code": "3278", "label": "ALTINÓPOLIS", "state": "SP" },
	  "3279": { "code": "3279", "label": "ALTO ALEGRE", "state": "SP" },
	  "3280": { "code": "3280", "label": "ALUMÍNIO", "state": "SP" },
	  "3281": { "code": "3281", "label": "ÁLVARES FLORENCE", "state": "SP" },
	  "3282": { "code": "3282", "label": "ÁLVARES MACHADO", "state": "SP" },
	  "3283": { "code": "3283", "label": "ÁLVARO DE CARVALHO", "state": "SP" },
	  "3284": { "code": "3284", "label": "ALVINLÂNDIA", "state": "SP" },
	  "3285": { "code": "3285", "label": "AMERICANA", "state": "SP" },
	  "3286": { "code": "3286", "label": "AMÉRICO BRASILIENSE", "state": "SP" },
	  "3287": { "code": "3287", "label": "AMÉRICO DE CAMPOS", "state": "SP" },
	  "3288": { "code": "3288", "label": "AMPARO", "state": "SP" },
	  "3289": { "code": "3289", "label": "ANALÂNDIA", "state": "SP" },
	  "3290": { "code": "3290", "label": "ANDRADINA", "state": "SP" },
	  "3291": { "code": "3291", "label": "ANGATUBA", "state": "SP" },
	  "3292": { "code": "3292", "label": "ANHEMBI", "state": "SP" },
	  "3293": { "code": "3293", "label": "ANHUMAS", "state": "SP" },
	  "3294": { "code": "3294", "label": "APARECIDA", "state": "SP" },
	  "3295": { "code": "3295", "label": "APARECIDA D'OESTE", "state": "SP" },
	  "3296": { "code": "3296", "label": "APIAÍ", "state": "SP" },
	  "3297": { "code": "3297", "label": "ARAÇARIGUAMA", "state": "SP" },
	  "3298": { "code": "3298", "label": "ARAÇATUBA", "state": "SP" },
	  "3299": { "code": "3299", "label": "ARAÇOIABA DA SERRA", "state": "SP" },
	  "3300": { "code": "3300", "label": "ARAMINA", "state": "SP" },
	  "3301": { "code": "3301", "label": "ARANDU", "state": "SP" },
	  "3302": { "code": "3302", "label": "ARAPEÍ", "state": "SP" },
	  "3303": { "code": "3303", "label": "ARARAQUARA", "state": "SP" },
	  "3304": { "code": "3304", "label": "ARARAS", "state": "SP" },
	  "3305": { "code": "3305", "label": "ARCO-ÍRIS", "state": "SP" },
	  "3306": { "code": "3306", "label": "AREALVA", "state": "SP" },
	  "3307": { "code": "3307", "label": "AREIAS", "state": "SP" },
	  "3308": { "code": "3308", "label": "AREIÓPOLIS", "state": "SP" },
	  "3309": { "code": "3309", "label": "ARIRANHA", "state": "SP" },
	  "3310": { "code": "3310", "label": "ARTUR NOGUEIRA", "state": "SP" },
	  "3311": { "code": "3311", "label": "ARUJÁ", "state": "SP" },
	  "3312": { "code": "3312", "label": "ASPÁSIA", "state": "SP" },
	  "3313": { "code": "3313", "label": "ASSIS", "state": "SP" },
	  "3314": { "code": "3314", "label": "ATIBAIA", "state": "SP" },
	  "3315": { "code": "3315", "label": "AURIFLAMA", "state": "SP" },
	  "3316": { "code": "3316", "label": "AVAÍ", "state": "SP" },
	  "3317": { "code": "3317", "label": "AVANHANDAVA", "state": "SP" },
	  "3318": { "code": "3318", "label": "AVARÉ", "state": "SP" },
	  "3319": { "code": "3319", "label": "BADY BASSITT", "state": "SP" },
	  "3320": { "code": "3320", "label": "BALBINOS", "state": "SP" },
	  "3321": { "code": "3321", "label": "BÁLSAMO", "state": "SP" },
	  "3322": { "code": "3322", "label": "BANANAL", "state": "SP" },
	  "3323": { "code": "3323", "label": "BARÃO DE ANTONINA", "state": "SP" },
	  "3324": { "code": "3324", "label": "BARBOSA", "state": "SP" },
	  "3325": { "code": "3325", "label": "BARIRI", "state": "SP" },
	  "3326": { "code": "3326", "label": "BARRA BONITA", "state": "SP" },
	  "3327": { "code": "3327", "label": "BARRA DO CHAPÉU", "state": "SP" },
	  "3328": { "code": "3328", "label": "BARRA DO TURVO", "state": "SP" },
	  "3329": { "code": "3329", "label": "BARRETOS", "state": "SP" },
	  "3330": { "code": "3330", "label": "BARRINHA", "state": "SP" },
	  "3331": { "code": "3331", "label": "BARUERI", "state": "SP" },
	  "3332": { "code": "3332", "label": "BASTOS", "state": "SP" },
	  "3333": { "code": "3333", "label": "BATATAIS", "state": "SP" },
	  "3334": { "code": "3334", "label": "BAURU", "state": "SP" },
	  "3335": { "code": "3335", "label": "BEBEDOURO", "state": "SP" },
	  "3336": { "code": "3336", "label": "BENTO DE ABREU", "state": "SP" },
	  "3337": { "code": "3337", "label": "BERNARDINO DE CAMPOS", "state": "SP" },
	  "3338": { "code": "3338", "label": "BERTIOGA", "state": "SP" },
	  "3339": { "code": "3339", "label": "BILAC", "state": "SP" },
	  "3340": { "code": "3340", "label": "BIRIGUI", "state": "SP" },
	  "3341": { "code": "3341", "label": "BIRITIBA-MIRIM", "state": "SP" },
	  "3342": { "code": "3342", "label": "BOA ESPERANÇA DO SUL", "state": "SP" },
	  "3343": { "code": "3343", "label": "BOCAINA", "state": "SP" },
	  "3344": { "code": "3344", "label": "BOFETE", "state": "SP" },
	  "3345": { "code": "3345", "label": "BOITUVA", "state": "SP" },
	  "3346": { "code": "3346", "label": "BOM JESUS DOS PERDÕES", "state": "SP" },
	  "3347": { "code": "3347", "label": "BOM SUCESSO DE ITARARÉ", "state": "SP" },
	  "3348": { "code": "3348", "label": "BORÁ", "state": "SP" },
	  "3349": { "code": "3349", "label": "BORACÉIA", "state": "SP" },
	  "3350": { "code": "3350", "label": "BORBOREMA", "state": "SP" },
	  "3351": { "code": "3351", "label": "BOREBI", "state": "SP" },
	  "3352": { "code": "3352", "label": "BOTUCATU", "state": "SP" },
	  "3353": { "code": "3353", "label": "BRAGANÇA PAULISTA", "state": "SP" },
	  "3354": { "code": "3354", "label": "BRAÚNA", "state": "SP" },
	  "3355": { "code": "3355", "label": "BREJO ALEGRE", "state": "SP" },
	  "3356": { "code": "3356", "label": "BRODOWSKI", "state": "SP" },
	  "3357": { "code": "3357", "label": "BROTAS", "state": "SP" },
	  "3358": { "code": "3358", "label": "BURI", "state": "SP" },
	  "3359": { "code": "3359", "label": "BURITAMA", "state": "SP" },
	  "3360": { "code": "3360", "label": "BURITIZAL", "state": "SP" },
	  "3361": { "code": "3361", "label": "CABRÁLIA PAULISTA", "state": "SP" },
	  "3362": { "code": "3362", "label": "CABREÚVA", "state": "SP" },
	  "3363": { "code": "3363", "label": "CAÇAPAVA", "state": "SP" },
	  "3364": { "code": "3364", "label": "CACHOEIRA PAULISTA", "state": "SP" },
	  "3365": { "code": "3365", "label": "CACONDE", "state": "SP" },
	  "3366": { "code": "3366", "label": "CAFELÂNDIA", "state": "SP" },
	  "3367": { "code": "3367", "label": "CAIABU", "state": "SP" },
	  "3368": { "code": "3368", "label": "CAIEIRAS", "state": "SP" },
	  "3369": { "code": "3369", "label": "CAIUÁ", "state": "SP" },
	  "3370": { "code": "3370", "label": "CAJAMAR", "state": "SP" },
	  "3371": { "code": "3371", "label": "CAJATI", "state": "SP" },
	  "3372": { "code": "3372", "label": "CAJOBI", "state": "SP" },
	  "3373": { "code": "3373", "label": "CAJURU", "state": "SP" },
	  "3374": { "code": "3374", "label": "CAMPINA DO MONTE ALEGRE", "state": "SP" },
	  "3375": { "code": "3375", "label": "CAMPINAS", "state": "SP" },
	  "3376": { "code": "3376", "label": "CAMPO LIMPO PAULISTA", "state": "SP" },
	  "3377": { "code": "3377", "label": "CAMPOS DO JORDÃO", "state": "SP" },
	  "3378": { "code": "3378", "label": "CAMPOS NOVOS PAULISTA", "state": "SP" },
	  "3379": { "code": "3379", "label": "CANANÉIA", "state": "SP" },
	  "3380": { "code": "3380", "label": "CANAS", "state": "SP" },
	  "3381": { "code": "3381", "label": "CÂNDIDO MOTA", "state": "SP" },
	  "3382": { "code": "3382", "label": "CÂNDIDO RODRIGUES", "state": "SP" },
	  "3383": { "code": "3383", "label": "CANITAR", "state": "SP" },
	  "3384": { "code": "3384", "label": "CAPÃO BONITO", "state": "SP" },
	  "3385": { "code": "3385", "label": "CAPELA DO ALTO", "state": "SP" },
	  "3386": { "code": "3386", "label": "CAPIVARI", "state": "SP" },
	  "3387": { "code": "3387", "label": "CARAGUATATUBA", "state": "SP" },
	  "3388": { "code": "3388", "label": "CARAPICUÍBA", "state": "SP" },
	  "3389": { "code": "3389", "label": "CARDOSO", "state": "SP" },
	  "3390": { "code": "3390", "label": "CASA BRANCA", "state": "SP" },
	  "3391": { "code": "3391", "label": "CÁSSIA DOS COQUEIROS", "state": "SP" },
	  "3392": { "code": "3392", "label": "CASTILHO", "state": "SP" },
	  "3393": { "code": "3393", "label": "CATANDUVA", "state": "SP" },
	  "3394": { "code": "3394", "label": "CATIGUÁ", "state": "SP" },
	  "3395": { "code": "3395", "label": "CEDRAL", "state": "SP" },
	  "3396": { "code": "3396", "label": "CERQUEIRA CÉSAR", "state": "SP" },
	  "3397": { "code": "3397", "label": "CERQUILHO", "state": "SP" },
	  "3398": { "code": "3398", "label": "CESÁRIO LANGE", "state": "SP" },
	  "3399": { "code": "3399", "label": "CHARQUEADA", "state": "SP" },
	  "3400": { "code": "3400", "label": "CLEMENTINA", "state": "SP" },
	  "3401": { "code": "3401", "label": "COLINA", "state": "SP" },
	  "3402": { "code": "3402", "label": "COLÔMBIA", "state": "SP" },
	  "3403": { "code": "3403", "label": "CONCHAL", "state": "SP" },
	  "3404": { "code": "3404", "label": "CONCHAS", "state": "SP" },
	  "3405": { "code": "3405", "label": "CORDEIRÓPOLIS", "state": "SP" },
	  "3406": { "code": "3406", "label": "COROADOS", "state": "SP" },
	  "3407": { "code": "3407", "label": "CORONEL MACEDO", "state": "SP" },
	  "3408": { "code": "3408", "label": "CORUMBATAÍ", "state": "SP" },
	  "3409": { "code": "3409", "label": "COSMÓPOLIS", "state": "SP" },
	  "3410": { "code": "3410", "label": "COSMORAMA", "state": "SP" },
	  "3411": { "code": "3411", "label": "COTIA", "state": "SP" },
	  "3412": { "code": "3412", "label": "CRAVINHOS", "state": "SP" },
	  "3413": { "code": "3413", "label": "CRISTAIS PAULISTA", "state": "SP" },
	  "3414": { "code": "3414", "label": "CRUZÁLIA", "state": "SP" },
	  "3415": { "code": "3415", "label": "CRUZEIRO", "state": "SP" },
	  "3416": { "code": "3416", "label": "CUBATÃO", "state": "SP" },
	  "3417": { "code": "3417", "label": "CUNHA", "state": "SP" },
	  "3418": { "code": "3418", "label": "DESCALVADO", "state": "SP" },
	  "3419": { "code": "3419", "label": "DIADEMA", "state": "SP" },
	  "3420": { "code": "3420", "label": "DIRCE REIS", "state": "SP" },
	  "3421": { "code": "3421", "label": "DIVINOLÂNDIA", "state": "SP" },
	  "3422": { "code": "3422", "label": "DOBRADA", "state": "SP" },
	  "3423": { "code": "3423", "label": "DOIS CÓRREGOS", "state": "SP" },
	  "3424": { "code": "3424", "label": "DOLCINÓPOLIS", "state": "SP" },
	  "3425": { "code": "3425", "label": "DOURADO", "state": "SP" },
	  "3426": { "code": "3426", "label": "DRACENA", "state": "SP" },
	  "3427": { "code": "3427", "label": "DUARTINA", "state": "SP" },
	  "3428": { "code": "3428", "label": "DUMONT", "state": "SP" },
	  "3429": { "code": "3429", "label": "ECHAPORÃ", "state": "SP" },
	  "3430": { "code": "3430", "label": "ELDORADO", "state": "SP" },
	  "3431": { "code": "3431", "label": "ELIAS FAUSTO", "state": "SP" },
	  "3432": { "code": "3432", "label": "ELISIÁRIO", "state": "SP" },
	  "3433": { "code": "3433", "label": "EMBAÚBA", "state": "SP" },
	  "3434": { "code": "3434", "label": "EMBU", "state": "SP" },
	  "3435": { "code": "3435", "label": "EMBU-GUAÇU", "state": "SP" },
	  "3436": { "code": "3436", "label": "EMILIANÓPOLIS", "state": "SP" },
	  "3437": { "code": "3437", "label": "ENGENHEIRO COELHO", "state": "SP" },
	  "3438": { "code": "3438", "label": "ESPÍRITO SANTO DO PINHAL", "state": "SP" },
	  "3439": { "code": "3439", "label": "ESPÍRITO SANTO DO TURVO", "state": "SP" },
	  "3440": { "code": "3440", "label": "ESTRELA D'OESTE", "state": "SP" },
	  "3441": { "code": "3441", "label": "ESTRELA DO NORTE", "state": "SP" },
	  "3442": { "code": "3442", "label": "EUCLIDES DA CUNHA PAULISTA", "state": "SP" },
	  "3443": { "code": "3443", "label": "FARTURA", "state": "SP" },
	  "3444": { "code": "3444", "label": "FERNANDÓPOLIS", "state": "SP" },
	  "3445": { "code": "3445", "label": "FERNANDO PRESTES", "state": "SP" },
	  "3446": { "code": "3446", "label": "FERNÃO", "state": "SP" },
	  "3447": { "code": "3447", "label": "FERRAZ DE VASCONCELOS", "state": "SP" },
	  "3448": { "code": "3448", "label": "FLORA RICA", "state": "SP" },
	  "3449": { "code": "3449", "label": "FLOREAL", "state": "SP" },
	  "3450": { "code": "3450", "label": "FLÓRIDA PAULISTA", "state": "SP" },
	  "3451": { "code": "3451", "label": "FLORÍNIA", "state": "SP" },
	  "3452": { "code": "3452", "label": "FRANCA", "state": "SP" },
	  "3453": { "code": "3453", "label": "FRANCISCO MORATO", "state": "SP" },
	  "3454": { "code": "3454", "label": "FRANCO DA ROCHA", "state": "SP" },
	  "3455": { "code": "3455", "label": "GABRIEL MONTEIRO", "state": "SP" },
	  "3456": { "code": "3456", "label": "GÁLIA", "state": "SP" },
	  "3457": { "code": "3457", "label": "GARÇA", "state": "SP" },
	  "3458": { "code": "3458", "label": "GASTÃO VIDIGAL", "state": "SP" },
	  "3459": { "code": "3459", "label": "GAVIÃO PEIXOTO", "state": "SP" },
	  "3460": { "code": "3460", "label": "GENERAL SALGADO", "state": "SP" },
	  "3461": { "code": "3461", "label": "GETULINA", "state": "SP" },
	  "3462": { "code": "3462", "label": "GLICÉRIO", "state": "SP" },
	  "3463": { "code": "3463", "label": "GUAIÇARA", "state": "SP" },
	  "3464": { "code": "3464", "label": "GUAIMBÊ", "state": "SP" },
	  "3465": { "code": "3465", "label": "GUAÍRA", "state": "SP" },
	  "3466": { "code": "3466", "label": "GUAPIAÇU", "state": "SP" },
	  "3467": { "code": "3467", "label": "GUAPIARA", "state": "SP" },
	  "3468": { "code": "3468", "label": "GUARÁ", "state": "SP" },
	  "3469": { "code": "3469", "label": "GUARAÇAÍ", "state": "SP" },
	  "3470": { "code": "3470", "label": "GUARACI", "state": "SP" },
	  "3471": { "code": "3471", "label": "GUARANI D'OESTE", "state": "SP" },
	  "3472": { "code": "3472", "label": "GUARANTÃ", "state": "SP" },
	  "3473": { "code": "3473", "label": "GUARARAPES", "state": "SP" },
	  "3474": { "code": "3474", "label": "GUARAREMA", "state": "SP" },
	  "3475": { "code": "3475", "label": "GUARATINGUETÁ", "state": "SP" },
	  "3476": { "code": "3476", "label": "GUAREÍ", "state": "SP" },
	  "3477": { "code": "3477", "label": "GUARIBA", "state": "SP" },
	  "3478": { "code": "3478", "label": "GUARUJÁ", "state": "SP" },
	  "3479": { "code": "3479", "label": "GUARULHOS", "state": "SP" },
	  "3480": { "code": "3480", "label": "GUATAPARÁ", "state": "SP" },
	  "3481": { "code": "3481", "label": "GUZOLÂNDIA", "state": "SP" },
	  "3482": { "code": "3482", "label": "HERCULÂNDIA", "state": "SP" },
	  "3483": { "code": "3483", "label": "HOLAMBRA", "state": "SP" },
	  "3484": { "code": "3484", "label": "HORTOLÂNDIA", "state": "SP" },
	  "3485": { "code": "3485", "label": "IACANGA", "state": "SP" },
	  "3486": { "code": "3486", "label": "IACRI", "state": "SP" },
	  "3487": { "code": "3487", "label": "IARAS", "state": "SP" },
	  "3488": { "code": "3488", "label": "IBATÉ", "state": "SP" },
	  "3489": { "code": "3489", "label": "IBIRÁ", "state": "SP" },
	  "3490": { "code": "3490", "label": "IBIRAREMA", "state": "SP" },
	  "3491": { "code": "3491", "label": "IBITINGA", "state": "SP" },
	  "3492": { "code": "3492", "label": "IBIÚNA", "state": "SP" },
	  "3493": { "code": "3493", "label": "ICÉM", "state": "SP" },
	  "3494": { "code": "3494", "label": "IEPÊ", "state": "SP" },
	  "3495": { "code": "3495", "label": "IGARAÇU DO TIETÊ", "state": "SP" },
	  "3496": { "code": "3496", "label": "IGARAPAVA", "state": "SP" },
	  "3497": { "code": "3497", "label": "IGARATÁ", "state": "SP" },
	  "3498": { "code": "3498", "label": "IGUAPE", "state": "SP" },
	  "3499": { "code": "3499", "label": "ILHABELA", "state": "SP" },
	  "3500": { "code": "3500", "label": "ILHA COMPRIDA", "state": "SP" },
	  "3501": { "code": "3501", "label": "ILHA SOLTEIRA", "state": "SP" },
	  "3502": { "code": "3502", "label": "INDAIATUBA", "state": "SP" },
	  "3503": { "code": "3503", "label": "INDIANA", "state": "SP" },
	  "3504": { "code": "3504", "label": "INDIAPORÃ", "state": "SP" },
	  "3505": { "code": "3505", "label": "INÚBIA PAULISTA", "state": "SP" },
	  "3506": { "code": "3506", "label": "IPAUSSU", "state": "SP" },
	  "3507": { "code": "3507", "label": "IPERÓ", "state": "SP" },
	  "3508": { "code": "3508", "label": "IPEÚNA", "state": "SP" },
	  "3509": { "code": "3509", "label": "IPIGUÁ", "state": "SP" },
	  "3510": { "code": "3510", "label": "IPORANGA", "state": "SP" },
	  "3511": { "code": "3511", "label": "IPUÃ", "state": "SP" },
	  "3512": { "code": "3512", "label": "IRACEMÁPOLIS", "state": "SP" },
	  "3513": { "code": "3513", "label": "IRAPUÃ", "state": "SP" },
	  "3514": { "code": "3514", "label": "IRAPURU", "state": "SP" },
	  "3515": { "code": "3515", "label": "ITABERÁ", "state": "SP" },
	  "3516": { "code": "3516", "label": "ITAÍ", "state": "SP" },
	  "3517": { "code": "3517", "label": "ITAJOBI", "state": "SP" },
	  "3518": { "code": "3518", "label": "ITAJU", "state": "SP" },
	  "3519": { "code": "3519", "label": "ITANHAÉM", "state": "SP" },
	  "3520": { "code": "3520", "label": "ITAÓCA", "state": "SP" },
	  "3521": { "code": "3521", "label": "ITAPECERICA DA SERRA", "state": "SP" },
	  "3522": { "code": "3522", "label": "ITAPETININGA", "state": "SP" },
	  "3523": { "code": "3523", "label": "ITAPEVA", "state": "SP" },
	  "3524": { "code": "3524", "label": "ITAPEVI", "state": "SP" },
	  "3525": { "code": "3525", "label": "ITAPIRA", "state": "SP" },
	  "3526": { "code": "3526", "label": "ITAPIRAPUÃ PAULISTA", "state": "SP" },
	  "3527": { "code": "3527", "label": "ITÁPOLIS", "state": "SP" },
	  "3528": { "code": "3528", "label": "ITAPORANGA", "state": "SP" },
	  "3529": { "code": "3529", "label": "ITAPUÍ", "state": "SP" },
	  "3530": { "code": "3530", "label": "ITAPURA", "state": "SP" },
	  "3531": { "code": "3531", "label": "ITAQUAQUECETUBA", "state": "SP" },
	  "3532": { "code": "3532", "label": "ITARARÉ", "state": "SP" },
	  "3533": { "code": "3533", "label": "ITARIRI", "state": "SP" },
	  "3534": { "code": "3534", "label": "ITATIBA", "state": "SP" },
	  "3535": { "code": "3535", "label": "ITATINGA", "state": "SP" },
	  "3536": { "code": "3536", "label": "ITIRAPINA", "state": "SP" },
	  "3537": { "code": "3537", "label": "ITIRAPUÃ", "state": "SP" },
	  "3538": { "code": "3538", "label": "ITOBI", "state": "SP" },
	  "3539": { "code": "3539", "label": "ITU", "state": "SP" },
	  "3540": { "code": "3540", "label": "ITUPEVA", "state": "SP" },
	  "3541": { "code": "3541", "label": "ITUVERAVA", "state": "SP" },
	  "3542": { "code": "3542", "label": "JABORANDI", "state": "SP" },
	  "3543": { "code": "3543", "label": "JABOTICABAL", "state": "SP" },
	  "3544": { "code": "3544", "label": "JACAREÍ", "state": "SP" },
	  "3545": { "code": "3545", "label": "JACI", "state": "SP" },
	  "3546": { "code": "3546", "label": "JACUPIRANGA", "state": "SP" },
	  "3547": { "code": "3547", "label": "JAGUARIÚNA", "state": "SP" },
	  "3548": { "code": "3548", "label": "JALES", "state": "SP" },
	  "3549": { "code": "3549", "label": "JAMBEIRO", "state": "SP" },
	  "3550": { "code": "3550", "label": "JANDIRA", "state": "SP" },
	  "3551": { "code": "3551", "label": "JARDINÓPOLIS", "state": "SP" },
	  "3552": { "code": "3552", "label": "JARINU", "state": "SP" },
	  "3553": { "code": "3553", "label": "JAÚ", "state": "SP" },
	  "3554": { "code": "3554", "label": "JERIQUARA", "state": "SP" },
	  "3555": { "code": "3555", "label": "JOANÓPOLIS", "state": "SP" },
	  "3556": { "code": "3556", "label": "JOÃO RAMALHO", "state": "SP" },
	  "3557": { "code": "3557", "label": "JOSÉ BONIFÁCIO", "state": "SP" },
	  "3558": { "code": "3558", "label": "JÚLIO MESQUITA", "state": "SP" },
	  "3559": { "code": "3559", "label": "JUMIRIM", "state": "SP" },
	  "3560": { "code": "3560", "label": "JUNDIAÍ", "state": "SP" },
	  "3561": { "code": "3561", "label": "JUNQUEIRÓPOLIS", "state": "SP" },
	  "3562": { "code": "3562", "label": "JUQUIÁ", "state": "SP" },
	  "3563": { "code": "3563", "label": "JUQUITIBA", "state": "SP" },
	  "3564": { "code": "3564", "label": "LAGOINHA", "state": "SP" },
	  "3565": { "code": "3565", "label": "LARANJAL PAULISTA", "state": "SP" },
	  "3566": { "code": "3566", "label": "LAVÍNIA", "state": "SP" },
	  "3567": { "code": "3567", "label": "LAVRINHAS", "state": "SP" },
	  "3568": { "code": "3568", "label": "LEME", "state": "SP" },
	  "3569": { "code": "3569", "label": "LENÇÓIS PAULISTA", "state": "SP" },
	  "3570": { "code": "3570", "label": "LIMEIRA", "state": "SP" },
	  "3571": { "code": "3571", "label": "LINDÓIA", "state": "SP" },
	  "3572": { "code": "3572", "label": "LINS", "state": "SP" },
	  "3573": { "code": "3573", "label": "LORENA", "state": "SP" },
	  "3574": { "code": "3574", "label": "LOURDES", "state": "SP" },
	  "3575": { "code": "3575", "label": "LOUVEIRA", "state": "SP" },
	  "3576": { "code": "3576", "label": "LUCÉLIA", "state": "SP" },
	  "3577": { "code": "3577", "label": "LUCIANÓPOLIS", "state": "SP" },
	  "3578": { "code": "3578", "label": "LUÍS ANTÔNIO", "state": "SP" },
	  "3579": { "code": "3579", "label": "LUIZIÂNIA", "state": "SP" },
	  "3580": { "code": "3580", "label": "LUPÉRCIO", "state": "SP" },
	  "3581": { "code": "3581", "label": "LUTÉCIA", "state": "SP" },
	  "3582": { "code": "3582", "label": "MACATUBA", "state": "SP" },
	  "3583": { "code": "3583", "label": "MACAUBAL", "state": "SP" },
	  "3584": { "code": "3584", "label": "MACEDÔNIA", "state": "SP" },
	  "3585": { "code": "3585", "label": "MAGDA", "state": "SP" },
	  "3586": { "code": "3586", "label": "MAIRINQUE", "state": "SP" },
	  "3587": { "code": "3587", "label": "MAIRIPORÃ", "state": "SP" },
	  "3588": { "code": "3588", "label": "MANDURI", "state": "SP" },
	  "3589": { "code": "3589", "label": "MARABÁ PAULISTA", "state": "SP" },
	  "3590": { "code": "3590", "label": "MARACAÍ", "state": "SP" },
	  "3591": { "code": "3591", "label": "MARAPOAMA", "state": "SP" },
	  "3592": { "code": "3592", "label": "MARIÁPOLIS", "state": "SP" },
	  "3593": { "code": "3593", "label": "MARÍLIA", "state": "SP" },
	  "3594": { "code": "3594", "label": "MARINÓPOLIS", "state": "SP" },
	  "3595": { "code": "3595", "label": "MARTINÓPOLIS", "state": "SP" },
	  "3596": { "code": "3596", "label": "MATÃO", "state": "SP" },
	  "3597": { "code": "3597", "label": "MAUÁ", "state": "SP" },
	  "3598": { "code": "3598", "label": "MENDONÇA", "state": "SP" },
	  "3599": { "code": "3599", "label": "MERIDIANO", "state": "SP" },
	  "3600": { "code": "3600", "label": "MESÓPOLIS", "state": "SP" },
	  "3601": { "code": "3601", "label": "MIGUELÓPOLIS", "state": "SP" },
	  "3602": { "code": "3602", "label": "MINEIROS DO TIETÊ", "state": "SP" },
	  "3603": { "code": "3603", "label": "MIRACATU", "state": "SP" },
	  "3604": { "code": "3604", "label": "MIRA ESTRELA", "state": "SP" },
	  "3605": { "code": "3605", "label": "MIRANDÓPOLIS", "state": "SP" },
	  "3606": { "code": "3606", "label": "MIRANTE DO PARANAPANEMA", "state": "SP" },
	  "3607": { "code": "3607", "label": "MIRASSOL", "state": "SP" },
	  "3608": { "code": "3608", "label": "MIRASSOLÂNDIA", "state": "SP" },
	  "3609": { "code": "3609", "label": "MOCOCA", "state": "SP" },
	  "3610": { "code": "3610", "label": "MOGI DAS CRUZES", "state": "SP" },
	  "3611": { "code": "3611", "label": "MOGI GUAÇU", "state": "SP" },
	  "3612": { "code": "3612", "label": "MOJI MIRIM", "state": "SP" },
	  "3613": { "code": "3613", "label": "MOMBUCA", "state": "SP" },
	  "3614": { "code": "3614", "label": "MONÇÕES", "state": "SP" },
	  "3615": { "code": "3615", "label": "MONGAGUÁ", "state": "SP" },
	  "3616": { "code": "3616", "label": "MONTE ALEGRE DO SUL", "state": "SP" },
	  "3617": { "code": "3617", "label": "MONTE ALTO", "state": "SP" },
	  "3618": { "code": "3618", "label": "MONTE APRAZÍVEL", "state": "SP" },
	  "3619": { "code": "3619", "label": "MONTE AZUL PAULISTA", "state": "SP" },
	  "3620": { "code": "3620", "label": "MONTE CASTELO", "state": "SP" },
	  "3621": { "code": "3621", "label": "MONTEIRO LOBATO", "state": "SP" },
	  "3622": { "code": "3622", "label": "MONTE MOR", "state": "SP" },
	  "3623": { "code": "3623", "label": "MORRO AGUDO", "state": "SP" },
	  "3624": { "code": "3624", "label": "MORUNGABA", "state": "SP" },
	  "3625": { "code": "3625", "label": "MOTUCA", "state": "SP" },
	  "3626": { "code": "3626", "label": "MURUTINGA DO SUL", "state": "SP" },
	  "3627": { "code": "3627", "label": "NANTES", "state": "SP" },
	  "3628": { "code": "3628", "label": "NARANDIBA", "state": "SP" },
	  "3629": { "code": "3629", "label": "NATIVIDADE DA SERRA", "state": "SP" },
	  "3630": { "code": "3630", "label": "NAZARÉ PAULISTA", "state": "SP" },
	  "3631": { "code": "3631", "label": "NEVES PAULISTA", "state": "SP" },
	  "3632": { "code": "3632", "label": "NHANDEARA", "state": "SP" },
	  "3633": { "code": "3633", "label": "NIPOÃ", "state": "SP" },
	  "3634": { "code": "3634", "label": "NOVA ALIANÇA", "state": "SP" },
	  "3635": { "code": "3635", "label": "NOVA CAMPINA", "state": "SP" },
	  "3636": { "code": "3636", "label": "NOVA CANAÃ PAULISTA", "state": "SP" },
	  "3637": { "code": "3637", "label": "NOVA CASTILHO", "state": "SP" },
	  "3638": { "code": "3638", "label": "NOVA EUROPA", "state": "SP" },
	  "3639": { "code": "3639", "label": "NOVA GRANADA", "state": "SP" },
	  "3640": { "code": "3640", "label": "NOVA GUATAPORANGA", "state": "SP" },
	  "3641": { "code": "3641", "label": "NOVA INDEPENDÊNCIA", "state": "SP" },
	  "3642": { "code": "3642", "label": "NOVAIS", "state": "SP" },
	  "3643": { "code": "3643", "label": "NOVA LUZITÂNIA", "state": "SP" },
	  "3644": { "code": "3644", "label": "NOVA ODESSA", "state": "SP" },
	  "3645": { "code": "3645", "label": "NOVO HORIZONTE", "state": "SP" },
	  "3646": { "code": "3646", "label": "NUPORANGA", "state": "SP" },
	  "3647": { "code": "3647", "label": "OCAUÇU", "state": "SP" },
	  "3648": { "code": "3648", "label": "ÓLEO", "state": "SP" },
	  "3649": { "code": "3649", "label": "OLÍMPIA", "state": "SP" },
	  "3650": { "code": "3650", "label": "ONDA VERDE", "state": "SP" },
	  "3651": { "code": "3651", "label": "ORIENTE", "state": "SP" },
	  "3652": { "code": "3652", "label": "ORINDIÚVA", "state": "SP" },
	  "3653": { "code": "3653", "label": "ORLÂNDIA", "state": "SP" },
	  "3654": { "code": "3654", "label": "OSASCO", "state": "SP" },
	  "3655": { "code": "3655", "label": "OSCAR BRESSANE", "state": "SP" },
	  "3656": { "code": "3656", "label": "OSVALDO CRUZ", "state": "SP" },
	  "3657": { "code": "3657", "label": "OURINHOS", "state": "SP" },
	  "3658": { "code": "3658", "label": "OUROESTE", "state": "SP" },
	  "3659": { "code": "3659", "label": "OURO VERDE", "state": "SP" },
	  "3660": { "code": "3660", "label": "PACAEMBU", "state": "SP" },
	  "3661": { "code": "3661", "label": "PALESTINA", "state": "SP" },
	  "3662": { "code": "3662", "label": "PALMARES PAULISTA", "state": "SP" },
	  "3663": { "code": "3663", "label": "PALMEIRA D'OESTE", "state": "SP" },
	  "3664": { "code": "3664", "label": "PALMITAL", "state": "SP" },
	  "3665": { "code": "3665", "label": "PANORAMA", "state": "SP" },
	  "3666": { "code": "3666", "label": "PARAGUAÇU PAULISTA", "state": "SP" },
	  "3667": { "code": "3667", "label": "PARAIBUNA", "state": "SP" },
	  "3668": { "code": "3668", "label": "PARAÍSO", "state": "SP" },
	  "3669": { "code": "3669", "label": "PARANAPANEMA", "state": "SP" },
	  "3670": { "code": "3670", "label": "PARANAPUÃ", "state": "SP" },
	  "3671": { "code": "3671", "label": "PARAPUÃ", "state": "SP" },
	  "3672": { "code": "3672", "label": "PARDINHO", "state": "SP" },
	  "3673": { "code": "3673", "label": "PARIQUERA-AÇU", "state": "SP" },
	  "3674": { "code": "3674", "label": "PARISI", "state": "SP" },
	  "3675": { "code": "3675", "label": "PATROCÍNIO PAULISTA", "state": "SP" },
	  "3676": { "code": "3676", "label": "PAULICÉIA", "state": "SP" },
	  "3677": { "code": "3677", "label": "PAULÍNIA", "state": "SP" },
	  "3678": { "code": "3678", "label": "PAULISTÂNIA", "state": "SP" },
	  "3679": { "code": "3679", "label": "PAULO DE FARIA", "state": "SP" },
	  "3680": { "code": "3680", "label": "PEDERNEIRAS", "state": "SP" },
	  "3681": { "code": "3681", "label": "PEDRA BELA", "state": "SP" },
	  "3682": { "code": "3682", "label": "PEDRANÓPOLIS", "state": "SP" },
	  "3683": { "code": "3683", "label": "PEDREGULHO", "state": "SP" },
	  "3684": { "code": "3684", "label": "PEDREIRA", "state": "SP" },
	  "3685": { "code": "3685", "label": "PEDRINHAS PAULISTA", "state": "SP" },
	  "3686": { "code": "3686", "label": "PEDRO DE TOLEDO", "state": "SP" },
	  "3687": { "code": "3687", "label": "PENÁPOLIS", "state": "SP" },
	  "3688": { "code": "3688", "label": "PEREIRA BARRETO", "state": "SP" },
	  "3689": { "code": "3689", "label": "PEREIRAS", "state": "SP" },
	  "3690": { "code": "3690", "label": "PERUÍBE", "state": "SP" },
	  "3691": { "code": "3691", "label": "PIACATU", "state": "SP" },
	  "3692": { "code": "3692", "label": "PIEDADE", "state": "SP" },
	  "3693": { "code": "3693", "label": "PILAR DO SUL", "state": "SP" },
	  "3694": { "code": "3694", "label": "PINDAMONHANGABA", "state": "SP" },
	  "3695": { "code": "3695", "label": "PINDORAMA", "state": "SP" },
	  "3696": { "code": "3696", "label": "PINHALZINHO", "state": "SP" },
	  "3697": { "code": "3697", "label": "PIQUEROBI", "state": "SP" },
	  "3698": { "code": "3698", "label": "PIQUETE", "state": "SP" },
	  "3699": { "code": "3699", "label": "PIRACAIA", "state": "SP" },
	  "3700": { "code": "3700", "label": "PIRACICABA", "state": "SP" },
	  "3701": { "code": "3701", "label": "PIRAJU", "state": "SP" },
	  "3702": { "code": "3702", "label": "PIRAJUÍ", "state": "SP" },
	  "3703": { "code": "3703", "label": "PIRANGI", "state": "SP" },
	  "3704": { "code": "3704", "label": "PIRAPORA DO BOM JESUS", "state": "SP" },
	  "3705": { "code": "3705", "label": "PIRAPOZINHO", "state": "SP" },
	  "3706": { "code": "3706", "label": "PIRASSUNUNGA", "state": "SP" },
	  "3707": { "code": "3707", "label": "PIRATININGA", "state": "SP" },
	  "3708": { "code": "3708", "label": "PITANGUEIRAS", "state": "SP" },
	  "3709": { "code": "3709", "label": "PLANALTO", "state": "SP" },
	  "3710": { "code": "3710", "label": "PLATINA", "state": "SP" },
	  "3711": { "code": "3711", "label": "POÁ", "state": "SP" },
	  "3712": { "code": "3712", "label": "POLONI", "state": "SP" },
	  "3713": { "code": "3713", "label": "POMPÉIA", "state": "SP" },
	  "3714": { "code": "3714", "label": "PONGAÍ", "state": "SP" },
	  "3715": { "code": "3715", "label": "PONTAL", "state": "SP" },
	  "3716": { "code": "3716", "label": "PONTALINDA", "state": "SP" },
	  "3717": { "code": "3717", "label": "PONTES GESTAL", "state": "SP" },
	  "3718": { "code": "3718", "label": "POPULINA", "state": "SP" },
	  "3719": { "code": "3719", "label": "PORANGABA", "state": "SP" },
	  "3720": { "code": "3720", "label": "PORTO FELIZ", "state": "SP" },
	  "3721": { "code": "3721", "label": "PORTO FERREIRA", "state": "SP" },
	  "3722": { "code": "3722", "label": "POTIM", "state": "SP" },
	  "3723": { "code": "3723", "label": "POTIRENDABA", "state": "SP" },
	  "3724": { "code": "3724", "label": "PRACINHA", "state": "SP" },
	  "3725": { "code": "3725", "label": "PRADÓPOLIS", "state": "SP" },
	  "3726": { "code": "3726", "label": "PRAIA GRANDE", "state": "SP" },
	  "3727": { "code": "3727", "label": "PRATÂNIA", "state": "SP" },
	  "3728": { "code": "3728", "label": "PRESIDENTE ALVES", "state": "SP" },
	  "3729": { "code": "3729", "label": "PRESIDENTE BERNARDES", "state": "SP" },
	  "3730": { "code": "3730", "label": "PRESIDENTE EPITÁCIO", "state": "SP" },
	  "3731": { "code": "3731", "label": "PRESIDENTE PRUDENTE", "state": "SP" },
	  "3732": { "code": "3732", "label": "PRESIDENTE VENCESLAU", "state": "SP" },
	  "3733": { "code": "3733", "label": "PROMISSÃO", "state": "SP" },
	  "3734": { "code": "3734", "label": "QUADRA", "state": "SP" },
	  "3735": { "code": "3735", "label": "QUATÁ", "state": "SP" },
	  "3736": { "code": "3736", "label": "QUEIROZ", "state": "SP" },
	  "3737": { "code": "3737", "label": "QUELUZ", "state": "SP" },
	  "3738": { "code": "3738", "label": "QUINTANA", "state": "SP" },
	  "3739": { "code": "3739", "label": "RAFARD", "state": "SP" },
	  "3740": { "code": "3740", "label": "RANCHARIA", "state": "SP" },
	  "3741": { "code": "3741", "label": "REDENÇÃO DA SERRA", "state": "SP" },
	  "3742": { "code": "3742", "label": "REGENTE FEIJÓ", "state": "SP" },
	  "3743": { "code": "3743", "label": "REGINÓPOLIS", "state": "SP" },
	  "3744": { "code": "3744", "label": "REGISTRO", "state": "SP" },
	  "3745": { "code": "3745", "label": "RESTINGA", "state": "SP" },
	  "3746": { "code": "3746", "label": "RIBEIRA", "state": "SP" },
	  "3747": { "code": "3747", "label": "RIBEIRÃO BONITO", "state": "SP" },
	  "3748": { "code": "3748", "label": "RIBEIRÃO BRANCO", "state": "SP" },
	  "3749": { "code": "3749", "label": "RIBEIRÃO CORRENTE", "state": "SP" },
	  "3750": { "code": "3750", "label": "RIBEIRÃO DO SUL", "state": "SP" },
	  "3751": { "code": "3751", "label": "RIBEIRÃO DOS ÍNDIOS", "state": "SP" },
	  "3752": { "code": "3752", "label": "RIBEIRÃO GRANDE", "state": "SP" },
	  "3753": { "code": "3753", "label": "RIBEIRÃO PIRES", "state": "SP" },
	  "3754": { "code": "3754", "label": "RIBEIRÃO PRETO", "state": "SP" },
	  "3755": { "code": "3755", "label": "RIVERSUL", "state": "SP" },
	  "3756": { "code": "3756", "label": "RIFAINA", "state": "SP" },
	  "3757": { "code": "3757", "label": "RINCÃO", "state": "SP" },
	  "3758": { "code": "3758", "label": "RINÓPOLIS", "state": "SP" },
	  "3759": { "code": "3759", "label": "RIO CLARO", "state": "SP" },
	  "3760": { "code": "3760", "label": "RIO DAS PEDRAS", "state": "SP" },
	  "3761": { "code": "3761", "label": "RIO GRANDE DA SERRA", "state": "SP" },
	  "3762": { "code": "3762", "label": "RIOLÂNDIA", "state": "SP" },
	  "3763": { "code": "3763", "label": "ROSANA", "state": "SP" },
	  "3764": { "code": "3764", "label": "ROSEIRA", "state": "SP" },
	  "3765": { "code": "3765", "label": "RUBIÁCEA", "state": "SP" },
	  "3766": { "code": "3766", "label": "RUBINÉIA", "state": "SP" },
	  "3767": { "code": "3767", "label": "SABINO", "state": "SP" },
	  "3768": { "code": "3768", "label": "SAGRES", "state": "SP" },
	  "3769": { "code": "3769", "label": "SALES", "state": "SP" },
	  "3770": { "code": "3770", "label": "SALES OLIVEIRA", "state": "SP" },
	  "3771": { "code": "3771", "label": "SALESÓPOLIS", "state": "SP" },
	  "3772": { "code": "3772", "label": "SALMOURÃO", "state": "SP" },
	  "3773": { "code": "3773", "label": "SALTINHO", "state": "SP" },
	  "3774": { "code": "3774", "label": "SALTO", "state": "SP" },
	  "3775": { "code": "3775", "label": "SALTO DE PIRAPORA", "state": "SP" },
	  "3776": { "code": "3776", "label": "SALTO GRANDE", "state": "SP" },
	  "3777": { "code": "3777", "label": "SANDOVALINA", "state": "SP" },
	  "3778": { "code": "3778", "label": "SANTA ADÉLIA", "state": "SP" },
	  "3779": { "code": "3779", "label": "SANTA ALBERTINA", "state": "SP" },
	  "3780": { "code": "3780", "label": "SANTA BÁRBARA D'OESTE", "state": "SP" },
	  "3781": { "code": "3781", "label": "SANTA BRANCA", "state": "SP" },
	  "3782": { "code": "3782", "label": "SANTA CLARA D'OESTE", "state": "SP" },
	  "3783": { "code": "3783", "label": "SANTA CRUZ DA CONCEIÇÃO", "state": "SP" },
	  "3784": { "code": "3784", "label": "SANTA CRUZ DA ESPERANÇA", "state": "SP" },
	  "3785": { "code": "3785", "label": "SANTA CRUZ DAS PALMEIRAS", "state": "SP" },
	  "3786": { "code": "3786", "label": "SANTA CRUZ DO RIO PARDO", "state": "SP" },
	  "3787": { "code": "3787", "label": "SANTA ERNESTINA", "state": "SP" },
	  "3788": { "code": "3788", "label": "SANTA FÉ DO SUL", "state": "SP" },
	  "3789": { "code": "3789", "label": "SANTA GERTRUDES", "state": "SP" },
	  "3790": { "code": "3790", "label": "SANTA ISABEL", "state": "SP" },
	  "3791": { "code": "3791", "label": "SANTA LÚCIA", "state": "SP" },
	  "3792": { "code": "3792", "label": "SANTA MARIA DA SERRA", "state": "SP" },
	  "3793": { "code": "3793", "label": "SANTA MERCEDES", "state": "SP" },
	  "3794": { "code": "3794", "label": "SANTANA DA PONTE PENSA", "state": "SP" },
	  "3795": { "code": "3795", "label": "SANTANA DE PARNAÍBA", "state": "SP" },
	  "3796": { "code": "3796", "label": "SANTA RITA D'OESTE", "state": "SP" },
	  "3797": { "code": "3797", "label": "SANTA RITA DO PASSA QUATRO", "state": "SP" },
	  "3798": { "code": "3798", "label": "SANTA ROSA DE VITERBO", "state": "SP" },
	  "3799": { "code": "3799", "label": "SANTA SALETE", "state": "SP" },
	  "3800": { "code": "3800", "label": "SANTO ANASTÁCIO", "state": "SP" },
	  "3801": { "code": "3801", "label": "SANTO ANDRÉ", "state": "SP" },
	  "3802": { "code": "3802", "label": "SANTO ANTÔNIO DA ALEGRIA", "state": "SP" },
	  "3803": { "code": "3803", "label": "SANTO ANTÔNIO DE POSSE", "state": "SP" },
	  "3804": { "code": "3804", "label": "SANTO ANTÔNIO DO ARACANGUÁ", "state": "SP" },
	  "3805": { "code": "3805", "label": "SANTO ANTÔNIO DO JARDIM", "state": "SP" },
	  "3806": { "code": "3806", "label": "SANTO ANTÔNIO DO PINHAL", "state": "SP" },
	  "3807": { "code": "3807", "label": "SANTO EXPEDITO", "state": "SP" },
	  "3808": { "code": "3808", "label": "SANTÓPOLIS DO AGUAPEÍ", "state": "SP" },
	  "3809": { "code": "3809", "label": "SANTOS", "state": "SP" },
	  "3810": { "code": "3810", "label": "SÃO BENTO DO SAPUCAÍ", "state": "SP" },
	  "3811": { "code": "3811", "label": "SÃO BERNARDO DO CAMPO", "state": "SP" },
	  "3812": { "code": "3812", "label": "SÃO CAETANO DO SUL", "state": "SP" },
	  "3813": { "code": "3813", "label": "SÃO CARLOS", "state": "SP" },
	  "3814": { "code": "3814", "label": "SÃO FRANCISCO", "state": "SP" },
	  "3815": { "code": "3815", "label": "SÃO JOÃO DA BOA VISTA", "state": "SP" },
	  "3816": { "code": "3816", "label": "SÃO JOÃO DAS DUAS PONTES", "state": "SP" },
	  "3817": { "code": "3817", "label": "SÃO JOÃO DE IRACEMA", "state": "SP" },
	  "3818": { "code": "3818", "label": "SÃO JOÃO DO PAU D'ALHO", "state": "SP" },
	  "3819": { "code": "3819", "label": "SÃO JOAQUIM DA BARRA", "state": "SP" },
	  "3820": { "code": "3820", "label": "SÃO JOSÉ DA BELA VISTA", "state": "SP" },
	  "3821": { "code": "3821", "label": "SÃO JOSÉ DO BARREIRO", "state": "SP" },
	  "3822": { "code": "3822", "label": "SÃO JOSÉ DO RIO PARDO", "state": "SP" },
	  "3823": { "code": "3823", "label": "SÃO JOSÉ DO RIO PRETO", "state": "SP" },
	  "3824": { "code": "3824", "label": "SÃO JOSÉ DOS CAMPOS", "state": "SP" },
	  "3825": { "code": "3825", "label": "SÃO LOURENÇO DA SERRA", "state": "SP" },
	  "3826": { "code": "3826", "label": "SÃO LUÍS DO PARAITINGA", "state": "SP" },
	  "3827": { "code": "3827", "label": "SÃO MANUEL", "state": "SP" },
	  "3828": { "code": "3828", "label": "SÃO MIGUEL ARCANJO", "state": "SP" },
	  "3829": { "code": "3829", "label": "SÃO PAULO", "state": "SP" },
	  "3830": { "code": "3830", "label": "SÃO PEDRO", "state": "SP" },
	  "3831": { "code": "3831", "label": "SÃO PEDRO DO TURVO", "state": "SP" },
	  "3832": { "code": "3832", "label": "SÃO ROQUE", "state": "SP" },
	  "3833": { "code": "3833", "label": "SÃO SEBASTIÃO", "state": "SP" },
	  "3834": { "code": "3834", "label": "SÃO SEBASTIÃO DA GRAMA", "state": "SP" },
	  "3835": { "code": "3835", "label": "SÃO SIMÃO", "state": "SP" },
	  "3836": { "code": "3836", "label": "SÃO VICENTE", "state": "SP" },
	  "3837": { "code": "3837", "label": "SARAPUÍ", "state": "SP" },
	  "3838": { "code": "3838", "label": "SARUTAIÁ", "state": "SP" },
	  "3839": { "code": "3839", "label": "SEBASTIANÓPOLIS DO SUL", "state": "SP" },
	  "3840": { "code": "3840", "label": "SERRA AZUL", "state": "SP" },
	  "3841": { "code": "3841", "label": "SERRANA", "state": "SP" },
	  "3842": { "code": "3842", "label": "SERRA NEGRA", "state": "SP" },
	  "3843": { "code": "3843", "label": "SERTÃOZINHO", "state": "SP" },
	  "3844": { "code": "3844", "label": "SETE BARRAS", "state": "SP" },
	  "3845": { "code": "3845", "label": "SEVERÍNIA", "state": "SP" },
	  "3846": { "code": "3846", "label": "SILVEIRAS", "state": "SP" },
	  "3847": { "code": "3847", "label": "SOCORRO", "state": "SP" },
	  "3848": { "code": "3848", "label": "SOROCABA", "state": "SP" },
	  "3849": { "code": "3849", "label": "SUD MENNUCCI", "state": "SP" },
	  "3850": { "code": "3850", "label": "SUMARÉ", "state": "SP" },
	  "3851": { "code": "3851", "label": "SUZANO", "state": "SP" },
	  "3852": { "code": "3852", "label": "SUZANÁPOLIS", "state": "SP" },
	  "3853": { "code": "3853", "label": "TABAPUÃ", "state": "SP" },
	  "3854": { "code": "3854", "label": "TABATINGA", "state": "SP" },
	  "3855": { "code": "3855", "label": "TABOÃO DA SERRA", "state": "SP" },
	  "3856": { "code": "3856", "label": "TACIBA", "state": "SP" },
	  "3857": { "code": "3857", "label": "TAGUAÍ", "state": "SP" },
	  "3858": { "code": "3858", "label": "TAIAÇU", "state": "SP" },
	  "3859": { "code": "3859", "label": "TAIÚVA", "state": "SP" },
	  "3860": { "code": "3860", "label": "TAMBAÚ", "state": "SP" },
	  "3861": { "code": "3861", "label": "TANABI", "state": "SP" },
	  "3862": { "code": "3862", "label": "TAPIRAÍ", "state": "SP" },
	  "3863": { "code": "3863", "label": "TAPIRATIBA", "state": "SP" },
	  "3864": { "code": "3864", "label": "TAQUARAL", "state": "SP" },
	  "3865": { "code": "3865", "label": "TAQUARITINGA", "state": "SP" },
	  "3866": { "code": "3866", "label": "TAQUARITUBA", "state": "SP" },
	  "3867": { "code": "3867", "label": "TAQUARIVAÍ", "state": "SP" },
	  "3868": { "code": "3868", "label": "TARABAI", "state": "SP" },
	  "3869": { "code": "3869", "label": "TARUMÃ", "state": "SP" },
	  "3870": { "code": "3870", "label": "TATUÍ", "state": "SP" },
	  "3871": { "code": "3871", "label": "TAUBATÉ", "state": "SP" },
	  "3872": { "code": "3872", "label": "TEJUPÁ", "state": "SP" },
	  "3873": { "code": "3873", "label": "TEODORO SAMPAIO", "state": "SP" },
	  "3874": { "code": "3874", "label": "TERRA ROXA", "state": "SP" },
	  "3875": { "code": "3875", "label": "TIETÊ", "state": "SP" },
	  "3876": { "code": "3876", "label": "TIMBURI", "state": "SP" },
	  "3877": { "code": "3877", "label": "TORRE DE PEDRA", "state": "SP" },
	  "3878": { "code": "3878", "label": "TORRINHA", "state": "SP" },
	  "3879": { "code": "3879", "label": "TRABIJU", "state": "SP" },
	  "3880": { "code": "3880", "label": "TREMEMBÉ", "state": "SP" },
	  "3881": { "code": "3881", "label": "TRÊS FRONTEIRAS", "state": "SP" },
	  "3882": { "code": "3882", "label": "TUIUTI", "state": "SP" },
	  "3883": { "code": "3883", "label": "TUPÃ", "state": "SP" },
	  "3884": { "code": "3884", "label": "TUPI PAULISTA", "state": "SP" },
	  "3885": { "code": "3885", "label": "TURIÚBA", "state": "SP" },
	  "3886": { "code": "3886", "label": "TURMALINA", "state": "SP" },
	  "3887": { "code": "3887", "label": "UBARANA", "state": "SP" },
	  "3888": { "code": "3888", "label": "UBATUBA", "state": "SP" },
	  "3889": { "code": "3889", "label": "UBIRAJARA", "state": "SP" },
	  "3890": { "code": "3890", "label": "UCHOA", "state": "SP" },
	  "3891": { "code": "3891", "label": "UNIÃO PAULISTA", "state": "SP" },
	  "3892": { "code": "3892", "label": "URÂNIA", "state": "SP" },
	  "3893": { "code": "3893", "label": "URU", "state": "SP" },
	  "3894": { "code": "3894", "label": "URUPÊS", "state": "SP" },
	  "3895": { "code": "3895", "label": "VALENTIM GENTIL", "state": "SP" },
	  "3896": { "code": "3896", "label": "VALINHOS", "state": "SP" },
	  "3897": { "code": "3897", "label": "VALPARAÍSO", "state": "SP" },
	  "3898": { "code": "3898", "label": "VARGEM", "state": "SP" },
	  "3899": { "code": "3899", "label": "VARGEM GRANDE DO SUL", "state": "SP" },
	  "3900": { "code": "3900", "label": "VARGEM GRANDE PAULISTA", "state": "SP" },
	  "3901": { "code": "3901", "label": "VÁRZEA PAULISTA", "state": "SP" },
	  "3902": { "code": "3902", "label": "VERA CRUZ", "state": "SP" },
	  "3903": { "code": "3903", "label": "VINHEDO", "state": "SP" },
	  "3904": { "code": "3904", "label": "VIRADOURO", "state": "SP" },
	  "3905": { "code": "3905", "label": "VISTA ALEGRE DO ALTO", "state": "SP" },
	  "3906": { "code": "3906", "label": "VITÓRIA BRASIL", "state": "SP" },
	  "3907": { "code": "3907", "label": "VOTORANTIM", "state": "SP" },
	  "3908": { "code": "3908", "label": "VOTUPORANGA", "state": "SP" },
	  "3909": { "code": "3909", "label": "ZACARIAS", "state": "SP" },
	  "3910": { "code": "3910", "label": "CHAVANTES", "state": "SP" },
	  "3911": { "code": "3911", "label": "ESTIVA GERBI", "state": "SP" },
	  "3912": { "code": "3912", "label": "ABATIÁ", "state": "PR" },
	  "3913": { "code": "3913", "label": "ADRIANÓPOLIS", "state": "PR" },
	  "3914": { "code": "3914", "label": "AGUDOS DO SUL", "state": "PR" },
	  "3915": { "code": "3915", "label": "ALMIRANTE TAMANDARÉ", "state": "PR" },
	  "3916": { "code": "3916", "label": "ALTAMIRA DO PARANÁ", "state": "PR" },
	  "3917": { "code": "3917", "label": "ALTÔNIA", "state": "PR" },
	  "3918": { "code": "3918", "label": "ALTO PARANÁ", "state": "PR" },
	  "3919": { "code": "3919", "label": "ALTO PIQUIRI", "state": "PR" },
	  "3920": { "code": "3920", "label": "ALVORADA DO SUL", "state": "PR" },
	  "3921": { "code": "3921", "label": "AMAPORÃ", "state": "PR" },
	  "3922": { "code": "3922", "label": "AMPÉRE", "state": "PR" },
	  "3923": { "code": "3923", "label": "ANAHY", "state": "PR" },
	  "3924": { "code": "3924", "label": "ANDIRÁ", "state": "PR" },
	  "3925": { "code": "3925", "label": "ÂNGULO", "state": "PR" },
	  "3926": { "code": "3926", "label": "ANTONINA", "state": "PR" },
	  "3927": { "code": "3927", "label": "ANTÔNIO OLINTO", "state": "PR" },
	  "3928": { "code": "3928", "label": "APUCARANA", "state": "PR" },
	  "3929": { "code": "3929", "label": "ARAPONGAS", "state": "PR" },
	  "3930": { "code": "3930", "label": "ARAPOTI", "state": "PR" },
	  "3931": { "code": "3931", "label": "ARAPUÃ", "state": "PR" },
	  "3932": { "code": "3932", "label": "ARARUNA", "state": "PR" },
	  "3933": { "code": "3933", "label": "ARAUCÁRIA", "state": "PR" },
	  "3934": { "code": "3934", "label": "ARIRANHA DO IVAÍ", "state": "PR" },
	  "3935": { "code": "3935", "label": "ASSAÍ", "state": "PR" },
	  "3936": { "code": "3936", "label": "ASSIS CHATEAUBRIAND", "state": "PR" },
	  "3937": { "code": "3937", "label": "ASTORGA", "state": "PR" },
	  "3938": { "code": "3938", "label": "ATALAIA", "state": "PR" },
	  "3939": { "code": "3939", "label": "BALSA NOVA", "state": "PR" },
	  "3940": { "code": "3940", "label": "BANDEIRANTES", "state": "PR" },
	  "3941": { "code": "3941", "label": "BARBOSA FERRAZ", "state": "PR" },
	  "3942": { "code": "3942", "label": "BARRACÃO", "state": "PR" },
	  "3943": { "code": "3943", "label": "BARRA DO JACARÉ", "state": "PR" },
	  "3944": { "code": "3944", "label": "BELA VISTA DA CAROBA", "state": "PR" },
	  "3945": { "code": "3945", "label": "BELA VISTA DO PARAÍSO", "state": "PR" },
	  "3946": { "code": "3946", "label": "BITURUNA", "state": "PR" },
	  "3947": { "code": "3947", "label": "BOA ESPERANÇA", "state": "PR" },
	  "3948": { "code": "3948", "label": "BOA ESPERANÇA DO IGUAÇU", "state": "PR" },
	  "3949": { "code": "3949", "label": "BOA VENTURA DE SÃO ROQUE", "state": "PR" },
	  "3950": { "code": "3950", "label": "BOA VISTA DA APARECIDA", "state": "PR" },
	  "3951": { "code": "3951", "label": "BOCAIÚVA DO SUL", "state": "PR" },
	  "3952": { "code": "3952", "label": "BOM JESUS DO SUL", "state": "PR" },
	  "3953": { "code": "3953", "label": "BOM SUCESSO", "state": "PR" },
	  "3954": { "code": "3954", "label": "BOM SUCESSO DO SUL", "state": "PR" },
	  "3955": { "code": "3955", "label": "BORRAZÓPOLIS", "state": "PR" },
	  "3956": { "code": "3956", "label": "BRAGANEY", "state": "PR" },
	  "3957": { "code": "3957", "label": "BRASILÂNDIA DO SUL", "state": "PR" },
	  "3958": { "code": "3958", "label": "CAFEARA", "state": "PR" },
	  "3959": { "code": "3959", "label": "CAFELÂNDIA", "state": "PR" },
	  "3960": { "code": "3960", "label": "CAFEZAL DO SUL", "state": "PR" },
	  "3961": { "code": "3961", "label": "CALIFÓRNIA", "state": "PR" },
	  "3962": { "code": "3962", "label": "CAMBARÁ", "state": "PR" },
	  "3963": { "code": "3963", "label": "CAMBÉ", "state": "PR" },
	  "3964": { "code": "3964", "label": "CAMBIRA", "state": "PR" },
	  "3965": { "code": "3965", "label": "CAMPINA DA LAGOA", "state": "PR" },
	  "3966": { "code": "3966", "label": "CAMPINA DO SIMÃO", "state": "PR" },
	  "3967": { "code": "3967", "label": "CAMPINA GRANDE DO SUL", "state": "PR" },
	  "3968": { "code": "3968", "label": "CAMPO BONITO", "state": "PR" },
	  "3969": { "code": "3969", "label": "CAMPO DO TENENTE", "state": "PR" },
	  "3970": { "code": "3970", "label": "CAMPO LARGO", "state": "PR" },
	  "3971": { "code": "3971", "label": "CAMPO MAGRO", "state": "PR" },
	  "3972": { "code": "3972", "label": "CAMPO MOURÃO", "state": "PR" },
	  "3973": { "code": "3973", "label": "CÂNDIDO DE ABREU", "state": "PR" },
	  "3974": { "code": "3974", "label": "CANDÓI", "state": "PR" },
	  "3975": { "code": "3975", "label": "CANTAGALO", "state": "PR" },
	  "3976": { "code": "3976", "label": "CAPANEMA", "state": "PR" },
	  "3977": { "code": "3977", "label": "CAPITÃO LEÔNIDAS MARQUES", "state": "PR" },
	  "3978": { "code": "3978", "label": "CARAMBEÍ", "state": "PR" },
	  "3979": { "code": "3979", "label": "CARLÓPOLIS", "state": "PR" },
	  "3980": { "code": "3980", "label": "CASCAVEL", "state": "PR" },
	  "3981": { "code": "3981", "label": "CASTRO", "state": "PR" },
	  "3982": { "code": "3982", "label": "CATANDUVAS", "state": "PR" },
	  "3983": { "code": "3983", "label": "CENTENÁRIO DO SUL", "state": "PR" },
	  "3984": { "code": "3984", "label": "CERRO AZUL", "state": "PR" },
	  "3985": { "code": "3985", "label": "CÉU AZUL", "state": "PR" },
	  "3986": { "code": "3986", "label": "CHOPINZINHO", "state": "PR" },
	  "3987": { "code": "3987", "label": "CIANORTE", "state": "PR" },
	  "3988": { "code": "3988", "label": "CIDADE GAÚCHA", "state": "PR" },
	  "3989": { "code": "3989", "label": "CLEVELÂNDIA", "state": "PR" },
	  "3990": { "code": "3990", "label": "COLOMBO", "state": "PR" },
	  "3991": { "code": "3991", "label": "COLORADO", "state": "PR" },
	  "3992": { "code": "3992", "label": "CONGONHINHAS", "state": "PR" },
	  "3993": { "code": "3993", "label": "CONSELHEIRO MAIRINCK", "state": "PR" },
	  "3994": { "code": "3994", "label": "CONTENDA", "state": "PR" },
	  "3995": { "code": "3995", "label": "CORBÉLIA", "state": "PR" },
	  "3996": { "code": "3996", "label": "CORNÉLIO PROCÓPIO", "state": "PR" },
	  "3997": { "code": "3997", "label": "CORONEL DOMINGOS SOARES", "state": "PR" },
	  "3998": { "code": "3998", "label": "CORONEL VIVIDA", "state": "PR" },
	  "3999": { "code": "3999", "label": "CORUMBATAÍ DO SUL", "state": "PR" },
	  "4000": { "code": "4000", "label": "CRUZEIRO DO IGUAÇU", "state": "PR" },
	  "4001": { "code": "4001", "label": "CRUZEIRO DO OESTE", "state": "PR" },
	  "4002": { "code": "4002", "label": "CRUZEIRO DO SUL", "state": "PR" },
	  "4003": { "code": "4003", "label": "CRUZ MACHADO", "state": "PR" },
	  "4004": { "code": "4004", "label": "CRUZMALTINA", "state": "PR" },
	  "4005": { "code": "4005", "label": "CURITIBA", "state": "PR" },
	  "4006": { "code": "4006", "label": "CURIÚVA", "state": "PR" },
	  "4007": { "code": "4007", "label": "DIAMANTE DO NORTE", "state": "PR" },
	  "4008": { "code": "4008", "label": "DIAMANTE DO SUL", "state": "PR" },
	  "4009": { "code": "4009", "label": "DIAMANTE D'OESTE", "state": "PR" },
	  "4010": { "code": "4010", "label": "DOIS VIZINHOS", "state": "PR" },
	  "4011": { "code": "4011", "label": "DOURADINA", "state": "PR" },
	  "4012": { "code": "4012", "label": "DOUTOR CAMARGO", "state": "PR" },
	  "4013": { "code": "4013", "label": "ENÉAS MARQUES", "state": "PR" },
	  "4014": { "code": "4014", "label": "ENGENHEIRO BELTRÃO", "state": "PR" },
	  "4015": { "code": "4015", "label": "ESPERANÇA NOVA", "state": "PR" },
	  "4016": { "code": "4016", "label": "ENTRE RIOS DO OESTE", "state": "PR" },
	  "4017": { "code": "4017", "label": "ESPIGÃO ALTO DO IGUAÇU", "state": "PR" },
	  "4018": { "code": "4018", "label": "FAROL", "state": "PR" },
	  "4019": { "code": "4019", "label": "FAXINAL", "state": "PR" },
	  "4020": { "code": "4020", "label": "FAZENDA RIO GRANDE", "state": "PR" },
	  "4021": { "code": "4021", "label": "FÊNIX", "state": "PR" },
	  "4022": { "code": "4022", "label": "FERNANDES PINHEIRO", "state": "PR" },
	  "4023": { "code": "4023", "label": "FIGUEIRA", "state": "PR" },
	  "4024": { "code": "4024", "label": "FLORAÍ", "state": "PR" },
	  "4025": { "code": "4025", "label": "FLOR DA SERRA DO SUL", "state": "PR" },
	  "4026": { "code": "4026", "label": "FLORESTA", "state": "PR" },
	  "4027": { "code": "4027", "label": "FLORESTÓPOLIS", "state": "PR" },
	  "4028": { "code": "4028", "label": "FLÓRIDA", "state": "PR" },
	  "4029": { "code": "4029", "label": "FORMOSA DO OESTE", "state": "PR" },
	  "4030": { "code": "4030", "label": "FOZ DO IGUAÇU", "state": "PR" },
	  "4031": { "code": "4031", "label": "FRANCISCO ALVES", "state": "PR" },
	  "4032": { "code": "4032", "label": "FRANCISCO BELTRÃO", "state": "PR" },
	  "4033": { "code": "4033", "label": "FOZ DO JORDÃO", "state": "PR" },
	  "4034": { "code": "4034", "label": "GENERAL CARNEIRO", "state": "PR" },
	  "4035": { "code": "4035", "label": "GODOY MOREIRA", "state": "PR" },
	  "4036": { "code": "4036", "label": "GOIOERÊ", "state": "PR" },
	  "4037": { "code": "4037", "label": "GOIOXIM", "state": "PR" },
	  "4038": { "code": "4038", "label": "GRANDES RIOS", "state": "PR" },
	  "4039": { "code": "4039", "label": "GUAÍRA", "state": "PR" },
	  "4040": { "code": "4040", "label": "GUAIRAÇÁ", "state": "PR" },
	  "4041": { "code": "4041", "label": "GUAMIRANGA", "state": "PR" },
	  "4042": { "code": "4042", "label": "GUAPIRAMA", "state": "PR" },
	  "4043": { "code": "4043", "label": "GUAPOREMA", "state": "PR" },
	  "4044": { "code": "4044", "label": "GUARACI", "state": "PR" },
	  "4045": { "code": "4045", "label": "GUARANIAÇU", "state": "PR" },
	  "4046": { "code": "4046", "label": "GUARAPUAVA", "state": "PR" },
	  "4047": { "code": "4047", "label": "GUARAQUEÇABA", "state": "PR" },
	  "4048": { "code": "4048", "label": "GUARATUBA", "state": "PR" },
	  "4049": { "code": "4049", "label": "HONÓRIO SERPA", "state": "PR" },
	  "4050": { "code": "4050", "label": "IBAITI", "state": "PR" },
	  "4051": { "code": "4051", "label": "IBEMA", "state": "PR" },
	  "4052": { "code": "4052", "label": "IBIPORÃ", "state": "PR" },
	  "4053": { "code": "4053", "label": "ICARAÍMA", "state": "PR" },
	  "4054": { "code": "4054", "label": "IGUARAÇU", "state": "PR" },
	  "4055": { "code": "4055", "label": "IGUATU", "state": "PR" },
	  "4056": { "code": "4056", "label": "IMBAÚ", "state": "PR" },
	  "4057": { "code": "4057", "label": "IMBITUVA", "state": "PR" },
	  "4058": { "code": "4058", "label": "INÁCIO MARTINS", "state": "PR" },
	  "4059": { "code": "4059", "label": "INAJÁ", "state": "PR" },
	  "4060": { "code": "4060", "label": "INDIANÓPOLIS", "state": "PR" },
	  "4061": { "code": "4061", "label": "IPIRANGA", "state": "PR" },
	  "4062": { "code": "4062", "label": "IPORÃ", "state": "PR" },
	  "4063": { "code": "4063", "label": "IRACEMA DO OESTE", "state": "PR" },
	  "4064": { "code": "4064", "label": "IRATI", "state": "PR" },
	  "4065": { "code": "4065", "label": "IRETAMA", "state": "PR" },
	  "4066": { "code": "4066", "label": "ITAGUAJÉ", "state": "PR" },
	  "4067": { "code": "4067", "label": "ITAIPULÂNDIA", "state": "PR" },
	  "4068": { "code": "4068", "label": "ITAMBARACÁ", "state": "PR" },
	  "4069": { "code": "4069", "label": "ITAMBÉ", "state": "PR" },
	  "4070": { "code": "4070", "label": "ITAPEJARA D'OESTE", "state": "PR" },
	  "4071": { "code": "4071", "label": "ITAPERUÇU", "state": "PR" },
	  "4072": { "code": "4072", "label": "ITAÚNA DO SUL", "state": "PR" },
	  "4073": { "code": "4073", "label": "IVAÍ", "state": "PR" },
	  "4074": { "code": "4074", "label": "IVAIPORÃ", "state": "PR" },
	  "4075": { "code": "4075", "label": "IVATÉ", "state": "PR" },
	  "4076": { "code": "4076", "label": "IVATUBA", "state": "PR" },
	  "4077": { "code": "4077", "label": "JABOTI", "state": "PR" },
	  "4078": { "code": "4078", "label": "JACAREZINHO", "state": "PR" },
	  "4079": { "code": "4079", "label": "JAGUAPITÃ", "state": "PR" },
	  "4080": { "code": "4080", "label": "JAGUARIAÍVA", "state": "PR" },
	  "4081": { "code": "4081", "label": "JANDAIA DO SUL", "state": "PR" },
	  "4082": { "code": "4082", "label": "JANIÓPOLIS", "state": "PR" },
	  "4083": { "code": "4083", "label": "JAPIRA", "state": "PR" },
	  "4084": { "code": "4084", "label": "JAPURÁ", "state": "PR" },
	  "4085": { "code": "4085", "label": "JARDIM ALEGRE", "state": "PR" },
	  "4086": { "code": "4086", "label": "JARDIM OLINDA", "state": "PR" },
	  "4087": { "code": "4087", "label": "JATAIZINHO", "state": "PR" },
	  "4088": { "code": "4088", "label": "JESUÍTAS", "state": "PR" },
	  "4089": { "code": "4089", "label": "JOAQUIM TÁVORA", "state": "PR" },
	  "4090": { "code": "4090", "label": "JUNDIAÍ DO SUL", "state": "PR" },
	  "4091": { "code": "4091", "label": "JURANDA", "state": "PR" },
	  "4092": { "code": "4092", "label": "JUSSARA", "state": "PR" },
	  "4093": { "code": "4093", "label": "KALORÉ", "state": "PR" },
	  "4094": { "code": "4094", "label": "LAPA", "state": "PR" },
	  "4095": { "code": "4095", "label": "LARANJAL", "state": "PR" },
	  "4096": { "code": "4096", "label": "LARANJEIRAS DO SUL", "state": "PR" },
	  "4097": { "code": "4097", "label": "LEÓPOLIS", "state": "PR" },
	  "4098": { "code": "4098", "label": "LIDIANÓPOLIS", "state": "PR" },
	  "4099": { "code": "4099", "label": "LINDOESTE", "state": "PR" },
	  "4100": { "code": "4100", "label": "LOANDA", "state": "PR" },
	  "4101": { "code": "4101", "label": "LOBATO", "state": "PR" },
	  "4102": { "code": "4102", "label": "LONDRINA", "state": "PR" },
	  "4103": { "code": "4103", "label": "LUIZIANA", "state": "PR" },
	  "4104": { "code": "4104", "label": "LUNARDELLI", "state": "PR" },
	  "4105": { "code": "4105", "label": "LUPIONÓPOLIS", "state": "PR" },
	  "4106": { "code": "4106", "label": "MALLET", "state": "PR" },
	  "4107": { "code": "4107", "label": "MAMBORÊ", "state": "PR" },
	  "4108": { "code": "4108", "label": "MANDAGUAÇU", "state": "PR" },
	  "4109": { "code": "4109", "label": "MANDAGUARI", "state": "PR" },
	  "4110": { "code": "4110", "label": "MANDIRITUBA", "state": "PR" },
	  "4111": { "code": "4111", "label": "MANFRINÓPOLIS", "state": "PR" },
	  "4112": { "code": "4112", "label": "MANGUEIRINHA", "state": "PR" },
	  "4113": { "code": "4113", "label": "MANOEL RIBAS", "state": "PR" },
	  "4114": { "code": "4114", "label": "MARECHAL CÂNDIDO RONDON", "state": "PR" },
	  "4115": { "code": "4115", "label": "MARIA HELENA", "state": "PR" },
	  "4116": { "code": "4116", "label": "MARIALVA", "state": "PR" },
	  "4117": { "code": "4117", "label": "MARILÂNDIA DO SUL", "state": "PR" },
	  "4118": { "code": "4118", "label": "MARILENA", "state": "PR" },
	  "4119": { "code": "4119", "label": "MARILUZ", "state": "PR" },
	  "4120": { "code": "4120", "label": "MARINGÁ", "state": "PR" },
	  "4121": { "code": "4121", "label": "MARIÓPOLIS", "state": "PR" },
	  "4122": { "code": "4122", "label": "MARIPÁ", "state": "PR" },
	  "4123": { "code": "4123", "label": "MARMELEIRO", "state": "PR" },
	  "4124": { "code": "4124", "label": "MARQUINHO", "state": "PR" },
	  "4125": { "code": "4125", "label": "MARUMBI", "state": "PR" },
	  "4126": { "code": "4126", "label": "MATELÂNDIA", "state": "PR" },
	  "4127": { "code": "4127", "label": "MATINHOS", "state": "PR" },
	  "4128": { "code": "4128", "label": "MATO RICO", "state": "PR" },
	  "4129": { "code": "4129", "label": "MAUÁ DA SERRA", "state": "PR" },
	  "4130": { "code": "4130", "label": "MEDIANEIRA", "state": "PR" },
	  "4131": { "code": "4131", "label": "MERCEDES", "state": "PR" },
	  "4132": { "code": "4132", "label": "MIRADOR", "state": "PR" },
	  "4133": { "code": "4133", "label": "MIRASELVA", "state": "PR" },
	  "4134": { "code": "4134", "label": "MISSAL", "state": "PR" },
	  "4135": { "code": "4135", "label": "MOREIRA SALES", "state": "PR" },
	  "4136": { "code": "4136", "label": "MORRETES", "state": "PR" },
	  "4137": { "code": "4137", "label": "MUNHOZ DE MELO", "state": "PR" },
	  "4138": { "code": "4138", "label": "NOSSA SENHORA DAS GRAÇAS", "state": "PR" },
	  "4139": { "code": "4139", "label": "NOVA ALIANÇA DO IVAÍ", "state": "PR" },
	  "4140": { "code": "4140", "label": "NOVA AMÉRICA DA COLINA", "state": "PR" },
	  "4141": { "code": "4141", "label": "NOVA AURORA", "state": "PR" },
	  "4142": { "code": "4142", "label": "NOVA CANTU", "state": "PR" },
	  "4143": { "code": "4143", "label": "NOVA ESPERANÇA", "state": "PR" },
	  "4144": { "code": "4144", "label": "NOVA ESPERANÇA DO SUDOESTE", "state": "PR" },
	  "4145": { "code": "4145", "label": "NOVA FÁTIMA", "state": "PR" },
	  "4146": { "code": "4146", "label": "NOVA LARANJEIRAS", "state": "PR" },
	  "4147": { "code": "4147", "label": "NOVA LONDRINA", "state": "PR" },
	  "4148": { "code": "4148", "label": "NOVA OLÍMPIA", "state": "PR" },
	  "4149": { "code": "4149", "label": "NOVA SANTA BÁRBARA", "state": "PR" },
	  "4150": { "code": "4150", "label": "NOVA SANTA ROSA", "state": "PR" },
	  "4151": { "code": "4151", "label": "NOVA PRATA DO IGUAÇU", "state": "PR" },
	  "4152": { "code": "4152", "label": "NOVA TEBAS", "state": "PR" },
	  "4153": { "code": "4153", "label": "NOVO ITACOLOMI", "state": "PR" },
	  "4154": { "code": "4154", "label": "ORTIGUEIRA", "state": "PR" },
	  "4155": { "code": "4155", "label": "OURIZONA", "state": "PR" },
	  "4156": { "code": "4156", "label": "OURO VERDE DO OESTE", "state": "PR" },
	  "4157": { "code": "4157", "label": "PAIÇANDU", "state": "PR" },
	  "4158": { "code": "4158", "label": "PALMAS", "state": "PR" },
	  "4159": { "code": "4159", "label": "PALMEIRA", "state": "PR" },
	  "4160": { "code": "4160", "label": "PALMITAL", "state": "PR" },
	  "4161": { "code": "4161", "label": "PALOTINA", "state": "PR" },
	  "4162": { "code": "4162", "label": "PARAÍSO DO NORTE", "state": "PR" },
	  "4163": { "code": "4163", "label": "PARANACITY", "state": "PR" },
	  "4164": { "code": "4164", "label": "PARANAGUÁ", "state": "PR" },
	  "4165": { "code": "4165", "label": "PARANAPOEMA", "state": "PR" },
	  "4166": { "code": "4166", "label": "PARANAVAÍ", "state": "PR" },
	  "4167": { "code": "4167", "label": "PATO BRAGADO", "state": "PR" },
	  "4168": { "code": "4168", "label": "PATO BRANCO", "state": "PR" },
	  "4169": { "code": "4169", "label": "PAULA FREITAS", "state": "PR" },
	  "4170": { "code": "4170", "label": "PAULO FRONTIN", "state": "PR" },
	  "4171": { "code": "4171", "label": "PEABIRU", "state": "PR" },
	  "4172": { "code": "4172", "label": "PEROBAL", "state": "PR" },
	  "4173": { "code": "4173", "label": "PÉROLA", "state": "PR" },
	  "4174": { "code": "4174", "label": "PÉROLA D'OESTE", "state": "PR" },
	  "4175": { "code": "4175", "label": "PIÊN", "state": "PR" },
	  "4176": { "code": "4176", "label": "PINHAIS", "state": "PR" },
	  "4177": { "code": "4177", "label": "PINHALÃO", "state": "PR" },
	  "4178": { "code": "4178", "label": "PINHAL DE SÃO BENTO", "state": "PR" },
	  "4179": { "code": "4179", "label": "PINHÃO", "state": "PR" },
	  "4180": { "code": "4180", "label": "PIRAÍ DO SUL", "state": "PR" },
	  "4181": { "code": "4181", "label": "PIRAQUARA", "state": "PR" },
	  "4182": { "code": "4182", "label": "PITANGA", "state": "PR" },
	  "4183": { "code": "4183", "label": "PITANGUEIRAS", "state": "PR" },
	  "4184": { "code": "4184", "label": "PLANALTINA DO PARANÁ", "state": "PR" },
	  "4185": { "code": "4185", "label": "PLANALTO", "state": "PR" },
	  "4186": { "code": "4186", "label": "PONTA GROSSA", "state": "PR" },
	  "4187": { "code": "4187", "label": "PONTAL DO PARANÁ", "state": "PR" },
	  "4188": { "code": "4188", "label": "PORECATU", "state": "PR" },
	  "4189": { "code": "4189", "label": "PORTO AMAZONAS", "state": "PR" },
	  "4190": { "code": "4190", "label": "PORTO BARREIRO", "state": "PR" },
	  "4191": { "code": "4191", "label": "PORTO RICO", "state": "PR" },
	  "4192": { "code": "4192", "label": "PORTO VITÓRIA", "state": "PR" },
	  "4193": { "code": "4193", "label": "PRADO FERREIRA", "state": "PR" },
	  "4194": { "code": "4194", "label": "PRANCHITA", "state": "PR" },
	  "4195": { "code": "4195", "label": "PRESIDENTE CASTELO BRANCO", "state": "PR" },
	  "4196": { "code": "4196", "label": "PRIMEIRO DE MAIO", "state": "PR" },
	  "4197": { "code": "4197", "label": "PRUDENTÓPOLIS", "state": "PR" },
	  "4198": { "code": "4198", "label": "QUARTO CENTENÁRIO", "state": "PR" },
	  "4199": { "code": "4199", "label": "QUATIGUÁ", "state": "PR" },
	  "4200": { "code": "4200", "label": "QUATRO BARRAS", "state": "PR" },
	  "4201": { "code": "4201", "label": "QUATRO PONTES", "state": "PR" },
	  "4202": { "code": "4202", "label": "QUEDAS DO IGUAÇU", "state": "PR" },
	  "4203": { "code": "4203", "label": "QUERÊNCIA DO NORTE", "state": "PR" },
	  "4204": { "code": "4204", "label": "QUINTA DO SOL", "state": "PR" },
	  "4205": { "code": "4205", "label": "QUITANDINHA", "state": "PR" },
	  "4206": { "code": "4206", "label": "RAMILÂNDIA", "state": "PR" },
	  "4207": { "code": "4207", "label": "RANCHO ALEGRE", "state": "PR" },
	  "4208": { "code": "4208", "label": "RANCHO ALEGRE D'OESTE", "state": "PR" },
	  "4209": { "code": "4209", "label": "REALEZA", "state": "PR" },
	  "4210": { "code": "4210", "label": "REBOUÇAS", "state": "PR" },
	  "4211": { "code": "4211", "label": "RENASCENÇA", "state": "PR" },
	  "4212": { "code": "4212", "label": "RESERVA", "state": "PR" },
	  "4213": { "code": "4213", "label": "RESERVA DO IGUAÇU", "state": "PR" },
	  "4214": { "code": "4214", "label": "RIBEIRÃO CLARO", "state": "PR" },
	  "4215": { "code": "4215", "label": "RIBEIRÃO DO PINHAL", "state": "PR" },
	  "4216": { "code": "4216", "label": "RIO AZUL", "state": "PR" },
	  "4217": { "code": "4217", "label": "RIO BOM", "state": "PR" },
	  "4218": { "code": "4218", "label": "RIO BONITO DO IGUAÇU", "state": "PR" },
	  "4219": { "code": "4219", "label": "RIO BRANCO DO IVAÍ", "state": "PR" },
	  "4220": { "code": "4220", "label": "RIO BRANCO DO SUL", "state": "PR" },
	  "4221": { "code": "4221", "label": "RIO NEGRO", "state": "PR" },
	  "4222": { "code": "4222", "label": "ROLÂNDIA", "state": "PR" },
	  "4223": { "code": "4223", "label": "RONCADOR", "state": "PR" },
	  "4224": { "code": "4224", "label": "RONDON", "state": "PR" },
	  "4225": { "code": "4225", "label": "ROSÁRIO DO IVAÍ", "state": "PR" },
	  "4226": { "code": "4226", "label": "SABÁUDIA", "state": "PR" },
	  "4227": { "code": "4227", "label": "SALGADO FILHO", "state": "PR" },
	  "4228": { "code": "4228", "label": "SALTO DO ITARARÉ", "state": "PR" },
	  "4229": { "code": "4229", "label": "SALTO DO LONTRA", "state": "PR" },
	  "4230": { "code": "4230", "label": "SANTA AMÉLIA", "state": "PR" },
	  "4231": { "code": "4231", "label": "SANTA CECÍLIA DO PAVÃO", "state": "PR" },
	  "4232": { "code": "4232", "label": "SANTA CRUZ DE MONTE CASTELO", "state": "PR" },
	  "4233": { "code": "4233", "label": "SANTA FÉ", "state": "PR" },
	  "4234": { "code": "4234", "label": "SANTA HELENA", "state": "PR" },
	  "4235": { "code": "4235", "label": "SANTA INÊS", "state": "PR" },
	  "4236": { "code": "4236", "label": "SANTA ISABEL DO IVAÍ", "state": "PR" },
	  "4237": { "code": "4237", "label": "SANTA IZABEL DO OESTE", "state": "PR" },
	  "4238": { "code": "4238", "label": "SANTA LÚCIA", "state": "PR" },
	  "4239": { "code": "4239", "label": "SANTA MARIA DO OESTE", "state": "PR" },
	  "4240": { "code": "4240", "label": "SANTA MARIANA", "state": "PR" },
	  "4241": { "code": "4241", "label": "SANTA MÔNICA", "state": "PR" },
	  "4242": { "code": "4242", "label": "SANTANA DO ITARARÉ", "state": "PR" },
	  "4243": { "code": "4243", "label": "SANTA TEREZA DO OESTE", "state": "PR" },
	  "4244": { "code": "4244", "label": "SANTA TEREZINHA DE ITAIPU", "state": "PR" },
	  "4245": { "code": "4245", "label": "SANTO ANTÔNIO DA PLATINA", "state": "PR" },
	  "4246": { "code": "4246", "label": "SANTO ANTÔNIO DO CAIUÁ", "state": "PR" },
	  "4247": { "code": "4247", "label": "SANTO ANTÔNIO DO PARAÍSO", "state": "PR" },
	  "4248": { "code": "4248", "label": "SANTO ANTÔNIO DO SUDOESTE", "state": "PR" },
	  "4249": { "code": "4249", "label": "SANTO INÁCIO", "state": "PR" },
	  "4250": { "code": "4250", "label": "SÃO CARLOS DO IVAÍ", "state": "PR" },
	  "4251": { "code": "4251", "label": "SÃO JERÔNIMO DA SERRA", "state": "PR" },
	  "4252": { "code": "4252", "label": "SÃO JOÃO", "state": "PR" },
	  "4253": { "code": "4253", "label": "SÃO JOÃO DO CAIUÁ", "state": "PR" },
	  "4254": { "code": "4254", "label": "SÃO JOÃO DO IVAÍ", "state": "PR" },
	  "4255": { "code": "4255", "label": "SÃO JOÃO DO TRIUNFO", "state": "PR" },
	  "4256": { "code": "4256", "label": "SÃO JORGE D'OESTE", "state": "PR" },
	  "4257": { "code": "4257", "label": "SÃO JORGE DO IVAÍ", "state": "PR" },
	  "4258": { "code": "4258", "label": "SÃO JORGE DO PATROCÍNIO", "state": "PR" },
	  "4259": { "code": "4259", "label": "SÃO JOSÉ DA BOA VISTA", "state": "PR" },
	  "4260": { "code": "4260", "label": "SÃO JOSÉ DAS PALMEIRAS", "state": "PR" },
	  "4261": { "code": "4261", "label": "SÃO JOSÉ DOS PINHAIS", "state": "PR" },
	  "4262": { "code": "4262", "label": "SÃO MANOEL DO PARANÁ", "state": "PR" },
	  "4263": { "code": "4263", "label": "SÃO MATEUS DO SUL", "state": "PR" },
	  "4264": { "code": "4264", "label": "SÃO MIGUEL DO IGUAÇU", "state": "PR" },
	  "4265": { "code": "4265", "label": "SÃO PEDRO DO IGUAÇU", "state": "PR" },
	  "4266": { "code": "4266", "label": "SÃO PEDRO DO IVAÍ", "state": "PR" },
	  "4267": { "code": "4267", "label": "SÃO PEDRO DO PARANÁ", "state": "PR" },
	  "4268": { "code": "4268", "label": "SÃO SEBASTIÃO DA AMOREIRA", "state": "PR" },
	  "4269": { "code": "4269", "label": "SÃO TOMÉ", "state": "PR" },
	  "4270": { "code": "4270", "label": "SAPOPEMA", "state": "PR" },
	  "4271": { "code": "4271", "label": "SARANDI", "state": "PR" },
	  "4272": { "code": "4272", "label": "SAUDADE DO IGUAÇU", "state": "PR" },
	  "4273": { "code": "4273", "label": "SENGÉS", "state": "PR" },
	  "4274": { "code": "4274", "label": "SERRANÓPOLIS DO IGUAÇU", "state": "PR" },
	  "4275": { "code": "4275", "label": "SERTANEJA", "state": "PR" },
	  "4276": { "code": "4276", "label": "SERTANÓPOLIS", "state": "PR" },
	  "4277": { "code": "4277", "label": "SIQUEIRA CAMPOS", "state": "PR" },
	  "4278": { "code": "4278", "label": "SULINA", "state": "PR" },
	  "4279": { "code": "4279", "label": "TAMARANA", "state": "PR" },
	  "4280": { "code": "4280", "label": "TAMBOARA", "state": "PR" },
	  "4281": { "code": "4281", "label": "TAPEJARA", "state": "PR" },
	  "4282": { "code": "4282", "label": "TAPIRA", "state": "PR" },
	  "4283": { "code": "4283", "label": "TEIXEIRA SOARES", "state": "PR" },
	  "4284": { "code": "4284", "label": "TELÊMACO BORBA", "state": "PR" },
	  "4285": { "code": "4285", "label": "TERRA BOA", "state": "PR" },
	  "4286": { "code": "4286", "label": "TERRA RICA", "state": "PR" },
	  "4287": { "code": "4287", "label": "TERRA ROXA", "state": "PR" },
	  "4288": { "code": "4288", "label": "TIBAGI", "state": "PR" },
	  "4289": { "code": "4289", "label": "TIJUCAS DO SUL", "state": "PR" },
	  "4290": { "code": "4290", "label": "TOLEDO", "state": "PR" },
	  "4291": { "code": "4291", "label": "TOMAZINA", "state": "PR" },
	  "4292": { "code": "4292", "label": "TRÊS BARRAS DO PARANÁ", "state": "PR" },
	  "4293": { "code": "4293", "label": "TUNAS DO PARANÁ", "state": "PR" },
	  "4294": { "code": "4294", "label": "TUNEIRAS DO OESTE", "state": "PR" },
	  "4295": { "code": "4295", "label": "TUPÃSSI", "state": "PR" },
	  "4296": { "code": "4296", "label": "TURVO", "state": "PR" },
	  "4297": { "code": "4297", "label": "UBIRATÃ", "state": "PR" },
	  "4298": { "code": "4298", "label": "UMUARAMA", "state": "PR" },
	  "4299": { "code": "4299", "label": "UNIÃO DA VITÓRIA", "state": "PR" },
	  "4300": { "code": "4300", "label": "UNIFLOR", "state": "PR" },
	  "4301": { "code": "4301", "label": "URAÍ", "state": "PR" },
	  "4302": { "code": "4302", "label": "WENCESLAU BRAZ", "state": "PR" },
	  "4303": { "code": "4303", "label": "VENTANIA", "state": "PR" },
	  "4304": { "code": "4304", "label": "VERA CRUZ DO OESTE", "state": "PR" },
	  "4305": { "code": "4305", "label": "VERÊ", "state": "PR" },
	  "4306": { "code": "4306", "label": "ALTO PARAÍSO", "state": "PR" },
	  "4307": { "code": "4307", "label": "DOUTOR ULYSSES", "state": "PR" },
	  "4308": { "code": "4308", "label": "VIRMOND", "state": "PR" },
	  "4309": { "code": "4309", "label": "VITORINO", "state": "PR" },
	  "4310": { "code": "4310", "label": "XAMBRÊ", "state": "PR" },
	  "4311": { "code": "4311", "label": "ABDON BATISTA", "state": "SC" },
	  "4312": { "code": "4312", "label": "ABELARDO LUZ", "state": "SC" },
	  "4313": { "code": "4313", "label": "AGROLÂNDIA", "state": "SC" },
	  "4314": { "code": "4314", "label": "AGRONÔMICA", "state": "SC" },
	  "4315": { "code": "4315", "label": "ÁGUA DOCE", "state": "SC" },
	  "4316": { "code": "4316", "label": "ÁGUAS DE CHAPECÓ", "state": "SC" },
	  "4317": { "code": "4317", "label": "ÁGUAS FRIAS", "state": "SC" },
	  "4318": { "code": "4318", "label": "ÁGUAS MORNAS", "state": "SC" },
	  "4319": { "code": "4319", "label": "ALFREDO WAGNER", "state": "SC" },
	  "4320": { "code": "4320", "label": "ALTO BELA VISTA", "state": "SC" },
	  "4321": { "code": "4321", "label": "ANCHIETA", "state": "SC" },
	  "4322": { "code": "4322", "label": "ANGELINA", "state": "SC" },
	  "4323": { "code": "4323", "label": "ANITA GARIBALDI", "state": "SC" },
	  "4324": { "code": "4324", "label": "ANITÁPOLIS", "state": "SC" },
	  "4325": { "code": "4325", "label": "ANTÔNIO CARLOS", "state": "SC" },
	  "4326": { "code": "4326", "label": "APIÚNA", "state": "SC" },
	  "4327": { "code": "4327", "label": "ARABUTÃ", "state": "SC" },
	  "4328": { "code": "4328", "label": "ARAQUARI", "state": "SC" },
	  "4329": { "code": "4329", "label": "ARARANGUÁ", "state": "SC" },
	  "4330": { "code": "4330", "label": "ARMAZÉM", "state": "SC" },
	  "4331": { "code": "4331", "label": "ARROIO TRINTA", "state": "SC" },
	  "4332": { "code": "4332", "label": "ARVOREDO", "state": "SC" },
	  "4333": { "code": "4333", "label": "ASCURRA", "state": "SC" },
	  "4334": { "code": "4334", "label": "ATALANTA", "state": "SC" },
	  "4335": { "code": "4335", "label": "AURORA", "state": "SC" },
	  "4336": { "code": "4336", "label": "BALNEÁRIO ARROIO DO SILVA", "state": "SC" },
	  "4337": { "code": "4337", "label": "BALNEÁRIO CAMBORIÚ", "state": "SC" },
	  "4338": { "code": "4338", "label": "BALNEÁRIO BARRA DO SUL", "state": "SC" },
	  "4339": { "code": "4339", "label": "BALNEÁRIO GAIVOTA", "state": "SC" },
	  "4340": { "code": "4340", "label": "BANDEIRANTE", "state": "SC" },
	  "4341": { "code": "4341", "label": "BARRA BONITA", "state": "SC" },
	  "4342": { "code": "4342", "label": "BARRA VELHA", "state": "SC" },
	  "4343": { "code": "4343", "label": "BELA VISTA DO TOLDO", "state": "SC" },
	  "4344": { "code": "4344", "label": "BELMONTE", "state": "SC" },
	  "4345": { "code": "4345", "label": "BENEDITO NOVO", "state": "SC" },
	  "4346": { "code": "4346", "label": "BIGUAÇU", "state": "SC" },
	  "4347": { "code": "4347", "label": "BLUMENAU", "state": "SC" },
	  "4348": { "code": "4348", "label": "BOCAINA DO SUL", "state": "SC" },
	  "4349": { "code": "4349", "label": "BOMBINHAS", "state": "SC" },
	  "4350": { "code": "4350", "label": "BOM JARDIM DA SERRA", "state": "SC" },
	  "4351": { "code": "4351", "label": "BOM JESUS", "state": "SC" },
	  "4352": { "code": "4352", "label": "BOM JESUS DO OESTE", "state": "SC" },
	  "4353": { "code": "4353", "label": "BOM RETIRO", "state": "SC" },
	  "4354": { "code": "4354", "label": "BOTUVERÁ", "state": "SC" },
	  "4355": { "code": "4355", "label": "BRAÇO DO NORTE", "state": "SC" },
	  "4356": { "code": "4356", "label": "BRAÇO DO TROMBUDO", "state": "SC" },
	  "4357": { "code": "4357", "label": "BRUNÓPOLIS", "state": "SC" },
	  "4358": { "code": "4358", "label": "BRUSQUE", "state": "SC" },
	  "4359": { "code": "4359", "label": "CAÇADOR", "state": "SC" },
	  "4360": { "code": "4360", "label": "CAIBI", "state": "SC" },
	  "4361": { "code": "4361", "label": "CALMON", "state": "SC" },
	  "4362": { "code": "4362", "label": "CAMBORIÚ", "state": "SC" },
	  "4363": { "code": "4363", "label": "CAPÃO ALTO", "state": "SC" },
	  "4364": { "code": "4364", "label": "CAMPO ALEGRE", "state": "SC" },
	  "4365": { "code": "4365", "label": "CAMPO BELO DO SUL", "state": "SC" },
	  "4366": { "code": "4366", "label": "CAMPO ERÊ", "state": "SC" },
	  "4367": { "code": "4367", "label": "CAMPOS NOVOS", "state": "SC" },
	  "4368": { "code": "4368", "label": "CANELINHA", "state": "SC" },
	  "4369": { "code": "4369", "label": "CANOINHAS", "state": "SC" },
	  "4370": { "code": "4370", "label": "CAPINZAL", "state": "SC" },
	  "4371": { "code": "4371", "label": "CAPIVARI DE BAIXO", "state": "SC" },
	  "4372": { "code": "4372", "label": "CATANDUVAS", "state": "SC" },
	  "4373": { "code": "4373", "label": "CAXAMBU DO SUL", "state": "SC" },
	  "4374": { "code": "4374", "label": "CELSO RAMOS", "state": "SC" },
	  "4375": { "code": "4375", "label": "CERRO NEGRO", "state": "SC" },
	  "4376": { "code": "4376", "label": "CHAPADÃO DO LAGEADO", "state": "SC" },
	  "4377": { "code": "4377", "label": "CHAPECÓ", "state": "SC" },
	  "4378": { "code": "4378", "label": "COCAL DO SUL", "state": "SC" },
	  "4379": { "code": "4379", "label": "CONCÓRDIA", "state": "SC" },
	  "4380": { "code": "4380", "label": "CORDILHEIRA ALTA", "state": "SC" },
	  "4381": { "code": "4381", "label": "CORONEL FREITAS", "state": "SC" },
	  "4382": { "code": "4382", "label": "CORONEL MARTINS", "state": "SC" },
	  "4383": { "code": "4383", "label": "CORUPÁ", "state": "SC" },
	  "4384": { "code": "4384", "label": "CORREIA PINTO", "state": "SC" },
	  "4385": { "code": "4385", "label": "CRICIÚMA", "state": "SC" },
	  "4386": { "code": "4386", "label": "CUNHA PORÃ", "state": "SC" },
	  "4387": { "code": "4387", "label": "CUNHATAÍ", "state": "SC" },
	  "4388": { "code": "4388", "label": "CURITIBANOS", "state": "SC" },
	  "4389": { "code": "4389", "label": "DESCANSO", "state": "SC" },
	  "4390": { "code": "4390", "label": "DIONÍSIO CERQUEIRA", "state": "SC" },
	  "4391": { "code": "4391", "label": "DONA EMMA", "state": "SC" },
	  "4392": { "code": "4392", "label": "DOUTOR PEDRINHO", "state": "SC" },
	  "4393": { "code": "4393", "label": "ENTRE RIOS", "state": "SC" },
	  "4394": { "code": "4394", "label": "ERMO", "state": "SC" },
	  "4395": { "code": "4395", "label": "ERVAL VELHO", "state": "SC" },
	  "4396": { "code": "4396", "label": "FAXINAL DOS GUEDES", "state": "SC" },
	  "4397": { "code": "4397", "label": "FLOR DO SERTÃO", "state": "SC" },
	  "4398": { "code": "4398", "label": "FLORIANÓPOLIS", "state": "SC" },
	  "4399": { "code": "4399", "label": "FORMOSA DO SUL", "state": "SC" },
	  "4400": { "code": "4400", "label": "FORQUILHINHA", "state": "SC" },
	  "4401": { "code": "4401", "label": "FRAIBURGO", "state": "SC" },
	  "4402": { "code": "4402", "label": "FREI ROGÉRIO", "state": "SC" },
	  "4403": { "code": "4403", "label": "GALVÃO", "state": "SC" },
	  "4404": { "code": "4404", "label": "GAROPABA", "state": "SC" },
	  "4405": { "code": "4405", "label": "GARUVA", "state": "SC" },
	  "4406": { "code": "4406", "label": "GASPAR", "state": "SC" },
	  "4407": { "code": "4407", "label": "GOVERNADOR CELSO RAMOS", "state": "SC" },
	  "4408": { "code": "4408", "label": "GRÃO PARÁ", "state": "SC" },
	  "4409": { "code": "4409", "label": "GRAVATAL", "state": "SC" },
	  "4410": { "code": "4410", "label": "GUABIRUBA", "state": "SC" },
	  "4411": { "code": "4411", "label": "GUARACIABA", "state": "SC" },
	  "4412": { "code": "4412", "label": "GUARAMIRIM", "state": "SC" },
	  "4413": { "code": "4413", "label": "GUARUJÁ DO SUL", "state": "SC" },
	  "4414": { "code": "4414", "label": "GUATAMBÚ", "state": "SC" },
	  "4415": { "code": "4415", "label": "HERVAL D'OESTE", "state": "SC" },
	  "4416": { "code": "4416", "label": "IBIAM", "state": "SC" },
	  "4417": { "code": "4417", "label": "IBICARÉ", "state": "SC" },
	  "4418": { "code": "4418", "label": "IBIRAMA", "state": "SC" },
	  "4419": { "code": "4419", "label": "IÇARA", "state": "SC" },
	  "4420": { "code": "4420", "label": "ILHOTA", "state": "SC" },
	  "4421": { "code": "4421", "label": "IMARUÍ", "state": "SC" },
	  "4422": { "code": "4422", "label": "IMBITUBA", "state": "SC" },
	  "4423": { "code": "4423", "label": "IMBUIA", "state": "SC" },
	  "4424": { "code": "4424", "label": "INDAIAL", "state": "SC" },
	  "4425": { "code": "4425", "label": "IOMERÊ", "state": "SC" },
	  "4426": { "code": "4426", "label": "IPIRA", "state": "SC" },
	  "4427": { "code": "4427", "label": "IPORÃ DO OESTE", "state": "SC" },
	  "4428": { "code": "4428", "label": "IPUAÇU", "state": "SC" },
	  "4429": { "code": "4429", "label": "IPUMIRIM", "state": "SC" },
	  "4430": { "code": "4430", "label": "IRACEMINHA", "state": "SC" },
	  "4431": { "code": "4431", "label": "IRANI", "state": "SC" },
	  "4432": { "code": "4432", "label": "IRATI", "state": "SC" },
	  "4433": { "code": "4433", "label": "IRINEÓPOLIS", "state": "SC" },
	  "4434": { "code": "4434", "label": "ITÁ", "state": "SC" },
	  "4435": { "code": "4435", "label": "ITAIÓPOLIS", "state": "SC" },
	  "4436": { "code": "4436", "label": "ITAJAÍ", "state": "SC" },
	  "4437": { "code": "4437", "label": "ITAPEMA", "state": "SC" },
	  "4438": { "code": "4438", "label": "ITAPIRANGA", "state": "SC" },
	  "4439": { "code": "4439", "label": "ITAPOÁ", "state": "SC" },
	  "4440": { "code": "4440", "label": "ITUPORANGA", "state": "SC" },
	  "4441": { "code": "4441", "label": "JABORÁ", "state": "SC" },
	  "4442": { "code": "4442", "label": "JACINTO MACHADO", "state": "SC" },
	  "4443": { "code": "4443", "label": "JAGUARUNA", "state": "SC" },
	  "4444": { "code": "4444", "label": "JARAGUÁ DO SUL", "state": "SC" },
	  "4445": { "code": "4445", "label": "JARDINÓPOLIS", "state": "SC" },
	  "4446": { "code": "4446", "label": "JOAÇABA", "state": "SC" },
	  "4447": { "code": "4447", "label": "JOINVILLE", "state": "SC" },
	  "4448": { "code": "4448", "label": "JOSÉ BOITEUX", "state": "SC" },
	  "4449": { "code": "4449", "label": "JUPIÁ", "state": "SC" },
	  "4450": { "code": "4450", "label": "LACERDÓPOLIS", "state": "SC" },
	  "4451": { "code": "4451", "label": "LAGES", "state": "SC" },
	  "4452": { "code": "4452", "label": "LAGUNA", "state": "SC" },
	  "4453": { "code": "4453", "label": "LAJEADO GRANDE", "state": "SC" },
	  "4454": { "code": "4454", "label": "LAURENTINO", "state": "SC" },
	  "4455": { "code": "4455", "label": "LAURO MULLER", "state": "SC" },
	  "4456": { "code": "4456", "label": "LEBON RÉGIS", "state": "SC" },
	  "4457": { "code": "4457", "label": "LEOBERTO LEAL", "state": "SC" },
	  "4458": { "code": "4458", "label": "LINDÓIA DO SUL", "state": "SC" },
	  "4459": { "code": "4459", "label": "LONTRAS", "state": "SC" },
	  "4460": { "code": "4460", "label": "LUIZ ALVES", "state": "SC" },
	  "4461": { "code": "4461", "label": "LUZERNA", "state": "SC" },
	  "4462": { "code": "4462", "label": "MACIEIRA", "state": "SC" },
	  "4463": { "code": "4463", "label": "MAFRA", "state": "SC" },
	  "4464": { "code": "4464", "label": "MAJOR GERCINO", "state": "SC" },
	  "4465": { "code": "4465", "label": "MAJOR VIEIRA", "state": "SC" },
	  "4466": { "code": "4466", "label": "MARACAJÁ", "state": "SC" },
	  "4467": { "code": "4467", "label": "MARAVILHA", "state": "SC" },
	  "4468": { "code": "4468", "label": "MAREMA", "state": "SC" },
	  "4469": { "code": "4469", "label": "MASSARANDUBA", "state": "SC" },
	  "4470": { "code": "4470", "label": "MATOS COSTA", "state": "SC" },
	  "4471": { "code": "4471", "label": "MELEIRO", "state": "SC" },
	  "4472": { "code": "4472", "label": "MIRIM DOCE", "state": "SC" },
	  "4473": { "code": "4473", "label": "MODELO", "state": "SC" },
	  "4474": { "code": "4474", "label": "MONDAÍ", "state": "SC" },
	  "4475": { "code": "4475", "label": "MONTE CARLO", "state": "SC" },
	  "4476": { "code": "4476", "label": "MONTE CASTELO", "state": "SC" },
	  "4477": { "code": "4477", "label": "MORRO DA FUMAÇA", "state": "SC" },
	  "4478": { "code": "4478", "label": "MORRO GRANDE", "state": "SC" },
	  "4479": { "code": "4479", "label": "NAVEGANTES", "state": "SC" },
	  "4480": { "code": "4480", "label": "NOVA ERECHIM", "state": "SC" },
	  "4481": { "code": "4481", "label": "NOVA ITABERABA", "state": "SC" },
	  "4482": { "code": "4482", "label": "NOVA TRENTO", "state": "SC" },
	  "4483": { "code": "4483", "label": "NOVA VENEZA", "state": "SC" },
	  "4484": { "code": "4484", "label": "NOVO HORIZONTE", "state": "SC" },
	  "4485": { "code": "4485", "label": "ORLEANS", "state": "SC" },
	  "4486": { "code": "4486", "label": "OTACÍLIO COSTA", "state": "SC" },
	  "4487": { "code": "4487", "label": "OURO", "state": "SC" },
	  "4488": { "code": "4488", "label": "OURO VERDE", "state": "SC" },
	  "4489": { "code": "4489", "label": "PAIAL", "state": "SC" },
	  "4490": { "code": "4490", "label": "PAINEL", "state": "SC" },
	  "4491": { "code": "4491", "label": "PALHOÇA", "state": "SC" },
	  "4492": { "code": "4492", "label": "PALMA SOLA", "state": "SC" },
	  "4493": { "code": "4493", "label": "PALMEIRA", "state": "SC" },
	  "4494": { "code": "4494", "label": "PALMITOS", "state": "SC" },
	  "4495": { "code": "4495", "label": "PAPANDUVA", "state": "SC" },
	  "4496": { "code": "4496", "label": "PARAÍSO", "state": "SC" },
	  "4497": { "code": "4497", "label": "PASSO DE TORRES", "state": "SC" },
	  "4498": { "code": "4498", "label": "PASSOS MAIA", "state": "SC" },
	  "4499": { "code": "4499", "label": "PAULO LOPES", "state": "SC" },
	  "4500": { "code": "4500", "label": "PEDRAS GRANDES", "state": "SC" },
	  "4501": { "code": "4501", "label": "PENHA", "state": "SC" },
	  "4502": { "code": "4502", "label": "PERITIBA", "state": "SC" },
	  "4503": { "code": "4503", "label": "PETROLÂNDIA", "state": "SC" },
	  "4504": { "code": "4504", "label": "BALNEÁRIO PIÇARRAS", "state": "SC" },
	  "4505": { "code": "4505", "label": "PINHALZINHO", "state": "SC" },
	  "4506": { "code": "4506", "label": "PINHEIRO PRETO", "state": "SC" },
	  "4507": { "code": "4507", "label": "PIRATUBA", "state": "SC" },
	  "4508": { "code": "4508", "label": "PLANALTO ALEGRE", "state": "SC" },
	  "4509": { "code": "4509", "label": "POMERODE", "state": "SC" },
	  "4510": { "code": "4510", "label": "PONTE ALTA", "state": "SC" },
	  "4511": { "code": "4511", "label": "PONTE ALTA DO NORTE", "state": "SC" },
	  "4512": { "code": "4512", "label": "PONTE SERRADA", "state": "SC" },
	  "4513": { "code": "4513", "label": "PORTO BELO", "state": "SC" },
	  "4514": { "code": "4514", "label": "PORTO UNIÃO", "state": "SC" },
	  "4515": { "code": "4515", "label": "POUSO REDONDO", "state": "SC" },
	  "4516": { "code": "4516", "label": "PRAIA GRANDE", "state": "SC" },
	  "4517": { "code": "4517", "label": "PRESIDENTE CASTELLO BRANCO", "state": "SC" },
	  "4518": { "code": "4518", "label": "PRESIDENTE GETÚLIO", "state": "SC" },
	  "4519": { "code": "4519", "label": "PRESIDENTE NEREU", "state": "SC" },
	  "4520": { "code": "4520", "label": "PRINCESA", "state": "SC" },
	  "4521": { "code": "4521", "label": "QUILOMBO", "state": "SC" },
	  "4522": { "code": "4522", "label": "RANCHO QUEIMADO", "state": "SC" },
	  "4523": { "code": "4523", "label": "RIO DAS ANTAS", "state": "SC" },
	  "4524": { "code": "4524", "label": "RIO DO CAMPO", "state": "SC" },
	  "4525": { "code": "4525", "label": "RIO DO OESTE", "state": "SC" },
	  "4526": { "code": "4526", "label": "RIO DOS CEDROS", "state": "SC" },
	  "4527": { "code": "4527", "label": "RIO DO SUL", "state": "SC" },
	  "4528": { "code": "4528", "label": "RIO FORTUNA", "state": "SC" },
	  "4529": { "code": "4529", "label": "RIO NEGRINHO", "state": "SC" },
	  "4530": { "code": "4530", "label": "RIO RUFINO", "state": "SC" },
	  "4531": { "code": "4531", "label": "RIQUEZA", "state": "SC" },
	  "4532": { "code": "4532", "label": "RODEIO", "state": "SC" },
	  "4533": { "code": "4533", "label": "ROMELÂNDIA", "state": "SC" },
	  "4534": { "code": "4534", "label": "SALETE", "state": "SC" },
	  "4535": { "code": "4535", "label": "SALTINHO", "state": "SC" },
	  "4536": { "code": "4536", "label": "SALTO VELOSO", "state": "SC" },
	  "4537": { "code": "4537", "label": "SANGÃO", "state": "SC" },
	  "4538": { "code": "4538", "label": "SANTA CECÍLIA", "state": "SC" },
	  "4539": { "code": "4539", "label": "SANTA HELENA", "state": "SC" },
	  "4540": { "code": "4540", "label": "SANTA ROSA DE LIMA", "state": "SC" },
	  "4541": { "code": "4541", "label": "SANTA ROSA DO SUL", "state": "SC" },
	  "4542": { "code": "4542", "label": "SANTA TEREZINHA", "state": "SC" },
	  "4543": { "code": "4543", "label": "SANTA TEREZINHA DO PROGRESSO", "state": "SC" },
	  "4544": { "code": "4544", "label": "SANTIAGO DO SUL", "state": "SC" },
	  "4545": { "code": "4545", "label": "SANTO AMARO DA IMPERATRIZ", "state": "SC" },
	  "4546": { "code": "4546", "label": "SÃO BERNARDINO", "state": "SC" },
	  "4547": { "code": "4547", "label": "SÃO BENTO DO SUL", "state": "SC" },
	  "4548": { "code": "4548", "label": "SÃO BONIFÁCIO", "state": "SC" },
	  "4549": { "code": "4549", "label": "SÃO CARLOS", "state": "SC" },
	  "4550": { "code": "4550", "label": "SÃO CRISTOVÃO DO SUL", "state": "SC" },
	  "4551": { "code": "4551", "label": "SÃO DOMINGOS", "state": "SC" },
	  "4552": { "code": "4552", "label": "SÃO FRANCISCO DO SUL", "state": "SC" },
	  "4553": { "code": "4553", "label": "SÃO JOÃO DO OESTE", "state": "SC" },
	  "4554": { "code": "4554", "label": "SÃO JOÃO BATISTA", "state": "SC" },
	  "4555": { "code": "4555", "label": "SÃO JOÃO DO ITAPERIÚ", "state": "SC" },
	  "4556": { "code": "4556", "label": "SÃO JOÃO DO SUL", "state": "SC" },
	  "4557": { "code": "4557", "label": "SÃO JOAQUIM", "state": "SC" },
	  "4558": { "code": "4558", "label": "SÃO JOSÉ", "state": "SC" },
	  "4559": { "code": "4559", "label": "SÃO JOSÉ DO CEDRO", "state": "SC" },
	  "4560": { "code": "4560", "label": "SÃO JOSÉ DO CERRITO", "state": "SC" },
	  "4561": { "code": "4561", "label": "SÃO LOURENÇO DO OESTE", "state": "SC" },
	  "4562": { "code": "4562", "label": "SÃO LUDGERO", "state": "SC" },
	  "4563": { "code": "4563", "label": "SÃO MARTINHO", "state": "SC" },
	  "4564": { "code": "4564", "label": "SÃO MIGUEL DA BOA VISTA", "state": "SC" },
	  "4565": { "code": "4565", "label": "SÃO MIGUEL DO OESTE", "state": "SC" },
	  "4566": { "code": "4566", "label": "SÃO PEDRO DE ALCÂNTARA", "state": "SC" },
	  "4567": { "code": "4567", "label": "SAUDADES", "state": "SC" },
	  "4568": { "code": "4568", "label": "SCHROEDER", "state": "SC" },
	  "4569": { "code": "4569", "label": "SEARA", "state": "SC" },
	  "4570": { "code": "4570", "label": "SERRA ALTA", "state": "SC" },
	  "4571": { "code": "4571", "label": "SIDERÓPOLIS", "state": "SC" },
	  "4572": { "code": "4572", "label": "SOMBRIO", "state": "SC" },
	  "4573": { "code": "4573", "label": "SUL BRASIL", "state": "SC" },
	  "4574": { "code": "4574", "label": "TAIÓ", "state": "SC" },
	  "4575": { "code": "4575", "label": "TANGARÁ", "state": "SC" },
	  "4576": { "code": "4576", "label": "TIGRINHOS", "state": "SC" },
	  "4577": { "code": "4577", "label": "TIJUCAS", "state": "SC" },
	  "4578": { "code": "4578", "label": "TIMBÉ DO SUL", "state": "SC" },
	  "4579": { "code": "4579", "label": "TIMBÓ", "state": "SC" },
	  "4580": { "code": "4580", "label": "TIMBÓ GRANDE", "state": "SC" },
	  "4581": { "code": "4581", "label": "TRÊS BARRAS", "state": "SC" },
	  "4582": { "code": "4582", "label": "TREVISO", "state": "SC" },
	  "4583": { "code": "4583", "label": "TREZE DE MAIO", "state": "SC" },
	  "4584": { "code": "4584", "label": "TREZE TÍLIAS", "state": "SC" },
	  "4585": { "code": "4585", "label": "TROMBUDO CENTRAL", "state": "SC" },
	  "4586": { "code": "4586", "label": "TUBARÃO", "state": "SC" },
	  "4587": { "code": "4587", "label": "TUNÁPOLIS", "state": "SC" },
	  "4588": { "code": "4588", "label": "TURVO", "state": "SC" },
	  "4589": { "code": "4589", "label": "UNIÃO DO OESTE", "state": "SC" },
	  "4590": { "code": "4590", "label": "URUBICI", "state": "SC" },
	  "4591": { "code": "4591", "label": "URUPEMA", "state": "SC" },
	  "4592": { "code": "4592", "label": "URUSSANGA", "state": "SC" },
	  "4593": { "code": "4593", "label": "VARGEÃO", "state": "SC" },
	  "4594": { "code": "4594", "label": "VARGEM", "state": "SC" },
	  "4595": { "code": "4595", "label": "VARGEM BONITA", "state": "SC" },
	  "4596": { "code": "4596", "label": "VIDAL RAMOS", "state": "SC" },
	  "4597": { "code": "4597", "label": "VIDEIRA", "state": "SC" },
	  "4598": { "code": "4598", "label": "VITOR MEIRELES", "state": "SC" },
	  "4599": { "code": "4599", "label": "WITMARSUM", "state": "SC" },
	  "4600": { "code": "4600", "label": "XANXERÊ", "state": "SC" },
	  "4601": { "code": "4601", "label": "XAVANTINA", "state": "SC" },
	  "4602": { "code": "4602", "label": "XAXIM", "state": "SC" },
	  "4603": { "code": "4603", "label": "ZORTÉA", "state": "SC" },
	  "4604": { "code": "4604", "label": "ACEGUÁ", "state": "RS" },
	  "4605": { "code": "4605", "label": "ÁGUA SANTA", "state": "RS" },
	  "4606": { "code": "4606", "label": "AGUDO", "state": "RS" },
	  "4607": { "code": "4607", "label": "AJURICABA", "state": "RS" },
	  "4608": { "code": "4608", "label": "ALECRIM", "state": "RS" },
	  "4609": { "code": "4609", "label": "ALEGRETE", "state": "RS" },
	  "4610": { "code": "4610", "label": "ALEGRIA", "state": "RS" },
	  "4611": { "code": "4611", "label": "ALMIRANTE TAMANDARÉ DO SUL", "state": "RS" },
	  "4612": { "code": "4612", "label": "ALPESTRE", "state": "RS" },
	  "4613": { "code": "4613", "label": "ALTO ALEGRE", "state": "RS" },
	  "4614": { "code": "4614", "label": "ALTO FELIZ", "state": "RS" },
	  "4615": { "code": "4615", "label": "ALVORADA", "state": "RS" },
	  "4616": { "code": "4616", "label": "AMARAL FERRADOR", "state": "RS" },
	  "4617": { "code": "4617", "label": "AMETISTA DO SUL", "state": "RS" },
	  "4618": { "code": "4618", "label": "ANDRÉ DA ROCHA", "state": "RS" },
	  "4619": { "code": "4619", "label": "ANTA GORDA", "state": "RS" },
	  "4620": { "code": "4620", "label": "ANTÔNIO PRADO", "state": "RS" },
	  "4621": { "code": "4621", "label": "ARAMBARÉ", "state": "RS" },
	  "4622": { "code": "4622", "label": "ARARICÁ", "state": "RS" },
	  "4623": { "code": "4623", "label": "ARATIBA", "state": "RS" },
	  "4624": { "code": "4624", "label": "ARROIO DO MEIO", "state": "RS" },
	  "4625": { "code": "4625", "label": "ARROIO DO SAL", "state": "RS" },
	  "4626": { "code": "4626", "label": "ARROIO DO PADRE", "state": "RS" },
	  "4627": { "code": "4627", "label": "ARROIO DOS RATOS", "state": "RS" },
	  "4628": { "code": "4628", "label": "ARROIO DO TIGRE", "state": "RS" },
	  "4629": { "code": "4629", "label": "ARROIO GRANDE", "state": "RS" },
	  "4630": { "code": "4630", "label": "ARVOREZINHA", "state": "RS" },
	  "4631": { "code": "4631", "label": "AUGUSTO PESTANA", "state": "RS" },
	  "4632": { "code": "4632", "label": "ÁUREA", "state": "RS" },
	  "4633": { "code": "4633", "label": "BAGÉ", "state": "RS" },
	  "4634": { "code": "4634", "label": "BALNEÁRIO PINHAL", "state": "RS" },
	  "4635": { "code": "4635", "label": "BARÃO", "state": "RS" },
	  "4636": { "code": "4636", "label": "BARÃO DE COTEGIPE", "state": "RS" },
	  "4637": { "code": "4637", "label": "BARÃO DO TRIUNFO", "state": "RS" },
	  "4638": { "code": "4638", "label": "BARRACÃO", "state": "RS" },
	  "4639": { "code": "4639", "label": "BARRA DO GUARITA", "state": "RS" },
	  "4640": { "code": "4640", "label": "BARRA DO QUARAÍ", "state": "RS" },
	  "4641": { "code": "4641", "label": "BARRA DO RIBEIRO", "state": "RS" },
	  "4642": { "code": "4642", "label": "BARRA DO RIO AZUL", "state": "RS" },
	  "4643": { "code": "4643", "label": "BARRA FUNDA", "state": "RS" },
	  "4644": { "code": "4644", "label": "BARROS CASSAL", "state": "RS" },
	  "4645": { "code": "4645", "label": "BENJAMIN CONSTANT DO SUL", "state": "RS" },
	  "4646": { "code": "4646", "label": "BENTO GONÇALVES", "state": "RS" },
	  "4647": { "code": "4647", "label": "BOA VISTA DAS MISSÕES", "state": "RS" },
	  "4648": { "code": "4648", "label": "BOA VISTA DO BURICÁ", "state": "RS" },
	  "4649": { "code": "4649", "label": "BOA VISTA DO CADEADO", "state": "RS" },
	  "4650": { "code": "4650", "label": "BOA VISTA DO INCRA", "state": "RS" },
	  "4651": { "code": "4651", "label": "BOA VISTA DO SUL", "state": "RS" },
	  "4652": { "code": "4652", "label": "BOM JESUS", "state": "RS" },
	  "4653": { "code": "4653", "label": "BOM PRINCÍPIO", "state": "RS" },
	  "4654": { "code": "4654", "label": "BOM PROGRESSO", "state": "RS" },
	  "4655": { "code": "4655", "label": "BOM RETIRO DO SUL", "state": "RS" },
	  "4656": { "code": "4656", "label": "BOQUEIRÃO DO LEÃO", "state": "RS" },
	  "4657": { "code": "4657", "label": "BOSSOROCA", "state": "RS" },
	  "4658": { "code": "4658", "label": "BOZANO", "state": "RS" },
	  "4659": { "code": "4659", "label": "BRAGA", "state": "RS" },
	  "4660": { "code": "4660", "label": "BROCHIER", "state": "RS" },
	  "4661": { "code": "4661", "label": "BUTIÁ", "state": "RS" },
	  "4662": { "code": "4662", "label": "CAÇAPAVA DO SUL", "state": "RS" },
	  "4663": { "code": "4663", "label": "CACEQUI", "state": "RS" },
	  "4664": { "code": "4664", "label": "CACHOEIRA DO SUL", "state": "RS" },
	  "4665": { "code": "4665", "label": "CACHOEIRINHA", "state": "RS" },
	  "4666": { "code": "4666", "label": "CACIQUE DOBLE", "state": "RS" },
	  "4667": { "code": "4667", "label": "CAIBATÉ", "state": "RS" },
	  "4668": { "code": "4668", "label": "CAIÇARA", "state": "RS" },
	  "4669": { "code": "4669", "label": "CAMAQUÃ", "state": "RS" },
	  "4670": { "code": "4670", "label": "CAMARGO", "state": "RS" },
	  "4671": { "code": "4671", "label": "CAMBARÁ DO SUL", "state": "RS" },
	  "4672": { "code": "4672", "label": "CAMPESTRE DA SERRA", "state": "RS" },
	  "4673": { "code": "4673", "label": "CAMPINA DAS MISSÕES", "state": "RS" },
	  "4674": { "code": "4674", "label": "CAMPINAS DO SUL", "state": "RS" },
	  "4675": { "code": "4675", "label": "CAMPO BOM", "state": "RS" },
	  "4676": { "code": "4676", "label": "CAMPO NOVO", "state": "RS" },
	  "4677": { "code": "4677", "label": "CAMPOS BORGES", "state": "RS" },
	  "4678": { "code": "4678", "label": "CANDELÁRIA", "state": "RS" },
	  "4679": { "code": "4679", "label": "CÂNDIDO GODÓI", "state": "RS" },
	  "4680": { "code": "4680", "label": "CANDIOTA", "state": "RS" },
	  "4681": { "code": "4681", "label": "CANELA", "state": "RS" },
	  "4682": { "code": "4682", "label": "CANGUÇU", "state": "RS" },
	  "4683": { "code": "4683", "label": "CANOAS", "state": "RS" },
	  "4684": { "code": "4684", "label": "CANUDOS DO VALE", "state": "RS" },
	  "4685": { "code": "4685", "label": "CAPÃO BONITO DO SUL", "state": "RS" },
	  "4686": { "code": "4686", "label": "CAPÃO DA CANOA", "state": "RS" },
	  "4687": { "code": "4687", "label": "CAPÃO DO CIPÓ", "state": "RS" },
	  "4688": { "code": "4688", "label": "CAPÃO DO LEÃO", "state": "RS" },
	  "4689": { "code": "4689", "label": "CAPIVARI DO SUL", "state": "RS" },
	  "4690": { "code": "4690", "label": "CAPELA DE SANTANA", "state": "RS" },
	  "4691": { "code": "4691", "label": "CAPITÃO", "state": "RS" },
	  "4692": { "code": "4692", "label": "CARAZINHO", "state": "RS" },
	  "4693": { "code": "4693", "label": "CARAÁ", "state": "RS" },
	  "4694": { "code": "4694", "label": "CARLOS BARBOSA", "state": "RS" },
	  "4695": { "code": "4695", "label": "CARLOS GOMES", "state": "RS" },
	  "4696": { "code": "4696", "label": "CASCA", "state": "RS" },
	  "4697": { "code": "4697", "label": "CASEIROS", "state": "RS" },
	  "4698": { "code": "4698", "label": "CATUÍPE", "state": "RS" },
	  "4699": { "code": "4699", "label": "CAXIAS DO SUL", "state": "RS" },
	  "4700": { "code": "4700", "label": "CENTENÁRIO", "state": "RS" },
	  "4701": { "code": "4701", "label": "CERRITO", "state": "RS" },
	  "4702": { "code": "4702", "label": "CERRO BRANCO", "state": "RS" },
	  "4703": { "code": "4703", "label": "CERRO GRANDE", "state": "RS" },
	  "4704": { "code": "4704", "label": "CERRO GRANDE DO SUL", "state": "RS" },
	  "4705": { "code": "4705", "label": "CERRO LARGO", "state": "RS" },
	  "4706": { "code": "4706", "label": "CHAPADA", "state": "RS" },
	  "4707": { "code": "4707", "label": "CHARQUEADAS", "state": "RS" },
	  "4708": { "code": "4708", "label": "CHARRUA", "state": "RS" },
	  "4709": { "code": "4709", "label": "CHIAPETTA", "state": "RS" },
	  "4710": { "code": "4710", "label": "CHUÍ", "state": "RS" },
	  "4711": { "code": "4711", "label": "CHUVISCA", "state": "RS" },
	  "4712": { "code": "4712", "label": "CIDREIRA", "state": "RS" },
	  "4713": { "code": "4713", "label": "CIRÍACO", "state": "RS" },
	  "4714": { "code": "4714", "label": "COLINAS", "state": "RS" },
	  "4715": { "code": "4715", "label": "COLORADO", "state": "RS" },
	  "4716": { "code": "4716", "label": "CONDOR", "state": "RS" },
	  "4717": { "code": "4717", "label": "CONSTANTINA", "state": "RS" },
	  "4718": { "code": "4718", "label": "COQUEIRO BAIXO", "state": "RS" },
	  "4719": { "code": "4719", "label": "COQUEIROS DO SUL", "state": "RS" },
	  "4720": { "code": "4720", "label": "CORONEL BARROS", "state": "RS" },
	  "4721": { "code": "4721", "label": "CORONEL BICACO", "state": "RS" },
	  "4722": { "code": "4722", "label": "CORONEL PILAR", "state": "RS" },
	  "4723": { "code": "4723", "label": "COTIPORÃ", "state": "RS" },
	  "4724": { "code": "4724", "label": "COXILHA", "state": "RS" },
	  "4725": { "code": "4725", "label": "CRISSIUMAL", "state": "RS" },
	  "4726": { "code": "4726", "label": "CRISTAL", "state": "RS" },
	  "4727": { "code": "4727", "label": "CRISTAL DO SUL", "state": "RS" },
	  "4728": { "code": "4728", "label": "CRUZ ALTA", "state": "RS" },
	  "4729": { "code": "4729", "label": "CRUZALTENSE", "state": "RS" },
	  "4730": { "code": "4730", "label": "CRUZEIRO DO SUL", "state": "RS" },
	  "4731": { "code": "4731", "label": "DAVID CANABARRO", "state": "RS" },
	  "4732": { "code": "4732", "label": "DERRUBADAS", "state": "RS" },
	  "4733": { "code": "4733", "label": "DEZESSEIS DE NOVEMBRO", "state": "RS" },
	  "4734": { "code": "4734", "label": "DILERMANDO DE AGUIAR", "state": "RS" },
	  "4735": { "code": "4735", "label": "DOIS IRMÃOS", "state": "RS" },
	  "4736": { "code": "4736", "label": "DOIS IRMÃOS DAS MISSÕES", "state": "RS" },
	  "4737": { "code": "4737", "label": "DOIS LAJEADOS", "state": "RS" },
	  "4738": { "code": "4738", "label": "DOM FELICIANO", "state": "RS" },
	  "4739": { "code": "4739", "label": "DOM PEDRO DE ALCÂNTARA", "state": "RS" },
	  "4740": { "code": "4740", "label": "DOM PEDRITO", "state": "RS" },
	  "4741": { "code": "4741", "label": "DONA FRANCISCA", "state": "RS" },
	  "4742": { "code": "4742", "label": "DOUTOR MAURÍCIO CARDOSO", "state": "RS" },
	  "4743": { "code": "4743", "label": "DOUTOR RICARDO", "state": "RS" },
	  "4744": { "code": "4744", "label": "ELDORADO DO SUL", "state": "RS" },
	  "4745": { "code": "4745", "label": "ENCANTADO", "state": "RS" },
	  "4746": { "code": "4746", "label": "ENCRUZILHADA DO SUL", "state": "RS" },
	  "4747": { "code": "4747", "label": "ENGENHO VELHO", "state": "RS" },
	  "4748": { "code": "4748", "label": "ENTRE-IJUÍS", "state": "RS" },
	  "4749": { "code": "4749", "label": "ENTRE RIOS DO SUL", "state": "RS" },
	  "4750": { "code": "4750", "label": "EREBANGO", "state": "RS" },
	  "4751": { "code": "4751", "label": "ERECHIM", "state": "RS" },
	  "4752": { "code": "4752", "label": "ERNESTINA", "state": "RS" },
	  "4753": { "code": "4753", "label": "HERVAL", "state": "RS" },
	  "4754": { "code": "4754", "label": "ERVAL GRANDE", "state": "RS" },
	  "4755": { "code": "4755", "label": "ERVAL SECO", "state": "RS" },
	  "4756": { "code": "4756", "label": "ESMERALDA", "state": "RS" },
	  "4757": { "code": "4757", "label": "ESPERANÇA DO SUL", "state": "RS" },
	  "4758": { "code": "4758", "label": "ESPUMOSO", "state": "RS" },
	  "4759": { "code": "4759", "label": "ESTAÇÃO", "state": "RS" },
	  "4760": { "code": "4760", "label": "ESTÂNCIA VELHA", "state": "RS" },
	  "4761": { "code": "4761", "label": "ESTEIO", "state": "RS" },
	  "4762": { "code": "4762", "label": "ESTRELA", "state": "RS" },
	  "4763": { "code": "4763", "label": "ESTRELA VELHA", "state": "RS" },
	  "4764": { "code": "4764", "label": "EUGÊNIO DE CASTRO", "state": "RS" },
	  "4765": { "code": "4765", "label": "FAGUNDES VARELA", "state": "RS" },
	  "4766": { "code": "4766", "label": "FARROUPILHA", "state": "RS" },
	  "4767": { "code": "4767", "label": "FAXINAL DO SOTURNO", "state": "RS" },
	  "4768": { "code": "4768", "label": "FAXINALZINHO", "state": "RS" },
	  "4769": { "code": "4769", "label": "FAZENDA VILANOVA", "state": "RS" },
	  "4770": { "code": "4770", "label": "FELIZ", "state": "RS" },
	  "4771": { "code": "4771", "label": "FLORES DA CUNHA", "state": "RS" },
	  "4772": { "code": "4772", "label": "FLORIANO PEIXOTO", "state": "RS" },
	  "4773": { "code": "4773", "label": "FONTOURA XAVIER", "state": "RS" },
	  "4774": { "code": "4774", "label": "FORMIGUEIRO", "state": "RS" },
	  "4775": { "code": "4775", "label": "FORQUETINHA", "state": "RS" },
	  "4776": { "code": "4776", "label": "FORTALEZA DOS VALOS", "state": "RS" },
	  "4777": { "code": "4777", "label": "FREDERICO WESTPHALEN", "state": "RS" },
	  "4778": { "code": "4778", "label": "GARIBALDI", "state": "RS" },
	  "4779": { "code": "4779", "label": "GARRUCHOS", "state": "RS" },
	  "4780": { "code": "4780", "label": "GAURAMA", "state": "RS" },
	  "4781": { "code": "4781", "label": "GENERAL CÂMARA", "state": "RS" },
	  "4782": { "code": "4782", "label": "GENTIL", "state": "RS" },
	  "4783": { "code": "4783", "label": "GETÚLIO VARGAS", "state": "RS" },
	  "4784": { "code": "4784", "label": "GIRUÁ", "state": "RS" },
	  "4785": { "code": "4785", "label": "GLORINHA", "state": "RS" },
	  "4786": { "code": "4786", "label": "GRAMADO", "state": "RS" },
	  "4787": { "code": "4787", "label": "GRAMADO DOS LOUREIROS", "state": "RS" },
	  "4788": { "code": "4788", "label": "GRAMADO XAVIER", "state": "RS" },
	  "4789": { "code": "4789", "label": "GRAVATAÍ", "state": "RS" },
	  "4790": { "code": "4790", "label": "GUABIJU", "state": "RS" },
	  "4791": { "code": "4791", "label": "GUAÍBA", "state": "RS" },
	  "4792": { "code": "4792", "label": "GUAPORÉ", "state": "RS" },
	  "4793": { "code": "4793", "label": "GUARANI DAS MISSÕES", "state": "RS" },
	  "4794": { "code": "4794", "label": "HARMONIA", "state": "RS" },
	  "4795": { "code": "4795", "label": "HERVEIRAS", "state": "RS" },
	  "4796": { "code": "4796", "label": "HORIZONTINA", "state": "RS" },
	  "4797": { "code": "4797", "label": "HULHA NEGRA", "state": "RS" },
	  "4798": { "code": "4798", "label": "HUMAITÁ", "state": "RS" },
	  "4799": { "code": "4799", "label": "IBARAMA", "state": "RS" },
	  "4800": { "code": "4800", "label": "IBIAÇÁ", "state": "RS" },
	  "4801": { "code": "4801", "label": "IBIRAIARAS", "state": "RS" },
	  "4802": { "code": "4802", "label": "IBIRAPUITÃ", "state": "RS" },
	  "4803": { "code": "4803", "label": "IBIRUBÁ", "state": "RS" },
	  "4804": { "code": "4804", "label": "IGREJINHA", "state": "RS" },
	  "4805": { "code": "4805", "label": "IJUÍ", "state": "RS" },
	  "4806": { "code": "4806", "label": "ILÓPOLIS", "state": "RS" },
	  "4807": { "code": "4807", "label": "IMBÉ", "state": "RS" },
	  "4808": { "code": "4808", "label": "IMIGRANTE", "state": "RS" },
	  "4809": { "code": "4809", "label": "INDEPENDÊNCIA", "state": "RS" },
	  "4810": { "code": "4810", "label": "INHACORÁ", "state": "RS" },
	  "4811": { "code": "4811", "label": "IPÊ", "state": "RS" },
	  "4812": { "code": "4812", "label": "IPIRANGA DO SUL", "state": "RS" },
	  "4813": { "code": "4813", "label": "IRAÍ", "state": "RS" },
	  "4814": { "code": "4814", "label": "ITAARA", "state": "RS" },
	  "4815": { "code": "4815", "label": "ITACURUBI", "state": "RS" },
	  "4816": { "code": "4816", "label": "ITAPUCA", "state": "RS" },
	  "4817": { "code": "4817", "label": "ITAQUI", "state": "RS" },
	  "4818": { "code": "4818", "label": "ITATI", "state": "RS" },
	  "4819": { "code": "4819", "label": "ITATIBA DO SUL", "state": "RS" },
	  "4820": { "code": "4820", "label": "IVORÁ", "state": "RS" },
	  "4821": { "code": "4821", "label": "IVOTI", "state": "RS" },
	  "4822": { "code": "4822", "label": "JABOTICABA", "state": "RS" },
	  "4823": { "code": "4823", "label": "JACUIZINHO", "state": "RS" },
	  "4824": { "code": "4824", "label": "JACUTINGA", "state": "RS" },
	  "4825": { "code": "4825", "label": "JAGUARÃO", "state": "RS" },
	  "4826": { "code": "4826", "label": "JAGUARI", "state": "RS" },
	  "4827": { "code": "4827", "label": "JAQUIRANA", "state": "RS" },
	  "4828": { "code": "4828", "label": "JARI", "state": "RS" },
	  "4829": { "code": "4829", "label": "JÓIA", "state": "RS" },
	  "4830": { "code": "4830", "label": "JÚLIO DE CASTILHOS", "state": "RS" },
	  "4831": { "code": "4831", "label": "LAGOA BONITA DO SUL", "state": "RS" },
	  "4832": { "code": "4832", "label": "LAGOÃO", "state": "RS" },
	  "4833": { "code": "4833", "label": "LAGOA DOS TRÊS CANTOS", "state": "RS" },
	  "4834": { "code": "4834", "label": "LAGOA VERMELHA", "state": "RS" },
	  "4835": { "code": "4835", "label": "LAJEADO", "state": "RS" },
	  "4836": { "code": "4836", "label": "LAJEADO DO BUGRE", "state": "RS" },
	  "4837": { "code": "4837", "label": "LAVRAS DO SUL", "state": "RS" },
	  "4838": { "code": "4838", "label": "LIBERATO SALZANO", "state": "RS" },
	  "4839": { "code": "4839", "label": "LINDOLFO COLLOR", "state": "RS" },
	  "4840": { "code": "4840", "label": "LINHA NOVA", "state": "RS" },
	  "4841": { "code": "4841", "label": "MACHADINHO", "state": "RS" },
	  "4842": { "code": "4842", "label": "MAÇAMBARÁ", "state": "RS" },
	  "4843": { "code": "4843", "label": "MAMPITUBA", "state": "RS" },
	  "4844": { "code": "4844", "label": "MANOEL VIANA", "state": "RS" },
	  "4845": { "code": "4845", "label": "MAQUINÉ", "state": "RS" },
	  "4846": { "code": "4846", "label": "MARATÁ", "state": "RS" },
	  "4847": { "code": "4847", "label": "MARAU", "state": "RS" },
	  "4848": { "code": "4848", "label": "MARCELINO RAMOS", "state": "RS" },
	  "4849": { "code": "4849", "label": "MARIANA PIMENTEL", "state": "RS" },
	  "4850": { "code": "4850", "label": "MARIANO MORO", "state": "RS" },
	  "4851": { "code": "4851", "label": "MARQUES DE SOUZA", "state": "RS" },
	  "4852": { "code": "4852", "label": "MATA", "state": "RS" },
	  "4853": { "code": "4853", "label": "MATO CASTELHANO", "state": "RS" },
	  "4854": { "code": "4854", "label": "MATO LEITÃO", "state": "RS" },
	  "4855": { "code": "4855", "label": "MATO QUEIMADO", "state": "RS" },
	  "4856": { "code": "4856", "label": "MAXIMILIANO DE ALMEIDA", "state": "RS" },
	  "4857": { "code": "4857", "label": "MINAS DO LEÃO", "state": "RS" },
	  "4858": { "code": "4858", "label": "MIRAGUAÍ", "state": "RS" },
	  "4859": { "code": "4859", "label": "MONTAURI", "state": "RS" },
	  "4860": { "code": "4860", "label": "MONTE ALEGRE DOS CAMPOS", "state": "RS" },
	  "4861": { "code": "4861", "label": "MONTE BELO DO SUL", "state": "RS" },
	  "4862": { "code": "4862", "label": "MONTENEGRO", "state": "RS" },
	  "4863": { "code": "4863", "label": "MORMAÇO", "state": "RS" },
	  "4864": { "code": "4864", "label": "MORRINHOS DO SUL", "state": "RS" },
	  "4865": { "code": "4865", "label": "MORRO REDONDO", "state": "RS" },
	  "4866": { "code": "4866", "label": "MORRO REUTER", "state": "RS" },
	  "4867": { "code": "4867", "label": "MOSTARDAS", "state": "RS" },
	  "4868": { "code": "4868", "label": "MUÇUM", "state": "RS" },
	  "4869": { "code": "4869", "label": "MUITOS CAPÕES", "state": "RS" },
	  "4870": { "code": "4870", "label": "MULITERNO", "state": "RS" },
	  "4871": { "code": "4871", "label": "NÃO-ME-TOQUE", "state": "RS" },
	  "4872": { "code": "4872", "label": "NICOLAU VERGUEIRO", "state": "RS" },
	  "4873": { "code": "4873", "label": "NONOAI", "state": "RS" },
	  "4874": { "code": "4874", "label": "NOVA ALVORADA", "state": "RS" },
	  "4875": { "code": "4875", "label": "NOVA ARAÇÁ", "state": "RS" },
	  "4876": { "code": "4876", "label": "NOVA BASSANO", "state": "RS" },
	  "4877": { "code": "4877", "label": "NOVA BOA VISTA", "state": "RS" },
	  "4878": { "code": "4878", "label": "NOVA BRÉSCIA", "state": "RS" },
	  "4879": { "code": "4879", "label": "NOVA CANDELÁRIA", "state": "RS" },
	  "4880": { "code": "4880", "label": "NOVA ESPERANÇA DO SUL", "state": "RS" },
	  "4881": { "code": "4881", "label": "NOVA HARTZ", "state": "RS" },
	  "4882": { "code": "4882", "label": "NOVA PÁDUA", "state": "RS" },
	  "4883": { "code": "4883", "label": "NOVA PALMA", "state": "RS" },
	  "4884": { "code": "4884", "label": "NOVA PETRÓPOLIS", "state": "RS" },
	  "4885": { "code": "4885", "label": "NOVA PRATA", "state": "RS" },
	  "4886": { "code": "4886", "label": "NOVA RAMADA", "state": "RS" },
	  "4887": { "code": "4887", "label": "NOVA ROMA DO SUL", "state": "RS" },
	  "4888": { "code": "4888", "label": "NOVA SANTA RITA", "state": "RS" },
	  "4889": { "code": "4889", "label": "NOVO CABRAIS", "state": "RS" },
	  "4890": { "code": "4890", "label": "NOVO HAMBURGO", "state": "RS" },
	  "4891": { "code": "4891", "label": "NOVO MACHADO", "state": "RS" },
	  "4892": { "code": "4892", "label": "NOVO TIRADENTES", "state": "RS" },
	  "4893": { "code": "4893", "label": "NOVO XINGU", "state": "RS" },
	  "4894": { "code": "4894", "label": "NOVO BARREIRO", "state": "RS" },
	  "4895": { "code": "4895", "label": "OSÓRIO", "state": "RS" },
	  "4896": { "code": "4896", "label": "PAIM FILHO", "state": "RS" },
	  "4897": { "code": "4897", "label": "PALMARES DO SUL", "state": "RS" },
	  "4898": { "code": "4898", "label": "PALMEIRA DAS MISSÕES", "state": "RS" },
	  "4899": { "code": "4899", "label": "PALMITINHO", "state": "RS" },
	  "4900": { "code": "4900", "label": "PANAMBI", "state": "RS" },
	  "4901": { "code": "4901", "label": "PANTANO GRANDE", "state": "RS" },
	  "4902": { "code": "4902", "label": "PARAÍ", "state": "RS" },
	  "4903": { "code": "4903", "label": "PARAÍSO DO SUL", "state": "RS" },
	  "4904": { "code": "4904", "label": "PARECI NOVO", "state": "RS" },
	  "4905": { "code": "4905", "label": "PAROBÉ", "state": "RS" },
	  "4906": { "code": "4906", "label": "PASSA SETE", "state": "RS" },
	  "4907": { "code": "4907", "label": "PASSO DO SOBRADO", "state": "RS" },
	  "4908": { "code": "4908", "label": "PASSO FUNDO", "state": "RS" },
	  "4909": { "code": "4909", "label": "PAULO BENTO", "state": "RS" },
	  "4910": { "code": "4910", "label": "PAVERAMA", "state": "RS" },
	  "4911": { "code": "4911", "label": "PEDRAS ALTAS", "state": "RS" },
	  "4912": { "code": "4912", "label": "PEDRO OSÓRIO", "state": "RS" },
	  "4913": { "code": "4913", "label": "PEJUÇARA", "state": "RS" },
	  "4914": { "code": "4914", "label": "PELOTAS", "state": "RS" },
	  "4915": { "code": "4915", "label": "PICADA CAFÉ", "state": "RS" },
	  "4916": { "code": "4916", "label": "PINHAL", "state": "RS" },
	  "4917": { "code": "4917", "label": "PINHAL DA SERRA", "state": "RS" },
	  "4918": { "code": "4918", "label": "PINHAL GRANDE", "state": "RS" },
	  "4919": { "code": "4919", "label": "PINHEIRINHO DO VALE", "state": "RS" },
	  "4920": { "code": "4920", "label": "PINHEIRO MACHADO", "state": "RS" },
	  "4921": { "code": "4921", "label": "PIRAPÓ", "state": "RS" },
	  "4922": { "code": "4922", "label": "PIRATINI", "state": "RS" },
	  "4923": { "code": "4923", "label": "PLANALTO", "state": "RS" },
	  "4924": { "code": "4924", "label": "POÇO DAS ANTAS", "state": "RS" },
	  "4925": { "code": "4925", "label": "PONTÃO", "state": "RS" },
	  "4926": { "code": "4926", "label": "PONTE PRETA", "state": "RS" },
	  "4927": { "code": "4927", "label": "PORTÃO", "state": "RS" },
	  "4928": { "code": "4928", "label": "PORTO ALEGRE", "state": "RS" },
	  "4929": { "code": "4929", "label": "PORTO LUCENA", "state": "RS" },
	  "4930": { "code": "4930", "label": "PORTO MAUÁ", "state": "RS" },
	  "4931": { "code": "4931", "label": "PORTO VERA CRUZ", "state": "RS" },
	  "4932": { "code": "4932", "label": "PORTO XAVIER", "state": "RS" },
	  "4933": { "code": "4933", "label": "POUSO NOVO", "state": "RS" },
	  "4934": { "code": "4934", "label": "PRESIDENTE LUCENA", "state": "RS" },
	  "4935": { "code": "4935", "label": "PROGRESSO", "state": "RS" },
	  "4936": { "code": "4936", "label": "PROTÁSIO ALVES", "state": "RS" },
	  "4937": { "code": "4937", "label": "PUTINGA", "state": "RS" },
	  "4938": { "code": "4938", "label": "QUARAÍ", "state": "RS" },
	  "4939": { "code": "4939", "label": "QUATRO IRMÃOS", "state": "RS" },
	  "4940": { "code": "4940", "label": "QUEVEDOS", "state": "RS" },
	  "4941": { "code": "4941", "label": "QUINZE DE NOVEMBRO", "state": "RS" },
	  "4942": { "code": "4942", "label": "REDENTORA", "state": "RS" },
	  "4943": { "code": "4943", "label": "RELVADO", "state": "RS" },
	  "4944": { "code": "4944", "label": "RESTINGA SECA", "state": "RS" },
	  "4945": { "code": "4945", "label": "RIO DOS ÍNDIOS", "state": "RS" },
	  "4946": { "code": "4946", "label": "RIO GRANDE", "state": "RS" },
	  "4947": { "code": "4947", "label": "RIO PARDO", "state": "RS" },
	  "4948": { "code": "4948", "label": "RIOZINHO", "state": "RS" },
	  "4949": { "code": "4949", "label": "ROCA SALES", "state": "RS" },
	  "4950": { "code": "4950", "label": "RODEIO BONITO", "state": "RS" },
	  "4951": { "code": "4951", "label": "ROLADOR", "state": "RS" },
	  "4952": { "code": "4952", "label": "ROLANTE", "state": "RS" },
	  "4953": { "code": "4953", "label": "RONDA ALTA", "state": "RS" },
	  "4954": { "code": "4954", "label": "RONDINHA", "state": "RS" },
	  "4955": { "code": "4955", "label": "ROQUE GONZALES", "state": "RS" },
	  "4956": { "code": "4956", "label": "ROSÁRIO DO SUL", "state": "RS" },
	  "4957": { "code": "4957", "label": "SAGRADA FAMÍLIA", "state": "RS" },
	  "4958": { "code": "4958", "label": "SALDANHA MARINHO", "state": "RS" },
	  "4959": { "code": "4959", "label": "SALTO DO JACUÍ", "state": "RS" },
	  "4960": { "code": "4960", "label": "SALVADOR DAS MISSÕES", "state": "RS" },
	  "4961": { "code": "4961", "label": "SALVADOR DO SUL", "state": "RS" },
	  "4962": { "code": "4962", "label": "SANANDUVA", "state": "RS" },
	  "4963": { "code": "4963", "label": "SANTA BÁRBARA DO SUL", "state": "RS" },
	  "4964": { "code": "4964", "label": "SANTA CECÍLIA DO SUL", "state": "RS" },
	  "4965": { "code": "4965", "label": "SANTA CLARA DO SUL", "state": "RS" },
	  "4966": { "code": "4966", "label": "SANTA CRUZ DO SUL", "state": "RS" },
	  "4967": { "code": "4967", "label": "SANTA MARIA", "state": "RS" },
	  "4968": { "code": "4968", "label": "SANTA MARIA DO HERVAL", "state": "RS" },
	  "4969": { "code": "4969", "label": "SANTA MARGARIDA DO SUL", "state": "RS" },
	  "4970": { "code": "4970", "label": "SANTANA DA BOA VISTA", "state": "RS" },
	  "4971": { "code": "4971", "label": "SANT'ANA DO LIVRAMENTO", "state": "RS" },
	  "4972": { "code": "4972", "label": "SANTA ROSA", "state": "RS" },
	  "4973": { "code": "4973", "label": "SANTA TEREZA", "state": "RS" },
	  "4974": { "code": "4974", "label": "SANTA VITÓRIA DO PALMAR", "state": "RS" },
	  "4975": { "code": "4975", "label": "SANTIAGO", "state": "RS" },
	  "4976": { "code": "4976", "label": "SANTO ÂNGELO", "state": "RS" },
	  "4977": { "code": "4977", "label": "SANTO ANTÔNIO DO PALMA", "state": "RS" },
	  "4978": { "code": "4978", "label": "SANTO ANTÔNIO DA PATRULHA", "state": "RS" },
	  "4979": { "code": "4979", "label": "SANTO ANTÔNIO DAS MISSÕES", "state": "RS" },
	  "4980": { "code": "4980", "label": "SANTO ANTÔNIO DO PLANALTO", "state": "RS" },
	  "4981": { "code": "4981", "label": "SANTO AUGUSTO", "state": "RS" },
	  "4982": { "code": "4982", "label": "SANTO CRISTO", "state": "RS" },
	  "4983": { "code": "4983", "label": "SANTO EXPEDITO DO SUL", "state": "RS" },
	  "4984": { "code": "4984", "label": "SÃO BORJA", "state": "RS" },
	  "4985": { "code": "4985", "label": "SÃO DOMINGOS DO SUL", "state": "RS" },
	  "4986": { "code": "4986", "label": "SÃO FRANCISCO DE ASSIS", "state": "RS" },
	  "4987": { "code": "4987", "label": "SÃO FRANCISCO DE PAULA", "state": "RS" },
	  "4988": { "code": "4988", "label": "SÃO GABRIEL", "state": "RS" },
	  "4989": { "code": "4989", "label": "SÃO JERÔNIMO", "state": "RS" },
	  "4990": { "code": "4990", "label": "SÃO JOÃO DA URTIGA", "state": "RS" },
	  "4991": { "code": "4991", "label": "SÃO JOÃO DO POLÊSINE", "state": "RS" },
	  "4992": { "code": "4992", "label": "SÃO JORGE", "state": "RS" },
	  "4993": { "code": "4993", "label": "SÃO JOSÉ DAS MISSÕES", "state": "RS" },
	  "4994": { "code": "4994", "label": "SÃO JOSÉ DO HERVAL", "state": "RS" },
	  "4995": { "code": "4995", "label": "SÃO JOSÉ DO HORTÊNCIO", "state": "RS" },
	  "4996": { "code": "4996", "label": "SÃO JOSÉ DO INHACORÁ", "state": "RS" },
	  "4997": { "code": "4997", "label": "SÃO JOSÉ DO NORTE", "state": "RS" },
	  "4998": { "code": "4998", "label": "SÃO JOSÉ DO OURO", "state": "RS" },
	  "4999": { "code": "4999", "label": "SÃO JOSÉ DO SUL", "state": "RS" },
	  "5000": { "code": "5000", "label": "SÃO JOSÉ DOS AUSENTES", "state": "RS" },
	  "5001": { "code": "5001", "label": "SÃO LEOPOLDO", "state": "RS" },
	  "5002": { "code": "5002", "label": "SÃO LOURENÇO DO SUL", "state": "RS" },
	  "5003": { "code": "5003", "label": "SÃO LUIZ GONZAGA", "state": "RS" },
	  "5004": { "code": "5004", "label": "SÃO MARCOS", "state": "RS" },
	  "5005": { "code": "5005", "label": "SÃO MARTINHO", "state": "RS" },
	  "5006": { "code": "5006", "label": "SÃO MARTINHO DA SERRA", "state": "RS" },
	  "5007": { "code": "5007", "label": "SÃO MIGUEL DAS MISSÕES", "state": "RS" },
	  "5008": { "code": "5008", "label": "SÃO NICOLAU", "state": "RS" },
	  "5009": { "code": "5009", "label": "SÃO PAULO DAS MISSÕES", "state": "RS" },
	  "5010": { "code": "5010", "label": "SÃO PEDRO DA SERRA", "state": "RS" },
	  "5011": { "code": "5011", "label": "SÃO PEDRO DAS MISSÕES", "state": "RS" },
	  "5012": { "code": "5012", "label": "SÃO PEDRO DO BUTIÁ", "state": "RS" },
	  "5013": { "code": "5013", "label": "SÃO PEDRO DO SUL", "state": "RS" },
	  "5014": { "code": "5014", "label": "SÃO SEBASTIÃO DO CAÍ", "state": "RS" },
	  "5015": { "code": "5015", "label": "SÃO SEPÉ", "state": "RS" },
	  "5016": { "code": "5016", "label": "SÃO VALENTIM", "state": "RS" },
	  "5017": { "code": "5017", "label": "SÃO VALENTIM DO SUL", "state": "RS" },
	  "5018": { "code": "5018", "label": "SÃO VALÉRIO DO SUL", "state": "RS" },
	  "5019": { "code": "5019", "label": "SÃO VENDELINO", "state": "RS" },
	  "5020": { "code": "5020", "label": "SÃO VICENTE DO SUL", "state": "RS" },
	  "5021": { "code": "5021", "label": "SAPIRANGA", "state": "RS" },
	  "5022": { "code": "5022", "label": "SAPUCAIA DO SUL", "state": "RS" },
	  "5023": { "code": "5023", "label": "SARANDI", "state": "RS" },
	  "5024": { "code": "5024", "label": "SEBERI", "state": "RS" },
	  "5025": { "code": "5025", "label": "SEDE NOVA", "state": "RS" },
	  "5026": { "code": "5026", "label": "SEGREDO", "state": "RS" },
	  "5027": { "code": "5027", "label": "SELBACH", "state": "RS" },
	  "5028": { "code": "5028", "label": "SENADOR SALGADO FILHO", "state": "RS" },
	  "5029": { "code": "5029", "label": "SENTINELA DO SUL", "state": "RS" },
	  "5030": { "code": "5030", "label": "SERAFINA CORRÊA", "state": "RS" },
	  "5031": { "code": "5031", "label": "SÉRIO", "state": "RS" },
	  "5032": { "code": "5032", "label": "SERTÃO", "state": "RS" },
	  "5033": { "code": "5033", "label": "SERTÃO SANTANA", "state": "RS" },
	  "5034": { "code": "5034", "label": "SETE DE SETEMBRO", "state": "RS" },
	  "5035": { "code": "5035", "label": "SEVERIANO DE ALMEIDA", "state": "RS" },
	  "5036": { "code": "5036", "label": "SILVEIRA MARTINS", "state": "RS" },
	  "5037": { "code": "5037", "label": "SINIMBU", "state": "RS" },
	  "5038": { "code": "5038", "label": "SOBRADINHO", "state": "RS" },
	  "5039": { "code": "5039", "label": "SOLEDADE", "state": "RS" },
	  "5040": { "code": "5040", "label": "TABAÍ", "state": "RS" },
	  "5041": { "code": "5041", "label": "TAPEJARA", "state": "RS" },
	  "5042": { "code": "5042", "label": "TAPERA", "state": "RS" },
	  "5043": { "code": "5043", "label": "TAPES", "state": "RS" },
	  "5044": { "code": "5044", "label": "TAQUARA", "state": "RS" },
	  "5045": { "code": "5045", "label": "TAQUARI", "state": "RS" },
	  "5046": { "code": "5046", "label": "TAQUARUÇU DO SUL", "state": "RS" },
	  "5047": { "code": "5047", "label": "TAVARES", "state": "RS" },
	  "5048": { "code": "5048", "label": "TENENTE PORTELA", "state": "RS" },
	  "5049": { "code": "5049", "label": "TERRA DE AREIA", "state": "RS" },
	  "5050": { "code": "5050", "label": "TEUTÔNIA", "state": "RS" },
	  "5051": { "code": "5051", "label": "TIO HUGO", "state": "RS" },
	  "5052": { "code": "5052", "label": "TIRADENTES DO SUL", "state": "RS" },
	  "5053": { "code": "5053", "label": "TOROPI", "state": "RS" },
	  "5054": { "code": "5054", "label": "TORRES", "state": "RS" },
	  "5055": { "code": "5055", "label": "TRAMANDAÍ", "state": "RS" },
	  "5056": { "code": "5056", "label": "TRAVESSEIRO", "state": "RS" },
	  "5057": { "code": "5057", "label": "TRÊS ARROIOS", "state": "RS" },
	  "5058": { "code": "5058", "label": "TRÊS CACHOEIRAS", "state": "RS" },
	  "5059": { "code": "5059", "label": "TRÊS COROAS", "state": "RS" },
	  "5060": { "code": "5060", "label": "TRÊS DE MAIO", "state": "RS" },
	  "5061": { "code": "5061", "label": "TRÊS FORQUILHAS", "state": "RS" },
	  "5062": { "code": "5062", "label": "TRÊS PALMEIRAS", "state": "RS" },
	  "5063": { "code": "5063", "label": "TRÊS PASSOS", "state": "RS" },
	  "5064": { "code": "5064", "label": "TRINDADE DO SUL", "state": "RS" },
	  "5065": { "code": "5065", "label": "TRIUNFO", "state": "RS" },
	  "5066": { "code": "5066", "label": "TUCUNDUVA", "state": "RS" },
	  "5067": { "code": "5067", "label": "TUNAS", "state": "RS" },
	  "5068": { "code": "5068", "label": "TUPANCI DO SUL", "state": "RS" },
	  "5069": { "code": "5069", "label": "TUPANCIRETÃ", "state": "RS" },
	  "5070": { "code": "5070", "label": "TUPANDI", "state": "RS" },
	  "5071": { "code": "5071", "label": "TUPARENDI", "state": "RS" },
	  "5072": { "code": "5072", "label": "TURUÇU", "state": "RS" },
	  "5073": { "code": "5073", "label": "UBIRETAMA", "state": "RS" },
	  "5074": { "code": "5074", "label": "UNIÃO DA SERRA", "state": "RS" },
	  "5075": { "code": "5075", "label": "UNISTALDA", "state": "RS" },
	  "5076": { "code": "5076", "label": "URUGUAIANA", "state": "RS" },
	  "5077": { "code": "5077", "label": "VACARIA", "state": "RS" },
	  "5078": { "code": "5078", "label": "VALE VERDE", "state": "RS" },
	  "5079": { "code": "5079", "label": "VALE DO SOL", "state": "RS" },
	  "5080": { "code": "5080", "label": "VALE REAL", "state": "RS" },
	  "5081": { "code": "5081", "label": "VANINI", "state": "RS" },
	  "5082": { "code": "5082", "label": "VENÂNCIO AIRES", "state": "RS" },
	  "5083": { "code": "5083", "label": "VERA CRUZ", "state": "RS" },
	  "5084": { "code": "5084", "label": "VERANÓPOLIS", "state": "RS" },
	  "5085": { "code": "5085", "label": "VESPASIANO CORREA", "state": "RS" },
	  "5086": { "code": "5086", "label": "VIADUTOS", "state": "RS" },
	  "5087": { "code": "5087", "label": "VIAMÃO", "state": "RS" },
	  "5088": { "code": "5088", "label": "VICENTE DUTRA", "state": "RS" },
	  "5089": { "code": "5089", "label": "VICTOR GRAEFF", "state": "RS" },
	  "5090": { "code": "5090", "label": "VILA FLORES", "state": "RS" },
	  "5091": { "code": "5091", "label": "VILA LÂNGARO", "state": "RS" },
	  "5092": { "code": "5092", "label": "VILA MARIA", "state": "RS" },
	  "5093": { "code": "5093", "label": "VILA NOVA DO SUL", "state": "RS" },
	  "5094": { "code": "5094", "label": "VISTA ALEGRE", "state": "RS" },
	  "5095": { "code": "5095", "label": "VISTA ALEGRE DO PRATA", "state": "RS" },
	  "5096": { "code": "5096", "label": "VISTA GAÚCHA", "state": "RS" },
	  "5097": { "code": "5097", "label": "VITÓRIA DAS MISSÕES", "state": "RS" },
	  "5098": { "code": "5098", "label": "WESTFALIA", "state": "RS" },
	  "5099": { "code": "5099", "label": "XANGRI-LÁ", "state": "RS" },
	  "5100": { "code": "5100", "label": "ÁGUA CLARA", "state": "MS" },
	  "5101": { "code": "5101", "label": "ALCINÓPOLIS", "state": "MS" },
	  "5102": { "code": "5102", "label": "AMAMBAI", "state": "MS" },
	  "5103": { "code": "5103", "label": "ANASTÁCIO", "state": "MS" },
	  "5104": { "code": "5104", "label": "ANAURILÂNDIA", "state": "MS" },
	  "5105": { "code": "5105", "label": "ANGÉLICA", "state": "MS" },
	  "5106": { "code": "5106", "label": "ANTÔNIO JOÃO", "state": "MS" },
	  "5107": { "code": "5107", "label": "APARECIDA DO TABOADO", "state": "MS" },
	  "5108": { "code": "5108", "label": "AQUIDAUANA", "state": "MS" },
	  "5109": { "code": "5109", "label": "ARAL MOREIRA", "state": "MS" },
	  "5110": { "code": "5110", "label": "BANDEIRANTES", "state": "MS" },
	  "5111": { "code": "5111", "label": "BATAGUASSU", "state": "MS" },
	  "5112": { "code": "5112", "label": "BATAYPORÃ", "state": "MS" },
	  "5113": { "code": "5113", "label": "BELA VISTA", "state": "MS" },
	  "5114": { "code": "5114", "label": "BODOQUENA", "state": "MS" },
	  "5115": { "code": "5115", "label": "BONITO", "state": "MS" },
	  "5116": { "code": "5116", "label": "BRASILÂNDIA", "state": "MS" },
	  "5117": { "code": "5117", "label": "CAARAPÓ", "state": "MS" },
	  "5118": { "code": "5118", "label": "CAMAPUÃ", "state": "MS" },
	  "5119": { "code": "5119", "label": "CAMPO GRANDE", "state": "MS" },
	  "5120": { "code": "5120", "label": "CARACOL", "state": "MS" },
	  "5121": { "code": "5121", "label": "CASSILÂNDIA", "state": "MS" },
	  "5122": { "code": "5122", "label": "CHAPADÃO DO SUL", "state": "MS" },
	  "5123": { "code": "5123", "label": "CORGUINHO", "state": "MS" },
	  "5124": { "code": "5124", "label": "CORONEL SAPUCAIA", "state": "MS" },
	  "5125": { "code": "5125", "label": "CORUMBÁ", "state": "MS" },
	  "5126": { "code": "5126", "label": "COSTA RICA", "state": "MS" },
	  "5127": { "code": "5127", "label": "COXIM", "state": "MS" },
	  "5128": { "code": "5128", "label": "DEODÁPOLIS", "state": "MS" },
	  "5129": { "code": "5129", "label": "DOIS IRMÃOS DO BURITI", "state": "MS" },
	  "5130": { "code": "5130", "label": "DOURADINA", "state": "MS" },
	  "5131": { "code": "5131", "label": "DOURADOS", "state": "MS" },
	  "5132": { "code": "5132", "label": "ELDORADO", "state": "MS" },
	  "5133": { "code": "5133", "label": "FÁTIMA DO SUL", "state": "MS" },
	  "5134": { "code": "5134", "label": "FIGUEIRÃO", "state": "MS" },
	  "5135": { "code": "5135", "label": "GLÓRIA DE DOURADOS", "state": "MS" },
	  "5136": { "code": "5136", "label": "GUIA LOPES DA LAGUNA", "state": "MS" },
	  "5137": { "code": "5137", "label": "IGUATEMI", "state": "MS" },
	  "5138": { "code": "5138", "label": "INOCÊNCIA", "state": "MS" },
	  "5139": { "code": "5139", "label": "ITAPORÃ", "state": "MS" },
	  "5140": { "code": "5140", "label": "ITAQUIRAÍ", "state": "MS" },
	  "5141": { "code": "5141", "label": "IVINHEMA", "state": "MS" },
	  "5142": { "code": "5142", "label": "JAPORÃ", "state": "MS" },
	  "5143": { "code": "5143", "label": "JARAGUARI", "state": "MS" },
	  "5144": { "code": "5144", "label": "JARDIM", "state": "MS" },
	  "5145": { "code": "5145", "label": "JATEÍ", "state": "MS" },
	  "5146": { "code": "5146", "label": "JUTI", "state": "MS" },
	  "5147": { "code": "5147", "label": "LADÁRIO", "state": "MS" },
	  "5148": { "code": "5148", "label": "LAGUNA CARAPÃ", "state": "MS" },
	  "5149": { "code": "5149", "label": "MARACAJU", "state": "MS" },
	  "5150": { "code": "5150", "label": "MIRANDA", "state": "MS" },
	  "5151": { "code": "5151", "label": "MUNDO NOVO", "state": "MS" },
	  "5152": { "code": "5152", "label": "NAVIRAÍ", "state": "MS" },
	  "5153": { "code": "5153", "label": "NIOAQUE", "state": "MS" },
	  "5154": { "code": "5154", "label": "NOVA ALVORADA DO SUL", "state": "MS" },
	  "5155": { "code": "5155", "label": "NOVA ANDRADINA", "state": "MS" },
	  "5156": { "code": "5156", "label": "NOVO HORIZONTE DO SUL", "state": "MS" },
	  "5157": { "code": "5157", "label": "PARANAÍBA", "state": "MS" },
	  "5158": { "code": "5158", "label": "PARANHOS", "state": "MS" },
	  "5159": { "code": "5159", "label": "PEDRO GOMES", "state": "MS" },
	  "5160": { "code": "5160", "label": "PONTA PORÃ", "state": "MS" },
	  "5161": { "code": "5161", "label": "PORTO MURTINHO", "state": "MS" },
	  "5162": { "code": "5162", "label": "RIBAS DO RIO PARDO", "state": "MS" },
	  "5163": { "code": "5163", "label": "RIO BRILHANTE", "state": "MS" },
	  "5164": { "code": "5164", "label": "RIO NEGRO", "state": "MS" },
	  "5165": { "code": "5165", "label": "RIO VERDE DE MATO GROSSO", "state": "MS" },
	  "5166": { "code": "5166", "label": "ROCHEDO", "state": "MS" },
	  "5167": { "code": "5167", "label": "SANTA RITA DO PARDO", "state": "MS" },
	  "5168": { "code": "5168", "label": "SÃO GABRIEL DO OESTE", "state": "MS" },
	  "5169": { "code": "5169", "label": "SETE QUEDAS", "state": "MS" },
	  "5170": { "code": "5170", "label": "SELVÍRIA", "state": "MS" },
	  "5171": { "code": "5171", "label": "SIDROLÂNDIA", "state": "MS" },
	  "5172": { "code": "5172", "label": "SONORA", "state": "MS" },
	  "5173": { "code": "5173", "label": "TACURU", "state": "MS" },
	  "5174": { "code": "5174", "label": "TAQUARUSSU", "state": "MS" },
	  "5175": { "code": "5175", "label": "TERENOS", "state": "MS" },
	  "5176": { "code": "5176", "label": "TRÊS LAGOAS", "state": "MS" },
	  "5177": { "code": "5177", "label": "VICENTINA", "state": "MS" },
	  "5178": { "code": "5178", "label": "ACORIZAL", "state": "MT" },
	  "5179": { "code": "5179", "label": "ÁGUA BOA", "state": "MT" },
	  "5180": { "code": "5180", "label": "ALTA FLORESTA", "state": "MT" },
	  "5181": { "code": "5181", "label": "ALTO ARAGUAIA", "state": "MT" },
	  "5182": { "code": "5182", "label": "ALTO BOA VISTA", "state": "MT" },
	  "5183": { "code": "5183", "label": "ALTO GARÇAS", "state": "MT" },
	  "5184": { "code": "5184", "label": "ALTO PARAGUAI", "state": "MT" },
	  "5185": { "code": "5185", "label": "ALTO TAQUARI", "state": "MT" },
	  "5186": { "code": "5186", "label": "APIACÁS", "state": "MT" },
	  "5187": { "code": "5187", "label": "ARAGUAIANA", "state": "MT" },
	  "5188": { "code": "5188", "label": "ARAGUAINHA", "state": "MT" },
	  "5189": { "code": "5189", "label": "ARAPUTANGA", "state": "MT" },
	  "5190": { "code": "5190", "label": "ARENÁPOLIS", "state": "MT" },
	  "5191": { "code": "5191", "label": "ARIPUANÃ", "state": "MT" },
	  "5192": { "code": "5192", "label": "BARÃO DE MELGAÇO", "state": "MT" },
	  "5193": { "code": "5193", "label": "BARRA DO BUGRES", "state": "MT" },
	  "5194": { "code": "5194", "label": "BARRA DO GARÇAS", "state": "MT" },
	  "5195": { "code": "5195", "label": "BOM JESUS DO ARAGUAIA", "state": "MT" },
	  "5196": { "code": "5196", "label": "BRASNORTE", "state": "MT" },
	  "5197": { "code": "5197", "label": "CÁCERES", "state": "MT" },
	  "5198": { "code": "5198", "label": "CAMPINÁPOLIS", "state": "MT" },
	  "5199": { "code": "5199", "label": "CAMPO NOVO DO PARECIS", "state": "MT" },
	  "5200": { "code": "5200", "label": "CAMPO VERDE", "state": "MT" },
	  "5201": { "code": "5201", "label": "CAMPOS DE JÚLIO", "state": "MT" },
	  "5202": { "code": "5202", "label": "CANABRAVA DO NORTE", "state": "MT" },
	  "5203": { "code": "5203", "label": "CANARANA", "state": "MT" },
	  "5204": { "code": "5204", "label": "CARLINDA", "state": "MT" },
	  "5205": { "code": "5205", "label": "CASTANHEIRA", "state": "MT" },
	  "5206": { "code": "5206", "label": "CHAPADA DOS GUIMARÃES", "state": "MT" },
	  "5207": { "code": "5207", "label": "CLÁUDIA", "state": "MT" },
	  "5208": { "code": "5208", "label": "COCALINHO", "state": "MT" },
	  "5209": { "code": "5209", "label": "COLÍDER", "state": "MT" },
	  "5210": { "code": "5210", "label": "COLNIZA", "state": "MT" },
	  "5211": { "code": "5211", "label": "COMODORO", "state": "MT" },
	  "5212": { "code": "5212", "label": "CONFRESA", "state": "MT" },
	  "5213": { "code": "5213", "label": "CONQUISTA D'OESTE", "state": "MT" },
	  "5214": { "code": "5214", "label": "COTRIGUAÇU", "state": "MT" },
	  "5215": { "code": "5215", "label": "CUIABÁ", "state": "MT" },
	  "5216": { "code": "5216", "label": "CURVELÂNDIA", "state": "MT" },
	  "5217": { "code": "5217", "label": "DENISE", "state": "MT" },
	  "5218": { "code": "5218", "label": "DIAMANTINO", "state": "MT" },
	  "5219": { "code": "5219", "label": "DOM AQUINO", "state": "MT" },
	  "5220": { "code": "5220", "label": "FELIZ NATAL", "state": "MT" },
	  "5221": { "code": "5221", "label": "FIGUEIRÓPOLIS D'OESTE", "state": "MT" },
	  "5222": { "code": "5222", "label": "GAÚCHA DO NORTE", "state": "MT" },
	  "5223": { "code": "5223", "label": "GENERAL CARNEIRO", "state": "MT" },
	  "5224": { "code": "5224", "label": "GLÓRIA D'OESTE", "state": "MT" },
	  "5225": { "code": "5225", "label": "GUARANTÃ DO NORTE", "state": "MT" },
	  "5226": { "code": "5226", "label": "GUIRATINGA", "state": "MT" },
	  "5227": { "code": "5227", "label": "INDIAVAÍ", "state": "MT" },
	  "5228": { "code": "5228", "label": "IPIRANGA DO NORTE", "state": "MT" },
	  "5229": { "code": "5229", "label": "ITANHANGÁ", "state": "MT" },
	  "5230": { "code": "5230", "label": "ITAÚBA", "state": "MT" },
	  "5231": { "code": "5231", "label": "ITIQUIRA", "state": "MT" },
	  "5232": { "code": "5232", "label": "JACIARA", "state": "MT" },
	  "5233": { "code": "5233", "label": "JANGADA", "state": "MT" },
	  "5234": { "code": "5234", "label": "JAURU", "state": "MT" },
	  "5235": { "code": "5235", "label": "JUARA", "state": "MT" },
	  "5236": { "code": "5236", "label": "JUÍNA", "state": "MT" },
	  "5237": { "code": "5237", "label": "JURUENA", "state": "MT" },
	  "5238": { "code": "5238", "label": "JUSCIMEIRA", "state": "MT" },
	  "5239": { "code": "5239", "label": "LAMBARI D'OESTE", "state": "MT" },
	  "5240": { "code": "5240", "label": "LUCAS DO RIO VERDE", "state": "MT" },
	  "5241": { "code": "5241", "label": "LUCIARA", "state": "MT" },
	  "5242": { "code": "5242", "label": "VILA BELA DA SANTÍSSIMA TRINDADE", "state": "MT" },
	  "5243": { "code": "5243", "label": "MARCELÂNDIA", "state": "MT" },
	  "5244": { "code": "5244", "label": "MATUPÁ", "state": "MT" },
	  "5245": { "code": "5245", "label": "MIRASSOL D'OESTE", "state": "MT" },
	  "5246": { "code": "5246", "label": "NOBRES", "state": "MT" },
	  "5247": { "code": "5247", "label": "NORTELÂNDIA", "state": "MT" },
	  "5248": { "code": "5248", "label": "NOSSA SENHORA DO LIVRAMENTO", "state": "MT" },
	  "5249": { "code": "5249", "label": "NOVA BANDEIRANTES", "state": "MT" },
	  "5250": { "code": "5250", "label": "NOVA NAZARÉ", "state": "MT" },
	  "5251": { "code": "5251", "label": "NOVA LACERDA", "state": "MT" },
	  "5252": { "code": "5252", "label": "NOVA SANTA HELENA", "state": "MT" },
	  "5253": { "code": "5253", "label": "NOVA BRASILÂNDIA", "state": "MT" },
	  "5254": { "code": "5254", "label": "NOVA CANAÃ DO NORTE", "state": "MT" },
	  "5255": { "code": "5255", "label": "NOVA MUTUM", "state": "MT" },
	  "5256": { "code": "5256", "label": "NOVA OLÍMPIA", "state": "MT" },
	  "5257": { "code": "5257", "label": "NOVA UBIRATÃ", "state": "MT" },
	  "5258": { "code": "5258", "label": "NOVA XAVANTINA", "state": "MT" },
	  "5259": { "code": "5259", "label": "NOVO MUNDO", "state": "MT" },
	  "5260": { "code": "5260", "label": "NOVO HORIZONTE DO NORTE", "state": "MT" },
	  "5261": { "code": "5261", "label": "NOVO SÃO JOAQUIM", "state": "MT" },
	  "5262": { "code": "5262", "label": "PARANAÍTA", "state": "MT" },
	  "5263": { "code": "5263", "label": "PARANATINGA", "state": "MT" },
	  "5264": { "code": "5264", "label": "NOVO SANTO ANTÔNIO", "state": "MT" },
	  "5265": { "code": "5265", "label": "PEDRA PRETA", "state": "MT" },
	  "5266": { "code": "5266", "label": "PEIXOTO DE AZEVEDO", "state": "MT" },
	  "5267": { "code": "5267", "label": "PLANALTO DA SERRA", "state": "MT" },
	  "5268": { "code": "5268", "label": "POCONÉ", "state": "MT" },
	  "5269": { "code": "5269", "label": "PONTAL DO ARAGUAIA", "state": "MT" },
	  "5270": { "code": "5270", "label": "PONTE BRANCA", "state": "MT" },
	  "5271": { "code": "5271", "label": "PONTES E LACERDA", "state": "MT" },
	  "5272": { "code": "5272", "label": "PORTO ALEGRE DO NORTE", "state": "MT" },
	  "5273": { "code": "5273", "label": "PORTO DOS GAÚCHOS", "state": "MT" },
	  "5274": { "code": "5274", "label": "PORTO ESPERIDIÃO", "state": "MT" },
	  "5275": { "code": "5275", "label": "PORTO ESTRELA", "state": "MT" },
	  "5276": { "code": "5276", "label": "POXORÉO", "state": "MT" },
	  "5277": { "code": "5277", "label": "PRIMAVERA DO LESTE", "state": "MT" },
	  "5278": { "code": "5278", "label": "QUERÊNCIA", "state": "MT" },
	  "5279": { "code": "5279", "label": "SÃO JOSÉ DOS QUATRO MARCOS", "state": "MT" },
	  "5280": { "code": "5280", "label": "RESERVA DO CABAÇAL", "state": "MT" },
	  "5281": { "code": "5281", "label": "RIBEIRÃO CASCALHEIRA", "state": "MT" },
	  "5282": { "code": "5282", "label": "RIBEIRÃOZINHO", "state": "MT" },
	  "5283": { "code": "5283", "label": "RIO BRANCO", "state": "MT" },
	  "5284": { "code": "5284", "label": "SANTA CARMEM", "state": "MT" },
	  "5285": { "code": "5285", "label": "SANTO AFONSO", "state": "MT" },
	  "5286": { "code": "5286", "label": "SÃO JOSÉ DO POVO", "state": "MT" },
	  "5287": { "code": "5287", "label": "SÃO JOSÉ DO RIO CLARO", "state": "MT" },
	  "5288": { "code": "5288", "label": "SÃO JOSÉ DO XINGU", "state": "MT" },
	  "5289": { "code": "5289", "label": "SÃO PEDRO DA CIPA", "state": "MT" },
	  "5290": { "code": "5290", "label": "RONDOLÂNDIA", "state": "MT" },
	  "5291": { "code": "5291", "label": "RONDONÓPOLIS", "state": "MT" },
	  "5292": { "code": "5292", "label": "ROSÁRIO OESTE", "state": "MT" },
	  "5293": { "code": "5293", "label": "SANTA CRUZ DO XINGU", "state": "MT" },
	  "5294": { "code": "5294", "label": "SALTO DO CÉU", "state": "MT" },
	  "5295": { "code": "5295", "label": "SANTA RITA DO TRIVELATO", "state": "MT" },
	  "5296": { "code": "5296", "label": "SANTA TEREZINHA", "state": "MT" },
	  "5297": { "code": "5297", "label": "SANTO ANTÔNIO DO LESTE", "state": "MT" },
	  "5298": { "code": "5298", "label": "SANTO ANTÔNIO DO LEVERGER", "state": "MT" },
	  "5299": { "code": "5299", "label": "SÃO FÉLIX DO ARAGUAIA", "state": "MT" },
	  "5300": { "code": "5300", "label": "SAPEZAL", "state": "MT" },
	  "5301": { "code": "5301", "label": "SERRA NOVA DOURADA", "state": "MT" },
	  "5302": { "code": "5302", "label": "SINOP", "state": "MT" },
	  "5303": { "code": "5303", "label": "SORRISO", "state": "MT" },
	  "5304": { "code": "5304", "label": "TABAPORÃ", "state": "MT" },
	  "5305": { "code": "5305", "label": "TANGARÁ DA SERRA", "state": "MT" },
	  "5306": { "code": "5306", "label": "TAPURAH", "state": "MT" },
	  "5307": { "code": "5307", "label": "TERRA NOVA DO NORTE", "state": "MT" },
	  "5308": { "code": "5308", "label": "TESOURO", "state": "MT" },
	  "5309": { "code": "5309", "label": "TORIXORÉU", "state": "MT" },
	  "5310": { "code": "5310", "label": "UNIÃO DO SUL", "state": "MT" },
	  "5311": { "code": "5311", "label": "VALE DE SÃO DOMINGOS", "state": "MT" },
	  "5312": { "code": "5312", "label": "VÁRZEA GRANDE", "state": "MT" },
	  "5313": { "code": "5313", "label": "VERA", "state": "MT" },
	  "5314": { "code": "5314", "label": "VILA RICA", "state": "MT" },
	  "5315": { "code": "5315", "label": "NOVA GUARITA", "state": "MT" },
	  "5316": { "code": "5316", "label": "NOVA MARILÂNDIA", "state": "MT" },
	  "5317": { "code": "5317", "label": "NOVA MARINGÁ", "state": "MT" },
	  "5318": { "code": "5318", "label": "NOVA MONTE VERDE", "state": "MT" },
	  "5319": { "code": "5319", "label": "ABADIA DE GOIÁS", "state": "GO" },
	  "5320": { "code": "5320", "label": "ABADIÂNIA", "state": "GO" },
	  "5321": { "code": "5321", "label": "ACREÚNA", "state": "GO" },
	  "5322": { "code": "5322", "label": "ADELÂNDIA", "state": "GO" },
	  "5323": { "code": "5323", "label": "ÁGUA FRIA DE GOIÁS", "state": "GO" },
	  "5324": { "code": "5324", "label": "ÁGUA LIMPA", "state": "GO" },
	  "5325": { "code": "5325", "label": "ÁGUAS LINDAS DE GOIÁS", "state": "GO" },
	  "5326": { "code": "5326", "label": "ALEXÂNIA", "state": "GO" },
	  "5327": { "code": "5327", "label": "ALOÂNDIA", "state": "GO" },
	  "5328": { "code": "5328", "label": "ALTO HORIZONTE", "state": "GO" },
	  "5329": { "code": "5329", "label": "ALTO PARAÍSO DE GOIÁS", "state": "GO" },
	  "5330": { "code": "5330", "label": "ALVORADA DO NORTE", "state": "GO" },
	  "5331": { "code": "5331", "label": "AMARALINA", "state": "GO" },
	  "5332": { "code": "5332", "label": "AMERICANO DO BRASIL", "state": "GO" },
	  "5333": { "code": "5333", "label": "AMORINÓPOLIS", "state": "GO" },
	  "5334": { "code": "5334", "label": "ANÁPOLIS", "state": "GO" },
	  "5335": { "code": "5335", "label": "ANHANGUERA", "state": "GO" },
	  "5336": { "code": "5336", "label": "ANICUNS", "state": "GO" },
	  "5337": { "code": "5337", "label": "APARECIDA DE GOIÂNIA", "state": "GO" },
	  "5338": { "code": "5338", "label": "APARECIDA DO RIO DOCE", "state": "GO" },
	  "5339": { "code": "5339", "label": "APORÉ", "state": "GO" },
	  "5340": { "code": "5340", "label": "ARAÇU", "state": "GO" },
	  "5341": { "code": "5341", "label": "ARAGARÇAS", "state": "GO" },
	  "5342": { "code": "5342", "label": "ARAGOIÂNIA", "state": "GO" },
	  "5343": { "code": "5343", "label": "ARAGUAPAZ", "state": "GO" },
	  "5344": { "code": "5344", "label": "ARENÓPOLIS", "state": "GO" },
	  "5345": { "code": "5345", "label": "ARUANÃ", "state": "GO" },
	  "5346": { "code": "5346", "label": "AURILÂNDIA", "state": "GO" },
	  "5347": { "code": "5347", "label": "AVELINÓPOLIS", "state": "GO" },
	  "5348": { "code": "5348", "label": "BALIZA", "state": "GO" },
	  "5349": { "code": "5349", "label": "BARRO ALTO", "state": "GO" },
	  "5350": { "code": "5350", "label": "BELA VISTA DE GOIÁS", "state": "GO" },
	  "5351": { "code": "5351", "label": "BOM JARDIM DE GOIÁS", "state": "GO" },
	  "5352": { "code": "5352", "label": "BOM JESUS DE GOIÁS", "state": "GO" },
	  "5353": { "code": "5353", "label": "BONFINÓPOLIS", "state": "GO" },
	  "5354": { "code": "5354", "label": "BONÓPOLIS", "state": "GO" },
	  "5355": { "code": "5355", "label": "BRAZABRANTES", "state": "GO" },
	  "5356": { "code": "5356", "label": "BRITÂNIA", "state": "GO" },
	  "5357": { "code": "5357", "label": "BURITI ALEGRE", "state": "GO" },
	  "5358": { "code": "5358", "label": "BURITI DE GOIÁS", "state": "GO" },
	  "5359": { "code": "5359", "label": "BURITINÓPOLIS", "state": "GO" },
	  "5360": { "code": "5360", "label": "CABECEIRAS", "state": "GO" },
	  "5361": { "code": "5361", "label": "CACHOEIRA ALTA", "state": "GO" },
	  "5362": { "code": "5362", "label": "CACHOEIRA DE GOIÁS", "state": "GO" },
	  "5363": { "code": "5363", "label": "CACHOEIRA DOURADA", "state": "GO" },
	  "5364": { "code": "5364", "label": "CAÇU", "state": "GO" },
	  "5365": { "code": "5365", "label": "CAIAPÔNIA", "state": "GO" },
	  "5366": { "code": "5366", "label": "CALDAS NOVAS", "state": "GO" },
	  "5367": { "code": "5367", "label": "CALDAZINHA", "state": "GO" },
	  "5368": { "code": "5368", "label": "CAMPESTRE DE GOIÁS", "state": "GO" },
	  "5369": { "code": "5369", "label": "CAMPINAÇU", "state": "GO" },
	  "5370": { "code": "5370", "label": "CAMPINORTE", "state": "GO" },
	  "5371": { "code": "5371", "label": "CAMPO ALEGRE DE GOIÁS", "state": "GO" },
	  "5372": { "code": "5372", "label": "CAMPO LIMPO DE GOIÁS", "state": "GO" },
	  "5373": { "code": "5373", "label": "CAMPOS BELOS", "state": "GO" },
	  "5374": { "code": "5374", "label": "CAMPOS VERDES", "state": "GO" },
	  "5375": { "code": "5375", "label": "CARMO DO RIO VERDE", "state": "GO" },
	  "5376": { "code": "5376", "label": "CASTELÂNDIA", "state": "GO" },
	  "5377": { "code": "5377", "label": "CATALÃO", "state": "GO" },
	  "5378": { "code": "5378", "label": "CATURAÍ", "state": "GO" },
	  "5379": { "code": "5379", "label": "CAVALCANTE", "state": "GO" },
	  "5380": { "code": "5380", "label": "CERES", "state": "GO" },
	  "5381": { "code": "5381", "label": "CEZARINA", "state": "GO" },
	  "5382": { "code": "5382", "label": "CHAPADÃO DO CÉU", "state": "GO" },
	  "5383": { "code": "5383", "label": "CIDADE OCIDENTAL", "state": "GO" },
	  "5384": { "code": "5384", "label": "COCALZINHO DE GOIÁS", "state": "GO" },
	  "5385": { "code": "5385", "label": "COLINAS DO SUL", "state": "GO" },
	  "5386": { "code": "5386", "label": "CÓRREGO DO OURO", "state": "GO" },
	  "5387": { "code": "5387", "label": "CORUMBÁ DE GOIÁS", "state": "GO" },
	  "5388": { "code": "5388", "label": "CORUMBAÍBA", "state": "GO" },
	  "5389": { "code": "5389", "label": "CRISTALINA", "state": "GO" },
	  "5390": { "code": "5390", "label": "CRISTIANÓPOLIS", "state": "GO" },
	  "5391": { "code": "5391", "label": "CRIXÁS", "state": "GO" },
	  "5392": { "code": "5392", "label": "CROMÍNIA", "state": "GO" },
	  "5393": { "code": "5393", "label": "CUMARI", "state": "GO" },
	  "5394": { "code": "5394", "label": "DAMIANÓPOLIS", "state": "GO" },
	  "5395": { "code": "5395", "label": "DAMOLÂNDIA", "state": "GO" },
	  "5396": { "code": "5396", "label": "DAVINÓPOLIS", "state": "GO" },
	  "5397": { "code": "5397", "label": "DIORAMA", "state": "GO" },
	  "5398": { "code": "5398", "label": "DOVERLÂNDIA", "state": "GO" },
	  "5399": { "code": "5399", "label": "EDEALINA", "state": "GO" },
	  "5400": { "code": "5400", "label": "EDÉIA", "state": "GO" },
	  "5401": { "code": "5401", "label": "ESTRELA DO NORTE", "state": "GO" },
	  "5402": { "code": "5402", "label": "FAINA", "state": "GO" },
	  "5403": { "code": "5403", "label": "FAZENDA NOVA", "state": "GO" },
	  "5404": { "code": "5404", "label": "FIRMINÓPOLIS", "state": "GO" },
	  "5405": { "code": "5405", "label": "FLORES DE GOIÁS", "state": "GO" },
	  "5406": { "code": "5406", "label": "FORMOSA", "state": "GO" },
	  "5407": { "code": "5407", "label": "FORMOSO", "state": "GO" },
	  "5408": { "code": "5408", "label": "GAMELEIRA DE GOIÁS", "state": "GO" },
	  "5409": { "code": "5409", "label": "DIVINÓPOLIS DE GOIÁS", "state": "GO" },
	  "5410": { "code": "5410", "label": "GOIANÁPOLIS", "state": "GO" },
	  "5411": { "code": "5411", "label": "GOIANDIRA", "state": "GO" },
	  "5412": { "code": "5412", "label": "GOIANÉSIA", "state": "GO" },
	  "5413": { "code": "5413", "label": "GOIÂNIA", "state": "GO" },
	  "5414": { "code": "5414", "label": "GOIANIRA", "state": "GO" },
	  "5415": { "code": "5415", "label": "GOIÁS", "state": "GO" },
	  "5416": { "code": "5416", "label": "GOIATUBA", "state": "GO" },
	  "5417": { "code": "5417", "label": "GOUVELÂNDIA", "state": "GO" },
	  "5418": { "code": "5418", "label": "GUAPÓ", "state": "GO" },
	  "5419": { "code": "5419", "label": "GUARAÍTA", "state": "GO" },
	  "5420": { "code": "5420", "label": "GUARANI DE GOIÁS", "state": "GO" },
	  "5421": { "code": "5421", "label": "GUARINOS", "state": "GO" },
	  "5422": { "code": "5422", "label": "HEITORAÍ", "state": "GO" },
	  "5423": { "code": "5423", "label": "HIDROLÂNDIA", "state": "GO" },
	  "5424": { "code": "5424", "label": "HIDROLINA", "state": "GO" },
	  "5425": { "code": "5425", "label": "IACIARA", "state": "GO" },
	  "5426": { "code": "5426", "label": "INACIOLÂNDIA", "state": "GO" },
	  "5427": { "code": "5427", "label": "INDIARA", "state": "GO" },
	  "5428": { "code": "5428", "label": "INHUMAS", "state": "GO" },
	  "5429": { "code": "5429", "label": "IPAMERI", "state": "GO" },
	  "5430": { "code": "5430", "label": "IPIRANGA DE GOIÁS", "state": "GO" },
	  "5431": { "code": "5431", "label": "IPORÁ", "state": "GO" },
	  "5432": { "code": "5432", "label": "ISRAELÂNDIA", "state": "GO" },
	  "5433": { "code": "5433", "label": "ITABERAÍ", "state": "GO" },
	  "5434": { "code": "5434", "label": "ITAGUARI", "state": "GO" },
	  "5435": { "code": "5435", "label": "ITAGUARU", "state": "GO" },
	  "5436": { "code": "5436", "label": "ITAJÁ", "state": "GO" },
	  "5437": { "code": "5437", "label": "ITAPACI", "state": "GO" },
	  "5438": { "code": "5438", "label": "ITAPIRAPUÃ", "state": "GO" },
	  "5439": { "code": "5439", "label": "ITAPURANGA", "state": "GO" },
	  "5440": { "code": "5440", "label": "ITARUMÃ", "state": "GO" },
	  "5441": { "code": "5441", "label": "ITAUÇU", "state": "GO" },
	  "5442": { "code": "5442", "label": "ITUMBIARA", "state": "GO" },
	  "5443": { "code": "5443", "label": "IVOLÂNDIA", "state": "GO" },
	  "5444": { "code": "5444", "label": "JANDAIA", "state": "GO" },
	  "5445": { "code": "5445", "label": "JARAGUÁ", "state": "GO" },
	  "5446": { "code": "5446", "label": "JATAÍ", "state": "GO" },
	  "5447": { "code": "5447", "label": "JAUPACI", "state": "GO" },
	  "5448": { "code": "5448", "label": "JESÚPOLIS", "state": "GO" },
	  "5449": { "code": "5449", "label": "JOVIÂNIA", "state": "GO" },
	  "5450": { "code": "5450", "label": "JUSSARA", "state": "GO" },
	  "5451": { "code": "5451", "label": "LAGOA SANTA", "state": "GO" },
	  "5452": { "code": "5452", "label": "LEOPOLDO DE BULHÕES", "state": "GO" },
	  "5453": { "code": "5453", "label": "LUZIÂNIA", "state": "GO" },
	  "5454": { "code": "5454", "label": "MAIRIPOTABA", "state": "GO" },
	  "5455": { "code": "5455", "label": "MAMBAÍ", "state": "GO" },
	  "5456": { "code": "5456", "label": "MARA ROSA", "state": "GO" },
	  "5457": { "code": "5457", "label": "MARZAGÃO", "state": "GO" },
	  "5458": { "code": "5458", "label": "MATRINCHÃ", "state": "GO" },
	  "5459": { "code": "5459", "label": "MAURILÂNDIA", "state": "GO" },
	  "5460": { "code": "5460", "label": "MIMOSO DE GOIÁS", "state": "GO" },
	  "5461": { "code": "5461", "label": "MINAÇU", "state": "GO" },
	  "5462": { "code": "5462", "label": "MINEIROS", "state": "GO" },
	  "5463": { "code": "5463", "label": "MOIPORÁ", "state": "GO" },
	  "5464": { "code": "5464", "label": "MONTE ALEGRE DE GOIÁS", "state": "GO" },
	  "5465": { "code": "5465", "label": "MONTES CLAROS DE GOIÁS", "state": "GO" },
	  "5466": { "code": "5466", "label": "MONTIVIDIU", "state": "GO" },
	  "5467": { "code": "5467", "label": "MONTIVIDIU DO NORTE", "state": "GO" },
	  "5468": { "code": "5468", "label": "MORRINHOS", "state": "GO" },
	  "5469": { "code": "5469", "label": "MORRO AGUDO DE GOIÁS", "state": "GO" },
	  "5470": { "code": "5470", "label": "MOSSÂMEDES", "state": "GO" },
	  "5471": { "code": "5471", "label": "MOZARLÂNDIA", "state": "GO" },
	  "5472": { "code": "5472", "label": "MUNDO NOVO", "state": "GO" },
	  "5473": { "code": "5473", "label": "MUTUNÓPOLIS", "state": "GO" },
	  "5474": { "code": "5474", "label": "NAZÁRIO", "state": "GO" },
	  "5475": { "code": "5475", "label": "NERÓPOLIS", "state": "GO" },
	  "5476": { "code": "5476", "label": "NIQUELÂNDIA", "state": "GO" },
	  "5477": { "code": "5477", "label": "NOVA AMÉRICA", "state": "GO" },
	  "5478": { "code": "5478", "label": "NOVA AURORA", "state": "GO" },
	  "5479": { "code": "5479", "label": "NOVA CRIXÁS", "state": "GO" },
	  "5480": { "code": "5480", "label": "NOVA GLÓRIA", "state": "GO" },
	  "5481": { "code": "5481", "label": "NOVA IGUAÇU DE GOIÁS", "state": "GO" },
	  "5482": { "code": "5482", "label": "NOVA ROMA", "state": "GO" },
	  "5483": { "code": "5483", "label": "NOVA VENEZA", "state": "GO" },
	  "5484": { "code": "5484", "label": "NOVO BRASIL", "state": "GO" },
	  "5485": { "code": "5485", "label": "NOVO GAMA", "state": "GO" },
	  "5486": { "code": "5486", "label": "NOVO PLANALTO", "state": "GO" },
	  "5487": { "code": "5487", "label": "ORIZONA", "state": "GO" },
	  "5488": { "code": "5488", "label": "OURO VERDE DE GOIÁS", "state": "GO" },
	  "5489": { "code": "5489", "label": "OUVIDOR", "state": "GO" },
	  "5490": { "code": "5490", "label": "PADRE BERNARDO", "state": "GO" },
	  "5491": { "code": "5491", "label": "PALESTINA DE GOIÁS", "state": "GO" },
	  "5492": { "code": "5492", "label": "PALMEIRAS DE GOIÁS", "state": "GO" },
	  "5493": { "code": "5493", "label": "PALMELO", "state": "GO" },
	  "5494": { "code": "5494", "label": "PALMINÓPOLIS", "state": "GO" },
	  "5495": { "code": "5495", "label": "PANAMÁ", "state": "GO" },
	  "5496": { "code": "5496", "label": "PARANAIGUARA", "state": "GO" },
	  "5497": { "code": "5497", "label": "PARAÚNA", "state": "GO" },
	  "5498": { "code": "5498", "label": "PEROLÂNDIA", "state": "GO" },
	  "5499": { "code": "5499", "label": "PETROLINA DE GOIÁS", "state": "GO" },
	  "5500": { "code": "5500", "label": "PILAR DE GOIÁS", "state": "GO" },
	  "5501": { "code": "5501", "label": "PIRACANJUBA", "state": "GO" },
	  "5502": { "code": "5502", "label": "PIRANHAS", "state": "GO" },
	  "5503": { "code": "5503", "label": "PIRENÓPOLIS", "state": "GO" },
	  "5504": { "code": "5504", "label": "PIRES DO RIO", "state": "GO" },
	  "5505": { "code": "5505", "label": "PLANALTINA", "state": "GO" },
	  "5506": { "code": "5506", "label": "PONTALINA", "state": "GO" },
	  "5507": { "code": "5507", "label": "PORANGATU", "state": "GO" },
	  "5508": { "code": "5508", "label": "PORTEIRÃO", "state": "GO" },
	  "5509": { "code": "5509", "label": "PORTELÂNDIA", "state": "GO" },
	  "5510": { "code": "5510", "label": "POSSE", "state": "GO" },
	  "5511": { "code": "5511", "label": "PROFESSOR JAMIL", "state": "GO" },
	  "5512": { "code": "5512", "label": "QUIRINÓPOLIS", "state": "GO" },
	  "5513": { "code": "5513", "label": "RIALMA", "state": "GO" },
	  "5514": { "code": "5514", "label": "RIANÁPOLIS", "state": "GO" },
	  "5515": { "code": "5515", "label": "RIO QUENTE", "state": "GO" },
	  "5516": { "code": "5516", "label": "RIO VERDE", "state": "GO" },
	  "5517": { "code": "5517", "label": "RUBIATABA", "state": "GO" },
	  "5518": { "code": "5518", "label": "SANCLERLÂNDIA", "state": "GO" },
	  "5519": { "code": "5519", "label": "SANTA BÁRBARA DE GOIÁS", "state": "GO" },
	  "5520": { "code": "5520", "label": "SANTA CRUZ DE GOIÁS", "state": "GO" },
	  "5521": { "code": "5521", "label": "SANTA FÉ DE GOIÁS", "state": "GO" },
	  "5522": { "code": "5522", "label": "SANTA HELENA DE GOIÁS", "state": "GO" },
	  "5523": { "code": "5523", "label": "SANTA ISABEL", "state": "GO" },
	  "5524": { "code": "5524", "label": "SANTA RITA DO ARAGUAIA", "state": "GO" },
	  "5525": { "code": "5525", "label": "SANTA RITA DO NOVO DESTINO", "state": "GO" },
	  "5526": { "code": "5526", "label": "SANTA ROSA DE GOIÁS", "state": "GO" },
	  "5527": { "code": "5527", "label": "SANTA TEREZA DE GOIÁS", "state": "GO" },
	  "5528": { "code": "5528", "label": "SANTA TEREZINHA DE GOIÁS", "state": "GO" },
	  "5529": { "code": "5529", "label": "SANTO ANTÔNIO DA BARRA", "state": "GO" },
	  "5530": { "code": "5530", "label": "SANTO ANTÔNIO DE GOIÁS", "state": "GO" },
	  "5531": { "code": "5531", "label": "SANTO ANTÔNIO DO DESCOBERTO", "state": "GO" },
	  "5532": { "code": "5532", "label": "SÃO DOMINGOS", "state": "GO" },
	  "5533": { "code": "5533", "label": "SÃO FRANCISCO DE GOIÁS", "state": "GO" },
	  "5534": { "code": "5534", "label": "SÃO JOÃO D'ALIANÇA", "state": "GO" },
	  "5535": { "code": "5535", "label": "SÃO JOÃO DA PARAÚNA", "state": "GO" },
	  "5536": { "code": "5536", "label": "SÃO LUÍS DE MONTES BELOS", "state": "GO" },
	  "5537": { "code": "5537", "label": "SÃO LUÍZ DO NORTE", "state": "GO" },
	  "5538": { "code": "5538", "label": "SÃO MIGUEL DO ARAGUAIA", "state": "GO" },
	  "5539": { "code": "5539", "label": "SÃO MIGUEL DO PASSA QUATRO", "state": "GO" },
	  "5540": { "code": "5540", "label": "SÃO PATRÍCIO", "state": "GO" },
	  "5541": { "code": "5541", "label": "SÃO SIMÃO", "state": "GO" },
	  "5542": { "code": "5542", "label": "SENADOR CANEDO", "state": "GO" },
	  "5543": { "code": "5543", "label": "SERRANÓPOLIS", "state": "GO" },
	  "5544": { "code": "5544", "label": "SILVÂNIA", "state": "GO" },
	  "5545": { "code": "5545", "label": "SIMOLÂNDIA", "state": "GO" },
	  "5546": { "code": "5546", "label": "SÍTIO D'ABADIA", "state": "GO" },
	  "5547": { "code": "5547", "label": "TAQUARAL DE GOIÁS", "state": "GO" },
	  "5548": { "code": "5548", "label": "TERESINA DE GOIÁS", "state": "GO" },
	  "5549": { "code": "5549", "label": "TEREZÓPOLIS DE GOIÁS", "state": "GO" },
	  "5550": { "code": "5550", "label": "TRÊS RANCHOS", "state": "GO" },
	  "5551": { "code": "5551", "label": "TRINDADE", "state": "GO" },
	  "5552": { "code": "5552", "label": "TROMBAS", "state": "GO" },
	  "5553": { "code": "5553", "label": "TURVÂNIA", "state": "GO" },
	  "5554": { "code": "5554", "label": "TURVELÂNDIA", "state": "GO" },
	  "5555": { "code": "5555", "label": "UIRAPURU", "state": "GO" },
	  "5556": { "code": "5556", "label": "URUAÇU", "state": "GO" },
	  "5557": { "code": "5557", "label": "URUANA", "state": "GO" },
	  "5558": { "code": "5558", "label": "URUTAÍ", "state": "GO" },
	  "5559": { "code": "5559", "label": "VALPARAÍSO DE GOIÁS", "state": "GO" },
	  "5560": { "code": "5560", "label": "VARJÃO", "state": "GO" },
	  "5561": { "code": "5561", "label": "VIANÓPOLIS", "state": "GO" },
	  "5562": { "code": "5562", "label": "VICENTINÓPOLIS", "state": "GO" },
	  "5563": { "code": "5563", "label": "VILA BOA", "state": "GO" },
	  "5564": { "code": "5564", "label": "VILA PROPÍCIO", "state": "GO" },
	  "5565": { "code": "5565", "label": "BRASÍLIA", "state": "DF" }
	};

	var cities_collection = Object.keys(cities_map).map(function (key) {
	  return cities_map[key];
	});

	exports.map = cities_map;
	exports.collection = cities_collection;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var countries_map = {
	  "AF": { "code": "AF", "label": "Afeganistão" },
	  "ZA": { "code": "ZA", "label": "África do Sul" },
	  "AX": { "code": "AX", "label": "Ilhas Åland" },
	  "AL": { "code": "AL", "label": "Albânia" },
	  "DE": { "code": "DE", "label": "Alemanha" },
	  "AD": { "code": "AD", "label": "Andorra" },
	  "AO": { "code": "AO", "label": "Angola" },
	  "AI": { "code": "AI", "label": "Anguilla" },
	  "AQ": { "code": "AQ", "label": "Antártida" },
	  "AG": { "code": "AG", "label": "Antígua e Barbuda" },
	  "SA": { "code": "SA", "label": "Arábia Saudita" },
	  "DZ": { "code": "DZ", "label": "Argélia" },
	  "AR": { "code": "AR", "label": "Argentina" },
	  "AM": { "code": "AM", "label": "Armênia" },
	  "AW": { "code": "AW", "label": "Aruba" },
	  "AU": { "code": "AU", "label": "Austrália" },
	  "AT": { "code": "AT", "label": "Áustria" },
	  "AZ": { "code": "AZ", "label": "Azerbaijão" },
	  "BS": { "code": "BS", "label": "Bahamas" },
	  "BH": { "code": "BH", "label": "Bahrein" },
	  "BD": { "code": "BD", "label": "Bangladesh" },
	  "BB": { "code": "BB", "label": "Barbados" },
	  "BE": { "code": "BE", "label": "Bélgica" },
	  "BZ": { "code": "BZ", "label": "Belize" },
	  "BJ": { "code": "BJ", "label": "Benim" },
	  "BM": { "code": "BM", "label": "Bermudas" },
	  "BY": { "code": "BY", "label": "Bielorrússia" },
	  "BO": { "code": "BO", "label": "Bolívia" },
	  "BQ": { "code": "BQ", "label": "Países Baixos Caribenhos" },
	  "BA": { "code": "BA", "label": "Bósnia e Herzegovina" },
	  "BW": { "code": "BW", "label": "Botswana" },
	  "BV": { "code": "BV", "label": "Ilha Bouvet" },
	  "BR": { "code": "BR", "label": "Brasil" },
	  "BN": { "code": "BN", "label": "Brunei" },
	  "BG": { "code": "BG", "label": "Bulgária" },
	  "BF": { "code": "BF", "label": "Burkina Faso" },
	  "BI": { "code": "BI", "label": "Burundi" },
	  "BT": { "code": "BT", "label": "Butão" },
	  "CV": { "code": "CV", "label": "Cabo Verde" },
	  "KH": { "code": "KH", "label": "Camboja" },
	  "CM": { "code": "CM", "label": "Camarões" },
	  "CA": { "code": "CA", "label": "Canadá" },
	  "KY": { "code": "KY", "label": "Ilhas Cayman" },
	  "KZ": { "code": "KZ", "label": "Cazaquistão" },
	  "CF": { "code": "CF", "label": "República Centro-Africana" },
	  "TD": { "code": "TD", "label": "Chade" },
	  "CZ": { "code": "CZ", "label": "República Checa" },
	  "CL": { "code": "CL", "label": "Chile" },
	  "CN": { "code": "CN", "label": "China" },
	  "CY": { "code": "CY", "label": "Chipre" },
	  "CX": { "code": "CX", "label": "Ilha do Natal" },
	  "CC": { "code": "CC", "label": "Ilhas Cocos (Keeling)" },
	  "CO": { "code": "CO", "label": "Colômbia" },
	  "KM": { "code": "KM", "label": "Comores" },
	  "CG": { "code": "CG", "label": "República do Congo" },
	  "CD": { "code": "CD", "label": "República Democrática do Congo" },
	  "CK": { "code": "CK", "label": "Ilhas Cook" },
	  "KR": { "code": "KR", "label": "Coreia do Sul" },
	  "KP": { "code": "KP", "label": "Coreia do Norte" },
	  "CI": { "code": "CI", "label": "Costa do Marfim" },
	  "CR": { "code": "CR", "label": "Costa Rica" },
	  "HR": { "code": "HR", "label": "Croácia" },
	  "CU": { "code": "CU", "label": "Cuba" },
	  "CW": { "code": "CW", "label": "Curaçao" },
	  "DK": { "code": "DK", "label": "Dinamarca" },
	  "DJ": { "code": "DJ", "label": "Djibouti" },
	  "DM": { "code": "DM", "label": "Dominica" },
	  "DO": { "code": "DO", "label": "República Dominicana" },
	  "EG": { "code": "EG", "label": "Egito" },
	  "SV": { "code": "SV", "label": "El Salvador" },
	  "AE": { "code": "AE", "label": "Emirados Árabes Unidos" },
	  "EC": { "code": "EC", "label": "Equador" },
	  "ER": { "code": "ER", "label": "Eritreia" },
	  "SK": { "code": "SK", "label": "Eslováquia" },
	  "SI": { "code": "SI", "label": "Eslovênia" },
	  "ES": { "code": "ES", "label": "Espanha" },
	  "US": { "code": "US", "label": "Estados Unidos" },
	  "EE": { "code": "EE", "label": "Estónia" },
	  "ET": { "code": "ET", "label": "Etiópia" },
	  "FO": { "code": "FO", "label": "Ilhas Feroé" },
	  "FJ": { "code": "FJ", "label": "Fiji" },
	  "PH": { "code": "PH", "label": "Filipinas" },
	  "FI": { "code": "FI", "label": "Finlândia" },
	  "FR": { "code": "FR", "label": "França" },
	  "GA": { "code": "GA", "label": "Gabão" },
	  "GM": { "code": "GM", "label": "Gâmbia" },
	  "GH": { "code": "GH", "label": "Gana" },
	  "GE": { "code": "GE", "label": "Geórgia" },
	  "GS": { "code": "GS", "label": "Ilhas Geórgia do Sul e Sandwich do Sul" },
	  "GI": { "code": "GI", "label": "Gibraltar" },
	  "GR": { "code": "GR", "label": "Grécia" },
	  "GD": { "code": "GD", "label": "Granada" },
	  "GL": { "code": "GL", "label": "Gronelândia" },
	  "GP": { "code": "GP", "label": "Guadalupe" },
	  "GU": { "code": "GU", "label": "Guam" },
	  "GT": { "code": "GT", "label": "Guatemala" },
	  "GG": { "code": "GG", "label": "Guernsey" },
	  "GY": { "code": "GY", "label": "Guiana" },
	  "GF": { "code": "GF", "label": "Guiana Francesa" },
	  "GW": { "code": "GW", "label": "Guiné-Bissau" },
	  "GN": { "code": "GN", "label": "Guiné" },
	  "GQ": { "code": "GQ", "label": "Guiné Equatorial" },
	  "HT": { "code": "HT", "label": "Haiti" },
	  "HM": { "code": "HM", "label": "Ilha Heard e Ilhas McDonald" },
	  "HN": { "code": "HN", "label": "Honduras" },
	  "HK": { "code": "HK", "label": "Hong Kong" },
	  "HU": { "code": "HU", "label": "Hungria" },
	  "YE": { "code": "YE", "label": "Iêmen" },
	  "IN": { "code": "IN", "label": "Índia" },
	  "ID": { "code": "ID", "label": "Indonésia" },
	  "IQ": { "code": "IQ", "label": "Iraque" },
	  "IR": { "code": "IR", "label": "Irão" },
	  "IE": { "code": "IE", "label": "Irlanda" },
	  "IS": { "code": "IS", "label": "Islândia" },
	  "IL": { "code": "IL", "label": "Israel" },
	  "IT": { "code": "IT", "label": "Itália" },
	  "JM": { "code": "JM", "label": "Jamaica" },
	  "JP": { "code": "JP", "label": "Japão" },
	  "JE": { "code": "JE", "label": "Jersey" },
	  "JO": { "code": "JO", "label": "Jordânia" },
	  "KI": { "code": "KI", "label": "Kiribati" },
	  "KW": { "code": "KW", "label": "Kuwait" },
	  "LA": { "code": "LA", "label": "Laos" },
	  "LS": { "code": "LS", "label": "Lesoto" },
	  "LV": { "code": "LV", "label": "Letônia" },
	  "LB": { "code": "LB", "label": "Líbano" },
	  "LR": { "code": "LR", "label": "Libéria" },
	  "LY": { "code": "LY", "label": "Líbia" },
	  "LI": { "code": "LI", "label": "Liechtenstein" },
	  "LT": { "code": "LT", "label": "Lituânia" },
	  "LU": { "code": "LU", "label": "Luxemburgo" },
	  "MO": { "code": "MO", "label": "Macau" },
	  "MK": { "code": "MK", "label": "Macedônia" },
	  "MG": { "code": "MG", "label": "Madagáscar" },
	  "MY": { "code": "MY", "label": "Malásia" },
	  "MW": { "code": "MW", "label": "Malawi" },
	  "MV": { "code": "MV", "label": "Maldivas" },
	  "ML": { "code": "ML", "label": "Mali" },
	  "MT": { "code": "MT", "label": "Malta" },
	  "FK": { "code": "FK", "label": "Ilhas Malvinas" },
	  "IM": { "code": "IM", "label": "Ilha de Man" },
	  "MP": { "code": "MP", "label": "Marianas Setentrionais" },
	  "MA": { "code": "MA", "label": "Marrocos" },
	  "MH": { "code": "MH", "label": "Ilhas Marshall" },
	  "MQ": { "code": "MQ", "label": "Martinica" },
	  "MU": { "code": "MU", "label": "Maurícia" },
	  "MR": { "code": "MR", "label": "Mauritânia" },
	  "YT": { "code": "YT", "label": "Mayotte" },
	  "UM": { "code": "UM", "label": "Ilhas Menores Distantes dos Estados Unidos" },
	  "MX": { "code": "MX", "label": "México" },
	  "MM": { "code": "MM", "label": "Mianmar" },
	  "FM": { "code": "FM", "label": "Estados Federados da Micronésia" },
	  "MZ": { "code": "MZ", "label": "Moçambique" },
	  "MD": { "code": "MD", "label": "Moldávia" },
	  "MC": { "code": "MC", "label": "Mónaco" },
	  "MN": { "code": "MN", "label": "Mongólia" },
	  "ME": { "code": "ME", "label": "Montenegro" },
	  "MS": { "code": "MS", "label": "Montserrat" },
	  "NA": { "code": "NA", "label": "Namíbia" },
	  "NR": { "code": "NR", "label": "Nauru" },
	  "NP": { "code": "NP", "label": "Nepal" },
	  "NI": { "code": "NI", "label": "Nicarágua" },
	  "NE": { "code": "NE", "label": "Níger" },
	  "NG": { "code": "NG", "label": "Nigéria" },
	  "NU": { "code": "NU", "label": "Niue" },
	  "NF": { "code": "NF", "label": "Ilha Norfolk" },
	  "NO": { "code": "NO", "label": "Noruega" },
	  "NC": { "code": "NC", "label": "Nova Caledônia" },
	  "NZ": { "code": "NZ", "label": "Nova Zelândia" },
	  "OM": { "code": "OM", "label": "Omã" },
	  "NL": { "code": "NL", "label": "Países Baixos" },
	  "PW": { "code": "PW", "label": "Palau" },
	  "PS": { "code": "PS", "label": "Palestina" },
	  "PA": { "code": "PA", "label": "Panamá" },
	  "PG": { "code": "PG", "label": "Papua-Nova Guiné" },
	  "PK": { "code": "PK", "label": "Paquistão" },
	  "PY": { "code": "PY", "label": "Paraguai" },
	  "PE": { "code": "PE", "label": "Peru" },
	  "PN": { "code": "PN", "label": "Pitcairn" },
	  "PF": { "code": "PF", "label": "Polinésia Francesa" },
	  "PL": { "code": "PL", "label": "Polónia" },
	  "PR": { "code": "PR", "label": "Porto Rico" },
	  "PT": { "code": "PT", "label": "Portugal" },
	  "QA": { "code": "QA", "label": "Catar" },
	  "KE": { "code": "KE", "label": "Quênia" },
	  "KG": { "code": "KG", "label": "Quirguistão" },
	  "GB": { "code": "GB", "label": "Reino Unido" },
	  "RE": { "code": "RE", "label": "Reunião" },
	  "RO": { "code": "RO", "label": "Romênia" },
	  "RW": { "code": "RW", "label": "Ruanda" },
	  "RU": { "code": "RU", "label": "Rússia" },
	  "EH": { "code": "EH", "label": "Saara Ocidental" },
	  "AS": { "code": "AS", "label": "Samoa Americana" },
	  "WS": { "code": "WS", "label": "Samoa" },
	  "PM": { "code": "PM", "label": "Saint-Pierre e Miquelon" },
	  "SB": { "code": "SB", "label": "Ilhas Salomão" },
	  "SM": { "code": "SM", "label": "San Marino" },
	  "SH": { "code": "SH", "label": "Santa Helena, Ascensão e Tristão da Cunha" },
	  "LC": { "code": "LC", "label": "Santa Lúcia" },
	  "BL": { "code": "BL", "label": "São Bartolomeu" },
	  "KN": { "code": "KN", "label": "São Cristóvão e Nevis" },
	  "SX": { "code": "SX", "label": "Sint Maarten" },
	  "MF": { "code": "MF", "label": "São Martinho" },
	  "ST": { "code": "ST", "label": "São Tomé e Príncipe" },
	  "VC": { "code": "VC", "label": "São Vicente e Granadinas" },
	  "SN": { "code": "SN", "label": "Senegal" },
	  "SL": { "code": "SL", "label": "Serra Leoa" },
	  "RS": { "code": "RS", "label": "Sérvia" },
	  "SC": { "code": "SC", "label": "Seicheles" },
	  "SG": { "code": "SG", "label": "Singapura" },
	  "SY": { "code": "SY", "label": "Síria" },
	  "SO": { "code": "SO", "label": "Somália" },
	  "LK": { "code": "LK", "label": "Sri Lanka" },
	  "SZ": { "code": "SZ", "label": "Suazilândia" },
	  "SD": { "code": "SD", "label": "Sudão" },
	  "SS": { "code": "SS", "label": "Sudão do Sul" },
	  "SE": { "code": "SE", "label": "Suécia" },
	  "CH": { "code": "CH", "label": "Suíça" },
	  "SR": { "code": "SR", "label": "Suriname" },
	  "SJ": { "code": "SJ", "label": "Svalbard e Jan Mayen" },
	  "TH": { "code": "TH", "label": "Tailândia" },
	  "TW": { "code": "TW", "label": "Taiwan" },
	  "TJ": { "code": "TJ", "label": "Tajiquistão" },
	  "TZ": { "code": "TZ", "label": "Tanzânia" },
	  "TF": { "code": "TF", "label": "Terras Austrais e Antárticas Francesas" },
	  "IO": { "code": "IO", "label": "Território Britânico do Oceano Índico" },
	  "TL": { "code": "TL", "label": "Timor-Leste" },
	  "TG": { "code": "TG", "label": "Togo" },
	  "TK": { "code": "TK", "label": "Toquelau" },
	  "TO": { "code": "TO", "label": "Tonga" },
	  "TT": { "code": "TT", "label": "Trinidad e Tobago" },
	  "TN": { "code": "TN", "label": "Tunísia" },
	  "TC": { "code": "TC", "label": "Turks e Caicos" },
	  "TM": { "code": "TM", "label": "Turquemenistão" },
	  "TR": { "code": "TR", "label": "Turquia" },
	  "TV": { "code": "TV", "label": "Tuvalu" },
	  "UA": { "code": "UA", "label": "Ucrânia" },
	  "UG": { "code": "UG", "label": "Uganda" },
	  "UY": { "code": "UY", "label": "Uruguai" },
	  "UZ": { "code": "UZ", "label": "Uzbequistão" },
	  "VU": { "code": "VU", "label": "Vanuatu" },
	  "VA": { "code": "VA", "label": "Vaticano" },
	  "VE": { "code": "VE", "label": "Venezuela" },
	  "VN": { "code": "VN", "label": "Vietnã" },
	  "VI": { "code": "VI", "label": "Ilhas Virgens Americanas" },
	  "VG": { "code": "VG", "label": "Ilhas Virgens Britânicas" },
	  "WF": { "code": "WF", "label": "Wallis e Futuna" },
	  "ZM": { "code": "ZM", "label": "Zâmbia" },
	  "ZW": { "code": "ZW", "label": "Zimbabwe" }
	};

	var countries_collection = Object.keys(countries_map).map(function (key) {
	  return countries_map[key];
	});

	exports.map = countries_map;
	exports.collection = countries_collection;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var disabilities = {
	  'PHY': { code: 'PHY', label: "Física" },
	  'VIS': { code: 'VIS', label: "Visual" },
	  'AUD': { code: 'AUD', label: "Auditiva" },
	  'INT': { code: 'INT', label: "Intelectual" },
	  'OTH': { code: 'OTH', label: "Outros (Especifique)" }
	};

	var disabilities_collection = Object.keys(disabilities).map(function (key) {
	  return disabilities[key];
	});

	exports.map = disabilities;
	exports.collection = disabilities_collection;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var employment_type_map = {
	  'FT': { code: 'FT', label: "Período Integral" },
	  'PT': { code: 'PT', label: "Meio Período" },
	  'CO': { code: 'CO', label: "Contratado" },
	  'TE': { code: 'TE', label: "Temporário" },
	  'VO': { code: 'VO', label: "Voluntário" },
	  'TR': { code: 'TR', label: "Trainee" },
	  'TC': { code: 'TC', label: "Terceiro" },
	  'RE': { code: 'RE', label: "Aposentado" },
	  'SE': { code: 'SE', label: "Autônamo" },
	  'FO': { code: 'FO', label: "Estrangeiro" },
	  'OT': { code: 'OT', label: "Outros" }
	};

	var employment_type_legal_map = {
	  'MA': { code: 'MA', label: "Menor Aprendiz" },
	  'ES': { code: 'ES', label: "Estágio" },
	  'CL': { code: 'CL', label: "CLT" },
	  'PJ': { code: 'PJ', label: "PJ" },
	  'SO': { code: 'SO', label: "Societário" },
	  'ET': { code: 'ES', label: "Estatuário" },
	  'CF': { code: 'CF', label: "CLT - Flex" }
	};

	var employment_type_collection = Object.keys(employment_type_map).map(function (key) {
	  return employment_type_map[key];
	});

	var employment_type_legal_collection = Object.keys(employment_type_legal_map).map(function (key) {
	  return employment_type_legal_map[key];
	});

	var employment_type = {
	  map: employment_type_map,
	  collection: employment_type_collection
	};

	var employment_type_legal = {
	  map: employment_type_legal_map,
	  collection: employment_type_legal_collection
	};

	exports.employment_type = employment_type;
	exports.employment_type_legal = employment_type_legal;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var marital_status_map = {
	  'MA': { code: "MA", label: "Casado" },
	  'WI': { code: "WI", label: "Viuvo" },
	  'SE': { code: "SE", label: "Separado" },
	  'DI': { code: "DI", label: "Divorciado" },
	  'SI': { code: "SI", label: "Solteiro" }
	};

	var marital_status_collection = Object.keys(marital_status_map).map(function (key) {
	  return marital_status_map[key];
	});

	var gender_map = {
	  'M': { code: "M", label: "Masculino" },
	  'W': { code: "W", label: "Feminino" }
	};

	var gender_collection = Object.keys(gender_map).map(function (key) {
	  return gender_map[key];
	});

	var education_level_map = {
	  'UNS': { code: 'UNS', label: "Não Específico" },
	  'HSE': { code: 'HSE', label: "Ensino Médio" },
	  'CRT': { code: 'CRT', label: "Certificação" },
	  'VOC': { code: 'VOC', label: "Técnico" },
	  'ASD': { code: 'ASD', label: "Associate Degree (US ONLY)" },
	  'BAD': { code: 'BAD', label: "Bacharelado" },
	  'MAD': { code: 'MAD', label: "Mestrado ou MBA" },
	  'DOC': { code: 'DOC', label: "Doutorado ou PHd" },
	  'PRF': { code: 'PRF', label: "Professional (US Only)" },
	  'SCC': { code: 'SCC', label: "Especialização" },
	  'VDE': { code: 'VDE', label: "Ensino Médio Técnico" },
	  'VHS': { code: 'VHS', label: "Curso Profissionalizante" },
	  'SHC': { code: 'SHC', label: "Ensino Básico" }
	};

	var education_level_collection = Object.keys(education_level_map).map(function (key) {
	  return education_level_map[key];
	});

	var seniority_level_map = {
	  'UP': { code: 'UP', label: "Voluntário" },
	  'IN': { code: 'IN', label: "Estagiário" },
	  'TR': { code: 'TR', label: "Trainee" },
	  'EN': { code: 'EN', label: "Pleno" },
	  'IC': { code: 'IC', label: "Senior" },
	  'M': { code: 'M', label: "Gerente" },
	  'D': { code: 'D', label: "Diretor" },
	  'VP': { code: 'VP', label: "Vice Presidente" },
	  'P': { code: 'P', label: "Sócio" },
	  'O': { code: 'O', label: "Proprietário" },
	  'BM': { code: 'BM', label: "Membro Conselho" }
	};

	var seniority_level_collection = Object.keys(seniority_level_map).map(function (key) {
	  return seniority_level_map[key];
	});

	var document_types_map = {
	  'NRG': { code: 'rg', label: "RG" },
	  'CPF': { code: 'cpf', label: "CPF" },
	  'CAM': { code: 'cam', label: "Alistamento Militar" },
	  'PAS': { code: 'passport', label: "Passaporte" }
	};

	var document_types_collection = Object.keys(document_types_map).map(function (key) {
	  return document_types_map[key];
	});

	var marital_status = {
	  map: marital_status_map,
	  collection: marital_status_collection
	};

	var gender = {
	  map: gender_map,
	  collection: gender_collection
	};

	var education_level = {
	  map: education_level_map,
	  collection: education_level_collection
	};

	var seniority_level = {
	  map: seniority_level_map,
	  collection: seniority_level_collection
	};

	var document_types = {
	  map: document_types_map,
	  collection: document_types_collection
	};

	exports.marital_status = marital_status;
	exports.gender = gender;
	exports.education_level = education_level;
	exports.seniority_level = seniority_level;
	exports.document_types = document_types;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replaceSelectOptions = replaceSelectOptions;

	var _uniqBy = __webpack_require__(19);

	var _uniqBy2 = _interopRequireDefault(_uniqBy);

	var _axios = __webpack_require__(144);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var s3Request = _axios2.default.create({
	  baseURL: 'http://public.static.bigland.co.s3-website-sa-east-1.amazonaws.com'
	});

	var getDOMDataAttribute = function getDOMDataAttribute(node, attr) {
	  return node.getAttribute('data-' + attr);
	};

	var getOptionsHTML = function getOptionsHTML(collection) {
	  return collection.map(function (item) {
	    item.label = item.label.toLowerCase();
	    return item;
	  }).sort(function (a, b) {
	    return a.label > b.label ? 1 : -1;
	  }).reduce(function (html, _ref) {
	    var code = _ref.code,
	        label = _ref.label;
	    return html += '\n<option value="' + code + '">' + label + '</option>';
	  }, '<option value="">Selecione</option>');
	};

	var collectionsFutures = {};
	var getCollectionFuture = function getCollectionFuture(_ref2) {
	  var fetch = _ref2.fetch,
	      filter_value = _ref2.filter_value,
	      collection = _ref2.collection;


	  if (!fetch || !filter_value) return Promise.resolve(collection);

	  var path = '/' + fetch + '/' + filter_value + '.json';

	  if (collectionsFutures[path]) return collectionsFutures[path];

	  return collectionsFutures[path] = s3Request.get(path).then(function (res) {
	    return res.data;
	  }).catch(function (err) {
	    return [];
	  });
	};

	function replaceSelectOptions(collection, _ref3) {
	  var query = _ref3.query,
	      _ref3$attach_events = _ref3.attach_events,
	      attach_events = _ref3$attach_events === undefined ? true : _ref3$attach_events;


	  var original_collection = collection;
	  var nodes = document.querySelectorAll(query);

	  [].forEach.call(nodes, function (node) {

	    if (node.nodeName === 'SELECT') {

	      var fetch = getDOMDataAttribute(node, 'fetch');
	      var filter_attr = getDOMDataAttribute(node, 'filter-by');
	      var filter_query = getDOMDataAttribute(node, 'filter-from');

	      var filter_node = filter_query && document.querySelector(filter_query);
	      var filter_value = filter_node && filter_node.value;

	      var collection_future = getCollectionFuture({ fetch: fetch, filter_value: filter_value, collection: collection });

	      collection_future.then(function (collection) {

	        collection = (0, _uniqBy2.default)(collection, 'label');

	        if (filter_query && filter_attr) {
	          collection = collection.filter(function (item) {
	            return item[filter_attr] === filter_value;
	          });
	        }

	        if (filter_node && attach_events) {
	          filter_node.addEventListener('change', function () {
	            replaceSelectOptions(original_collection, { query: query, attach_events: false });
	          });
	        }

	        node.innerHTML = getOptionsHTML(collection);

	        if (true) {

	          if (node.selectize) {
	            node.selectize.clearOptions();
	            node.selectize.load(function (callback) {
	              return callback(collection);
	            });
	          } else {
	            $(node).selectize({
	              create: true,
	              valueField: 'code',
	              labelField: 'label',
	              searchField: ['label'],
	              onChange: function onChange() {
	                return node.dispatchEvent(new Event('change'));
	              }
	            });
	          }
	        };
	      }).catch(function (err) {});
	    }
	  });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIteratee = __webpack_require__(20),
	    baseUniq = __webpack_require__(135);

	function uniqBy(array, iteratee) {
	  return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
	}

	module.exports = uniqBy;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var baseMatches = __webpack_require__(21),
	    baseMatchesProperty = __webpack_require__(115),
	    identity = __webpack_require__(131),
	    isArray = __webpack_require__(83),
	    property = __webpack_require__(132);

	function baseIteratee(value) {
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
	    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsMatch = __webpack_require__(22),
	    getMatchData = __webpack_require__(112),
	    matchesStrictComparable = __webpack_require__(114);

	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function (object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stack = __webpack_require__(23),
	    baseIsEqual = __webpack_require__(67);

	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack();
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(24),
	    stackClear = __webpack_require__(32),
	    stackDelete = __webpack_require__(33),
	    stackGet = __webpack_require__(34),
	    stackHas = __webpack_require__(35),
	    stackSet = __webpack_require__(36);

	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var listCacheClear = __webpack_require__(25),
	    listCacheDelete = __webpack_require__(26),
	    listCacheGet = __webpack_require__(29),
	    listCacheHas = __webpack_require__(30),
	    listCacheSet = __webpack_require__(31);

	function ListCache(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(27);

	var arrayProto = Array.prototype;

	var splice = arrayProto.splice;

	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var eq = __webpack_require__(28);

	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	module.exports = eq;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(27);

	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(27);

	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(27);

	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(24);

	function stackClear() {
	  this.__data__ = new ListCache();
	  this.size = 0;
	}

	module.exports = stackClear;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(24),
	    Map = __webpack_require__(37),
	    MapCache = __webpack_require__(52);

	var LARGE_ARRAY_SIZE = 200;

	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(38),
	    root = __webpack_require__(43);

	var Map = getNative(root, 'Map');

	module.exports = Map;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsNative = __webpack_require__(39),
	    getValue = __webpack_require__(51);

	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFunction = __webpack_require__(40),
	    isMasked = __webpack_require__(48),
	    isObject = __webpack_require__(47),
	    toSource = __webpack_require__(50);

	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	var funcToString = funcProto.toString;

	var hasOwnProperty = objectProto.hasOwnProperty;

	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGetTag = __webpack_require__(41),
	    isObject = __webpack_require__(47);

	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	function isFunction(value) {
	    if (!isObject(value)) {
	        return false;
	    }

	    var tag = baseGetTag(value);
	    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(42),
	    getRawTag = __webpack_require__(45),
	    objectToString = __webpack_require__(46);

	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	function baseGetTag(value) {
	    if (value == null) {
	        return value === undefined ? undefinedTag : nullTag;
	    }
	    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}

	module.exports = baseGetTag;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(43);

	var _Symbol = root.Symbol;

	module.exports = _Symbol;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var freeGlobal = __webpack_require__(44);

	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;

/***/ },
/* 44 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(42);

	var objectProto = Object.prototype;

	var hasOwnProperty = objectProto.hasOwnProperty;

	var nativeObjectToString = objectProto.toString;

	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

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

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	var objectProto = Object.prototype;

	var nativeObjectToString = objectProto.toString;

	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var coreJsData = __webpack_require__(49);

	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();

	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	module.exports = isMasked;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(43);

	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	var funcProto = Function.prototype;

	var funcToString = funcProto.toString;

	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";

	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mapCacheClear = __webpack_require__(53),
	    mapCacheDelete = __webpack_require__(61),
	    mapCacheGet = __webpack_require__(64),
	    mapCacheHas = __webpack_require__(65),
	    mapCacheSet = __webpack_require__(66);

	function MapCache(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Hash = __webpack_require__(54),
	    ListCache = __webpack_require__(24),
	    Map = __webpack_require__(37);

	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash(),
	    'map': new (Map || ListCache)(),
	    'string': new Hash()
	  };
	}

	module.exports = mapCacheClear;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hashClear = __webpack_require__(55),
	    hashDelete = __webpack_require__(57),
	    hashGet = __webpack_require__(58),
	    hashHas = __webpack_require__(59),
	    hashSet = __webpack_require__(60);

	function Hash(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(56);

	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(38);

	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(56);

	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	var objectProto = Object.prototype;

	var hasOwnProperty = objectProto.hasOwnProperty;

	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(56);

	var objectProto = Object.prototype;

	var hasOwnProperty = objectProto.hasOwnProperty;

	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(56);

	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(62);

	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isKeyable = __webpack_require__(63);

	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	module.exports = getMapData;

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	module.exports = isKeyable;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(62);

	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(62);

	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(62);

	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsEqualDeep = __webpack_require__(68),
	    isObjectLike = __webpack_require__(92);

	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stack = __webpack_require__(23),
	    equalArrays = __webpack_require__(69),
	    equalByTag = __webpack_require__(75),
	    equalObjects = __webpack_require__(79),
	    getTag = __webpack_require__(107),
	    isArray = __webpack_require__(83),
	    isBuffer = __webpack_require__(93),
	    isTypedArray = __webpack_require__(97);

	var COMPARE_PARTIAL_FLAG = 1;

	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	var objectProto = Object.prototype;

	var hasOwnProperty = objectProto.hasOwnProperty;

	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack());
	    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack());
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack());
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SetCache = __webpack_require__(70),
	    arraySome = __webpack_require__(73),
	    cacheHas = __webpack_require__(74);

	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }

	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }

	    if (seen) {
	      if (!arraySome(other, function (othValue, othIndex) {
	        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	          return seen.push(othIndex);
	        }
	      })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MapCache = __webpack_require__(52),
	    setCacheAdd = __webpack_require__(71),
	    setCacheHas = __webpack_require__(72);

	function SetCache(values) {
	    var index = -1,
	        length = values == null ? 0 : values.length;

	    this.__data__ = new MapCache();
	    while (++index < length) {
	        this.add(values[index]);
	    }
	}

	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;

/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';

	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";

	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";

	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(42),
	    Uint8Array = __webpack_require__(76),
	    eq = __webpack_require__(28),
	    equalArrays = __webpack_require__(69),
	    mapToArray = __webpack_require__(77),
	    setToArray = __webpack_require__(78);

	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      return object == other + '';

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }

	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(43);

	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getAllKeys = __webpack_require__(80);

	var COMPARE_PARTIAL_FLAG = 1;

	var objectProto = Object.prototype;

	var hasOwnProperty = objectProto.hasOwnProperty;

	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }

	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
	    }

	    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGetAllKeys = __webpack_require__(81),
	    getSymbols = __webpack_require__(84),
	    keys = __webpack_require__(87);

	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayPush = __webpack_require__(82),
	    isArray = __webpack_require__(83);

	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;

/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";

	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";

	var isArray = Array.isArray;

	module.exports = isArray;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayFilter = __webpack_require__(85),
	    stubArray = __webpack_require__(86);

	var objectProto = Object.prototype;

	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	var nativeGetSymbols = Object.getOwnPropertySymbols;

	var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function (symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;

/***/ },
/* 85 */
/***/ function(module, exports) {

	"use strict";

	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;

/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";

	function stubArray() {
	  return [];
	}

	module.exports = stubArray;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayLikeKeys = __webpack_require__(88),
	    baseKeys = __webpack_require__(102),
	    isArrayLike = __webpack_require__(106);

	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseTimes = __webpack_require__(89),
	    isArguments = __webpack_require__(90),
	    isArray = __webpack_require__(83),
	    isBuffer = __webpack_require__(93),
	    isIndex = __webpack_require__(96),
	    isTypedArray = __webpack_require__(97);

	var objectProto = Object.prototype;

	var hasOwnProperty = objectProto.hasOwnProperty;

	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;

/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";

	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsArguments = __webpack_require__(91),
	    isObjectLike = __webpack_require__(92);

	var objectProto = Object.prototype;

	var hasOwnProperty = objectProto.hasOwnProperty;

	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	var isArguments = baseIsArguments(function () {
	    return arguments;
	}()) ? baseIsArguments : function (value) {
	    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGetTag = __webpack_require__(41),
	    isObjectLike = __webpack_require__(92);

	var argsTag = '[object Arguments]';

	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function isObjectLike(value) {
	  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	module.exports = isObjectLike;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var root = __webpack_require__(43),
	    stubFalse = __webpack_require__(95);

	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

	var moduleExports = freeModule && freeModule.exports === freeExports;

	var Buffer = moduleExports ? root.Buffer : undefined;

	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)(module)))

/***/ },
/* 94 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];

			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	"use strict";

	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';

	var MAX_SAFE_INTEGER = 9007199254740991;

	var reIsUint = /^(?:0|[1-9]\d*)$/;

	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsTypedArray = __webpack_require__(98),
	    baseUnary = __webpack_require__(100),
	    nodeUtil = __webpack_require__(101);

	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGetTag = __webpack_require__(41),
	    isLength = __webpack_require__(99),
	    isObjectLike = __webpack_require__(92);

	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	function baseIsTypedArray(value) {
	    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';

	var MAX_SAFE_INTEGER = 9007199254740991;

	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;

/***/ },
/* 100 */
/***/ function(module, exports) {

	"use strict";

	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var freeGlobal = __webpack_require__(44);

	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

	var moduleExports = freeModule && freeModule.exports === freeExports;

	var freeProcess = moduleExports && freeGlobal.process;

	var nodeUtil = function () {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}();

	module.exports = nodeUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)(module)))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isPrototype = __webpack_require__(103),
	    nativeKeys = __webpack_require__(104);

	var objectProto = Object.prototype;

	var hasOwnProperty = objectProto.hasOwnProperty;

	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';

	var objectProto = Object.prototype;

	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var overArg = __webpack_require__(105);

	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;

/***/ },
/* 105 */
/***/ function(module, exports) {

	"use strict";

	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFunction = __webpack_require__(40),
	    isLength = __webpack_require__(99);

	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var DataView = __webpack_require__(108),
	    Map = __webpack_require__(37),
	    Promise = __webpack_require__(109),
	    Set = __webpack_require__(110),
	    WeakMap = __webpack_require__(111),
	    baseGetTag = __webpack_require__(41),
	    toSource = __webpack_require__(50);

	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	var getTag = baseGetTag;

	if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
	    getTag = function getTag(value) {
	        var result = baseGetTag(value),
	            Ctor = result == objectTag ? value.constructor : undefined,
	            ctorString = Ctor ? toSource(Ctor) : '';

	        if (ctorString) {
	            switch (ctorString) {
	                case dataViewCtorString:
	                    return dataViewTag;
	                case mapCtorString:
	                    return mapTag;
	                case promiseCtorString:
	                    return promiseTag;
	                case setCtorString:
	                    return setTag;
	                case weakMapCtorString:
	                    return weakMapTag;
	            }
	        }
	        return result;
	    };
	}

	module.exports = getTag;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(38),
	    root = __webpack_require__(43);

	var DataView = getNative(root, 'DataView');

	module.exports = DataView;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(38),
	    root = __webpack_require__(43);

	var Promise = getNative(root, 'Promise');

	module.exports = Promise;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(38),
	    root = __webpack_require__(43);

	var Set = getNative(root, 'Set');

	module.exports = Set;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(38),
	    root = __webpack_require__(43);

	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isStrictComparable = __webpack_require__(113),
	    keys = __webpack_require__(87);

	function getMatchData(object) {
	    var result = keys(object),
	        length = result.length;

	    while (length--) {
	        var key = result[length],
	            value = object[key];

	        result[length] = [key, value, isStrictComparable(value)];
	    }
	    return result;
	}

	module.exports = getMatchData;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(47);

	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;

/***/ },
/* 114 */
/***/ function(module, exports) {

	"use strict";

	function matchesStrictComparable(key, srcValue) {
	  return function (object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
	  };
	}

	module.exports = matchesStrictComparable;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsEqual = __webpack_require__(67),
	    get = __webpack_require__(116),
	    hasIn = __webpack_require__(128),
	    isKey = __webpack_require__(119),
	    isStrictComparable = __webpack_require__(113),
	    matchesStrictComparable = __webpack_require__(114),
	    toKey = __webpack_require__(127);

	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function (object) {
	    var objValue = get(object, path);
	    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGet = __webpack_require__(117);

	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var castPath = __webpack_require__(118),
	    toKey = __webpack_require__(127);

	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return index && index == length ? object : undefined;
	}

	module.exports = baseGet;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(83),
	    isKey = __webpack_require__(119),
	    stringToPath = __webpack_require__(121),
	    toString = __webpack_require__(124);

	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isArray = __webpack_require__(83),
	    isSymbol = __webpack_require__(120);

	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}

	module.exports = isKey;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var baseGetTag = __webpack_require__(41),
	    isObjectLike = __webpack_require__(92);

	var symbolTag = '[object Symbol]';

	function isSymbol(value) {
	    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
	}

	module.exports = isSymbol;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var memoizeCapped = __webpack_require__(122);

	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	var reEscapeChar = /\\(\\)?/g;

	var stringToPath = memoizeCapped(function (string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function (match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	});

	module.exports = stringToPath;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var memoize = __webpack_require__(123);

	var MAX_MEMOIZE_SIZE = 500;

	function memoizeCapped(func) {
	  var result = memoize(func, function (key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MapCache = __webpack_require__(52);

	var FUNC_ERROR_TEXT = 'Expected a function';

	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function memoized() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache)();
	  return memoized;
	}

	memoize.Cache = MapCache;

	module.exports = memoize;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseToString = __webpack_require__(125);

	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(42),
	    arrayMap = __webpack_require__(126),
	    isArray = __webpack_require__(83),
	    isSymbol = __webpack_require__(120);

	var INFINITY = 1 / 0;

	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	function baseToString(value) {
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	module.exports = baseToString;

/***/ },
/* 126 */
/***/ function(module, exports) {

	"use strict";

	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isSymbol = __webpack_require__(120);

	var INFINITY = 1 / 0;

	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	module.exports = toKey;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseHasIn = __webpack_require__(129),
	    hasPath = __webpack_require__(130);

	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;

/***/ },
/* 129 */
/***/ function(module, exports) {

	"use strict";

	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var castPath = __webpack_require__(118),
	    isArguments = __webpack_require__(90),
	    isArray = __webpack_require__(83),
	    isIndex = __webpack_require__(96),
	    isLength = __webpack_require__(99),
	    toKey = __webpack_require__(127);

	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;

/***/ },
/* 131 */
/***/ function(module, exports) {

	"use strict";

	function identity(value) {
	  return value;
	}

	module.exports = identity;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseProperty = __webpack_require__(133),
	    basePropertyDeep = __webpack_require__(134),
	    isKey = __webpack_require__(119),
	    toKey = __webpack_require__(127);

	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;

/***/ },
/* 133 */
/***/ function(module, exports) {

	"use strict";

	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGet = __webpack_require__(117);

	function basePropertyDeep(path) {
	  return function (object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SetCache = __webpack_require__(70),
	    arrayIncludes = __webpack_require__(136),
	    arrayIncludesWith = __webpack_require__(141),
	    cacheHas = __webpack_require__(74),
	    createSet = __webpack_require__(142),
	    setToArray = __webpack_require__(78);

	var LARGE_ARRAY_SIZE = 200;

	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  } else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache();
	  } else {
	    seen = iteratee ? [] : result;
	  }
	  outer: while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = comparator || value !== 0 ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    } else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIndexOf = __webpack_require__(137);

	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseFindIndex = __webpack_require__(138),
	    baseIsNaN = __webpack_require__(139),
	    strictIndexOf = __webpack_require__(140);

	function baseIndexOf(array, value, fromIndex) {
	    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;

/***/ },
/* 138 */
/***/ function(module, exports) {

	"use strict";

	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while (fromRight ? index-- : ++index < length) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;

/***/ },
/* 139 */
/***/ function(module, exports) {

	"use strict";

	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;

/***/ },
/* 140 */
/***/ function(module, exports) {

	"use strict";

	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;

/***/ },
/* 141 */
/***/ function(module, exports) {

	"use strict";

	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Set = __webpack_require__(110),
	    noop = __webpack_require__(143),
	    setToArray = __webpack_require__(78);

	var INFINITY = 1 / 0;

	var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {
	  return new Set(values);
	};

	module.exports = createSet;

/***/ },
/* 143 */
/***/ function(module, exports) {

	"use strict";

	function noop() {}

	module.exports = noop;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(145);

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(146);
	var bind = __webpack_require__(147);
	var Axios = __webpack_require__(148);
	var defaults = __webpack_require__(149);

	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  utils.extend(instance, Axios.prototype, context);

	  utils.extend(instance, context);

	  return instance;
	}

	var axios = createInstance(defaults);

	axios.Axios = Axios;

	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};

	axios.Cancel = __webpack_require__(166);
	axios.CancelToken = __webpack_require__(167);
	axios.isCancel = __webpack_require__(163);

	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(168);

	module.exports = axios;

	module.exports.default = axios;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var bind = __webpack_require__(147);

	var toString = Object.prototype.toString;

	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	function isFormData(val) {
	  return typeof FormData !== 'undefined' && val instanceof FormData;
	}

	function isArrayBufferView(val) {
	  var result;
	  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
	  }
	  return result;
	}

	function isString(val) {
	  return typeof val === 'string';
	}

	function isNumber(val) {
	  return typeof val === 'number';
	}

	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	function isObject(val) {
	  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
	}

	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	function isStandardBrowserEnv() {
	  return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function';
	}

	function forEach(obj, fn) {
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	function merge() {
	  var result = {};
	  function assignValue(val, key) {
	    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(149);
	var utils = __webpack_require__(146);
	var InterceptorManager = __webpack_require__(160);
	var dispatchRequest = __webpack_require__(161);
	var isAbsoluteURL = __webpack_require__(164);
	var combineURLs = __webpack_require__(165);

	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	Axios.prototype.request = function request(config) {
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  Axios.prototype[method] = function (url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  Axios.prototype[method] = function (url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	module.exports = Axios;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(146);
	var normalizeHeaderName = __webpack_require__(150);

	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    adapter = __webpack_require__(151);
	  } else if (typeof process !== 'undefined') {
	    adapter = __webpack_require__(151);
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) {}
	    }
	    return data;
	  }],

	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	module.exports = defaults;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(146);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(146);
	var settle = __webpack_require__(152);
	var buildURL = __webpack_require__(155);
	var parseHeaders = __webpack_require__(156);
	var isURLSameOrigin = __webpack_require__(157);
	var createError = __webpack_require__(153);
	var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(158);

	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type'];
	    }

	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;

	    if (("development") !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }

	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    request.timeout = config.timeout;

	    request[loadEvent] = function handleLoad() {
	      if (!request || request.readyState !== 4 && !xDomain) {
	        return;
	      }

	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,

	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      request = null;
	    };

	    request.onerror = function handleError() {
	      reject(createError('Network Error', config));

	      request = null;
	    };

	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

	      request = null;
	    };

	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(159);

	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          delete requestHeaders[key];
	        } else {
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);

	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    request.send(requestData);
	  });
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(153);

	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;

	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError('Request failed with status code ' + response.status, response.config, null, response));
	  }
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(154);

	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(146);

	function encode(val) {
	  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
	}

	module.exports = function buildURL(url, params, paramsSerializer) {
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }

	      if (!utils.isArray(val)) {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(146);

	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) {
	    return parsed;
	  }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });

	  return parsed;
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(146);

	module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
	  var msie = /(msie|trident)/i.test(navigator.userAgent);
	  var urlParsingNode = document.createElement('a');
	  var originURL;

	  function resolveURL(url) {
	    var href = url;

	    if (msie) {
	      urlParsingNode.setAttribute('href', href);
	      href = urlParsingNode.href;
	    }

	    urlParsingNode.setAttribute('href', href);

	    return {
	      href: urlParsingNode.href,
	      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	      host: urlParsingNode.host,
	      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	      hostname: urlParsingNode.hostname,
	      port: urlParsingNode.port,
	      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
	    };
	  }

	  originURL = resolveURL(window.location.href);

	  return function isURLSameOrigin(requestURL) {
	    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
	    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
	  };
	}() : function nonStandardBrowserEnv() {
	  return function isURLSameOrigin() {
	    return true;
	  };
	}();

/***/ },
/* 158 */
/***/ function(module, exports) {

	'use strict';

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error();
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';

	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (var block, charCode, idx = 0, map = chars; str.charAt(idx | 0) || (map = '=', idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}

	module.exports = btoa;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(146);

	module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
	  return {
	    write: function write(name, value, expires, path, domain, secure) {
	      var cookie = [];
	      cookie.push(name + '=' + encodeURIComponent(value));

	      if (utils.isNumber(expires)) {
	        cookie.push('expires=' + new Date(expires).toGMTString());
	      }

	      if (utils.isString(path)) {
	        cookie.push('path=' + path);
	      }

	      if (utils.isString(domain)) {
	        cookie.push('domain=' + domain);
	      }

	      if (secure === true) {
	        cookie.push('secure');
	      }

	      document.cookie = cookie.join('; ');
	    },

	    read: function read(name) {
	      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	      return match ? decodeURIComponent(match[3]) : null;
	    },

	    remove: function remove(name) {
	      this.write(name, '', Date.now() - 86400000);
	    }
	  };
	}() : function nonStandardBrowserEnv() {
	  return {
	    write: function write() {},
	    read: function read() {
	      return null;
	    },
	    remove: function remove() {}
	  };
	}();

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(146);

	function InterceptorManager() {
	  this.handlers = [];
	}

	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(146);
	var transformData = __webpack_require__(162);
	var isCancel = __webpack_require__(163);
	var defaults = __webpack_require__(149);

	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  config.headers = config.headers || {};

	  config.data = transformData(config.data, config.headers, config.transformRequest);

	  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

	  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
	    delete config.headers[method];
	  });

	  var adapter = config.adapter || defaults.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    response.data = transformData(response.data, response.headers, config.transformResponse);

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      if (reason && reason.response) {
	        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
	      }
	    }

	    return Promise.reject(reason);
	  });
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(146);

	module.exports = function transformData(data, headers, fns) {
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};

/***/ },
/* 163 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};

/***/ },
/* 164 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function isAbsoluteURL(url) {
	  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
	  );
	};

/***/ },
/* 165 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};

/***/ },
/* 166 */
/***/ function(module, exports) {

	'use strict';

	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	module.exports = Cancel;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(166);

	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      return;
	    }

	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}

	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	module.exports = CancelToken;

/***/ },
/* 168 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.decoratePriceField = decoratePriceField;
	function decoratePriceField(_ref) {
	  var query = _ref.query,
	      _ref$prefix = _ref.prefix,
	      prefix = _ref$prefix === undefined ? 'R$ ' : _ref$prefix,
	      _ref$float_separator = _ref.float_separator,
	      float_separator = _ref$float_separator === undefined ? ',' : _ref$float_separator,
	      _ref$thousands_separa = _ref.thousands_separator,
	      thousands_separator = _ref$thousands_separa === undefined ? '.' : _ref$thousands_separa;


	  var float = RegExp('\\' + float_separator, 'gi');
	  var thousands = RegExp('\\' + thousands_separator, 'gi');

	  var nodes = document.querySelectorAll(query);

	  [].forEach.call(nodes, function (node) {

	    if (node.nodeName !== 'INPUT') return;

	    node.addEventListener('input', function (ev) {

	      ev.preventDefault();

	      var current_value = node.value;
	      var parsed_value = parseInt(current_value.replace(/\D/g, ''));
	      var raw_value = isNaN(parsed_value) ? '0' : '' + parsed_value;

	      var int_value = raw_value.slice(0, -2);
	      var dec_value = raw_value.slice(-2);

	      var separated_int_value = int_value.split('').reverse().reduce(function (s, v, i) {
	        return s += i && i % 3 === 0 ? thousands_separator + v : v;
	      }, '').split("").reverse().join('');

	      node.value = prefix + (int_value ? separated_int_value + float_separator + dec_value : '0' + float_separator + ('0' + dec_value).slice(-2));
	    });
	  });
	}

/***/ }
/******/ ]);