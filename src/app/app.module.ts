import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SideComponent } from './side/side.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './display/home/home.component';
import { WardComponent } from './display/ward/ward.component';
import { DataSearchComponent } from './display/data-search/data-search.component';
import { ViewDataComponent } from './display/view-data/view-data.component';
import { AboutUsComponent } from './display/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    DisplayComponent,
    HomeComponent,
    WardComponent,
    DataSearchComponent,
    ViewDataComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'ward', component: WardComponent},
      {path: 'dataSearch', component: DataSearchComponent},
      {path: 'viewData', component: ViewDataComponent},
      {path: 'about', component: AboutUsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
