import { Injectable } from '@angular/core';
import localforage from 'localforage';
import { Server } from '../models';

@Injectable()
export class ServerStorage {
  private serverForage = localforage.createInstance({ name: 'serverForage' });

  async getServers(): Promise<Server[]> {
    let list: Server[] = await this.serverForage.getItem('list');
    if (!Array.isArray(list)) {
      list = [];
    }
    return list;
  }

  addServers(server: Server) {
    this.getServers().then((list) => {
      if (!Array.isArray(list)) {
        list = [];
      }
      server.id = list.length;
      this.serverForage.setItem('list', [...list, server]);
    });
  }
}
