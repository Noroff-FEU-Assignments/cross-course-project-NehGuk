const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const urlFeaturedWatch = `https://henrikugler.no/cmscaapi/wp-json/wc/v3/products/${id}?consumer_key=ck_4ee7eb518ecca82639976d69725b240eca7cd1e5&consumer_secret=cs_3ab719e026712e212e3eeefdb0f8a25ec4c3326d&per_page=20`;
const featuredContainer = document.querySelector(".featured-container");
const loader = document.querySelector(".loader");

async function getSelectedFilm() {
  try {
    const res = await fetch(urlFeaturedWatch);
    const films = await res.json();

    loader.style.display = "none";

    function createHtml() {

      featuredContainer.innerHTML = "";
        
      for (let i = 0; i < 1; i++) {
    
        featuredContainer.innerHTML += `
          
          <div class="grid-item title">
                <h1>Watch now</h1>
              </div>
              <div class="grid-item picture">
                <img src="${films.images[1].src}" alt="Movie scene from The Green Lotus">
              </div>
              <div class="grid-item film-title">
                <h3>${films.name}</h3>
              </div>
              <div class="grid-item details">
              <p><strong>Director | </strong> ${films.attributes[1].options} </p>
              <p><strong>Country | </strong> ${films.attributes[0].options} </p>
              <p><strong>Year | </strong> ${films.attributes[2].options} </p>
                <p class="details__breadcrumbs">${films.tags[0].name}, ${films.tags[1].name}, ${films.tags[2].name}</p>
              </div>
              <div class="grid-item stars">
                <img src="/images/stars/star-filled-red.png" alt="Star">
                <img src="/images/stars/star-filled-red.png" alt="Star">
                <img src="/images/stars/star-filled-red.png" alt="Star">
                <img src="/images/stars/star-filled-red.png" alt="Star">
                <img src="/images/stars/star-outline-red.png" alt="Star">
              </div>
              <div class="grid-item synopsis">
                <p>${films.description}</p>
              </div>
              <div class="grid-item price">
                <p id="film-price">Price: <strong>${films.price} NOK</strong></p>
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
    createHtml();

    function makeCtaDynamic() {

      const ctaPayPerView = document.querySelector(".cta-pay-per-view");
      const ctaConfirm = document.querySelector(".cta-confirm");
      const ctaWatchNow = document.querySelector(".cta-watch-now");
      const price = document.querySelector("#film-price");
      const paymentMethod = document.querySelector("#payment-method");
    
      ctaPayPerView.onclick = function() {
      ctaPayPerView.style.display = "none";
      ctaConfirm.style.display = "block";
      paymentMethod.style.display = "block";
      }
    
      ctaConfirm.onclick = function() {
      ctaConfirm.style.display = "none";
      ctaWatchNow.style.display = "block";
      price.style.display = "none";
      paymentMethod.style.display = "none";
      }
    }
    makeCtaDynamic();
    

  }
  catch(error) {
    console.log("An error has occurred.");
  }
  
}

getSelectedFilm();














/* const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const urlFeaturedWatch = `https://henrikugler.no/cmscaapi/wp-json/wc/v3/products/${id}?consumer_key=ck_4ee7eb518ecca82639976d69725b240eca7cd1e5&consumer_secret=cs_3ab719e026712e212e3eeefdb0f8a25ec4c3326d&per_page=20`;
const featuredContainer = document.querySelector(".featured-container");

async function getSelectedFilm() {
  try {
    const res = await fetch(urlFeaturedWatch);
    const films = await res.json();
    
    featuredContainer.innerHTML = "";
    
    for (let i = 0; i < 1; i++) {

      featuredContainer.innerHTML += `
        
        <div class="grid-item title">
              <h1>Watch now</h1>
            </div>
            <div class="grid-item picture">
              <img src="${films.images[1].src}" alt="Movie scene from The Green Lotus">
            </div>
            <div class="grid-item film-title">
              <h3>${films.name}</h3>
            </div>
            <div class="grid-item details">
            <p><strong>Director | </strong> ${films.attributes[1].options} </p>
            <p><strong>Country | </strong> ${films.attributes[0].options} </p>
            <p><strong>Year | </strong> ${films.attributes[2].options} </p>
              <p class="details__breadcrumbs">${films.tags[0].name}, ${films.tags[1].name}, ${films.tags[2].name}</p>
            </div>
            <div class="grid-item stars">
              <img src="/images/stars/star-filled-red.png" alt="Star">
              <img src="/images/stars/star-filled-red.png" alt="Star">
              <img src="/images/stars/star-filled-red.png" alt="Star">
              <img src="/images/stars/star-filled-red.png" alt="Star">
              <img src="/images/stars/star-outline-red.png" alt="Star">
            </div>
            <div class="grid-item synopsis">
              <p>${films.description}</p>
            </div>
            <div class="grid-item price">
              <p id="film-price">Price: <strong>${films.price} NOK</strong></p>
              <p id="payment-method">Payment method: Visa **** 8725</p>
            </div>
            <div class="grid-item cta">
              <p><button class="cta-pay-per-view">Pay per view</button></p>
              <p><button class="cta-confirm">Confirm</button></p>
              <p><button class="cta-watch-now">Watch now</button></p>
            </div>
        `;  
        // code to make the CTA dynamic
        const ctaPayPerView = document.querySelector(".cta-pay-per-view");
        const ctaConfirm = document.querySelector(".cta-confirm");
        const ctaWatchNow = document.querySelector(".cta-watch-now");
        const price = document.querySelector("#film-price");
        const paymentMethod = document.querySelector("#payment-method");

        ctaPayPerView.onclick = function() {
        ctaPayPerView.style.display = "none";
        ctaConfirm.style.display = "block";
        paymentMethod.style.display = "block";
        }

        ctaConfirm.onclick = function() {
        ctaConfirm.style.display = "none";
        ctaWatchNow.style.display = "block";
        price.style.display = "none";
        paymentMethod.style.display = "none";
        }
    } 
  }
  catch(error) {
    console.log("An error has occurred.");
  }
  
}

getSelectedFilm(); */