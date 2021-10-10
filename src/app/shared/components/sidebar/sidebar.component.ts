import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface SidebarItem {
  icon: string;
  name: string;
  route: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() items: SidebarItem[] = [];
  constructor(private router: Router) { }
  get url() {
    return this.router.url.split('/').reverse()[0];
  }
  check() {
    console.log(this.url);

  }
}
