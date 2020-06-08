$(function(){
   
    // 즐겨찾기
    $('.favorite_btn').click(function (e) {
        if (!$(this).hasClass('disabled')) {

            if ($(this).attr('rel') == 'del') {
                $(this).addClass('on');
                $('.layer_pop.bookmark').removeClass('del').addClass('add');
                $('.layer_pop.bookmark').fadeIn().delay(500).fadeOut();
                $(this).attr('rel', 'add');
            } else if ($(this).attr('rel') == 'add') {
                $(this).removeClass('on');
                $('.layer_pop.bookmark').removeClass('add').addClass('del');
                $('.layer_pop.bookmark').fadeIn().delay(500).fadeOut();
                $(this).attr('rel', 'del');
            }
        };
    });

    /* 기본 얼럿 */
    $('.layer_alert_open').click(function(e){
        $('.layer_alert').show();
    });
    $('.layer_alert .btn_box a').click(function (e) {
        $('.layer_alert').hide();
    });

    /* 공지사항 list */
    $('.notice_list li').click(function () {
        $(this).find('div').slideToggle('fast').parent('li').siblings('.notice_list li').find('div').slideUp('fast');
        $(this).toggleClass('on').siblings('.notice_list li').removeClass('on');
    });
    var payment_padding = $('.final_payment_box').height();
    $('.payment_box').css('padding-bottom', payment_padding + 24);
    $('#ok_cashback').css('padding-bottom', payment_padding + 24);
    //$('.ticket_list').css('padding-bottom', payment_padding + 24);
    //$('.ok_cashback_list').css('padding-bottom', payment_padding + 24);
    //$('.frequently_used_cards').css('padding-bottom', payment_padding + 24);
    //$('.admission_ticket').css('padding-bottom', payment_padding + 24);

    $('.btn_refund_policy').click(function(){
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).parent('p').next('div').hide();
        } else {
            $(this).addClass('on');
            $(this).parent('p').next('div').show();
        }
    });

    $('.info_top .btn_payment').click(function(){
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).closest('.info_top').next('.info_list_box').hide();
        } else {
            $(this).addClass('on');
            $(this).closest('.info_top').next('.info_list_box').show();
            
        }
    });
    // $('.cus_check input').click(function(){
    //     var chk = $(this).is(":checked");//.attr('checked');
    //     if (chk) {
    //         $(this).parent('.cus_check').hide();
    //         $(this).parent('.cus_check').next('.cus_select').show();
    //     }
    // });
    $('.cus_check input').click(function () {
        var chk = $(this).is(":checked");//.attr('checked');
        if (chk) {
        }
    });

    $('.input_box input').focus(function () {
        $(this).closest('.input_box').css('border-bottom-color', '#333');
    });
    $('.input_box input').blur(function () {
        $(this).closest('.input_box').css('border-bottom-color', '#e2e2e2');
    });
    
    /* 결제시 페이지 이동  */
    $('.btn_link_coupon').click(function () {
        $.mobile.changePage('05_booking_09_voucher.html', { transition: 'slide', changeHash: true });
        
    });
    $('.btn_link_admission_ticket').click(function () {
        $.mobile.changePage('05_booking_09_voucher.html', { transition: 'slide', changeHash: true });
        
    });
    $('.btn_link_ok_cashback').click(function () {
        $.mobile.changePage('05_booking_11_okcashback.html', { transition: 'slide', changeHash: true });
        
    });

})

