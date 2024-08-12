import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: CoursesComponent }];
@NgModule({
  declarations: [CoursesComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)], // إضافة التوجيه هنا
})
export class CoursesModule {}
