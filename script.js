//*****-------------------Test
console.log("This is Saas Dashboard");

$(document).each(function () {
  $(":input").on("input", function () {
    var text = $(this).val().trim();
    var words = text.split(/\s+/);
    var characters = text.length;
    $("#wordCount").text(words.length);
    $("#wordcountDesc").text(words.length);
    $("#wordcountLabel").text(words.length);
    $("#wordRemaining").text(250 - characters);
    $("#wordDesc").text(200 - characters);
    $("#wordlabelRemaining").text(250 - characters);
  });
});
