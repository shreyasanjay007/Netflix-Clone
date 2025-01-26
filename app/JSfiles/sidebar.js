
const container = document.getElementById("container");
const sidebar = document.createElement("div");
const iconsName = ["My Space","Search","Home","TV","Movies","Sports","Categories"]

sidebar.className = "sidebar";
container.appendChild(sidebar);

const logo = document.createElement("img");
logo.id = "logo";
logo.src = "/assets/bee.png"
sidebar.appendChild(logo)

const navDiv = document.createElement('div')
navDiv.id = "nav-div"
sidebar.appendChild(navDiv)

let activeButtonId = "home2"



for(let i = 0; i <= iconsName.length - 1 ; i++){
    const navBtn = document.createElement("button")
    //create button
    navBtn.className = 'nav-btn'
    navBtn.id = `${iconsName[i].toLowerCase().split(" ").join("") + i}`
    navBtn.innerHTML = `
    <img src='/assets/icon${i + 1}.png' />
    <div id='btn-name${i}' style=" font-size:16px; " class='btn-title' >${iconsName[i]}</div>
    `
    
    if(navBtn.id == activeButtonId){
        navBtn.classList.add('active-btn');
    }


    navBtn.addEventListener('click' ,(event) => {

        if(activeButtonId){
            document.getElementById(activeButtonId).classList.remove('active-btn');
        }

       activeButtonId = event.currentTarget.id;
       navBtn.classList.add('active-btn');

        
        // if(container.childElementCount + 1 >= 3){
        //     container.removeChild(container.childNodes[1])
        // }

        if (container.childElementCount > 1) {
            container.removeChild(container.lastChild);
        }


        switch (activeButtonId){
            case "myspace0":
                createMySpace()
                break
            case "search1":
                createSearch()
                break
            case "home2":
                createHome()
                break
            case "tv3":
                createTV()
                break
            case "movies4":
                createMovies()
                break
            case "categories6":
                createCategories()
                break
            default:
                createHome()
        }
          
        })
        
    
    navDiv.appendChild(navBtn)
}


sidebar.addEventListener('mouseenter',()=>{
    sidebar.style.width = "250px"
    for(let i = 0 ; i <= iconsName.length - 1; i++){
        document.getElementById(`btn-name${i}`).classList.toggle('btn-title')
        document.getElementsByClassName('nav-btn')[i].classList.toggle('nav-btn-hovered')
    }
    
})


sidebar.addEventListener('mouseleave',()=>{
    sidebar.style.width = "100px"
    for(let i = 0 ; i <= iconsName.length - 1; i++){
        document.getElementById(`btn-name${i}`).classList.toggle('btn-title')
        document.getElementsByClassName('nav-btn')[i].classList.toggle('nav-btn-hovered')

    }
})
