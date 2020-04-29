import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/publicPages/home/home.component';
import { AboutComponent } from './pages/publicPages/about/about.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},

];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES, { scrollPositionRestoration: 'enabled' } );
