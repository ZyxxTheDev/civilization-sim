// Civilization class
class Civilization {
    constructor(name) {
        this.name = name;
        this.population = [];
        this.technologies = [];
        this.religion = null;
        this.culture = null;
        this.inWarWith = [];
    }

    addHuman(human) {
        this.population.push(human);
        human.civilization = this;
    }
}

module.exports = Civilization;
