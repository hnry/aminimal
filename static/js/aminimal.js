var side = document.getElementById("side");
var sidebox = document.getElementById("side-box-content");
var open = document.getElementById("open-side");
var container = document.getElementById("container");

function closeMenu() {
  side.style.width = "0%";
}
open.addEventListener("click", function(e) {
  e.preventDefault();
  if (side.style.width === "0%" || side.style.width === "") {
    side.style.width = "60%";
  } else {
    closeMenu();
  }
});
