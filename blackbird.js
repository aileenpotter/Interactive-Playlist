(function () {
    let audioCtx = null;

    function getAudioContext() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        return audioCtx;
    }

    function playTone(freq, duration) {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.frequency.value = freq;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);
    }

    function playBFlatNote() {
        playTone(466.16, 0.35);
    }

    function playENote() {
        playTone(329.63, 0.35);
    }

    function playHighANote() {
        playTone(880, 0.35);
    }

    const note1 = document.querySelector('.note1');
    const note2 = document.querySelector('.note2');
    const note1r = document.querySelector('.note1r');
    if (note1) {
        note1.addEventListener('click', playBFlatNote);
    }
    if (note2) {
        note2.addEventListener('click', playENote);
    }
    if (note1r) {
        note1r.addEventListener('click', playHighANote);
    }

    document.addEventListener('click', function initOnce() {
        getAudioContext().resume();
        document.removeEventListener('click', initOnce);
    }, { once: true });
})();
