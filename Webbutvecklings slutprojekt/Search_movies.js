var Sök_fält = document.getElementById("Sök_bar")

Sök_bar.onkeydown = async function(event){
    if (event.key === "Enter"){
        event.preventDefault()

        Resultat = sök_efter_film(Sök_bar.value)
        
        function sök_efter_film(Film_sökt){
            let url = `https://api.themoviedb.org/3/search/movie?query=${Film_sökt}&api_key=d88a50faae8d9ba506d9df81d76f1c63`
            let response = fetch(url);
            let json = response.json(response)
            console.log(json)
        }
    }
}