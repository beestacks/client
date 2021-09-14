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
  ngOnInit() {
    this.items = [
      {
        label: this.translate.instant('sidebar.dashboard'),
        routerLink: '/dashboard'
      },
      {
        label: 'home',
        routerLink: '/home',
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars',
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace',
                  },
                ],
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              },
            ],
          },
        ],
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ],
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [{ label: 'Delete', icon: 'pi pi-fw pi-minus' }],
          },
        ],
      },
    ];
  }
}
