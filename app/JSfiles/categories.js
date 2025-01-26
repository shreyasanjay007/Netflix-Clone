function createCategories(){

    const category = document.createElement("div");
    category.id = "category";
    container.appendChild(category);

    const categoryHero = document.createElement("div");
    categoryHero.id = "category-hero";
    category.appendChild(categoryHero)

    const brandsDiv = document.createElement("div")
    brandsDiv.id = "brands-div"
    categoryHero.appendChild(brandsDiv)

    
    for(let i=1; i<=6; i++){
        const brandsNameDiv = document.createElement("div")
        brandsNameDiv.className = "brands-name-div"
        brandsNameDiv.innerHTML = `<img class="brands-image" src="../brands/brandsImg/img${i}.png" />
                                   <video class="brands-video" src="../brands/brandsVdo/vdo${i}.mp4" muted loop autoplay ><video/>`
        brandsDiv.appendChild(brandsNameDiv)

        brandsNameDiv.addEventListener('mouseenter',()=>{
            const brandsImg = document.getElementsByClassName("brands-image")[i-1]
            const brandsVdo = document.getElementsByClassName("brands-video")[i-1]
            brandsImg.style.display = "none"
            brandsVdo.style.display = "block"
           
            
        })

        brandsNameDiv.addEventListener('mouseleave',()=>{
            const brandsImg = document.getElementsByClassName("brands-image")[i-1]
            const brandsVdo = document.getElementsByClassName("brands-video")[i-1]
            brandsImg.style.display = "block"
            brandsVdo.style.display = "none"
       
            
        })

    }

    const titleArray = ["Popular Languages","Popular Genre","Popular Sports"]

    for(let i=1; i<4; i++){

    const popCarouselDiv  = document.createElement("div")
    popCarouselDiv.className = "pop-carousel-div"

    const popCarouselTitle = document.createElement("div")
    popCarouselTitle.className = "pop-carousel-title"
    popCarouselTitle.innerHTML = `${titleArray[i-1]}`
    popCarouselDiv.appendChild(popCarouselTitle)

    const popCarousel = document.createElement("div")
    popCarousel.className = "pop-carousel"
    popCarouselDiv.appendChild(popCarousel)

    for(let j=1; j<=8; j++){
        const popCarouselImage = document.createElement("img")
        popCarouselImage.className = "pop-carousel-image"
        popCarouselImage.src = `../popular/pop${i}/poster${j}.webp`
        popCarousel.appendChild(popCarouselImage)
    }
    categoryHero.appendChild(popCarouselDiv)
    }

    

    



}