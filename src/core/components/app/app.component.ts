import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoggerService } from '../../services/logger.service';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ThemeSwitcherComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-client';

  constructor(private loggerService: LoggerService) {
    this.loggerService.disableConsoleInProduction();
  }
}
