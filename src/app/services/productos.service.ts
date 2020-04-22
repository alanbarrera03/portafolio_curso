import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargado = true;
  producto: ProductoInterface [] = [];
  productoFiltrado: ProductoInterface[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
  }
  private cargarProductos(){

    return new Promise( ( resolve, reject ) => {

      this.http.get('https://angular-html-abd4a.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInterface []) => {
        this.producto = resp;
        this.cargado = false;
        resolve();
      });

    });

  }
    getProduto( id: string ){
     return this.http.get(`https://angular-html-abd4a.firebaseio.com/productos/${ id }.json`);

    }

    buscarProducto( termino: string ){

      if ( this.producto.length === 0 ) {
        // carga productos
        this.cargarProductos().then( () => {

        });
      } else {
        // aplica el filtro
        this.filtrarProductos( termino );

      }

      this.productoFiltrado = this.producto.filter( producto => {
        return true;

      });

      console.log(this.productoFiltrado);

    }

    private filtrarProductos( termino: string ){

/*       console.log(this.producto); */
      this.productoFiltrado = [];

      termino = termino.toLocaleLowerCase();

      this.producto.forEach( prod => {
        const tituloLower = prod.titulo.toLocaleLowerCase();


        if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
          this.productoFiltrado.push( prod );
        }
      });
    }


  }
