import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.sass']
})
export class HighchartsComponent implements OnInit {
  public options: any = {
      chart: {
        type: 'scatter',
        height: 700
      },
      title: {
        text: 'Sample Scatter Plot'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        formatter: function() {
          return 'tooltip'
        }
      },
      xAxis: {
        type: 'datetime',
        labels: {
          formatter: function() {
            return Highcharts.dateFormat('%e %b %y', 1);
          }
        }
      },
      series: [
        {
          name: 'Normal',
          turboThreshold: 500000,
          data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
        },
        {
          name: 'Abnormal',
          turboThreshold: 500000,
          data: [[new Date('2018-02-05 18:38:31').getTime(), 7]]
        }
      ]
  }
  constructor() { }

  ngOnInit() {
    Highcharts.chart('highcharts', this.options);
  }

}
