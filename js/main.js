
function MakeSVG(Tag, Attrs) {
	var element= document.createElementNS('http://www.w3.org/2000/svg', Tag);
	for (var Index in Attrs)
		element.setAttribute(Index, Attrs[Index]);
	if (Tag == "text"){
		var textNode = document.createTextNode(Attrs["val"]);
		element.appendChild(textNode);
	}

	return element;
}


var CssItemCount= function(object){
	if (object.Colors.length == object.Texts.length && object.Texts.length == object.Detail.length && object.Detail.length == object.Counts.length){
		$("#"+object.DomId).html("");
		$("#"+object.DomId).append("<div id='BarChartFrame'></div>");

		
		// console.log(getComputedStyle(document.documentElement).getPropertyValue('--width-try-test'))
		// console.log($("#"+object.DomId))
		// document.documentElement.style.setProperty('--text-color', 'var(--backup-color)');


		var TotalCount = 0;

		for (var Index in object.Texts){
			TotalCount = TotalCount + object.Counts[Index];
			var id = "Chart_"+Index;
			var AddedDiv = document.createElement( "div" );
			$("#BarChartFrame").append("<div style='display: flex;'id ="+ id +"><div>"+object.Texts[Index]+"</div><div style=''>"+object.Counts[Index]+"<div></div>");
		}
		// $("#"+object.DomId).append("<div id='PieChartFrame'><svg id='SvgPart'><path id = 'Path0' style='fill:#f00; stroke:#fff; stroke-width:5;'/><path id = 'Path1' style='fill:#0f0; stroke:#fff; stroke-width:5;'/><path id = 'Path2' style='fill:#00f; stroke:#fff; stroke-width:5;'/><path id = 'Path3' style='fill:#000; stroke:#fff; stroke-width:5;'/></svg></div>")
		$("#"+object.DomId).append("<div id='PieChartFrame'><svg width='100%' height='100%' id='SvgPart'></svg><div id='Percentage_Area'><p id='Percentage_Text'>0%</p></div></div>")
		/*圓餅圖測試*/
		
		// var startAngle=0;// 起始角度
		// var deg = 0; // 夾角
		// var cx = 50;
		// var cy = 50;
		// var r = 50;
		// var x0 = cx+r*Math.cos(startAngle*Math.PI/180);
		// var y0 = cy-r*Math.sin(startAngle*Math.PI/180);
		// // var x0 = 0; // 計算起點x座標
		// // var y0 = 0; // 計算起點y座標
		// var x1 = 0; // 計算終點x座標
		// var y1 = 0; // 計算終點y座標
		// var rex=x0;
		// var rey=y0;
		var Circle_Hole = MakeSVG('circle',{id:'Circle_Hole',cx: '50%', cy: '50%', r:60, fill: '#FFF', 'stroke-width': 0});
		var Circle_Gray_Ring = MakeSVG('circle',{id:'Circle_Gray_Ring',cx: '50%', cy: '50%', r:'63.694268', fill: 'transparent', 'stroke-width': '8', stroke: '#BBB'});
		var Circle_Color_Ring = MakeSVG('circle',{id:'Circle_Color_Ring',cx: '50%', cy: '50%', r:'63.694268', fill: 'transparent', 'stroke-width': '8', stroke: '#F55', 'stroke-dasharray': '400', 'stroke-dashoffset': '400','transform':'rotate(-90)','transform-origin':'50% 50%'});
		// var Percentage_Text = MakeSVG('text',{id:'Percentage_Text',x: '44%', y: '59%', color:'black',val:'0%'});

		
		// var Circle_Animation = MakeSVG('animate',{dur:'5s',attributeName: 'stroke-dasharray',reapeatCount:1,to:100});

		document.getElementById('SvgPart').appendChild(Circle_Hole);
		document.getElementById('SvgPart').appendChild(Circle_Gray_Ring);
		document.getElementById('SvgPart').appendChild(Circle_Color_Ring);
		// document.getElementById('SvgPart').appendChild(Percentage_Text);
		// document.getElementById('Percentage_Text').appendChild("123");
		 // document.getElementById('Percentage_Text').textContent = PercentageText;


		// document.getElementById('circle3').appendChild(Circle_Animation);



		$("#BarChartFrame").children().each(function(Index){
			$(this).css("height",200/object.Colors.length+"px");
			$(this).css("line-height",200/object.Colors.length+"px");
			$(this).css("background-color",object.Colors[Index]);
			var TargetNumber = parseInt(this.id.split('_')[1]);
			var Percentage = (object.Counts[TargetNumber]/TotalCount);
			console.log(Percentage)
			var DashoffsetNumber = 400-(400*Percentage);
			var PercentageText = Math.round(Percentage*100);


			$(this).hover(function(){


				$("#Circle_Color_Ring").attr("stroke-dashoffset",DashoffsetNumber);
				$("#Circle_Color_Ring").attr("stroke",object.Colors[TargetNumber]);

				$(this).prop('Counter',$("#Percentage_Text").text()).stop();
				$(this).prop('Counter',$("#Percentage_Text").text()).animate({
						Counter: PercentageText
					}, {
						duration: 750,
						easing: 'swing',
						step: function (now) {
							var nowPercentage = Math.ceil(now);
							if (nowPercentage.toString().length=="1"){
								$("#Percentage_Area").css("padding-left","10%");
							}
							else if(nowPercentage.toString().length=="2"){
								$("#Percentage_Area").css("padding-left","9.5%");
							}
							else if(nowPercentage.toString().length=="3"){
								$("#Percentage_Area").css("padding-left","8.5%");
							}
							$("#Percentage_Text").text(nowPercentage+"%");
						}
				});

				// if (PercentageText.length == 2 ){
				// 	$("#Percentage_Area").css("left","46%");
				// }
				// else if(PercentageText.length == 3){
				// 	$("#Percentage_Area").css("left","44.5%");
				// }
				// else if(PercentageText.length == 4){
				// 	$("#Percentage_Area").css("left","43.5%");
				// }
				// $("#Percentage_Text").html(PercentageText);
			})
			$("#"+this.id).css("width",((Percentage*100)+18)+"%");
			$("#BarChartFrame>div>div").css("opacity",'1');
			
			/*透過輸入改變CSS的變數 並加入head中*/
			// if (getComputedStyle(document.documentElement).getPropertyValue("--Chart_Hover_Width_" + Index)==""){
			// 	var attributeName = "--Chart_Hover_Width_" + Index;
			// 	document.documentElement.style.setProperty(attributeName, ((Percentage*100)+15)+"%");

			// 	var css = '#'+this.id+'{width: var('+ attributeName +')}';
			// 	var style = document.createElement('style');

			// 	if (style.styleSheet) {
			// 	    style.styleSheet.cssText = css;
			// 	} else {
			// 	    style.appendChild(document.createTextNode(css));
			// 	}
			// document.getElementsByTagName('head')[0].appendChild(style);

			/*圓餅圖測試*/
			// deg = deg + 90;
			// // console.log(deg)
			// x1 = cx+r*Math.cos(deg*Math.PI/180);
			// y1 = cy-r*Math.sin(deg*Math.PI/180);
			// $("#Path"+Index).attr("d","M "+cx+","+cy+" L "+rex+","+rey+" A "+r+","+r+" 0 0,0 "+x1+","+y1+" Z");
			// rex = x1;
			// rey = y1;	
		});





	}
	else{
		return;
	}

}

const ChartColorArray = ["#FF8888","#FFFF88","#88FFFF","#FF88FF"];
const ChartTextArray = ["Apple","Windows","Linux","Unix"];
const ChartDetailArray = ["Good","Good","Great","Bad"];
const ChartCountArray = [84,150,52,12];


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