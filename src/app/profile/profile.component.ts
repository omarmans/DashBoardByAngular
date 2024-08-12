import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  infoArray = [
    {
      category: 'General Information',
      details: [
        { label: 'Full Name', value: 'Omar Mansor' },
        { label: 'Gender', value: 'Male' },
        { label: 'Country', value: 'Egypt' },
      ],
    },
    {
      category: 'Personal Information',
      details: [
        { label: 'Email', value: 'o@nn.sa' },
        { label: 'Phone', value: '019123456789' },
        { label: 'Date Of Birth', value: '11/8/1999' },
      ],
    },
    {
      category: 'Job Information',
      details: [
        { label: 'Title', value: 'Full Stack Developer' },
        { label: 'Programming Language', value: 'Python' },
        { label: 'Years Of Experience', value: '15+' },
      ],
    },
    {
      category: 'Billing Information',
      details: [
        { label: 'Payment Method', value: 'Paypal' },
        { label: 'Email', value: 'email@website.com' },
        { label: 'Subscription', value: 'Monthly' },
      ],
    },
  ];

  skillsArray = [
    ['HTML', 'Pugjs', 'HAML'],
    ['CSS', 'SASS', 'Stylus'],
    ['JavaScript', 'TypeScript'],
    ['Vuejs', 'Reactjs'],
    ['Jest', 'Jasmine'],
    ['PHP', 'Laravel'],
    ['Python', 'Django'],
  ];
  activitiesArray = [
    {
      imgSrc: 'activity-01.png',
      category: 'Store',
      description: 'Bought The Mastering Python Course',
      time: '18:10',
      day: 'Yesterday',
    },
    {
      imgSrc: 'activity-02.png',
      category: 'Academy',
      description: 'Got The PHP Certificate',
      time: '16:05',
      day: 'Yesterday',
    },
    {
      imgSrc: 'activity-03.png',
      category: 'Badges',
      description: 'Unlocked The 10 Skills Badge',
      time: '18:05',
      day: 'Yesterday',
    },
    {
      imgSrc: 'activity-04.png',
      category: 'Store',
      description: 'Bought The Typescript Course',
      time: '12:05',
      day: 'Yesterday',
    },
  ];
}
