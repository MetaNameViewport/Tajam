const header = document.getElementsByTagName('header')[0];
const blocksList = document.getElementsByClassName('header-carousel-block');
const buttonsList = Array.from(document.getElementsByClassName('header-controlls-button'));
const navButtons = document.querySelectorAll('.header-nav button');

const aboutVideoHeight = document.getElementById('about-video').clientHeight;


const blocks = {
    'home': document.getElementById('home'),
    'about': document.getElementById('about'),
    'expertise': document.getElementById('expertise'),
    'teams': document.getElementById('teams'),
    'works': document.getElementById('works'),
    'peopleSay': document.getElementById('peopleSay'),
    'contact': document.getElementById('contact')
}

const arrayOfBlocks = Object.values(blocks);

function changeButtonsColor() {
    let scroll = window.scrollY;

    for (let block of arrayOfBlocks) {
        let blockHeight = (block.id == 'about') ?
        block.clientHeight + aboutVideoHeight : block.clientHeight;

        if (scroll > block.offsetTop-2 && scroll < block.offsetTop-2 + blockHeight) {
            navButtons.forEach(button => {
                button.style.color = (button.value == block.id) ?
                '#00e0d0' : 'white';
            })
        }
    }
}

function scrollToBlock() {
    let blockId = this.value;

    blocks[blockId].scrollIntoView();

    changeButtonsColor();
}

buttonsList.forEach(button => button.onclick = function() {
    blocksList[ Number(this.id.split('-')[2]) - 1 ].scrollIntoView({block: 'nearest'});
    buttonsList.forEach(button => button.className = (button.id == this.id) ?
    'header-controlls-button header-button-selected':
    'header-controlls-button');
});

navButtons.forEach(button => button.onclick = scrollToBlock)

window.addEventListener('scroll', function() {
    let scroll = this.window.scrollY;
    
    if (scroll >= this.window.innerHeight - header.clientHeight) {
        header.style.background = 'rgba(0, 0, 0, 0.5)'
    } else {
        header.style.background = 'transparent';
    }

    changeButtonsColor();
})
