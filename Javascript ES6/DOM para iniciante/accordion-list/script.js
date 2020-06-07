function initTabNav() {
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
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();
