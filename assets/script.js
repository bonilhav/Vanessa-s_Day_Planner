const today = moment();
$("#today").text(today.format("dddd, MMMM Do, YYYY"));


$(".save_btn").on("click", function() {
    let noteValue = $(this).siblings(".to-do").val();
    let timeKey = $(this).parent().attr("id");

    window.localStorage.setItem(timeKey, noteValue);
});

$("#6 .to-do").val(localStorage.getItem("6"));
$("#7 .to-do").val(localStorage.getItem("7"));
$("#8 .to-do").val(localStorage.getItem("8"));
$("#9 .to-do").val(localStorage.getItem("9"));
$("#10 .to-do").val(localStorage.getItem("10"));
$("#11 .to-do").val(localStorage.getItem("11"));
$("#12 .to-do").val(localStorage.getItem("12"));
$("#13 .to-do").val(localStorage.getItem("13"));
$("#14 .to-do").val(localStorage.getItem("14"));
$("#15 .to-do").val(localStorage.getItem("15"));
$("#16 .to-do").val(localStorage.getItem("16"));



function cssUpdater () {
    let hour = moment().hours()

    $(".css_upt").each(function() {
        let timeKey = parseInt($(this).parent().attr("id"));
        if(timeKey < hour) {
            $(this).removeClass("present")
            $(this).addClass("past")
        } else if(timeKey === hour) {
            $(this).addClass("present")
        }
    });
};

cssUpdater()
