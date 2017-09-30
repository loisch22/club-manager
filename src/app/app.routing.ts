import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClubDetailsComponent } from './club-details/club-details.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { AddClubComponent } from './add-club/add-club.component';

const appRoutes: Routes = [
  {  path: '',
    component: HomeComponent
  },
  {
    path:'club-details/:key',
    component: ClubDetailsComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'add-club',
    component: AddClubComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
