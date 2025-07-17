/**
 * Calculates the Euclidean distance between two colors in RGB space
 * @param {string} c1 - First color in hex format
 * @param {string} c2 - Second color in hex format
 * @returns {number} Distance between colors
 */
export function colorDistance(c1, c2) {
  const rgb1 = hexToRgb(c1);
  const rgb2 = hexToRgb(c2);
  return Math.sqrt(
    Math.pow(rgb1.r - rgb2.r, 2) +
    Math.pow(rgb1.g - rgb2.g, 2) +
    Math.pow(rgb1.b - rgb2.b, 2)
  );
}

/**
 * Converts hex color string to RGB object
 * @param {string} hex - Hex color string
 * @returns {Object} RGB object with r, g, b properties
 */
export function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }
  const num = parseInt(hex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

/**
 * Converts RGB object to hex color string
 * @param {Object} rgb - RGB object with r, g, b properties
 * @returns {string} Hex color string
 */
export function rgbToHex(rgb) {
  const { r, g, b } = rgb;
  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}

/**
 * Calculates perceptual color difference using Delta E 2000 approximation
 * More accurate than simple RGB distance for human perception
 * @param {string} c1 - First color in hex format
 * @param {string} c2 - Second color in hex format
 * @returns {number} Perceptual distance between colors
 */
export function perceptualColorDistance(c1, c2) {
  const rgb1 = hexToRgb(c1);
  const rgb2 = hexToRgb(c2);
  
  // Convert to CIE Lab (simplified approximation)
  const lab1 = rgbToLab(rgb1);
  const lab2 = rgbToLab(rgb2);
  
  return Math.sqrt(
    Math.pow(lab1.l - lab2.l, 2) +
    Math.pow(lab1.a - lab2.a, 2) +
    Math.pow(lab1.b - lab2.b, 2)
  );
}

/**
 * Simplified RGB to Lab conversion
 * @param {Object} rgb - RGB object
 * @returns {Object} Lab object with l, a, b properties
 */
function rgbToLab(rgb) {
  // Simplified conversion - not perfect but good enough for game purposes
  const { r, g, b } = rgb;
  const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255 * 100;
  const a = (r - g) / 255 * 100;
  const bVal = (g - b) / 255 * 100;
  return { l, a, b: bVal };
}

/**
 * Checks if two colors are similar within a tolerance
 * @param {string} c1 - First color in hex format
 * @param {string} c2 - Second color in hex format
 * @param {number} tolerance - Tolerance threshold
 * @returns {boolean} True if colors are similar
 */
export function colorsAreSimilar(c1, c2, tolerance = 60) {
  return colorDistance(c1, c2) <= tolerance;
}
  