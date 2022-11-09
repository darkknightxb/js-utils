/**
 * @Description
 * @Author 徐彬（ytxubin@qq.com）
 * @Date 2022/9/24 22:31
 */
class SessionCacheUtil {
  set(key, value) {
    if (!sessionStorage) {
      return;
    }
    if (key != null && value != null) {
      sessionStorage.setItem(key, value);
    }
  }

  get(key) {
    if (!sessionStorage) {
      return null;
    }
    if (key == null) {
      return null;
    }
    return sessionStorage.getItem(key);
  }

  setJSON(key, jsonValue) {
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue));
    }
  }

  getJSON(key) {
    const value = this.get(key);
    if (value != null) {
      return JSON.parse(value);
    }
    return null;
  }

  remove(key) {
    sessionStorage.removeItem(key);
  }
}
class LocalCacheUtil {
  set(key, value) {
    if (!localStorage) {
      return;
    }
    if (key != null && value != null) {
      localStorage.setItem(key, value);
    }
  }

  get(key) {
    if (!localStorage) {
      return null;
    }
    if (key == null) {
      return null;
    }
    return localStorage.getItem(key);
  }

  setJSON(key, jsonValue) {
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue));
    }
  }

  getJSON(key) {
    const value = this.get(key);
    if (value != null) {
      return JSON.parse(value);
    }
    return null;
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}

export const sessionCacheUtil = new SessionCacheUtil();
export const localCacheUtil = new LocalCacheUtil();
