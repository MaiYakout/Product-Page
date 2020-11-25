$(function(){
    $(".listDet li").on("click",function(e){
        e.preventDefault();
        $("body,html").animate({
            scrollTop:$("#"+$(this).data("scroll")).offset().top+1
        },1000);
        $(this).addClass("active").siblings().removeClass("active");
    });




    $(window).scroll(function(){
        /* ***Sync links with scroll *** */
        $('.block').each(function(){
            if ($(window).scrollTop() > $(this).offset().top){
                $(".listDet li").removeClass("active");
                var blockId=($(this).attr("id"));
                $('.listDet li[data-scroll="' +blockId + '"]').addClass("active");
            }            
        });
        if($(window).scrollTop() >= $(".productDetails").offset().top){
            $(".listDet").addClass("fix");
        }else{
            $(".listDet").removeClass("fix");
        }
    });
});