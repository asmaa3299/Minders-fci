$(document).scroll(function() {
  if($(window).scrollTop() > 40){

   $("nav").css("background","white");
   $("nav").css("border-bottom","3px solid black");
   $(".nav-link").css("color","black");
   $(".navbar-brand").css("color","black");
   $(".up-btn").css("display","block");

  }else if($(window).scrollTop() < 40){

   $("nav").css("background","black");
   $(".nav-link").css("color","#FFB607");
   $(".navbar-brand").css("color","white");
   $(".up-btn").css("display","none");
  }
});

let oldcard = "";
let i = 0
function play(card) {
    if (i == 0) {
        //document.getElementById("cardbody").style.display="block";
        $(card + " .card-body").css("opacity", "1");
        $(card + " .card-body").css("transform", "translateY(260px)");
        $(card).css("height", "400px");
        $(card+ " .fa-arrow-down").attr('class', 'fas fa-arrow-up');
        oldcard = card;
        i = 1;
    }
    else if (i == 1 && oldcard != card) {
        $(oldcard + " .card-body").css("opacity", "0");
        $(oldcard + " .card-body").css("transform", "translateY(0px)");
        $(oldcard).css("height", "230px");
        $(oldcard+ " .fa-arrow-up").attr('class', 'fas fa-arrow-down');
        $(card + " .card-body").css("opacity", "1");
        $(card + " .card-body").css("transform", "translateY(260px)");
        $(card).css("height", "400px");
        $(card+ " .fa-arrow-down").attr('class', 'fas fa-arrow-up');
        oldcard = card;
        i = 1;
    } else if (i == 1 && oldcard == card) {
        $(".card-body").css("opacity", "0");
        $(".card-body").css("transform", "translateY(0px)");
        $(".card").css("height", "230px");
        $(card+ " .fa-arrow-up").attr('class', 'fas fa-arrow-down');
        i = 0;
    }
}