  var first_end = ["234", "273", "312", "351"];
  var second_end = ["464", "503", "542", "581"];
  var first, second, sum;

$(".wrapper").ready(function(){
  var min_first = 6;
  var max_first = 9;
  var min_sum = 11;
  var max_sum = 14;
  
  first = Math.round (min_first - 0.5 + Math.random() * (max_first - min_first + 1));
  sum =  Math.round (min_sum - 0.5 + Math.random() * (max_sum - min_sum + 1));
  second = sum - first;
  
  $(".first_out").val(first);
  $(".second_out").val(second);
  $(".sum_out").val("?");
  $(".first_out").css("border", "none");
  $(".second_out").css("border", "none");
  $(".sum_out").css("border", "none");
  $('.arrow_1').css("width", first_end[first-min_first]);
  $(".arrow_2").css("width", second_end[sum-min_sum] - (+first_end[first-min_first]) - 35);
  
  $(".first_in").keyup(function(){
    var first_int = $(".first_in").val();
    if(first_int == first) {
      $(".second_in").css("visibility","visible");
      $(".arrow_2").css("visibility","visible");
      $(".first_in").prop("readonly", "true");
      $(".first_out").css("background", "white");
      $(".first_in").css("color", "black");
      $(".first_in").css("border", "none");
      $(".first_in").css("margin", 12);
      $(".first_in").css("autofocus", "false");
      $('.second_in').focus();
    }else{
      $(".first_out").css("background", "yellow");
      $(".first_in").css("color", "red");
    }
  })
  
 $(".second_in").keyup(function(){
    var second_int = $(".second_in").val();
    if(second_int == second) {
      $(".sum_out").removeAttr("readonly");
      $(".sum_out").val("");
      $(".sum_out").css("border-color","white");
      $(".second_in").prop("readonly", "true");
      $(".second_out").css("background", "white");
      $(".second_in").css("color", "black");
      $(".second_in").css("border", "none");
      $(".first_in").css("margin", 10);
      $('.sum_out').focus();
    }else{
      $(".second_out").css("background", "yellow");
      $(".second_in").css("color", "red");
    }
  })
  
  $(".sum_out").keyup(function(){
    var sum_int = $(".sum_out").val();
    if(sum_int > 10) {
           if(sum_int == sum) {
            alert("You win!")
           }else{
            $(".sum_out").css("color", "red");
           }
    }
  });
})