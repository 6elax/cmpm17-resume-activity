import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { BodyComponent } from './body/body.component';

export const routes: Routes = [
    {path: 'page1', loadComponent:() => import('./body/body.component')
        .then((mod) => mod.BodyComponent) },
    {path: 'page2', loadComponent:() => import('./header/header.component')
        .then((mod) => mod.HeaderComponent) },
    {path: 'page3', loadComponent:() => import('./test-component/test-component.component')
        .then((mod) => mod.TestComponentComponent) },
        
];