import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private elementos: Elements[] = [
    {
      nombre: 'Inicio',
      url: '/home'
    },
    {
      nombre: 'Acerca de',
      url: '/about'
    },
    {
      nombre: 'Galeria',
      url: '/'
    },
    {
      nombre: 'Contáctanos',
      url: '/'
    },
    {
      nombre: 'Inicia sesión',
      url: '/'
    }
  ];

  constructor() { }

  getNavbarElements() {
    return this.elementos;
  }
}

export interface Elements {
  nombre: string;
  url: string;
}
