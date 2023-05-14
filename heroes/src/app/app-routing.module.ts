import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './views/heroes/heroes.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
