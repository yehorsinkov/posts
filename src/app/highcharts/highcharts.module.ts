import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsComponent } from './highcharts.component';
import { HighchartsRoutingModule } from './highcharts-routing.module';

@NgModule({
  declarations: [
    HighchartsComponent
  ],
  imports: [
    CommonModule,
    HighchartsRoutingModule,
  ]
})
export class HighchartsModule { }
