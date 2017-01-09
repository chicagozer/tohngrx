import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { EmptyComponent} from './empty.component';
import { DealersComponent } from './dealers.component';
import { DealerDetailComponent } from './dealer-detail.component';
import { LoggedInGuard } from './services/login.service';
const routes: Routes = [
  {
    path: '',
      component: EmptyComponent
  },
  {
    canActivate: [LoggedInGuard],
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    canActivate: [LoggedInGuard],
    path: 'detail/:id',
    component: DealerDetailComponent
  },
  {
    canActivate: [LoggedInGuard],
    path: 'dealers',
    component: DealersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, DealersComponent, DealerDetailComponent];
