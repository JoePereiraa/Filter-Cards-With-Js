const filterElement = document.querySelector('header input')
const cards = document.querySelectorAll('.cards li')
filterElement.addEventListener('input', filterCards)

//Make function filter

function filterCards() {
    if (filterElement.value != '') {
        let titleFound = false;

        for (let card of cards) {
            title = card.querySelector('h2')
            title = title.textContent.toLowerCase()
            filterText = filterElement.value.toLowerCase();

            if(title.includes(filterText)) {
                card.style.display = "block"
                titleFound = true;
            } else {
                card.style.display = "none"
            }
        }
    } else {
        for (let card of cards) {
            card.style.display = "block"
        }
    }
}