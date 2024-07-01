function toggleMenu() {
    document.getElementById("nav").classList.toggle("hidden");    
  }

 function checkToggleMenu(event) {
  if (event.code === 'Enter') toggleMenu();
 }