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
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FocusTrapModule } from 'primeng/focustrap';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeTableModule } from 'primeng/treetable';
import { TreeModule } from 'primeng/tree';
import {SliderModule} from 'primeng/slider';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, NavbarComponent, SidebarComponent],
  providers: [],
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
    ButtonModule,
    GridsterModule,
    TableModule,
    ProgressBarModule,
    DropdownModule,
    CalendarModule,
    MultiSelectModule,
    DialogModule,
    ConfirmDialogModule,
    MenubarModule,
    ListboxModule,
    RadioButtonModule,
    PanelModule,
    AccordionModule,
    TabViewModule,
    FocusTrapModule,
    CheckboxModule,
    TreeTableModule,
    TreeModule,
		SliderModule,
		ContextMenuModule,
		ToastModule,
    InputTextModule,
    FormsModule
  ],
})
export class SharedModule {}
