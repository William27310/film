const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NmMTY2YjU4Njk1ZTBhMGM1OGRjMzQ0YTdmN2U1NCIsIm5iZiI6MTc1MTk3Mjc4NS43OTQsInN1YiI6IjY4NmNmYmIxMjE1MGMxZGNkZTZlODhlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Upg7Opwv3uxOg3ODDA9qqFP0ZFG9sxttAw-kO7I5hdI'
    }
};

let totalartist = 10

fetch('https://api.themoviedb.org/3/trending/person/day?language=fr-fr', options)
    .then(response => response.json())
    .then(art => {
        console.log(art)

        document.getElementById("casting_art").innerHTML = ""
        for (i = 0; i < totalartist; i++) {
            document.getElementById("casting_art").innerHTML += `
            <div class="card p-0" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500${art.results[i].profile_path}" onerror="this.src='assets/img/null.png'"
                class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${art.results[i].name}</p>
                    <p class="card-text">${art.results[i].known_for_department}</p>
                </div>
            </div>
            `
        }
    })
    .catch(err => console.error(err));