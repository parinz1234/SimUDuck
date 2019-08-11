"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.swim = function () {
        console.log('All ducks float, even decoys!');
    };
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.setFlyBehavior = function (flyBehavior) {
        this.flyBehavior = flyBehavior;
    };
    Duck.prototype.setQuackBehavior = function (quackBehavior) {
        this.quackBehavior = quackBehavior;
    };
    return Duck;
}());
exports.default = Duck;
//# sourceMappingURL=Duck.js.map