//AUTO POPUP
 window.addEventListener("load",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("submit-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
});

document.getElementById("open-qoute-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
});




//
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("open-qoute-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(e) {
  modal.style.display = "block";
  e.preventDefault();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



