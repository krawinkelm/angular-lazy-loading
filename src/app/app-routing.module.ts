import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy-loaded-route',
    loadChildren: () =>
      import('./lazy-loaded/lazy-loaded.module').then(m => m.LazyLoadedModule)
  }
];

// NoPreloading = default
@NgModule({
imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading /*PreloadAllModules*/ })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
