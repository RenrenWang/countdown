/***
 * 倒计时组件
 * requestAnimationFrame 实现
 */
type timeType = {
  second: number; // 剩余秒数
  time: number; // 剩余毫秒
};
interface CountdownProps {
  time: number; // 倒计时秒数
  callback?: (result: timeType) => void; // 倒计时回调
  onEnd?: () => void; // 结束回调
}
const Countdown = ({ time, callback, onEnd }: CountdownProps) => {
  const endTime = new Date().getTime() + time * 1000;
  let id = 0;
  const m = () => {
    const now = new Date().getTime();
    if (endTime > now) {
      const _time = (endTime - now) / 1000;
      const second = Math.ceil(_time);
      callback &&
        callback({
          second,
          time: _time,
        });
      id = requestAnimationFrame(m);
    } else {
      onEnd && onEnd();
      id && cancelAnimationFrame(id);
    }
  };
  id = requestAnimationFrame(m);
  return () => {
    id && cancelAnimationFrame(id);
  };
};
export default Countdown;
