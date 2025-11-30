let wicket = document.querySelector("#wicket");
let six = document.querySelector("#six");
let scorebug = document.querySelector("nav");
let timeoutId;

function showOverlay(text) {
  clearTimeout(timeoutId);

  // Transition reset
  scorebug.classList.remove("overlayMode");
  void scorebug.offsetWidth; // force reflow
  scorebug.classList.add("overlayMode");

  scorebug.innerText = text;

  // 5s baad wapas normal
  timeoutId = setTimeout(() => {
    scorebug.classList.remove("overlayMode");
    location.reload();
  }, 5000);
}

// Events
wicket.addEventListener("click", () => {
  showOverlay("WICKET");
});

six.addEventListener("click", () => {
  showOverlay("SIX");
});
