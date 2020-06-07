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

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');

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
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    function animaScroll() {
      let altura = window.innerHeight * 0.5;
      sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top - altura;

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
