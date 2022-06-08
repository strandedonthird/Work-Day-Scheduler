// Script for moment.js
let todaysDate = moment().format('dddd, MMM Do YYYY, h:mm:ss A');
$("#currentDay").html(todaysDate);

$(document).ready(function () {
    // .saveBtn information listed below
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        // Save future text into local storage
        localStorage.setItem(time, text);
    });
   
    function trackHour() {
        // Current time for webpage
        let timeNow = moment().hour();

        // Time Block from 08:00 to 17:00
        $(".time-block").each(function () {
           let timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // Blocks to know past, present, and future
            if (timeBlock < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        });
    };

    // Items to be saved into local storage
    $("#8hour .description").val(localStorage.getItem("8hour"));
    $("#9hour .description").val(localStorage.getItem("9hour"));
    $("#10hour .description").val(localStorage.getItem("10hour"));
    $("#11hour .description").val(localStorage.getItem("11hour"));
    $("#12hour .description").val(localStorage.getItem("12hour"));
    $("#13hour .description").val(localStorage.getItem("13hour"));
    $("#14hour .description").val(localStorage.getItem("14hour"));
    $("#15hour .description").val(localStorage.getItem("15hour"));
    $("#16hour .description").val(localStorage.getItem("16hour"));
    $("#17hour .description").val(localStorage.getItem("17hour"));

    trackHour();
});