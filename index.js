// API //
// https://www.omdbapi.com/?apikey=d10f6546&s=star%20wars

const moviesWrapperEl = document.querySelector(".movies");
let searchResultEl = document.querySelector(".movie__title")
// const errorResultEl = document.querySelector(".error__search")
let filter = ''


async function renderMovies() {
  const movies = await fetch( 
  "https://www.omdbapi.com/?apikey=d10f6546&s=star%20wars"
  )
  const moviesDatas = await movies.json();
  const moviesList = document.querySelector(".user-list");
  moviesList.innerHTML = moviesDatas.Search.map((user) => userHTML(user)).join("");

  
  try {
    searchResultEl.innerHTML = result
    const firstSix =  moviesDatas.Search.filter((elem) => elem).slice(0, 6);
    let userHTML = firstSix
    .map((user) => userHTML(user))
    .join("");


    if (filter === "OLD_TO_NEW") {
        console.log(filter)
     let movieData = firstSix.sort((a, b) => (a.Year) - (b.Year));
     let byYear = movieData.map((movieYear) => userHTML(movieYear)).join("");
     console.log(movieData)
     moviesWrapperEl.innerHTML = byYear 
    }
    else if (filter === "NEW_TO_OLD") {
        console.log(filter)
     let movieData = firstSix.sort((a, b) => (b.Year) - (a.Year));
     let byYear = movieData.map((movieYear) => userHTML(movieYear)).join("");
     console.log(movieData)
     moviesWrapperEl.innerHTML = byYear 
    }
    else if(filter === "A_Z"){
      console.log(filter)
      // let test = firstSix.sort((a, b) => (a.Title) - (b.title));
      let test = firstSix.sort((a, b) => a.Title.localeCompare(b.Title))
   let byAz = test.map((movieAz) => userHTML(movieAz)).join("");
   console.log(test)
   moviesWrapperEl.innerHTML = byAz 
  }
} catch (error) {
      errorResultEl.innerHTML = `"${result}"`
    document.body.classList += " error"
  }
}



function userHTML(user) {
  return `<div class="movies">
  <figure class="movie__poster click no__cursor" onclick="notClickable()">
    <img class="img__poster" src="${user.Poster}" alt="">
  </figure>
  <div class="movie__title">
    <h3>${user.Title}</h3>
  </div>
  <div class="movie__year">
      <p>${user.Year}</p>
    </div>
    <a
  href="https://imdb.com/title/${movie.imdbID}"
  class="imdb"
  target="_blank"
  >IMDB</a>
  </div>`;
}

function onSearchChange(event) {
  movie = event.target.value;
  console.log(event.target.value)
    renderMovies(movie);
}

function filterSort (event) {
  renderMovies(movie)
  filter = event.target.value
}

function closeError(){
  location.reload()
}

function notClickable() {
  console.log('testing not available')
  alert ("this feature has not been implemented")
}