// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Add the .hidden class to the error modal in the HTML so it doesn't appear when the page first loads
document.querySelector("#modal").classList.add("hidden")

// On click event listener
document.querySelector("body").addEventListener("click", (event) => {
  // If the clicked object is an empty heart...
  if (event.target.classList.contains("like-glyph")) {
    mimicServerCall()
      .then(() => {
        // When server returns success status
        // Change the heart to a full heart
        
        event.target = FULL_HEART;
        // Add the .activated-heart class to make the heart appear red
        event.target.classList.add("activated-heart");
      })
      .catch(() => {
        // When server returns failure status
        // Remove the .hidden class
        document.querySelector("#modal").classList.remove("hidden");
        // Display the server error message in the modal
        document.querySelector(".server-error-message").innerText = "An unexpected error occurred";
        // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
        setTimeout(function () {
            document.querySelector(".#modal").classList.add("hidden");
        }, 3000);
      });
  // If the clicked object is a full heart...
  } else if (event.target.classList.contains("activated-heart")) {
    // Change the heart back to an empty heart
    event.target.src = "assets/empty-heart.png";
    // Remove the .activated-heart class
    event.target.classList.remove("activated-heart");
  }
});


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
