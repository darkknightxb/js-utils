/**
 * @Description
 * @Author 徐彬（ytxubin@qq.com）
 * @Date 2022/9/24 22:31
 */
declare class LocalCacheUtil {
    set(key: string, value: string): void;
    get(key: string): string | null;
    setJSON(key: string, jsonValue: object): void;
    getJSON(key: string): any;
    remove(key: string): void;
}
export declare const localCacheUtil: LocalCacheUtil;
export {};
