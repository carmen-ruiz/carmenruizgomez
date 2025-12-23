function toggleMenu() {
    document.getElementById("nav").classList.toggle("hidden");    
  }

function setCurrentYear() {
  document.getElementById("year").innerText = new Date().getFullYear();
}