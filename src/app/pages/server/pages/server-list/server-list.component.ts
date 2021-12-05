import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import localforage from 'localforage';
import { Table } from 'primeng/table';
import { Server } from '../../models';
import { ServerStorage } from '../../services/storage.service';
@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss'],
})
export class ServerListComponent implements OnInit {
  servers: Promise<Server[]>;
  selectedCustomers: any[];
  loading = false;
  serverState: Server = {} as Server;

  displayAddSheet = false;
  constructor(
    private http: HttpClient,
    private serverStorage: ServerStorage,
  ) {}

  ngOnInit() {
    this.servers = this.serverStorage.getServers();
  }

  openAddSheet() {
    this.displayAddSheet = true;
  }

  confirmAddSheet() {
    this.serverStorage.addServer(this.serverState);
    this.displayAddSheet = false;
  }

  delete(id: string) {
    this.serverStorage.deleteServer(id);
  }
}
