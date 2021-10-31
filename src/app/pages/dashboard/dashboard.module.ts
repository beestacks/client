import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
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
