document.querySelector('.about-link').addEventListener('click', function(e) {
  e.preventDefault();

  var dropdown = this.closest('.dropdown');
  dropdown.classList.toggle('show');
});

document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    var dropdowns = document.querySelectorAll('.dropdown.show');
    dropdowns.forEach(function(dropdown) {
      dropdown.classList.remove('show');
    });
  }
});

// Get the elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinksWrapper = document.querySelector('.nav-links-wrapper');

// Toggle the menu visibility when the menu icon is clicked
menuToggle.addEventListener('click', function() {
  navLinksWrapper.classList.toggle('show');
});

