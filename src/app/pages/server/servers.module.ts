import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { ServerListComponent } from './pages';
import { ServerStorage } from './services/storage.service';


@NgModule({
  declarations: [
    ServerListComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  providers: [ServerStorage]
})
export class ServersModule { }
