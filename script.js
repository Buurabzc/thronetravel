document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("form");
  form?.addEventListener("submit", e => {
    e.preventDefault();
    alert("Mesajınız alındı. Teşekkür ederiz!");
  });

  // Scroll gradyan kontrolü
  const fadeEl = document.querySelector(".fade-bottom");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      fadeEl?.classList.add("visible");
    } else {
      fadeEl?.classList.remove("visible");
    }
  });

  // Güncelleme: Msg-gncl-07 - Video ileri geri döngüsü
  const forward = document.getElementById("video-forward");
  const reverse = document.getElementById("video-reverse");

  forward?.addEventListener("ended", () => {
    forward.classList.add("hidden");
    reverse.classList.remove("hidden");
    reverse.currentTime = 0;
    reverse.play();
  });

  reverse?.addEventListener("ended", () => {
    reverse.classList.add("hidden");
    forward.classList.remove("hidden");
    forward.currentTime = 0;
    forward.play();
  });

  console.debug("İleri-Geri video döngüsü başlatıldı.");
});
