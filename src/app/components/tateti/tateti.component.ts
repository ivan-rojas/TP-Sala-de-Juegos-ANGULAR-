import { Component, OnInit } from '@angular/core';
import { Score } from '../../models/score';
import { ScoreService } from '../../services/firebase/score.service';
import { JuegoTateti } from '../../clases/juego-tateti';


@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  nuevoJuego: JuegoTateti;
  enJuego: boolean = false;
  turnoJugador = false;
  cuentaMarcas: number = 0;
  imgCruz: string = './assets/img/x.png';
  imgCirculo: string = './assets/img/o.png';
  loser:boolean=false;
  winner:boolean=false;
  draw:boolean=false;
  constructor(private service: ScoreService) {
    this.nuevoJuego = new JuegoTateti();
  
}
generarJugada() {
  let row = Math.floor(Math.random() * 3);
  let col = Math.floor(Math.random() * 3);
  this.marcarJugada(row, col, true);
  if(this.cuentaMarcas==10)
  {
    this.draw=true;
    this.nuevoJuego.juegoTerminado=true;
  }
}


marcarJugada(row: number, column: number, jugadaGenerada: boolean) {
  if (jugadaGenerada) {
    if (this.nuevoJuego.tablero[row][column] != "" && this.cuentaMarcas < 9) {
      this.generarJugada()
    } else {
      this.cuentaMarcas++;
      this.nuevoJuego.tablero[row][column] = this.imgCruz;
      this.turnoJugador = true;
      if(this.nuevoJuego.verificarTresEnLinea(this.imgCruz)){
        if(!this.nuevoJuego.verificar()){
          this.loser=true;
          this.service.Add(new Score('TATETI', false));
        }
      }
    }
  } else {
    if (this.nuevoJuego.tablero[row][column] == "") {
      this.cuentaMarcas++;
      this.nuevoJuego.tablero[row][column] = this.imgCirculo;
      this.turnoJugador = false;
      if (!this.nuevoJuego.verificarTresEnLinea(this.imgCirculo)) {
        setTimeout(() => {
          this.generarJugada();
        }, 400);
      } else {
        this.winner=true;
        this.service.Add(new Score('TATETI', true));
      }
    }
  }
}

nuevo() {
  this.draw=false;
  this.loser=false;
  this.winner=false;
  this.nuevoJuego.juegoTerminado = false;
  this.nuevoJuego.reset();
  this.enJuego = true;
  this.turnoJugador = true;
  this.cuentaMarcas = 0;
}
ngOnInit()
{

}
}
