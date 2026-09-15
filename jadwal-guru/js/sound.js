// Generator suara notifikasi pakai Web Audio API — tidak perlu file .mp3/.wav eksternal.
const SoundKit = (() => {
  let ctx = null;
  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function tone(freq, startOffset, duration, gainPeak = 0.18, type = "sine") {
    const c = getCtx();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    const t0 = c.currentTime + startOffset;
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(gainPeak, t0 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
    osc.connect(gain).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.05);
  }

  const kits = {
    chime: () => { tone(880, 0, 0.5); tone(1174.66, 0.12, 0.55); tone(1567.98, 0.24, 0.7); },
    bell: () => { tone(587.33, 0, 0.9, 0.2, "triangle"); tone(1174.66, 0.02, 0.7, 0.1, "triangle"); },
    ping: () => { tone(1318.51, 0, 0.35, 0.22, "sine"); },
    none: () => {},
  };

  function play(name) {
    try {
      (kits[name] || kits.chime)();
    } catch (e) {
      console.warn("SoundKit: gagal memutar suara", e);
    }
  }

  return { play, unlock: getCtx };
})();
