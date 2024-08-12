import { take } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showHeader = false;

  activeLinkIndex: number = 0;
  constructor(private AuthService: AuthService) {}
  ngOnInit(): void {
    this.OnShow();
  }
  log_out() {
    this.AuthService.log_out();
  }
  OnShow() {
    this.AuthService.user.pipe(take(1)).subscribe((user) => {
      //here we can fetch our data from dataBase of forebase
      // console.log(user);
      console.log('Received user:', user);
      console.log('Received user:', !!user);

      this.showHeader = !!user;
    });
  }
  setActiveLink(index: number): void {
    this.activeLinkIndex = index;

    //عمل متغير بياسوي صفر ثم خلي عند الضغط المتغير يساواي لالاندكس وخلا الكلاس ع المتغير عشان اول واحد يكون صفر
  }

  classesArray = [
    {
      i: 'fa-regular fa-chart-bar fa-fw',
      span: 'Main',
      href: 'dashboard',
    },
    {
      i: 'fa-solid fa-gear fa-fw',
      span: 'Settings',
      href: 'settings',
    },
    {
      i: 'fa-regular fa-user fa-fw',
      span: 'Profile',
      href: 'profile',
    },
    {
      i: 'fa-solid fa-diagram-project fa-fw',
      span: 'projects',
      href: 'projects',
    },
    {
      i: 'fa-solid fa-graduation-cap fa-fw',
      span: 'Courses',
      href: 'courses',
    },
    {
      i: 'fa-regular fa-circle-user fa-fw',
      span: 'Friends',
      href: 'friends',
    },
    {
      i: 'fa-regular fa-file fa-fw',
      span: 'Files',
      href: 'files',
    },
    {
      i: 'fa-regular fa-credit-card fa-fw',
      span: 'Plans',
      href: 'plans',
    },
    // {
    //   i: 'fa-solid fa-arrow-right-from-bracket',
    //   span: 'Log-Out',
    //   href: 'auth',
    // },
  ];
}
//take one value then unSub
