import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Designs/header/header.component';
import { FooterComponent } from './Designs/footer/footer.component';
import { NavComponent } from './Designs/nav/nav.component';
import { HeadingRowComponent } from './Containers/heading-row/heading-row.component';
import { CardsComponent } from './Containers/cards/cards.component';
import { ActionWellComponent } from './Containers/action-well/action-well.component';


//this component need to include in navigation/routing
import { HomeComponent } from './Common/home/home.component';
import { AboutUsComponent } from './Common/about-us/about-us.component';
import { ContactUsComponent } from './Common/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeadingRowComponent,
    CardsComponent,
    ActionWellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
