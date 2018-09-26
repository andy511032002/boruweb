
var CircleDetailArray=[];
var offsetX,offsetY;


	var dashboard =  function(object){
		// DomId,Width,Height
		var canvas, canvas2;
		var ctx, ctx2;
		var CanvasOffset;
		var canvasWidth = parseInt($("#"+object.DomId).css("width").replace("px",""))-15;
		console.log(canvasWidth)
		var boFocusspot = false;
		var Max = Number.MIN_SAFE_INTEGER, Min = Number.MAX_SAFE_INTEGER, Average, Range;
		var DisplayIntervalValue;
		var DataLength;

		_dashboard = function(){
			$("#"+object.DomId).html("");
				// var ctx = (a canvas context);
				// ctx.canvas.width  = window.innerWidth;
				// ctx.canvas.height = window.innerHeight;
			// $("#"+object.DomId).append("<canvas id='"+object.DomId+"canvas' width='"+canvasWidth+"' height='"+object.Height+"' style='position:absolute;'></canvas>");
			// $("#"+object.DomId).append("<canvas id='testcanvas' width='"+canvasWidth+"' height='"+object.Height+"' style='position:absolute;'></canvas>");
			$("#"+object.DomId).css("width","100%");
			$("#"+object.DomId).css("height",object.Height);

			$("#"+object.DomId).append("<canvas id='"+object.DomId+"canvas'style='position:absolute;'></canvas>");
			$("#"+object.DomId).append("<canvas id='testcanvas' style='position:absolute;'></canvas>");

			canvas = $("#"+object.DomId+"canvas");
			ctx = canvas[0].getContext('2d');
			canvas2 = $("#testcanvas");
			ctx2 = canvas2[0].getContext('2d');
			ctx.canvas.width  = canvasWidth;
			ctx.canvas.height = object.Height;
			ctx2.canvas.width  = canvasWidth;
			ctx2.canvas.height = object.Height;

			CanvasOffset = canvas.offset();
			offsetX = CanvasOffset.left;
			offsetY = CanvasOffset.top;
			Drawbackground(ctx,object)
			// function(Context,Object,X,Y,Width,Height,Radius)
			$("#testcanvas").on("mousemove",function(e){
				handleMouseMove(e);
			});


			
		}	
		Drawbackground = function(Context,object){
			
			var FocusSpotX, FocusSpotY;
			//-------------- line

			for(var index = 0 ; index < object.Data.length ; index++){
				for (var DataIndex = 0 ; DataIndex < object.Ykey.length ; DataIndex++){
					eval("var value = object.Data[index]."+object.Ykey[DataIndex]);
					if ( value > Max ){
						Max = value;
					}
					if ( value < Min ){
						Min = value;
					}
				}
			}
			Average = (Max+Min)/2;
			Range = Max-Min;

			for (var iMultiple = 1; iMultiple < 10000; iMultiple *= 10)
			{
				var boGetResult = false;
				for (var iInteger = 1; iInteger < 9; iInteger++)
				{
					if (Range < (iInteger * iMultiple * 10))
					{
						Average = (Math.floor((Average / (iInteger * iMultiple)))) * (iInteger * iMultiple);
						DisplayIntervalValue = (iInteger * iMultiple);
						boGetResult = true;
						break;
					}
				}
				if (boGetResult)
				{
					break;
				}
			}

			for (var index = -5 ; index <= 5 ; index++){
				var YPosition = Math.floor(object.Height * (0.5 + (index * 0.09)));
				Context.beginPath();
				Context.moveTo(0, YPosition);
				Context.lineTo(canvasWidth, YPosition);
				Context.lineWidth = 2;
				Context.strokeStyle = "#cccccc";
				Context.stroke();
				Context.closePath();
				Context.font = "10px  Comic Sans MS";
				Context.fillStyle = "#777777";
				Context.fillText((Average - (index * DisplayIntervalValue)), 0, 0.5*object.Height+index*0.09*object.Height+10);

			}
			//-------------- data
			DataLength = object.Data.length;

			for (var index = 0 ; index < DataLength; index++){

				Context.beginPath();
				Context.lineWidth = 2;
				CircleDetailArray[index] =[];
				for(var DataIndex = 0 ; DataIndex < object.Ykey.length;DataIndex++){
					var YPosition = Math.floor(object.Height * (0.5 + (index * 0.09)));
					CircleDetailArray[index][DataIndex]={};
					CircleDetailArray[index][DataIndex].X = (0.9*canvasWidth/DataLength)*(index+1);
					CircleDetailArray[index][DataIndex].RadiusSquare = (0.25*canvasWidth/DataLength);
					evalstring = "CircleDetailArray[index][DataIndex].Y = object.Height * (0.5 - ((object.Data[index]." + object.Ykey[DataIndex] + " - Average) * 0.09) / DisplayIntervalValue);";
					eval(evalstring);
					Context.beginPath();
					Context.arc(CircleDetailArray[index][DataIndex].X, CircleDetailArray[index][DataIndex].Y, 8, 0, 2*Math.PI);
					Context.fillStyle = object.Color[DataIndex];
					Context.fill();
					Context.closePath();

					if (index!=DataLength-1){
						Context.beginPath();
						Context.lineTo(CircleDetailArray[index][DataIndex].X, CircleDetailArray[index][DataIndex].Y);
						evalstring = "Context.lineTo("+(0.9*canvasWidth/DataLength)*(index+2)+",object.Height * (0.5 - ((object.Data[index+1]." + object.Ykey[DataIndex] + " - Average) * 0.09) / DisplayIntervalValue));";																					
						eval(evalstring);
						Context.closePath();
					}
					Context.strokeStyle = object.Color[DataIndex];
					Context.stroke();
					Context.closePath();

				}
			}
			//-------------- data xlabel name
			for (var index = 0 ; index < DataLength; index++){
				for(var DataIndex = 0 ; DataIndex < object.Xkey.length;DataIndex++){
					evalstring = "var Textlength = object.Data[index]."+object.Xkey[DataIndex]+".toString().length";
					eval(evalstring);
					// console.log((Textlength/2)*12+8)
					Context.font = "12px  Comic Sans MS";
					Context.fillStyle = "#777777";
					evalstring = "Context.fillText(object.Data[index]."+object.Xkey[DataIndex]+",CircleDetailArray[index][DataIndex].X-0.5*7*Textlength, object.Height);";
					eval(evalstring);
					// -(Math.floor(Textlength/2))*12+8
				}

				// Context.fillText((Average - (index * DisplayIntervalValue)), 0, 0.5*object.Height+index*0.09*object.Height+10);

			}
		}		 
		Drawit = function(Context,object,IndexOfCircle){
			// console.log(IndexOfCircle)
			Context.clearRect(0, 0, canvas2.width(), canvas2.height());
		
			for (var index = 0 ; index < DataLength; index++){
				for (var DataIndex = 0 ; DataIndex < object.Ykey.length ; DataIndex++){
					if (IndexOfCircle !=undefined && IndexOfCircle == index){
						Context.beginPath();
						evalstring = "FocusSpotY = object.Height * (0.5 - ((object.Data[index]." + object.Ykey[DataIndex] + " - Average) * 0.09) / DisplayIntervalValue);";
						FocusSpotX = (0.9*canvasWidth/DataLength)*(index+1);
						eval(evalstring);
						Context.arc(FocusSpotX, FocusSpotY, 11,0,2*Math.PI);
						Context.fillStyle = object.Color[DataIndex];
						Context.fill();
						Context.closePath();
						if (DataIndex==object.Ykey.length -1){
							if ((FocusSpotY-90 < 0)){
								DetailRoundRectangle(Context,IndexOfCircle,object,FocusSpotX-60,FocusSpotY+20,120,70,10);
							}
							else{
								DetailRoundRectangle(Context,IndexOfCircle,object,FocusSpotX-60,FocusSpotY-90,120,70,10);
							}
						}
					}
				}
				if (IndexOfCircle !=undefined && IndexOfCircle == index){
					break;
				}
			}
			Context.closePath();
		};

		handleMouseMove = function(e){
			var FocusNumber;
			var mouseX = parseInt(e.clientX - offsetX);
			var mouseY = parseInt(e.clientY - offsetY);
			for(var index = 0 ; index < CircleDetailArray.length ; index++){

				for (var DataIndex = 0 ; DataIndex < object.Ykey.length ; DataIndex++){
					var dx = mouseX - CircleDetailArray[index][DataIndex].X;
					var dy = mouseY - CircleDetailArray[index][DataIndex].Y;
					if(parseInt(dx) <=  parseInt(CircleDetailArray[index][DataIndex].RadiusSquare)){
						boFocusspot = true;
						FocusNumber = index;
						break;
					}
					else{
						boFocusspot = false;
					}
				}
				if (boFocusspot == true){
					break;
				}
			}
					
			if (boFocusspot == true){
				Drawit(ctx2,object,FocusNumber);
			}
			else{
				Drawit(ctx2,object);
			}
		};

		DetailRoundRectangle = function(Context,FocusNumber,ObjectForData,X,Y,Width,Height,Radius){
			Context.beginPath();
			// Context.fillStyle = "#FFFFFF";
			Context.fillStyle = "rgba(255,255,255,0.5)";
			Context.moveTo(X+Radius, Y);
			Context.lineTo(X+Width-Radius, Y);
			Context.quadraticCurveTo(X+Width, Y, X+Width, Y+Radius);
			Context.lineTo(X+Width, Y+Height-Radius);
			Context.quadraticCurveTo(X+Width, Y+Height, X+Width-Radius, Y+Height);
			Context.lineTo(X+Radius, Y+Height);
			Context.quadraticCurveTo(X, Y+Height, X, Y+Height-Radius);
			Context.lineTo(X, Y+Radius);
			Context.quadraticCurveTo(X, Y, X+Radius, Y);
			Context.fill();	
			Context.fillStyle = "#111111";
			Context.stroke();
			Context.closePath();
			Context.font = "15px Times New Roman";
			for(var DataIndex = 0 ; DataIndex < ObjectForData.Ykey.length ; DataIndex++){
				Context.fillStyle = ObjectForData.Color[DataIndex];
				evalstring = "Context.fillText(ObjectForData.Label[DataIndex]+':'+ObjectForData.Data[FocusNumber]."+ObjectForData.Ykey[DataIndex]+", X+5, Y+15*(DataIndex+1))";
				eval(evalstring);
			}


		}


		_dashboard();
	}

	var x = {DomId:"example",Width:$(window).width()*0.9,Height:300,Color:["#FF9999"],Title:["Number"],Data:[8,3,5,3,5,7,2,3,1]};





		