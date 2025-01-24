const searchDiv = document.createElement("div");
searchDiv.id = "search-div";
container.appendChild(searchDiv);

const searchHero = document.createElement("div");
searchHero.id = "search-hero";
searchDiv.appendChild(searchHero);

const searchTab = document.createElement("div");
searchTab.id = "search-tab";
searchTab.innerHTML = ` <div id="search-icon" > <img  src="/assets/icon2.png" width="30px" /></div>
                        <input id="search-input" type="text" placeholder = "Movies, shows and more"> </input>
                        <div id="close-icon" > <img src="/assets/close.png" width="30px" /> </div>
                        `
searchHero.appendChild(searchTab);




const searchInput = document.getElementById("search-input")
const closeButton = document.getElementById("close-icon")



// setInterval(()=>{
//     if(searchInput.value === ""){
//         closeButton.style.display = "none";
// } else{
//     closeButton.style.display = "flex"
// }
// },500)

closeButton.addEventListener('click',()=>{
    searchInput.value = "";
})




const searchResult = document.createElement("div");
searchResult.id = "search-result";
searchHero.appendChild(searchResult);

const topResult = document.createElement("div")
topResult.id = "top"
topResult.innerHTML = "TOP RESULT"
searchResult.appendChild(topResult)

const searchedMovie = document.createElement("div")
searchedMovie.id = "searched-movie"
searchedMovie.innerHTML = `<div> <img id="searched-movie-image" src="ishqbaaz.webp" /> </div>
                           <div id="searched-movie-details" > </div>`
searchResult.appendChild(searchedMovie)

const searchedMovieDetails = document.getElementById("searched-movie-details")




function search(movie){
   moviesData.forEach(element => {
    if(element.name === movie){
        
    }
  });
}



