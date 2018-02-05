import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from  '@angular/router'
import { AuthGuardService as AuthGuard } from '../auth-guard.service'

const routes : Routes = [
  {path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [DashboardComponent], 
  exports: [DashboardComponent]
})
export class DashboardModule { }
