import { Injectable } from '@angular/core';
import localforage from 'localforage';

@Injectable()
export class DashboardState {
  public editMode = false;
  constructor() {}

  edit() {
    this.editMode = true;
  }

  save() {
    this.editMode = false;
  }
}
