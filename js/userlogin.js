$(function(){

    var language = {
        cn: {
            //页面显示
            account_login : '账号登录',
            account_register : '账号注册',
            password_find : '密码找回',
            ltitle_text1 : '电子邮件',
            ltitle_text2 : '密码',
            login_btn : '登录',
            forget_password : '忘记密码？',
            register_account : '注册账号',
            rtitle_text3 : '确认密码',
            register_btn : '注册',
            email_btn : '发送邮件',
            reset_btn: '提交',
            forget_password_text: '请填入您注册时使用的电子邮箱，您将会收到关于如何重置密码的电子邮件提示。',

            nickname: "昵称",
            remember_account: "记住账号",
            account_tip1: "还没有eGamingFund账号？",
            account_tip2: "已有eGamingFund账号？",
            account_tip3: "找到了您的密码？",
            address_tip: "CSC钱包地址（非必填）",
            nickname_tip: "昵称支持4-20位中英文、数字、减号或下划线",
            invitation_code: "邀请码（非必填）",

            //点击按钮后的结果提示
            redister_fail : '注册失败，账号或昵称已存在！',
            register_success : '账号注册成功！',
            login_fail : '登录失败，账号或密码错误！',
            login_success : '登录成功！',
            send_fail : '邮件发送失败！',
            send_success : '邮件发送成功！',

            result_button : '确定',
            again_login_btn : '重新登录',
            again_register_btn : '重新注册',
            again_email_btn : '重新发送',

            //错误提示
            system_req : '至少7位字符，包含数字和字母，不含空格',
            fill_pwd : '请输入匹配的密码',
            fill_same_email : '请输入有效的电子邮件地址',
            fill_email_length : '邮箱地址长度不能超过35个字符',
            password_length : '密码长度不能超过50个字符',
            fill_input_length : '不能输入超过50个字符',
            ethaddress_get: '申请获取CSC钱包地址',

            //个人设置页面
            registerFail_text1 : "注册失败！",
            registerFail_text2 : "注册失败，信息填写不完整！",           
            registerFail_text3 : "注册失败，邮箱不可用！"  ,            
            registerFail_text4 : "注册失败，邮箱已注册！",           
            registerFail_text5 : "注册失败，昵称已存在！",           
            registerFail_text6 : "注册失败，邀请码不存在！",            
            registerFail_text7 : "注册失败，邀请码已失效！",
            registerFail_text8 : "注册失败，邀请码已过期！",           
            registerFail_text9 : "注册失败，邀请码不可用！" ,

            loadMyDataFail_text : "加载个人数据失败，请刷新页面后重试！",            
            personInfo_text : "个人信息",           
            basicInfo_text : "基本信息",           
            basicInfo_text1 : "你的账户",          
            basicInfo_text2 : "钱包地址",           
            basicInfo_text3 : "昵称",            
            promotionInfo_text : "推广信息",            
            promotionInfo_text1 : "您的邀请码数量",           
            promotionInfo_text2 : "点击下方按钮可生成您的专属邀请码，可发送给您要邀请的朋友。",         
            promotionInfo_text3 : "生成邀请码",           
            getMyCodeFail_text : "生成邀请码失败，请刷新页面后重试！",          
            getMyCodeFail_text1 : "生成邀请码失败，邀请次数已达上限！",
            getMyCodeFail_text2 : "生成邀请码失败，邀请期限已过！",  
        },
        en: {
            //页面显示
            account_login : 'Login',
            account_register : 'Sign Up',
            password_find : 'Get my password back',
            ltitle_text1 : 'E-mail',
            ltitle_text2 : 'Password',
            login_btn : 'Log in',
            forget_password : 'Forgot password?',
            register_account : 'Sign Up',
            rtitle_text3 : 'Confirm password',
            register_btn : 'Sign Up',
            email_btn : 'Send',
            reset_btn: 'Submit',
            forget_password_text: 'Please enter your the e-mail address. You will receive a system tutorial of reseting password.',

            nickname: "Username",
            remember_account: "Remember this account",
            account_tip1: "Haven't have a eGamingFund account yet?",
            account_tip2: "Have a eGamingFund account already?",
            account_tip3: "Forget your password?",
            address_tip: "CSC wallet (optional)",
            nickname_tip: "a username must be 4-20 characters including chinese, english letter, number, hyphen or underscore.",
            invitation_code: "Invitation code (optional)",

            redister_fail : 'Sign up failed. This account or nickname exists already!',
            register_success : 'Sign up successfully.',
            login_fail : 'Login failed. Incorrect account or password!',
            login_success : 'Login successfully.',
            send_fail : 'Sent failed.',
            send_success : 'Sent successfully.',

            result_button : 'Confirm',
            again_login_btn : 'Login again',
            again_register_btn : 'Sign up again',
            again_email_btn : 'Send again',
            
            //错误提示
            system_req : 'At least 7 characters, including numbers and letters, no spaces',
            fill_pwd : 'Please enter the correct password',
            fill_same_email : 'Please enter a valid email address',
            fill_email_length : 'E-mail address length can not exceed 35 characters',
            password_length : 'The password length can not exceed 50 characters',
            fill_input_length : 'Cannot enter more than 50 characters',
            ethaddress_get: 'Apply for CSC Wallet',

            //个人设置页面
            registerFail_text1 : "Sign up failed!",
            registerFail_text2 : "Sign up failed! Incomplete information! ",
            registerFail_text3 : "Sign up failed! Unavailable email address!",
            registerFail_text4 : "Sign up failed! This email address exists already!",
            registerFail_text5 : "Sign up failed! This username exists already!",
            registerFail_text6 : "Sign up failed! This invitation code does noe exist!",
            registerFail_text7 : "Sign up failed! Invalid invitation code!",
            registerFail_text8 : "Sign up failed! Expired invitation code!",
            registerFail_text9 : "Sign up failed! Unavailable invitation code!" ,

            loadMyDataFail_text : "Upload failed . Please try it again!",
            personInfo_text : "Profile",
            basicInfo_text : "Basic information" ,
            basicInfo_text1 : "My account" ,
            basicInfo_text2 : "My wallet" ,
            basicInfo_text3 : "Username" ,
            promotionInfo_text : "Promotions",
            promotionInfo_text1 : "Number of invitation codes",
            promotionInfo_text2 : "Click the button below to get your invitation code. Yout can sent it to your friends.",
            promotionInfo_text3 : "Get the invitation code",
            getMyCodeFail_text : "Get invitation code failed . Please try it again!",
            getMyCodeFail_text1 : "Create invitation code failed! Reached the limit.",
            getMyCodeFail_text2 : "Create invitation code failed! Expired invitation code.",  
        }
    }
    
    var currentLanguage = language.en;
    if(localStorage.getItem("language") == "cn"){
        currentLanguage = language.cn;
    }


   var text = 
        "<div class='container-outer'>" +
            "<div class='container'>" +
                "<form id='form_common_id' class='form-container'>" +
                    "<img id='form_common_close' src='https://egamingfund.org/img/close.png' style='position: absolute; top: 5px; right: 5px; width:3%;' alt=''/>" +
                    "<div class='form-logo'>" +
                        "<img src='https://egamingfund.org/img/logo2-new.png' width='20%' style='margin-top: -70px;' alt=''/>" +
                    "</div>" +
                    "<h4>e<span style='color: #fa4616;'>G</span>aming<span style='color: #fa4616;'>F</span>und</h4>" +
                    //虚位以待。。。 
                    "<div class='form-content'></div>"                
                "</form>" +
            "</div>" +
        "</div>";

    var registerText = 
        "<h5 class='register-title'>" + currentLanguage.account_register + "</h5>" +
        "<div class='lay-input'>" +
            "<!-- <label>昵称</label> -->" +
            "<input type='text' class='focus-input' name='nickname' placeholder='" + currentLanguage.nickname + "'/>" +
            "<div></div>"+
        "</div>" +
        "<div class='lay-input'>" +
            "<!-- <label>邮箱地址</label> -->" +
            "<input type='text' class='focus-input' name='account' placeholder='" + currentLanguage.ltitle_text1 + "'/>" +
            "<div></div>"+
        "</div>" +
        "<div class='lay-input'>" +
            "<!-- <label>密码</label> -->" +
            "<input type='password' class='focus-input' name='password' placeholder='" + currentLanguage.ltitle_text2 + "'/>" +
            "<div></div>"+
        "</div>" +
        "<div class='lay-input'>" +
            "<!-- <label>确认密码</label> -->" +
            "<input type='password' class='focus-input' name='password-repeat' placeholder='" + currentLanguage.rtitle_text3 + "'/>" +
            "<div></div>"+
        "</div>"+
        "<div class='lay-input'>" +
            "<!-- <label>邀请码</label> -->" +
            "<input type='text' class='focus-input' name='code' placeholder='" + currentLanguage.invitation_code + "'/>" +
            "<div></div>"+
        "</div>"+
        "<div class='lay-input'>" +
            "<!-- <label>CSC钱包地址</label> -->" +
            "<input type='text' class='focus-input' name='ethaddress' placeholder='" + currentLanguage.address_tip + "'/>" +
            "<div><a href='https://casinocoin.org' style='color: #cf0202' target='_blank'>" + currentLanguage.ethaddress_get + "</a></div>"+
        "</div>"+

        "<button type='button' class='lay_send'>" + currentLanguage.register_account + "</button>" +
        "<div class='lay_footer'>" +
            "<a class='lay_gt-msg'>" + currentLanguage.account_tip2 + "</a>" +
            "<a href='javascript:void(0)' class='lay_gt'>" + currentLanguage.login_btn + "</a>" +
        "</div>" ;

    var loginText = 
        "<h5 class='register-title'>" + currentLanguage.account_login + "</h5>" +
        "<div class='lay-input'>" +
            "<!-- <label>用户名</label> -->" +
            "<input type='text' class='focus-input' name='account' placeholder='" + currentLanguage.ltitle_text1 + "'/>" +
        "<div></div>"+
        "</div>" +
        "<div class='lay-input'>" +
            "<!-- <label>密码</label> -->" +
            "<input type='password' class='focus-input' name='password' placeholder='" + currentLanguage.ltitle_text2 + "'/>" +
            "<div></div>"+
        "</div>" +
        "<div class='lay_box'>" +
            "<label style='top:0;'>" +
                "<input style='width:0;height:0;display:none;' type='checkbox' class='check_box' id='agreerule' tabindex='5'/><label id='rulelabel' class='' for='agreerule'>" + currentLanguage.remember_account + "</label>" +
            "</label>" +
            "<a href='javascript:void(0)' class='lay-forget-pwd'>" + currentLanguage.forget_password+ "</a>" + 
        "</div>" +
        "<button type='button' class='lay_button'>" + currentLanguage.login_btn + "</button>" +
        "<div class='lay_footer'>" +
            "<a class='lay_gt-msg'>" + currentLanguage.account_tip1 + "</a>" +
            "<a href='javascript:void(0)' class='btn-reg'>" + currentLanguage.register_account + "</a>" +
        "</div>";

    var foget_pwdText =
        "<h5 class='register-title'>" + currentLanguage.password_find + "</h5>" +
        "<div class='lay-input'>" +
            "<input type='text' class='focus-input' name='email' placeholder='" + currentLanguage.ltitle_text1 + "'/>" +
            "<div></div>"+
        "</div>" +
        "<div class='lay_gt-msg'>" + currentLanguage.forget_password_text + "</div>" + 
        "<button type='button' class='lay_submit'>" + currentLanguage.reset_btn + "</button>" +
        "<div class='lay_footer'>" +
            "<a class='lay_gt-msg'>" + currentLanguage.account_tip3 + "</a>" +
            "<a href='javascript:void(0)' class='lay_gt'>" + currentLanguage.login_btn + "</a>" +
        "</div>";


    function checkNickname() {
        $("input[name='nickname']").parent().find("div").empty();
        var nickname = $("input[name='nickname']").val();
        //昵称格式：限16个字符，支持中英文、数字、减号或下划线
        var userStr = /^[\u4e00-\u9fa5_a-zA-Z0-9-]{4,20}$/;

        if(nickname == ""||userStr.test(nickname)==false){
            $("input[name='nickname']").addClass("error");
            $("input[name='nickname']").parent().find("div").text(currentLanguage.nickname_tip);
            return false;
        }else{
            $("input[name='nickname']").removeClass("error");
            $("input[name='nickname']").parent().find("div").text("");
            return true;
        }
    }

     function checkEmail() {
        var email = $("input[name='account']").val();
        //邮箱正则表达式对象
        // var emailStr = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        var emailStr = /^([a-z0-9A-Z]+[_]?)+[a-z0-9A-Z]@[a-z0-9A-Z]+([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-z0-9A-Z]{2,}$/;

        if(email == ""){
        	$("input[name='account']").addClass("error");
            $("input[name='account']").parent().find("div").text(currentLanguage.fill_same_email);
            return false;
		}else if (email.length >= 35) {
			$("input[name='account']").addClass("error");
            $("input[name='account']").parent().find("div").text(currentLanguage.fill_email_length);
            return false;
        }else if(emailStr.test(email) == false){
        	$("input[name='account']").addClass("error");
            $("input[name='account']").parent().find("div").text(currentLanguage.fill_same_email);
            return false;
        }else{
            $("input[name='account']").removeClass("error");
        	$("input[name='account']").parent().find("div").text("");
            return true;
        }
    }

    function checkEmailBox(){
        var email = $("input[name='email']").val();
        //邮箱正则表达式对象
        // var emailStr = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        var emailStr = /^([a-z0-9A-Z]+[_]?)+[a-z0-9A-Z]@[a-z0-9A-Z]+([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-z0-9A-Z]{2,}$/;

        if(email == ""){
        	$("input[name='email']").addClass("error");
            $("input[name='email']").parent().find("div").text(currentLanguage.fill_same_email);
            return false;
		}else if (email.length >= 35) {
			$("input[name='email']").addClass("error");
            $("input[name='email']").parent().find("div").text(currentLanguage.fill_email_length);
            return false;
        }else if(emailStr.test(email) == false){
        	$("input[name='email']").addClass("error");
            $("input[name='email']").parent().find("div").text(currentLanguage.fill_same_email);
            return false;
        }else{
            $("input[name='email']").removeClass("error");
        	$("input[name='email']").parent().find("div").text("");
            return true;
        }
    }

    function checkPwd() {
        var psd = $("input[name='password']").val();
        if($("input[name='password-repeat']").length > 0){
            var psdRepeat = $("input[name='password-repeat']").val();
        }else{
            var psdRepeat = psd;//如果不需要进行密码确认，暂时让确认密码值等于密码
        }
        // 6-20 位，字母、数字、字符
        // var psdStr = /^([A-Z]|[a-z]|[0-9]|[`~!@#$%^&*()+=|{}':;,\\[\].<>/?！￥…（）—【】‘；：”“’。，、？]){6,20}$/;
        var psdStr = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{7,35}$/;

        if(psd == "" || psdStr.test(psd) == false || psd.includes(" ")){
            $("input[name='password']").parent().find("div").text(currentLanguage.system_req);
            $("input[name='password-repeat']").parent().find("div").empty();
            $("input[name='password']").addClass("error");
            $("input[name='password-repeat']").removeClass("error");
            return false;
		}else if(psdRepeat==psd){
            $("input[name='password']").parent().find("div").empty();
            $("input[name='password-repeat']").parent().find("div").empty();
            $("input[name='password']").removeClass("error");
            $("input[name='password-repeat']").removeClass("error");
            return true;
        }else if(psdRepeat!=psd){
                $("input[name='password']").removeClass("error");
                $("input[name='password-repeat']").addClass("error");
                $("input[name='password']").parent().find("div").empty();
                $("input[name='password-repeat']").parent().find("div").text(currentLanguage.fill_pwd);
                return false;
        }else{
             $("input[name='password']").removeClass("error");
            return true;
        }
    }

    //弹出层内的事件，包括输入框失去焦点进行字符匹配、点击弹出层以外区域弹出层消失
    var layer_evevt = function(){
        $(".container-outer form").click(function(event){
            event.stopPropagation();
        });
        // $(document).click(function(){
        //     if($(".container-outer").length){
        //         $(".container-outer").remove();
        //     }
        // });
        $("#form_common_close").click(function(){
            if($(".container-outer").length){
                $(".container-outer").remove();
            }
        });

        $("input[name='nickname']").bind("blur", function(){
             checkNickname()
        })
        $("input[name='account']").bind("blur", function(){
            checkEmail()
        })
        $("input[name='email']").bind("blur", function(){
            checkEmailBox();
        })
        $("input[name='password']").bind("blur", function(){
            checkPwd()
        })
        $("input[name='password-repeat']").bind("blur", function(){
            checkPwd()
        })
    }

    //显示用户信息
    var showUserInfo = function(user){
        localStorage.setItem("userInfo", JSON.stringify(user));
        //登录和注册后，绑定头像的点击事件===有参数表示已登录状态
        user_function();
    }

    //注册请求返回的不同的状态
    var showRegisterStatus = function(result){
        var tipText;
        switch(result.status){
            case 1: tipText = currentLanguage.registerFail_text1;
                    break;
            case 2: tipText = currentLanguage.registerFail_text2;
                    break;
            case 111: case 113: tipText = currentLanguage.registerFail_text3;
                    break;
            case 112: tipText = currentLanguage.registerFail_text4;
                    break;
            case 114: tipText = currentLanguage.registerFail_text5;
                    break;
            case 121: tipText = currentLanguage.registerFail_text6;
                    break;
            case 122: tipText = currentLanguage.registerFail_text7;
                    break;
            case 123: tipText = currentLanguage.registerFail_text8;
                    break;
            case 124: case 125: case 126: tipText = currentLanguage.registerFail_text9;
                    break;   
            default:  tipText = currentLanguage.registerFail_text1; 
                    break;
        }
        return tipText;
    }

    //根据请求到的结果，在页面显示
    var showReturnData = function(type, result){
        if(type == "login"){    
            if(result.user){
                console.log("登录成功")
                if($(".container-outer").length){
                    $(".container-outer").remove();//登陆成功，直接删掉弹出层  
                }       
                showUserInfo(result.user); 
            }else{
                console.log("登录失败")
                $(".container-outer form .form-content").empty();
                $(".container-outer form .form-content").append(
                    '<h5 style="margin: 50px auto;">' + currentLanguage.login_fail + '</h5>' + 
                    "<button type='button' class='fail-login'>" + currentLanguage.again_login_btn + "</button>");
                login_function(".fail-login");//绑定登录按钮，跳转到登录页面
            }
        }else if(type == "registercodeornocode"){
            $(".container-outer form .form-content").empty();
            if(result.status == 0){
                console.log("注册成功")
                $(".container-outer form .form-content").append(
                    '<h5 style="margin: 50px auto;">' + currentLanguage.register_success + '</h5>' +
                    "<button type='button' class='success-register'>" + currentLanguage.result_button + "</button>");
                $(".success-register").click(function(){
                    if($(".container-outer").length){
                        $(".container-outer").remove();
                    }
                })
                showUserInfo(result.user);
            }else{
                console.log("注册失败！")
                $(".container-outer form .form-content").append(
                    '<h5 style="margin: 50px auto;">' + showRegisterStatus(result) + '</h5>' +
                    "<button type='button' class='fail-register'>" + currentLanguage.again_register_btn + "</button>");
                if(result.status>=121&&result.status<=126){
                    register_function(".fail-register", true);//绑定注册 == 不使用邀请码
                }else{
                    register_function(".fail-register");//绑定注册
                }
            }
        }else if(type == "forgetPsw"){
            $(".container-outer form .form-content").empty();
            if(result.status == 1){
                console.log("发送成功")
                $(".container-outer form .form-content").append(
                    '<h5 style="margin: 50px auto;">' + currentLanguage.send_success + '</h5>');
            }else{
                console.log("发送失败！")
                $(".container-outer form .form-content").append(
                    '<h5 style="margin: 50px auto;">' + currentLanguage.send_fail + '</h5>' +
                    "<button type='button' class='layer-button fail-email'>" + currentLanguage.again_email_btn + "</button>");
                forgetPwd_function(".fail-email");//绑定忘记密码
            }
        }
    }
    //转圈圈
    function loadingAjax(){
        if($(".container-outer").length){
            $(".container-outer form .form-content").empty();
        }else{
            $("body").append(text);
        }
        $(".container-outer form .form-content").append(
            '<div class="wrap">' +
                '<div class="outer"></div>' +
                '<div class="inner">' +
                    '<div class="spiner"></div>' +
                    '<div class="filler"></div>' +
                    '<div class="masker"></div>' +
                '</div>' +
                '<div class="inner2">' +
                    '<div class="spiner"></div>' +
                    '<div class="filler"></div>' +
                    '<div class="masker"></div>' +
                '</div>' +
            '</div>'
         );      
    }
    // 提交表单，并且提供转圈圈的效果
    var submitForm = function(url,form){
        // 转圈圈
        loadingAjax();
        $.ajax({
            //几个参数需要注意一下
            type: "POST",//方法类型
            url:url,
            data:form,
            processData:false,
            contentType:false,
            success: function (result) {
                console.log(result);//打印服务端返回的数据(调试用)
                var array = url.split("/");
                showReturnData(array[array.length-1], result);
            },
            error : function() {
                console.log("异常！");
            }
        });
   }

   //点击事件ajax
   var clickEvent = function(){
         $(".lay_button").unbind("click").click(function(){
            if(!checkEmail()) return;
            if(!checkPwd()) return;
            var form = new FormData(document.getElementById("form_common_id"));
            // var loginurl = "http://192.168.1.199:8080/whitelist/general/login";game.fund:8443
            // var loginurl = "https://game.fund:8443/whitelist/general/login";
            var loginurl = "https://2014zhengmeng.com:3000/whitelist/general/login";
            submitForm(loginurl,form);
        });

        $(".lay_send").unbind("click").click(function(){
            if(!checkNickname()) return;
            if(!checkEmail()) return;
            if(!checkPwd()) return;
            var form = new FormData(document.getElementById("form_common_id"));
            // var regurl = "https://game.fund:8443/whitelist/general/nocoderegister";
            var regurl = "https://2014zhengmeng.com:3000/whitelist/general/registercodeornocode";
            submitForm(regurl,form);
        });

        $(".lay_submit").unbind("click").click(function(){
            if(!checkEmailBox()) return;
            var form = new FormData(document.getElementById("form_common_id"));
            // var regurl = "https://game.fund:8443/whitelist/general/forgetPsw";
            var regurl = "https://2014zhengmeng.com:3000/whitelist/general/forgetPsw";
            submitForm(regurl,form);
        });
   }

    //绑定弹出层中的注册事件，跳转到注册页面
    var register_function = function(register_btn_node, codeError){   
        //注册账号
        $(register_btn_node).unbind("click").click(function(event){
            console.log(333)
            $(".container-outer form .form-content").empty();          
            $(".container-outer form .form-content").append(registerText);
            //填入邀请码
            var currentCode= splitUrl(window.location.href, "code");
            if(currentCode != undefined && !codeError){//codeError为true时，表示邀请码失效，就不要强制填写和禁止修改了
                $("input[name='code']").val(currentCode);
                $("input[name='code']").attr("readonly", "readonly");
            }
            //绑定登录按钮，跳转到登录页面
            login_function(".lay_gt");
            event.stopPropagation();
        })
        //弹出层内的事件
        layer_evevt();
        clickEvent();
    }
    //绑定弹出层中的忘记密码事件，跳转到忘记密码页面
    var forgetPwd_function = function(forgetPwd_btn_node){
        //忘记密码
        $(forgetPwd_btn_node).unbind("click").click(function(event){
            console.log(222)
            $(".container-outer form .form-content").empty();           
            $(".container-outer form .form-content").append(foget_pwdText);
            login_function(".lay_gt");///绑定登录按钮，跳转到登录页面
            
            event.stopPropagation();
        })
        //弹出层内的事件
        layer_evevt();
        clickEvent();
    }
    //点击记住账号
    var saveAccount = function(){
        if(localStorage.getItem("account")){
            $("input[name='account']").val(localStorage.getItem("account"))
            $("#rulelabel").addClass("checked");
        }else{
            $("input[name='account']").val("");
            $("#rulelabel").removeClass("checked");
        }
        $("#agreerule").bind("change", function(){
            if($("#rulelabel").attr("class").indexOf("checked") != -1){
                $("#rulelabel").removeClass("checked");
                localStorage.setItem("account", "");
            }else{
                $("#rulelabel").addClass("checked");
                localStorage.setItem("account", $("input[name='account']").val());
            }
        })
    }
    //绑定弹出层中的登录事件，跳转到登录页面
    var login_function = function(login_btn_node){
        $(login_btn_node).click(function(event){            
            $(".container-outer form .form-content").empty();          
            $(".container-outer form .form-content").append(loginText);
            register_function(".btn-reg");//绑定注册
            forgetPwd_function(".lay-forget-pwd");//绑定忘记密码
            saveAccount();//记住账号
            event.stopPropagation();
        })
        //弹出层内的事件
        layer_evevt();
        clickEvent();
    }
    /**
     * 解析路径中传递过来的值
     * @param {*} url 
     * @param {*} str 
     */
    function splitUrl(url, str){
        var firstArr = url.split('?');
        var secondArr = firstArr[firstArr.length - 1].split('&')
        for(var i in secondArr){
            if(secondArr[i].indexOf(str) != -1){
                var resultArr = secondArr[i].split('=');
                return resultArr[resultArr.length -1];
            }
        }
    }
    //如果当前链接中有邀请码后缀
    var have_invitation = function(){
        //获取当前路径中传递过来的参数
        var currentAccount = splitUrl(window.location.href, "code");
        if(currentAccount != undefined){
            if($(".container-outer").length){
                $(".container-outer").remove();
            }
            $("body").append(text);    
            $(".container-outer form .form-content").empty();          
            $(".container-outer form .form-content").append(registerText);
            //填入邀请码
            $("input[name='code']").val(currentAccount);
            $("input[name='code']").attr("readonly", "readonly");
            //绑定登录按钮，跳转到登录页面
            login_function(".lay_gt");
            //弹出层内的事件
            layer_evevt();
            clickEvent();
        }
    }

    //点击index.html页面的头像
    var user_function = function(){
        var userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : "";
        if(userInfo){
            //登录成功后的页面显示更改
            $("#user-login").css("color","#cf0202");
            $("#user-login .user-info").children("div").eq(0).html(userInfo.nickname);
            var left = $("#user-login .user-info").width() - $("#user-login").width()-10;
            $("#user-login .user-info").css("left", -left/2)
            //登录成功后头像的事件绑定
            $("#user-login").unbind("click").bind({
                mouseenter:function(){
                    $("#user-login").unbind("click")
                    $("#user-login .user-info").show();
                },
                mouseleave:function(){
                    $("#user-login .user-info").hide();
                },
                click:function(event){
                    $("#user-login").unbind("mouseenter")
                    $("#user-login .user-info").toggle();
                    event.stopPropagation();
                }
            });
            //点击昵称按钮，显示个人设置页面
            $("#user-login .user-info").children("div").eq(0).bind("click", function(event){
                console.log(userInfo)
                //发送ajax请求获取用户个人数据
                // var url = "https://game.fund:8443/whitelist/general/personinfo?account="+ userInfo.account +"&uid="+ userInfo.id;
                var url = "https://2014zhengmeng.com:3000/whitelist/general/personinfo?account="+ userInfo.account +"&uid="+ userInfo.id;
                var data = "";
                sendAjax(url, data, loadMyData_callback);
                function loadMyData_callback(result){
                    if(result.status == 0){
                        console.log("加载个人数据成功")
                        if($(".container-outer").length){
                            $(".container-outer").remove();//成功，直接删掉弹出层
                        }
                        showMySetting(result);
                    }else{
                        console.log("加载个人数据失败！")
                        $(".container-outer form .form-content").empty();
                        $(".container-outer form .form-content").append(
                            '<h5 style="margin: 50px auto;">' + currentLanguage.loadMyDataFail_text + '</h5>' +
                            "<button id='loadDataFail' type='button' class='layer-button'>" + currentLanguage.result_button + "</button>");
                        $("#loadDataFail").bind("click", function(event){
                            window.location.reload();
                            event.stopPropagation();
                        })
                        layer_evevt();
                    }
                }
            })
            //点击注销按钮
            $("#user-login .user-info").children("div").eq(1).bind("click", function(event){
                $("#user-login").css("color","#fff");
                $("#user-login .user-info").hide();
                //注销后，按钮解绑
                $("#user-login").unbind("click")
                $("#user-login").unbind("mouseenter")
                $("#user-login").unbind("mouseleave")
                localStorage.setItem("userInfo", "");
                //注销后刷新页面
                window.location.reload();
                event.stopPropagation();
            })
        }else{   
            //判断是否拥有邀请码
            have_invitation()
            //当前未登录状态，点击登录，弹出弹出层
            $("#user-login").unbind("click").click(function(event){
                console.log(111)
                if($(".container-outer").length > 0) return;
                if($(".container-outer").length){
                    $(".container-outer").remove();
                }
                $("body").append(text);            
                $(".container-outer form .form-content").append(loginText); 
                //点击登录，跳转到顶部
                $("html,body").animate({
                    scrollTop: 0
                }, $(document).scrollTop())

                register_function(".btn-reg");//绑定注册
                forgetPwd_function(".lay-forget-pwd");//绑定忘记密码
                saveAccount();//记住账号
                event.stopPropagation();
            })
        }
    }  
    //绑定头像的点击事件===没有参数表示非登录状态
    user_function();


    /**
     * 点击昵称按钮，显示个人设置页面
     * @param {获取的个人信息数据} data 
     */
    function showMySetting(data){
        var text =
        '<div id="mySetting-container" class="reward-container">' +
            '<div id="reward-tasklist" class="reward-tasklist-content">' +
                '<div class="reward-tasklist-detail">' +

                    '<div class="reward-tasklist-detail-navi">' +
                        '<ul>' +'<li class="active">' + currentLanguage.personInfo_text + '</li>' +'</ul>' +
                    '</div>' +
                    '<div class="reward-tasklist-detail-container">' +
                        '<div class="base-info">' +
                            '<div class="reward-tasklist-detail-title">' + currentLanguage.basicInfo_text +'</div>' +
                            '<div class="reward-tasklist-detail-content">' +
                                '<ul style="list-style-type: none;">' +
                                    '<li><span>' + currentLanguage.basicInfo_text1 +'：</span><span>' + data.user.account + '</span></li>' +
                                    '<li><span>' + currentLanguage.basicInfo_text2 +'：</span><span>' + data.user.ethaddress + '</span></li>' +
                                    '<li><span>' + currentLanguage.basicInfo_text3 +'：</span><span>' + data.user.nickname + '</span></li>' +
                                    '<li><span>ID：</span><span>' + data.user.id + '</span></li>' +
                                '</ul>' +
                            '</div>' +
                        '</div>' +
                        '<div class="promation-info">' +
                            '<div class="reward-tasklist-detail-title">' + currentLanguage.promotionInfo_text +'</div>' +
                            '<div class="reward-tasklist-detail-content">' +
                                '<ul style="list-style-type: none;">' +
                                    '<li class="invitation-code-number">' +
                                        '<span>' + currentLanguage.promotionInfo_text1 +'：</span><span>' + data.friendCount + '/' + data.totalCount + '</span>' +
                                    '</li>' +
                                    '<li class="invitation-code-text">' + currentLanguage.promotionInfo_text2 +'</li>' +
                                    '<li class="invitation-code-button">' +
                                        '<span>' + currentLanguage.promotionInfo_text3 +'</span>' +
                                    '</li>' +
                                '</ul>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                '</div>' +
            '</div>' +
        '</div>';

        addStyle("./reward/css/reward.css");
        $("body").empty();
        $("body").append(text);

        addScript("./js/jquery-1.10.2.min.js");
        addScript("./js/bootstrap.min.js");
        addScript("./js/jquery.sticky.js");
        
        addScript("./js/head-bottom.js", function(){
            var settingHeight = $(window).height() - 54 - $("#contact").height();
            $("#mySetting-container.reward-container").css("min-height", settingHeight);
            $("#mySetting-container.reward-container .reward-tasklist-content").css({"top":"5vw", "padding-bottom":"10vw"});
            $("#mySetting-container.reward-container .reward-tasklist-detail-title").css({"background-color":"#ca2728", "font-size":"1.1vw", "padding": "0.5vw 1vw","color": "#fff"});
            // $("#mySetting-container.reward-container .reward-tasklist-detail-navi ul li").css("background-color", "#ca2728");
            $("#mySetting-container.reward-container .invitation-code-number").css({"text-align":"center"});
            $("#mySetting-container.reward-container .invitation-code-text").css({"text-align":"center","margin":"3vw 0","color":"#b3b3b3"});
            $("#mySetting-container.reward-container .invitation-code-button").css({"text-align":"center"});
            $("#mySetting-container.reward-container .invitation-code-button span").css({"background-color":"#ca2728","font-size":"1vw","padding":"0.5vw 2vw","color":"#fff","cursor":"pointer"});
            if($(window).width() < 530){
                $("#mySetting-container.reward-container .invitation-code-button span").css({"padding":"5px 10px"});
            }
            $("#mySetting-container.reward-container .invitation-code-button").bind("click", function(event){
                if($("#qrcode").length){
                    $(this).css("pointer", "auto");
                    return;
                }
                addScript("./js/jquery.qrcode.min.js");
                get_invitationCode(data.user)
                event.stopPropagation();
            })
            //再次进行sticky的执行，如果使用$(window).load(function(){})则不会执行，因为load事件发生在页面加载的时候，这时页面已加载完毕
            $(function(){
                console.log("sticky")
                $("#menu").sticky({ topSpacing: 0 });
            });
            
            // $('script[src*="jquery.sequence-min.js"]').attr('src',$('script[src*="jquery.sequence-min.js"]').attr('src') + '&' + new Date().getTime());
        });  
        addScript("./js/userlogin.js");
    }

    //生成邀请码请求返回的不同的状态
    var showInvitationCodeStatus = function(result){
        var tipText;
        switch(result.status){
            case 1: tipText = currentLanguage.getMyCodeFail_text;
                    break;
            case 122: tipText = currentLanguage.getMyCodeFail_text1;
                    break;
            case 123: tipText = currentLanguage.getMyCodeFail_text2;
                    break; 
            default:  tipText = currentLanguage.getMyCodeFail_text; 
                    break;
        }
        return tipText;
    }
    //绑定点击生成邀请码事件
    function get_invitationCode(userInfo){
        //发送ajax请求获取用户个人数据
        // var url = "https://game.fund:8443/whitelist/general/invitenew?wkey=whitelist&uid="+ userInfo.id;
        var url = "https://2014zhengmeng.com:3000/whitelist/general/invitenew?wkey=whitelist&uid="+ userInfo.id;
        var data = "";
        sendAjax(url, data, getInvitation_callback);
        function getInvitation_callback(result){
            if(result.status == 0){
                console.log("生成邀请码成功")
                if($(".container-outer").length){
                    $(".container-outer").remove();//成功，直接删掉弹出层
                }
                // showInvitationCode(result.invitationCode);
                localStorage.setItem("code", result.invitationCode);
                addScript("./js/invitation_card.js");//生成邀请函图片
            }else{
                console.log("生成邀请码失败！")
                $(".container-outer form .form-content").empty();
                $(".container-outer form .form-content").append(
                    '<h5 style="margin: 50px auto;">' + showInvitationCodeStatus(result) + '</h5>' +
                    "<button id='loadDataFail' type='button' class='layer-button'>" + currentLanguage.result_button + "</button>");
                $("#loadDataFail").bind("click", function(event){ 
                    if($(".container-outer").length){
                        $(".container-outer").remove();
                    }
                    event.stopPropagation();
                })
                layer_evevt();
            }
        }
    }
    //生成邀请码后的显示
    // function showInvitationCode(invitationCode){
    //     var invitationText = 
    //     '<li class="invitation-code-button" style="text-align: center;">' +
    //         '<span style="">邀请码：</span><span style="">' + invitationCode + '</span>' +
    //     '</li>' +
    //     '<li class="invitation-code-button" style="text-align: center;">' +
    //         '<div id="qrcode" class="addGroup-qrcode"></div>' +
    //     '</li>';
    //     $("#mySetting-container.reward-container .promation-info ul").append(invitationText)
    //     var path;
    //     if(window.location.href.indexOf("code") == -1){
    //         path= window.location.href + "?code=" + invitationCode;
    //     }else{
    //         var startCode = splitUrl(window.location.href, "code");
    //         path= window.location.href.replace(startCode, invitationCode);
    //     }
    //     var realPath=toUtf8(path);
    //     $('#qrcode').qrcode({
    //         text : realPath,  //设置二维码内容  
    //         render : "canvas",//设置渲染方式  
    //         width : 200,     //设置宽度,默认生成的二维码大小是 256×256
    //         height : 200,     //设置高度  
    //         // typeNumber : -1,      //计算模式  
    //         // correctLevel : 0,//纠错等级  
    //         // background : "#ffffff",//背景颜色  
    //         // foreground : "#000000" //前景颜色  
    //     }); 
    // }
    /**
     * 地址生成二维码===地址中可用中文字符 
     * @param {*地址} str 
     */
    function toUtf8(str) {   
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
     * 发送ajax请求
     * @param {*请求接口} url 
     * @param {*请求数据} data 
     */
    function sendAjax(url, data, callback){
        //转圈圈
        loadingAjax();
        $.ajax({
            type: "POST",//方法类型
            url: url,  
            data: {
                // account: userInfo.account,
                // uid: userInfo.id
            },
            processData:false,
            contentType:false,
            success: function (result) {
                console.log(result);//打印服务端返回的数据(调试用)
                callback(result);//执行回调
            },
            error : function(result) {
                console.log("异常！");
            }
        });
    }

})

/**
 * 动态加载css文件
 * @param {*css文件路径} url 
 */
function addStyle(url){
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}
/**
 * 动态加载js文件
 * @param {*js文件路径} url 
 * @param {*加载完成的回调} callback 
 */
function addScript(url ,callback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    var head = document.getElementsByTagName("body")[0];
    if(callback == undefined){
        
    }else if(script.addEventListener){
        script.addEventListener("load", function(){
            callback();
        }, false)
    }else if(script.attachEvent){
        script.attachEvent("onreadystatechange", function(){
            var target = window.event.srcElement;
            if(target.readyState == "loaded"){
                callback();
            }
        })
    }
    head.appendChild(script);
}
