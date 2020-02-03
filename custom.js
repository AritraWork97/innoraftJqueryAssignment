$( document ).ready(function() {
   $(".section1 button").click(() => {
    $('.section1 .height').animate({ height: 300, opacity: 1 }, 'slow');
   });

   $(".section2 button").click(() => {
    $('.section2 .height').animate({ marginLeft: 400 }, 'slow');
   });

   var fixmeTop = $('.full').offset().top;
   $(window).scroll(() => {
       var currentScroll = $(window).scrollTop();
       if (currentScroll >= 700) {
           $('.full').css({
               position: 'fixed',
               top: '0',
               left: '0',
               width: '100%'
           });
       }  
       if(currentScroll >= 900 || currentScroll < fixmeTop){
           $('.full').css({
               position: 'static'
           });
       }
   });

   $(".section5 button").click(() => {
        $('.section5 p:nth-child(3)').wrap("<div class='new'></div>");
   });

   $(".section9 button").click(() => {
       $('.section9 input').val("new value");
       $('.section9 button').prop('disabled', 'true');
   })

   $(".section6 button").click(() => {
       $(".section6 p").each((index, value) => {
        var isempty = $(value).attr('class');
        if(isempty == null || isempty.length < 1){
            $(value).css("background","red")
        }
       });
   });

   $(".section7 button").click(() => {
    $('.section7 li:nth-child(4)').css("background","red")
    $('.section7 li:nth-child(5)').css("background","red")
    $('.section7 li:nth-child(6)').css("background","red")
});

    $(".section8 button").click(() => {
        $(".section8 li+li").css("border-color", "red");
    });

    $("#tab1").click(() => {
        $(".tabcontent .active").text("Tab 1 value is changed")
        $(".tabcontent .active").css("background-color", "coral")
    });

    $("#tab2").click(() => {

        $(".tabcontent .content").text("Tab 2 value is changed")
        $(".tabcontent .content").css("background-color", "lightblue")
    })

    $('.section10 button').click(function(){ 
        $("html").animate({ scrollTop: 0 }, 600); 
    }); 

});