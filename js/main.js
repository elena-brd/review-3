const btnWriteReview = document.getElementById('btn-write-review');
const cardAddReview = document.getElementById('card-add-review');

function disableReviewRatingPage() {
    const card = document.querySelector('#card-review');
    card.style.display = 'none';
    cardAddReview.style.position = 'unset';
}


btnWriteReview.addEventListener('click', disableReviewRatingPage);
