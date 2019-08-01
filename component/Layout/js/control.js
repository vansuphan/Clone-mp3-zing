/********* Form search ************/
let classListItems = Array.from(document.getElementsByClassName("s-search-data"));
let listForms = Array.from(document.querySelectorAll("form"));
classListItems.forEach(function (values, index) {
    let searchElement = document.querySelector(".s-content-search");
    searchElement.addEventListener("click", () => {
        if (values.getAttribute("class").indexOf("on") == -1) {
            values.classList.add("on");
        } else {
            values.classList.remove("on");
        }
    });
});
/********* Form search ************/

/********* Dropdown Login ************/
let classDropDownLogin = document.querySelector(".s-arrow-login");
let conteneDropDownLogin = document.querySelector(".s-user-dropdown");

function addContentDropDown(x, y) {
    classDropDownLogin.addEventListener("click", () => {
        if (classDropDownLogin.getAttribute("class") == "s-arrow-login") {
            classDropDownLogin.classList.add("on");
            conteneDropDownLogin.classList.add("on");
        } else {
            conteneDropDownLogin.classList.remove("on");
            classDropDownLogin.classList.remove("on");
        }
    });
}
addContentDropDown(classDropDownLogin, conteneDropDownLogin);
/********* Dropdown Login ************/

/********* Slide ************/
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
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = listSlide.length;
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
setInterval(function () {
    plusDivs(1);
}, 6000);
/*
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
*/
/********* Slide ************/

/*************  Mini slide  **************/

let sectionSlide = Array.from(document.querySelectorAll("section"));

sectionSlide.forEach(function (elements, indexs) {
    var miniSlide = Array.from(elements.getElementsByClassName("s-slide-all"));
    var buttonMiniLeft = Array.from(elements.getElementsByClassName("s-mini-slides-left"));
    var buttonMiniRight = Array.from(elements.getElementsByClassName("s-mini-slides-right"));
    miniSlide.forEach(function (values, index) {
        //console.log(values);
        let widthTranslate = 0;
        if (widthTranslate === 0) {
            buttonMiniRight.forEach(function (valuesR, ind) {
                valuesR.addEventListener("click", () => {
                    widthTranslate -= 989;
                    values.style.transform = "translate(" + widthTranslate + "px,0)";
                    console.log(widthTranslate);
                });
            });
            buttonMiniLeft.forEach(function (valuesB, ind) {
                valuesB.addEventListener("click", () => {
                    widthTranslate += 989;
                    values.style.transform = "translate(" + widthTranslate + "px,0)";
                    console.log(widthTranslate);
                });
            });
        }
        if (widthTranslate !== 0) {
            buttonMiniLeft.forEach(function (valuesB, ind) {
                valuesB.addEventListener("click", () => {
                    widthTranslate += 989;
                    values.style.transform = "translate(" + widthTranslate + "px,0)";
                    console.log(widthTranslate);
                });
            });
        }
    });
});

/*************  End Mini slide  *************/

/*************  Kind tag  *************/
let selectKindMusic = Array.from(document.getElementsByClassName("s-select-themes"));
let AreaKindMusic = Array.from(document.getElementsByClassName("s-content-kind-music"));
let AreaKindMusicActive = "s-kind-m-active";
//let AreaKindMusicDefault = "s-kind-m-default";
function activeSelect(select, valuesActive, valuesDefault, area, areaActive) {
    select.forEach(function (values, index) {
        var classListItems = Array.from(values.classList);
        if (!classListItems.includes(valuesActive)) {
            values.addEventListener("click", () => {
                values.classList.add(valuesActive);
                select.forEach(function (valuesChild, indexChild) {
                    if (indexChild !== index) {
                        valuesChild.classList.remove(valuesActive);
                        valuesChild.classList.remove(valuesDefault);
                    }
                });
                area.forEach(function (valuesArea, indexArea) {
                    if (indexArea == index) {
                        valuesArea.classList.add(areaActive);
                        //valuesArea.classList.remove(areaDefault);
                    } else {
                        valuesArea.classList.remove(areaActive);
                        //valuesArea.classList.add(areaDefault)
                    }
                });
            });
        }
    });
}
activeSelect(selectKindMusic, "s-select-active", "s-select-themes-default", AreaKindMusic, AreaKindMusicActive);
/*************  End Kind tag  *************/

/*************  Scroll   *************/
var headerS = document.getElementsByTagName("header")[0];
var scrollS = document.getElementsByClassName("s-scroll")[0];

function scrollTopHeader(headerS) {
    window.addEventListener("scroll", () => {
        //console.log(window.scrollY);
        if (window.scrollY > 100) {
            headerS.classList.add("s-header-fixed");
        } else {
            headerS.classList.remove("s-header-fixed");
        }
    });

}
scrollTopHeader(headerS);

function scrollTop(scrollS) {
    scrollS.addEventListener("click", () => {
        //document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}
scrollTop(scrollS);
/*************  End Scroll   *************/

/*************  Change background color   *************/

function changeBackgroudColor(){
    var classChangeBackgroudColor = document.querySelector(".s-change-style-color");
    var classButtonChange = document.querySelector(".checkbox");
    console.log(classButtonChange);
    classButtonChange.addEventListener("click",()=>{
        if(classButtonChange.checked == true){
            console.log("hahaha");
            classChangeBackgroudColor.setAttribute("href","./css/change-backgroud-color.css");
        }else{
            console.log("hiihi");
            classChangeBackgroudColor.setAttribute("href","#");
        }
    });
}
changeBackgroudColor();
/*************  End Change background color   *************/