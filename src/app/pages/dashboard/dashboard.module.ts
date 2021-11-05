import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardState } from './dashboard-state.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
  ],
  providers: [DashboardState]
})
export class DashboardModule { }
