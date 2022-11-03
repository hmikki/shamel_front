$(document).ready(function(){
    $(".owl-carousel.owl-theme#works").owlCarousel({
            loop:true,
            margin:10,
            rtl:true,
            arrows: false,
            dots: false,
            items:4,
            autoWidth: true,
            video: true,
            autoHeight:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                    loop:true
                }
            }
    });
    $(".owl-carousel.owl-theme#partners").owlCarousel({
            loop:true,
            margin:50,
            nav:false,
            rtl: true,
            dots: false,
            autoWidth:true,
            items: 5,
            center: true,
            responsive:{
                0:{
                    items:3
                },
                600:{
                    items:4
                },
                1000:{
                    items:5
                }
            }
    });
    $('.owl-carousel.owl-theme#testimonial').owlCarousel({
        items:3,
        merge:true,
        loop:true,
        margin:20,
        video:true,
        lazyLoad:true,
        rtl: true,
        autoWidth: true,
        autoHeight: true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

  });

  AOS.init();

function imagePopup(){
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    // modalImg.style.height = '400px';
    // modalImg.style.width = '400px';
    modalImg.src = img.src;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    span.style.cursor = "pointer";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}
function videoPopup(){
    // Get the modal
    var modal = document.getElementById("myVideoModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var video = document.getElementById("myVideo");
    var modalvideo = document.getElementById("video01");
    var captionText = document.getElementById("caption_video");

    modal.style.display = "block";
    modalvideo.src = video.src;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[1];
    span.style.cursor = "pointer";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}
function CoverImagePopup(){
    // Get the modal
    var modal = document.getElementById("myCoverModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myCoverImg");
    var modalImg = document.getElementById("cover01");
    var captionText = document.getElementById("caption_cover");

    modal.style.display = "block";
    modalImg.src = img.src;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[2];
    span.style.cursor = "pointer";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}


