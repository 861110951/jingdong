// (function () {
    /**
 * 三个问题: 
 * 1. 如何实现鼠标移入就有动画  不管移入几次
 *        解决方案：  可以每次hover的时候重新加载图片（重新加载图片的方法改变路径中的参数）
 * 2. 动画结束完成  鼠标移出这个区域  动图立即消失
 * 
 * 3. 动画还没有完成  鼠标就移出了  怎么能让动画结束之后再让动画消失
 *  
 * 
 * 解决以上三个问题的方法：
 *     在动图开始的时候添加class类名标志动图开始
 *     在动图结束的时候移出开始的标志  添加结束的标志
 *     在鼠标移出logo区域的时候 标志移出
 */
    // logo动画效果
    $('.logo').hover(function () {
        // animate-start 表示动画在运动的中进不去语句
        if (!$('.logo-bg').hasClass('animate-start')) {
            // 把logo的png图片，移除掉
            $('.logo-title').removeClass('animate-end');
            $('.logo-bg').css({
                backgroundImage: 'url("./img/jdgif.gif?v=' + new Date().getTime() + '")'
            }).addClass('animate-start');
            // 给gif图片添加animate-start 限制再次进入语句
            setTimeout(function () {
                // 定时器到表示已经动画结束
                $('.logo-bg').removeClass('animate-start');
                // png标记动画已经结束
                $('.logo-title').addClass('animate-end');
            }, 5000)
        }
        //  png标记隐藏
        $('.logo-title').addClass('show-bg');
        
    }, function () {
        if (!$('.logo-bg').hasClass('animate-start')) {
            $('.logo-title').addClass('animate-end');
            $('.logo-title').removeClass('show-bg')
        }
        $('.logo-title').addClass('hover-out');
    })

    // 搜素框关键字 提示功能
    // oninput  当input的value值发生变化时就会触发，（与onchange的区别是不用等到失去焦点就可以触发了）
    window.dealData = function(res) {
        // console.log(res);
        var data = res.result;
        var str = "";
        data.forEach(function (item) {
            str += `<li>${item[0]}</li>`
        });
        $('.search-list').html(str).show();
    }
    var timer = null;
    $('#search-inp').on('input', function () {
        clearTimeout(timer);
        var val = $(this).val();
        timer = setTimeout(function () {
            $.ajax({
                url: "https://suggest.taobao.com/sug",
                data: {
                    // code=utf-8&q=112225585&_ksTS=1655798996496_724&callback=jsonp725&k=1&area=c2c&bucketid=12
                    code: 'utf-8',
                    q: val,
                    callback: 'dealData'
                },
                dataType: 'jsonp',
                type: 'get'
            });
        }, 500)
    }).click(function () {
        if ($('#search-inp').val()) {
            $('.search-list').show();
        }
    });
    // 搜素框关键字 提示功能show与hidden
    var searchtimer = null;
    $('.search-box').mouseleave(function () {
        $('.search-list').hide();
    })

    //  搜素框关键字的点击 
    $('.search-list').delegate('li', 'click', function (item) {
        var liText = $(this).text();
        $('#search-inp').val(liText);
        // $('#search-inp').attr('placeholder', liText);
    })
    // 搜素框热搜关键字
    $('.hotwords a').mouseenter(function () {
        $(this).addClass('hotRed');
    }).mouseleave(function () {
        $(this).removeClass('hotRed');
    })
    // 显示二维码
    $('.app-code').mouseenter(function () {
        $('.nav-item.triangle .my-dropdown').addClass('show').mouseleave(function () {
            $('.nav-item.triangle .my-dropdown').removeClass('show')
        })
    })
    // 显示二维码 结束
// }())