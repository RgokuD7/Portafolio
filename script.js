document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(".contenido");
    let currentSection = 0;
  
    function scrollToNextSection() {
      currentSection++;
      if (currentSection < sections.length) {
        sections[currentSection].scrollIntoView({ behavior: "smooth" });
      }
    }
  
    window.addEventListener("scroll", function() {
      let scrollPosition = window.scrollY + window.innerHeight;
      let sectionBottom = sections[currentSection].offsetTop + sections[currentSection].offsetHeight;
  
      if (scrollPosition >= sectionBottom) {
        scrollToNextSection();
      }
    });
  });
  