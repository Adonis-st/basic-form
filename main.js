
const selectedRatingEl = document.getElementById("selected-rating")

const formDivEl = document.getElementById("form")
const thanksDivEl = document.getElementById("thanks")

const btn1 = document.getElementById("btn-1")
const btn2 = document.getElementById("btn-2")
const btn3 = document.getElementById("btn-3")
const btn4 = document.getElementById("btn-4")
const btn5 = document.getElementById("btn-5")
let rating = 0

function rating1() {
   rating = 1
   removeRating()
   btn1.classList.add("selected")
}

function rating2() {
   rating = 2
   removeRating()
   btn2.classList.add("selected")
}

function rating3() {
   rating = 3
   removeRating()
   btn3.classList.add("selected")
}

function rating4() {
   rating = 4
   removeRating()
   btn4.classList.add("selected")
}

function rating5() {
   rating = 5
   removeRating()
   btn5.classList.add("selected")
}

function removeRating() {
   btn1.classList.remove("selected")
   btn2.classList.remove("selected")
   btn3.classList.remove("selected")
   btn4.classList.remove("selected")
   btn5.classList.remove("selected")
}

function handleSubmit() {

   if (rating === 0) {
      return alert("Please select a rating")
   } else {
      thanksDivEl.classList.remove("hidden")
      formDivEl.classList.add("hidden")

      selectedRatingEl.innerText = "You selected " + rating + " out of 5"
   }


}