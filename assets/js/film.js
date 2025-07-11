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
                <img class="ms-3 mx-3 w-25" src="https://image.tmdb.org/t/p/w500${data.poster_path}"
                alt="">
                <ul>
                    <li type="none">
                        <p class="ms-2 mt-5">${data.original_title}</p>
                    </li>
                    <li type="none">
                        <p class="ms-2 mt-5">${data.vote_average}</p>
                    </li>
                    <li type="none">
                        <p class="ms-2 mt-5">${data.overview}</p>
                    </li>
                    <li type="none">
                        <p class="ms-2 mt-5">${data.release_date}</p>
                    </li>
                </ul>
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
            <div class="col-2 card p-0 ms-2 mx-2">
                <img src="https://image.tmdb.org/t/p/w500${acteur.cast[i].profile_path}" alt="...">
                <div class="card-body">
                    <p class="card-text"> ${acteur.cast[i].name} </p>
                    <p class="card-text"> ${acteur.cast[i].character}</p>
                </div>
            </div>
        `

        }
    })
    .catch(err => console.error(err));