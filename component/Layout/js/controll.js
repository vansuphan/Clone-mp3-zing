// <Form search>
let classListItems = Array.from(document.getElementsByClassName("s-search-data"));
let listForms = Array.from(document.querySelectorAll("form"));
classListItems.forEach(function (values, index) {
    let searchElement = document.querySelector(".s-content-search");
    //console.log(values.getAttribute("class"));
    searchElement.addEventListener("click", () => {
        if (values.getAttribute("class").indexOf("on") == -1) {
            values.classList.add("on");
        } else {
            values.classList.remove("on");
        }
    });
});
// </Form search>

//<Dropdown Login>
let classDropDownLogin = document.querySelector(".s-arrow-login");
let conteneDropDownLogin = document.querySelector(".s-user-dropdown");
function addContentDropDown(x,y){
    classDropDownLogin.addEventListener("click",()=>{
        if(classDropDownLogin.getAttribute("class") == "s-arrow-login"){
            classDropDownLogin.classList.add("on");
            conteneDropDownLogin.classList.add("on");
        }else{
            conteneDropDownLogin.classList.remove("on");
            classDropDownLogin.classList.remove("on");
        }
    });
}
addContentDropDown(classDropDownLogin,conteneDropDownLogin);
//</Dropdown Login>

// <Slide>
var listSlide = document.getElementsByClassName("s-slides");
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var dots = document.getElementsByClassName("s-nuber-slide");
    if (n > listSlide.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = listSlide.length
    }
    for (i = 0; i < listSlide.length; i++) {
        listSlide[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" s-slides-red", "");
    }
    listSlide[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].className += " s-slides-red";
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    //var listSlide = document.getElementsByClassName("s-slides");
    for (i = 0; i < listSlide.length; i++) {
        listSlide[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > listSlide.length) {
        slideIndex = 1
    }
    listSlide[slideIndex - 1].style.display = "grid";
    setTimeout(carousel, 3500); //Change image every 3.5 seconds
}
//</Slide>