import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-yearly-targets',
  templateUrl: './yearly-targets.component.html',
  styleUrls: ['./yearly-targets.component.scss'],
})
export class YearlyTargetsComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.From_ZERO_TO_TOP();
  }
  ngOnInit(): void {}
  @ViewChild('target') target!: ElementRef;
  grow_smozzy = false;
  details = [
    {
      icon: 'fa-dollar-sign',
      color: 'blue',
      title: 'Money',
      value: '$20,000',
      progress: 40,
    },
    {
      icon: 'fa-user',
      color: 'green',
      title: 'Clients',
      value: '2',
      progress: 75,
    },
    {
      icon: 'fa-code',
      color: 'orange',
      title: 'Projects',
      value: '6',
      progress: 55,
    },
  ];

  From_ZERO_TO_TOP() {
    const skillSecOffsetTop = this.target.nativeElement.offsetTop;
    window.addEventListener('scroll', () => {
      if (window.scrollY >= skillSecOffsetTop) {
        if (!this.grow_smozzy) {
          this.details.forEach((stat) => {
            const target = stat.progress;
            stat.progress = 0;

            let interval = setInterval(() => {
              stat.progress++;
              if (stat.progress >= target) {
                clearInterval(interval);
                // window.removeEventListener('scroll', () => {
                //   clearInterval(interval);
                // });
              }
            }, 200); //to end in the same time
          });
        }
      }
      this.grow_smozzy = true;
    });
  }
}
