//Grab the request package.
var request = require("request");

//Using the require keyword, let's access all of the keys in the keys.js file
var keys = require("./keys.js");

//process.argv will print out any command line arguments.
var input = process.argv;

//Create variable to hold all the possible liri commands you can enter
//my-tweets, spotify-this-song, movie-this, do-what-it-says
var liriCommand = input[2];

//If the liriCommand is movie-this, we will need a variable to hold the movie name.
var movieName = input[3];

//Read and set any environment variables with the dotenv package:
require("dotenv").config();

//Code to access keys information.
//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);

//If the liriCommand is movie-this and a movieName is provided...
//Output information about that movie.
if (liriCommand === "movie-this" && movieName != null) {
	getMovieInfo();
	console.log(movieName);
}


//Get movie info function... Run this function to get movie info for the specified movie.
function getMovieInfo() {
	//Then, run a request to the OMDB API with the movieName the user enters.
	request("http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy", function(error, response, body) {

		//If the request is successful (i.e. if the response status code is 200)
		if (!error && response.statusCode === 200) {
			//Parse the body of the JSON object that holds the movie data and display the movie info.
			var movieInfo = JSON.parse(body);
			//console.log(JSON.parse(body));
			//Output the following information to terminal window.
			//Title of the movie.
			console.log("Title: " + movieInfo.Title);
		   	//Year the movie came out.
		   	console.log("Year movie was released: " + movieInfo.Year);
		   	//IMDB Rating of the movie.
		   	console.log("IMDB movie rating (out of 10): " + movieInfo.imdbRating);
		   	//Rotten Tomatoes rating of the movie.
		   	console.log("Rotten Tomatoes rating (out of 100%): " + movieInfo.Ratings[1].Value);
		   	//Country where the movie was produced.
		   	console.log("Filmed in: " + movieInfo.Country);
		   	//Language of the movie.
		   	console.log("Language: " + movieInfo.Language);
		   	//Plot of the movie.
		   	console.log("Movie plot: " + movieInfo.Plot);
		   	//Actors in the movie.
		   	console.log("Actors: " + movieInfo.Actors);
		}
	});
}