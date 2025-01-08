import { expect, test, vi } from 'vitest';
import '../js/main';

const colorMap = {
  "red": "#ff0000",
  "green": "#008000",
  "blue": "#0000ff",
  "yellow": "#ffff00",
  "orange": "#ffa500",
  "purple": "#800080",
  "cyan": "#00ffff",
  "pink": "#ffc0cb",
  "":"#663399"
};

test.each(Object.entries(colorMap))(
  'updates hex color code to "%s" when input is %s',
  (colorName, hexCode) => {
    document.body.innerHTML = `
      <div id="circle" style="width: 100px; height: 100px;"></div>
      <input type="text" id="colorName" />
      <span id="colorHexCode">#663399</span>
    `;
    
    // Simulate window.onload function
    window.onload(); // This will trigger the onload function

    // Get the input field and hex code display
    const input = document.getElementById('colorName');
    const colorHexCode = document.getElementById('colorHexCode');
    
    // Set input value to the colorName
    input.value = colorName;
    
    // Manually create a keypress event
    const event = new KeyboardEvent('keypress', { key: 'Enter' });

    // Dispatch the event on the input element
    input.dispatchEvent(event);

    // Check if the colorHexCode has been updated to the correct hex value
    expect(colorHexCode.textContent).toBe(hexCode); // The expected hex value for the color
  }
);
