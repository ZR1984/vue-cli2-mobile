/**
 * @desc 时间戳转时间格式
 * @param {String} data 时间戳
 * @returns {String} 时间日期格式
 */
export const format = function (data) {
  let unixtime = data
  let unixTimestamp = new Date(unixtime * 1000)
  let Y = unixTimestamp.getFullYear()
  let M = ((unixTimestamp.getMonth() + 1) >= 10 ? (unixTimestamp.getMonth() + 1) : '0' + (unixTimestamp.getMonth() + 1))
  let D = (unixTimestamp.getDate() >= 10 ? unixTimestamp.getDate() : '0' + unixTimestamp.getDate())
  let h = (unixTimestamp.getHours() >= 10 ? unixTimestamp.getHours() : '0' + unixTimestamp.getHours());
  let min = (unixTimestamp.getMinutes() >= 10 ? unixTimestamp.getMinutes() : '0' + unixTimestamp.getMinutes());
  let s = (unixTimestamp.getSeconds() >= 10 ? unixTimestamp.getSeconds() : '0' + unixTimestamp.getSeconds());
  let time = `${Y}-${M}-${D}`
  return time;
}


/**
 * @desc 字符串截取,超出长度拼接"..."
 * @param {String} str 原始字符串
 * @param {int} len 截取长度
 * @returns {String} 截取后数据
 */
export const strFormat = function (str, len) {
  var str_length = 0;
  var str_len = 0;
  let str_cut = new String();
  str_len = str.length;
  for (var i = 0; i < str_len; i++) {
    let a = str.charAt(i);
    str_length++;
    if (escape(a).length > 4) {
      //中文字符的长度经编码之后大于4 
      str_length++;
    }
    str_cut = str_cut.concat(a);
    if (str_length >= len) {
      str_cut = str_cut.concat("...");
      return str_cut;
    }
  }
  //如果给定字符串小于指定长度，则返回原始符串； 
  if (str_length < len) {
    return str;
  }
}

/**
 *  @desc 设置  本地缓存
 */
export const setStorage = function (key, obj) {
  if (typeof obj === 'string') {
    localStorage.setItem(key, obj);
  } else {
    localStorage.setItem(key, JSON.stringify(obj));
  }
}

/**
 *  @desc 获取 本地缓存
 */
export const getStorage = function (key) {
  let val = localStorage.getItem(key);
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
}

/**
 *  @desc 删除, 如果不传值, 删除所有
 */
export const clearStorage = function (key) {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
}

/**
 * @desc 判断是否是 null, '', undefined
 * @returns {Boolean}
 */
export const isNot = function (val) {
  if (val === null || val === '' || val === undefined) {
    return true;
  } else {
    return false;
  }
}

/**
 * @description 复制不显示在页面上的数据
 */
export const copyData = function (data) {
  var Url2 = data;
  var oInput = document.createElement("input");
  oInput.value = Url2;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  oInput.style.display = "none";
}

/**
 * @description 上传到服务器前压缩图片
 * @param path:图片路径
 * @param obj:{width,height[,quality]}
 */

export const dealImage = function (path, obj, callback) {
  var img = new Image();
  img.src = path;
  img.onload = function () {
    var that = this;
    // 默认按比例压缩
    var w = that.width,
      h = that.height,
      scale = w / h;
    w = obj.width || w;
    h = obj.height || w / scale;
    var quality = 0.7; // 默认图片质量为0.7
    //生成canvas
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    // 创建属性节点
    var anw = document.createAttribute("width");
    anw.nodeValue = w;
    var anh = document.createAttribute("height");
    anh.nodeValue = h;
    canvas.setAttributeNode(anw);
    canvas.setAttributeNode(anh);
    ctx.drawImage(that, 0, 0, w, h);
    // 图像质量
    if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
      quality = obj.quality;
    }
    // quality值越小，所绘制出的图像越模糊
    var base64 = canvas.toDataURL("image/jpeg", quality);
    // 回调函数返回base64的值
    callback(base64);
  };
}

/**
 * 
 *@description base64ToBlob
 */

export const base64ToBlob = function (code) {
  let parts = code.split(";base64,");
  let contentType = parts[0].split(":")[1];
  let raw = window.atob(parts[1]);
  let rawLength = raw.length;
  // let ab = new ArrayBuffer(rawLength);
  let uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], {
    type: contentType
  });
}

/**
 * @description 获取search查询参数
 */

export const getQueryString = function () {
  const url = location.search;
  const rs = {}
  if (url.indexOf('?') === 0) {
    const querystring = url.substr(1);
    const kvArr = querystring.split('&');
    kvArr.forEach(item => {
      const temp = item.split('=')
      const key = temp[0];
      const val = temp[1];
      rs[key] = val
    })
  }
  return rs
}


/**
 * @description 页面滚动到第一个报错信息所在的位置
 * @param {Object} self :this
 * @param {*} data :ref值
 */
export const scrollToError = (self, data) => {
  document.documentElement.scrollTop = self.$refs[
    data[0]
  ][0].offsetTop; //页面滚动到第一个报错信息所在的位置
  document.body.scrollTop = self.$refs[data[0]][0].offsetTop;
}
