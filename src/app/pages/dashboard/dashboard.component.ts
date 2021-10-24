import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ConfigService } from '@config';
import {CompactType, GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';
import { Apollo, gql } from 'apollo-angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor(
    private apollo: Apollo,
    private config: ConfigService
  ){}

  ngOnInit(): void {
    this.apollo.query({
      query: gql `{
        memory {
          available,
          cached
        }
      }`
    }).subscribe((res => {
      console.log(res.data);
    }));
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
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
    ];
  }

  removeItem($event: MouseEvent | TouchEvent, item): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }
}
