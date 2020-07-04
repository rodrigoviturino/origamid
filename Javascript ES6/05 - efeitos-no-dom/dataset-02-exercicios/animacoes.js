function initTabNav() {
  let tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  let tabContent = document.querySelectorAll(
    "[data-section='content'] section"
  );

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    // Callback
    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      console.log(tabContent[index].dataset.anime);
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
  const accordionList = document.querySelectorAll(
    "[data-accordion='anima'] dt"
  );
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

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-anima="menu"] a[href^="#"'
  );

  function scrollToSection(event) {
    event.preventDefault();
    let href = event.currentTarget.getAttribute("href");
    let section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /* Forma Alternativa */
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anima='scroll']");

  if (sections.length) {
    function animaScroll() {
      let alturaJanela = window.innerHeight * 0.5;
      sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top - alturaJanela;

        if (sectionTop < 0) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();