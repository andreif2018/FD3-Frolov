import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketsService } from './tickets.service';
import { CashComponent} from "./cash.component";
import {NumwordPipe} from "./numword.pipe";
import {HallComponent} from "./hall.component";
import {HallMappingComponent} from "./hall-mapping.component";

@NgModule({
  declarations: [
    AppComponent, HallComponent, CashComponent, NumwordPipe, HallMappingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
