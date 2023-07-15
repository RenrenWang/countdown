(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["rr-countdown"] = factory());
})(this, (function () { 'use strict';

  var Countdown = function (_a) {
      var _b = _a.time, time = _b === void 0 ? 60 : _b, onChange = _a.onChange, onFinish = _a.onFinish;
      var endTime = new Date().getTime() + (time - 1) * 1000;
      var id = 0;
      var handle = function () {
          var now = new Date().getTime();
          var currentTime = (endTime - now) / 1000;
          var second = Math.ceil(currentTime);
          onChange === null || onChange === void 0 ? void 0 : onChange({
              second: second,
              time: currentTime,
          });
          if (endTime >= now) {
              id = requestAnimationFrame(handle);
          }
          else {
              onFinish === null || onFinish === void 0 ? void 0 : onFinish();
              id && cancelAnimationFrame(id);
          }
      };
      id = requestAnimationFrame(handle);
      return function () {
          id && cancelAnimationFrame(id);
      };
  };

  return Countdown;

}));
