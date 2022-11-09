import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

/**
 * @Description
 * @Author 徐彬
 * @Date 2022-3-4 10:54
 */
class DateUtil {
  DATE_FORMAT = {
    d: "YYYY-MM-DD HH:mm:ss"
  };

  elDatePickerOptions = {
    shortcuts: [
      {
        text: "最近一周",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          return [start, end];
        }
      },
      {
        text: "最近一个月",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          return [start, end];
        }
      },
      {
        text: "最近三个月",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          return [start, end];
        }
      }
    ]
  };

  // 获取当前时间戳
  time(): number {
    return dayjs().unix();
  }

  /**
   * 字符串转时间戳
   * @param {string} expiresTime
   * @returns {number} 秒
   */
  strTotime(expiresTime) {
    return dayjs(expiresTime).unix();
  }

  // 获取几天前或几天后的日期
  formatDateAdd(num: number, unit: any = "day"): string {
    return this.format(dayjs().add(num, unit));
  }

  // 将日期转换为当日0点
  start(time: any, format?: string) {
    return this.format(this.format(time, "d"), format);
  }

  // 将日期转换为第二天0点
  end(time: any, format?: string) {
    return this.format(this.format(dayjs(time).add(1, "day"), "d"), format);
  }

  // 时间格式化
  format(timestamp: any = undefined, format = "YYYY-MM-DD HH:mm:ss") {
    const d = timestamp ? dayjs(timestamp) : dayjs();
    let f;
    switch (format.toLowerCase()) {
      case "d":
        f = "YYYY-MM-DD";
        break;
      case "m":
        f = "YYYY-MM-DD HH:mm";
        break;
      case "y":
        f = "YYYY";
        break;
      default:
        f = format;
        break;
    }
    return d.format(f);
  }

  /**
   * 将秒数转换成时分秒的格式
   * @param seconds
   * @returns {string|null}
   */
  interval(seconds: number) {
    // if (isNaN(seconds))
    //   return null
    // else
    return dayjs.duration(seconds, "seconds").format("HH:mm:ss");
  }

  /**
   * 时间转换字符串
   * @param {number} time
   * @param {string} option
   * @returns {string}
   */
  formatTime(time, option) {
    if (`${time}`.length === 10) time = parseInt(time) * 1000;
    else time = +time;

    const d = new Date(time);
    const now = Date.now();

    const diff = (now - time) / 1000;

    if (diff < 30) return "刚刚";
    if (diff < 3600)
      // less 1 hour
      return `${Math.ceil(diff / 60)}分钟前`;
    if (diff < 3600 * 24) return `${Math.ceil(diff / 3600)}小时前`;
    if (diff < 3600 * 24 * 2) return "1天前";

    if (option) return this.parseTime(time, option);
    return `${d.getMonth() + 1}月${d.getDate()}日${d.getHours()}时${d.getMinutes()}分`;
  }

  /**
   * 时间转换
   * @param {(Object|string|number)} time
   * @param {string} cFormat
   * @returns {string | null}
   */
  parseTime(time, cFormat) {
    if (arguments.length === 0 || !time) return null;

    const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time === "object") date = time;
    else {
      if (typeof time === "string")
        if (/^[0-9]+$/.test(time))
          // support "1548221490638"
          time = parseInt(time);
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        else time = time.replace(/-/gm, "/");

      if (typeof time === "number" && time.toString().length === 10) time *= 1000;

      date = new Date(time);
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    };
    return format.replace(/{([ymdhisa])+}/g, (_, key) => {
      const value = formatObj[key];
      // Note: getDay() returns 0 on Sunday
      if (key === "a") return ["日", "一", "二", "三", "四", "五", "六"][value];
      return value.toString().padStart(2, "0");
    });
  }
}

export default new DateUtil();
