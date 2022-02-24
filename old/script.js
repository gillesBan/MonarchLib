let listA = document.getElementById("listAnime");
let Anime = document.querySelector(".Anime");

let listB = document.querySelector("#listGenre");
let Genre = document.querySelector(".Genre");
// display? faire un background pour chaque liste

listA.addEventListener("click", () => {
  Anime.classList.toggle("show");
});
listB.addEventListener("click", () => {
  Genre.classList.toggle("show");
});
