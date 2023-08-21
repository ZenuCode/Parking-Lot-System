import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { EntranceComponent } from './entrance/entrance.component';
import { ExitComponent } from './exit/exit.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    ParkingLotComponent,
    EntranceComponent,
    ExitComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
