// var menuList = [
//     {
//         titles: ['家用电器'],
//         content: {
//             tabs: ['家电馆', '镇乡专卖店', '家电服务'],
//             subs: [{
//                 title: '电视',
//                 items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
//             }, {
//                 title: '空调',
//                 items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
//             }]
//         }
//     }, {
//         titles: ['手机', '运营商', '数码'],
//         content: {
//             tabs: ['手机'],
//             subs: [{
//                 title: '手机',
//                 items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
//             }, {
//                 title: '手表',
//                 items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
//             }]
//         }
//     }, {
//         titles: ['电脑', '办公'],
//         content: {
//             tabs: ['家电馆', '镇乡专卖店', '家电服务'],
//             subs: [{
//                 title: '电视',
//                 items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
//             }, {
//                 title: '空调',
//                 items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
//             }]
//         }
//     }, {
//         titles: ['家居', '家具', '家装', '厨具'],
//         content: {
//             tabs: ['家居', '镇乡专卖店', '家电服务'],
//             subs: [{
//                 title: '电视',
//                 items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
//             }, {
//                 title: '空调',
//                 items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
//             }]
//         }
//     }];


// 获取数据函数
function renderMenu(data) {
    // 创建菜单栏选项区域结构
    // data.JSON.strign
    var menuList = data.reduce(function (prev, item) {
        return prev + `<li class="">
        ${item.titles.map(function (title) {
            return `<a href="#">${title}</a>`
        }).join('<span>/</span>')}
        </li>`
    }, "");
    $('.fs-menu').html(menuList);
}


$('.fs-w').ready(function () {
    $.ajax({
        url: '../data/data.json',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            renderMenu(data.menuList);
            menuList = data.menuList;
        }
    });
});
Mock.mock('../data/data.json', {
    "menuList|18": [{
        "titles|1-4": ["@ctitle(2,3)"],
        "content|2": {
            "tabs|1-3": ["@ctitle(2,4)"],
            "subs|3-7": [{
                "title|1": "@ctitle(2)",
                "items|9-21": ['@cword("12345678904.匹空调KOLED超薄电视超清电视一级能效空调镇乡专卖店曲面电视柜式空调", 2,6)']
            }],
        }
    }]
});

var menuList;

var timer = null;
// 鼠标移入和离开左侧菜单触发
$('.fs-menu').on('mouseenter', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    // 当前选项对应的数据索引值
    var index = $(this).index();
    renderMenuContent(menuList[index].content);
    $('.menu-content').show();
}).on('mouseleave', 'li', function () {
    var self = this;
    timer = setTimeout(function () {
        $(self).removeClass('active')
    }, 500)
})

//左侧菜单的具体内容 
$('.menu-content').mouseenter(function () {
    clearTimeout(timer);
})
//左侧菜单离开
$('.fs-w').mouseleave(function () {
    $('.menu-content').hide();
    clearTimeout(timer);
    timer = setTimeout(function () {
        $('.fs-menu li').removeClass('active');
    }, 250)
})

// 给a标签添加class ，防止鼠标只移动到a标签前不移动到li 不添加active类名样式
$('.fs-menu li a').mouseenter(function () {
    $(this).parent().addClass('active');
})

// 菜单移动的元素与内容
function renderMenuContent(data) {
    var words = $(' <div class="words"></div>');
    var advert = $('<div class="advert"></div');
    var tabsNav = $('<div class="tabs-nav"></div');
    var cateDeatil = $('<div class="cate-detail"></div>');
    var tabStr = data.tabs.reduce(function (prev, item) {
        return prev + `<a href="">${item}<i class="iconfont icon-xiangyoujiantou1"></i></a>`
    }, '');
    tabsNav.append(tabStr);
    words.append(tabsNav);
    for (var i = 0; i < data.subs.length; i++) {
        var sub = data.subs[i]
        var oDl = $('<dl class="cate-item"></dl>');
        var oDt = $(`<dt><a href="#">${sub.title}<i class="iconfont icon-xiangyoujiantou1"></i></a></dt>`);
        oDl.append(oDt);
        var oDD = $('<dd></dd>');
        var oDDStr = sub.items.reduce(function (prev, item) {
            return prev + `<a href="">${item}</a>`
        }, "")
        oDD.html(oDDStr).appendTo(oDl);
        oDl.appendTo(cateDeatil);
        words.append(cateDeatil);
    }
    var advert1 = $('<div class="advert1"></div>');
    var advert2 = $('<div class="advert2"></div>');
    for (var i = 1; i <= 8; i++) {
        advert1 = `<a herf="#"><img src="./img/advert${i}.jpg.webp"></a>`
        if (!(i === 9)) {
            advert.append(advert1);
        }
    }
    for (let j = 9; j <= 10; j++) {
        advert2 = `<a herf="#"><img src="./img/advert${j}.jpg.webp"></a>`
        if (!(i === 10)) {
            advert.append(advert2);
        }
    }
    $('.menu-content').empty().append(words).append(advert);
    // $('.menu-content').empty().append(tabsNav).append(cateDeatil);
}
