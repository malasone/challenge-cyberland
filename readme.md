#### Technical Take-home Challenge: Universal Color Translator ####

First, the boiler plate for HTML. Then adding the js and css to their respective folders for clean workspace. 
Functionality: inputing the name of the color in the text inside the circle, if the name is a valid color from the [MDN color standard](https://developer.mozilla.org/en-US/docs/Web/CSS/color) it will return a value, else, returns nothing. It will then reset to the placeholder color **rebeccapurple**. 
To get the hex code, I searched and found a solution in stackoverflow rgb to hexcode where `window.getComputedStyle(<element>).backgroundColor` returns rgb values `[255, 255, 255]` and then converted to int parsed to hexa decimal string. Hence ```.toString(16)```. Then slice as -2 to ensure 2 values are returned. Finally joined to get the whole hexadecimal.

[Element color to (RGB to HEX)](https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value)