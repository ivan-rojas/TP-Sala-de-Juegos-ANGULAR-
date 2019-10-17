import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
   miServicioJuego:JuegoServiceService

  constructor(servicioJuego:JuegoServiceService) {
    this.miServicioJuego = servicioJuego;
    
  }
  
  ngOnInit() {
    this.listadoParaCompartir = [
      {nombre: "TaTeTi", jugador: "Jorge", gano: false},
      {nombre: "PPT", jugador: "Iván", gano: true},
      {nombre: "Adivina el nro", jugador: "Martin", gano: false},
      {nombre: "Adivina el nro", jugador: "Jorge", gano: true},
      {nombre: "TaTeTi", jugador: "Román", gano: true},
      {nombre: "TaTeTi", jugador: "Román", gano: false},
      {nombre: "PPT", jugador: "Martin", gano: true},
      {nombre: "Adivina el nro", jugador: "Martin", gano: false},
      {nombre: "Adivina el nro", jugador: "Martin", gano: true},
      {nombre: "PPT", jugador: "Iván", gano: false},
      {nombre: "TaTeTi", jugador: "Jorge", gano: false},
      {nombre: "PPT", jugador: "Jorge", gano: false},
      {nombre: "PPT", jugador: "Martin", gano: false},
      {nombre: "Adivina el nro", jugador: "Jorge", gano: true},
      {nombre: "TaTeTi", jugador: "Jorge", gano: true},
    ];
  }

  llamaService(){
    console.log("llamaService");
    this.listadoParaCompartir= this.miServicioJuego.listar();
  }

  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  }
}
