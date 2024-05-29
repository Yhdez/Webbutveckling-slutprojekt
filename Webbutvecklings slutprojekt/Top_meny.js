var Home_page = document.getElementById("Home_page_link")
var Search_movies_page = document.getElementById("Search_movies_page_link")
var Contact_information_page = document.getElementById("Contact_information_page_link")

//Dessa ansvarar för att skapa interaktion vid hemsidans top meny. Ifall någon av de tre "knapparna" trycks omdirigeras användaren till en motsvarande html fil, genom att det byter ut den nuvarande
Search_movies_page.onclick = function(){
    window.open("Search_movies_page.html","_self")
}

Home_page.onclick = function(){
    window.open("Home_page.html","_self")
}


Contact_information_page.onclick = function(){
    window.open("Contact_information_page.html","_self")
}

