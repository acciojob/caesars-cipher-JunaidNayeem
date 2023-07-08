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
const words = encodedStr.split(" "); // String to Array
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let decoded_word = "";
    for (let j = 0; j < word.length; j++) {
      const char = word.charAt(j);
      const decoded_char = lookup[char];
      decoded_word += decoded_char;
    }
    decodedArr.push(decoded_word);
  }
  return decodedArr.join(" ");
}
  // Return the decoded string
  return decodedString;
	// console.log("decode",decodedString);
	// window.show(decodedString);
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
