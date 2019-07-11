/**
 * 解析路径中传递过来的值
 * @param {*} url 
 * @param {*} str 
 */
var splitUrl = function(url, str){
    var firstArr = url.split('&_&');
    var secondArr = firstArr[firstArr.length - 1].split('&')

    for(var i in secondArr){
        if(secondArr[i].indexOf(str) != -1){
            var resultArr = secondArr[i].split('=');
            return resultArr[resultArr.length -1];
        }
    }
}
//获取当前路径中传递过来的参数
var url = window.location.href;
var currentGroupName = url.split('&_&')[url.split('&_&').length-1];
$(".group-main .group-add-name").html(decodeURI(currentGroupName));

/**
 * 根据链接生成二维码
 */
// var path="http://www.baidu.com";
var path=window.location.href;
var realPath=toUtf8(path);
$('#qrcode').qrcode({
    text : realPath,  //设置二维码内容  
    render : "canvas",//设置渲染方式  
    width : 200,     //设置宽度,默认生成的二维码大小是 256×256
    height : 200,     //设置高度  
    // typeNumber : -1,      //计算模式  
    // correctLevel : 0,//纠错等级  
    // background : "#ffffff",//背景颜色  
    // foreground : "#000000" //前景颜色  
}); 

function toUtf8(str) {   //地址中可用中文字符 
    var out, i, len, c;    
    out = "";    
    len = str.length;    
    for(i = 0; i < len; i++) {    
        c = str.charCodeAt(i);    
        if ((c >= 0x0001) && (c <= 0x007F)) {    
            out += str.charAt(i);    
        } else if (c > 0x07FF) {    
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));    
            out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));    
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
        } else {    
            out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));    
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
        }    
    }    
    return out;    
};

/**
 * ======================================================================================================
 * 识别当前浏览器的版本
 */
var openAppHref,officialHref;
    
var browser = {
    ua: function () {
        var u = navigator.userAgent;
        var isChrome = u.match(/Chrome\/([\d.]+)/) || u.match(/CriOS\/([\d.]+)/);
        var isAndroid = u.match(/(Android);?[\s\/]+([\d.]+)?/);
        var iosVersion = function () {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
                var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            }
        }();
        var chromeVersion = function () {
            var chrome = navigator.userAgent.match(/Chrome\/(\d+)\./);
            if (chrome) {
                return parseInt(chrome[1], 10);
            }
        }();
        var ios9 = iosVersion && iosVersion[0] >= 9;
        var chrome18 = isChrome && isAndroid && chromeVersion && chromeVersion > 18;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            iOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weChat: u.indexOf('MicroMessenger') > -1,
            UC: u.indexOf('UCBrowser') > -1,
            u3: u.indexOf('U3') > -1,
            chrome: u.indexOf('Chrome') > -1,
            windowsPhone: u.indexOf("Windows Phone") > -1,
            samsung: u.indexOf("Samsung") > -1,
            QQ: (u.match(/\sQQ/i)!=null ? u.match(/\sQQ/i).toLowerCase() == " qq":false),
            isChrome: isChrome,
            isAndroid: isAndroid,
            iosVersion: iosVersion,
            chromeVersion: chromeVersion,
            ios9: ios9,
            chrome18: chrome18
        };
    }()
}
var ua = browser.ua;
/**
 * 尝试跳转openAppHref,如果跳转失败，进入officialHref
 */
function timeoutRedirect() {
    var startTime = Date.now();
    var timeout = 500;
    openApp();
    var t = setTimeout(function () {
        var endTime = Date.now();
        if (endTime - startTime < timeout + 100) {   //若启动应用，则js会被中断较长时间，超出此范围
            if (ua.ios9) {   //ios9会弹出确认按钮，时间一定会超出
                openH5();    //此处请各位自行处理，暂时没有找到好的办法
                return;
            }
            openH5();
        }
    }, timeout);
    window.beforeunload = function () {
        clearTimeout(t);
    }
    window.pagehide = function () {
        clearTimeout(t);
    }
    window.onblur = function () {
        clearTimeout(t);
    }
}
function openH5() {
    // 此处弹出提示框进行下载
    showDownloadTip()
    // window.location.href = officialHref;//此处是下载APP
}
function openApp() {
    openAppByIframe();
    if (ua.ios9) {
        window.location = openAppHref;
        
        return;
    }
    if (ua.chrome18) {
        window.location = openAppHref;
        return;
    }
}
function openAppByIframe() {
    if (!openAppHref ) {
        window.location = officialHref;
        return ;
    }
    if (ua.android) { 
        window.location = openAppHref;
        return ;
    }
    if (ua.ios9) {return;}
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.style.border = "none";
    iframe.style.width = "1px";
    iframe.style.height = "1px";
    iframe.src = openAppHref;
    document.body.appendChild(iframe);
}

$(function () {
    if (ua.android) {
        // openAppHref =  "myapp://mpp/wf";//打开某手机上的某个app应用, myapp需要与android配制对应
        openAppHref =  window.location.href.replace("https", "tg");
        // officialHref = "下载APK的地址";
        officialHref = "http://192.168.2.112:8012/share/tg.apk";
    } else if (ua.iOS){
        // openAppHref =  "myapp://";//打开某手机上的某个app应用
        // officialHref = "下载APP的地址";
    }
    
    if (!ua.mobile){
        //表示非移动设备浏览器，鼠标移上去就显示二维码
        showQrcode();
        return;
    } else if (ua.iOS) { //iOS
        showWeChat(true);
        return ;
    } else if (ua.weChat && ua.iOS) { //iOS上的微信webview
        showWeChat(true);
        return ;
    } else if (ua.weChat && ua.android) { //安卓上的微信webview
        showWeChat(false);
        return ;
    } else if (ua.windowsPhone) {//winphone
        return ;
    } else {
        if ((ua.UC && ua.android && !ua.u3 && !ua.chrome)) {
            //浏览器不支持
            return ;
        } else {
            //chrome某些版本不允许自动进入app，手动点击触发重定向
            timeoutRedirect();
        }
    }
})

/**
 * PC上鼠标移动到按钮即显示二维码
 */
function showQrcode(){
    $(".group-container .group-main .group-add-button").bind({
        mouseenter: function(){
            $(".group-container .group-main .addGroup-qrcode").show();
        },
        mouseleave: function(){
            $(".group-container .group-main .addGroup-qrcode").hide();
        }
    })
}

/**
 * 如果是IOS，无论是浏览器还是微信，都显示建设中
 * 如果是安卓版本的微信，显示浏览器中打开
 * @param {*} isIOS 
 */
function showWeChat(isIOS){
    $(".group-container .group-alert").show();

    if(isIOS){
        $(".group-container .group-alert .group-arrow").css("visibility", "hidden");
        $(".group-container .group-alert .group-alert-main p").eq(0).html('1、IOS版本正在建设中。。。');
        $(".group-container .group-alert .group-alert-main p").eq(1).html('2、请使用Android手机打开此页面');
    }
    //点击其他区域隐藏，点击按钮显示
    $(document).bind("click", function(){
        $(".group-container .group-alert").hide();
    })
    $(".group-container .group-main .group-add-button").bind("click", function(){
        $(".group-container .group-alert").show();
        event.stopPropagation();
    })
}

/**
 * 显示没有安装提示
 */
function showDownloadTip(){
    // 点击其他区域隐藏，点击按钮显示
    $(".group-container .ios-popup .popup-box").bind("click", function(){
        event.stopPropagation();
    })
    $(document).bind("click", function(){
        $(".group-container .ios-popup").hide();
    })
    $(".group-container .group-main .group-add-button").bind("click", function(){
        $(".group-container .ios-popup").show();
        event.stopPropagation();
    })

    // 点击下载，跳转链接
    $(".group-container .ios-popup .popup-box .popup-btn").eq(0).bind("click", function(){
            window.location.href = officialHref;//此处是下载APP
    })
    // 点击取消，隐藏页面
    $(".group-container .ios-popup .popup-box .popup-btn").eq(1).bind("click", function(){
        $(".group-container .ios-popup").hide();
        // event.stopPropagation();
    })
}