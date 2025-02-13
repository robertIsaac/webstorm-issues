import { Component } from '@angular/core';
import {NgxEchartsDirective} from 'ngx-echarts';
import {EChartsOption} from 'echarts';

@Component({
  selector: 'app-root',
  imports: [NgxEchartsDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly chartOptions: EChartsOption = {};
}
