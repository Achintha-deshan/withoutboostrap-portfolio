 const toggler = document.querySelector(".navbar-toggler");
      const menu = document.querySelector(".navbar-menu");

      toggler.addEventListener("click", () => {
        menu.classList.toggle("active");
      });

      document.querySelectorAll(".navbar-menu a").forEach((link) => {
        link.addEventListener("click", () => {
          menu.classList.remove("active");
          document
            .querySelectorAll(".navbar-menu a")
            .forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        });
      });

      window.addEventListener("scroll", () => {
        let current = "";
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
          }
        });

        document.querySelectorAll(".navbar-menu a").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      });