
$(function(){

    //点击博客模块跳转
    $(".first-body .news-content-body1-img").click(function(){
        window.open("https://www.eventbrite.co.uk/e/neo-seoul-meetup-tickets-43587853443");
    });
    $(".first-body .news-text-content2").click(function(){
        window.open("https://www.eventbrite.co.uk/e/neo-seoul-meetup-tickets-43587853443");
    });

    $(".second-body .news-content-body1-img").click(function(){
        window.open("https://bcreator.io/");
    });
    $(".second-body .news-text-content2").click(function(){
        window.open("https://bcreator.io/");
    });

    $(".news-detail-f").bind({
        mouseenter:function(){
            $(".qrcode-img").removeClass("hidden-qrimg");
        },
        mouseleave:function(){
            $(".qrcode-img").addClass("hidden-qrimg");
        }
    });
    
    //调用翻译的内容
    translation();

    //翻译的内容
    //  var translation = function(){
    function translation(){
        var language = localStorage.getItem("language");
        if(language == "cn"){
            console.log("cn1")
            $("html").attr("lang", "zh-cmn-Hans");
            //news_content
            $("#news_content_item1").html("最新消息");
            $("#news_content_item2").html("阅读并了解我们的进展情况");
            $("#news_content_item3").html("博客");
            $("#news_content_item4").html("Emerald Hall B，Grand Hilton Seoul，3月16日，18：00-21：40（KST）");
            $("#news_content_item5").html("eGamingFund 创始人董浩，3月16日将在NEO meetup韩国首尔站，进行项目首次路演。欢迎加入我们！");
            $("#news_content_item6").html("eGamingFund 创始人董浩，3月16日将在NEO meetup韩国首尔站，进行项目首次路演。欢迎加入我们！");

            $("#news_content_item7").html("2019-03-27-BY eGamingFund TEAM");
            $("#news_content_item8").html("BCreator.io引擎的Alpha测试版本可以在我们的网站上下载。欢迎加入我们来体验！");
            $("#news_content_item9").html("BCreator.io引擎的Alpha测试版本可以在我们的网站上下载。欢迎加入我们来体验！");

        }else if(language == "en"){
            console.log("en")
            $("html").attr("lang", "en");
            //news_content
            $("#news_content_item1").html("LATEST NEWS POSTS");
            $("#news_content_item2").html("READ AND GET UPDATED ON HOW WE PROGRESS");
            $("#news_content_item3").html("BLOG");
            $("#news_content_item4").html("2019-03-15-BY eGamingFund TEAM");
            $("#news_content_item5").html("DONG Hao, Founder of eGamingFund presenting at Seoul NEO Meetup on Friday, Mar 16. Come and join us! Emerald Hall B, Grand Hilton Seoul, Mar 16, 18:00–21:40(KST)");
            $("#news_content_item6").html("DONG Hao, Founder of eGamingFund presenting at Seoul NEO Meetup on Friday, Mar 16. Come and join us! Emerald Hall B, Grand Hilton Seoul, Mar 16, 18:00–21:40(KST)");

            $("#news_content_item7").html("2019-03-27-BY eGamingFund TEAM");
            $("#news_content_item8").html("Bcreator.io Alpha version is available now! Download and join us!");
            $("#news_content_item9").html("Bcreator.io Alpha version is available now! Download and join us!");

            // $("#news_content_item8").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");
            // $("#news_content_item9").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");

        }else if(language == "ja"){
            console.log("ja")
            $("html").attr("lang", "ja");
            //news_content
            $("#news_content_item1").html("LATEST NEWS POSTS");
            $("#news_content_item2").html("READ AND GET UPDATED ON HOW WE PROGRESS");
            $("#news_content_item3").html("BLOG");
            $("#news_content_item4").html("2019-03-15-BY eGamingFund TEAM");
            $("#news_content_item5").html("DONG Hao, Founder of eGamingFund presenting at Seoul NEO Meetup on Friday, Mar 16. Come and join us! Emerald Hall B, Grand Hilton Seoul, Mar 16, 18:00–21:40(KST)");
            $("#news_content_item6").html("DONG Hao, Founder of eGamingFund presenting at Seoul NEO Meetup on Friday, Mar 16. Come and join us! Emerald Hall B, Grand Hilton Seoul, Mar 16, 18:00–21:40(KST)");

            $("#news_content_item7").html("2019-03-27-BY eGamingFund TEAM");
            $("#news_content_item8").html("Bcreator.io Alpha version is available now! Download and join us!");
            $("#news_content_item9").html("Bcreator.io Alpha version is available now! Download and join us!");

            // $("#news_content_item8").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");
            // $("#news_content_item9").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");

        }else{
            console.log("en2")
            $("html").attr("lang", "en");
            //news_content
            $("#news_content_item1").html("LATEST NEWS POSTS");
            $("#news_content_item2").html("READ AND GET UPDATED ON HOW WE PROGRESS");
            $("#news_content_item3").html("BLOG");
            $("#news_content_item4").html("2019-03-15-BY eGamingFund TEAM");
            $("#news_content_item5").html("DONG Hao, Founder of eGamingFund presenting at Seoul NEO Meetup on Friday, Mar 16. Come and join us! Emerald Hall B, Grand Hilton Seoul, Mar 16, 18:00–21:40(KST)");
            $("#news_content_item6").html("DONG Hao, Founder of eGamingFund presenting at Seoul NEO Meetup on Friday, Mar 16. Come and join us! Emerald Hall B, Grand Hilton Seoul, Mar 16, 18:00–21:40(KST)");

            $("#news_content_item7").html("2019-03-27-BY eGamingFund TEAM");
            $("#news_content_item8").html("Bcreator.io Alpha version is available now! Download and join us!");
            $("#news_content_item9").html("Bcreator.io Alpha version is available now! Download and join us!");
            
            // $("#news_content_item8").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");
            // $("#news_content_item9").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");
        }
    }
});