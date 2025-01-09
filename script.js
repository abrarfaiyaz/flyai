// Handle button click functionality
// function handleButtonClick(button) {
//     const overlay = document.querySelector('.overlay');
//     const container = document.querySelector('.container');
//     const bubbleContainer = document.querySelector('.bubble-container');
  
//     container.classList.add('content-blur');
//     overlay.style.opacity = '1';
//     overlay.style.pointerEvents = 'auto';
//     bubbleContainer.style.display = 'flex';
  
//     const overlayContent = document.querySelector('.overlay-content');
//     overlayContent.style.opacity = '0';
//   }
  function handleButtonClick(button) {
    const overlay = document.querySelector('.overlay');
    const container = document.querySelector('.container');
    const bubbleContainer = document.querySelector('.bubble-container');
  
    if (button.textContent.trim() === "About") {
      // Show bubbles for "About"
      bubbleContainer.style.display = 'flex';
    }
  
    container.classList.add('content-blur'); // Blur the main content
    overlay.style.opacity = '1'; // Show overlay
    overlay.style.pointerEvents = 'auto'; // Enable interactions with overlay
  }
  


  
  // Dynamic Typing Animation
  const phrases = [
    { replace: "Growth", with: "Business" },
    { replace: "Intelligence", with: "Dynamic AI Agents" },
  ];
  
  const baseString = "Empowering "; // Base text
  const textElement = document.getElementById("dynamic-text");
  
  let currentPhraseIndex = 0;
  let charIndex = 0;
  let isErasing = false;
  
  const typingSpeed = 100; // Typing speed in milliseconds
  const erasingSpeed = 50; // Erasing speed in milliseconds
  const delayBetweenPhrases = 1500; // Delay before switching phrases
  
  function typeText() {
    const { replace, with: replacement } = phrases[currentPhraseIndex];
    const fullText = isErasing
      ? baseString + replace
      : baseString + replacement;
  
    textElement.textContent = fullText.substring(0, charIndex);
  
    if (isErasing) {
      charIndex--;
    } else {
      charIndex++;
    }
  
    if (!isErasing && charIndex === baseString.length + replacement.length) {
      setTimeout(() => {
        isErasing = true;
        setTimeout(typeText, erasingSpeed);
      }, delayBetweenPhrases);
    } else if (isErasing && charIndex === baseString.length) {
      isErasing = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(typeText, isErasing ? erasingSpeed : typingSpeed);
    }
  }
  
  // Initialize the typing animation
  document.addEventListener("DOMContentLoaded", () => {
    typeText();
  });
  