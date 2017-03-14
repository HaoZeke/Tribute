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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _theaterjs = __webpack_require__(3);

var _theaterjs2 = _interopRequireDefault(_theaterjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Hello, world!");

/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */

var theater = (0, _theaterjs2.default)();

theater.on('type:start, erase:start', function () {
  theater.getCurrentActor().$element.classList.add('actor__content--typing');
}).on('type:end, erase:end', function () {
  theater.getCurrentActor().$element.classList.remove('actor__content--typing');
}).on('type:start, erase:start', function () {
  if (theater.getCurrentActor().name === 'vader') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

theater.addActor('vader', { speed: 0.8, accuracy: 0.6 }).addActor('luke').addScene('vader:Luke.', 600).addScene('luke:What?', 400).addScene('vader:I am your father.', 400).addScene('luke:Nooo...', -3, '!!! ', 600, 'No! ', 600).addScene('luke:That\'s not true!', 600).addScene('luke:That\'s impossible!', 400).addScene('vader:Search your feelings.', 1600).addScene('vader:You know it to be true.', 1000).addScene('luke:Noooooooo! ', 600, 'No!', 400).addScene('vader:Luke.', 600).addScene('vader:You can destroy the Emperor.', 1600).addScene('vader:He has foreseen this. ', 800).addScene('vader:It is your destiny.', 1600).addScene('vader:Join me.', 800).addScene('vader:Together we can rule the galaxy.', 800).addScene('vader:As father and son.', 1600).addScene('vader:Come with me. ', 800).addScene('vader:It is the only way.', 2000).addScene(theater.replay.bind(theater));

var WebFont = __webpack_require__(4);

WebFont.load({
  google: {
    families: ['Cutive', 'Droid Serif']
  }
});

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["theaterJS"] = factory();
	else
		root["theaterJS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	var _actor = __webpack_require__(1);

	var _actor2 = _interopRequireDefault(_actor);

	var _helpersUtils = __webpack_require__(3);

	var _helpersUtils2 = _interopRequireDefault(_helpersUtils);

	var _helpersType = __webpack_require__(2);

	var _helpersType2 = _interopRequireDefault(_helpersType);

	var _helpersKeyboard = __webpack_require__(4);

	var _helpersKeyboard2 = _interopRequireDefault(_helpersKeyboard);

	var _helpersHtml = __webpack_require__(6);

	var _helpersHtml2 = _interopRequireDefault(_helpersHtml);

	var NAVIGATOR = typeof window !== 'undefined' && window.navigator;
	var DEFAULTS = {
	  autoplay: true,
	  erase: true,
	  minSpeed: { erase: 80, type: 80 },
	  maxSpeed: { erase: 450, type: 450 },
	  locale: 'detect'
	};

	function theaterJS() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  /* ------------------------------------------------- *\
	    init
	  \* ------------------------------------------------- */

	  options = _helpersUtils2['default'].merge({}, DEFAULTS, options);

	  if (_helpersType2['default'].isNumber(options.minSpeed)) {
	    var _options = options;
	    var minSpeed = _options.minSpeed;

	    options.minSpeed = { erase: minSpeed, type: minSpeed };
	  }

	  if (_helpersType2['default'].isNumber(options.maxSpeed)) {
	    var _options2 = options;
	    var maxSpeed = _options2.maxSpeed;

	    options.maxSpeed = { erase: maxSpeed, type: maxSpeed };
	  }

	  if (options.locale === 'detect' && NAVIGATOR) {
	    var languages = NAVIGATOR.languages;
	    if (_helpersType2['default'].isArray(languages) && _helpersType2['default'].isString(languages[0])) {
	      options.locale = languages[0].substr(0, 2);
	    }
	  }

	  if (!_helpersKeyboard2['default'].supports(options.locale)) {
	    options.locale = _helpersKeyboard2['default'].defaultLocale;
	  }

	  var props = { options: options, casting: {}, status: 'ready', onStage: null, currentScene: -1, scenario: [], events: {} };
	  setCurrentActor(null);

	  /* ------------------------------------------------- *\
	    methods
	  \* ------------------------------------------------- */

	  function addActor(actorName) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var callback = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var a = (0, _actor2['default'])(actorName, options, callback);
	    props.casting[a.name] = a;

	    return this;
	  }

	  function setCurrentActor(actorName) {
	    props.onStage = actorName;
	    return this;
	  }

	  function getCurrentActor() {
	    return props.casting[props.onStage] || null;
	  }

	  function addScene() {
	    var sequence = [];

	    function addSceneToSequence(scene) {
	      if (_helpersType2['default'].isArray(scene)) {
	        scene.forEach(function (s) {
	          addSceneToSequence(s);
	        });
	      }

	      if (_helpersType2['default'].isString(scene)) {
	        var partials = scene.split(':');

	        var actorName = undefined;
	        if (partials.length > 1 && partials[0].charAt(partials[0].length - 1) !== '\\') {
	          actorName = partials.shift();

	          addSceneToSequence({ name: 'erase', actor: actorName });
	        }

	        var speech = partials.join(':').replace(/\\:/g, ':');
	        var sceneObj = { name: 'type', args: [speech] };

	        if (actorName != null) {
	          sceneObj.actor = actorName;
	        }

	        addSceneToSequence(sceneObj);
	      }

	      if (_helpersType2['default'].isFunction(scene)) {
	        addSceneToSequence({ name: 'callback', args: [scene] });
	      }

	      if (_helpersType2['default'].isNumber(scene)) {
	        if (scene > 0) {
	          addSceneToSequence({ name: 'wait', args: [scene] });
	        } else {
	          addSceneToSequence({ name: 'erase', args: [scene] });
	        }
	      }

	      if (_helpersType2['default'].isObject(scene)) {
	        if (!_helpersType2['default'].isArray(scene.args)) {
	          scene.args = [];
	        }

	        scene.args.unshift(function () {
	          publish(scene.name + ':end', scene);
	          playNextScene();
	        });

	        sequence.push(scene);
	      }
	    }

	    for (var _len = arguments.length, scenes = Array(_len), _key = 0; _key < _len; _key++) {
	      scenes[_key] = arguments[_key];
	    }

	    addSceneToSequence([{ name: 'publisher', args: ['sequence:start'] }].concat(scenes).concat({ name: 'publisher', args: ['sequence:end'] }));
	    Array.prototype.push.apply(props.scenario, sequence);

	    if (props.options.autoplay) {
	      play();
	    }

	    return this;
	  }

	  function play() {
	    if (props.status === 'stopping') {
	      props.status = 'playing';
	    }

	    if (props.status === 'ready') {
	      props.status = 'playing';
	      playNextScene();
	    }

	    return this;
	  }

	  function replay(done) {
	    if (props.status === 'ready' || _helpersType2['default'].isFunction(done)) {
	      props.currentScene = -1;

	      if (props.status === 'ready') play();else done();
	    }

	    return this;
	  }

	  function stop() {
	    props.status = 'stopping';
	    return this;
	  }

	  function playNextScene() {
	    if (props.status === 'stopping') {
	      props.status = 'ready';
	      return this;
	    }

	    if (props.status !== 'playing') return this;

	    if (props.currentScene + 1 >= props.scenario.length) {
	      props.status = 'ready';
	      publish('scenario:end');
	      return this;
	    }

	    var nextScene = props.scenario[++props.currentScene];

	    if (props.currentScene === 0) {
	      publish('scenario:start');
	    }

	    if (nextScene.name === 'publisher') {
	      var _nextScene$args = _toArray(nextScene.args);

	      var done = _nextScene$args[0];

	      var args = _nextScene$args.slice(1);

	      publish.apply(undefined, _toConsumableArray(args));

	      return done();
	    }

	    if (nextScene.actor) {
	      setCurrentActor(nextScene.actor);
	    }

	    publish(nextScene.name + ':start', nextScene);

	    switch (nextScene.name) {
	      case 'type':
	        typeAction.apply(undefined, _toConsumableArray(nextScene.args));
	        break;

	      case 'erase':
	        eraseAction.apply(undefined, _toConsumableArray(nextScene.args));
	        break;

	      case 'callback':
	        callbackAction.apply(undefined, _toConsumableArray(nextScene.args));
	        break;

	      case 'wait':
	        waitAction.apply(undefined, _toConsumableArray(nextScene.args));
	        break;

	      default:
	        console.debug('No scene handler for ' + nextScene.name);
	        break;
	    }

	    return this;
	  }

	  function typeAction(done, value) {
	    var actor = getCurrentActor();

	    var locale = props.options.locale;
	    var minSpeed = props.options.minSpeed.type;
	    var maxSpeed = props.options.maxSpeed.type;
	    var initialValue = actor.displayValue;
	    var cursor = -1;
	    var isFixing = false;
	    var previousMistakeCursor = null;
	    var previousFixCursor = null;

	    var htmlMap = _helpersHtml2['default'].map(value);
	    value = _helpersHtml2['default'].strip(value);(function type() {
	      var actual = _helpersHtml2['default'].strip(actor.displayValue.substr(initialValue.length));

	      if (actual === value) return done();

	      var expected = value.substr(0, cursor + 1);

	      var isMistaking = actual !== expected;
	      var shouldBeMistaken = actor.shouldBeMistaken(actual, value, previousMistakeCursor, previousFixCursor);
	      var shouldFix = isFixing || !shouldBeMistaken;

	      if (isMistaking && shouldFix) {
	        isFixing = true;
	        previousMistakeCursor = null;
	        actor.displayValue = initialValue + _helpersHtml2['default'].inject(actual.substr(0, actual.length - 1), htmlMap);
	        cursor--;
	        previousFixCursor = cursor;
	      } else {
	        isFixing = false;
	        var nextChar = value.charAt(++cursor);

	        if (shouldBeMistaken) {
	          nextChar = _helpersKeyboard2['default'].randomCharNear(nextChar, locale);

	          if (previousMistakeCursor == null) {
	            previousMistakeCursor = cursor;
	          }
	        }

	        actor.displayValue = initialValue + _helpersHtml2['default'].inject(actual + nextChar, htmlMap);
	      }

	      return setTimeout(type, actor.getTypingSpeed(minSpeed, maxSpeed));
	    })();

	    return this;
	  }

	  function eraseAction(done, arg) {
	    var actor = getCurrentActor();

	    // erase scenes are added before a type scene
	    // so for the first scene, there's no actor yet
	    if (actor == null) {
	      return done();
	    }

	    if (options.erase !== true) {
	      actor.displayValue = '';
	      return done();
	    }

	    var minSpeed = props.options.minSpeed.erase;
	    var maxSpeed = props.options.maxSpeed.erase;

	    var value = actor.displayValue;
	    var htmlMap = _helpersHtml2['default'].map(value);

	    value = _helpersHtml2['default'].strip(value);

	    var cursor = value.length;

	    var speed = undefined;
	    var nbCharactersToErase = 0;

	    if (_helpersType2['default'].isNumber(arg)) {
	      if (arg > 0) speed = arg;else nbCharactersToErase = value.length + arg;
	    }

	    (function erase() {
	      if (cursor === nbCharactersToErase) return done();
	      actor.displayValue = _helpersHtml2['default'].inject(value.substr(0, --cursor), htmlMap);

	      return setTimeout(erase, speed || actor.getTypingSpeed(minSpeed, maxSpeed));
	    })();

	    return this;
	  }

	  function callbackAction(done, callback) {
	    callback.call(this, done);
	    return this;
	  }

	  function waitAction(done, delay) {
	    setTimeout(done.bind(this), delay);
	    return this;
	  }

	  function subscribe(events, callback) {
	    events.split(',').forEach(function (eventName) {
	      eventName = eventName.trim();

	      if (!_helpersType2['default'].isArray(props.events[eventName])) {
	        props.events[eventName] = [];
	      }

	      props.events[eventName].push(callback);
	    });

	    return this;
	  }

	  function publish() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    var eventName = args[0];
	    var callbacks = props.events[eventName] || [];

	    if (callbacks.length > 0) {
	      callbacks.concat(props.events['*'] || []).forEach(function (callback) {
	        return callback.apply(undefined, args);
	      });
	    }

	    return this;
	  }

	  /* ------------------------------------------------- *\
	    public api
	  \* ------------------------------------------------- */

	  return Object.freeze(Object.defineProperties({
	    addActor: addActor,
	    getCurrentActor: getCurrentActor,
	    addScene: addScene,
	    play: play,
	    replay: replay,
	    stop: stop,
	    on: subscribe
	  }, {
	    options: {
	      get: function get() {
	        return props.options;
	      },
	      configurable: true,
	      enumerable: true
	    },
	    status: {
	      get: function get() {
	        return props.status;
	      },
	      configurable: true,
	      enumerable: true
	    }
	  }));
	}

	theaterJS.init = function () {
	  var actorName = arguments.length <= 0 || arguments[0] === undefined ? 'actor' : arguments[0];

	  var theater = theaterJS();
	  theater.addActor(actorName, { accuracy: 1, speed: 0.8 });
	  return theater;
	};

	exports['default'] = theaterJS;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _helpersType = __webpack_require__(2);

	var _helpersType2 = _interopRequireDefault(_helpersType);

	var _helpersUtils = __webpack_require__(3);

	var _helpersUtils2 = _interopRequireDefault(_helpersUtils);

	var DOCUMENT = typeof window !== 'undefined' && window.document;
	var DEFAULTS = { speed: 0.6, accuracy: 0.6 };

	exports['default'] = function (actorName) {
	  var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var callback = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var displayValue = '';
	  var $element = undefined;

	  if (_helpersType2['default'].isNumber(props)) {
	    props = { speed: props, accuracy: props };
	  }

	  props = _helpersUtils2['default'].merge({}, DEFAULTS, props);

	  if (DOCUMENT) {
	    if (callback == null) {
	      callback = '#' + actorName;
	    }

	    if (_helpersType2['default'].isString(callback)) {
	      var selector = callback;
	      var $e = DOCUMENT.querySelector(selector);

	      if ($e != null) {
	        $element = $e;
	        callback = function (newValue) {
	          $element.innerHTML = newValue;
	        };
	      } else {
	        throw new Error('no matches for ' + actorName + '\'s selector: ' + selector);
	      }
	    }
	  }

	  if (!_helpersType2['default'].isFunction(callback)) {
	    callback = console.log.bind(console);
	  }

	  return Object.defineProperties({
	    $element: $element,

	    getTypingSpeed: function getTypingSpeed(fastest, slowest) {
	      var speed = _helpersUtils2['default'].randomFloat(props.speed, 1);
	      return _helpersUtils2['default'].getPercentageOf(slowest, fastest, speed);
	    },

	    shouldBeMistaken: function shouldBeMistaken(actual, endValue) {
	      var previousMistakeCursor = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	      var previousFixCursor = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	      var accuracy = props.accuracy * 10;

	      if (accuracy >= 8) {
	        return false;
	      }

	      if (actual.length <= accuracy) {
	        return false;
	      }

	      if (actual.length === endValue.length) {
	        return false;
	      }

	      if (_helpersType2['default'].isNumber(previousMistakeCursor)) {
	        var nbOfCharactersTyped = actual.length - previousMistakeCursor;
	        var maxWrongCharactersAllowed = accuracy >= 6 ? 10 - accuracy : 4;

	        if (nbOfCharactersTyped >= maxWrongCharactersAllowed) {
	          return false;
	        }
	      }

	      if (_helpersType2['default'].isNumber(previousFixCursor)) {
	        var nbOfCharactersTyped = actual.length - previousFixCursor;
	        var minCharactersBetweenMistakes = Math.max(accuracy, 2) * 2;

	        if (nbOfCharactersTyped <= minCharactersBetweenMistakes) {
	          return false;
	        }
	      }

	      return _helpersUtils2['default'].randomFloat(0, 0.8) > props.accuracy;
	    }
	  }, {
	    displayValue: {
	      get: function get() {
	        return displayValue;
	      },
	      set: function set(value) {
	        displayValue = value;
	        callback(value);
	      },
	      configurable: true,
	      enumerable: true
	    },
	    name: {
	      get: function get() {
	        return actorName;
	      },
	      configurable: true,
	      enumerable: true
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function toString(o) {
	  return ({}).toString.call(o);
	}

	exports['default'] = {
	  isNumber: function isNumber(o) {
	    return typeof o === 'number';
	  },

	  isString: function isString(o) {
	    return toString(o) === '[object String]';
	  },

	  isObject: function isObject(o) {
	    return toString(o) === '[object Object]';
	  },

	  isArray: function isArray(o) {
	    return toString(o) === '[object Array]';
	  },

	  isFunction: function isFunction(o) {
	    return typeof o === 'function';
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  merge: function merge(dst) {
	    var objs = [].slice.call(arguments, 1);

	    for (var i = 0, len = objs.length; i < len; i++) {
	      var obj = objs[i];

	      for (var key in obj) {
	        if (!obj.hasOwnProperty(key)) continue;
	        dst[key] = obj[key];
	      }
	    }

	    return dst;
	  },

	  random: function random(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	  },

	  randomFloat: function randomFloat(min, max) {
	    return Math.random() * (max - min) + min;
	  },

	  getPercentageOf: function getPercentageOf(min, max, percentage) {
	    return min - min * percentage + max * percentage;
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _type = __webpack_require__(2);

	var _type2 = _interopRequireDefault(_type);

	var _utils = __webpack_require__(3);

	var _utils2 = _interopRequireDefault(_utils);

	var _keyboardsJson = __webpack_require__(5);

	var _keyboardsJson2 = _interopRequireDefault(_keyboardsJson);

	var DEFAULT_LOCALE = 'en';

	for (var locale in _keyboardsJson2['default']) {
	  if (!_keyboardsJson2['default'].hasOwnProperty(locale)) continue;

	  var keyboard = _keyboardsJson2['default'][locale];
	  _keyboardsJson2['default'][locale] = { list: keyboard, mapped: mapKeyboard(keyboard) };
	}

	function mapKeyboard(alphabet) {
	  var keyboard = {};

	  for (var y = 0, lines = alphabet.length, chars = undefined; y < lines; y++) {
	    chars = alphabet[y];

	    for (var x = 0, charsLength = chars.length; x < charsLength; x++) {
	      keyboard[chars[x]] = { x: x, y: y };
	    }
	  }

	  return keyboard;
	}

	exports['default'] = {
	  defaultLocale: DEFAULT_LOCALE,

	  supports: function supports(locale) {
	    return _type2['default'].isObject(_keyboardsJson2['default'][locale]);
	  },

	  randomCharNear: function randomCharNear(ch, locale) {
	    if (!this.supports(locale)) {
	      throw new Error('locale "' + locale + '" is not supported');
	    }

	    var keyboard = _keyboardsJson2['default'][locale].mapped;
	    var threshold = 1;
	    var nearbyChars = [];
	    var uppercase = /[A-Z]/.test(ch);

	    ch = ch.toLowerCase();

	    var charPosition = keyboard[ch] || [];
	    var p = undefined;

	    for (var c in keyboard) {
	      if (!keyboard.hasOwnProperty(c) || c === ch) continue;

	      p = keyboard[c];

	      if (Math.abs(charPosition.x - p.x) <= threshold && Math.abs(charPosition.y - p.y) <= threshold) {
	        nearbyChars.push(c);
	      }
	    }

	    var randomChar = nearbyChars.length > 0 ? nearbyChars[_utils2['default'].random(0, nearbyChars.length - 1)] : this.randomChar(locale);

	    if (uppercase) {
	      randomChar = randomChar.toUpperCase();
	    }

	    return randomChar;
	  },

	  randomChar: function randomChar(locale) {
	    if (!this.supports(locale)) {
	      throw new Error('locale "' + locale + '" is not supported');
	    }

	    var chars = _keyboardsJson2['default'][locale].list.join('');
	    return chars.charAt(_utils2['default'].random(0, chars.length - 1));
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
		"en": [
			"qwertyuiop",
			"asdfghjkl",
			"zxcvbnm"
		],
		"fr": [
			"azertyuiop",
			"qsdfghjklm",
			"wxcvbn"
		],
		"da": [
			"qwertyuiopå",
			"asdfghjklæø",
			"zxcvbnm"
		],
		"de": [
			"qwertzuiopü",
			"asdfghjklöä",
			"yxcvbnm"
		],
		"pl": [
			"qwertyuiopęó",
			"asdfghjkląśł",
			"zxcvbnmżźćń"
		],
		"pt": [
			"qwertyuiop",
			"asdfghjklç",
			"zxcvbnm"
		],
		"ru": [
			"йцукенгшщзх",
			"фывапролджэ",
			"ячсмитьбюъ"
		],
		"es": [
			"qwertyuiop",
			"asdfghjklñ",
			"zxcvbnm"
		]
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _voidElementsJson = __webpack_require__(7);

	var _voidElementsJson2 = _interopRequireDefault(_voidElementsJson);

	function isVoidElement(tag) {
	  var tagName = tag.match(/<([^\s>]+)/);
	  return Boolean(tagName) && _voidElementsJson2['default'].indexOf(tagName[1].toLowerCase()) > -1;
	}

	exports['default'] = {
	  strip: function strip(str) {
	    return str.replace(/(<([^>]+)>)/gi, '');
	  },

	  map: function map(str) {
	    var regexp = /<[^>]+>/gi;
	    var tags = [];
	    var openers = [];
	    var result = undefined;
	    var tag = undefined;

	    while (result = regexp.exec(str)) {
	      tag = {
	        tagName: result[0],
	        position: result.index
	      };

	      if (tag.tagName.charAt(1) === '/') {
	        tag.opener = openers.pop();
	      } else if (tag.tagName.charAt(tag.tagName.length - 2) !== '/' && !isVoidElement(tag.tagName)) {
	        openers.push(tag);
	      }

	      tags.push(tag);
	    }

	    return tags;
	  },

	  inject: function inject(str, map) {
	    for (var i = 0, tag = undefined; i < map.length; i++) {
	      tag = map[i];

	      if (str.length > 0 && tag.position <= str.length) {
	        str = str.substr(0, tag.position) + tag.tagName + str.substr(tag.position);
	      } else if (tag.opener && tag.opener.position < str.length) {
	        str += tag.tagName;
	      }
	    }

	    return str;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = [
		"area",
		"base",
		"br",
		"col",
		"embed",
		"hr",
		"img",
		"input",
		"keygen",
		"link",
		"menuitem",
		"meta",
		"param",
		"source",
		"track",
		"wbr"
	];

/***/ }
/******/ ])
});
;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2)


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.27 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.m=b||a;this.c=this.m.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function z(a){if("string"===typeof a.f)return a.f;var b=a.m.location.protocol;"about:"==b&&(b=a.a.location.protocol);return"https:"==b?"https:":"http:"}function ea(a){return a.m.location.hostname||a.a.location.hostname}
function A(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,k=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function B(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function C(){this.a=0;this.c=null}function D(a){a.a++;return function(){a.a--;E(a)}}function F(a,b){a.c=b;E(a)}function E(a){0==a.a&&a.c&&(a.c(),a.c=null)};function G(a){this.a=a||"-"}G.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return I(a)+" "+(a.f+"00")+" 300px "+J(a.c)}function J(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function K(a){return a.a+a.f}function I(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.m.document.documentElement;this.h=b;this.a=new G("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);L(a,"loading")}function M(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}L(a,"inactive")}function L(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,K(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function N(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function O(a){u(a.c,"body",a.a)}function P(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+J(a.c)+";"+("font-style:"+I(a)+";font-weight:"+(a.f+"00")+";")};function Q(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}Q.prototype.start=function(){var a=this.c.m.document,b=this,c=q(),d=new Promise(function(d,e){function k(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,d){setTimeout(d,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};function R(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.o=this.j=this.h=this.g=null;this.g=new N(this.c,this.s);this.h=new N(this.c,this.s);this.j=new N(this.c,this.s);this.o=new N(this.c,this.s);a=new H(this.a.c+",serif",K(this.a));a=P(a);this.g.a.style.cssText=a;a=new H(this.a.c+",sans-serif",K(this.a));a=P(a);this.h.a.style.cssText=a;a=new H("serif",K(this.a));a=P(a);this.j.a.style.cssText=a;a=new H("sans-serif",K(this.a));a=
P(a);this.o.a.style.cssText=a;O(this.g);O(this.h);O(this.j);O(this.o)}var S={D:"serif",C:"sans-serif"},T=null;function U(){if(null===T){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return T}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.o.a.offsetWidth;this.A=q();la(this)};
function ma(a,b,c){for(var d in S)if(S.hasOwnProperty(d)&&b===a.f[S[d]]&&c===a.f[S[d]])return!0;return!1}function la(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=U()&&ma(a,b,c));d?q()-a.A>=a.w?U()&&ma(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):na(a):V(a,a.v)}function na(a){setTimeout(p(function(){la(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.o=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,K(a).toString(),"active")],[b.a.c("wf",a.c,K(a).toString(),"loading"),b.a.c("wf",a.c,K(a).toString(),"inactive")]);L(b,"fontactive",a);this.o=!0;oa(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,K(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,K(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,K(a).toString(),"inactive"));w(b.f,d,e)}L(b,"fontinactive",a);oa(this)};function oa(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),L(a,"active")):M(a.a))};function pa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}pa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;qa(this,new ha(this.c,a),a)};
function ra(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,k=d||null||{};if(0===c.length&&f)M(b.a);else{b.f+=c.length;f&&(b.j=f);var h,m=[];for(h=0;h<c.length;h++){var l=c[h],n=k[l.c],r=b.a,x=l;r.g&&w(r.f,[r.a.c("wf",x.c,K(x).toString(),"loading")]);L(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),ya=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):ya?!1:!0}else X=!1;X?r=new Q(p(b.g,b),p(b.h,b),b.c,l,b.s,n):r=new R(p(b.g,b),p(b.h,b),b.c,l,b.s,a,n);m.push(r)}for(h=0;h<m.length;h++)m[h].start()}},0)}function qa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){ra(a,f,b,d,c)})};function sa(a,b){this.c=a;this.a=b}function ta(a,b,c){var d=z(a.c);a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}
sa.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var m=0;m<c.length;m++){var l=c[m].fontfamily;void 0!=c[m].fontStyle&&void 0!=c[m].fontWeight?(h=c[m].fontStyle+c[m].fontWeight,e.push(new H(l,h))):e.push(new H(l))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;B(this.c,ta(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+
d}else a([])};function ua(a,b){this.c=a;this.a=b}ua.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new C;b=0;for(c=d.length;b<c;b++)A(this.c,d[b],D(g));var k=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),m=0;m<h.length;m+=1)k.push(new H(d[0],h[m]));else k.push(new H(d[0]));F(g,function(){a(k,f)})};function va(a,b,c){a?this.c=a:this.c=b+wa;this.a=[];this.f=[];this.g=c||""}var wa="//fonts.googleapis.com/css";function xa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function za(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function Aa(a){this.f=a;this.a=[];this.c={}}
var Ba={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Ca={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Da={i:"i",italic:"i",n:"n",normal:"n"},
Ea=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Fa(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var k=d[1];g=[];if(k)for(var k=k.split(","),h=k.length,m=0;m<h;m++){var l;l=k[m];if(l.match(/^[\w-]+$/)){var n=Ea.exec(l.toLowerCase());if(null==n)l="";else{l=n[2];l=null==l||""==l?"n":Da[l];n=n[1];if(null==n||""==n)n="4";else var r=Ca[n],n=r?r:isNaN(n)?"4":n.substr(0,1);l=[l,n].join("")}}else l="";l&&g.push(l)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=Ba[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Ba[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function Ga(a,b){this.c=a;this.a=b}var Ha={Arimo:!0,Cousine:!0,Tinos:!0};Ga.prototype.load=function(a){var b=new C,c=this.c,d=new va(this.a.api,z(c),this.a.text),e=this.a.families;xa(d,e);var f=new Aa(e);Fa(f);A(c,za(d),D(b));F(b,function(){a(f.a,f.c,Ha)})};function Ia(a,b){this.c=a;this.a=b}Ia.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?B(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],k=b[f+1],h=0;h<k.length;h++)e.push(new H(g,k[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(m){}a(e)}},2E3):a([])};function Ja(a,b){this.c=a;this.f=b;this.a=[]}Ja.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,k=c.fonts.length;g<k;++g){var h=c.fonts[g];d.a.push(new H(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},B(this.c,z(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new pa(window);Y.a.c.custom=function(a,b){return new ua(b,a)};Y.a.c.fontdeck=function(a,b){return new Ja(b,a)};Y.a.c.monotype=function(a,b){return new sa(b,a)};Y.a.c.typekit=function(a,b){return new Ia(b,a)};Y.a.c.google=function(a,b){return new Ga(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return Z}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map