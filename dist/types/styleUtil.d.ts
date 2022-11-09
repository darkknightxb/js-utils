declare class StyleUtil {
    randomColor(): string;
    hasClass(ele: any, cls: any): boolean;
    addClass(ele: any, cls: any): void;
    removeClass(ele: any, cls: any): void;
    /**
     * 根据level的值，淡化color
     * level越大，颜色越淡，直到level=1为白色
     * @param color 原始的颜色
     * @param level 淡化的比例 0-1
     * @returns {string}
     */
    getLightColor(color: any, level: any): string;
    /**
     * 将颜色变暗
     * level越大，颜色越暗，直到level=1，颜色变为黑色
     * @param color 原始的颜色
     * @param level 变暗的程度 0-1
     */
    getDarkColor(color: any, level: any): string;
    hexToRgb(str: any): any;
    rgbToHex: (r: any, g: any, b: any) => string;
    /**
     * 切换元素的class
     * @param {HTMLElement} element
     * @param {string} className
     */
    toggleClass(element: any, className: any): void;
    isDarkMode(): boolean;
    handleThemeStyle(color: any): void;
}
declare const _default: StyleUtil;
export default _default;
