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
  // …more product entries here
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('product-modal');
  const imgEl = modal.querySelector('.modal-image');
  const titleEl = modal.querySelector('.modal-title');
  const descEl = modal.querySelector('.modal-desc');
  const closeBtn = modal.querySelector('.modal-close');
  const addBtn = modal.querySelector('.btn-add-to-cart');

  // open modal when product card is clicked
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

