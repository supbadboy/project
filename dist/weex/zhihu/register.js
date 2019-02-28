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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
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

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _register = __webpack_require__(84);

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_register2.default.el = '#root';
new Vue(_register2.default);

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(85)
)

/* script */
__vue_exports__ = __webpack_require__(86)

/* template */
var __vue_template__ = __webpack_require__(87)
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
__vue_options__.__file = "D:\\weex\\weex_test\\src\\weex\\zhihu\\register.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5f3f1ddc"
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

/***/ 85:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 86:
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
    components: {},
    data: function data() {
        return {
            closeImage: '',
            phoneImage: '',
            pwdImage: '',
            protocolImage: '',
            requestUrl: '',
            isStartTimer: false,
            millisecond: 60,
            isAgreeRegister: false
        };
    },
    created: function created() {
        self = this;
        self.requestUrl = _util2.default.serverUrl;
        this.closeImage = _util2.default.imageUrl + "login_close.png";
        this.phoneImage = _util2.default.imageUrl + "peccancy_detail_police.png";
        this.pwdImage = _util2.default.imageUrl + "car_instance_icon.png";
        this.protocolImage = _util2.default.imageUrl + "protocol_select.png";
    },

    methods: {
        backPage: function backPage() {
            navigator.push({
                url: _util2.default.pushUrl + "weex/zhihu/login.js",
                animated: "true"
            }, function (event) {});
        },
        selectProtocol: function selectProtocol() {
            self.isAgreeRegister = !self.isAgreeRegister;
            self.protocolImage = _util2.default.imageUrl + (self.isAgreeRegister ? "protocol_unselect.png" : "protocol_select.png");
        },
        register: function register() {
            if (self.account === null || self.account === undefined) {
                modal.toast({ message: '请输入账号', duration: 1 });
                return;
            }
            if (self.pwd === null || self.pwd === undefined) {
                modal.toast({ message: '请输入密码', duration: 1 });
                return;
            }
            if (self.oldpwd === null || self.oldpwd === undefined) {
                modal.toast({ message: '请输入密码', duration: 1 });
                return;
            }
            if (self.pwd != self.oldpwd) {
                modal.toast({ message: '两次输入的密码不一致', duration: 1 });
                return;
            }
            if (self.isAgreeRegister) {
                modal.toast({ message: '请同意注册协议', duration: 1 });
                return;
            }

            var jsonObj = {};
            jsonObj.username = self.account;
            jsonObj.mima = self.pwd;
            jsonObj.oldmima = self.oldpwd;

            UtilModule.okhttp(self.requestUrl, "weexregister", JSON.stringify(jsonObj), function (result) {
                //设置到UI中
                self.setData2UI(result);
            });
        },
        setData2UI: function setData2UI(result) {
            if (result !== undefined && result !== null) {
                var tempData = JSON.parse(result);
                if (tempData.restate == 1) {
                    modal.toast({ message: '恭喜您，注册成功', duration: 1 });
                    navigator.pop({
                        animated: "true"
                    }, function (event) {});
                    return;
                }
                modal.toast({ message: tempData.redes, duration: 1 });
                return;
            }
            modal.toast({ message: '注册失败', duration: 1 });
        }
    }
};

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "column",
      backgroundColor: "white"
    }
  }, [_c('div', {
    staticStyle: {
      height: "100px",
      width: "750px",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#4E7FFF"
    }
  }, [_c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginLeft: "23px"
    },
    attrs: {
      "src": _vm.closeImage
    },
    on: {
      "click": _vm.backPage
    }
  }), _c('text', {
    staticStyle: {
      color: "#FFFFFF",
      fontSize: "38px",
      marginLeft: "30px",
      flex: "1"
    }
  }, [_vm._v("注册")])]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      height: "149px"
    }
  }, [_c('image', {
    staticStyle: {
      height: "44px",
      width: "44px",
      marginTop: "77px",
      marginLeft: "60px"
    },
    attrs: {
      "src": _vm.phoneImage
    }
  }), _c('input', {
    staticStyle: {
      marginLeft: "31px",
      fontSize: "32px",
      color: "#333333",
      flex: "1",
      marginTop: "50px",
      marginRight: "20px"
    },
    attrs: {
      "type": "number",
      "placeholder": "输入用户名",
      "placeholderColor": "#B8BDCD",
      "singleline": "true",
      "value": (_vm.account)
    },
    on: {
      "input": function($event) {
        _vm.account = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticStyle: {
      marginLeft: "60px",
      marginRight: "60px",
      height: "1px",
      backgroundColor: "#F1F1F1"
    }
  }), _c('div', {
    staticStyle: {
      flexDirection: "row",
      height: "131px"
    }
  }, [_c('image', {
    staticStyle: {
      height: "44px",
      width: "44px",
      marginTop: "59px",
      marginLeft: "60px"
    },
    attrs: {
      "src": _vm.pwdImage
    }
  }), _c('input', {
    staticStyle: {
      marginLeft: "31px",
      fontSize: "32px",
      color: "#b8bdcd",
      flex: "1",
      marginTop: "30px",
      marginRight: "20px"
    },
    attrs: {
      "type": "password",
      "placeholder": "输入密码",
      "placeholderColor": "#B8BDCD",
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
      marginLeft: "60px",
      marginRight: "60px",
      height: "1px",
      backgroundColor: "#F1F1F1"
    }
  }), _c('div', {
    staticStyle: {
      flexDirection: "row",
      height: "128px"
    }
  }, [_c('image', {
    staticStyle: {
      height: "44px",
      width: "44px",
      marginTop: "59px",
      marginLeft: "60px"
    },
    attrs: {
      "src": _vm.pwdImage
    }
  }), _c('input', {
    staticStyle: {
      marginLeft: "31px",
      fontSize: "32px",
      color: "#333333",
      flex: "1",
      marginTop: "30px",
      marginRight: "20px"
    },
    attrs: {
      "type": "password",
      "placeholder": "确认密码",
      "placeholderColor": "#B8BDCD",
      "singleline": "true",
      "value": (_vm.oldpwd)
    },
    on: {
      "input": function($event) {
        _vm.oldpwd = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticStyle: {
      marginLeft: "60px",
      marginRight: "60px",
      height: "1px",
      backgroundColor: "#F1F1F1"
    }
  }), _c('div', {
    staticStyle: {
      flexDirection: "row",
      marginLeft: "56px",
      marginTop: "23px"
    }
  }, [_c('image', {
    staticStyle: {
      width: "32px",
      height: "32px"
    },
    attrs: {
      "src": _vm.protocolImage
    },
    on: {
      "click": _vm.selectProtocol
    }
  }), _c('text', {
    staticStyle: {
      fontSize: "24px",
      color: "#999999",
      marginLeft: "7px"
    },
    on: {
      "click": _vm.selectProtocol
    }
  }, [_vm._v("我已阅读并同意")]), _c('text', {
    staticStyle: {
      fontSize: "24px",
      color: "#489EFF"
    },
    on: {
      "click": _vm.registerProtocolClick
    }
  }, [_vm._v("<<用户注册协议>>")])]), _c('div', {
    staticStyle: {
      flexDirection: "column",
      height: "88px",
      marginLeft: "60px",
      marginRight: "60px",
      marginTop: "100px",
      backgroundColor: "#4E7FFF",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "4px"
    },
    on: {
      "click": _vm.register
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#FFFFFF"
    }
  }, [_vm._v("完成注册")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });