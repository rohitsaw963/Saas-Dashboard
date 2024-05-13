//*****-------------------Test
console.log("This is Saas Dashboard.");
function countWords() {
  let inputField = document.getElementById("inputField").value;
  let wordCount = 0;
  let words = inputField.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      wordCount++;
    }
  }
  if (wordCount > 250) {
    document.getElementById("wordCount").innerHTML =
      "Maximum number of words exceeded";
  } else {
    document.getElementById("wordCount").innerHTML = wordCount;
    document.getElementById("wordRemaining").innerHTML = 250 - wordCount;
  }
}
// console.log(wordCount);
// console.log(wordRemaining);
