function createTV(){



    const home = document.createElement("div");
home.id = "home";
container.appendChild(home);

const hero = document.createElement("div");
hero.id = "hero";
home.appendChild(hero);

const videoDiv = document.createElement("div");
videoDiv.id = "video-div";
hero.appendChild(videoDiv)

const video = document.createElement("video");
video.src = "/assets/kill.mp4";
video.controls = false;
// video.autoplay = true;
video.loop = true;
video.muted = true;
videoDiv.appendChild(video);



// ***********************Main Video Details************************

const mainVideoDetails = document.createElement("div")
mainVideoDetails.id = "mvd"
videoDiv.appendChild(mainVideoDetails)

const mainVideoActualDetails = document.createElement("div")
mainVideoActualDetails.id = "mvad"
mainVideoDetails.appendChild(mainVideoActualDetails);

for(let i=1; i<=6; i++){
   const child = document.createElement("div")
   child.className = "inner-mvad"
   child.id = `mvad-child${i}`
   mainVideoActualDetails.appendChild(child)
}

const mvad1 = document.getElementById("mvad-child1")

const mvad2 = document.getElementById("mvad-child2")
mvad2.innerHTML = "Blockbuster"

const mvad3 = document.getElementById("mvad-child3")
mvad3.innerHTML = `
        <div class="mvad3-child" >2024</div>
        <div class="mvad3-child dot-box"> <div class="dot"> </div> </div>
        <div class="mvad3-child rated" >A</div>
        <div class="mvad3-child dot-box"> <div class="dot"> </div> </div>
        <div class="mvad3-child" >1h 46m</div>
        <div class="mvad3-child dot-box"> <div class="dot"> </div> </div>
        <div class="mvad3-child" >4 Languages</div>`


const mvad4 = document.getElementById("mvad-child4")
mvad4.innerHTML = "A New Delhi-bound train turns hell on wheels when NSG commando Amrit goes head-to-head with an army of knife-wielding thieves."

const mvad5 = document.getElementById("mvad-child5")
mvad5.innerHTML = `
        <div class="mvad5-child" >Action</div>
        <div class="mvad5-child part-box" > <div class="part"> </div> </div>
        <div class="mvad5-child" >Thriller</div>
        <div class="mvad5-child part-box" > <div class="part"> </div> </div>
        <div class="mvad5-child" >Gritty</div>
        <div class="mvad5-child part-box" > <div class="part"> </div> </div>
        <div class="mvad5-child" >Adrenaline Rush</div>
`


const mvad6 = document.getElementById("mvad-child6")

const watchBtn = document.createElement("button")
watchBtn.id = "watch-btn"
watchBtn.innerHTML =  `
                       <img id="play" src="/assets/play.png" width="14px"/> &nbsp; Watch Now        `
mvad6.appendChild(watchBtn)

const addBtn = document.createElement("button")
addBtn.id = "add-btn"
addBtn.innerHTML = `<img id="plus" src="/assets/plus.png" width="20px" />`
mvad6.appendChild(addBtn)

watchBtn.addEventListener('mouseenter',()=>{
   watchBtn.style.cursor = "pointer";
   watchBtn.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
   watchBtn.style.transform = "scale(1.02)";
   watchBtn.style.transition = "0.2s all ease-in-out"
})

watchBtn.addEventListener('mouseleave',()=>{
   watchBtn.style.transform = "scale(1)";
   watchBtn.style.backgroundColor = "rgba(255, 255, 255, 0.157)";

})

const watchList = document.createElement("div");
watchList.id = "watch-list"
watchList.innerHTML = `<img src="/assets/chat.png" height="42px" width="90px"/>`

const watchListText = document.createElement("div");
watchListText.id = "watch-list-text";
watchListText.innerHTML = "Watchlist"

addBtn.addEventListener('mouseenter',()=>{
   addBtn.style.cursor = "pointer";
   addBtn.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
   mainVideoActualDetails.appendChild(watchList)
   watchList.appendChild(watchListText)

})

addBtn.addEventListener('mouseleave',()=>{
   addBtn.style.backgroundColor = "rgba(255, 255, 255, 0.157)"
   mainVideoActualDetails.removeChild(watchList);
   watchList.removeChild(watchListText);
})


// ***********************Small Carousel ***********************


const smallMovieCarouselDiv = document.createElement("div")
smallMovieCarouselDiv.id = "smcd"
videoDiv.appendChild(smallMovieCarouselDiv)

const carousel = document.createElement("div")
carousel.id = "carousel"
smallMovieCarouselDiv.appendChild(carousel)

for(let i=1; i<=6; i++){
   const poster = document.createElement("img")
   poster.className = "poster";
   poster.src = `/assets/poster${i}.webp`
   carousel.appendChild(poster);

}

const button1 = document.createElement("div")
button1.id = "btn-1"
button1.className = "button"
button1.innerHTML = ` <img src="/assets/scroll.png" style="width:20px; filter:invert(100%);
                               transform:rotate(180deg);" /> `
carousel.appendChild(button1)


const button2 = document.createElement("div")
button2.id = "btn-2"
button2.className = "button"
button2.innerHTML = ` <img src="/assets/scroll.png" width="20px" /> `
button2.innerHTML = ` <img src="/assets/scroll.png" style="width:20px; filter:invert(100%);
                               ;" /> `
carousel.appendChild(button2)

// ********************Categories*********************

const categoriesTV = ["Top 10 Shows-Hindi","Comedy Shows","Thriller Shows","Hard-Hitting Shows","Kids Shows",
                   "Teen Shows","Reality Shows"]

// const images = ["rel","show","top","movie","thrill","kid","indian" ];

for(let i=1; i<=7; i++){
   const latestReleasesDiv = document.createElement("div")
latestReleasesDiv.id = "latest-releases-div"
home.appendChild(latestReleasesDiv)

const latestReleasesHead = document.createElement("div")
latestReleasesHead.id = "latest-releases-head"
latestReleasesHead.innerHTML = `${categoriesTV[i-1]}`
latestReleasesDiv.appendChild(latestReleasesHead)

const latestReleasesCarousel = document.createElement("div")
latestReleasesCarousel.id = "latest-releases-carousel"
latestReleasesDiv.appendChild(latestReleasesCarousel)

for(let j=1; j<=10; j++){
   const relPoster = document.createElement("img")
   relPoster.className = "rel-poster"
   // relPoster.src = `/assets/${images[i-1]}${j}.webp`
   relPoster.src = `/categories/rel${j}.jpg`
  
   latestReleasesCarousel.appendChild(relPoster)
}

}







}

