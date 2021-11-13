const section = document .querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;
  
//link the player lives text
playerLivesCount.textContent = playerLives;

//card images and info
const getData = () => [
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

  //randomize the cards
  const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData
  }

//card gen function
const cardGenerator = () => {
  const cardData = randomize();
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
}
  const board = () => {
    // console.log("hey there!");
  };
  
  //checking cards
  const checkCards = (e) => {
    const clickedCard = e.target
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
    //logic
    if(flippedCards.length === 2) {
      if (
        flippedCards[0].getAttribute("name") === 
        flippedCards[1].getAttribute("name")
      ) {
        // console.log("match");
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          card.style.pointerEvents = "none";
        });
      } else {
        // console.log("wrong");
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          setTimeout(() => card.classList.remove("toggleCard"), 1000);
        });
        playerLives--;
        playerLivesCount.textContent = playerLives;
        if(playerLives === 0) {
          alert("You lost. Try again!");
        }
      }
    }
    if(toggleCard.length === 16) {
      restart("WINNER!!!");
    }
  };

  //restart the game
  // const restart = () => {
  //   let cardData = randomize();
  //   let faces = document.querySelectorAll(".face");
  //   let cards = document.querySelectorAll(".cards");
  //   cardData.forEach((item, index) => {
  //     // cards[index].classList.remove("toggleCard");
  //     setTimeout(() => {
  //       cards[index].style.pointerEvents = "all";
  //     faces[index].src = item.imgSrc;
  //     cards[index].setAttribute("name", item.name);
  //     }, 1000);
  //   });
  //   playerLives = 6;
  //   playerLives.textContent = playerLives;
  //   setTimeout(() => window.alert("Game over! You lost!"), 100);
  // }

  //reset
  function Reset() {
    location.reload();
}
const button =document.querySelector("#reset")
 button.addEventListener("click", Reset) ;


  cardGenerator();