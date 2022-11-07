/**
 * @Description
 * @Author 徐彬（ytxubin@qq.com）
 * @Date 2022/5/26 15:13
 */
class ArrayUtil {
  // 数组乱序
  shuffleArray(arr: any[]) {
    return arr.sort(() => Math.random() - 0.5);
  }

  /**
   * @description 数组去重
   * @param {Array} arr
   * @returns {Array}
   */
  getUnique(arr) {
    return [...new Set(arr)];
  }

  // 清空数组
  clear(arr: any[]): void {
    arr.length = 0;
  }

  // 判断是否是有效数组
  notEmpty = arr => Array.isArray(arr) && arr.length > 0;
}

export default new ArrayUtil();
