import FlyBehavior from '../../interfaces/FlyBehavior'
class FlyNoWay implements FlyBehavior {
	fly(): void {
		console.log(`Do nothing - can't fly!`)
	}
}

export default FlyNoWay
