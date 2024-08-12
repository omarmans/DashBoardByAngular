import { Component } from '@angular/core';

@Component({
  selector: 'app-last-project-progress',
  templateUrl: './last-project-progress.component.html',
  styleUrls: ['./last-project-progress.component.scss'],
})
export class LastProjectProgressComponent {
  steps = [
    { name: 'Got The Project', status: 'done' },
    { name: 'Started The Project', status: 'done' },
    { name: 'The Project About To Finish', status: 'done' },
    { name: 'Test The Project', status: 'current' },
    { name: 'Finish The Project & Get Money', status: '' },
  ];
}
