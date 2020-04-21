import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargado = true;
  producto: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
  }
  private cargarProductos(){

    this.http.get('https://angular-html-abd4a.firebaseio.com/productos_idx.json')
    .subscribe( (resp: ProductoInterface []) => {

      console.log(resp);
      
      this.cargado = false;

    });

  }

}
