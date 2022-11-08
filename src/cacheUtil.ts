/**
 * @Description
 * @Author 徐彬（ytxubin@qq.com）
 * @Date 2022/9/24 22:31
 */
class LocalCacheUtil {
  set(key: string, value: string) {
    if (!localStorage) {
      return;
    }
    if (key != null && value != null) {
      localStorage.setItem(key, value);
    }
  }

  get(key: string) {
    if (!localStorage) {
      return null;
    }
    if (key == null) {
      return null;
    }
    return localStorage.getItem(key);
  }

  setJSON(key: string, jsonValue: object) {
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue));
    }
  }

  getJSON(key: string) {
    const value = this.get(key);
    if (value != null) {
      return JSON.parse(value);
    }
    return null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}

export const localCacheUtil = new LocalCacheUtil();
