// this code has been added to the end of the getFilm function, insude api-film-page.js.

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
