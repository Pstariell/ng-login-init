import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { DashboardModule } from '../dashboard/dashboard.module'
import {AuthGuardService as AuthGuard} from '../auth-guard.service'

import {RouterModule, Routes, CanActivate} from  '@angular/router'
import {LoginComponent} from  '../login/login.component'
import {DashboardModule} from  '../dashboard/dashboard.module'

const routes : Routes= [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path:'login', component: LoginComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes), DashboardModule],
    exports: [RouterModule],
  })
  export class RoutingModule { }
  
  export const routingComponents = [LoginComponent];
