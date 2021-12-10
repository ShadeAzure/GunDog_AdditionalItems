//ページ制御

$(function(){});
var height = 0;
$(window).on('load resize', function(){
    // navbarの高さを取得する
    height = $('.navbar').height() + 50;
    // bodyのpaddingにnavbarの高さを設定する
    $('body').css('padding-top',height); 
});

$('[href^="#"]').click(function(){
    // 移動先を50px下にずらす
    var adjust = 50;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top + adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
});