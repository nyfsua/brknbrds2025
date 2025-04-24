// modules.js

// custom code by sfyn

// src/skelet-master/js/modules.js

class SearchEngine extends HTMLElement {
    constructor() {
      super();
      // Attach shadow DOM
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this._render();
      this._attachListeners();
    }
  
    _render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            --input-width: 0;
            --input-padding: 0;
            display: flex;
            align-items: center;
            position: relative;
          }
          .search-toggle {
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
          }
          .search-form {
            margin: 0;
          }
          .search-input {
            width: var(--input-width);
            opacity: 0;
            padding: var(--input-padding);
            border: 1px solid #CCC;
            border-radius: 4px;
            font-family: inherit;
            font-size: 1rem;
            transition: 
              width 0.3s ease, 
              opacity 0.2s ease 0.1s, 
              padding 0.3s ease;
            margin-left: 0.5rem;
          }
          :host(.open) .search-input {
            --input-width: 200px;
            --input-padding: 0.25rem 0.5rem;
            opacity: 1;
          }
        </style>
        <button class="search-toggle" aria-label="search">🔍</button>
        <form action="/search" method="GET" class="search-form">
          <input 
            type="search" 
            name="q" 
            class="search-input" 
            placeholder="Search…" 
            aria-label="Site search"
          />
        </form>
      `;
    }
  
    _attachListeners() {
      const toggle = this.shadowRoot.querySelector('.search-toggle');
      const input  = this.shadowRoot.querySelector('.search-input');
  
      toggle.addEventListener('click', () => {
        this.classList.toggle('open');
        if (this.classList.contains('open')) {
          input.focus();
        }
      });
  
      // Close when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.contains(e.target) && this.classList.contains('open')) {
          this.classList.remove('open');
        }
      });
    }
  }
  
  // Define the custom element
  customElements.define('search-engine', SearchEngine);
  