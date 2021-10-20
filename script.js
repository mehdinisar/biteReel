$(function(){
  $("#cross").hide() 
});

$(function(){
  $(".panel").hide() 
});

// sticky header 
$(function() {
  $(window).scroll(function(){
    if($(window).scrollTop() > 0){
      $(".topBar").addClass("sticky");
    }
    else{
      $(".topBar").removeClass("sticky");
    }
  });
});


// mobile view menu 
$('#lines').click(function(){
  $("#myTopnav").slideToggle(500);
});

// tabs section 
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

// accordian 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() 
  {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block")
     
    {
      panel.style.display = "none";
    } 
    else
     
    {
      panel.style.display = "block";
    }
  });
}
// accordian load more 
  $(".accordianItem").slice(0,3).show();
  $("#loadmore").on("click",function(){ 
    $(".accordianItem:hidden").slice(0,3).show();
    if($(".accordianItem:hidden").length == 0 ) {
      $("#loadmore").fadeOut();
    }
  });
  

