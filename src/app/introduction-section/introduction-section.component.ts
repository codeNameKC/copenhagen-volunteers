import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction-section',
  templateUrl: './introduction-section.component.html',
  styleUrls: ['./introduction-section.component.scss']
})
export class IntroductionSectionComponent implements OnInit {

  imageUrls: (string)[] = [
    'http://cbssport.dk/wp-content/uploads/2014/03/Header-Voluntter-3.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0b/6a/69/f2/huset-kbh.jpg', 
    'http://ww1.prweb.com/prfiles/2014/07/30/12060775/volunteers.jpg', 
    'https://tibilog.files.wordpress.com/2012/11/hands-up.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
