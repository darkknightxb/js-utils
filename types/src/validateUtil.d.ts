/**
 * @description 验证方法
 * @author XuBin
 * @time 2021-11-24 10:45
 */
declare class ValidUtil {
    CHINESE_NAME: RegExp;
    SUCC: RegExp;
    PERSON_NAME: RegExp;
    PHONE: RegExp;
    REGEX_NUMBER: RegExp;
    REGEX_FLOAT: RegExp;
    isNumber(value: any): boolean;
    isPassport(value: any): boolean;
    isIdCard(v: any): boolean;
    elValidatePhone: (_: any, value: any, callback: any) => void;
    /**
     * 判断是否是符合要求的手机号
     * @param str
     * @returns {boolean}
     */
    phone(str: any): boolean;
    /**
     * @param {any} str
     * @returns {Boolean}
     */
    hasLength(str: any): boolean;
    /**
     * 是否是绝对地址
     * @param {string} path
     * @returns {Boolean}
     */
    isAbsoluteUrl(path: any): boolean;
    isEmpty(v: string): boolean;
    /**
     * 判断是否是字符串
     * @param {string} str
     * @returns {Boolean}
     */
    isString(str: any): boolean;
    /**
     * 判断是否是url地址
     * @param url
     * @returns {boolean}
     */
    url(url: any): boolean;
    /**
     * 判断是否为整数
     * @param num
     * @param exact 严格模式，如果为true，则带有小数点的浮点数不会被判断为整数
     */
    isInteger(num: any, exact?: boolean): boolean;
    /**
     * 判断是否是符合要求的密码
     * @param value
     * @returns {boolean}
     */
    validPassword(value: string): boolean;
    isHttp(url: string): boolean;
    isJson(blob: Blob): Promise<boolean>;
}
declare const _default: ValidUtil;
export default _default;
/**
 * Created by PanJiaChen on 16/11/18.
 */
/**
 * @param {string} str
 * @returns {Boolean}
 */
export declare function validLowerCase(str: any): boolean;
/**
 * @param {string} str
 * @returns {Boolean}
 */
export declare function validUpperCase(str: any): boolean;
/**
 * @param {string} str
 * @returns {Boolean}
 */
export declare function validAlphabets(str: any): boolean;
/**
 * 判断文件名是否是excel格式
 * @param filename 文件名
 * @returns {boolean}
 */
export declare function isExcel(filename: any): boolean;
