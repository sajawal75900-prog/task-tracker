import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidebar() {
    this.sidenav.toggle();
  }
}
