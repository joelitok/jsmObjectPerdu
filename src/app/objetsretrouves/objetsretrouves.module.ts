import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObjetsretrouvesPage } from './objetsretrouves.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetsretrouvesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ObjetsretrouvesPage]
})
export class ObjetsretrouvesPageModule {}
