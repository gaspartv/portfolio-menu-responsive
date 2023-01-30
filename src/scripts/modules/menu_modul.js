export class Menu {
    static toggleMenu() {
        const menutoggleHtml = document.querySelector(".menu__closed--transform")
        const bar1 = document.querySelector("#menu__transform1")
        const bar2 = document.querySelector("#menu__transform2")
        const bar3 = document.querySelector("#menu__transform3")
        const menuLinkHtml = document.querySelector(".menu__link")
        const menuSectionHtml = document.querySelector(".menu__section-2")

        menutoggleHtml.addEventListener("click", () => {
            menuLinkHtml.classList.toggle("transform")
            menuSectionHtml.classList.toggle("transform")
            bar1.classList.toggle("menu__closed--transform--1")
            bar2.classList.toggle("menu__closed--transform--2")
            bar3.classList.toggle("menu__closed--transform--3")
        })
    }
}