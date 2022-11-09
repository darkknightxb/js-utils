/**
 * @Description
 * @Author 徐彬
 * @Date 2022-3-4 10:54
 */
declare class DateUtil {
    DATE_FORMAT: {
        d: string;
    };
    elDatePickerOptions: {
        shortcuts: {
            text: string;
            value: () => Date[];
        }[];
    };
    time(): number;
    /**
     * 字符串转时间戳
     * @param {string} expiresTime
     * @returns {number} 秒
     */
    strTotime(expiresTime: any): number;
    formatDateAdd(num: number, unit?: any): string;
    start(time: any, format?: string): string;
    end(time: any, format?: string): string;
    format(timestamp?: any, format?: string): string;
    /**
     * 将秒数转换成时分秒的格式
     * @param seconds
     * @returns {string|null}
     */
    interval(seconds: number): string;
    /**
     * 时间转换字符串
     * @param {number} time
     * @param {string} option
     * @returns {string}
     */
    formatTime(time: any, option: any): any;
    /**
     * 时间转换
     * @param {(Object|string|number)} time
     * @param {string} cFormat
     * @returns {string | null}
     */
    parseTime(time: any, cFormat: any): any;
}
declare const _default: DateUtil;
export default _default;
