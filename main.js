// const { returns } = require("chai-spies")

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
const hearts = document.querySelectorAll("span.like-glyph")

hearts.forEach(heart => {
  heart.addEventListener('click', (e) => {
    e.preventDefault()

    mimicServerCall(e)
    .then(response => {
      console.log('success')
    document.getElementById("modal").classList.add("hidden")
      if(heart.innerHTML === EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        heart.classList.add("activated-heart")
      } else if(heart.innerHTML === FULL_HEART) {
        heart.innerHTML = EMPTY_HEART
        heart.classList.remove("activated-heart")
      }

    })
    .catch(error => {
      console.log('error')
      document.getElementById("modal").classList.remove("hidden")
      setTimeout(() => {
        document.getElementById("modal").classList.add("hidden")
      }, 3000)
    })
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}