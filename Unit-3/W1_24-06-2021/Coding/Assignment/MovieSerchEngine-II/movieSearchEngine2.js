
let container = document.getElementById('container');


async function getMovie() {

    try {
         let movie = document.getElementById('movie').value;
        //let movie = 'badla';
        let promise = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=2a0795e2`);
        let data = await promise.json();
        

        if (data.Response == "False") {
            console.log('Notfound')
            notFound()
        } else {
            showMovieDetails(data)
        console.log('data: ', data);
        }
    }
    catch(err) {
        console.log('Movie Error: ', err);
        
    }

}

//getMovie()

function showMovieDetails(d) {
    container.innerHTML = ''
    let title = document.createElement('h1');
    title.innerText = d.Title

    let year = document.createElement('p');
    year.innerText = d.Year;

    let released = document.createElement('p');
    released.innerText = d.Released;

    let genre = document.createElement('p');
    genre.innerText = d.Genre;

    let actors = document.createElement('p');
    actors.innerText = d.Actors;

    let director = document.createElement('p');
    director.innerText = d.Director;

    let language = document.createElement('p');
    language.innerText = d.Language;

    let country = document.createElement('p');
    country.innerText = d.Country;

    let poster = document.createElement('img');
    poster.src = d.Poster;

    let imdbRating = document.createElement('p');
    imdbRating.innerText = d.imdbRating;

    let plot = document.createElement('p');
    plot.innerText = d.Plot;


    let div = document.createElement('div');
    div.append(poster, title, plot, year, released, genre, actors, director, language, country, imdbRating)

    container.append(div)
}

function notFound() {

    container.innerHTML = ''


    let title = document.createElement('h2');
    title.innerHTML =`Movie not Found`

    let image_notfound = document.createElement('img');
    image_notfound.src = 'https://media4.giphy.com/media/JR5gt4Ju9gswpwkuRY/200w.webp?cid=ecf05e47im29hff7sr32wma9k0omr39a9hr0ftyy7b4yxdx4&rid=200w.webp&ct=g';

    let div = document.createElement('div');
    div.append(title, image_notfound)
    
    container.append(div)
    
}