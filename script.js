//title
//original_title
//original_title_romanised
//description
//director
//release_date

const baseURL = 'https://ghibliapi.herokuapp.com/films';

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const filmInfoBtn = document.querySelector('.btn');

fetch(baseURL)
    .then(response => response.json())
    .then(json => displayResults(json));

function displayResults(ghibliMovie) {
    console.log(ghibliMovie);

    let film = document.createElement('h1');
    film.className = 'card-title';
    film.innerText = ghibliMovie[0].title;

    let description = document.createElement('p');
    description.className = 'card-text';
    description.innerText = ghibliMovie[0].description;

    // let title = document.createElement('h1');
    // title.className = 'card-title';
    // title.innerText - ghibliMovie.title[0];
    // title.style.fontFamily = '';

    cardBody.insertBefore(film, filmInfoBtn);
    cardBody.insertBefore(description, filmInfoBtn);
}