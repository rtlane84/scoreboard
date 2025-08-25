let homeScoreText = document.getElementById("home-score");
let guestScoreText = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function updateHome(points) {
  homeScore += points;
  homeScoreText.textContent = homeScore;
}

function updateGuest(points) {
  guestScore += points;
  guestScoreText.textContent = guestScore;
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  homeScoreText.textContent = homeScore;
  guestScoreText.textContent = guestScore;
}

document.querySelectorAll(".score-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // add the pressed class
    btn.classList.add("pressed");

    // remove it after 200ms
    setTimeout(() => {
      btn.classList.remove("pressed");
    }, 50);
  });
});
