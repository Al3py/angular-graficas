import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 350, 450, 100, 150 ],
        backgroundColor: [ '#465EE8','#499CF2', '#4CC2DB', '#5BF5D8', '#46E88E' ]
      }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  
  

}
