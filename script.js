const root = document.documentElement;
const time = document.querySelector("#time");
const toggle = document.querySelector(".Mode");
const hour24 = document.querySelector(".Hour24");
const hour12 = document.querySelector(".Hour12");
const spans = document.querySelectorAll("span");
toggle.addEventListener("click", () => {
  if (toggle.value === "Light") {
    toggle.value = "Dark";
    root.style.setProperty("--txt-clr", "#ffffff");
    root.style.setProperty("--back-clr", "#202020");
    root.style.setProperty(
      "--boxShadow-out",
      "  4px 4px 6px #171717, -4px -4px 6px #292929"
    );
    root.style.setProperty(
      "--boxShadow-in",
      " inset 5px 5px 7px #191919,  inset -5px -5px 7px #272727"
    );
  } else {
    toggle.value = "Light";
    root.style.setProperty("--txt-clr", "#272341");
    root.style.setProperty("--back-clr", "#e5e5e5");
    root.style.setProperty(
      "--boxShadow-out",
      "  -3px -3px 7px #ffffff73, 2px 2px 5px rgba(94, 104, 121, 0.288)"
    );
    root.style.setProperty(
      "--boxShadow-in",
      " inset -3px -3px 7px #ffffff73,inset 2px 2px 5px rgba(94, 104, 121, 0.288"
    );
  }
});
hour12.addEventListener("click", () => {
  hour24.style.setProperty("box-shadow", "var(--boxShadow-out)");
  hour12.style.setProperty("box-shadow", "var(--boxShadow-in)");
  hour12.style.setProperty("color", "var(--txt-fcs");
  hour24.style.setProperty("color", "var(--txt-clr)");
});
hour24.addEventListener("click", () => {
  hour12.style.setProperty("box-shadow", "var(--boxShadow-out)");
  hour24.style.setProperty("box-shadow", "var(--boxShadow-in)");
  hour24.style.setProperty("color", "var(--txt-fcs");
  hour12.style.setProperty("color", "var(--txt-clr)");
});
function first() {
  const format = time.getAttribute("data-format");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeStatus = hours >= 12 ? "PM" : "AM";
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (format === "12") {
    if (hours > 12) {
      hours = hours - 12;
    }
    time.textContent = `${hours}:${minutes}:${seconds} ${timeStatus}`;
  } else {
    time.textContent = `${hours}:${minutes}:${seconds}`;
  }

  setTimeout(first, 1000);
}
first();

spans.forEach((span) => {
  span.addEventListener("click", () => {
    const format = span.getAttribute("data-format");
    time.setAttribute("data-format", format);
    first();
  });
});
