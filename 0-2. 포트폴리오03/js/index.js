$(function () {

    var mainSlideOption = {
        arrows: false,
        vertical: true,
    }

    $('.gnb li')
        .eq(0)
        .addClass('on')

    var mainSlide = $('.mainSlide').slick(mainSlideOption);

    mainSlide.on('wheel', function (e) {
        var delta = e.originalEvent.deltaY;
        delta > 0
            ? mainSlide.slick('slickNext')
            : mainSlide.slick('slickPrev')
    });

    mainSlide.on('afterChange', function (e, s, idx) {
        $('.gnb li')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');

        idx % 2 === 0
            ?
            $('.gnb').css({
                color: '#333'
            })
            :
            $('.gnb').css({
                color: '#fff'
            });
    })

    $('.gnb li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        mainSlide.slick('slickGoTo', idx)
    });




















})