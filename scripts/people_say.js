const quotesList = document.querySelectorAll('.review');
const slidesList = document.querySelectorAll('.reviews-controlls-button');
const arrowsList = document.querySelectorAll('.reviews-controlls-arrow');

let current = 0;

translateButtons();

function scrollByClick() {
    current = Number(this.id.split('-')[1]) - 1;

    quotesList[current].scrollIntoView({block: 'nearest'});
    changeButton();
    translateButtons();
}

function count() {
    this.id == 'left' ? current -= 1 : current += 1;
    
    if (current < 0) current = 4;
    if (current > 4) current = 0;

    quotesList[current].scrollIntoView({block: 'nearest'});
    changeButton();
    translateButtons();
}

function changeButton() {
    slidesList.forEach(function(button, i) {
        button.className = (i == current) ? 'reviews-controlls-button reviews-selected' : 'reviews-controlls-button';
    });
}

function translateButtons() {
    let translation;
    
    if (current == 0) translation = 200;
    if (current == 1) translation = 100

    if (current == 2) translation = 0;

    if (current == 3) translation = -100;
    if (current == 4) translation = -200;
    
    slidesList.forEach(button => button.style.transform = `translateX(${translation / 28}vw)`)
}

slidesList.forEach(button => button.onclick = scrollByClick);
arrowsList.forEach(button => button.onclick = count);
