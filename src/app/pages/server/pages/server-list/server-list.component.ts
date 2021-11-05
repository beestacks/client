import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import localforage from 'localforage';
import { Table } from 'primeng/table';
import { Server } from '../../models';

/**
 * 用户设置
 */
const serverForage = localforage.createInstance({ name: 'serverForage' });

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss'],
})
export class ServerListComponent implements OnInit {
  @ViewChild('dt') table: Table;
  customers: any[];

  selectedCustomers: any[];
  selectedanys: any[];

  representatives: any[];

  statuses: any[];

  loading = true;

  activityValues: number[] = [0, 100];

  constructor(private http: HttpClient) {}

  getanysLarge() {
    return this.http
      .get<any>('assets/products-small.json')
      .toPromise()
      .then((res) => res.data);
  }
  ngOnInit() {
    this.getanysLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach((customer) => (customer.date = new Date(customer.date)));
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }
}
