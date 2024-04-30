console.log("This is Saas Dashboard");

//Jquery syntax
//$(selector).action(callback function)

$(document).click((e) => {
  $("#myTextarea").on("input", function () {
    e.preventDefault();
    let words = $(this).val().trim().split(/\s+/);
    let characters = $(this).val().length;
    $("#wordCount").text(words.length);
    $("#charRemaining").text(250 - characters);
    console.log(words);
  });
});



