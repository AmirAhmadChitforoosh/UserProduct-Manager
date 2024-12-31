import { Component, Input } from '@angular/core';
import { NavbarProp } from '../../model/navbarProp.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  imports: [RouterModule , CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input()
  navbarProperties:NavbarProp[] = [];



}
