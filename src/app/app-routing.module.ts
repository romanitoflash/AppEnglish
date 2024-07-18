import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'new-home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./new-home/new-home.module').then(m => m.NewHomePageModule)
  },
  {
    path: 'adjetives',
    loadChildren: () => import('./adjetives/adjetives.module').then( m => m.AdjetivesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
