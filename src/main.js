const chalk = require('chalk');  // Make sure chalk is correctly imported
const boxen = require('boxen');
const World = require('./World');
const Storage = require('./Storage');
const fs = require('fs');

// Load or create world
let world = Storage.loadWorld();
if (!world) {
    console.log(chalk.green("Creating new world..."));
    const WorldClass = require('./World');
    world = new WorldClass();
} else {
    console.log(chalk.green("World loaded."));
    const WorldClass = require('./World');
    Object.setPrototypeOf(world, WorldClass.prototype);
}

// Simulation tick every 30 seconds
setInterval(() => {
    world.tick();
    Storage.saveWorld(world);

    // Clear the console to print fresh info each tick
    console.clear(); 

    // Design the header
    const header = boxen(
        chalk.blue.bold('Civilization Simulation') + "\n" + 
        chalk.green(`Year: ${world.year}`) + "\n" +
        chalk.yellow(`Era: ${world.era}`), 
        { padding: 1, borderColor: 'green', align: 'center' }
    );

    console.log(header);

    // Display civilization details
    console.log(chalk.cyan('Civilizations:'));
    world.civilizations.forEach((civ, index) => {
        console.log(chalk.magenta(`- ${civ.name} | Population: ${civ.population.length}`));
    });

    // Display random event if any
    console.log(chalk.red("Random Event: "), world.randomEvent ? chalk.bold(world.randomEvent) : "No event this tick");

    // Optional: Add additional information or stats
    console.log(chalk.green("\nPress 'Ctrl + C' to exit the simulation."));
}, 1000);

console.log(chalk.yellow("Simulation started. Next update in 30 seconds..."));
