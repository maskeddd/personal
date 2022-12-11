const colours = [
  "#f5e0dc",
  "#f2cdcd",
  "#f5c2e7",
  "#cba6f7",
  "#f38ba8",
  "#eba0ac",
  "#fab387",
  "#f9e2af",
  "#a6e3a1",
  "#94e2d5",
  "#89dceb",
  "#74c7ec",
  "#89b4fa",
  "#b4befe",
].sort(() => Math.random() - 0.5);

document.querySelectorAll("li").forEach((e, c) => {
  let l = document.createElement("span");
  (l.innerText = "•"),
    (l.style.color = colours[c % colours.length]),
    (l.style.fontSize = "1.5rem"),
    (l.style.marginRight = "0.5rem"),
    (l.style.userSelect = "none");
  e.insertAdjacentElement("afterbegin", l);
});
