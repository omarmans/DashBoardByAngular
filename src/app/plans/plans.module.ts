import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans.component';
import { SharedModule } from './../shared.module';

const routes: Routes = [{ path: '', component: PlansComponent }];

@NgModule({
  declarations: [PlansComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes), // إضافة التوجيه هنا
  ],
})
export class PlansModule {}
