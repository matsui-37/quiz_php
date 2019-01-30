$(function(){
  'use strict';

  $(".answer").on("click", function(){
    var $selected = $(this);
    var answer = $selected.text();

    $.post("/_answer.php", {

    // 終わった後の処理
    }).done(function(res){
      if (answer === res.correct_answer){
        // correct!
      } else {
        // wrong!
      }
    });
  });

});
