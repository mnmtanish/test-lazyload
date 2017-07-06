import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'x', loadChildren: './feature-x/feature-x.module#FeatureXModule' },
  { path: 'a', loadChildren: './feature-a/feature-a.module#FeatureAModule' },
  { path: '**', redirectTo: 'x' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
