var side = document.getElementById("side");
var license = document.getElementById("license");
var open = document.getElementById("open-side");

function closeMenu() {
  open.innerHTML = ">";
  license.style.display = "none";
  side.style.width = "0%";
}
open.addEventListener("click", function(e) {
  e.preventDefault();
  if (side.style.width === "0%" || side.style.width === "") {
    open.innerHTML = "<";
    license.style.display = "block";
    side.style.width = "60%";
  } else {
    closeMenu();
  }
});
