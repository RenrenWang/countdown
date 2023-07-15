var Countdown = function (_a) {
    var time = _a.time, callback = _a.callback, onEnd = _a.onEnd;
    var endTime = new Date().getTime() + (time - 1) * 1000;
    var id = 0;
    var handle = function () {
        var now = new Date().getTime();
        var currentTime = (endTime - now) / 1000;
        var second = Math.ceil(currentTime);
        callback &&
            callback({
                second: second,
                time: currentTime,
            });
        if (endTime >= now) {
            id = requestAnimationFrame(handle);
        }
        else {
            onEnd && onEnd();
            id && cancelAnimationFrame(id);
        }
    };
    id = requestAnimationFrame(handle);
    return function () {
        id && cancelAnimationFrame(id);
    };
};

export { Countdown as default };
