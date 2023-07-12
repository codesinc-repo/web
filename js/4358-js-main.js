$("#thework").mixItUp({ animation: { duration: 1000 } });
$(".process-box").hover(
  function () {
    $(this).find(".process-intro").hide();
    $(this).find(".process-content").fadeIn();
  },
  function () {
    $(this).find(".process-content").hide();
    $(this).find(".process-intro").fadeIn();
  }
);
$("#contactForm")
  .validator()
  .on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      formError();
      submitMSG(false, "Did you fill in the form properly?");
    } else {
      event.preventDefault();
      submitForm();
    }
  });
function submitForm() {
  var name = $("#name").val();
  var email = $("#email").val();
  var msg_subject = $("#msg_subject").val();
  var message = $("#message").val();
  $.ajax({
    type: "POST",
    url: "php/contact.php",
    data:
      "name=" +
      name +
      "&email=" +
      email +
      "&msg_subject=" +
      msg_subject +
      "&message=" +
      message,
    success: function (text) {
      if (text == "success") {
        formSuccess();
      } else {
        formError();
        submitMSG(false, text);
      }
    },
  });
}
function formSuccess() {
  $("#contactForm")[0].reset();
  submitMSG(true, "Message Submitted!");
}
function formError() {
  $("#contactForm")
    .removeClass()
    .addClass("shake animated")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(this).removeClass();
      }
    );
}
function submitMSG(valid, msg) {
  if (valid) {
    var msgClasses = "h4 text-success";
  } else {
    var msgClasses = "h4 text-danger";
  }
  $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
$("#work").magnificPopup({
  delegate: "a.zoom",
  type: "image",
  fixedContentPos: false,
  removalDelay: 300,
  mainClass: "mfp-fade",
  gallery: { enabled: true, preload: [0, 2] },
});
$(".popup-img").magnificPopup({
  type: "image",
  removalDelay: 300,
  mainClass: "mfp-fade",
});
$(document).ready(function () {
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});
$(document).ready(function () {
  $(".scroll-link").on("click", function (event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID("#" + sectionID, 750);
  });
  $(".scroll-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1200);
  });
});
function scrollToID(id, speed) {
  var offSet = 69;
  var targetOffset = $(id).offset().top - offSet;
  $("html,body").animate({ scrollTop: targetOffset }, speed);
}
if (typeof sr == "undefined") {
  window.sr = ScrollReveal({ duration: 1500, delay: 50 });
}
Royal_Preloader.config({
  onComplete: function () {
    triggerReveals();
  },
});
function triggerReveals() {
  sr.reveal(".bottomReveal", { origin: "bottom" })
    .reveal(".leftReveal", { origin: "left" })
    .reveal(".rightReveal", { origin: "right" })
    .reveal(".topReveal", { origin: "top" });
  sr.reveal(".rotateBottomReveal", { origin: "bottom", rotate: { x: 90 } })
    .reveal(".rotateLeftReveal", { origin: "left", rotate: { x: 90 } })
    .reveal(".rotateRightReveal", { origin: "right", rotate: { x: 90 } })
    .reveal(".rotateTopReveal", { origin: "top", rotate: { x: 90 } });
  sr.reveal(".scaleReveal", { origin: "top", scale: 0.6 });
}
$(document).on("click", ".navbar-collapse.in", function (e) {
  if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
    $(this).collapse("hide");
  }
});
var current = 1;
var height = jQuery(".ticker").height();
var numberDivs = jQuery(".ticker").children().length;
var first = jQuery(".ticker h1:nth-child(1)");
setInterval(function () {
  var number = current * -height;
  first.css("margin-top", number + "px");
  if (current === numberDivs) {
    first.css("margin-top", "0px");
    current = 1;
  } else current++;
}, 2500);
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
