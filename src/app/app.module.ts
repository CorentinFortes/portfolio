import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';
import { ImageFondComponent } from './head/image-fond/image-fond.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { TopHeaderComponent } from './top-header/top-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageFondComponent,
    HeadComponent,
    BodyComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
