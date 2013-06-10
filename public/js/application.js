$(document).ready(function() {
  $('#click-me').on('click',function(){
    var countdown = 3;
    var timer = -3;
    setInterval(function(){
      if (countdown == 0){
      $('#click-me').hide()
      $('#timer').show();
    }
    console.log(timer);
    $('#click-me').text(countdown);
  if (timer < 0) {
    $('#timer').hide()}
  else{
    $('#timer').text(timer)
    $('#timer').show()
  }
    countdown--;
    timer++;
    
    },1000);

  var counter1 = 0;
  var counter2 = 0; 

  $(document).on('keyup', function(key) {
  if (key.which == 80){
    $('.active').next().addClass('active');
    $('.active').last().prev().removeClass('active');  
    counter1++;
    console.log(counter1) ;
    console.log(key.which);
    if (counter1 == 14){
      alert('Player 1 Wins!, Your time was:'+timer)
      }
    }
  });

    $(document).on('keyup', function(key) {
  if (key.which == 81){
    $('.active1').next().addClass('active1');
    $('.active1').last().prev().removeClass('active1'); 
      counter2++;   
      if (counter2 == 14){
      alert('Player 2 Wins!, Your time was:'+timer)
      }}
  });
    }
  );
});
