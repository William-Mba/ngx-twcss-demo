import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Badge,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  PrimaryButton,
  SecondaryButton,
  SoftButton,
} from 'ngx-twcss';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PrimaryButton,
    SecondaryButton,
    SoftButton,
    ButtonGroup,
    Dropdown,
    DropdownItem,
    Badge,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'demo';
  text = '';

  showText() {
    this.text = 'Text';
  }

  resetText() {
    this.text = '';
  }
}
