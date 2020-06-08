$(function(){
    var swiper1 = new Swiper('.movie_list', {
        spaceBetween: 0,
        slidesPerView:3,
        slideToClickedSlide: true,
        centeredSlides: true,
        touchRatio:1,
        on: {
            transitionStart: function () {
                var y = 0;
                var z = 0;
                var x = 0;
                translate = this.getTranslate();
                slidesPerView = this.params.slidesPerView == 'auto ' ? this.slidesPerViewDynamic() : this.params.slidesPerView;
                if (this.slides.length <= slidesPerView) {
                    return;
                }
                if (this.activeIndex > 1 && this.activeIndex > slidesPerView / 2) { //처음 1,2 슬라이드 건너뛰고 3번째부터
                    translate = this.activeIndex == this.slides.length - 1 ? (-this.snapGrid[this.snapGrid.length - 2]) -25 : this.translate -1;
                    //console.log(this.activeIndex, this.slides.length - 1, -this.snapGrid[this.snapGrid.length - 2],translate);
                    if (this.isHorizontal()) { //수평 슬라이드
                        x = this.params.rtl ? -translate : translate+1; //역방향이라면 -값, 순방향은 +
                        $('.movie_back').fadeIn();//처음으로 버튼 생성
                    } else {
                        y = translate;
                    }
                } else { // 처음으로
                    y = 0;
                    z = 0;
                    x = 0;
                    $('.movie_back').fadeOut();//처음으로가기 버튼 삭제
                }
                if (this.support.transforms3d) { 
                    this.$wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); 
                }
                else { 
                    this.$wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); 
                }
            }
        },
    });
    swiper1.setTranslate();

    var swiper2 = new Swiper('.movie_calendar', {
        slidesPerView: 'auto',
        spaceBetween: 0,
    });

    
    $('.movie_list li').bind('touchstart', function (e) {
        $(this).addClass('select').siblings('li').removeClass('select');
    });
    
    $('.movie_back').click(function(){
        $('.swiper-slide').removeClass('select');
        swiper1.slideTo(0); 
    });
    
    // 영화관 폴딩 토글
    $('.cinema_name').click(function(e) {
        if( !$(this).hasClass('disabled') ){
            $(this).parent('.cinema_sel').next('.cinema_info').slideToggle('fast').parent('li').siblings('.cinema_list li').find('.cinema_info').slideUp('fast');
            $(this).parent('.cinema_sel').toggleClass('open').parent('li').siblings('.cinema_list li').find('.cinema_sel').removeClass('open');            
        };
    });
    $('.movie_list .disabled').click(function(e){
        $('.layer_alert').show();
    });

    $('.btn_local_cinema').click(function(){
        $('.layer_full').animate({ scrollTop: 0 }, 400);
        return false;
    });
    $('.ticket_num i').click(function(){
        $('.layer_ticket').show();
        var divicee_height = $(window).height();
        $('#home').height(divicee_height);
        $('.layer_ticket').show();
    });
    $('.layer_ticket .btn_closed').click(function(){
        $('.layer_ticket').hide();
        $('#home').height('auto');
    });

    $('.cinema_time_box').click(function () {
        $.mobile.changePage('05_booking_04_seat.html', { transition: 'slide', changeHash: true });

    });
});
