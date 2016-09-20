$(function () {
  $('#submit').on('click', function () {
    var answer = $("input[name=optradio]:checked").val();

    if (answer === "correct") {
      alert('Correct!');
      window.location = "itsuko.html";
    } else {
      alert('Nope! Try again =)');
    }

    return false;
  });
});
