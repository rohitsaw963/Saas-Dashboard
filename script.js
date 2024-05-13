//*****-------------------Test
console.log("This is Saas Dashboard.");

function countWords(inputField, maxWords) {
  let inputValue = inputField.value;
  let wordCount = 0;
  let words = inputValue.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      wordCount++;
    }
  }

  let wordCountSpan, wordRemainingSpan;

  switch (inputField.id) {
    case "inputFieldName":
      wordCountSpan = document.getElementById("wordCountName");
      wordRemainingSpan = document.getElementById("wordRemainingName");
      break;
    case "inputFieldDescription":
      wordCountSpan = document.getElementById("wordCountDescription");
      wordRemainingSpan = document.getElementById("wordRemainingDescription");
      break;
    case "inputFieldLabel":
      wordCountSpan = document.getElementById("wordCountLabel");
      wordRemainingSpan = document.getElementById("wordRemainingLabel");
      break;
  }

  if (wordCount > maxWords) {
    wordCountSpan.innerHTML = "Maximum number of words exceeded";
    wordRemainingSpan.innerHTML = "";
  } else {
    wordCountSpan.innerHTML = wordCount;
    wordRemainingSpan.innerHTML = maxWords - wordCount;
  }
}
