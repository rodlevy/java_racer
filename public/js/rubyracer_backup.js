$(document).ready(function() {
  var counter1 = 0;
  var counter2 = 0;
  $('#counter').on('click', function() {
    var countdown = 5;
    setInterval(function(){countdown--}, 100);
  }); 

  $(document).on('keyup', function(key) {
  
  if (key.which == 80)
    {
    // var currentlyActive = $('.active');
    // $('.active').removeClass('active');
    $('.active').next().addClass('active');
    $('.active').last().prev().removeClass('active');  
    counter1++;
    console.log(counter1) ;
    console.log(key.which);
    if (counter1 == 14){
      alert('Player 1 Wins!')
      }
    }
  });

    $(document).on('keyup', function(key) {
  if (key.which == 81)
    {
    // var currentlyActive = $('.active');
    // $('.active').removeClass('active');
    $('.active1').next().addClass('active1');
    $('.active1').last().prev().removeClass('active1');    
    console.log(key.which);
    }
  });
});
