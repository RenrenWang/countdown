var Countdown = function (time, callback, onEnd) {
    var endTime = new Date().getTime() + time * 1000;
    var id = 0;
    var m = function () {
        var now = new Date().getTime();
        if (endTime > now) {
            var _time = (endTime - now) / 1000;
            var second = Math.ceil(_time);
            callback({
                second: second,
                time: _time,
            });
            id = requestAnimationFrame(m);
        }
        else {
            onEnd();
            id && cancelAnimationFrame(id);
        }
    };
    id = requestAnimationFrame(m);
    return function () {
        id && cancelAnimationFrame(id);
    };
};

export { Countdown as default };
