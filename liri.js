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
                console.log("Artist(s): " + songs[i].artists.map(getArtistNames));
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
        case "spotify-this-song":
            getSpotify();
            break;

        case "movie-this":
            getMovie();
            break;

        case "do-what-it-says":
            doWhat();
            break;

    }

}