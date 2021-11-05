import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { ServerListComponent } from './pages';


@NgModule({
  declarations: [
    ServerListComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class ServersModule { }
