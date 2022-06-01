import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadeListarComponent } from './cidade-listar/cidade-listar.component';

const routes: Routes = [
  {path: "", component: CidadeListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidadeListarRoutingModule { }
