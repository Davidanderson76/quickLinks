import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent {
  public slides = [
    {
      src: '../../../assets/images/01HFJQ0JXZVF7YEC4R46PE0G0C-hi-res-branded.jpg',
    },
    {
      src: '../../../assets/images/07B9B084-DB4B-40FD-9077-DB9896631CA9.JPG',
    },
    {
      src: '../../../assets/images/IMG_2808.jpg',
    },
    {
      src: '../../../assets/images/16FE3ABE-AF45-4196-A455-4FB343D6F25E.JPG',
    },
    {
      src: '../../../assets/images/SUMMER!.jpg',
    },
    {
      src: '../../../assets/images/IMG_3365.jpg',
    },
  ];

  emailSupport() {
    location.href =
      "mailto:david.anderson1993@gmail.com?subject='Connect'&body='write some message'";
  }
  instagram() {
    location.href = 'https://www.instagram.com/davidandersoncreative/';
  }
}
