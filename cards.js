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
        toggler.style.width = "2vh";
        toggler.style.borderRadius = "25px 25px 25px 25px";
        toggleImage.src = "img/card_all.png"
    } else if (toggleCardState === 1) {
        toggler.style.marginLeft = "0%";
        toggler.style.width = "6vh";
        toggler.style.borderRadius = "25px 25px 25px 25px";
        toggleImage.src = "img/card_personal.png"
    } else if (toggleCardState === 2) {
        toggler.style.marginLeft = "37%";
        toggler.style.width = "4vh";
        toggleImage.src = "img/card_uni.png"
        toggler.style.borderRadius = "25px 25px 25px 25px";
    } else if (toggleCardState === 3) {
        toggler.style.marginLeft = "63%";
        toggler.style.width = "6vh";
        toggler.style.borderRadius = "25px 25px 25px 25px";
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
        arrowLeft.style.cursor = "default";
    } else {
        arrowRight.style.opacity = "100%";
        arrowRight.style.cursor = "pointer";
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
}

function closeOpenedCardClick() {
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
}