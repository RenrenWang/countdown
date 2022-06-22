/***
 * 倒计时组件
 * requestAnimationFrame 实现
 */
declare type timeType = {
    second: number;
    time: number;
};
declare const Countdown: (time: number, callback: (result: timeType) => void, onEnd: () => void) => () => void;
export default Countdown;
