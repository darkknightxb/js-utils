/**
 * @Description
 * @Author 徐彬
 * @Date 2022-3-4 10:51
 */
declare class ObjectUtil {
    /**
     * 判断对象是否全部属性都为true
     * @param obj
     * @returns {boolean}
     */
    isAllTrue(obj: any): boolean;
    /**
     * 简单拷贝对象
     * @param source 源对象
     * @param target 目标对象
     * @param all 是否拷贝源对象的全部属性，可能会为目标对象增加新的属性
     */
    copyObject(source: any, target: any, all?: boolean): void;
    /**
     * 深拷贝
     * 一维简单对象，属性值只能是基本类型，不能是对象，包括Date等内置对象
     * 不会拷贝原型链上的属性
     * @param obj
     * @returns {*}
     */
    deepClone(obj: any): any;
    /**
     * 深拷贝
     * 适用于绝大多数情况
     * 面向多维简单对象，属性值只能是基本类型或者对象，不能是函数
     * 不会拷贝原型链上的属性
     * @param obj
     * @returns {any}
     */
    deepClone1(obj: any): any;
    /**
     * 深拷贝
     * 面向复杂对象
     * 不会拷贝原型链上的属性
     * @param source
     * @returns {any}
     */
    deepClone2(source: any): any;
    /**
     * 合并数组
     * @param {Object} target
     * @param {(Object|Array)} source
     * @returns {Object}
     */
    objectMerge(target: any, source: any): any;
}
declare const _default: ObjectUtil;
export default _default;
