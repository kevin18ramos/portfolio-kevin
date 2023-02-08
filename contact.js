let firstbox = document.querySelector(".firstbox");
let secondbox = document.querySelector(".secondbox");
let thirdbox = document.querySelector(".thirdbox");
let fourthbox = document.querySelector(".fourthbox");
let contactGmail = document.querySelector(".contactGmail");
//contactGmail

const colors = [ "#a8140e", "#4315aa", "#8f4762"];

window.addEventListener("mousedown", (e) => {
  const color = colors.shift();
  document.documentElement.style.setProperty("--highlight-color", color);
  colors.push(color);
});

const arrayofBoxes = [firstbox,secondbox,thirdbox,fourthbox];

arrayofBoxes.forEach(function(element) {
    element.addEventListener("mouseover",function() {
        element.style.backgroundColor = "#537895";
    })
    element.addEventListener("mouseout",function() {
        element.style.backgroundColor = "#09203F";
    })
    element.addEventListener("click", function() {
        if (element == firstbox){
            window.open("https://www.linkedin.com/in/kevin-ramos-60817a242/", "_blank");
        }
        else if (element == secondbox){
            window.open("https://github.com/kevin18ramos", "_blank");
        }
        else if (element == fourthbox){
            window.open("doc/kevinramosresume.pdf", "_blank");
        }
       
      });
});
