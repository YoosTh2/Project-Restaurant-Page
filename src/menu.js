export const menu_testing = ("menu.js is working fine")

export function loadMenu() {
    const menuDiv = document.createElement("div")
    menuDiv.textContent = "Menu appending and all yeaaah"
    return menuDiv
}