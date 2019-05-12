//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
    _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml = '<div id="loadingDiv" style="margin-top:0;position:fixed;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#1bbc9b;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div class="loader"><div class="l_main"><div class="l_square"><span></span><span></span><span></span></div><div class="l_square"><span></span><span></span><span></span></div><div class="l_square"><span></span><span></span><span></span></div><div class="l_square"><span></span><span></span><span></span> <center><iframe style="margin-top:150px;margin-left:-190px;" src="loading.html"height="25" frameborder="0" scrolling="no"></iframe></center></div></div></div></div>';
//呈现loading效果
document.write(_LoadingHtml);

//监听加载状态改变
// document.onreadystatechange = completeLoading;
window.onload = completeLoading;



//加载状态为complete时移除loading效果
function completeLoading() {

    if (document.readyState == "uninitialized") {
        stopm();
    }
    if (document.readyState == "loading") {
        stopm();
    }
    if (document.readyState == "interactive") {
        stopm();
    }
    // if (document.readyState == "complete") {
    //     stopm();
    // }
    if (document.readyState == "complete") {
        setTimeout(function () {
            var loadingMask = document.getElementById('loadingDiv');
            loadingMask.parentNode.removeChild(loadingMask);
            myVar = window.setInterval(stopm1, 0);
        }, 2000);
    }
}


function stopm() {
    // 滚动条禁用
    $('body').css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    });

}
function stopm1() {
    //滚动条启用
    $('body').css({
        "overflow-x": "auto",
        "overflow-y": "auto"
    });
}


