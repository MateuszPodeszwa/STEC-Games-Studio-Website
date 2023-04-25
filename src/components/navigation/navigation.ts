// src/javascript/localScript.ts
export function test() {
    console.log("Test navigation.ts");
 }
 export function navAnimation() {
    console.log("navigation is working");
    const menu = document.getElementById("menu");
    if (menu) {
        const menuItems = document.querySelectorAll<HTMLElement>(".menu-item");
        menuItems.forEach((item: HTMLElement, index: number) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index.toString();
            }
        });
    }

 }