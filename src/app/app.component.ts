import { Component, VERSION } from '@angular/core';

interface Slide {
  id: number,
  image: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  title = 'slides';

  slides: Slide[] = [{
    id: 1,
    image: '/assets/0.png',
  }, {
    id: 2,
    image: '/assets/2.png',
  }, {
    id: 3,
    image: '/assets/3.png',
  }, {
    id: 4,
    image: '/assets/4.png',
  }, {
    id: 5,
    image: '/assets/5.png',
  }, {
    id: 6,
    image: '/assets/6.png',
  }, {
    id: 7,
    image: '/assets/7.png',
  }, {
    id: 8,
    image: '/assets/8.png',
  }, {
    id: 9,
    image: '/assets/0.png',
  }, {
    id: 10,
    image: '/assets/10.png',
  }]

}