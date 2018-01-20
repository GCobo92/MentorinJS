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
var Animal = /** @class */ (function () {
    function Animal(name, type) {
        this.name = name;
        this.type = type;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getType = function () {
        return this.type;
    };
    return Animal;
}());
var Pig = /** @class */ (function (_super) {
    __extends(Pig, _super);
    function Pig(name, dvd) {
        var _this = _super.call(this, name, 'pig') || this;
        _this.oinks = true;
        return _this;
    }
    Pig.prototype.oink = function () {
        return this.oink;
    };
    return Pig;
}(Animal));
