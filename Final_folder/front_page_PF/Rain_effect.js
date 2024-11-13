const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters for the rain effect
const katakana = '';
const latin = '';
const nums = '01';

//アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン
// Combine all characters into one string
const alphabet = katakana + latin + nums;

// Font size and number of columns
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array to store the position of rain drops
const rainDrops = [];

// Initialize rain drops
for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1; // Start at the top of the canvas
}

// Draw function for the rain effect
const draw = () => {
    // Create a fading effect
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0'; // Green color for the text
    context.font = fontSize + 'px monospace'; // Set font style

    // Loop through each column
    for (let i = 0; i < rainDrops.length; i++) {
        // Pick a random character from the alphabet
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        // Draw the character at the current rain drop position
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Reset the rain drop position if it exceeds canvas height
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        // Increment the rain drop position
        rainDrops[i]++;
    }
};

// Set the drawing interval
setInterval(draw, 35);
