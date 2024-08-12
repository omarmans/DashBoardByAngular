import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  socialIcons = [
    {
      platform: 'Twitter',
      iconClass: 'fa-brands fa-twitter',
    },
    {
      platform: 'Facebook',
      iconClass: 'fa-brands fa-facebook-f',
    },
    {
      platform: 'YouTube',
      iconClass: 'fa-brands fa-youtube',
    },
    {
      platform: 'LinkedIn',
      iconClass: 'fa-brands fa-linkedin',
    },
  ];

  WidgetsArray = [
    'Quick Draft',
    'Yearly Targets',
    'Tickets Statistics',
    'Latest News',
    'Latest Tasks',
    'Top Search Items',
  ];
  frequencyOptions: string[] = ['Daily', 'Weekly', 'Monthly'];
  serversArray = [
    { iconClass: 'fa-solid fa-server', name: 'Megaman' },
    { iconClass: 'fa-solid fa-server', name: 'Zero' },
    { iconClass: 'fa-solid fa-server', name: 'Sigma' },
  ];
}
