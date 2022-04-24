const urlTags = "https://henrikugler.no/cmscaapi/wp-json/wc/v3/products/tags?consumer_key=ck_4ee7eb518ecca82639976d69725b240eca7cd1e5&consumer_secret=cs_3ab719e026712e212e3eeefdb0f8a25ec4c3326d&per_page=90";
const categoriesContainer = document.querySelector(".categories-container");

async function getTags() {
    try {
        const response = await fetch(urlTags);
        const tags = await response.json();

        for (let i = 0; i < tags.length; i++) {
            
            categoriesContainer.innerHTML += `
                <a href="/search-results.html?id=${tags[i].id}&tagname=${tags[i].name}">
                    ${tags[i].name}
                </a>
            `;
        }
    }
    catch(error) {
        console.log("An error has occurred.");
    }
}
getTags();