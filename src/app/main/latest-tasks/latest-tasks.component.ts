import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-tasks',
  templateUrl: './latest-tasks.component.html',
  styleUrls: ['./latest-tasks.component.scss'],
})
export class LatestTasksComponent implements OnInit {
  ngOnInit(): void {}

  tasks = [
    {
      taskName: 'Record One New Video',
      description: 'Record Python Create Exe Project',
      trhow: false,
    },
    {
      taskName: 'Write Article',
      description: 'Write Low Level vs High Level Languages',
      trhow: false,
    },
    {
      taskName: 'Finish Project',
      description: 'Publish Academy Programming Project',
      trhow: false,
    },
    {
      taskName: 'Attend The Meeting',
      description: 'Attend The Project Business Analysis Meeting',
      trhow: false,
    },
    {
      taskName: 'Finish Lesson',
      description: 'Finish Teaching Flex Box',
      trhow: false,
    },
  ];

  // through_line(task: any) {}
  through_line(task: any) {
    const index = this.tasks.indexOf(task);
    task.trhow = !task.trhow; //
    if (index !== -1) {
      setTimeout(() => {
        this.tasks.splice(index, 1);
      }, 2000);
    }
  }
}
