import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent, NavbarComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChartModule } from 'primeng/chart';
import { GridsterModule } from 'angular-gridster2';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, NavbarComponent, SidebarComponent],
  imports: [CommonModule, TranslateModule, FormsModule, MenubarModule, PanelMenuModule],
  exports: [
    TranslateModule,
    WebviewDirective,
    FormsModule,
    MenubarModule,
    PanelMenuModule,
    NavbarComponent,
    SidebarComponent,
    DragDropModule,
    ChartModule,
    GridsterModule
  ],
})
export class SharedModule {}
