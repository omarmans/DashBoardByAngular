// import { SharedModule } from 'src/share.module';
import { NgModule } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { CommonModule } from '@angular/common';
import { ToggleChecboxComponent } from './toggle-checbox/toggle-checbox.component';

@NgModule({
  declarations: [TitleComponent, ToggleChecboxComponent],
  imports: [CommonModule],
  exports: [TitleComponent, ToggleChecboxComponent],
})
export class SharedModule {}
