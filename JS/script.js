$(document).ready(function(){
    $(".hamburger").on("click", function(){
        $(".list-item").toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-x');
    });

    $(".item-nav a").on("click", function(){
        $(".list-item").removeClass('active');
        $(".hamburger").find('i').removeClass('fa-x').addClass('fa-bars');
    });
});