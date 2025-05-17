// Animate clouds: reset position after going off-screen
document.querySelectorAll(".cloud").forEach((cloud) => {
  cloud.addEventListener("animationiteration", () => {
    const newTop = Math.random() * 30 + 10; // between 10% and 40%
    const newDelay = Math.random() * 30; // random delay
    cloud.style.top = `${newTop}%`;
    cloud.style.animationDelay = `${newDelay}s`;
  });
});

// Add interactive floating effect to characters
document.querySelectorAll(".character").forEach((char, index) => {
  const float = () => {
    char.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-10px)" },
        { transform: "translateY(0px)" },
      ],
      {
        duration: 3000 + index * 500,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
  };
  float();
});

let hasPlayedAudio = false;

window.addEventListener(
  "click",
  () => {
    if (hasPlayedAudio) return;

    const audio = document.getElementById("bg-audio");
    audio
      .play()
      .then(() => {
        hasPlayedAudio = true;
      })
      .catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
  },
  { once: false }
); // still listen to other clicks, just ignore them
