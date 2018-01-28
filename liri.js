//Read and set any environment variables with the dotenv package:
require("dotenv").config();

//To retrieve the data that will power this app, we'll need to send requests to the Twitter, Spotify and OMDB APIs. 
//Grab the Node packages.
//Grab the request package.
var request = require("request");
//Grab the Spotify package.
var Spotify = require('node-spotify-api');

//Using the require keyword, let's access all of the keys in the keys.js file
var keys = require("./keys.js");

//process.argv will print out any command line arguments.
var input = process.argv;

//Create variable to hold all the possible liri commands you can enter
//my-tweets, spotify-this-song, movie-this, do-what-it-says
var liriCommand = input[2];

//If the liriCommand is movie-this, we will need a variable to hold the movie name.
var movieName = input[3];

//If the liriCommand is spotify-this-song, we will need a variable to hold the song name.
var songName = input[3];

//Code to access keys information.
//var client = new Twitter(keys.twitter);

//If the liriCommand is movie-this and a movieName is provided...
//Output information about that movie.
if (liriCommand === "movie-this") {
	getMovieInfo();
}

//If the liriCommand is my-tweets, show last 20 tweets and when they were created in terminal window.
if (liriCommand === "my-tweets") {
	getLatestTweets();
}

//If the liriCommand is spotify-this-song, show song info for the specified song.
if (liriCommand === "spotify-this-song") {
	getSongInfo();
}

//Get movie info function... Run this function to get movie info for the specified movie.
function getMovieInfo() {

	//Then, run a request to the OMDB API with the movieName the user enters.
	request("http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy", function(error, response, body) {

		//Create variable to hold all the movie info that we will output to the console.
		//Parse the body of the JSON object that holds the movie data and display the movie info.
		var movieInfo = JSON.parse(body);
		//Title of movie
		var movieTitle = "Title: " + movieInfo.Title;
		//Year the movie came out.
		var movieYear = "Year movie was released: " + movieInfo.Year;
		//IMDB Rating of the movie.
		var IMDBRating = "IMDB movie rating (out of 10): " + movieInfo.imdbRating;
		//Rotten Tomatoes rating of the movie.
		var rottenTomatoes = "Rotten Tomatoes rating (out of 100%): " + movieInfo.Ratings[1].Value;
		//Country where the movie was produced.
		var countryProduced = "Filmed in: " + movieInfo.Country;
		//Language of the movie.
		var movieLanguage = "Language: " + movieInfo.Language;
		//Plot of the movie.
		var moviePlot = "Movie plot: " + movieInfo.Plot;
		//Actors in the movie.
		var movieActors = "Actors: " + movieInfo.Actors;

		//If the request is successful (i.e. if the response status code is 200)
		if (!error && response.statusCode === 200) {
			//console.log(JSON.parse(body));
			//Output the following information to terminal window.
			//Title of the movie.
			console.log(movieTitle);
		   	//Year the movie came out.
		   	console.log(movieYear);
		   	//IMDB Rating of the movie.
		   	console.log(IMDBRating);
		   	//Rotten Tomatoes rating of the movie.
		   	console.log(rottenTomatoes);
		   	//Country where the movie was produced.
		   	console.log(countryProduced);
		   	//Language of the movie.
		   	console.log(movieLanguage);
		   	//Plot of the movie.
		   	console.log(moviePlot);
		   	//Actors in the movie.
		   	console.log(movieActors);
		}
	});
}

//Get tweets function... Run this function to get last 20 tweets and when they were created.
function getLatestTweets(){
	request("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=iamPhilStubbs&count=20", function(error, response, body) {
		//If the request is successful (i.e. if the response status code is 200)
		if (!error && response.statusCode === 200) {
			//Parse the body of the JSON object that holds the tweet info and display the info.
			var tweetInfo = JSON.parse(body);
			console.log(tweetInfo);
		}
	});
}

//Get song info function... Run this function to get information about the specified song.
function getSongInfo() {

	//var spotify = new Spotify(keys.spotify);
	var spotify = new Spotify({
  		id: process.env.SPOTIFY_ID,
  		secret: process.env.SPOTIFY_SECRET
	});

	//Use the Spotify package to search for a song/track. Set search results limit to 10.
	spotify.search({ type: 'track', query: songName, limit: 10 }, function(err, data) {
  
  		//If there is an error, log it.
  		if (err) {
    		return console.log('Error occurred: ' + err);
  		}
 
 	// If there is no error... then print out the song data.
  	// Use JSON.stringify to print the data in string format.
  	// Use the JSON.stringify argument of "2" to make the format pretty.
  	// See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
	//console.log(JSON.stringify(data, null, 2)); 

	//Loop through the JSON data to display the top songs.
	for (var i = 0; i < data.tracks.items.length; i ++) {
	console.log("========================================================================================================================================");
	//Display song number for each song. For example, the first song returned will be Song #1, the second returned will be Song #2, etc.
	console.log("Song #" + (i+1));
	//Output the artist
	console.log("Artist: " + data.tracks.items[i].artists[0].name);
	//Output the song's name.
	console.log("Song title: " + data.tracks.items[i].name)
	//Output a preview link of the song from Spotify.
	console.log("Preview song: " + data.tracks.items[i].preview_url);
	//Output the album that the song is from.
	console.log("Album: " + data.tracks.items[i].album.name);
	console.log("========================================================================================================================================");
	}
	});
}