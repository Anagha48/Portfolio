  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const toggle = section.querySelector('.section-title');
    const icon = section.querySelector('.arrow-icon');
    const content = section.querySelector('.collapse');

    toggle.addEventListener('click', () => {
      setTimeout(() => {
        if (content.classList.contains('show')) {
          icon.classList.add('rotate');
          icon.innerHTML = '&#9650;'; // Up arrow
        } else {
          icon.classList.remove('rotate');
          icon.innerHTML = '&#9660;'; // Down arrow
        }
      }, 300); // Delay to match collapse animation
    });
  });
