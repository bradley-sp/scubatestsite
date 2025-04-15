import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);

    // Replace <p> with <button> for Shop Now, while client can change text in button
    const cardsBodyDiv = li.children[1];
    const cardsBodyFirst = cardsBodyDiv.children[0];
    const cardsBodyFirstP = cardsBodyFirst.children[0];
    cardsBodyFirstP.outerHTML = `<button>${cardsBodyFirstP.textContent}</button>`;

  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
});
}
