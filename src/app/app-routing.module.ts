import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingLotComponent } from './shared/parking-lot/parking-lot.component';
import { EntranceComponent } from './shared/entrance/entrance.component';
import { ExitComponent } from './shared/exit/exit.component';
import { UserComponent } from './shared/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'entrance', pathMatch: 'full' },
  { path: "entrance", component: EntranceComponent },
  { path: "parking-lot", component: ParkingLotComponent },
  { path: "exit", component: ExitComponent },
  { path: "user", component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
