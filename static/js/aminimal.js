var side = document.getElementById("side");
var sidebox = document.getElementById("side-box-content");
var open = document.getElementById("open-side");
var container = document.getElementById("container");

function closeMenu() {
  container.style.overflowY = "initial";
  side.style.width = "1%";
  sidebox.style.display = "none";
}
open.addEventListener("click", function(e) {
  e.preventDefault();
  if (sidebox.style.display === "none" || sidebox.style.display === "") {
    container.style.overflowY = "hidden";
    sidebox.style.display = "block";
    side.style.width = "40%";
  } else {
    closeMenu();
  }
});
/*
document.body.addEventListener("click", function() {
  closeMenu();
});
*/
