import { Component, EventEmitter, Output } from '@angular/core';
import { Ticket } from 'src/app/core/interface';
import { SharedService } from 'src/app/core/shared-service';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss'],
})
export class EntranceComponent {
  E1!: boolean;
  E2!: boolean;
  E3!: boolean;
  E4!: boolean;
  E5!: boolean;
  newTicket!: Ticket;
  ticketList: Ticket[] = [];
  currTicketNum = 0;

  constructor(private sharedService: SharedService) {}

  private intervalId: any;

  handleEntrance(entrance: number): void {
    this.newTicket = this.createTicket(entrance);
    this.ticketList.push(this.newTicket);
    this.sharedService.sendInfo(this.newTicket);
    setTimeout(() => {
      this.removeTicket();
    }, 1000);
  }

  removeTicket(): void {
    if (this.ticketList.length >= 17) {
      this.ticketList = [];
    }
  }

  startCheck(): void {
    this.intervalId = setInterval(() => {
      const E1Check = this.pCheck();
      const E2Check = this.pCheck();
      const E3Check = this.pCheck();
      const E4Check = this.pCheck();
      const E5Check = this.pCheck();

      if (E1Check) { this.handleEntrance(1); }
      if (E2Check) { this.handleEntrance(2); }
      if (E3Check) { this.handleEntrance(3); }
      if (E4Check) { this.handleEntrance(4); }
      if (E5Check) { this.handleEntrance(5); }
    }, 1500);
  }

  stopCheck(): void {
    clearInterval(this.intervalId);
  }

  pCheck(): boolean {
    return Math.random() < 0.8;
  }

  createTicket(entance: number): Ticket {
    const license = this.createLicense();
    const carSize = this.getCarSize();
    const exitTime = this.getExitTime();
    const newTicket: Ticket = {
      entrance: entance,
      license: license,
      size: carSize,
      ticketId: this.currTicketNum,
      entryTime: new Date(),
      exitTime: exitTime,
      parkFloor: 0,
      parkSpace: 0,
    };
    this.currTicketNum++;
    return newTicket;
  }

  createLicense(): string {
    let plate = '';
    for (let i = 0; i < 3; i++) {
      const randomNum = Math.floor(Math.random() * 26);
      const asciiValue = randomNum + 65;
      plate += String.fromCharCode(asciiValue);
    }
    for (let i = 0; i < 3; i++) {
      const randomNum = Math.floor(Math.random() * 10);
      plate += randomNum.toString();
    }
    return plate;
  }

  getCarSize(): string {
    const randomNum = Math.floor(Math.random() * 10);
    if (randomNum < 3) {
      return 'Small';
    } else if (randomNum >= 3 && randomNum <= 7) {
      return 'Middle';
    } else {
      return 'Large';
    }
  }

  getExitTime(): Date {
    const currTime = new Date();
    const randomSeconds = Math.floor(Math.random() * 120);
    const exitTime = new Date(currTime);

    const totalSeconds = currTime.getSeconds() + randomSeconds;
    const seconds = totalSeconds % 60;
    const minutes = currTime.getMinutes() + Math.floor(totalSeconds / 60);

    exitTime.setMinutes(minutes);
    exitTime.setSeconds(seconds);

    return exitTime;
  }

  ngOnInit(): void {
    this.startCheck();
  }

  ngOnDestroy(): void {
    this.stopCheck();
  }
}
