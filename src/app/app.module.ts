import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CatComponent } from './components/Cat/cat.component';
import { BearComponent } from './components/Bear/bear.component';
import { HorseComponent } from './components/Horse/horse.component';
import { HomeComponent } from './components/Home/home.component';
import { CustomerComponent } from './components/Customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';

// Always declare a variable with const when you know that the value should not be changed
// sets up routes constant where you define your routes
// the view / routes
const constRoutes: Routes = [
  // ' ' = / , 'cat' = /cat, 'bear' = /bear etc... 
  {path: '', component: HomeComponent},
  {path: 'cat', component: CatComponent},
  {path: 'bear', component: BearComponent},
  {path: 'horse', component: HorseComponent},
  {path: 'customer/:custName', component: CustomerComponent},
  // this '**' = anything else. If so, redirected to '/' (which is homepage), path must match fully. Must be last
  {path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CatComponent, 
    BearComponent,
    HorseComponent,
    HomeComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    //asking Angular to instantiate an instance of the Router class globally
    RouterModule.forRoot(constRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
