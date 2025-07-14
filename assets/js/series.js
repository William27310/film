const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NmMTY2YjU4Njk1ZTBhMGM1OGRjMzQ0YTdmN2U1NCIsIm5iZiI6MTc1MTk3Mjc4NS43OTQsInN1YiI6IjY4NmNmYmIxMjE1MGMxZGNkZTZlODhlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Upg7Opwv3uxOg3ODDA9qqFP0ZFG9sxttAw-kO7I5hdI'
    }
};

let totalseries = 10

fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(tv => {
        console.log(tv)

        document.getElementById("series").innerHTML = ""
        for (let i = 0; i < totalseries; i++) {
            document.getElementById("series").innerHTML += `
            <div class="card p-0" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500${tv.results[i].poster_path}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <a class="text-decoration-none" href="">
                    <h5 class="mt-2 text-white">${tv.results[i].name}</h5>
                </a>
                <p class="card-text">${tv.results[i].first_air_date}</p>
                <p class="card-text">${tv.results[i].vote_average}</p>
                </div>
            </div>
            `
        }

   
   
    })
    .catch(err => console.error(err));