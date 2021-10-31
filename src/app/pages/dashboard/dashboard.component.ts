import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '@config';
import { CompactType, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { Apollo, gql } from 'apollo-angular';
import { UIChart } from 'primeng/chart';
import { Queue } from '../../../libs';
import { MemoryRes, MemoryTimeSeries } from '../../shared/interfaces/memory';
import { DashboardState } from './dashboard-state.service';

const basicData = {
  labels: [],
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
    x: {
      ticks: {
          display: false
      }
    },
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
  memoryUsage = [];
  labels = [];
  queue = new Queue(60);

  constructor(private apollo: Apollo, private config: ConfigService, private dashboardState: DashboardState) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<MemoryRes>({
        query: gql`
          query GetMemoryTimeSeries($from: Float!, $to: Float!){
            memoryTimeSeries(from: $from, to: $to) {
              timestamp
              usage
            }
          }
        `,
        variables: {
          from: (() => (+new Date() - 6000))(),
          to: (() => (+new Date()))()
        },
        pollInterval: 1000,
      })
      .valueChanges.subscribe((res) => {
        console.log(res.data.memoryTimeSeries);
        this.labels.length = this.memoryUsage.length = 0;
        res.data.memoryTimeSeries.map((data) => {
          this.labels.push(data.timestamp);
          this.memoryUsage.push(data.usage);
        });
        basicData.labels = this.labels;
        basicData.datasets[0].data = this.memoryUsage;
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
        enabled: this.dashboardState.editMode,
      },
      resizable: {
        enabled: this.dashboardState.editMode,
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
