const mySpace = document.createElement("div");
mySpace.id = "my-space";
container.appendChild(mySpace);

const mySpaceHero = document.createElement("div");
mySpaceHero.id = "my-space-hero";
mySpace.appendChild(mySpaceHero);


const logInDiv = document.createElement("div");
logInDiv.id = "login-div";
logInDiv.innerHTML = ` <img class="login-div-child" id="setup" src="/assets/setup.png" width="512px"/> 
                      <div class="login-div-child" id="login-text"> Login to Netflix</div>
                      <div class="login-div-child" id="desc">Start watching from where you left off,personalise for kids and more </div>
                      <button class="login-div-child" id="login-button"> Log In </button>
                      `
mySpaceHero.appendChild(logInDiv);



const footer1 = document.createElement("div")
footer1.id = "footer1"
footer1.className = "sub-footer"
footer1.innerHTML = `<div class="sub-footer-child" id="sub-footer1"> 
                         <div>FAQ</div>
                         <div>Investor Relations</div>
                         <div>Privacy</div>
                         <div>Speed Test</div>
                     </div>

                     <div class="sub-footer-child" id="sub-footer2">
                         <div>Help Center</div>
                         <div>Jobs</div>
                         <div>Cookie Preferences</div>
                         <div>Legal Notices</div>
                         <div></div>
                    </div>

                    <div class="sub-footer-child" id="sub-footer3">
                         <div>Account</div>
                         <div>Ways to Watch</div>
                         <div>Corporate Information</div>
                         <div>Only on Netflix</div>
                    </div>
                         
                     <div class="sub-footer-child" id="sub-footer4">
                        <div>Media Center</div> 
                        <div>Terms of Use</div> 
                        <div>Contact Us</div> 
                     </div>`
mySpace.appendChild(footer1)


const footer2 = document.createElement("div")
footer2.id = "footer2"
footer2.className = "sub-footer"
footer2.innerHTML = `<select name="language" id="language">
                         <option value="English">English</option>
                         <option value="Hindi">हिन्दी</option>
                     </select>
                     <div id="country" >Netflix India</div>`
mySpace.appendChild(footer2)


