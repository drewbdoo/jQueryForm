$(document).ready(function () {
  $("#submit").on("click", function () {
    let name = $("#name");
    let email = $("#email");
    let number = $("#phone");
    let message = $("#message");
    let arr = [name, email, number];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].val() === "") {
        console.log(arr[i]);
        message.html("Please Fill Out Required Fields");
        message.addClass("warning");
        arr[i].prev().addClass("warning");
      } else {
        message.removeClass("warning");
        arr[i].prev().removeClass("warning");
      }
    }
    if (!$("label").hasClass("warning")) {
      $("#form").remove();
      $("h2").html("Thanks for your feedback!");
    }
  });
});
