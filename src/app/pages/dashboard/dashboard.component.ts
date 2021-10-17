import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  timePeriods = ['Bronze age','Bronze age','Bronze age', 'Iron age', 'Middle ages', 'Early modern period', 'Long nineteenth century'];

  basicData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.4,
      },
      {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#FFA726',
        tension: 0.4,
      },
    ],
  };

  basicOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#ebedef',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ebedef',
        },
        grid: {
          color: 'rgba(255,255,255,0.2)',
        },
      },
      y: {
        ticks: {
          color: '#ebedef',
        },
        grid: {
          color: 'rgba(255,255,255,0.2)',
        },
      },
    },
  };

  drop(event: any) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
}
