var Sök_bar = document.getElementById("Sök_bar")
var Resultat_div = document.getElementById("Resultat_div")
var Bakgrund_sök_fält = document.getElementById("Bakgrund_av_sök_fält")

//Detta är en lista som innehåller ungefär alla av film företaget Blumhouse productions filmer 
var Lista_av_blumhouse_filmer = ["Hysterical Blindness","Griffin & Phoenix","The Fever","The Darwin Awards","Graduation","Paranormal Activity","The Accidental Husband","Paranormal Activity 2","Insidious","Paranormal Activity 3","The Babymakers","Lawless","Sinister","Paranormal Activity 4",
"The Bay","Dark Skies","The Lords of Salem","The Purge","Insidious: Chapter 2","Plush","Best Night Ever","Paranormal Activity: The Marked Ones","Oculus","13 Sins","Not Safe for Work","The Normal Heart","The Purge: Anarchy","Mockingbird","Stretch","The Town That Dreaded Sundown",
"Jessabelle","The Boy Next Door","The Lazarus Effect","Unfriended","Area 51","Insidious Chapter: 3","Exeter","The Gallows","Sinister 2","The Visit","The Green Inferno","Paranormal Activity: The Ghost Dimension","Jem and the Holograms","Visions","Curve","The Veil","Martyrs",
,"The Darkness","	The Purge: Election Year","In a Valley of Violence","Incarnate","The Resurrection of Gavin Stone","Get Out","The Belko Experiment","Sleight","Lowriders","Birth of the Dragon","Happy Death Day","Creep 2","Amityville: The Awakening",
"Like. Share. Follow.","Insidious: The Last Key","Family Blood","Delirium","Upgrade","The First Purge","Unfriended: Dark Web","The Keeping Hours","	BlacKkKlansman","Seven in Heavens","Cam","Glass","Happy Death Day 2U","Mercy Black",
,"Ma","Don't Let Go","The Gallows Act II","Adopt a Highway","The Invisible Man","You Should Have Left","Evil Eye","Nocturne","The Craft: Legacy","The Vigil","The Forever Purge","This Is the Night","Bingo Hell","Black as Night	","Madres","The Manor","Halloween Kills",
"Paranormal Activity: Next of Kin","The Deep House","	A House on the Bayou","Dashcam","The Black Phone","They/Them","Mr. Harrigan's Phone","Halloween Ends","Run Sweetheart Run","Soft & Quiet","Nanny","M3GAN","There's Something Wrong with the Children","	Insidious: The Red Door","Totally Killer",
"The Exorcist: Believer","Five Nights at Freddy's"
]

var Lista_av_Titlar_resultat = []

Sök_bar.onkeydown = async function(event){
    if (event.key === "Enter"){
        event.preventDefault()

        var Resultat = await sök_efter_film(Sök_bar.value)
        await Create_results(Resultat.results)
        async function sök_efter_film(Film_sökt){
            let url = `https://api.themoviedb.org/3/search/movie?query=${Film_sökt}&api_key=d88a50faae8d9ba506d9df81d76f1c63`
            let response = await fetch(url);
            let json = await response.json(response)
            return json
        }
        
        async function Create_results(Resultat){
          Resultat_div.innerHTML = ''; //Ser till att de tidgare sökta resultaten försvinner från resultat_diven
          for(let object = 0; object < Resultat.length; object++){
            if(See_if_title_is_made_by_blumhouse(Resultat[object]) === true){
              if(Resultat[object].release_date === ""){Resultat[object].release_date = "Unknown"} //Ser till att skriva om release date datumet, om det inte finns med i film API`n
              let imageUrl = 'https://image.tmdb.org/t/p/w500' + Resultat[object].poster_path;   
              Resultat_div.insertAdjacentHTML('beforeend', `<div class="Titlar_resultat" id="${Resultat[object].id}"><img src="${imageUrl}" id="Resultat_bilder" alt="Movie Poster of ${Resultat[object].original_title}" loading="lazy"><div><h4>Movie Title:</h4>${Resultat[object].original_title}</div><div><h4>Release Date:</h4>${Resultat[object].release_date}</div></div>`);
              Lista_av_Titlar_resultat.push(document.getElementById(`${Resultat[object].id}`))
              Lista_av_Titlar_resultat[(Lista_av_Titlar_resultat.length) -1].onclick = function(){Show_information_on_result(Resultat[object])} //Lägger till en funktion för ifall den särskilda titeln är tryckt
            }
          }
          if (Resultat_div.innerHTML === ''){
            Resultat_div.insertAdjacentHTML(`beforeend`,`<div class="Titlar_resultat"><div><h3>Sorry but we were unable to find any titles with that name...</h3></div></div>`)
          }
          } 
    }
}

function See_if_title_is_made_by_blumhouse(Title_checked){ //Jämför en film och ser ifall den matchar listan av Blumhouse filmer som de har gjort
    for(let title = 0;title <= Lista_av_blumhouse_filmer.length;title++){
      if (Title_checked.original_title === Lista_av_blumhouse_filmer[title]){return true}
    }
    return false
}

function Show_information_on_result(Resultat){ //Gör om sökreslutat fönstret, för att instället ge information om titeln som var tryckt
  if(Resultat.overview === ""){Resultat.overview = "This movie is not given an overview..."}
  Resultat_div.innerHTML = 
  `<div id="Information_om_titel_bakgrund"><div><img src="${'https://image.tmdb.org/t/p/w500' + Resultat.poster_path}"id="Information_bild_bredvid_text" alt="Movie Poster of ${Resultat.original_title}" loading="lazy"></div>

  <div class= "Information_text_om_titel">
  <p>The Movie Title: ${Resultat.original_title}</p>
  <p>Release date: ${Resultat.release_date}</p>
  <p>Average score: ${Math.ceil(Resultat.vote_average)} / 10</p>
  <p>Overview:</p>
  <p>${Resultat.overview}</p>
  </div></div>`
  
}




