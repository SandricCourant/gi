import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstImageComponent } from './first-image/first-image.component';
import { MovieCharactersComponent } from './movie-characters/movie-characters.component';

const routes: Routes = [
  {path: "movie-characters", component: MovieCharactersComponent},
  {path: "first-image", component: FirstImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
