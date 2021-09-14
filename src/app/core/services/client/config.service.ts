import { Injectable } from '@angular/core';

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
}
