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
var chordSyncCard;
var sbinCard;
var wackerCard;
var noiseCard;

var copyrighttext;
var copyrighticon;

function main() {
    copyrighttext = document.getElementById("id_div_copyright_space");

    // Defer heavy media in open cards so they don't block initial load
    initializeLazyMedia();

    // Initialize cards preloader
    initializeCardsPreloader();

    // Calculate current age (hover profile picture)
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
    bshCard = document.getElementById("card13");
    chordSyncCard = document.getElementById("card14");
    sbinCard = document.getElementById("card15");
    songTreasureCard = document.getElementById("card16");
    pulsellCard = document.getElementById("card17");
    wackerCard = document.getElementById("card18");
    noiseCard = document.getElementById("card19");
    scentCard = document.getElementById("card20");
    
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


     // Get the div element by ID
     document.getElementById("id_img_arrowdown").addEventListener("click", function() {
        // Scroll to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight, // Scroll to the maximum height of the body
            behavior: 'smooth' // Smooth scrolling animation
        });
    });

    // Get the div element by ID
    document.getElementById("id_img_arrowup").addEventListener("click", function() {
        // Scroll to the bottom of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    });


    document.getElementById("id_div_copyright_space").addEventListener("click", closeOpenedCardClick);
    document.getElementById("id_div_toggle_cardsgroup_space").addEventListener("click", closeOpenedCardClick);


    document.getElementById("id_div_footer_space").addEventListener("click", function(event) {
        if (event.target === this) {
            closeOpenedCardClick();

        }
    });

    document.getElementById("id_div_closed_cards_space_wrapper").addEventListener("click", function(event) {
        if (event.target === this) {
            closeOpenedCardClick();

        }
    });



    document.getElementById("id_div_go_up").addEventListener("click", function(event) {
        if (event.target === this) {
            closeOpenedCardClick();

        }
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

function initializeCardsPreloader() {
    const preloader = document.getElementById('id_div_cards_preloader');
    const cardsWrapper = document.getElementById('id_div_closed_cards_space_wrapper');
    
    if (!preloader || !cardsWrapper) return;
    
    // Get all card images (closed cards only) and enable lazy loading
    const cardImages = document.querySelectorAll('.cards img');
    cardImages.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
        }
    });
    let loadedImages = 0;
    const totalImages = cardImages.length;
    const minimumImagesToShow = Math.min(3, Math.max(1, totalImages));
    const startTime = performance.now();
    let hasShown = false;
    
    // If no images to load, show cards immediately
    if (totalImages === 0) {
        showCards();
        return;
    }
    
    // Function to show cards and hide preloader
    function showCards() {
        if (hasShown) return;
        hasShown = true;
        preloader.style.display = 'none';
        cardsWrapper.style.display = 'flex';
    }
    
    // Check if all images are already loaded
    function checkAllImagesLoaded() {
        loadedImages++;
        // Reveal early as soon as a couple of thumbnails are ready
        if (loadedImages >= minimumImagesToShow) showCards();
    }
    
    // Add event listeners to all card images
    cardImages.forEach(img => {
        if (img.complete) {
            checkAllImagesLoaded();
        } else {
            img.addEventListener('load', checkAllImagesLoaded);
            img.addEventListener('error', checkAllImagesLoaded); // Handle error cases too
        }
    });
    
    // Time-based early reveal: show after ~300ms regardless
    setTimeout(() => {
        if (!hasShown) showCards();
    }, 300);

    // Hard fallback: if something stalls, force show after 2s
    setTimeout(() => {
        if (!hasShown) showCards();
    }, 2000);
}

// Mark open-card media for lazy behavior and defer iframe loading until card open
function initializeLazyMedia() {
    // Lazy-load images inside open cards
    const openCardImages = document.querySelectorAll('.opencard img');
    openCardImages.forEach(img => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
        if (!img.hasAttribute('fetchpriority')) img.setAttribute('fetchpriority', 'low');
    });

    // Defer iframe src by moving to data-src and add lazy
    const openCardIframes = document.querySelectorAll('.opencard iframe');
    openCardIframes.forEach(iframe => {
        if (!iframe.hasAttribute('loading')) iframe.setAttribute('loading', 'lazy');
        if (iframe.hasAttribute('src') && !iframe.getAttribute('data-src')) {
            iframe.setAttribute('data-src', iframe.getAttribute('src'));
            iframe.removeAttribute('src');
        }
    });
}



