import { FriendsComponent } from './friends.component';
import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: FriendsComponent }];
@NgModule({
  declarations: [FriendsComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)], // إضافة التوجيه هنا
})
export class FriendsModule {}
