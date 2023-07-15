/***
 * 倒计时组件
 * requestAnimationFrame 实现
 */
export declare type timeType = {
    second: number;
    time: number;
};
export interface CountdownProps {
    time: number;
    callback?: (result: timeType) => void;
    onEnd?: () => void;
}
declare const Countdown: ({ time, callback, onEnd }: CountdownProps) => () => void;
export default Countdown;
