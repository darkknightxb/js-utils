/**
 * @Description
 * @Author 徐彬（ytxubin@qq.com）
 * @Date 2022/9/24 22:31
 */
declare class SessionCacheUtil {
    set(key: any, value: any): void;
    get(key: any): string | null;
    setJSON(key: any, jsonValue: any): void;
    getJSON(key: any): any;
    remove(key: any): void;
}
declare class LocalCacheUtil {
    set(key: any, value: any): void;
    get(key: any): string | null;
    setJSON(key: any, jsonValue: any): void;
    getJSON(key: any): any;
    remove(key: any): void;
}
export declare const sessionCacheUtil: SessionCacheUtil;
export declare const localCacheUtil: LocalCacheUtil;
export {};
