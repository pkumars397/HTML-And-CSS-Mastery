//! can read value by name and id of input

const form = document.getElementById("form")
const nam = document.getElementById("userName")
console.log(form);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.UrName.value)
    console.log(nam.value)
})
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log(event.target.gender.value)
// })
