import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/publicPages/home/home.component';
import { AboutComponent } from './pages/publicPages/about/about.component';
import { GalleryComponent } from './pages/publicPages/gallery/gallery.component';
import { ContactUsComponent } from './pages/publicPages/contact-us/contact-us.component';
import { LoginComponent } from './pages/publicPages/login/login.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contactUs', component: ContactUsComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' },
    { path: ' ', redirectTo: '/home', pathMatch: 'full'},

];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES, { scrollPositionRestoration: 'enabled' } );
