const mySpace = document.createElement("div");
mySpace.id = "my-space";
container.appendChild(mySpace);

const mySpaceHero = document.createElement("div");
mySpaceHero.id = "my-space-hero";
mySpace.appendChild(mySpaceHero);


const logInDiv = document.createElement("div");
logInDiv.id = "login-div";
logInDiv.innerHTML = ` <img class="login-div-child" src="/assets/setup.png" width="512px"/> 
                      <div class="login-div-child" id="login-text"> Login to Netflix</div>
                      <div class="login-div-child" id="desc">Start watching from where you left off,personalise for kids and more </div>
                      <button class="login-div-child" id="login-button"> Log In </button>
                      `
mySpaceHero.appendChild(logInDiv);


