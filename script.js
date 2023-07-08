// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
	const characters = encodedString.split("");

  // Loop through each character and decode it
  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];

    // Check if the character is a letter
    if (char.match(/[A-Z]/)) {
      // Convert the character to its Unicode value
      let charCode = char.charCodeAt(0);

      // Perform the ROT13 decoding by shifting the character code by 13 places
      if (charCode >= 65 && charCode <= 77) {
        charCode += 13;
      } else if (charCode >= 78 && charCode <= 90) {
        charCode -= 13;
      }

      // Convert the new character code back to a character
      const decodedChar = String.fromCharCode(charCode);

      // Replace the encoded character with the decoded character in the array
      characters[i] = decodedChar;
    }
  }

  // Join the array of characters back into a string
  const decodedString = characters.join("");

  // Return the decoded string
  return decodedString;
	console.log(decodedString);
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
