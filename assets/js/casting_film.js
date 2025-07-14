const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NmMTY2YjU4Njk1ZTBhMGM1OGRjMzQ0YTdmN2U1NCIsIm5iZiI6MTc1MTk3Mjc4NS43OTQsInN1YiI6IjY4NmNmYmIxMjE1MGMxZGNkZTZlODhlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Upg7Opwv3uxOg3ODDA9qqFP0ZFG9sxttAw-kO7I5hdI'
    }
};

const parsedUrl = new URL(window.location.href);

let id = parsedUrl.searchParams.get("id")

fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr-fr`, options)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.original_title)
        console.log(data.poster_path)



        document.getElementById("details").innerHTML = `
        <div class="card border border-dark mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}"
                        class="img-fluid col-md-8 rounded-start" alt="...">
                </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${data.original_title}</h5>
                    <p class="card-text">${data.vote_average}</p>
                    <p class="card-text">${data.overview}</p>
                    <p class="card-text">${data.release_date}</p>
                    <p> 
                </div>
            </div>
        </div>
        `
    })
    .catch(err => console.error(err));

let total_acteur = 6

function replaceImage() {

}

fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=fr-fr`, options)
    .then(response => response.json())
    .then(acteur => {
        console.log(acteur)

        document.getElementById("casting").innerHTML = ""
        for (let i = 0; i < total_acteur; i++) {
            document.getElementById("casting").innerHTML +=
                `
            <div class="card border border-dark p-0" style="width: 10rem;">
                <img src="https://image.tmdb.org/t/p/w500${acteur.cast[i].profile_path}" alt="...">
                <div class="card-body">
                    <p class="card-text">${acteur.cast[i].name}</p>
                    <p class="card-text fw-bold">${acteur.cast[i].character}</p>
                </div>
            </div>
        `

        }
    })
    .catch(err => console.error(err));