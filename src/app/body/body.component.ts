import { Component, computed, inject, signal, Signal, WritableSignal } from '@angular/core';
import { Experience } from '../experience/experience.model';
import { Router } from '@angular/router';
import { EXPERIENCES } from '../experience/experience.mock';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-body',
  imports: [MatExpansionModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  //------------- UI COMPONENT NAME

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

  /** declare router object: */
  private router = inject(Router);




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

