import { Component, OnInit } from '@angular/core';
import { ConfigService, ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items = [
    {
      icon: 'bi-speedometer2',
      name: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'bi-alarm',
      name: 'Alarm',
      route: 'alarm'
    }
  ];
  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private config: ConfigService,
  ) {
    this.translate.setDefaultLang('zh');
    this.translate.use('zh');
    console.log('APP_CONFIG', APP_CONFIG);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }

  ngOnInit() {
    this.config.addIP('http://localhost:3000');
    console.log(this.config.hosts);
  }
}
