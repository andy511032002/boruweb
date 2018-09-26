
var CssItemCount= function(object){
	if (object.Colors.length == object.Texts.length && object.Texts.length == object.Detail.length && object.Detail.length == object.Counts.length){
		$("#"+object.DomId).html("");
		// console.log($("#"+object.DomId))
		for (var Index in object.Texts){
			var AddedDiv = document.createElement( "div" );
			$("#"+object.DomId).addClass("Container-Chart");
			$("#"+object.DomId).append("<div><div>"+object.Texts[Index]+"</div></div>");
		}
		$("#"+object.DomId).children().each(function(Index){
			$(this).css("height",200/object.Colors.length+"px");
			$(this).css("line-height",200/object.Colors.length+"px");
			$(this).css("background-color",object.Colors[Index]);
		});

	}
	else{
		return;
	}

}

const ChartColorArray = ["#FF8888","#FFFF88","#88FFFF","#FF88FF"];
const ChartTextArray = ["Apple","Windows","Linux","Unix"];
const ChartDetailArray = ["Good","Good","Great","Bad"];
const ChartCountArray = [84,85,52,12];


require(['./components/About/test.js'], function (math){

console.log(math.add(1,1));

});
// CssItemCount({
// 	DomId: "example2",
// 	Colors: ChartColorArray,
// 	Texts: ChartTextArray,
// 	Detail: ChartDetailArray,
// 	Counts: ChartCountArray

// });




// $(function(){
// 	for (var Index in ChartTextArray){
// 		var AddedDiv = document.createElement( "div" );
// 		$(".Container-Chart").append("<div><div>"+ChartTextArray[Index]+"</div></div>")

// 	}

// 	$(".Container-Chart").children().each(function(Index){
// 		$(this).css("height",200/ChartColorArray.length+"px");
// 		$(this).css("line-height",200/ChartColorArray.length+"px");
// 		// $(this).css("padding-left","1%");
// 		$(this).css("background-color",ChartColorArray[Index]);
// 	});
// });