define(["exports", "@kinkajou/kinkajou/Kinkajou", "@kinkajou/svg-icon/SvgIcon"], function (_exports, _Kinkajou, _SvgIcon2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SignalCellularConnectedNoInternet3Bar = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var SignalCellularConnectedNoInternet3Bar =
  /*#__PURE__*/
  function (_SvgIcon) {
    _inherits(SignalCellularConnectedNoInternet3Bar, _SvgIcon);

    function SignalCellularConnectedNoInternet3Bar() {
      _classCallCheck(this, SignalCellularConnectedNoInternet3Bar);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignalCellularConnectedNoInternet3Bar).apply(this, arguments));
    }

    _createClass(SignalCellularConnectedNoInternet3Bar, [{
      key: "renderSVG",
      value: function renderSVG() {
        return _Kinkajou.Kinkajou.createElement("g", null, _Kinkajou.Kinkajou.createElement("path", {
          "fill-opacity": ".3",
          d: "M22 8V2L2 22h16V8z"
        }), _Kinkajou.Kinkajou.createElement("path", {
          d: "M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z"
        }));
      }
    }], [{
      key: "is",
      get: function get() {
        return 'material.device.SignalCellularConnectedNoInternet3Bar';
      }
    }]);

    return SignalCellularConnectedNoInternet3Bar;
  }(_SvgIcon2.SvgIcon);

  _exports.SignalCellularConnectedNoInternet3Bar = SignalCellularConnectedNoInternet3Bar;
});
//# sourceMappingURL=SignalCellularConnectedNoInternet3Bar.js.map