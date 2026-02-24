// Crunch sound on strawberry hover (add crunch.mp3 or crunch.wav to this folder)
var crunchSound = new Audio('crunch.mp3');

document.querySelectorAll('.strawberry-img').forEach(function(img) {
    img.addEventListener('mouseenter', function() {
        crunchSound.currentTime = 0;
        crunchSound.play().catch(function() {});
    });
});

document.addEventListener('mousemove', function(e) {
    var x = e.clientX, y = e.clientY;
    document.querySelectorAll('.container > div').forEach(function(div) {
        var r = div.getBoundingClientRect();
        var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        var dx = x - cx, dy = y - cy;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var opacity = dist < 120 ? 1 : dist > 420 ? 0 : 1 - (dist - 120) / 300;
        div.style.setProperty('--img-opacity', opacity);
    });
});
