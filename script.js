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
  
    // Calculate the opacity based on how much the user has scrolled
    const opacity = Math.max(0, (1 - currentScroll / maxScroll));

    // Add parallax effect to project items
    const scrollY = window.scrollY;
    projectItems.forEach((item, index) => {
      // Adjust the parallax speed per item (higher index = slower movement)
      const speed = 0.1 + index * 0.05;
      item.style.transform = `translateY(${scrollY * speed}px)`;
      item.style.opacity = 1-opacity*1.5
    });
  
    // Handle scroll indicator fade out
    //const scrollIndicator = document.querySelector(".scroll-down");
    //const maxScroll = window.innerHeight; // The height of the viewport
    //const currentScroll = window.scrollY;
  
    // Calculate the opacity based on how much the user has scrolled
    //const opacity = Math.max(0, 1 - currentScroll*1.5 / maxScroll);
  
    // Apply the calculated opacity to the scroll indicator
    if (scrollIndicator) {
      scrollIndicator.style.opacity = opacity;
    }
  });
  