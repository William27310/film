const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NmMTY2YjU4Njk1ZTBhMGM1OGRjMzQ0YTdmN2U1NCIsIm5iZiI6MTc1MTk3Mjc4NS43OTQsInN1YiI6IjY4NmNmYmIxMjE1MGMxZGNkZTZlODhlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Upg7Opwv3uxOg3ODDA9qqFP0ZFG9sxttAw-kO7I5hdI'
    }
};

let total_film = 5

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        document.getElementById("receptacle").innerHTML = ""
        for (let i = 0; i < total_film; i++) {
            document.getElementById("receptacle").innerHTML += `
            <div class="card p-0 ms-2 mx-2 col-6 col-sm-3">
            <div class="cards h-100">
                    <img class="img-fluid" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"
                    alt="...">
                <div class="card-body">
                    <a class="text-decoration-none" href="film.html?id=${data.results[i].id}"><h5 class="mt-2">${data.results[i].title}</h5></a>
                    <p>${data.results[i].release_date}</p>
                    <p>${data.results[i].vote_average.toFixed(1)}</p>
                </div>
        </div> 
        </div>           
            `
        }
    })
    .catch(err => console.error(err));
