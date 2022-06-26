var RabbitGender;
(function (RabbitGender) {
    RabbitGender[RabbitGender["Male"] = 0] = "Male";
    RabbitGender[RabbitGender["Female"] = 1] = "Female";
})(RabbitGender || (RabbitGender = {}));
var RabbitState;
(function (RabbitState) {
    RabbitState[RabbitState["Alive"] = 0] = "Alive";
    RabbitState[RabbitState["Mature"] = 1] = "Mature";
    RabbitState[RabbitState["Deceased"] = 2] = "Deceased";
})(RabbitState || (RabbitState = {}));
var Rabbit = /** @class */ (function () {
    function Rabbit() {
    }
    return Rabbit;
}());
var Population = /** @class */ (function () {
    function Population(startingMales, startingFemales, popTotalGoal) {
        var startingGeneration = new Generation(startingMales, startingFemales);
        this.rabbitPopulation.push(startingGeneration);
        this.popGoal = popTotalGoal;
    }
    Population.prototype.generationProduce = function () {
        var nextGenerationMales = 0;
        var nextGenerationFemales = 0;
        this.rabbitPopulation.forEach(function (singleGeneration) {
            var _a = singleGeneration.breed(), newMales = _a[0], newFemales = _a[1];
            nextGenerationMales += newMales;
            nextGenerationFemales += newFemales;
        });
        var latestGeneration = new Generation(nextGenerationMales, nextGenerationFemales);
        this.rabbitPopulation.push(latestGeneration);
        this.generationExpiration();
    };
    Population.prototype.generationExpiration = function () {
        var _this = this;
        this.rabbitPopulation.forEach(function (singleGeneration, index) {
            if (singleGeneration.age > 96) {
                _this.rabbitPopulation.splice(index, 1);
            }
        });
    };
    return Population;
}());
var Generation = /** @class */ (function () {
    function Generation(males, females) {
        this.age = 0;
        this.matureMales = males;
        this.matureFemales = females;
    }
    Generation.prototype.breed = function () {
        var newMales = this.matureFemales * 5;
        var newFemales = this.matureFemales * 9;
        this.age++;
        return [newMales, newFemales];
    };
    return Generation;
}());
/*
    rabbits reproduce
        - 14 offspring (5 males and 9 females)
        - 2 months old for females to be fertile.
    age (exclude newborns)
        - 1 month increments
    die (96 months old)
*/
