// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navUL = document.querySelector('nav ul');

if (hamburger && navUL) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    hamburger.classList.toggle('active');
    navUL.classList.toggle('active');
  });

  hamburger.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      hamburger.click();
    }
  });
}

// Back to Top
const backToTop = document.createElement('button');
backToTop.id = 'backToTop';
backToTop.setAttribute('aria-label', 'Back to top');
backToTop.innerHTML = '↑';
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const navUL = document.querySelector('nav ul');

  if (hamburger && navUL) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
      hamburger.setAttribute('aria-expanded', !expanded);
      hamburger.classList.toggle('active');
      navUL.classList.toggle('active');
    });

    hamburger.addEventListener('keydown', (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        hamburger.click();
      }
    });
  }

  const backToTop = document.createElement('button');
  backToTop.id = 'backToTop';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.innerHTML = '↑';
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('emailInput').value;
      const msg = document.getElementById('newsletterMsg');

      try {
        const { db } = window.firebaseServices;
        await addDoc(collection(db, "subscribers"), { email, timestamp: new Date() });
        msg.textContent = `Thanks for subscribing, ${email}!`;
        newsletterForm.reset();
      } catch (error) {
        msg.textContent = "Failed to subscribe. Try again.";
      }
    });
  }
});
