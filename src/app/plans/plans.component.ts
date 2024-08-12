import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  plans = [
    {
      type: 'Free',
      color: 'green',
      price: '0.00',
      features: [
        { feature: 'Access All Text Lessons', available: true },
        { feature: 'Access All Videos Lessons', available: true },
        { feature: 'Appear On Leaderboard', available: true },
        { feature: 'Browse Content Without Ads', available: false },
        { feature: 'Access All Assignments', available: false },
        { feature: 'Get Daily Prizes', available: false },
        { feature: 'Earn Certificate', available: false },
        { feature: '1 GB Space For Hosting Files', available: false },
        { feature: 'Access Badge System', available: false },
      ],
      linkText: 'Join',
    },
    {
      type: 'Basic',
      color: 'blue',
      price: '7.99',
      features: [
        { feature: 'Access All Text Lessons', available: true },
        { feature: 'Access All Videos Lessons', available: true },
        { feature: 'Appear On Leaderboard', available: true },
        { feature: 'Browse Content Without Ads', available: true },
        { feature: 'Access All Assignments', available: true },
        { feature: 'Get Daily Prizes', available: true },
        { feature: 'Earn Certificate', available: true },
        { feature: '1 GB Space For Hosting Files', available: false },
        { feature: 'Access Badge System', available: false },
      ],
      linkText: 'Join',
    },
    {
      type: 'Premium',
      color: 'orange',
      price: '19.99',
      features: [
        { feature: 'Access All Text Lessons', available: true },
        { feature: 'Access All Videos Lessons', available: true },
        { feature: 'Appear On Leaderboard', available: true },
        { feature: 'Browse Content Without Ads', available: true },
        { feature: 'Access All Assignments', available: true },
        { feature: 'Get Daily Prizes', available: true },
        { feature: 'Earn Certificate', available: true },
        { feature: '1 GB Space For Hosting Files', available: true },
        { feature: 'Access Badge System', available: true },
      ],
      linkText: 'This Is Your Current Plan',
    },
  ];
}
