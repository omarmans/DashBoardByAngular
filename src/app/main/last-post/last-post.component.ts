import { Component } from '@angular/core';

@Component({
  selector: 'app-last-post',
  templateUrl: './last-post.component.html',
  styleUrls: ['./last-post.component.scss'],
})
export class LastPostComponent {
  react_bol = false;
  react() {
    this.react_bol = !this.react_bol;
  }
}
