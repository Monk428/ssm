/**
 * @description H5分享插件
 *
 *        *****     ******     ********   ********
 *     *            *      *   *          *
 *    *       ***   *******    ******     ******
 *     *        *   *   *      *          *
 *       ******     *     *    ********   ********
 *
 */
const userAgent = window.navigator.userAgent;

/**
 * @description 分享辅助工具
 * @property loadScript 用来动态加载一个js脚本
 * @property ua 正则判断浏览器环境
 * @property qqJsSdkUrl qq分享sdk地址
 * @property wxJsSdkUrl 微信分享sdk地址
 * @property qqShareJsSdkUrl qq分享sdk地址
 */
const shareUtils = {
  loadScript(url, callback) {
    const doc = document;
    const head =
      doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;
    const script = doc.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    if (script.readyState) {
      script.onreadystatechange = function onreadystatechange() {
        if (/loaded|complete/i.test(script.readyState)) {
          script.onreadystatechange = null;
          callback && callback.call(this);
        }
      };
    } else {
      script.onload = function onload() {
        callback && callback.call(this);
      };
    }
    script.src = url;
    head.insertBefore(script, head.firstChild);
  },
  ua: {
    isFromAndroid: /android/gi.test(userAgent),
    isFromIos: /iphone|ipod|ios/gi.test(userAgent),
    isFromWx: /MicroMessenger/gi.test(userAgent),
    isFromQQ: /mobile.*qq/gi.test(userAgent),
    isFromUC: /ucbrowser/gi.test(userAgent),
    isFromQQBrower: /mqqbrowser[^LightApp]/gi.test(userAgent),
    isFromQQBrowerLight: /MQQBrowserLightApp/gi.test(userAgent)
  },
  typesMap: ['wx', 'wxline', 'qq', 'qzone', 'sina'],
  qqJsSdkUrl: '//open.mobile.qq.com/sdk/qqapi.js?_bid=152',
  wxJsSdkUrl: '//res.wx.qq.com/open/js/jweixin-1.2.0.js',
  qqShareJsSdkUrl: '//jsapi.qq.com/get?api=app.setShareInfo,app.share'
};

const setShareInfo$1 = (type, info) => {
  switch (type) {
    case 'wx':
      wx.onMenuShareAppMessage(info); // 设置分享到微信好友内容
      break;
    case 'wxline':
      wx.onMenuShareTimeline(info); // 设置分享到微信朋友圈内容
      break;
    case 'qq':
      wx.onMenuShareQQ(info); // 设置分享到微信好友内容
      break;
    case 'qzone':
      wx.onMenuShareQZone(info); // 设置分享到qq空间
      break;
    default:
      break;
  }
};

/**
 * @description 设置微信分享信息
 * @param {number} types 微信分享的类型
 * @param {object} config 配置
 */
const setWxShareInfo = (types, config) => {
  const wxConfig = config.wx;
  const doSet = () => {
    const _wxConfig = Object.assign(
      {
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareQZone',
          'onMenuShareWeibo'
        ]
      },
      wxConfig
    );
    wx.config(_wxConfig);
    wx.ready(() => {
      try {
        types.forEach(item => {
          const _info = {
            title:
              (config.infoMap &&
                config.infoMap[item] &&
                config.infoMap[item].title) ||
              config.title,
            desc:
              (config.infoMap &&
                config.infoMap[item] &&
                config.infoMap[item].desc) ||
              config.desc,
            link:
              (config.infoMap &&
                config.infoMap[item] &&
                config.infoMap[item].link) ||
              config.link,
            imgUrl:
              (config.infoMap &&
                config.infoMap[item] &&
                config.infoMap[item].imgUrl) ||
              config.imgUrl
          };
          setShareInfo$1(item, _info);
        });
      } catch (e) {
        console.log(e);
      }
    });
  };
  if (window.wx) {
    doSet();
  } else {
    shareUtils.loadScript(shareUtils.wxJsSdkUrl, () => {
      doSet();
    });
  }
};

/**
 * 不同浏览器的分享策略
 */
const browserShare = {
  ucBrowserShare: (type, info) => {
    let iosType;
    let otherType;
    switch (type) {
      case 'wx':
        iosType = 'kWeixin';
        otherType = 'WechatFriends';
        break;
      case 'wxline':
        iosType = 'kWeixin';
        otherType = 'WechatFriend';
        break;
      case 'qq':
        iosType = 'kWeixin';
        otherType = 'WechatFriend';
        break;
      case 'qzone':
        iosType = 'kWeixin';
        otherType = 'WechatFriend';
        break;
      case 'sina':
        iosType = 'kWeixin';
        otherType = 'WechatFriend';
        break;
      default:
        break;
    }
    if (shareUtils.ua.isFromIos) {
      window.ucbrowser &&
        window.ucbrowser.web_share(
          info.title,
          info.imgUrl,
          info.link,
          iosType,
          '',
          '',
          ''
        );
    } else {
      window.ucweb &&
        window.ucweb.startRequest('shell.page_share', [
          info.title,
          info.imgUrl,
          info.link,
          otherType,
          '',
          ''
        ]);
    }
  },
  qqBrowserShare: (type, info) => {
    const doShare = to_app => {
      const _doShare = () => {
        try {
          browser.app.share(
            {
              title: info.title,
              description: info.desc,
              url: info.link,
              img_url: info.imgUrl,
              to_app
            },
            res => {}
          );
        } catch (e) {
          console.log(e);
        }
      };
      if (window.browser && browser.app && browser.app.share) {
        _doShare();
      } else {
        shareUtils.loadScript(shareUtils.qqShareJsSdkUrl, _doShare);
      }
    };
    switch (type) {
      case 'wx':
        doShare(1);
        break;
      case 'wxline':
        doShare(8);
        break;
      case 'qq':
        doShare(4);
        break;
      case 'qzone':
        doShare(3);
        break;
      case 'sina':
        doShare(11);
        break;
      default:
        break;
    }
  }
};

/**
 * @description 各种分享的SDK
 * @property wx 微信
 * @property qq QQ
 * @property wxline 朋友圈
 * @property qzone QQ空间
 * @property weibo 微博
 */
const shareFunction = {
  wx: info => {
    if (shareUtils.ua.isFromUC) {
      // uc浏览器
      browserShare.ucBrowserShare('wx',info);
      return;
    }

    if (shareUtils.ua.isFromQQBrower) {
      // qq浏览器
      browserShare.qqBrowserShare('wx', info);
    }
  },
  qq: () => {},
  wxline: () => {},
  qzone: () => {},
  weibo: () => {}
};

/**
 * @description 默认配置
 * @param {object} conf 配置
 */
const getDefaultConfig = conf => {
  const config = conf || {};
  const infoMapType = typeof config.infoMap;
  return {
    title: (config && config.title) || document.title,
    desc: (config && config.desc) || '',
    link: encodeURI((config && config.link) || window.location.href),
    imgUrl:
      (config && config.imgUrl) ||
      (document.querySelector('img') &&
        document.querySelector('img').getAttribute('src')) ||
      '',
    types: (config && Array.isArray(config.types) && config.types) || [
      'wx',
      'wxline',
      'qq',
      'qzone',
      'sina'
    ],
    wx: (config && config.wx) || null,
    fnDoShare: config.fnDoShare,
    infoMap:
      infoMapType === 'function' ||
      (infoMapType === 'object' && !!config.infoMap)
        ? config.infoMap
        : {}
  };
};

const shareSDK = {
  /**
   * @description 判断浏览器是否可以使用分享，暂时先支持QQ浏览器、UC浏览器、微信
   */
  shareIsUsable() {
    return (
      shareUtils.ua.isFromQQBrower ||
      shareUtils.ua.isFromQQBrowerLight ||
      shareUtils.ua.isFromUC ||
      shareUtils.ua.isFromWx
    );
  },
  /**
   *
   * @param {number} type 类型，暂时只有微信，见shareFunction
   * @param {object} config 配置
   */
  to(type, config) {
    const _config = getDefaultConfig(config);
    // init(_config);
    if (shareUtils.typesMap.indexOf(type) >= 0) {
      if (_config.fnDoShare) {
        _config.fnDoShare(type);
      }
      shareFunction[type](_config);
    }
  },
  /**
   * @description 如果是微信内，则直接使用微信的config
   * @param {object} config 配置
   */
  wxConfig(config) {
    const _config = getDefaultConfig(config);
    if (
      shareUtils.ua.isFromWx &&
      _config.wx &&
      _config.wx.appId &&
      _config.wx.timestamp &&
      _config.wx.nonceStr &&
      _config.wx.signature
    ) {
      setWxShareInfo(shareUtils.typesMap, _config);
    }
  }
};

export default shareSDK;
