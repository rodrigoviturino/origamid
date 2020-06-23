export default function initDropdownMenu() {}

const dropdownMenus = document.querySelectorAll("[data-dropdown]");

dropdownMenus.forEach((menu) => {
  ["touchStart", "click"].forEach((userEvent) => {
    menu.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("activeMenu");
}
