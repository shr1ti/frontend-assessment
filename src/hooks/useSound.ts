// src/hooks/useSound.ts

export function playSound(type: "click" | "next") {
  const audio = new Audio(`/sounds/${type}.mp3`);
  audio.volume = 0.4;
  audio.play();
}
