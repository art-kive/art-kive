// Smooth slow automatic scroll with pause at bottom
const scrollSpeed = 0.3;   // pixels per frame
const pauseTime = 900;    // milliseconds to pause at bottom
let isPaused = false;

function autoScroll() {
  if (!isPaused) {
    window.scrollBy(0, scrollSpeed);
  }

  // Check if we've reached the bottom
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    if (!isPaused) {
      isPaused = true; // start pause
      setTimeout(() => {
        window.scrollTo(0, 0); // reset to top after pause
        isPaused = false;      // resume scrolling
      }, pauseTime);
    }
  }

  requestAnimationFrame(autoScroll);
}

// Start scrolling when page loads
window.onload = () => {
  requestAnimationFrame(autoScroll);
};
