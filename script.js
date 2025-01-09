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
  


  
  const phrases = [
    "Empowering Growth with Intelligence",
    "Empowering with Intelligence",
    "Empowering Business with Intelligence",
    "Empowering Business with",
    "Empowering Business with Dynamic AI Agents",
  ];
  
  const textElement = document.getElementById("dynamic-text");
  let currentPhraseIndex = 0;
  let charIndex = 0;
  let isErasing = false;
  
  const typingSpeed = 100; // Typing speed in milliseconds
  const erasingSpeed = 50; // Erasing speed in milliseconds
  const delayBetweenPhrases = 1500; // Delay before switching phrases
  
  // function typeText() {
  //   const fullText = phrases[currentPhraseIndex];
  //   const highlight = currentPhraseIndex === 4; // Highlight "Dynamic AI Agents"
  
  //   if (isErasing) {
  //     charIndex--;
  //     textElement.innerHTML = fullText.substring(0, charIndex);
  //   } else {
  //     charIndex++;
  //     textElement.innerHTML = fullText.substring(0, charIndex);
  //   }
  
  //   if (!isErasing && charIndex === fullText.length) {
  //     if (highlight) {
  //       // Add highlight for "Dynamic AI Agents"
  //       textElement.innerHTML = fullText.replace(
  //         "Dynamic AI Agents",
  //         '<span class="highlight">Dynamic AI Agents</span>'
  //       );
  //     }
  //     setTimeout(() => {
  //       isErasing = true;
  //       setTimeout(typeText, erasingSpeed);
  //     }, delayBetweenPhrases);
  //   } else if (isErasing && charIndex === 0) {
  //     isErasing = false;
  //     currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  //     setTimeout(typeText, typingSpeed);
  //   } else {
  //     setTimeout(typeText, isErasing ? erasingSpeed : typingSpeed);
  //   }
  // }

  const dynamicPart = document.getElementById("dynamic-part");
const dynamicEnd = document.getElementById("dynamic-end");

// Animation Sequence
function runAnimation() {
  // Step 1: Highlight "Growth"
  dynamicPart.classList.add("selected");

  setTimeout(() => {
    // Step 2: Replace "Growth" with "Business"
    dynamicPart.textContent = "Business";
    dynamicPart.classList.remove("selected");

    setTimeout(() => {
      // Step 3: Highlight "Intelligence"
      dynamicEnd.classList.add("selected");

      setTimeout(() => {
        // Step 4: Replace "Intelligence" with "Dynamic AI Agents" and add highlight
        dynamicEnd.textContent = "Dynamic AI Agents";
        dynamicEnd.classList.remove("selected");
        dynamicEnd.classList.add("highlight");
      }, 1500); // Duration of selection for "Intelligence"
    }, 1500); // Duration for typing "Business"
  }, 1500); // Duration of selection for "Growth"
}

// Start Animation on Page Load
document.addEventListener("DOMContentLoaded", () => {
  runAnimation();
});

  
  document.addEventListener("DOMContentLoaded", () => {
    typeText();
  });
  