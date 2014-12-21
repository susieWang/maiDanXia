 $("#shouye").click(function(){
    $("#shouye").removeClass("pagetitle sprite-shouye").addClass("pagetitlehover sprite-shouye-hover");
    $("#fenqi").addClass("pagetitle sprite-fenqi").removeClass("pagetitlehover sprite-fenqi-hover");
    $("#qincang").addClass("pagetitle sprite-qincang").removeClass("pagetitlehover sprite-qincang-hover");
    $("#zhaoshang").addClass("pagetitle sprite-zhaoshang").removeClass("pagetitlehover sprite-zhaoshang-hover");
 });

 $("#fenqi").click(function(){
    $("#shouye").addClass("pagetitle sprite-shouye").removeClass("pagetitlehover sprite-shouye-hover");
    $("#fenqi").removeClass("pagetitle sprite-fenqi").addClass("pagetitlehover sprite-fenqi-hover");
    $("#qincang").addClass("pagetitle sprite-qincang").removeClass("pagetitlehover sprite-qincang-hover");
    $("#zhaoshang").addClass("pagetitle sprite-zhaoshang").removeClass("pagetitlehover sprite-zhaoshang-hover");
 });

 $("#qincang").click(function(){
    $("#shouye").addClass("pagetitle sprite-shouye").removeClass("pagetitlehover sprite-shouye-hover");
    $("#fenqi").addClass("pagetitle sprite-fenqi").removeClass("pagetitlehover sprite-fenqi-hover");
    $("#qincang").removeClass("pagetitle sprite-qincang").addClass("pagetitlehover sprite-qincang-hover");
    $("#zhaoshang").addClass("pagetitle sprite-zhaoshang").removeClass("pagetitlehover sprite-zhaoshang-hover");
 });

  $("#zhaoshang").click(function(){
    $("#shouye").addClass("pagetitle sprite-shouye").removeClass("pagetitlehover sprite-shouye-hover");
    $("#fenqi").addClass("pagetitle sprite-fenqi").removeClass("pagetitlehover sprite-fenqi-hover");
    $("#qincang").addClass("pagetitle sprite-qincang").removeClass("pagetitlehover sprite-qincang-hover");
    $("#zhaoshang").removeClass("pagetitle sprite-zhaoshang").addClass("pagetitlehover sprite-zhaoshang-hover");
 });



