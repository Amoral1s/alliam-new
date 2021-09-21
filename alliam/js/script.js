
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


  $('.overlay-popup').on('click', function() {
		$('.popup').fadeOut(300);
		$(this).fadeOut(300);
	});
	$('.close').on('click', function() {
		$('.popup').fadeOut(300);
		$('.overlay-popup').fadeOut(300);
	});

	
	$(".header-bottom-with").hover(function(){ 
		$('.header-bottom-with-text').fadeIn(200);
	}, function(){  	
		$('.header-bottom-with-text').fadeOut(200);
	});

	
	$('.call-menu').on('click', function() {
		$('.menu-services .close-serv').slideDown(200);
    $('.menu-services .open-serv').slideUp(200);
    $('.menu-nav-services').removeClass('menu-nav-active');

    if ($('.menu-nav').hasClass('menu-nav-active')) {
      $('body').css('overflow', 'auto');
      $('html').css('overflow', 'auto');
    } else {
      $('body').css('overflow', 'hidden');
        $('html').css('overflow', 'hidden');
    }
    $('.menu-services .close-main').slideToggle(200);
    $('.menu-services .open-main').slideToggle(200);
    $('.menu-nav-main').toggleClass('menu-nav-active');
  });
	$('.services-toggle').on('click', function(e) {
		$('.menu-services .close-main').slideDown(200);
    $('.menu-services .open-main').slideUp(200);
    $('.menu-nav-main').removeClass('menu-nav-active');

		e.preventDefault();
    if ($('.menu-nav').hasClass('menu-nav-active')) {
      $('body').css('overflow', 'auto');
      $('html').css('overflow', 'auto');
    } else {
      $('body').css('overflow', 'hidden');
        $('html').css('overflow', 'hidden');
    }
    $('.menu-services .close-serv').slideToggle(200);
    $('.menu-services .open-serv').slideToggle(200);
    $('.menu-nav-services').toggleClass('menu-nav-active');
  });

  $('.call-message').on('click', function() {
    $('.overlay-popup').fadeIn(200);
    $('.popup-consult').fadeIn(200);
  });

	$('.menu-nav-main .menu-nav-container').on('click', function(e) {
    var target = e.target;

    if ($(target).hasClass('overlay')) {
        if ($('.menu-nav').is(':visible')) {
          $('body').css('overflow', 'auto');
          $('html').css('overflow', 'auto');
        }
        $('.menu-nav').removeClass('menu-nav-active');
        $('.menu-services .close-main').slideToggle(200);
        $('.menu-services .open-main').slideToggle(200);
    } 
  });
	$('.menu-nav-services .menu-nav-container').on('click', function(e) {
    var target = e.target;

    if ($(target).hasClass('overlay')) {
        if ($('.menu-nav').is(':visible')) {
          $('body').css('overflow', 'auto');
          $('html').css('overflow', 'auto');
        }
        $('.menu-nav').removeClass('menu-nav-active');
        $('.menu-services .close-serv').slideToggle(200);
        $('.menu-services .open-serv').slideToggle(200);
    } 
  });


  if (window.screen.width >= 992) {
    const costItem = document.querySelectorAll('.cost-left-item');
    const costTab = document.querySelectorAll('.cost-right-item');

    if (costItem.length > 0) {
      costItem.forEach((e, i) => {
        e.addEventListener('click', () => {
          costItem.forEach((e, i) => {
            e.classList.remove('cost-left-item-active');
            costTab[i].style.display = 'none';
          });
          costTab[i].style.display = 'block';
          e.classList.add('cost-left-item-active');
        });
      });
    }
  } else {
    $('.cost-mobile-item-title').on('click', function() {
      $(this).next().slideToggle(200);
    })
  }

  
});











	


