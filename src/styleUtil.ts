class StyleUtil {
  // 随机颜色
  randomColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  }

  // 判断元素是否有class
  hasClass(ele, cls) {
    return !!ele.className.match(new RegExp(`(\\s|^)${cls}(\\s|$)`));
  }

  // 增加class
  addClass(ele, cls) {
    if (!this.hasClass(ele, cls)) ele.className += `${cls}`;
  }

  // 删除class
  removeClass(ele, cls) {
    if (this.hasClass(ele, cls)) {
      const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`);
      ele.className = ele.className.replace(reg, ' ');
    }
  }

  /**
   * 根据level的值，淡化color
   * level越大，颜色越淡，直到level=1为白色
   * @param color 原始的颜色
   * @param level 淡化的比例 0-1
   * @returns {string}
   */
  getLightColor(color, level) {
    const rgb = this.hexToRgb(color);
    for (let i = 0; i < 3; i++)
      rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);

    return this.rgbToHex(rgb[0], rgb[1], rgb[2]);
  }

  /**
   * 将颜色变暗
   * level越大，颜色越暗，直到level=1，颜色变为黑色
   * @param color 原始的颜色
   * @param level 变暗的程度 0-1
   */
  getDarkColor(color, level) {
    const rgb = this.hexToRgb(color);
    for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - level));

    return this.rgbToHex(rgb[0], rgb[1], rgb[2]);
  }

  // hex颜色转rgb颜色
  hexToRgb(str) {
    str = str.replace('#', '');
    const arr = str.match(/../g);
    for (let i = 0; i < 3; i++) arr[i] = parseInt(arr[i], 16);

    return arr;
  }

  rgbToHex = (r, g, b) =>
    `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  /**
   * 切换元素的class
   * @param {HTMLElement} element
   * @param {string} className
   */
  toggleClass(element, className) {
    if (!element || !className) return;

    let classString = element.className;
    const nameIndex = classString.indexOf(className);
    if (nameIndex === -1) classString += `${className}`;
    else
      classString =
        classString.substring(0, nameIndex) +
        classString.substring(nameIndex + className.length);

    element.className = classString;
  }

  // 浏览器是否是暗黑模式
  isDarkMode() {
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }

  // 处理主题样式
  handleThemeStyle(color) {
    document.documentElement.style.setProperty('--el-color-primary', color);
    const arr = [3, 5, 7, 8, 9];
    for (const i of arr)
      document.documentElement.style.setProperty(
        `--el-color-primary-light-${i}`,
        `${this.getLightColor(color, i / 10)}`
      );

    for (const i of arr)
      document.documentElement.style.setProperty(
        `--el-color-primary-dark-${i}`,
        `${this.getDarkColor(color, i / 10)}`
      );
  }
}

export default new StyleUtil();
