import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HvNavbarComponent } from './components/navbars/hv-navbar/hv-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HvNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
