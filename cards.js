var cursorPointer = "url('cursor_pointer.png'), pointer";
var cursorDefault = "url('cursor.png'), default";

let a_card_is_open = false;

const cardColors = {
    card1: "--cardwebdev",
    card2: "--cardmediadesign",
    card3: "--cardmeet",
    card4: "--cardteaching",
    card5: "--cardquarto",
    card6: "--cardmusic",
    card7: "--cardchromeextension",
    card8: "--cardshower",
    card9: "--cardrememory",
    card10: "--cardiot",
    card11: "--cardbmw",
    card12: "--cardrohde",
    card13: "--cardlivanova"
};

function getCSSVariableValue(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

function toggleCards() {
    if (toggleCardState === 3) {
        toggleCardState = 0;
    } else {
        toggleCardState++;
    }
    var toggler = document.getElementById("id_div_toggle_cardsgroup_lever_small");
    var toggleImage = document.getElementById("id_img_toggle_cardsgroup_text");
    
    if (toggleCardState === 0) {
        toggler.style.marginLeft = "0%";
        toggler.style.width = "3vh";
        toggler.style.borderRadius = "25px 25px 25px 25px";
        toggleImage.src = "img/card_all.png"
    } else if (toggleCardState === 1) {
        toggler.style.marginLeft = "0%";
        toggler.style.width = "6vh";
        toggler.style.borderRadius = "25px 25px 25px 25px";
        toggleImage.src = "img/card_personal.png"
    } else if (toggleCardState === 2) {
        toggler.style.marginLeft = "31.5%";
        toggler.style.width = "6vh";
        toggleImage.src = "img/card_uni.png"
        toggler.style.borderRadius = "25px 25px 25px 25px";
    } else if (toggleCardState === 3) {
        toggler.style.marginLeft = "63%";
        toggler.style.width = "6vh";
        toggler.style.borderRadius = "25px 25px 25px 25px";
        toggleImage.src = "img/card_work.png"
    }

    var allCards = document.querySelectorAll(".cardsAllForGeneralStyles");
    var personalCard = document.querySelectorAll(".personalCard");
    var uniCard = document.querySelectorAll(".uniCard");
    var workCard = document.querySelectorAll(".workCard");

    
    rightClickedCards = 0;

    // ALL CARDS
    if (toggleCardState === 0) {

        allCards.forEach(function(card) {
            card.classList.add('cards');
            card.style.visibility = "visible";
            card.style.display = "inline-flex";
        });

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
        bmwCard.id = "card11";
        rohdeCard.id = "card12";
        livaCard.id = "card13";
    }

    // PERSONAL CARDS
    if (toggleCardState === 1) {

        allCards.forEach(function(card) {
            card.classList.remove('cards');
            card.style.visibility = "hidden";
            card.style.display = "none";
        });

        personalCard.forEach(function(card) {
            card.classList.add('cards');
            card.style.visibility = "visible";
            card.style.display = "inline-flex";
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
        bmwCard.id = "ignore";
        rohdeCard.id = "ignore";
        livaCard.id = "ignore";
    }

    // UNI CARDS
    if (toggleCardState === 2) {

        allCards.forEach(function(card) {
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
        showerCard.id = "card2";
        rememoryCard.id = "card3";
        iotCard.id = "card4";

        websiteCard.id = "ignore";
        teachingCard.id = "ignore";
        mediaDesignCard.id = "ignore";
        quartoCard.id = "ignore";
        musicCard.id = "ignore";
        chromeCard.id = "ignore";
        bmwCard.id = "ignore";
        rohdeCard.id = "ignore";
        livaCard.id = "ignore";
    }

    // WORK CARDS
    if (toggleCardState === 3) {

        allCards.forEach(function(card) {
            card.classList.remove('cards');
            card.style.visibility = "hidden";
            card.style.display = "none";
        });
        
        workCard.forEach(function(card) {
            card.classList.add('cards');
            card.style.visibility = "visible";
            card.style.display = "inline-flex";
        });

        bmwCard.id = "card1";
        rohdeCard.id = "card2";
        livaCard.id = "card3";
        teachingCard.id = "card4";

        websiteCard.id = "ignore";
        mediaDesignCard.id = "ignore";
        meetCard.id = "ignore";
        quartoCard.id = "ignore";
        musicCard.id = "ignore";
        chromeCard.id = "ignore";
        showerCard.id = "ignore";
        rememoryCard.id = "ignore";
        iotCard.id = "ignore";
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

    cardReset()


}

function cardReset() {
    const arrowLeft = document.getElementById("id_img_all_cards_arrow_left");
    const arrowRight = document.getElementById("id_img_all_cards_arrow_right");

    var realCardsList = [];
    var allCards = document.querySelectorAll(".cardsAllForGeneralStyles");
    allCards.forEach(function(card) {
        if(card.id !== "ignore") {
            realCardsList.push(card);
        }
    });


    rightClickedCards = 0;

    if (threeCard.matches) {
        // the first three cards are visible from realCardsList
        // all other cards are hidden
        for (var i = 0; i < realCardsList.length; i++) {
            if (i < 3) {
                realCardsList[i].style.visibility = "visible";
                realCardsList[i].style.display = "inline-flex";
            } else {
                realCardsList[i].style.visibility = "hidden";
                realCardsList[i].style.display = "none";
            }
        }
    }
    if (twoCard.matches && !oneCard.matches) {
        // the first two cards are visible from realCardsList
        // all other cards are hidden
        for (var i = 0; i < realCardsList.length; i++) {
            if (i < 2) {
                realCardsList[i].style.visibility = "visible";
                realCardsList[i].style.display = "inline-flex";
            } else {
                realCardsList[i].style.visibility = "hidden";
                realCardsList[i].style.display = "none";
            }
        }
    }
    if (oneCard.matches) {
        // the first card is visible from realCardsList
        // all other cards are hidden
        for (var i = 0; i < realCardsList.length; i++) {
            if (i < 1) {
                realCardsList[i].style.visibility = "visible";
                realCardsList[i].style.display = "inline-flex";
            } else {
                realCardsList[i].style.visibility = "hidden";
                realCardsList[i].style.display = "none";
            }
        }
    }
    arrowLeft.style.opacity = "0%";
    arrowLeft.style.cursor = cursorDefault;

    arrowRight.style.opacity = "100%";
    arrowRight.style.cursor = cursorPointer;
}

function leftArrowCardsClick() {
    const arrowLeft = document.getElementById("id_img_all_cards_arrow_left");
    const arrowRight = document.getElementById("id_img_all_cards_arrow_right");    

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
        arrowLeft.style.cursor = cursorDefault;
    } else {
        arrowRight.style.opacity = "100%";
        arrowRight.style.cursor = cursorPointer;
    }
}

function rightArrowCardsClick() {
    const arrowLeft = document.getElementById("id_img_all_cards_arrow_left");
    const arrowRight = document.getElementById("id_img_all_cards_arrow_right");

    if (threeCard.matches && (3 + rightClickedCards) < ammountOfAllCards) {
        ++rightClickedCards;
        var cardElements = [
            document.getElementById("card" + rightClickedCards),
            document.getElementById("card" + (1 + rightClickedCards)),
            document.getElementById("card" + (2 + rightClickedCards)),
            document.getElementById("card" + (3 + rightClickedCards))
        ];

        console.log(cardElements);


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
            arrowRight.style.cursor = cursorDefault;
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
            arrowRight.style.cursor = cursorDefault;
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
            arrowRight.style.cursor = cursorDefault;
        }
    }
    if (rightClickedCards !== 0) {
        arrowLeft.style.opacity = "100%";
        arrowLeft.style.cursor = cursorPointer;
    }
}

function openCardClick() {
    a_card_is_open = true;

    document.body.style.overflow = "hidden";

    cardID = this.classList;

    for (let i = 0; i < cardID.length; i++) {
        const className = cardID[i];
    
        if (className.endsWith("ForStyle")) {
            cardID = className;
        }
    }
    cardID = cardID.replace(new RegExp("ForStyle", "g"), "");

    const goUp = document.getElementById('id_div_go_up');
    goUp.style.backgroundColor = getCSSVariableValue(cardColors[cardID]);

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

    const arrowLeft = document.getElementById("id_img_all_cards_arrow_left");
    const arrowRight = document.getElementById("id_img_all_cards_arrow_right");
    const arrowUp = document.getElementById("id_img_arrowup");
    const closeOpenedCardButton = document.getElementById("id_img_close_opencards_icon");

    arrowLeft.style.visibility = "hidden";
    arrowLeft.style.opacity = "0%";
    arrowRight.style.visibility = "hidden";
    arrowRight.style.opacity = "0%";
    arrowUp.style.display = "none";
    arrowUp.style.visibility = "hidden";
    closeOpenedCardButton.style.display = "inline";
    closeOpenedCardButton.style.visibility = "visible";
    closeOpenedCardButton.style.opacity = "100%";

    copyrighttext.style.marginLeft = "-0.7vw";
}

function closeOpenedCardClick() {
    a_card_is_open = false;
    const goUp = document.getElementById('id_div_go_up');
    goUp.style.backgroundColor = '';

    document.body.style.overflow = "auto";

    const arrowLeft = document.getElementById("id_img_all_cards_arrow_left");
    const arrowRight = document.getElementById("id_img_all_cards_arrow_right");
    const arrowUp = document.getElementById("id_img_arrowup");
    const closeOpenedCardButton = document.getElementById("id_img_close_opencards_icon");
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

    copyrighttext.style.marginLeft = "";
}


document.addEventListener("DOMContentLoaded", function() {
    const goUp = document.getElementById('id_div_go_up');

    for (let i = 1; i <= Object.keys(cardColors).length; i++) {
        const card = document.getElementById(`card${i}`);
        if (card) {
            card.addEventListener('mouseenter', function() {
                goUp.style.backgroundColor = getCSSVariableValue(cardColors[`card${i}`]);
            });
            card.addEventListener('mouseleave', function() {
                if (!a_card_is_open) {
                    goUp.style.backgroundColor = '';
                }
            });
            
        }
    }
});


