var Sök_bar = document.getElementById("Sök_bar")
var Resultat_div = document.getElementById("Resultat_div")

var Lista_av_blumhouse_filmer = []
var Lista_av_Titlar_resultat = []

Sök_bar.onkeydown = async function(event){
    if (event.key === "Enter"){
        event.preventDefault()

        var Resultat = await sök_efter_film(Sök_bar.value)
        console.log(Resultat)
        await Create_results(Resultat.results)
        async function sök_efter_film(Film_sökt){
            let url = `https://api.themoviedb.org/3/search/movie?query=${Film_sökt}&api_key=d88a50faae8d9ba506d9df81d76f1c63`
            let response = await fetch(url);
            let json = await response.json(response)
            return json
        }
        
        async function Create_results(Resultat){
          Resultat_div.innerHTML = ''; //Ser till att de tidgare sökta resultaten försvinner från resultat_diven
          for(let object = 0; object <= 4; object++){
            let imageUrl = 'https://image.tmdb.org/t/p/w500' + Resultat[object].poster_path;
            
            Resultat_div.insertAdjacentHTML('beforeend', `<div class="Titlar_resultat" id="${Resultat[object]}"><img src="${imageUrl}" id="Resultat_bilder"><div><h4>Movie Title:</h4>${Resultat[object].original_title}</div><div><h4>Release Date:</h4>${Resultat[object].release_date}</div></div>`);
            var Titlar_Resultat = (document.getElementById(`${Resultat[object]}`))
            Lista_av_Titlar_resultat.push(Titlar_Resultat)
          }
           Lista_av_Titlar_resultat[0].onclick = function(){ //Ser ifall den första titeln är tryckt
            console.log("tryckt")
          }
        }
    }
}





