import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdjetivesPage } from './adjetives.page';

const routes: Routes = [
  {
    path: '',
    component: AdjetivesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdjetivesPageRoutingModule {}
