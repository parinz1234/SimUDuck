import FlyBehavior from '../../interfaces/FlyBehavior'
class FlyWithWings implements FlyBehavior {
	fly(): void {
		console.log('Implements duck flying')
	}
}

export default FlyWithWings