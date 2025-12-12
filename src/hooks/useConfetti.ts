import confetti from "canvas-confetti";

export function fireConfetti() {
  confetti({
    particleCount: 130,
    spread: 90,
    origin: { y: 0.6 },
    scalar: 1.2,
  });
}
