import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import { Experience } from './experience/experience.model';
import { EXPERIENCES } from './experience/experience.mock';

@Component({
  selector: 'app-component',
  imports: [ MatExpansionModule ],
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


  /** Working experiences. */
  experiences: Experience[] = EXPERIENCES;

  /** Current user name. */
  currentName: WritableSignal<string> = signal('Jialai');

  // --------- COMPUTED DATA

  /** Select cmpm17 student info */
  cmpm17student: Signal<Experience|undefined> = computed( () => { 
    //need |undefined in case "cmpm17student" doesn't exist
    return this.experiences.find(
      //exp => exp.name == 'cmpm17-student'
      exp => exp.name == this.currentName()
    )
  } )

  
  
}
