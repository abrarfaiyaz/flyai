
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
let selectionPause = 500; // Pause duration after selection animation (0.3s)

// Function to set active cursor
function setActiveCursor(element) {
  // Remove cursor from all elements
  document.querySelectorAll("#dynamic-part, #dynamic-end").forEach((el) => {
    el.style.borderRight = "none"; // Ensure no cursor initially
  });
  // Add cursor to the active element
  if (element) {
    element.style.borderRight = "2px solid #545455";
  }
}

// Function to animate selection (from left to right)
function selectText(element, callback) {
  if (!element) {
    console.error("Element not found for selection animation!");
    return;
  }
  setActiveCursor(element);
  const text = element.textContent;
  let charIndex = 0;
  console.log(`Starting selection animation for: "${text}"`);
  function animateSelection() {
    element.innerHTML = `<span class="selected">${text.substring(
      0,
      charIndex + 1
    )}</span>${text.substring(charIndex + 1)}`;
    charIndex++;
    if (charIndex < text.length) {
      setTimeout(animateSelection, 50); // Speed for selection animation
    } else {
      console.log(`Selection animation completed for: "${text}"`);
      setTimeout(() => {
        if (callback) callback(); // Wait 0.3s before continuing
      }, selectionPause);
    }
  }
  animateSelection();
}

// Function to erase the entire word
function eraseWord(element, callback) {
  if (!element) {
    console.error("Element not found for erasing!");
    return;
  }
  setActiveCursor(element);
  console.log(`Erasing text for: "${element.textContent}"`);
  element.innerHTML = ""; // Erase content instantly
  setTimeout(() => {
    if (callback) callback(); // Add a pause before calling the next step
  }, pauseBeforeTyping);
}

// Function to type out text
function typeText(element, text, callback) {
  if (!element) {
    console.error("Element not found for typing animation!");
    return;
  }
  setActiveCursor(element);
  let charIndex = 0;
  console.log(`Starting typing animation for: "${text}"`);
  function type() {
    if (charIndex < text.length) {
      element.textContent += text[charIndex];
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      console.log(`Typing animation completed for: "${text}"`);
      if (callback) callback();
    }
  }
  type();
}

function addHighlightAnimation(element) {
  element.classList.remove("highlight"); // Remove the class if already present
  void element.offsetWidth; // Trigger a reflow to reset the animation
  element.classList.add("highlight"); // Re-add the class to start the animation
}
// Animation Sequence
function runAnimation() {
  console.log("Starting text animation sequence...");
  const dynamicPart = document.getElementById("dynamic-part");
  const dynamicEnd = document.getElementById("dynamic-end");

  if (!dynamicPart || !dynamicEnd) {
    console.error("dynamic-part or dynamic-end elements not found!");
    return;
  }

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
                // dynamicEnd.classList.add("highlight");
                addHighlightAnimation(dynamicEnd);
                console.log("Text animation completed for all parts!");
              });
            });
          });
        }, 1000); // Pause after typing "Business"
      });
    });
  });
}

dynamicEnd.addEventListener("animationstart", () => {
  console.log("Highlight animation started!");
});

// Ensure no cursors are visible initially
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#dynamic-part, #dynamic-end").forEach((el) => {
    el.style.borderRight = "none"; // Remove initial cursors
  });

  const lastButton = document.querySelector(".buttons a:nth-child(3)");

  // Fallback timer to ensure animation starts
  const fallbackTimer = setTimeout(() => {
    console.log("Fallback timer triggered.");
    runAnimation();
  }, 2000); // Adjust delay to match button animation duration

  // Trigger animation when the last button finishes flying in
  lastButton.addEventListener("animationend", () => {
    clearTimeout(fallbackTimer); // Cancel fallback
    console.log("Button animation ended.");
    runAnimation(); // Start text animation
  });
});

//   // Typing Animation Variables
// let typingSpeed = 100; // Speed for typing
// let pauseBeforeTyping = 800; // Pause duration before typing

// // Function to set active cursor
// function setActiveCursor(element) {
//   // Remove cursor from all elements
//   document.querySelectorAll("#dynamic-part, #dynamic-end").forEach((el) => {
//     el.style.borderRight = "none"; // Ensure no cursor initially
//   });
//   // Add cursor to the active element
//   if (element) {
//     element.style.borderRight = "2px solid #545455";
//   }
// }

// // Function to animate selection (from left to right)
// function selectText(element, callback) {
//   if (!element) {
//     console.error("Element not found for selection animation!");
//     return;
//   }
//   setActiveCursor(element);
//   const text = element.textContent;
//   let charIndex = 0;
//   console.log(`Starting selection animation for: "${text}"`);
//   function animateSelection() {
//     element.innerHTML = `<span class="selected">${text.substring(
//       0,
//       charIndex + 1
//     )}</span>${text.substring(charIndex + 1)}`;
//     charIndex++;
//     if (charIndex < text.length) {
//       setTimeout(animateSelection, 50); // Speed for selection animation
//     } else {
//       console.log(`Selection animation completed for: "${text}"`);
//       if (callback) callback();
//     }
//   }
//   animateSelection();
// }

// // Function to erase the entire word
// function eraseWord(element, callback) {
//   if (!element) {
//     console.error("Element not found for erasing!");
//     return;
//   }
//   setActiveCursor(element);
//   console.log(`Erasing text for: "${element.textContent}"`);
//   element.innerHTML = ""; // Erase content instantly
//   setTimeout(() => {
//     if (callback) callback(); // Add a pause before calling the next step
//   }, pauseBeforeTyping);
// }

// // Function to type out text
// function typeText(element, text, callback) {
//   if (!element) {
//     console.error("Element not found for typing animation!");
//     return;
//   }
//   setActiveCursor(element);
//   let charIndex = 0;
//   console.log(`Starting typing animation for: "${text}"`);
//   function type() {
//     if (charIndex < text.length) {
//       element.textContent += text[charIndex];
//       charIndex++;
//       setTimeout(type, typingSpeed);
//     } else {
//       console.log(`Typing animation completed for: "${text}"`);
//       if (callback) callback();
//     }
//   }
//   type();
// }

// // Animation Sequence
// function runAnimation() {
//   console.log("Starting text animation sequence...");
//   const dynamicPart = document.getElementById("dynamic-part");
//   const dynamicEnd = document.getElementById("dynamic-end");

//   if (!dynamicPart || !dynamicEnd) {
//     console.error("dynamic-part or dynamic-end elements not found!");
//     return;
//   }

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
//                 console.log("Text animation completed for all parts!");
//               });
//             });
//           });
//         }, 1000); // Pause after typing "Business"
//       });
//     });
//   });
// }

// // Ensure no cursors are visible initially
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll("#dynamic-part, #dynamic-end").forEach((el) => {
//     el.style.borderRight = "none"; // Remove initial cursors
//   });

//   const lastButton = document.querySelector(".buttons a:nth-child(3)");

//   // Fallback timer to ensure animation starts
//   const fallbackTimer = setTimeout(() => {
//     console.log("Fallback timer triggered.");
//     runAnimation();
//   }, 2000); // Adjust delay to match button animation duration

//   // Trigger animation when the last button finishes flying in
//   lastButton.addEventListener("animationend", () => {
//     clearTimeout(fallbackTimer); // Cancel fallback
//     console.log("Button animation ended.");
//     runAnimation(); // Start text animation
//   });
// });

  

