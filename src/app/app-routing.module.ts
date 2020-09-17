import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathFindingComponent } from './path-finding/path-finding.component';
import { SortComponent } from './sort/sort.component';

const routes: Routes = [
  { path: '', redirectTo: '/sort', pathMatch: 'full' },
  { path: 'sort', component: SortComponent },
  { path: 'path', component: PathFindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
