export const about_testing = ('about.js is working fine')

export function loadAbout() {
    const aboutDiv = document.createElement("div")
    aboutDiv.textContent = "About appending and all yeaaah"
    return aboutDiv
}