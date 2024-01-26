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
var mediaCardImageCounter = 1;
const ammountOfImagesInMediaCard = 11;
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


function main() {
    // Calculate current age (hover profile picture)
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();
    document.getElementById("simon").title = Math.floor((new Date() - new Date("1999-06-25")) / 1000 / 60 / 60 / 24 / 365) + " Years Old";

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
    document.querySelector(".button").addEventListener("click", burgerMenuClick);
    document.getElementById("arrowleft").addEventListener("click", leftArrowCardsClick);
    document.getElementById("arrowright").addEventListener("click", rightArrowCardsClick);
    document.getElementById("arrowleftmedia").addEventListener("click", leftArrowMediaDesignCardClick);
    document.getElementById("arrowrightmedia").addEventListener("click", rightArrowMediaDesignCardClick);
    document.getElementById("close").addEventListener("click", closeOpenedCardClick);

    document.getElementById("toggleCardsDiv2").addEventListener("click", toggleCards);
    document.getElementById("toggleCardText").addEventListener("click", toggleCards);

    var cardElements = document.getElementsByClassName("cards");
    for (var i = 0; i < ammountOfAllCards; i++) {
        cardElements[i].addEventListener("click", openCardClick);
    }

    // Left cards arrow
    if (rightClickedCards === 0) {
        const arrowLeft = document.getElementById("arrowleft");
        arrowLeft.style.opacity = "25%";
        arrowLeft.style.cursor = "default";
    }
    rightArrowCardsClick();
    leftArrowCardsClick();
}

function toggleCards() {
    if (toggleCardState === 3) {
        toggleCardState = 0;
    } else {
        toggleCardState++;
    }
    var toggler = document.getElementById("toggleCardsDiv3");
    var toggleImage = document.getElementById("toggleCardText");
    
    if (toggleCardState === 0) {
        toggler.style.marginLeft = "0%";
        toggler.style.width = "2vh";
        toggleImage.src = "img/card_all.png"
    } else if (toggleCardState === 1) {
        toggler.style.marginLeft = "0%";
        toggler.style.width = "4vh";
        toggleImage.src = "img/card_personal.png"
    } else if (toggleCardState === 2) {
        toggler.style.marginLeft = "37%";
        toggler.style.width = "4vh";
        toggleImage.src = "img/card_uni.png"
    } else if (toggleCardState === 3) {
        toggler.style.marginLeft = "75%";
        toggler.style.width = "4vh";
        toggleImage.src = "img/card_work.png"
    }

    var personalCard = document.querySelectorAll(".personalCard");
    var uniCard = document.querySelectorAll(".uniCard");
    var styleCards = document.querySelectorAll(".cardsAllForGeneralStyles");

    
    rightClickedCards = 0;

    if (toggleCardState === 0) {

        websiteCard.id = "card1";
        mediaDesignCard.id = "card2";
        meetCard.id = "card3";
        teachingCard.id = "card4";
        quartoCard.id = "card5";
        musicCard.id = "card6";
        chromeCard.id = "card7";
        showerCard.id = "card8";
        rememoryCard.id = "card9";
        iotCard.id = "card10";

        styleCards.forEach(function(card) {
            card.classList.add('cards');
        });
    }

    if (toggleCardState === 1) {

        personalCard.forEach(function(card) {
            card.classList.add('cards');
            card.style.visibility = "visible";
            card.style.display = "inline-flex";
        });
        uniCard.forEach(function(card) {
            card.classList.remove('cards');
            card.style.visibility = "hidden";
            card.style.display = "none";
        });

        websiteCard.id = "card1";
        mediaDesignCard.id = "card2";
        quartoCard.id = "card3";
        musicCard.id = "card4";
        chromeCard.id = "card5";

        meetCard.id = "ignore";
        teachingCard.id = "ignore";
        showerCard.id = "ignore";
        rememoryCard.id = "ignore";
        iotCard.id = "ignore";
    }

    if (toggleCardState === 2) {

        personalCard.forEach(function(card) {
            card.classList.remove('cards');
            card.style.visibility = "hidden";
            card.style.display = "none";
        });
        uniCard.forEach(function(card) {
            card.classList.add('cards');
            card.style.visibility = "visible";
            card.style.display = "inline-flex";
        });

        meetCard.id = "card1";
        teachingCard.id = "card2";
        showerCard.id = "card3";
        rememoryCard.id = "card4";
        iotCard.id = "card5";

        websiteCard.id = "ignore";
        mediaDesignCard.id = "ignore";
        quartoCard.id = "ignore";
        musicCard.id = "ignore";
        chromeCard.id = "ignore";
    }

    if (toggleCardState === 3) {

        websiteCard.id = "card1";
        mediaDesignCard.id = "card2";
        meetCard.id = "card3";
        teachingCard.id = "card4";
        quartoCard.id = "card5";
        musicCard.id = "card6";
        chromeCard.id = "card7";
        showerCard.id = "card8";
        rememoryCard.id = "card9";
        iotCard.id = "card10";

        styleCards.forEach(function(card) {
            card.classList.add('cards');
        });
    }

    

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
    rightArrowCardsClick();
    rightArrowCardsClick();
    rightArrowCardsClick();
    rightArrowCardsClick();
    rightArrowCardsClick();
    rightArrowCardsClick();
    leftArrowCardsClick();
    leftArrowCardsClick();
    leftArrowCardsClick();
    leftArrowCardsClick();
    leftArrowCardsClick();
    leftArrowCardsClick();
    
}

function burgerMenuClick() {
    const button = document.querySelector(".button");
    const rightDiv = document.getElementById("rightdiv");
    const burgerMenu = document.getElementById("burgermenu");
    const burgerButton = document.querySelector(".button_burger");

    if (burgerMenuClicked) {
        button.classList.remove("clicked");
        rightDiv.style.backgroundColor = rootStyle.getPropertyValue("--colright");
        burgerMenu.style.opacity = "0%";
        burgerMenu.style.visibility = "hidden";
        burgerMenu.style.display = "none";
        burgerButton.style.background = colors['--colright'];
    } else {
        button.classList.add("clicked");
        rightDiv.style.backgroundColor = rootStyle.getPropertyValue("--colbot");
        burgerMenu.style.opacity = "100%";
        burgerMenu.style.visibility = "visible";
        burgerMenu.style.display = "inline";
        burgerButton.style.background = colors['--colbot'];
    }

    burgerMenuClicked = !burgerMenuClicked;
}

function resetColorThemeButtons() {
    for (let i = 1; i <= 6; i++) {
        const colorButton = document.getElementById("c" + i);
        colorButton.style.cssText = `
            background-color: var(--scrolldark);
            height: 2vh;
            width: 2vh;
            color: white;
        `;
    }
}

function colorTheme1NoStore() {
    resetColorThemeButtons();

    colors = {
        '--colleft': '#313552',
        '--colright': '#B8405E',
        '--colup': '#2EB086',
        '--colbot': '#EEE6CE'
    };
    Object.entries(colors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    const rightDiv = document.getElementById("rightdiv");
    const c1 = document.getElementById("c1");
    const burgerButton = document.querySelector(".button_burger");

    rightDiv.style.backgroundColor = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    c1.style.cssText = `
        background-color: ${rootStyle.getPropertyValue("--colright")};
        height: 2.5vh;
        width: 2.5vh;
    `;
    
    burgerButton.style.background = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
}

function colorTheme1() {
    resetColorThemeButtons();

    colors = {
        '--colleft': '#313552',
        '--colright': '#B8405E',
        '--colup': '#2EB086',
        '--colbot': '#EEE6CE'
    };
    Object.entries(colors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    const rightDiv = document.getElementById("rightdiv");
    const c1 = document.getElementById("c1");
    const burgerButton = document.querySelector(".button_burger");

    rightDiv.style.backgroundColor = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    c1.style.cssText = `
        background-color: ${rootStyle.getPropertyValue("--colright")};
        height: 2.5vh;
        width: 2.5vh;
    `;
    
    burgerButton.style.background = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    
    window.localStorage.setItem('localStorageSavedColorTheme', 'colorTheme1');
}

function colorTheme2() {
    resetColorThemeButtons();

    colors = {
        '--colleft': '#534340',
        '--colright': '#bb9981',
        '--colup': '#c5d8a4',
        '--colbot': '#f4fcd9'
    };
    Object.entries(colors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    const rightDiv = document.getElementById("rightdiv");
    const c2 = document.getElementById("c2");
    const burgerButton = document.querySelector(".button_burger");

    rightDiv.style.backgroundColor = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    c2.style.cssText = `
        background-color: ${rootStyle.getPropertyValue("--colright")};
        height: 2.5vh;
        width: 2.5vh;
    `;
    
    burgerButton.style.background = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    
    window.localStorage.setItem('localStorageSavedColorTheme', 'colorTheme2');
}

function colorTheme3() {
    resetColorThemeButtons();

    colors = {
        '--colleft': '#03045E',
        '--colright': '#CAF0F8',
        '--colup': '#00B4D8',
        '--colbot': '#90E0EF'
    };
    Object.entries(colors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    const rightDiv = document.getElementById("rightdiv");
    const c3 = document.getElementById("c3");
    const burgerButton = document.querySelector(".button_burger");

    rightDiv.style.backgroundColor = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    c3.style.cssText = `
        background-color: ${rootStyle.getPropertyValue("--colleft")};
        height: 2.5vh;
        width: 2.5vh;
    `;
    
    burgerButton.style.background = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    
    window.localStorage.setItem('localStorageSavedColorTheme', 'colorTheme3');
}

function colorTheme4() {
    resetColorThemeButtons();

    colors = {
        '--colleft': '#524A4E',
        '--colright': '#FDEFF4',
        '--colup': '#FFC0D3',
        '--colbot': '#FF5C8D'
    };
    Object.entries(colors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    const rightDiv = document.getElementById("rightdiv");
    const c4 = document.getElementById("c4");
    const burgerButton = document.querySelector(".button_burger");

    rightDiv.style.backgroundColor = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    c4.style.cssText = `
        background-color: ${rootStyle.getPropertyValue("--colbot")};
        height: 2.5vh;
        width: 2.5vh;
        color: black;
    `;
    
    burgerButton.style.background = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    
    window.localStorage.setItem('localStorageSavedColorTheme', 'colorTheme4');
}

function colorTheme5() {
    resetColorThemeButtons();

    colors = {
        '--colleft': '#2C2E43',
        '--colright': '#FFD523',
        '--colup': '#595260',
        '--colbot': '#fff0ad'
    };
    Object.entries(colors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    const rightDiv = document.getElementById("rightdiv");
    const c5 = document.getElementById("c5");
    const burgerButton = document.querySelector(".button_burger");

    rightDiv.style.backgroundColor = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    c5.style.cssText = `
        background-color: ${rootStyle.getPropertyValue("--colright")};
        height: 2.5vh;
        width: 2.5vh;
        color: black;
    `;
    
    burgerButton.style.background = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    
    window.localStorage.setItem('localStorageSavedColorTheme', 'colorTheme5');
}

function colorTheme6() {
    resetColorThemeButtons();

    colors = {
        '--colleft': '#444941',
        '--colright': '#7FC8A9',
        '--colup': '#5F7A61',
        '--colbot': '#D5EEBB'
    };
    Object.entries(colors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    const rightDiv = document.getElementById("rightdiv");
    const c6 = document.getElementById("c6");
    const burgerButton = document.querySelector(".button_burger");

    rightDiv.style.backgroundColor = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    c6.style.cssText = `
        background-color: ${rootStyle.getPropertyValue("--colright")};
        height: 2.5vh;
        width: 2.5vh;
        color: black;
    `;
    
    burgerButton.style.background = burgerMenuClicked ? rootStyle.getPropertyValue("--colbot") : rootStyle.getPropertyValue("--colright");
    
    window.localStorage.setItem('localStorageSavedColorTheme', 'colorTheme6');
}

function leftArrowCardsClick() {
    const arrowLeft = document.getElementById("arrowleft");
    const arrowRight = document.getElementById("arrowright");

    var cardElements = [
        document.getElementById("card" + rightClickedCards),
        document.getElementById("card" + (1 + rightClickedCards)),
        document.getElementById("card" + (2 + rightClickedCards)),
        document.getElementById("card" + (3 + rightClickedCards))
    ];

    if (threeCard.matches) {
        cardElements[0].style.visibility = "visible";
        cardElements[0].style.display = "inline-flex";
        cardElements[1].style.visibility = "visible";
        cardElements[1].style.display = "inline-flex";
        cardElements[2].style.visibility = "visible";
        cardElements[2].style.display = "inline-flex";
        cardElements[3].style.visibility = "hidden";
        cardElements[3].style.display = "none";
        --rightClickedCards;
    }
    if (twoCard.matches && !oneCard.matches) {
        cardElements[0].style.visibility = "visible";
        cardElements[0].style.display = "inline-flex";
        cardElements[1].style.visibility = "visible";
        cardElements[1].style.display = "inline-flex";
        cardElements[2].style.visibility = "hidden";
        cardElements[2].style.display = "none";
        --rightClickedCards;
    }
    if (oneCard.matches) {
        cardElements[0].style.visibility = "visible";
        cardElements[0].style.display = "inline-flex";
        cardElements[1].style.visibility = "hidden";
        cardElements[1].style.display = "none";
        --rightClickedCards;
    }
    if (rightClickedCards === 0) {
        arrowLeft.style.opacity = "0%";
        arrowLeft.style.cursor = "default";
    } else {
        arrowRight.style.opacity = "100%";
        arrowRight.style.cursor = "pointer";
    }
}

function rightArrowCardsClick() {
    const arrowLeft = document.getElementById("arrowleft");
    const arrowRight = document.getElementById("arrowright");

    if (threeCard.matches && (3 + rightClickedCards) < ammountOfAllCards) {
        ++rightClickedCards;
        var cardElements = [
            document.getElementById("card" + rightClickedCards),
            document.getElementById("card" + (1 + rightClickedCards)),
            document.getElementById("card" + (2 + rightClickedCards)),
            document.getElementById("card" + (3 + rightClickedCards))
        ];
        cardElements[0].style.visibility = "hidden";
        cardElements[0].style.display = "none";
        cardElements[1].style.visibility = "visible";
        cardElements[1].style.display = "inline-flex";
        cardElements[2].style.visibility = "visible";
        cardElements[2].style.display = "inline-flex";
        cardElements[3].style.visibility = "visible";
        cardElements[3].style.display = "inline-flex";
        if (rightClickedCards === ammountOfAllCards - 3) {
            arrowRight.style.opacity = "0%";
            arrowRight.style.cursor = "default";
        }
    }
    if (twoCard.matches && (2 + rightClickedCards) < ammountOfAllCards && !oneCard.matches) {
        ++rightClickedCards;
        var cardElements = [
            document.getElementById("card" + rightClickedCards),
            document.getElementById("card" + (1 + rightClickedCards)),
            document.getElementById("card" + (2 + rightClickedCards)),
            document.getElementById("card" + (3 + rightClickedCards))
        ];
        cardElements[0].style.visibility = "hidden";
        cardElements[0].style.display = "none";
        cardElements[1].style.visibility = "visible";
        cardElements[1].style.display = "inline-flex";
        cardElements[2].style.visibility = "visible";
        cardElements[2].style.display = "inline-flex";
        if (rightClickedCards === ammountOfAllCards - 2) {
            arrowRight.style.opacity = "0%";
            arrowRight.style.cursor = "default";
        }
    }
    if (oneCard.matches && (1 + rightClickedCards) < ammountOfAllCards) {
        ++rightClickedCards;
        var cardElements = [
            document.getElementById("card" + rightClickedCards),
            document.getElementById("card" + (1 + rightClickedCards)),
            document.getElementById("card" + (2 + rightClickedCards)),
            document.getElementById("card" + (3 + rightClickedCards))
        ];
        cardElements[0].style.visibility = "hidden";
        cardElements[0].style.display = "none";
        cardElements[1].style.visibility = "visible";
        cardElements[1].style.display = "inline-flex";
        if (rightClickedCards === ammountOfAllCards - 1) {
            arrowRight.style.opacity = "0%";
            arrowRight.style.cursor = "default";
        }
    }
    if (rightClickedCards !== 0) {
        arrowLeft.style.opacity = "100%";
        arrowLeft.style.cursor = "pointer";
    }
}

function openCardClick() {
    cardID = this.classList;

    for (let i = 0; i < cardID.length; i++) {
        const className = cardID[i];
    
        if (className.endsWith("ForStyle")) {
            cardID = className;
        }
    }
    cardID = cardID.replace(new RegExp("ForStyle", "g"), "");

    openCardID = "open" + cardID;

    cardsOneToNine = document.getElementById("opencard" + cardID.slice(-1));
    if (cardID.length === 5) {
        cardsOneToNine.style.display = "inline-flex";
        cardsOneToNine.style.visibility = "visible";
        cardsOneToNine.style.opacity = "100%";
    }

    cardsTenToNinetyNine = document.getElementById("opencard" + cardID.slice(-2));
    if (cardID.length === 6) {
        cardsTenToNinetyNine.style.display = "inline-flex";
        cardsTenToNinetyNine.style.visibility = "visible";
        cardsTenToNinetyNine.style.opacity = "100%";
    }

    const arrowLeft = document.getElementById("arrowleft");
    const arrowRight = document.getElementById("arrowright");
    const arrowUp = document.getElementById("arrowup");
    const closeOpenedCardButton = document.getElementById("close");

    arrowLeft.style.visibility = "hidden";
    arrowLeft.style.opacity = "0%";
    arrowRight.style.visibility = "hidden";
    arrowRight.style.opacity = "0%";
    arrowUp.style.display = "none";
    arrowUp.style.visibility = "hidden";
    closeOpenedCardButton.style.display = "inline";
    closeOpenedCardButton.style.visibility = "visible";
    closeOpenedCardButton.style.opacity = "100%";
}

function closeOpenedCardClick() {
    const arrowLeft = document.getElementById("arrowleft");
    const arrowRight = document.getElementById("arrowright");
    const arrowUp = document.getElementById("arrowup");
    const closeOpenedCardButton = document.getElementById("close");
    const openCard = document.getElementById(openCardID);

    openCard.style.display = "none";
    openCard.style.visiblity = "hidden";
    openCard.style.opacity = "0%";

    arrowLeft.style.visibility = "visible";
    arrowRight.style.visibility = "visible";

    if (rightClickedCards === 0) {
        arrowLeft.style.opacity = "0%";
        arrowRight.style.opacity = "100%";
    } else {
        arrowLeft.style.opacity = "100%";
        arrowRight.style.opacity = "100%";
    }

    const lastCard = document.getElementById("card" + ammountOfAllCards);
    if (lastCard.style.visibility == "visible") {
        arrowRight.style.opacity = "0%";
    }

    closeOpenedCardButton.style.display = "none";
    closeOpenedCardButton.style.visibility = "hidden";
    closeOpenedCardButton.style.opacity = "0%";
    arrowUp.style.display = "inline";
    arrowUp.style.visibility = "visible";
}


function leftArrowMediaDesignCardClick() {
    const mediaImage = document.getElementById("mediadesigncarouselimage");
    if (mediaCardImageCounter > 1) {
        mediaCardImageCounter--;
        mediaImage.src = "img/opencards/mediadesign/" + mediaCardImageCounter + ".png";
    } else {
        mediaCardImageCounter = ammountOfImagesInMediaCard;
        mediaImage.src = "img/opencards/mediadesign/" + mediaCardImageCounter + ".png";
    }
}

function rightArrowMediaDesignCardClick() {
    const mediaImage = document.getElementById("mediadesigncarouselimage");
    if (mediaCardImageCounter < ammountOfImagesInMediaCard) {
        mediaCardImageCounter++;
        mediaImage.src = "img/opencards/mediadesign/" + mediaCardImageCounter + ".png";
    } else {
        mediaCardImageCounter = 1;
        mediaImage.src = "img/opencards/mediadesign/" + mediaCardImageCounter + ".png";
    }
}
