(function () {
  var algaeContainer = document.getElementById('algae-container');

  document.addEventListener('click', function (ev) {
    var width = 50 + Math.random() * 150;
    var img = document.createElement('img');
    img.src = 'algae.png';
    img.alt = 'Algae';
    img.className = 'algae';
    img.style.width = width + 'px';
    img.style.height = 'auto';
    img.style.left = (ev.clientX - width / 2) + 'px';
    img.style.top = (ev.clientY - width / 2) + 'px';
    algaeContainer.appendChild(img);
  });
})();
