/***
 * 倒计时组件
 * requestAnimationFrame 实现
 */
export declare type timeType = {
    second: number;
    time: number;
};
export interface CountdownProps {
    time?: number;
    onChange?: (result: timeType) => void;
    onFinish?: () => void;
}
declare const Countdown: ({ time, onChange, onFinish }: CountdownProps) => () => void;
export default Countdown;
