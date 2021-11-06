console.log("Your index.js file is loaded correctly!");

$(".project-container").hover(function() {
    $(this).css(
        "box-shadow", "10px 10px 10px #888"
    );
}, function() {
    $(this).css(
        "box-shadow", "0px 0px 0px #888"
    );
});