import MallardDuck from './classes/MallardDuck'
import FlyWithWings from './classes/behavior/FlyWithWings'
import Quack from './classes/behavior/Quack'

const mallardDuck = new MallardDuck()
mallardDuck.setFlyBehavior(new FlyWithWings())
mallardDuck.setQuackBehavior(new Quack())
console.log('Display')
mallardDuck.display()
console.log('Perform fly')
mallardDuck.performFly()
console.log('Perform quack')
mallardDuck.performQuack()