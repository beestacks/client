import { Injectable } from '@angular/core';
import localforage from 'localforage';
import { v4 } from 'uuid';
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

  addServer(server: Server) {
    this.getServers().then((list) => {
      if (!Array.isArray(list)) {
        list = [];
      }
      server.id = v4();
      this.serverForage.setItem('list', [...list, server]);
    });
  }

  deleteServer(id: string) {
    this.getServers().then((list) => {
      this.serverForage.setItem('list', list.filter((server) => server.id !== id));
    });
  }
}
