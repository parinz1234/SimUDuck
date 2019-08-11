import QuackBehavior from '../../interfaces/QuackBehavior'
class Quack implements QuackBehavior {
	quack(): void {
		console.log('Implements duck quacking')
	}
}

export default Quack
