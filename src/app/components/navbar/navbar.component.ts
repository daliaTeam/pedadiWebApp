import { Component, OnInit } from '@angular/core';
import { NavbarService, Elements } from '../../services/localServices/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  elements: Elements[];

  constructor( private navbarService: NavbarService) {
    this.elements = this.navbarService.getNavbarElements();
   }

  ngOnInit(): void {
  }

}
