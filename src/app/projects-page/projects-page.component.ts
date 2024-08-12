import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  getRandomDate(start: Date, end: Date): string {
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  projectsArray = [
    {
      date: this.getRandomDate(new Date(2020, 0, 1), new Date()),
      title: 'Elzero Dashboard',
      description:
        'Elzero Dashboard Project Design And Programming And Hosting',
      team: [
        'team-01.png',
        'team-02.png',
        'team-03.png',
        'team-04.png',
        'team-05.png',
      ],
      tasks: ['Programming', 'Design', 'Hosting', 'Marketing'],
      progress: {
        width: '50%',
        color: 'red',
      },
      cost: 2500,
    },
    {
      date: this.getRandomDate(new Date(2020, 0, 1), new Date()),
      title: 'Academy Portal',
      description: 'Academy Portal Project Design And Programming',
      team: ['team-01.png', 'team-02.png', 'team-03.png'],
      tasks: ['Programming', 'Design'],
      progress: {
        width: '80%',
        color: 'green',
      },
      cost: 1800,
    },
    {
      date: this.getRandomDate(new Date(2020, 0, 1), new Date()),
      title: 'Chatting Application',
      description: 'Chatting Application Project Design',
      team: ['team-01.png', 'team-02.png', 'team-03.png'],
      tasks: ['Design'],
      progress: {
        width: '100%',
        color: 'blue',
      },
      cost: 950,
    },
    {
      date: this.getRandomDate(new Date(2020, 0, 1), new Date()),
      title: 'Ahmed Dashboard',
      description: 'Ahmed Dashboard Project Design And Programming And Hosting',
      team: ['team-01.png', 'team-02.png', 'team-03.png', 'team-04.png'],
      tasks: ['Programming', 'Design', 'Hosting', 'Marketing'],
      progress: {
        width: '60%',
        color: 'green',
      },
      cost: 1700,
    },
    {
      date: this.getRandomDate(new Date(2020, 0, 1), new Date()),
      title: 'Ahmed Portal',
      description: 'Ahmed Portal Project Design And Programming',
      team: ['team-01.png', 'team-02.png', 'team-03.png'],
      tasks: ['Programming', 'Design'],
      progress: {
        width: '70%',
        color: 'green',
      },
      cost: 850,
    },
    {
      date: this.getRandomDate(new Date(2020, 0, 1), new Date()),
      title: 'Mohamed Application',
      description: 'Mohamed Application Project Design',
      team: ['team-01.png', 'team-02.png', 'team-03.png'],
      tasks: ['Design'],
      progress: {
        width: '40%',
        color: 'red',
      },
      cost: 950,
    },
    {
      date: this.getRandomDate(new Date(2020, 0, 1), new Date()),
      title: 'Mohamed Dashboard',
      description:
        'Mohamed Dashboard Project Design And Programming And Hosting',
      team: ['team-01.png', 'team-02.png', 'team-03.png', 'team-04.png'],
      tasks: ['Programming', 'Design', 'Hosting', 'Marketing'],
      progress: {
        width: '65%',
        color: 'green',
      },
      cost: 1950,
    },
    {
      date: this.getRandomDate(new Date(2020, 0, 1), new Date()),
      title: 'Mohamed Portal',
      description: 'Mohamed Portal Project Design And Programming',
      team: ['team-01.png', 'team-02.png', 'team-03.png'],
      tasks: ['Programming', 'Design'],
      progress: {
        width: '60%',
        color: 'green',
      },
      cost: 1650,
    },
    {
      date: this.getRandomDate(new Date(2020, 0, 1), new Date()),
      title: 'Ahmed Application',
      description: 'Ahmed Application Project Design',
      team: ['team-01.png', 'team-02.png', 'team-03.png'],
      tasks: ['Design'],
      progress: {
        width: '90%',
        color: 'green',
      },
      cost: 950,
    },
  ];
}
