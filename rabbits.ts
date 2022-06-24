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
	femaleRabbitTotal: number;
	rabbitTotal: number;

	Male_rabbits: number;
	Female_rabbits: number;
	Rabbits_needed_alive: number;

	constructor(males: number, females: number, popSize: number) {
		this.Male_rabbits = males;
		this.Female_rabbits = females;
		this.Rabbits_needed_alive = popSize;
	}
}

/* 
    rabbits reproduce
        - 14 offspring (5 males and 9 females)
    age (exclude newborns)
        - 1 month increments
    die (96 months old)
*/
