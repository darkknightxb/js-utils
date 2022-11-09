/**
 * @description 验证方法
 * @author XuBin
 * @time 2021-11-24 10:45
 */

class ValidUtil {
  // 中文名称，2-100个字符
  CHINESE_NAME = /^[\u4e00-\u9fa5]{2,100}$/;

  // 社会统一信用代码
  SUCC = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/;

  PERSON_NAME = /^[\u4E00-\u9FA5A-Za-z]+$/;

  PHONE = /^1[3-9]\d{9}$/;

  REGEX_NUMBER = /^\d*$/;

  REGEX_FLOAT = /^\d*(\.\d{2})?$/;

  isNumber(value) {
    return this.REGEX_NUMBER.test(value);
  }

  // 判断是否是护照
  isPassport(value) {
    return /^[a-zA-Z0-9]{3,21}$/.test(value);
  }

  // 判断是否是身份证号
  isIdCard(v) {
    return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
      v
    );
  }

  // el-form手机号验证
  elValidatePhone = (_, value, callback) => {
    if (!this.hasLength(value)) callback(new Error('请输入手机号码'));
    else if (!this.phone(value)) callback(new Error('手机号码格式不正确'));
    else callback();
  };

  /**
   * 判断是否是符合要求的手机号
   * @param str
   * @returns {boolean}
   */
  phone(str) {
    return this.PHONE.test(str);
  }

  /**
   * @param {any} str
   * @returns {Boolean}
   */
  hasLength(str) {
    if (str === null || str === undefined) return false;
    if (typeof str === 'string') return str.length > 0;
    if (typeof str === 'number') return true;
    if (typeof str === 'boolean') return true;
    if (Array.isArray(str)) return str.length > 0;
    if (typeof str === 'object') return Object.keys(str).length > 0;
    return false;
  }

  /**
   * 是否是绝对地址
   * @param {string} path
   * @returns {Boolean}
   */
  isAbsoluteUrl(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
  }

  isEmpty(v: string) {
    return v === undefined || v === null || v === '';
  }

  /**
   * 判断是否是字符串
   * @param {string} str
   * @returns {Boolean}
   */
  isString(str) {
    return typeof str === 'string' || str instanceof String;
  }

  /**
   * 判断是否是url地址
   * @param url
   * @returns {boolean}
   */
  url(url) {
    const reg =
      /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url);
  }

  /**
   * 判断是否为整数
   * @param num
   * @param exact 严格模式，如果为true，则带有小数点的浮点数不会被判断为整数
   */
  isInteger(num, exact = false): boolean {
    if (exact) return parseInt(num) === num;
    return Number.isInteger(Number(num));
  }

  /**
   * 判断是否是符合要求的密码
   * @param value
   * @returns {boolean}
   */
  validPassword(value: string): boolean {
    return (
      value.length >= 6 &&
      /^(?![0-9]+$)(?![a-zA-Z]+$)/.test(value) &&
      !consistsRepeatedSubstring(value)
    );
  }

  // 判断url是否是http或https
  isHttp(url: string) {
    return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1;
  }

  // 判断Blob的内容是否是json
  async isJson(blob: Blob) {
    try {
      const str = await blob.text();
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default new ValidUtil();

// 检查字符串是否由重复的字符串序列组成
const consistsRepeatedSubstring = str =>
  `${str}${str}`.indexOf(str, 1) != str.length;

/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * 判断文件名是否是excel格式
 * @param filename 文件名
 * @returns {boolean}
 */
export function isExcel(filename) {
  return /\.(xlsx|xls|csv)$/.test(filename);
}
