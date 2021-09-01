import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ComplaintsListComponent } from './components/product/complaints-list/complaints-list.component';
import { EngineersListComponent } from './components/product/engineers-list/engineers-list.component';
import { UpdateWarrentyComponent } from './components/product/update-warrenty/update-warrenty.component';


const routes: Routes = [
  { path: 'update', component: UpdateWarrentyComponent },
  {path:'home',component:HomeComponent},
  {path:'engineer',component:EngineersListComponent},
  {path:'complaint',component:ComplaintsListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
