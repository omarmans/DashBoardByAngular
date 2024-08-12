import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  coursesArray = [
    {
      cover: '1.jpg',
      instructor: 'team-01.png',
      name: 'Omar Mansor',
      title: 'Mastering Web Design',
      description:
        'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
      users: 950,
      cost: 165,
    },
    {
      cover: '2.jpg',
      instructor: 'team-02.png',
      name: 'John Doe',
      title: 'Data Structure And Algorithms',
      description:
        'Master The Art Of Data Structure And Famous Algorithms Like Sorting, Dividing And Conquering',
      users: 1150,
      cost: 210,
    },
    {
      cover: '3.jpg',
      instructor: 'team-03.png',
      name: 'Jane Smith',
      title: 'Responsive Web Design',
      description:
        'Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints',
      users: 650,
      cost: 90,
    },
    {
      cover: '4.jpg',
      instructor: 'team-04.png',
      name: 'Alice Johnson',
      title: 'Mastering Python',
      description:
        'Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life',
      users: 950,
      cost: 250,
    },
    {
      cover: '5.jpg',
      instructor: 'team-05.png',
      name: 'Michael Brown',
      title: 'PHP Examples',
      description:
        'PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases',
      users: 850,
      cost: 150,
    },
    {
      cover: '6.jpg',
      instructor: 'team-01.png',
      name: 'Chris Green',
      title: 'Advanced JavaScript',
      description:
        'Deep Dive Into JavaScript And Learn Advanced Concepts And Techniques',
      users: 1200,
      cost: 180,
    },
    {
      cover: '7.jpg',
      instructor: 'team-02.png',
      name: 'Nancy White',
      title: 'Angular Development',
      description:
        'Become An Expert In Angular And Build Dynamic Web Applications',
      users: 950,
      cost: 220,
    },
    {
      cover: '8.jpg',
      instructor: 'team-03.png',
      name: 'David Black',
      title: 'React Essentials',
      description:
        'Learn The Fundamentals Of React And Start Building Interactive User Interfaces',
      users: 980,
      cost: 200,
    },
    {
      cover: '9.jpg',
      instructor: 'team-04.png',
      name: 'Sarah Lee',
      title: 'Vue.js For Beginners',
      description:
        'Get Started With Vue.js And Learn How To Build Modern Web Applications',
      users: 860,
      cost: 175,
    },
    {
      cover: '10.jpg',
      instructor: 'team-05.png',
      name: 'Emma Davis',
      title: 'Full-Stack Development',
      description:
        'Learn To Build Complete Web Applications From Front-End To Back-End',
      users: 1100,
      cost: 300,
    },
  ];
}
