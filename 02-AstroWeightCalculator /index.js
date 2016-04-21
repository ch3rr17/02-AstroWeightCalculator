$(document).ready(function(){
    $("#button").click(function() { //function on click to trigger event
    
    var yourWeight = $('#weight').val(); 
    var planet = $('#planet').find(':selected').val();
    var pValue = $('#planet').find(':selected').text();
    //console.log(pValue);

    //Calculates your weight on another planet
    var result = (yourWeight * planet).toFixed(2);

    //Output result here
    $("#result").text("If you were on " + pValue + "," + " you would weigh " + result + ".");
    
    });
});