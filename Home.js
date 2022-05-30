/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function googleSearchDesktop() {
  if(document.getElementById("gsSearchBarDesktop").value ==="") {
    document.getElementById('gsButtonDesktop').disabled = true;
  }
  else {
    document.getElementById('gsButtonDesktop').disabled = false;
  }
}
