class World {
    constructor() {
        this.year = 0;
        this.era = "Stone Age";
        this.civilizations = [
            { name: "Civ 1", population: [] },
            { name: "Civ 2", population: [] }
        ];
        this.randomEvent = null;
        this.eventYear = null; // Track the year the event happened
    }

    // List of possible random events
    get possibleEvents() {
        return [
            "A discovery of a new resource fuels civilization growth!",
            "A great plague wipes out half the population!",
            "An earthquake devastates a major city!",
            "A war breaks out between two civilizations!",
            "A mysterious traveler arrives with advanced technology!"
        ];
    }

    // Simulate one tick of the world (growth, era, etc.)
    tick() {
        this.year++;

        // Simulate death and growth for each civilization
        this.civilizations.forEach(civ => {
            // Chance for a person to die (e.g., 5% chance of death each year for each person)
            const deathChance = 0.05;
            civ.population = civ.population.filter(() => Math.random() > deathChance); // Remove people based on death chance
            
            // 95% chance of population growth each tick (new baby)
            if (Math.random() < 0.95) {
                civ.population.push(`Person ${civ.population.length + 1}`);
            }
        });

        // Random event happens occasionally (e.g., every 5 ticks)
        if (Math.random() < 0.2 && this.year !== this.eventYear) {  // 20% chance each tick
            const randomEventIndex = Math.floor(Math.random() * this.possibleEvents.length);
            this.randomEvent = this.possibleEvents[randomEventIndex];
            this.eventYear = this.year;  // Mark the year when the event occurred

            // If the event is a plague, it might decrease the population by a larger margin
            if (this.randomEvent.includes("plague")) {
                this.civilizations.forEach(civ => {
                    const plagueDeaths = Math.floor(civ.population.length * 0.5); // 50% death rate for plague
                    civ.population = civ.population.slice(0, civ.population.length - plagueDeaths); // Remove people based on plague death
                });
            }
        }

        // Check civilization's population and move to a new era if needed
        this.checkEraProgression();
    }

    // Method to move civilizations to the next era based on their population size
    checkEraProgression() {
        this.civilizations.forEach(civ => {
            if (civ.population.length > 50 && this.era === "Stone Age") {
                this.era = "Bronze Age";
                console.log(`${civ.name} has entered the Bronze Age!`);
            } else if (civ.population.length > 100 && this.era === "Bronze Age") {
                this.era = "Iron Age";
                console.log(`${civ.name} has entered the Iron Age!`);
            }
        });
    }
}

module.exports = World;
