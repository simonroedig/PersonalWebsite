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

    const rightDiv = document.getElementById("id_div_profile_right");
    const c1 = document.getElementById("c1");
    const burgerButton = document.querySelector(".class_div_navbar_button_burger");

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

    const rightDiv = document.getElementById("id_div_profile_right");
    const c1 = document.getElementById("c1");
    const burgerButton = document.querySelector(".class_div_navbar_button_burger");

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

    const rightDiv = document.getElementById("id_div_profile_right");
    const c2 = document.getElementById("c2");
    const burgerButton = document.querySelector(".class_div_navbar_button_burger");

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

    const rightDiv = document.getElementById("id_div_profile_right");
    const c3 = document.getElementById("c3");
    const burgerButton = document.querySelector(".class_div_navbar_button_burger");

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

    const rightDiv = document.getElementById("id_div_profile_right");
    const c4 = document.getElementById("c4");
    const burgerButton = document.querySelector(".class_div_navbar_button_burger");

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

    const rightDiv = document.getElementById("id_div_profile_right");
    const c5 = document.getElementById("c5");
    const burgerButton = document.querySelector(".class_div_navbar_button_burger");

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

    const rightDiv = document.getElementById("id_div_profile_right");
    const c6 = document.getElementById("c6");
    const burgerButton = document.querySelector(".class_div_navbar_button_burger");

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

function burgerMenuClick() {
    const button = document.querySelector(".class_div_navbar_button");
    const rightDiv = document.getElementById("id_div_profile_right");
    const burgerMenu = document.getElementById("id_p_profile_right_text");
    const burgerButton = document.querySelector(".class_div_navbar_button_burger");

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