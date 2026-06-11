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
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {
    circle.setAttribute("stroke-dashoffset", currentOffset);
    currentOffset = currentOffset - 1;
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
