import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "cidades", 
    loadChildren: () => import('./cidade/cidade-listar/cidade-listar.module').then(modulo => modulo.CidadeListarModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
