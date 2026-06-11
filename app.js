// Example 1 -  Welcome to Part 2!
console.log("\nSECTION 1 - Welcome to Part 2!");

// Example 2 -  Join Our Community
console.log("\nSECTION 2 - Join Our Community");
// No Code

// Example 3 -  App Overview
console.log("\nSECTION 2 - App Overview");

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {
    console.log("Timer ticked down");
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
