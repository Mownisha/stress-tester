$(document).ready(function(){
  $("#stress-test").submit(function(event){
    event.preventDefault();
    var warning = 0;
    var symptoms = 0;
    $("input:checkbox[name=warnings]:checked").each(function() {
       warning += 1;
    });
    $("input:checkbox[name=health]:checked").each(function() {
       symptoms += 1;
    });

    if (symptoms >= 1) {
      $(".health-deal").show();
    }
    if (warning >= 1) {
      $(".warnings-deal").show();
    }

  });
});
