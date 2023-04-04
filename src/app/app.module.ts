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
import { TextTransformComponent } from './text-transform/text-transform.component';
import { TruncatePipe } from './truncate.pipe';
import { HighlighterDirective } from './highlighter.directive';
import { MultipleEventsComponent } from './multiple-events/multiple-events.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    FirstImageComponent,
    CounterComponent,
    SecondImageComponent,
    MovieCharactersComponent,
    TextTransformComponent,
    TruncatePipe,
    HighlighterDirective,
    MultipleEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
