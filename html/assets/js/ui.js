$(function () {
	/* 공지사항 list */
	$('.step_list_li .tit').click(function () {
		$(this).parent('li').find('.inner_div').slideToggle('fast').parent('li').siblings('.payment_step_list li').find('.inner_div').slideUp('fast');
		$(this).parent('li').toggleClass('on').siblings('.payment_step_list li').removeClass('on');
	});
	
	
	$('.tab_list li a').click(function () {
		$('.tab_list li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('.tab_cont').hide();
		var activeTab = $(this).parent('li').attr('rel');
		console.log(activeTab);
		$('#' + activeTab).fadeIn();
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	$('#return-to-top').click(function () {      // When arrow is clicked
		$('body,html').animate({
			scrollTop: 0                       // Scroll to top of body
		}, 500);
	});

	/* 공지사항 list */
	$('.notice_list li').click(function () {
		$(this).find('div').slideToggle('fast').parent('li').siblings('.notice_list li').find('div').slideUp('fast');
		$(this).toggleClass('on').siblings('.notice_list li').removeClass('on');
	});

	$('.more_list_btn').click(function(){

		if( $(this).hasClass('more') == true ){
			$(this).find('a').text('닫기');
			$(this).removeClass('more');
			$('.local_result').css('height', 'auto');
		}else{
			$(this).addClass('more');
			$(this).find('a').text('더보기');
			$('.local_result').css('height', 100 + 'px');
		}
	});
	$('.local_list li').click(function () {
		$(this).addClass('on').siblings('li').removeClass('on');
	});

	$('.cinema_img').click(function(){
		$('.bg_wrap').show();
		$('.cinema_slider_layer').show();
		swiper4.update();
	});
	$('.cinema_slider_layer .btn_closed_popup').click(function(){
		$('.cinema_slider_layer').hide();
		$('.bg_wrap').hide();
	});

	$('.preview_list li a').click(function () {
		$('.bg_wrap').show();
		$('.preview_slider_layer').show();
		preview_slider.update();
	});
	$('.preview_slider_layer .btn_closed_popup').click(function () {
		$('.preview_slider_layer').hide();
		$('.bg_wrap').hide();
	});


	$('.steel_cut_list li a').click(function () {
		$('.bg_wrap').show();
		$('.steel_slider_layer').show();
		steel_slider.update();
	});
	$('.steel_slider_layer .btn_closed_popup').click(function () {
		$('.steel_slider_layer').hide();
		$('.bg_wrap').hide();
	});


	$('.join_point').click(function(){
		$('.input_point').css('display', 'inline-flex');
	});
	$('.input_point button').click(function () {
		$('.input_point').hide();
	});

	$('.btn_report_layer').click(function(){
		$(this).closest('.comment_box').next('.report_layer').show();
	});
	$('.report_layer a').click(function () {
		$(this).closest('.report_layer').hide();
	});

	$('.btn_report_layer').click(function () {
		$(this).closest('.comment_box').next('.report_layer').show();
	});
	$('.point_info button').click(function () {
		$('.tooltip_layer').show();
	});
	
	$('.tooltip_layer a').click(function(){
		$(this).closest('.tooltip_layer').hide();
	});

	$('.btn_calendar').click(function () {
		$(this).next('.calendar_layer').show();
	});

	$('.calendar_layer .day_list li').click(function () {
		$(this).closest('.calendar_layer').hide();
	});



	/* mobile */

	// mobile menu
	function mmenuClose() {
		$('body').removeClass('menu_open');
		$('header nav').removeClass('menu_open');
		
	}
	function mmenuOpen() {
		$('body').addClass('menu_open');
		$('header nav').addClass('menu_open');
	}

	$('.btn_menu').click(function () {
		mmenuOpen();
		return false;
	});

	$('.nav_dimmed').click(function () {
		mmenuClose();
		return false;
	});

	$('.search_box input').on('propertychange change keyup paste input', function () {
		$(this).next('.btn_input_del').show();
		var currentVal = $(this).val();
		var oldVal;
		if (currentVal == oldVal) {
			return;
		}
		oldVal = currentVal;
	});

	$('.btn_input_del').click(function () {
		$(this).prev('input').val('');
		$(this).hide();
	});

});
