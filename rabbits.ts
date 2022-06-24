enum rabbitGender {
	Male,
	Female,
}
enum rabbitState {
	Alive,
	Deceased,
}

class rabbit {
	age: number;
	gender: rabbitGender;
	state: rabbitState;

	constructor() {}
}

class population {
	maleRabbitTotal: number;
	months: number = 0;

	maleRabbits: number;
	childFemaleRabbits: Array<number> = [];
	fertileFemaleRabbits: number;
	rabbitsNeededAlive: number;

	constructor(males: number, females: number, popSize: number) {
		this.maleRabbits = males;
		this.fertileFemaleRabbits = females;
		this.rabbitsNeededAlive = popSize;
		this.rabbitTotal();
	}

	rabbitTotal(): number {
		return this.maleRabbits + this.femaleRabbitTotal();
	}

	femaleRabbitTotal(): number {
		return this.fertileFemaleRabbits + this.childFemaleRabbitTotal();
	}

	childFemaleRabbitTotal() {
		let sum = 0;

		for (let i = 0; i < this.childFemaleRabbits.length; i++)
			sum += this.childFemaleRabbits[i];

		return sum;
	}

	populationGrowth() {
		this.rabbitTotal();
		let desiredPopSize = this.rabbitsNeededAlive;

		if (
			this.rabbitTotal() < desiredPopSize &&
			this.fertileFemaleRabbits > 0 &&
			this.maleRabbits > 0
		) {
			this.childFemaleRabbits.push(9 * this.fertileFemaleRabbits);
			this.maleRabbits += 5 * this.maleRabbits;
			if (this.childFemaleRabbits.length > 2) {
				let maturedFemales: number = Number(
					this.childFemaleRabbits.shift()
				);
				this.fertileFemaleRabbits += maturedFemales;
			}
		}
	}
}

/* 
    rabbits reproduce
        - 14 offspring (5 males and 9 females)
        - 2 months old for females to be fertile.
    age (exclude newborns)
        - 1 month increments
    die (96 months old)
*/
