require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');


var firstCommand = process.argv[2];
var secondCommand = process.argv[3];

for (var i = 4; i < process.argv.length; i++) {
    secondCommand += '+' + process.argv[i];
}

var spotify = new Spotify(keys.spotify);

var getArtistInfo = function (artist) {
    return artist.name;
}

var getSpotify = function (songName) {
    if (songName === undefined) {
        songName = "The Sign";
    }

    spotify.search(
        {
            type: "track",
            query: firstCommand
        },
        function (err, data) {
            if (err) {
                console.log("The following error occured:" + err);
                return;
            }
            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("Artist(s): " + songs[i].artists.map(getArtistInfo));
                console.log("Song name: " + songs[i].name);
                console.log("Preview song: " + songs[i].preview_url);
                console.log("Album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }

        }

    );

};

function userSwitch(userCommand) {
    switch (userCommand) {

        case "concert-this":
            findConcert();
            break;
        case "spotify-this-song":
            gotoSpotify();
            break;

        case "movie-this":
            findMovie();
            break;

        case "do-what-it-says":
            doCommand();
            break;

    }

};

function findMovie() {

    var movieName = secondCommand;

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=trilogy";

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var body = JSON.parse(body);
            console.log("Title: " + body.Title);
            console.log("Release date: " + body.Year);
            console.log("Rotten Tomatoes Rating: " + body.Ratings[2].Value);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Language: " + body.Language);



        }
        else {

            console.log("Error")
        }
        if (movieName === "Mr. Nobady") {
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");
        }

    });

}


mySwitch(userCommand);