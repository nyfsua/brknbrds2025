// src/main.js

// Example product data (replace or extend as needed)
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
    // ─── Mobile Menu Toggle ──────────────────────────────
    const hamburger = document.querySelector('.hamburger-toggle');
    const navMenu   = document.querySelector('.nav_menu');
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }
  
    // ─── Search Toggle ────────────────────────────────────
    const searchLink  = document.getElementById('search-toggle');
    const navSearch   = document.querySelector('.nav-search');
    if (searchLink && navSearch) {
      const input = navSearch.querySelector('.search-input');
  
      searchLink.addEventListener('click', (e) => {
        e.preventDefault();           // stop the href="#search" jump
        navSearch.classList.toggle('open');
        if (navSearch.classList.contains('open') && input) {
          input.focus();
        }
      });
  
      // close if you click outside the search area
      document.addEventListener('click', (e) => {
        if (!navSearch.contains(e.target) && e.target !== searchLink) {
          navSearch.classList.remove('open');
        }
      });
    }
  
    // ─── Product Modal Logic ─────────────────────────────
    const modal    = document.getElementById('product-modal');
    const imgEl    = modal.querySelector('.modal-image');
    const titleEl  = modal.querySelector('.modal-title');
    const descEl   = modal.querySelector('.modal-desc');
  
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const pdata = PRODUCTS[id];
        if (!pdata) return;
  
        imgEl.src    = pdata.image;
        imgEl.alt    = pdata.title || '';
        titleEl.textContent = pdata.title  || '';
        descEl.textContent  = pdata.desc   || '';
        modal.classList.add('active');
      });
    });
  
    // close when clicking outside the modal content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  
    // close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.classList.remove('active');
      }
    });
  });
  