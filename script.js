function showPage(page) {
  const overlay = document.querySelector('.overlay');
  const container = document.querySelector('.container');
  const overlayContent = document.getElementById('overlay-content');
  const aboutPage = document.getElementById('about-page');
  const servicesPage = document.getElementById('services-page');

  aboutPage.style.display = 'none';
  servicesPage.style.display = 'none';

  if (page === 'about') {
    aboutPage.style.display = 'block';
  } else if (page === 'services') {
    servicesPage.style.display = 'block';
  }

  container.classList.add('content-blur');
  overlay.style.opacity = '1';
  overlay.style.pointerEvents = 'auto';
  overlayContent.classList.add('show');
}

function closeOverlay(event) {
  if (event && event.target !== document.querySelector('.overlay')) return;
  _hideOverlay();
}

function _hideOverlay() {
  const overlay = document.querySelector('.overlay');
  const container = document.querySelector('.container');
  const overlayContent = document.getElementById('overlay-content');

  overlay.style.opacity = '0';
  overlay.style.pointerEvents = 'none';
  overlayContent.classList.remove('show');
  container.classList.remove('content-blur');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.close-btn').addEventListener('click', _hideOverlay);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') _hideOverlay();
  });

  document.querySelectorAll('#dynamic-part, #dynamic-end').forEach((el) => {
    el.style.borderRight = 'none';
  });

  const typingSpeed = 100;
  const pauseBeforeTyping = 800;
  const selectionPause = 500;

  function setActiveCursor(element) {
    document.querySelectorAll('#dynamic-part, #dynamic-end').forEach((el) => {
      el.style.borderRight = 'none';
    });
    if (element) element.style.borderRight = '2px solid #545455';
  }

  function selectText(element, callback) {
    if (!element) return;
    setActiveCursor(element);
    const text = element.textContent;
    let charIndex = 0;
    (function animateSelection() {
      element.innerHTML =
        `<span class="selected">${text.substring(0, charIndex + 1)}</span>` +
        text.substring(charIndex + 1);
      charIndex++;
      if (charIndex < text.length) {
        setTimeout(animateSelection, 50);
      } else {
        setTimeout(() => { if (callback) callback(); }, selectionPause);
      }
    })();
  }

  function eraseWord(element, callback) {
    if (!element) return;
    setActiveCursor(element);
    element.innerHTML = '';
    setTimeout(() => { if (callback) callback(); }, pauseBeforeTyping);
  }

  function typeText(element, text, callback) {
    if (!element) return;
    setActiveCursor(element);
    let charIndex = 0;
    (function type() {
      if (charIndex < text.length) {
        element.textContent += text[charIndex];
        charIndex++;
        setTimeout(type, typingSpeed);
      } else if (callback) {
        callback();
      }
    })();
  }

  function triggerShineAnimation(element) {
    element.style.animation = 'shine 1.5s infinite';
    element.style.borderRight = 'none';
  }

  function runAnimation() {
    const dynamicPart = document.getElementById('dynamic-part');
    const dynamicEnd = document.getElementById('dynamic-end');
    if (!dynamicPart || !dynamicEnd) return;

    selectText(dynamicPart, () => {
      eraseWord(dynamicPart, () => {
        typeText(dynamicPart, 'Business', () => {
          setTimeout(() => {
            selectText(dynamicEnd, () => {
              eraseWord(dynamicEnd, () => {
                typeText(dynamicEnd, 'AI Agents', () => {
                  dynamicEnd.classList.add('highlight');
                  triggerShineAnimation(dynamicEnd);
                });
              });
            });
          }, 1000);
        });
      });
    });
  }

  const lastButton = document.querySelector('.buttons a:nth-child(3)');
  const fallbackTimer = setTimeout(runAnimation, 2000);

  if (lastButton) {
    lastButton.addEventListener('animationend', () => {
      clearTimeout(fallbackTimer);
      runAnimation();
    }, { once: true });
  }
});
