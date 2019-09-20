import https from '@/common/https'

//微信分享
export const share = (url, keywords) => {
  return https.get("api/wechat/shareInfo", {
    url,
    keywords
  }).then(res => {
    // alert('shareInfo'+ JSON.stringify(res))
    wx.config({
      debug: false,
      appId: res.appid,
      timestamp: res.timestamp,
      nonceStr: res.noncestr,
      signature: res.signature,
      jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"]
    });
    wx.ready(function () {
      let shareConfig = {
        title: res.title,
        desc: res.desc,
        link: url,
        imgUrl: res.thumb,
        success: function () {}
      };

      //需在用户可能点击分享按钮前就先调用
      wx.updateAppMessageShareData(shareConfig);
      wx.updateTimelineShareData(shareConfig);
    });
  });
}

//获取瀑布流图片
export const getWaterfallFuc = group => {
  return https.get("/waterfall", {
    group,
  }).then(res => res.data);
}
