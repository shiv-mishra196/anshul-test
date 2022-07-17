import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClassxComponent } from './classx/classx.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'Home', component: HomeComponent },
{ path: 'Classx', component: ClassxComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }