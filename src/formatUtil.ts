import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

class FormatUtil {
  // 获取随机数，[min,max]
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 对象转换成请求字符串
  paramToString(value) {
    let result = value.toString();
    if (result.length === 0) result = "0";
    return result;
  }

  /**
   * 将表格对象转换成值的数组形式
   * @param tableData 表格数组
   * @param tableHeader 表头数组
   * @returns {*}
   */
  tableToJson(tableData, tableHeader) {
    return tableData.map(row => tableHeader.map(column => row[column]));
  }

  /**
   * 千分位转换
   * 10000 => "10,000"
   * @param {number} num
   */
  toThousandFilter(num) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
  }

  /**
   * 首字母大写
   * @param {String} string
   */
  uppercaseFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // 下划转驼峰
  camelCase(str) {
    return str.replace(/_[a-z]/g, str1 => str1.slice(-1).toUpperCase());
  }

  /**
   * 获取两个数的百分比
   * @param numerator 分子
   * @param denominator 分母
   * @returns {string|null}
   */
  percentage(numerator, denominator) {
    if (Number.isNaN(numerator) || Number.isNaN(denominator)) return null;
    const point = parseFloat(numerator) / parseFloat(denominator);
    return `${(point * 100).toFixed(0)}%`;
  }

  // returns the byte length of an utf8 string
  byteLength(str: string): number {
    let s = str.length;
    for (let i = str.length - 1; i >= 0; i--) {
      const code = str.charCodeAt(i);
      if (code > 0x7f && code <= 0x7ff) s++;
      else if (code > 0x7ff && code <= 0xffff) s += 2;
      if (code >= 0xdc00 && code <= 0xdfff) i--;
    }
    return s;
  }

  /**
   * 随机唯一字符串
   * @returns {string}
   */
  createUniqueString() {
    const timestamp = `${+new Date()}`;
    const randomNum = `${parseInt(String((1 + Math.random()) * 65536))}`;
    return (+(randomNum + timestamp)).toString(32);
  }

  /**
   * 获取字典的显示值
   * @param data
   * @param value
   * @returns String
   */
  getDicValue(data, value) {
    const obj = data.find(t => t.value === value);
    return obj?.label;
  }

  // 电话号码加密
  encryptPhone(phone) {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
  }

  // 控制字符串的长度
  subStrByLength(str, length) {
    if (str === undefined) return "";
    return str.length > length ? `${str.slice(0, length)}...` : str;
  }

  /**
   * 构造树型结构数据
   * @param {*} data 数据源
   * @param {*} id id字段 默认 'id'
   * @param {*} parentId 父节点字段 默认 'parentId'
   * @param {*} children 孩子节点字段 默认 'children'
   */
  handleTree(data, id, parentId, children) {
    const config = {
      id: id || "id",
      parentId: parentId || "parentId",
      childrenList: children || "children"
    };

    const childrenListMap = {};
    const nodeIds = {};
    const tree = [] as any[];

    for (const d of data) {
      const dParentId = d[config.parentId];
      if (childrenListMap[dParentId] == null) {
        childrenListMap[dParentId] = [];
      }
      nodeIds[d[config.id]] = d;
      childrenListMap[dParentId].push(d);
    }

    for (const d of data) {
      const dParentId = d[config.parentId];
      if (nodeIds[dParentId] == null) {
        tree.push(d);
      }
    }

    for (const t of tree) {
      adaptToChildrenList(t);
    }

    function adaptToChildrenList(o) {
      if (childrenListMap[o[config.id]] !== null) {
        o[config.childrenList] = childrenListMap[o[config.id]];
      }
      if (o[config.childrenList]) {
        for (const c of o[config.childrenList]) {
          adaptToChildrenList(c);
        }
      }
    }
    return tree;
  }
}

export default new FormatUtil();
