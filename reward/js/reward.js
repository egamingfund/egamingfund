
$(function(){

    var currentDataJson = dataJson.en;
    if(localStorage.getItem("language") == "cn"){
        currentDataJson = dataJson.cn;
    }

    /**
     * reward页面 start
     */
    $(function(){
        //导航点击滚动到达
        var navigationScroll = function(idText, time){
            var mao = $("#" + idText)
            if(mao.length > 0){
                var pos = mao.offset().top;
                var posHeight = mao.height();
                $("html,body").animate({
                    scrollTop: pos-54
                }, time)
            }
        }    
        //点击“任务列表”滚动到相应的
        $(".reward-tasklist-button-text").on("click", function(){
            navigationScroll("reward-tasklist", 1000);
        })

        //判断饼图的不同屏幕宽度的显示
        var reward_share_show = function(content){
            if($(window).width() < 1000){
                if($(".reward-share-content-mobile").css("display") == "block") return;
                $(".reward-share-content").hide();
                $(".reward-share-content-mobile").css("display", "block");
                for(var i in content.award_mobile){
                    $(".reward-share-content-mobile .item-content .item-content-text").eq(i).html(content.award_mobile[i]);
                }
            }else{
                if($(".reward-share-content").css("display") == "flex") return;
                $(".reward-share-content-mobile").hide();
                $(".reward-share-content").css("display", "flex");
                for(var i in content.award){
                    $(".reward-share-content .item-content").eq(i).html(content.award[i]);
                }
            }
        }
        //添加任务列表的详细数据
        var addDetail = function (content, type){
            $(".reward-tasklist-taskDecribation ul").empty();
            $(".reward-tasklist-taskDecribation ul").append("<li>" + content.descripation + "</li>");
            if(type == true){//是导航栏的第一个li
                $(".reward-tasklist-result").show();//悬赏结果
                $(".reward-tasklist-result ul").empty();
                $(".reward-tasklist-result ul").append("<li>" + content.result + "</li>");
                $(".reward-tasklist-taskAward ul").hide();
                //判断饼图的不同屏幕宽度的显示
                reward_share_show(content);
            }else{
                $(".reward-tasklist-result").hide();//悬赏结果
                $(".reward-share-content").hide();
                $(".reward-share-content-mobile").hide();
                $(".reward-tasklist-taskAward ul").show();
                $(".reward-tasklist-taskAward ul").empty();
                for(var i in content.award){
                    $(".reward-tasklist-taskAward ul").append("<li>" + content.award[i] + "</li>");
                }
            }
            //添加内容的小标题（第一个li和其它的不一样）
            $(".reward-tasklist-detail-title span").each(function(index, element){
                $(element).html(content.titleArray[index]);
            });
            $(".reward-tasklist-taskJoin ul").empty();
            for(var i in content.join){
                $(".reward-tasklist-taskJoin ul").append("<li>" + content.join[i] + "</li>");
            }
            $(".reward-tasklist-taskRule ul").empty();
            for(var i in content.rule){
                $(".reward-tasklist-taskRule ul").append("<li>" + content.rule[i] + "</li>");
            } 
        }

        //添加完整的数据，包括导航栏和每个目录的详细数据
        addContent(currentDataJson);

        //中英文切换修改的页面内容
        if(localStorage.getItem("language") == "cn"){
            $(".reward-title-bg").css("background-image", "url(./img/reward_bg_cn.jpg)")
            if($(window).width() < 530){
                $(".reward-title-bg").css("background-image", "url(./img/reward_bg_mobile_cn.jpg)")
            }
        }else{
            if($(window).width() < 530){
                $(".reward-tasklist-detail-navi ul li").css("flex","40%");
            }
            $(".reward-tasklist-detail-navi ul li").css('line-height', '120%');
            $(".reward-share-content-mobile .reward-share-content-text .item-content").css({"line-height":"inherit"});
            $(".reward-tasklist-button .reward-tasklist-button-text").html("Task List");
            $(".reward-share-content-mobile .reward-share-img-big .reward-share-total-budget .reward-share-total-budget-text").html("Total Budget");
            $(".reward-share-content .reward-share-img-big .reward-share-total-budget .reward-share-total-budget-text").html("Total Budget");
        }
        

        //添加完整的数据，包括导航栏和每个目录的详细数据
        function addContent(currentDataJson){
            if(!currentDataJson){
                console.log("json空数据")
                return;
            }
            //开始添加数据
            $(".reward-tasklist-detail-navi ul").empty();
            for(var i in currentDataJson){
                $(".reward-tasklist-detail-navi ul").append("<li>" + currentDataJson[i].title + "</li>");
            }
            $(".reward-tasklist-detail-navi ul li").eq(0).addClass("active").siblings().removeClass("active");
            addDetail(currentDataJson[0].content, true);
            //添加导航栏的点击事件
            $(".reward-tasklist-detail-navi ul").children("li").bind("click", function(){
                $(this).addClass("active").siblings().removeClass("active");
                $(".reward-tasklist-detail-container .layer-tips").remove();
                var index = $(this).index();
                if(index == 0){
                    addDetail(currentDataJson[index].content, true);
                }else if(index > 6){
                    addDetail(currentDataJson[index].content, false);
                    $(".reward-tasklist-detail-container").css("position","relative");
                    $(".reward-tasklist-detail-container").append("<div class='layer-tips'>敬请期待！</div>");
                    $(".reward-tasklist-detail-container .layer-tips").css({"position":"absolute","width":"100%","height": "103%", "top":"-4%",
                                                                        "display":"flex", "padding-top":"50%","justify-content":"center",
                                                                        "background-color": "rgba(38, 38, 38, 0.6)", "color": "#fff", "font-size":"4vw"});
                    if($(window).width() < 530){
                        $(".reward-tasklist-detail-container .layer-tips").css({"font-size":"3rem", "top": "-30px"});
                    }
                    if(localStorage.getItem("language") == "en"){
                        $(".reward-tasklist-detail-container .layer-tips").html("Coming Soon!");
                    }
                }else{
                    addDetail(currentDataJson[index].content, false);
                }     
                console.log(index)
            })
        }

        //监听浏览器窗口大小事件
        $(window).resize(function(){
            if($(".reward-tasklist-detail-navi ul").children("li").attr("class").indexOf("active") != -1){
                //判断饼图的不同屏幕宽度的显示
                reward_share_show(currentDataJson[0].content);
            }
            if($(window).width() < 530 && localStorage.getItem("language") == "cn"){
                $(".reward-title-bg").css("background-image", "url(./img/reward_bg_mobile_cn.jpg)")
            }
        })

        //哔哩哔哩导航栏的下拉按钮，此方法可以实现，但toggle主要用于block/none，会自动隐藏当前的节点
        // $(".reward-tasklist-detail-navi .reward-show-navi").bind({
        //     click: function(){
        //         $(this).unbind("click").toggle(
        //             function(){
        //                 $(".reward-tasklist-detail-navi").removeClass("showed");
        //                 $(".reward-tasklist-detail-navi ul").removeClass("showed");
        //                 $(".reward-tasklist-detail-navi .reward-show-navi").removeClass("showed");
        //             },function(){                       
        //                 $(".reward-tasklist-detail-navi").addClass("showed");
        //                 $(".reward-tasklist-detail-navi ul").addClass("showed");
        //                 $(".reward-tasklist-detail-navi .reward-show-navi").addClass("showed");
        //         })
        //     }
        // });
        var toggle_show_navi = function(){
            $(".reward-tasklist-detail-navi .reward-show-navi").unbind("click").click(function(){
                $(".reward-tasklist-detail-navi").addClass("showed");
                $(".reward-tasklist-detail-navi ul").addClass("showed");
                $(".reward-tasklist-detail-navi .reward-show-navi").addClass("showed");

                $(".reward-tasklist-detail-navi .reward-show-navi").unbind("click").click(function(){
                    $(".reward-tasklist-detail-navi").removeClass("showed");
                    $(".reward-tasklist-detail-navi ul").removeClass("showed");
                    $(".reward-tasklist-detail-navi .reward-show-navi").removeClass("showed");
                    toggle_show_navi();
                })
            })
        }
        toggle_show_navi();
        
    })
});