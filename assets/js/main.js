var singupBtnBlock = $('.singup_btn_block'),
    singupHeaderBlock = $('.singup_header_block'),
    loginHeaderBlock = $('.login_header_block');

$('.signup_btn').on('click', function() {
    singupBtnBlock.hide();
    singupHeaderBlock.show();
});
$('.login_btn').on('click', function() {
    singupBtnBlock.hide();
    loginHeaderBlock.show();
});
$('.cancel_btn').on('click', function() {
    singupHeaderBlock.hide();
    loginHeaderBlock.hide();
    singupBtnBlock.show();
});

$("#myTags").tagit();











var randomScalingFactor = function(){ return Math.round(Math.random()*40)};
var lineChartData = {
    labels : ["5","10","15","20","25","30"],
    datasets : [
        {
            label: "My First dataset",
            fillColor : "rgba(220,220,220,0)", //51, 179, 226 //#33B3E2
            strokeColor : "rgba(51, 179, 226,1)",
            pointColor : "rgba(51, 179, 226,1)",
            pointStrokeColor : "#33B3E2",
            pointHighlightFill : "#33B3E2",
            pointHighlightStroke : "rgba(220,220,220,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]

};

var lineChartData2 = {
    labels : ["5","10","15","20","25","30"],
    datasets : [
        {
            label: "My First dataset",
            fillColor : "rgba(220,220,220,0)", //51, 179, 226 //#33B3E2
            strokeColor : "rgba(51, 179, 226,1)",
            pointColor : "rgba(51, 179, 226,1)",
            pointStrokeColor : "#33B3E2",
            pointHighlightFill : "#33B3E2",
            pointHighlightStroke : "rgba(220,220,220,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]

};

window.onload = function(){
    //var ctx = document.getElementById("canvas").getContext("2d");
    //ctx.width = 300;
    //ctx.height = 200;
    //window.myLine = new Chart(ctx).Line(lineChartData, {
    //    responsive: true
    //});
    //
    //var ctx2 = document.getElementById("canvas_2").getContext("2d");
    //ctx2.width = 300;
    //ctx2.height = 200;
    //window.myLine = new Chart(ctx2).Line(lineChartData2, {
    //    responsive: true
    //});
};