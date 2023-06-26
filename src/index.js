let currentMovie;
// challenge 1
//fetch data

fetch('http://localhost:3000/movies')
.then(res => res.json())
.then(data =>{
    // console.log(data)
    data.forEach(movie => renderMoviesToNav(movie))
    renderDetails(data[0])

})
// create image for each movie to add to the movie list
function renderMoviesToNav(movie){
    // console.log(movie)
    const image = document.createElement('img')
    image.src = movie.image
    // add elements to movie list
    const movie_list = document.querySelector('#movie-list')
    image.addEventListener('click', () => {renderDetails(movie)})
    movie_list.append(image)
}
//add elements to movie list
const watchNotification = document.querySelector("#watched")

function renderDetails(movie){
    currentMovie = movie
    // console.log(movie)
    const title = document.querySelector('#title')
    const year = document.querySelector('#year-released')
    const description = document.querySelector('#description')
    const blood = document.querySelector('#amount')
    const watched = movie.watched

    watched === true ? watchNotification.textContent = "Watched" : watchNotification.textContent = "Unwatched"
   
    title.textContent = movie.title
    year.textContent = movie.release_year
    description.textContent = movie.description
    blood.textContent = movie.blood_amount


    }
//challenge 3.5
    
watchNotification.addEventListener('click', () => {
    currentMovie.watched = !currentMovie.watched
    renderDetails(currentMovie)
})






//challenge 4 when you click a button