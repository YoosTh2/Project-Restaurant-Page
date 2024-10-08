export const home_testing = ("home.js is working fine")

export function loadHome() {
    const homeDiv = document.createElement("div")
    homeDiv.textContent = "Home appending and all yeaaah"
    return homeDiv
}