var price = document.querySelector('.price'),
    commission = document.querySelector('.commission'),
    galleryFee = document.querySelector('.gallery-fee'),
    total = document.querySelector('.total'),
    button = document.querySelector('.calculate');

function galleryCommission(artWorkPrice) {
    var total = artWorkPrice * (commission.value / 100);
    return total;
}

function galleryTotal(artWorkPrice) {
    var total = artWorkPrice * (1 + (commission.value / 100));
    return total;
}

button.addEventListener('click', function() {
    commisionTotal = Math.round(galleryCommission(price.value) * 10) / 10;
    galleryFee.innerHTML = commisionTotal.toFixed(2);
    galleryPrice = Math.round(galleryTotal(price.value) * 10) / 10;
    total.innerHTML = galleryPrice.toFixed(2);
});
