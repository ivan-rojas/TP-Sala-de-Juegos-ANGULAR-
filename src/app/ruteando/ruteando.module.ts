import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../components/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../components/login/login.component';
import { ErrorComponent } from '../components/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../components/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from'../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../components/juegos/juegos.component';
import { RegistroComponent } from '../components/registro/registro.component';
import { MenuCardComponent } from '../components/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { MainComponent } from '../components/main/main.component';
import { TerminosComponent } from '../components/registro/terminos/terminos.component';
import { PlayerListComponent } from '../components/player-list/player-list.component';
import { AnagramaComponent } from '../components/anagrama/anagrama.component';
import { TatetiComponent } from '../components/tateti/tateti.component';
import { PptComponent } from '../components/ppt/ppt.component';
import { ForestComponent } from '../components/forest/forest.component';

// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'playerlist' , component: PlayerListComponent},
{path: '' , component: MainComponent},
{path: 'login' , component: LoginComponent},
{path: 'Mapa' , component: MapaDeGoogleComponent},
{path: 'QuienSoy' , component: QuienSoyComponent},
{path: 'register' , component: RegistroComponent},
{path: 'terms' , component: TerminosComponent},
{path: 'Listado' , component: ListadoComponent},
{path: 'Paises' , component: ListadoDePaisesComponent},

{ path: 'juegos' ,
component: JuegosComponent ,
children:
     [{path: '' , component: MenuCardComponent},
     {path: 'adivina' , component: AdivinaElNumeroComponent},
     {path: 'tateti' , component: TatetiComponent},
     {path: 'anagrama' , component: AnagramaComponent},
     {path: 'ppt' , component: PptComponent},
     {path: 'forest' , component: ForestComponent},
      {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
      {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
      {path: 'agilidad' , component: AgilidadAritmeticaComponent}]
},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }