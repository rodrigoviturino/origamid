let tabMenu = document.querySelectorAll(".js-tabMenu li");
let tabContent = document.querySelectorAll(".js-tabContent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  // Callback
  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove("ativo");
    });

    tabContent[index].classList.add("ativo");
  } // end Callback

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Chamando Callback
      activeTab(index);
    });
  });
}
