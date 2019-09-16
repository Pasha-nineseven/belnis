$(document).ready(function() {
	flexibility(document.documentElement);
	
    //MENU
    $('body').on('click','.js-menu-btn', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.page-header').toggleClass('active');
        $('.menu-bg').fadeToggle();
        $('body').toggleClass('fixed');
    });
    $('body').on('click','.js-menu-bg', function(e){
        e.preventDefault();
        $('.page-header').removeClass('active');
        $('.menu-btn').removeClass('active');
        $(this).fadeOut();
        $('body').removeClass('fixed');
    });

    //SUBMENU
    $('body').on('click','.js-menu-link-sub', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parents('.menu-item').find('.submenu').slideToggle();

    });



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
     //POPUP-PHOTO
    $(".js-photo-link").fancybox({
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




    //SERVICES SCROLL
    $("body").on("click", ".js-scroll-link", function(e){
        e.preventDefault();
        $('.services-aside__link').removeClass('active');
        $(this).addClass('active');
        var anch = $(this).attr("href");
        $('html,body').animate({scrollTop: $(anch).offset().top},'slow');
    });

    //TOP-SEARCH
    $("body").on("click", ".js-menu-search__link", function(e){
        e.preventDefault();
        $('.page-search').fadeToggle(150);
    });
    $(document).click(function (e){ // событие клика по веб-документу
        var div = $(".page-search__form,.js-menu-search__link"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.page-search').fadeOut(150);
        }
    });



    //other-slider
    if ($('.other-slider').length>0) {
        var $gallery = $('.other-slider');

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
            slidesToShow: 2,
            slidesToScroll: 1,
    //      responsive: [
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



    //list-slider
    if ($('.list-slider').length>0) {
        var $gallery = $('.list-slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:false,
            dots:true,
            useTransform:true,
            accessibility: false,
            infinite: false,
            fade:true
    //      responsive: [
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


$(window).on("scroll", function() {
    var ftrHeight = $('.page-footer').innerHeight();

    //console.log($(window).scrollTop() + $(window).height());
    if($(window).scrollTop() + $(window).height() > ($(document).height()-ftrHeight)){
        $('.application').addClass('active');
    }  else $('.application').removeClass('active');
});


$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions


// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 14px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
        <li><a href="text.html">Text</a></li> \
		<li><a href="contacts.html">Contacts</a></li> \
        <li><a href="profile.html">Profile</a></li> \
        <li><a href="services.html">Services</a></li> \
        <li><a href="spisok.html">Spisok</a></li> \
        <li><a href="shablon.html">Shablon</a></li> \
        <li><a href="event.html">Event</a></li> \
		<li><a href="index.html">Index</a></li> \
	</ol> \
</div>');
