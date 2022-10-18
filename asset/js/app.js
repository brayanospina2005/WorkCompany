document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("cardes")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }
  const close = document.querySelector(".close");
  const open = document.querySelector(".ham");
  const menu = document.querySelector(".menu");
  close.addEventListener("click", () => {
    menu.style.visibility = "hidden";
  });
  open.addEventListener("click", () => {
    menu.style.visibility = "visible";
  });