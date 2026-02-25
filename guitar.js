document.addEventListener("click", function (e) {
  document.getElementById("overlay").classList.toggle("dark");

  const tear = document.createElement("img");
  tear.src = "tear.png";
  tear.alt = "";
  tear.className = "tear";

  const width = Math.floor(Math.random() * (800 - 100 + 1)) + 100;
  tear.style.width = width + "px";
  tear.style.height = "auto";

  tear.style.left = (e.clientX - width / 2) + "px";
  tear.style.top = e.clientY + "px";

  document.body.appendChild(tear);
});
