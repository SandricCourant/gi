import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { FirstImageComponent } from './first-image/first-image.component';
import { CounterComponent } from './counter/counter.component';
import { SecondImageComponent } from './second-image/second-image.component';
import { MovieCharactersComponent } from './movie-characters/movie-characters.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    FirstImageComponent,
    CounterComponent,
    SecondImageComponent,
    MovieCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
