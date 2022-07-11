// 1）轮播的区域：  内容应该为一个数组 数组中的每一项为每次轮播的内容（DOM元素）
// list: [dom, dom]
// 2) 尺寸： width, height
// 3) 轮播的方式： type:  'animation'(从左到右的轮播) 'fade' (淡入淡出的轮播)
// 4）是否自动轮播： autoChange: true （自动轮播） false （不自动轮播）
// 5）自动轮播时间： autoTime
// 6) 是否展示小圆点: showSpotBtn : true （展示） false（不展示
// 7）是否展示左右按钮：  showChangeBtn: 'always', 'hover', 'hidden'
// 8) 小圆点的位置： spotPosition： 'left'， 'right', 'center'
// 9) 当前图片对应小圆点的颜色： spotColor、

// 中间左侧轮播图大
$('.swiper-1').swiper({
    list: $('.focus-item-img'),
    type: 'fade',
    autoTime: 4000,
    showPosition: 'left',
})
// 中间右侧轮播图小
$('.swiper-2').swiper({
    list: $('.focus-item__recommend'),
    type: 'fade',
    autoTime: 8000,
    showSpotBtn: false,
    showChangeBtn: 'hover'
})
// 秒杀区域左侧轮播图
$('.seckill-list').swiper({
    list:$('.seckill-list > .slider-list'),
    type:'animation',
    autoTime:6000,
    showSpotBtn:false,
    showChangeBtn:'always',
    autoChange:false
})
// 秒杀区域右侧轮播图
$('.seckill-brand').swiper({
    list:$('.seckill-brand > .slider-item'),
    type:'animation',
    autoTime:4000,
    showChangeBtn:'hidden',
    showSpotBtn:true,
    spotPosition:'center'
})
// 顶部导航
$('.shortcut').load('./shortcut/index.html')
// 头部搜索
$('.header').load('./header/index.html')
// 中间最左侧
$('.fs-1').load('./fs/fs1.html')




// 中间最右左侧
$('.fs-3').load('./fs/fs3.html')

$('.seckill-count').load('./seckill/index.html')