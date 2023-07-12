/***
 * 倒计时组件
 * requestAnimationFrame 实现
 */
export type timeType = {
  second: number; // 剩余秒数
  time: number; // 剩余毫秒
};
export  interface CountdownProps {
  time: number; // 倒计时秒数
  callback?: (result: timeType) => void; // 倒计时回调
  onEnd?: () => void; // 结束回调
}
const Countdown = ({ time, callback, onEnd }: CountdownProps) => {
  const endTime = new Date().getTime() + (time-1) * 1000;
  let id = 0;
  const handle = () => {
    const now = new Date().getTime();
    const currentTime = (endTime - now) / 1000;
    const second = Math.ceil(currentTime);
    callback &&
    callback({
      second,
      time: currentTime,
    });
    if (endTime >= now) {
      id = requestAnimationFrame(handle);
    } else {
      onEnd && onEnd();
      id && cancelAnimationFrame(id);
    }
  
  };
  id = requestAnimationFrame(handle);
  return () => {
    id && cancelAnimationFrame(id);
  };
};
export default Countdown;
