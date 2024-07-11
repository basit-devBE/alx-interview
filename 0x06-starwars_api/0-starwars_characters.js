const request = require('request');

// Get the Movie ID from the command line arguments
const movieId = process.argv[2];

// Validate the Movie ID
if (!movieId) {
    console.error('Please provide a Movie ID as a positional argument.');
    process.exit(1);
}

// Construct the URL for the /films/ endpoint
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Send a request to the Star Wars API
request(url, { json: true }, (err, res, body) => {
    if (err) {
        console.error('Error fetching data from the Star Wars API:', err);
        return;
    }

    // Check if the request was successful
    if (res.statusCode === 200) {
        // Print the characters' names
        const characters = body.characters;
        characters.forEach(characterUrl => {
            request(characterUrl, { json: true }, (err, res, body) => {
                if (err) {
                    console.error('Error fetching character data:', err);
                    return;
                }

                // Print the character's name
                console.log(body.name);
            });
        });
    } else {
        console.error(`Failed to fetch data. Status code: ${res.statusCode}`);
    }
});
