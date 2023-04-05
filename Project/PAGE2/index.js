const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector(".dropdown");

hamburger.addEventListener("click", function () {
  $(".dropdown").css({
    height: "260px",
    opacity: "1",
    zIndex: "2",
  });

  $(".dropdown a").css({
    display: "block",
  });

  $("#overlay").css({
    display: "block",
    zIndex: "1",
  });
});

$("#overlay").click(function () {
  $(".dropdown").css({
    opacity: "0",
    height: "0",
  });

  $(".dropdown a").css({
    display: "none",
  });

  $("#overlay").css({
    display: "none",
  });
});
