import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];

  constructor(private translate: TranslateService) {}
  async ngOnInit() {
    this.items = [
      {
        label: await this.translate.get('sidebar.dashboard').toPromise(),
        routerLink: '/dashboard'
      },
      {
        label: 'home',
        routerLink: '/home',
      }
    ];
  }
}
