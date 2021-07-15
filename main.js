// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// collect all heart icons
// iterate over icons and add
// event listener for click event
// that invokes mimicServerCall

const hearts = document.getElementsByClassName("like-glyph");

for (const heart of hearts) {

  heart.addEventListener("click", function(e) {
    if (heart.classList.contains("activated-heart")) {
      // if heart full

      // make heart empty
      heart.classList.remove("activated-heart");
      heart.innerHTML = EMPTY_HEART;

    } else {
      // if heart empty

      mimicServerCall()
        .then(function(response) {
          // make heart full
          heart.innerHTML = FULL_HEART;
          heart.classList.add("activated-heart");
        })
        .catch(function(error) {
          // if server call fails
          // add & display error msg
          let errorMessage = document.getElementById("modal-message");
          errorMessage.innerHTML = error;

          const errorModal = document.getElementById("modal");
          errorModal.classList.remove("hidden");
          setTimeout(() => errorModal.classList.add("hidden"), 5000);
        });

    };
  });
};


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
