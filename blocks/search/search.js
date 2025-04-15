import { loadScript } from '../../scripts/aem.js';
import { rootLink } from '../../scripts/scripts.js';
import { getConfigValue } from '../../scripts/configs.js';
export default function decorate(block) {
  // TODO
  //const searchBlock = document.querySelector('.search.block');
  const search = document.createRange().createContextualFragment(`
  <div class="search-wrapper tools-wrapper">
    <button type="button" class="search-button">Search</button>
    <div class="search-input search-panel tools-panel">
      <form action="/search" method="GET">
        <input id="search" type="search" name="q" placeholder="Search" />
        <div id="search_autocomplete" class="search-autocomplete"></div>
      </form>
    </div>
  </div>
  `);
  block.appendChild(search);
}



const searchContainer = document.querySelector('.search-wrapper');

const searchPanel = searchContainer.querySelector('.search-panel');

const searchButton = searchContainer.querySelector('.search-button');

const searchInput = searchContainer.querySelector('input');

const searchForm = searchContainer.querySelector('form');
console.log(searchForm);
//searchForm.action = rootLink('/search');



//async function toggleSearch(state) {
 // const show = state ?? !searchPanel.classList.contains('nav-tools-panel--show');
 // searchPanel.classList.toggle('nav-tools-panel--show', show);
    await import('./searchbar.js');
//}


