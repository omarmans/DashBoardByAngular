import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media-stats',
  templateUrl: './social-media-stats.component.html',
  styleUrls: ['./social-media-stats.component.scss'],
})
export class SocialMediaStatsComponent {
  socialMediaStats = [
    {
      platform: 'Twitter',
      followers: '90K Followers',
      color: '#1da1f2',
      backgroundColor: 'rgb(29 161 242 / 20%)',
      linkText: 'Follow',
      iconClass: 'fa-brands fa-twitter',
    },
    {
      platform: 'Facebook',
      followers: '2M Likes',
      color: '#1877f2',
      backgroundColor: 'rgb(24 119 242 / 20%)',
      linkText: 'Like',
      iconClass: 'fa-brands fa-facebook-f',
    },
    {
      platform: 'YouTube',
      followers: '1M Subs',
      color: '#ff0000',
      backgroundColor: 'rgb(255 0 0 / 20%)',
      linkText: 'Subscribe',
      iconClass: 'fa-brands fa-youtube',
    },
    {
      platform: 'LinkedIn',
      followers: '70K Followers',
      color: '#0077b5',
      backgroundColor: 'rgb(0 119 181 / 20%)',
      linkText: 'Follow',
      iconClass: 'fa-brands fa-linkedin',
    },
  ];
}
