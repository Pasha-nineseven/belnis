$(document).ready(function() {
	flexibility(document.documentElement);
	// $("body").on("click", ".test", function(e){
	// 	e.preventDefault();
	// })


	//POPUP-INLINE
    $(".js-popup-inline").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        buttons: [
            "close"
        ],
    });
    $("body").on("click", ".js-popup-close", function(e){
        e.preventDefault();
        parent.jQuery.fancybox.getInstance().close();
    });

    //POPUP-VIDEO
    $(".js-video-link").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        buttons: [
            "close"
        ],
    });


    //FS
    if ($('.fs').length>0) {
    	$('.fs').styler();
    };



    //UPLOAD FILE
    $("#file-upload").change(function() {
        var ele = document.getElementById($(this).attr('id'));
        var result = ele.files;
        for(var x = 0;x< result.length;x++){
         var fle = result[x];
            $("#file-upload-output").append("<div class='file-upload-output__item'>" + fle.name + "<a href='#' class='file-upload-output__close'>Удалить файл" + "</a>" + "</div>");        
        }
    });
    $("body").on("click", ".file-upload-output__close", function(e){
        e.preventDefault();
        $(this).parents(".file-upload-output__item").last().remove();
    });


    //ACCORDEON
    $("body").on("click", ".accordeon__link", function(e){
        e.preventDefault();
        $(this).parents('.accordeon__item').toggleClass('active');
        $(this).next('.accordeon__info').slideToggle();
    });


    //TABS
    if ($('.resp-tabs').length>0) {
        $('.resp-tabs').responsiveTabs({
            startCollapsed: 'accordion'
        });
    }


    //default-slider
	if ($('.default-slider').length>0) {
		var $gallery = $('.default-slider');

	    $gallery.slick({
			speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			arrows:true,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 3,
  			slidesToScroll: 1,
  	// 		responsive: [
			//     {
			//       breakpoint: 850,
			//       settings: {
			//         slidesToShow: 5,
			//         slidesToScroll: 1,
			//       }
			//     },
			//     {
			//       breakpoint: 700,
			//       settings: {
			//         slidesToShow: 4,
			//         slidesToScroll: 1,
			//       }
			//     },
			//     {
			//       breakpoint: 600,
			//       settings: {
			//         slidesToShow: 3,
			//         slidesToScroll: 1,
			//       }
			//     },
			//     {
			//       breakpoint: 500,
			//       settings: {
			//         slidesToShow: 2,
			//         slidesToScroll: 1,
			//       }
			//     },
			// ]
	    });
	};
});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions


// links pages
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
// 	<style> \
// 		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
// 		#pages a { text-decoration: none; } \
// 		#pages li { margin: 5px 0; } \
// 	</style> \
// 	<ol id="pages"> \
// 		<li><a href="about.html">About</a></li> \
// 		<li><a href="index.html">Index</a></li> \
// 	</ol> \
// </div>');
