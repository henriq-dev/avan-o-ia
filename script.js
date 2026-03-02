const items = document.querySelectorAll(".timeline-item");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));

const filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    items.forEach(item => {
      item.style.display =
        filter === "all" || item.dataset.period === filter
        ? "block" : "none";
    });
  });
});

const modal = document.querySelector(".modal");
const modalText = document.getElementById("modal-text");
document.querySelectorAll(".details-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalText.innerText = btn.parentElement.querySelector("p").innerText;
  });
});

document.querySelector(".close").onclick = () => modal.style.display = "none";

window.onscroll = () => {
  document.getElementById("topBtn").style.display =
    window.scrollY > 300 ? "block" : "none";
};

document.getElementById("topBtn").onclick = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });
