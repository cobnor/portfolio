// Scroll to the top on page load
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  });
  
  document.addEventListener("scroll", () => {

    const projectsSection = document.getElementById("projects");
    const projectItems = document.querySelectorAll(".project-item");
    const rect = projectsSection.getBoundingClientRect();
  
    // Reveal the projects section when it enters the viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      projectsSection.classList.add("visible");
    }
  
    // Handle scroll indicator fade out
    const scrollIndicator = document.querySelector(".scroll-down");
    const maxScroll = window.innerHeight; // The height of the viewport
    const currentScroll = window.scrollY;

    const gradientShift = currentScroll / 2; // Adjust speed of the gradient shift

    // Shift gradient based on scroll
    const h1 = document.querySelector('#intro h1');
    h1.style.background = `linear-gradient(${90 + gradientShift}deg, 
      hsla(195, 86%, 50%, 1) 0%, 
      hsla(236, 93%, 65%, 1) 100%)`;
    h1.style.backgroundClip = 'text';
    h1.style.webkitBackgroundClip = 'text';
    h1.style.color = 'transparent';  


    // Calculate the opacity based on how much the user has scrolled
    const opacity = Math.max(0, (1 - currentScroll / maxScroll));

    // Add parallax effect to project items
    const scrollY = window.scrollY;
    projectItems.forEach((item, index) => {
      // Adjust the parallax speed per item (higher index = slower movement)
      const speed = 0.1 + index * 0.05;
      if(window.innerWidth >= 800){
        item.style.transform = `translateY(${scrollY * speed}px)`;
        item.style.opacity = 1-opacity*1.5
      }

    });
  
    if (scrollIndicator) {
      scrollIndicator.style.opacity = opacity;
    }
});
