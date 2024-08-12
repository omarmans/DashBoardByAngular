import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/interceptor.service';

// استيراد الوحدات الخاصة
import { MainModule } from './main/main.module';
import { CoursesModule } from './courses/courses.module';
import { PlansModule } from './plans/plans.module';
import { ProfileModule } from './profile/profile.module';

import { SettingsModule } from './settings/settings.module';
import { FriendsModule } from './friends/friends.module';
import { ProjectsPageModule } from './projects-page/projects.module';
import { SharedModule } from './shared.module';
import { FilesModule } from './files/files.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpinnerComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainModule,
    SharedModule,
    CoursesModule,
    PlansModule,
    ProfileModule,
    ProjectsPageModule,
    SettingsModule,
    FriendsModule,
    FilesModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
