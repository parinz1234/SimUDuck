import Duck from './base/Duck'

class MallardDuck extends Duck {
	public display(): void {
		console.log(`I'm a real Mallard duck`)
	}
}

export default MallardDuck
