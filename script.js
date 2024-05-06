//*****-------------------Test
console.log("This is Saas Dashboard");

$(document).click(function () {
  $("#myTextarea").on("click", function () {
    const text = $(this).val().trim();
    const words = text.split(/\s+/);
    const characters = text.length;
    $("#wordCount").text(words.length);
    $("#wordRemaining").text(250 - characters);
  });
});
