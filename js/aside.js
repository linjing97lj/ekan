$(document).ready(function(){
    $('span').click(function(){ 
        if($(this).siblings("li").hasClass('on')){ 
            $(this).siblings("li").slideUp(500).removeClass("on"); 
            $(this).children(".icon-jiantou").css("display","block");
            $(this).children(".icon-jiantou2").css("display","none");
            }else{ 
                // 首先要清除其他li标签的on类名 
                $(this).parent().siblings().children("li").removeClass("on"); 
                // on类名是随便起的，也可是active什么的都行 
                $(this).siblings("li").slideDown(500).addClass("on").parent().siblings().children("li").slideUp(500); 
                $(this).children(".icon-jiantou").css("display","none");
                $(this).children(".icon-jiantou2").css("display","block");
                } 
           }); 
   
    })



// aside-change
$(document).ready(function(){
    $(".header-button").toggle(
        function () {
        $(".header-img").css("display","none");
        $("nav").addClass("aside-new");
        },
        function () {
        $("nav").removeClass("aside-new");
        $(".header-img").css("display","block");
        }
      );
    
})

$(document).ready(function(){
    $(".second-but").click(function(){
        $("#iframes").attr("src","second.html");
    })
    $(".first-but").click(function(){
        $("#iframes").attr("src","index.html");
    })
    $(".third-but").click(function(){
        $("#iframes").attr("src","four.html");
    })
    $(".six-but").click(function(){
        $("#iframes").attr("src","six.html");
    })
    $(".five-but").click(function(){
        $("#iframes").attr("src","five.html");
    })
})



// function changeFrameHeight(){
//     var ifm= document.getElementById("iframes"); 
//     ifm.height=document.documentElement.clientHeight;

// }

// window.onresize=function(){  
//      changeFrameHeight();  

// }
