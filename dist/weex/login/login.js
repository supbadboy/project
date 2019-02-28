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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _login = __webpack_require__(63);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_login2.default.el = '#root';
new Vue(_login2.default);

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(64)
)

/* script */
__vue_exports__ = __webpack_require__(65)

/* template */
var __vue_template__ = __webpack_require__(66)
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
__vue_options__.__file = "D:\\weex\\weex_test\\src\\weex\\login\\login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-47d383e1"
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

/***/ 64:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
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

var navigator = weex.requireModule('navigator');
var UtilModule = weex.requireModule('UtilModule');
var self;

exports.default = {
    data: function data() {
        return {
            displayLoginImage: '',
            logoImage: '',
            userImage: '',
            pwdImage: ''
        };
    },
    created: function created() {
        self = this;
        self.requestUrl = _util2.default.serverUrl;
        this.displayLoginImage = _util2.default.imageUrl + "login_close.png";
        this.logoImage = _util2.default.imageUrl + "login_page.png";
        this.userImage = _util2.default.imageUrl + "login_use.png";
        this.pwdImage = _util2.default.imageUrl + "login_pwd.png";
    },

    methods: {
        login: function login() {
            if (self.account === null || self.account === undefined) {
                modal.toast({ message: '请输入账号', duration: 1 });
                return;
            }
            if (self.pwd === null || self.pwd === undefined) {
                modal.toast({ message: '请输入密码', duration: 1 });
                return;
            }
            var jsonObj = {};
            jsonObj.userflag = self.account;
            jsonObj.password = self.pwd;

            UtilModule.okhttp(self.requestUrl, "weexlogin", JSON.stringify(jsonObj), function (result) {
                //设置到UI中
                self.setData2UI(result);
            });
        },
        register: function register() {
            navigator.push({
                url: _util2.default.pushUrl + 'weex/login/register.js',
                animated: true
            }, function (event) {});
        },
        setData2UI: function setData2UI(result) {
            if (result !== undefined && result !== null) {
                var tempData = JSON.parse(result);
                if (tempData.restate == 1) {
                    modal.toast({ message: '登录成功', duration: 1 });
                    navigator.push({
                        url: _util2.default.pushUrl + 'weex/mine/mytab.js',
                        animated: true,
                        data: {
                            userflag: self.account,
                            logintype: false
                        }
                    }, function (event) {});
                    return;
                }
                modal.toast({ message: tempData.redes, duration: 1 });
            }
        }
    }
};

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "column",
      backgroundColor: "#4E7FFF"
    }
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row",
      height: "100px",
      marginTop: "50px",
      alignItems: "center"
    }
  }, [_c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginLeft: "23px"
    },
    attrs: {
      "src": _vm.displayLoginImage
    },
    on: {
      "click": _vm.backPage
    }
  }), _c('text', {
    staticStyle: {
      fontSize: "38px",
      marginLeft: "35px",
      color: "white"
    },
    on: {
      "click": _vm.backPage
    }
  }, [_vm._v("登录")])]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "center"
    }
  }, [_c('image', {
    staticStyle: {
      width: "172px",
      height: "147px"
    },
    attrs: {
      "src": _vm.logoImage
    }
  })]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      height: "129px",
      marginTop: "70px"
    }
  }, [_c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginLeft: "60px",
      marginTop: "58px"
    },
    attrs: {
      "src": _vm.userImage
    }
  }), _c('input', {
    staticStyle: {
      marginLeft: "31px",
      fontSize: "32px",
      color: "white",
      flex: "1",
      marginTop: "33px",
      marginRight: "60px"
    },
    attrs: {
      "type": _vm.text,
      "placeholder": _vm.账号,
      "placeholderColor": "#FFF8F8",
      "singleline": "true",
      "maxLength": "20",
      "value": (_vm.account)
    },
    on: {
      "input": function($event) {
        _vm.account = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticStyle: {
      flexDirection: "column",
      height: "1px",
      backgroundColor: "#6892FF",
      marginLeft: "60px",
      marginRight: "60px"
    }
  }), _c('div', {
    staticStyle: {
      flexDirection: "row",
      height: "129px"
    }
  }, [_c('image', {
    staticStyle: {
      width: "34px",
      height: "38px",
      marginLeft: "65px",
      marginTop: "61px"
    },
    attrs: {
      "src": _vm.pwdImage
    }
  }), _c('input', {
    staticStyle: {
      marginLeft: "36px",
      fontSize: "32px",
      color: "white",
      flex: "1",
      marginTop: "33px",
      marginRight: "20px"
    },
    attrs: {
      "type": _vm.password,
      "placeholder": _vm.密码,
      "placeholderColor": "#FFF8F8",
      "singleline": "true",
      "value": (_vm.pwd)
    },
    on: {
      "input": function($event) {
        _vm.pwd = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticStyle: {
      flexDirection: "column",
      height: "1px",
      backgroundColor: "#6892FF",
      marginLeft: "60px",
      marginRight: "69px"
    }
  }), _c('div', {
    staticStyle: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "88px",
      marginTop: "19px",
      backgroundColor: "white",
      marginLeft: "60px",
      marginRight: "60px",
      borderRadius: "4px"
    },
    on: {
      "click": _vm.login
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#3490FE"
    }
  }, [_vm._v("登录")])]), _c('div', {
    staticStyle: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "88px",
      marginTop: "40px",
      marginLeft: "60px",
      marginRight: "60px",
      borderRadius: "4px",
      borderStyle: "solid",
      borderWidth: "2px",
      borderColor: "white"
    },
    on: {
      "click": _vm.register
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "36px",
      fontWeight: "500",
      color: "#FFFFFF"
    }
  }, [_vm._v("注册")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });