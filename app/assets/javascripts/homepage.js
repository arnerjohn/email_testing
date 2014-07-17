//= require ./homepage/public
//= require angular
//= require jquery.ui.datepicker

$("#industry_professional").click(function(){
  $(".industry_explanation").show('slow');
  $(".industry_explanation input[type=text]").focus();
});

$(".non_industry").click(function(){
  $(".industry_explanation").hide('slow');
});

// $("#show_partner_code").click(function(){
//   $(this).hide('slow');
//   $("#partner_code").toggle('slow');
// });

function engageStripe() {
  if ( $(".stripe_test_program_indicator").length > 0 ) {
    $(".stripe-button-el").click();
  }
}

function checkForErrors () {
  if ( $(".error").length > 0 ) {
    $(".error").each(function() {
      if ( $(this).children().prop("tagName") == "INPUT" ) {
        $(this).children('input').after("<small>Invalid</small>");
      }
    });
  }
}


$(".date-pick").datepicker({
  dateFormat: "yy-mm-dd",
  autoFocusNextInput: true
});

$(".menu-btn").click(function () {
  $("#container").toggleClass("container-push");
  $("nav.pushy").toggleClass("pushy-left");
  $("nav.pushy").toggleClass("pushy-open");
});

$("nav.pushy a").click(function () {
  $("#container").toggleClass("container-push");
  $("nav.pushy").toggleClass("pushy-left");
  $("nav.pushy").toggleClass("pushy-open");
});

$("#engaged_contact_copy_launch").click(function () {
  $("#engaged_contact_copy_show").toggle();
  var caret_is_down = $("#engaged_contact_copy_launch p i").hasClass("fa-caret-down");
  if ( caret_is_down ) {
    $("#engaged_contact_copy_launch p i").removeClass("fa-caret-down").addClass("fa-caret-right");
  } else {
    $("#engaged_contact_copy_launch p i").removeClass("fa-caret-right").addClass("fa-caret-down");
  }
});

$("#button_to_what_you_get").click(function () {
  $("#link_to_what_you_get").click();
});

$(".faq_answers").click(function(e) {
  $(".faq_questions.open").removeClass("open").hide();
  $answer_id = $(this).attr("data-answer");
  $("#" + $answer_id).addClass("open").fadeToggle("slow");
  e.preventDefault();
});

$("#live_slideshow").addClass("open").show();

$(".get_capstory").click(function(){
  window.location = "/update_test_program_visit?phaseline=1"
});

$(".buy_now").click(function(){
  window.location = "/update_test_program_visit?phaseline=2"
})

$(".sample_capsule").click(function(){
	window.location = "http://www.capstory.me/reynoldslovestory";
});
checkForErrors();
engageStripe();
