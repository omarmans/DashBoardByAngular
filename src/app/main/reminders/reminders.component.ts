import { Component } from '@angular/core';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss'],
})
export class RemindersComponent {
  reminders = [
    {
      text: 'Check My Tasks List',
      date: '28/09/2022 - 12:00am',
      color: 'blue',
    },
    {
      text: 'Check My Projects',
      date: '26/10/2022 - 12:00am',
      color: 'green',
    },
    {
      text: 'Call All My Clients',
      date: '05/11/2022 - 12:00am',
      color: 'orange',
    },
    {
      text: 'Finish The Development Workshop',
      date: '20/12/2022 - 12:00am',
      color: 'red',
    },
  ];
}
