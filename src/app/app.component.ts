import { Component } from '@angular/core';

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
    image: './assets/1.png',
  }, {
    id: 2,
    image: './assets/2.png',
  }, {
    id: 3,
    image: './assets/3.png',
  }, {
    id: 4,
    image: './assets/4.png',
  }, {
    id: 5,
    image: './assets/5.png',
  }, {
    id: 6,
    image: './assets/fall.png',
  }, {
    id: 7,
    image: './assets/home.png',
  }, {
    id: 8,
    image: './assets/2-1.png',
  }, {
    id: 9,
    image: './assets/2-2.png',
  }, {
    id: 10,
    image: './assets/2-3.png',
  }, {
    id: 11,
    image: './assets/5-2.png',
  }, {
    id: 12,
    image: './assets/5-2b.png',
  }, {
    id: 13,
    image: './assets/2-5.png',
  }, {
    id: 14,
    image: './assets/3-1.png',
  }, {
    id: 15,
    image: './assets/3-2.png',
  }, {
    id: 16,
    image: './assets/3-3.png',
  }, {
    id: 17,
    image: './assets/3-3a.png',
  }, {
    id: 18,
    image: './assets/3-4.png',
  }
]

}