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

* Initite GitHub repository for project titled "liri-node-app"

* Create a package.json file by typing npm init

* Create a .gitignore file with the following three lines so they won't be committed to Github. 

``` 
node_modules
.DS_Store
.env

```

* Create liri.js
* Create keys.js
    - Hide the Spotify keys in keys.js.
* Create a .env file. This file stores the spotify API keys. 
* Create a random.txt file 

* In liri.js install the following packages...
    * dotenv
    * fs
    * node-spotify-api
    * axios
    * moment

* Initiate the app with the spotify functionality

* Create the userSwitch function, so the user can navigate between the various commands. 

* userSwitch function includes the following functionality:
    * findConcert
    * gotoSpotify
    * findMovie
    * doCommand

* Here is a breakdown of the various package and API based functions. 
    * For the Spotify function:
        * Use gotoSpotify variable as your paramater.
        * If the variable is undefined, return "The Sign" by "Ace of Base." 
        * Search Spotif API and return the artist information, song name, a preview song URL and the album information. 
        * Console.log this information to teh terminal. 
    * For the omdb/find movie function::
        * Use queryURL to search the OMDB API. 
        * Set a findMovie variable as the paramter. 
        * If no movie is entered, return "Mr. Nobody" informtion from IMDB database. 
        * When the user request information from OMDB, the API should return title, Rotten Tomatoes rating, IMdB rating, country for movie production, plot information, main actors and the language for the film. 
        * Console.log this information to the terminal. 
    * For the Bands in Town function:
        * Establish findConcert as the function. 
        * If not informtion is included in the search, send "Something went wrong.." message back to user in the terminal 
        * Use queryURL to search Bands in Town API and database.  
        * Search for concert name, city, country and date. 
        * Console.log this information to the terminal. 
    * For the doCommand() function, read and return information in random.txt by utilizing if statements. 

    * Call the userSwitch() to move between API and package functions. 


