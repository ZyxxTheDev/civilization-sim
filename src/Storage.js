const fs = require('fs');
const path = require('path');
const World = require('./World');  // Import World class

const WORLD_FILE_PATH = path.join(__dirname, 'world.json');

module.exports = {
    // Save world to a JSON file
    saveWorld(world) {
        try {
            const worldData = JSON.stringify(world, null, 2);
            fs.writeFileSync(WORLD_FILE_PATH, worldData, 'utf8');
            console.log('World saved successfully.');
        } catch (error) {
            console.error('Error saving world:', error);
        }
    },

    // Load world from a JSON file and ensure it's a World object
    loadWorld() {
        try {
            if (fs.existsSync(WORLD_FILE_PATH)) {
                const worldData = fs.readFileSync(WORLD_FILE_PATH, 'utf8');
                const parsedWorld = JSON.parse(worldData);

                // Create a new instance of World and copy the loaded properties to it
                const world = new World();
                Object.assign(world, parsedWorld);  // Copy properties to the world object

                console.log('World loaded successfully.');
                return world;
            } else {
                console.log('No saved world found, creating a new world.');
                return null;
            }
        } catch (error) {
            console.error('Error loading world:', error);
            return null;
        }
    }
};
