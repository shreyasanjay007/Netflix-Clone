
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

const tempArray = ["home2"]

// const activeButton = document.getElementById(tempArray[0])
// activeButton.classList.add('active-btn')
// console.log(activeButton)


for(let i = 0; i <= iconsName.length - 1 ; i++){
    const navBtn = document.createElement("button")
    //create button
    navBtn.className = 'nav-btn'
    navBtn.id = `${iconsName[i].toLowerCase().split(" ").join("") + i}`
    navBtn.innerHTML = `
    <img src='/assets/icon${i + 1}.png' />
    <div id='btn-name${i}' class='btn-title' >${iconsName[i]}</div>
    `


    // ["myspace0"]

    const activeButton = document.getElementById(tempArray[0])
    activeButton.classList.add('active-btn')
    



    navBtn.addEventListener('click' ,(event) => {
        // console.log(tempArray)
        if(event.currentTarget.id === navBtn.id){
        // tempArray.push(event.currentTarget.id)

        // tempArray[0].classList.remove('active-btn')


        
        if(container.childElementCount + 1 >= 3){
            container.removeChild(container.childNodes[1])
        }
        switch (event.currentTarget.id){
            case "myspace0":

                activeButton.classList.add('active-btn')
                createMySpace()
                break
            case "search1":
                activeButton.classList.add('active-btn')
                createSearch()
                break
            case "home2":
                activeButton.classList.add('active-btn')
                createHome()
                break
            default:
                activeButton.classList.add('active-btn')
                createHome()
        }
          
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
