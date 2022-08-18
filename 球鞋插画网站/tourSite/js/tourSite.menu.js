$(function () {
    console.log('文档就绪时运行');
})

$(function () {
    $('#contactLink').popover();
})

$(function () {
    var url = document.location.href;
    var filename = url.split('/').pop();
    var $navItem = $('.navbar-nav [href$="' + filename + '"]').parents('.nav-item').addClass('active');
    console.log($navItem);
})