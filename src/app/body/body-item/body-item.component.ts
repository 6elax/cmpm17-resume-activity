import { Component, input } from '@angular/core';
import { Experience } from '../../experience/experience.model';

@Component({
  selector: 'app-body-item',
  imports: [],
  templateUrl: './body-item.component.html',
  styleUrl: './body-item.component.scss'
})
export class BodyItemComponent {

  user = input<Experience>();

}
