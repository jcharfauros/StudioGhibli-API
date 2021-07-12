const baseURL = 'https://ghibliapi.herokuapp.com/films';

// const container = document.createElement('div');
// container.setAttribute('class', 'container');
// const card = document.createElement('div');
// card.setAttribute('class', 'card');

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const filmInfoBtn = document.querySelector('.btn');

const modalBody = document.querySelector('.modal-body');
const modalTitle = document.querySelector('.modal-title');

fetch(baseURL)
.then(response => response.json())
.then(json => displayResults(json));

function displayResults (ghibliFilms) {
    ghibliFilms.forEach((g, index) => {
        
        if (index < 1) {            
            
            let filmTitle = document.createElement('h1')
            let synopsis = document.createElement('p');
            let releaseYr = document.createElement('p');
            let filmOGtitle = document.createElement('h2');

                        
            filmTitle.innerText = g.title;
            filmOGtitle.innerText = g.original_title;
            
            synopsis.innerText = g.description;
            releaseYr.innerText = 'Year of release: ' + g.release_date;
            
            cardBody.appendChild(filmTitle);
            cardBody.appendChild(filmOGtitle);
            cardBody.appendChild(releaseYr);
            cardBody.appendChild(synopsis);      
            
        }
        
    });    
}