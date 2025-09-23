<!-- Coloca isto antes de fechar </body> -->
<script>
// Dark mode toggle
(function(){
  const btn = document.createElement('button');
  btn.textContent = '🌙';
  btn.id = 'dark-mode-toggle';
  btn.style.position = 'fixed';
  btn.style.bottom = '20px';
  btn.style.right = '20px';
  btn.style.padding = '10px';
  btn.style.zIndex = '1000';
  document.body.appendChild(btn);

  // Verificar preferencia do utilizador
  const darkModeStored = localStorage.getItem('dark-mode');
  if (darkModeStored === 'enabled') {
    document.documentElement.classList.add('dark');
  }

  btn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    if (isDark) {
      localStorage.setItem('dark-mode', 'enabled');
      btn.textContent = '☀️';
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      btn.textContent = '🌙';
    }
  });
})();

// Smooth scroll e menu ativo
(function(){
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const sections = [];
  navLinks.forEach(link => {
    const id = link.getAttribute('href').substring(1);
    const sec = document.getElementById(id);
    if (sec) sections.push({link, sec});
    // smooth scroll
    link.addEventListener('click', function(e){
      e.preventDefault();
      sec.scrollIntoView({ behavior: 'smooth' });
    });
  });

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach(({link, sec}) => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
})();
</script>
