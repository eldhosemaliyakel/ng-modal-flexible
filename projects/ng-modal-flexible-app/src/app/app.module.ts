import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgModalFlexibleModule } from 'ng-modal-flexible';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModalFlexibleComponent } from  './components/ng-modal-flexible.component/ng-modal-flexible.component'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NgModalFlexibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgModalFlexibleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
