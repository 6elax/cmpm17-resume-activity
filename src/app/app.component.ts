import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-component',
  imports: [MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// export interface User {
//   name: string;
//   year: number;
//   major: string;
// }
// export const users: User[] = [
//   {
//     name: 'Alexis',
//     year: 1,
//     major: 'CS'
//   }
// ]

// export interface Skill {
//   title: string;
//   yearsExp: number;
//   desc: string; 
// }
// export const skills: Skill[] = [
//   {
//     title: 'asdf',
//     yearsExp: 4,
//     desc: 'paragraph'
//   },
//   {
//     title: 'student',
//     yearsExp: 10,
//     desc: 'learning'
//   }
// ]

export class AppComponent {
  title = 'cmpm17-resume-activity';

  name: string = "Alexis";
  
  year: number = 1;
  major: string = 'Computer Science';


  skills: string[] = [
      'asdf',
      'paragraph'
  ]



  
  
}
