"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MallardDuck_1 = require("./classes/MallardDuck");
var FlyWithWings_1 = require("./classes/behavior/FlyWithWings");
var Quack_1 = require("./classes/behavior/Quack");
var mallardDuck = new MallardDuck_1.default();
mallardDuck.setFlyBehavior(new FlyWithWings_1.default());
mallardDuck.setQuackBehavior(new Quack_1.default());
console.log('Display');
mallardDuck.display();
console.log('Perform fly');
mallardDuck.performFly();
console.log('Perform quack');
mallardDuck.performQuack();
//# sourceMappingURL=app.js.map