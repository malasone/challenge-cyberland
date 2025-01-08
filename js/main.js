window.onload = function () {
    const circle = document.getElementById('circle');
    const input = document.getElementById('colorName');
    const hexCode = document.getElementById('colorHexCode');
	
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
            if (circle.style.backgroundColor !== '') {
                // Convert RGB to Hex and update the hex code display
                const hexColor = rgbToHex(window.getComputedStyle(circle).backgroundColor);
                hexCode.textContent = hexColor;
            } else {
                // If the color is invalid, alert the user and reset the input
                alert('Invalid color! Please use a valid color name or hex value.');
                input.value = 'rebeccapurple';
				hexCode.textContent = '#663399';
            }
        }
    });
};

// Function to convert RGB to Hex format
function rgbToHex(rgb) {
    var result = rgb.match(/\d+/g);
    return "#" + result.map(function(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }).join('');
}
