enum RabbitGender {
	Male,
	Female,
}
enum RabbitState {
	Alive,
	Mature,
	Deceased,
}

class Rabbit {
	age: number;
	gender: RabbitGender;
	state: RabbitState;

	constructor() {}
}

export class Population {
	rabbitPopulation: Array<Generation>;
	popTotal: number;
	popGoal: number;

	constructor(
		startingMales: number,
		startingFemales: number,
		popTotalGoal: number
	) {
		let startingGeneration = new Generation(startingMales, startingFemales);
		this.rabbitPopulation.push(startingGeneration);

		this.popGoal = popTotalGoal;
	}

	generationProduce() {
		let nextGenerationMales: number = 0;
		let nextGenerationFemales: number = 0;

		this.rabbitPopulation.forEach((singleGeneration: Generation) => {
			let [newMales, newFemales]: number[] = singleGeneration.breed();

			nextGenerationMales += newMales;
			nextGenerationFemales += newFemales;
		});

		let latestGeneration: Generation = new Generation(
			nextGenerationMales,
			nextGenerationFemales
		);
		this.rabbitPopulation.push(latestGeneration);

		this.generationExpiration();
	}

	generationExpiration() {
		this.rabbitPopulation.forEach((singleGeneration, index) => {
			if (singleGeneration.age > 96) {
				this.rabbitPopulation.splice(index, 1);
			}
		});
	}
}

export class Generation {
	matureMales: number;
	matureFemales: number;

	age: number = 0;

	constructor(males: number, females: number) {
		this.matureMales = males;
		this.matureFemales = females;
	}

	breed() {
		let newMales: number = this.matureFemales * 5;
		let newFemales: number = this.matureFemales * 9;

		this.age++;

		return [newMales, newFemales];
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
