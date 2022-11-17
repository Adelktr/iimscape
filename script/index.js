window.addEventListener("DOMContentLoaded", (event) => {
  let btn = document.getElementById("validate");
  let code = document.getElementById("code");
  let errorMsg = document.getElementsByClassName("error-msg")[0];
  let overlay = document.getElementsByClassName("overlay")[0];
  let close = document.getElementsByClassName("close")[0];
  let start = document.getElementById("start");

  let audio1 = document.createElement("audio");
  audio1.setAttribute("src", "./assets/background.mp3");

  let audio2 = document.createElement("audio");
  audio2.setAttribute("src", "./assets/effect.mp3");

  btn.addEventListener("click", () => {
    if (code.value === "IIMisK1ng") {
      overlay.style.visibility = "visible";
      overlay.style.opacity = 1;
      errorMsg.style.display = "none";
      audio1.pause();
      audio2.play();
    } else {
      errorMsg.style.display = "block";
    }
  });

  start.addEventListener("click", () => {
    audio1.play();
  });

  close.addEventListener("click", () => {
    overlay.style.visibility = "hidden";
    overlay.style.opacity = 0;
  });
});
