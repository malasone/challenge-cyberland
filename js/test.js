window.onload = function () {
    const circle = document.getElementById('circle');
    const input = document.getElementById('colorName');
	
    // Add event listener to detect Enter key
    input.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
			console.log("awndaowndaonwd")
            const newColor = input.value.trim();

            // Validate if the color is valid before applying it
            circle.style.backgroundColor = newColor;
			/*
				This is a built in standard for browsers, if the string input exists in MDN reference it will returns a value. If not, just blank. 
			*/

            // If the color is invalid, revert to the placeholder color
            if (circle.style.backgroundColor === '') {
                alert('Invalid color! Please use a valid color name or hex value.');
                input.value = '';
            }
        }
    });
};
