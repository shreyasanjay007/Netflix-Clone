const faqs = document.getElementsByClassName("faqs");
console.log(faqs);

for(let i=0; i<faqs.length;i++){
    let isFaqOpen = false
    const ans = document.createElement("div")
    faqs[i].addEventListener("click",()=>{
        console.log('from add eevent listner boloc' ,isFaqOpen)
        if(isFaqOpen){
            // faqs[i].removeChild(faqs[i].lastChild)
            console.log(faqs[i].lastChild)
            console.log('from if block',isFaqOpen)
        }
        console.log("clicked")
       
        ans.innerHTML = "This is answer"
        ans.style.height = "50vh"
        ans.style.width = "80vw"
        ans.style.backgroundColor = "#2d2d2d"
        isFaqOpen = true
        faqs[i].appendChild(ans)
        
    })
}


