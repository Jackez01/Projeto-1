function toggleMode() {
   const html = document.documentElement
   html.classList.toggle("light")

   // pegar a tag img
const img = document.querySelector("#profile img")

// substituir a img
    if (html.classList.contains ("light")) {
     // se tiver light mode add a img light
        img.setAttribute("src", "./assets/assets/WhatsApp Image 2023-10-23 at 11.44.58.jpeg")
   } else {
  // se tiver sem light mode manter a img normal
img.setAttribute("src", "./assets/assets/WhatsApp Image 2023-10-23 at 11.44.58 (1).jpeg")
  }
 
}