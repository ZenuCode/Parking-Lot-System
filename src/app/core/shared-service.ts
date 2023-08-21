import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ticket } from './interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private entranceInfo = new Subject<Ticket>();
  getInfo$ = this.entranceInfo.asObservable();

  private exitInfo = new Subject<Ticket>();
  removeInfo$ = this.exitInfo.asObservable();

  sendInfo(ticket: Ticket): void { //Get from entance component
    this.entranceInfo.next(ticket);
  }

  removeInfo(ticket: Ticket) : void {
    this.exitInfo.next(ticket);
  }
}
