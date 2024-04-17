const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "Welcome to The Script Society"


//by class name

const infoCollection = document.getElementsByClassName("info");

const infoElementsArray = [...infoCollection]; //convert html collection to valid array

infoElementsArray.forEach(elm => elm.innerHTML = "this is the new text");


// by tag name this gives a collection 

const allParagraphsHtml = document.getElementsByTagName("p")


//by css selectors this gives a Nodelist 


const first = document.querySelector("header h2");
const all = document.querySelectorAll("header h2");

all.forEach(function(elm){
    elm.style.color = "orange";
});

document.querySelector("#reviews h2")

//document vs element

const allP = document.querySelectorAll("#products p")



const productsElm = document.getElementById("products")
const allPara = productsElm.getElementsByTagName("p")

//properties

const pikachuElm = document.getElementById("pikachu")
pikachuElm.innerHTML = `
<div>
    <p>One</p>
    <p>
        Two
        <a href = "#">click here </a>
    </p>
</div>`

//read  modify text content elm.innerText

const linkElm = document.getElementById("my-link");
linkElm.innerText = "about the script society";


//read modify CSS elm.style

mainTitle.style.color = "blue";
mainTitle.style.background = "yellow";
mainTitle.style.borderBottom = "2px solid orange";

// elm.id
mainTitle.id = "this is the new id"

// elm.className

mainTitle.className = "title rounded"

mainTitle.classList.add("new-class")
mainTitle.classList.remove("rounded")
mainTitle.classList.toggle("active") //adding if doesnt have it,remove it if has it.
// mainTitle.className = mainTitle.className + " box"


//attributes
//get : elm.getAttribute(attributeName)

const myLink = document.getElementById("my-link")
const result = myLink.getAttribute("href")

//modify or create

myLink.setAttribute("target", "_blank")

//remove .removeattribute(attrname)



//Create a DOM node
const newImg = document.createElement("img")
//step 2
newImg.setAttribute("src", "./images/pikachu.jpg");

//step 3 append to the dom
const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg)



//EVENTS

const btn = document.getElementById("button-1")
btn.addEventListener("click", () => {
    const newP = document.createElement("p");
    //step 2
    newP.innerText = "lorem ipsum";
    //step 3
    const containerElm = document.getElementById("my-container")
    containerElm.appendChild(newP)
})