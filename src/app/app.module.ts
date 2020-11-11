import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarSearchComponent } from './car-search/car-search.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FilterComponent } from './car-search/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarSearchComponent,
    SideBarComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
