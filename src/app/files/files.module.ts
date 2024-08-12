import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { FilesComponent } from './files.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
const routes: Routes = [{ path: '', component: FilesComponent }];
@NgModule({
  declarations: [FilesComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class FilesModule {}
