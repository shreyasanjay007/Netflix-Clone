function createSearch(){
    const searchDiv = document.createElement("div");
searchDiv.id = "search-div";
container.appendChild(searchDiv);

const searchHero = document.createElement("div");
searchHero.id = "search-hero";
searchDiv.appendChild(searchHero);

const searchTab = document.createElement("div");
searchTab.id = "search-tab";
searchTab.innerHTML = ` 
    <div id="search-icon" > 
        <img  src="/assets/icon2.png" width="30px" />
    </div>
    <input id="search-input" type="text" placeholder = "Movies, shows and more" />
    <div id="close-icon" > 
        <img src="/assets/close.png" width="30px" />
     </div>
                        `
searchHero.appendChild(searchTab);




const searchInput = document.getElementById("search-input")
const closeButton = document.getElementById("close-icon")

const searchButton = document.createElement("button")
searchButton.id = "search-btn"
searchButton.innerHTML = `
<img src="/assets/icon2.png" width="30px" />
<span style="padding: 0px 10px ;">Search</span>
`
searchTab.appendChild(searchButton)

searchButton.addEventListener("click",()=>{
  if(searchHero.childElementCount + 1 >= 3){
      searchHero.removeChild(searchHero.childNodes[1])
  }
search(searchInput.value)
})

searchInput.addEventListener('input',(e)=>{
   if(e.target.value === ''){
    closeButton.style.display = "none"
    searchButton.style.display= "none"
    searchHero.appendChild(searchTrending)
   }else{
    closeButton.style.display ="flex"
    searchButton.style.display = "flex"
    searchHero.removeChild(searchTrending)
   }
})
closeButton.addEventListener('click',()=>{
    searchInput.value = "";
    searchHero.appendChild(searchTrending)
    closeButton.style.display = "none"
    searchButton.style.display= "none"
})


function search(movieName){
   
   
  moviesData.forEach(element => {
    if(element.name.toLocaleLowerCase() === movieName.toLocaleLowerCase()){
        
        // console.log("Running");
        const searchResult = document.createElement("div");
        searchResult.innerHTML = `
        <div id="search-result">
     <div id="top">TOP RESULT</div>
     <div id="searched-movie">
     <div> <img id="searched-movie-image" src="${element.image}" /> </div>
     <div id="searched-movie-details" >
     <div class="searched-movie-details-child" id="movie-name" >${element.name}</div>
                                   <div class="searched-movie-details-child" id="movie-insights" >
                                     <div>2019</div>
                                     <div class="movie-dot-box " ></div>
                                     <div>Hindi</div>
                                     <div class="movie-dot-box " ></div>
                                     <div>StarPlus</div>
                                     <div class="movie-dot-box " ></div>
                                     <div>U/A 13+</div>
                                   </div>
                                   <button class="searched-movie-details-child" id="movie-watch-btn" >
                                      <img src="/assets/play.png" width="20px" /> &nbsp; Watch Now
                                   </button>
      </div>
     </div>
</div>
`
searchHero.appendChild(searchResult);
    }
   });
   
}

const searchTrending = document.createElement("div")
searchTrending.id = "search-trending"
searchTrending.innerHTML = `
                            <div id="trend" >Trending in India</div>
                            <div id="trending-recommend" ></div>
`
searchHero.appendChild(searchTrending)

const trendingRecommend = document.getElementById("trending-recommend")
for(let i=1; i<=3; i++){
    const trendDiv = document.createElement("div")
    trendDiv.id = "trend-div"
    for(let j=1; j<=6; j++){
        const trendPoster = document.createElement("img")
        trendPoster.className = "trend-poster"
        trendPoster.src = `/trending/trend${i}/m${j}.jpg`
       
        trendDiv.appendChild(trendPoster)
    }
    trendingRecommend.appendChild(trendDiv)

}





}