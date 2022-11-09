declare class RequestUtil {
    /**
     * @param {string} url
     * @returns {Object}
     */
    getQueryObject(url: any): {};
    /**
     * 去除数组中的空值
     * @param {Array} actual
     * @returns {Array}
     */
    cleanArray(actual: any): any[];
    /**
     * 将对象转换为查询字符串
     * @param {Object} json
     * @returns {Array}
     */
    param(json: any): any;
    /**
     * @param {string} url
     * @returns {Object}
     */
    param2Obj(url: any): any;
}
declare const _default: RequestUtil;
export default _default;
