// events.js
module.exports = {
    // List of possible events
    eventTypes: [
        'A new technological breakthrough!',
        'A random disaster strikes the civilization!',
        'The population faces a plague!',
        'A new religion spreads across the land!',
        'A war breaks out between two civilizations!',
        'A great leader emerges from the shadows!',
        'A famine causes the population to decrease!',
        'A discovery of a new resource fuels civilization growth!',
        'A mysterious comet is seen in the sky!',
        'A natural disaster reshapes the landscape!'
    ],

    // Event function that triggers events with a random chance
    generateRandomEvent(world) {
        const randomChance = Math.random();  // Random chance between 0 and 1

        // Trigger an event with a certain chance (e.g., 50% chance per tick)
        if (randomChance < 0.5) {  // 50% chance of an event occurring every tick
            const eventIndex = Math.floor(Math.random() * this.eventTypes.length);
            const eventMessage = this.eventTypes[eventIndex];

            // Print the event and add it to the world
            world.randomEvent = eventMessage;
            console.log(`Event happens in year ${world.year}: ${eventMessage}`);
        }
    },

    // Function to check if an event is supposed to happen in the current year
    checkYearForEvent(world) {
        // If no event, generate one
        if (!world.randomEvent) {
            this.generateRandomEvent(world);
        }
    }
};
