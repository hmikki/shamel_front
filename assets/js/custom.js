function ImageViewCrud(input,name) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            $('#Image-crud-'+name)
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
};
function VideoViewCrud(input,name) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            $('#Image-crud-'+name)
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
};
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}