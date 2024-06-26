
const NAVBAR_MENU = {
    "Home": "./index.html",
    "About Us": {
      "Our Story": "./index.html#our-story",
      "Meet the Founders": "./index.html#founders"
    },
    "Current Project": "./project.html",
    "All Games": {
        "???": "./project.html"
    }
}

function create_navbar_link(text, link) {
    const LINK = document.createElement("a");
    LINK.href = link;
    LINK.innerText = text;
    return LINK;
}

document.addEventListener("DOMContentLoaded", () => {

    const NAVBAR = document.getElementById("navbar");
    
    const NAVBAR_LIST = document.createElement("ul");

    const SEARCH_BAR = document.createElement("input");
    SEARCH_BAR.type = "text";
    SEARCH_BAR.placeholder = "search";
    SEARCH_BAR.autocomplete = "off";
    SEARCH_BAR.id = "search-input"

    //NAVBAR.appendChild(SEARCH_BAR);

    for (const ITEM_NAME in NAVBAR_MENU) {
    
        const BTN = document.createElement("li");

        if (typeof NAVBAR_MENU[ITEM_NAME] === 'string') {
            //Creates a button with a hyper link
            BTN.appendChild(create_navbar_link(ITEM_NAME, NAVBAR_MENU[ITEM_NAME]));
      
        } else {

            BTN.classList.add("dropdown");
            const BTN_LINK = document.createElement("span");
            BTN_LINK.innerText = ITEM_NAME;
            BTN_LINK.classList.add("dropbtn");
            const CONTENT = document.createElement("div");
            CONTENT.classList.add("dropdown-content");

            for (const DROPDOWN_ITEM in NAVBAR_MENU[ITEM_NAME]) {
                DROPDOWN_BTN = create_navbar_link(DROPDOWN_ITEM, NAVBAR_MENU[ITEM_NAME][DROPDOWN_ITEM]);
                CONTENT.appendChild(DROPDOWN_BTN);
            }
            BTN.appendChild(BTN_LINK);
            BTN.appendChild(CONTENT);
        }
        NAVBAR_LIST.appendChild(BTN);
    }
    NAVBAR.appendChild(NAVBAR_LIST);

});

/* STATIC NAVBAR
<div id="navbar">
  <ul>
    <li><a href="./index.html">Home</a></li>
    <li class="dropdown"><a href="javascript:void(0)" class="dropbtn">About Us</a>
      <div class="dropdown-content">
        <a href="./index.html#our-story">Our Story</a>
        <a href="./index.html#founders">Meet the Founders</a>
      </div></li>
    <li><a href="./project.html">Current Project</a></li>
    <li class="dropdown"><a href="javascript:void(0)" class="dropbtn">All Games</a>
      <div class="dropdown-content">
        <a href="./project.html">???</a>
      </div></li>
    </ul>
  </div>
*/