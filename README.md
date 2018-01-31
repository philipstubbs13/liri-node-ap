# LIRI

<p>LIRI is like iPhone's SIRI or Google's Google Assistant. However, while SIRI and Google Assistant are a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back tweets, songs, and movies.</p>

## Table of contents
  * [About this project](#about-this-project)
  * [Live](#live)
  * [Getting started](#contribute)
  * [Structure of the project](#structure-of-project)
  * [Examples](#examples)
  	* [Display last 20 tweets](#tweets)
  	* [Display movie information for specified movie](#movie-specified)
  	* [Display movie information for Mr. Nobody when no movie is specified](#movie-not-specified)
  	* [Display top 10 songs on Spotify for the specified song name](#spotify-this-song)
  	* [Display top 10 songs on Spotify for the song, I want it that way](#do-what-it-says)
  	* [Display song information for The Sign by Ace of Base when no song is specified](#song-not-specified)
  * [Technologies used to create app](#technologies-used)
  * [About Node.js](#about-node)
  * [Command line help](#command-line-help)
  * [Future code development](#feature-enhancements)
  * [Issues](#issues)

## <a name="about-this-project"></a> About this project


## <a name="live"></a> Live


## <a name="contribute"></a> Getting started


## <a name="structure-of-project"></a> Structure of the project
<p>The project directory structure is setup as follows:</p>
<ul>
	<li> <b>keys.js</b>:
	</li>
	<li><b>liri.js</b>: </li>
	<li><b>log.txt</b>: </li>
	<li><b>package.json</b>: </li>
	<li><b>random.txt</b>: </li>
	<li><b>images</b>: </li>
</ul>

## <a name="examples"></a> Examples

### <a name ="tweets"></a> Display last 20 tweets


### <a name ="movie-specified"></a> Display movie information for specified movie


### <a name ="movie-not-specified"></a> Display movie information for Mr. Nobody when no movie is specified


### <a name ="spotify-this-song"></a> Display top 10 songs on Spotify for the specified song name


### <a name = "do-what-it-says"></a> Display top 10 songs on Spotify for the song, I want it that way


### <a name = "song-not-specified"></a> Display song information for The Sign by Ace of Base when no song is specified


## <a name="technologies-used"></a> Technologies used to build app

  * Node.js (https://nodejs.org/en/)
  * Twitter node package (https://www.npmjs.com/package/twitter) - used to send requests to Twitter API and receive tweets.
  * Spotify node package (https://www.npmjs.com/package/node-spotify-api) - used to send requests to Spotify API and receive song information.
  * Request node package (https://www.npmjs.com/package/request) - used to send requests to OMDB API and receive movie information.
  * DotEnv node package (https://www.npmjs.com/package/dotenv) - used to load environment variables from a .env file into process.env.
  * Javascript

## <a name="about-node"></a>About Node.js

## <a name="command-line-help"></a> Command line help
<p>Help information is available for each command from the command line.</p>
<p>To access the command line help, run the following command in the project's root directory:</p>
<pre>node liri.js help</pre>



## <a name="feature-enhancements"></a> Future code development
<p>Source code will be developed over time to handle new features in the future.</p>
<p>The following is a list of potential feature enhancements:</p>


## <a name ="Issues"></a> Issues
<p>If you find an issue while using the app or have a request, <a href="https://github.com/philipstubbs13/Project-Longshot/issues/" target="_blank">log the issue or request here</a>. These issues will be addressed in a future code update.</p>

