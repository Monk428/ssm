(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NativeShare.js"] = factory();
	else
		root["NativeShare.js"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/utils.js
var UA = navigator.userAgent;

var isIpad = /(iPad).*OS\s([\d_]+)/.test(UA);
var isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(UA);
var isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(UA);
var isIos = isIpad || isIpod || isIphone;
var isAndroid = /(Android);?[\s\/]+([\d.]+)?/.test(UA);
var isWechat = /micromessenger/i.test(UA);
var isQQ = /QQ\/([\d\.]+)/.test(UA);
var isQZone = /Qzone\//.test(UA);
var isQQMBrowser = /MQQBrowser/i.test(UA) && !isWechat && !isQQ;
var isUCMBrowser = /UCBrowser/i.test(UA);
var isBaiduMBrowser = /mobile.*baidubrowser/i.test(UA);
var isSogouMBrowser = /SogouMobileBrowser/i.test(UA);
var isBaiduApp = /baiduboxapp/i.test(UA);

function noop() {}

function loadJs(src) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

    var ref = document.getElementsByTagName('script')[0];
    var script = document.createElement('script');
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
    script.onload = callback;
}

function utils_assign(target, varArgs) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
            for (var nextKey in nextSource) {
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}

function openAppByScheme(scheme) {
    if (isIos) {
        location.href = scheme;
    } else {
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = scheme;
        document.body.appendChild(iframe);
        setTimeout(function () {
            iframe && iframe.parentNode && iframe.parentNode.removeChild(iframe);
        }, 2000);
    }
}

function generateQueryString(queryObj) {
    var needEncode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var arr = [];
    for (var key in queryObj) {
        if (needEncode) {
            arr.push(key + '=' + encodeURIComponent(queryObj[key]));
        } else {
            arr.push(key + '=' + queryObj[key]);
        }
    }
    return arr.join('&');
}

var Base64 = {
    _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    encode: function encode(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i = '',
            j = 0;
        for (a = Base64._utf8_encode(a); j < a.length;) {
            b = a.charCodeAt(j++), c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = b >> 2, f = (3 & b) << 4 | c >> 4, g = (15 & c) << 2 | d >> 6, h = 63 & d, isNaN(c) ? g = h = 64 : isNaN(d) && (h = 64), i = i + this._keyStr.charAt(e) + this._keyStr.charAt(f) + this._keyStr.charAt(g) + this._keyStr.charAt(h);
        }return i;
    },
    _utf8_encode: function _utf8_encode(a) {
        a = a.replace(/\r\n/g, '\n');
        for (var b = '', c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            d < 128 ? b += String.fromCharCode(d) : d > 127 && d < 2048 ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
        }
        return b;
    }
};

function getHostnameFromUrl(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}

var descTag = document.querySelector('meta[name=description]');
var iconTag = document.querySelector('link[rel*=icon]');

function getContentFromDescTag() {
    return Object(descTag).content || '';
}

function getHrefFromIconTag() {
    return Object(iconTag).href || location.protocol + '//' + location.hostname + '/favicon.ico';
}

function getTitleFromTitleTag() {
    return document.title;
}

function setDescTagContent(content) {
    if (descTag) {
        descTag.content = content;
    } else {
        document.head.insertAdjacentHTML('beforeend', '<meta name="description" content="' + content + '">');
    }
}

function setIconTagHref(href) {
    if (iconTag) {
        iconTag.href = href;
    } else {
        document.head.insertAdjacentHTML('beforeend', '<link rel="shortcut icon" href="' + href + '">');
    }
}

function setTitleTagTitle(title) {
    document.title = title;
}


// CONCATENATED MODULE: ./src/shareData.js


/* harmony default export */ var src_shareData = ({
    link: location.href,
    title: getTitleFromTitleTag(),
    desc: getContentFromDescTag(),
    icon: getHrefFromIconTag(),
    from: '',
    success: noop,
    fail: noop,
    trigger: noop
});
// CONCATENATED MODULE: ./src/specifyShare.js



function generateQQQueryString(shareData) {
    return generateQueryString({
        share_id: 924053302,
        url: Base64.encode(shareData.link),
        title: Base64.encode(shareData.title),
        description: Base64.encode(shareData.desc),
        previewimageUrl: Base64.encode(shareData.icon), // ios
        image_url: Base64.encode(shareData.icon) // android
    });
}

function shareToQQ() {
    var shareScheme = isIos ? 'mqqapi://share/to_fri?src_type=web&version=1&file_type=news' : 'mqqapi://share/to_fri?src_type=isqqBrowser&version=1&file_type=news';
    openAppByScheme(shareScheme + '&' + generateQQQueryString(src_shareData));
}

function shareToQZone() {
    var shareScheme = isIos ? 'mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A' : 'mqqapi://share/to_qzone?src_type=isqqBrowser&version=1&file_type=news&req_type=1';
    openAppByScheme(shareScheme + '&' + generateQQQueryString(src_shareData));
}

function shareToQZone4Web() {
    var queryObj = {
        url: src_shareData.link,
        title: src_shareData.title,
        pic: src_shareData.icon,
        desc: src_shareData.desc
    };
    location.href = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + generateQueryString(queryObj, true);
}

function shareToWeibo4Web() {
    var queryObj = {
        url: src_shareData.link,
        title: src_shareData.title,
        pic: src_shareData.icon
    };
    location.href = 'http://service.weibo.com/share/share.php?' + generateQueryString(queryObj, true);
}


// CONCATENATED MODULE: ./src/Share.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Share_Share = function () {
    function Share(config) {
        _classCallCheck(this, Share);

        this._shareData = src_shareData;
        this._config = {
            syncDescToTag: false,
            syncIconToTag: false,
            syncTitleToTag: false
        };

        this.setConfig(config);
    }

    _createClass(Share, [{
        key: 'getShareData',
        value: function getShareData() {
            return utils_assign({}, this._shareData);
        }
    }, {
        key: 'setShareData',
        value: function setShareData() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            utils_assign(this._shareData, options);
            if (this._config.syncDescToTag) {
                setDescTagContent(this._shareData.desc);
            }
            if (this._config.syncIconToTag) {
                setIconTagHref(this._shareData.icon);
            }
            if (this._config.syncTitleToTag) {
                setTitleTagTitle(this._shareData.title);
            }
        }
    }, {
        key: 'setConfig',
        value: function setConfig() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            utils_assign(this._config, config);
        }
    }, {
        key: 'getConfig',
        value: function getConfig() {
            return utils_assign({}, this._config);
        }
    }]);

    return Share;
}();

/* harmony default export */ var src_Share = (Share_Share);
// CONCATENATED MODULE: ./src/command.js
var wechatFriend = 'wechatfriend';
var wechatTimeline = 'wechattimeline';
var qqFriend = 'qqfriend';
var qZone = 'qzone';
var weibo = 'weibo';
var copyUrl = 'copyurl';
var more = 'more';
var generateQRCode = 'generateqrcode';
var defaultCommand = 'default';
// CONCATENATED MODULE: ./src/QQMobileBrowser.js
var _QQMobileBrowser$comm;

var QQMobileBrowser__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function QQMobileBrowser__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var QQMobileBrowser_QQMobileBrowser = function (_Share) {
    _inherits(QQMobileBrowser, _Share);

    function QQMobileBrowser(config) {
        QQMobileBrowser__classCallCheck(this, QQMobileBrowser);

        var _this = _possibleConstructorReturn(this, (QQMobileBrowser.__proto__ || Object.getPrototypeOf(QQMobileBrowser)).call(this, config));

        loadJs('https://jsapi.qq.com/get?api=app.share');
        return _this;
    }

    QQMobileBrowser__createClass(QQMobileBrowser, [{
        key: 'call',
        value: function call() {
            var command = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
            var options = arguments[1];

            this.setShareData(options);
            var shareData = this.getShareData();
            var toApp = this.constructor.commamdMap[String(command).toLowerCase()];
            browser.app.share({
                title: shareData.title,
                description: shareData.desc,
                url: shareData.link,
                img_url: shareData.icon,
                from: shareData.from,
                to_app: toApp
            });
        }
    }]);

    return QQMobileBrowser;
}(src_Share);

QQMobileBrowser_QQMobileBrowser.commamdMap = (_QQMobileBrowser$comm = {}, _defineProperty(_QQMobileBrowser$comm, wechatTimeline, 8), _defineProperty(_QQMobileBrowser$comm, wechatFriend, 1), _defineProperty(_QQMobileBrowser$comm, qqFriend, 4), _defineProperty(_QQMobileBrowser$comm, qZone, 3), _defineProperty(_QQMobileBrowser$comm, weibo, 11), _defineProperty(_QQMobileBrowser$comm, copyUrl, 10), _defineProperty(_QQMobileBrowser$comm, more, 5), _defineProperty(_QQMobileBrowser$comm, generateQRCode, 7), _defineProperty(_QQMobileBrowser$comm, defaultCommand, undefined), _QQMobileBrowser$comm);
/* harmony default export */ var src_QQMobileBrowser = (QQMobileBrowser_QQMobileBrowser);
// CONCATENATED MODULE: ./src/UCIosBrowser.js
var _UCIosBrowser$commamd;

var UCIosBrowser__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function UCIosBrowser__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UCIosBrowser__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UCIosBrowser__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function UCIosBrowser__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var UCIosBrowser = function (_Share) {
    UCIosBrowser__inherits(UCIosBrowser, _Share);

    function UCIosBrowser(config) {
        UCIosBrowser__classCallCheck(this, UCIosBrowser);

        return UCIosBrowser__possibleConstructorReturn(this, (UCIosBrowser.__proto__ || Object.getPrototypeOf(UCIosBrowser)).call(this, config));
    }

    UCIosBrowser__createClass(UCIosBrowser, [{
        key: 'call',
        value: function call() {
            var command = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
            var options = arguments[1];

            this.setShareData(options);
            var shareData = this.getShareData();
            var toApp = this.constructor.commamdMap[String(command).toLowerCase()];
            if (ucbrowser.web_shareEX) {
                ucbrowser.web_shareEX(JSON.stringify({
                    title: shareData.title,
                    content: shareData.desc,
                    sourceUrl: shareData.link,
                    imageUrl: shareData.icon,
                    source: shareData.from,
                    target: toApp
                }));
            } else {
                ucbrowser.web_share(title, desc, link, toApp, '', from, '');
            }
        }
    }]);

    return UCIosBrowser;
}(src_Share);

UCIosBrowser.commamdMap = (_UCIosBrowser$commamd = {}, UCIosBrowser__defineProperty(_UCIosBrowser$commamd, wechatTimeline, 'kWeixinFriend'), UCIosBrowser__defineProperty(_UCIosBrowser$commamd, wechatFriend, 'kWeixin'), UCIosBrowser__defineProperty(_UCIosBrowser$commamd, qqFriend, 'kQQ'), UCIosBrowser__defineProperty(_UCIosBrowser$commamd, qZone, 'kQZone'), UCIosBrowser__defineProperty(_UCIosBrowser$commamd, weibo, 'kSinaWeibo'), UCIosBrowser__defineProperty(_UCIosBrowser$commamd, defaultCommand, undefined), _UCIosBrowser$commamd);
/* harmony default export */ var src_UCIosBrowser = (UCIosBrowser);
// CONCATENATED MODULE: ./src/UCAndroidBrowser.js
var _UCAndroidBrowser$com;

var UCAndroidBrowser__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function UCAndroidBrowser__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UCAndroidBrowser__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UCAndroidBrowser__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function UCAndroidBrowser__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var UCAndroidBrowser = function (_Share) {
    UCAndroidBrowser__inherits(UCAndroidBrowser, _Share);

    function UCAndroidBrowser(config) {
        UCAndroidBrowser__classCallCheck(this, UCAndroidBrowser);

        return UCAndroidBrowser__possibleConstructorReturn(this, (UCAndroidBrowser.__proto__ || Object.getPrototypeOf(UCAndroidBrowser)).call(this, config));
    }

    UCAndroidBrowser__createClass(UCAndroidBrowser, [{
        key: 'call',
        value: function call() {
            var command = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
            var options = arguments[1];

            this.setShareData(options);
            var shareData = this.getShareData();
            var toApp = this.constructor.commamdMap[String(command).toLowerCase()];
            ucweb.startRequest('shell.page_share', [shareData.title, shareData.desc, shareData.link, toApp, '', shareData.from, shareData.icon]);
        }
    }]);

    return UCAndroidBrowser;
}(src_Share);

UCAndroidBrowser.commamdMap = (_UCAndroidBrowser$com = {}, UCAndroidBrowser__defineProperty(_UCAndroidBrowser$com, wechatTimeline, 'WechatTimeline'), UCAndroidBrowser__defineProperty(_UCAndroidBrowser$com, wechatFriend, 'WechatFriends'), UCAndroidBrowser__defineProperty(_UCAndroidBrowser$com, qqFriend, 'QQ'), UCAndroidBrowser__defineProperty(_UCAndroidBrowser$com, qZone, 'Qzone'), UCAndroidBrowser__defineProperty(_UCAndroidBrowser$com, weibo, 'SinaWeibo'), UCAndroidBrowser__defineProperty(_UCAndroidBrowser$com, defaultCommand, ''), _UCAndroidBrowser$com);
/* harmony default export */ var src_UCAndroidBrowser = (UCAndroidBrowser);
// CONCATENATED MODULE: ./src/BaiduAndroidBrowser.js
var BaiduAndroidBrowser__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function BaiduAndroidBrowser__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BaiduAndroidBrowser__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BaiduAndroidBrowser__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var BaiduAndroidBrowser = function (_Share) {
    BaiduAndroidBrowser__inherits(BaiduAndroidBrowser, _Share);

    function BaiduAndroidBrowser(config) {
        BaiduAndroidBrowser__classCallCheck(this, BaiduAndroidBrowser);

        return BaiduAndroidBrowser__possibleConstructorReturn(this, (BaiduAndroidBrowser.__proto__ || Object.getPrototypeOf(BaiduAndroidBrowser)).call(this, config));
    }

    BaiduAndroidBrowser__createClass(BaiduAndroidBrowser, [{
        key: 'call',
        value: function call(command, options) {
            this.setShareData(options);
            var shareData = this.getShareData();
            _flyflowNative.exec('bd_utils', 'shareWebPage', JSON.stringify({
                title: shareData.title,
                content: shareData.desc,
                landurl: shareData.link,
                imageurl: shareData.icon,
                shareSource: shareData.from
            }), '');
        }
    }]);

    return BaiduAndroidBrowser;
}(src_Share);

/* harmony default export */ var src_BaiduAndroidBrowser = (BaiduAndroidBrowser);
// CONCATENATED MODULE: ./src/BaiduIosBrowser.js
var BaiduIosBrowser__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function BaiduIosBrowser__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BaiduIosBrowser__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BaiduIosBrowser__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var BaiduIosBrowser = function (_Share) {
    BaiduIosBrowser__inherits(BaiduIosBrowser, _Share);

    function BaiduIosBrowser(config) {
        BaiduIosBrowser__classCallCheck(this, BaiduIosBrowser);

        return BaiduIosBrowser__possibleConstructorReturn(this, (BaiduIosBrowser.__proto__ || Object.getPrototypeOf(BaiduIosBrowser)).call(this, config));
    }

    BaiduIosBrowser__createClass(BaiduIosBrowser, [{
        key: 'call',
        value: function call(command, options) {
            this.setShareData(options);
            var shareData = this.getShareData();
            location.href = 'baidubrowserapp://bd_utils?action=shareWebPage&params=' + encodeURIComponent(JSON.stringify({
                title: shareData.title,
                content: shareData.desc,
                imageurl: shareData.icon,
                landurl: shareData.link,
                mediaType: 0,
                share_type: 'webpage'
            }));
        }
    }]);

    return BaiduIosBrowser;
}(src_Share);

/* harmony default export */ var src_BaiduIosBrowser = (BaiduIosBrowser);
// CONCATENATED MODULE: ./src/SogouIosBrowser.js
var SogouIosBrowser__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function SogouIosBrowser__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SogouIosBrowser__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SogouIosBrowser__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SogouIosBrowser = function (_Share) {
    SogouIosBrowser__inherits(SogouIosBrowser, _Share);

    function SogouIosBrowser(config) {
        SogouIosBrowser__classCallCheck(this, SogouIosBrowser);

        return SogouIosBrowser__possibleConstructorReturn(this, (SogouIosBrowser.__proto__ || Object.getPrototypeOf(SogouIosBrowser)).call(this, config));
    }

    SogouIosBrowser__createClass(SogouIosBrowser, [{
        key: 'call',
        value: function call(command, options) {
            this.setShareData(options);
            var shareData = this.getShareData();
            SogouMse.Utility.shareWithInfo({
                shareTitle: shareData.title,
                shareContent: shareData.desc,
                shareImageUrl: shareData.icon,
                shareUrl: shareData.link
            });
        }
    }]);

    return SogouIosBrowser;
}(src_Share);

/* harmony default export */ var src_SogouIosBrowser = (SogouIosBrowser);
// CONCATENATED MODULE: ./src/Wechat.js
var Wechat__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function Wechat__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Wechat__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Wechat__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Wechat_Wechat = function (_Share) {
    Wechat__inherits(Wechat, _Share);

    function Wechat(config) {
        Wechat__classCallCheck(this, Wechat);

        var _this = Wechat__possibleConstructorReturn(this, (Wechat.__proto__ || Object.getPrototypeOf(Wechat)).call(this, config));

        _this.setConfig(config);
        return _this;
    }

    Wechat__createClass(Wechat, [{
        key: 'call',
        value: function call(command, options) {
            this.setShareData(options);
        }
    }, {
        key: 'setConfig',
        value: function setConfig(config) {
            _get(Wechat.prototype.__proto__ || Object.getPrototypeOf(Wechat.prototype), 'setConfig', this).call(this, config);
            this.init(this.getConfig().wechatConfig);
        }
    }, {
        key: 'init',
        value: function init(config) {
            var _this2 = this;

            if (!config) {
                return;
            }
            loadJs('https://res.wx.qq.com/open/js/jweixin-1.2.0.js', function () {
                wx.config(utils_assign({
                    debug: false,
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
                }, config));

                var shareData = _this2._shareData;
                var wxShareData = {};

                Object.defineProperty(wxShareData, 'trigger', {
                    get: function get() {
                        return function () {
                            utils_assign(wxShareData, {
                                title: shareData.title,
                                desc: shareData.desc,
                                link: shareData.link,
                                imgUrl: shareData.icon,
                                type: shareData.type,
                                dataUrl: shareData.dataUrl,
                                success: shareData.success,
                                fail: shareData.fail,
                                cancel: shareData.fail
                            });
                            shareData.trigger.apply(shareData, arguments);
                        };
                    },
                    set: function set(newValue) {
                        shareData.trigger = newValue;
                    },

                    enumerable: true
                });

                wx.ready(function () {
                    wx.onMenuShareAppMessage(wxShareData);
                    wx.onMenuShareQQ(wxShareData);
                    wx.onMenuShareQZone(wxShareData);
                    wx.onMenuShareWeibo(wxShareData);
                    wx.onMenuShareTimeline(wxShareData);
                });
            });
        }
    }]);

    return Wechat;
}(src_Share);

/* harmony default export */ var src_Wechat = (Wechat_Wechat);
// CONCATENATED MODULE: ./src/Others.js
var Others__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Others__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Others__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Others__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Others_Others = function (_Share) {
    Others__inherits(Others, _Share);

    function Others(config) {
        Others__classCallCheck(this, Others);

        return Others__possibleConstructorReturn(this, (Others.__proto__ || Object.getPrototypeOf(Others)).call(this, config));
    }

    Others__createClass(Others, [{
        key: 'call',
        value: function call() {
            var command = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
            var options = arguments[1];

            this.setShareData(options);

            command = String(command).toLowerCase();

            if (command === weibo) {
                shareToWeibo4Web();
            } else {
                if (command === qqFriend) {
                    shareToQQ();
                } else if (command === qZone) {
                    shareToQZone();
                }

                throw new Error('the browser may not support command ' + command + '!');
            }
        }
    }]);

    return Others;
}(src_Share);

/* harmony default export */ var src_Others = (Others_Others);
// CONCATENATED MODULE: ./src/QQIos.js
var QQIos__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function QQIos__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function QQIos__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function QQIos__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var QQIos_QQIos = function (_Share) {
    QQIos__inherits(QQIos, _Share);

    function QQIos(config) {
        QQIos__classCallCheck(this, QQIos);

        var _this = QQIos__possibleConstructorReturn(this, (QQIos.__proto__ || Object.getPrototypeOf(QQIos)).call(this, config));

        _this.init();
        return _this;
    }

    QQIos__createClass(QQIos, [{
        key: 'call',
        value: function call() {
            var command = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
            var options = arguments[1];

            this.setShareData(options);
            mqq.ui.showShareMenu();
        }
    }, {
        key: 'init',
        value: function init() {
            var _this2 = this;

            loadJs('https://open.mobile.qq.com/sdk/qqapi.js', function () {
                var shareData = _this2._shareData;
                mqq.ui.setOnShareHandler(function (type) {
                    mqq.ui.shareMessage({
                        back: true,
                        share_type: type,
                        title: shareData.title,
                        desc: shareData.desc,
                        share_url: shareData.link,
                        image_url: shareData.icon,
                        sourceName: shareData.from
                    }, function (data) {
                        if (data.retCode === 0) {
                            shareData.success(data);
                        } else {
                            shareData.fail(data);
                        }
                    });
                });
            });
        }
    }]);

    return QQIos;
}(src_Share);

/* harmony default export */ var src_QQIos = (QQIos_QQIos);
// CONCATENATED MODULE: ./src/QQAndroid.js
var QQAndroid__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var QQAndroid__get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function QQAndroid__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function QQAndroid__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function QQAndroid__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var QQAndroid_QQAndroid = function (_Share) {
    QQAndroid__inherits(QQAndroid, _Share);

    function QQAndroid(config) {
        QQAndroid__classCallCheck(this, QQAndroid);

        var _this = QQAndroid__possibleConstructorReturn(this, (QQAndroid.__proto__ || Object.getPrototypeOf(QQAndroid)).call(this, config));

        _this.init();
        return _this;
    }

    QQAndroid__createClass(QQAndroid, [{
        key: 'setShareData',
        value: function setShareData(options) {
            QQAndroid__get(QQAndroid.prototype.__proto__ || Object.getPrototypeOf(QQAndroid.prototype), 'setShareData', this).call(this, options);
            var shareData = this.getShareData();
            if (getHostnameFromUrl(shareData.link) !== location.hostname) {
                shareData.link = location.href;
                console.warn('安卓的QQ自带浏览器分享url必须跟页面url同一个域名，已自动为你设置为当前页面的url');
            }
            try {
                mqq.data.setShareInfo({
                    share_url: shareData.link,
                    title: shareData.title,
                    desc: shareData.desc,
                    image_url: shareData.icon
                }, function (data) {
                    if (data !== true) {
                        console.warn(data);
                    }
                });
            } catch (err) {}
        }
    }, {
        key: 'call',
        value: function call() {
            var command = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
            var options = arguments[1];

            this.setShareData(options);
            mqq.ui.showShareMenu();
        }
    }, {
        key: 'init',
        value: function init() {
            var _this2 = this;

            loadJs('https://open.mobile.qq.com/sdk/qqapi.js', function () {
                _this2.setShareData();
            });
        }
    }]);

    return QQAndroid;
}(src_Share);

/* harmony default export */ var src_QQAndroid = (QQAndroid_QQAndroid);
// CONCATENATED MODULE: ./src/QZone.js
var QZone__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function QZone__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function QZone__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function QZone__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var QZone_QQ = function (_Share) {
    QZone__inherits(QQ, _Share);

    function QQ(config) {
        QZone__classCallCheck(this, QQ);

        var _this = QZone__possibleConstructorReturn(this, (QQ.__proto__ || Object.getPrototypeOf(QQ)).call(this, config));

        _this.init();
        return _this;
    }

    QZone__createClass(QQ, [{
        key: 'call',
        value: function call() {
            var _this2 = this;

            var command = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
            var options = arguments[1];

            this.setShareData(options);

            var shareData = this.getShareData();
            var imageArr = [],
                titleArr = [],
                summaryArr = [],
                shareURLArr = [];
            for (var i = 0; i < 5; i++) {
                imageArr.push(shareData.icon);
                shareURLArr.push(shareData.link);
                titleArr.push(shareData.title);
                summaryArr.push(shareData.desc);
            }
            QZAppExternal.setShare(function (_ref) {
                var code = _ref.code;

                if (code != 0) {
                    _this2.hasSomethingWrong = true;
                }
            }, {
                type: 'share',
                image: imageArr,
                title: titleArr,
                summary: summaryArr,
                shareURL: shareURLArr
            });
        }
    }, {
        key: 'setShareData',
        value: function setShareData(options) {
            try {
                this.call('default', options);
            } catch (err) {}
        }
    }, {
        key: 'init',
        value: function init() {
            var _this3 = this;

            loadJs('https://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js', function () {
                _this3.call('default');
            });
        }
    }]);

    return QQ;
}(src_Share);

/* harmony default export */ var QZone = (QZone_QQ);
// CONCATENATED MODULE: ./src/BaiduIos.js
var BaiduIos__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function BaiduIos__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BaiduIos__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BaiduIos__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var BaiduIos = function (_Share) {
    BaiduIos__inherits(BaiduIos, _Share);

    function BaiduIos(config) {
        BaiduIos__classCallCheck(this, BaiduIos);

        return BaiduIos__possibleConstructorReturn(this, (BaiduIos.__proto__ || Object.getPrototypeOf(BaiduIos)).call(this, config));
    }

    BaiduIos__createClass(BaiduIos, [{
        key: 'call',
        value: function call(command, options) {
            this.setShareData(options);
            var shareData = this.getShareData();
            window.NativeShareFailCallback = shareData.fail;
            window.NativeShareSuccessCallback = shareData.success;
            location.href = 'baiduboxapp://callShare?' + ['options=' + encodeURIComponent(JSON.stringify({
                title: shareData.title,
                imageUrl: '',
                mediaType: 'all',
                content: shareData.desc,
                linkUrl: shareData.link,
                iconUrl: shareData.icon
            })), 'errorcallback=window.NativeShareFailCallback', 'successcallback=window.NativeShareSuccessCallback'].join('&');
        }
    }]);

    return BaiduIos;
}(src_Share);

/* harmony default export */ var src_BaiduIos = (BaiduIos);
// CONCATENATED MODULE: ./src/BaiduAndroid.js
var BaiduAndroid__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function BaiduAndroid__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BaiduAndroid__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BaiduAndroid__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var BaiduAndroid = function (_Share) {
    BaiduAndroid__inherits(BaiduAndroid, _Share);

    function BaiduAndroid(config) {
        BaiduAndroid__classCallCheck(this, BaiduAndroid);

        return BaiduAndroid__possibleConstructorReturn(this, (BaiduAndroid.__proto__ || Object.getPrototypeOf(BaiduAndroid)).call(this, config));
    }

    BaiduAndroid__createClass(BaiduAndroid, [{
        key: 'call',
        value: function call(command, options) {
            this.setShareData(options);
            var shareData = this.getShareData();
            window.NativeShareFailCallback = shareData.fail;
            window.NativeShareSuccessCallback = shareData.success;

            prompt('BdboxApp:' + JSON.stringify({
                obj: 'Bdbox_android_utils',
                func: 'callShare',
                args: ['{\n                            imageUrl: "",\n                            mediaType: "all",\n                            title: "' + shareData.title + '",\n                            content: "' + shareData.desc + '",\n                            linkUrl: "' + shareData.link + '",\n                            iconUrl: "' + shareData.icon + '"\n                        }', 'window.NativeShareSuccessCallback', 'window.NativeShareFailCallback']
            }));
        }
    }]);

    return BaiduAndroid;
}(src_Share);

/* harmony default export */ var src_BaiduAndroid = (BaiduAndroid);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Share", function() { return src_Share; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "QQMobileBrowser", function() { return src_QQMobileBrowser; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCIosBrowser", function() { return src_UCIosBrowser; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCAndroidBrowser", function() { return src_UCAndroidBrowser; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BaiduAndroidBrowser", function() { return src_BaiduAndroidBrowser; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BaiduIosBrowser", function() { return src_BaiduIosBrowser; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SogouIosBrowser", function() { return src_SogouIosBrowser; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BaiduIos", function() { return src_BaiduIos; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BaiduAndroid", function() { return src_BaiduAndroid; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Wechat", function() { return src_Wechat; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Others", function() { return src_Others; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "QQIos", function() { return src_QQIos; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "QQAndroid", function() { return src_QQAndroid; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "QZone", function() { return QZone; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "shareToQQ", function() { return shareToQQ; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "shareToQZone", function() { return shareToQZone; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "shareToWeibo4Web", function() { return shareToWeibo4Web; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "shareToQZone4Web", function() { return shareToQZone4Web; });

















var NativeShare = void 0;

if (isWechat) {
    NativeShare = src_Wechat;
} else if (isQQ && isIos) {
    NativeShare = src_QQIos;
} else if (isQQ && isAndroid) {
    NativeShare = src_QQAndroid;
} else if (isQZone) {
    NativeShare = QZone;
} else if (isQQMBrowser) {
    NativeShare = src_QQMobileBrowser;
} else if (isUCMBrowser && isIos) {
    NativeShare = src_UCIosBrowser;
} else if (isUCMBrowser && isAndroid) {
    NativeShare = src_UCAndroidBrowser;
} else if (isBaiduMBrowser && isAndroid) {
    NativeShare = src_BaiduAndroidBrowser;
} else if (isBaiduMBrowser && isIos) {
    NativeShare = src_BaiduIosBrowser;
} else if (isSogouMBrowser && isIos) {
    NativeShare = src_SogouIosBrowser;
} else if (isBaiduApp && isIos) {
    NativeShare = src_BaiduIos;
} else if (isBaiduApp && isAndroid) {
    NativeShare = src_BaiduAndroid;
} else {
    NativeShare = src_Others;
}



window.NativeShare = NativeShare;
/* harmony default export */ var src = __webpack_exports__["default"] = (NativeShare);

/***/ })
/******/ ]);
});