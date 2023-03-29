let pythonlang = document.querySelector(".pycon");
let htmlang = document.querySelector(".htmlcon");
let csslang = document.querySelector(".csscon");
let javasccon = document.querySelector(".javascon");
let djangocon = document.querySelector(".djangocon");
let rustcon = document.querySelector(".rustcon");
let caricon = document.querySelector(".carcon")
let marcuscon = document.querySelector(".marcuscon")
let messagecon = document.querySelector(".messagecon")
let triviacon = document.querySelector(".triviacon")
let managecon = document.querySelector(".managecon")
let titleOfProject = document.getElementById("projecttitle")
let descOfProject = document.querySelector(".desc_proj")
let lang_proj = document.querySelector(".lang_proj")
let date_proj = document.querySelector(".date_cr")
let cer_click = document.querySelector(".cer_click")
let work_title = document.querySelector(".work-desc1")



// car description
let carsim = "This code is a simulation that simulates different aspects of driving a car. It starts with you walking into a garage where you own 7 cars. It then gives you the option to choose which car you would like to drive, and gives you information about the specs of the car you chose. Then it simulates the process of starting the car and driving. It also prompts the user for input throughout the simulation to make it more interactive."
let carlang = "Concepts: if/else statement, sleep function, os.system function, function definition, variable assignment and usage, indentation for code block organization, comparison operator, logical operator, animation, animation delay."
let cardate = "Date created: 6/24/22"

// forklift store desc
let forkstore = "Forklift Supply Store is a webpage that displays forklifts. The webpage has a navbar that sticks to the top of the page, it contains a logo, a Home button, and a Contact button. The main content of the webpage is divided into two sections where each section displays a different forklift. Each forklift has a name, a photo, and details such as its color. The website is interactive and visually appealing due to the use of CSS properties like background-color, color, font-size, etc."
let forkdesc = "Concepts: elements, tag, attributes, layout methods like grid and flexbox, selectors, background-color, color, font-size, grid-template-columns, grid-template-rows, align-self, justify-self, position, transition, hover effect, padding, border, text-decoration, font-family"
let forkdate = "Date created: 10/10/22"
// message concept
let replidesc = "Repli is a messaging application that I have developed using the Django web framework. It is a full-featured web application that allows users to create a profile, edit their profile information, and send messages to other users. The application utilizes various Django features such as user authentication and authorization, allowing users to securely log in and access their account information. It also includes a feature that allows users to change their profile picture. Additionally, the application has an admin role that allows the admin to delete users and send channel messages.";
let replilang = "Concepts: Django shortcuts import, Django http import, Import of models, Django contrib import, login_required decorator, allowed_users decorator, UserCreationForm, request method handling, authenticate, login, logout."
let replidate = "Date created: 12/20/22"

let triviadesc = "JSON trivia is a JavaScript program that creates a quiz by fetching trivia questions from the Open Trivia Database API based on the user's selected category and difficulty level. The program includes features such as displaying a loading spinner while fetching questions, shuffling the answers for each question, and displaying the score and incorrect answers count. This program allows users to take a quiz with dynamic questions based on their selected category and difficulty level."
let trivialang = "Concepts: DOM manipulation, fetch API, event listener, arrow function, for loop, conditional statement, array method, random method, creating and manipulating HTML elements, class manipulation, decoding html entities, creating a loading spinner and JSON parsing, variable assignment and usage, function definition, string concatenation."
let triviadate = "Date created: 1/13/23"

let managedesc = "Task Assignment Program is a Rust program that implements a chore management system for different groups of people. The program uses the shuffle library to randomly assign a set of predefined chores to each individual in a specific group. The program utilizes a for loop to iterate through the different groups, and a series of conditional statements to determine which group is being processed and assign the appropriate set of chores."
let managelang = "Concepts: array, constant, for loop, conditional statements, random number generation, string manipulation, struct, associated functions, trait, type alias, macro, array indexing, variable shadowing, ownership, mutability."
let managedate = "Date created: 12/15/22"
///for loop
// hover effects here
let elements = [pythonlang, htmlang, csslang, javasccon, djangocon, rustcon];
///for loop



function removeeverything(elementsicon){
  for (let index = 0; index < elementsicon.length; index++) {
    work_title.textContent = "My projects";
    work_title.style.animation = "none";
    const element1 = elementsicon[index];
    element1.style.border = "none";
    element1.style.fontSize = "5vw";
    
  }
}
// skills underline
elements.forEach(function(element) {
  
  element.addEventListener("mouseover", function () {
    element.style.borderBottom = "3px solid white"
  });
  element.addEventListener("mouseout", function () {
    element.style.borderBottom = "none"
  });
});


// how the bio changes here
let elementsicon = [caricon,marcuscon,messagecon,triviacon,managecon];


// click changes info, keeps box
elementsicon.forEach(function(element) {
  element.addEventListener("click", function () {
    removeeverything(elementsicon);
    cer_click.textContent = "Click here for a demo!";
    if (element == caricon){
      console.log("works")
      element.style.border = "3px solid rgba(255, 255, 255, 1)";
      element.style.borderRadius = "5px";
      element.style.fontSize = "6vw";
      titleOfProject.textContent = "Driving simulator - Python";
      descOfProject.textContent = carsim;
      lang_proj.textContent = carlang;
      date_proj.textContent = cardate;
      cer_click.href = "https://replit.com/@KevinRamos9/Unit-Project-1#main.py";
    }
    else if (element == marcuscon){
      console.log("works1")
      titleOfProject.textContent = "Forklift Supply Store - HTML / CSS";
      descOfProject.textContent = forkstore;
      lang_proj.textContent = forkdesc;
      date_proj.textContent = forkdate;
      element.style.border = "3px solid rgba(255, 255, 255, 1)";
      element.style.borderRadius = "5px";
      element.style.fontSize = "6vw";
      cer_click.href = "https://kevin18ramos.github.io/forkliftcompany/";
    }
    else if (element == messagecon){
      console.log("works1")
      titleOfProject.textContent = "Repli - Django / Python / HTML / CSS";
      descOfProject.textContent = replidesc;
      lang_proj.textContent = replilang;
      date_proj.textContent = replidate;
      element.style.border = "3px solid rgba(255, 255, 255, 1)";
      element.style.borderRadius = "5px";
      element.style.fontSize = "6vw";
      cer_click.textContent = "Click here for the repository!";
      cer_click.href = "https://github.com/kevin18ramos/MessagingApplication";
    }
    else if (element == triviacon){
      console.log("works2")
      titleOfProject.textContent = "JSON trivia - Javascript / HTML / CSS";
      descOfProject.textContent = triviadesc;
      lang_proj.textContent = trivialang;
      date_proj.textContent = triviadate;
      element.style.border = "3px solid rgba(255, 255, 255, 1)";
      element.style.borderRadius = "5px";
      element.style.fontSize = "6vw";
      cer_click.href = "https://mike469.github.io/JSON-Trivia/";
    }
    else if (element == managecon){
      console.log("works2")
      titleOfProject.textContent = "Task Assignment Program - Rust";
      descOfProject.textContent =  managedesc;
      lang_proj.textContent = managelang;
      date_proj.textContent = managedate;
      element.style.border = "3px solid rgba(255, 255, 255, 1)";
      element.style.borderRadius = "5px";
      element.style.fontSize = "6vw";
      cer_click.textContent = "Click here for the repository!";
      cer_click.href = "https://github.com/kevin18ramos/Task-Assignment-Program-";
    }
  });
});


//let elements = [pythonlang, htmlang, csslang, javasccon, djangocon, rustcon];
// let elementsicon = [caricon,marcuscon,messagecon,triviacon,managecon];

elementsicon.forEach(function(element) {
  element.addEventListener("mouseover", function () {
    work_title.style.animation = "lights 5s 750ms linear infinite";
    work_title.textContent = "Click on project";
    
    });

  element.addEventListener("mouseout", function () {
    work_title.textContent = "My projects";
    work_title.style.animation = "none";
  })

})


elements.forEach(function(element) {
  element.addEventListener("click", function () {
    removeeverything(elementsicon)
    if (element == pythonlang){
      caricon.style.fontSize = "6vw";
      caricon.style.border = "4.5px solid white";
      caricon.style.borderRadius = "5px";
      titleOfProject.textContent = "Driving simulator - Python";
      descOfProject.textContent = carsim;
      lang_proj.textContent = carlang;
      date_proj.textContent = cardate;
      cer_click.href = "https://replit.com/@KevinRamos9/Unit-Project-1#main.py";
      cer_click.textContent = "Click here for a demo!";
    }

    
    else if (element == htmlang){
      marcuscon.style.fontSize = "6vw";
      marcuscon.style.border = "4.5px solid white";
      marcuscon.style.borderRadius = "5px";
      titleOfProject.textContent = "Forklift Supply Store - HTML / CSS";
      descOfProject.textContent = forkstore;
      lang_proj.textContent = forkdesc;
      date_proj.textContent = forkdate;
      cer_click.textContent = "Click here for a demo!";
      cer_click.href = "https://kevin18ramos.github.io/forkliftcompany/";

    }
    else if (element == csslang){
      marcuscon.style.fontSize = "6vw";
      marcuscon.style.border = "4.5px solid white";
      marcuscon.style.borderRadius = "5px";
      titleOfProject.textContent = "Forklift Supply Store - HTML / CSS";
      descOfProject.textContent = forkstore;
      lang_proj.textContent = forkdesc;
      date_proj.textContent = forkdate;
      cer_click.textContent = "Click here for a demo!";
      cer_click.href = "https://kevin18ramos.github.io/forkliftcompany/";

    }
    else if (element == javasccon){
      triviacon.style.border = "4.5px solid white";
      triviacon.style.borderRadius = "5px";
      triviacon.style.fontSize = "6vw";
      titleOfProject.textContent = "JSON trivia - Javascript / HTML / CSS";
      descOfProject.textContent = triviadesc;
      lang_proj.textContent = trivialang;
      date_proj.textContent = triviadate;
      cer_click.textContent = "Click here for a demo!";
      cer_click.href = "https://mike469.github.io/JSON-Trivia/";
    }
    
    else if (element == djangocon){
      messagecon.style.border = "4.5px solid white";
      messagecon.style.borderRadius = "5px";
      titleOfProject.textContent = "Repli - Django / Python / HTML / CSS";
      descOfProject.textContent = replidesc;
      lang_proj.textContent = replilang;
      date_proj.textContent = replidate;
      triviacon.style.fontSize = "6vw";
      cer_click.href = "https://github.com/kevin18ramos/MessagingApplication";
      cer_click.textContent = "Click here for the repository!";
    }
    else if (element == rustcon){
      managecon.style.border = "4.5px solid white";
      managecon.style.borderRadius = "5px"
      titleOfProject.textContent = "Task Assignment Program - Rust";
      descOfProject.textContent =  managedesc;
      lang_proj.textContent = managelang;
      date_proj.textContent = managedate;
      managecon.style.fontSize = "6vw";
      cer_click.textContent = "Click here for the repository!";
      cer_click.href = "https://github.com/kevin18ramos/Task-Assignment-Program-";
    }
  });
});


let imgskill = [ "javascon", "djangocon", "rustcon"];

imgskill.forEach(function(imgClass) {
  const img = document.querySelector(`.${imgClass}`);
  img.addEventListener("click", function() {
    location.href = "#Projects";
  });
});