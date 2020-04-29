import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/publicPages/home/home.component';
import { AboutComponent } from './pages/publicPages/about/about.component';
import { APP_ROUTING } from './app.routes';
import { GalleryComponent } from './pages/publicPages/gallery/gallery.component';
import { ContactUsComponent } from './pages/publicPages/contact-us/contact-us.component';
import { LoginComponent } from './pages/publicPages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactUsComponent,
    LoginComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
