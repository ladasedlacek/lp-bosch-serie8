// accordion
$(".lpFAQs > .lpFAQs__wrapper > .lpFAQs__paragraph").hide(),
$(".lpFAQs > .lpFAQs__wrapper").click(function (e) {
    if (!$(e.target).closest(".faqsHeadline").length) return;
    return (
        $(this).hasClass("lpFAQs__wrapper--active")
            ? $(this).removeClass("lpFAQs__wrapper--active").find(".lpFAQs__paragraph").slideUp()
            : ($(".lpFAQs > .lpFAQs__wrapper > .lpFAQs__paragraph").slideUp(), $(".lpFAQs > .lpFAQs__wrapper.lpFAQs__wrapper--active").removeClass("lpFAQs__wrapper--active"), $(this).addClass("lpFAQs__wrapper--active").find(".lpFAQs__paragraph").slideDown()),
        !1
    );
})