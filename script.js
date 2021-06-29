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
    // .then(json => displayAllFilms(json));


/* NOTE: this works, but you only grab one film at a time */
function displayResults(ghibliMovie) {
    console.log(ghibliMovie);
    
    let film = document.createElement('h1');
    film.className = 'card-title';
    film.innerText = ghibliMovie[2].title;

    let description = document.createElement('p');
    description.className = 'card-text';
    description.innerText = ghibliMovie[2].description;

    /* MODAL */
    /*  
    Can i make var filmInfo into a string interploation with
        original_title
        original_title_romanised
        release_date
        director 
    */
    let filmDirector = document.createElement('p');    
    filmDirector.innerText = ghibliMovie[2].director;

    let filmOGtitle = document.createElement('p');
    filmOGtitle.innerText = ghibliMovie[2].original_title;
    
        //IS THIS A THING T.T
    // let filmOGtitle = ghibliMovie[2].original_title; 
        //THIS ONE TOO X.X
    // console.log(`Director: ${filmDirector}, Original title: ${filmOGtitle}`);
        //THIS IS ANOTHER IDEA I HAD LOL
    // let filmInfo = (`Director: ${filmDirector}, Original Title: ${filmOGtitle}`);


    /* DISPLAY */
    modalTitle.innerText = ghibliMovie[2].title;
    // modalTitle.innerText = ghibliMovie[2].description;

    cardBody.insertBefore(film, filmInfoBtn);
    cardBody.insertBefore(description, filmInfoBtn);
        /*example of what I want in the modal:
            Director: Hayao Miyazaki
            Original title: <Japanese name>, <Romanized name>
            Release year: 1986
            Trailer: <link OR embed YouTube video>
            */
    modalBody.appendChild(filmDirector);
    modalBody.appendChild(filmOGtitle);
}

/* NOTE: ok, not sure how I did this, but it displays all the title names. */

// function displayAllFilms(ghiblifilms) {
//     ghiblifilms.forEach((ghiblifilm) => {
//         let filmTitle = document.createElement('div');        
//         filmTitle.innerText = ghiblifilm.title;
//         //is this just setting the card attribute or actually creating a card?
//         //i want each movie to be on it's own card.
//         //might switch to accordion
//         filmTitle.setAttribute('class', 'card');

//         let filmDescrip = document.createElement('p');
//         filmDescrip.innerText = ghiblifilm.description;

//         cardBody.insertBefore(filmTitle, filmInfoBtn);
//         cardBody.insertBefore(filmDescrip, filmInfoBtn);
//         //make a container??
//     });
// }