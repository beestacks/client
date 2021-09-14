import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent, NavbarComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, NavbarComponent, SidebarComponent],
  imports: [CommonModule, TranslateModule, FormsModule, MenubarModule, SidebarModule, PanelMenuModule],
  exports: [
    TranslateModule,
    WebviewDirective,
    FormsModule,
    MenubarModule,
    PanelMenuModule,
    SidebarModule,
    NavbarComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
