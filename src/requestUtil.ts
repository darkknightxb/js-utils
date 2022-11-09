/**
 * @Description
 * @Author 徐彬（ytxubin@qq.com）
 * @Date 2022/5/26 16:07
 */
import qs from 'qs';

class RequestUtil {
  /**
   * @param {string} url
   * @returns {Object}
   */
  getQueryObject(url) {
    url = url == null ? window.location.href : url;
    const search = url.substring(url.lastIndexOf('?') + 1);
    const obj = {};
    const reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, (rs, $1, $2) => {
      const name = decodeURIComponent($1);
      let val = decodeURIComponent($2);
      val = String(val);
      obj[name] = val;
      return rs;
    });
    return obj;
  }

  /**
   * 去除数组中的空值
   * @param {Array} actual
   * @returns {Array}
   */
  cleanArray(actual) {
    const newArray: any[] = [];
    for (let i = 0, len = actual.length; i < len; i++)
      if (actual[i]) newArray.push(actual[i]);

    return newArray;
  }

  /**
   * 将对象转换为查询字符串
   * @param {Object} json
   * @returns {Array}
   */
  param(json) {
    return qs.stringify(json, { skipNulls: true });
  }

  /**
   * @param {string} url
   * @returns {Object}
   */
  param2Obj(url) {
    const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ');
    if (!search) return {};

    return qs.parse(search);
  }
}

export default new RequestUtil();
