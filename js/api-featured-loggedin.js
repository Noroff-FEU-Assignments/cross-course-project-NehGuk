
const params = new URLSearchParams(window.location.search);




const urlFeatured = "https://henrikugler.no/cmscaapi/wp-json/wc/v3/products?consumer_key=ck_4ee7eb518ecca82639976d69725b240eca7cd1e5&consumer_secret=cs_3ab719e026712e212e3eeefdb0f8a25ec4c3326d&per_page=20&category=34";
const featuredContainer = document.querySelector(".featured-container");

async function getFeaturedFilms() {
  const res = await fetch(urlFeatured);
  const films = await res.json();

  // empty the element before adding films
  featuredContainer.innerHTML = "";
  
  // loop over films
  for (let i = 0; i < 1; i++) {
      
    featuredContainer.innerHTML += `
        
    <div class="grid-item title">
            <h2>Featured</h2>
          </div>
          <div class="grid-item picture">
            <a href="/film-page.html">
            <img src="${films[i].images[1].src}" alt="Film scene: ${films[i].name}" />
            </a>
            
          </div>
          <div class="grid-item film-title">
            <h3>${films[i].name}</h3>
          </div>
          <div class="grid-item details">
            <p><strong>Director | </strong>${films[i].attributes[1].options}</p>
            <p><strong>Country | </strong>${films[i].attributes[0].options}</p>
            <p class="details__breadcrumbs">${films[i].tags[0].name}, ${films[i].tags[1].name}, ${films[i].tags[2].name}</p>
          </div>
          <div class="grid-item stars">
            <img src="/images/stars/star-filled-red.png" alt="Star">
            <img src="/images/stars/star-filled-red.png" alt="Star">
            <img src="/images/stars/star-filled-red.png" alt="Star">
            <img src="/images/stars/star-filled-red.png" alt="Star">
            <img src="/images/stars/star-outline-red.png" alt="Star">
          </div>
          <div class="grid-item arrow-left">
            <button class="button-arrow"><img src="/images/icons/arrow-left.png" alt="Arrow left: previous featured movie"></button>
          </div>
          <div class="grid-item arrow-right">
            <button class="button-arrow"><img src="/images/icons/arrow-right.png" alt="Arrow right: next featured movie"></button>
          </div>
    `;
  }
}

getFeaturedFilms();
