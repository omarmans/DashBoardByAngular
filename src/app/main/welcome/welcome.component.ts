import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  person = { name: 'Omar', job: 'Developer', Projects: 80, Earned: '$1525' };
}
