class ScrollUtil {
  // 滚动到元素顶部
  scrollToTop(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // 滚动到元素底部
  scrollToBottom(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}
export default new ScrollUtil();
