(function() {
    'use strict';

    const textToType = 'Hello, World!';
    const typingSpeed = 150; // Milliseconds per character
    const targetElement = document.getElementById('typewriter');

    if (!targetElement) {
        console.error('Target element #typewriter not found.');
        return;
    }

    let charIndex = 0;

    function type() {
        if (charIndex < textToType.length) {
            targetElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
    }

    // Start the animation. The 'defer' attribute ensures the DOM is ready.
    type();
})();