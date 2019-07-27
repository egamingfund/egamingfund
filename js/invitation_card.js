
$(function(){

    /**语言包  cn: 中文包；en：英文包；ja：日文包*/
    var cn = {
        share_tips : '分享提示：长按图片保存或分享',
        //邀请函
        invitation_page_title1 : '基于区块链的全球去中心化游戏民有',
        invitation_page_title2 : '民治民享公共社区诚邀您加入',
        invitation_page_code : '邀请码',
        invitation_page_codetip : '在获取资格页面输入邀请码，可获得参与eGamingFund社区的资格',
        press_code_tip : '长按识别二维码了解详情',

        share_tips_pc : '分享提示：单击鼠标右键，另存为图片后分享',
        press_code_tip_pc : '使用手机扫描二维码了解详情',
        // 长按识别二维码了解详情
        // Long press to identify QR code for details

        code_date : '注意：有效期三天，一次有效',
    }
    //-----------------------------------------英文版
    var en = {
        share_tips : 'Hints: Press long to save or share pictures.',
        //邀请函
        invitation_page_title1 : 'eGamingFund based on the blockchain to ',
        invitation_page_title3 : 'realize the global decentralized community ',
        invitation_page_title2 : 'of the people, by the people, for the people.',
        invitation_page_title4 : 'Welcome to join us!',
        // eGamingFund based on the blockchain to realize the global decentralized community of the people, by the people, for the people. Welcome to join us!

        invitation_page_code : 'Invitation code',
        invitation_page_codetip : 'Enter the invition code for getting the chance',
        invitation_page_codetip1 : 'to participate the eGamingFund community',
        // Enter the invition code for getting the chance to participate the eGamingFund community

        press_code_tip : 'Long press to scan QR code for getting more details.',

        share_tips_pc  : 'Hints: Right click to save images and share.',
        press_code_tip_pc  : 'Scan the QR code for more details.',

        code_date : 'Note: Valid for 3 days, and only can use once.',
    }
    //-----------------------------------------日文版
    var ja = {
        share_tips : '共有ヒント：ピクチャを長押して保存また共有する',
        //邀请函
        invitation_page_title1 : 'ブロックチェーンに基づいたのグローバル',
        invitation_page_title3 : 'な分権化の人民所有人民管理人民享有のコ',
        invitation_page_title2 : 'ミュニティががあなたの加入を歓迎します',
        invitation_page_code : '招待コード',
        invitation_page_codetip : '資格獲得のページで招待コードを入力して、eGamingFund',
        invitation_page_codetip1 : 'コミュニティに加入するの資格を獲得できます',
        press_code_tip : '招待コードをスキャンする',

        share_tips_pc : '分享提示：单击鼠标右键，另存为图片后分享',
        press_code_tip_pc  : '使用手机扫描二维码了解详情',

        code_date : '注意：有効期限は三日です、有効回数は一回',
    }

    //识别当前的设备
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

    //执行的主体
    $(function(){
        var language = localStorage.getItem("language");

        draw(localStorage.getItem("code"));

        var text = 
        '<div id="imgBox-container">' +
            '<div class="imgBox-shadow"></div>' +
            '<div class="imgBox-main">' +
                '<div id="imgBox">' +
                    '<img></img>' +
                    '<div id="share-tips"></div>' +
                '</div>' +
            '</div>' +
        '</div>';

        $("body").append(text);
        $("body #imgBox-container").css({
            'position': 'fixed',
            'left': '0',
            'right': '0',
            'top': '0',
            'bottom': '0',
            'z-index': '11000',
        })
        $("body #imgBox-container .imgBox-shadow").css({
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'background-color': 'rgba(0, 0, 0, 0.5)',
        })
        $("body #imgBox-container .imgBox-main").css({
            'width': '100%',
            'height': '100%',
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'overflow-y': 'auto',
        })
        $("body #imgBox").css({
            'position': 'relative',
            'width': '360px',
            'height': '648px',
        })
        $("body #imgBox img").css({
            'width': '100%',
            'height': '100%',
        })
        $("body #imgBox #share-tips").css({
            'position': 'absolute',
            'bottom': '0',
            'width': '100%',
            'height': '8%',
            'color': '#fff',
            'background-color': 'rgb(140, 19, 23)',
            'font-size': '1.3rem',
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center'
        })
        if(browser.ua.mobile){
            $("body #imgBox").css({
                'width': '100%',
                'height': '180vw',
            })
            $("body #imgBox #share-tips").css({
                'position': 'fixed',
            })
        }

        if(language=="cn"){
            $("#share-tips").html(browser.ua.mobile ? cn.share_tips : cn.share_tips_pc);
        }else if(language=="en"){
            // $("*").attr("lang","eng");
            $("#share-tips").html(browser.ua.mobile ? en.share_tips : en.share_tips_pc);
        }else if(language=="ja"){
            // $("*").attr("lang","jpn");
            $("#share-tips").html(browser.ua.mobile ? ja.share_tips : ja.share_tips_pc);
        }else{
            // $("*").attr("lang","eng");
            $("#share-tips").html(browser.ua.mobile ? en.share_tips : en.share_tips_pc);
        }
        //点击图片隐藏（手机）===点击其他区域隐藏（PC）
        $(document).bind("click",function(event){
            console.log("点击了图片")
            $("body #imgBox-container").remove();
        })
        $("#imgBox").bind("click",function(event){
            if(browser.ua.mobile){
                // window.history.go(-1);
                // window.history.back(-1);
                console.log("点击了图片")
                $("body #imgBox-container").remove();
            }
            event.stopPropagation();
        })

       
    });

    /**
     * 画图
     */
    var qrCodeText = window.location.href + "?code="; 

    var deviceWidth = window.screen.width;
    var deviceHeight = window.screen.width * 1.8;
    var dpr = window.devicePixelRatio || 1;
    var canvas = $("<canvas id='qrcode-canvas'></canvas>");
    canvas.attr("width",deviceWidth);
    canvas.attr("height",deviceHeight);
    canvas.css("position", "absolute");
    canvas.css("left", "0");
    canvas.css("top", "0");
    canvas.css("z-index", "10000");
    canvas.css("display", "none");
    var ctx = canvas[0].getContext("2d");
    var bspr = ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.BackingStorePixelRatio || 1;
    var ratio = dpr / bspr;	
    canvas.css("width", canvas.attr("width"));
    canvas.css("height", canvas.attr("height"));
    canvas.attr("width", canvas.attr("width") * ratio);
    canvas.attr("height", canvas.attr("height") * ratio);

    var qrCodeOptions = {
        render: 'canvas',
        width: 0.235 * deviceWidth * ratio,
        height: 0.235 * deviceWidth * ratio,
        text: "",
        correctLevel: 3,
        minVersion: 1,
    }
    var qrCodeData = null;

    var qrCodeCreater = function(){
        var imgBuffer = $("<div></div>");
        imgBuffer.qrcode(qrCodeOptions);
        var ctx = imgBuffer.children("canvas")[0].getContext("2d");
        qrCodeData = ctx.getImageData(0,0,imgBuffer.children("canvas")[0].width, imgBuffer.children("canvas")[0].height);
    }

    var draw = function(inviteCode){
        qrCodeOptions.text = qrCodeText + inviteCode;
        qrCodeCreater();
        var imgBuffer = $("<img></img>");
        imgBuffer.crossOrigin = "anonymous";
        imgBuffer.attr("src", "img/userSetting/bg-gf.png");
        // $("body").append(imgBuffer);
        imgBuffer.load(function(){
            ctx.clearRect(0,0,canvas.attr("width"), canvas.attr("height"));	
            //普通颜色
            ctx.fillStyle = "#ffffff";
            ctx.textAlign="center";
            ctx.drawImage(imgBuffer[0], 0, 0, canvas.attr("width"), canvas.attr("height"));
            ctx.putImageData(qrCodeData, canvas.attr("width") * 0.3835, canvas.attr("height") * 0.6445);
            
            // 绘制被邀请人
            // ctx.font= deviceWidth * ratio / 10 + "px 微软雅黑";
            // ctx.fillText('yyy', 0.5 * deviceWidth * ratio , 0.46 * deviceHeight * ratio);

            //绘制邀请标题
            var language = localStorage.getItem("language");
            var in_text1 = "";
            var in_text2 = "";
            var in_text3 = "";
            var in_text4 = "";
            var in_text5 = "";
            if(language=="cn"){
                in_text1 = cn.invitation_page_title1;
                in_text2 = cn.invitation_page_title2;
                in_text3 = cn.invitation_page_code;
                in_text4 = cn.invitation_page_codetip;
                in_text5 = browser.ua.mobile ? cn.press_code_tip : cn.press_code_tip_pc;
            }else if(language=="en"){
                in_text1 = en.invitation_page_title1;
                in_text2 = en.invitation_page_title2;
                in_text3 = en.invitation_page_code;
                in_text4 = en.invitation_page_codetip;
                in_text5 = en.press_code_tip;
            }else if(language=="ja"){
                in_text1 = ja.invitation_page_title1;
                in_text2 = ja.invitation_page_title2;
                in_text3 = ja.invitation_page_code;
                in_text4 = ja.invitation_page_codetip;
                in_text5 = browser.ua.mobile ? ja.press_code_tip : ja.press_code_tip_pc;
            }else{
                in_text1 = en.invitation_page_title1;
                in_text2 = en.invitation_page_title2;
                in_text3 = en.invitation_page_code;
                in_text4 = en.invitation_page_codetip;
                in_text5 = en.press_code_tip;
            }

            //填充邀请函内容
            if(language=="cn"){
                ctx.font= deviceWidth * ratio / 20 + "px 微软雅黑";
                ctx.fillText(in_text1 ,0.5 * deviceWidth * ratio , 0.39 * deviceHeight * ratio);
                ctx.fillText(in_text2,0.5 * deviceWidth * ratio , 0.44 * deviceHeight * ratio);

                // 绘制邀请码
                ctx.font= deviceWidth * ratio / 28 +"px 微软雅黑";
                ctx.fillText(in_text3, 0.5 * deviceWidth * ratio , 0.538 * deviceHeight * ratio);

                ctx.font= deviceWidth * ratio / 22 +"px 微软雅黑";
                ctx.fillText(inviteCode, 0.5 * deviceWidth * ratio , 0.574 * deviceHeight * ratio);

                ctx.font= deviceWidth * ratio / 40 + "px 微软雅黑";
                // ctx.fillStyle = "rgb(164, 151, 151)";
                // ctx.fillText(in_text4,0.5 * deviceWidth * ratio,0.896 * deviceHeight * ratio);
                ctx.fillStyle = "rgb(184, 181, 181)";
                // ctx.fillText(cn.press_code_tip, 0.5 * deviceWidth * ratio , 0.802 * deviceHeight * ratio);
                ctx.fillText(in_text5, 0.5 * deviceWidth * ratio , 0.625 * deviceHeight * ratio);
                // ctx.fillStyle = "rgb(114, 101, 101)";
                // ctx.fillText(cn.code_date, 0.5 * deviceWidth * ratio , 0.605 * deviceHeight * ratio);
            }else if(language=="ja"){
                ctx.font= deviceWidth * ratio / 25 + "px 微软雅黑";
                ctx.fillText(in_text1 ,0.5 * deviceWidth * ratio , 0.39 * deviceHeight * ratio);
                ctx.fillText(ja.invitation_page_title3,0.5 * deviceWidth * ratio , 0.43 * deviceHeight * ratio);
                ctx.fillText(in_text2,0.5 * deviceWidth * ratio , 0.47 * deviceHeight * ratio);

                // 绘制邀请码
                ctx.font= deviceWidth * ratio / 30 +"px 微软雅黑";
                ctx.fillText(in_text3, 0.5 * deviceWidth * ratio , 0.538 * deviceHeight * ratio);

                ctx.font= deviceWidth * ratio / 22 +"px 微软雅黑";
                ctx.fillText(inviteCode, 0.5 * deviceWidth * ratio , 0.574 * deviceHeight * ratio);

                ctx.font= deviceWidth * ratio / 38 + "px 微软雅黑";
                // ctx.fillStyle = "rgb(164, 151, 151)";
                // ctx.fillText(in_text4,0.5 * deviceWidth * ratio,0.88 * deviceHeight * ratio);
                // ctx.fillText(ja.invitation_page_codetip1,0.5 * deviceWidth * ratio,0.896 * deviceHeight * ratio);
                ctx.fillStyle = "rgb(184, 181, 181)";
                // ctx.fillText(ja.press_code_tip, 0.5 * deviceWidth * ratio , 0.802 * deviceHeight * ratio);
                ctx.fillText(in_text5, 0.5 * deviceWidth * ratio , 0.625 * deviceHeight * ratio);
                // ctx.fillStyle = "rgb(114, 101, 101)";	
                // ctx.fillText(ja.code_date, 0.5 * deviceWidth * ratio , 0.6075 * deviceHeight * ratio);
            }else{
                ctx.font= deviceWidth * ratio / 25 + "px Arial";
                ctx.fillText(in_text1 ,0.5 * deviceWidth * ratio , 0.35 * deviceHeight * ratio);
                ctx.fillText(en.invitation_page_title3,0.5 * deviceWidth * ratio , 0.39 * deviceHeight * ratio);
                ctx.fillText(in_text2,0.5 * deviceWidth * ratio , 0.43 * deviceHeight * ratio);
                ctx.fillText(en.invitation_page_title4,0.5 * deviceWidth * ratio , 0.47 * deviceHeight * ratio);

                // 绘制邀请码
                ctx.font= deviceWidth * ratio / 30 +"px Arial";
                ctx.fillText(in_text3, 0.5 * deviceWidth * ratio , 0.538 * deviceHeight * ratio);

                ctx.font= deviceWidth * ratio / 22 +"px Arial";
                ctx.fillText(inviteCode, 0.5 * deviceWidth * ratio , 0.574 * deviceHeight * ratio);

                ctx.font= deviceWidth * ratio / 38 + "px Arial";
                // ctx.fillStyle = "rgb(164, 151, 151)";
                // ctx.fillText(in_text4,0.5 * deviceWidth * ratio,0.88 * deviceHeight * ratio);
                // ctx.fillText(en.invitation_page_codetip1,0.5 * deviceWidth * ratio,0.896 * deviceHeight * ratio);	
                // ctx.font= deviceWidth * ratio / 37 +"px Arial";
                ctx.fillStyle = "rgb(184, 181, 181)";
                // ctx.fillText(en.press_code_tip, 0.5 * deviceWidth * ratio , 0.802 * deviceHeight * ratio);
                ctx.fillText(in_text5, 0.5 * deviceWidth * ratio , 0.625 * deviceHeight * ratio);
                // ctx.fillStyle = "rgb(114, 101, 101)";
                // ctx.fillText(en.code_date, 0.5 * deviceWidth * ratio , 0.607 * deviceHeight * ratio);		
            }
            $("#imgBox").children("img").attr("crossOrigin", "Anonymous");
            $("#imgBox").children("img").attr("src", canvas[0].toDataURL());
            // $("#imgBox").children("img").load(function(){
            //     $("#imgBox").css("display","block");
            // })
        });
    }
})
