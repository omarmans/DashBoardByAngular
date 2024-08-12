import { Component } from '@angular/core';
interface Project {
  name: string;
  finishDate: string;
  client: string;
  price: string;
  team: string[];
  status: string;
  statusColor: string;
  backgroundColor: string;
}
@Component({
  selector: 'app-taple',
  templateUrl: './taple.component.html',
  styleUrls: ['./taple.component.scss'],
})
export class TapleComponent {
  headers: string[] = [
    'Name',
    'Finish Date',
    'Client',
    'Price',
    'Team',
    'Status',
  ];

  projects: Project[] = [
    {
      name: 'Ministry Wikipedia',
      finishDate: '10 May 2022',
      client: 'Ministry',
      price: '$5300',
      team: ['team-01.png', 'team-02.png', 'team-03.png', 'team-05.png'],
      status: 'Pending',
      statusColor: '#ffa500', // orange color
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
    },
    {
      name: 'Elzero Shop',
      finishDate: '12 Oct 2021',
      client: 'Elzero Company',
      price: '$1500',
      team: ['team-01.png', 'team-02.png', 'team-05.png'],
      status: 'In Progress',
      statusColor: '#0000ff', // blue color
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
    },
    {
      name: 'Bouba App',
      finishDate: '05 Sep 2021',
      client: 'Bouba',
      price: '$800',
      team: ['team-02.png', 'team-03.png'],
      status: 'Completed',
      statusColor: '#008000', // green color
      backgroundColor: 'rgba(0, 128, 0, 0.2)',
    },
    {
      name: 'Mahmoud Website',
      finishDate: '22 May 2021',
      client: 'Mahmoud',
      price: '$600',
      team: ['team-01.png', 'team-02.png'],
      status: 'Completed',
      statusColor: '#008000', // green color
      backgroundColor: 'rgba(0, 128, 0, 0.2)',
    },
    {
      name: 'Sayed Website',
      finishDate: '24 May 2021',
      client: 'Sayed',
      price: '$300',
      team: ['team-01.png', 'team-03.png'],
      status: 'Rejected',
      statusColor: '#ff0000', // red color
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
    },
    {
      name: 'Arena Application',
      finishDate: '01 Mar 2021',
      client: 'Arena Company',
      price: '$2600',
      team: ['team-01.png', 'team-02.png', 'team-03.png', 'team-04.png'],
      status: 'Completed',
      statusColor: '#008000', // green color
      backgroundColor: 'rgba(0, 128, 0, 0.2)',
    },
  ];
}
