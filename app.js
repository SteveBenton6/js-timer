// Example 1 -  Welcome to Part 2!
console.log("\nSECTION 1 - Welcome to Part 2!");

// Example 2 -  Join Our Community
console.log("\nSECTION 2 - Join Our Community");
// No Code

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
  }
  start() {
    console.log("Time to start the timer!");
  }
}
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
