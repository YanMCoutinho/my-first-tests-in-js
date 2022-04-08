let show = true;
const testMenu = document.querySelector(".test-menu");

if (testMenu) {
    testMenu.addEventListener("click", () => {
        testMenu.classList.toggle("on", show);
        show = !show;
    })
}