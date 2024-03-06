(() => {
  document.getElementById('scrollToTop').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', function () {
    const scrollToTopButton = document.getElementById('scrollToTop');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'block';
      scrollToTopButton.style.setProperty(
        '--scroll-progress',
        `${scrollPercentage}%`
      );
    } else {
      scrollToTopButton.style.display = 'none';
      scrollToTopButton.style.setProperty('--scroll-progress', '0');
    }
  });
})();
