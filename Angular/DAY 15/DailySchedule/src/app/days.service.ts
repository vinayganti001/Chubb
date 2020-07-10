import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DaysService {
  onlydays = [];
  constructor() {}

  setOnlyDays(newday) {
    console.log('adding' + newday);
    this.onlydays.push(newday);
    console.log(this.onlydays);
  }
  getOnlyDays() {
    console.log('getting days');
    console.log('days' + this.onlydays);
    return this.onlydays;
  }
}
