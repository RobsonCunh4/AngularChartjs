import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadeListarRoutingModule } from './cidade-listar-routing.module';
import { CidadeListarComponent } from './cidade-listar/cidade-listar.component';

import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    CidadeListarComponent
  ],
  imports: [
    CommonModule,
    CidadeListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ]
})
export class CidadeListarModule { }
