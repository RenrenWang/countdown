/***
 * 倒计时组件
 * requestAnimationFrame 实现
 */
type timeType = {
  second: number; // 剩余秒数
  time: number; // 剩余毫秒
};
const Countdown = (
  time: number,
  callback: (result: timeType) => void,
  onEnd: () => void
) => {
  const endTime = new Date().getTime() + time * 1000;
  let id = 0;
  const m = () => {
    const now = new Date().getTime();
    if (endTime > now) {
      const _time = (endTime - now) / 1000;
      const second = Math.ceil(_time);
      callback({
        second,
        time: _time,
      });
      id = requestAnimationFrame(m);
    } else {
      onEnd();
      id && cancelAnimationFrame(id);
    }
  };
  id = requestAnimationFrame(m);
  return () => {
    id && cancelAnimationFrame(id);
  };
};
export default Countdown;
