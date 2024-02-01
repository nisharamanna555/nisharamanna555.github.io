// JAVASCRIPT FOR HAMBURGER MENU
document.addEventListener('DOMContentLoaded', function () {
  var hamburgerMenu = document.querySelector('.fixed-nav .hamburger-menu');
  var dropdownMenu = document.querySelector('.fixed-nav .dropdown-menu');

  // Initial hide
  dropdownMenu.style.display = 'none';

  // Toggle dropdown menu visibility
  function toggleMenu() {
      dropdownMenu.style.display = (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') ? 'block' : 'none';
  }

  // Close dropdown menu when clicking outside
  document.addEventListener('click', function (event) {
      if (!hamburgerMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = 'none';
      }
  });

  // Attach toggleMenu function to hamburgerMenu click event
  hamburgerMenu.addEventListener('click', toggleMenu);
});

// JAVASCRIPT FOR MAGAZINE CUTOUT ANIMATIONS
const letterGroups = [
  ["w", "e1", "l", "c", "o1", "m1", "e2"],
  ["t1", "o2"],
  ["m2", "y"],
  ["s", "i", "t2", "e3"],
  ["a", "b", "o1c1", "u", "t2c1"],
  ["m1c1", "e2c1"],
  ["p", "r", "o1c2", "j", "e2c4", "cc1", "t3", "sc2"],
  ["rc1", "e2c2", "sc1", "u2", "m1c2", "e2c3"],
  ["ac1", "c2", "t1c2", "ic1", "v", "i2", "t2c2", "i3", "e1c1", "s2"],
  ["cc2", "o1c3", "n", "t3c2", "ac2", "c2c2", "t1c3", "m1c3", "e3c1"]
];
let currentIndex = 0;
function changeLetterImages() {
  letterGroups.forEach(group => {
    group.forEach(letterId => {
      const letter = document.getElementById(letterId);
      const originalSrc = `./letters/${letterId}.png`;
      const altSrc = `./letters-alt/${letterId}.png`;
      letter.src = currentIndex % 2 === 0 ? altSrc : originalSrc;
    });
  });
  currentIndex++;
}
setInterval(changeLetterImages, 1500);

// JAVASCRIPT FOR SMOOTH SCROLLING
document.addEventListener("DOMContentLoaded", function () {
    // get all the anchor links from nav bar in the document
    const links = document.querySelectorAll('a[href^="#"]');
    // attach click event listener to each link
    links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
    });
    // smooth scrolling function
    function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        // Scroll to the target element with a smooth animation
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
    }
});

// JAVASCRIPT FOR RESUME SECTION
const infoBox = document.getElementById('infoBox');
const instructions = document.getElementById('instructions');
let isHovered = false;
// WORK
document.querySelectorAll('.work-exp tr').forEach(row => {
    row.addEventListener('mouseover', () => {
    if (row.closest('thead')) {
        return;
    }
    const info = row.getAttribute('data-info');
    const image = row.getAttribute('data-image');
    const date = row.getAttribute('date');
    infoBox.innerHTML = `<div class="work-exp-content">${info}</div>
                        <img src="./logos/${image}" alt="Info Image" style="height:60px; width:auto; position: absolute; bottom: 5%; left: 5%;">
                        <p style="font-weight: bold; color: #5E503F; position: absolute; bottom: 3%; right: 5%;">${date}</p>`;
    infoBox.style.display = 'block';
    instructions.style.visibility = 'hidden';
    isHovered = true;
    });
    row.addEventListener('mouseout', () => {
        isHovered = false;
        setTimeout(() => {
            if (!isHovered) {
                // show instructions when not hovering over a row
                infoBox.style.display = 'none';
                instructions.style.visibility = 'visible';
            }
        }, 200)
    });
});
// EDUCATION
document.querySelectorAll('.educ tr').forEach(row => {
    row.addEventListener('mouseover', () => {
    if (row.closest('thead')) {
        return;
    }
    const info = row.getAttribute('data-info');
    const image = row.getAttribute('data-image');
    const date = row.getAttribute('date');
    infoBox.innerHTML = `<p style="padding-bottom: 15%;">${info}</p>
                        <img src="./logos/${image}" alt="Info Image" style="height:60px; width:auto; position: absolute; bottom: 5%; left: 5%;">
                        <p style="font-weight: bold; color: #5E503F; position: absolute; bottom: 3%; right: 5%;">${date}</p>`;
    infoBox.style.display = 'block';
    instructions.style.visibility = 'hidden';
    isHovered = true;
    });
    row.addEventListener('mouseout', () => {
        isHovered = false;
        setTimeout(() => {
            if (!isHovered) {
                // show instructions when not hovering over a row
                infoBox.style.display = 'none';
                instructions.style.visibility = 'visible';
            }
        }, 200)
    });
});
