import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstImageComponent } from './first-image/first-image.component';
import { TextTransformComponent } from './text-transform/text-transform.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  {path: 'text-transform', component: TextTransformComponent},
  {path: "button/:id/:name", component: ButtonComponent},
  {path: "first-image", component: FirstImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
