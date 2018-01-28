var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ps4 = /** @class */ (function () {
    function Ps4(wifi, portatil) {
        this.wifi = true;
        this.portatil = false;
    }
    Ps4.prototype.getWifi = function () {
        return this.wifi;
    };
    Ps4.prototype.getPortatil = function () {
        return this.portatil;
    };
    return Ps4;
}());
var Psp = /** @class */ (function (_super) {
    __extends(Psp, _super);
    function Psp(color, portatil) {
        var _this = _super.call(this, portatil, true) || this;
        _this.color = 'black';
        return _this;
    }
    Psp.prototype.getColor = function () {
        return this.color;
    };
    return Psp;
}(Ps4));
