
var jugando;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio(){
	jugando = true;
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = document.createElement("canvas");
	balon = new Balon();

	run();	

}

function capturaTeclado(event){
	if(event.which==38 || event.which==87)
		balon.lanzar(3*Math.PI/2);
	if(event.which==40 || event.which==83)
		balon.lanzar(Math.PI/2);
	if(event.which==39 || event.which==68)
		balon.lanzar(0);
	if(event.which==37 || event.which==65)
		balon.lanzar(Math.PI);
	if(event.which==67)
		balon.lanzar(Math.PI/4);
	if(event.which==90)
		balon.lanzar(3*Math.PI/4);
	if(event.which==81)
		balon.lanzar(5*Math.PI/4);
	if(event.which==69)
		balon.lanzar(7*Math.PI/4);
	
}

function run(){ 
	buffer.width = miCanvas.width;
	buffer.height = miCanvas.height;
	contextoBuffer = buffer.getContext("2d");
		 
	if(jugando){  
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);

		balon.actualizar(contextoBuffer);

		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);
		
	}else{
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
		contextoBuffer.fillStyle = "#ffffff";
		contextoBuffer.font = "50px sans-serif";
		contextoBuffer.fillText("GAMEOVER", 300, 440);
		contextoBuffer.fillStyle = "#ff0000";
		contextoBuffer.font = "15px sans-serif";
		contextoBuffer.fillText("try again", 550, 460);
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
	}
	
}


