import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DestinationsComponent } from './destinations/destinations.component';

@NgModule({
  declarations: [	
    AppComponent,
    LogoComponent,
    TicketsComponent,
      DestinationsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
