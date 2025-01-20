const container = document.getElementById("container");
const sidebar = document.createElement("div");

sidebar.className = "sidebar";
container.appendChild(sidebar);

const logo = document.createElement("img");
logo.id = "logo";
logo.src = "/assets/bee.png"



sidebar.appendChild(logo)



for (let i = 1; i < 8; i++) {
  const icons = document.createElement("div");
  icons.className = "icons";
  sidebar.appendChild(icons);

  const iconImage = document.createElement("img")
  iconImage.className = "icon-image"
  iconImage.src = `/assets/icon${i}.png`
  icons.appendChild(iconImage);
  
}

const iconsName = ["My Space","Search","Home","TV","Movies","Sports","Categories"]

sidebar.addEventListener('mouseenter',()=>{
    sidebar.style.width = "250px"
    for(let i=0; i<iconsName.length; i++){
        const icon = document.getElementsByClassName("icons")[i];
        const iconTitle = document.createElement("div")
        iconTitle.className = "icon-title"
        iconTitle.innerHTML = `${iconsName[i]}`
        icon.appendChild(iconTitle)

        icon.style.width = "150px"
        icon.style.justifyContent = "space-between"
        icon.style.padding = "0px 5px"

        icon.addEventListener('mouseenter',()=>{
            icon.firstChild.style.filter = "invert(100%)";
            icon.lastChild.style.color = "white";
        })

        icon.addEventListener('mouseleave',()=>{
            icon.firstChild.style.filter = "invert(50%)";
            icon.lastChild.style.color = "gray";
        })
        
    }
})


sidebar.addEventListener('mouseleave',()=>{
    sidebar.style.width = "100px"
    for(let i=0; i<iconsName.length; i++){
        const icon = document.getElementsByClassName("icons")[i];
        icon.removeChild(icon.lastElementChild);
        icon.style.width = "60px"
        icon.style.justifyContent = "center"
        icon.style.padding = "0px 0px"
        
    }
})





