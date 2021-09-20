
jQuery(document).ready(function ($) {

	$('.header__menu li.menu-item-has-children > a').on('click', function(e) {
		e.preventDefault();
		if (!$(this).parent().hasClass('menu-active')) {
			$('.header__menu li.menu-item-has-children > a').parent().removeClass('menu-active');
			$('.header__menu li.menu-item-has-children > a').next('.sub-menu').slideUp(200);
		}


		if ($(this).parent().hasClass('menu-active')) {
			window.location.href = $(this).attr('href');
		} else {
			$(this).parent().addClass('menu-active');
			$(this).next('.sub-menu').slideDown(200);
		}
		
	});



	$('.answer-item').on('click', function(e) {

		if ($(this).hasClass('answer-item-active')) {
			$('.answer-item').children('p').slideUp(200);
			$('.answer-item').removeClass('answer-item-active');
		} else {
			$('.answer-item').children('p').slideUp(200);
			$('.answer-item').removeClass('answer-item-active');
			$(this).children('p').slideDown(200);
			$(this).addClass('answer-item-active');
		}

		
	});


  $('.overlay').on('click', function() {
		$('.popup').fadeOut(300);
		$(this).fadeOut(300);
	});
	$('.close').on('click', function() {
		$('.popup').fadeOut(300);
		$('.overlay').fadeOut(300);
	});

	
	$(".header-bottom-with").hover(function(){ 
		$('.header-bottom-with-text').fadeIn(200);
	}, function(){  	
		$('.header-bottom-with-text').fadeOut(200);
	});
	

	


  
});











	


