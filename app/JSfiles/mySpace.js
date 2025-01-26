function createMySpace(){
const mySpace = document.createElement("div");
mySpace.id = "my-space";
container.appendChild(mySpace);


const logInDiv = document.createElement("div");
logInDiv.id = "login-div";
logInDiv.innerHTML = ` <img class="login-div-child" id="setup" src="/assets/my_space_login.webp" width="322px"/> 
                       <div class="login-div-child" id="login-text" >Login to BeeFlix</div>
                       <div class="login-div-child" id="login-desc" >Start watching from where you left off, personalise for kids and more</div>
                       <button class="login-div-child" id="login-btn" >Log In</button>
                    
                      `
mySpace.appendChild(logInDiv);



}