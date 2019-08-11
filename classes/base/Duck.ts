import FlyBehavior from '../../interfaces/FlyBehavior'
import QuackBehavior from '../../interfaces/QuackBehavior'
abstract class Duck {
	private flyBehavior: FlyBehavior
	private quackBehavior: QuackBehavior
	
	public abstract display(): void
	public swim (): void {
		console.log('All ducks float, even decoys!')
	}

	public performFly(): void {
		this.flyBehavior.fly()
	}

	public performQuack(): void {
		this.quackBehavior.quack()
	}

	public setFlyBehavior(flyBehavior: FlyBehavior): void {
		this.flyBehavior = flyBehavior
	}

	public setQuackBehavior(quackBehavior: QuackBehavior): void {
		this.quackBehavior = quackBehavior
	}

}

export default Duck
