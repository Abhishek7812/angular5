import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksComponent} from './stocks.component';
import {HighlightDirective} from './highlight.directive';
import {StocksService} from './stocks.service';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent, StocksComponent,HighlightDirective, DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule


  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
