/**
 * @Description
 * @Author 徐彬
 * @Date 2022-3-4 10:51
 */
class ObjectUtil {
  /**
   * 判断对象是否全部属性都为true
   * @param obj
   * @returns {boolean}
   */
  isAllTrue(obj) {
    for (const k in obj) if (!obj[k]) return false;

    return true;
  }

  /**
   * 简单拷贝对象
   * @param source 源对象
   * @param target 目标对象
   * @param all 是否拷贝源对象的全部属性，可能会为目标对象增加新的属性
   */
  copyObject(source, target, all = false) {
    if (all)
      Object.keys(source).forEach(k => {
        if (source[k] !== undefined && target[k] != source[k]) target[k] = source[k];
      });
    else
      Object.keys(target).forEach(k => {
        if (source[k] !== undefined && target[k] != source[k]) target[k] = source[k];
      });
  }

  /**
   * 深拷贝
   * 一维简单对象，属性值只能是基本类型，不能是对象，包括Date等内置对象
   * 不会拷贝原型链上的属性
   * @param obj
   * @returns {*}
   */
  deepClone(obj) {
    return { ...obj };
  }

  /**
   * 深拷贝
   * 适用于绝大多数情况
   * 面向多维简单对象，属性值只能是基本类型或者对象，不能是函数
   * 不会拷贝原型链上的属性
   * @param obj
   * @returns {any}
   */
  deepClone1(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * 深拷贝
   * 面向复杂对象
   * 不会拷贝原型链上的属性
   * @param source
   * @returns {any}
   */
  deepClone2(source) {
    if (source === null || typeof source !== "object") return source;
    const target = source.constructor === Array ? [] : {};
    // 忽略从原型链上继承的属性
    for (const key in source)
      if (Object.prototype.hasOwnProperty.call(source, key))
        if (source[key] && typeof source[key] === "object") target[key] = this.deepClone2(source[key]);
        else target[key] = source[key];

    return target;
  }

  /**
   * 合并数组
   * @param {Object} target
   * @param {(Object|Array)} source
   * @returns {Object}
   */
  objectMerge(target, source) {
    if (typeof target !== "object") target = {};

    if (Array.isArray(source)) return source.slice();

    Object.keys(source).forEach(property => {
      const sourceProperty = source[property];
      if (typeof sourceProperty === "object") target[property] = this.objectMerge(target[property], sourceProperty);
      else target[property] = sourceProperty;
    });
    return target;
  }
}

export default new ObjectUtil();
