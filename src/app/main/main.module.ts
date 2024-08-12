// import { NgModule } from '@angular/core';
// import { LastNewsComponent } from './last-news/last-news.component';
// import { LastPostComponent } from './last-post/last-post.component';
// import { LastProjectProgressComponent } from './last-project-progress/last-project-progress.component';
// import { LatestTasksComponent } from './latest-tasks/latest-tasks.component';
// import { LatestUploadsComponent } from './latest-uploads/latest-uploads.component';
// import { MainComponent } from './main.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { QuickDraftsComponent } from './quick-drafts/quick-drafts.component';
// import { RemindersComponent } from './reminders/reminders.component';
// import { SocialMediaStatsComponent } from './social-media-stats/social-media-stats.component';
// import { TapleComponent } from './taple/taple.component';
// import { TicketsStatisticsComponent } from './tickets-statistics/tickets-statistics.component';
// import { TopSearchItemsComponent } from './top-search-items/top-search-items.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { YearlyTargetsComponent } from './yearly-targets/yearly-targets.component';
// import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared.module';

// @NgModule({
//   declarations: [
//     MainComponent,
//     LastProjectProgressComponent,
//     LastNewsComponent,
//     LastPostComponent,
//     LatestTasksComponent,
//     LatestUploadsComponent,
//     ProjectsComponent,
//     QuickDraftsComponent,
//     RemindersComponent,
//     SocialMediaStatsComponent,
//     TapleComponent,
//     TicketsStatisticsComponent,
//     TopSearchItemsComponent,
//     WelcomeComponent,
//     YearlyTargetsComponent,
//   ],
//   imports: [CommonModule, SharedModule],
// })
// export class MainModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { LastNewsComponent } from './last-news/last-news.component';
import { LastPostComponent } from './last-post/last-post.component';
import { LastProjectProgressComponent } from './last-project-progress/last-project-progress.component';
import { LatestTasksComponent } from './latest-tasks/latest-tasks.component';
import { LatestUploadsComponent } from './latest-uploads/latest-uploads.component';
import { ProjectsComponent } from './projects/projects.component';
import { QuickDraftsComponent } from './quick-drafts/quick-drafts.component';
import { RemindersComponent } from './reminders/reminders.component';
import { SocialMediaStatsComponent } from './social-media-stats/social-media-stats.component';
import { TapleComponent } from './taple/taple.component';
import { TicketsStatisticsComponent } from './tickets-statistics/tickets-statistics.component';
import { TopSearchItemsComponent } from './top-search-items/top-search-items.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { YearlyTargetsComponent } from './yearly-targets/yearly-targets.component';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'last-news', component: LastNewsComponent },
      { path: 'last-post', component: LastPostComponent },
      {
        path: 'last-project-progress',
        component: LastProjectProgressComponent,
      },
      { path: 'latest-tasks', component: LatestTasksComponent },
      { path: 'latest-uploads', component: LatestUploadsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'quick-drafts', component: QuickDraftsComponent },
      { path: 'reminders', component: RemindersComponent },
      { path: 'social-media-stats', component: SocialMediaStatsComponent },
      { path: 'taple', component: TapleComponent },
      { path: 'tickets-statistics', component: TicketsStatisticsComponent },
      { path: 'top-search-items', component: TopSearchItemsComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'yearly-targets', component: YearlyTargetsComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // تعيين مسار افتراضي
    ],
  },
];

@NgModule({
  declarations: [
    MainComponent,
    LastNewsComponent,
    LastPostComponent,
    LastProjectProgressComponent,
    LatestTasksComponent,
    LatestUploadsComponent,
    ProjectsComponent,
    QuickDraftsComponent,
    RemindersComponent,
    SocialMediaStatsComponent,
    TapleComponent,
    TicketsStatisticsComponent,
    TopSearchItemsComponent,
    WelcomeComponent,
    YearlyTargetsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes), // إضافة التوجيه هنا
  ],
})
export class MainModule {}
