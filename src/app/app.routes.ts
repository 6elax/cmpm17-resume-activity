import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { BodyComponent } from './body/body.component';

export const routes: Routes = [
    { path: 'home', loadComponent:() => import('./body/body.component')
        .then((mod) => mod.BodyComponent) },
    { path: 'page2', loadComponent:() => import('./courses/courses.component')
        .then((mod) => mod.CoursesComponent) },
    { path: 'page3', loadComponent:() => import('./test-component/test-component.component')
        .then((mod) => mod.TestComponentComponent) },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];