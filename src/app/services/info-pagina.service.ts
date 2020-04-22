import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();
  }
   // console.log('Servicio de infoPagina listo');
    private cargarInfo() {
          // Leer el archivo Json
    this.http.get('assets/data/data-paginas.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }
    private cargarEquipo() {
       // Leer el archivo Json
    this.http.get('https://angular-html-abd4a.firebaseio.com/equipo.json')
    .subscribe( (resp: any []) => {
      this.equipo = resp;
     // console.log(resp);
    });
    }
   }
