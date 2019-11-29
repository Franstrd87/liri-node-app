require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./key.js");
var axios = require("axios");
var fs = require('fs');
var moment = require("moment");
var spotify = new Spotify(keys.spotify);


var command = process.argv[2];
var keyword = process.argv.slice(3).join(" ");

function spotifyThis (keyword) {
    if (keyword === "undefined") {
        keyword = "Ace of Base The Sign";
    };

    spotify.search({ type: 'track', query: keyword, limit: 3 })
    .then(function(response) {

      console.log("=====================")
      console.log("Artist Name: " + response.tracks.items[0].artists[0].name);
      console.log("Track Name: " + response.tracks.items[0].name);
      console.log("Preview URL: " + response.tracks.items[0].external_urls.spotify);
      console.log("Album Name: " + response.tracks.items[0].album.name);
      console.log("=====================")

    });
    //.catch(function(err) {
      //console.log(err);
   // });

};

function showConcert(keyword){
    var queryURL = "https://rest.bandsintown.com/artists/" + keyword + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
        function (response) {

            console.log("=====================")
            console.log("Name of the Venue: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city);
            console.log("Date of event: " + moment(response.data[0].datetime).format("MM-DD-YYYY"));
            console.log("=====================")

        });
};

function getOMDb(movie) {
    if (!movie){
        movie = "Mr. Nobody";
    }
    
    var movieQueryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=shot&apikey=trilogy&";

    axios.get(movieQueryURL).then(
        function (response) {

            console.log("=====================")
            console.log("Title: " + response.data.Title);
            console.log("Year Released: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country Where Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("=====================")

        }
    );
}

    function getRandom() {
        fs.readFile("random.txt", "utf8", function(err, data){
            if (err){
                return console.log(err);
            }

            var arg = data.split(",");
            var commandFor = arg[0];
            var input = arg[1];

            switch(commandFor){
                case "movie-this":
                    getOMDb(input);
                    break;

                case "spotify-this-song":
                    spotifyThis(input);
                    break;

                case "concert-this":
                    showConcert(input);
                    break;
            }
        });
    };


switch(command){
    case "spotify-this-song":
        spotifyThis(keyword)
        break;

    case "concert-this":
        showConcert(keyword);
        break;

    case "movie-this":
        getOMDb(keyword);
        break;

    case "do-what-it-says":
        getRandom(keyword);
        break

    default:
        console.log("!--------NOT - RECOGNIZED--------");
}


