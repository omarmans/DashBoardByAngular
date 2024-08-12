import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  headers: string[] = [
    'Name',
    'Finish Date',
    'Client',
    'Price',
    'Team',
    'Status',
  ];
  projects = [
    {
      name: 'Ministry Wikipedia',
      finishDate: '10 May 2022',
      client: 'Ministry',
      price: '$5300',
      team: ['team-01.png', 'team-02.png', 'team-03.png', 'team-05.png'],
      status: 'Pending',
      statusColor: 'bg-orange',
    },
    {
      name: 'Elzero Shop',
      finishDate: '12 Oct 2021',
      client: 'Elzero Company',
      price: '$1500',
      team: ['team-01.png', 'team-02.png', 'team-05.png'],
      status: 'In Progress',
      statusColor: 'bg-blue',
    },
    {
      name: 'Bouba App',
      finishDate: '05 Sep 2021',
      client: 'Bouba',
      price: '$800',
      team: ['team-02.png', 'team-03.png'],
      status: 'Completed',
      statusColor: 'bg-green',
    },
    {
      name: 'Mahmoud Website',
      finishDate: '22 May 2021',
      client: 'Mahmoud',
      price: '$600',
      team: ['team-01.png', 'team-02.png'],
      status: 'Completed',
      statusColor: 'bg-green',
    },
    {
      name: 'Sayed Website',
      finishDate: '24 May 2021',
      client: 'Sayed',
      price: '$300',
      team: ['team-01.png', 'team-03.png'],
      status: 'Rejected',
      statusColor: 'bg-red',
    },
    {
      name: 'Arena Application',
      finishDate: '01 Mar 2021',
      client: 'Arena Company',
      price: '$2600',
      team: ['team-01.png', 'team-02.png', 'team-03.png'],
      status: 'Completed',
      statusColor: 'bg-green',
    },
  ];
}
