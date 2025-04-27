// main.js

// custom code by sfyn (and chatgpt) 

// mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
  
    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.hamburger-toggle');
    const nav = document.querySelector('.nav-items');
  
    btn?.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });
  

  // Example product data (replace with your real data or fetch dynamically)
const PRODUCTS = {
  
  gxng: {
    image: 'src/img/products/gxng card.png',
    desc: 'The most perfect welcome. Join the Gang.'
  },
  nxstalgia: {
    image: 'src/img/products/nxstalgia card.png',
    desc: 'One thing one thing the past is the future, future is the past.'
  },
  giran: {
    image: 'src/img/products/giran card.png',
    desc: 'For they do not know thou art Giran.'
  },

  steeze01: {
    image: 'src/img/products/steeze01 card.png',
    desc: 'Stay fly as you cruise the  streets of Lagos.'
  },
 
  legacy: {
    image: 'src/img/products/legacy card.png',
    desc: 'The Original. Our first board. Okanlawon.'
  },
  antislam01: {
    image: 'src/img/products/antislam card.png',
    desc: 'E no go make sense make phone dey crack every time you fall.'
  },
  // …add more product entries here
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('product-modal');
  const imgEl = modal.querySelector('.modal-image');
  const titleEl = modal.querySelector('.modal-title');
  const descEl = modal.querySelector('.modal-desc');
  const closeBtn = modal.querySelector('.modal-close');
  const addBtn = modal.querySelector('.btn-add-to-cart');

  // Open modal when a product card is clicked
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const pdata = PRODUCTS[id];
      if (!pdata) return;

      imgEl.src = pdata.image;
      imgEl.alt = pdata.title;
      titleEl.textContent = pdata.title;
      descEl.textContent = pdata.desc;

      modal.classList.add('active');
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Add to Cart button (replace with your cart logic)
  addBtn.addEventListener('click', () => {
    alert(`Added "${titleEl.textContent}" to cart!`);
    modal.classList.remove('active');
  });

  // Close if user clicks outside modal-content
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});



closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});


addBtn.addEventListener('click', () => {
  alert(`Added "${titleEl.textContent}" to cart!`);
  modal.classList.remove('active');
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  // Grab all the toggles
  document.querySelectorAll('.search-toggle').forEach(toggle => {
    const navSearch = toggle.closest('.nav-search');
    const input     = navSearch.querySelector('.search-input');

    // If either is missing, bail out for that instance
    if (!navSearch || !input) return;

    // Toggle open/closed
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();               // don’t let the document-click listener immediately close it
      navSearch.classList.toggle('open');
      if (navSearch.classList.contains('open')) {
        input.focus();
      }
    });
  });

  // Close when clicking outside any open search
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-search.open').forEach(n => {
      n.classList.remove('open');
    });
  });
});

// src/main.js
document.addEventListener('DOMContentLoaded', () => {
  // ─── Search Toggle ────────────────────────────────────
  const searchLink = document.getElementById('search-toggle');
  if (searchLink) {
    searchLink.addEventListener('click', (e) => {
      e.preventDefault(); // stop href="#search"
      const li = searchLink.closest('.nav-item-shop');
      const input = li.querySelector('.search-input');

      li.classList.toggle('open');
      if (li.classList.contains('open') && input) {
        input.focus();
      }
    });

    // click outside to close
    document.addEventListener('click', (e) => {
      const li = searchLink.closest('.nav-item-shop');
      if (li.classList.contains('open') && !li.contains(e.target)) {
        li.classList.remove('open');
      }
    });
  }
});



// capsule section js //
// Capsules click-through
document.querySelectorAll('.capsule-card').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.dataset.url;
    if (url) window.location.href = url;
  });
});
