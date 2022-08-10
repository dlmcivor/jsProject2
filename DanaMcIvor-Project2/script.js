// user clicks the tv icon
// make a call to the TMDb api to discover popular movies
// display random movie on page

const app = {};

app.key = `fa00a56e508b8cbedbe609fb49e96f9f`;

// api call
app.getMovies = () => {
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/popular?api_key=fa00a56e508b8cbedbe609fb49e96f9f&language=en-US&page=1`,
        method: `GET`,
        dataType: `json`
    }).then(result => {
        // display random movie html
        const randomMovie = app.getRandomElement(result.results); 
        $('main').html(`<div>
        <img src="https://image.tmdb.org/t/p/w1280${randomMovie.poster_path}" alt="movie poster">
        <h2>${randomMovie.title}</h2>
        </div>`)
    });
};

// helper function to get random element from an array
app.getRandomElement = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

app.init = () => {
    $('#tvID').on('click', (event) => {
        event.preventDefault();
        app.getMovies();
    })
};

$(() => {
    app.init();
})

