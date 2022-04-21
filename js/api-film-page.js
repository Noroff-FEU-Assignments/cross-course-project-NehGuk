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
            <h1>Watch now</h1>
          </div>
          <div class="grid-item picture">
            <img src="/images/film-main-features/feature1.jpg" alt="Movie scene from The Green Lotus">
          </div>
          <div class="grid-item film-title">
            <h3>The Green Lotus </h3>
          </div>
          <div class="grid-item details">
            <p><strong>Director | </strong> Txai Aquino</p>
            <p><strong>Country | </strong> Brazil</p>
            <p class="details__breadcrumbs">Comedy > Animation > Scifi</p>
          </div>
          <div class="grid-item stars">
            <img src="/images/stars/star-filled-red.png" alt="Star">
            <img src="/images/stars/star-filled-red.png" alt="Star">
            <img src="/images/stars/star-filled-red.png" alt="Star">
            <img src="/images/stars/star-filled-red.png" alt="Star">
            <img src="/images/stars/star-outline-red.png" alt="Star">
          </div>
          <div class="grid-item synopsis">
            <p>In the magical world of Zendikar, a sequence of misterious events was about to change Thassa's life forever. After an evil spell cast by her twin sister, she could no longer speak her mother language -- and the dramatic nature of her emotional life would reach new heights in the year of 2318.</p>
          </div>
          <div class="grid-item price">
            <p id="film-price">Price: <strong>60 NOK</strong></p>
            <p id="payment-method">Payment method: Visa **** 8725</p>
          </div>
          <div class="grid-item cta">
            <p><button class="cta-pay-per-view">Pay per view</button></p>
            <p><button class="cta-confirm">Confirm</button></p>
            <p><button class="cta-watch-now">Watch now</button></p>
          </div>
    `;
  }
}

getFeaturedFilms();
