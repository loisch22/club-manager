import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClubDetailsComponent } from './club-details/club-details.component';


const appRoutes: Routes = [
  {  path: '',
    component: HomeComponent
  },
  {
    path:'club-details/:key',
    component: ClubDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
