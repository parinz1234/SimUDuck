import QuackBehavior from '../../interfaces/QuackBehavior'
class Squeak implements QuackBehavior {
	quack(): void {
		console.log('Rubber duckie squeak')
	}
}

export default Squeak
