
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
  
  
// Typing Animation Variables
let typingSpeed = 100; // Speed for typing
let pauseBeforeTyping = 800; // Pause duration before typing

// Function to add a blinking cursor effect dynamically
function setActiveCursor(element) {
  document.querySelectorAll("#dynamic-part, #dynamic-end").forEach((el) => {
    el.style.borderRight = "none"; // Remove cursor from all elements
  });
  element.style.borderRight = "2px solid #545455"; // Add cursor to the active element
}

// Function to animate selection (from left to right)
function selectText(element, callback) {
  setActiveCursor(element);
  const text = element.textContent;
  let charIndex = 0;
  function animateSelection() {
    element.innerHTML = `<span class="selected">${text.substring(
      0,
      charIndex + 1
    )}</span>${text.substring(charIndex + 1)}`;
    charIndex++;
    if (charIndex < text.length) {
      setTimeout(animateSelection, 50); // Speed for selection animation
    } else if (callback) {
      callback();
    }
  }
  animateSelection();
}

// Function to erase the entire word
function eraseWord(element, callback) {
  setActiveCursor(element);
  element.innerHTML = ""; // Erase content instantly
  setTimeout(() => {
    if (callback) callback(); // Add a pause before calling the next step
  }, pauseBeforeTyping);
}

// Function to type out text
function typeText(element, text, callback) {
  setActiveCursor(element);
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
    // Step 2: Erase the entire word "Growth"
    eraseWord(dynamicPart, () => {
      // Step 3: Type "Business"
      typeText(dynamicPart, "Business", () => {
        setTimeout(() => {
          // Step 4: Animate selection of "Intelligence"
          selectText(dynamicEnd, () => {
            // Step 5: Erase the entire word "Intelligence"
            eraseWord(dynamicEnd, () => {
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

// Wait for Buttons Animation to Finish
document.addEventListener("DOMContentLoaded", () => {
  const lastButton = document.querySelector(".buttons a:nth-child(3)");
  lastButton.addEventListener("animationend", () => {
    runAnimation(); // Start the dynamic part animation after buttons fly in
  });
});

//   const dynamicPart = document.getElementById("dynamic-part");
// const dynamicEnd = document.getElementById("dynamic-end");

// // Typing Animation Variables
// let typingSpeed = 100; // Speed for typing
// let pauseBeforeTyping = 800; // Pause duration before typing

// // Function to animate selection (from left to right)
// function selectText(element, callback) {
//   const text = element.textContent;
//   let charIndex = 0;
//   function animateSelection() {
//     element.innerHTML = `<span class="selected">${text.substring(
//       0,
//       charIndex + 1
//     )}</span>${text.substring(charIndex + 1)}`;
//     charIndex++;
//     if (charIndex < text.length) {
//       setTimeout(animateSelection, 50); // Speed for selection animation
//     } else if (callback) {
//       callback();
//     }
//   }
//   animateSelection();
// }

// // Function to erase the entire word
// function eraseWord(element, callback) {
//   element.innerHTML = ""; // Erase content instantly
//   setTimeout(() => {
//     if (callback) callback(); // Add a pause before calling the next step
//   }, pauseBeforeTyping);
// }

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

// // Animation Sequence
// function runAnimation() {
//   // Step 1: Animate selection of "Growth"
//   selectText(dynamicPart, () => {
//     // Step 2: Erase the entire word "Growth"
//     eraseWord(dynamicPart, () => {
//       // Step 3: Type "Business"
//       typeText(dynamicPart, "Business", () => {
//         setTimeout(() => {
//           // Step 4: Animate selection of "Intelligence"
//           selectText(dynamicEnd, () => {
//             // Step 5: Erase the entire word "Intelligence"
//             eraseWord(dynamicEnd, () => {
//               // Step 6: Type and Highlight "Dynamic AI Agents"
//               typeText(dynamicEnd, "Dynamic AI Agents", () => {
//                 dynamicEnd.classList.add("highlight");
//               });
//             });
//           });
//         }, 1000); // Pause after typing "Business"
//       });
//     });
//   });
// }

// // Start Animation on Page Load
// document.addEventListener("DOMContentLoaded", () => {
//   runAnimation();
// });

