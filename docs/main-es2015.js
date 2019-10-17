(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n\t<button class=\"btn btn-success btn-menu\" (click)=\"toggleMenu()\"><i class=\"fa fa-bars\"></i></button>\r\n\t<div class=\"d-flex\" id=\"wrapper\" [ngClass]=\"status ? 'toggled' : ''\">\r\n\t\t\t<div class=\"bg-dark\" id=\"sidebar-wrapper\">\r\n\t\t\t\t<div class=\"sidebar-heading\">Menu principal </div>\r\n\t\t\t\t<div class=\"list-group list-group-flush\">\r\n\t\t\t\t\t<a routerLink=\"/\" class=\"list-group-item list-group-item-action bg-dark list-item\"><i class=\"fa fa-home\"></i></a>\r\n\t\t\t\t\t<a routerLink=\"/juegos\" class=\"list-group-item list-group-item-action bg-dark list-item\">Juegos</a>\r\n\t\t\t\t\t<a routerLink=\"/Listado\" class=\"list-group-item list-group-item-action bg-dark list-item\">Listado de resultados</a>\r\n\t\t\t\t\t<a routerLink=\"/playerlist\" class=\"list-group-item list-group-item-action bg-dark list-item\">Jugadores</a>\r\n\t\t\t\t\t<a routerLink=\"/\" class=\"list-group-item list-group-item-action bg-dark list-item\" (click)=\"Logout()\"><i class=\"fa fa-sign-out\"></i></a>\r\n\t\t\t\t\t<a class=\"list-group-item list-group-item-action bg-dark list-item list-item-last\">\r\n\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-coolwhite\" routerLink=\"/Login\" >Ingresar</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-coolwhite\" routerLink=\"/terms\" >Registrarse</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"page-content-wrapper\">\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \n<h1> listado </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \n<h1> Listado de Resultados </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n  <div class=\"hero-text\">\n      <h1 style=\"font-size:50px\">Sala de Juegos</h1>\n      <p>Iván Rojas</p>\n      <a href=\"https://github.com/ivan-rojas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\n      <a routerLink=\"/QuienSoy\" >Quien Soy? <i class=\"fa fa-user\"></i></a>\n  </div>\n  <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/Registro\"><span class=\"glyphicon glyphicon-user\"></span>Registrarse</a></li>\n          <li><a  routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/input-jugadores/input-jugadores.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/input-jugadores/input-jugadores.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  input-jugadores works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/jugadores-listado/jugadores-listado.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\n  Jugadores\n</h1>\n<div class=\"row\">\n  <div class=\"col-2\"></div>\n  <div class=\"col-8\">\n      <table class=\"table table-players\">\n          <thead>\n            <tr>\n              <th>Usuario/Email</th>\n              <th>Ganadas</th>\n              <th>Fecha de registro</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let player of players\" >\n              <td>{{player.email}} </td>\n              <td>{{player.wins}} </td> \n              <td>{{player.registerDate}}</td> \n            </tr>\n          </tbody>\n        </table>\n  </div>\n  <div class=\"col-2\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-paises/listado-de-paises.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\n Listado de paises\n</h1>\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>Pais</th>\n      <th>Región</th>\n      <th>Nombre local</th>\n      <th>Sub Región</th>\n      <th>Población</th>\n      <th>Bandera</th>\n      <th>Capital</th>\n      <th>GPS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pais of listadoDePaises\">\n      <td>{{pais.name}} </td>\n      <td>{{pais.region}} </td> \n      <td>{{pais.nativeName}} </td> \n      <td>{{pais.subregion}} </td>       \n      <td>{{pais.population}} </td> \n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \n      <td>{{pais.capital}} </td> \n      <td>{{pais.borders}} </td> \n      <td>{{pais.latlng}} </td> \n    </tr>\n   \n  </tbody>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--div *ngFor=\"let juego of listado\">\n\n<p> {{juego.nombre}} </p>\n<p> {{juego.jugador}} </p>\n\n</div-->\n\n<h1>Listado de resultados</h1>\n\n<table class=\"table table-condensed\">\n    <thead>\n      <tr>\n        <th>Juego</th>\n        <th>Jugador</th>\n        <th>Resultado</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let juego of listado\">\n        <td>{{juego.nombre}} </td>\n        <td>{{juego.jugador}} </td> \n        <td *ngIf=\"juego.gano\">Gano </td>   \n        <td *ngIf=\"!juego.gano\">Perdio</td>     \n      </tr>\n     \n    </tbody>\n  </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado/listado.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado/listado.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \n\n<!-- Centered Pills -->\n<ul class=\"nav nav-pills nav-justified\">\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\n  </ul>\n  \n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listados/listados.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listados/listados.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  listados works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mapa-de-google/mapa-de-google.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mapa-de-google/mapa-de-google.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<!--<agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\">\n   \n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n<input type =\"text\" [(ngModel)]=\"lat\" />\n<input type=\"text\" [(ngModel)]=\"lng\"/> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--div>\n    <button routerLink=\"/Principal\">Principal</button>\n    <button (click)=\"Juego('Adivina')\">Adivina</button>\n    <button (click)=\"Juego('Agilidad')\">Agilidad</button>\n    <button (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</button>\n    <button (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</button>  \n    <button routerLink=\"/error\">Error</button>\n  \n</div-->\n\n<!--nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a routerLink=\"/Juegos\">Juegos</a></li>\n        <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n        <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n        <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n        </ul>\n    </div>\n  </nav-->\n  <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n                                  \n          </button>\n          <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n                <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n                </ul>\n        </div>\n      </div>\n    </nav>\n      \n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<div class=\"container\" >\n   \n    <ul class=\"list-group\">\n        <li class=\"list-group-item list-group-item-danger\">\n           \n                <div class=\"media-body\">\n                    <div class=\"hero-text\">\n                        <h4 >Menú Principal</h4>\n                    </div>\n                 </div>\n               \n             \n          </li>\n        <li class=\"list-group-item list-group-item-success\">\n          <a routerLink=\"/Juegos\">\n            <div class=\"media\">\n              <div class=\"media-left\">\n                    <img src=\"./assets/imagenes/saladejuegos.jpg\" class=\"media-object imagenDeMenu\" >\n              </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Juegos</h4> \n                <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>\n        <li class=\"list-group-item list-group-item-secondary\">\n            <a routerLink=\"/Listado\">\n              <div class=\"media\">\n                  <div class=\"media-left\">\n                      <img src=\"./assets/imagenes/listado.png\" class=\"media-object imagenDeMenu\" >\n                    </div>\n                <div class=\"media-body\">\n                  <h4 class=\"media-heading\">Listados de resultados</h4>\n                  <p>Los listados de los resultados con ordenamiento y busqueda</p>\n                </div>\n                \n              </div> \n            </a>\n          </li>\n        <li class=\"list-group-item list-group-item-warning\">\n          <a routerLink=\"/Juegos\">\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <img src=\"./assets/imagenes/configuracion.jpg\" class=\"media-object imagenDeMenu\" >\n                  </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Configuraci&oacute;n</h4>\n                <p>Ajustes de la aplicacion y los métodos de autentificación</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>\n        <li class=\"list-group-item list-group-item-primary\">\n          <a routerLink=\"/Jugadores\">\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <img src=\"./assets/imagenes/jugadores.jpg\" class=\"media-object imagenDeMenu\" >\n                  </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Jugadores</h4>\n                <p>Listado de jugadores</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>\n       \n        \n      </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n        </button>\n        <a class=\"navbar-brand\" href=\"./\">Sala De Juegos</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"./QuienSoy#quien\">Quien</a></li>\n          <li><a href=\"/TP_LAV4_2017/QuienSoy#que\">Ques es</a></li>\n          <li><a href=\"./QuienSoy#donde\">Donde</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  \n  <!-- First Container -->\n  <div id =\"quiwn\"class=\"container-fluid bg-1 text-center\">\n    <h3 class=\"margin\">Quién Soy?</h3>\n    <img src=\"./assets/imagenes/quiensoy.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\n    <h3>Soy Un alumno de la UTN FRA</h3>\n  </div>\n  \n  <!-- Second Container -->\n  <div id =\"que\" class=\"container-fluid bg-2 text-center\">\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\n    <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\n      produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\n    <a href=\"#\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-file\"></span> Descargar PDF\n    </a>\n  </div>\n  \n  <!-- Third Container (Grid) -->\n  <div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \n    <h3 class=\"margin\">Dónde Funciona?</h3><br>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\n        <img src=\"./assets/imagenes/quiensoy1.png\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\"> \n        <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\n        <img src=\"./assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\"> \n        <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\n        <img src=\"./assets/imagenes/quiensoy3.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\n      </div>\n    </div>\n  </div>\n  \n  <!-- Footer -->\n  <footer class=\"container-fluid bg-4 text-center\">\n    <p>Modificado por <a href=\"https://github.com/DucauArley\">www.github.com/DucauArley</a></p> \n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adivina-el-numero/adivina-el-numero.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adivina-el-numero/adivina-el-numero.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"align-center\">\n  <h1>\n    {{nuevoJuego.nombre}}\n  </h1>\n </div>\n<h2></h2>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-2\"></div>\n    <div class=\"col-lg-8\">\n<form name=\"juego\" class=\"align-center\">\n   <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"Número\" name=\"numeroIngresado\" type=\"text\" class=\"form-control form-control-lg align-center\"/>\n    <h1 class=\"text-dark\">{{nuevoJuego.numeroIngresado}}</h1>\n \n    <h2 [hidden]=\"ocultarVerificar\" class=\"text-white\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-warning btn-lg text-white\">Verificar</button></h2>\n \n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-warning btn-lg text-white\">Nuevo número secreto</button></h2>\n \n    <h2   class=\"text-white\"><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" >Ingrese un número...</p></h2>\n\n    <h3 [hidden]=\"!nuevoJuego.gano\" class=\"text-success\">Usted adivino el número!</h3>\n    <h3 [hidden]=\"nuevoJuego.gano\" class=\"text-danger\">Usted aún no gano </h3>\n</form>\n<div id=\"snackbar\">{{Mensajes}}</div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/agilidad-aritmetica/agilidad-aritmetica.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/agilidad-aritmetica/agilidad-aritmetica.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<!-- index.html -->\n<div class=\"container\" *ngIf=\"!enJuego\">\n    <div class=\"row\">\n      <div class=\"col-3\"></div>\n      <div class=\"col-6 align-center\">\n          <h1>{{nuevoJuego.nombre}}</h1>\n      </div>\n      <div class=\"col-3\"></div>\n    </div>\n    <div class=\"row middle-row\">\n      <div class=\"col-3\"></div>\n      <div class=\"col-6\">\n          <h5>Resuelve los problemas matemáticos antes de que se acabe el tiempo</h5>\n      </div>\n      <div class=\"col-3\"></div>\n    </div>\n    <div class=\"row middle-row\">\n      <div class=\"col-3\"></div>\n      <div class=\"col-6\">\n        <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-outline-success full-width\">Nuevo Juego</button></h2>\n      </div>\n      <div class=\"col-3\"></div>\n    </div>\n</div>\n   <div class=\"container\">\n      <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\" *ngIf=\"enJuego\" style=\"color: white\">\n          <div class=\"row\">\n            <div class=\"col-3\"></div>\n            <div class=\"col-2\">\n              <h2 class=\"align-center\">{{nuevoJuego.numeroUno}}</h2>\n            </div>\n            <div class=\"col-2\">\n              <h2 class=\"align-center\" >{{nuevoJuego.operador}}</h2>\n            </div>\n            <div class=\"col-2\">\n              <h2 class=\"align-center\" >{{nuevoJuego.numeroDos}}</h2>\n            </div>\n            <div class=\"col-3\"></div>\n          </div>\n        </div>\n        <div class=\"col-3\"></div>\n      </div>\n      <div class=\"row middle-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n          <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" *ngIf=\"enJuego\" type=\"text\" class=\"align-center full-width form-control\" (keyup.Enter)=\"verificar()\" autofocus/>\n        </div>\n        <div class=\"col-3\"></div>\n      </div>\n      <div class=\"row middle-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n          <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success full-width\">Verificar {{Tiempo}} </button></h2>\n          \n        </div>\n        <div class=\"col-3\"></div>\n      </div>\n    </div>\n\n  <div class=\"align-center\" > \n      <h2 *ngIf=\"gano\" class=\"success-message\" >¡Ganaste!</h2>\n      <h3 *ngIf=\"enJuego\" class=\"error-message\" >Todavía no adivinó </h3>\n      <h2 *ngIf=\"perdio\" class=\"error-message\" >Perdiste</h2>\n  </div>\n    \n  \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/anagrama/anagrama.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/anagrama/anagrama.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"title-description\" *ngIf=\"!jugando\">\n    <div class=\"row\">\n      <div class=\"col-3\"></div>\n      <div class=\"col-6 align-center\">\n        <h1>Anagrama</h1>\n      </div>\n      <div class=\"col-3\"></div>\n    </div>    \n    <div class=\"row middle-row\">\n      <div class=\"col-3\"></div>\n      <div class=\"col-6 align-center\">\n        <h5>Arma la palabra con las letras que recibirás en pantalla.</h5>\n      </div>\n      <div class=\"col-3\"></div>\n    </div>\n    <div class=\"row middle-row\">\n      <div class=\"col-3\"></div>\n      <div class=\"col-6 align-center\">\n          <button class=\"btn btn-success full-width\" (click)=\"NuevoJuego()\">Nueva partida</button>\n      </div>\n      <div class=\"col-3\"></div>\n    </div>\n  </div>\n\n  <div class=\"game\" *ngIf=\"jugando\">\n      <div class=\"row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6 align-center\">\n          <label for=\"palabra\" class=\"word\">{{palabra.toUpperCase()}}</label>\n          <input type=\"text\" class=\"form-control align-center full-width\" [(ngModel)]=\"palabraIngresada\" placeholder=\"Palabra armada\">\n        </div>\n        <div class=\"col-3\"></div>\n      </div>\n      <div class=\"row middle-row\">\n          <div class=\"col-3\"></div>\n          <div class=\"col-6 align-center\">\n              <button class=\"btn btn-outline-success full-width\" (click)=\"Verificar()\">Comprobar</button>\n          </div>\n          <div class=\"col-3\"></div>\n      </div>\n    </div>  \n    <div class=\"row middle-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6 align-center\">\n            <h1 class=\"success-message\" *ngIf=\"isWin\">¡Ganaste!</h1>\n            <h1 class=\"error-message\" *ngIf=\"isLose\">Perdiste</h1>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\"></div>\n    <div class=\"row top-row\">\n        <div class=\"col-12\">\n            <h1>Ups! Página no encontrada.</h1>\n        </div>\n    </div>\n    <div class=\"row middle-row\">\n        <div class=\"col-12 align-center\">\n            <a routerLink=\"/\">Volver al inicio</a>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forest/forest.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forest/forest.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8\">\n            <div class=\"main-screen\" id=\"screen\" [style.background-image]=\"'url(' + image + ')'\">\n                <div class=\"row screen-center\">\n                    <div class=\"col-4\"></div>\n                    <div class=\"col-4 align-center\">\n                        <h4 class=\"mess\">\n                            {{mensaje}}\n                        </h4>\n                    </div>\n                    <div class=\"col-4\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-2\"></div>\n    </div>\n    <div class=\"row\" *ngIf=\"!gameOver\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8\">\n            <div class=\"controllers align-center\" *ngIf=\"!esconderControles\">\n                <div class=\"btn-group\">\n                    <button class=\"btn btn-dark\" (click)=\"Move('izquierda')\">Izquierda</button>\n                    <button class=\"btn btn-dark\" (click)=\"Move('derecho')\">Adelante</button>\n                    <button class=\"btn btn-dark\" (click)=\"Move('derecha')\">Derecha</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-2\"></div>\n    </div>\n    <div class=\"row\" *ngIf=\"gameOver\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8\">\n            <div class=\"controllers align-center\">\n                <button class=\"btn btn-primary full-width\" (click)=\"StartGame()\">Volver a jugar</button>\n            </div>\n        </div>\n        <div class=\"col-2\"></div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/juegos/juegos.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/juegos/juegos.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<h1>Juegos</h1>\n<hr>\n <router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<div class=\"row top-row\">\n\t\t<div class=\"col-12 align-center\">\n\t\t\t<h2>Login</h2>\n\t\t</div>\n\t</div>\n\t<div class=\"row middle-row\">\n\t\t<div class=\"col-2\"></div>\n\t\t<div class=\"col-8 align-center\">\n\t\t\t<input type=\"text\" class=\"form-control full-width align-center\" [(ngModel)]=\"email\" placeholder=\"Email\">\n\t\t</div>\n\t\t<div class=\"col-2\"></div>\n\t</div>\n\t<div class=\"row middle-row\">\n\t\t<div class=\"col-2\"></div>\n\t\t<div class=\"col-8 align-center\">\n\t\t\t<input type=\"password\" class=\"form-control full-width align-center\" [(ngModel)]=\"password\" placeholder=\"Clave\">\n\t\t</div>\n\t\t<div class=\"col-2\"></div>\n\t</div>\n\t<div class=\"row middle-row\">\n\t\t<div class=\"col-2\"></div>\n\t\t<div class=\"col-8 align-center\">\n\t\t\t<button class=\"btn btn-outline-danger bit-right-margin\" routerLink=\"/\">Cancelar</button>\n\t\t\t<button class=\"btn btn-outline-success bit-left-margin\" (click)=\"Login()\">Acceder</button>\n\t\t</div>\n\t\t<div class=\"col-2\"></div>\n\t</div>\n\t<div class=\"row middle-row\">\n\t\t<div class=\"col-2\"></div>\n\t\t<div class=\"col-8 align-center\">\n      <a routerLink=\"/register\">Olvidé mi contraseña</a>\n\t\t</div>\n\t\t<div class=\"col-2\"></div>\n  </div>\n  <div class=\"row middle-row last-row\">\n\t\t<div class=\"col-2\"></div>\n\t\t<div class=\"col-8 align-center\" [ngClass]=\"{'error-message': isError == true, 'success-message': isError == false}\">\n\t\t\t{{message}}\n\t\t</div>\n\t\t<div class=\"col-2\"></div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid main-container\">\n    <h1 class=\"main-title\">Sala de Juegos</h1>\n    <div class=\"btn-group\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-outline-success btn-coolgreen\" (click)=\"GoToGithub()\">GitHub <i class=\"fa fa-github\"></i></button>\n        <button type=\"button\" class=\"btn btn-outline-success btn-coolgreen\" routerLink=\"/QuienSoy\">About me <i class=\"fa fa-user\"></i></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-card/menu-card.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-card/menu-card.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row top-row\">\n    <div class=\"col-4\">\n      <div class=\"game-item-box\" id=\"game-anag\">\n          <button class=\"btn btn-warning game-name\" routerLink=\"/juegos/anagrama\">Anagrama</button>\n      </div>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"game-item-box\" id=\"game-agil\">\n            <button class=\"btn btn-primary game-name\" routerLink=\"/juegos/agilidad\">Agilidad aritmética</button>\n        </div>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"game-item-box\" id=\"game-num\">\n            <button class=\"btn btn-secondary game-name\" routerLink=\"/juegos/adivina\">Adivina el número</button>\n        </div>\n    </div>\n  </div>\n  <div class=\"row middle-row\">\n    <div class=\"col-4\">\n      <div class=\"game-item-box\" id=\"game-tate\">\n          <button class=\"btn btn-success game-name\" routerLink=\"/juegos/tateti\">Ta-Te-Ti</button>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"game-item-box\" id=\"game-ppt\">\n          <button class=\"btn btn-danger game-name\" routerLink=\"/juegos/ppt\">Piedra, papel o tijera</button>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"game-item-box\" id=\"game-fore\">\n          <button class=\"btn btn-dark game-name\" routerLink=\"/juegos/forest\">Just a Forest</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- \n\n<div class=\"container\">\n    <div class=\"card\">\n      <img class=\"img-thumbnail\"   src=\"./assets/imagenes/aritmetica.png\" alt=\"Avatar\" style=\"width:100%\">\n      <h1>Velocidad y agilidad aritmética </h1>\n      <p class=\"title\">Juego de agilidad mental</p>\n      <p>UTN FRA </p>\n  \n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n      <p>           <button class=\"button\"  (click)=\"Juego('Agilidad')\">Jugar</button></p>\n    \n    </div>\n  \n    <div class=\"card\">\n      <img class=\"img-thumbnail\" src=\"./assets/imagenes/ppt.jpg\" alt=\"Avatar\" style=\"width:100%; border-radius: 100%;\">\n      <h1>Piedra Papel o Tijera</h1>\n      <p class=\"title\">Juega contra la máquina</p>\n      <p>UTN FRA </p>\n      \n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n      <p>           <button class=\"button\"  (click)=\"Juego('PPT')\">Jugar</button></p>\n    </div>\n    <div class=\"card\">\n      <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/adivina.jpg\" alt=\"Avatar\" style=\"width:100%\">\n      <h1>Adivina el número secreto</h1>\n      <p class=\"title\">Juego de estrategia</p>\n      <p>UTN FRA </p>\n      \n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n      <p>           <button class=\"button\"  (click)=\"Juego('Adivina')\">Jugar</button></p>\n    </div>\n  </div>\n\n  -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-list/player-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-list/player-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\n  Jugadores\n</h1>\n<div class=\"row\">\n  <div class=\"col-2\"></div>\n  <div class=\"col-8\">\n      <table class=\"table table-players\">\n          <thead>\n            <tr>\n              <th>Usuario/Email</th>\n              <th>Ganadas</th>\n              <th>Fecha de registro</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let player of players | async\" >\n              <td>{{player.email}} </td>\n              <td>{{player.wins}} </td> \n              <td>{{player.registerDate}}</td> \n            </tr>\n          </tbody>\n        </table>\n  </div>\n  <div class=\"col-2\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ppt/ppt.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ppt/ppt.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"align-center\">Piedra papel o tijera</h1>\n<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8 align-center gameboard\" *ngIf=\"jugando\">\n                <label>JUGADOR</label><br>\n                <h1>?</h1>\n        </div>\n        <div class=\"col-8 align-center gameboard\" *ngIf=\"mostrar\">\n                <label>JUGADOR</label><br>\n            <img src=\"{{mostrarJugador}}\" alt=\"\">\n        </div>\n        <div class=\"col-2\"></div>\n    </div >\n    <div class=\"row middle-row\">\n        <div class=\"col-12 align-center\">\n            <h5>VS</h5>\n        </div>\n    </div>\n    <div class=\"row middle-row\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8 align-center gameboard\" style=\"background: linear-gradient(rgb(134, 11, 11), rgb(61, 59, 59));\" *ngIf=\"jugando\">\n            <label for=\"\">JAVASCRIPT</label><br>\n            <h1>?</h1>\n        </div>\n        <div class=\"col-8  align-center gameboard\" style=\"background: linear-gradient(rgb(134, 11, 11), rgb(61, 59, 59));\" *ngIf=\"mostrar\">\n                <label for=\"\">JAVASCRIPT</label><br>\n                <img src=\"{{mostrarMaquina}}\" alt=\"\">\n        </div>\n        <div class=\"col-2\"></div>\n    </div>\n</div>\n\n<hr>\n\n<div class=\"container\" *ngIf=\"jugando\">\n        <div class=\"gameboard\" style=\"background-color: lightgray\">\n          <div class=\"row\" >\n            <div class=\"col-4 text-center text-white\" >\n                <label  for=\"\">PIEDRA</label><br>\n                <img (click)=\"verificarJugada(1)\" src='./assets/img/piedra.jpg' class=\"media-object imagenDeMenu\"\n                  alt=\"\" style=\"width: 100px;height:100px\">\n            </div>\n            <div class=\"col-4 text-white text-center\">\n                    <label for=\"\">PAPEL</label><br>\n                <img (click)=\"verificarJugada(2)\" src=\"./assets/img/papel.jpg\" class=\"media-object imagenDeMenu\"\n                  alt=\"\" style=\"width: 100px;height:100px\">\n            </div>\n            <div class=\"col-4 text-white text-center\">\n                    <label  for=\"\">TIJERA</label><br>\n                <img (click)=\"verificarJugada(3)\" src=\"./assets/img/tijera.jpg\"   alt=\"\" style=\"width: 100px;height:100px\">\n            </div>\n            </div>\n            </div>\n            </div>\n            <h1 class=\"align-center success-message margin-bottom \" *ngIf=\"gano\">¡Ganaste!</h1>\n            <h1 class=\"align-center error-message margin-bottom \" *ngIf=\"perdio\">Perdiste</h1>\n            <h1 class=\"align-center margin-bottom \" *ngIf=\"empato\">Empate</h1>\n            <div class=\"container\" *ngIf=nuevo>\n                <div class=\"row\">\n                    <div class=\"col-lg-4\"></div>\n                    <div class=\"col-lg-4\">\n                        <button class=\"btn btn-outline-primary full-width\" (click)=\"nuevoJuego()\">Nueva partida</button>\n                    </div>\n                </div>\n            </div>\n            ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro/registro.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro/registro.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<div class=\"row top-row\">\n\t\t<div class=\"col-12 align-center\">\n\t\t\t<h2>Registrarse</h2>\n\t\t</div>\n\t</div>\n\t<div class=\"row middle-row\">\n\t\t<div class=\"col-2\"></div>\n\t\t<div class=\"col-8 align-center\">\n\t\t\t<input type=\"text\" class=\"form-control full-width align-center\" [(ngModel)]=\"email\" placeholder=\"Email\">\n\t\t</div>\n\t\t<div class=\"col-2\"></div>\n\t</div>\n\t<div class=\"row middle-row\">\n\t\t<div class=\"col-2\"></div>\n\t\t<div class=\"col-8 align-center\">\n\t\t\t<input type=\"password\" class=\"form-control full-width align-center\" [(ngModel)]=\"password\" placeholder=\"Clave\">\n\t\t</div>\n\t\t<div class=\"col-2\"></div>\n\t</div>\n\t<div class=\"row middle-row\">\n\t\t<div class=\"col-2\"></div>\n\t\t<div class=\"col-8 align-center\">\n\t\t\t<input type=\"password\" class=\"form-control full-width align-center\" [(ngModel)]=\"repeatePassword\" placeholder=\"Repita clave\">\n\t\t</div>\n\t\t<div class=\"col-2\"></div>\n\t</div>\n\t<div class=\"row middle-row last-row\">\n\t\t<div class=\"col-2\"></div>\n\t\t<div class=\"col-8 align-center\">\n\t\t\t<button class=\"btn btn-outline-danger bit-right-margin\" routerLink=\"/terms\">Cancelar</button>\n\t\t\t<button class=\"btn btn-outline-success bit-left-margin\" (click)=\"Register()\">Registrarme</button>\n\t\t</div>\n\t\t<div class=\"col-2\"></div>\n\t</div>\n\t<div class=\"row  last-row\">\n\t\t<div class=\"col-2\"></div>\n\t\t<div class=\"col-8 align-center\" [ngClass]=\"{'error-message': isError == true, 'success-message': isError == false}\">\n\t\t\t{{message}}\n\t\t</div>\n\t\t<div class=\"col-2\"></div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro/terminos/terminos.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro/terminos/terminos.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container container-terminos\">\n\t<div class=\"row\">\n\t\t<div class=\"col-3\"></div>\n\t\t<div class=\"col-6\">\n\t\t\t<div class=\"title-terminos\">\n\t\t\t\t<h2>Terminos y condiciones</h2>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-3\"></div>\n\t</div>\n\t<hr>\n\t<div class=\"row\">\n\t\t<div class=\"col-3\"></div>\n\t\t<div class=\"col-6\">\n\t\t\t\t<p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\n\t\t\t\t<p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\n\t\t\t\t<p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\n\t\t</div>\n\t\t<div class=\"col-3\"></div>\n\t</div>\n\t<div class=\"row last-row\">\n\t\t<div class=\"col-3\"></div>\n\t\t<div class=\"col-6\">\n\t\t\t<div class=\"btn-group align-center full-width\">\n\t\t\t\t<button class=\"btn btn-danger\" routerLink=\"/\">No acepto</button>\n\t\t\t\t<button class=\"btn btn-success\" routerLink=\"/register\">Acepto</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-3\"></div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tateti/tateti.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tateti/tateti.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <h1 class=\"align-center\">TA TE TI</h1>\n<div class=\"container\">\n    \n    <div class=\"jumbotron\" style=\"background: #333; color: white\">\n        <h1 class=\"align-center success-message\" *ngIf=\"winner\">¡Ganaste!</h1>\n        <h1 class=\"align-center error-message\" *ngIf=\"loser\">Perdiste</h1>\n        <h1 class=\"align-center text-primary\" *ngIf=\"draw\">Empate</h1>\n        <br>\n        <div *ngIf=\"turnoJugador && !nuevoJuego.juegoTerminado\" class=\"row\">\n            <label class=\"col-12 align-center\">\n                <p><i class=\"fa fa-spinner fa-spin\">\n                    </i> Realice una jugada</p>\n            </label>\n        </div>\n        <div *ngIf=\"enJuego\" class=\"row tablero\">\n            <table class=\"table table-bordered col-sm-10 col-md-6 col-lg-6\">\n                <tbody>\n                    <tr>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(0,0,false)\">\n                            <img src={{this.nuevoJuego.tablero[0][0]}} alt=\"\">\n                        </td>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(0,1,false)\">\n                            <img src={{this.nuevoJuego.tablero[0][1]}} alt=\"\">\n                        </td>\n                        <td (click)=\"this.marcarJugada(0,2,false)\">\n                            <img src={{this.nuevoJuego.tablero[0][2]}} alt=\"\">\n                        </td>\n                    </tr>\n                    <tr id=\"center-row\">\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(1,0,false)\">\n                            <img src={{this.nuevoJuego.tablero[1][0]}} alt=\"\">\n                        </td>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(1,1,false)\">\n                            <img src={{this.nuevoJuego.tablero[1][1]}} alt=\"\">\n                        </td>\n                        <td (click)=\"this.marcarJugada(1,2,false)\">\n                            <img src={{this.nuevoJuego.tablero[1][2]}} alt=\"\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(2,0,false)\">\n                            <img src={{this.nuevoJuego.tablero[2][0]}} alt=\"\">\n                        </td>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(2,1,false)\">\n                            <img src={{this.nuevoJuego.tablero[2][1]}} alt=\"\">\n                        </td>\n                        <td (click)=\"this.marcarJugada(2,2,false)\">\n                            <img src={{this.nuevoJuego.tablero[2][2]}} alt=\"\">\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"row\" *ngIf=\"nuevoJuego.juegoTerminado\">\n          <div class=\"col-lg-4\"></div>\n          <div class=\"col-lg-4\"><button (click)=\"nuevo()\" class=\"btn btn-outline-success full-width\" type=\"button\" id=\"button-nuevo\">\n              Nuevo juego</button></div>\n            \n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Be+Vietnam&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Anton&display=swap');\r\n.btn-menu {\r\n    border-radius: 30rem;\r\n    min-width: 3rem;\r\n    min-height: 3rem;\r\n    border: solid 2px white;\r\n    color: white;\r\n    background-color: rgb(71, 197, 39);\r\n    position: fixed;\r\n    z-index: 333333;\r\n    right: 5%;\r\n    top: 5%;\r\n}\r\n.list-item {\r\n  color: white;\r\n}\r\n.list-item-last {\r\n  border-top:2px solid white;\r\n}\r\n.btn-coolwhite {\r\n  color:white;\r\n  font-size: 1em;\r\n  border-color:white;\r\n  font-family: 'Arial', cursive;\r\n}\r\n.btn-coolwhite:hover {\r\n  color:#343a40;\r\n  background-color:white;\r\n}\r\n.btn-coolgreen {\r\n  color:rgb(71, 197, 39);\r\n  font-size: 1em;\r\n  border-color: rgb(71, 197, 39);\r\n}\r\n.btn-coolgreen:hover {\r\n  color:white;\r\n  background-color:rgb(71, 197, 39);\r\n}\r\n/* --------------- */\r\nbody {\r\n  overflow-x: hidden;\r\n  background-color: #333;\r\n  font-family: 'Be Vietnam', sans-serif;\r\n}\r\n#sidebar-wrapper {\r\n    min-height: 100vh;\r\n    margin-left: -15rem;\r\n    transition: margin .25s ease-out;\r\n   \r\n}\r\n#sidebar-wrapper .sidebar-heading {\r\n  padding: 0.875rem 1.25rem;\r\n  font-size: 1.2rem;\r\n  color: white;\r\n  text-align: center;\r\n  border-bottom: 2px solid white;\r\n}\r\n#sidebar-wrapper .list-group {\r\n  width: 15rem;\r\n  text-align: center;\r\n}\r\n#page-content-wrapper {\r\n  min-width: 100vw;\r\n}\r\n#wrapper.toggled #sidebar-wrapper {\r\n  margin-left: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  #sidebar-wrapper {\r\n    margin-left: 0;\r\n  }\r\n\r\n  #page-content-wrapper {\r\n    min-width: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  #wrapper.toggled #sidebar-wrapper {\r\n    margin-left: -15rem;\r\n  }\r\n\r\n}\r\n@media (max-width: 768px) {\r\n  .btn-menu {\r\n    top: unset;\r\n    bottom: 15%;\r\n    right: 10%;\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFO0FBQzNFLDhFQUE4RTtBQUM5RSx5RUFBeUU7QUFFekU7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0FBQ1g7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DO0FBRUEsb0JBQW9CO0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQ0FBcUM7QUFDdkM7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFJbkIsZ0NBQWdDOztBQUVwQztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CZStWaWV0bmFtJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFudG9uJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmJ0bi1tZW51IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcmVtO1xyXG4gICAgbWluLXdpZHRoOiAzcmVtO1xyXG4gICAgbWluLWhlaWdodDogM3JlbTtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCAxOTcsIDM5KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDMzMzMzMztcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIHRvcDogNSU7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW0ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpc3QtaXRlbS1sYXN0IHtcclxuICBib3JkZXItdG9wOjJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1jb29sd2hpdGUge1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGJvcmRlci1jb2xvcjp3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ0FyaWFsJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmJ0bi1jb29sd2hpdGU6aG92ZXIge1xyXG4gIGNvbG9yOiMzNDNhNDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1jb29sZ3JlZW4ge1xyXG4gIGNvbG9yOnJnYig3MSwgMTk3LCAzOSk7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNzEsIDE5NywgMzkpO1xyXG59XHJcblxyXG4uYnRuLWNvb2xncmVlbjpob3ZlciB7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzEsIDE5NywgMzkpO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmUgVmlldG5hbScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICBcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcclxuICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbiN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYnRuLW1lbnUge1xyXG4gICAgdG9wOiB1bnNldDtcclxuICAgIGJvdHRvbTogMTUlO1xyXG4gICAgcmlnaHQ6IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.status = true;
    }
    toggleMenu() {
        this.status = !this.status;
    }
    Logout() {
        localStorage.clear();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/adivina-el-numero/adivina-el-numero.component */ "./src/app/components/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicios/paises.service */ "./src/app/servicios/paises.service.ts");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
/* harmony import */ var _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicios/archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _components_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/components/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ruteando/ruteando.module */ "./src/app/ruteando/ruteando.module.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
/* harmony import */ var _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/listados/listados.component */ "./src/app/componentes/listados/listados.component.ts");
/* harmony import */ var _components_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/juegos/juegos.component */ "./src/app/components/juegos/juegos.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/components/registro/registro.component.ts");
/* harmony import */ var _components_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/menu-card/menu-card.component */ "./src/app/components/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _components_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/anagrama/anagrama.component */ "./src/app/components/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./componentes/input-jugadores/input-jugadores.component */ "./src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pipes/sexo.pipe */ "./src/app/pipes/sexo.pipe.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_registro_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/registro/terminos/terminos.component */ "./src/app/components/registro/terminos/terminos.component.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _environments_firebase_config__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../environments/firebase-config */ "./src/environments/firebase-config.ts");
/* harmony import */ var _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/player-list/player-list.component */ "./src/app/components/player-list/player-list.component.ts");
/* harmony import */ var _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/tateti/tateti.component */ "./src/app/components/tateti/tateti.component.ts");
/* harmony import */ var _components_ppt_ppt_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/ppt/ppt.component */ "./src/app/components/ppt/ppt.component.ts");
/* harmony import */ var _components_forest_forest_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/forest/forest.component */ "./src/app/components/forest/forest.component.ts");








//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';













// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},
{path: '**' , component: ErrorComponent} ];
*/























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_5__["AdivinaElNumeroComponent"],
            _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_6__["ListadoDeResultadosComponent"],
            _components_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
            _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__["PrincipalComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _components_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__["AgilidadAritmeticaComponent"],
            _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
            _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__["AdivinaMasListadoComponent"],
            _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__["AgilidadMasListadoComponent"],
            _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__["ListadoComponent"],
            _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_23__["ListadosComponent"],
            _components_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_24__["JuegosComponent"],
            _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_25__["RegistroComponent"],
            _components_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_26__["MenuCardComponent"],
            _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_27__["CabeceraComponent"],
            _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_28__["QuienSoyComponent"],
            _components_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_29__["AnagramaComponent"],
            _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_30__["ListadoDePaisesComponent"],
            _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_31__["MapaDeGoogleComponent"],
            _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_21__["JugadoresListadoComponent"],
            _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_33__["InputJugadoresComponent"],
            _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_34__["SexoPipe"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_35__["MainComponent"],
            _components_registro_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_36__["TerminosComponent"],
            _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_40__["PlayerListComponent"],
            _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_41__["TatetiComponent"],
            _components_ppt_ppt_component__WEBPACK_IMPORTED_MODULE_42__["PptComponent"],
            _components_forest_forest_component__WEBPACK_IMPORTED_MODULE_43__["ForestComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__["RuteandoModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_38__["AngularFireModule"].initializeApp(_environments_firebase_config__WEBPACK_IMPORTED_MODULE_39__["firebaseConfig"]),
            _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_32__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
            })
            // NgbModule.forRoot(MiRuteo),
            // importo el ruteo
            // RouterModule.forRoot(MiRuteo)
        ],
        providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_22__["JuegoServiceService"], _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_9__["MiHttpService"], _servicios_paises_service__WEBPACK_IMPORTED_MODULE_10__["PaisesService"], _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__["ArchivosJugadoresService"], _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__["JugadoresService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_37__["AngularFirestore"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/clases/juego-adivina.ts":
/*!*****************************************!*\
  !*** ./src/app/clases/juego-adivina.ts ***!
  \*****************************************/
/*! exports provided: JuegoAdivina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function() { return JuegoAdivina; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


class JuegoAdivina extends _clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(nombre, gano, jugador) {
        super("Adivina el número", gano, jugador);
        this.numeroSecreto = 0;
        this.numeroIngresado = 0;
    }
    verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    }
    generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    }
    retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    }
}


/***/ }),

/***/ "./src/app/clases/juego-agilidad.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-agilidad.ts ***!
  \******************************************/
/*! exports provided: JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


class JuegoAgilidad extends _clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(nombre, gano, jugador) {
        super("Agilidad aritmética", gano, jugador);
        this.operadores = ["+", "-", "*"];
    }
    generarCuenta() {
        this.numeroUno = Math.floor((Math.random() * 20) + 1);
        this.numeroDos = Math.floor((Math.random() * 10) + 1);
        this.operador = this.operadores[Math.floor(Math.random() * this.operadores.length)];
        this.resultado = this.calcularResultado();
    }
    calcularResultado() {
        let retorno;
        switch (this.operador) {
            case "+":
                retorno = this.numeroUno + this.numeroDos;
                break;
            case "-":
                retorno = this.numeroUno - this.numeroDos;
                break;
            case "*":
                retorno = this.numeroUno * this.numeroDos;
                break;
        }
        return retorno;
    }
    verificar() {
        if (this.numeroIngresado == this.resultado)
            this.gano = true;
        else if (this.numeroIngresado == undefined)
            this.gano = false;
        return this.gano;
    }
    resetear() {
        this.numeroIngresado = undefined;
        this.gano = false;
    }
}


/***/ }),

/***/ "./src/app/clases/juego-tateti.ts":
/*!****************************************!*\
  !*** ./src/app/clases/juego-tateti.ts ***!
  \****************************************/
/*! exports provided: JuegoTateti */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoTateti", function() { return JuegoTateti; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


class JuegoTateti extends _clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(nombre, gano, jugador) {
        super("Ta Te Ti", true, jugador);
        this.tablero = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        this.jugadaUsuario = 0;
        this.juegoTerminado = true;
    }
    verificarTresEnLinea(marca) {
        if ( //horizontales
        (this.tablero[0][0] == marca && this.tablero[0][1] == marca && this.tablero[0][2] == marca) ||
            (this.tablero[1][0] == marca && this.tablero[1][1] == marca && this.tablero[1][2] == marca) ||
            (this.tablero[2][0] == marca && this.tablero[2][1] == marca && this.tablero[2][2] == marca) ||
            //verticales
            (this.tablero[0][0] == marca && this.tablero[1][0] == marca && this.tablero[2][0] == marca) ||
            (this.tablero[0][1] == marca && this.tablero[1][1] == marca && this.tablero[2][1] == marca) ||
            (this.tablero[0][2] == marca && this.tablero[1][2] == marca && this.tablero[2][2] == marca) ||
            //diagonales
            (this.tablero[0][0] == marca && this.tablero[1][1] == marca && this.tablero[2][2] == marca) ||
            (this.tablero[0][2] == marca && this.tablero[1][1] == marca && this.tablero[2][0] == marca)) {
            this.juegoTerminado = true;
            if (marca == 'O')
                this.gano = true;
            // this.reset();
        }
        return this.juegoTerminado;
    }
    verificar() {
        if (this.juegoTerminado && this.gano)
            return true;
        else
            return false;
    }
    reset() {
        this.gano = false;
        this.tablero = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        console.info("tablero: ", this.tablero);
    }
}


/***/ }),

/***/ "./src/app/clases/juego.ts":
/*!*********************************!*\
  !*** ./src/app/clases/juego.ts ***!
  \*********************************/
/*! exports provided: Juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Juego {
    constructor(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    retornarAyuda() {
        return "NO hay Ayuda definida";
    }
}


/***/ }),

/***/ "./src/app/classes/helpers/common-helper.ts":
/*!**************************************************!*\
  !*** ./src/app/classes/helpers/common-helper.ts ***!
  \**************************************************/
/*! exports provided: CommonHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonHelper", function() { return CommonHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CommonHelper {
    static ConvertToObject(objectToConvert) {
        let plainObject = JSON.parse(JSON.stringify(objectToConvert));
        return plainObject;
    }
    static NowInString() {
        const now = new Date();
        const date = now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
        const time = now.getHours() + ':' + now.getMinutes();
        return (time + ' ' + date);
    }
    static IsNotEmpty(strToCheck) {
        if (strToCheck != '' && strToCheck != undefined && strToCheck != ' ')
            return true;
        else
            return false;
    }
}


/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtbWFzLWxpc3RhZG8vYWRpdmluYS1tYXMtbGlzdGFkby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdivinaMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaMasListadoComponent", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdivinaMasListadoComponent = class AdivinaMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    }
};
AdivinaMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adivina-mas-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adivina-mas-listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adivina-mas-listado.component.css */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdivinaMasListadoComponent);



/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLW1hcy1saXN0YWRvL2FnaWxpZGFkLW1hcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgilidadMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadMasListadoComponent", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgilidadMasListadoComponent = class AgilidadMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    }
};
AgilidadMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agilidad-mas-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agilidad-mas-listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agilidad-mas-listado.component.css */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AgilidadMasListadoComponent);



/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panel\n{\n    height: 20rem;\n    background-color: #333;\n    position: relative;\n}\n\n\n.hero-text {\ntext-align: center;\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\ncolor: #3E06B0;\n}\n\n\n.hero-text a {  \nborder: none;\noutline: 0;\ndisplay: inline-block;\npadding: 10px 25px;\ncolor: black;\nbackground-color: #ddd;\ntext-align: center;\ncursor: pointer;\n}\n\n\n.hero-text a:hover {\nbackground-color: #555;\ncolor: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixTQUFTO0FBQ1QsZ0NBQWdDO0FBQ2hDLGNBQWM7QUFDZDs7O0FBRUE7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmOzs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jYWJlY2VyYS9jYWJlY2VyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsXG57XG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4uaGVyby10ZXh0IHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDogNTAlO1xubGVmdDogNTAlO1xudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5jb2xvcjogIzNFMDZCMDtcbn1cblxuLmhlcm8tdGV4dCBhIHsgIFxuYm9yZGVyOiBub25lO1xub3V0bGluZTogMDtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbnBhZGRpbmc6IDEwcHggMjVweDtcbmNvbG9yOiBibGFjaztcbmJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZXJvLXRleHQgYTpob3ZlciB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
  \************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CabeceraComponent = class CabeceraComponent {
    constructor() { }
    ngOnInit() {
    }
};
CabeceraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cabecera',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cabecera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cabecera.component.css */ "./src/app/componentes/cabecera/cabecera.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CabeceraComponent);



/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2lucHV0LWp1Z2Fkb3Jlcy9pbnB1dC1qdWdhZG9yZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputJugadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputJugadoresComponent", function() { return InputJugadoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputJugadoresComponent = class InputJugadoresComponent {
    constructor() { }
    ngOnInit() {
    }
};
InputJugadoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-jugadores',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-jugadores.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/input-jugadores/input-jugadores.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-jugadores.component.css */ "./src/app/componentes/input-jugadores/input-jugadores.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InputJugadoresComponent);



/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    margin-top: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 3rem;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.table-players {\r\n    background: linear-gradient(#333, rgb(82, 78, 78), #333)\r\n}\r\n\r\nthead {\r\n    text-align: center;\r\n    border-right: 2px solid white;\r\n    border-left: 2px solid white;\r\n    border-top: 2px solid white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvanVnYWRvcmVzLWxpc3RhZG8vanVnYWRvcmVzLWxpc3RhZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1Z2Fkb3Jlcy1saXN0YWRvL2p1Z2Fkb3Jlcy1saXN0YWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhYmxlLXBsYXllcnMge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzMzMsIHJnYig4MiwgNzgsIDc4KSwgIzMzMylcclxufVxyXG5cclxudGhlYWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.ts ***!
  \******************************************************************************/
/*! exports provided: JugadoresListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresListadoComponent", function() { return JugadoresListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");



let JugadoresListadoComponent = class JugadoresListadoComponent {
    constructor(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
    }
    ngOnInit() {
    }
    TraerTodos() {
        //alert("totos");
        this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
    TraerGanadores() {
        this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
    TraerPerdedores() {
        this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
};
JugadoresListadoComponent.ctorParameters = () => [
    { type: _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"] }
];
JugadoresListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jugadores-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jugadores-listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/jugadores-listado/jugadores-listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jugadores-listado.component.css */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"]])
], JugadoresListadoComponent);



/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcGFpc2VzL2xpc3RhZG8tZGUtcGFpc2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListadoDePaisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDePaisesComponent", function() { return ListadoDePaisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/paises.service */ "./src/app/servicios/paises.service.ts");



let ListadoDePaisesComponent = class ListadoDePaisesComponent {
    constructor(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ngOnInit() {
        this.miServicioDePaises.listar()
            .then(datos => {
            console.info("listado de paises", datos);
            this.listadoDePaises = datos;
        });
    }
};
ListadoDePaisesComponent.ctorParameters = () => [
    { type: _servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__["PaisesService"] }
];
ListadoDePaisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-de-paises',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado-de-paises.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-paises/listado-de-paises.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado-de-paises.component.css */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__["PaisesService"]])
], ListadoDePaisesComponent);



/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    margin-top: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 3rem;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby1kZS1yZXN1bHRhZG9zL2xpc3RhZG8tZGUtcmVzdWx0YWRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9saXN0YWRvLWRlLXJlc3VsdGFkb3MvbGlzdGFkby1kZS1yZXN1bHRhZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListadoDeResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDeResultadosComponent", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListadoDeResultadosComponent = class ListadoDeResultadosComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ver() {
        console.info(this.listado);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-de-resultados',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado-de-resultados.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado-de-resultados.component.css */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListadoDeResultadosComponent);



/***/ }),

/***/ "./src/app/componentes/listado/listado.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Style all font awesome icons */\n.fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n/* Set a specific color for each brand */\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby9saXN0YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSxZQUFZO0FBQ2hCO0FBRUEsd0NBQXdDO0FBRXhDLGFBQWE7QUFDYjtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUEsWUFBWTtBQUNaO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9saXN0YWRvL2xpc3RhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGFsbCBmb250IGF3ZXNvbWUgaWNvbnMgKi9cbi5mYSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBpZiB5b3Ugd2FudCAqL1xuLmZhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi8qIFNldCBhIHNwZWNpZmljIGNvbG9yIGZvciBlYWNoIGJyYW5kICovXG5cbi8qIEZhY2Vib29rICovXG4uZmEtZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUd2l0dGVyICovXG4uZmEtdHdpdHRlciB7XG4gICAgYmFja2dyb3VuZDogIzU1QUNFRTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.ts ***!
  \**********************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");



let ListadoComponent = class ListadoComponent {
    constructor(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ngOnInit() {
    }
    llamaService() {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    }
    llamaServicePromesa() {
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then((listado) => {
            this.listadoParaCompartir = listado;
        });
    }
};
ListadoComponent.ctorParameters = () => [
    { type: _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__["JuegoServiceService"] }
];
ListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado/listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado.component.css */ "./src/app/componentes/listado/listado.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__["JuegoServiceService"]])
], ListadoComponent);



/***/ }),

/***/ "./src/app/componentes/listados/listados.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG9zL2xpc3RhZG9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.ts ***!
  \************************************************************/
/*! exports provided: ListadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosComponent", function() { return ListadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListadosComponent = class ListadosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listados',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listados.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listados/listados.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listados.component.css */ "./src/app/componentes/listados/listados.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListadosComponent);



/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n    height: 300px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWFwYS1kZS1nb29nbGUvbWFwYS1kZS1nb29nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcGEtZGUtZ29vZ2xlL21hcGEtZGUtZ29vZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.ts ***!
  \************************************************************************/
/*! exports provided: MapaDeGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaDeGoogleComponent", function() { return MapaDeGoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapaDeGoogleComponent = class MapaDeGoogleComponent {
    constructor() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    ngOnInit() {
    }
};
MapaDeGoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa-de-google',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapa-de-google.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mapa-de-google/mapa-de-google.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mapa-de-google.component.css */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapaDeGoogleComponent);



/***/ }),

/***/ "./src/app/componentes/menu/menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuComponent = class MenuComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    Juego(tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/componentes/menu/menu.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuComponent);



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagenDeMenu{\nwidth: 80px;\nheight: 70px;\n}\n\n.hero-text {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #100000;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbkRlTWVudXtcbndpZHRoOiA4MHB4O1xuaGVpZ2h0OiA3MHB4O1xufVxuXG4uaGVyby10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBjb2xvcjogIzEwMDAwMDtcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrincipalComponent = class PrincipalComponent {
    constructor() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    ngOnInit() {
    }
};
PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./principal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./principal.component.css */ "./src/app/componentes/principal/principal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PrincipalComponent);



/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagenDeQuienSoy{\n    width: 100%;\n   \n    }\nbody {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n}\np {font-size: 16px;}\n.margin {margin-bottom: 45px;}\n.bg-1 { \n    background-color: #1abc9c; /* Green */\n    color: #ffffff;\n}\n.bg-2 { \n    background-color: #474e5d; /* Dark Blue */\n    color: #ffffff;\n}\n.bg-3 { \n    background-color: #ffffff; /* White */\n    color: #555555;\n}\n.bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n}\n.container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n.navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n}\n.navbar-nav  li a:hover {\n    color: #1abc9c !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7SUFFWDtBQUNKO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0EsR0FBRyxlQUFlLENBQUM7QUFDbkIsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QjtJQUNJLHlCQUF5QixFQUFFLFVBQVU7SUFDckMsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCLEVBQUUsY0FBYztJQUN6QyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QixFQUFFLGVBQWU7SUFDMUMsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3F1aWVuLXNveS9xdWllbi1zb3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW5EZVF1aWVuU295e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgXG4gICAgfVxuYm9keSB7XG4gICAgZm9udDogMjBweCBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgY29sb3I6ICNmNWY2Zjc7XG59XG5wIHtmb250LXNpemU6IDE2cHg7fVxuLm1hcmdpbiB7bWFyZ2luLWJvdHRvbTogNDVweDt9XG4uYmctMSB7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7IC8qIEdyZWVuICovXG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4uYmctMiB7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7IC8qIERhcmsgQmx1ZSAqL1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJnLTMgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSAqL1xuICAgIGNvbG9yOiAjNTU1NTU1O1xufVxuLmJnLTQgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmOyAvKiBCbGFjayBHcmF5ICovXG4gICAgY29sb3I6ICNmZmY7XG59XG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbi5uYXZiYXIge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG4ubmF2YmFyLW5hdiAgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICMxYWJjOWMgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuienSoyComponent = class QuienSoyComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuienSoyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quien-soy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quien-soy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quien-soy.component.css */ "./src/app/componentes/quien-soy/quien-soy.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], QuienSoyComponent);



/***/ }),

/***/ "./src/app/components/adivina-el-numero/adivina-el-numero.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/adivina-el-numero/adivina-el-numero.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nform {\n    border: 5px solid black;\n    border-radius: 3rem;\n    padding: 10px;\n    background:linear-gradient(silver, orange);\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    /*background-color: #4CAF50;*/\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n#snackbar {\n    visibility: hidden;\n    min-width: 250px;\n    margin-left: -125px;\n   \n    color: #fff;\n    text-align: center;\n    border-radius: 2px;\n    padding: 16px;\n    position: fixed;\n    z-index: 1;\n    left: 50%;\n    bottom: 30px;\n    font-size: 17px;\n}\n\n#snackbar.Ganador {\n    background-color: #059F2F;\n}\n\n#snackbar.Perdedor {\n    background-color: #FF0000;\n}\n\n#snackbar.show {\n    visibility: visible;\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n    from {bottom: 0; opacity: 0;} \n    to {bottom: 30px; opacity: 1;}\n}\n\n@keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n}\n\n@-webkit-keyframes fadeout {\n    from {bottom: 30px; opacity: 1;} \n    to {bottom: 0; opacity: 0;}\n}\n\n@keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGl2aW5hLWVsLW51bWVyby9hZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBLG9FQUFvRTs7QUFDcEU7SUFDSTtPQUNHLGNBQWM7T0FDZCxXQUFXO0lBQ2Q7SUFDQTtPQUNHLFdBQVc7SUFDZDtBQUNKOztBQUlBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7O0lBRW5CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixpREFBaUQ7SUFDakQseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksTUFBTSxTQUFTLEVBQUUsVUFBVSxDQUFDO0lBQzVCLElBQUksWUFBWSxFQUFFLFVBQVUsQ0FBQztBQUNqQzs7QUFFQTtJQUNJLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDakM7O0FBRUE7SUFDSSxNQUFNLFlBQVksRUFBRSxVQUFVLENBQUM7SUFDL0IsSUFBSSxTQUFTLEVBQUUsVUFBVSxDQUFDO0FBQzlCOztBQUVBO0lBQ0ksTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRpdmluYS1lbC1udW1lcm8vYWRpdmluYS1lbC1udW1lcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZm9ybSB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHNpbHZlciwgb3JhbmdlKTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xufVxuXG4uY2FuY2VsYnRuIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5hY2VwdGJ0biB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjY0RjQ7XG59XG4uaW1nY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xufVxuXG5pbWcuYXZhdGFyIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuc3Bhbi5wc3cge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIHNwYW4ucHN3IHtcbiAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLmNhbmNlbGJ0biB7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5cblxuI3NuYWNrYmFyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xuICAgXG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IDMwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuI3NuYWNrYmFyLkdhbmFkb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTlGMkY7XG59XG4jc25hY2tiYXIuUGVyZGVkb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XG59XG4jc25hY2tiYXIuc2hvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fSBcbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XG4gICAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fSBcbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cbn1cblxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxuICAgIHRvIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/adivina-el-numero/adivina-el-numero.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/adivina-el-numero/adivina-el-numero.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdivinaElNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");



let AdivinaElNumeroComponent = class AdivinaElNumeroComponent {
    constructor() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    generarnumero() {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    }
    verificar() {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("¡Ganaste!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            let mensaje;
            mensaje = "Este es el intento #" + this.contador;
            this.MostarMensaje(mensaje + " - Hint: " + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    }
    MostarMensaje(mensaje = "este es el mensaje", ganador = false) {
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adivina-el-numero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adivina-el-numero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adivina-el-numero/adivina-el-numero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adivina-el-numero.component.css */ "./src/app/components/adivina-el-numero/adivina-el-numero.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdivinaElNumeroComponent);



/***/ }),

/***/ "./src/app/components/agilidad-aritmetica/agilidad-aritmetica.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/agilidad-aritmetica/agilidad-aritmetica.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".agilidad {\r\n    color: white;\r\n}\r\n\r\nh5 {\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZ2lsaWRhZC1hcml0bWV0aWNhL2FnaWxpZGFkLWFyaXRtZXRpY2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZ2lsaWRhZC1hcml0bWV0aWNhL2FnaWxpZGFkLWFyaXRtZXRpY2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZ2lsaWRhZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/agilidad-aritmetica/agilidad-aritmetica.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AgilidadAritmeticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadAritmeticaComponent", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-agilidad */ "./src/app/clases/juego-agilidad.ts");



let AgilidadAritmeticaComponent = class AgilidadAritmeticaComponent {
    constructor() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.enJuego = false;
        this.perdio = false;
        this.gano = false;
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__["JuegoAgilidad"]();
        console.info("Inicio agilidad");
    }
    ngOnInit() {
    }
    NuevoJuego() {
        this.nuevoJuego.resetear();
        this.enJuego = true;
        this.gano = false;
        this.perdio = false;
        this.nuevoJuego.generarCuenta();
        this.ocultarVerificar = false;
        this.repetidor = setInterval(() => {
            this.Tiempo--;
            console.log("llego", this.Tiempo);
            if (this.Tiempo == 0) {
                clearInterval(this.repetidor);
                this.verificar();
                this.ocultarVerificar = true;
                this.Tiempo = 5;
            }
        }, 900);
    }
    verificar() {
        this.ocultarVerificar = true;
        clearInterval(this.repetidor);
        this.Tiempo = 5;
        if (this.nuevoJuego.verificar()) {
            this.gano = true;
        }
        else {
            this.perdio = true;
        }
        this.enJuego = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
AgilidadAritmeticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agilidad-aritmetica',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agilidad-aritmetica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/agilidad-aritmetica/agilidad-aritmetica.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agilidad-aritmetica.component.css */ "./src/app/components/agilidad-aritmetica/agilidad-aritmetica.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AgilidadAritmeticaComponent);



/***/ }),

/***/ "./src/app/components/anagrama/anagrama.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/anagrama/anagrama.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-description {\r\n    color: white;\r\n}\r\n\r\n.word {\r\n    color: white;\r\n    font-size: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbmFncmFtYS9hbmFncmFtYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbmFncmFtYS9hbmFncmFtYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWRlc2NyaXB0aW9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndvcmQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/anagrama/anagrama.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/anagrama/anagrama.component.ts ***!
  \***********************************************************/
/*! exports provided: AnagramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagramaComponent", function() { return AnagramaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnagramaComponent = class AnagramaComponent {
    constructor() {
        this.jugando = false;
        this.isLose = false;
        this.diccionario = { 1: "movilidad", 2: "hola", 3: "jugar", 4: "facultad",
            5: "universidad", 6: "torpeza", 7: "aburrido", 8: "trabajo", 9: "dormir", 10: "comer", 11: "despertar", 12: "chau", 13: "pagar", 14: "nadar",
            15: "cargar", 16: "guardar", 17: "destruir", 18: "romper", 19: "arreglar", 20: "trabar" };
    }
    NuevoJuego() {
        this.palabraIngresada = "";
        this.isWin = false;
        this.isLose = false;
        this.jugando = true;
        this.indice = Math.floor((Math.random() * 20) + 1);
        this.palabra = this.diccionario[this.indice];
        this.palabraOculta = this.palabra;
        let array = this.palabra.split("");
        array.sort();
        this.palabra = array.join("");
        this.palabraOculta.toLowerCase();
        console.log(this.palabraOculta);
    }
    Verificar() {
        if (this.palabraIngresada != undefined) {
            this.palabraIngresada = this.palabraIngresada.toLowerCase();
        }
        if (this.palabraIngresada == this.palabraOculta) {
            this.jugando = false;
            this.isWin = true;
            this.isLose = false;
        }
        else {
            this.jugando = false;
            this.isLose = true;
            this.isWin = false;
        }
    }
};
AnagramaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anagrama',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./anagrama.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/anagrama/anagrama.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./anagrama.component.css */ "./src/app/components/anagrama/anagrama.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AnagramaComponent);



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    color: white;\r\n    font-family: 'Lobster', cursive;\r\n    text-align: center;\r\n    font-size: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");



let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ErrorComponent);



/***/ }),

/***/ "./src/app/components/forest/forest.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/forest/forest.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-screen {\r\n    height: 400px;\r\n    \r\n    background-size: cover;\r\n    color: white;\r\n}\r\n\r\n.screen-center{\r\n    height: 100%;\r\n}\r\n\r\n.mess {\r\n    margin-top: 65%;\r\n}\r\n\r\n.controllers {\r\n    margin-top: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Jlc3QvZm9yZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhOztJQUViLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvcmVzdC9mb3Jlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNjcmVlbiB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2NyZWVuLWNlbnRlcntcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1lc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogNjUlO1xyXG59XHJcblxyXG4uY29udHJvbGxlcnMge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/forest/forest.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/forest/forest.component.ts ***!
  \*******************************************************/
/*! exports provided: ForestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForestComponent", function() { return ForestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForestComponent = class ForestComponent {
    constructor(el) {
        this.el = el;
        this.mensaje = '';
        this.chaseCount = 0;
        this.lost = 'assets/img/forest/lost.jpg';
        this.notras = 'assets/img/forest/notrass.jpeg';
        this.salida = 'assets/img/forest/wayout.jpg';
        this.dead = "'assets/img/forest/dead.jpg'";
        this.black = 'assets/img/forest/black.jpg';
        this.image = this.black;
        this.gameOver = false;
        this.esconderControles = true;
    }
    ngOnInit() {
        this.status = 0;
        this.StartGame();
    }
    StartGame() {
        this.image = this.black;
        this.mensaje = "Te despertás en un bosque y debés buscar la salida.";
        this.gameOver = false;
        setTimeout(() => {
            this.esconderControles = false;
        }, 3000);
        this.chaseCount = 0;
    }
    Move(move) {
        this.lastMove = move;
        let movement = this.Random();
        if (movement > 0 && movement < 60)
            this.StillLost();
        else if (movement > 60 && movement < 91)
            this.Chase();
        else {
            if (this.chaseCount >= 1) {
                this.End();
            }
            else {
                this.StillLost();
            }
        }
    }
    End() {
        this.esconderControles = true;
        this.mensaje = 'Ves un antiguo camino a lo lejos. Comenzás a caminar hacia el y...';
        this.image = this.salida;
        setTimeout(() => {
        }, 3000);
        setTimeout(() => {
            this.image = this.black;
            this.mensaje = 'Logras escapar!';
            this.gameOver = true;
        }, 3000);
    }
    Random() {
        let random = Math.floor((Math.random() * 100) + 1);
        return random;
    }
    StillLost() {
        this.image = this.lost;
        if (this.lastMove == 'derecho')
            this.mensaje = 'Caminás recto y solo ves muchos árboles en la oscuridad.';
        else
            this.mensaje = 'Te movés hacia la ' + this.lastMove + ', caminás recto y solo ves muchos árboles en la oscuridad.';
    }
    Chase() {
        switch (this.chaseCount) {
            case 0:
                this.mensaje = 'Escuchas un ruido atrás tuyo, te das vuelta y solo ves árboles secos.';
                break;
            case 1:
                this.mensaje = 'Volvés a escuchar un ruido, nuevamente girás y no ves nada. Sólo árboles.';
                break;
            case 2:
                this.mensaje = 'Se escucha un ruido grave y pesado detrás tuyo. Volteas y seguís sin encontrar la causa.';
                break;
            default:
                this.esconderControles = true;
                this.mensaje = 'Pisas algo extraño y mirás el suelo. Levantás la cabeza para continuar y...';
                this.image = this.dead;
                setTimeout(() => {
                }, 3000);
                setTimeout(() => {
                    this.image = this.black;
                    this.mensaje = 'Estás muerto.';
                    this.gameOver = true;
                }, 3000);
                break;
        }
        this.chaseCount++;
    }
};
ForestComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ForestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forest/forest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forest.component.css */ "./src/app/components/forest/forest.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ForestComponent);



/***/ }),

/***/ "./src/app/components/juegos/juegos.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/juegos/juegos.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    margin-top: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 3rem;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qdWVnb3MvanVlZ29zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvanVlZ29zL2p1ZWdvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/juegos/juegos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/juegos/juegos.component.ts ***!
  \*******************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase/auth.service */ "./src/app/services/firebase/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let JuegosComponent = class JuegosComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        if (!this.authService.IsAuth())
            this.router.navigate(['/login']);
    }
};
JuegosComponent.ctorParameters = () => [
    { type: _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
JuegosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-juegos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./juegos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/juegos/juegos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./juegos.component.css */ "./src/app/components/juegos/juegos.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], JuegosComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");
/* harmony import */ var _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase/auth.service */ "./src/app/services/firebase/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.email = '';
        this.password = '';
        this.message = '';
        this.isError = true;
    }
    Login() {
        if (_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_3__["CommonHelper"].IsNotEmpty(this.email) && _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_3__["CommonHelper"].IsNotEmpty(this.password)) {
            this.authService.Login(this.email, this.password).then((response) => {
                if (!response) {
                    this.isError = true;
                    this.message = "El email y/o clave es incorrecto.";
                }
                else {
                    this.isError = false;
                    this.message = "¡Bienvenido de vuelta!";
                    response.password = 'Nice try!';
                    localStorage.setItem('userdata', JSON.stringify(response));
                    this.router.navigate(['/']);
                }
            });
        }
        else {
            this.isError = true;
            this.message = "Los campos no pueden estar vacíos.";
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-container {\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.main-title {\r\n    margin-top: 15%;\r\n    margin-bottom: 0.5em;\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
    GoToGithub() {
        window.location.href = "https://github.com/ivan-rojas/";
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainComponent);



/***/ }),

/***/ "./src/app/components/menu-card/menu-card.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/menu-card/menu-card.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#game-anag {\n  background-image: url('anagrama.jpg');\n}\n\n#game-agil {\n  background-image: url('agilidad.jpg');\n}\n\n#game-num {\n  background-image: url('adivinaelnro.jpg');\n}\n\n#game-tate {\n  background-image: url('tateti.png');\n}\n\n#game-ppt {\n  background-image: url('ppt.png');\n}\n\n#game-fore {\n  background-image: url('forest.png');\n}\n\n.game-name {\n  margin-top: 10%;\n}\n\n.game-item-box {\n  min-height: 20vh;\n  background-color: #343a40;\n  border-radius: 2rem;\n  border: solid 2px white;\n  width: 100%;\n  padding: 0;\n  margin: 0 1rem 0 1rem;\n  color: white;\n  text-align: center;\n  background-position: center;\n  background-size: auto;\n}\n\n.card {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    border-radius: 5px; /* 5px rounded corners */\n    max-width: 300px;\n   height: 100%;\n    margin: 10px;\n    padding-bottom: 10px;\n    float: left;\n  background-color: white;\n    text-align: center;\n}\n\n/* Add rounded corners to the top left and the top right corner of the image */\n\nimg {\n    border-radius: 5px 5px 0 0;\n    border-color: rgb(71, 197, 39);\n    width: 200px;\n    height: 200px;\n}\n\n/* Add some padding inside the card container */\n\n.container {\n    padding: 2px 16px;\n}\n\n.button{\n    margin-left: 1px;\n    display: inline-block;\n    width: 90%;\n    padding: 5px 15px;\n    font-size: 24px;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    color: #fff;\n    background-color: #4CAF50;\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0 9px #999;\n\n    border: none;\n    outline: 0;\n \n    padding: 8px;\n    color: white;\n   /* background-color: #000;*/\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n  }\n\n.button:hover {background-color: #3e8e41}\n\n.button:active {\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LWNhcmQvbWVudS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxxQ0FBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSx5Q0FBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxtQ0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxnQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxtQ0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLGdCQUFnQjtHQUNqQixZQUFZO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixXQUFXO0VBQ2IsdUJBQXVCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQSw4RUFBOEU7O0FBQzlFO0lBQ0ksMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFBQywrQ0FBK0M7O0FBQ2hEO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCOztJQUV0QixZQUFZO0lBQ1osVUFBVTs7SUFFVixZQUFZO0lBQ1osWUFBWTtHQUNiLDJCQUEyQjtJQUMxQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7RUFDYjs7QUFFQSxlQUFlLHlCQUF5Qjs7QUFFeEM7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dhbWUtYW5hZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2ltZy9hbmFncmFtYS5qcGcnKTtcbn1cblxuI2dhbWUtYWdpbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2ltZy9hZ2lsaWRhZC5qcGcnKTtcbn1cblxuI2dhbWUtbnVtIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvaW1nL2FkaXZpbmFlbG5yby5qcGcnKTtcbn1cblxuI2dhbWUtdGF0ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2ltZy90YXRldGkucG5nJyk7XG59XG5cbiNnYW1lLXBwdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2ltZy9wcHQucG5nJyk7XG59XG5cbiNnYW1lLWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pbWcvZm9yZXN0LnBuZycpO1xufVxuXG4uZ2FtZS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uZ2FtZS1pdGVtLWJveCB7XG4gIG1pbi1oZWlnaHQ6IDIwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDFyZW0gMCAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIDVweCByb3VuZGVkIGNvcm5lcnMgKi9cbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBBZGQgcm91bmRlZCBjb3JuZXJzIHRvIHRoZSB0b3AgbGVmdCBhbmQgdGhlIHRvcCByaWdodCBjb3JuZXIgb2YgdGhlIGltYWdlICovXG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDcxLCAxOTcsIDM5KTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn0vKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xufVxuXG5cbi5idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCA5cHggIzk5OTtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuIFxuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MX1cbiAgXG4gIC5idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/menu-card/menu-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/menu-card/menu-card.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCardComponent", function() { return MenuCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuCardComponent = class MenuCardComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    Juego(tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    }
};
MenuCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-card/menu-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-card.component.css */ "./src/app/components/menu-card/menu-card.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuCardComponent);



/***/ }),

/***/ "./src/app/components/player-list/player-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/player-list/player-list.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    margin-top: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 3rem;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\ntbody {\r\n    text-align: center;\r\n    border-right: 1px solid silver;\r\n    border-left: 1px solid silver;\r\n    border-bottom: 1px solid silver;\r\n}\r\n\r\n.table-players {\r\n    background: linear-gradient(rgb(26, 51, 30),rgb(119, 165, 126));\r\n    color: white;\r\n}\r\n\r\nthead {\r\n\r\n    text-align: center;\r\n    border-right: 1px solid silver;\r\n    border-left: 1px solid silver;\r\n    border-top: 1px solid silver;\r\n    border-bottom: 1px solid silver;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXItbGlzdC9wbGF5ZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrREFBK0Q7SUFDL0QsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXItbGlzdC9wbGF5ZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRib2R5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHNpbHZlcjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcclxufVxyXG5cclxuLnRhYmxlLXBsYXllcnMge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigyNiwgNTEsIDMwKSxyZ2IoMTE5LCAxNjUsIDEyNikpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50aGVhZCB7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/player-list/player-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/player-list/player-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase/player.service */ "./src/app/services/firebase/player.service.ts");



let PlayerListComponent = class PlayerListComponent {
    constructor(playerService) {
        this.playerService = playerService;
    }
    ngOnInit() {
        this.players = this.playerService.GetAllPlayers();
    }
};
PlayerListComponent.ctorParameters = () => [
    { type: _services_firebase_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] }
];
PlayerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-list/player-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player-list.component.css */ "./src/app/components/player-list/player-list.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
], PlayerListComponent);



/***/ }),

/***/ "./src/app/components/ppt/ppt.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/ppt/ppt.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\r\n    background: linear-gradient(white, silver)\r\n}\r\n\r\nh5 {\r\n    color: white;\r\n}\r\n\r\n.gameboard {\r\n    color: white;\r\n    background: linear-gradient(rgb(11, 134, 11), rgb(61, 59, 59));\r\n    border: 2px white solid;\r\n    border-radius: 3rem;\r\n    \r\n}\r\n\r\nimg {\r\n    width: 100px;\r\n    height:  100px;\r\n    margin-bottom: 1em;\r\n    border: 2px solid black;\r\n    border-radius: 5rem;\r\n}\r\n\r\n.margin-bottom {\r\n    margin-bottom: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcHQvcHB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4REFBOEQ7SUFDOUQsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcHQvcHB0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgc2lsdmVyKVxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigxMSwgMTM0LCAxMSksIHJnYig2MSwgNTksIDU5KSk7XHJcbiAgICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgICBcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogIDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/ppt/ppt.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/ppt/ppt.component.ts ***!
  \*************************************************/
/*! exports provided: PptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PptComponent", function() { return PptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PptComponent = class PptComponent {
    constructor() {
        this.jugando = true;
        this.mostrar = false;
        this.jugadaMaquina = 1;
        this.jugadasPosibles = [1, 2, 3];
        this.jugadaUsuario = 1;
        this.resultado = -2;
        this.gano = false;
        this.perdio = false;
        this.empato = false;
        this.nuevo = false;
    }
    ngOnInit() {
    }
    JugarMaquina() {
        this.jugadaMaquina = this.jugadasPosibles[Math.floor(Math.random() * this.jugadasPosibles.length)];
    }
    verificarJugada(a) {
        this.jugadaUsuario = a;
        this.JugarMaquina();
        this.jugando = false;
        this.mostrar = true;
        this.nuevo = true;
        switch (this.jugadaUsuario) {
            case 1: // PIEDRA
                if (this.jugadaMaquina == 1) {
                    this.resultado = 0; // empate
                }
                else {
                    if (this.jugadaMaquina == 2) {
                        this.resultado = -1; // usr pierde
                    }
                    else {
                        this.resultado = 1; // usr gana
                    }
                }
                break;
            case 2: // PAPEL
                if (this.jugadaMaquina == 1) {
                    this.resultado = 1; // usr gana
                }
                else {
                    if (this.jugadaMaquina == 2) {
                        this.resultado = 0; // empate
                    }
                    else {
                        this.resultado = -1; // usr pierde
                    }
                }
                break;
            case 3: // TIJERA
                if (this.jugadaMaquina == 1) {
                    this.resultado = -1; // usr pierde
                }
                else {
                    if (this.jugadaMaquina == 2) {
                        this.resultado = 1; // usr gana
                    }
                    else {
                        this.resultado = 0; // empate
                    }
                }
                break;
        }
        this.verificar();
    }
    verificar() {
        this.jugando = false;
        this.mostrar = true;
        this.mostrarMaquina = this.ver(this.jugadaMaquina);
        this.mostrarJugador = this.ver(this.jugadaUsuario);
        if (this.resultado == 1) {
            this.gano = true;
        }
        else {
            if (this.resultado == 0) {
                this.empato = true;
            }
            else {
                this.perdio = true;
            }
        }
    }
    ver(jugada) {
        switch (jugada) {
            case 1:
                return './assets/img/piedra.jpg';
                break;
            case 2:
                return './assets/img/papel.jpg';
                break;
            case 3:
                return './assets/img/tijera.jpg';
                break;
        }
    }
    nuevoJuego() {
        this.nuevo = false;
        this.gano = false;
        this.perdio = false;
        this.empato = false;
        this.jugando = true;
        this.mostrar = false;
        this.jugadaMaquina = 0;
        this.jugadaUsuario = 0;
    }
};
PptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ppt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ppt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ppt/ppt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ppt.component.css */ "./src/app/components/ppt/ppt.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PptComponent);



/***/ }),

/***/ "./src/app/components/registro/registro.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/registro/registro.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/registro/registro.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/registro/registro.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase/auth.service */ "./src/app/services/firebase/auth.service.ts");
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/player */ "./src/app/models/player.ts");
/* harmony import */ var _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");





let RegistroComponent = class RegistroComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.email = '';
        this.password = '';
        this.repeatePassword = '';
        this.message = '';
        this.isError = true;
    }
    Register() {
        if (_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].IsNotEmpty(this.email) && _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].IsNotEmpty(this.password) && _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].IsNotEmpty(this.repeatePassword)) {
            if (this.ComparePasswords()) {
                this.isError = false;
                this.message = "Te has registrado con éxito!";
                let player = new _models_player__WEBPACK_IMPORTED_MODULE_3__["Player"](this.email, this.password);
                this.authService.Register(player);
            }
            else {
                this.isError = true;
                this.message = "Las claves no coinciden.";
            }
        }
        else {
            this.isError = true;
            this.message = "Los campos no pueden estar vacíos.";
        }
    }
    ComparePasswords() {
        if (this.password === this.repeatePassword)
            return true;
        else
            return false;
    }
};
RegistroComponent.ctorParameters = () => [
    { type: _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro/registro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registro.component.css */ "./src/app/components/registro/registro.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], RegistroComponent);



/***/ }),

/***/ "./src/app/components/registro/terminos/terminos.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/registro/terminos/terminos.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.container-terminos {\r\n    color: whitesmoke;\r\n}\r\n\r\n.title-terminos {\r\n    margin-top: 3rem;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Ryby90ZXJtaW5vcy90ZXJtaW5vcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJvL3Rlcm1pbm9zL3Rlcm1pbm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lci10ZXJtaW5vcyB7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnRpdGxlLXRlcm1pbm9zIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/registro/terminos/terminos.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/registro/terminos/terminos.component.ts ***!
  \********************************************************************/
/*! exports provided: TerminosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosComponent", function() { return TerminosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TerminosComponent = class TerminosComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
TerminosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terminos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./terminos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro/terminos/terminos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./terminos.component.css */ "./src/app/components/registro/terminos/terminos.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TerminosComponent);



/***/ }),

/***/ "./src/app/components/tateti/tateti.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/tateti/tateti.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width: 70%;\r\n    position: relative;\r\n    top: 16px;\r\n}\r\n\r\n.tablero{\r\n   \r\n    justify-content: center;\r\n}\r\n\r\ntable{\r\n    background: white;\r\n}\r\n\r\ntd {\r\n    text-align: center;\r\n    height: 150px;\r\n    width: 150px;\r\n}\r\n\r\n#center-row{\r\n    border-top: 20px solid #454d55;\r\n    border-bottom: 20px solid #454d55;\r\n}\r\n\r\n.borde-right{\r\n    border-right: 20px solid #454d55;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXRldGkvdGF0ZXRpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXRldGkvdGF0ZXRpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxNnB4O1xyXG59XHJcblxyXG4udGFibGVyb3tcclxuICAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuI2NlbnRlci1yb3d7XHJcbiAgICBib3JkZXItdG9wOiAyMHB4IHNvbGlkICM0NTRkNTU7XHJcbiAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICM0NTRkNTU7XHJcbn1cclxuXHJcbi5ib3JkZS1yaWdodHtcclxuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCAjNDU0ZDU1O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/tateti/tateti.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tateti/tateti.component.ts ***!
  \*******************************************************/
/*! exports provided: TatetiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TatetiComponent", function() { return TatetiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_tateti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-tateti */ "./src/app/clases/juego-tateti.ts");



let TatetiComponent = class TatetiComponent {
    constructor() {
        this.enJuego = false;
        this.turnoJugador = false;
        this.cuentaMarcas = 0;
        this.imgCruz = './assets/img/x.png';
        this.imgCirculo = './assets/img/o.png';
        this.loser = false;
        this.winner = false;
        this.draw = false;
        this.nuevoJuego = new _clases_juego_tateti__WEBPACK_IMPORTED_MODULE_2__["JuegoTateti"]();
    }
    generarJugada() {
        let row = Math.floor(Math.random() * 3);
        let col = Math.floor(Math.random() * 3);
        this.marcarJugada(row, col, true);
        if (this.cuentaMarcas == 10) {
            this.draw = true;
            this.nuevoJuego.juegoTerminado = true;
        }
    }
    marcarJugada(row, column, jugadaGenerada) {
        if (jugadaGenerada) {
            if (this.nuevoJuego.tablero[row][column] != "" && this.cuentaMarcas < 9) {
                this.generarJugada();
            }
            else {
                this.cuentaMarcas++;
                this.nuevoJuego.tablero[row][column] = this.imgCruz;
                this.turnoJugador = true;
                if (this.nuevoJuego.verificarTresEnLinea(this.imgCruz)) {
                    if (!this.nuevoJuego.verificar()) {
                        this.loser = true;
                    }
                }
            }
        }
        else {
            if (this.nuevoJuego.tablero[row][column] == "") {
                this.cuentaMarcas++;
                this.nuevoJuego.tablero[row][column] = this.imgCirculo;
                this.turnoJugador = false;
                if (!this.nuevoJuego.verificarTresEnLinea(this.imgCirculo)) {
                    setTimeout(() => {
                        this.generarJugada();
                    }, 400);
                }
                else {
                    this.winner = true;
                }
            }
        }
    }
    nuevo() {
        this.draw = false;
        this.loser = false;
        this.winner = false;
        this.nuevoJuego.juegoTerminado = false;
        this.nuevoJuego.reset();
        this.enJuego = true;
        this.turnoJugador = true;
        this.cuentaMarcas = 0;
    }
    ngOnInit() {
    }
};
TatetiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tateti',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tateti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tateti/tateti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tateti.component.css */ "./src/app/components/tateti/tateti.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TatetiComponent);



/***/ }),

/***/ "./src/app/models/player.ts":
/*!**********************************!*\
  !*** ./src/app/models/player.ts ***!
  \**********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/models/user.ts");
/* harmony import */ var _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");



class Player extends _user__WEBPACK_IMPORTED_MODULE_1__["User"] {
    constructor(email, password) {
        super(email, password);
        this.wins = 0;
        this.registerDate = _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_2__["CommonHelper"].NowInString();
    }
}


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    get Email() {
        return this.email;
    }
    get Password() {
        return this.password;
    }
    set Email(v) {
        this.email = v;
    }
    set Password(v) {
        this.password = v;
    }
    constructor(email, pass) {
        this.email = email;
        this.password = pass;
    }
}


/***/ }),

/***/ "./src/app/pipes/sexo.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sexo.pipe.ts ***!
  \************************************/
/*! exports provided: SexoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPipe", function() { return SexoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SexoPipe = class SexoPipe {
    transform(value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    }
};
SexoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sexo'
    })
], SexoPipe);



/***/ }),

/***/ "./src/app/ruteando/ruteando.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ruteando/ruteando.module.ts ***!
  \*********************************************/
/*! exports provided: RuteandoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuteandoModule", function() { return RuteandoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/adivina-el-numero/adivina-el-numero.component */ "./src/app/components/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/components/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _components_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/juegos/juegos.component */ "./src/app/components/juegos/juegos.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/registro/registro.component */ "./src/app/components/registro/registro.component.ts");
/* harmony import */ var _components_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/menu-card/menu-card.component */ "./src/app/components/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_registro_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/registro/terminos/terminos.component */ "./src/app/components/registro/terminos/terminos.component.ts");
/* harmony import */ var _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/player-list/player-list.component */ "./src/app/components/player-list/player-list.component.ts");
/* harmony import */ var _components_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/anagrama/anagrama.component */ "./src/app/components/anagrama/anagrama.component.ts");
/* harmony import */ var _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/tateti/tateti.component */ "./src/app/components/tateti/tateti.component.ts");
/* harmony import */ var _components_ppt_ppt_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/ppt/ppt.component */ "./src/app/components/ppt/ppt.component.ts");
/* harmony import */ var _components_forest_forest_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/forest/forest.component */ "./src/app/components/forest/forest.component.ts");


// importo del module principal





















// declaro donde quiero que se dirija
const MiRuteo = [
    { path: 'playerlist', component: _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_18__["PlayerListComponent"] },
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'Mapa', component: _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_15__["MapaDeGoogleComponent"] },
    { path: 'QuienSoy', component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_13__["QuienSoyComponent"] },
    { path: 'register', component: _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__["RegistroComponent"] },
    { path: 'terms', component: _components_registro_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_17__["TerminosComponent"] },
    { path: 'Listado', component: _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_9__["ListadoComponent"] },
    { path: 'Paises', component: _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_14__["ListadoDePaisesComponent"] },
    { path: 'juegos',
        component: _components_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_10__["JuegosComponent"],
        children: [{ path: '', component: _components_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_12__["MenuCardComponent"] },
            { path: 'adivina', component: _components_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__["AdivinaElNumeroComponent"] },
            { path: 'tateti', component: _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_20__["TatetiComponent"] },
            { path: 'anagrama', component: _components_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_19__["AnagramaComponent"] },
            { path: 'ppt', component: _components_ppt_ppt_component__WEBPACK_IMPORTED_MODULE_21__["PptComponent"] },
            { path: 'forest', component: _components_forest_forest_component__WEBPACK_IMPORTED_MODULE_22__["ForestComponent"] },
            { path: 'AdivinaMasListado', component: _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__["AdivinaMasListadoComponent"] },
            { path: 'AgilidadaMasListado', component: _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__["AgilidadMasListadoComponent"] },
            { path: 'agilidad', component: _components_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__["AgilidadAritmeticaComponent"] }]
    },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] },
    { path: 'error', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] }
];
let RuteandoModule = class RuteandoModule {
};
RuteandoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(MiRuteo)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], RuteandoModule);



/***/ }),

/***/ "./src/app/services/firebase/auth.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/firebase/auth.service.ts ***!
  \***************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");




let AuthService = class AuthService {
    constructor(db) {
        this.db = db;
    }
    Register(player) {
        this.db.collection('players').add(_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_3__["CommonHelper"].ConvertToObject(player));
    }
    Login(email, password) {
        let docRef = this.db.collection('players', ref => ref
            .where('email', '==', email)
            .where('password', '==', password));
        return docRef.get().toPromise().then(doc => {
            if (doc.docs[0] != undefined)
                return doc.docs[0].data();
            else
                return undefined;
        });
    }
    IsAuth() {
        if (localStorage.getItem('userdata') != undefined)
            return true;
        else
            return false;
    }
};
AuthService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/firebase/player.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/firebase/player.service.ts ***!
  \*****************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);



let PlayerService = class PlayerService {
    constructor(db) {
        this.db = db;
    }
    GetAllPlayers() {
        return this.db.collection('players').valueChanges();
    }
};
PlayerService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], PlayerService);



/***/ }),

/***/ "./src/app/servicios/archivos-jugadores.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/servicios/archivos-jugadores.service.ts ***!
  \*********************************************************/
/*! exports provided: ArchivosJugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivosJugadoresService", function() { return ArchivosJugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



let ArchivosJugadoresService = class ArchivosJugadoresService {
    constructor(miHttp) {
        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
    }
    traerJugadores(ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(data => {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, err => {
            console.log(err);
        });
    }
};
ArchivosJugadoresService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"] }
];
ArchivosJugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]])
], ArchivosJugadoresService);



/***/ }),

/***/ "./src/app/servicios/juego-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/juego-service.service.ts ***!
  \****************************************************/
/*! exports provided: JuegoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoServiceService", function() { return JuegoServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");




let JuegoServiceService = class JuegoServiceService {
    constructor(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    listar() {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(data => {
            console.log(data);
        })
            .catch(err => {
            console.log(err);
        });
        this.peticion
            .subscribe(data => {
            console.log("En listar");
            console.log(data);
        }, err => {
            console.info("error: ", err);
        });
        let miArray = new Array();
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 1", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Pepe", true));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 3", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 4", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 5", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 6", false));
        return miArray;
    }
    listarPromesa() {
        this.peticion
            .subscribe(data => {
            console.log("En listarPromesa");
            console.log(data);
        }, err => {
            console.log(err);
        });
        let promesa = new Promise((resolve, reject) => {
            let miArray = new Array();
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("PepePromesa", true));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 3", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 4", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 5", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    }
};
JuegoServiceService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_3__["MiHttpService"] }
];
JuegoServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_3__["MiHttpService"]])
], JuegoServiceService);



/***/ }),

/***/ "./src/app/servicios/jugadores.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/jugadores.service.ts ***!
  \************************************************/
/*! exports provided: JugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresService", function() { return JugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");



let JugadoresService = class JugadoresService {
    //peticion:any;
    constructor(miHttp) {
        this.miHttp = miHttp;
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    traertodos(ruta, filtro) {
        return this.miHttp.traerJugadores(ruta).then(data => {
            console.info("jugadores service", data);
            this.filtrado = data;
            let ganador;
            if (filtro == "ganadores") {
                ganador = true;
            }
            else {
                ganador = false;
            }
            this.filtrado = this.filtrado.filter(data => data.gano === ganador || filtro == "todos");
            return this.filtrado;
        })
            .catch(errror => {
            console.log("error");
            return this.filtrado;
        });
    }
};
JugadoresService.ctorParameters = () => [
    { type: _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["ArchivosJugadoresService"] }
];
JugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["ArchivosJugadoresService"]])
], JugadoresService);



/***/ }),

/***/ "./src/app/servicios/mi-http/mi-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/servicios/mi-http/mi-http.service.ts ***!
  \******************************************************/
/*! exports provided: MiHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiHttpService", function() { return MiHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);







let MiHttpService = class MiHttpService {
    constructor(http) {
        this.http = http;
    }
    httpGetP(url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    httpPostP(url, objeto) {
        return this.http
            .get(url)
            .subscribe(data => {
            console.log(data);
            return data;
        });
    }
    httpGetO(url) {
        return this.http.get(url)
            .map((res) => res.json())
            .catch((err) => rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.json().error || 'Server error'));
    }
    extractData(res) {
        return res.json() || {};
    }
    handleError(error) {
        return error;
    }
};
MiHttpService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
MiHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], MiHttpService);



/***/ }),

/***/ "./src/app/servicios/paises.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/paises.service.ts ***!
  \*********************************************/
/*! exports provided: PaisesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesService", function() { return PaisesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



let PaisesService = class PaisesService {
    constructor(miHttp) {
        this.miHttp = miHttp;
    }
    listar() {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(data => {
            console.log(data);
            return data;
        })
            .catch(err => {
            console.log(err);
            return null;
        });
        //return null;
    }
};
PaisesService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"] }
];
PaisesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]])
], PaisesService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false
};


/***/ }),

/***/ "./src/environments/firebase-config.ts":
/*!*********************************************!*\
  !*** ./src/environments/firebase-config.ts ***!
  \*********************************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const firebaseConfig = {
    apiKey: "AIzaSyAtLFmXtVaJtL2WhShwf_RkkZRt6FGm-s0",
    authDomain: "facultad-c5661.firebaseapp.com",
    databaseURL: "https://facultad-c5661.firebaseio.com",
    projectId: "facultad-c5661",
    storageBucket: "facultad-c5661.appspot.com",
    messagingSenderId: "487196701748",
    appId: "1:487196701748:web:8ffe9d38e1584881e94661",
    measurementId: "G-11LR5SC2SY"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Working on\_Repositories\TP-SalaDeJuegos\TP-Sala-de-Juegos-ANGULAR-\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map