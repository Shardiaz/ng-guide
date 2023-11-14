import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'slides-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export default class SettingsComponent {}
