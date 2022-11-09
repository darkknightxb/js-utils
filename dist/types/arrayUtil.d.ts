/**
 * @Description
 * @Author 徐彬（ytxubin@qq.com）
 * @Date 2022/5/26 15:13
 */
declare class ArrayUtil {
    shuffleArray(arr: any[]): any[];
    /**
     * @description 数组去重
     * @param {Array} arr
     * @returns {Array}
     */
    getUnique(arr: any): unknown[];
    clear(arr: any[]): void;
    notEmpty: (arr: any) => boolean;
}
declare const _default: ArrayUtil;
export default _default;
