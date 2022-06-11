import "./index.html";
import "./style.scss";

// Lodash Debounce function 
import debounce from "lodash.debounce";

// Hide navbar elements
document.addEventListener("scroll", debounce(hideNavElements, 20));

function hideNavElements(e) {
    let navbar = document.querySelector(".navbar");
    let contacts = document.querySelector(".contact-info");
    // Mobile menu shifting
    let mobileMenu = document.querySelector(".navbar__nav");
    let backToTopBtn = document.querySelector(".back-to-top");

    if (window.pageYOffset > 200) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.8)";
        navbar.style.top = "0";
        contacts.style.display = "none";
        mobileMenu.style.top = "0";
        backToTopBtn.style.visibility = "visible";
    } 
    else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.top = "50px";
        contacts.style.display = "flex";
        mobileMenu.style.top = "-50px";
        backToTopBtn.style.visibility = "hidden";
    }
}

// Smooth scroll
let scrollButtons = document.querySelectorAll(".smooth-scroll");

for (let btn of scrollButtons) {
    btn.addEventListener("click", (e) => smoothScroll(e))
};

function smoothScroll(e) {
    e.preventDefault();
    let sectionClass = e.currentTarget.dataset.targetSection;
    let sectionCoords = document.querySelector(`.${sectionClass}`).offsetTop - 70;

    window.scrollTo({
        top: sectionCoords,
        behavior: "smooth"
    });
};

// Change navbar links active state on scroll
const navLinks = Array.from(document.querySelectorAll(".navbar__nav-link"));
window.addEventListener("scroll", debounce(changeActiveLink, 20));

function changeActiveLink(e) {
    let sections = document.querySelectorAll("body > section, .header, .footer");
    let currentSection = findCurrentSection(sections);
    let linksActiveStatus = checkLinksActiveStatus(currentSection);

    if (linksActiveStatus.correct != true) {
        if (linksActiveStatus.required) {
            for (let link of navLinks) {
                link.classList.remove("navbar__nav-link--active");
            }
            for (let link of navLinks) {
                if (link.dataset.targetSection == linksActiveStatus.target) {
                    link.classList.add("navbar__nav-link--active");
                }
            }
        } 
        else {
            for (let link of navLinks) {
                link.classList.remove("navbar__nav-link--active");
            }
        }
    }
}

function findCurrentSection(sections) {
    for (let section of sections) {
        let sectionBottom = section.offsetTop + section.offsetHeight;
        let screenTop = window.pageYOffset + 100;
        if (section.offsetTop <= screenTop && screenTop <= sectionBottom) {
            return section;
        }
    }
}

function checkLinksActiveStatus(currentSection) {
    let linksWithTarget = navLinks.filter((link) => link.dataset.hasOwnProperty("targetSection"));

    let activeStatus = {
        required: false,
        activeLink: undefined,
        correct: false,
    }

    // Does current section require an active link?
    for (let link of linksWithTarget) {
        let linkTarget = link.dataset.targetSection;
        if (currentSection.classList.contains(linkTarget)) {
            activeStatus.required = true;
            activeStatus.target = linkTarget;
            break;
        }
    }

    // Find active link if there is one
    activeStatus.activeLink = linksWithTarget.find((link) => {
        return link.classList.contains("navbar__nav-link--active");
    });

    // Do active link and current section match up?
    if (activeStatus.required != false && activeStatus.activeLink != undefined) {
        let link = activeStatus.activeLink;
        let linkTarget = link.dataset.targetSection;
        if (currentSection.classList.contains(linkTarget)) {
            activeStatus.correct = true;
        }
    }

    return activeStatus;
}

// Mobile nav menu 
const mobileButtons = document.querySelectorAll(".navbar__mobile-btn")

mobileButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => mobileMenu(e));
})

function mobileMenu(e) {
    e.preventDefault();

    let btn = e.currentTarget;
    let menu = document.querySelector(".navbar__nav");
    let isOpenBtn = btn.classList.contains("navbar__mobile-btn--open");

    isOpenBtn ? menu.style.display = "block" : menu.style.display = "none";
}

// Close mobile menu on click 
for (let link of navLinks) {
    link.addEventListener("click", (e) => closeMobileMenu(e));
}
function closeMobileMenu(e) {
    let link = e.currentTarget;
    if (link.classList.contains("navbar__nav-link--dropdown")) {
        return;
    }
    else {
        let menu = document.querySelector(".navbar__nav");

        if (menu.style.display == "block") {
            menu.style.display = "none";
        }
    }
}

// Open dropdown in mobile menu 

let dropdownLink = document.querySelector(".navbar__nav-link--dropdown");
dropdownLink.addEventListener("click", (e) => dropdownMenu(e));

function dropdownMenu(e) {
    e.preventDefault();
    // Return if desktop window
    let mobile = window.matchMedia("(max-width: 1100px)");
    if (mobile.matches != true) {
        return;
    }

    let menu = document.querySelector(".navbar__dropdown-menu");
    let isOpen = menu.style.display == "flex";

    if (isOpen) {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }
}

// Specials item changing
const specialsBtnHolder = document.querySelector(".specials__list");
specialsBtnHolder.addEventListener("click", (e) => changeItem(e));

function changeItem(e) {
    e.preventDefault();
    let currentBtn = e.target;
    let activeItemClass = "specials__item--active";
    let activeItem = document.querySelector(`.${activeItemClass}`);

    let isItemActive = currentBtn.dataset.specialsId == activeItem.dataset.specialsId;
    if (isItemActive) {
        return;
    }
    else {
        let activeBtnClass = "specials__btn--active";
        let activeBtn = document.querySelector(`.${activeBtnClass}`);
        let specialsItems = Array.from(document.querySelectorAll(".specials__item"));
        // Find the item matching to the button
        let targetedItem = specialsItems.find(item => currentBtn.dataset.specialsId == item.dataset.specialsId);

        activeBtn.classList.remove(activeBtnClass);
        currentBtn.classList.add(activeBtnClass);
        
        activeItem.classList.remove(activeItemClass);
        targetedItem.classList.add(activeItemClass);
    }
}
