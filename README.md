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
<pre>
$ node liri.js my-tweets

My last 20 tweets
==========================================================================
Tweet #1
Tweet: RT @NOTSportsCenter: When you know you’re about to get fired and you just DGAF anymore https://t.co/phbBNKxZMH
Created at: Sat Jan 27 03:02:24 +0000 2018
==========================================================================
==========================================================================
Tweet #2
Tweet: RT @TheFostersTV: "What is an American?" ✊🏻✊🏼✊🏽✊🏾✊🏿
______
Song: "Don't Give Up" by @RyanStar https://t.co/FvJkDkZLZi
Created at: Sat Jan 27 03:01:53 +0000 2018
==========================================================================
==========================================================================
Tweet #3
Tweet: RT @Fullscreen: Awwwwkward. https://t.co/PrsaEcBsd9
Created at: Mon Jan 01 06:32:42 +0000 2018
==========================================================================
==========================================================================
Tweet #4
Tweet: RT @KarlTowns: Happy New Years to everyone! Hope 2018 brings everyone blessings, positivity, and success! God bless!
Created at: Mon Jan 01 05:25:52 +0000 2018
==========================================================================
==========================================================================
Tweet #5
Tweet: RT @NFL: 2017 Division WINNERS! https://t.co/4KZyG4dR5y
Created at: Mon Jan 01 03:43:26 +0000 2018
==========================================================================
==========================================================================
Tweet #6
Tweet: RT @DukeMBB: If you start watching the 2015 National Championship Game on your DVR at about 10:51:41 PM and skip commercials/halftime, Tyus…
Created at: Mon Jan 01 03:43:07 +0000 2018
==========================================================================
==========================================================================
Tweet #7
Tweet: “Why I Left My $100,000+ Developer Job at Google” by YK Sugishita https://t.co/KS6N8pF9BN
Created at: Sun Dec 31 02:17:12 +0000 2017
==========================================================================
==========================================================================
Tweet #8
Tweet: “One Hour of Side Project Coding a Day*— a New Year’s Resolution Worth Making” by @LeMarquisOfAndy https://t.co/VIglVFbMZX
Created at: Sun Dec 31 02:08:02 +0000 2017
==========================================================================
==========================================================================
Tweet #9
Tweet: RT @lindseyvonn: Good ol’ Buck Hill!!! Where I grew up❤️ https://t.co/Vcg9BwSRwd
Created at: Sat Dec 30 02:47:32 +0000 2017
==========================================================================
==========================================================================
Tweet #10
Tweet: RT @UKCoachCalipari: You only know if you’re going to win or lose when you win or lose, so why create any anxiety and look ahead? If you st…
Created at: Fri Dec 29 23:39:31 +0000 2017
==========================================================================
==========================================================================
Tweet #11
Tweet: RT @Timberwolves: Hey Jimmy Butler, can you name someone more clutch than you?

3️⃣9️⃣ points and an #NBAVote! https://t.co/bNQAiLpsnK
Created at: Thu Dec 28 15:28:12 +0000 2017
==========================================================================
==========================================================================
Tweet #12
Tweet: RT @espn: Jimmy Butler in overtime: money. https://t.co/0DABuIHwyE
Created at: Thu Dec 28 15:28:06 +0000 2017
==========================================================================
==========================================================================
Tweet #13
Tweet: RT @MNWolfDen: THANK YOU JIMMY! Wolves fans retweet to vote him into the All-Star game because he just single handily won us the game!

Jim…
Created at: Thu Dec 28 04:10:45 +0000 2017
==========================================================================
==========================================================================
Tweet #14
Tweet: RT @NOTSportsCenter: Today’s bowl schedule:

Florida State/Southern Miss: The Yes FSU Is Bowl Eligible Somehow Bowl

Iowa/Boston College:…
Created at: Wed Dec 27 23:56:19 +0000 2017
==========================================================================
==========================================================================
Tweet #15
Tweet: RT @TheFostersTV: The second you graduate college, parents be like: https://t.co/YdjQPYLLX6
Created at: Wed Dec 27 23:55:29 +0000 2017
==========================================================================
==========================================================================
Tweet #16
Tweet: RT @lecrae: Sometimes it’s not a loss. It’s just God helping you clean house.
Created at: Wed Dec 27 23:55:12 +0000 2017
==========================================================================
==========================================================================
Tweet #17
Tweet: RT @LukeKennard5: Happy birthday Jesus! Merry Christmas everyone!
Created at: Mon Dec 25 15:45:21 +0000 2017
==========================================================================
==========================================================================
Tweet #18
Tweet: RT @lecrae: Celebrate Jesus.
Eat terribly.
Destroy someone’s soul in monopoly.
Open gifts. #ChristmasEve
Created at: Mon Dec 25 03:45:02 +0000 2017
==========================================================================
==========================================================================
Tweet #19
Tweet: RT @bigballerbrand: It's not about the money for the Ball Brothers. They have a passion to play Basketball and to experience playing as pro…
Created at: Mon Dec 18 00:38:51 +0000 2017
==========================================================================
==========================================================================
Tweet #20
Tweet: RT @AthleteSwag: Funniest video on Twitter 😂 https://t.co/cRnb21ZxW9
Created at: Fri Nov 24 16:39:14 +0000 2017
==========================================================================
</pre>


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

