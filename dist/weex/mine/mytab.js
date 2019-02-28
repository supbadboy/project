// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(1)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\weex\\weex_test\\src\\weex\\util\\util.vue"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var pushUrl = 'http://192.168.5.130:8081/dist/'; //接口请求地址
var serverUrl = "http://192.168.5.130:86/WEEX/restservices/weexrest";
var imageUrl = 'http://192.168.5.130:8081/image/'; //图片地址
var longriseWeexBack = 'longriseWeexBack';

exports.default = {
    serverUrl: serverUrl,
    imageUrl: imageUrl,
    pushUrl: pushUrl,
    longriseWeexBack: longriseWeexBack
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(3);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812 || parseInt(window.screen.width, 10) === 414 && parseInt(window.screen.height, 10) === 896);
      }
      return Utils.env.isIOS() && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight == 1792);
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(4)
  , qs = __webpack_require__(5)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(value));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mytab = __webpack_require__(73);

var _mytab2 = _interopRequireDefault(_mytab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mytab2.default.el = '#root';
new Vue(_mytab2.default);

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(74)
)

/* script */
__vue_exports__ = __webpack_require__(75)

/* template */
var __vue_template__ = __webpack_require__(76)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\weex\\weex_test\\src\\weex\\mine\\mytab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ca4eda76"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = {
  "line-style": {
    "backgroundColor": "#F1F1F1",
    "height": "1"
  }
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var data = weex.config.data;
var UtilModule = weex.requireModule('UtilModule');
var globalEvent = weex.requireModule('globalEvent');
var self;

exports.default = {
    components: {},
    data: function data() {
        return {
            carUrl: '',
            mysettings: '',
            mydefaulthead: '',
            mycarimg: '',
            myorder: '',
            myaccountbook: '',
            mycertification: '',
            mycollection: '',
            myshare: '',
            myaboutus: '',
            mygetinto: '',
            carReversArrows: '',
            userInfo: '',
            isLogin: true, //登录状态
            resultData: {},
            status: 0,
            myStyle: {
                height: 0,
                backgroundColor: '#FFFFFF'
            },
            show: false,
            overlayCanClose: true,
            isFalse: false,
            hasAnimation: true

        };
    },

    created: function created() {
        // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
        var tabPageHeight = _utils2.default.env.getScreenHeight();

        var tabStyles = this.tabStyles;

        this.myStyle.height = tabPageHeight - 10;
        self = this;
        self.isLogin = data.logintype;
        self.requestUrl = _util2.default.serverUrl;
        self.mysettings = _util2.default.imageUrl + 'my_settings.png';
        self.mydefaulthead = _util2.default.imageUrl + 'my_defaulthead.png';
        self.mycarimg = _util2.default.imageUrl + 'my_carimg.png';
        self.myorder = _util2.default.imageUrl + 'my_order.png';
        self.myaccountbook = _util2.default.imageUrl + 'my_accountbook.png';
        self.mycollection = _util2.default.imageUrl + 'my_collection.png';
        self.myshare = _util2.default.imageUrl + 'my_share.png';
        self.mycertification = _util2.default.imageUrl + 'my_certification.png';
        self.myaboutus = _util2.default.imageUrl + 'my_aboutus.png';
        self.mygetinto = _util2.default.imageUrl + 'my_getinto.png';
        self.carReversArrows = _util2.default.imageUrl + 'login_province.png';
        self.getuserInfo();

        globalEvent.addEventListener(_util2.default.longriseWeexBack, function (data) {
            self.getuserInfo();
        });
    },
    methods: {
        getuserInfo: function getuserInfo() {
            //获取用户信息
            if (data.userflag === null || data.userflag === undefined) {
                modal.toast({ message: '请重新登录', duration: 1 });
                return;
            }
            var jsonObj = {};
            jsonObj.userflag = data.userflag;
            UtilModule.okhttp(self.requestUrl, "weexuserinfo", JSON.stringify(jsonObj), function (result) {
                self.setData2UI(result);
            });
        },
        setData2UI: function setData2UI(result) {

            if (result != undefined && result != null) {
                var tempData = JSON.parse(result);
                if (tempData != undefined && tempData != null) {
                    if (tempData.restate == 1) {
                        self.resultData = tempData.data;
                        return;
                    }
                }
            }

            modal.toast({ 'message': '数据加载失败', 'duration': 1 });
        },
        settings: function settings() {
            modal.toast({ message: '设置', duration: 1 });
            return;
        },
        login: function login() {
            navigator.push({
                url: _util2.default.pushUrl + 'weex/login/login.js',
                animated: true,
                data: {}
            }, function (event) {});
        },
        openMyCar: function openMyCar() {
            if (self.resultData.carnum == 0) {
                navigator.push({
                    url: _util2.default.pushUrl + 'weex/car/carinfo.js',
                    animated: true,
                    data: {
                        userflag: data.userflag,
                        carnum: self.resultData.carnum
                    }
                }, function (event) {});
            } else {
                navigator.push({
                    url: _util2.default.pushUrl + 'weex/car/mycarlist.js',
                    animated: true,
                    data: {
                        userflag: data.userflag,
                        carnum: self.resultData.carnum
                    }
                }, function (event) {});
            }
        }
    }
};

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: _vm.myStyle
  }, [_c('div', {
    staticStyle: {
      height: "100px",
      width: "750px",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#4E7FFF"
    }
  }, [_c('text', {
    staticStyle: {
      width: "72px",
      color: "#FFFFFF",
      fontSize: "38px",
      marginLeft: "30px",
      marginTop: "40px",
      flex: "1"
    }
  }, [_vm._v("我的")]), _c('image', {
    staticStyle: {
      width: "39px",
      height: "39px",
      marginRight: "30px"
    },
    attrs: {
      "src": _vm.mysettings
    },
    on: {
      "click": _vm.settings
    }
  })]), _c('scroller', [(_vm.isLogin) ? _c('div', {
    staticStyle: {
      flexDirection: "row",
      height: "180px",
      width: "750px",
      alignItems: "center",
      backgroundColor: "#4E7FFF"
    },
    on: {
      "click": function($event) {
        _vm.goLogin()
      }
    }
  }, [_c('image', {
    staticStyle: {
      width: "120px",
      height: "120px",
      marginLeft: "30px",
      borderRadius: "60px"
    },
    attrs: {
      "src": _vm.mydefaulthead
    }
  }), _c('div', {
    staticStyle: {
      flexDirection: "column",
      marginLeft: "30px",
      flex: "1"
    }
  }, [_c('text', {
    staticStyle: {
      color: "#FFFFFF",
      fontSize: "42px"
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录/注册")]), _vm._m(0)])]) : _c('div', {
    staticStyle: {
      height: "180px",
      width: "750px",
      flexDirection: "row",
      backgroundColor: "#4E7FFF",
      alignItems: "center"
    },
    on: {
      "click": function($event) {
        _vm.editAccountInfo()
      }
    }
  }, [(_vm.resultData.photo == null || _vm.resultData.photo == '') ? _c('div', [_c('image', {
    staticStyle: {
      width: "120px",
      height: "120px",
      marginLeft: "30px",
      borderRadius: "60px"
    },
    attrs: {
      "src": _vm.mydefaulthead
    }
  })]) : _c('div', [_c('image', {
    staticStyle: {
      width: "120px",
      height: "120px",
      marginLeft: "30px",
      borderRadius: "60px"
    },
    attrs: {
      "src": _vm.mydefaulthead
    }
  })]), _c('text', {
    staticStyle: {
      height: "45px",
      flex: "1",
      color: "#FFFFFF",
      fontSize: "38px",
      marginLeft: "32px",
      marginTop: "70px",
      marginBottom: "70px",
      flex: "1"
    }
  }, [_vm._v(_vm._s(_vm.resultData.userflag))]), _c('div', [_c('image', {
    staticStyle: {
      width: "34px",
      height: "50px",
      marginRight: "30px"
    },
    attrs: {
      "src": _vm.carReversArrows
    }
  })])]), _c('div', {
    staticStyle: {
      width: "750px",
      height: "160px",
      flexDirection: "row"
    }
  }, [_c('div', {
    staticStyle: {
      width: "250px",
      height: "160px",
      flexDirection: "column",
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center"
    }
  }, [(_vm.isLogin || _vm.resultData.news == null) ? _c('div', [_c('text', {
    staticStyle: {
      color: "#2B89F9",
      fontSize: "30px",
      marginBottom: "20px",
      marginTop: "51px",
      marginLeft: "10px"
    }
  }, [_vm._v("-")])]) : _c('div', [_c('text', {
    staticStyle: {
      color: "#2B89F9",
      fontSize: "30px",
      marginBottom: "20px",
      marginTop: "51px",
      marginLeft: "0px"
    }
  }, [_vm._v(_vm._s(_vm.resultData.news))])]), _c('text', {
    staticStyle: {
      marginBottom: "36px",
      fontSize: "24px",
      fontWeight: "normal",
      color: "#666666"
    }
  }, [_vm._v("我的消息")])]), _c('div', {
    staticStyle: {
      width: "250px",
      height: "160px",
      flexDirection: "column",
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center"
    }
  }, [(_vm.isLogin || _vm.resultData.evaluate == null) ? _c('div', [_c('text', {
    staticStyle: {
      color: "#FF8346",
      fontSize: "30px",
      marginBottom: "20px",
      marginTop: "51px",
      marginLeft: "10px"
    }
  }, [_vm._v("-")])]) : _c('div', [_c('text', {
    staticStyle: {
      color: "#FF8346",
      fontSize: "30px",
      marginBottom: "20px",
      marginTop: "51px",
      marginLeft: "10px"
    }
  }, [_vm._v(_vm._s(_vm.resultData.evaluate))])]), _c('text', {
    staticStyle: {
      marginBottom: "36px",
      fontSize: "24px",
      fontWeight: "normal",
      color: "#666666"
    }
  }, [_vm._v("我的评价")])]), _c('div', {
    staticStyle: {
      width: "250px",
      height: "160px",
      flexDirection: "column",
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center"
    }
  }, [(_vm.isLogin || _vm.resultData.complain == null) ? _c('div', [_c('text', {
    staticStyle: {
      color: "#FC5F53",
      fontSize: "30px",
      marginBottom: "20px",
      marginTop: "51px",
      marginLeft: "10px"
    }
  }, [_vm._v("-")])]) : _c('div', [_c('text', {
    staticStyle: {
      color: "#FC5F53",
      fontSize: "30px",
      marginBottom: "20px",
      marginTop: "51px",
      marginLeft: "10px"
    }
  }, [_vm._v(_vm._s(_vm.resultData.complain))])]), _c('text', {
    staticStyle: {
      marginBottom: "36px",
      fontSize: "24px",
      fontWeight: "normal",
      color: "#666666"
    }
  }, [_vm._v("我的投诉")])])]), _c('div', {
    staticClass: ["line-style"]
  }), _c('div', {
    staticStyle: {
      height: "100px",
      width: "750px",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF"
    },
    on: {
      "click": function($event) {
        _vm.openMyCar()
      }
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px",
      marginLeft: "30px",
      marginRight: "0px"
    },
    attrs: {
      "src": _vm.mycarimg
    }
  }), _c('text', {
    staticStyle: {
      width: "118px",
      color: "#999999",
      fontSize: "30px",
      marginLeft: "15px",
      marginTop: "40px",
      flex: "1"
    }
  }, [_vm._v("我的车辆")]), (_vm.isLogin || _vm.resultData.carnum == null) ? _c('div', [_c('text', {
    staticStyle: {
      color: "#333333",
      fontSize: "30px",
      marginRight: "10px"
    }
  })]) : _c('div', [_c('text', {
    staticStyle: {
      color: "#333333",
      fontSize: "30px",
      marginRight: "10px"
    }
  }, [_vm._v(_vm._s(_vm.resultData.carnum))])]), _c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginRight: "10px"
    },
    attrs: {
      "src": _vm.mygetinto
    }
  })]), _c('div', {
    staticClass: ["line-style"]
  }), _c('div', {
    staticStyle: {
      height: "100px",
      width: "750px",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF"
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px",
      marginLeft: "30px",
      marginRight: "0px"
    },
    attrs: {
      "src": _vm.myorder
    }
  }), _c('text', {
    staticStyle: {
      width: "118px",
      color: "#999999",
      fontSize: "30px",
      marginLeft: "15px",
      marginTop: "40px",
      flex: "1"
    }
  }, [_vm._v("我的订单")]), _c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginRight: "10px"
    },
    attrs: {
      "src": _vm.mygetinto
    }
  })]), _c('div', {
    staticClass: ["line-style"]
  }), _c('div', {
    staticStyle: {
      height: "100px",
      width: "750px",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF"
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px",
      marginLeft: "30px",
      marginRight: "0px"
    },
    attrs: {
      "src": _vm.myaccountbook
    }
  }), _c('text', {
    staticStyle: {
      width: "118px",
      color: "#999999",
      fontSize: "30px",
      marginLeft: "15px",
      marginTop: "40px",
      flex: "1"
    }
  }, [_vm._v("养车账本")]), _c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginRight: "10px"
    },
    attrs: {
      "src": _vm.mygetinto
    }
  })]), _c('div', {
    staticClass: ["line-style"]
  }), _c('div', {
    staticStyle: {
      height: "100px",
      width: "750px",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF"
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px",
      marginLeft: "30px",
      marginRight: "0px"
    },
    attrs: {
      "src": _vm.mycollection
    }
  }), _c('text', {
    staticStyle: {
      width: "118px",
      color: "#999999",
      fontSize: "30px",
      marginLeft: "15px",
      marginTop: "40px",
      flex: "1"
    }
  }, [_vm._v("我的收藏")]), _c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginRight: "10px"
    },
    attrs: {
      "src": _vm.mygetinto
    }
  })]), _c('div', {
    staticClass: ["line-style"]
  }), _c('div', {
    staticStyle: {
      height: "100px",
      width: "750px",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF"
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px",
      marginLeft: "30px",
      marginRight: "0px"
    },
    attrs: {
      "src": _vm.myshare
    }
  }), _c('text', {
    staticStyle: {
      width: "118px",
      color: "#999999",
      fontSize: "30px",
      marginLeft: "15px",
      marginTop: "40px",
      flex: "1"
    }
  }, [_vm._v("我的分享")]), _c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginRight: "10px"
    },
    attrs: {
      "src": _vm.mygetinto
    }
  })]), _c('div', {
    staticClass: ["line-style"]
  }), _c('div', {
    staticStyle: {
      height: "100px",
      width: "750px",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF"
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px",
      marginLeft: "30px",
      marginRight: "0px"
    },
    attrs: {
      "src": _vm.myaboutus
    }
  }), _c('text', {
    staticStyle: {
      width: "118px",
      color: "#999999",
      fontSize: "30px",
      marginLeft: "15px",
      marginTop: "40px",
      flex: "1"
    }
  }, [_vm._v("关于我们")]), _c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginRight: "10px"
    },
    attrs: {
      "src": _vm.mygetinto
    }
  })]), _c('div', {
    staticClass: ["line-style"]
  }), _c('div', {
    staticStyle: {
      height: "70px"
    }
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      marginTop: "20px"
    }
  }, [_c('text', {
    staticStyle: {
      color: "#333333",
      fontSize: "20px"
    }
  }, [_vm._v("登录后可查看更多记录")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });