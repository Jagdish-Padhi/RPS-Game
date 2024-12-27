let name = prompt("May I know your name please?");
name = name?.trim() || "Player";
document.querySelector("#headline").innerText =
  `✨Welcome to✨\nRock-Paper-Scissor Game\n🌟${name}!🌟`;

let images = document.querySelectorAll("img");
let userScore = document.querySelector("#user_score");
let aiScore = document.querySelector("#ai_score");
let msg = document.querySelector("#below-msg");
let msg1 = document.querySelector("#top-msg");

let user_score = 0;
let ai_score = 0;

const aiChoice = () => {
  let choices = ["rock", "paper", "scissor"];
  let ai_choice = choices[Math.floor(Math.random() * 3)];
  return ai_choice;
};

const update = (userWin, user_choice, ai_choice) => {
  if (userWin) {
    user_score++;
    userScore.innerText = user_score;
    msg.innerText = `You won! Your ${user_choice} beats ${ai_choice}`;
    msg.style.backgroundColor = "rgb(83, 255, 56)";
    msg1.innerText = "✨Congratulations!🌟";
    msg1.style.backgroundColor = "rgb(77, 255, 0)";
  } else {
    ai_score++;
    aiScore.innerText = ai_score;
    msg.innerText = `You lost! ${ai_choice} beats your ${user_choice}`;
    msg.style.backgroundColor = "rgb(255, 0, 0)";
    msg1.innerText = "😟Ohh! shit!!🙁";
    msg1.style.backgroundColor = "rgb(255, 68, 68)";
  }
};

const RunGame = () => {
  images.forEach((img) => {
    img.addEventListener("click", () => {
      let user_choice = img.getAttribute("id");
      let ai_choice = aiChoice();

      if (user_choice === ai_choice) {
        msg.innerText = "This is a tie!";
        msg.style.backgroundColor = "rgb(144, 244, 255)";
      } else {
        let userWin;
        if (user_choice === "rock") {
          userWin = ai_choice === "scissor";
        } else if (user_choice === "paper") {
          userWin = ai_choice === "rock";
        } else if (user_choice === "scissor") {
          userWin = ai_choice === "paper";
        }

        update(userWin, user_choice, ai_choice);
      }
    });
  });
};

RunGame();
