import { Injectable } from '@angular/core';
import { defaultTheme, Theme, themeList } from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() {}

  get hosts(): string[] {
    const list = JSON.parse(localStorage.getItem('hosts'));
    if (Array.isArray(list)) {
      return Array.from(new Set(list));
    }
    return [];
  }

  public addIP(ip: string) {
    const list = this.hosts;
    if (!list.includes(ip)) {
      list.push(ip);
    }
    localStorage.setItem('hosts', JSON.stringify(list));
  }

  get theme(): Theme {
    const theme = localStorage.getItem('theme');
    if (themeList.includes(theme as Theme)) {
      return theme as Theme;
    }
    return defaultTheme;
  }

  changeTheme(theme: Theme) {
    if (themeList.includes(theme)) {
      localStorage.setItem('theme', theme);
    } else {
      localStorage.setItem('theme', defaultTheme);
    }
  }
}
