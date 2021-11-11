

// // Flip cards

// const cards = document.querySelectorAll(".cards");

// function flipCard() {
// //   this.classList.toggle("flip");
// console.log(this.children)
// Array.from(this.children).forEach((elem) => {
//     elem.classList.toggle("hidden")
// })
// }
// cards.forEach((card) => card.addEventListener("click", flipCard));


// //Reset button

// const resetButton = document.querySelector("#reset");
// resetButton.addEventListener("click", function() {
//     location.reload();
// });

document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e);
    cardGenerator();
    board();
  });
  
  const section = document .querySelector("section");
  const playerLivesCount = document.querySelector("span");
  const playerLives = 6;
  
  //link the text
  playerLivesCount.textContent = playerLives;
  
  const cardGenerator = () => {
    //We generate the object 🧑🏻‍💻
    let cardData = [
      { imgSrc: "./images/jake.png", id: 1, name: "jake" },
      { imgSrc: "./images/finn.png", id: 2, name: "finn" },
      { imgSrc: "./images/bmo.png", id: 3, name: "bmo" },
      { imgSrc: "./images/cupcake.png", id: 4, name: "cupcake" },
      { imgSrc: "./images/lemongrab.png", id: 5, name: "lemongrab" },
      { imgSrc: "./images/flame.png", id: 6, name: "flame" },
      { imgSrc: "./images/donut.png", id: 7, name: "donut" },
      { imgSrc: "./images/berry.png", id: 8, name: "berry" },
      { imgSrc: "./images/jake.png", id: 9, name: "jake" },
      { imgSrc: "./images/finn.png", id: 10, name: "finn" },
      { imgSrc: "./images/bmo.png", id: 11, name: "bmo" },
      { imgSrc: "./images/cupcake.png", id: 12, name: "cupcake" },
      { imgSrc: "./images/lemongrab.png", id: 13, name: "lemongrab" },
      { imgSrc: "./images/flame.png", id: 14, name: "flame" },
      { imgSrc: "./images/donut.png", id: 15, name: "donut" },
      { imgSrc: "./images/berry.png", id: 16, name: "berry" },
    ];
  
   
    cardData.sort(() => Math.random() - 0.5);
  
    const cards = document.querySelectorAll(".card");
    cardData.forEach((item, index) => {
      const section = document.querySelector("section");
      const card = document.createElement("div");
      card.classList = "card";
  
      card.setAttribute("id", item.id);
      card.setAttribute("name", item.name);
  
      const face = document.createElement("img");
      face.classList = "face";
      face.src = item.imgSrc;
      card.setAttribute("name", item.name);
  
      const back = document.createElement("div");
      back.classList = "back";
  
      section.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);
  
      card.addEventListener("click", (e) => {
        // console.log(e);
        //run the flip animation
        face.classList.toggle("toggleCard");
        card.classList.toggle("toggleCard");
        checkCards(e);
      });
    });
  };
  
  const board = () => {
    // console.log("hey there!");
  };
  
  //checking cards
  const checkCards = (e) => {
    const clickedCard = e.target
    clickedCard.classList.add("flipped");
  }