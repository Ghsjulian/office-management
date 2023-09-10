"use strict"
function ghs__(tag) {
    return document.querySelector(tag)
}
ghs__("#menu").onclick = (e) => {
    var sidebar = ghs__(".side-bar");
    var isopen = ghs__("#sidebar").getAttribute("open");
    if (isopen === "NO") {
        sidebar.classList.add("mobile-nav")
        ghs__("#menu").innerHTML = `
    <img src="src/icons/cancel.png" alt="home"/>`;
        ghs__("#sidebar").setAttribute("open", "YES");
    } else {
        sidebar.classList.remove("mobile-nav")
        ghs__("#menu").innerHTML = `
    <img src="src/icons/option.png" alt="home"/>
    `;
        ghs__("#sidebar").setAttribute("open", "NO");
    }
}