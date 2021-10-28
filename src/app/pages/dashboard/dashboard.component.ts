import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '@config';
import { CompactType, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { Apollo, gql } from 'apollo-angular';
import { UIChart } from 'primeng/chart';
import { Queue } from '../../../libs';

const basicData = {
  labels: Array.from(new Array(60).keys()).reverse(),
  datasets: [
    {
      label: 'First Dataset',
      data: [],
      fill: false,
      borderColor: '#42A5F5',
      tension: 0.4,
    },
  ],
};

const basicOptions = {
  plugins: {
    legend: {
      labels: {
        color: '#495057',
      },
    },
  },
  scales: {
    y: {
      type: 'linear',
      grace: '5%',
    },
  },
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart: UIChart;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  memoryUsage;
  queue = new Queue(60);

  constructor(private apollo: Apollo, private config: ConfigService) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            memoryTimeSeries {
              timestamp
              usage
            }
          }
        `,
        pollInterval: 1000,
      })
      .valueChanges.subscribe((res: any) => {
        this.memoryUsage = res.data.memory.usage;
        this.queue.enqueue(this.memoryUsage);
        basicData.datasets[0].data = this.queue.data;
        console.log(basicData.datasets[0].data);

        this.chart.refresh();
      });
    this.config.getTheme().then(console.log);
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      minCols: 5,
      minRows: 5,
      maxCols: 5,
      maxRows: 5,
      pushItems: true,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
    };

    this.dashboard = [
      { cols: 3, rows: 2, y: 0, x: 0, data: basicData, options: basicOptions },
      { cols: 1, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 0 },
    ];
  }

  removeItem($event: MouseEvent | TouchEvent, item): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }
}
