$(function(){
    $('.footer .nav a').click(function (e){
        $(this).addClass('on').siblings().removeClass('on');
    });
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
    /**/
    
    $('.join_input li input').focus (function () {
        $(this).closest('li').css('border-bottom-color','#333');
    });
    $('.join_input li input').blur(function () {
        $(this).closest('li').css('border-bottom-color', '#e2e2e2');
    });
})
