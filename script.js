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

const modalBody = document.querySelector('.modal-body');
const modalTitle = document.querySelector('.modal-title');

fetch(baseURL)
.then(response => response.json())
.then(json => displayResults(json));

function displayResults (ghibliFilms){

    let g = ghibliFilms[Math.floor(Math.random()*ghibliFilms.length)]; 
        console.log(g);

    let filmTitle = document.createElement('h1')
    let synopsis = document.createElement('p');
    let releaseYr = document.createElement('p');
    let filmOGtitle = document.createElement('h3');
    let director = document.createElement('h4');

    filmTitle.innerText = g.title;
    filmOGtitle.innerText = g.original_title;
    director.innerText = g.director;
    synopsis.innerText = g.description;
    releaseYr.innerText = 'Year of release: ' + g.release_date; 
    
    
    cardBody.insertBefore(filmTitle, filmInfoBtn);
    cardBody.insertBefore(filmOGtitle, filmInfoBtn);
    cardBody.insertBefore(releaseYr, filmInfoBtn);

    modalTitle.appendChild(director);
    modalBody.appendChild(synopsis);
}
