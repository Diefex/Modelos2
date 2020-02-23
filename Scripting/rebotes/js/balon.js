function Balon(){
    this.x = 100;
    this. y = 50;
    this.velocidad = 0;
    this.direccion = 0;

    this.lanzar = function(direccion){
        this.velocidad = 20;
        this.direccion = direccion;
    }

    this.rebotarH = function(){
        this.direccion = Math.PI-this.direccion;
    }

    this.rebotarV = function(){
        this.direccion = -this.direccion;
    }

    this.actualizar = function(ctx){
        if(this.velocidad > 0){
            this.velocidad = this.velocidad - 0.07;
        }
        if(this.velocidad<0){
            this.velocidad = 0;
        }
        despX = Math.cos(this.direccion) * this.velocidad;
        despY = Math.sin(this.direccion) * this.velocidad;
        if(this.x + despX < 0 || this.x + despX > 580){
            this.rebotarH();
        }
        if(this.y + despY < 0 || this.y + despY > 410){
            this.rebotarV();
        }
        this.x = this.x + despX;
        this.y = this.y + despY;
        ctx.drawImage($("#balon")[0], this.x, this.y);
    }

}