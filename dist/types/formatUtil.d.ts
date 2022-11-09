declare class FormatUtil {
    randomInt(min: any, max: any): number;
    paramToString(value: any): any;
    /**
     * 将表格对象转换成值的数组形式
     * @param tableData 表格数组
     * @param tableHeader 表头数组
     * @returns {*}
     */
    tableToJson(tableData: any, tableHeader: any): any;
    /**
     * 千分位转换
     * 10000 => "10,000"
     * @param {number} num
     */
    toThousandFilter(num: any): string;
    /**
     * 首字母大写
     * @param {String} string
     */
    uppercaseFirst(string: any): any;
    camelCase(str: any): any;
    /**
     * 获取两个数的百分比
     * @param numerator 分子
     * @param denominator 分母
     * @returns {string|null}
     */
    percentage(numerator: any, denominator: any): string | null;
    byteLength(str: string): number;
    /**
     * 随机唯一字符串
     * @returns {string}
     */
    createUniqueString(): string;
    /**
     * 获取字典的显示值
     * @param data
     * @param value
     * @returns String
     */
    getDicValue(data: any, value: any): any;
    encryptPhone(phone: any): any;
    subStrByLength(str: any, length: any): any;
    /**
     * 构造树型结构数据
     * @param {*} data 数据源
     * @param {*} id id字段 默认 'id'
     * @param {*} parentId 父节点字段 默认 'parentId'
     * @param {*} children 孩子节点字段 默认 'children'
     */
    handleTree(data: any, id: any, parentId: any, children: any): any[];
}
declare const _default: FormatUtil;
export default _default;
