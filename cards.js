var cursorPointer = "url('cursor_pointer.png'), pointer";
var cursorDefault = "url('cursor.png'), default";

let isRoutingEnabled = false;

let a_card_is_open = false;

// Card ID to URL slug mapping
const cardSlugs = {
    'card1': 'webdevelopment',
    'card2': 'media-design',
    'card3': 'meet-prototype',
    'card4': 'teaching',
    'card5': 'quarto-game',
    'card6': 'music',
    'card7': 'chrome-extension',
    'card8': 'ecoshower',
    'card9': 'rememory',
    'card10': 'connectivitycontrol',
    'card11': 'bmw',
    'card12': 'rohde-schwarz',
    'card13': 'bsh',
    'card14': 'chordsync',
    'card15': 'sbin',
    'card16': 'songtreasure',
    'card17': 'pulsell',
    'card18': 'wacker-polysilicon',
    'card19': 'noise-scape',
    'card20': 'scent-connect',
    'card21': 'doggy-match',
    'card22': 'dartai',
    'card23': 'privacydeck',
    'card24': 'anodi'
};

// URL slug to card ID mapping
const slugToCard = {};
Object.keys(cardSlugs).forEach(cardId => {
    slugToCard[cardSlugs[cardId]] = cardId;
});

var cardAmmountInCategory = 0;

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
    card13: "--cardbsh",
    card14: "--cardchordsync",
    card15: "--cardsbin",
    card16: "--cardsongtreasure",
    card17: "--cardpulsell",
    card18: "--cardwacker",
    card19: "--noisescape",
    card20: "--scentconnect",
    card21: "--doggymatch",
    card22: "--dartai",
    card23: "--privacydeck",
    card24: "--anodi"
};

function getCSSVariableValue(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

function toggleCards(fromStartup = false) {
    if (typeof fromStartup === 'object' && fromStartup instanceof Event) {
        fromStartup = false; // Reset to default if it's an Event object
    }
    
    if (toggleCardState === 3) {
        toggleCardState = 0;
    } else {
        toggleCardState++;
    }

    if (fromStartup) {
        toggleCardState = 0;
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

    // FAVOURITE CARDS
    if (toggleCardState === 0) {

        allCards.forEach(function(card) {
            card.classList.add('cards');
            card.style.visibility = "visible";
            card.style.display = "inline-flex";
        });
        
        // set IDs
        websiteCard.id = "ignore";
        mediaDesignCard.id = "ignore";
        quartoCard.id = "ignore";
        chromeCard.id = "ignore";
        musicCard.id = "ignore";
        
        chordSyncCard.id = "card1";
        iotCard.id = "card4";
        pulsellCard.id = "card3";
        noiseCard.id = "card2";
        rememoryCard.id = "ignore";
        sbinCard.id = "ignore";
        songTreasureCard.id = "card5";
        showerCard.id = "ignore";
        meetCard.id = "ignore";
        scentCard.id = "ignore";        
        doggyMatchCard.id = "ignore";
        dartAICard.id = "ignore";
        privacyDeckCard.id = "ignore";

        bmwCard.id = "ignore";
        rohdeCard.id = "ignore";
        bshCard.id = "ignore";
        teachingCard.id = "ignore";
        wackerCard.id = "ignore";

        anodiCard.id = "ignore";

        
        // hide ignored cards
        allCards.forEach(function(card) {
            if (card.id === "ignore") {
                card.classList.remove('cards');
                card.style.visibility = "hidden";
                card.style.display = "none";
            }
        });
        

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
        quartoCard.id = "card6";
        chromeCard.id = "card7";
        musicCard.id = "card8";
        doggyMatchCard.id = "card3";
        dartAICard.id = "card4";
        anodiCard.id = "card5";

        meetCard.id = "ignore";
        teachingCard.id = "ignore";
        showerCard.id = "ignore";
        rememoryCard.id = "ignore";
        iotCard.id = "ignore";
        bmwCard.id = "ignore";
        rohdeCard.id = "ignore";
        bshCard.id = "ignore";
        chordSyncCard.id = "ignore";
        sbinCard.id = "ignore";
        songTreasureCard.id = "ignore";
        pulsellCard.id = "ignore";
        wackerCard.id = "ignore";
        noiseCard.id = "ignore";
        scentCard.id = "ignore";
        privacyDeckCard.id = "ignore";
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

        chordSyncCard.id = "card1";
        iotCard.id = "card2";
        pulsellCard.id = "card3";
        rememoryCard.id = "card7";
        noiseCard.id = "card5";
        sbinCard.id = "card6";
        privacyDeckCard.id = "card4";
        songTreasureCard.id = "card8";
        showerCard.id = "card9";
        meetCard.id = "card10";    
        scentCard.id = "card11"; 

        quartoCard.id = "ignore";
        chromeCard.id = "ignore";       
        doggyMatchCard.id = "ignore";
        dartAICard.id = "ignore";

        websiteCard.id = "ignore";
        teachingCard.id = "ignore";
        mediaDesignCard.id = "ignore";
        musicCard.id = "ignore";
        bmwCard.id = "ignore";
        rohdeCard.id = "ignore";
        bshCard.id = "ignore";
        wackerCard.id = "ignore";

        anodiCard.id = "ignore";
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

        bmwCard.id = "card3";
        rohdeCard.id = "card2";
        bshCard.id = "card1";
        teachingCard.id = "card4";
        wackerCard.id = "card5";

        websiteCard.id = "ignore";
        mediaDesignCard.id = "ignore";
        meetCard.id = "ignore";
        quartoCard.id = "ignore";
        musicCard.id = "ignore";
        chromeCard.id = "ignore";
        showerCard.id = "ignore";
        rememoryCard.id = "ignore";
        iotCard.id = "ignore";
        chordSyncCard.id = "ignore";
        sbinCard.id = "ignore";
        songTreasureCard.id = "ignore";
        pulsellCard.id = "ignore";
        noiseCard.id = "ignore";
        scentCard.id = "ignore";
        doggyMatchCard.id = "ignore";
        dartAICard.id = "ignore";
        privacyDeckCard.id = "ignore";
    }

    
    sortCards();
    cardReset();

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

    cardAmmountInCategory = calcCardAmmountInCategory();
}

function sortCards() {
    // Get the container div
    const container = document.getElementById('id_div_closed_cards_space_wrapper');
    
    // Get all card elements
    const cards = Array.from(container.getElementsByClassName('cardsAllForGeneralStyles'));

    const arrowLeft = document.getElementById("id_img_all_cards_arrow_left");
    const arrowRight = document.getElementById("id_img_all_cards_arrow_right");

    // Separate cards into those to be sorted and those to be ignored
    const sortableCards = [];
    const ignoredCards = [];

    cards.forEach(card => {
        if (card.id === 'ignore') {
            ignoredCards.push(card);
        } else {
            sortableCards.push(card);
        }
    });

    // Sort the sortable cards by their id (e.g., card1, card2, etc.)
    sortableCards.sort((a, b) => {
        const aId = parseInt(a.id.replace('card', ''), 10);
        const bId = parseInt(b.id.replace('card', ''), 10);
        return aId - bId;
    });

    // Clear the container
    container.innerHTML = '';

    container.appendChild(arrowLeft);

    // Append the sorted cards first
    sortableCards.forEach(card => {
        container.appendChild(card);
    });

    // Append the ignored cards at the end
    ignoredCards.forEach(card => {
        container.appendChild(card);
    });

    container.appendChild(arrowRight);
}

function calcCardAmmountInCategory() {
    const wrapper = document.getElementById('id_div_closed_cards_space_wrapper');
    const allCards = wrapper.getElementsByClassName('cardsAllForGeneralStyles');
    const ammountOfCardsInCategory = Array.from(allCards).filter(card => {
        return card.id !== 'ignore';
    });
    return ammountOfCardsInCategory.length;
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
    if (a_card_is_open) {
        return;
    }
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

        if (cardAmmountInCategory === 4) {
            arrowLeft.style.opacity = "0%";
            arrowLeft.style.cursor = cursorDefault;
            arrowRight.style.opacity = "100%";
            arrowRight.style.cursor = cursorPointer;
            --rightClickedCards;
            return;
        }
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
    if (a_card_is_open) {
        return;
    }
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

function openCardClick(event) {
    a_card_is_open = true;
    document.body.style.overflow = "hidden";

    const cardElement = event.currentTarget;
    // Access the class list
    const classList = cardElement.classList;
    // Find the class that starts with 'card' and ends with 'ForStyle'
    const targetClass = [...classList].find(cls => cls.startsWith('card') && cls.endsWith('ForStyle'));
    // Extract the card ID from the class name (e.g., 'card12ForStyle' => 'card12')
    const cardID = targetClass ? targetClass.slice(0, targetClass.indexOf('ForStyle')) : null;

    console.log(cardElement);
    console.log(cardID);

    openCardByID(cardID);
}

function openCardByID(cardID) {
    const goUp = document.getElementById('id_div_go_up');
    goUp.style.backgroundColor = getCSSVariableValue(cardColors[cardID]);

    openCardID = "open" + cardID;
    
    // Update URL with card slug
    updateURLForCard(cardID);

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

    const bg = document.getElementById("id_div_closed_cards_space_wrapper");
    bg.style.backgroundColor = getCSSVariableValue(cardColors[cardID]);
    document.getElementById("id_div_copyright_space").style.backgroundColor = getCSSVariableValue("--darkgrey");
    document.body.style.backgroundColor = getCSSVariableValue("--darkgrey");

    // Activate deferred media inside the opened card (restore iframe src)
    try {
        const openCardElement = document.getElementById("open" + cardID);
        if (openCardElement) {
            const deferredIframes = openCardElement.querySelectorAll('iframe[data-src]');
            deferredIframes.forEach(iframe => {
                if (!iframe.getAttribute('src')) {
                    iframe.setAttribute('src', iframe.getAttribute('data-src'));
                }
            });
        }
    } catch (e) {
        // no-op
    }
}



function closeOpenedCardClick() {
    closeOpenedCard();
}


function closeOpenedCard() {
    // Stop all videos from playing
    /*
    Do not use these out commented lines of code, because they are not working properly
    as soon as i deleted them, the issues that the hostory gets flooded with the webpage, and thus the user can't leave my webpage anymore (basically), 
    as there are so many entries of the same website, disappears.
    const videos = document.querySelectorAll('iframe')
    videos.forEach(i => {
        const source = i.src
        i.src = ''
        i.src = source
    })
    */
    
    a_card_is_open = false;
    
    // Reset URL to default
    resetURL();
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

    const bg = document.getElementById("id_div_closed_cards_space_wrapper");
    bg.style.backgroundColor = getCSSVariableValue("--colbg");
    document.getElementById("id_div_copyright_space").style.backgroundColor = getCSSVariableValue("--colbg");
    document.body.style.backgroundColor = getCSSVariableValue("--colbg");
}

function getStableCardIdFromElement(element) {
    if (!element || !element.classList) return null;

    // IDs of the closed-card DOM nodes get reassigned when toggling card groups.
    // The stable identifier is the "cardNNForStyle" class (e.g. card12ForStyle).
    const stableClass = Array.from(element.classList).find(cls => /^card\d+ForStyle$/.test(cls));
    if (!stableClass) return null;
    return stableClass.slice(0, stableClass.indexOf('ForStyle'));
}

document.addEventListener("DOMContentLoaded", function() {
    const goUp = document.getElementById('id_div_go_up');
    const cards = document.querySelectorAll('.cardsAllForGeneralStyles');

    cards.forEach(cardEl => {
        cardEl.addEventListener('mouseenter', function(event) {
            const stableCardId = getStableCardIdFromElement(event.currentTarget);
            if (stableCardId && cardColors[stableCardId]) {
                goUp.style.backgroundColor = getCSSVariableValue(cardColors[stableCardId]);
            }
        });

        cardEl.addEventListener('mouseleave', function() {
            if (!a_card_is_open) {
                goUp.style.backgroundColor = '';
            }
        });
    });
});

// URL handling functions
function updateURLForCard(cardID) {
    if (!isRoutingEnabled) return;

    const slug = cardSlugs[cardID];
    if (slug) {
        const newURL = window.location.pathname + '#' + slug;
        window.history.pushState({ card: cardID }, '', newURL);
    }
}

function resetURL() {
    if (!isRoutingEnabled) return;

    const newURL = window.location.pathname;
    window.history.pushState({}, '', newURL);
}

function openCardFromURL() {
    const hash = window.location.hash.substring(1); // Remove the #
    if (hash && slugToCard[hash]) {
        const cardID = slugToCard[hash];
        // Wait a bit for the page to load, then open the card
        setTimeout(() => {
            if (!a_card_is_open) {
                openCardByID(cardID);
                a_card_is_open = true;
                document.body.style.overflow = "hidden";
                // Scroll to bottom to show the opened card
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }, 1000);
    }
}

// Listen for URL changes
window.addEventListener('popstate', function(event) {
    if (a_card_is_open) {
        closeOpenedCard();
    }
    if (event.state && event.state.card) {
        setTimeout(() => {
            openCardFromURL();
        }, 100);
    }
});

// Initialize URL handling when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    openCardFromURL();
});


