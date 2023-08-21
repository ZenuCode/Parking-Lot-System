import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ParkingInfo, Ticket } from 'src/app/core/interface';
import { SharedService } from 'src/app/core/shared-service';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.scss'],
})
export class ParkingLotComponent {
  entranceSub: Subscription | undefined;
  parkInfo: ParkingInfo[] = [];
  openInfo: boolean[] = [];

  constructor(private sharedService: SharedService) {}

  makeSpace() {
    for (let i = -1; i < 9; i++) {
      const tempSpace: ParkingInfo = {
        parkFloor: i + 1,
        smallCar: 0,
        middleCar: 0,
        largeCar: 0,
        floorTickets: [],
      };
      this.parkInfo.push(tempSpace);
      this.openInfo.push(false);
    }
  }

  assignParking(ticket: Ticket) {
    let maxAttempts = 10; // Number of attempts to find an available spot
    let attempts = 0;

    while (attempts < maxAttempts) {
      const floor = Math.floor(Math.random() * 10);

      if (ticket.size === 'Small' && this.parkInfo[floor].smallCar < 150) {
        this.parkInfo[floor].smallCar++;
        ticket.parkFloor = floor;
        this.parkInfo[floor].floorTickets?.push(ticket);
        break;
      }

      if (ticket.size === 'Middle' && this.parkInfo[floor].middleCar < 250) {
        this.parkInfo[floor].middleCar++;
        ticket.parkFloor = floor;
        this.parkInfo[floor].floorTickets?.push(ticket);
        break;
      }

      if (ticket.size === 'Large' && this.parkInfo[floor].largeCar < 100) {
        this.parkInfo[floor].largeCar++;
        ticket.parkFloor = floor;
        this.parkInfo[floor].floorTickets?.push(ticket);
        break;
      }
      attempts++;
    }

    if (attempts === maxAttempts) {
      console.log(`No available parking for ticket ${ticket.license} on any floor.`);
    }
  }

  checkExitTime() {
    const currentTime = new Date();
    for (const floorInfo of this.parkInfo) {
      for (const ticket of floorInfo.floorTickets) {
        if (ticket.exitTime <= currentTime) {
          this.removeTicket(floorInfo, ticket);
        }
      }
    }
  }

  removeTicket(floorInfo: ParkingInfo, ticket: Ticket) {
    this.handleExit(ticket);
    if(ticket.size == "Small") {
      this.parkInfo[ticket.parkFloor].smallCar--;
    } else if (ticket.size == "Middle") {
      this.parkInfo[ticket.parkFloor].middleCar--;
    } else if (ticket.size == "Large") {
      this.parkInfo[ticket.parkFloor].largeCar--;
    }

    const ticketIndex = floorInfo.floorTickets.indexOf(ticket);
    if (ticketIndex !== -1) {
      floorInfo.floorTickets.splice(ticketIndex, 1);
    }
  }

  handleExit(ticket: Ticket) {
    this.sharedService.removeInfo(ticket);
  }

  toggle(floorIndex: number) {
    this.openInfo[floorIndex] = true;
  }
  
  close(floorIndex: number) {
    this.openInfo[floorIndex] = false;
  }

  ngOnInit(): void {
    this.makeSpace();
    this.entranceSub = this.sharedService.getInfo$.subscribe((ticket) => {
      this.assignParking(ticket);
    });

    setInterval(() => {
      this.checkExitTime();
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.entranceSub) {
      this.entranceSub.unsubscribe();
    }
  }
}
