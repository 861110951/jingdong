$('.service-pop-item.telephone').load('./fs/quickService/telephone.html');
$('.service-pop-item.plane').load('./fs/quickService/plane.html');
$('.service-pop-item.hotel').load('./fs/quickService/hotel.html');
$('.service-pop-item.game').load('./fs/quickService/game.html');
// hover更换图片
$('.service-item .service-ico-img-hover').hover(function () {
    $(this).addClass('service-ico-hover');
},
    function () {
        $(this).removeClass('service-ico-hover');
    })
var extendTime;
// 前四个图标都类名service-frame 鼠标对应选项弹出对应
$('.service-frame').mouseenter(function () {
    $(this).addClass('service-frame-on').siblings().removeClass('service-frame-on');
    clearTimeout(extendTime);
    extendTime = setTimeout(function () {
        // this移动到那个li做标记service-frame-on 其他之前的service-frame-on移除      
        //前四个图标父级添加类名做标记已经移入
        $('.services').addClass('service-extend');
    }, 300)

    // 前四个图标触发 对应的.service-pop-item元素显示与隐藏
    if ($(this).hasClass('service-frame2')) {
        // 移动到第四个图标添加.frame2-important标记
        $('.service-frame2').addClass('frame2-important');
        $('.service-pop-item.game').addClass('item-show').siblings().removeClass('item-show');
    } else if ($(this).hasClass('telephone')) {
        $('.service-pop-item.telephone').addClass('item-show').siblings().removeClass('item-show');
    } else if ($(this).hasClass('plane')) {
        $('.service-pop-item.plane').addClass('item-show').siblings().removeClass('item-show');
    } else if ($(this).hasClass('hotel')) {
        $('.service-pop-item.hotel').addClass('item-show').siblings().removeClass('item-show');
    }
})


// 点击按钮关闭
$('.close').click(function () {
    $('.service-frame-on').removeClass('service-frame-on')
    $('.services').removeClass('service-extend');
    $('.service-frame2').removeClass('frame2-important');
})
