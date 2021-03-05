import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular003';
  dadoIzquierdo:string='../assets/imagenes/dado1.png';
  dadoDerecho:string='../assets/imagenes/dado2.png';
  numeroInferior:number =1;
  numeroSuperior:number=2;


  lanzarDados():void{
    this.numeroInferior=Math.round( Math.random()*5)+1;
    this.numeroSuperior=Math.round( Math.random()*5)+1;

    this.dadoIzquierdo='../assets/imagenes/dado'+this.numeroInferior+'.png';
    this.dadoDerecho='../assets/imagenes/dado'+this.numeroSuperior+'.png';
    console.log(this.numeroInferior,this.numeroSuperior);

  }
  
}
