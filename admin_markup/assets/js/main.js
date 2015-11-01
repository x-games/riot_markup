











var randomScalingFactor = function(){ return Math.round(Math.random()*40)};
var lineChartData = {
    labels : ["MON","TUE","WED","THU","FRI","SAT","SUN"],
    datasets : [
        {
            label: "My First dataset",
            fillColor : "rgba(255,255,255,0)", //51, 179, 226 //#33B3E2
            strokeColor : "rgba(255, 255, 255,0.3)",
            pointColor : "rgba(255, 255, 255,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(255,255,255,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]

};

var lineChartData2 = {
    labels : ["5 PM","8 PM","11 PM","2 AM","8 AM","11 AM","2 PM","5 PM"],
    datasets : [
        {
            label: "My First dataset",
            fillColor : "rgba(255,255,255,0)", //51, 179, 226 //#33B3E2
            strokeColor : "rgba(255, 255, 255,0.3)",
            pointColor : "rgba(255, 255, 255,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(255,255,255,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]

};

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.width = document.getElementsByClassName('admin_content_dashboard_charts_wrapper')[0].offsetWidth;
    ctx.height = 243;
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });

    var ctx2 = document.getElementById("canvas_2").getContext("2d");
    ctx2.width = document.getElementsByClassName('admin_content_dashboard_charts_wrapper')[0].offsetWidth;
    ctx2.height = 243;
    window.myLine = new Chart(ctx2).Line(lineChartData2, {
        responsive: true
    });
};