import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { ItemComponent } from './paginas/item/item.component';
import { AboutComponent } from './paginas/about/about.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';


const routes: Routes = [
      {path: 'home', component: PortafolioComponent},
      {path: 'about', component: AboutComponent},
      {path: 'item/:id', component: ItemComponent},
      {path: 'buscar/:termino', component: BuscarComponent},
      {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
