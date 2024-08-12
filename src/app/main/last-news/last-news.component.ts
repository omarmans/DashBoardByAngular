import { Component } from '@angular/core';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.scss'],
})
export class LastNewsComponent {
  latestNews = [
    {
      title: 'Created SASS Section',
      paragraph: 'New SASS Examples & Tutorials',
      duration: '3 Days Ago',
      imgSrc: 'news-01.png',
    },
    {
      title: 'Changed The Design',
      paragraph: 'A Brand New Website Design',
      duration: '5 Days Ago',
      imgSrc: 'news-02.png',
    },
    {
      title: 'Team Increased',
      paragraph: '3 Developers Joined The Team',
      duration: '7 Days Ago',
      imgSrc: 'news-03.png',
    },
    {
      title: 'Added Payment Gateway',
      paragraph: 'Many New Payment Gateways Added',
      duration: '9 Days Ago',
      imgSrc: 'news-04.png',
    },
  ];
}
