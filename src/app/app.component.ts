import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'modal';

  isClicked: boolean = false;
  imgSrc: string = '';
  //  global
  open(src: string) {
    console.log(src);
    this.imgSrc = src;
    this.isClicked = true;
  }
  close() {
    this.isClicked = false;
  }
}
