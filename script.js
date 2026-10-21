// Small touches only: local time in the rail, active section highlight, copy-email button.

const clock = document.getElementById("clock");
function tick() {
  if (!clock) return;
  const t = new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" })
    .format(new Date());
  clock.textContent = `${t} IST`;
}
tick();
setInterval(tick, 30_000);

document.getElementById("year").textContent = new Date().getFullYear();

const links = [...document.querySelectorAll(".rail nav a")];
const observer = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
  }
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));

document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = "Copied";
    } catch {
      btn.textContent = "Press Ctrl+C";
    }
    setTimeout(() => (btn.textContent = "Copy"), 1600);
  });
});
