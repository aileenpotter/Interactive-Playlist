document.getElementById("trigger").addEventListener("click", function () {
  var sun = document.getElementById("sun");
  sun.classList.remove("rise-and-set");
  void sun.offsetWidth; // reflow so animation can run again
  sun.classList.add("rise-and-set");
  sun.addEventListener(
    "animationend",
    function once() {
      sun.classList.remove("rise-and-set");
      sun.removeEventListener("animationend", once);
    },
    { once: true }
  );
});
