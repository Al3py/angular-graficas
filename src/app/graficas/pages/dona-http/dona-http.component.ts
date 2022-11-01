import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  
  // Doughnut
  backgroundColor: string[] = [ '#465EE8','#499CF2', '#4CC2DB', '#5BF5D8', '#46E88E' ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { 
        data: [],
        backgroundColor: this.backgroundColor
      }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {

    //     const labels = Object.keys ( data );
    //     const values = Object.values ( data );

    //     this.doughnutChartData = {
    //       labels,
    //       datasets: [
    //         { data: values, backgroundColor: this.backgroundColor }
    //       ]
    //     }

    //   });

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {
        this.doughnutChartData = {
          labels,
          datasets: [
            { data: values, backgroundColor: this.backgroundColor }
          ]
        }
      }
    );

  }

}
