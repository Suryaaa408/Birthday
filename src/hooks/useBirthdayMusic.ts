import { useRef, useState, useCallback, useEffect } from "react";

// Birthday melody notes (Happy Birthday in frequencies)
const MELODY: [number, number][] = [
  [262, 0.3], [262, 0.3], [294, 0.6], [262, 0.6], [349, 0.6], [330, 1.0],
  [262, 0.3], [262, 0.3], [294, 0.6], [262, 0.6], [392, 0.6], [349, 1.0],
  [262, 0.3], [262, 0.3], [523, 0.6], [440, 0.6], [349, 0.6], [330, 0.6], [294, 1.0],
  [466, 0.3], [466, 0.3], [440, 0.6], [349, 0.6], [392, 0.6], [349, 1.0],
];

export const useBirthdayMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timeoutIds = useRef<number[]>([]);

  const playMelody = useCallback(() => {
    if (ctxRef.current) ctxRef.current.close();
    const ctx = new AudioContext();
    ctxRef.current = ctx;

    let time = ctx.currentTime + 0.1;
    const ids: number[] = [];

    const scheduleLoop = (startTime: number) => {
      MELODY.forEach(([freq, dur]) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        filter.type = "lowpass";
        filter.frequency.value = 2000;

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.type = "sine";
        osc.frequency.value = freq;

        // Soft, music-box-like envelope
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.12, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + dur * 0.9);

        osc.start(startTime);
        osc.stop(startTime + dur);

        startTime += dur;
      });
      return startTime;
    };

    // Play melody in a loop
    const loopDuration = MELODY.reduce((sum, [, d]) => sum + d, 0);

    const scheduleNext = () => {
      time = scheduleLoop(time);
      const id = window.setTimeout(scheduleNext, loopDuration * 1000 - 500);
      ids.push(id);
    };

    scheduleNext();
    timeoutIds.current = ids;
    setIsPlaying(true);
  }, []);

  const stop = useCallback(() => {
    timeoutIds.current.forEach(clearTimeout);
    timeoutIds.current = [];
    if (ctxRef.current) {
      ctxRef.current.close();
      ctxRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) stop();
    else playMelody();
  }, [isPlaying, stop, playMelody]);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return { isPlaying, toggle, play: playMelody, stop };
};
