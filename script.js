const navLinks = document.querySelectorAll('.site-nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active-link'));
    this.classList.add('active-link');
  });
});


const sections = document.querySelectorAll('main section');

sections.forEach(section => {
  section.addEventListener('click', function () {
    sections.forEach(s => {
      s.style.borderColor = '#ddd';
      s.style.backgroundColor = '#ffffff';
    });
    this.style.borderColor = '#1855d3';
    this.style.backgroundColor = '#f0f5ff';
  });
});


const overview = document.querySelector('#overview');

overview.addEventListener('click', function () {
  const alreadyAdded = this.querySelector('.extra-note');
  if (!alreadyAdded) {
    this.innerHTML += '<p class="extra-note"><em>📡 Signal detected. Someone is still listening.</em></p>';
  }
});