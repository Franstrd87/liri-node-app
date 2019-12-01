# Liri Node App

#### Description
Liri is a command line app that takes parameter and returns related data from one of three APIs.

The GitHub repository can be found [here](https://franstrd87.github.io/liri-node-app/)

---

#### Installing

1. Navigate to the root directory and type the following
into the terminal:

``` shell
npm install
```

2. In order to retrieve data from Spotify, the user will need register for their own API key using the following instructions:
        * Visit <https://developer.spotify.com/my-applications/#!/>
        * Either login to your existing Spotify account or create a new one and log in. 
        * Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. When finished, click the "complete" button.
        * On next screen, scroll down to find your client id and client secret.

3. Create a `.env` file in the root directory and add the following to the file (with the 'client id' and 'client secret' created in the previous step entered in place of the values):

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret 

```

---


#### Running The App

1. LIRI understands the following commands:
    * `movie-this` - retrieves movie data from OMDB.
    * `spotifiy-this-song` - retrieves song data from Spotify.
    * `concert-this` - retrieves upcoming show data from Bands In Town.
    * `do-what-it-says` - reads text in `random.txt` and runs the specified command.

2. The user can get search for a movie, song, artist/band using the commands in the terminal followed by their choice of movie/song/artist.

3. Examples of the terminal commnds and expected output follow:

---

**`movie-this`**

```shell
node liri.js movie-this <enter movie name here>
```
Expected output:
![movie-this](assets\Images\movieThis.jpg)

---

**`spotify-this-song`**

```shell
node liri.js spotify-this-song <enter song name here>
```
Expected output:
![spotify-this](assets\Images\Untitled.jpg)

---

**`concert-this`**
```shell
node liri.js concert-this <enter artist name here>
```
Expected output:
![concert-this](assets\Images\concertThis.jpg)

---

**`do-what-it-says`**

```shell
node liri.js do-what-it-says 
```
Expected output:
![do-what-its-says](assets\Images\dowhat.jpg)

---

#### Technologies Uses
* Javascript
* Npm Packages
* Moment
* Axios
* DotENV
* Node.js
* APIs - Spotify, Bands In Town, OMDB.


---

#### Author
Tulus F. Tiranda
https://github.com/Franstrd87
