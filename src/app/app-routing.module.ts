// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { MainComponent } from './main/main.component';
// import { PlansComponent } from './plans/plans.component';
// import { ProfileComponent } from './profile/profile.component';
// import { ProjectsPageComponent } from './projects-page/projects-page.component';
// import { SettingsComponent } from './settings/settings.component';
// import { CoursesComponent } from './courses/courses.component';
// import { FilesComponent } from './files/files.component';
// import { FriendsComponent } from './friends/friends.component';
// import { AuthComponent } from './auth/auth.component';
// import { AUTH_GUARD } from './auth/auth.gurd.service';

// const routes: Routes = [
//   { path: '', redirectTo: '/auth', pathMatch: 'full' },
//   {
//     path: 'auth',
//     component: AuthComponent,
//     title: 'Authentication',
//     //دي لا
//   },
//   {
//     path: 'dashboard',
//     component: MainComponent,
//     title: 'Main',
//     canActivate: [AUTH_GUARD],
//   },

//   {
//     path: 'settings',
//     component: SettingsComponent,

//     title: 'Settings',
//     canActivate: [AUTH_GUARD],
//   },
//   {
//     path: 'profile',
//     component: ProfileComponent,
//     title: 'Profile',
//     canActivate: [AUTH_GUARD],
//   },
//   {
//     path: 'projects',
//     component: ProjectsPageComponent,
//     title: 'Projects',
//     canActivate: [AUTH_GUARD],
//   },
//   {
//     path: 'courses',
//     component: CoursesComponent,
//     title: 'Courses',
//     canActivate: [AUTH_GUARD],
//   },
//   {
//     path: 'friends',
//     component: FriendsComponent,
//     title: 'Friends',
//     canActivate: [AUTH_GUARD],
//   },
//   {
//     path: 'files',
//     component: FilesComponent,
//     title: 'Files',
//     canActivate: [AUTH_GUARD],
//   },
//   {
//     path: 'plans',
//     component: PlansComponent,
//     title: 'Plans',
//     canActivate: [AUTH_GUARD],
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AUTH_GUARD } from './auth/auth.gurd.service';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    title: 'Authentication',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    title: 'Dashboard',
    canActivate: [AUTH_GUARD],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
    title: 'Settings',
    canActivate: [AUTH_GUARD],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
    title: 'Profile',
    canActivate: [AUTH_GUARD],
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects-page/projects.module').then(
        (m) => m.ProjectsPageModule
      ),
    title: 'Projects',
    canActivate: [AUTH_GUARD],
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
    title: 'Courses',
    canActivate: [AUTH_GUARD],
  },
  {
    path: 'friends',
    loadChildren: () =>
      import('./friends/friends.module').then((m) => m.FriendsModule),
    title: 'Friends',
    canActivate: [AUTH_GUARD],
  },
  {
    path: 'files',
    loadChildren: () =>
      import('./files/files.module').then((m) => m.FilesModule),
    title: 'Files',
    canActivate: [AUTH_GUARD],
  },
  {
    path: 'plans',
    loadChildren: () =>
      import('./plans/plans.module').then((m) => m.PlansModule),
    title: 'Plans',
    canActivate: [AUTH_GUARD],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
