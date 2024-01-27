import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent {
  public slides = [
    {
      src: 'https://media.istockphoto.com/id/1660911398/photo/aerial-view-of-hong-kong-financial-district-and-business-centers-at-victoria-island.jpg?s=1024x1024&w=is&k=20&c=mBXZW6l0G6SfF1VOlvGjMmvNes1wqXdg2cYhl-_J8Cw=',
    },
    {
      src: 'https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=1024x1024&w=is&k=20&c=6X3ZeDDU0juVtUv7W8rhL-O2tjA4itko7EP1czyruVo=',
    },
    {
      src: 'https://media.istockphoto.com/id/1660911398/photo/aerial-view-of-hong-kong-financial-district-and-business-centers-at-victoria-island.jpg?s=1024x1024&w=is&k=20&c=mBXZW6l0G6SfF1VOlvGjMmvNes1wqXdg2cYhl-_J8Cw=',
    },
    {
      src: 'https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=1024x1024&w=is&k=20&c=6X3ZeDDU0juVtUv7W8rhL-O2tjA4itko7EP1czyruVo=',
    },
  ];
}
