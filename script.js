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
  const dynamicPart = document.getElementById("dynamic-part");
const dynamicEnd = document.getElementById("dynamic-end");

// Typing Animation Variables
let typingSpeed = 100; // Speed for typing
let erasingSpeed = 50; // Speed for erasing
let selectionSpeed = 50; // Speed for selection animation

// Function to animate selection (from left to right)
function selectText(element, callback) {
  const text = element.textContent;
  let charIndex = 0;
  function animateSelection() {
    element.innerHTML = `<span class="selected">${text.substring(
      0,
      charIndex + 1
    )}</span>${text.substring(charIndex + 1)}`;
    charIndex++;
    if (charIndex < text.length) {
      setTimeout(animateSelection, selectionSpeed);
    } else if (callback) {
      callback();
    }
  }
  animateSelection();
}

// Function to erase text
function eraseText(element, callback) {
  let text = element.textContent;
  let charIndex = text.length;
  function erase() {
    if (charIndex > 0) {
      element.textContent = text.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else if (callback) {
      callback();
    }
  }
  erase();
}

// Function to type out text
function typeText(element, text, callback) {
  let charIndex = 0;
  function type() {
    if (charIndex < text.length) {
      element.textContent += text[charIndex];
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

// Animation Sequence
function runAnimation() {
  // Step 1: Animate selection of "Growth"
  selectText(dynamicPart, () => {
    // Step 2: Erase "Growth"
    eraseText(dynamicPart, () => {
      // Step 3: Type "Business"
      typeText(dynamicPart, "Business", () => {
        setTimeout(() => {
          // Step 4: Animate selection of "Intelligence"
          selectText(dynamicEnd, () => {
            // Step 5: Erase "Intelligence"
            eraseText(dynamicEnd, () => {
              // Step 6: Type and Highlight "Dynamic AI Agents"
              typeText(dynamicEnd, "Dynamic AI Agents", () => {
                dynamicEnd.classList.add("highlight");
              });
            });
          });
        }, 1000); // Pause after typing "Business"
      });
    });
  });
}

// Start Animation on Page Load
document.addEventListener("DOMContentLoaded", () => {
  runAnimation();
});



//   const dynamicPart = document.getElementById("dynamic-part");
// const dynamicEnd = document.getElementById("dynamic-end");

// // Typing Animation Variables
// let typingSpeed = 100; // Speed for typing
// let erasingSpeed = 50; // Speed for erasing

// // Function to type out text
// function typeText(element, text, callback) {
//   let charIndex = 0;
//   function type() {
//     if (charIndex < text.length) {
//       element.textContent += text[charIndex];
//       charIndex++;
//       setTimeout(type, typingSpeed);
//     } else if (callback) {
//       callback();
//     }
//   }
//   type();
// }

// // Function to erase text
// function eraseText(element, callback) {
//   let text = element.textContent;
//   let charIndex = text.length;
//   function erase() {
//     if (charIndex > 0) {
//       element.textContent = text.substring(0, charIndex - 1);
//       charIndex--;
//       setTimeout(erase, erasingSpeed);
//     } else if (callback) {
//       callback();
//     }
//   }
//   erase();
// }

// // Animation Sequence
// function runAnimation() {
//   // Step 1: Highlight "Growth"
//   dynamicPart.classList.add("selected");

//   setTimeout(() => {
//     // Step 2: Erase "Growth"
//     eraseText(dynamicPart, () => {
//       // Step 3: Type "Business"
//       dynamicPart.classList.remove("selected");
//       typeText(dynamicPart, "Business", () => {
//         setTimeout(() => {
//           // Step 4: Highlight "Intelligence"
//           dynamicEnd.classList.add("selected");

//           setTimeout(() => {
//             // Step 5: Erase "Intelligence"
//             eraseText(dynamicEnd, () => {
//               // Step 6: Type and Highlight "Dynamic AI Agents"
//               dynamicEnd.classList.remove("selected");
//               typeText(dynamicEnd, "Dynamic AI Agents", () => {
//                 dynamicEnd.classList.add("highlight");
//               });
//             });
//           }, 1500); // Duration of selection for "Intelligence"
//         }, 1500); // Pause after typing "Business"
//       });
//     });
//   }, 1500); // Pause after highlighting "Growth"
// }

// // Start Animation on Page Load
// document.addEventListener("DOMContentLoaded", () => {
//   runAnimation();
// });

  