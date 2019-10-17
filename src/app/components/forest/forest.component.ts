import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.css']
})
export class ForestComponent implements OnInit {

  public mensaje: string = '';
  public chaseCount: number = 0;
  private lastMove: string;
  public status: number;
  public lost: string = 'assets/img/forest/lost.jpg';
  public notras: string = 'assets/img/forest/notrass.jpeg';
  public salida: string = 'assets/img/forest/wayout.jpg';
  public dead: string = "'assets/img/forest/dead.jpg'";
  public black: string = 'assets/img/forest/black.jpg';
  public image: string = this.black;
  public gameOver: boolean = false;
  public esconderControles: boolean = true;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.status = 0;
    this.StartGame();
  }

  StartGame()
  {
      this.image = this.black;
      this.mensaje = "Te despertás en un bosque y debés buscar la salida.";
      this.gameOver = false;
      setTimeout(()=>{
        this.esconderControles = false;
      },3000);
      this.chaseCount = 0;
  }

  Move(move: string)
  {
    this.lastMove = move;
    let movement = this.Random();
    if(movement > 0 && movement < 60)
      this.StillLost();
    else if(movement > 60 && movement < 91)
      this.Chase();
    else
    {
      if(this.chaseCount >= 1)
      {
        this.End();
      }
      else
      {
        this.StillLost();
      }

    }
  }

  End()
  {
        this.esconderControles = true;
        this.mensaje = 'Ves un antiguo camino a lo lejos. Comenzás a caminar hacia el y...'
        this.image = this.salida;
        setTimeout(()=>{
        },3000);
        setTimeout(()=>{
          this.image = this.black;
          this.mensaje = 'Logras escapar!'
          this.gameOver = true;
        },3000);
  }

  Random(): number
  {
    let random = Math.floor((Math.random() * 100) +1);
    return random;
  }

  StillLost()
  {
    this.image = this.lost;
    if(this.lastMove == 'derecho')
      this.mensaje = 'Caminás recto y solo ves muchos árboles en la oscuridad.'
    else
      this.mensaje = 'Te movés hacia la ' + this.lastMove + ', caminás recto y solo ves muchos árboles en la oscuridad.'
  }

  Chase()
  {
    switch(this.chaseCount)
    {
      case 0:
        this.mensaje = 'Escuchas un ruido atrás tuyo, te das vuelta y solo ves árboles secos.'
        break;
      case 1:
        this.mensaje = 'Volvés a escuchar un ruido, nuevamente girás y no ves nada. Sólo árboles.'
        break;
      case 2:
        this.mensaje = 'Se escucha un ruido grave y pesado detrás tuyo. Volteas y seguís sin encontrar la causa.'
        break;
      default:
        this.esconderControles = true;
        this.mensaje = 'Pisas algo extraño y mirás el suelo. Levantás la cabeza para continuar y...'
        this.image = this.dead;
        setTimeout(()=>{
        },3000);
        setTimeout(()=>{
          this.image = this.black;
          this.mensaje = 'Estás muerto.'
          this.gameOver = true;
        },3000);
        break;
    }
    this.chaseCount++;
  }



}
