import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'apropos', loadChildren: './apropos/apropos.module#AproposPageModule' },
  { path: 'objetsretrouves', loadChildren: './objetsretrouves/objetsretrouves.module#ObjetsretrouvesPageModule' },
  { path: 'objet-perdu', loadChildren: './objet-perdu/objet-perdu.module#ObjetPerduPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
