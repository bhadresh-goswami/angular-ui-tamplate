import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './Common/home/home.component';
import { AboutUsComponent } from './Common/about-us/about-us.component';
import { ContactUsComponent } from './Common/contact-us/contact-us.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'contact-us', component:ContactUsComponent },
  { path:'about-us', component:AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
