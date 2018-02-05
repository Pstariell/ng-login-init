import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ApiService} from './api.service'
import {AuthService} from './auth.service'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule, routingComponents    } from './routing/routing.module'
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthInterceptor } from './auth.Interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, 
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    RoutingModule
  ],
  providers: [AuthService, ApiService, AuthGuardService,
    {provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
