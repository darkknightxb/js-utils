/**
 * @Description
 * @Author 徐彬（ytxubin@qq.com）
 * @Date 2022/5/26 15:55
 */
declare class DocumentUtil {
    /**
     * 获取html中的文本
     * @param {string} val
     * @returns {string}
     */
    html2Text(val: any): string;
    openWindow(url: any, title: any, w: any, h: any): void;
}
declare const _default: DocumentUtil;
export default _default;
