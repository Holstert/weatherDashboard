import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  private reDraw: boolean = true;
  dateToDraw = [];

  @Input()
  set dateStart(date) {
    this.lineChartLabels = date;
  }
  @Input()
  set reDrawGraph(value) {
    this.reDraw = value;
  }
  @Input()
  set lineData (data) {
    this.lineChartData = data;
  }
  @Output() addCity = new EventEmitter();

  constructor() { }

  // lineChart
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = this.dateToDraw;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {

  }
  public chartHovered(e:any):void {

  }
}
