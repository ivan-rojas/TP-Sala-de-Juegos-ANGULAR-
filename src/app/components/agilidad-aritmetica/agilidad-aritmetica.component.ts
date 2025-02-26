import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import { Score } from '../../models/score';
import { ScoreService } from '../../services/firebase/score.service';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  enJuego: boolean = false;
  perdio:boolean=false;
  gano:boolean=false;
  private subscription: Subscription;

  ngOnInit() {
  }

   constructor(private service: ScoreService) 
  {
    this.ocultarVerificar=true;
    this.Tiempo=5; 
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");  
  }

  NuevoJuego() 
  {
    this.nuevoJuego.resetear();
    this.enJuego = true;
    this.gano=false;
    this.perdio=false;
    this.nuevoJuego.generarCuenta();
    this.ocultarVerificar=false;
    this.repetidor = setInterval(()=>
    { 
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0) 
      {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
    }, 900);
  }

  verificar()
  {
    this.ocultarVerificar=true;
    clearInterval(this.repetidor);
    this.Tiempo = 5;

    if(this.nuevoJuego.verificar())
    {
      this.gano=true;
      this.service.Add(new Score('Agilidad', true));
      
    }
    else
    {
      this.perdio=true;
      this.service.Add(new Score('Agilidad', false));
    }

    this.enJuego = false
  }  

}
