import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaysComponent } from './days/days.component';
import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  { path: '', component: DaysComponent },
  // {
  //   path: 'days',
  //   component: DaysComponent,
  // },
  // {
  //   path: 'days/:id',
  //   component: TopicsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
