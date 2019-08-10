# liri-node-app

<h1>LIRI Node App</h1>


<p>Web Developer: Paul David Lampe</p>


<hr>

<h3> Project overview</h3>
What is LIRI? LIRI is a command line node app that takes in parameters and gives you back data.
<hr>

<h3>Technology and packages used for this app:</h3>

[Node.js](https://nodejs.org/en/)

[Bandsintown API](http://www.artists.bandsintown.com/bandsintown-api)

[OMDb API](http://www.omdbapi.com/)

[Spotify API](https://developer.spotify.com/documentation/web-api/)

[Axios](https://www.npmjs.com/package/axios)

[Moment](https://www.npmjs.com/package/moment)

[DotEnv](https://www.npmjs.com/package/dotenv)

<h3> How does LIRI work?</h3>
Users type command line instructions to fidn movie, song or concert information. 

Example: ```node liri.js spotify-this-song (The Sign)``` information about the song The Sign by teh band Ace of Base. 

The user can follow similar steps to search for movie information or concert information. For movies, the user can type ```node liri.js movie-this (insert movie name here)```. For concerts, the user can enter ```node liri.js concert-this (insert artist name here)```.
  

<hr>

<h4>While I have not been able to get the application to function as desired, I have typed out an explanation of how I developed this application and how the application should function. </h4>

-Initite GitHub repository for project titled "liri-node-app"

-Create a package.json file by typing npm init

-Create a .gitignore file with the following three lines so they won't be committed to Github. 

``` 
node_modules
.DS_Store
.env

```

-Create liri.js
-Create keys.js
    - Hide the Spotify keys in keys.js.
-Create a .env file. This file stores the spotify API keys. 
-Create a random.txt file 

-In liri.js install the following packages...
    -dotenv
    -fs
    -node-spotify-api
    -axios
    -moment

-Initiate the app with the spotify functionality

-Create the userSwitch function, so the user can navigate between the various commands. 

-userSwitch function includes the following functionality:
    -findConcert
    -gotoSpotify
    -findMovie
    -doCommand

-Here is a breakdown of the 