const addMovie = document.querySelector(".add_movie");
const listMovie = document.querySelector(".list_movie");
const findMovie = document.querySelector(".find_movie");
const toggler = document.querySelector(".toggle");
const choices = document.querySelector(".choices");
const modalContainer = document.querySelector(".addContainer");
const modalStuff = document.querySelector(".add_movie_to_list");
const addBtn = document.querySelector(".addBtn");
const listContainer = document.querySelector(".listcontainer");
const findContainer = document.querySelector(".findContainer");

let movieList = [];
addMovie.addEventListener("click", () => {
  modalContainer.classList.add("active");
  choices.classList.add("active");
  listContainer.classList.remove("active");
  findContainer.classList.remove("active");
});

let inpyt = document.querySelectorAll("input:not([class = nameFieldFinder])");
addBtn.addEventListener("click", () => {
  let valuess = Array.from(inpyt).reduce(
    (acc, inpyt) => ({ ...acc, [inpyt.id]: inpyt.value }),
    {}
  );
  movieList.push(valuess);
  alert("Success!");

  let movies = new Set(movieList);
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    console.log("escaped");
    modalContainer.classList.remove("active");
    choices.classList.remove("active");
  }
});

toggler.addEventListener("click", () => {
  modalContainer.classList.remove("active");
  choices.classList.remove("active");
});

listMovie.addEventListener("click", () => {
  listContainer.classList.add("active");
  findContainer.classList.remove("active");
  let contList = document.querySelector(".liststuff");
  if (movieList.length == 0) {
    contList.innerText = "There are no movies in the list";
  } else {
    let sent = [];
    movieList.forEach((movie) => {
      let word =
        "Movie name: " +
        movie.movieName +
        " directed by " +
        movie.movieDirector +
        " in " +
        movie.releaseYear +
        " <br />";
      sent.push(word);

      for (let i = 0; i < sent.length; i++) {
        let sentence = sent.toString().split(",");
        contList.innerHTML = sentence;
      }
    });
  }
});

findMovie.addEventListener("click", () => {
  listContainer.classList.remove("active");
  findContainer.classList.add("active");

  let textDisplay = document.querySelector(".display");
  let searchBtn = document.querySelector(".find");
  searchBtn.addEventListener("click", () => {
    let findM = document.querySelector(".nameFieldFinder");
    const Movieresult = movieList.find(
      ({ movieName}) => movieName === findM.value
    );

    if (
      Movieresult) {
      textDisplay.innerHTML =
        "The movies with found are: <br />" +
        Movieresult.movieName +
        " by " +
        Movieresult.movieDirector +
        " in " +
        Movieresult.releaseYear;
    }
  });
});
