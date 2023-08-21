import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/core/interface';
import { SharedService } from 'src/app/core/shared-service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss'],
})
export class ExitComponent {
  exitSub: Subscription | undefined;
  ticketList: Ticket[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.exitSub = this.sharedService.removeInfo$.subscribe((ticket) => {
      this.ticketList.push(ticket);
      setTimeout(() => {
        this.removeTicket();
      }, 3000);
    });
  }

  removeTicket(): void {
    if (this.ticketList.length >= 17) {
      this.ticketList = [];
    }
  }

  ngOnDestroy(): void {
    if (this.exitSub) {
      this.exitSub.unsubscribe();
    }
  }
}
