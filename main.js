// Global Variables
const root = document.querySelector(':root');
const rootStyle = getComputedStyle(root);
var burgerMenuClicked = false;
const oneCard = window.matchMedia("(max-width: 1000px)");
const twoCard = window.matchMedia("(max-width: 1500px)");
const threeCard = window.matchMedia("(min-width: 1500px)");
var ammountOfAllCards;
var cardID;
var openCardID;
var rightClickedCards = 0;

var colors = {
    '--colleft': '#313552',
    '--colright': '#B8405E',
    '--colup': '#2EB086',
    '--colbot': '#EEE6CE'
};
var toggleCardState = 0;

var websiteCard;
var mediaDesignCard;
var meetCard;
var teachingCard;
var quartoCard;
var musicCard;
var chromeCard;
var showerCard;
var rememoryCard;
var iotCard;

var copyrighttext
var copyrighticon

function main() {
    copyrighttext = document.getElementById("id_div_copyright_space");
    copyrighticon = document.getElementById("id_img_copyright_icon");

    // Calculate current age (hover profile picture)
    document.getElementById("id_span_copyright_current_year").innerHTML = new Date().getFullYear();
    document.getElementById("id_img_profile_picture").title = Math.floor((new Date() - new Date("1999-06-25")) / 1000 / 60 / 60 / 24 / 365) + " Years Old";

    // Color Themes
    colorTheme1NoStore();
    if (localStorage.getItem('localStorageSavedColorTheme') == "colorTheme1") {
        colorTheme1();
    } else if (localStorage.getItem('localStorageSavedColorTheme') == "colorTheme2") {
        colorTheme2();
    } else if (localStorage.getItem('localStorageSavedColorTheme') == "colorTheme3") {
        colorTheme3();
    } else if (localStorage.getItem('localStorageSavedColorTheme') == "colorTheme4") {
        colorTheme4();
    } else if (localStorage.getItem('localStorageSavedColorTheme') == "colorTheme5") {
        colorTheme5();
    } else if (localStorage.getItem('localStorageSavedColorTheme') == "colorTheme6") {
        colorTheme6();
    }

    websiteCard = document.getElementById("card1");
    mediaDesignCard = document.getElementById("card2");
    meetCard = document.getElementById("card3");
    teachingCard = document.getElementById("card4");
    quartoCard = document.getElementById("card5");
    musicCard = document.getElementById("card6");
    chromeCard = document.getElementById("card7");
    showerCard = document.getElementById("card8");
    rememoryCard = document.getElementById("card9");
    iotCard = document.getElementById("card10");

    // Display X/Y on closed cards
    ammountOfAllCards = document.getElementsByClassName("cards").length;
    var ammountOfAllCardNumber = document.getElementsByClassName("cardNumber").length;
    var j = 0;
    for (var i = 0; i < ammountOfAllCardNumber; i++) {
        var current = document.getElementsByClassName("cardNumber")[i];
        if (current.parentElement.classList.contains("cards")) {
            current.innerHTML = j+1 + "|" + ammountOfAllCards;
            j++;
        }
    }

    // Event Listeners
    document.querySelector(".class_div_navbar_button").addEventListener("click", burgerMenuClick);
    document.getElementById("id_img_all_cards_arrow_left").addEventListener("click", leftArrowCardsClick);
    document.getElementById("id_img_all_cards_arrow_right").addEventListener("click", rightArrowCardsClick);
    document.getElementById("id_img_close_opencards_icon").addEventListener("click", closeOpenedCardClick);

    document.getElementById("id_div_toggle_cardsgroup_space_wrapper").addEventListener("click", toggleCards);

    var cardElements = document.getElementsByClassName("cards");
    for (var i = 0; i < ammountOfAllCards; i++) {
        cardElements[i].addEventListener("click", openCardClick);
    }

    // Left cards arrow
    if (rightClickedCards === 0) {
        const arrowLeft = document.getElementById("id_img_all_cards_arrow_left");
        arrowLeft.style.opacity = "25%";
        arrowLeft.style.cursor = "default";
    }
    rightArrowCardsClick();
    leftArrowCardsClick();
}







