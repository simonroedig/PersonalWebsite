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
var bmwCard;
var rohdeCard;
var livaCard;

var copyrighttext;
var copyrighticon;

function main() {
    copyrighttext = document.getElementById("id_div_copyright_space");

    // Calculate current age (hover profile picture)
    document.getElementById("id_span_copyright_current_year").innerHTML = new Date().getFullYear();
    document.getElementById("id_img_profile_picture").title = Math.floor((new Date() - new Date("1999-06-25")) / 1000 / 60 / 60 / 24 / 365) + " Years Old";

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
    bmwCard = document.getElementById("card11");
    rohdeCard = document.getElementById("card12");
    livaCard = document.getElementById("card13");

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

    oneCard.addEventListener('change', cardReset);
    twoCard.addEventListener('change', cardReset);
    threeCard.addEventListener('change', cardReset);

    toggleCards(true);


    // Touch swipe for cards
    let touchstartX = 0;
    let touchendX = 0;
    const swipeThreshold = 50; // Minimum horizontal distance in pixels to be considered a swipe

    function checkDirection() {
        const horizontalSwipe = Math.abs(touchendX - touchstartX);
        if (horizontalSwipe > swipeThreshold) {
            if (touchendX < touchstartX) {
                rightArrowCardsClick();
            }
            if (touchendX > touchstartX) {
                leftArrowCardsClick();
            }
        }
    }

    // Get the specific div by its ID
    const cardsSpace = document.getElementById('id_div_all_cards_space');

    cardsSpace.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    cardsSpace.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
    });
}


function burgerMenuClick() {
    const button = document.querySelector(".class_div_navbar_button_burger");
    const rightDiv = document.getElementById("id_div_profile_right");
    const burgerMenu = document.getElementById("id_p_profile_right_text");
    const burgerMenuWrapper = document.getElementById("id_p_profile_right_text_wrapper");
    const burgerButton = document.querySelector(".class_div_navbar_button_burger");

    if (burgerMenuClicked) {
        button.classList.remove("clicked");
        rightDiv.style.backgroundColor = rootStyle.getPropertyValue("--colright");
        burgerMenu.style.opacity = "0%";
        burgerMenu.style.visibility = "hidden";
        burgerMenu.style.display = "none";

        burgerMenuWrapper.style.opacity = "0%";
        burgerMenuWrapper.style.visibility = "hidden";
        burgerMenuWrapper.style.display = "none";
        burgerButton.style.background = rootStyle.getPropertyValue("--colright");
    } else {
        button.classList.add("clicked");
        rightDiv.style.backgroundColor = rootStyle.getPropertyValue("--colright2");
        burgerMenu.style.opacity = "100%";
        burgerMenu.style.visibility = "visible";
        burgerMenu.style.display = "inline";

        burgerMenuWrapper.style.opacity = "100%";
        burgerMenuWrapper.style.visibility = "visible";
        burgerMenuWrapper.style.display = "inline";
        burgerButton.style.background = rootStyle.getPropertyValue("--colright2");
    }

    burgerMenuClicked = !burgerMenuClicked;
}




