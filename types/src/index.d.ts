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
export declare function sleep(time: any): Promise<unknown>;
declare class Util {
    getType(type: any): any;
}
declare const util: Util;
export { arrayUtil, sessionCacheUtil, localCacheUtil, dateUtil, documentUtil, formatUtil, util, objectUtil, requestUtil, scrollUtil, styleUtil, validateUtil };
