import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarSearchComponent } from './components/car-search/car-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarSearchComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
