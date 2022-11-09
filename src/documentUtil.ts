/* eslint-disable no-restricted-globals */
/**
 * @Description
 * @Author 徐彬（ytxubin@qq.com）
 * @Date 2022/5/26 15:55
 */
class DocumentUtil {
  /**
   * 获取html中的文本
   * @param {string} val
   * @returns {string}
   */
  html2Text(val) {
    const div = document.createElement("div");
    div.innerHTML = val;
    return div.textContent || div.innerText;
  }

  // 打开新的弹窗
  openWindow(url, title, w, h) {
    const dualScreenLeft =
      // @ts-ignore
      window.screenLeft !== undefined ? window.screenLeft : screen.left;
    const dualScreenTop =
      // @ts-ignore
      window.screenTop !== undefined ? window.screenTop : screen.top;

    let width;
    if (window.innerWidth) {
      width = window.innerWidth;
    } else if (document.documentElement.clientWidth) {
      width = document.documentElement.clientWidth;
    } else width = screen.width;
    let height;
    if (window.innerHeight) {
      height = window.innerHeight;
    } else if (document.documentElement.clientHeight) {
      height = document.documentElement.clientHeight;
    } else height = screen.height;

    const left = width / 2 - w / 2 + dualScreenLeft;
    const top = height / 2 - h / 2 + dualScreenTop;
    const newWindow = window.open(
      url,
      title,
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`
    );

    // Puts focus on the newWindow
    newWindow?.focus();
  }
}

export default new DocumentUtil();
