import { Injectable } from '@angular/core';
import { defaultTheme, Theme, themeList } from '@interfaces';
import localforage from 'localforage';

/**
 * 用户设置
 */
const config = localforage.createInstance({name: 'config'});

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

  /**
   * 获取当前主题，如果未获取到或者有误，则返回默认主题
   *
   * @returns theme
   */
  async getTheme(): Promise<Theme> {
    const theme = await config.getItem('theme');
    if (themeList.includes(theme as Theme)) {
      return theme as Theme;
    }
    // 如果主题有误，则重置未默认主题并返回
    this.setTheme(defaultTheme);
    return defaultTheme;
  }

  setTheme(theme: Theme) {
    if (themeList.includes(theme)) {
      config.setItem('theme', theme);
    } else {
      config.setItem('theme', defaultTheme);
    }
  }
}
