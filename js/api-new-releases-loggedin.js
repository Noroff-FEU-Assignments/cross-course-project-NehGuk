const urlNewReleases = "https://henrikugler.no/cmscaapi/wp-json/wc/v3/products?consumer_key=ck_4ee7eb518ecca82639976d69725b240eca7cd1e5&consumer_secret=cs_3ab719e026712e212e3eeefdb0f8a25ec4c3326d&per_page=20&category=33";
const newReleasesContainer = document.querySelector(".new-releases-container");

async function getNewReleases() {
  try {
    const res = await fetch(urlNewReleases);
    const films = await res.json();

    newReleasesContainer.innerHTML = "";
    
    for (let i = 0; i < 9; i++) {
        
      newReleasesContainer.innerHTML += `
          <div class="grid-item title">
              <h2>New Releases</h2>
          </div>
          <div class="grid-item">
            <a href="/film-page.html?id=${films[i].id}">
              <img src="${films[i].images[0].src}" alt="Film poster: ${films[i].name}" />
              </a>
          </div>
      `;
    }
  }
  catch(error) {
    console.log("An error has occurred.");
  }
}

getNewReleases();
