import { Component } from '@angular/core';
import { Score } from '../../models/score';
import { ScoreService } from '../../services/firebase/score.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent {
palabra:string;
palabraOculta:string;
palabraIngresada:string;
indice:number;
isWin:boolean;
jugando=false;
id:number;
isLose=false;
diccionario: {[id: number]: string;} = {1:"movilidad", 2:"hola", 3:"jugar", 4:"facultad",
    5: "universidad", 6: "torpeza", 7: "aburrido", 8: "trabajo",9:"dormir",10:"comer",11:"despertar",12:"chau",13:"pagar",14:"nadar",
  15:"cargar",16:"guardar",17:"destruir",18:"romper",19:"arreglar",20:"trabar"};
  constructor(private service: ScoreService) { }
NuevoJuego()
{
  this.palabraIngresada="";
  this.isWin=false;
  this.isLose=false;
  this.jugando=true;
  this.indice=Math.floor((Math.random() * 20) + 1);
  this.palabra=this.diccionario[this.indice];
  this.palabraOculta=this.palabra;
  let array: Array<string> = this.palabra.split("");
  array.sort(); 
  this.palabra = array.join("");
  this.palabraOculta.toLowerCase();
  console.log(this.palabraOculta);
}
 
Verificar()
{
  if(this.palabraIngresada!=undefined)
  {
    this.palabraIngresada=this.palabraIngresada.toLowerCase();
  }
  
  if(this.palabraIngresada==this.palabraOculta)
  {
    this.jugando=false;
    this.isWin=true;
    this.isLose=false;
    this.service.Add(new Score('Anagrama', true));
  }
  else
  {
      this.jugando=false;
      this.isLose=true;
      this.isWin=false;
      this.service.Add(new Score('Anagrama', false));
  }
}
}
