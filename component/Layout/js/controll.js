// <Form search>
let classListItems = Array.from(document.getElementsByClassName("s-search-data"));
let listForms = Array.from(document.querySelectorAll("form"));
classListItems.forEach(function (values, index) {
    let searchElement = document.querySelector(".s-content-search");
    //console.log(values.getAttribute("class"));
    searchElement.addEventListener("click", () => {
        if (values.getAttribute("class").indexOf("on")==-1) {
            values.classList.add("on");
        } else {
            values.classList.remove("on");
        }
    });
});
// </Form search>