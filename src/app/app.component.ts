import { Component } from '@angular/core';
import {NgxEchartsDirective} from 'ngx-echarts';
import {EChartsOption} from 'echarts';
import {FooComponent} from './foo/foo.component';

@Component({
  selector: 'app-root',
  imports: [NgxEchartsDirective, FooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly chartOptions: EChartsOption = {};
}
