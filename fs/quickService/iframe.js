// 话费与流量的切换
// console.log($('iframe'));
$('.tab-iframe li').mouseenter(function(){
    $(this).addClass('tab-item-selected').siblings().removeClass('tab-item-selected');
    var iframeIndex = $(this).index()
    if($(this).index()){
        $('.iframeIndex2').addClass('iframe-show').siblings().removeClass('iframe-show');
    }else{
        $('.iframeIndex1').addClass('iframe-show').siblings().removeClass('iframe-show');
    }
})
