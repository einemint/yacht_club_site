let page = document.querySelector('.page');

let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');

let blogArticles = document.querySelectorAll('.blog-article');

let cards = document.querySelector('.cards');
let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');

let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

themeButtonDark.onclick = function () {
    themeButtonDark.classList.add('active');
    themeButtonLight.classList.remove('active');
    page.classList.add('dark');
}

themeButtonLight.onclick = function () {
    themeButtonDark.classList.remove('active');
    themeButtonLight.classList.add('active');
    page.classList.remove('dark');
}

fontButtonSansSerif.onclick = function () {
    fontButtonSansSerif.classList.add('active');
    fontButtonSerif.classList.remove('active');
    page.classList.remove('serif');
}

fontButtonSerif.onclick = function () {
    fontButtonSansSerif.classList.remove('active');
    fontButtonSerif.classList.add('active');
    page.classList.add('serif');
}

for (let blogArticle of blogArticles) {
    let moreButton = blogArticle.querySelector('button');

    moreButton.onclick = function () {
        blogArticle.classList.remove('short');
    }
}

cardViewButtonGrid.onclick = function () {
    cardViewButtonGrid.classList.add('active');
    cardViewButtonList.classList.remove('active');
    cards.classList.remove('list');
}

cardViewButtonList.onclick = function () {
    cardViewButtonGrid.classList.remove('active');
    cardViewButtonList.classList.add('active');
    cards.classList.add('list');
}

for (let activePreview of previews) {
    activePreview.onclick = function (evt) {
        evt.preventDefault();
        activePhoto.src = activePreview.href;

        let currentActivePhoto = document.querySelector('.active-item');
        currentActivePhoto.classList.remove('active-item');
        activePreview.classList.add('active-item');
    }
}