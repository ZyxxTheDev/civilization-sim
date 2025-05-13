class Human {
    static babyNames = [
        "Adam", "Eve", "Noah", "Lily", "Sophia", "John", "Alice", "Ethan", "Olivia",
        "Lucas", "Emma", "Ava", "Mason", "Isabella", "James", "Mia", "William", "Amelia"
    ];

    static maxAge = 95;  // Maximum age for a person (simulate death by old age)
    static deathChance = 0.50; // 5% chance for death every cycle

    constructor(name) {
        this.name = name;
        this.age = 0;  // Start with age 0
    }

    // Simulate aging and death
    static simulateLifeCycle(population) {
        const newPopulation = [];

        population.forEach(person => {
            person.age++;

            if (person.age > Human.maxAge || Math.random() < Human.deathChance) {
                console.log(`${person.name} has died at age ${person.age}.`);
                return; // Do not add this person back to the population if they die
            }

            // If the person survives, they stay in the population
            newPopulation.push(person);
        });

        return newPopulation;
    }

    static simulateBirth(population) {
        const newPeople = [];
        population.forEach(person => {
            if (Math.random() < 0.50) {
                const babyName = Human.babyNames[Math.floor(Math.random() * Human.babyNames.length)];
                const baby = new Human(babyName);
                newPeople.push(baby);
                console.log(`${person.name} has had a baby! The baby's name is ${babyName}.`);
            }
        });
        return [...population, ...newPeople];
    }
}

module.exports = Human;
