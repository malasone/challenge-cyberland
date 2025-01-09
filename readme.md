## Technical Take-home Challenge: Universal Color Translator ##

First, the boiler plate for HTML. Then adding the js and css to their respective folders for clean workspace. 
Functionality: inputing the name of the color in the text inside the circle, if the name is a valid color from the [MDN color standard](https://developer.mozilla.org/en-US/docs/Web/CSS/color) it will return a value, else, returns nothing. It will then reset to the placeholder color **rebeccapurple**. 
To get the hex code, I searched and found a solution in stackoverflow rgb to hexcode where `window.getComputedStyle(<element>).backgroundColor` returns rgb values `[255, 255, 255]` and then converted to int parsed to hexa decimal string. Hence `.toString(16)`. Then slice as -2 to ensure 2 values are returned. Finally joined to get the whole hexadecimal.

[Element color to (RGB to HEX)](https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value)

### Testing Logic ###
Since I'm just using pure browser natives HTML, CSS, and JS theres no need to depend on heavy JS testing frameworks. Used vitest for lightweight testing. 
```
const colorMap = {
  "color":"#FFFFFF"
  ...
}
```
Map is used to store every color combination. Logically the hexcode representation is the most important for the test its stored in the value and corresponding color name as its key.
The map is then looped to run test on every value.
Inside the loop the HTML is mocked. In my JS logic, it checks if the color is valid, then updates the value of the colored circle, as mentioned before the color is updated by rgb(x,x,x) to hex code. The hex code `colorHexCode.textContent` is then expected. 

### Testing ###
**To run:**
Open index.html, change input into color names.

**To Test**
```
npm install
npm test
```
