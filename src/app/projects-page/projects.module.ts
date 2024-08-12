import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects-page.component';
import { SharedModule } from './../shared.module';

const routes: Routes = [{ path: '', component: ProjectsPageComponent }];

@NgModule({
  declarations: [ProjectsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes), // إضافة التوجيه هنا
  ],
})
export class ProjectsPageModule {}
