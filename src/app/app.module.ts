import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {  HttpClientModule} from "@angular/common/http";
import { FilterPipe } from './pipes/filter.pipe';
import { ViewFullDetailsComponent } from './view-full-details/view-full-details.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    EditComponent,
    AddComponent,
    ViewPageComponent,
    PageNotFoundComponent,
    FilterPipe,
    ViewFullDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
