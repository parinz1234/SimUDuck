import QuackBehavior from '../../interfaces/QuackBehavior'
class MuteQuack implements QuackBehavior {
	quack(): void {
		console.log(`Do noting - can't quack`)
	}
}

export default MuteQuack
