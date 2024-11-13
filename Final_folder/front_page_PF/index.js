

 // JavaScript to handle button click event
 document.getElementById("checkButton").addEventListener("click", () => {
    // Get the value of the input box
    const userInput = document.getElementById("textInput").value.trim();

    // Check if the input matches the word 'boot' (case-insensitive)
    if (userInput === "Boot") {
        // Redirect to the new page
        window.location.href = "../blank_canvas/index.html"; // Replace with your desired page URL
    }
});


///////////////////////////////////////////////////////////////////////////
////THIS IS FOR THE HEADER CHANGING BUTTONS ON VALUE OF BINARY/////////////
///////////////////////////////////////////////////////////////////////////

globalThis.const = textArray001 = ["(0010)", "(0008)", "(0014)", "(ASCII)", "(0002)"];
globalThis.let = currentIndex001 = 0;

globalThis.const = textArrayForH1 = ["66", "201", "42", "B", "01000010"];
globalThis.const = textArrayForH2 = ["66", "201", "42", "o", "01101111"];
globalThis.const = textArrayForH3 = ["66", "201", "42", "o", "01101111"];
globalThis.const = textArrayForH4 = ["66", "201", "42", "t", "01101111"];


globalThis.let = currentIndexForH1IDS = 0;

globalThis.currentIndexForH1IDS = 0; // Current index for opacity values

// Event listener for the button click

// Event listener for the button click

document.getElementById("IDforButtonH1Number01").addEventListener("click", () => {
    document.getElementById("displayText001Number01").textContent = textArray001[currentIndex001];
    document.getElementById("H1ID01").textContent = textArrayForH1[currentIndexForH1IDS ];

    // Increment the index to show the next text
    currentIndex001++;
    currentIndexForH1IDS++;

    // Reset index to 0 if we reach the end of the array (looping back to the beginning)
    if (currentIndex001 >= textArray001.length) {
        currentIndex001 = 0;
    }

    // Reset index to 0 if we reach the end of the array (looping back to the beginning)
    if (currentIndexForH1IDS >= textArrayForH1.length) {
        currentIndexForH1IDS = 0;
    }
});
document.getElementById("IDforButtonH1Number02").addEventListener("click", () => {
    document.getElementById("displayText002Number002").textContent = textArray001[currentIndex001];

    document.getElementById("H1ID02").textContent = textArrayForH2[currentIndexForH1IDS ];

    // Increment the index to show the next text
    currentIndex001++;
    currentIndexForH1IDS++;

    // Reset index to 0 if we reach the end of the array (looping back to the beginning)
    if (currentIndex001 >= textArray001.length) {
        currentIndex001 = 0;
    }
    
    // Reset index to 0 if we reach the end of the array (looping back to the beginning)
    if (currentIndexForH1IDS >= textArrayForH2.length) {
        currentIndexForH1IDS = 0;
    }
});

document.getElementById("IDforButtonH1Number03").addEventListener("click", () => {
    document.getElementById("displayText003Number03").textContent = textArray001[currentIndex001];
    document.getElementById("H1ID03").textContent = textArrayForH3[currentIndexForH1IDS ];

    // Increment the index to show the next text
    currentIndex001++;
    currentIndexForH1IDS++;

    // Reset index to 0 if we reach the end of the array (looping back to the beginning)
    if (currentIndex001 >= textArray001.length) {
        currentIndex001 = 0;
    }
    
    // Reset index to 0 if we reach the end of the array (looping back to the beginning)
    if (currentIndexForH1IDS >= textArrayForH3.length) {
        currentIndexForH1IDS = 0;
    }
});

document.getElementById("IDforButtonH1Number04").addEventListener("click", () => {
    document.getElementById("displayText004Number04").textContent = textArray001[currentIndex001];
    document.getElementById("H1ID04").textContent = textArrayForH4[currentIndexForH1IDS ];

    // Increment the index to show the next text
    currentIndex001++;
    currentIndexForH1IDS++;

    // Reset index to 0 if we reach the end of the array (looping back to the beginning)
    if (currentIndex001 >= textArray001.length) {
        currentIndex001 = 0;
    }
    
    // Reset index to 0 if we reach the end of the array (looping back to the beginning)
    if (currentIndexForH1IDS >= textArrayForH4.length) {
        currentIndexForH1IDS = 0;
    }
});


///////////////////////////////////////////////////////////////////////////
////THIS IS FOR THE HEADER CHANGING BUTTONS ON VALUE OF BINARY/////////////
///////////////////////////////////////////////////////////////////////////


/* document.getElementById("changeTextButton001").addEventListener("click", () => {
    // Get all elements with the class `displayText001`
    const displayElements = document.getElementsByClassName("displayText001");

    // Loop through each element and update the text content
  for (let i = 0; i < displayElements.length; i++) {
       displayElements[i].textContent = textArray001[currentIndex001];
  }

  

    // Increment the index to show the next text
    currentIndex001++;

    // Reset index to 0 if we reach the end of the array (looping back to the beginning)
   if (currentIndex001 >= textArray001.length) {
       currentIndex001 = 0;
   }
});
 */
 
///////////////////////////////////////////////////////////////////////////
///////////////THIS IS FOR THE HIDDEN TEXT FUNCTIONS////////////////////////
///////////////////////////////////////////////////////////////////////////



 
