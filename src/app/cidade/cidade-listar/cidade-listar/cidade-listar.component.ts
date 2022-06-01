import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../../cidade.model';
import { CidadeService } from '../../cidade.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-cidade-listar',
  templateUrl: './cidade-listar.component.html',
  styleUrls: ['./cidade-listar.component.css'],
})
export class CidadeListarComponent implements OnInit {
  chart: any;
  cidades!: Observable<Cidade[]>;
  colunasTabela = ['MUN'];
  clickedRows = new Set<Cidade>();
  mychart: any;

  cidadeExemplo: Cidade = {
      MUN: "Abaíra",
      V1: 8316,
      V2: 94.22,
      V3: 0.603,
      V4: 0.577,
      V5: 0.746,
      V6: 0.51,
      V7: 148,
      V8: 14.61,
      V9: 197,
      V10: 625
    };
  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.listarCidades();
    this.chart = document.getElementById('myChart');
    Chart.register(...registerables);
    this.listChart(this.cidadeExemplo);
  }

  listarCidades() {
    this.cidades = this.cidadeService.listar();
  } 

  listChart(cidade: Cidade): void {       
    this.mychart = new Chart(this.chart, {
      type: 'bar',
      data: {
        datasets: [
          {
            data: [cidade.V4],
            label: 'IDHM - RENDA',            
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)'             
            ],
            borderColor: [
              'rgb(255, 99, 132)',           
            ],
          },
          {
            data: [cidade.V5],
            label: 'IDHM - LONGEVIDADE',            
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)'          
            ],
            borderColor: [
              'rgb(255, 159, 64)'           
            ],
          },
          {
            data: [cidade.V6],
            label: 'IDHM - EDUCAÇÃO',            
            backgroundColor: [
              'rgba(255, 205, 86, 0.2)'             
            ],
            borderColor: [
              'rgb(255, 205, 86)'          
            ],
          },
          {
            data: [cidade.V3],
            label: 'IDHM',            
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)'          
            ],
            borderColor: [
              'rgb(75, 192, 192)'        
            ],
          },
        ],
        labels: ['Índice de Desenvolvimento Humano'],
      },
      options: {     
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: {
              borderDash: [1, 2],
              drawBorder: false,
            },
            beginAtZero: true,
          },
          x: {
            grid: {
              drawBorder: false,
            },
          },
        },
      },
    });
  }

  updateChart(cidade: Cidade){
    this.mychart.data.datasets[0].data = [cidade.V4];
    this.mychart.data.datasets[1].data = [cidade.V5];
    this.mychart.data.datasets[2].data = [cidade.V6];
    this.mychart.data.datasets[3].data = [cidade.V3];
    this.mychart.update();
  }
}
