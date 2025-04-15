//import { fetchPlaceholders } from '../../scripts/aem.js';
export default async function decorate(block) {
  const heroWrapper = document.querySelectorAll('.hero.block');
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('hero-inner');
  innerContainer.innerHTML = `
         <span>Don't miss out on pre-season gear!</span>
       <button>Shop Now!</button>
     `;
  block.append(innerContainer);
}
