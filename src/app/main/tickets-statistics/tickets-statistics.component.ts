import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tickets-statistics',
  templateUrl: './tickets-statistics.component.html',
  styleUrls: ['./tickets-statistics.component.scss'],
})
export class TicketsStatisticsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.From_ZERO_TO_TOP();
  }

  @ViewChild('ticket') ticket!: ElementRef;

  grow_smozzy = false;
  ticketStats = [
    {
      icon: 'fa-regular fa-rectangle-list',
      color: 'orange',
      count: 2500,
      label: 'Total',
    },
    {
      icon: 'fa-solid fa-spinner',
      color: 'blue',
      count: 500,
      label: 'Pending',
    },
    {
      icon: 'fa-regular fa-circle-check',
      color: 'green',
      count: 1900,
      label: 'Closed',
    },
    {
      icon: 'fa-regular fa-rectangle-xmark',
      color: 'red',
      count: 100,
      label: 'Deleted',
    },
  ];
  From_ZERO_TO_TOP() {
    const skillSecOffsetTop = this.ticket.nativeElement.offsetTop;
    window.addEventListener('scroll', () => {
      if (window.scrollY >= skillSecOffsetTop) {
        if (!this.grow_smozzy) {
          this.ticketStats.forEach((stat) => {
            const target = stat.count;
            stat.count = 0;

            let interval = setInterval(() => {
              stat.count++;
              if (stat.count >= target) {
                clearInterval(interval);
                // window.removeEventListener('scroll', () => {
                //   clearInterval(interval);
                // });
              }
            }, 1000 / target); //to end in the same time
          });
        }
        this.grow_smozzy = true;
      }
    });
  }
}
