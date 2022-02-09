$(".cross").mouseenter(function(){
  $(".line2").css("width","20px")
});
$(".cross").mouseleave(function(){
  $(".line2").css("width","30px")
});

$(".cross").click(function(){
    event.preventDefault();
    $(".project_block").css("display","flex");
    $(".project_g").slideToggle(200);
  if($(".cross").css("background-color") == "rgb(148, 81, 47)"){
    $(".cross").css("background-color","orange");
    console.log("1");
  }
  else{
    $(".cross").css("background-color","#94512F");
    console.log("2");
  }
});
$(".project_g .project_block .cross").click(function(){
    $(".project_g").slideUp(200);
})