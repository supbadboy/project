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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
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

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _login = __webpack_require__(79);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_login2.default.el = '#root';
new Vue(_login2.default);

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(80)
)

/* script */
__vue_exports__ = __webpack_require__(81)

/* template */
var __vue_template__ = __webpack_require__(82)
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
__vue_options__.__file = "D:\\weex\\weex_test\\src\\weex\\zhihu\\login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-274fca00"
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

/***/ 80:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flexDirection": "column"
  },
  "base": {
    "flexDirection": "row",
    "height": "100",
    "marginTop": "30"
  },
  "text": {
    "fontSize": "38",
    "color": "#FFFFFF"
  },
  "img1": {
    "width": "44",
    "height": "44",
    "marginTop": 0,
    "marginRight": "30",
    "marginBottom": 0,
    "marginLeft": "30"
  },
  "img2": {
    "width": "150",
    "height": "150",
    "borderRadius": "75"
  }
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引用weex内置模型
var modal = weex.requireModule("modal");
//navigatorweex内置模型主要是控制切换特效的
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

var navigator = weex.requireModule("navigator");
//调用后台方法的固定写法
var UtilModule = weex.requireModule("UtilModule");
var self;

exports.default = {
    name: "login",
    data: {
        closeImage: "",
        loginImage: "",
        userImage: "",
        psImage: "",
        bgImage: ''
    },
    created: function created() {
        self = this;
        var imageUrl = _util2.default.imageUrl;
        self.closeImage = imageUrl + "login_close.png";
        self.loginImage = imageUrl + "pg.jpg";
        self.userImage = imageUrl + "login_use.png";
        self.psImage = imageUrl + "login_pwd.png";
        self.bgImage = imageUrl + "background.png";
    },

    methods: {
        login: function login() {
            if (self.username == null || self.username == undefined) {
                modal.toast({ message: '请输入账号', duration: 1 });
                return;
            }if (self.password == null || self.password == undefined) {
                modal.toast({ message: '请输入密码', duration: 1 });
                return;
            }
            var jsonObj = {};
            jsonObj.username = self.username;
            jsonObj.mima = self.password;
            //这里是封装的调用后端的方法参数分别是  后端的地址  后端方法名 后端方法的参数 回调函数
            UtilModule.okhttp(self.requestUrl, "weeexlogin", JSON.stringify(jsonObj), function (result) {
                self.setData2UI(result);
            });
        },
        register: function register() {
            navigator.push({
                url: _util2.default.pushUrl + "weex/zhihu/register.js",
                animated: true
            }, function (event) {});
        },
        backPage: function backPage() {
            navigator.push({
                url: _util2.default.pushUrl + "index.js",
                animated: true
            }, function (event) {});
        },
        setData2UI: function setData2UI(result) {
            if (!result == null || !result == undefined) {
                var tempData = JSON.parse(result);
                if (tempData.restate == 1) {
                    modal.toast({ massage: "登录成功", duration: 1 });
                    navigator.push({
                        url: _util2.default.pushUrl + "weex/mine/mytab.js",
                        animated: true
                    }, function (event) {});
                    return;
                }
                modal.toast({ massage: "用户名或密码错误", duration: 1 });
            }
        }
    }
};

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticStyle: {
      width: "750px",
      height: "1334px",
      position: "absolute"
    },
    attrs: {
      "src": _vm.bgImage
    }
  }), _c('div', {
    staticClass: ["base"],
    staticStyle: {
      marginTop: "80px"
    }
  }, [_c('image', {
    staticClass: ["img1"],
    attrs: {
      "src": _vm.closeImage
    },
    on: {
      "click": _vm.backPage
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("登录")])]), _c('div', {
    staticClass: ["base"],
    staticStyle: {
      justifyContent: "center",
      height: "150px"
    }
  }, [_c('image', {
    staticClass: ["img2"],
    attrs: {
      "src": _vm.loginImage
    }
  })]), _c('div', {
    staticClass: ["base"],
    staticStyle: {
      justifyContent: "center"
    }
  }, [_c('image', {
    staticClass: ["img1"],
    attrs: {
      "src": _vm.userImage
    }
  }), _c('input', {
    attrs: {
      "type": "number",
      "placeholder": "用户名",
      "placeholderColor": "#FFF8F8",
      "singleline": "true",
      "maxlength": "20",
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        _vm.username = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["base"],
    staticStyle: {
      justifyContent: "center"
    }
  }, [_c('image', {
    staticClass: ["img1"],
    attrs: {
      "src": _vm.psImage
    }
  }), _c('input', {
    attrs: {
      "type": "password",
      "placeholder": "密码",
      "placeholderColor": "#FFF8F8",
      "singleline": "true",
      "maxlength": "20",
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        _vm.password = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["base"],
    staticStyle: {
      justifyContent: "center"
    }
  }, [_c('input', {
    staticStyle: {
      background: "#c40311"
    },
    attrs: {
      "type": "button",
      "value": "登录",
      "maxlength": "18"
    },
    on: {
      "click": _vm.login
    }
  })]), _c('div', {
    staticClass: ["base"],
    staticStyle: {
      justifyContent: "center"
    }
  }, [_c('input', {
    staticStyle: {
      background: "#ffffff"
    },
    attrs: {
      "type": "button",
      "value": "注册",
      "maxlength": "18"
    },
    on: {
      "click": _vm.register
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });