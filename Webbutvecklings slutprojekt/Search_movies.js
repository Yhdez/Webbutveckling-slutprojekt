var Sök_bar = document.getElementById("Sök_bar")
var Resultat_div = document.getElementById("Resultat_div")

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
          for(let object = 0; object <= 4; object++){
            console.log(Resultat[object])
            let imageUrl = 'https://image.tmdb.org/t/p/w500' + Resultat[object].poster_path;
            
            console.log(imageUrl)
            Resultat_div.insertAdjacentHTML('beforeend','<div id="Titlar_resultat">' + '<img src=' + imageUrl +  ' id="Resultat_bilder">' + Resultat[object].original_title + Resultat[object].release_date + "</div>")
          }
        }
    }
}