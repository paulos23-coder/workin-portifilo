$("#dark-btn").click(function (){
    $("body").toggleClass("dark-mode");

});
$("#dark-btn").click(function(){
    if($("body").hasClass("dark-mode")){
        $(this).text("White mode");
     }
     else{
        $(this).text("Dark mode");
     }


});