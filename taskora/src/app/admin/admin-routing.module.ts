import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
 {
    path: '',          // Parent path
    component: LayoutComponent, // Layout always visible
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default to dashboard
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./project/project.module').then(m => m.ProjectModule)
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./task/task.module').then(m => m.TaskModule)
      }
    ]
  },
  { path: '**', redirectTo: '' } // fallback
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
