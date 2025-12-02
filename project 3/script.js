document.addEventListener('DOMContentLoaded', () => {

  /* Smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = a.getAttribute('href');
      if (target.length > 1) {
        e.preventDefault();
        document.querySelector(target)?.scrollIntoView({behavior:'smooth'});
      }
    });
  });

  /* Live Search */
  const searchBar = document.getElementById('searchBar');
  const cards = document.querySelectorAll('.card');

  searchBar.addEventListener('input', () => {
    const q = searchBar.value.toLowerCase();
    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(q) ? "block" : "none";
    });
  });

  /* Favourite Toggle (saved in localStorage) */
  const favButtons = document.querySelectorAll('.fav-btn');

  favButtons.forEach((btn, i) => {
    const key = "fav" + i;

    // Load saved state
    if (localStorage.getItem(key) === "true") {
      btn.classList.add("active");
    }

    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      localStorage.setItem(key, btn.classList.contains("active"));
    });
  });

  /* Add to Cart popup */
  const popup = document.getElementById("cartPopup");
  const cartBtns = document.querySelectorAll('.cart-btn');

  cartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      popup.style.display = "block";
      setTimeout(() => popup.style.display = "none", 2000);
    });
  });

});
const browseCards = document.querySelectorAll(".browse-card");
const selectedCategory = document.getElementById("selectedCategory");

browseCards.forEach(card => {
  card.addEventListener("click", () => {

    // remove active from all
    browseCards.forEach(c => c.classList.remove("active"));

    // activate clicked one
    card.classList.add("active");

    // show text
    selectedCategory.textContent =
      "Selected Category: " + card.dataset.name;
  });
});
