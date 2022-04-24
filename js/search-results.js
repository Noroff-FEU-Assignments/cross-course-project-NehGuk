const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const tagName = params.get("tagname");
const urlTagSearch = `https://henrikugler.no/cmscaapi/wp-json/wc/v3/products?consumer_key=ck_4ee7eb518ecca82639976d69725b240eca7cd1e5&consumer_secret=cs_3ab719e026712e212e3eeefdb0f8a25ec4c3326d&per_page=90&tag=${id}`;
const topRatedContainer = document.querySelector(".top-rated-container");
const loader = document.querySelector(".loader");

async function getTagSearch() {
  try {
    const res = await fetch(urlTagSearch);
    const films = await res.json();
    
    loader.style.display = "none";
    topRatedContainer.innerHTML = "";

    for (let i = 0; i < films.length; i++) {
      
    topRatedContainer.innerHTML += `
        <div class="grid-item title">
            <h1><br><br><br><br>${tagName}</h1>
        </div>
        <div>
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

getTagSearch();
