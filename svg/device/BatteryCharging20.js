define(["exports", "@kinkajou/kinkajou/Kinkajou", "@kinkajou/svg-icon/SvgIcon"], function (_exports, _Kinkajou, _SvgIcon2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BatteryCharging20 = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var BatteryCharging20 =
  /*#__PURE__*/
  function (_SvgIcon) {
    _inherits(BatteryCharging20, _SvgIcon);

    function BatteryCharging20() {
      _classCallCheck(this, BatteryCharging20);

      return _possibleConstructorReturn(this, _getPrototypeOf(BatteryCharging20).apply(this, arguments));
    }

    _createClass(BatteryCharging20, [{
      key: "renderSVG",
      value: function renderSVG() {
        return _Kinkajou.Kinkajou.createElement("g", null, _Kinkajou.Kinkajou.createElement("path", {
          d: "M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z"
        }), _Kinkajou.Kinkajou.createElement("path", {
          "fill-opacity": ".3",
          d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"
        }));
      }
    }], [{
      key: "is",
      get: function get() {
        return 'material.device.BatteryCharging20';
      }
    }]);

    return BatteryCharging20;
  }(_SvgIcon2.SvgIcon);

  _exports.BatteryCharging20 = BatteryCharging20;
});
//# sourceMappingURL=BatteryCharging20.js.map