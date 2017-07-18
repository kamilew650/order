import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddComponent } from './add/add.component';

const routes: Routes = [
    {path: 'add', component: AddComponent},
    {path: '', redirectTo: 'add', pathMatch: 'full'}
];

@NgModule ({
imports: [
    RouterModule.forRoot(routes)
] ,
exports: [ RouterModule ]
})

export class AppRoutingModule {}
