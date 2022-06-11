import Filterizr from "filterizr";

// Menu
const options = {
  animationDuration: 0.5,
  callbacks: { 
    onFilteringStart: function() { },
    onFilteringEnd: function() { },
    onShufflingStart: function() { },
    onShufflingEnd: function() { },
    onSortingStart: function() { },
    onSortingEnd: function() { }
  },
  delay: 0,
  delayMode: 'progressive', 
  easing: 'ease',
  filter: 'all', 
  filterOutCss: { 
    opacity: 0,
    transform: 'scale(0.5)'
  },
  filterInCss: { 
    opacity: 1,
    transform: 'scale(1)'
  },
  gridItemsSelector: '.filtr-item',
  gutterPixels: 30,
  layout: 'sameWidth',
  multifilterLogicalOperator: 'or',
  setupControls: true,
  spinner: {
    enabled: false,
    fillColor: '#ffb03b',
    styles: {
      height: '75px',
      margin: '0 auto',
      width: '75px',
      'z-index': 2,
    },
  },
} 

const filterizr = new Filterizr(".menu__gallery", options)

// Menu buttons active state
let menu_btns = document.querySelector(".menu__btn-holder");
menu_btns.addEventListener("click", (e) => changeMenuBtn(e));

function changeMenuBtn(e) {
    let currentBtn = e.target;
    let activeClass = "menu__btn--active";

    if (currentBtn.classList.contains(activeClass)) {
        return;
    }
    else {
        let activeBtn = document.querySelector(`.${activeClass}`);
        activeBtn.classList.remove(activeClass);
        currentBtn.classList.add(activeClass);
    }
}
