import arrayUtil from "./arrayUtil";
import { sessionCacheUtil, localCacheUtil } from "./cacheUtil";
import dateUtil from "./dateUtil";
import documentUtil from "./documentUtil";
import formatUtil from "./formatUtil";
import objectUtil from "./objectUtil";
import requestUtil from "./requestUtil";
import scrollUtil from "./scrollUtil";
import styleUtil from "./styleUtil";
import validateUtil from "./validateUtil";

export function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

class Util {
  // 获取变量的类型
  getType(type) {
    return Object.prototype.toString.call(type).slice(8, -1);
  }
}
const util = new Util();
export { arrayUtil, sessionCacheUtil, localCacheUtil, dateUtil, documentUtil, formatUtil, util, objectUtil, requestUtil, scrollUtil, styleUtil, validateUtil };
